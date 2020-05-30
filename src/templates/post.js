import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Helmet } from "react-helmet"
//import Layout from "../layouts"

var PostTemplate = props => {
  const post = props.pageContext.pagedata

  // @TODO: STEP #5: Use title and content in Gatsby.
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,300,400,500,600,700,800,900|Open+Sans:100,200,300,400,500,600,700,800,900"
          media="all"
        />
      </Helmet>
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  )
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

// @TODO: STEP #4: Get current WP Post data via ID.
// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPost(id: { eq: $id }) {
//       title
//       content
//     }
//   }
// `
