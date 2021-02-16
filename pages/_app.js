import '../styles/globals.css';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  });

  return (
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <Component {...pageProps} key={router.route} />
      </AnimateSharedLayout>
    </AnimatePresence>
  );
}

export default MyApp;
