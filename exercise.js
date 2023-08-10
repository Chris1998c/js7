
function printname(){
    let helloName = "ciao Jhon";

    function inner() {
      return helloName;
    }

    return inner;
  }

let stampaMessaggio = printname();
console.log(stampaMessaggio());
