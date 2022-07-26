/* eslint-disable jsx-a11y/alt-text */
//En App.js
import { useState } from 'react';
import ListadoResultados from './ListadoResultados';
import bob from './img/bobrefri.jpg';
import logo from './img/refribob.png';

function App() { 
  const [operaciones, setOperacion] = useState([])

  function area(event)
  {
    event.preventDefault();

    const txCodigo= event.target.txtCodigo.value;
    const txArticulo = event.target.txtArticulo.value;
    const txDescripcion = event.target.txtDescripcion.value;
    const txPrecio = parseInt(event.target.txtPrecio.value);
    const txCantidad = event.target.txtCantidad.value;
    const total = txPrecio * txCantidad;
    const descuento = total * 0.90;

    
    const nuevo = {
       valor1: txCodigo,
       valor2: txArticulo,
       valor3: txDescripcion,
       valor4: txPrecio,
       valor5: txCantidad,
       resultado: total,
       descuento : descuento,
    }

    setOperacion([...operaciones, nuevo])

    event.target.txtCodigo.value = ''
    event.target.txtArticulo.value = ''
    event.target.txtDescripcion.value = ''
    event.target.txtPrecio.value = ''
    event.target.txtCantidad.value = 0
  }
  return (
      <div className='container bg-light'>
        <h1 className='m-auto w-50'>Refrigeracion VANCE</h1>
        <div className='row mt-3'>
            <div className='col-6'>
              <img className='w-50' src={bob}/>
            </div>
            <div className='col-6'>
             <img className='w-50' src={logo}/>
            </div>
        </div>
            <h2>Articulos</h2>
            <form onSubmit={area}>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  Ingrese Codigo
                  <input className='form-control' type="text" name="txtCodigo"/><br/>
              </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  Ingrese Articulo
                  <input className='form-control' type="text" name="txtArticulo"/><br/>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  Descripcion
                  <input className='form-control' type="text" name="txtDescripcion"/><br/>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  Precio
                  <input className='form-control' type="text" name="txtPrecio"/><br/>
                  </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-6'>
                  Cantidad
                  <input className='form-control' type="number" name="txtCantidad"/><br/>
                  </div>
              </div>
              <input className='btn btn-primary' type="submit" value="Calcular articulos"/>
              
            </form> 
            <ListadoResultados resultados={operaciones}/>
      </div>
    
   
    
  );
}

export default App;