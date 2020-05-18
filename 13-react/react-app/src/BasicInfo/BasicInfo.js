//Need to import react
import React, { Component } from 'react';
import './BasicInfo.css';


class BasicInfo extends Component {
    render() {
        return (
            <ul>
                {this.props.person.map(info => (
                    <div className="person">
                        <li>Name: {info.Name}</li>
                        <li>Phone: {info.Phone}</li>
                        <li>Date of Birth: {info.DOB}</li>
                    </div>
                ))}
            </ul>
        )
    }
}

export default BasicInfo;