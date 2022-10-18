import { useState } from 'react'
import { Status } from '../Status/Status'
import { persons } from '../../mock/data/persons.mock'

export const Container = (): JSX.Element => {
  const [items, setItems] = useState(persons)

  const updateStatus = (id: number, newStatus: string) => {
    let allItems = items
    allItems = allItems.map((item) => {
      if (item.id === id) {
        item.status = newStatus
      }
      return item
    })
    setItems(allItems)
  }

  return (
    <>
      <Status items={items} updateStatus={updateStatus} />
    </>
  )
}
