import React, { Fragment } from 'react';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import './style.css';

export default function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}
