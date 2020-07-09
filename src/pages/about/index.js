import React from 'react'
import Layout from '../../components/Layout'


export const AboutPageTemplate = ({ title }) => {

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const AboutPage = () => {
  return (
    <AboutPageTemplate title="about" />
  )
}

export default AboutPage