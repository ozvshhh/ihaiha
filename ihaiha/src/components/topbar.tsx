import React from "react";
import menu from "../assets/icons/menu.svg"

export const TopBar:React.FC= ()=>{
    return(
        <div className="flex 	w-screen border-4 border-black ">
          <img src={menu} className="ml-7"/>
          <div className="w-f flex flex-auto justify-center items-center h-ful">
            <div className="flex-auto text-lg ">메인메뉴</div>
            <div className="flex-auto text-lg">메인메뉴</div>
            <div className="flex-auto text-lg">메인메뉴</div>
            <div className="flex-auto text-lg">메인메뉴</div>
            <div className="flex-auto text-lg">메인메뉴</div>
          </div>
        </div>
    )
}