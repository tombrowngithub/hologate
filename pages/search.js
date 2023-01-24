import {useEffect, useState} from "react";

export default function Search() {
    const [query, setQuery] = useState("");

    function showME() {
        console.log(query)
    }

    return (
        <div>
            <input onChange={e => setQuery(e.target.value)}
                   type="text" placeholder="Search..."
                   className="search"/>
        <button onClick={showME}>CHeck</button>
        </div>
    )
}