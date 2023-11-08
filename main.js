function add() {
    var result =
    Number(document.getElementById("firstNo").value) +
    Number(document.getElementById("secondNo").value);
     document.getElementById("result").innerHTML=result;
    }
    function remove() {
      var result = Number(document.getElementById("firstNo").value) -
    Number(document.getElementById("secondNo").value);
      document.getElementById("result").innerHTML=result;
    }
    function multiply() {
    var result =
    Number(document.getElementById("firstNo").value) *
    Number(document.getElementById("secondNo").value);
      document.getElementById("result").innerHTML=result;
    }
    function division() {
    var result =
    Number(document.getElementById("firstNo").value) /
    Number(document.getElementById("secondNo").value);
      document.getElementById("result").innerHTML=result;
    }
    
    