function regist(){
    //debugger
    let regis=document.getElementById("email").value;
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(regex.test(regis) ){
        alert('Registered Successfully');
        window.location.href="pagina2.html";
}else{
    alert('Invalid Email Address');
}
}