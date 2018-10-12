document.addEventListener("DOMContentLoaded", function(){

    //Register user     
    submitForm = function() {
       
        var username =  document.getElementById('username');
        if(username.value == "" || username.value == null) {
            username.focus();
            username.nextElementSibling.style.display = 'block';
            return false;
        }
        username.nextElementSibling.style.display = "none";
        
        var usertype =  document.getElementById('usertype');
        var typeValue = usertype.selectedOptions[0].value;
        if(typeValue == "" || typeValue == null) {
            usertype.focus();
            usertype.nextElementSibling.style.display = 'block';
            return false;
        }
        usertype.nextElementSibling.style.display = "none";

        var userclass =  document.getElementById('userclass');
        var classValue = userclass.selectedOptions[0].value;
        if(classValue == "" || classValue == null) {
            userclass.focus();
            userclass.nextElementSibling.style.display = 'block';
            return false;
        }
        userclass.nextElementSibling.style.display = "none";

        var newUser = {
            "userName": username.value,
            "userRole": typeValue,
            "userClass": classValue
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.responseText);
                document.getElementsByClassName('alert-msg')[0].innerHTML = res.message;
                document.getElementsByClassName('alert-box')[0].style.display = "block";
            }
        };
        var url = 'http://localhost:3000/users/user';
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(newUser));
        
        document.getElementById('user-form').reset();

    };

    //Delete user
    deleteUser = function(id){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.responseText);
                alert(res.message);
            }
        };
        var url = 'http://localhost:3000/users/user/'+ id;
        xhttp.open("DELETE", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send();

        location.reload();
    }

    //Update user
    updateUser = function(id){
        var username =  document.getElementById('username');
        if(username.value == "" || username.value == null) {
            username.focus();
            username.nextElementSibling.style.display = 'block';
            return false;
        }
        username.nextElementSibling.style.display = "none";
        
        var usertype =  document.getElementById('usertype');
        var typeValue = usertype.selectedOptions[0].value;
        if(typeValue == "" || typeValue == null) {
            usertype.focus();
            usertype.nextElementSibling.style.display = 'block';
            return false;
        }
        usertype.nextElementSibling.style.display = "none";

        var userclass =  document.getElementById('userclass');
        var classValue = userclass.selectedOptions[0].value;
        if(classValue == "" || classValue == null) {
            userclass.focus();
            userclass.nextElementSibling.style.display = 'block';
            return false;
        }
        userclass.nextElementSibling.style.display = "none";

        var newUser = {
            "userName": username.value,
            "userRole": typeValue,
            "userClass": classValue
        }

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(this.responseText);
                alert(res.message);
            }
        };
        var url = 'http://localhost:3000/users/user/'+ id;
        xhttp.open("PUT", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhttp.send(JSON.stringify(newUser));

        location.reload();
    }


});


