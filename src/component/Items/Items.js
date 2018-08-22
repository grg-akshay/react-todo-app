import React from 'react';
import Item from '../Item/Item';

const Items = (props) => {
    return (
        <table>
            <tbody>
            {
                props.items.map(function(item, index){
                    return <Item 
                            item={item} 
                            key={index} 
                            handleSingleRemove={props.handleSingleRemove} 
                            />

                })
            }
             </tbody>
        </table>
    );
}
 
export default Items;
