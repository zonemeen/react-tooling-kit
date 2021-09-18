import React from "react";
import Loading from "../Loading";

const Pdf = (props) => {
  const { src, style } = props;
  return (
    <div>
      {!src && <Loading />}
      {src && (
        <iframe title="myFrame" style={style} src={src}>
          <p>
            It appears you don't have a PDF plugin for this browser. No
            biggie... you can{" "}
            <a href={src}>click here to download the PDF file.</a>
          </p>
        </iframe>
      )}
    </div>
  );
};

export default Pdf;
