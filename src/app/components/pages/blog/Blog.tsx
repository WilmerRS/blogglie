import React, { useEffect, useState } from "react";

import "./Blog.scss";

import User from "./User";
import FormFirestore from "./FormFirestore";

import { firestore } from "../../../firebase";

const Blog = () => {
  const [users, setUsers] = useState([]);

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    getAllUser();
  }, [currentUser]);

  const getAllUser = () => {
    firestore.getAllUser(setUsers);
  };

  const addOrEditUser = (user: any) => {
    if(!currentUser){
      firestore.addUser(user);
    }else {
      firestore.updateUser(user, user.id);
    }
    setCurrentUser(undefined);
  };

  const deleteUser = (id: string) => {
    firestore.deleteUser(id);
  };

  const editUser = (user: any) => {
    setCurrentUser(user);
  };

  return (
    <>
      <div className="container py-3">
        <div className="card">
          <div className="card-content">
            <p className="title">Firebase y Cloud Firestore</p>
          </div>
          <footer className="card-footer">
            <div className="card-footer-item">
              <FormFirestore
                addOrEditUser={addOrEditUser}
                form={currentUser ? currentUser : undefined}
              ></FormFirestore>
            </div>
            <div className="card-footer-item in-block is-justify-content-left ">
              {users.map((user: any) => {
                return (
                  <div key={user.id}>
                    <User user={user} onDelete={deleteUser} onEdit={editUser} />
                  </div>
                );
              })}
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Blog;
