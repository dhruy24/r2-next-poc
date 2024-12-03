import MatchCard from "../components/MatchCard";

async function page() {

    let response = await fetch("http://localhost:8000/api/matches/32/2023/MFB")
    const data = await response.json();
    let matches = await data.seasons || []

//   console.log(matches)
  return (
      <>
        <h1>Dashboard 1</h1>
          <div className='flex flex-row flex-wrap gap-4 p-4'>
              {matches?.map((match:any, index:number) => {
                  return (
                    <MatchCard match={match} index={index} key={index}/>
                  )
              })}
          </div>
      </>
  )
}

export default page