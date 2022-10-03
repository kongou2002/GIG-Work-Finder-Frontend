import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Search(props) {
    const [input, setInput] = useState({
        search: '',
    })
    const inputsHandler = (e) => {
        setInput({ [e.target.name]: e.target.value })
    }
        const submitButton = () => {
            console.log(input.search)
    }

    return (
        <div>
            <input
                type='text'
                name='search'
                onChange={inputsHandler}
                placeholder='type here to search for your dream job'
                value={setInput.Search} />
            <button onClick={submitButton} >Search</button>    
        </div>
    )
}

Search.propTypes = {
    Search: PropTypes.element.isRequired
}

export default Search
