//Email Sending
$(document).ready(function(){
  var from, to, subject, text;
  $('form').on("submit",function(event){
    event.preventDefault();
    to = $("#emailInput").val();
    subject = $("#subjectInput").val();
    text = $("#messageInput").val();
    $("#sendStatus").text("Sending message...");
    $.get("http://pentakitty.ink/contactApp", 
      {to: to,
       subject: subject,
       text: text},
      function(data){
        if(data=="sent"){
	  $('form')[0].reset();
	  $("#sendStatus").empty().text("Message sent!");
        }
      });
  });
});
