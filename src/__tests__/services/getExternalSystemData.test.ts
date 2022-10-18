import {
  getNationalRegistry,
} from '../../services/getExternalSystemData'

const MOCK_NATIONAL_REGISTRY = [
  {
    dni: '11.111.111-1',
    firstName: 'Miguel',
    lastName: 'Mora',
    birthDate: '20/05/1985',
    email: 'miguelmoramax@email.com',
  },
  {
    dni: '11.111.111-2',
    firstName: 'Miguel',
    lastName: 'Mora',
    birthDate: '20/05/1985',
    email: 'miguelmoramax@email.com',
  },
  {
    dni: '11.111.111-5',
    firstName: 'Miguel',
    lastName: 'Mora',
    birthDate: '20/05/1985',
    email: 'miguelmoramax@email.com',
  },
  {
    dni: '11.111.111-8',
    firstName: 'Miguel',
    lastName: 'Mora',
    birthDate: '20/05/1985',
    email: 'miguelmoramax@email.com',
  },
]


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_NATIONAL_REGISTRY),
  })
) as jest.Mock

describe('Get National Registry data', () => {
  let nationalRegistry:any
  beforeEach(async () => {
    nationalRegistry = await getNationalRegistry()
  })

  describe('Call and return data from National Registry', () => {
    it('Then the correct data should be returned from National Registry', () => {
      expect(nationalRegistry).toEqual(MOCK_NATIONAL_REGISTRY)
    })
  })
})


