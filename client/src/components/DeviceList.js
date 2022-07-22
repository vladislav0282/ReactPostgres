import React from 'react';
import { observer } from 'mobx-react-lite';
import Row from 'react-bootstrap/Row';
import DevceItem from './DevceItem';
import { useContext } from 'react';
import { Context } from './../index';


const DeviceList = observer (()=> {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DevceItem key={device.id} device={device}/>
            )}
            
        </Row>
    
      

  )
})

export default DeviceList;