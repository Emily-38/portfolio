import '../scss/Contact.scss';
import { useInView } from 'react-intersection-observer';

import React from 'react';

function Contact({ isInView }: {isInView: (a:string | boolean) => void}) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && 'Contact');
  return (
    <div ref={ref} id="Contact" className="contact">
      <h1 className="contact__name">Emily Martorana </h1>
      <p className="contact__text">martorana.emily38@gmail.com</p>
      <p className="contact__text">06 45 68 73 43</p>
      <p className="contact__text">304 boulevard Massenet 73000 Chambery</p>
    </div>
  );
}
export default Contact;
