(function(){
	var s = document.createElement('script');
	s.setAttribute('defer', '');
	s.setAttribute('src', "/push-wrap.js");
	s.onload = init;
	document.body.appendChild(s);

    function init() {
        var obj = new PushKaWrapper({"pid":3241,"sourceId":"2817","landingId":27,"marks":{"utm_source":null,"utm_medium":null,"utm_campaign":null,"utm_term":null,"utm_content":null},"popupUrl":"https:\/\/notiphyme.info\/rs\/2817?count=3&declCount=3&fullScreenMode=enabled","pushKaScript":"https:\/\/ichecknotifyfriends.info\/push.js?b=14","languages":{"en":{"btnSubscribe":"Subscribe","btnContinue":"Continue","btnCancel":"Cancel","btnClose":"Close","notRobot":"I'm not a robot","popupTitle":"Get notification about actual news from site","popupText":"To continue, enable the subscription","titleNotification":"Notification","systemAllowTitle":"wants to","systemAllowText":"wants to send you notifications"}}});
        
        obj.popup('captcha', 10, 600);
    }
})();