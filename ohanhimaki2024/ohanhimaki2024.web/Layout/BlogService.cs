using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using ohanhimaki2024.web.Layout;

public class BlogService
{
    private readonly HttpClient _httpClient;

    public BlogService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<string>> GetBlogPostsAsync()
    {
        var response = await _httpClient.GetStringAsync("posts/index.txt");
        var lines = response.Split('\n').Select(x => x.Replace("\r", string.Empty));
        return new List<string>(lines.Where(x => !string.IsNullOrWhiteSpace(x)));
    }

    public async Task<List<BlogPost>> GetBlogPostContentsAsync()
    {
        var postNames = await GetBlogPostsAsync();
        var posts = new List<BlogPost>();
        foreach (var postName in postNames)
        {
            try
            {
                var post = await GetBlogPostContentAsync(postName);
                posts.Add(post);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }

        return posts;
    }

    // public async Task<string> GetBlogPostContentAsync(string postName)
    // {
    //     return await _httpClient.GetStringAsync($"posts/{postName}.md");
    // }
    public async Task<BlogPost> GetBlogPostContentAsync(string postName)
    {
        var path = $"posts/{postName}.md";
        var markdown = await _httpClient.GetStringAsync(path);

        // Split the markdown file into metadata and content
        var parts = Regex.Split(markdown, @"---\r?\n");
        if (parts.Length < 3)
        {
            throw new FormatException("Invalid blog post format.");
        }

        var metadata = parts[1];
        var content = parts[2];

        // Parse the metadata
        var blogPost = new BlogPost
        {
            Content = Markdig.Markdown.ToHtml(content),
            Filename = postName
        };

        var metadataLines = metadata.Split('\n', StringSplitOptions.RemoveEmptyEntries);
        foreach (var line in metadataLines)
        {
            var keyValue = line.Split(':', 2);
            if (keyValue.Length == 2)
            {
                var key = keyValue[0].Trim();
                string value = keyValue[1].Trim().Trim('"');

                switch (key)
                {
                    case "path":
                        blogPost.Path = value;
                        break;
                    case "date":
                        if (DateTime.TryParse(value, out var date))
                        {
                            blogPost.Date = date;
                        }

                        break;
                    case "title":
                        blogPost.Title = value;
                        break;
                    case "tags":
                        blogPost.Tags = JsonSerializer.Deserialize<List<string>>(value);
                        break;
                    case "excert":
                        blogPost.Excerpt = value;
                        break;
                    case "repo":
                        blogPost.Repo = value;
                        break;
                }
            }
        }

        return blogPost;
    }

    public async Task<List<GitHubCommit>> GetCommitsAsync(string blogPostRepo)
    {
        try
        {
            // useEffect(() => {
            //     fetch("https://api.github.com/repos/" + repo + "/commits")
            //       .then(result => result.json())
            //       .then(data => {
            //         if (data.length > 0) {
            //           data = data.slice(0, 10)
            //           setAllCommits(data)
            //         }
            //       })
            //   }, [])
            var response = await _httpClient.GetStringAsync($"https://api.github.com/repos/{blogPostRepo}/commits");
            // if 404, return empty list
            if (response.Contains("Not Found"))
            {
                return new List<GitHubCommit>();
            }

            var commits = JsonSerializer.Deserialize<List<GitHubCommit>>(response);
            return commits;
        }
        catch (HttpRequestException e)
        {
            if(e.StatusCode == HttpStatusCode.NotFound)
            {
                return new List<GitHubCommit>();
            }
            else
            {
                throw;
            }
        }
    }
}