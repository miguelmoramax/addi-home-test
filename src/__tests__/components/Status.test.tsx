import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Status } from '../../components/Status/Status'

const items = [
  {
    id: 1,
    dni: '11.111.111-1',
    firstName: 'Miguel',
    lastName: 'Mora',
    birthDate: '20/05/1985',
    email: 'miguelmoramax@email.com',
    status: 'Pending',
    photo: 'https://randomuser.me/api/portraits/men/71.jpg',
  },
]

describe(Status.name, () => {
  it('should display received data', () => {
    render(<Status updateStatus={() => {}} items={items} />)
    expect(screen.getByText('Miguel Mora')).toBeInTheDocument()
  })
})
