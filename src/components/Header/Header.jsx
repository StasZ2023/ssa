import React from 'react'
import PropTypes from 'prop-types'

import MainTitle from '../UI/MainTitle/MainTitle'

import NewTaskForm from './NewTaskForm/NewTaskForm'

import './Header.scss'

const Header = ({ title, addTodo }) => {
  return (
    <header>
      <MainTitle title={title} />
      <NewTaskForm addTodo={addTodo} />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  addTodo: PropTypes.func,
}

export default Header
