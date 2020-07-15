import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
//import theme from ".src\gatsby-theme-material-ui-top-layout"
import Button from "@material-ui/core/Button"

const OutlinedButton = ({ text }) => {
  // const classes = useStyles() // code from Material UI
  return (
    <div className="OutlinedButton">
      <Button variant="outlined" color="primary">
        {/*Change this to Relay theme colors*/}
        {text}
      </Button>
    </div>
  )
}

export default OutlinedButton
