import React from "react";
import Link from "next/link";
import LabelContainer from "labelcontainer";

const Header = () => {
  const lsInstance = LabelContainer.getInstance();
  return (
    <header>
      <div className="flex justify-between w-[1250px] m-auto px-16 py-4">
        <Link href={"/"}>{lsInstance.getLabel("header_title")}</Link>
        <div>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
