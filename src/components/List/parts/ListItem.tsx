import { forwardRef } from 'react'
import type { Goods } from '../../../models'

type Props = {
  good: Goods
  onToggleDone: (id: string) => void
  onChangeValue: (id: string, value: string) => void
  onRemoveItem: (id: string) => void
}

const ListItem = forwardRef<HTMLInputElement, Props>(
  ({ good, onChangeValue, onToggleDone, onRemoveItem }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeValue(good.id, e.target.value)
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (e.target.value.trim() === '') {
        onRemoveItem(good.id)
      }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault() // чтобы не сабмитить форму
        onToggleDone(good.id)
      }
    }

    return (
      <li className="list__item">
        <input
          type="checkbox"
          checked={good.isDone}
          onChange={() => onToggleDone(good.id)}
          onKeyDown={handleKeyDown} // <-- ловим Enter
        />

        <input
          type="text"
          value={good.title}
          onChange={handleChange}
          onBlur={handleBlur}
          ref={ref}
        />
      </li>
    )
  }
)

export default ListItem
