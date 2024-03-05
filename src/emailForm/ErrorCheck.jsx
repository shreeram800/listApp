export function emailCheck(email){
    const error=[]
    if(email.length < 10){
        error.push("Required")
    }
    if(!email.endsWith("@shreeram.com")){
        error.push("Must end with @shreeram.com");
    }
    return error
}

export function passwordCheck(password){
    const error=[]
    if(password.length===0){
        error.push("Required")
    }
    if(!password.match(/[a-b]/)){
        error.push("Must include a lower case letter.");
    }
    if(!password.match(/[A-B]/)){
        error.push("Must include a Upper  case letter.");
    }
    if(!password.match(/[0-9]/)){
        error.push("Must include a numerical value.");
    }
    return error
}
