import { Card } from '../Card/Card'
import { Person } from '../../models/Person.model'

import './index.css'

interface statusProps {
  items: Person[]
  updateStatus: (id: number, newStatus: string) => void
}

export const Status = ({
  items,
  updateStatus,
}: statusProps): JSX.Element | null => {
  return (
    <>
      <div className="status">
        <div className="status-container">
          <span className="status-title">Leads</span>
          {items &&
            items.map((item) => {
              if (item && item.status === 'Pending') {
                return (
                  <Card
                    key={item.dni}
                    item={item}
                    updateStatus={updateStatus}
                  />
                )
              }
            })}
        </div>
        <div className="status-container">
          <span className="status-title">Prospects</span>
          {items &&
            items.map((item) => {
              if (item && item.status === 'Completed') {
                return (
                  <Card
                    key={item.dni}
                    item={item}
                    updateStatus={updateStatus}
                  />
                )
              }
            })}
        </div>
      </div>
    </>
  )
}
