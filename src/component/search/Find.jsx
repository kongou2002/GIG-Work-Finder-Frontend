import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import "./style.scss";

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
        <div className='searchBox'>
            <p>Tìm kiếm công việc thời vụ phù hợp với bạn:</p>
            <input
                type='text'
                name='search'
                onChange={inputsHandler}
                placeholder='  Tìm theo tên công việc, công ty, vị trí gần bạn'
                value={setInput.Search} />
            <button onClick={submitButton} >Tìm kiếm</button>
        </div>
    )
}

Search.propTypes = {
    Search: PropTypes.element.isRequired
}

export default Search
