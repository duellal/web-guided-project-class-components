import React from 'react'

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
            <h1>
               Hello, {this.state.name} is {this.state.age}.
            </h1>

            <button onClick={this.clickHandler}>
               Click me to change state
            </button>
         </div >
      )
   }
}

export default App2