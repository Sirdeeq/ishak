import React from "react";


class App extends React.Component { 
  constructor() {
    super() 
    this.state={
      loading:false,
      character:{}
    }
  }

  componentDidMount(){
      this.setState({
        loading:true
      })
    fetch("https://swapi.dev/api/people/1")
        .then(response => response.json())
        .then(data => {
          this.setState({
            loading:false,
            character:data
          })
        })

  }
  render(){
    return(
      <div>
       <h6>{this.state.loading ? "Loading..........": this.state.character.name }</h6>
      </div>
    )
  }
}

export default App;
