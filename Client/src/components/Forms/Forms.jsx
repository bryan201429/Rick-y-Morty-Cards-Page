import { useState } from "react";
import {validation} from "./validation";
import style from "./Forms_style.css";

export default function Forms(props){

    const[userData,setUserdata]=useState({
        email:"",
        password:"",
    })

    const[errors,setErrors]=useState({
        email:"",
        password:"",
    })

    const handleChange=(event)=>{
        setUserdata({
            ...userData,
            [event.target.name]:event.target.value,
        })
        setErrors(validation({
            ...userData,
            [event.target.name]:event.target.value,
        }))
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        if(!errors.email&&!errors.password){
            props.login(userData)
        } else{
            alert("Incorrect data");
        }
    }


    //  QUEDA PENDIENTE EL LOGOOUT!b
    return(
        <div className="Container">
            <h1>LOGIN</h1>

            <form type="submit" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input name='email' 
                type="text"
                placeholder="Email..."
                value={userData.email}
                onChange={handleChange}
                ></input>
                {errors.email && <span>{errors.email}</span>}

                <label htmlFor="password">Password:</label>
                <input name='password' 
                type="password"
                placeholder="*****"
                value={userData.password}
                onChange={handleChange}
                ></input>
                {errors.password && <span>{errors.password}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}