import React from "react";
import { Oval } from "react-loader-spinner";

const Spinner = ({ loading }) => {
  return (
    <div className=" flex justify-center mt-24">
      <Oval
        color="#6366f1"
        visible={loading}
        height="80"
        width="80"
        ariaLabel="oval-loading"
      />
    </div>
  );
};

export default Spinner;
