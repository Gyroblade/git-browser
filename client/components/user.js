import React,{useState, useEffect} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
import './user.scss'

const User = () => {
    const [repos, setRepos] = useState([])
    const { user } = useParams()
    useEffect(() => {    
        axios.get(`https://api.github.com/users/${user}/repos`).then(it => {    
          setRepos(it.data)    
        })    
        return () => {}    
      }, [])     
    return (
      <div>
        <div>  
            {repos.map(repo => {  
                return <div key={repo.id} className='repo-list'>
                    <Link to={`/${user}/${repo.name}`}>{repo.name}</Link>
                </div>  
            })}   
        </div>
      </div>
    )
  }

export default User