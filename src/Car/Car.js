import React from 'react'
import Radium from 'radium'
import './Car.css'
// function Car(){
//     return (
//         <div>this is car component</div>
//     );
// }


const Car=(props)=>{ 
    const inputClasses=['input']
    if(props.name !== ''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red')
    }
    if(props.name.length>4){
        inputClasses.push('bold')
    }
    const style={
        border:'1px solid #ccc',
        boxShadow:'0 4px 5px 0 rgba(0,0,0, .14)',
        ':hover':{
            border:'1px solid #aaa',
            boxShadow:'0 4px 15px 0 rgba(0,0,0, .25)',
            cursor:'pointer'
        }
    }

    return(
        
        <div 
            className="Car"
            style={style}
        >
            <p>Car name : {props.name}</p>
            <p>Year: <strong>{props.year}</strong></p>
            <input onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')} />
            <button onClick={props.onDelete}>Delete</button>
            {/* {props.children} */}
        </div>
        
    );
}
export default Radium(Car)