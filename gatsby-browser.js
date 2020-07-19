const React = require('react')
const Layout = require('./src/components/Layout').default

exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}