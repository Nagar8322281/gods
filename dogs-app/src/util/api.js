
const BASE_URL = "http://localhost:3000/api";

function APIcall(url, method, body) {
    const option = { method };
    if (body) {
        option.body = JSON.stringify(body);
        option.headers = { "Content-Type": "application/json" };
    }
    return fetch(BASE_URL + url, option)
        .then((res) => res.json())
        .then((res) => {
            if (res.success) return res.data;
            else throw new Error(res.Error);
        });
}

export const newUser = (name) => APIcall("/user", "POST", { name });

export const Allusers = () =>  APIcall('/user','GET');

export const getUserById = (id) => APIcall("/user/" +id, "GET",);

export const updateNameById = (name,id) => APIcall("/user/" +id + "/name", "PATCH", { name });

export const updateProfilePicById = (id,profilePic) => APIcall("/user/" + id + "/profile", "PATCH", { profilePic });

export const deleteUser = (id) => APIcall("/user/" + id, "DELETE")

export const userFavorite = (id,query) => { 
    
    let q ='';
    if (query) {
        q = Object.entries(query).map(entry=>entry.join('=')).join('&')
    }
   return APIcall("/user/" + id + "/favorite/" + q, "GET", )
};

export const newFavorite = (id ,imgSrc) => APIcall("/user/" + id + "/favorite/", "POST",{imgSrc} );

export const updateFavoriteName = (id,favId,name) => APIcall("/user/" + id + "/favorite/" + favId + "/name", "PATCH",{name} );

export const deleteFavorite = (id,favId) => APIcall("/user/" + id + "/favorite/" + favId, "DELETE");



