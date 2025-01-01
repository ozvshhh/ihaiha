import React from "react";
import menu from "../assets/icons/menu.svg"

export const TopBar:React.FC= ()=>{
    return(
        <div className="flex sticky top-0 justify-between items-center h-[48px] border border-black bg-slate-100 z-30">
          <img src={menu} className="ml-7 h-[24px]"/>
          <div className="w-f flex flex-auto justify-center items-center mx-100">
            <div className="flex text-lg mx-[50px] whitespace-nowrap text-base">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap text-base">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap text-base">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap text-base">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap text-base">메인메뉴</div>
          </div>
        </div>
    )
}