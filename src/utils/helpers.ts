import type { Goods } from '../models'

export const initialItem: Goods = {
  id: crypto.randomUUID(),
  title: '',
  isDone: false
}
