$(document).ready(function(){
    
    //Check Phone or Desktop    
    function checkForMobile(a)
{if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
    return true;
    else return false;
    }
//    var Phone = checkForMobile(navigator.userAgent||navigator.vendor||window.opera);
    var tempX = 0;
    var tempY = 0;
    var DivToMove = document.getElementById("TopImageDiv");
    var DivToMoveLeft = -250;
    var DivToMoveFactor = 0.1;
    
    var IE = document.all?true:false;
    if (!IE) document.captureEvents(Event.MOUSEMOVE);
    var Phone=($(window).width()<500)?(true):(false);
  
    if(Phone)
        {
            $("body").css("overflow-y","auto");
//            $("#TopDiv").css("display","none");
            $("#TopImageDiv").css('left','0px');
        }
  $(window).resize(function(){
    Phone=($(window).width()<500)?(true):(false);
    if(Phone)
        {
          
            $("body").css("overflow-y","auto");
//            $("#TopDiv").css("display","none");
            $("#TopImageDiv").css('left','0px');
//          alert();
          document.onmousemove =function(){};
        }
    else{
     document.onmousemove = getMousePositon;
    }
  });
    
    //start of LARGE SCREEN ONLY events
    if(!Phone){
        
        
        // PARRALAX EFFECT START
        function moveImage(tempX,tempY)
        {        
            var toMove = (0.5*$(document).width()-(Math.abs(tempX)+Math.abs(tempY))/2)*0.2 + DivToMoveLeft;
            //console.log($(DivToMove).width()+$(DivToMove).position().left>$(document).width())
            if($(DivToMove).position().left-toMove<0 && toMove>0 == false || ($(DivToMove).position().left-toMove>0)&&$(DivToMove).width()+$(DivToMove).position().left>$(document).width())
                {
                        $(DivToMove).css('left', toMove+'px');
                }

        }
        
        function getMousePositon(e)
        {
            //console.log($(document).scrollTop()<$("#EventContainer").position().top);
            if(!Phone && $(document).scrollTop()<$("#EventContainer").position().top)
                {
                    if (IE)
                      {
                        tempX = event.clientX + document.body.scrollLeft;
                        tempY = event.clientY + document.body.scrollTop;
                      } 
                      else 
                      {
                        tempX = e.pageX
                        tempY = e.pageY            
                      }  
                      if (tempX < 0){tempX = 0}
                      if (tempY < 0){tempY = 0}  
                      moveImage(tempX,tempY);
                      return true;
                }
        };     
        
         document.onmousemove = getMousePositon;
        // PARRALAX EFFECT END
        

        
        //SCROLL THINGS
      /*
        if(navigator.userAgent.indexOf('Edge')>0 || IE)
        {
            var toScrollDivs = ["#TopDiv","#EventContainer","#PreviousEventsContainer","#PreviousEventsContainer2"];
            toScrollDivs[0]=0;
            for(var i=1;i<toScrollDivs.length;i++)toScrollDivs[i]=toScrollDivs[i-1]+$(toScrollDivs[i]).height();
            
            $("body").css("overflow","auto");
            
            $.goToSection = function(i)
            {
                $("html,body").animate({scrollTop:toScrollDivs[i]},1000);
                if(i==1)$(DivToMove).animate({left:0},1000);
            }
        }
            
        else
        {
            var isScrolling = false;
            var toScrollDivs = ["#TopDiv","#EventContainer","#PreviousEventsContainer","#PreviousEventsContainer2"];
            toScrollDivs[0]=0;
            for(var i=1;i<toScrollDivs.length;i++)toScrollDivs[i]=toScrollDivs[i-1]+$(toScrollDivs[i]).height();
            console.log(toScrollDivs);
            var current = 0;
            for(var i=0;i<toScrollDivs.length;i++){if(toScrollDivs[i]==$(document).scrollTop())current=i;}
            $("html,body").animate({scrollTop:toScrollDivs[current]});
            function mouseWheelFunction(e)
            {
                //console.log("working");
                //console.log(e);
                console.log(Phone);

                if(!Phone && !(navigator.userAgent.indexOf('Edge')>0 || IE)){

                    var delta = e.wheelDelta ? e.wheelDelta : (e.wheelDeltaY?e.wheelDeltaY:-e.detail);

                    if(!isScrolling)
                        {
                            isScrolling=true;
                            if(delta>0)
                                {
                                    if(current>0)
                                        {
                                            current--;
                                            $("html,body").animate({scrollTop:toScrollDivs[current]},1000,function(){
                                                isScrolling=false;
                                            });

                                        }
                                    else isScrolling=false;

                                }
                            else
                                {
                                    if(current==0)
                                        {
                                            $(DivToMove).animate({left:0},1000);
                                        }
                                    if(current<toScrollDivs.length-1)
                                        {
                                            current++;
                                            $("html,body").animate({scrollTop:toScrollDivs[current]},1000,function(){
                                                isScrolling=false;
                                                //console.log(current+" "+$(toScrollDivs[current]).position().top);
                                            });
                                        }
                                    else 
                                        isScrolling=false;
                                }
                        } 
                }
            }

//            window.addEventListener('mousewheel',mouseWheelFunction);
//            window.addEventListener('DOMMouseScroll',mouseWheelFunction);

            //if(!(navigator.userAgent.indexOf('Edge')>0 || IE))
                
//            $(document).scroll(function(e){
//                e.preventDefault();
//                e.stopPropagation();
//            });   
            
            
            
            $(window).resize(function(){
                toScrollDivs = ["#TopDiv","#EventContainer","#PreviousEventsContainer","#PreviousEventsContainer2"];
                toScrollDivs[0]=0;
                for(var i=1;i<toScrollDivs.length;i++)toScrollDivs[i]=toScrollDivs[i-1]+$(toScrollDivs[i]).height();
                for(var i=0;i<toScrollDivs.length;i++){if(toScrollDivs[i]==$(document).scrollTop())current=i;}
                $("html,body").animate({scrollTop:toScrollDivs[current]});
            });
            
            $.goToSection = function(i)
            {
                current=i;
                $("html,body").animate({scrollTop:toScrollDivs[i]},1000);
                if(i==1)$(DivToMove).animate({left:0},1000);
            }
        }        
        */  
       //End of SCROLL EFFECTS
        
    }
    //End for LARGE SCREEN ONLY
  //GoToThings
  $.goTo=function(index)
  {
    index--;
    var divs=["#TopDiv","#EventContainer","#PreviousEventsContainer"];
    var end=0;
    for(var i=0;i<index;i++)
      end=end+($(divs[i]).outerHeight());
//    console.log(end);
    $('html,body').animate({scrollTop:end});
  }
    
});


//CurrentEvent ANGULAR
//var app = angular.module('webcast',[]);   
//app.controller('CurrentEvent',function(){
//    this.event=events[0];
//});