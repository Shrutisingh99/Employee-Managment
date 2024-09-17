import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import {Form,Row,Col} from 'react-bootstrap';




function AddEmployee() {


  
  const navigate = useNavigate();
  const AddEmployee = () => {
    navigate("/dashboard/employee");
  };
  return (
    <div style={{display:"flex" ,alignContent:'center',justifyContent:'center'}}>
    <div style={{width:'30%',border:'2px solid black',backgroundColor:"rgb(220, 242, 241)"}}>
   
    </div>
    </div>
  );
}

export default AddEmployee;