import React, { useState } from "react";
import { studentsList } from "../data/data";
import Student from "../Students/Student";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [students, setStudents] = useState(studentsList);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !address || !email) return;
    const newStudent = {
      name: name,
      age: age,
      address: address,
      img: email,
      id: students.length + 1,
    };
    setStudents([...students, { newStudent }]);

    setName("");
    setAge("");
    setAddress("");
    setEmail("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-header">Novo Aluno</div>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="age" className="form-label">
            Idade
          </label>
          <input
            type="number"
            className="form-input"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="address" className="form-label">
            Morada
          </label>
          <input
            type="text"
            className="form-input"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Adicionar Aluno
        </button>
      </form>
    </>
  );
};

export default StudentForm;
