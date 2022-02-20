import React, { Component } from 'react';
import uuid from 'react-uuid';

//styling for editor, drop area, and columns
const editorStyle = {    
    marginTop: "5%",
    width: "800px",
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
    maxHeight: "contain-content",
    marginLeft: "23%",
    background: "#E7E7E7",
    padding: "10px"
}

const mainAreaStyle = {    
    width: "800px",
    height:"100%",
    minHeight: "100px",
}

const column = {    
    width: "800px",
}

//will be used to determine index
const onDragOver = (ev) => {
    ev.preventDefault();
}

//editor area
export default class EditBox extends Component{
    state = {
        "Children": [],
        "Style": {
            padding: "10px"
        }
    }  

    onDrop = (ev) => {
        console.log("Drop")
        //get data
        let desc = ev.dataTransfer.getData("desc");
        let id = ev.dataTransfer.getData("id");

        //append new child
        this.setState({
            "Children": [
                ...this.state.Children,
                {
                    "Type": "container",
                    "desc": desc,
                    "id": id
                }
            ]
        }); 
    }

    render (){
        var arr = [];

        //generate html and place in array
        this.state.Children.forEach(container => {
            arr.push(<Container key={container.id} 
                desc={container.desc}
                onDragOver={onDragOver}></Container>)
        });

        //return a div with array
        return (
            <div style={editorStyle}>
                <div style={column}>
                    {arr}
                </div>
                <div style={mainAreaStyle}onDragOver={(event) => event.preventDefault()} onDrop={(e) => this.onDrop(e)}></div>
            </div>
        );
    }
}



//displays things horizontally
class Container extends Component{
    state = {
        "Children": [],
        "Style": {
            display:"flex",
            background:"#ADD8E6",
            width: "100%",
            height: "100px",
            marginTop: "10px"
        },
    }

    //helps us make child elements
    generate = (desc) => {
        console.log(desc)
        if(!desc) return [...this.state.Children];
        return (
            [
                ...this.state.Children,
                {
                    "id": uuid(),
                    "desc": desc,
                    "style": {}
                }  
            ]
        ); 
    }

    //get data from dropped component
    onDrop = (ev) => {
        let desc = ev.dataTransfer.getData("desc");
        if(desc === "container"){
            return;
        }

        //append new element
        let arr = this.generate(desc);
        this.setState({
            "Children": arr
        });   
    }

    render() {
        var arr = [];
        var children = this.generate(this.props.desc); //check if it already contains something

        children.forEach(item => {
            console.log("render " + item.desc);
            //create different elements based on different D&D
            switch(item.desc){
                case "header":
                    arr.push(<h1 key={item.id} style={item.style}>Header</h1>);
                    break;
                case "text":
                    arr.push(<p key={item.id} style={item.style}>text</p>);
                    break;
            }
        });

        //return all of the generated html
        return(
            <div style={this.state.Style} onDragOver={(event) => event.preventDefault()} onDrop={(e) => this.onDrop(e)}>
                {arr}
            </div>
        );
    }    
}


export {
    Container
}