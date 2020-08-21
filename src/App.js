import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Car from './Car/Car'

class App extends Component{
  state={
    cars:[
      {name:'Ford',year:2018},
      {name:'Audi',year:2016},
      {name:'Mazda',year:2010},
    ],
    pageTitle:'React components',
    showCars:false
  };
  // changeTitleHandler=(newTitle) => {
    
    
  //   this.setState({
  //     pageTitle:newTitle
  //   })
  // }
  toggleCarsHandler=()=>{
    this.setState({
      showCars:!this.state.showCars
    })
  
  }
  onChangeName=(name,index)=>{
    const car=this.state.cars[index]
    car.name=name
    const cars=[...this.state.cars]
    cars[index]=car
    this.setState({
      cars
    })
  }
  // handeInput=(event)=>{
  //   this.setState({
  //     pageTitle:event.target.value
  //   })
  // }
  deleteHandler(index){
    const cars=this.state.cars.concat
    cars.splice(index, 1)
    this.setState({
      cars
    })
  }
  render(){
    const divStyle={
      textAlign:'center'
    }
    let cars=null
    if (this.state.showCars){
      cars=this.state.cars.map((car,index)=>{
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this,index)}
            onChangeName={(event)=>this.onChangeName(event.target.value,index)}
          />
        )
      })
    }
    //const cars=this.state.cars
    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>
        <input type="text" onChange={this.handeInput}/>
        {/* <button onClick={this.changeTitleHandler.bind(this,'changed!')}>Change title</button> */}
        <button onClick={this.toggleCarsHandler}>toggleCars</button>
        <div style={{
          width:400,
          margin:'auto',
          paddingTop:'20px',
          
        }}>
        {
        
        cars
        /* { this.state.showCars
          ? this.state.cars.map((car,index)=>{
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
              onChangeTitle={()=>this.changeTitleHandler(car.name)}
            />
          )
        })
        : null */
        }
        </div>
      
        {/* <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitleHandler.bind(this,cars[0].name)}/>
        <Car name={cars[1].name} year={cars[1].year}  onChangeTitle={()=> this.changeTitleHandler(cars[1].name)}/>
        <Car name={cars[2].name} year={cars[2].year} onChangeTitle={()=> this.changeTitleHandler(cars[2].name)}/> */}
      </div>
    );
    }
}
  // return React.createElement(
  //   'div',
  //   {
  //     className:'App'
  //   },
  //   React.createElement(
  //     'h1',
  //     null,
  //     'hello world'
  //   ),
    
  // );

export default App;
