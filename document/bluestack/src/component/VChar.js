const VChar = ({ content }) => {

    return (
        <section className="VChar">
            <div className="container">
                <h2>PC에서 최고의 안드로이드 게임을
                    <br />경험하게 해드리겠습니다.
                </h2>
                <figure>
                    <img src={process.env.PUBLIC_URL + '/images/characteristic_main.png'} alt='/'></img>
                </figure>
            </div>
        </section>
    )
}
export default VChar