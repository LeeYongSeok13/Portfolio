const Multihead = () => {
    return (
        <section className="Multihead">
            <div className="container">
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/multi.png'}></img>
                </figure>
                <h2>멀티 인스턴스</h2>
                <p>블루스택에서는 멀티 인스턴스를 통해 다른 계정에서 동일한 게임을
                    <br />플레이하거나 동시에 여러 게임을 플레이할 수 있습니다.
                </p>
            </div>
        </section>
    )
}
export default Multihead