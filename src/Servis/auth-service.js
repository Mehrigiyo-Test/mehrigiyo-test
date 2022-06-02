export const getCurrentUser = () => {
  let user = localStorage.getItem("user");
  if (user != null) {
    return JSON.parse(user);
  }
  return null;
};

export const setCurrentUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const putCurrentUser = (user) => {
  let userr = getCurrentUser();
  userr.first_name = user.first_name;
  userr.username = user.username;
  userr.email = user.email;
  setCurrentUser(user);
};

export const isLogin = () => {
  let user = getCurrentUser();
  if (user != null) {
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const setToken = (token) => {
  localStorage.setItem("token", token);
};
