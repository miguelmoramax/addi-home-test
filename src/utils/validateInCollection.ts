export const validateNationalRegistry = (arr: [], element: string) => {
  return [...arr].map((e: { dni: string }) => e.dni).includes(element)
}

export const validateJudicialRecords = (arr: [], dni: string) => {
  return [...arr].some(
    (el: { dni: string; hasJudicialRecords: boolean }) =>
      el.hasJudicialRecords === true && el.dni === dni
  )
}
