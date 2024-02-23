import React from "react";
import { Link, useLocation, useMatch } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const match = useMatch("/");

  if (match) {
    return null;
  }

  // Function to extract breadcrumb links from the current location
  const getBreadcrumbs = () => {
    const paths = location.pathname.split("/").filter((path) => path !== "");

    // Construct breadcrumb links
    let breadcrumbs = [{ name: "Home", path: "/" }];
    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      breadcrumbs.push({ name: path, path: currentPath });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <div>
      <nav
        aria-label="breadcrumb"
        className=" bg-yellow-300 p-1  font-medium text-white"
      >
        <ul className="breadcrumb flex">
          {breadcrumbs.map((breadcrumb, index) => (
            <li
              key={index}
              className="breadcrumb-item font-medium text-slate-700  after:mx-2 after:content-['>']  last:after:content-[''] hover:text-slate-200 after:hover:text-slate-700"
            >
              <Link to={breadcrumb.path}>{breadcrumb.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
