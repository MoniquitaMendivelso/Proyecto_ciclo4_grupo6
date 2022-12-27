import React from 'react';
import Button from '../components/forms/Button';
import Gap from '../components/forms/Gap';


function Services() {
    return ( 
        <div>
            <h1>Servicios Adicionales</h1>
            <ol>
                <li>Desayuno <input type={'checkbox'}></input> </li>
                <li>Almuerzo <input type={'checkbox'}></input></li>
                <li>Cena <input type={'checkbox'}></input></li>
            </ol>
            <Gap>1rem</Gap>
          <Button>Guardar</Button>
        </div> 
        
    );
    
    
}

export default Services;