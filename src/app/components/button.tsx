import Link from "next/link";
import { type FC } from "react";

export const Button: FC<{ href: string; text: string, size: 'big' | 'small' | 'huge', internal?: boolean }> = ({ href, text, size, internal }) => {
  return (
    <Link href={href} target={internal ? '_self' : '_blank'}>
      <div className={`
          ${size === 'huge' && 'xl:px-8 lg:px-8 xl:py-3 lg:py-3 px-4 py-2'} 
          hover:bg-opacity-50 transition-all duration-300
      border-[1px] border-t2 px-3 py-1 flex justify-center items-center text-t2 backdrop-blur-sm bg-white bg-opacity-10 shadow-sm shadow-shadow
      `}>
        <p className={`
          ${size === 'big' && 'xl:text-2xl lg:text-2xl text-xl'} 
          ${size === 'small' && 'xl:text-xl lg:text-xl text-xl'} 
          ${size === 'huge' && 'xl:text-4xl lg:text-4xl text-2xl'} 
          font-heading 
        `}>{text}</p>
      </div>
    </Link>
  );
};
