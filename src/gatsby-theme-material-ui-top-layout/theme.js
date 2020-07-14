import { createMuiTheme } from "@material-ui/core";

const props = {
  MuiCard: {
    variant: 'outlined'
  }
}
const overrides = {
}
const primary = {
  light: '#3298fe',
  main: '#005bd1',
  dark: '#005bd1',
  contrastText: '#fff'
}
const secondary = {
  light: '#ffa36e',
  main: '#ffa36e',
  dark: '#ffa36e',
  contrastText: '#fff'
}
const h1 = {
  fontSize: '5rem'
}
const h2 = {
  fontSize: '4rem'
}
const h3 = {

}
const h4 = {

}
const h5 = {

}
const typography = {
  fontFamily: '"Montserrat"',
  h1,
  h2,
  h3,
  h4,
  h5,
}
const shape = {
  borderRadius: 4
}
const theme = createMuiTheme({
  props,
  overrides,
  palette: {
    type: 'light',
    primary,
    secondary,
  },
  typography,
  shape
});

export default theme;