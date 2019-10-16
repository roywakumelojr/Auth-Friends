import React, { useState, useEffect }from 'react';
import styled from 'styled-components';
import Friend from './Friend';
import { axiosWithAuth } from '../utils/axiosWithAuth'
import AddFriends from './AddFriends';

const FriendsTitle = styled.div`
    font-size: 2rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 150px 20px 20px;
    padding: 10px;
`

export default function FriendsList () {
    const [friends, setFriends] = useState ([]);

    useEffect(() => {
        axiosWithAuth()
            .get('api/friends')
            .then (res => {
                console.log(res);
                setFriends(res.data)
            })
        .catch(err => {
            console.log(err)
        });
    }, [])
    
    return (
        <div>
            <FriendsTitle>Your Friends List </FriendsTitle>
            <AddFriends />
            {friends.map(friend => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}