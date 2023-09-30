
function displayScene() {

    const d = new Date();
    let hour = d.getHours();
    // let hour = 21;

    if (hour <= 0) {
        window.scrollTo(0, 6000);
        greeting="Good night";

    } else if (hour <= 3) {
        window.scrollTo(0, 5000);
        greeting="Good morning";

    } else if (hour <= 5) {
        window.scrollTo(0, 1500);
        greeting="Good morning";

    } else if (hour <= 7) {
        window.scrollTo(0, 1400);
        greeting="Good morning";

    } else if (hour <= 9) {
        window.scrollTo(0, 2000);
        greeting="Good morning";

    } else if (hour <= 11) {
        window.scrollTo(0, 1000);
        greeting="Good morning";

    } else if (hour <= 13) {
        window.scrollTo(0, 1000);
        greeting="Good afternoon";

    } else if (hour <= 15) {
        window.scrollTo(0, 2500);
        greeting="Good afternoon";

    } else if (hour <= 17) {
        window.scrollTo(0, 3500);
        greeting="Good evening";

    } else if (hour <= 19) {
        window.scrollTo(0, 4000);
        greeting="Good evening";

    } else if (hour <= 21) {
        window.scrollTo(0, 5500);
        greeting="Good night";

    } else if (hour <= 23) {
        window.scrollTo(0, 6000);
        greeting="Good night";

    } else {
        alert("Other Planet");
    }


}
function display() {
    const d = new Date();
    let hr = d.getHours();

    console.log(hr);
}

// function getCookie(name) {
//     var dc = document.cookie;
//     var prefix = name + "=";
//     var begin = dc.indexOf("; " + prefix);
//     if (begin == -1) {
//         begin = dc.indexOf(prefix);
//         if (begin != 0) return null;
//     }
//     else {
//         begin += 2;
//         var end = document.cookie.indexOf(";", begin);
//         if (end == -1) {
//             end = dc.length;
//         }
//     }
//     // because unescape has been deprecated, replaced with decodeURI//return unescape(dc.substring(begin + prefix.length, end));return decodeURI(dc.substring(begin + prefix.length, end));
// }


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            // var xyz = c.substring(name.length, c.length);
            return true;
        }
    }
    return false;
}

function getName(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var xyz = c.substring(name.length, c.length);
            return xyz;
        }
    }
    return xyz;
}



var greeting;
function cook() {
    const d = new Date();
    let hour = d.getHours();
    // let hour = 2;

    if (hour <= 0) {
        greeting="Good night";

    } else if (hour <= 3) {
        greeting="Good morning";

    } else if (hour <= 5) {
        greeting="Good morning";

    } else if (hour <= 7) {
        greeting="Good morning";

    } else if (hour <= 9) {
        greeting="Good morning";

    } else if (hour <= 11) {
        greeting="Good morning";

    } else if (hour <= 13) {
        greeting="Good afternoon";

    } else if (hour <= 15) {
        greeting="Good afternoon";

    } else if (hour <= 17) {
        greeting="Good evening";

    } else if (hour <= 19) {
        greeting="Good evening";

    } else if (hour <= 21) {
        greeting="Good night";

    } else if (hour <= 23) {
        console.log("sdfd");
        console.log(greeting);
        greeting="Good night";

    } else {
        alert("Bhai alien ho kya app");
    }

    
     

    if (!getCookie("username")) {
        var person = prompt("Please enter your name", "Joey");

        if (person == null || person == "") {
            alert("Please Enter your name ...!")
            location.reload(true);

        } else {
            var alphaExp = /^[a-zA-Z]+[a-zA-Z]+$/;

            if (person == null || person == "") {
                alert("First and last name must be filled out!");
                location.reload(true);
            }
            else if (!person.match(alphaExp)) {
                alert("Name must contain letters only!")
                location.reload(true);
            }
            else{
                document.cookie = "username=" + person + ";expires=Sunday,31-Dec-2023 09:00:00 UTC";
                // alert("Welcome , "+getName("username"));
                document.getElementById("demozzz").innerHTML= greeting + " , "+getName("username");
            }


        }
    } else {
        document.getElementById("demozzz").innerHTML= greeting + " , "+getName("username");
        // alert("Welcome , "+getName("username"));
    }

    

}
