import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#58a6ff',
    },
    secondary: {
      main: '#ff80ab',
    },
    background: {
      default: '#0d1117',
      paper: '#161b22',
    },
    error: {
      main: '#da4336',
    },
  },
  // palette: {
  //   type: 'dark',
  //   primary: {
  //     main: '#6074f4',
  //   },
  //   secondary: {
  //     main: '#9327d0',
  //   },
  // },
})

export default theme