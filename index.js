// Write your code in this file!


function scuberGreetingForFeet(ride) {
  if (ride <= 400) {
    return("This one is on me!");
  } else if (ride > 2500) {
    return("No can do.");
  } else if (ride > 2000) {
    return("I will gladly take your thirty bucks."); // this needs to be last else the bottom statement wont get hit
  }
}

function ternaryCheckCity(city) {
  return (city === "NYC") ? `Ok, sounds good.` : `No go.`;
}


function switchOnCharmFromTip(tip) {
  switch(tip) {
    case `generous`:
      return("Thank you so much.");
      break;
    case "not as generous":
      return("Thank you.");
      break;
    default:
      return("Bye.");
  }
}
