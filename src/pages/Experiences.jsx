import { Experienceslist } from '../Listes/Experienceslist';
import '../scss/Experience.scss';
import { useInView } from 'react-intersection-observer';

function Experiences({ isInView }) {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  isInView(inView && 'Experience');
  return (
    <>
      <ul ref={ref} id="Experiences" class="experience">
        {Experienceslist.map((experience) => (
          <li key={experience.id} class={'experience__elem experience__elem--' + experience.id}>
            <div class="experience__elem__summary">
              <h2 class="experience__title">{experience.company}</h2>
            </div>

            <div class="experience__elem__content">
              <h2>{experience.date}</h2>
              <h3>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 32 32"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    class="cls-1"
                    d="M28 8h-7V6a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM13 6h6v2h-6Zm15 4v9H4v-9ZM4 26v-5h24v5Z"
                  />
                  <path fill="currentColor" class="cls-1" d="M15 18h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2Z" />
                </svg>
                {experience.title}
              </h3>
              <h3>
                <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path
                    fill="currentColor"
                    d="M444.233 169.659C434.592 72.933 353.67 0 256.01 0 151.676 0 66.798 84.878 66.798 189.212c0 41.238 12.957 80.324 37.489 113.062L242.163 504.63c3.109 4.609 8.293 7.369 13.847 7.369s10.738-2.76 13.847-7.369l137.496-201.855c28.576-37.945 41.674-85.226 36.88-133.116zM256.01 272.689c-46.031 0-83.476-37.445-83.476-83.476s37.445-83.476 83.476-83.476 83.476 37.445 83.476 83.476-37.445 83.476-83.476 83.476z"
                  />
                  <path
                    fill="currentColor"
                    d="M339.486 189.212c0 46.031-37.445 83.476-83.476 83.476V512c5.554 0 10.738-2.76 13.847-7.369l137.496-201.855c28.576-37.945 41.672-85.226 36.88-133.117C434.592 72.933 353.67 0 256.01 0v105.736c46.031 0 83.476 37.446 83.476 83.476z"
                  />
                </svg>
                {experience.place}
              </h3>
              <p>{experience.role}</p>
              <p>Competences acquise : </p>
              <ul>
                <li>{experience.skillone}</li>
                <li>{experience.skilltwo}</li>
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Experiences;
