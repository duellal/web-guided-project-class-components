import React, { useState } from "react";

const Person = (props) => {
  const { name, age } = props

  return (
    <div>
      <h1>{name}'s age is {age}</h1>
      <h3>You're {name}? {name} is wonderful.</h3>
    </div>
  )
}

const App = () => {
  const [name, setName] = useState('Raja')
  const [age, setAge] = useState('4')

  const handleClick = () => {
    setName('Ursula')
    setAge('28')
  }

  return (
    <div>
      <Person name={name} age={age} />
      <button onClick={handleClick}>
        Click Me to Change State
      </button>
    </div>
  );
};

export default App;