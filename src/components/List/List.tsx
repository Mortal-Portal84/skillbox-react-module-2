import { type FC, useRef, useEffect } from 'react'

import ListItem from './parts/ListItem.tsx'

import type { Goods } from '../../models'

import './List.css'

type Props = {
  listSource: Goods[]
  onToggleDone: (id: string) => void
  onChangeValue: (id: string, value: string) => void
  onRemoveItem: (id: string) => void
}

const List: FC<Props> = ({ listSource, onChangeValue, onToggleDone, onRemoveItem }) => {
  const lastInputRef = useRef<HTMLInputElement | null>(null)
  const prevLenRef = useRef<number>(listSource.length)

  useEffect(() => {
    if (prevLenRef.current < listSource.length) {
      lastInputRef.current?.focus()
    }
    prevLenRef.current = listSource.length
  }, [listSource.length])

  return (
    <ul className="list">
      {listSource.map((listItem, index) => (
        <ListItem
          key={listItem.id}
          good={listItem}
          onChangeValue={onChangeValue}
          onToggleDone={onToggleDone}
          onRemoveItem={onRemoveItem}
          ref={index === listSource.length - 1 ? lastInputRef : null}
        />
      ))}
    </ul>
  )
}


export default List
