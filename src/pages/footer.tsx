import '../scss/Footer.scss'

import React from 'react';

function Footer(){

    return(<> <hr />
    <div className='footer'>
   
   
  <div className="footer__elementone">       
<p className='footer__elementone__publish' >Publiée :</p>
<p className='footer__elementone__date'>Aout 2023</p>
<p className='footer__elementone__name'> Crée par Martorana Emily </p>
</div>
<div className='footer__elementtwo'>
<p className='footer__elementtwo__contenu'>Contenu complémentaire:</p>
        <p className='footer__elementtwo__cv'> <a href="https://1drv.ms/b/s!AmBpboRwQlMQqBl-31KcMW_OA-sa?e=ZGzG9y"> Télécharger le CV </a> </p>
    </div>
    </div>
</>)}
export default Footer
