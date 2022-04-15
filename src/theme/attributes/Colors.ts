export interface Colors {
  brand: IBrandColors,
  action: IActionColors,
}

export interface IActionColors {
  error100: string
  error200: string
  error300: string
  success100: string
  success200: string
  success300: string
}

export interface IBrandColors {
  primary100: string,
  primary200: string,
  primary300: string,
  primary400: string,
  primary500: string,
  background100: string,
  background200: string,
  background300: string,
  background400: string,
  background500: string,
  text100: string,
  text200: string,
  text300: string,
  text400: string,
  text500: string,
  text600: string,
}


export const colors: Colors = {
  brand: {
    primary100: '#f8a997',
    primary200: '#f59880',
    primary300: '#FE8E72',
    primary400: '#f38468',
    primary500: '#dd7055',
    background100: '#3a3b45',
    background200: '#2c2d35',
    background300: '#1d1e24',
    background400: '#0f1013',
    background500: '#040405',
    text100: '#e5e9fc',
    text200: '#c9ccdb',
    text300: '#a9acb8',
    text400: '#888b94',
    text500: '#686b72',
    text600: '#53565b',
  },
  action: {
    error100: '#ea5757',
    error200: '#de4c4c',
    error300: '#b83c3c',
    success100: '#7fe76e',
    success200: '#58cf43',
    success300: '#3eab29',
  },

}