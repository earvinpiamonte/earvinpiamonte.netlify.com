import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`website developer`, `baguio`, `philippines`]} />
    <div>
      <div style={{ marginBottom: '5rem' }}>
        <h1>Noel Earvin Piamonte</h1>
        <p className="p-container">
          I build websites for <a href="http://bentacos.com" target="_blank">Bentacos</a> and recently into mobile app development.
          </p>
      </div>
    </div>
  </div>
)

export default IndexPage
