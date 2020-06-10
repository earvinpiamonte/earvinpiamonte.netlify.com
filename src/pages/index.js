import React from "react";
import ReactGA from "react-ga";

import SEO from "../components/seo";
import "../components/layout.css";
class IndexPage extends React.Component {
  initializeReactGA() {
    ReactGA.initialize("UA-50697157-1");
    ReactGA.pageview("/home");
  }

  render() {
    return (
      <div>
        <SEO
          title="Website and React Native Developer"
          keywords={[
            `website`,
            `software`,
            `independent developer`,
            `baguio`,
            `philippines`,
          ]}
        />
        <div>
          <div style={{ marginBottom: "5rem" }}>
            <h1>Noel Earvin Piamonte</h1>
            <p className="p-container">
              I&apos;m an Independent Website and React Native Developer at
              <a
                href="https://www.freelancer.com/u/earvinpiamonte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Freelancer.com
              </a>
              I also work as a Senior Web Developer for
              <a
                href="https://bentacos.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bentacos
              </a>
              since December, 2018 .
            </p>
            <p style={{ marginTop: "2rem" }}>
              <a
                href="https://drive.google.com/open?id=1fyKTOnutzM3Ke5pFpzto0L1FQYeXeVBp"
                target="_blank"
                rel="noopener noreferrer"
                className="site-btn"
              >
                <small>View Résumé</small>
              </a>
            </p>
          </div>
        </div>
        {this.initializeReactGA()}
      </div>
    );
  }
}

export default IndexPage;
