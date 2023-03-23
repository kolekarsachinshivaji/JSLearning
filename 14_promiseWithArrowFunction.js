const isSirAvailable = true;
let promiseForNotes = new Promise(function (resolve,regect) {
    
    if (isSirAvailable) {
        resolve("sir shared notes....");
    }else{
        regect("sir did not sare Notes..");
    }
});

promiseForNotes
.then( sucess=> console.log("i got notes"))
.catch(failure=>  console.log("Are yarr.......kya sir hai ye..........."))
.finally(()=>console.log("you should have always your notes"));
    
