import { useState } from 'react'

import type { Goods } from '../models'
import goodsList from '../api'

type UseListReturn = {
  list: Goods[]
  handleChangeValue: (id: string, value: string) => void
  handleToggleDone: (id: string) => void
  handleAddNewItem: () => void
  handleRemoveItem: (id: string) => void
}

export const useList = (initialList: Goods[] = goodsList): UseListReturn => {
  const [list, setList] = useState<Goods[]>(initialList)

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
    setList(prevState => [
      ...prevState,
      {
        id: crypto.randomUUID(),
        title: '',
        isDone: false,
      },
    ])
  }

  const handleRemoveItem = (id: string) => {
    setList(prevState => prevState.filter(item => item.id !== id))
  }

  return {
    list,
    handleChangeValue,
    handleToggleDone,
    handleAddNewItem,
    handleRemoveItem,
  }
}
