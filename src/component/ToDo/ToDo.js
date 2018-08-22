import React, { Component } from 'react';
import Page from '../Page/Page';
import './ToDo.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {  list: [],
                        currentPage: 1
                    };
        this.handleAddItem=this.handleAddItem.bind(this);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handleSingleRemove=this.handleSingleRemove.bind(this);
        this.handlePageClick= this.handlePageClick.bind(this);
    }


    handleRemoveAll(){
        this.setState({
            list: []
        })
    }

    handleSingleRemove(option){

        console.log('single', option)
        this.setState(() => ({
            list: this.state.list.filter((item)=>{
                return item!==option;
            })
        })
    )
    }

    handleAddItem(evt){
        evt.preventDefault();
        let item= evt.target.elements.inputList.value.trim();
        if(this.state.list.indexOf(item) >-1 ){//match found
            return alert('Item already exists!')
        }

        if(item.length>0){
            this.setState( (prevState) =>({
                    list: [ item, ...prevState.list ]
                })
            )    
        }
        evt.target.elements.inputList.value="";
    }

    handlePageClick(event) {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
    

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleAddItem}>
                    <input type="search"  name="inputList" placeholder="Enter task here" />                   
                    <button type="submit" className='submit-button'>Add task</button>
                </form>
                
                <Page 
                items={this.state.list} 
                currentPage ={this.state.currentPage}
                handleSingleRemove={this.handleSingleRemove} 
                handlePageClick={this.handlePageClick}
                />
                <br/>

               {this.state.list.length>0 && <button className='clear-button' type="submit"  onClick= {this.handleRemoveAll}>Clear the list</button>}
            </div>    
         );
    }
}
 
export default ToDo;
