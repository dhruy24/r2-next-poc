
import MatchTable from '../components/MatchTable';


async function page() {

    let response = await fetch("http://localhost:8000/api/matches/32/2023/MFB")
    const data = await response.json();
    let matches = await data.seasons || []

    return (
        <>
            <h1>Dashboard 2</h1>
            <MatchTable matches={matches} />

        </>
    )
}

export default page