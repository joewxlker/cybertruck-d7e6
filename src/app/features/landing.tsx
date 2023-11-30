import { type FC } from "react"
import { Button } from "../components/button"
import { ProjectInfo } from "../models/project.model";

export const Landing: FC<{ layout: string; config: ProjectInfo }> = ({ layout, config }) => {
    return (
        <div className={`relative w-screen`}>
        <div className={`${layout} max-w-[2000px] flex flex-col h-screen gap-5 xl:justify-center lg:justify-center justify-evenly items-start m-auto`}>
          <h1 className="font-heading xl:text-9xl lg:text-9xl text-5xl text-t1 xl:text-left lg:text-left text-center">WELCOME TO $CYBERTRUCK</h1>
          <p className="font-body xl:text-xl lg:text-xl text-xl text-t2 xl:text-left lg:text-left text-center xl:w-1/2 lg:w-1/w">Join us on a SC-FI journey with $CYBER, a futuristic degenerate utility token inspired by the Cybertruck from Tesla, led by visionary Meme lord ser Elon Musk. As the world awaits the commencement of Cybertruck deliveries starting from November 30, 2023, Our project plans to utilise the media and global hype to break new limits in DEFI.</p>
          <div className="flex flex-row gap-5 items-center xl:justify-start lg:justify-start justify-center  w-full">
            <Button href={config.telegram} text="JOIN US" size='big' />
            <Button internal href="/dapp" text="CYBERFLIP" size='big' />
            <Button href={config.uniswap} text="BUY"size='big' />
          </div>
          <div id="landing" className="-z-10 inset-0 absolute">
            <div className="h-full w-full"/>
          </div>
        </div>
      </div>
    )
}