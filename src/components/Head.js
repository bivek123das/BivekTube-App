import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_API,
  YOUTUBE_VIDEOS_API,
} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import bivekTube from "../utils/BIVEKTUBE.png";
import "../utils/head.css";

const Head = ({ btn }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    // console.log(searchQuery);

    // make an api call for every key press
    // But if the difference between 2 api call is < 200 ms
    // Decline the Api Call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggestions = async () => {
    console.log("API CALL " + searchQuery);
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    //  console.log(data[1]);
    setSuggestions(data[1]);

    dispatch(
      cacheResults({
        [searchQuery]: data[1],
      })
    );
  };

  const handleClickSuggestion = (event) => {
    setSearchQuery(event.target.innerText);
    setShowSuggestions(false);
    navigate("/search?search_query=" + encodeURI(event.target.innerText));
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div
      className="head grid grid-flow-col w-screen p-5 shadow-lg sticky top-0 z-40"
      style={{ backgroundColor: darkMode ? "#1D232A" : "#ffffff" }}
    >
      <div className=" flex grid-cols-2 items-center ">
        <i
          onClick={() => toggleMenuHandler()}
          className="menu fa-solid fa-bars  text-2xl cursor-pointer"
        ></i>
        <a href="/">
          <div className="logo flex items-center ml-6 cursor-pointer">
            <img className="w-8  rounded-full" src={bivekTube} alt="logo" />
            <h4 className="font-bold  text-2xl">
              BivekTube <sup className="text-xs">IN</sup>
            </h4>
          </div>
        </a>
      </div>
      <div>
        <div className="input-field">
          <input
            className="outline-none border-gray-500 w-3/4 border-[1px] rounded-l-full py-1 px-3"
            style={{
              color: darkMode ? "white" : "black",
              backgroundColor: darkMode ? "#1D232A" : "white",
            }}
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => {
              setShowSuggestions(false);
            }}
          />

          <button className="border-[1px] border-l-0 border-gray-500  rounded-r-full py-1 px-2 w-14 ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        {showSuggestions && (
          <div
            className="search-box fixed w-[27.5rem] shadow-xl rounded-xl p-2 mt-1"
            style={{
              color: darkMode ? "white" : "black",
              backgroundColor: darkMode ? "#1F2937" : "white",
            }}
          >
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    onMouseDown={(e) => handleClickSuggestion(e)}
                    className="text-sm py-1 px-2 rounded-xl"
                  >
                    <i className="fa-solid fa-magnifying-glass text-sm"></i>{" "}
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="text-end cursor-pointer flex justify-end items-center box-border">
        <div className="darktheme pr-8">{btn}</div>
        <i className="user fa-solid fa-user text-2xl "></i>
      </div>
    </div>
  );
};

export default Head;
