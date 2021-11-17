$(".list li").click(function(){

    $(this).addClass("active").siblings().removeClass('active')
})
let initposition=1;
let contents=document.querySelectorAll('.content');
$('#right').click(function(){
    if(initposition==contents.length){
        initposition=0
    }
initposition++;

cheker();



})
$('#left').click(function(){
   
    if(initposition==1){
        initposition=contents.length+1
    }
 
initposition--;

cheker();



})
function cheker(){
    contents.forEach(content=>{
        content.classList.remove('active')
    })
   
contents[initposition-1].classList.add('active')

}

// scroll list

$(".list li a").click(function(){
   $("html,body").animate({
       scrollTop:$("#" + $(this).data('val')).offset().top
   },1000)

    


})




//    autoslideclient
//   (function autoSlider(){
//     $('.bacck .active').each(function(){
//         if(!$(this).is(':last-child')){
//           $(this).delay(5000).fadeOut(1000,function(){
//             $(this).removeClass('active').next().addClass('active').fadeIn();
//             autoSlider();
            
           
//           })
//         }else{
//             $(this).delay(5000).fadeOut(1000,function(){
//                 $(this).removeClass('active');
//                 $(".bacck div").eq(0).addClass('active').fadeIn();
//                 autoSlider()
               
//             })
//         }
  
//       })
//   })();

   

    



   $('.list li').on('click',function(){
    $(this).addClass("active").siblings().removeClass('active');
    if($(this).data("class")==="all"){
        $(".gallery .image img").css("opacity",1)

    }else{
        $(".gallery .image img").css("opacity",'.08');
        $($(this).data("class")).css("opacity",1)
    }



   })
  

 