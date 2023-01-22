import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import actionUser from '../store/action/relational'
import { useEffect } from 'react';
const UserTest = () => {
    const dispatch = useDispatch()
    const user = useSelector((current) => current.relationalReducer)

    useEffect(()=> {
        dispatch(actionUser())
    },[])


    console.log(user)


    return (
        <div>
            <h2>User Test </h2>
        </div>
    );
}

export default UserTest;
