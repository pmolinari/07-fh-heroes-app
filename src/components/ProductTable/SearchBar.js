import React from 'react'

const SearchBar = ({ values, handleChange }) => {

  const handleCheckboxChange = (e) => {

    const target = {
      name: 'inStockOnly',
      value: e.target.checked
    }
    const event = { target };

    handleChange( event );
  }

  return (
    <form>
      <input 
        name="filterText"
        type="text" 
        placeholder="Search..." 
        autoComplete="off"
        value={ values.filterText }
        onChange={ handleChange }
      />
      <p>
        <input 
          name="inStockOnly"
          type="checkbox" 
          checked={ values.inStockOnly }
          onChange={ handleCheckboxChange }
        /> 
        {' '}
        Only show products in stock
      </p>
    </form>
  );

}

export default SearchBar
