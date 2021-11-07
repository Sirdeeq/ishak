import React from "react";
import Form1 from "./formcontainer";
// First name (text input)
// Last name (text input)
// Age (number input)
// Gender (radio buttons with 2 or more options)
// Location they're traveling to (select box with at least 3 options. You're an airline that doesn't fly to many places...)
// Whether they have any dietary restrictions (check boxes for vegetarian, kosher, lactose free, etc. Include at least 3 options)
class App extends React.Component {
    render(){
        return(
            <div>
                 <Form1 />
            </div>
        )
    }
}

export default App;    