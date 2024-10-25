import { useEffect, useRef, useState } from "react";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const searchBarRef = useRef(null);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchBarRef) {
      searchBarRef.current.focus();
    }
  }, []);

  return (
    <div className="flex max-w-sm items-center space-x-2 mt-[20px] w-full p-2 bg-white px-4 rounded">
      <input
        ref={searchBarRef}
        type="email"
        placeholder="Type anything here.."
        className="w-auto min-w-[200px] outline-none border-none ps-2 text-black font-normal text-sm"
        onChange={changeHandler}
        required
      />
      <button
        onClick={searchHandler}
        type="submit"
        className=" bg-primary px-4 py-2 rounded text-sm"
      >
        Search
      </button>
    </div>
  );
}
