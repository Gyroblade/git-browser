import { Route } from 'react-router-dom'
import React from 'react'
import Search from './search'
import User from './user'
import Readme from './readme'
import Header from './header'


const Dummy = () => {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={() => <Search />} />
      <Route exact path="/:user" component={() => <User />} />
      <Route exact path="/:user/:repo" component={() => <Readme />} />
    </div>
  )
}

Dummy.propTypes = {}

export default React.memo(Dummy)
