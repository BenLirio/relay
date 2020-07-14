const React = require('react')
const Layout = require('./src/components/Layout').default
const styles = require('@material-ui/core/styles')
const { CssBaseline } = require('@material-ui/core')
const ServerStyleSheets = styles.ServerStyleSheets

const sheets = new ServerStyleSheets()
const css = sheets.toString()
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents, getPostBodyComponents }) => {
  const headComponents = getHeadComponents()
  console.log(headComponents)
  replaceHeadComponents(headComponents)
}
exports.wrapPageElement = ({ element, props }) => {
  return <Layout>{element}</Layout>
}
