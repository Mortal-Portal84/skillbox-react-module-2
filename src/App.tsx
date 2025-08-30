import List from './components/List'

import { useList } from './hooks/useList.ts'

import './App.css'

const App = () => {
  const {
    list,
    handleChangeValue,
    handleToggleDone,
    handleAddNewItem,
    handleRemoveItem,
  } = useList()

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
