import { NavLink, Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getUsers } from "../util/user_util";
import PopupButton from "./popupButton";
import { DogsContext } from "./context"
import profile from '../assets/profile.jpg'
import './css/layout.css'
import { Allusers, getUserById } from "../util/api";


function Header() {
  // const user = useContext(DogsContext).user;
  // const setUser = useContext(DogsContext).setUser;

  return (
    <header className="header">
      <nav>
        <NavLink to="/" className="link">
          <button className="btn-cont">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Random</span>
          </button>
        </NavLink>
        <NavLink to="/favorite" className="link">
          <button className="btn-cont">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Favorites</span>
          </button>
        </NavLink>
        <NavLink to="/breeds/akita" className="link">
          <button className="btn-cont">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Breeds</span>
          </button>
        </NavLink>
      </nav>
          <PopupButton/>
    </header>
  );
}

function SideBar() {
  const [breedsNames, setBreedsNames] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("akita");//בומי

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((obj) => setBreedsNames(Object.keys(obj.message)));
  }, []);
  if (!breedsNames.length) {
    return <span>Loading...</span>;
  } else {
    return (
      <div className="side-bar">
        <h2 className="breeds-title">Breeds</h2>
        {breedsNames.map((breed, i) => (
          <NavLink
            to={"/breeds/" + breed}
            onClick={() => setSelectedBreed(breed)}//בומי
            key={i}
            className={
              breed == selectedBreed
                ? "breed-name-cont selected-breed"
                : "breed-name-cont"
            }
          >
            <div
              className={breed == selectedBreed ? "selected-border" : "border"}
            ></div>
            <div className="breed-name">{breed}</div>
          </NavLink>
        ))}
      </div>
    );
  }
}
//בדיקהההההה
//222222
//66666
export default function Layout() {
  return (
    <div className="cont">
      <SideBar />
      <Header />
      <Outlet />
    </div>
  );
}
