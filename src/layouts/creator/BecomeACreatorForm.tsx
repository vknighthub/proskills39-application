import React from "react";
const BecomeACreatorForm = () => {
  return (
    <div
      id="application-form"
      className="submit-artwork-section extra-small-section section-padding-medium"
    >
      <div className="section-title text-center">
        Creator <span className="gradient-text">Form</span>
      </div>
      <form className="cryptoki-form">
        <div className="form-field">
          <label htmlFor="email">Your email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="form-field">
          <label htmlFor="url">Your business name</label>
          <input type="text" name="url" id="url" />
        </div>
        <div className="form-field file-upload">
          <div className="label">Business Logo</div>
          <div className="file-uploader">
            <svg className="crumina-icon">
              <use xlinkHref="#upload-icon" />
            </svg>
            <div className="upload-notice"> Max 120MB, PNG, JPEG, MP3, MP4</div>
            <label className="btn btn-normal btn-dark" htmlFor="upload-media">
              Browse File
            </label>
            <input type="file" name="upload-media" id="upload-media" />
          </div>
        </div>
        <button type="submit" className="btn btn-normal btn-fullwidth btn-dark">
          Submit for Approval
        </button>
        <div className="register-notice">
          If approved, you’ll receive a confirmation email in your inbox within
          2-5 bussiness days.
        </div>
      </form>
    </div>
  );
};

export default BecomeACreatorForm;
