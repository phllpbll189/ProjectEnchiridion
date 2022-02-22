import React, { Component, useState } from 'react';
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
        let tag = ev.dataTransfer.getData("tag");
        let id = ev.dataTransfer.getData("id");

        //append new child
        this.setState({
            "Children": [
                ...this.state.Children,
                {
                    "Type": "container",
                    "tag": tag,
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
                tag={container.tag}
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
function Container(){
   const [seed, setSeed] = useState({
        "Children": [],
        "Style": {
            display:"flex",
            background:"#ADD8E6",
            width: "100%",
            height: "100px",
            marginTop: "10px"
        },
    })

    //helps us make child elements
    const generate = (tag) => {
        console.log(tag)
        if(!tag) return [...this.state.Children];
        return (
            [
                ...this.state.Children,
                {
                    "id": uuid(),
                    "tag": tag,
                    "style": {}
                }  
            ]
        ); 
    }

    //get data from dropped component
    const onDrop = (ev) => {
        let tag = ev.dataTransfer.getData("tag");
        if(tag === "container"){
            return;
        }

        //append new element
        let arr = this.generate(tag);
        this.setState({
            "Children": arr
        });   
    }


    var arr = [];
    var children = this.generate(this.props.tag); //check if it already contains something

    children.forEach(item => {
        console.log("render " + item.tag);
        //create different elements based on different D&D
        switch(item.tag){
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


export {
    Container
}