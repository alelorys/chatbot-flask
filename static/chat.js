function openChat(){
document.getElementById("chatForm").style.display = "block";
document.getElementById("close-chat").style.display = "block";
document.getElementById("open-chat").style.display = "none";
}

function closeChat(){
document.getElementById("chatForm").style.display = "none";
document.getElementById("close-chat").style.display = "none";
document.getElementById("open-chat").style.display = "block";
}

function getBotResponse(){
var date = new Date();
var hour = date.getHours();
var min = date.getMinutes();
min = "0"+min;
var fullTime = hour+":"+min.slice(-2);
var rawText = $("#userMes").val();
var userHtml = '<div class="userMsg"><span class="name_coresponder">Użytkownik</span><p class = "userText">' + rawText + '</p><span class = "date">'+fullTime+'</span></div><div class="clear"></div>';
$("#userMes").val("");
$("#chatLog").append(userHtml);
document.getElementById('userInput').scrollIntoView({block:'start',behaviour:'smooth'});

$.get("/get", {msg:rawText }).done(function(answer) {
var botHtml = '<div class="botRespond"><span class="name_coresponder">Krzysztof</span><p class ="botText">' + answer + '</p><span class = "date">'+fullTime+'</span></div><div class="clear"></div>';
$("#chatLog").append(botHtml);
document.getElementById('userInput').scrollIntoView({block : 'start',behaviour:'smooth'});
});
}

$("#userMes").keypress(function(e) {
if(e.which == 13) {
getBotResponse();
}
});

$("#buttonInput").click(function() {
getBotResponse();
})