import React, { Component } from 'react';
import { Provider } from 'react-redux';
import dataStore from './store';
import { Selector } from './Selector';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export default class App extends Component {
  render() {
    return (
      <Provider store={dataStore}>
        <Selector>
          <ProductDisplay name="Products"></ProductDisplay>
          <SupplierDisplay name="Suppliers"></SupplierDisplay>
        </Selector>
      </Provider>
    );
  }
}
