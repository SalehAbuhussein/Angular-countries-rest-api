export interface Country {
  name: {
    common: string,
  },
  capital: string[],
  region: string,
  population: number,
  flags: {
    png: string,
    alt: string
  }
}