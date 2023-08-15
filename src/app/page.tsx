"use client";
import Image from "next/image";
import Header from "./Header";
import { createContext, useState } from "react";

const SectionContext = createContext(0);
export default function Home() {
  const [state, setstate] = useState({"value":0,"value1":2});
  let current1 = state.value
  let current2 = state.value1

  return (
    <SectionContext.Provider value={state}>
      <div>
        <div>Hello Q2</div>
        <Header />
        <button onClick={()=> setstate({
          "value":current1 + 1 , "value1":current2 
        })}>
        Next lesson

        </button>
        <button onClick={()=> setstate({
          "value":current1 , "value1":current2 +1 
        })}>
        Next Header

        </button>
      </div>
    </SectionContext.Provider>
  );
}

export { SectionContext };
