import React from 'react';
import styled from 'styled-components';
import Friend from './Friend';


const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 20px;
    padding: 10px;
`

export default function FriendsList () {
    
    return (
        <TopContent>
            <h2 className='Logo' >Your Friends List </h2>
            <Friend />
        </TopContent>
    )
   
}