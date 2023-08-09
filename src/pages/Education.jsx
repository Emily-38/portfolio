import '../scss/Education.scss';
import { formationslist } from '../Listes/Formationslist';
import * as React from 'react';
import Formation from '../components/formation';
import { useInView } from 'react-intersection-observer';

function Formations({ isInView }) {
  function indexOnClique(index) {
    setIndexClicked(index);
  }

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const [indexClicked, setIndexClicked] = React.useState();

  isInView(inView && 'Education');

  return (
    <ul ref={ref} id="Education" class="formation">
      {formationslist.map((formation, index) => (
        <li key={formation.id} class="formation__year">
          <button class="formation__button " type="button" onClick={() => indexOnClique(index)}>
            {formation.year}
          </button>
          <Formation show={indexClicked === index} formation={formation} />
        </li>
      ))}
    </ul>
  );
}
export default Formations;
