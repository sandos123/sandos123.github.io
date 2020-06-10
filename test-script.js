function cookieConsent() {
    var allow = window.confirm("allow cookies?");
    if (allow) { 
        //set cookie or call salesforce api
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000)); // 1 year
        var expires = "expires="+ d.toUTCString();
        document.cookie = "MyTestCookie" + "=" + "true" + ";" 
          + expires 
          + ";path=/" //+ $A.get("$Site.coreUrlPrefix")
          + ";domain=." + $A.get("$Site.absCoreUrl");
    }
}

window.onload = function() {
  cookieConsent();
}


