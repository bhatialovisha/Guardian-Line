import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <ul className="menu menu-md h-full mx-2 flex-nowrap justify-evenly bg-stone-400	">
        <li className="pt-2 focus:outline-none focus:ring text-cyan-800">
        <Link href="/volunteers" className="text-lg text-white">Reported Crimes</Link>
        </li>
        <li className="focus:outline-none focus:ring text-cyan-800">
        <Link href="/volunteers" className="text-lg text-white">Volunteers page</Link>
        </li>
        <li className="focus:outline-none focus:ring text-cyan-800">
        <Link href="/volunteers" className="text-lg text-white">About Us</Link>
        </li>
        <li className="focus:outline-none focus:ring text-cyan-800">
        <Link href="/volunteers" className="text-lg text-white">User Guide</Link>
        </li>
        <li className="focus:outline-none focus:ring text-cyan-800">
        <Link href="/volunteers" className="text-lg text-white">Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
