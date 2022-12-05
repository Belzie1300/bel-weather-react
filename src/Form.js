import React from "react";

export default function Form() {
  return (
    <div>
      <form>
        <div className="row d-flex">
          <div className="col-4">
            Wednesday 15:00 <br /> 9 November 2022
          </div>
          <div className="col-4">
            <input
              type="search"
              placeholder="Search a city"
              className="form-control w-100"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-warning w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
