import { useState } from "react";

const SignUpForm = () => {

    // const [formData, setFormData] = useState({
    //     ...
    // })

    const handleForm = (e)=>{
        e.preventDefault();


        let form = e.target;
        let formData = new FormData(form);
        let formObj = Object.fromEntries(formData);
        let formJSON = JSON.stringify(formObj);

        if(!formObj){
            alert("Please fill all the fields");
        }else{
            alert(formJSON)
        }   
    }
  return (
    <>
      <div>SignUpForm</div>
      <form onSubmit={handleForm} action="">
        <div>
          <span>Name: </span>
          <input type="text" name="name" />
        </div>
        <div>
          <span>Email: </span>
          <input type="text" name="email" />
        </div>
        <div>
            <span>Gender</span>
         <select name="gender" id="">
            <option className="gender" value="Select" selected>Select</option>
            <option className="gender" value="Male">Male</option>
            <option className="gender" value="Female">Female</option>
         </select>
        </div>
        <div>
          <span>Country: </span>
          <input type="radio" name="country" value="India" />India
          <input type="radio" name="country" value="Others" />Outside India
        </div>
        <div>
          <span>Verification: </span>
          <input type="checkbox" name="Yes" value="yes" />Yes
        </div>

        <div>
            <button>Register</button>
            </div>
      </form>
    </>
  );
};

export default SignUpForm;
