function Morning(userName) {
  return "Доброе утро, " + userName;
}
function Afternoon(userName) {
  return "Добрый день, " + userName;
}
function Evening(userName) {
  return "Добрый вечер, " + userName;
}

function greet(userName) {
  let date = new Date();
  let hours = date.getHours();
  if (hours <= 12) {
    let greeting = Morning(userName);
    return greeting;
  } else if (hours >= 12 && hours < 17) {
    let greeting = Afternoon(userName);
    return greeting;
  } else if (hours >= 17) {
    let greeting = Evening(userName);
    return greeting;
  }
}

module.exports = { greet };
