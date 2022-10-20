import React from 'react';
import { Link } from 'react-router-dom';

const Navmenu = () => {
    return (
        <div className='Navmenu'>
            <ul>
                <li>
                    <Link to="/BlueStack/Characteristic">특징</Link>
                    <ul>
                        <li><Link to="/BlueStack/Characteristic/Control">게임 컨트롤</Link></li>
                        <li><Link to="/BlueStack/Characteristic/Multi">멀티 인스턴스</Link></li>
                        <li><Link to="/BlueStack/Characteristic/Macro">매크로</Link></li>
                        <li><Link to="/BlueStack/Characteristic/Reset">리세마라</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/BlueStack/Game">게임</Link>
                    <ul>
                        <li><Link to="/">TOP 게임</Link></li>
                        <li><Link to="/">액션</Link></li>
                        <li><Link to="/">롤플레잉   </Link></li>
                        <li><Link to="/">아케이드</Link></li>
                        <li><Link to="/">전략</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to="/BlueStack/Blog">블로그</Link>
                    <ul>
                        <li><Link to="/">게임</Link></li>
                        <li><Link to="/">블루스택</Link></li>
                        <li><Link to="/">뉴스</Link></li>
                    </ul>
                </li>
                <li><Link to="/BlueStack/Support">지원</Link></li>
                <li><a href="https://cafe.naver.com/bluestackskr/" target='_blank' without rel="noreferrer">블루스택공식카페</a></li>
            </ul>
        </div >
    )
}
export default Navmenu