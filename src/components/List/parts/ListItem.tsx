import type { FC } from 'react'
import type { Goods } from '../../../models'

type Props = {
  good: Goods
  onToggleDone: (id: string) => void
  onChangeValue: (id: string, value: string) => void
}

const ListItem: FC<Props> = ({ good, onChangeValue, onToggleDone }) => (
  <li className="list__item">
    <input
      type="checkbox"
      checked={good.isDone}
      onChange={() => onToggleDone(good.id)}
    />

    <input
      type="text"
      value={good.title}
      onChange={(e) => onChangeValue(good.id, e.target.value)}
    />
  </li>
)

export default ListItem
