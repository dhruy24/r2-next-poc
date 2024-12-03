import Image from "next/image"
import UsernameDisplay from "./UsernameDisplay"
import { verifySession } from "../lib/dal"

async function Navbar() {
    let token = await verifySession()
        return (
            <div className="flex felx-row justify-between mb-4 drop-shadow-lg bg-slate-300 p-2 ">
                <div className="">
                    <Image src="/arkansas_logo.png"
                        height={40}
                        width={60}
                        alt="team logo"
                    />
                </div>
                <div className="flex flex-row items-center">
                    <div>
                        <Image src="/avatar.png"
                            height={40}
                            width={40}
                            alt="team logo"
                        />
                    </div>
                    <div>
                    <UsernameDisplay token={token}/>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
        )
}

export default Navbar