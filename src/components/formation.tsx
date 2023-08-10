import Formation from '../models/formation-interface';
import '../scss/Formation.scss';
function FormationText({ show, formation }:{show: boolean; formation: Formation}) {
  return (
    <div className={'formation__text ' + (show ? 'formation__text--transition' : '')}>
      <p className="formation__text__name"> {formation.name} </p>
      <p> {formation.school} </p>
    </div>
  );
}
export default FormationText;
