console.log("hello");
function getOption() {
    selectElement =
        document.querySelector('#select1');
    degtype = selectElement.value;
    let input = document.getElementById("convertfrom");
    
    let input1 = parseFloat(input.value);
    

    let result1 = 0;
    

    if (degtype == "celsius") {
        
        result1 = (input1 - 32) * 5 / 9;
        console.log(result1);
        document.getElementById("result").value=result1;
        
    }
    else if(degtype=="Fahrenheit"){
        result1 = (input1*9/5)+32;
        console.log(result1);
        document.getElementById("result").value=result1;
    }

}