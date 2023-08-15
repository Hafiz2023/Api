"use client";
import React, { useContext } from "react";
import Section from './Section'
import { SectionContext } from "./page";

const Header = () => {
    const state = useContext(SectionContext);
  return (
    <div className="bg-green-400 p-5">
      Header {state.value1}
      <Section />
      <Section />
      <Section />
    </div>
  );
};

export default Header;