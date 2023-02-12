// eslint-disable-next-line
import React, { useState, useTransition } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Todolist from './Todolist';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const eventChange = (event) => {
    setInputList(event.target.value)
  };

  const addItem = () => {
    setItems((oldData) => {
      return [...oldData, inputList]
    })

    setInputList("")

  };

  const deleteItem = (id) => {
    setItems((oldData)=>{
      return oldData.filter((arrE, ind)=>{
        return ind !== id
      })
    })
  };



  return (
    <>
      <div className=' container-fluid my-5'>
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className='text-center'>Today's plan</h2>
            <div className="row">
              <div className="col-9">
                <input type="text" className=' form-control' id="input-field" placeholder='Write Plan Here' onChange={eventChange} value={inputList} />
              </div>
              <div className="col-2">
                <button className='btn btn-primary px-5' onClick={addItem}>Add</button>
              </div>
              <div className="container-fluid ">
                <ul className='list-unstyled'>
                  {items.map((itemValue, ind) => {
                    return <Todolist
                    key= {ind}
                    id={ind}
                    text={itemValue}
                    onSelect= {deleteItem}
                    />
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
