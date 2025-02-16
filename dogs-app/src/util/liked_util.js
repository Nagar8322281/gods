const getKey = (userName) => "dogsWeLiked" + (userName ? "_" + userName : "");

export const getFavoriteImages = (userName) => {
  const str = localStorage.getItem(getKey(userName));
  return JSON.parse(str) || [];
};

export const isLiked = (item, userName) => {
  const str = localStorage.getItem(getKey(userName));
  const liked = str ? JSON.parse(str) : [];
  return liked.includes(item);
};

export const addToLiked = (item, userName) => {
  const str = localStorage.getItem(getKey(userName));
  const liked = str ? JSON.parse(str) : [];
  if (!liked.includes(item)) liked.push(item);
  const json = JSON.stringify(liked);
  localStorage.setItem(getKey(userName), json);
};

export const removeFromLiked = (item, userName) => {
  const str = localStorage.getItem(getKey(userName));
  const liked = str ? JSON.parse(str) : [];
  if (liked.includes(item)) liked.splice(liked.indexOf(item), 1);
  const json = JSON.stringify(liked);
  localStorage.setItem(getKey(userName), json);
};
