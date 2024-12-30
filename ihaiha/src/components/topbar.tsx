import React from "react";
import menu from "../assets/icons/menu.svg"

export const TopBar:React.FC= ()=>{
    return(
        <div className="flex justify-between">
          <img src={menu} className="ml-7"/>
          <div className="w-f flex flex-auto justify-center items-center mx-100">
            <div className="flex text-lg mx-[50px] whitespace-nowrap">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap">메인메뉴</div>
            <div className="flex text-lg mx-[50px] whitespace-nowrap">메인메뉴</div>
          </div>
        </div>
    )
}