import { createMuiTheme } from "@material-ui/core"
import { typography } from "./typography"

const props = {
  MuiCard: {
    variant: "outlined",
  },
}
const overrides = {}
const primary = {
  light: "#3298fe",
  main: "#005bd1",
  dark: "#252475",
  lightGray: "#EEEEEE",
  darkGray: "#323232",
  contrastText: "#fff",
}
const secondary = {
  light: "#ffa36e",
  main: "#ffa36e",
  dark: "#ffa36e",
  contrastText: "#fff",
}
const shape = {
  borderRadius: 4,
}
const theme = createMuiTheme({
  props,
  overrides,
  palette: {
    type: "light",
    primary,
    secondary,
    background: {
      default: "#FFFFFF",
    },
  },
  shape,
  typography,
})

export default theme
