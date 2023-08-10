import '../scss/Presentation.scss';
import { useInView } from 'react-intersection-observer';
import Page from '../models/enumeration-page';

function Presentation({ isInView}: {isInView: (a:string | boolean) => void}) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  

  isInView(inView && Page.Presentation);

  return (
    <div ref={ref} id={Page.Presentation} className="presentation">
      <p>
        Passionée de jeux vidéo, je me suis intéressée aux différents
        <span className="presentation__text"> langages informatiques </span>. Cela m'a permis de découvrir le métier de
        <span className="presentation__text"> développeur web</span>, C'est ainsi que j'ai décidé de devenir développeuse
        web.
      </p>
      <p>
        Je me suis formée en autodidacte sur les langages web: <span className="presentation__text"> HTML,CSS </span>et
        <span className="presentation__text"> JavaScript</span>
      </p>
    </div>
  );
}
export default Presentation;
