AOS.init();
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ========toggle answer============
$('.dropdown-icon').click(function(){
  $(this).parent().next().slideToggle("slow","linear");
  if( $(this).hasClass("fa-angle-down")){
    $(this).removeClass(" fa-angle-down").addClass('fa-angle-up')
    $(this).prev().children().eq(1).css("color","#55C1AD")
  }
  else if ( $(this).hasClass("fa-angle-up")){
    $(this).removeClass(" fa-angle-up").addClass('fa-angle-down');
    $(this).prev().children().eq(1).css("color","black")
  }
})
// =================navbar href===================
$(".nav-link").click(function(){
  let link=$(this).attr("href");
  let offset=$(link).offset().top;
  let navWidth=$("nav").innerHeight();
  console.log(navWidth);
  console.log(offset);
  console.log($(link));
  $("html , body").animate({scrollTop:offset-navWidth},2000);
})

// =================back to top button=================
$(".back-button").click(function(){
  $("html , body").animate({scrollTop:0},2000);
})

$(window).scroll(function () {
  let aboutOffset= $("#about").offset().top;
  if ($(window).scrollTop()<aboutOffset) {
    $(".back-button").addClass("d-none")
   }
   else{
    $(".back-button").removeClass("d-none")
   }
})
// ============text Area remaining=================================
let maxValue=100;
$('textarea').keypress(function(e){
  let cutternLenght= $(this).val().length; 
  let remainLenght=maxValue-cutternLenght;
  if(remainLenght<=0){
    $(".textRemain").html("your available character finished ");
   e.preventDefault()
  }
  else{
    $(".textRemain").html(`${remainLenght}  character Remaining `)

  }
})
// =====================text slider===================================
$(".slideTextLink").click(function (e){
  let newSerc=$(this).attr("href");
  $("#imgslider").attr("src",newSerc);
  
})
// ===============================particals====================
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

// ========================count down============================
window.onload=function () {
  countDownTime( "29 dec 2022 9:56:04");
}
function countDownTime(countTo) {
  let futureDate= new Date(countTo);
   futureDate=futureDate.getTime()/1000;
   let now=new Date();
   now=now.getTime()/1000
   let timeDiffrence=futureDate-now;
   let days=Math.floor(timeDiffrence/(24*60*60));
   let hours=Math.floor((timeDiffrence-(days*(24*60*60)))/3600)
   let minutes=Math.floor(((timeDiffrence-(days*(24*60*60)))-hours*3600)/60)
   let seconds=Math.floor(((timeDiffrence-(days*(24*60*60)))-hours*3600 -(minutes*60)));
   $(".days").html(days);
   $(".minutes").html(minutes);
   $(".hours").html(hours);
   $(".seconds").html(seconds);
   setTimeout(()=>{
    countDownTime(countTo);
   },1000)
}
// =========coloring box============================================
let devWidth=$(".coloring-box").outerWidth();
$(".coloring-box").css("left",-devWidth)
$(".landing-icon").click(function(){
  if(  $(".coloring-box").css("left")=="0px"){
    $(".coloring-box").animate({"left":-devWidth},1000)
  }
  else{
    $(".coloring-box").animate({"left":0},1000)
  }
})
$(".colors div").click(function(){
 let color= $(this).css("backgroundColor");
 $(".change-color").css("color",color)
})
// ==loading screen=================================
$(document).ready(function(){
  $(".loading-screen").fadeOut(1000,function(){
    $(document.body).css("overflow-y","visible");
  })
})