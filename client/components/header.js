import React from 'react'
import {useParams, Link} from 'react-router-dom'
import './header.scss'

const Header = () => {
    const { user, repo } = useParams()
    return (
        <div className='header'>
            {!user && <div>Git Browser</div>}
            {user && <div id="username">User:  {user} </div>}
            {repo && <div id="repository-name">Repo: { repo } </div>}
            {repo && <div className="header-link" id='go-repositary'><Link to={`/${user}`}>Go to Repository</Link></div>}
            {user && <div className="header-link" id='go-repository-list'><Link to='/'>Go to Search</Link></div>}
        </div>
    )
  }
  export default Header