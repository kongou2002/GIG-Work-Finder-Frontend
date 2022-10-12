import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Staff from '../../asset/image/staff.jpg';
import "./style.scss";

function Search(props) {
    const [input, setInput] = useState({
        search: '',
    })
    const inputsHandler = (e) => {
        setInput({ [e.target.name]: e.target.value })
    }
    const submitButton = () => {
        
    }

    return (
        <div className='searchBox'>
            <div className='search-area'>
                <div className='intro'>
                    <h1>GIG-Worker</h1>
                    <h2>Giải pháp tìm việc làm part-time và tìm kiếm nhân sự</h2>
                    <h2>tốt nhất và phù hợp dành cho tất cả mọi người</h2>
                </div>
                <p>Tìm kiếm công việc thời vụ phù hợp với bạn:</p>
                <input
                    type='text'
                    name='search'
                    onChange={inputsHandler}
                    placeholder='  Tìm theo tên công việc, công ty, vị trí gần bạn'
                    value={setInput.Search} />
                <button onClick={submitButton} >Tìm kiếm</button>
            </div>
            <div className='home-img-banner'>
                <div className='bg-img-banner'>
                    <img src={Staff} alt='' style={{ width: "320px" }} />
                </div>
            </div>
        </div>
    )
}

Search.propTypes = {
    Search: PropTypes.element.isRequired
}

export default Search
