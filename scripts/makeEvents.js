$(document).ready(function(){
  
  //Setup Current Event
  var container=document.getElementById('EventContainer');
  container.innerHTML='';
  var info=events[events.length-1];
  
  var eventName=document.createElement('div');
  eventName.className='event-name';
  eventName.innerHTML=info.eventName;
  
  var desig=document.createElement('div');
  desig.className='desig';
  desig.innerHTML=info.speaker.designation;
  var speakerName=document.createElement('span');
  speakerName.innerHTML='&nbsp;'+info.speaker.name;
  speakerName.className='name';
  desig.appendChild(speakerName);
  
  var date=document.createElement('div');
  date.innerHTML=info.time.date;
  date.className='date';
  
  var time=document.createElement('div');
  time.innerHTML=info.time.time;
  time.className='time';
  
  var eventVideo=document.createElement('iframe');
  $(eventVideo).attr('align','middle');
  $(eventVideo).attr('src',info.videoLink);
  $(eventVideo).attr("allowfullscreen",true);
  $(eventVideo).attr("webkitallowfullscreen",true);
  $(eventVideo).attr("oallowfullscreen",true);
  $(eventVideo).attr("msallowfullscreen",true);
  $(eventVideo).attr("mozallowfullscreen",true);
  $(eventVideo).attr("style","padding:0");
  eventVideo.className ='video';
  
  var about=document.createElement('div');
  about.className='about';
  var aboutHead=document.createElement('div');
  aboutHead.innerHTML=info.speaker.aboutHead;
  aboutHead.className='header';
  var aboutInfo=document.createElement('div');
  aboutInfo.innerHTML=info.speaker.about;
  aboutInfo.className='info';
  about.appendChild(aboutHead);
  about.appendChild(aboutInfo);
  
  
  container.appendChild(eventName);
  container.appendChild(desig);
  container.appendChild(date);
  container.appendChild(time);
  container.appendChild(eventVideo);
  container.appendChild(about);
  
  
  //Prvious Events
  var prevContainer=document.getElementById("previous-container");
  for(var i=events.length-2;i>=0;i--)
    {
      var event=document.createElement('div');
      event.className='event';
      
      var prevName=document.createElement('div');
      prevName.className='name';
      prevName.innerHTML=(events[i].eventName.length<=25)?(events[i].eventName):(events[i].eventName.slice(0,25)+'...');
      
      var by=document.createElement('div');
      by.className='speaker';
      by.innerHTML='<span style="color:#888">by</span>&nbsp;'+events[i].speaker.name.split(',')[0];
      
      var videoLink=document.createElement('a');
      videoLink.href=events[i].videoLink;
      videoLink.className='video-link';
      var videoLinkImage=document.createElement('img');
      videoLinkImage.className='video-link-image';
      videoLinkImage.src=events[i].videoImage;
      videoLink.appendChild(videoLinkImage);
      
      var PrevEventTime = document.createElement("div");
      PrevEventTime.className = "time";
      PrevEventTime.innerHTML = events[i].time.time+"<br><span style='font-size:18px;color:#bbb'>"+events[i].time.date+"</span>"; 
      
      event.appendChild(prevName);
      event.appendChild(by);
      event.appendChild(videoLink);
      event.appendChild(PrevEventTime);
      prevContainer.appendChild(event);
    }
  
});