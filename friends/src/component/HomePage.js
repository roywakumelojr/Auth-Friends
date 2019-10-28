import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import Login from './Login'

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 20px;
    padding: 10px;
`

function FriendsList () {
    
    return (
        <TopContent>
            <h2 className='Logo' >Login To View Your Friends List </h2>
            <div className="key spinner">
                <Loader type="Puff" color="chocolate" height={100} width={100} />
                <p>Waiting For You To Enter Your Login Information...</p>
            </div>
            <Login />
        </TopContent>
    )
   
}

export default FriendsList;