"use client"
import MatchCard from "./MatchCard"
import { useAppContext } from "../context/provider"
import SetUser from "./SetUser"

function MatchTable(props) {
    const {matches} = props || {}
    const {state} = useAppContext();
    return (
        <>
            <div className='flex flex-row flex-wrap gap-4 p-4'>
                {matches?.map((match, index) => {
                    return (
                        <MatchCard match={match} index={index} key={index} />
                    )
                })}
            </div>
            <div className='flex flex-row justify-between'>
               <SetUser/>
            </div>
        </>
    )
}

export default MatchTable