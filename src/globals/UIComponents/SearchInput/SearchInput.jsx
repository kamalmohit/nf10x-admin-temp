import React from 'react';

const Search = ({type, placeholder, classes, id, callback, autocomplete}) => {
    return (
        <div className={`relative block ${classes}`}>
            <label htmlFor={id}>
                <span className='sr-only'>{placeholder}</span>
                <input autoComplete={autocomplete} onChange={(e) => callback(e.target.value)} type={type} placeholder={placeholder} className="w-full p-2 search" />
            </label>
        </div>
    )
}

export default Search;