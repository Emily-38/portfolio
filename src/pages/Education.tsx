import '../scss/Education.scss';
import { formationslist } from '../Listes/Formationslist';
import * as React from 'react';
import FormationText from '../components/formation';
import { useInView } from 'react-intersection-observer';
import Page from '../models/enumeration-page';

function Formations({ isInView }: {isInView: (a:string | boolean) => void}) {
  function indexOnClique(index: number) {
    setIndexClicked(index);
  }

  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  const [indexClicked, setIndexClicked] = React.useState<number>();

  isInView(inView && Page.Education);

  return (
    <ul ref={ref} id={Page.Education} className="formation">
      {formationslist.map((formation, index) => (
        <li key={formation.id} className="formation__year">
          <button className="formation__button " type="button" onClick={() => indexOnClique(index)}>
            {formation.year}
            <svg className={'formation__finger '+(indexClicked === index ?'formation__finger--isActive': '')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125"><path d="M43 957.362c-9.918 0-18 8.083-18 18 0 6.227 3.172 11.736 8 14.969v-5.188a13.878 13.878 0 0 1-4-9.78c0-7.756 6.244-14 14-14 7.755 0 14 6.244 14 14 0 3.824-1.524 7.262-4 9.78v5.188c4.827-3.233 8-8.742 8-14.969 0-9.917-8.083-18-18-18zm0 14c-4.398 0-8 3.603-8 8v27.531c-1.239-2.677-3.462-5.57-6.25-6.28-3.794-1.03-8.442 2.004-9.5 5.53-.54 1.966-.188 4.203.875 6.938 5.195 12.493 11.592 24.487 19.375 33.594.372.428.933.685 1.5.687h27c.425 0 .848-.149 1.187-.406 2.879-2.133 5.2-5.765 7.125-10.094 1.926-4.328 3.4-9.35 4.157-14.25.755-4.9.752-9.489-.313-13.562-1.028-3.932-3.802-7.204-7.937-7.688-.975 0-2.005.081-2.875.281-.513-1.226-1.232-2.272-2.125-2.906-1.496-1.061-3.018-1.395-4.25-1.375-1.184.02-2.263.45-3.22 1.125-.43-.656-.872-1.34-1.437-1.75-1.482-1.077-3.06-1.375-4.312-1.375-1.036 0-2.04.288-3 .688v-16.688c-.085-5.353-4.307-8.01-8-8zm0 4c2.25 0 4 1.75 4 4v21c-.013.907.679 1.766 1.562 1.969.884.203 1.867-.272 2.25-1.094.442-.918 2.106-1.875 3.188-1.875.485 0 1.386.202 1.969.625.582.424 1.03.919 1.03 2.375 0 .89.667 1.73 1.532 1.938.865.207 1.845-.24 2.25-1.032.813-1.626 1.249-1.889 2.25-1.906.277 0 1.248.18 1.875.625s1.094.957 1.094 2.375a2.02 2.02 0 0 0 1.187 1.844c.715.31 1.622.16 2.188-.375.758-.374 1.502-.487 2.469-.469 2.384.304 3.622 1.798 4.468 4.781.855 3.012.886 7.315.188 11.844-.699 4.529-2.08 9.285-3.844 13.25-1.655 3.72-3.682 6.624-5.469 8.125H41.97c-7.02-8.281-13.725-20.998-18.094-31.719-.91-2.341-.992-3.685-.781-4.437.74-1.934 2.815-3.027 4.593-2.75 2.127.8 2.654 2.22 3.563 3.844l3.969 7.968c.404.792 1.385 1.239 2.25 1.032.864-.207 1.529-1.049 1.53-1.938v-36c0-2.25 1.75-4 4-4z" overflow="visible" transform="translate(0 -952.362)"/></svg>
          </button>
          <FormationText show={indexClicked === index} formation={formation} />
        </li>
      ))}
    </ul>
  );
}
export default Formations;
