import '../scss/Education.scss';
import { formationslist } from '../Listes/Formationslist';
import * as React from 'react';
import FormationText from '../components/formation';
import { useInView } from 'react-intersection-observer';

function Formations({ isInView }: {isInView: (a:string | boolean) => void}) {
  function indexOnClique(index: number) {
    setIndexClicked(index);
  }

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const [indexClicked, setIndexClicked] = React.useState<number>();

  isInView(inView && 'Education');

  return (
    <ul ref={ref} id="Education" className="formation">
      {formationslist.map((formation, index) => (
        <li key={formation.id} className="formation__year">
          <button className="formation__button " type="button" onClick={() => indexOnClique(index)}>
            {formation.year}
          </button>
          <FormationText show={indexClicked === index} formation={formation} />
        </li>
      ))}
    </ul>
  );
}
export default Formations;
