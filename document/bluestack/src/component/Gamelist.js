const Gamelist = () => {
    const gamedata = [
        {
            id: 1,
            title: "오딘-발할라 라이징",
            genre: "RPG",
            company: "Kakao Games Corp.",
            url: process.env.PUBLIC_URL + '/images/odin.png'
        },
        {
            id: 2,
            title: "리니지M",
            genre: "RPG",
            company: "NCSOFT",
            url: process.env.PUBLIC_URL + '/images/LineageM.png'
        },
        {
            id: 3,
            title: "히트2",
            genre: "RPG",
            company: "NEXON Company",
            url: process.env.PUBLIC_URL + '/images/Hit2.png'
        },
        {
            id: 4,
            title: "리니지W",
            genre: "RPG",
            company: "NCSOFT",
            url: process.env.PUBLIC_URL + '/images/LineageW.png'
        },
        {
            id: 5,
            title: "던전앤파이터 모바일",
            genre: "RPG",
            company: "NEXON Company",
            url: process.env.PUBLIC_URL + '/images/Dungeon&FighterMobile.png'
        },
        {
            id: 6,
            title: "리니지2M",
            genre: "RPG",
            company: "NCSOFT",
            url: process.env.PUBLIC_URL + '/images/Lineage2M.png'
        },
        {
            id: 7,
            title: "원신",
            genre: "Roleplay",
            company: "COGNOSPHERE PTE.LTD",
            url: process.env.PUBLIC_URL + '/images/GenshinImpact.png'
        },
        {
            id: 8,
            title: "탕탕특공대",
            genre: "Action",
            company: "Habby",
            url: process.env.PUBLIC_URL + '/images/TangTang.png'
        },
        {
            id: 9,
            title: "히어로즈 테일즈",
            genre: "Roleplay",
            company: "37 Mobile Games",
            url: process.env.PUBLIC_URL + '/images/Heroestales.png'
        },
        {
            id: 10,
            title: "우마무스메 프리티 더비",
            genre: "Roleplay",
            company: "Kakao Games Corp.",
            url: process.env.PUBLIC_URL + '/images/Umamusme.jpg'
        }
    ]

    return (
        <section className="Gamelist">
            <div className="container">
                <h2>Top게임</h2>
                <div>
                    {
                        gamedata.map(it => <div key={gamedata.id}>
                            <img src={it.url} />
                            <h2>{it.title}</h2>
                            <p>{it.company}</p>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}
export default Gamelist