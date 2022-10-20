import React from 'react';
import MainVisual from '../component/MainVisual';
import Rank from '../component/Rank';
import Advertise from '../component/Advertise';
import "../css/Main.css";

const Main = ({ content }) => {
    return (
        <main className='Main'>
            <MainVisual word={content} />
            <Rank word={content} />
            <Advertise word={content} />
        </main>
    )
}
export default Main