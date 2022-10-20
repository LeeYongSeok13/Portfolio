import React from 'react';
import VChar from '../component/VChar';
import CChar from '../component/CChar';
import IChar from '../component/IChar';
import MACChar from '../component/MACChar';
import RChar from '../component/RChar';
import '../css/Characteristic.css';


const Characteristic = ({ content }) => {
    return (
        <section className='Characteristic'>
            <VChar word={content} />
            <CChar word={content} />
            <IChar word={content} />
            <MACChar word={content} />
            <RChar word={content} />
        </section>
    )
}

export default Characteristic