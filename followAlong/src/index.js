import React from 'react';
import ReactDOM from 'react-dom';

import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.scss';

const groceries = [
  {
    name: 'Bananas',
    id: 123,
    purchased: false
  },
  {
    name: 'Tortillas',
    id: 124,
    purchased: false
  },
  {
    name: 'Milk',
    id: 1235,
    purchased: false
  },
  {
    name: 'Pizza Sauce',
    id: 1246,
    purchased: false
  },
  {
    name: 'Raw Honey',
    id: 1237,
    purchased: false
  },
  {
    name: 'Granola',
    id: 1248,
    purchased: false
  },
  {
    name: 'Yogurt',
    id: 1251,
    purchased: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      groceries: groceries
    }
  }

  //Toggling crossing out the item on the grocery list:
  toggleItem = (id) => {
    const newGroceries = this.state.groceries.map(item => {
      if (item.id === id) {
        return {
          ...item,
          purchased: !item.purchased
        }
      }
      else { return (item) }
    })

    this.setState({
      groceries: newGroceries
    })
  }

  //Adding an item to the shopping list:
  addItem = (title) => {
    const newItem = {
      name: title,
      id: this.state.groceries.length,
      purchased: false
    }

    const newGroceries = [...this.state.groceries, newItem]

    this.setState({
      groceries: newGroceries
    })
  }

  // Class methods to update state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm addItem={this.addItem} />
        </div>
        <GroceryList groceries={this.state.groceries} toggleItem={this.toggleItem} />
        <button
          // onClick={handleClick} 
          className="clear-btn">
          Clear Purchased
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);