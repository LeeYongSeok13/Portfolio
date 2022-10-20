const Controlhead = () => {
    return (
        <section className="Controlhead">
            <div className="container">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/keyboard.png'}></img>
                </figure>
                <h2>게임 컨트롤</h2>
                <p>키보드, 마우스, 게임 패드 등 나에게 가장 잘 맞는 방법으로 PC에서
                    <br />좋아하는 안드로이드 게임을 플레이하세요.
                </p>
                <div className="check">
                    <div className="xi-check">
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Controlhead