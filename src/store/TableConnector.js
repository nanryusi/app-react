import { connect } from 'react-redux';
import { startEditingProduct, startEditingSupplier } from './stateActions';
import { deleteProduct, deleteSupplier } from './modelActionCreators';
import { PRODUCTS, SUPPLIERS } from './dataTypes';

export const TableConnector = (dataType, presentationComponent) => {
  const mapStateToProps = (storeData, ownProps) => {
    if (!ownProps.needSuppliers) {
      return { products: storeData.modelData[PRODUCTS] };
    } else {
      return {
        suppliers: storeData.modelData[SUPPLIERS].map((supp) => ({
          ...supp,
          products: supp.products
            .map(
              (id) =>
                storeData.modelData[PRODUCTS].find(
                  (p) => p.id === Number(id)
                ) || id
            )
            .map((val) => val.name || val),
        })),
      };
    }
  };
  // const mapStateToProps = (storeData) => ({
  //   products: storeData.modelData[PRODUCTS],
  //   //suppliers: storeData.modelData[SUPPLIERS],
  //   suppliers: storeData.modelData[SUPPLIERS].map((supp) => ({
  //     ...supp,
  //     products: supp.products
  //       .map(
  //         (id) =>
  //           storeData.modelData[PRODUCTS].find((p) => p.id === Number(id)) || id
  //       )
  //       .map((val) => val.name || val),
  //   })),
  // });

  const mapDispatchToProps = {
    editCallback:
      dataType === PRODUCTS ? startEditingProduct : startEditingSupplier,
    deleteCallback: dataType === PRODUCTS ? deleteProduct : deleteSupplier,
  };

  return connect(mapStateToProps, mapDispatchToProps)(presentationComponent);
};
