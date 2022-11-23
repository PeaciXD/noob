function myIP() {
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    xmlhttp.open("GET","https://api.hostip.info/get_html.php",false);
    xmlhttp.send();

    hostipInfo = xmlhttp.responseText.split("\n");

    for (i=0; hostipInfo.length >= i; i++) {
        ipAddress = hostipInfo[i].split(":");
        if ( ipAddress[0] == "IP" ) return ipAddress[1];
    }

    return false;
}

/*
//get user
const os = require("os");

const userInfo = os.userInfo();

const uid = userInfo.uid;

//ip shit

const axios = require('axios');
response = axios.get('https://api.whatismyip.com/ip.php?key=dc0507541be240731caba00390aa2f81')
const info = uid + ": " + response.data

//write it to file :D
require("fs").writeFile("ip.txt", "e", (err)=>{});*/