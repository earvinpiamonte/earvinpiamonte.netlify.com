import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      easterEggKeyTriggerCount: 0
    };

    this.easterEggKeyTrigger = this.easterEggKeyTrigger.bind(this);
  }

  easterEggKeyTrigger(event) {
    if (event.which === 82) {

      this.setState((prevState) => (
        {
          easterEggKeyTriggerCount: prevState.easterEggKeyTriggerCount + 1
        }
      ));

      if (this.state.easterEggKeyTriggerCount === 4) {document.addEventListener('keyup', this.easterEggKeyTrigger);
        this.setState({
          easterEggKeyTriggerCount: 0
        });
        alert('You found an easter egg!\nThe letter is R.');
      }

      console.log(this.state.easterEggKeyTriggerCount);
    }
  }

  componentDidMount() {
    document.addEventListener('keyup', this.easterEggKeyTrigger);

  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.easterEggKeyTrigger);
  }

  render(){
    return(
      <div>
        <SEO title="Home" keywords={[`website developer`, `baguio`, `philippines`]} />
        <div>
          <div style={{ marginBottom: '5rem' }}>
            <h1>Noel Earvin Piamonte</h1>
            <p className="p-container">
              Website Developer for <a href="http://bentacos.com" target="_blank">Bentacos</a>, previously an independent at <a href="https://www.freelancer.com/u/earvinpiamonte" target="_blank">Freelancer.com</a>.
          </p>
          <p style={{marginTop: '2rem'}}>
              <a href="https://www.freelancer.com/u/earvinpiamonte#profile-portfolio" target="_blank" title="View previous projects">
                <small>Previous projects</small>
              </a>
              <span style={{marginRight: '1rem', marginLeft: '1rem'}}>
                |
              </span>
              <a href="https://drive.google.com/file/d/1e4GfYipBr3DJPYOqe-CxFSns0UoxIiH6/view" target="_blank" title="View Résumé">
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
