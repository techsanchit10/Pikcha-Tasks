import React from 'react';
import PropTypes from 'prop-types'
import './TaxDetails.css';

const TaxDetails = (props) => {
  const { userData, hasTaxNumber, changeHandler } = props;

  const renderCategory = () => (
    <>
      <h3>Exemption Categories</h3>
      <hr />
      <div className="category-list">
        <div className="category">
          <input
            type="radio"
            name="taxCategory"
            id="category1"
            value="category1"
            checked={userData?.taxCategory === "category1"}
            onChange={changeHandler}
          />
          <label htmlFor="category1">Category 1</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="taxCategory"
            id="category2"
            value="category2"
            checked={userData?.taxCategory === "category2"}
            onChange={changeHandler}
          />
          <label htmlFor="category2">Category 2</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="taxCategory"
            id="category3"
            value="category3"
            checked={userData?.taxCategory === "category3"}
            onChange={changeHandler}
          />
          <label htmlFor="category3">Category 3</label>
        </div>
        <div className="category">
          <input
            type="radio"
            name="taxCategory"
            id="category4"
            value="category4"
            checked={userData?.taxCategory === "category4"}
            onChange={changeHandler}
          />
          <label htmlFor="category4">Category 4</label>
        </div>
      </div>
    </>
  )

  const renderTaxNumberField = () => (
    <>
      <h3>My Tax Number:</h3>
      <hr />
      <div className="input-field-group">
        <input
          type="text"
          name="taxNumber"
          className="input-field"
          onChange={changeHandler}
          value={userData?.taxNumber}
        />
      </div>
    </>
  );

  return (
    <div className="tax-details">
      { hasTaxNumber ? renderTaxNumberField() : renderCategory() }
    </div>
  );
}

TaxDetails.defaultProps = {
  userData: {},
  hasTaxNumber: false,
  changeHandler: false,
}

TaxDetails.propTypes = {
  userData: PropTypes.object,
  hasTaxNumber: PropTypes.bool,
  changeHandler: PropTypes.func.isRequired
}

export default TaxDetails;