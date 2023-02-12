import React from "react";
const ProfileInfoAvatar = () => {
  return (
    <div className="upload-photo-box">
      <div className="user-db-title">Avatar and Cover</div>
      <div className="user-avatar">
        <img src="img/content/profile/avatar-upload.png" alt="" />
      </div>
      <div className="user-cover-image">
        <img src="img/content/profile/profile-cover-1.png" alt="" />
      </div>
      <div className="upload-notice">
        Images must be .png or .jpg format. Min size 100x100px (avatar) and
        1920x320px (cover)
      </div>
    </div>
  );
};

export default ProfileInfoAvatar;
