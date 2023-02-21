import { useState, useEffect } from "react"

function SearchPage() {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    useEffect(() => {
        async function fetchSearchResults() {
            const res = await fetch(`/api/search?q=${query}`)
            const data = await res.json()
            setResults(data)
        }

        if (query !== "") {
            fetchSearchResults()
        } else {
            setResults([])
        }
    }, [query])

    function handleSearch(event) {
        event.preventDefault()
        setQuery(event.target.query.value)
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" name="query" placeholder="Search books" />
                <button type="submit">Search</button>
            </form>

            <ul>
                {results.map((book) => (
                    <>
                        <li key={book._id}>{book.title}</li>
                        <li>{book.book_body}</li>
                    </>
                ))}
            </ul>
        </div>
    )
}

export default SearchPage
