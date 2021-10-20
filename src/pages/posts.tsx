import React from "react"

import "../../tailwindcss/tailwind.src.css"
import Layout from "../shared/layout"
import SEO from "../shared/seo"
import {graphql, useStaticQuery} from "gatsby"
import PostPreview, {Post} from "../my-posts/post-preview"
import IgPostPreview, {IgPost} from "../igPost/igPostPreview";


interface PostContainer {
    source: number;
    date: Date;
    post?: Post;
    igPost?: IgPost;
    
}

const PostsPage = () => {
    const data = useStaticQuery(graphql`
    {
      __typename
      allMarkdownRemark(
        filter: {}
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              date
              tags
              excert
              path
            }
          }
        }
      }
    }
  `)
    const postPreviews = data.allMarkdownRemark.edges
    let feedData = postPreviews.map((x:Post) => {return {
    source: 0,
    date: new Date(x.node.frontmatter.date),
    post: x,
    igPost: null,
    } });
         feedData = feedData.sort((a:PostContainer,b:PostContainer) =>  a.date > b.date ? -1:1);
       feedData.forEach((x:PostContainer) => console.log(x.date));
    return (
        <Layout>
            <SEO title="Posts"/>
            <div className="flex flex-wrap max-w-6xl m-auto">
                {feedData.map((value: PostContainer, index: number) => {

                    if(value.source === 0 && value.post ){
                    return <PostPreview post={value.post} key={index}></PostPreview>
                        
                    }
                    if(value.source === 1 && value.igPost ){
                        return <IgPostPreview post={value.igPost} key={index}></IgPostPreview>

                    }
                })}
            </div>
        </Layout>
    )
}
export function SecondsToDate(seconds: number){
    return (new Date(seconds*1000));
}

export default PostsPage
