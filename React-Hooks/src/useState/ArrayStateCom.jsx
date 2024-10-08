import { useState } from "react";

const ArrayStateCom = ()=>{
    const createData =()=>{
        let arr = ["akash","harish","tirth","rushi"];
        return arr
    }

    const [students , setStudents] = useState(createData());
    
    const addStudents = (e)=>{
        e.preventDefault()

        // exxtract value from Button and store in val variable 
        let val = e.target.value
        
        // create new Array for that first we destructure array and extract 
        // values from students array using spred operater and add value of
        // val variable and store into new Array .
        let newStudents = [...students, val];

        // set the State of Students using setter function 
        setStudents(newStudents)
    }

    const removeStudent = (e)=>{
        const removeThis = e.target.value;
        const newArr = students.filter(function(val){
            if(removeThis === val){
                return false;
            }else{
                return true;
            }
        })

        setStudents(newArr);
    }
    
    
    
    return(
        <>
            <h1>Student List</h1>
            <div>
                <button onClick={addStudents} value="Ram">Ram</button>
                <button onClick={addStudents} value="Raghu">Raghu</button>
                <button onClick={addStudents} value="Raja">Raja</button>
                <button onClick={addStudents} value="Mohan">Mohan</button>
            </div>

            <div>
                {students.map((val, index)=>(
                    <>
                    <span key={index}>{val}</span>
                    <button onClick={removeStudent} value={val}>X</button>
                    <br />
                    </>
                ))}
            </div>
        </>
    )
}

export default ArrayStateCom