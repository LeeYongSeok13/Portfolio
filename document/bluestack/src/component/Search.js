import { useState } from "react";

const Search = () => {
    const [input, setInput] = useState();
    return (
        <div className="Search" >
            <input type="text" value={input} />
            <button>검색</button>
        </div >
    )
}
export default Search