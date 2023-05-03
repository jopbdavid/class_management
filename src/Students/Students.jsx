import React, { useState } from "react";
import { studentsList } from "../data/data";
import Student from "./Student";
import { Link } from "react-router-dom";

const Students = ({ students, setStudents }) => {
  return (
    <>
      <h2 className="title">Alunos</h2>

      <Link to="/addStudentForm">
        <button className="btn new-student">Adicionar novo Aluno</button>
      </Link>

      <div className="student-list">
        {studentsList.map((student) => {
          const { name, age, address, img } = student;
          return (
            <>
              <Student name={name} age={age} address={address} img={img} />
            </>
          );
        })}
      </div>
      <Link to="/addStudentForm">
        <button className="btn new-student">Adicionar novo Aluno</button>
      </Link>
    </>
  );
};

export default Students;
