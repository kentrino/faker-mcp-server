export function isJsonValid(data: string): boolean {
  try {
    JSON.parse(data)
    return true
  } catch (error) {
    return false
  }
}
