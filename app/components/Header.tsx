import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between w-[1250px] m-auto px-16 py-8">
        <Link href={"/"}>My Portfolio Website</Link>
        <div>
          <Link href={"/about"}>About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
