import { useState } from "react"

const ControlList = () => {
    const [clIndex, setClIndex] = useState(0);

    const CONTROLLIST = [
        {
            title: (
                <li>슈팅</li>
            ),
            content: ""
        },
        {
            title: (
                <li>MOBA</li>
            ),
            content: ""
        },
        {
            title: (
                <li>RPG</li>
            ),
            content: ""
        },
        {
            title: (
                <li>전략</li>
            ),
            content: ""
        }
    ]
    return (
        <section classList="ControlList">
            <div className="container">
                <ul className="ControlTab">
                </ul>
            </div>
        </section>
    )
}
export default ControlList