import React from 'react';
import { graphql } from 'gatsby';
//import { isTemplateLiteral } from 'typescript';

export default ({data}) => {
    console.log("data");
    return (
        <div>
            <div>{data.allContentfulAllContentfulBlogPost.edges[0].node.title}</div>
            <div>{data.allContentfulAllContentfulBlogPost.edges[1].node.title}</div>
            <div>{data.allContentfulAllContentfulBlogPost.edges.map(item=>{return <p>
             <li> title: { item.node.title}</li>
             <li> slug:  {item.node.slug}</li>
             <li> body: {item.node.body}</li>
             <li> publishTime: {item.node.publishTime}</li>
              
              
              
            </p> })}</div>
        </div>
    );
}


export const query = graphql`
  query {
    allContentfulAllContentfulBlogPost {
        edges {
          node {
            title
            slug
            body
            publishTime
          }
        }
      }
  }
`