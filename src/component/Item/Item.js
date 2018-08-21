import React from 'react';
import './Item.css';


function handleCheck(item, setCompleteTask){
document.getElementById(item).classList.add('ticked');
setCompleteTask(item);
}
const Item = (props) => {
    return (
        <tr id={props.item}>
            <td>
                <input type='checkbox' onClick={e => handleCheck(props.item, props.setCompleteTask)} ></input>
            </td>
            <td className='data' id={props.item}>
                {props.item}
            </td>
            <td>
                <button 
                onClick={(e) => props.handleSingleRemove(props.item)} >
                <i className="fa fa-times-circle" 
                style={{fontSize:'24px', backgroundColor:'transparent'  ,  border:'0px', cursor: 'pointer'}}>
                </i>
                </button>
            </td>
        </tr>
    );
}
 
export default Item;
