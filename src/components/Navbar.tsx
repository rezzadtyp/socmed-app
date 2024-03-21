import React from "react";
import { Button } from "./ui/button";

const Navbar: React.FC = () => {
  return (
    <nav className="border-b border-b-stone-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between py-4 items-center">
          <h1 className="text-3xl font-bold cursor-pointer text-white">SOCMED</h1>

          <div className="flex gap-4">
            <Button variant="ghost">Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
