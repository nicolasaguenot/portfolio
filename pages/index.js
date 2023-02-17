import React, { useCallback } from 'react';
import { AppBar, Container, IconButton, makeStyles, Toolbar, Typography, useScrollTrigger, useTheme } from '@material-ui/core';
import Landing from '../src/Landing';
import Skills from '../src/Skills';
import Experience from '../src/Experience';
import About from '../src/About';
import data from '../data.json';
import { darkTheme, lightTheme } from '../src/theme';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import Contact from "../src/Contact";
const { name, projects } = data

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    boxShadow: "none",
  }
}))


export default function Index({ projects, setTheme }) {

  const classes = useStyles()

  const trigger = useScrollTrigger({ disableHysteresis: true })

  const theme = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme => theme.palette.type === 'dark' ? lightTheme : darkTheme)
  }, [setTheme])

  return (
    <div className={classes.root}>
      <AppBar color={!trigger ? "transparent" : "inherit"} className={classes.appBar} position="fixed">
        <Toolbar>
          <Typography variant="h6" component="h1" align={"center"} className={classes.root}>
            { name }
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolbar} />
      <Container>
        <Landing />
        <About/>
        <Experience/>
        <Skills />
        <Contact />
      </Container>
    </div>
  );
}
