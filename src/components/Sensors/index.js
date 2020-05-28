// Core
import React from 'react';
import { SocketTest } from './SocketT';

export const Sensors = () =>{
    return(
        <>
            <h1>Various IOT sensors</h1>
            <SocketTest sensor="Name" />
        </>
    )

}

