import React from 'react'
import Controlhead from './Controlhead';
import ControlMain from './ControlMain';
import ControlList from './ControlList';
import '../css/Characteristic.css';

const Control = () => {
    return (
        <section className='Control'>
            <Controlhead />
            <ControlMain />
            <ControlList />
        </section>
    )
}

export default Control