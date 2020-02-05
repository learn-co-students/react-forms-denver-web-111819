import React, { Component } from 'react'
import Form from "./Form"
import DisplayData from './DisplayData'

export default class ParentComponent extends Component {

    state = {
        firstName: "John",
        lastName: "Henry",
        submittedData: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = {
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
    }

    listOfSubmissions = () => {
        return this.state.submittedData.map((data, index) => {
            return <DisplayData formData={this.state} key={index}/>
        })
    }


    render() {
        return (
            <div>
                <Form 
                    formData={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    listOfSubmissions={this.listOfSubmissions}
                />
            </div>
        )
    }
}
