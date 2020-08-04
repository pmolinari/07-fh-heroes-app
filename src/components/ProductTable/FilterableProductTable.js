import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import { useForm } from '../../hooks/useForm'

const FilterableProductTable = ({ products }) => {

    const [ values, handleInputChanged ] = useForm({
        filterText: '',
        inStockOnly: false
    });

    const { filterText, inStockOnly } = values;


    return (
        <div>
            <SearchBar 
                handleChange={ handleInputChanged } 
                values={ values }
                // filterText={ handleInputChanged }
                // inStockOnly={ handleInputChanged }
            />
            <ProductTable 
                products={ products } 
                filterText={ filterText }
                inStockOnly={ inStockOnly }
            />
        </div>
    )
}

export default FilterableProductTable
