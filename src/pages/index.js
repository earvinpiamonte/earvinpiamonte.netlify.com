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
        alert('You found an easter egg!\nR.V.C.');
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
              I develop websites for <a href="https://bentacos.com" target="_blank">Bentacos</a>, previously an independent website developer at <a href="https://www.freelancer.com/u/earvinpiamonte" target="_blank">Freelancer.com</a>.
            </p>
            <p style={{marginTop: '2rem'}}>
                <a href="https://drive.google.com/file/d/1co2TEPaCSbSyCceYOi84pGphIKV4_seB/view" target="_blank" class="site-btn" title="View Résumé">
                  <small>View Résumé</small>
                </a>
            </p>
            <p style={{ color: '#000' }}>
              R.V.C.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage
