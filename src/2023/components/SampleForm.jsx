import React from "react";

const SampleForm = (linktopage, formid, buttonid) => {
    console.log("link: ", linktopage.linktopage)
  const navigatetopage = () => {
    var theURL = window.location.origin;
    console.log(theURL);
    var newURL = theURL + linktopage.linktopage;
    window.location.href = newURL;
    console.log(window.location.pathname);
  };
  return (
    <div className="form-parent">
      <input type="text" name="" id="" className="user-input-box" id={formid} />
      <button onClick={navigatetopage} className="submit-button" id={buttonid}>
        Submit Form
      </button>
    </div>
  );
};

export default SampleForm;
