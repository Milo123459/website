import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '../components/Footer';
import theme from '../../lib/theme';
import Layout from '../components/layouts/Main';
import Fonts from '../components/Fonts';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
      <Footer />
    </ChakraProvider>
  );
}
