import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    input: {
        margin: theme.spacing.unit
    }
});

class Form extends Component {

    state = {
        name: "",

        description: "",

        type: "",

        creator: "",

        city: "",

        roadNumber: "",

        streetName: "",

        date: "",

        hour: "",
    };

    handleChange1 = event => {
        this.setState({
            name: event.target.value
        });
    };

    handleChange2 = event => {
        this.setState({
            description: event.target.value
        });
    };

    handleChange3 = event => {
        this.setState({
            type: event.target.value
        });
    };

    handleChange4 = event => {
        this.setState({
            creator: event.target.value
        });
    };

    handleChange5 = event => {
        this.setState({
            city: event.target.value
        });
    };

    handleChange6 = event => {
        this.setState({
            roadNumber: event.target.value
        });
    };

    handleChange7 = event => {
        this.setState({
            streetName: event.target.value
        });
    };

    handleChange8 = event => {
        this.setState({
            date: event.target.value
        });
    };

    handleChange9 = event => {
        this.setState({
            hour: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const dto = {

            name: this.state.name,

            description: this.state.description,

            type: this.state.type,

            creator: this.state.creator,

            city: this.state.city,

            roadNumber: this.state.roadNumber,

            streetName: this.state.streetName,

            date: this.state.date,

            hour: this.state.hour
        };

        Axios({
            method: "post",
            url: "http://localhost:8082/mtd/eventform/createdto",
            data: dto,
            config: { headers: { "Content-Type": "application/json" } }
        })
            .then(function (response) {
                //handle success
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                {

                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Event Form
						<input type="text" name="name" onChange={this.handleChange1} />
                            <input type="text" name="description" onChange={this.handleChange2} />
                            <input type="text" name="type" onChange={this.handleChange3} />
                            <input type="text" name="creator" onChange={this.handleChange4} />
                            <input type="text" name="city" onChange={this.handleChange5} />
                            <input type="text" name="roadNumber" onChange={this.handleChange6} />
                            <input type="text" name="streetName" onChange={this.handleChange7} />
                            <input type="text" name="date" onChange={this.handleChange8} />
                            <input type="text" name="hour" onChange={this.handleChange9} />

                        </label>
                        <button type="submit"
                        >Add</button>
                    </form>
                }
            </div>
        )
    };
}

export default withStyles(styles)(Form);
