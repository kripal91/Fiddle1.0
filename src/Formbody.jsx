import { useState } from "react";
import "./FormBody.css"
export default function formBody(){
    let [formData, setFormData] = useState({
        name: "",
        domain: "",
        detail: ""
      });
    
      let handleInputChange = (event) => {
        setFormData((curData) => {
          return { ...curData, [event.target.name]: event.target.value };
        });
      };
    
      let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
          name: "",
          domain: "",
          detail: ""
        });
      };
    
      return (
        <form className="mainForm" onSubmit={handleSubmit}>
          <input className="topmar"
            type="text"
            placeholder="Your Name/ Organization Name"
            value={formData.name}
            name="name"
            onChange={handleInputChange}
          />
          <br />
          <br />
    
          <input
            type="text"
            placeholder="Select a Domain"
            value={formData.domain}
            name="domain"
            onChange={handleInputChange}
          />
          <br />
          <br />
    
          <textarea
            type="text"
            placeholder="Give brief detail"
            value={formData.detail}
            name="detail"
            onChange={handleInputChange}
          />
          <br />
          <br />
          <br />
          <br />
          <button className="btn">Submit</button>
        </form>
      );
}