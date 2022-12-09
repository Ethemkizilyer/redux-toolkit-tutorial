import React from "react";
import Warning from "../warning/Warning";
import "./update.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addUser2, deleteUser2, updateUser2 } from "../../redux/userSlice";
import axios from "axios";
import { useEffect } from "react";

export default function Update() {
  const [nam, setNam] = useState({ name: "", email: "", password: "" });

  const [deneme, setDeneme] = useState("");

  const dispatch = useDispatch();
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const user = useSelector((state) => state.user);


  const getUser = async (dispatch) => {
    //   dispatch(updateStart());
    try {
      const res = await axios.get(
        "https://63878fb8d9b24b1be3f44043.mockapi.io/users/"
      );

      setDeneme(res.data);
      // dispatch(userSlice(res.data))
      return res.data;
    } catch (err) {
      // dispatch(updateError());
    }
  };
  useEffect(() => {
    getUser();
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const namu = deneme.filter((item) => item.email == nam.email);
    const m = [{ ...nam, id: namu[0].id }];
    dispatch(updateUser2(m));

    // dispatch(update({name,email}))
  };
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addUser2(nam));
    setNam({});
    // dispatch(update({name,email}))
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const na = deneme.filter(
      (item) => item.name == nam.name && item.email == nam.email
    );
    dispatch(deleteUser2(na));
    localStorage.removeItem("user");
    // dispatch(remove())
  };

  return (
    <div className="update">
      <div className="updateWrapper">
        <h3 className="updateTitle">Update Your Account</h3>
        <Warning />
        <button className="delete" onClick={handleDelete}>
          Delete Account
        </button>
        <div className="updateContainer">
          <form>
            <div className="formItem">
              <label>Profile Picture</label>
              <div className="profilePic">
                <img
                  className="avatar"
                  src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <span className="change">Change</span>
              </div>
            </div>
            <div className="formItem">
              <label>Username</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.name}
                onChange={(e) => setNam({ ...nam, name: e.target.value })}
              />
            </div>
            <div className="formItem">
              <label>Email</label>
              <input
                className="formInput"
                type="text"
                placeholder={userInfo.email}
                onChange={(e) => setNam({ ...nam, email: e.target.value })}
              />
            </div>
            <div className="formItem">
              <label>Password</label>
              <input
                className="formInput"
                type="password"
                onChange={(e) => setNam({ ...nam, password: e.target.value })}
              />
            </div>
            <button
              disabled={pending}
              className="addButton"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              disabled={pending}
              className="updateButton"
              onClick={handleUpdate}
            >
              Update
            </button>
            {error && <span className="error">Something went wrong</span>}
            {pending === false && (
              <span className="success">Account has been updated</span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
