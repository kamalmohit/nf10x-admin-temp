import React from 'react';

const Search = ({type, placeholder, classes, id, callback}) => {
    return (
        <div className={`relative block ${classes}`}>
            <label htmlFor={id}>
                <span className='sr-only'>{placeholder}</span>
                <input onChange={(e) => callback(e.target.value)} type={type} placeholder={placeholder} className="w-full p-2" />
            </label>
        </div>
    )
}

export default Search;