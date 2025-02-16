import { createContext ,useState,useEffect, Children } from "react";
import { newFavorite,userFavorite,deleteFavorite,newUser, Allusers, deleteUser } from "../util/api";


export const DogsContext = createContext()

 export function DogsContextProvider(props) {
    const [favorites,serFavorites] = useState([])
    const [currentUser, setCurrentUser] = useState('');
    const [users,setUsers] = useState([])
    const updateAllFavotite = ()=> currentUser && userFavorite(currentUser).then(serFavorites)
    useEffect(()=>{
        updateAllFavotite()
    },[currentUser])
   const addToFavorite = (imgSrc)=>newFavorite(currentUser,imgSrc).then(updateAllFavotite)
   const renoveFromFavorite = (favId) => deleteFavorite(currentUser,favId).then(updateAllFavotite)

   const updateAllUser = ()=> Allusers().then(setUsers)
   useEffect(()=>{
    updateAllUser()
   },[])
   const addUser = (name) => newUser(name).then(updateAllUser)
   const removUser = (id) => deleteUset(id).then(updateAllUser)

   const changeFavoriteName = ( favId ,name) => updateFavoriteName(currentUser,favId,name).then(updateAllFavotite)
   const changeProfailImg = (favId) => updateProfilePicById(currentUser,favId).then(updateAllUser)

    

    const value ={
        currentUser,
        setCurrentUser,
        favorites,
        addToFavorite,
        renoveFromFavorite,
        users,
        addUser,
        removUser,
        changeFavoriteName,
        changeProfailImg,
    };

    return <DogsContext.Provider value={value}>
        {props.children}
    </DogsContext.Provider>
}
