import { useEffect } from "react";
import { Link } from "react-router-dom"

const CChar = ({ content }) => {

    useEffect(() => {
        window.addEventListener('scroll', controlScroll);
        return () => {
            window.removeEventListener('scroll', controlScroll);
        }
    }, []);

    const controlScroll = () => {
        if (window.scrollY > 300) {
            document.querySelector('.scroll_gamecontrol_img').classList.add('active');
        } else {
            document.querySelector('.scroll_gamecontrol_img').classList.remove('active');
        }
    }

    return (
        <section className="CChar" >
            <div className="container">
                <h2>블루스택 특징</h2>
                <div className="game_control">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/game_control.jpg'} alt='/'></img>
                        <img src={process.env.PUBLIC_URL + '/images/game_control_scroll_img.png'} alt='/' className='scroll_gamecontrol_img'></img>
                    </figure>
                    <div className="game_control_sub">
                        <img src={process.env.PUBLIC_URL + '/images/keyboard.png'}></img>
                        <h2>게임 컨트롤</h2>
                        <p>사전 설정된 컨트롤로 플레이하거나 사용자 지정합니다.</p>
                        <strong><Link to="/BlueStack/Characteristic/Control">더보기</Link></strong>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default CChar