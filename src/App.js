import './miCss.css';
import imagen0 from './Image/rey_atanagildo.png';
import imagen1 from './Image/rey_ataulfo.png';
import imagen2 from './Image/rey_ervigio.png';
import incog from './Image/rey_incognito.png';

function App() {
  let nombres = ["Rey Atanagildo", "Rey Ataulfo", "Rey Ervigio"];
  const cambiarTexto = (e) => {
    if(e.target.innerHTML === 'VISTO'){
      e.target.style.visibility = "hidden";
    }else{
      e.target.innerHTML = 'VISTO';
    }
  }
  const cambiarImagen = (e) => {
    if(e.target.src.includes('rey_incognito')){
      e.target.style.visibility = 'hidden';
    }else{
      e.target.src = incog;
      e.target.parentNode.style.backgroundColor = 'white';
    }
  }

  return (
    <div className="container">
      <div className="box">
        <img onClick={cambiarImagen} src={imagen0} alt=""/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[0]}</div>
      </div>
      <div className="box">
        <img onClick={cambiarImagen} src={imagen1} alt=""/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[1]}</div>
      </div>
      <div className="box">
        <img onClick={cambiarImagen} src={imagen2} alt=""/>
        <div onClick={cambiarTexto} className='nombre'>{nombres[2]}</div>
      </div>
    </div>
  );
}

export default App;
