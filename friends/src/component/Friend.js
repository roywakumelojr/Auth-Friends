import React from 'react';
import { Card } from 'semantic-ui-react';


const Friend = ({ friend }) => {
    const {name, age, email} = friend

    return (
        <Card 
            header={name} 
            meta={`Age: ${age}`} 
            description={`Email: ${email}`}
        />
    )
}

export default Friend