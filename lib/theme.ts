import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: props => ({
    body: {
      bg: mode('', '#202033')(props)
    }
  })
};

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#595959',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      },
      'section-subtitle': {
        textDecoration: 'underline',
        fontsize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#595959',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d8aed', '#ff43c3')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading:
    "@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');"
};

const colors = {
  glassTeal: '#90f5f1'
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
