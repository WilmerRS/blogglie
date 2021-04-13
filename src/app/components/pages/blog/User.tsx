import React, { useState, useEffect } from "react";

import "./Blog.scss";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const User = (props: any) => {
  

  const handleClickOnDelete = () => {
    props.onDelete(props.user.id);
  };

  const handleClickOnEdit = () => {
    props.onEdit(props.user);
  };

  const toCapitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  };

  return (
    <>
      <div key={props.user.id} className="is-flex is-align-items-center pt-3">
        <div className="pl-3">
          <div className="bg-color is-rounded">
            <div className="px-3 py-2 image is-48x48 has-text-centered">
              <div className="my-1">
                <span className="icon is-small is-left ">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 ">
          <p className="subtitle is-5  mb-0">
            {toCapitalize(props.user.first)}
          </p>
          <p className="subtitle is-7 mb-0">{toCapitalize(props.user.last)}</p>
          <p className="subtitle is-7 mb-0">{props.user.born}</p>
        </div>
        <div className="px-2 btn">
          <div className="is-inline">
            <button
              className="button is-link btn-size"
              onClick={handleClickOnEdit}
            >
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faEdit} />
              </span>
            </button>
          </div>
          <div className="is-inline pl-2">
            <button
              className="button is-danger btn-size"
              onClick={handleClickOnDelete}
            >
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faTrash} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
