import MatchCard from "../components/MatchCard";

async function getMatches(id:number){
    let response = await fetch(`http://localhost:8000/api/matches/${id}/2023/MFB`)
    const data = await response.json();
    let matches = await data.seasons || []
    return matches
}

async function page({searchParams}:any) {
    let paramID = await searchParams.id
    let matches = await getMatches(paramID) || []

  return (
      <>
          <h1>Dashboard 2</h1>
          <div className='flex flex-row flex-wrap gap-4 p-4'>
              {matches?.map((match:any, index:number) => {
                  return (
                      <MatchCard match={match} index={index} key={index} />
                  )
              })}
          </div>
      </>
  )
}

export default page