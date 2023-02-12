import React from "react";
const ProfileInfoForm = () => {
  return (
    <form className="cryptoki-form" id="personal-info-form">
      <div className="user-db-title">Personal Info</div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" defaultValue="Dexter Stark" />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" defaultValue="dexstark@fakemail.com" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" defaultValue="dexterstark" />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone contact</label>
          <input type="number" id="phone" defaultValue="" />
        </div>
      </div>
      <div className="form-group">
        <div className="form-field">
          <label htmlFor="password-1">Change password</label>
          <input type="password" name="password" id="password-1" />
        </div>
        <div className="form-field">
          <label htmlFor="password-2">Repeat password</label>
          <input type="password" name="password" id="password-2" />
        </div>
      </div>
    </form>
  );
};

export default ProfileInfoForm;
