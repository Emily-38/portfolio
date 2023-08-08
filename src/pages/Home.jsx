import '../scss/Home.scss';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect'
function Home({ isInView }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && 'Home');
  return (
    <div ref={ref} id="Home">
      <h1  class="name"> 
      <Typewriter 
      options={{
        autoStart: true, 
        loop:true,
        delay: 150,
        deleteSpeed: 1000000000,
        strings: ['Emily <span class="name__lastname"> Martorana </span>'],
      }} />      
      </h1>
      <p class="name__text">— Developpeuse web en apprentissage</p>
      
    </div>
  );
}
export default Home;
