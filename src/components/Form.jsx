import { useState } from "react";

function Form({additem}){
const[inputText,setInputText]=useState([""])
const handleSubmit=(e)=>{
  e.preventDefault();
  if(inputText.trim()=="") return;
  additem(inputText);
  setInputText("");

}

return(
    <form className="shopping-form border rounded p-3 mb-3" onSubmit={handleSubmit}>
    <div className="input-group">
      <input
        type="text"
        id="item_name"
        className="form-control"
        placeholder="Eleman Ekle"
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">
        <i className="bi bi-plus"></i>
      </button>
    </div>
  </form>)
}
export default Form;