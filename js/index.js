function xyz()
{
if($("#first").val()=='' || $("#last").val()==''){alert("First & Last name required");}
    else
{
    if($("#em2").val()==''){alert("kindly put your mail id !");}
else
{
if($("#pass1").val()=='' || $("#pass2").val()==''){alert("Password area required");}
            else{
if($("#pass1").val()!=$("#pass2").val()){alert("Passwords Does not matched");}
                else{
localStorage.setItem($("#em2").val(),$("#em2").val());
localStorage.setItem($("#pass1").val(),$("#pass1").val());
    alert("sign up successfull");
    window.location.href="index.html";
                }
            }
        }
    }
}

function abc(){
    if($("#em1").val()==''){alert("Enter Email id");}
    else{
        if($("#em1").val()==localStorage.getItem($("#em1").val())){
            if($("#pass").val()==''){alert("Enter Password");}
            else{
if($("#pass").val()==localStorage.getItem($("#pass").val())){
    alert("Sign in Successfully");
window.location.href="welcome.html";
                }
else{alert("Wrong Password");}
            }
        }
        else{
    alert("Invalid ID");
        }
    }}

