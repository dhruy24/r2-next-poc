"use client"
import Link from "next/link"
import { useState } from "react"

interface Prop {
    match: Match,
    index:number
}

interface Match {
    opponentTidyName:String,
    location:String
}

function MatchCard(props:Prop) {
    const { match, index } = props || {}
    const [clicked, setClicked] = useState(false)

    function handleClick() {
        console.log("clicked")
        setClicked(prev=>!prev)
    }
    return (
        <>
            {clicked === true ? (
                <div>
                    hellow{clicked}
                </div>
            ) : ""}
            <div key={index}  className="flex flex-col gap-2 p-2 rounded-lg border border-gray-600" onClick={handleClick}>
                <h3>VS {match.opponentTidyName}</h3>
                <p>venue:- {match.location}</p>
            </div>
        </>

    )
}

export default MatchCard