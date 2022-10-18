import { useEffect } from 'react'

import './index.css'

interface modalProps {
  show: boolean
  modalData: {
    hasJudicialRecords: boolean
    existsInNationalRegistry: boolean
    score: number
  }
  onClose: () => void
}

export const Modal = ({ show, onClose, modalData }: modalProps) => {
  const closeOnEscapeKeyDown = (e: any) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', closeOnEscapeKeyDown)
    return function cleanup() {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown)
    }
  }, [])
  return (
    <>
      {show ? (
        <div className="modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalData.hasJudicialRecords === true ? (
              <p>Has judicial records?: {String(modalData.hasJudicialRecords)} </p>
            ) : null}
            {modalData.existsInNationalRegistry === false ? (
              <p>
                Exists in National Registry?:{' '}
                {String(modalData.existsInNationalRegistry)}{' '}
              </p>
            ) : null}
             {modalData.score < 60 ? (
              <p>score is under 60 : {modalData.score}</p>
            ) : null}

            <button onClick={onClose} className="button">
              Close
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
