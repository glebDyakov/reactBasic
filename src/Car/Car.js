import PropTypes from 'prop-types'
import {withRouter} from 'reacct-router-dom'
import React from 'react'
import withClass from '../hoc/withClass'
//import Radium from 'radium'
import './Car.css'
class Car extends React.Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    componentdidmount(){
        if(this.props.index===1){
            this.inputRef.current.focus
        }
        //this.inputRef.focus()
    }
    static getDerivedStateFromProps(nextProps,prevState){
        return {

        }
    }
    getSnapshotBeforeUpdate(){

    }
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.name.trim() !== this.props.name.trim()
    }
    goToHomePage=()=>{
        this.props.history.push({
            pathname:'/'
        })
    }
    render(){
        <button onClick={this.goToHomePage}>go to homepage</button>
    // if(Math.random()>0.7){
    //     throw new Error("Car random Failed")
    // }
    const inputClasses=[classes.input]
    if(this.props.name !== ''){
        inputClasses.push('green')
    }else{
        inputClasses.push('red')
    }
    if(this.props.name.length>4){
        inputClasses.push('bold')
    }
    // const style={
    //     border:'',
    //     boxShadow:'',
    //     ':hover':{
    //         border:'1px solid #aaa',
    //         boxShadow:'0 4px 15px 0 rgba(0,0,0, .25)',
    //         cursor:'pointer'
    //     }
    // }

    return(
        
        <React.Fragment onCLick={()=>props.history.push('/cars/' + props.name.toLowerCase())}>
            <h3>Car name : {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input ref={this.inputRef} onChange={this.props.onChangeName} value={this.props.name} className={inputClasses.join(' ')} />
            <button onClick={this.props.onDelete}>Delete</button>
            {/* {props.children} */}
        </React.Fragment>
        
    );

}
    }
// function Car(){
//     return (
//         <div>this is car component</div>
//     );
// }


//const Car=(props)=>{ 
//}
Car.propTypes={
    name:PropTypes.string.isRequireds,
    year:PropTypes.number,
    onChangeName:PropTypes.func,
    onDelete:PropTypes.func,
    index:PropTypes.number
}
export ddefault withRouter(Car)
//export default withClass(Car,classes.Car)