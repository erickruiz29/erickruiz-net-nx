import React from "react";
import Image from "next/image";
import logo from "./../../../public/images/ihm-logo.png";

export const Logo: React.FC = () => {
  return (
    <div className="logo-container">
      <Image src={logo} placeholder={"blur"} width={305} height={50} />
    </div>
  );
};
