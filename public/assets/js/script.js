$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function clicked() {

       if (confirm('Do you want to submit?')) {
           insertSurvey.submit();
       } else {
           return false;
       }
}

var People = [
    {
        username: "jmadrigales",
        password: "@jesse"
    },
    {
        username: "dsather",
        password: "@devin"
    },
    {
        username: "ncharney",
        password: "@nicholas"
    },
    {
        username: "bhough",
        password: "@bart"
    },
    {
        username: "kzhang",
        password: "@kevin"
    }
]

function getInfo() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(i = 0; i < People.length; i++)
    {
        if (username == People[i].username && password == People[i].password)
        {
            alert(username + " is logged in.")
            return
        }
    }

    alert("Incorrect Username or Password")
}