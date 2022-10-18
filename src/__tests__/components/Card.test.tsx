import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Card } from '../../components/Card/Card'

const item = {
  id: 1,
  dni: '11.111.111-1',
  firstName: 'Miguel',
  lastName: 'Mora',
  birthDate: '20/05/1985',
  email: 'miguelmoramax@email.com',
  status: 'Pending',
  photo: 'https://randomuser.me/api/portraits/men/71.jpg',
}

describe(Card.name, () => {
  it('should display received data', () => {
    render(<Card updateStatus={() => {}} item={item} />)
    expect(screen.getByText('Miguel Mora')).toBeInTheDocument()
  })
  it('should update status on click CHECK button', () => {
    const mockOnClickFunction = jest.fn()
    render(<Card updateStatus={mockOnClickFunction} item={item} />)
    userEvent.click(screen.getByRole('button', { name: 'CHECK' }))
  })
})
