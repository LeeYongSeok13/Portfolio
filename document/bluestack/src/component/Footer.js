import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section className="Footer">
            <div className="container">
                <ul>
                    <li>
                        <Link to="">제품</Link>
                        <ul>
                            <li><Link to="">BlueStacks 10</Link></li>
                            <li><Link to="">블루스택 5</Link></li>
                        </ul>
                    </li>
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
                        <Link to="/">게임</Link>
                        <ul>
                            <li><Link to="/">TOP 게임</Link></li>
                            <li><Link to="/">액션</Link></li>
                            <li><Link to="/">롤플레잉</Link></li>
                            <li><Link to="/">아케이드</Link></li>
                            <li><Link to="/">전략</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">기업소개</Link>
                        <ul>
                            <li><Link to="/">문의처</Link></li>
                            <li><Link to="/">채용</Link></li>
                            <li><Link to="/">언론 보도</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">제휴 파트너</Link>
                        <ul>
                            <li><Link to="/">자주하는 질문</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">지원</Link>
                        <ul>
                            <li><Link to="/">업데이트</Link></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        팔로잉하기
                        <ul className='sns'>
                            <li><a href='https://www.reddit.com/r/BlueStacks/' target='_blank' without rel="noreferrer"><i className='xi-reddit'></i></a></li>
                            <li><a href='https://www.facebook.com/BlueStacksInc' target='_blank' without rel="noreferrer"><i className='xi-facebook'></i></a></li>
                            <li><a href='https://twitter.com/bluestacksinc' target='_blank' without rel="noreferrer"><i className='xi-twitter'></i></a></li>
                        </ul>
                    </li>
                    <li>
                        구독하기
                        <ul className='subscribe'>
                            <li><a href='https://www.youtube.com/channel/UCwpI8ANUtmHcKHVVh3qqnTw?sub_confirmation=1' target='_blank' without rel="noreferrer"><i className='xi-youtube-play'></i></a></li>
                            <li><a href='https://tv.naver.com/bluestacks001' target='_blank' without rel="noreferrer"><i className='xi-naver'></i></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default Footer