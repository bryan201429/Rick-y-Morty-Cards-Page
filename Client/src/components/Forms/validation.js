export const validation=(userData)=>{

    let errors={}
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!userData.email){
        errors.email='Ingrese un mail!';
    }
    else if(!regexEmail.test(userData.email)){
        errors.email='Ingrese un correo válido';
    }
    else if(userData.email.length>35){
        errors.email='Longitud máxima alcanzada';
    }

    if (!userData.password) {
        errors.password = 'Ingrese una contraseña!';
    }
    else if(userData.password.length<6 || userData.password.length>10){
        errors.password='Contraseña debe tener entre 6-10 caracteres';
    }
    else if(!    /\d/.test(userData.password)){
        errors.password='Contraseña debe tener almenos 1 número';
    }

    return errors;
}