function doHomeWrok(arg) {
    console.log("Douing Homework");
    console.log("Finally Homework is completed...");
    arg();
   let submitHomework = function() {
        console.log("Hey We both completed homework");
        console.log("let us Submit please..");
    }
    return submitHomework;
    }
function copyhomework() {
    console.log("copying homework...");
    console.log("thank you, I Copyed Homework...");

}(copyhomework);

