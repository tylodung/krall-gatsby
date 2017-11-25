import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import './index.css'

const TemplateWrapper = ({ children, data }) => (
  <div id="container">
    <Helmet
      title="Zach Krall"
      meta={[
        { name: 'description', content: 'Zach Krall is a visual artist and creative technologist based in New York City.' },
        { name: 'msapplication-config', content: '/assets/browserconfig.xml' },
        { name: 'theme-color', content: '#ffffff' }
      ]}
      link={[
        { rel: 'apple-touch-icon', size: '180x180', href: '/assets/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', size: '32x32', href: '/assets/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', size: '16x16', href: '/assets/favicon-16x16.png' },
        { rel: 'manifest', href: '/assets/manifest.json' },
        { rel: 'mask-icon', href: '/assets/safari-pinned-tab.svg', color: '#444444' },
        { rel: 'shortcut icon', href: '/assets/favicon.ico' }
      ]}
    />
    <header>
    <div className="headerWrapper">
      <h1 itemprop="name">
        <Link to="/" style={{ border: 0 }}>Zach Krall</Link>
      </h1>
      <div>
        <Link to="/info">Information</Link>
      </div>
    </div>
    </header>

    <div id="content" style={{ margin: '0 auto 6rem auto' }}>
      {children()}
    </div>

    <div id="navigation">

      {data.allMarkdownRemark.edges.map(({ node }) =>
      <Link to={node.fields.slug}>  <div key={node.id}>

            {node.frontmatter.title}{", "}{node.frontmatter.date}

        </div></Link>
      )}
    </div>

    <footer>

    <ul className="inline">
      <li><a href="mailto:zach@zachkrall.com">zach@zachkrall.com</a></li>
    </ul>

    <ul className="inline">
      <li><a href="https://twitter.com/zachkrall">Twitter</a></li>
      <li><a href="https://instagram.com/zachkrall">Instagram</a></li>
      <li><a href="https://github.com/zachkrall">GitHub</a></li>
      <li><a href="https://are.na/zach-krall">Are.na</a></li>
      <li><a href="https://keybase.io/zachkrall/">Keybase</a></li>
    </ul>
    </footer>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
