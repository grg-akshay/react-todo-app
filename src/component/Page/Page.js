import React from 'react';
import Items from '../Items/Items';


const Page = (props) => {

    const itemsPerPage=3;
    let items= props.items;

    const indexOfLastItem = props.currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const pageArray = [];
    for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
      pageArray.push(i);
    }

    const renderPageNumbers = pageArray.map(number => {
        return (
          <button
            key={number}
            id={number}
            onClick={props.handlePageClick}
          >
            {number}
          </button>
        );
      });


    return (
        <div>
          <Items 
          items={currentItems} 
          handleSingleRemove={props.handleSingleRemove}
          setCompleteTask={props.setCompleteTask}     
          />
          <p>{renderPageNumbers}</p>
        </div>
    );
}
 
export default Page;