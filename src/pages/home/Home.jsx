import React from 'react';
import { useState } from 'react';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Find';
import "./style.scss";

function job() {
  const image = [/* them url hinh anh vao day */];


  return (
    <div className='container-home-page'>
      <div className='search-zone'>
        <div className='intro'>
          <h1>GIG-Worker</h1>
          <h2>Giải pháp tìm việc làm part-time và tìm kiếm nhân sự</h2>
          <h2>tốt nhất dành cho mọi người</h2>
        </div>
        <Search />
      </div>
      <br></br>
      <div className='job-zone'>
        <div class='job-zone-list-box-title'>
          <h1>Khám phá các công việc phổ biến</h1>
          <div className='job-zone-list-box'>
            <JobOffer />
          </div>
        </div>
      </div>
      <div className='img-zone'>
        {image.map((image) =>
          <div>{image}</div>
        )}
      </div>
    </div >
  )
}
export default job