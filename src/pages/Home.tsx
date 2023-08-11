import '../scss/Home.scss';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'
import Page from '../models/enumeration-page';

import React from 'react';

function Home({ isInView }: {isInView: (a:string | boolean) => void}) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && Page.Home);
  return (
    <div ref={ref} id={Page.Home}>
      <h1 className="name"> 
      <Typewriter 
      options={{
        autoStart: true, 
        loop:true,
        delay: 150,
        deleteSpeed: 1000000000,
        strings: ['Emily <span class="name__lastname"> Martorana </span>'],
      }} />      
      </h1>
      <div className='block'>
      <hr className='block__trait' />
      <p className="block__text"> Développeuse web en apprentissage</p>
      </div>
    </div>
  );
}
export default Home;
