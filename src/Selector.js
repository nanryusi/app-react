import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { ProductDisplay } from './ProductDisplay';
import { SupplierDisplay } from './SupplierDisplay';

export class Selector extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selection: React.Children.toArray(props.children)[0].props.name,
  //   };
  // }

  // setSelection = (ev) => {
  //   ev.persist();
  //   this.setState({ selection: ev.target.name });
  // };

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <div>
                <Link to="/products">Products</Link>
              </div>
              <div>
                <Link to="/suppliers">Suppliers</Link>
              </div>
            </div>
            <div className="col">
              <Route
                path="/products"
                render={(routeProps) => <ProductDisplay myProp="myValue" />}
              ></Route>
              <Route
                path="/suppliers"
                render={(routeProps) => (
                  <React.Fragment>
                    <h4 className="bg-info text-center text-white p-2">
                      Suppliers
                    </h4>
                    <SupplierDisplay></SupplierDisplay>
                  </React.Fragment>
                )}
              ></Route>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
