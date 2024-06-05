import React from 'react'
import CrearFichas from './CrearFichas';

function InicioFichas() {
/*
Esto deberia tener 2 partes la de arriba con la creacion de fichas que podria ocupar como un
25-35% de la parte superior de la pantalla y la parte inferior seria una lista con las fichas creadas
*/


        return (
            
            <div className="fichas-inicio-container flex flex-col">{/*Se le aplica ichas-inicio-container flex y flex-col es que esta en columna*/}
               
                <div className=' h-30vh  bg-gray-400'> {/*el div tiene el 30% de la pantalla arriba y background gris*/}
                <CrearFichas />
                
                
                
                </div>

                <div className='flex-1 bg-gray-200'>


                </div>


            </div>
        );
    };
    export default InicioFichas;