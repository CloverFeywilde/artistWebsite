//Email Sending
$(document).ready(function(){
  var from, to, subject, text;
  $("#sendEmail").click(function(){
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
	  $("#sendStatus").empty().html("Message sent!");
        }
      });
  });
});
