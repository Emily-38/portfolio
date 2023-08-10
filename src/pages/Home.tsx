import '../scss/Home.scss';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'

import React from 'react';

function Home({ isInView }: {isInView: (a:string | boolean) => void}) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && 'Home');
  return (
    <div ref={ref} id="Home">
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
      <p className="name__text">— Developpeuse web en apprentissage</p>
      
    </div>
  );
}
export default Home;
