import React from "react"
import Layout from "../components/layout"
import "../styles/global.css"
import * as cheerio from "cheerio"

export default ({ data }) => {
    
  
  const checklist = data.markdownRemark
  const $ = cheerio.load(checklist.html)

  let lists = checklist.html.replace(/disabled/g, '/')
  
  return (
  <Layout>
      <div dangerouslySetInnerHTML={{ __html: lists }} />
  </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`