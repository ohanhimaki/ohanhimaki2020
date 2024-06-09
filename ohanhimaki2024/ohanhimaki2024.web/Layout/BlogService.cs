using Microsoft.AspNetCore.Hosting;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

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
        var lines = response.Split('\n');
        return new List<string>(lines.Where(x => !string.IsNullOrWhiteSpace(x)));
    }

    public async Task<string> GetBlogPostContentAsync(string postName)
    {
        return await _httpClient.GetStringAsync($"posts/{postName}.md");
    }
}