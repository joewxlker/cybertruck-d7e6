import { type FC } from "react";
import { Socials } from "./socials";
import { type ProjectInfo } from "~/app/models/project.model";
import { Join } from "../features/join";

export const Footer: FC<{ layout: string; config: ProjectInfo }> = ({
  layout,
  config,
}) => {
  return (
    <footer className={`w-screen gap-20 h-screen relative flex flex-col justify-end items-center `}>
      <Join layout={layout} />
      <div className={`w-screen gap-6 py-12 flex-col items-center justify-center flex backdrop-blur-xl`}>
        <Socials config={config} />
        <p className="text-t1 font-body text-lg">© 2023 CYBER. All rights reserved.</p>
      </div>
      <div id="footer" className="-z-10 absolute inset-0" />
    </footer>
  );
};
