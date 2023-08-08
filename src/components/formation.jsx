import '../scss/Formation.scss';
function Formation({ show, formation }) {
  return (
    <div class={'formation__text ' + (show ? 'formation__text--transition' : '')}>
      <p> {formation.name} </p>
      <p> {formation.ecole} </p>
    </div>
  );
}
export default Formation;
