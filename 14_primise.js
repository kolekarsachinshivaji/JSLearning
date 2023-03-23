
let promiseForNotes = new Promise(function (resolve,regect) {
    const isSirAvailable = true;
    if (isSirAvailable) {
        resolve("sir shared notes....")
    }else{
        regect("sir did not sare Notes..")
    }
});

promiseForNotes.then(function (succes) {
    console.log("i got notes");
}).catch(function (rejected) {
    console.log("Are yarr.......kya sir hai ye...........");
}).finally(function(){
    console.log("you should have always your notes");
})