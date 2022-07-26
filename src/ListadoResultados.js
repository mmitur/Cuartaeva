function ListadoResultados(prop)
{
   return(
            
            prop.resultados.map((elemento)=>
            //<li>Lado A:{elemento.valor1} Lado B:{elemento.valor2} área rectángulo:{elemento.resultado}</li>,
            <table class="table table-light mt-3">
            <tbody>
                <tr>
                  <td>Codigo</td>
                  <td>Articulo</td>
                  <td>Descripcion</td>
                  <td>Precio</td>
                  <td>Cantidad</td>
                  <td>Total</td>
                  <td>Total Descuento</td>
                </tr>
                <tr>
                  <td>{elemento.valor1}</td>
                  <td>{elemento.valor2}</td>
                  <td>{elemento.valor3}</td>
                  <td>{elemento.valor4}</td>
                  <td>{elemento.valor5}</td>
                  <td>{elemento.resultado}</td>
                  <td>{elemento.descuento}</td>
                </tr>
            </tbody>
            </table>
            )
   );

}

export default ListadoResultados;