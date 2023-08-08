import '../scss/Presentation.scss';
import { useInView } from 'react-intersection-observer';
import * as React from 'react';

function Presentation({ isInView }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  isInView(inView && 'Presentation');

  return (
    <div ref={ref} id="Presentation" class="presentation">
      <p>
        Passionée de jeux vidéo, je me suis intéressée aux différents
        <span class="presentation__text"> langages informatiques </span>. Cela m'a permis de découvrir le métier de
        <span class="presentation__text"> développeur web</span>, C'est ainsi que j'ai décidé de devenir développeuse
        web.
      </p>
      <p>
        Je me suis formée en autodidacte sur les langages web: <span class="presentation__text"> HTML,CSS </span>et
        <span class="presentation__text"> JavaScript</span>
      </p>
    </div>
  );
}
export default Presentation;
