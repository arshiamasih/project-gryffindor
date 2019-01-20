function getValue() {
  var name = document.getElementById("#name");
  var last = document.getElementById("#last");
  var pref = document.getElementById("#pref");
  return `${name} ate ${last}, and would like ${pref}`;
}


console.log(getValue());