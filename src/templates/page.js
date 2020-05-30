import { graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
//import Layout from "../layouts"

var PageTemplate = props => {
  const page = props.pageContext.pagedata
  console.log(props)
  /*useEffect(() => {
    console.log("didmount")
    /*var script = document.createElement("script")

    script.src =
      "https://netart.netart.a2hosted.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp"
    script.async = true

    document.body.appendChild(script) var scripts = [
      "https://netart.netart.a2hosted.com/wp-includes/js/hoverintent-js.min.js?ver=2.2.1",
      "https://netart.netart.a2hosted.com/wp-includes/js/admin-bar.min.js?ver=5.4.1",
      "https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/unslider-min.js?ver=5.4.1",
      "https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.move.js?ver=5.4.1",
      "https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.swipe.js?ver=5.4.1",
      "http://127.0.0.1:5500/test.js",
    ]
    scripts.forEach(x => {
      var script = document.createElement("script")

      script.src = x
      //script.async = true
      // script.defer = true

      document.body.appendChild(script)
    })
  }, [])*/
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
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-includes/css/dashicons.min.css?ver=5.4.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-includes/css/dist/block-library/style.min.css?ver=5.4.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/oxygen.css?ver=3.0"
          media="all"
        />
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-content/uploads/oxygen/css/main-11.css?cache=1590828500&ver=5.4.1"
          media="all"
        />

        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href={`https://netart.netart.a2hosted.com/wp-content/uploads/oxygen/css/${page.slug}-${page.wordpress_id}.css`}
          media="all"
        />

        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-content/uploads/oxygen/css/universal.css?cache=1590828505&ver=5.4.1"
          media="all"
        />
        <link
          rel="stylesheet"
          id="twentyseventeen-block-style-css"
          href="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/unslider.css"
          media="all"
        />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: page.content }} />
    </>
  )
}

export default PageTemplate

// @TODO: STEP #4: Get current WP Post data via ID.
// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       id
//       slug
//     }
//   }
// `
