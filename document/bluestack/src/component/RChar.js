const RChar = () => {
    return (
        <section className="RChar">
            <div className="container">
                <div className="reset">
                    <div className="reset_sub">
                        <img src={process.env.PUBLIC_URL + '/images/reset.png'} alt='/'></img>
                        <h2>리세마라</h2>
                        <p>멀티 인스턴스를 사용하여 더 빠르게 리롤할 수 있습니다.</p>
                        <strong><a href="/">더보기</a></strong>
                    </div>
                    <video autoPlay muted loop controls height="431.25">
                        <source src={process.env.PUBLIC_URL + '/images/reset.mp4'}></source>
                    </video>
                </div>
            </div>
        </section>
    )
}
export default RChar