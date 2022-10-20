import React from 'react';
import { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const RANK = [
    { id: 1, title: "원신" },
    { id: 2, title: "리니지M" },
    { id: 3, title: "히트2" },
    { id: 4, title: "리니지W" },
    { id: 5, title: "오딘: 발할라 라이징" },
    { id: 6, title: "던전앤파이터 모바일" },
    { id: 7, title: "붕괴 3rd" },
    { id: 8, title: "세븐나이츠 레볼루션" },
    { id: 9, title: "페이트 그랜드 오더" }
]

const Rank = ({ content }) => {
    const mainRank = useRef(null);

    const settings = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        vertical: true,
    }
    return (
        <section className="Rank">
            <strong>실시간 모바일 게임 랭킹</strong>
            <div className="container">
                <Slider {...settings} ref={mainRank}>
                    {
                        RANK.map((rank, idx) => {
                            return (
                                <div className='rank_slider'>
                                    <ul>
                                        <li key={rank.id} className={"rank0" + rank.id}>{rank.id + '위 ' + rank.title}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    )
}
export default Rank