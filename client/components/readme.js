import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import showdown from 'showdown'


const md2html = new showdown.Converter()

const Readme = () => {
    const { user, repo } = useParams()
    const [readme, setReadme] = useState()
    useEffect(() => {    
        axios.get(`https://api.github.com/repos/${user}/${repo}/readme`).then(it => {    
            axios.get(it.data.download_url)
            .then(it2 => setReadme(md2html.makeHtml(it2.data))
            )
        }).catch(() => setReadme('Readme.md not found'))
        return () => {}    
      }, {})    
    return (
      <div>
        <div id="description" dangerouslySetInnerHTML={{__html: readme}}/>
      </div>
    )
  }

export default Readme