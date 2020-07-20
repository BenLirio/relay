import { createMuiTheme } from '@material-ui/core'

const props = {
  MuiCard: {
    variant: 'outlined',
  },
}
const overrides = {}
const primary = {
  light: '#3298fe',
  main: '#005bd1',
  dark: '#005bd1',
  contrastText: '#fff',
}
const secondary = {
  light: '#ffa36e',
  main: '#ffa36e',
  dark: '#ffa36e',
  contrastText: '#fff',
}
const shape = {
  borderRadius: 4,
}
const theme = createMuiTheme({
  props,
  overrides,
  palette: {
    type: 'light',
    primary,
    secondary,
  },
  shape,
})

export default theme
