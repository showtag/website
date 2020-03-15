$(document).ready(function(){
    $(".job-main").click(function(){
      
      var target = $(this).parent().children(".job-description");
      $(target).slideToggle();
    });
  });