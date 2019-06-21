//https://docs.google.com/document/d/1jUYHH7-VpPvhkWy-Sr6MeydkMMFP2hVf1FlP5S3BGbM/edit

var button = document.getElementById("button");
var content = document.getElementById("content");
var list1 = ["1920s","1960s","1980s","space","werewolf","supernatural","pirate","merfolk","western","1800s","sci-fi"];
var list2 = ["werewolf","horror","college","merfolk","demon hunter","detectives","bodyguard","bounty hunter","tattoo artist"];
var thing1 = "test2";
var thing2 = "test1";
button.addEventListener("click",function(){
  summon();
});

function summon(){
  //get a random one from each array, save each to a var
  thing1 = getRand(list1);
  thing2 = getRand(list2);
  content.innerHTML = thing1 + " au + " + thing2 + " au";
  button.innerHTML = "✨";
  //document.body.style.backgroundColor = "blue";
}

function getRand(array){
  var rand = Math.floor(Math.random() * array.length);
  //console.log(rand);
  return array[rand];
}
