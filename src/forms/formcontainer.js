

import React from "react";
import Formcomponent from "./formcomponent"; 
 
class Form1 extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isBag: false,
            isFood: false,
            isPolythene: false,
            isIron: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({
            [name]: checked
        })

            :

            this.setState({ [name]: value })
    }
    render() {
        return(
            <Formcomponent
            handleChange={this.handleChange}
            data={this.state}
            // firstName={this.state.firstName}
            // lastName={this.state.lastName}
            // age={this.state.age}
            // gender={this.state.gender}
            // destination={this.state.destination}
            // isBag={this.state.isBag}
            // isFood={this.state.isFood}
            // isIron={this.state.isIron}
            // isPolythene={this.state.isPolythene}
            />   
        )
 	
    }
}


export default Form1;