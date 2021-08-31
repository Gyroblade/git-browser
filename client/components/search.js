import React, { useState } from 'react'
import { history } from '../redux'
import './search.scss'

const Search = () => {
    const [value, setValue] = useState('')
    const onChange = (e) => {
      setValue(e.target.value)
    }
    const changeRoute = (route) => {
      history.push(`/${route}`)
    }
    return (
      <div className="search-block">
        <div>
            <input
            id="input-field"
            type="text"
            placeholder="Enter Github username"
            value={value}
            onChange = {onChange}
            />
        </div>
        <div>
            <button
                className="btn"
                id="search-button"
                type="button"
                onClick={() => changeRoute(value)}>
                Search
            </button>
          </div>
      </div>
    )
  }

  export default Search