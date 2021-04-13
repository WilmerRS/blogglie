import React, { useState, useEffect } from "react";

import "./Blog.scss";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormFirestore = (props: any) => {
  const initialState = {
    id: "",
    first: "",
    last: "",
    born: 0,
  };
  const [user, setUser] = useState(
    props.form ? props.form : { ...initialState }
  );

  const setUserValues = (user: any) => {
    setUser({ ...user });
  };

  useEffect(() => {
    if (props.form) {
      setUserValues(props.form);
    } else {
      setUser({ ...initialState });
    }
  }, [props.form]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addOrEditUser(user);
    setUser({ ...initialState });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div className="in-block px-3">
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="first"
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Name"
                value={user.first}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="field ">
            <label className="label">Last</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="last"
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Last"
                value={user.last}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="field">
            <label className="label">Born</label>
            <div className="control has-icons-left has-icons-right">
              <input
                name="born"
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Born"
                value={user.born}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faUser} />
              </span>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-success">
                {props.form ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default FormFirestore;
