import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import './UserForm.css';
import { countries } from './countries';
import TaxDetails from './TaxDetails.jsx';

const UserForm = () => {
  const [ userData, setUserData ] = useState({
    residentialAddress: '',
    line2: '',
    city: '',
    postcode: '',
    country: '',
    state: '',
    taxCategory: null,
    taxNumber: ''
  });

  const [hasTaxNumber, setHasTaxNumber] = useState(false);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  const handleChange = (e) => {
    setUserData(userData => ({
      ...userData,
      [e.target.name]: e.target.value
    }))
  };

  const handleCountryChange = (countrySelected) => {
    setUserData(userData => ({
      ...userData,
      country: countrySelected?.label
    }))
  }

  const handleHasTaxNumberCheck = () => {
    setHasTaxNumber(!hasTaxNumber);
  }

  return (
    <div className="form-container">
      <div className="input-field-group">
        <label htmlFor="address">Residential Address</label>
        <input
          type="text"
          className="input-field"
          id="address"
          name="residentialAddress"
          value={userData.residentialAddress}
          onChange={handleChange}
        />
      </div>
      <div className="input-field-group">
        <label htmlFor="line2">Line 2 (Optional)</label>
        <input
          type="text"
          className="input-field"
          id="line2"
          name="line2"
          value={userData.line2}
          onChange={handleChange}
        />
      </div>
      <div className="input-field-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          className="input-field"
          id="city"
          name="city"
          value={userData.city}
          onChange={handleChange}
        />
      </div>
      <div className="input-field-group">
        <label htmlFor="postcode">Zip or Post Code</label>
        <input
          type="number"
          className="input-field"
          id="postcode"
          name="postcode"
          value={userData.postcode}
          onChange={handleChange}
        />
      </div>
      <div className="input-field-group">
        <label htmlFor="state">State or Province</label>
        <input
          type="text"
          className="input-field"
          id="state"
          name="state"
          value={userData.state}
          onChange={handleChange}
        />
      </div>
      <div className="input-field-group">
        <label htmlFor="country">Country</label>
        <Select
          name="country"
          placeholder="Please select a country"
          className="countries-dropdown"
          options={countries}
          styles={{
            control: (base) => ({
              ...base,
              width: "100%",
              backgroundColor: "#eee",
              border: "none",
            }),
          }}
          onChange={handleCountryChange}
          defaultValue={userData.country}
        />
      </div>
      {userData.country === "Australia" && (
        <div className="has-tax-row">
          <input
            type="checkbox"
            checked={hasTaxNumber}
            id="hasTaxNumber"
            onChange={handleHasTaxNumberCheck}
          />
          <label htmlFor="hasTaxNumber">Do you have a tax number?</label>
          <TaxDetails
            userData={userData}
            hasTaxNumber={hasTaxNumber}
            changeHandler={handleChange}
          />
        </div>
      )}
    </div>
  );
}

export default UserForm;