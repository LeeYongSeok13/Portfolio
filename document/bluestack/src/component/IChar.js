import { useEffect } from "react";
import { Link } from "react-router-dom";

const IChar = ({ content }) => {

    useEffect(() => {
        window.addEventListener('scroll', multiScroll);
        return () => {
            window.removeEventListener('scroll', multiScroll);
        }
    }, []);

    const multiScroll = () => {
        if (window.scrollY > 900) {
            document.querySelector('.scroll_multi_img').classList.add('active');
        } else {
            document.querySelector('.scroll_multi_img').classList.remove('active');
        }
    }

    return (
        <section className="IChar">
            <div className="container">
                <div className="multi">
                    <div className="multi_sub">
                        <img src={process.env.PUBLIC_URL + '/images/multi.png'} alt='/'></img>
                        <h2>멀티 인스턴스</h2>
                        <p>여러 게임을 동시에 플레이합니다.</p>
                        <strong><Link to='/BlueStack/Characteristic/Multi'>더보기</Link></strong>
                    </div>
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/multi_img.jpg'} alt='/'></img>
                        <img src={process.env.PUBLIC_URL + '/images/multi_scroll_img.jpg'} alt='/' className='scroll_multi_img'></img>
                    </figure>
                </div>
            </div>
        </section >
    )
}
export default IChar