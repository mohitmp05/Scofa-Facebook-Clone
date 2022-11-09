import axios from "axios";

export const userAdd = (user) => {
  if (user) {
    return async function (dispatch, getState) {
      await axios.post("http://localhost:8080/users", user).then((data) => {
        console.log(data);
        alert("user Added")
        window.location.href = 'http://localhost:3000/'
      });
    };
  }
};

export const userAuth = (user) => {
  if (user) {
    return async function (dispatch, getState) {
      await axios.get(`http://localhost:8080/login/${user.email}/${user.password}`).then((data) => {
        console.log(data);
        window.location.href = `http://localhost:3000/home/${data.data.name}`;
      });
    };
  }
};

export const userDelete = (id) => {
  return async function (dispatch, getState) {
    await axios.delete("http://localhost:8080/users/" + id).then((data) => {
      console.log("delete", data);
      alert("Course Deleted")
      return dispatch(userFetchAll());
    });
  };
};

export const userFetchAll = () => {
  return async function (dispatch, getState) {
    await axios.get("http://localhost:8080/users").then((data) => {
      console.log(data);
      return dispatch(userGetAll(data.data));
    });
  };
};

export const userGetAll = (users) => {
  console.log("get all", users);
  return {
    type: "user/getAll", // reducer
    data: users,
  };
};

export const userUpdate = (user) => {
  return async function(dispatch, getState) {
      await axios.put("http://localhost:8080/users/",  user)
      .then(data => {
          console.log(data);
          alert("User Updated")
      });
  };
}

export const getuser = (id) => {
  return async function(dispatch, getState) {
      await axios.get("http://localhost:8080/users/" + id)
      .then(data => {
          console.log(data);
          return dispatch({
              type: "user/getById",
              data: data.data
          });
      });
  };
}