import '../scss/Contact.scss';
import { useInView } from 'react-intersection-observer';
function Contact({ isInView }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && 'Contact');
  return (
    <div ref={ref} id="Contact" class="contact">
      <h1 class="contact__name">Emily Martorana </h1>
      <p class="contact__text">martorana.emily38@gmail.com</p>
      <p class="contact__text">06 45 68 73 43</p>
      <p class="contact__text">304 boulevard Massenet 73000 Chambery</p>
    </div>
  );
}
export default Contact;
