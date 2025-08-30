import type { FC } from 'react'

import ListItem from './parts/ListItem.tsx'

import type { Goods } from '../../models'

type Props = {
  listSource: Goods[]
  onToggleDone: (id: string) => void
  onChangeValue: (id: string, value: string) => void
}

const List: FC<Props> = ({ listSource, onChangeValue, onToggleDone }) => (
  <ul className="list-item">
    {listSource.map((listItem) => <ListItem
      key={listItem.id}
      good={listItem}
      onChangeValue={(id: string, value: string) => onChangeValue(id, value)}
      onToggleDone={(id: string) => onToggleDone(id)}
    />)}
  </ul>
)

export default List
