import { isLiked, removeFromLiked, addToLiked } from "../util/liked_util";
import { useEffect, useState, useContext } from "react";
import { DogsContext } from './context'

function FavotiteImg({ src }) {

  const {favorites,addToFavorite,renoveFromFavorite,currentUser} = useContext(DogsContext)

  const [favId, setFavId] = useState();

  useEffect(()=>{
    setFavId(favorites.find((favorite)=> favorite.imgSrc ==src)?._id)
  },[{src,favorites}])


  const handleLike = () => {
    if (!currentUser) {
      return;
    }
    if (favId) {
      renoveFromFavorite(favId);      
    } else {
      addToFavorite(src)
    }
  };

  return (
    <div className="image-cont" onDoubleClick={handleLike}>
      <img className="dog" src={src} alt="dog" />
      <div className="like" onClick={handleLike}>
        {favId ? "❤️" : "🤍"}
      </div>
    </div>
  );
}

export default FavotiteImg;
