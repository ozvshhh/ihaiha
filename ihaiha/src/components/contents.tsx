import React,{ReactNode} from "react";

interface propsType {
	children : ReactNode;
}

export const Contents:React.FC = ()=>{
  return(
    <div className="flex justify-center w-dvw">
      <div className="min-w-[1080px] h-[200px] bg-slate-200 border border-black">
      </div>
    </div>
  )
}