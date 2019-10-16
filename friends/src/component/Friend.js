import React from 'react';
import { Card } from 'semantic-ui-react';


export default function Friend(props) {

    return (
        <Card 
            header={props.name} 
            meta={`Age: ${props.age}`} 
            description={`Email: ${props.email}`}
        />
    )
}