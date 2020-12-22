function join () {
    // alert("WELcome");
    var blank= "";
    var rexfname=/^[A-z\s]*$/;
    var strfname=joinform.fname.value;
    if (strfname == blank){
        alert("Fullname can not left blank!");
        joinform.fname.focus();
        return false;
    } else if (!rexfname.test(strfname)){
        alert("Fullname only, letters (a-z) are allowed");
        joinform.fname.focus();
        return false;
    }
    var rexuser=/^\w{6,20}$/;
    var struser=joinform.username.value;
    if(struser == blank){
        alert("Username can not left blank!");
        joinform.username.focus();
        return false;
    } else if (!rexuser.test(struser)){
        alert("Username only,letters (a-z) and number (0-9) are allowed");
        joinform.username.focus();
        return false;
    }
    var rexemail=/^\w{7,40}[@][A-z]{3,}[.][A-z]{2,}$/;
    var stremail=joinform.email.value;
    if(stremail == blank){
        alert("Email can not left blank!");
        joinform.email.focus();
        return false;
    } else if (!rexemail.test(stremail)){
        alert("Email only, letters (a-z) numbers(0-9) are allowed");
        joinform.email.focus();
        return false;
    }
    var rexphone=/^\d{8,12}$/;
    var strphone=joinform.phone.value;
    if (strphone == blank){
        alert("Phone can not left blank!");
        joinform.phone.focus();
        return false;
    } else if (!rexphone.test(strphone)){
        alert("Phone only, numbers(0-9) are allowed");
        joinform.phone.focus();
        return false;
    } else {
    alert("Congratulation!");
    }

}
function enquiry(){
    var blank= "";
    var rexfname=/^[A-z\s]*$/;
    var strfname=enqform.fname.value;
    if (strfname == blank){
        alert("Fullname can not left blank!");
        enqform.fname.focus();
        return false;
    } else if (!rexfname.test(strfname)){
        alert("Fullname only, letters (a-z) are allowed");
        enqform.fname.focus();
        return false;
    }
    var rexemail=/^\w{7,40}[@][A-z]{3,}[.][A-z]{2,}$/;
    var stremail=enqform.email.value;
    if(stremail == blank){
        alert("Email can not left blank!");
        enqform.email.focus();
        return false;
    } else if (!rexemail.test(stremail)){
        alert("Email only, letters (a-z) numbers(0-9) are allowed");
        enqform.email.focus();
        return false;
    }

}
function register(){
    var blank= "";
    var rexuser=/^\w{6,20}$/;
    var struser=form.username.value;
    if(struser == blank){
        alert("Username can not left blank!");
        form.username.focus();
        return false;
    } else if (!rexuser.test(struser)){
        alert("Username only,letters (a-z) and number (0-9) are allowed");
        form.username.focus();
        return false;
    }
    var rexpassword=/^\w{6,19}$/;
    var strpassword=form.password.value;
    if (strpassword == blank){
        alert("Password can not left blank!");
        form.password.focus();
        return false;
    } else if (!rexpassword.test(strpassword)){
        alert("Password only, letters (a-z) numbers(0-9) are allowed");
        form.password.focus();
        return false;
    }
    var strcnfpassword = form.cnfpassword.value;
    if (strcnfpassword != strpassword){
        alert("Confirm password allow password");
        form.cnfpassword.focus();
        return false;
    }
    var rexphone=/^\d{8,12}$/;
    var strphone=form.phone.value;
    if (strphone == blank){
        alert("Phone can not left blank!");
        form.phone.focus();
        return false;
    } else if (!rexphone.test(strphone)){
        alert("Phone only, numbers(0-9) are allowed");
        form.phone.focus();
        return false;
    } else {
    alert("Congratulation!");
    }  
}
function login(){
    var blank= "";
    var rexuser=/^\w{6,20}$/;
    var struser=loginform.username.value;
    if(struser == blank){
        alert("Username can not left blank!");
        loginform.username.focus();
        return false;
    } else if (!rexuser.test(struser)){
        alert("Username only,letters (a-z) and number (0-9) are allowed");
        loginform.username.focus();
        return false;
    }
    var rexpassword=/^\w{6,19}$/;
    var strpassword=loginform.password.value;
    if (strpassword == blank){
        alert("Password can not left blank!");
        loginform.password.focus();
        return false;
    } else if (!rexpassword.test(strpassword)){
        alert("Password only, letters (a-z) numbers(0-9) are allowed");
        loginform.password.focus();
        return false;
    }

}
