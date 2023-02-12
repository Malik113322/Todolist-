import React from 'react'

const Todolist = (props) => {

   

    return (
        <>
            <div className="delete-icon mt-3">
                <p className="text-capitalize">{props.text} </p>
                <i className="fa-solid fa-trash mt-2" onClick={()=>{
                    props.onSelect(props.id)
                }}></i>
            </div>

        </>
    )
}

export default Todolist
