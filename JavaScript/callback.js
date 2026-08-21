/*
function sum(a,b) {
    return a+b;
}



function sumwitmsg(fnc,msg){
    const result = fnc(a, b);
    const finalresult = "hi "+msg+" your ans is: "+result;
    console.log(finalresult);
}

sumwitmsg(sum, "abcdefg");
sumwitmsg(diff, "abcdefg");


function diff(a,b){
    return a-b;
}
*/

function check(user, pass) {
    if (user == "abc" && pass == "123") {
        console.log("logged");
    } else {
        console.log("denied");
    }
}

function login(check, msg) {
    const result = check("abc", "123");

    const fresult = "successfully matched and logged in";
    console.log(fresult);
}

login(check, "some message");