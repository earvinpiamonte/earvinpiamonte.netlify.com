import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Page not found" />
    <div>
      <div style={{ marginBottom: '5rem' }}>
        <h1 style={{ textAlign: 'center' }}>Page not found</h1>
        <p style={{ marginTop: '2rem' }}>
          <a href="/" className="site-btn">
            <small>Go to home page</small>
          </a>
        </p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
