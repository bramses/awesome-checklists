import React from "react"
import Layout from "../components/layout"
import "../styles/global.css"

export default ({ data }) => {
    const checklist = data.markdownRemark
    const lists = checklist.html
    // lists.getElementsByClassName('task-list-item').disabled = false
    console.log(lists)
    return (
    <Layout>
        <h1>Checklist Title</h1>
        <div dangerouslySetInnerHTML={{ __html: checklist.html }} />
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