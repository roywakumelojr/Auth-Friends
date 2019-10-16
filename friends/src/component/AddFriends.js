import React, { useState } from 'react';
import  { axiosWithAuth } from '../utils/axiosWithAuth'

const AddFriends = () => {
    const [info, setInfo] = useState ({name:'', age:'', email:''});

    const handleChanges = e => {
        setInfo({
            ...info,
            [e.target.name] : e.target.value
        });
    }

    const onSubmit = e => {
        axiosWithAuth()
            .post('api/friends', info)
            .then(res => {
                setInfo(res => {
                    setInfo({
                        ...info,
                        name:'',
                        age:'',
                        email:''
                    })
                })
            })
        .catch(err => console.log('There was as error add', err.response))
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' name='name' value={info.name} placeholder='Enter Name' onChange={handleChanges} />
                <input type='text' name='age' value={info.age} placeholder='Enter Age' onChange={handleChanges} />
                <input type='text' name='email' value={info.email} placeholder='Enter Email' onChange={handleChanges} />
                <button type='submit'> Add Friend </button>
            </form>
        </div>
    )
}

export default AddFriends;