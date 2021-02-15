import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import {Route,NavLink,Switch,Redirect} from 'react-router-dom'
import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.scss';
import Car from './Car/Car'
import Counter from './Counter/Counter'
import CarDetail from './CarDetail/CarDetail'
export const ClickedContext=React.createContext(false)
class App extends Component{
  state={
    isLoggedIn:false
  }
  constructor(props){
    super(props)
    this.state={
      clicked:false,
        cars:[
          {name:'Ford',year:2018},
          {name:'Audi',year:2016},
          {name:'Mazda',year:2010},
        ],
        pageTitle:'React components',
        showCars:false
      }
}
  // state={
  //   cars:[
  //     {name:'Ford',year:2018},
  //     // {name:'Audi',year:2016},
  //     // {name:'Mazda',year:2010},
  //   ],
  //   pageTitle:'React components',
  //   showCars:false
  // };
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
          <ErrorBoundary key={index}>
            <Car
              
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this,index)}
              onChangeName={(event)=>this.onChangeName(event.target.value,index)}
            />
          </ErrorBoundary>
        )
      })
    }
    //const cars=this.state.cars
    return (
      <div style={divStyle}>
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter/>
        </ClickedContext.Provider>
        
        <hr/>
        <input type="text" onChange={this.handeInput}/>
        {/* <button onClick={this.changeTitleHandler.bind(this,'changed!')}>Change title</button> */}
        <button style={{marginTop:'20'}} onClick={this.toggleCarsHandler}>toggleCars</button>
        <button onClick={
          () => this.setState({
            clicked:true
          })
        }>ChangeClicked</button>
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
<NavLink to="/" exact activeClassName={'wfm-active'}></NavLink>
<NavLink to="/about" exact
   activeStyle={{
     color:'blue'
   }}
></NavLink>
<NavLink to={{
  pathname:'/cars',
  search:'?a=1&b=2',
  hash:'wfm-hash'
}} exact></NavLink>
<div style={{textAlign:'center'}}>
<h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
<button onClick={()=>this.setState({isLoggedIn:true})}>Login</button>
</div>

<Switch>
  <Route path="/" exact render={()=> <h1>Home page</h1>}/>
  {this.state.isLoggedIn ? <Route path="/about" component={About}/> : null} 
  
  <Route path="/cars" component={Cars}/>
  <Route path="/cars/:name" component={CarDetail}/>
  <Route path="/cars/:name" render={()=><h1 style={{color:'red',textAlign:'center'}}>404 not found</h1>}/>
  <Redirect from={'/about'} to={'/cars'}></Redirect>
</Switch>
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
