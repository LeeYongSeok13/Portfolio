const Advertise = ({ content }) => {
    return (
        <section className="Advertise">
            <div className="container">
                <div className="Ad01">
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/advertise01.png'} alt='/'></img>
                    </figure>
                    <div className="Ad01_sub">
                        <h2>2백만개 이상의 무료 Android 게임 중에서 선택</h2>
                        <p>최고의 RPG 및 전략 타이틀로 거대한 퀘스트와 끝없는 재미를 즐기십시오.
                            <br /> 클라우드에서 스릴 넘치는 새로운 Android 게임을 시도하거나 PC에서 로컬로 플레이하십시오.</p>
                    </div>
                </div>
                <div className="Ad02">
                    <div className="Ad02_sub">
                        <h2>앱 플레이어 또는 클라우드 클라이언트를 통해 Android게임 플레이</h2>
                        <p>PC에서 BLUESTACK X을 다운로드하고 하이브리드 클라우드를 통해 플레이하거나 BlueStacks 5 앱 플레이어를 사용하여 PC에서 게임을 다운로드하고 플레이하십시오.</p>
                    </div>
                    <figure>
                        <img src={process.env.PUBLIC_URL + '/images/advertise02.png'} alt='/'></img>
                    </figure>
                </div>
            </div>
        </section >
    )
}
export default Advertise