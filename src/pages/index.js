import React from "react"
import SEO from "../components/seo"

class IndexPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SEO title="Website Developer" keywords={[`website developer`, `baguio`, `philippines`]} />
        <div>
          <div style={{ marginBottom: '5rem' }}>
            <h1>Noel Earvin Piamonte</h1>
            <p className="p-container">
              I develop websites for <a href="https://bentacos.com/" target="_blank">Bentacos</a>. Previously, I&apos;m an independent website developer at <a href="https://www.freelancer.com/u/earvinpiamonte/" target="_blank">Freelancer.com</a>.
            </p>
            <p style={{ marginTop: '2rem' }}>
              <a href="https://drive.google.com/open?id=1fyKTOnutzM3Ke5pFpzto0L1FQYeXeVBp" target="_blank" class="site-btn">
                <small>View Résumé</small>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage
