import {
  getJudicialRecords,
  getNationalRegistry,
} from './getExternalSystemData'
import {
  validateNationalRegistry,
  validateJudicialRecords,
} from '../utils/validateInCollection'

export const validateExternalSystem = async (
  dni: string
): Promise<[boolean, boolean]> => {
  try {
    const [judicialRecords, nationalRegistry] = await Promise.all([
      getJudicialRecords(),
      getNationalRegistry(),
    ])
    const hasJudicialRecords = validateJudicialRecords(judicialRecords, dni)
    const existsInNationalRegistry = validateNationalRegistry(
      nationalRegistry,
      dni
    )
    return [hasJudicialRecords, existsInNationalRegistry]
  } catch (error) {
    console.log(error)
  }
  return [false, false]
}
