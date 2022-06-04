function render(){
    let element = document.getElementById("input_value");
    element.innerText = value.toLocaleString("en-US");
  }
  function render_first(){
    let element = document.getElementById("input_value");
    element.innerText = first_value.toLocaleString("en-US");
  };
  function render_second(){
    let element = document.getElementById("input_value");
    element.innerText = second_value.toLocaleString("en-US");
  };
  function render_last(){
    let element = document.getElementById("input_value");
    element.innerText = result.toLocaleString("en-US");
  };
