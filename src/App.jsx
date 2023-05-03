import React, { useState } from "react";
import Students from "./Students/Students";
import Classes from "./Classes/Classes";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import ClassDetail from "./Classes/ClassDetail";
import StudentForm from "./forms/StudentForm";
import { studentsList } from "./data/data";

const App = () => {
  const [students, setStudents] = useState(studentsList);

  return (
    <>
      <section className="dashboard">
        <nav>
          <div className="nav-bar">
            <h2>GESTÃO DE TURMAS</h2>
          </div>
          <div className="nav-container">
            <NavLink to="/" className="btn">
              Home
            </NavLink>
            <NavLink to="/Classes" className="btn">
              Turmas
            </NavLink>
            <NavLink to="/Students" className="btn">
              Alunos
            </NavLink>
            <NavLink to="/" className="btn">
              Avaliações
            </NavLink>
            {/* <button className="btn" type="button" onClick={handleShowClass}>
            Turmas
          </button> */}
            {/* <button className="btn" type="button" onClick={handleShowStudents}>
            Alunos
          </button> */}
            {/* <button className="btn">Avaliações</button> */}
          </div>
        </nav>

        <Routes>
          <Route path="/Classes" element={<Classes />} />
          <Route
            path="/Students"
            element={<Students students={students} setStudents={setStudents} />}
          />
          <Route path="/ClassDetail" element={<ClassDetail />} />
          <Route path="/addStudentForm" element={<StudentForm />} />
        </Routes>
      </section>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default App;
