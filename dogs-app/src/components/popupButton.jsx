import { useContext, useState } from "react";
import "./css/popupButton.css";
import profile from '../assets/profile.jpg'
import {DogsContext} from './context'
import { getUserById } from "../util/api";

export default function PopupButton() {
  const [open, setOpen] = useState(false);
  const {users,currentUser,setCurrentUser} = useContext(DogsContext)

  return (
    <div className="popup-cont">
      <div onClick={() => setOpen((prev) => !prev)} className="popup-btn">
      <img src={profile} className="popup-img" />
      </div>
      {open && (
        <div className="popup-window">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="popup-closer"
          >
            ✖️
          </div>
          <div>
            <img src={profile} className="profile-img" />
          </div>
          <h3>Hello { currentUser? users.find((user_obj) => user_obj._id == currentUser)?.name:"guest"}</h3>
          {users.map((user,i)=> (
            <div key={i} onClick={()=>{ 
              setOpen((prev) => !prev)
              setCurrentUser(user._id)
            }}>{user.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
