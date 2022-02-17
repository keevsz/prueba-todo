import React from "react";

const Todo = ({ todo,eliminarTodo1,editarTodo1 }) => {
  const {id, name, description, estado, priority } = todo;
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {name}
          ({estado === true ? "finalizado" : "Pendiente"})
        </div>
        <p>{description}</p>                    
        {/* onClick necesita funcion de flecha para no ser activado ni bien se renderize todo */}
        <button className="btn btn-danger me-2" onClick={()=>eliminarTodo1(id)}>Eliminar</button>
        <button className="btn btn-danger" onClick={()=>editarTodo1(id)}>Editar</button>
      </div>
      <span className="badge bg-primary rounded-pill">
          {/* Si priority es verdadero: prioritario */}
          {priority && "Prioritario"} 
      </span>
    </li>
  );
};

export default Todo;
