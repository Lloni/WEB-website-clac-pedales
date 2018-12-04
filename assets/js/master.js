$(document).ready(function(){

  $(".featured").attr("src")

  $(".thumb").on("click", function(){
    source = $(this).attr("src");
    $(".featured").attr("src", source);
  });

})
