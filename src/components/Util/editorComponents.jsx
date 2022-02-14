
import React, { Component } from 'react';
import uuid from 'react-uuid';

class Header extends Component {
    state = {
        "content": "",
        "style": "",
        "headingSize": 3
    }


    render() {
        return (
            <h1>Header</h1>
        );
    }
}



class Text extends Component {
    state = {
        "content": "",
        "style": {
            color:"#000000"
        }
    }

    render(){
        return (
            <p>Text</p>
        );
    }

}

export {
    Text,
    Header
}