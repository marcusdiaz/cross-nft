import App from 'next/app';
import Head from 'next/head';

import '../../styles/globals.css'

class MyApp extends App {


//function MyApp({ Component, pageProps }) {
  render () {

    const { Component, pageProps } = this.props;


    return  (
      <div suppressHydrationWarning>
        {typeof window === 'undefined' ? null : <Component {...pageProps} />}
      </div>
    );
  }
}

export default MyApp
