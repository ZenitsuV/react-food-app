import React, { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
//import mealsImage from '../../images/meals.jpg';

import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img
          src="https://media.glamour.com/photos/6232428d3cd68a607606b849/master/w_2667,h_1500,c_limit/factor%20healthy%20meal%20delivery.png"
          alt="A table fullx of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
