
$(document).ready(function(){
    $(".web1").hover(function(){
      
      $(".githubpage").show();
      $(".vercle").hide();
      $(".netlify").hide();
      $(".railway").hide();
      $(".fleek").hide();
      $(".tencentcloud").hide();
      });
    $(".web2").hover(function(){
      $(".vercle").show();
      $(".githubpage").hide();
      $(".netlify").hide();
      $(".railway").hide();
      $(".fleek").hide();
      $(".tencentcloud").hide()
    });
    $(".web3").hover(function(){
        $(".netlify").show();
      $(".githubpage").hide();
      $(".vercle").hide();
      $(".railway").hide();
      $(".fleek").hide();
      $(".tencentcloud").hide()
      });
    $(".web4").hover(function(){
        $(".railway").show();
      $(".githubpage").hide();
      $(".vercle").hide();
      $(".netlify").hide();
      $(".fleek").hide();
      $(".tencentcloud").hide()
      });
    $(".web5").hover(function(){
        $(".fleek").show();
      $(".githubpage").hide();
      $(".vercle").hide();
      $(".netlify").hide();
      $(".railway").hide();
      $(".tencentcloud").hide()
      });
    $(".web6").hover(function(){
        $(".tencentcloud").show();
        $(".githubpage").hide();
        $(".vercle").hide();
        $(".netlify").hide();
        $(".railway").hide();
        $(".fleek").hide()
      });
  });