import React from "react";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div className="flex justify-between items-center p-6 border-b-2px   border-b-light-grey">
      <div>
        <span className="text-header-value-size font-bold tracking-widest">
          {props?.logo}
        </span>
      </div>

      <div className="flex flex-row gap-6 px-10 justify-center items-center">
        {props?.values &&
          props?.values?.map((val) => (
            <div className="flex">
              <img src={val?.icon} />
              <Link
                className={
                  val?.type === "button"
                    ? "btn"
                    : "text-sub-header-value-size font-light-bold"
                }
                key={val.id}
                to={val.path}
              >
                {val.name}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
