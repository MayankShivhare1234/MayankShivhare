function validate()
{   
    var p1 = document.getElementById("pass").value ;
    var p2 = document.getElementById("cpass").value ;
    var uname = document.getElementById("uname").value ; 
    var x = document.getElementById("cb") ;
    
    if( x.checked == false )
    {
        alert("Please accept T&C !!") 
    }
    if( p1 != p2 )
    {
        document.getElementById("pass").style.border = "red 3px solid " ;  
        document.getElementById("label1").innerHTML = "Passwords not matched" ; 
        return false    ;
    }

    if( p1.length == 0 ){
        document.getElementById("pass").style.border = "red 3px solid " ;  
        document.getElementById("label1").innerHTML = "Passwords cannot be empty" ; 
        return false    ;
    }

    if( uname.trim().length == 0 ) 
    {
        document.getElementById("uname").style.border = "red 3px solid " ;  
        document.getElementById("label2").innerHTML = "UserName cannot contain only spaces" ; 
        return false    ;
    }  


    if(uname.length == 0 )
    {
        document.getElementById("uname").style.border = "red 3px solid " ;  
        document.getElementById("label2").innerHTML = "UserName cannot be empty" ; 
        return false    ;
    }
    if( p1.trim().length == 0 ) 
    {
        document.getElementById("pass").style.border = "red 3px solid " ;  
        document.getElementById("label1").innerHTML = "Password cannot contain only spaces" ; 
        return false    ;
    }  

}