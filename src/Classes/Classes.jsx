import React from "react";
import { classes } from "../data/classes";
import Class from "./Class";

const Classes = () => {
  return (
    <>
      <h2 className="title">Turmas</h2>
      <div className="student-list">
        {classes.map((turma) => {
          const { name, level, letter } = turma;
          return <Class name={name} level={level} letter={letter} />;
        })}
      </div>
    </>
  );
};

export default Classes;
