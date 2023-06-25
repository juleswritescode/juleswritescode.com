import { AppProps } from 'next/app';
import '../styles/index.css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(`
    ***************************************************************
    
    Hello my dear Dev-Friend! 👋

    I hope you're doing great. 
    Please reach out if you want to chat, especially if you live in Berlin.

    I'd love to meet like minded people.

    Have a marvelous day! 🤓
    Julian
    
    ***************************************************************
    `);
  }, []);

  return <Component {...pageProps} />;
}
