import { useState } from "react";

const Bloglist = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const BlogTab = [
        {
            title: (
                <li className={activeIndex === 0 ? "is-active" : ""} onClick={() => tabClickHandler(0)}>홈</li>
            ),
            content: (
                <div>홈 내용</div>
            )
        },
        {
            title: (
                <li className={activeIndex === 1 ? "is-active" : ""} onClick={() => tabClickHandler(1)}>게임</li>
            ),
            content: (
                <div>게임 내용</div>
            )
        },
        {
            title: (
                <li className={activeIndex === 2 ? "is-active" : ""} onClick={() => tabClickHandler(2)}>앱 리뷰</li>
            ),
            content: (
                <div>앱 리뷰 내용</div>
            )
        },
        {
            title: (
                <li className={activeIndex === 3 ? "is-active" : ""} onClick={() => tabClickHandler(3)}>블루스택</li>
            ),
            content: (
                <div>블루스택 내용</div>
            )
        }
    ];

    const tabClickHandler = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="Bloglist">
            <div className="container">
                <ul className="tab">
                    {BlogTab.map((section, index) => {
                        return (
                            <li>{section.title}</li>
                        )
                    })}
                </ul>
                <div className="content">
                    <p>{BlogTab[activeIndex].content}</p>
                </div>
            </div>
        </div>
    )
}
export default Bloglist