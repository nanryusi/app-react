import React, { Component } from 'react';
import { ProductTable } from './ProductTable';
import { ProductEditor } from './ProductEditor';
import { connect } from 'react-redux';
//import { saveProduct, deleteProduct } from './store';
import {
  saveProduct,
  deleteProduct,
  EditorConnector,
} from './store/EditorConnector';
import { PRODUCTS } from './store/dataTypes';
import { TableConnector } from './store/TableConnector';
import { startCreatingProduct } from './store/stateActions';

const ConnectedEditor = EditorConnector(PRODUCTS, ProductEditor);
const ConnectedTable = TableConnector(PRODUCTS, ProductTable);

const mapStateToProps = (storeData) => ({
  //products: storeData.products,
  editing: storeData.stateData.editing,
  selected:
    storeData.modelData.products.find(
      (item) => item.id === storeData.stateData.selectedId
    ) || {},
});

const mapDispatchToProps = {
  //saveCallback: saveProduct,
  //deleteCallback: deleteProduct,
  createProduct: startCreatingProduct,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);

export const ProductDisplay = connectFunction(
  class extends Component {
    //constructor(props) {
    //  super(props);
    //  this.state = {
    //    showEditor: false,
    //    selectedProduct: null,
    //  };
    //}

    // startEditing = (product) => {
    //   this.setState({ showEditor: true, selectedProduct: product });
    // };

    // createProduct = () => {
    //   this.setState({ showEditor: true, selectedProduct: {} });
    // };

    // cancelEditing = () => {
    //   this.setState({ showEditor: false, selectedProduct: null });
    // };

    // saveProduct = (product) => {
    //   this.props.saveCallback(product);
    //   this.setState({ showEditor: false, selectedProduct: null });
    // };

    render() {
      //if (this.state.showEditor) {
      if (this.props.editing) {
        return (
          <ProductEditor key={this.props.selected.id || -1}></ProductEditor>
          // <ProductEditor
          //   key={this.state.selectedProduct.id || -1}
          //   product={this.state.selectedProduct}
          //   saveCallback={this.saveProduct}
          //   cancelCallback={this.cancelEditing}
          // ></ProductEditor>
        );
      } else {
        return (
          <div className="m-2">
            <ConnectedTable></ConnectedTable>
            {/* <ProductTable
              products={this.props.products}
              editCallback={this.startEditing}
              deleteCallback={this.props.deleteCallback}
            ></ProductTable> */}
            <div className="text-center">
              <button
                className="btn btn-primary m-1"
                //onClick={this.createProduct}
                onClick={this.props.createProduct}
              >
                Create Product
              </button>
            </div>
          </div>
        );
      }
    }
  }
);
