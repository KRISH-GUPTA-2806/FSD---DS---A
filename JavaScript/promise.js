function f1(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("hi");
        resolve();
    },4000)
    })

}

function f2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("ABES ENGINEERING COLLEGE");
        resolve();
    },2000)
    })

}

async function a() {
    try {
        await f1();
        await f2();
    } catch (err) {
        console.log("ERRORRR", err);
    }
}

a();