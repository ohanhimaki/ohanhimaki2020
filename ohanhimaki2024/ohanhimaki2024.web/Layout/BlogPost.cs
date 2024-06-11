using System;
using System.Collections.Generic;

public class BlogPost
{
    public string Filename { get; set; }
    public string Path { get; set; }
    public DateTime Date { get; set; }
    public string Title { get; set; }
    public List<string> Tags { get; set; }
    public string Excerpt { get; set; }
    public string Repo { get; set; }
    public string Content { get; set; }
}

