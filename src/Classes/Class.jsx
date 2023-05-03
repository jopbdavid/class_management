import React, { useState } from "react";
import ClassDetail from "./ClassDetail";
import { Link, useNavigate } from "react-router-dom";

const Class = ({ name, level, letter }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // setShowDetails(!showDetails);
    navigate("/ClassDetail");
  };
  return (
    <>
      <div className="student-container">
        <h4>{name}</h4>

        <p>
          <b>Nível</b>: {level} º ano de escolaridade
        </p>

        <button type="button" onClick={handleClick}>
          Ver turma
        </button>
      </div>
      {showDetails && <ClassDetail name={name} />}
    </>
  );
};

export default Class;
