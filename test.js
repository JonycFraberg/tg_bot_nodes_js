let greeting = {
  привет: "Привет, дорогой пользователь",
  hello: "Hello dear user",
};
let string = "Привет друг";
for (let elem in greeting) {
  if (string.toString().toLowerCase().indexOf(elem) === 0) {
    console.log(greeting[elem]);
  }
}
