const MACChar = ({ content }) => {
    return (
        <section className="MACChar">
            <div className="container">
                <div className="macro">
                    <video autoPlay muted loop controls height='431.25'>
                        <source src={process.env.PUBLIC_URL + '/images/macro.mp4'}></source>
                    </video>
                    <div className="macro_sub">
                        <img src={process.env.PUBLIC_URL + '/images/macro.png'} alt='/'></img>
                        <h2>매크로</h2>
                        <p>한번의 클릭으로 패턴을 저장하고 실행합니다.</p>
                        <strong><a href="/">더보기</a></strong>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default MACChar 