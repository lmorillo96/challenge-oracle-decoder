//Input validation

function validateString(userInput){
    var error = false;
    let res = null;
    res = userInput.match(new RegExp(/[a-z\s]+/)); // Expresión regular para permitir solo minusculas y espacios. 

    if(res != null){
        if(res["0"] != userInput){
            error = true;
        }
    }else{
        error = true;
    }
    if(userInput.trim(" ") == ""){
        error = true;
    }

    return error;
}