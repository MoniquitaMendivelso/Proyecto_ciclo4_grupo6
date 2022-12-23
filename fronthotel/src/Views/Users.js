import React from 'react';
import { useParams } from 'react-router-dom';


function Users() {
    const {name} = useParams()

    return ( 
    
            <h1>
                Buscar Huesped: {name}
            </h1>    
     );
}

export default Users;