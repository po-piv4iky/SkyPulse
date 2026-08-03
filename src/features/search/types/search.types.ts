export interface SearchResult {
  name: string
  country: string
  state?: string
  lat: number
  lon: number
  temperature: number
  icon: string | null
  description: string
}
