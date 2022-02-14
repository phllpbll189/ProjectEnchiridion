import { container } from 'aws-amplify';
import React, { Component } from 'react';
import uuid from 'react-uuid';
import { flatten } from 'xstate/lib/utils';
import composite from '../Util/editorComponents'

const style = {    
    marginTop: "5%",
    width: "800px",
    height: "120vh",
    marginLeft: "23%",
    background: "#E7E7E7",
    padding: "10px"
}


 const onDragOver = (ev) => {
        ev.preventDefault();
    }

export default class EditBox extends Component{
    state = {
        "Children": [],
        "Style": {
            padding: "10px"
        }
    }

    checkId(id) {
        throw new Error('Method not implemented.');
        //TODO check to see if ID is in Children
        //should return the element if it is in the array
    }
   

    onDrop = (ev) => {
        console.log("Drop")

        let desc = ev.dataTransfer.getData("desc")
        if(desc === "container" ){
            //if its a container thats dragged then allow it to be dropped in main.

            let id = ev.dataTransfer.getData("id")
            this.setState({
                "Children": [
                    ...this.state.Children,
                    {
                        "Type": "container",
                        "content": [],
                        "id": id
                    }
                ]
            })
        }
      
    }

    render (){
        var arr = [];
        this.state.Children.forEach(container => {
            arr.push(<Container key={container.id}></Container>)
            }
        )

        return (//return guide and all of its child divs
            <div style={style} onDragOver={(event) => event.preventDefault()} onDrop={(e) => this.onDrop(e)}>
            {arr}
            </div>
        );
    }
}



class Container extends Component{
    state = {
        "Children": [],
        "verticle": false,
        "Style": {
            display:"flex",
            background:"#ADD8E6",
            width: "100%",
            height: "100px",
            marginTop: "10px"
        }
    }

    onDrop = (ev) => {
        let id = ev.dataTransfer.getData("id");
        let desc = ev.dataTransfer.getData("desc");
        let style = ev.dataTransfer.getData("Style");

        if(desc === "container"){
            return;
        }

        this.setState({
            "Children": [
                ...this.state.Children,
                {
                    "Type": desc,
                    "content": desc,
                    "id": id,
                    "style": {
                        
                    }
                }
            ]
        })
        
    }


    render() {
        var arr = [];
        this.state.Children.forEach(item => {
            console.log("render " + item.Type);
            if(item.Type === "header"){
                arr.push(<h1 key={item.id} style={item.style}>Header</h1>)
            }
            else if(item.Type === "text")
                arr.push(<p key={item.id} style={item.style}>text</p>)
            }
        );

        return(
            <div style={this.state.Style} onDragOver={(event) => event.preventDefault()} onDrop={(e) => this.onDrop(e)}>
                {arr}
            </div>
        );
    }

    checkId(id) {
        throw new Error('Method not implemented.');
    }
    
}

export {
    Container
}