(function(module){
  let mail = {};

  mail.$sender = null;
  mail.$phone = null;
  mail.$email = null;
  mail.$message = null;



  mail.getForm = function(){
    console.log('clicked the submit');
    $('.contactForm').off().on('click', '.sendMail', function(e){
      e.preventDefault();
      mail.$sender = $('.contactForm input[name=sender]').val();
      mail.$phone = $('.contactForm input[name=email]').val();
      mail.$email = $('.contactForm input[name=phone]').val();
      mail.$message = $('.contactForm textarea[name=message]').val();
      $.get("http://localhost:9000/send", {
        from: mail.$sender,
        phone: mail.$phone,
        email: mail.$email,
        text: mail.$message
      }, function(data){
        if(data == "sent"){
          console.log();
          $('#sentMessage').empty().html(
            'Your email has been sent.  Thank you!  We will be in touch soon.'
          );
        }
      });
    });
  };

  mail.sendForm = function(){
    $()
  }





















$(document).ready(function() {
    mail.getForm();
});





  module.mail = mail;
})(window);
