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

    document.addEventListener('keyup', (event) => {
      if (event.which === 82) {

        this.setState((prevState) => (
          {
            easterEggKeyTriggerCount: prevState.easterEggKeyTriggerCount + 1
          }
        ));

        if (this.state.easterEggKeyTriggerCount === 4) {
          this.setState({
            easterEggKeyTriggerCount: 0
          });
          alert('You found an easter egg!\nThe letter is R.');
        }

        console.log(this.state.easterEggKeyTriggerCount);
      }
    });

  }

  render(){
    return(
      <div>
        <SEO title="Home" keywords={[`website developer`, `baguio`, `philippines`]} />
        <div>
          <div style={{ marginBottom: '5rem' }}>
            <h1>Noel Earvin Piamonte</h1>
            <p className="p-container">
              I&apos;m currently living in Mandaluyong City and working as a Web Developer for <a href="http://bentacos.com" target="_blank">Bentacos</a>.
          </p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage
