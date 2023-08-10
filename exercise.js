
function printname(){
    let helloName = "ciao Jhon";

    function inner() {
      return helloName;
    }

    return inner;
  }

let stampaMessaggio = printname();
setTimeout (function() {
    console.log(stampaMessaggio());
}, 1000);

