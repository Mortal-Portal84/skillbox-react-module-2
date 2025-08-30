import { useState } from 'react'

import List from './components/List'

import type { Goods } from './models'
import { initialItem } from './utils'
import goodsList from './api'

import './App.css'

const App = () => {
  const [list, setList] = useState<Goods[]>(goodsList)

  const handleChangeValue = (id: string, value: string) => {
    setList(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, title: value } : item
      )
    )
  }

  const handleToggleDone = (id: string) => {
    setList(prevState =>
      prevState.map(item =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    )
  }

  const handleAddNewItem = () => {
    setList(prevState => [...prevState, initialItem])
  }

  return (
    <>
      <h1>Список покупок</h1>

      <List listSource={list} onChangeValue={handleChangeValue} onToggleDone={handleToggleDone} />

      <button onClick={handleAddNewItem}>Новый элемент</button>
    </>
  )
}

export default App
