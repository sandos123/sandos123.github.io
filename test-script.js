function cookieConsent() {
    var allow = window.confirm("allow cookies?");
    if (allow) { 
        //set cookie or call salesforce api
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000)); // 1 year
        var expires = "expires="+ d.toUTCString();
        document.cookie = "MyTestCookie" + "=" + "true" + ";" 
          + expires 
          + ";path=/"; //+ $A.get("$Site.coreUrlPrefix")
          //+ ";domain=." + new URL($A.get("$Site.absCoreUrl")).host
    } else {
        document.cookie = "MyTestCookie" + "=" + ";" 
          + "expires=Thu, 01 Jan 1970 00:00:00 UTC;" + 
          + ";path=/" //+ $A.get("$Site.coreUrlPrefix")
          //+ ";domain=." + $A.get("$Site.absCoreUrl");
    }
}

window.onload = function() {
    if (document.cookie.indexOf("MyTestCookie") == -1) {
        cookieConsent();
    }
}


