function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet <= 400) {
    return "This one is on me!"
  } else if (distanceInFeet <= 2000) {
    return "That will be twenty bucks."// Write your code here!
} else if (distanceInFeet<= 2500) {
  return "I will gladly take your thirty bucks."
} else {
  return "No can do."
}
}

function ternaryCheckCity(destination){
  return (destination === "NYC") ? "Ok, sounds good." :  "No go."// Write your code here!
}

function switchOnCharmFromTip(myTypeOfTip){
  let tip;
  switch (myTypeOfTip) {
    case "generous":
      tip = "Thank you so much."
      break;
    case "not as generous":
      tip = "Thank you."
      break;
    default:
      tip = "Bye."
  }
  return tip;
      // Write your code here!
}