<?php 
header('X-Frame-Options: GOFORIT'); 
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Webcast IIITD</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <link rel="stylesheet" type="text/css" href="styles/style.css"/>
    <script src="scripts/events.js"></script>

    <!--FONTS-->
    <link href='//fonts.googleapis.com/css?family=Roboto:400,100,300' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">

    <!--JQUERY-->
    <!--script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script-->
    <script src="scripts/jquery-2.2.0.min.js"></script>

    <!--ANGULAR-->
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
  </head>
  <body style="background:#222">

      <!--Main First #TopImageDiv-->
    <div id="TopDiv">
      <div id="TopImageDiv"></div>
      <div id="TopHeader">
<!--
          <div class="NavItem" onclick="$.goToSection(0)">HOME</div>
          <div class="NavItem" onclick="$.goToSection(1)">WATCH EVENT</div>
          <div class="NavItem" onclick="$.goToSection(2)">PREVIOUS EVENETS</div>
-->
      <div class="NavItem" onclick="$.goTo('1')">HOME</div>
        <div class="NavItem" onclick="$.goTo('2')">WATCH EVENT</div>
        <div class="NavItem" onclick="$.goTo('3')">PREVIOUS EVENTS</div>
      </div>
      <div id="TopIIITDLogo"></div>
      <div id="TopWebCastLogo"></div>            
      <div id="TopWatchEvents">
        <span id="watchEvents" onclick="$.goTo('2')">watch events</span><br>
        <i onclick="$.goToSection(1)" id="arrow" class="fa fa-angle-double-down"></i>
      </div>            
    </div>


    <!--EVENT CONTAINER-->
<!--
    <div id="EventContainer" ng-controller="CurrentEvent as Event">
        <div style="width:90%;height:80%;background:rgba(10,10,10,0.05);margin:5%;text-align:center;word-wrap:break-word">
            {{Event.event}}
        </div>
    </div>
-->
    <div id="EventContainer">
      <div class="event-name">{EventName}</div>
      <div class="desig">event by<span class="name">Name</span></div>
      <div class="date">The date today</div>
      <div class="time">10:00am to 5:00pm</div>
      
    </div>
    <script src="https://apis.google.com/js/platform.js"></script>

<div class="g-ytsubscribe" data-channelid="UCL-j5XhW112bJRYGqbURdLg" data-layout="full" data-theme="dark" data-count="default"></div>
<BR><BR>
<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWebcastIIITD&tabs=timeline&width=340&height=70&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=true&appId=1577843875847623" width="340" height="70" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
  
    <!--PREVIOUS EVENTS CONTAINER-->
    <div id="PreviousEventsContainer">
      <div class="header">Previous Webcasts</div>
      <div id="previous-container"></div>
    </div>

    <!--TEST CONTAINER-->
<!--        <div id="PreviousEventsContainer2"></div>-->

    <div id="footer">Indraprastha Institute of Information Technology, Delhi</div>
    <script src="scripts/script.js"></script>
    <script src="scripts/makeEvents.js"></script>
    <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71835302-2', 'auto');
  ga('send', 'pageview');

</script>
  </body>
</html>