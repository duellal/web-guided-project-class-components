import React from 'react'

// const Person = (props) => {
//    return (
//       <div>
//          <h1>
//             Hello, {props.name} is {props.age}.
//          </h1>
//          <h3>
//             {props.name} is a good name for a {props.age} year old.
//          </h3>
//       </div>
//    )
// }

class Person extends React.Component {
   // props is getting passed into the class of Person - to access the props, you need to do "this.props.(name of prop)"
   render() {
      return (
         <div>
            <h1>
               Hello, {this.props.name} is {this.props.age}.
            </h1>
            <h3>
               {this.props.name} is a good name for a {this.props.age} year old.
            </h3>
         </div>
      )
   }
}

class App2 extends React.Component {
   //Anything here is for the class - will not let you return things from here

   constructor() {
      //super() allows the constructor components to have the connection with the parent class - in this case the class of App2
      super()
      this.state = {
         name: 'Raja',
         age: 4
      }
   }

   clickHandler = () => {
      this.setState({
         name: 'Ursula',
         age: 28
      })
   }

   render() {
      //anything here will give access for returning the JSX
      // const name = "Raja"

      return (
         <div>
            <Person name={this.state.name} age={this.state.age} />

            <button onClick={this.clickHandler}>
               Click me to change state
            </button>
         </div >
      )
   }
}

export default App2