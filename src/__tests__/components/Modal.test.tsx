import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '../../components/Modal/Modal'

const modalData = {
  hasJudicialRecords: true,
  existsInNationalRegistry: true,
  score: 1,
}

describe(Modal.name, () => {
  it('should display received data', () => {
    render(<Modal show onClose={() => {}} modalData={modalData} />)
    expect(screen.getByText('Has judicial records?: true')).toBeInTheDocument()
  })
  it('should update status on click CHECK button', () => {
    const mockOnClickFunction = jest.fn()
    render(<Modal show onClose={() => {}} modalData={modalData} />)
    userEvent.click(screen.getByRole('button', { name: 'Close' }))
  })
})
