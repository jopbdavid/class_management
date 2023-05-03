import React from "react";

const Student = ({ name, age, address, img }) => {
  return (
    <div className="student-container">
      <img src={img} alt={name} style={{ width: "50px", height: "50px" }} />
      <h4>{name}</h4>

      <p>
        <b>Nome</b>: {name}
      </p>
      <p>
        <b>Idade</b>: {age}
      </p>
      <p>
        <b>Morada</b>: {address}
      </p>
      <button className="btn-delete">Eliminar Aluno</button>
    </div>
  );
};

export default Student;
