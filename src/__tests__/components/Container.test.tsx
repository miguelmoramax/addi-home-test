import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Container } from '../../components/Container/Container'

describe(Container.name, () => {
  it('should display Status component', () => {
    render(<Container/>)
    const text = screen.getByText('Leads')
    expect(text).toBeInTheDocument()
  })
})
