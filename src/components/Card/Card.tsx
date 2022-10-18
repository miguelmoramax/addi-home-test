import { useState } from 'react'
import { validateExternalSystem } from '../../services/validateExternalData'
import { generateScore } from '../../utils/generateScore'
import { Person } from '../../models/Person.model'
import { Modal } from '../Modal/Modal'

import './index.css'

interface CardProps {
  item: Person
  updateStatus: (id: number, newStatus: string) => void
}

export const Card = ({ item, updateStatus }: CardProps): JSX.Element => {
  const [show, setShow] = useState(false)
  const [modalData, setModalData] = useState({
    hasJudicialRecords: false,
    existsInNationalRegistry: false,
    score: 0,
  })

  const { id, dni, firstName, lastName, birthDate, email, status, photo } = item

  const handleValidation = async (dni: string, id: number) => {
    const score = generateScore()
    const [hasJudicialRecords, existsInNationalRegistry] =
      await validateExternalSystem(dni)

    if (!hasJudicialRecords && existsInNationalRegistry && score >= 60) {
      updateStatus(id, 'Completed')
    }
    setModalData((prevState) => ({
      ...prevState,
      hasJudicialRecords,
      existsInNationalRegistry,
      score,
    }))
    setShow((prev) => !prev)
  }

  return (
    <>
      <div key={id} className="card">
        <img src={photo} alt={dni} />
        <span className="card-info">
          <span>
            {firstName} {lastName}
          </span>
          <span>{birthDate}</span>
          <span>{email}</span>
          <button
          className='card-button'
            key={id}
            onClick={
              status === 'Pending'
                ? () => handleValidation(dni, id)
                : () => updateStatus(id, 'Pending')
            }
          >
            {status === 'Pending' ? 'CHECK' : 'UNDO'}
          </button>
        </span>

        <Modal
          modalData={modalData}
          show={show}
          onClose={() => setShow(false)}
        />
      </div>
    </>
  )
}
