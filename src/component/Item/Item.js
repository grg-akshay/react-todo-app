import React from 'react';
import './Item.css';


const Item = (props) => {
    return (
        <tr >
            <td className='data' id={props.item}>
                {props.item}
            {/* </td>
            <td> */}
                <button className='cross'
                onClick={(e) => props.handleSingleRemove(props.item)} >
                <i className="fa fa-times-circle" 
                title="Delete"
                style={{fontSize:'24px', backgroundColor:'transparent'  ,  border:'0px', cursor: 'pointer'}}>
                </i>
                </button>
            </td>
        </tr>
    );
}
 
export default Item;
