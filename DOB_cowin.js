function calculate() {  
    var input = document.getElementById("DOB").value;  
    var dob = new Date(input);  
    if(input==null || input=='') {  
      document.getElementById("error").innerHTML = "Please Enter the Date";    
      return false;   
    } 
    else 
    {    
    var month = Date.now() - dob.getTime();      
    var age = new Date(month);        
    var year = age.getUTCFullYear();    
    var age = Math.abs(year - 1970);  
    if (age >= 18 && age <= 44)
        {
            
                // document.getElementById("age").innerHTML =    
                   alert( "Your Age is: " + age + " years. And your are eligilbe for Vaccination"); 
                    window.open('https://selfregistration.cowin.gov.in', '_self');
            
        }
    else 
    {
        alert ("Your Age is: " + age + " years.You are not elgible for Vaccination")
    }
    }  
}  