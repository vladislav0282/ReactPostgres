import React from 'react';
import { observer } from 'mobx-react-lite';
import {Card, Row} from 'react-bootstrap';
import { Context } from '../index';
import { useContext } from 'react';


const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <Row className="d-flex">
        {device.brands.map(brand =>
 
            <Card 
                style={{cursor:"pointer"}}
                key={brand.id}
                className="p-3"
                border={brand.id === device.selectedBrand.id? "danger" : "Light"}
                onClick={() => device.setSelectedBrand(brand)}
               
           > 
                {brand.name}
            </Card>
        
        )}
    </Row>
  )
})

export default BrandBar;