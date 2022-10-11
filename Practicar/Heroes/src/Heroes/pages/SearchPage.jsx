import React from 'react'

export const SearchPage = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <form action="" className="col-6">
          <h4>Search Hero</h4>
          <hr />
          <input type="text" 
          className='form-control'
          autoComplete='off' 
          name='hero'
          />

          <button className='btn btn-success mt-3'>Search</button>
        </form>

        <div className="col-6">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-success">Search a <b>Hero</b></div>
          <div className="alert alert-danger">No results with <b>ABC</b></div>
        </div>
      </div>
    </div>
  )
}
