function valid_email(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function valid_password(pass){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(pass);
}
function check_form(){
    var flag = true;
    var email = document.getElementById('email_input').value;
    var pass = document.getElementById('pass_input').value;
    if(!valid_email(email)){
        flag = false;
        document.getElementById('error_email').innerHTML = 'Định dạng email không hợp lệ';
    }
    if(!valid_password(pass)){
        flag = false;
        document.getElementById('error_pass').innerHTML = 'Mật khẩu không đúng định dạng<br>Mật khẩu phải đủ 8 ký tự gồm chữ thường, hoa, số và ký tự đặc biệt !';
    }
    if(flag){
        document.getElementById('myform').submit();
    }

}
var email1 = 'thaihien.com';
var email2 = 'thaihien9@gmail.com.vn';
var pass1 = 'onetwo1';
var pass2 = 'Onetwo$123';
console.log('--- Valid email ---')
console.log(email1 + (valid_email(email1) ? " Email hợp lệ" : " Email không hợp lệ"));
console.log(email2 + (valid_email(email2) ? " Email hợp lệ" : " Email không hợp lệ"));
console.log('--- valid password ---')
console.log(pass1 + (valid_password(pass1) ? " Mật khẩu hợp lệ ": " Mật khẩu không hợp lệ"));
console.log(pass2 + (valid_password(pass2) ? " Mật khẩu hợp lệ ": " Mật khẩu không hợp lệ"));