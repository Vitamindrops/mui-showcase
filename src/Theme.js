import { createTheme } from '@material-ui/core/styles';
// import {green, orange} from '@material-ui/core/colors'
import 'fontsource-roboto';

const theme = createTheme({
    typography: {
      h2:{
        fontSize: 36,
        marginBottom: 15,
        
      }
    },
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#008394',
      },
    },
      shadows: ['none'],
    
    });

    export default theme;