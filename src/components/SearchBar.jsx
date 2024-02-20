import React, { useEffect, useRef, useState } from "react";

const SearchBar = ({ devices }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropMenuRef = useRef(null);
  const handleQuery = (query) => {
    const trimmedQuery = query.trim();
    setSearchQuery(trimmedQuery);
    setShowDropdown(trimmedQuery.length > 0);
  };

  const handleClickOutside = (event) => {
    if (dropMenuRef.current && !dropMenuRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropMenuRef}
      className={`${
        devices == "sm" ? "flex  md:hidden" : "hidden md:flex"
      } w-full  sides items-center h-9 bg-blue-800 relative z-[1]`}
    >
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type="search"
        name=""
        id=""
        className="w-full h-full px-3 placeholder:text-gray-500 text-gray-950 outline-none rounded-s-sm"
        placeholder="Start typign here ..."
      />
      <button className="bg-red-600 w-12 h-full rounded-e-sm">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {/* suggestions */}
      {showDropdown && (
        <div className="sides w-full  absolute left-0 top-full z-10 pt-1">
          <div className="bg-white border border-black w-full h-full text-black overflow-hidden overflow-y-auto max-h-[350px] rounded-sm p-1  ">
            <p> {searchQuery}</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              laboriosam nostrum iure magni, quam expedita delectus perspiciatis
              soluta, nobis eveniet doloremque porro distinctio molestiae odio
              similique reprehenderit repellendus voluptas vitae sint libero.
              Ipsum voluptas deserunt iure iusto ut in id nam dolorem totam!
              Laboriosam sequi enim ipsum ipsam earum itaque fugiat maiores
              tempora porro a minus in optio rem, deleniti voluptas iste
              molestiae voluptatum? Repellendus incidunt placeat labore alias
              deserunt aliquam animi nesciunt molestias, dignissimos tenetur
              odit ex consequuntur, itaque maxime rem. Sequi et maxime numquam
              delectus beatae modi maiores recusandae, vero, eum suscipit porro,
              fuga saepe rerum quisquam libero.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
