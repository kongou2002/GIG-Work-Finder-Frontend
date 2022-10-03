import React from 'react';
import { useState } from 'react';
import JobOffer from '../../component/jobOffer/joboffer';
import Search from '../../component/search/Search';


function job() {
  const image = [/* them url hinh anh vao day */];


  return (
    <div className='container'>
      <div className='search-zone'>
        <Search />
      </div>
      <div>
        <JobOffer />
      </div>
      <div>
        {image.map((image) =>
          <div>{image}</div>
        )}
      </div>
    </div>
  )
}
export default job