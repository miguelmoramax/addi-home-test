export const getNationalRegistry = async (dni?: string) => {
  try {
    const response = await fetch('/nationalRegistry.json')
    const nationalRegistry = await response.json()
    return nationalRegistry
  } catch {
    return null
  }
}

export const getJudicialRecords = async () => {
  try {
    const response = await fetch('/judicialRecords.json')
    const judicialRecords = await response.json()
    return judicialRecords
  } catch {
    return null
  }
}
