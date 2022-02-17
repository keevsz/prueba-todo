import { useState } from "react"

export const useFormulario = (initialState = {}) => {
    
    const [inputs,setInputs] = useState(initialState)
    
    const handleChangue = (e) => {
        const { name, value, checked, type } = e.target;
        setInputs((old) => ({
          ...old,
          [name]: type === "checkbox" ? checked : value,
          //   e.target.name: e.target.value -----> name: hola .. description: hola2, ...
        }));
      };
    
      const reset = () => {
        setInputs(initialState)
      }

    return [inputs, handleChangue,reset]
}