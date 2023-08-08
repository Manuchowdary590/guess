var randomnumber=Math.floor(Math.random()*100)+1;
var attempts=0;
document.getElementById('btn').addEventListener('click',function()
{
 var guess=parseInt(document.getElementById("guessinput").value)
attempts++;
if(guess===randomnumber)
{
displayMessage("Congratulations! You gave gussed Number in "+attempts +"attempts");
document.getElementById('btn').disabled=true;
}
else if(guess<randomnumber)
{
    displayMessage("Too LOW! Try a higher Number");
}
else{
    displayMessage("Too HIGH! Try a Lower Number");
}
});
function displayMessage(Message){
    document.getElementById('msg').textContent=Message;
}