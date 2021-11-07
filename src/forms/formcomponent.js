import react from "react";
import { FormGroup, Label, Input, Button } from "reactstrap"


function Formcomponent(props) {
    return (
        <main>
            <form >
                <div className="d-flex justify-content-between m-3">
                    <input
                        name="firstName"
                        value={props.data.firstName}
                        onChange={props.handleChange}
                        placeholder="First Name" />
                    <br />
                    <input
                        name="lastName"
                        value={props.data.lastName}
                        onChange={props.handleChange}
                        placeholder="Last Name" />
                    <br />
                    <input
                        name="age"
                        value={props.data.age}
                        onChange={props.handleChange}
                        placeholder="Age" />

                    <br />
                </div>
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="Male"
                        onChange={props.handleChange}
                        checked={props.data.gender === "Male"}
                    /> Male
                </label>
                <label>
                    <input
                        name="gender"
                        type="radio"
                        value="Female"
                        onChange={props.handleChange}
                        checked={props.data.gender === "Female"}
                    /> Female
                </label>
                <br />
                <FormGroup >
                    <Label >Destination</Label>
                    <Input
                        type="select"
                        name="destination"
                        value={props.data.destination}
                        onChange={props.handleChange}
                    >
                        <option value="select">-- please choose a destination --</option>
                        <option value="india">India</option>
                        <option value="nigeria">Nigeria</option>
                        <option value="niger">Niger</option>
                        <option value="saudi arabia">Saudi Arabia</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="swizerland">Swizerland</option>
                    </Input>
                </FormGroup>

                <br />
                <FormGroup check >
                    <Label check>
                        <Input
                            name="isBag"
                            checked={props.data.isBag}
                            onChange={props.handleChange}
                            type="checkbox" /> Bag
                    </Label>
                    <br />
                    <Label check>
                        <Input
                            name="isFood"
                            checked={props.data.isFood}
                            onChange={props.handleChange}
                            type="checkbox" /> Food
                    </Label>
                    <br />
                    <Label check>
                        <Input
                            name="isIron"
                            checked={props.data.isIron}
                            onChange={props.handleChange}
                            type="checkbox" /> Iron
                    </Label>
                    <br />
                    <Label check>
                        <Input
                            name="isPolythene"
                            checked={props.data.isPolythene}
                            onChange={props.handleChange}
                            type="checkbox" /> Polythene
                    </Label>
                    <br />
                </FormGroup>
                <br />
                <Button className="bg-primary">Submit</Button>
                <hr />
            </form>
            <h1>  Entered Information: </h1>
            <h3> Your Name: {props.data.firstName} {props.data.lastName} </h3>
            <h3> Your Age: {props.data.age} </h3>
            <h3> Your Gender: {props.data.gender} </h3>
            <h3> Your Destination: {props.data.destination} </h3>
            <h3> Your Dietary Restrictions: <br />
                Bag: {props.data.isBag ? "yes" : "no"}
                <br />
                Food: {props.data.isFood ? "yes" : "no"}
                <br />
                Iron: {props.data.isIron ? "yes" : "no"}
                <br />
                Polythene: {props.data.isPolythene ? "yes" : "no"}
            </h3>

        </main>
    )
}


export default Formcomponent;