import { FC } from "react"
import { Button } from "../components/button"
import { Section } from "../components/section"

export const Join: FC<{ layout: string }> = ({ layout }) => {
    return (
        <section id="join">
            <div className="flex flex-col justify-center items-center">
                <Button href="" size="huge" text="JOIN US"/>
                <Section.Article center body="With the highly anticipated Cybertruck deliveries set to capture global media attention, $CYBER takes center stage as the go-to utility based Cybertruck project. Our community will become stronger with each win, each ATH and each new floor, join $CYBER community today." />
            </div>
        </section>
    )
}