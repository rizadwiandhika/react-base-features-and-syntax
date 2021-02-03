import React from 'react'


const userInput = (props) => {
    return (
        <div className="UserInput">
            <input onChange={ props.manipulateName } value={ props.name } />
        </div>
    )
}


export default userInput