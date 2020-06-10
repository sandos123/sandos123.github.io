function cookieConsent() {
    var allow = window.confirm("allow cookies?");
    if (allow) { 
        //set cookie or call salesforce api
        var d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000)); // 1 year
        var expires = "expires="+ d.toUTCString();
        document.cookie = "sfdcConsent" + "=" + "true" + ";" 
          + expires 
          + ";path=/"; //+ $A.get("$Site.coreUrlPrefix") // + "Samesite=Lax;" // + "Secure;"
    } else {
        document.cookie = "sfdcConsent" + "=" + ";" 
          + "expires=Thu, 01 Jan 1970 00:00:00 UTC;" + 
          + ";path=/" //+ $A.get("$Site.coreUrlPrefix")
    }
}

window.onload = function() {
    if (document.cookie.indexOf("sfdcConsent") == -1) {
        cookieConsent();
    }
}


