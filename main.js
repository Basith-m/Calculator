// display content in calculator screen

function display(content)
{
    result.value+=content
}

function allClear(){
    result.value =""
}

function exprEval(){
    try{
        result.value = eval(result.value)
    }
    catch{
        result.value = "Invalid Expression!!!"
    }
}

function removeList(){
    result.value = result.value.slice(0,-1)
}