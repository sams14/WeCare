import { useState } from "react";
import {
  ExitToApp,
  Add,
  CardMembership,
  FileCopy,
  CloudUpload,
  Menu,
} from "@material-ui/icons";
import Link from "next/link";
import Social from "./views/user/Social";
import DashboardNav from ".././dashboard/components/Navbar/DashboardNavigation";

const Dashboard = () => {
  const [toggle, setToggle] = useState(true);
  const toggleMenu = () => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <div className="relative min-h-screen md:flex font-sans">
      <div className="bg-gray-200 dark:bg-gray-900 shadow text-gray-900 dark:text-white flex justify-between md:hidden">
        <Link href="/">
          <a className="block p-3 text-blue-900 dark:text-white text-2xl font-semibold font-sans">
            WeCare
          </a>
        </Link>

        <button
          className="mobile-menu-button p-4 focus:outline-none text-blue-900 dark:text-white focus:bg-gray-300"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
      </div>

      <div
        className={`sidebar bg-gray-100 dark:bg-gray-900 shadow text-blue-100 w-60 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition ${
          toggle ? "-translate-x-full" : ""
        } duration-200 ease-in-out`}
      >
        <Link href="/">
          <a className="w-full text-black dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start">
            <span className="text-left">
              <FileCopy />
            </span>
            <span className="text-2xl font-semibold font-sans">
              WeCare
            </span>
          </a>
        </Link>

        <nav className="py-5">
          <Link href="/">
            <a className="w-full text-gray-400 hover:text-indigo-500 dark:text-white flex items-center px-6 p-2 my-2 transition-colors duration-200 justify-start">
              <span className="text-left">
                <FileCopy />
              </span>
              <span className="mx-2 text-sm font-normal">Applications</span>
            </a>
          </Link>
          <Link href="/">
            <a className="w-full text-gray-400 hover:text-indigo-500 dark:text-white flex items-center px-6 p-2 my-2 transition-colors duration-200 justify-start">
              <span className="text-left">
                <CardMembership />
              </span>
              <span className="mx-2 text-sm font-normal">Certificates</span>
            </a>
          </Link>
          <Link href="/addcertificates">
            <a className="w-full text-gray-400  hover:text-indigo-500 dark:text-white flex items-center px-6 p-2 my-2 transition-colors duration-200 justify-start">
              <span className="text-left">
                <Add />
              </span>
              <span className="mx-2 text-sm font-normal">Add Certificates</span>
            </a>
          </Link>
          <Link href="/">
            <a className="w-full text-gray-400 hover:text-indigo-500 dark:text-white flex items-center px-6 p-2 my-2 transition-colors duration-200 justify-start">
              <span className="text-left">
                <CloudUpload />
              </span>
              <span className="mx-2 text-sm font-normal">Upload CSV</span>
            </a>
          </Link>
        </nav>
        <span className="absolute bottom-0 py-4 px-5 flex items-center text-black dark:text-white">
          <span className="text-left">
            <ExitToApp />
          </span>
          <span className="mx-2 text-2xl font-semibold">Logout</span>
        </span>
      </div>

      {/* col started */}
      <div className="container col">
          <div className="row-md-12 bg-black w-full hidden md:block">
          <DashboardNav/>
          </div>
          <div className="row-md-12">
            <Social/>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;
