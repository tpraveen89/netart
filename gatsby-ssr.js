/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <script src="https://netart.netart.a2hosted.com/wp-includes/js/jquery/jquery.js?ver=1.12.4-wp"></script>,
    <script src="https://netart.netart.a2hosted.com/wp-includes/js/hoverintent-js.min.js?ver=2.2.1"></script>,
    <script src="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/unslider-min.js?ver=5.4.1"></script>,
    <script src="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.move.js?ver=5.4.1"></script>,
    <script src="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.swipe.js?ver=5.4.1"></script>,
    //<script src="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.move.js?ver=5.4.1"></script>,
    //<script src="https://netart.netart.a2hosted.com/wp-content/plugins/oxygen/component-framework/vendor/unslider/jquery.event.swipe.js?ver=5.4.1"></script>,
  ])
}
