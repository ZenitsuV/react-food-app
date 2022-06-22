import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../Store/cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const price = `$${props.meal.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
