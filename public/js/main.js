//document.getElementById('registrationForm').addEventListener('submit', passwordValidation)
//var confirmPassword = document.getElementById('confirmPass').value;
//var password = document.getElementById('password').value;

/*function passwordValidation() {
    console.log(confirmPassword, password)
    if (confirmPassword === password){
        doLogin()
    }
}*/
//confirm passwoprd is server side
/*function checkPass(){
    if (document.getElementById('password').value != document.getElementById('confirmPassword').value) {
        document.getElementById('message').innerHTML = 'no match';
        document.getElementById('submit').disabled = true;
    
    } else {
        document.getElementById('submit').disabled = false;
        document.getElementById('message').innerHTML = 'match';
    }
}*/
var password1 = document.getElementById('password').value;
var password2 = document.getElementById('ConfirmPassword').value;
function checkPass(){
    if ( password1 != password2 ) {
        password2.setCustomValidity('Password does not Match');
        document.getElementById('message').innerHTML = 'no match';
    }
    else{
        password2.setCustomValidity('');
    }
    
}
password1.onchange = checkPass;
password2.onkeyup = checkPass;

/*var resourceListData = [];
$(document).ready(function(){
    populateTable();

    function populateTable(){
        var tableContent = '';

        $.getJSON('',function (data){
            $.each(data, function(){
                tableContent += '<tr>';
                tableContent += '<td>'+this.resource+'</td>';
                tableContent += '<td>'+this.resource+'</td>';
                tableContent += '<td>'+this.resource+'</td>';
                tableContent += '<td>'+this.resource+'</td>';
                tableContent += '<td>'+this.resource+'</td>';
                //want to add the update link also
                tableContent += '<td><a href="#" rel="'+this._id+'">delete</a></td>';
                
            });

            $('#resourceList table tbody').html(tableContent);
        })
    }
})

var resources = [];

resources.forEach(function(resou){
    document.getElementById('sname').innerHTML = this.resou
    document.getElementById('sgroup').innerHTML = this.resou
    document.getElementById('semail').innerHTML = this.resou
})
*/
function filesProcess(files){
    var selection = "<table><tr><th>Name</th><th>Bytes</th><th>Mime</th><th>Type</th><th>Last Modified</th></tr>";
    for(i=0; i<files.length; i++){
        file =files[i];
        selection = "<tr><td>"+ file.name + "</td><td style=\"text-align: right\">" + file.size + "</td><td>" + file.type + "</td><td>" + file.lastModifiedDate + "</td></tr>";
    }
    selection += "</table>";
    document.getElementById("result").innerHTML = selection;
}
