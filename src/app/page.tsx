
import { HomePage } from '@/components';
import Script from 'next/script'

export default function Home() {
  return (
    <>
        <main className="main container">
<HomePage/>
        </main>
     <Script src="/js/gsap.min.js"/>
 
 <Script src="/js/main.js"/>

    </>
    
  );
}
