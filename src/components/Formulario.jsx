import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = (props) => {
  const initialState = {
    name: "",
    description: "",
    estado: "pendiente",
    priority: false,
  };
  const [inputs,handleChangue, reset] = useFormulario(initialState)

  const { name, description, estado, priority } = inputs;
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "Nombre ogligatorio",
        icon: "error",
      });
      return;
    }
    if (!description.trim()) {
      e.target[1].focus();
      return Swal.fire({
        title: "Error!",
        text: "Descripción ogligatoria",
        icon: "error",
      });
    }
    Swal.fire({
      title: "Éxito",
      text: "¡Todo agregado!",
      icon: "success",
    });

    props.AgregarTodo1({
      name: name,
      description: description,
      estado: estado === "pendiente" ? false : true,
      priority: priority,
      id: uuidv4(),
    });

    reset();
  };

  return (
    <>
      <h3>Agregar TODO</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="name"
          placeholder="Ingrese nombre"
          value={name}
          onChange={handleChangue}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          name="description"
          value={description}
          onChange={handleChangue}
        />
        <select
          name="estado"
          onChange={handleChangue}
          value={estado}
          className="form-control mb-2"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={priority}
            name="priority"
            id="flexCheckDefault"
            onChange={handleChangue}
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default Formulario;
