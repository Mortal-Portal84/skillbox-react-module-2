import { useState } from 'react'

import List from './components/List'

import type { Goods } from './models'
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
    setList(prevState => [...prevState, {
      id: crypto.randomUUID(),
      title: '',
      isDone: false
    }])
  }

  const handleRemoveItem = (id: string) => {
    setList(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <main className="app">
      <h1>Список покупок</h1>

      <List
        listSource={list}
        onChangeValue={handleChangeValue}
        onToggleDone={handleToggleDone}
        onRemoveItem={handleRemoveItem}
      />

      <button className="create-item-button" onClick={handleAddNewItem}>Новый элемент</button>
    </main>
  )
}

export default App
