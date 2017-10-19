(function(module){
  let mail = {};
  mail.$recipient = null;
  mail.$phone = null;
  mail.$email = null;
  mail.$message = null;



  mail.getForm = function(){
    console.log('clicked the submit');
    $('.contactForm').off().on('click', '.sendMail', function(e){
      e.preventDefault();
      mail.$recipient = $('.contactForm input[name=sender]').val();
      mail.$phone = $('.contactForm input[name=email]').val();
      mail.$email = $('.contactForm input[name=phone]').val();
      mail.$message = $('.contactForm input[name=message]').val();
      console.log('recip', mail.$recipient);
      console.log('phone', mail.$phone);
      console.log('email', mail.$email);
      console.log('msg', mail.$message);
    });
  };





















$(document).ready(function() {
    mail.getForm();
});





  module.mail = mail;
})(window);
