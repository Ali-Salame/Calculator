let numbers1 = []
let numbers2 = []
let toggle = true;
let value = 0
let value2 = 0
let first_value = 0
let second_value = 0
let result = 0
let operator = ''

function sum(first_value,second_value) {
    let result = first_value + second_value;
    return result
};
function subtract(first_value,second_value) {
    let result = first_value - second_value;
    return result
};
function division(first_value,second_value){
    let result = first_value / second_value;
    return result
};
function multiply(first_value,second_value){
    let result = first_value * second_value;
    return result
};


function reply_click(clicked_id)
{ 
  
  if (Number.isInteger(clicked_id) && toggle){
    numbers1.push(clicked_id)
    value = numbers1.join("")
    first_value = parseFloat(value)
    render_first()
  }
  else if (Number.isInteger(clicked_id) === false){
        if (clicked_id === '.' && toggle){
            
            value = numbers1.join("")
            numbers1 = []
            numbers1.push(value + ".")
            first_value = parseFloat(value)
            render_first()
        } else if (clicked_id === '.' && toggle === false) {
            value2 = numbers2.join("")
            numbers2 = []
            numbers2.push(value2 + ".")
            second_value = parseFloat(value2)
            render_second()
        }   else if (clicked_id === 'DEL' && toggle){
            numbers1.pop()
            value = numbers1.join("")
            first_value = parseFloat(value)
            render_first()
        }
        else if (clicked_id === 'DEL' && toggle == false){
            numbers2.pop()
            value2 = numbers2.join("")
            second_value = parseFloat(value2)
            render_second()
        }
        else {
            toggle = false
            operator = clicked_id
        }
  }
  else {
    numbers2.push(clicked_id)
    value2 = numbers2.join("")
    second_value = parseFloat(value2);
    render_second()
  }
} 


function end_result(){
  if (operator === '+'){result = sum(first_value,second_value);}
  if (operator === '-'){result = subtract(first_value,second_value);}
  if (operator === '*'){result = multiply(first_value,second_value);}
  if (operator === '/'){result = division(first_value,second_value);}

  numbers1 = [];
  numbers2 = [];
  toggle = true;
  value = 0
  value2 = 0
  first_value = 0
  second_value = 0
  render_last()
}


function reset() {
  numbers1 = [];
  numbers2 = [];
  toggle = true;
  value = 0
  value2 = 0
  first_value = 0
  second_value = 0
  result = 0
  render_first()
}

