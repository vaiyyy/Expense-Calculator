import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import {v4 as uuidv4 } from 'uuid';
const AddExpenseForm = () => {

    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {

        event.preventDefault();

        const expense ={
            id: uuidv4(),
            name: name,
            cost: parseFloat(cost),

        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setCost('');
        setName('');

    };

    return(
        <form onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input value={name} onChange={(event)=> setName(event.target.value)} required='required' type='text' className='form-control' id='name'></input>
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input value={cost} onChange={(event)=> setCost(event.target.value)} required='required' type='text' className='form-control' id='cost'></input>
                </div>
                
                </div>
            <div className='row'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary mt-3'>Save</button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;