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
      } sides  relative z-[-0] h-9  w-full items-center`}
    >
      <input
        onChange={(e) => handleQuery(e.target.value)}
        type="search"
        name=""
        id=""
        className="h-full w-full rounded-s-sm px-3 text-gray-950 outline-none placeholder:text-gray-500"
        placeholder="Start typign here ..."
      />
      <button className="h-full w-12 rounded-e-sm bg-red-600">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      {/* suggestions */}
      {showDropdown && (
        <div className="sides absolute  left-0 top-full z-10 w-full pt-1">
          <div className="h-full max-h-[350px] w-full overflow-hidden overflow-y-auto rounded-sm border border-black bg-white p-1 text-black  ">
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
