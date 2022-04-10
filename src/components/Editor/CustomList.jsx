import React, {useState } from 'react';

function detectEnter(e){
    console.log(e.code)
}

const defaultListItem = 
<li contentEditable="true" className='default-list' onkeydown={(e) => detectEnter(e)}>
    list
</li>

export default function CustomList(props){
    const [listItems, setListItems] = useState([defaultListItem])

    return(
        <ul key={props.id} id={props.id}>
           {listItems}
        </ul>
    )
  
}
