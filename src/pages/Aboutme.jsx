import React from 'react';

const Aboutme = () => {
  return (
    <div className='overlay-home overlay'>

    <div className='about' id='about'>
      <h1>¿Quien soy?</h1>
      <div className='nameAndCountry'>
        <h2 className='myName'>Marcos Arturo Alape Diaz</h2>
        <span className="mycountry">Colombia</span>
      </div>
      <div className='myDescription'>
        <p>
          Colombiano, tengo 19 años, amante de la tecnologia emosionado por crear cosas nuevas y mejores cada dia.
        </p>

        <p>
          Quiero prepararme para enfrentar retos cada vez mas y mas complejos, crecer profesionalmente y especializarme en mi area.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Aboutme;