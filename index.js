function believersClass() {
    // get all the inputs within the submitted form
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        // only validate the inputs that have the required attribute
        if(inputs[i].hasAttribute("required")){
            if(inputs[i].value == ""){
                // found an empty field that is required
                alert("Please fill all required fields");
                return false;
            }
            else{
                location.href = 'https://acronyms.thefreedictionary.com/DFGG';
            }
        }
    }
    return true;
    
}

console.log("The ")

