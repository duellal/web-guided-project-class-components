import React, { useState } from 'react';

const Item = props => {
  //Using useState for toggling crossing out the item on the shopping list:
  // const [item, setItem] = useState({
  //   name: 'Cheese',
  //   id: 100,
  //   purchased: false
  // })

  // const handleClick = () => {
  //   console.log('clicked:', item.name)
  //   setItem({ ...item, purchased: !item.purchased })
  // }

  //Using the class component for doing the same as above:
  const handleClick = () => {
    props.toggleItem(props.item.id)
  }

  return (
    <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Item;