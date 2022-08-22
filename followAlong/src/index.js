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

  // Clearing crossed out items from list:
  clearPurchased = () => {
    //.filter(): keeps anything that passes (is true) for the condition set - in other words if the condition set is equal to true, it keeps the element in the array
    const newGroceries = this.state.groceries.filter((item) => {
      return (item.purchased === false)
    })

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
          onClick={this.clearPurchased}
          className="clear-btn">
          Clear Purchased
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);