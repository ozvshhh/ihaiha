import React from "react"
import { Contents } from "../components/contents"
import { TopBar } from "../components/topbar"
import { Greeting } from "../components/home/greeting"

export const Home:React.FC = ()=>{
    return(
      <>
      <TopBar/>
      <Contents>
      </Contents>
      </>
      )
    }