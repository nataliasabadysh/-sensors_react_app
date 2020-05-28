// Core
import React, { useEffect, useContext , useState} from 'react';

// Components
import { Context } from '../Context';
import { socket } from '../../socket/init';

const Sensor = [{id:"00",name:"0000",connected: false, unit:"test",value:"value"}];

export const SocketTest = () => { 
    const [ sensors, setSensor ] = useState([]);

    const _toggle = (parametr) => setSensor(prevState => ({
            sensors: prevState.sensors.map(sensor => 
                sensor.id === parametr ? { 
                    ...sensor, 
                    connected: !sensor.connected 
                } : sensor,
             ),
        })
    ); 

    useEffect(() => {
        socket.on('connect', (dataJson)=> {
            const { data } = JSON.parse(dataJson);
            console.log(data);
        });

        socket.on('disconnect', (dataJson) => {
            const { data } = JSON.parse(dataJson);
            console.log(data);
        });

        return () => {
            socket.removeListener('connect');
            socket.removeListener('disconnect');
        };
    }, []);

    const sensorListJSX =  sensors && <ul> { 
            sensors.map(({ name, connected, value, id })=> 
                <li key={id}>
                    <p>{name && name} </p>
                    <p> Descriptions {value && value} </p>
                        <label>
                            <input type="checkbox" checked={connected} onChange={_toggle} /> 
                            {connected ? 'Connected' : 'Disconected' } 
                        </label>
                </li>
            )}</ul>

    return <>{ sensorListJSX }</>
    
};
