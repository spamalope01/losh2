(function(module){
  let mail = {};
  mail.$recipient = null;
  mail.$email = null;
  mail.$message = null;



  mail.getForm = function(){
    console.log('clicked the submit');
    $('.contactForm').off().on('click', '.sendMail', function(e){
      e.preventDefault();
    });
  };



























  module.mail = mail;
})(window);
