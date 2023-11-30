import { type FC } from "react";
import { SectionWrapper } from "../components/sectionWrapper";
import { Section } from "../components/section";

import data from "public/utility.json";
import uuid4 from "uuid4";

export const Utility: FC<{layout: string}> = ({ layout }) => {
    return (
      <SectionWrapper layout={layout}>
        <Section.Container id="utility">
          <Section.Header title="utility"/>
          <Section.Body>
            <div className="border-l-t1 border-l-[1px] pl-5">
              {data.body.map(body => <Section.Article key={uuid4()} body={body} />)}
            </div>
            <Section.Graphics opaque alt="" height={400} src="/truck2-400x900.png" width={900} />
          </Section.Body>
        </Section.Container>
      </SectionWrapper>
    )
}