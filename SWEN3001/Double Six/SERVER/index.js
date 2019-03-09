////////////////////////////////
//CONFIGUTATIONS
////////////////////////////////

//THE LENGTH OF TIME FOR WHICH A LOGIN VERIFICATION LINK IS VALID
const verificationLinkExperationTimeout = 300;

const countries = ["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Colombia","Comoros","Cook Islands","Costa Rica","Côte d\'Ivoire","Croatia","Cuba","Cyprus","Czech Republic","Democratic Republic of the Congo","Denmark","Djibouti","Dominican Republic","Dominica","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guinea Bissau","Guinea","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands Antilles","Netherlands","New Zealand","Nicaragua","Nigeria","Niger","Niue","Norfolk Island","North Korea","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn Islands","Poland","Portugal","Puerto Rico","Qatar","Republic of the Congo","Romania","Russian Federation","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Pierre","Saint Vicent and the Grenadines","Samoa","San Marino","Sao Tomé and Príncipe","Saudi Arabia","Scotland","Senegal","Serbia and Montenegro","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Soloman Islands","Somalia","South Africa","South Georgia","South Korea","Soviet Union","Spain","Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Tibet","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","UAE","Uganda","Ukraine","United Kingdom","United States of America","Uruguay","US Virgin Islands","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Wallis and Futuna","Yemen","Zambia","Zimbabwe"];

//CONFIGURE BASED ON THE IP ADDRESS OF THIS DEVICE
const serverDomain = "https://192.168.31.74/";

const doubleSixApiKey = "aanOardUimcXMyCUoIoMNP4q1jH3d6qd";
//DURATION OF EACH ROUND
const roundDuration = 20;

//INITIATION SECOND OF GRACE PERIOD
const graceperiod = 8;

//MAXIMUM PLAYERS PER GAME
const maxPlayersPerGame = 10;

//SETS THE VALUES FOR THE GAME TOKEN
const gameTokenValue = 0.25;

//PERSONAL EMAIL ADDRESS
const personalPaypalCredentials = {
    "email": "otsurfer6@gmail.com",
    "username": "",
    "password": "",
    "signature": "",
    "sandbox":   "", 
    "feesPayer": "",
    "currencyCode": "",    
    "mode": "", //sandbox or live
    "client_id": "",
    "client_secret": ""
};

//DOUBLE SIX EMAIL ADDRESS
const doubleSixPaypalCredentials = {
    "email": "otsurfer.6@gmail.com",
    "username": "otsurfer.6-facilitator_api1.gmail.com",
    "password": "ZGAUF7ETETXEQDA5",
    "signature": 'A6vGptCo4eQdQE-W0DgLeVteItkVAyazypPABuNrvTPcKJuk7BKWDe8.',
    "sandbox":   true, 
    "feesPayer": 'SENDER',
    "currencyCode": 'USD',    
    "mode": 'sandbox', //sandbox or live
    "client_id": "AVoFy9bcCn4vKcLX9c9WF7piNP5Ok_dj5hVmoII9ArqgPu0T6FMEexKhI4rfa1mUpk3dzuu9VsFr7WQM",
    "client_secret": "EF0V0n7lUMphDLhQ61ETEP5tiLOp5ZGn0Yi9YO4zTJtNpTKadWTsCE4a5ra8K0GYnD2YE5ucSTin9qHT"
};

//DOUBLE SIX EMAIL ADDRESS
const doubleSixMinerPaypalCredentials = {
    "email": "ots.urfer6@gmail.com",
    "username": "otsurfer.6-facilitator_api1.gmail.com",
    "password": "ZGAUF7ETETXEQDA5",
    "signature": 'A6vGptCo4eQdQE-W0DgLeVteItkVAyazypPABuNrvTPcKJuk7BKWDe8.',
    "sandbox":   true, 
    "feesPayer": 'SENDER',
    "currencyCode": 'USD',    
    "mode": 'sandbox', //sandbox or live
    "client_id": "AVoFy9bcCn4vKcLX9c9WF7piNP5Ok_dj5hVmoII9ArqgPu0T6FMEexKhI4rfa1mUpk3dzuu9VsFr7WQM",
    "client_secret": "EF0V0n7lUMphDLhQ61ETEP5tiLOp5ZGn0Yi9YO4zTJtNpTKadWTsCE4a5ra8K0GYnD2YE5ucSTin9qHT"
};

//THE AMOUNT OF MINING REWARD SEND TO THE OWNERS PAYPAL
const personalMiningRewardPercentage = 0.8;

const paypalTokenPurchaseFeeCalculator = function(cash){
    return Math.ceil(100*(parseFloat(cash) / 0.961 + 0.30))/100;
}

//AN OBJECT CONTAINING SUBPROCESSES FOR GAME MANAGERS
var managerSubprocesses = { };

//OBJECT CONTAINING TIMERS FOR GAMES IN PROGRESS
var timers = { };

//STORES THE QUEUES FOR PLAYERS THAT WANT TO JOINTHE NEXT ROUND IN A GAME
var roundQueues = { };

//STORES THE QUEUES FOR PLAYERS THAT WANT TO JOINTHE NEXT ROUND IN A GAME
var roundCounters = { };

/////////////////////////////////////////////
//END OF CONFIGURATIONS
/////////////////////////////////////////////


////////////////////////////////////
//NPM MODULES IMPORT
////////////////////////////////////
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');
const sha256 = require('js-sha256');
const mysql = require('mysql');
const fs = require('fs');
const exec = require('child_process').exec;
const uniqid = require('uniqid');
const svgCaptcha = require('svg-captcha');
const session = require('express-session');
const https = require('https');
const httpsRedirect = require('express-https-redirect');
const randomSentence = require('random-sentence');
var paypal = require('paypal-rest-sdk');
paypal.configure({
    mode: doubleSixPaypalCredentials["mode"],
    client_id: doubleSixPaypalCredentials["client_id"],
    client_secret: doubleSixPaypalCredentials["client_secret"]
});
//USED FOR WITHDRAWLS ON THE APP ACCOUNT
var pay = require('paypal-pay')({
    userId:    doubleSixPaypalCredentials["username"],
    password:  doubleSixPaypalCredentials["password"],
    senderEmail : doubleSixPaypalCredentials["email"],
    signature: doubleSixPaypalCredentials["password"],
    sandbox:   doubleSixPaypalCredentials["sandbox"], 
    feesPayer: doubleSixPaypalCredentials["feesPayer"],
    currencyCode: doubleSixPaypalCredentials["currencyCode"]
});
//USED TO GET ACCOUNT BALANCE FROM MINER ACCOUNT
var Paypal = require('paypal-nvp-api')({
    mode: doubleSixMinerPaypalCredentials["mode"],
    username: doubleSixMinerPaypalCredentials["username"],
    password:  doubleSixMinerPaypalCredentials["password"],
    signature: doubleSixMinerPaypalCredentials["signature"]
});

//USED TO GET ACCOUNT BALANCE FROM DOUBLE SIX ACCOUNT
var db6Paypal = require('paypal-nvp-api')({
    mode: doubleSixPaypalCredentials["mode"],
    username: doubleSixPaypalCredentials["username"],
    password:  doubleSixPaypalCredentials["password"],
    signature: doubleSixPaypalCredentials["signature"]
});

//USED REWARDS FROM THE MINER ACCOUNT
var minerpay = require('paypal-pay')({
    userId:    doubleSixMinerPaypalCredentials["username"],
    password:  doubleSixMinerPaypalCredentials["password"],
    senderEmail : doubleSixMinerPaypalCredentials["email"],
    signature: doubleSixMinerPaypalCredentials["signature"],
    sandbox:   doubleSixMinerPaypalCredentials["sandbox"], 
    feesPayer: doubleSixMinerPaypalCredentials["feesPayer"],
    currencyCode: doubleSixMinerPaypalCredentials["currencyCode"]
});
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "doublesix",
    port: "3306"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("MYSQL Connection Established with id: " + connection.threadId);
});
////////////////////////////////////
//END OF NPM MODULES IMPORT
////////////////////////////////////



//STARTS FROM SCRATCH EACH TIME THE SERVER IS RESET
connection.query("DELETE FROM rounds;", function(fields, results, error){
    connection.query("DELETE FROM participants;", function(fields, results, error){
        connection.query("DELETE FROM games;", function(fields, results, error){

        });
    });
});


//////////////////////////
//HELPER FUNCTIONS
//////////////////////////
const execute = function(command, callback){
    exec(command, { maxBuffer: 1024 * 250 }, function (error, stdout, stderr) { 
        callback(error, stdout, stderr); 
    });
};

const neatifyCase = function(text){
    text = addslashes(text);
	text = text.toLowerCase();
	text = text.split("");
	if(typeof(text[0]) != "undefined")	
		text[0] = text[0].toUpperCase();
	for(var x = 0; x < text.length; x++){
        if(text[x] == " "){
            try{
                text[x+1] = text[x+1].toUpperCase();
            }
            catch(err){
                
            }
        }
	}
	text = text.join("");
	return text;
}

const generateNewCertificate = function(){
    return new Promise(function(resolve, reject){
        execute(`openssl req -new -newkey rsa:4096 -days 365 -nodes -x509 \
        -subj "/C=US/ST=Denial/L=Springfield/O=Dis/CN=www.example.com" \
        -keyout key.pem  -out cert.pem`, function(err, stdout, stderr){
            console.log("NEW CERTIFICATES GENERATED");
            resolve(true);
        });
    });
}

const certificateUpdater = setTimeout(function(){
    execute("openssl x509 -enddate -noout -in cert.pem", function(err, stdout, stderr){
        var currentTimestamp = new Date().getTime();
        var expiryTmstmp = new Date(parseInt(stdout.substr(9))).getTime();
        if(expiryTmstmp - currentTimestamp <= 300000){
            generateNewCertificate().then(function(bool){
                //RESTART SERVER TO LOAD NEW CERTIFICATE
                execute(`forever restart index.js`, function(err, stdout, stderr){
                });
            });
        }
    });
}, 100000);

const checkIfNumber = function(num){
    if(num%1 == 0)
        return true;
    return false;
}


const addslashes = function(string) {
    string = String(string);
	return string.replace(/\\/g, '\\\\').
		replace(/\u0008/g, '\\b').
		replace(/\t/g, '\\t').
		replace(/\n/g, '\\n').
		replace(/\f/g, '\\f').
		replace(/\r/g, '\\r').
		replace(/'/g, '\\\'').
		replace(/"/g, '\\"');
}

const checkForSpecialCharacters = function(string){
    var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
    for(i = 0; i < specialChars.length;i++){
        if(string.indexOf(specialChars[i]) > -1){
            return true
         }
    } 
    return false    
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

const randomString = function() {
    var text = "";
    var possible = "@#$%^*?><~abcdefghijklmnopqrstuvwxyz0123456789";//+"@#$%&*,!+-^><";
    var num = Math.floor(230 + Math.random() * (500 - 230));
    for (var i = 0; i < num; i++){
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return (String(String(new Date().getTime())+text.shuffle()+uniqid.process()).substr(0, 254));
}




const uniqidPrefix = function() {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 1; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

const unique12Id = function(){
    return uniqid.process(uniqidPrefix());
}

const validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const generateCapcha = function(options){
    return new Promise(function(resolve, reject){
        fs.readdir(fonts, function(err, files){
            var tmp = randomSentence({words: 2}).split(" ").map(function(e){e = e.substr(0, 4); return e}).join(" ");
            svgCaptcha.loadFont(fonts+files[Math.floor((Math.random() * files.length) + 0)]);
            resolve([tmp, svgCaptcha(tmp, options)]);
        });  
    });
}

const diceroll = function(){
    return Math.floor((Math.random() * 6) + 1);
}


const getMinerPaypalBalance = function(){
    return new Promise(function(resolve, reject){
        Paypal.request('GetBalance', {}).then((result) => {
            resolve(result["L_AMT0"]);
          }).catch((err) => {
            console.trace(err);
          });        
    });
}


const getPaypalBalance = function(){
    return new Promise(function(resolve, reject){
        db6Paypal.request('GetBalance', {}).then((result) => {
            resolve(result["L_AMT0"]);
          }).catch((err) => {
            console.trace(err);
          });        
    });
}


const getTotalValueOfCoinsInCirculation = function(){
    return new Promise(function(){
        //connection.query("SELECT (IFNULL(SELECT SUM(vq) FROM transactions, 0)) + (IFNULL(SELECT SUM(vq) FROM minerTransactions, 0)) AS totalVq;")
    });
}


const getUserMiningContribution = function(username, aid, email){
    return new Promise(function(resolve, reject){
        execute("curl https://api.coinhive.com/user/balance?name="+username+"&secret="+doubleSixApiKey, function(error, data){
            try{
                var info = JSON.parse(data);
                resolve({"aid": aid, "usrname": username, "eml": email, "tot": info["total"]});
            }
            catch(err){
                console.log(err);
                resolve({"aid": aid, "usrname": username, "eml": email});
            }
        });
    });
}


const payout = setInterval(function(){
    getMinerPaypalBalance().then(function(minersAccountBalance){        
        if(minersAccountBalance > 10){
            connection.query("SELECT * FROM accounts;", function(fields, results, error){
                var checks = [];
                var reward = [];
                for(var x = 0; x < results.length; x++){
                    checks.push(getUserMiningContribution(results[x]["usrname"], results[x]["aid"]));
                }
                Promise.all(checks).then(function(data){
                    var numberOfMiners = 0;
                    for(var x = 0; x < data.length; x++){
                        if(data[x]["tot"] != results[x]["offset"] && typeof(data[x]["tot"] != "undefined")){
                            //USER IS CURRENTLY MINING, PAY
                            numberOfMiners++;
                            reward.push([data[x]["aid"]]);              
                            connection.query("UPDATE accounts SET offset = '"+results[x]["offset"]+"' WHERE aid = '"+results[x]["aid"]+"';", function(fields, results, error){
        
                            });
                        }
                    }
    
                    var minerShare = Math.floor(100 * (minersAccountBalance / numberOfMiners) * personalMiningRewardPercentage) / 100;
                    var ownerShare = minersAccountBalance - minerShare - 2;                                   
    
                    for(var x = 0; x < reward.length; x++){
                        reward[x].push(minerShare);
                    }
    
                    minerpay(doubleSixPaypalCredentials["email"], minerShare, "Miner's Allocation", function(error, payment){
                        if(error){
                            console.log(error);
                        }
                        else{
                            connection.query("INSERT INTO minerTransactions (aid, vq) VALUES ?;", [reward], function(fields, results, error){
                                //ALL MINERS REWARDED
                            });                         
                            minerpay(personalPaypalCredentials["email"], ownerShare, "Double Six App Mining Reward", function(error, payment){
                                if(error){
                                    console.log(error);
                                }
                            }); 
                        }                                               
                    });      
                });
            });  
        }           
    });    
}, 300000);



const canPlayerAffordFee = function(gid, session_id, definedfee){
    return new Promise(function(resolve, reject){
        if(definedfee){
            sessionIdToAccountId(session_id).then(function(aid){
                getPlayerBalance(aid).then(function(bal){
                    if(bal < definedfee){
                        resolve(false);
                    }
                    else{
                        resolve(true);
                    }
                });
            });
        }
        else{
            getGameFee(gid).then(function(gamefee){
                sessionIdToAccountId(session_id).then(function(aid){
                    getPlayerBalance(aid).then(function(bal){
                        if(bal < gamefee){
                            resolve(false);
                        }
                        else{
                            resolve(true);
                        }
                    });
                });
            });
        }
    });
}


const sendmail = function(to, subject, message){
    return new Promise(function(resolve, reject){
        execute(
            `curl -X POST https://api.sparkpost.com/api/v1/transmissions -H "Authorization: c6ef59ecae0bf4ab9c8cf0f663a221fd79ded3d5" -H "Content-Type: application/json" -d "{ 'options': { 'sandbox': false }, 'content': { 'from': 'no-reply@srcloudservices.com', 'subject': '`+subject+`', 'html': '`+message+`' }, 'recipients': [{ 'address': '`+to+`' }] }"`
            , function(error, data){
            if(error)
                console.log(error);
          }); 
    });
}


const getGameFee = function(gid){
    return new Promise(function(resolve, reject){
        connection.query("SELECT fee FROM games WHERE gid = '"+gid+"';", function(fields, results, error){
            resolve(results[0]["fee"]);
        });
    });
}

const getPlayerBalance = function(aid){
    return new Promise(function(resolve, reject){
        connection.query("SELECT SUM(vq) bal FROM transactions WHERE aid = '"+aid+"';", function(fields, results, error){
            if(typeof(results[0]["bal"]) == "object"){
                resolve(0);
            }
            else{
                resolve(results[0]["bal"]);
            }
        });
    });
}

const getPlayerBucket = function(aid){
    return new Promise(function(resolve, reject){
        connection.query("SELECT SUM(vq) bal FROM minerTransactions WHERE aid = '"+aid+"';", function(fields, results, error){
            if(typeof(results[0]["bal"]) == "object"){
                resolve(0);
            }
            else{
                resolve(results[0]["bal"]);
            }
        });
    });
}

const getGameInformation = function(session_id){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM participants JOIN accounts ON participants.aid = accounts.aid WHERE participants.gid = (SELECT gid FROM participants WHERE sid = '"+session_id+"') GROUP BY participants.pid;", function(fields, results, error){
            try{
                var gid = results[0]["gid"];
                connection.query("SELECT * FROM games WHERE gid = '"+gid+"';", function(fields, gameSpecificInfo, error){
                    var fee = gameSpecificInfo[0]["fee"];
                    var gameInfo = {};
                    for(var x = 0; x < results.length; x++){
                        if(results[x]["sid"] == session_id){
                            gameInfo[results[x]["usrname"]] = {
                                "round": roundCounters[gid],
                                "profit": results[x]["gain"],
                                "dice1": 0,
                                "dice2": 0,
                                "fee": fee,
                                "timer": timers[gid],
                                "me": true       
                            }
                        }
                        else{
                            gameInfo[results[x]["usrname"]] = {
                                "round": roundCounters[gid],
                                "profit": results[x]["gain"],
                                "dice1": 0,
                                "dice2": 0,
                                "fee": fee,
                                "timer": timers[gid],
                                "me": false       
                            }
                        }
                    }                 
                    connection.query("SELECT * FROM rounds JOIN participants ON rounds.pid = participants.pid JOIN accounts ON participants.aid = accounts.aid WHERE rounds.rnd = '"+roundCounters[gid]+"' GROUP BY participants.pid;", function(fields, roundResults, error){       
                        try{
                            for(var x = 0; x < roundResults.length; x++){
                                if(typeof(gameInfo[roundResults[x]["usrname"]]) != "undefined"){
                                    gameInfo[roundResults[x]["usrname"]]["dice1"] = roundResults[x]["d1"];
                                    gameInfo[roundResults[x]["usrname"]]["dice2"] = roundResults[x]["d2"];
                                }
                            }
                            var keys = Object.keys(gameInfo);
                            var values = Object.values(gameInfo);
                            for(var x = 0; x < values.length; x++){
                                values[x]["username"] = keys[x];
                            }
                            values = values.sort(function(a, b) {
                                return parseFloat(b.profit) - parseFloat(a.profit);
                            });         
                            resolve(values);
                        }
                        catch(err){
                            //console.log(err);
                            var keys = Object.keys(gameInfo);
                            var values = Object.values(gameInfo);
                            for(var x = 0; x < values.length; x++){
                                values[x]["username"] = keys[x];
                            }
                            values = values.sort(function(a, b) {
                                return parseFloat(b.profit) - parseFloat(a.profit);
                            });                 
                            resolve(values);
                        }
                        //console.log(values);
                    });                   
                });  
            }
            catch(err){
                console.log(err);
                resolve(false);
            }              
        });
    });
}

/*
    DOUBLE SIX GAME SYNOPSIS:
    EACH ROUND IS TEN SECONDS LONG. DURING THAT TIME EACH PLAYER IS TO ROLL THEIR DICE.
    IF ALL PLAYERS HAVE ROLLED THEN THE ROUND ENDS REGARDLESS OF WHERE THE TIMER IS. IF AT LEAST
    ONE PLAYER HAS NOT ROLLED THEN THE ROUND TIMER WILL ELAPSE UNTIL EXPIRED, AFTER WHICH THE SERVER WILL
    AUTOMATICALLY ROLL FOR THOSE PLAYERS WHO HAVE NOT ROLLED. A GRACE PERIOD OF 5 SECONDS IS THEN ELAPSED
    TO ALLOW QUEUED PLAYERS TO JOIN THE GAME, PLAYERS FROM THE LAST ROUND WILL BE PROMPTED IF THEY 
    WOULD LIKE TO CONTINUE TO THE NEXT ROUND (BY DEFAULT THE SELECTION IS NO) AND PLAYERS THAT DO NOT HAVE 
    ENOUGH MONEY IN THEIR RESPECTIVE WALLETS TO PAY FOR THE NEXT ROUND ARE KICKED FROM THE GAME.
    AFTER THE GRACE PERIOD HAS ENDED THE NEXT ROUND WILL START AND THE ROUND FEE IS AUTOMATICALLY DEDUCTED 
    FROM EACH PLAYERS WALLET. EACH GAME HOLDS A MAXIMUM OF TEN PLAYERS. PLAYERS ARE RANKED AND REWARDED BASED 
    ON HOW MUCH THEY ROLLED ON THE DICE FOR EACH ROUND. 
*/
const gameManager = function(gameid){
    //THE MAIN FUNCTION OF THE PROJECT
    //CREATES A SUBPROCESS THAT MANAGES EACH GAME
    return setInterval(function(){
        const gid = addslashes(gameid);
        if(typeof(timers[gid]) == "undefined")
            timers[gid] = roundDuration;    
        if(typeof(roundCounters[gid]) == "undefined") 
            roundCounters[gid] = 0;
        connection.query("SELECT * FROM participants WHERE gid = '"+gid+"';", function(fields, participants, error){
            var numberOfParticipants = participants.length
            if(numberOfParticipants > 1){
                //CHECK IF ALL PLAYERS HAVE ROLLED
                new Promise(function(resolve, reject){
                    connection.query("SELECT * FROM rounds WHERE gid = '"+gid+"' AND rnd = '"+roundCounters[gid]+"';", function(fields, whoRolled, error){
                        if(roundCounters[gid] == 0){
                            getGameFee(gid).then(function(fee){
                                connection.query("UPDATE participants SET con = 1 WHERE gid = '"+gid+"';", function(fields, results, error){
                                    connection.query("DELETE FROM participants WHERE aid IN (SELECT participants.aid FROM participants JOIN transactions ON participants.aid = transactions.aid GROUP BY participants.pid HAVING SUM(transactions.vq) < '"+fee+"');", function(fields, results, error){
                                        timers[gid] = 0;
                                        resolve(true);
                                    });
                                });
                            });  
                        }     
                        else{
                            var playersThatRolled = whoRolled.length;
                            if(playersThatRolled == numberOfParticipants){
                                //START GRACE PERIOD
                                if(timers[gid] > graceperiod)
                                    timers[gid] = graceperiod;
                            }                   
                            resolve(true);
                        }
                    });
                }).then(function(data){
                    if(timers[gid] == graceperiod){
                        try{
                            //END OF ROUND, GRACE PERIOD
                            connection.query("SELECT * FROM participants WHERE gid = '"+gid+"' AND pid NOT IN (SELECT rounds.pid FROM rounds JOIN participants ON rounds.pid = participants.pid WHERE rounds.rnd = '"+roundCounters[gid]+"');", function(fields, playersThatDidntRoll, error){
                                var bulkArr = [];
                                for(var x = 0; x < playersThatDidntRoll.length; x++){
                                    bulkArr.push([roundCounters[gid], gid, playersThatDidntRoll[x]["pid"], playersThatDidntRoll[x]["aid"], diceroll(), diceroll()]);
                                }
                                //SET NEXT ROUND CONTINUATION TO FALSE
                                connection.query("UPDATE participants SET con = 0 WHERE gid = '"+gid+"';", function(fields, results, error){
                                    //ROLL FOR ALL PLAYERS
                                    connection.query("INSERT INTO rounds (rnd, gid, pid, aid, d1, d2) VALUES ?", [bulkArr], function(fields, results, error){
                                        if(error){
                                            console.log(error);
                                        }
                                        //PLAYERS WHO HAVE ALREADY ROLLED WILL *NOT* ROLL AGAIN DUE TO THE UNIQUE IDENTIFIER  
                                        //SET ON THE PARTICIPANT ID AND ROUND COLUMNS IN THE ROUNDS TABLE
                                        //AT THIS POINT ALL PLAYERS HAVE ROLLED
                                        getGameFee(gid).then(function(fee){
                                            var jackpot = numberOfParticipants * fee;
                                            //REWARD PLAYERS BASED ON SCORES FROM PREVIOUS ROUND
                                            connection.query("SELECT * FROM rounds WHERE rnd = '"+roundCounters[gid]+"' AND gid = '"+gid+"';", function(fields, roundResults, error){
                                                //RESULTS FROM THE PREVIOUS ROUND
                                                const rewardCalculator = function(results, jackpot){
                                                    results = results.sort(function(a, b) {
                                                        return parseFloat(b.score) - parseFloat(a.score);
                                                    });
                                                    for(var x = 0; x < results.length; x++){
                                                        var instances = 0;
                                                        for(var y = 0; y < results.length; y++){
                                                            if(results[y]["score"] == results[x]["score"]){
                                                                instances++;
                                                            }
                                                        }
                                                        results[x]["instances"] = instances;		
                                                    }
                                                    var rank = 1;
                                                    for(var x = 0; x < results.length; x++){
                                                        if(results[x]["instances"] == 1 && x != 0){
                                                            results[x]["rank"] = ++rank;
                                                        }
                                                        else{
                                                            if(x > 0 && results[x]["instances"] > results[x-1]["instances"])
                                                                rank++;
                                                            results[x]["rank"] = rank;
                                                        }	
                                                    }
                                                    var maxRank = results[results.length - 1]["rank"];
                                                    var players = maxRank - 1;
                                                    var share = jackpot / ((players * (players+1)) / 2);
                                                    for(var x = 0; x < results.length; x++){
                                                        results[x]["reward"] = share * (maxRank - results[x]["rank"]) / results[x]["instances"];
                                                    }
                                                    return results
                                                }
                                                for(var x = 0; x < roundResults.length; x++){
                                                    roundResults[x]["score"] = parseInt(roundResults[x]["d1"]) + parseInt(roundResults[x]["d2"]);
                                                }
                                                
                                                roundResults = rewardCalculator(roundResults, jackpot);
                                                
                                                var rewardsBulk = [];
                                                for(var x = 0; x < roundResults.length; x++){
                                                    if(roundResults[x]["reward"] > 0){
                                                        rewardsBulk.push([roundResults[x]["aid"], roundResults[x]["reward"], 0]);
                                                    }
                                                }                                                                                
                                                //REWARD PLAYERS
                                                connection.query("INSERT INTO transactions (aid, vq, ppal) VALUES ?;", [rewardsBulk], function(fields, results, error){
                                                    //KICK BROKE PLAYERS
                                                    connection.query("DELETE FROM participants WHERE aid IN (SELECT participants.aid FROM participants JOIN transactions ON participants.aid = transactions.aid GROUP BY participants.pid HAVING SUM(transactions.vq) < '"+fee+"');", function(fields, results, error){
                                                        //BROKE PLAYERS KICKED                                             
                                                        connection.query("UPDATE games SET canjoin = '1' WHERE gid = '"+gid+"';", function(fields, results, error){
                                                            //PLAYERS CAN NOW JOIN GAME AT THIS POINT
                                                        });
                                                    }); 
                                                });    
                                            });
                                        });
                                    });
                                });   
                            });
                        }
                        catch(err){
                            console.log(err);
                        }                     
                    }
                    if(timers[gid] <= 0){
                        //GRACE PERIOD OVER PREVENT PLAYERS FORM JOINING
                        connection.query("SELECT * FROM games WHERE gid = '"+gid+"';", function(fields, results, error){
                            var fee = results[0]["fee"];
                            connection.query("UPDATE games SET canjoin = '0' WHERE gid = '"+gid+"';", function(fields, results, error){
                                connection.query("SELECT aid FROM participants WHERE gid = '"+gid+"'", function(fields, results, error){
                                    var dues = [];
                                    for(var x = 0; x < results.length; x++){
                                        dues.push([results[x]["aid"], fee*-1, 0]);
                                    }
                                    //DEDUCT ROUND FEE FROM ALL PLAYERS
                                    connection.query("INSERT INTO transactions (aid, vq, ppal) VALUES ?", [dues], function(fields, results, error){
                                        if(error){
                                            console.log(error);
                                        }
                                        //REMOVE PLAYERS THAT HAVE NOT CONFIRMED NEXT ROUND
                                        connection.query("DELETE FROM rounds WHERE pid IN (SELECT pid FROM  participants WHERE gid = '"+gid+"' AND con = 0);", function(fields, results, error){
                                            connection.query("DELETE FROM participants WHERE gid = '"+gid+"' AND con = 0;", function(fields , results, error){
                                                //REMOVE PLAYERS THAT DO NOT WISH TO PLAY NEXT ROUND
                                                //GIVE PLAYERS REQUESTING TO JOIN A CHANCE
                                                connection.query("UPDATE games SET canjoin = '0' WHERE gid = '"+gid+"';", function(fields, results, error){
                                                    //WAITING PLAYERS ADDED TO GAME
                                                    //UPDATE PLAYER GAINS IN ROUND TABLE    
                                                    //READY TO START NEXT ROUND      
                                                    //SET CAN JOIN FIELD TO FALSE TO PREVENT PLAYERS FROM JOINING
                                                    timers[gid] = roundDuration;
                                                    roundCounters[gid]++; 
                                                    console.log("NEXT ROUND");
                                                    //NEXT ROUND STARTED                                                                  
                                                });                                                          
                                            });
                                        });
                                    });
                                });                          
                            });                             
                        });
                    }
                    timers[gid]--;                     
                });                            
            }
            else{
                if(numberOfParticipants == 1){
                    //WAITING FOR AT LEAST TWO PLAYER
                    connection.query("UPDATE games SET canjoin = 1 WHERE gid = '"+gid+"';", function(fields, results, error){
                        connection.query("DELETE FROM rounds WHERE gid = '"+gid+"' AND rnd = '"+roundCounters[gid]+"';", function(fields, results, error){

                        });
                    });
                    timers[gid] = roundDuration;
                }
                else{
                    //NO PLAYERS, EMPTY GAME - KILL GAME, TIMER AND QUEUE
                    try{
                        clearInterval(managerSubprocesses[gid]);
                        delete managerSubprocesses[gid];
                        delete timers[gid];
                        delete roundQueues[gid];
                        delete roundCounters[gid]; 
                        //DELETE GAME
                        connection.query("SELECT * FROM games JOIN rounds ON games.gid = rounds.gid JOIN accounts ON accounts.aid = rounds.aid WHERE games.gid = '"+gid+"' GROUP BY rounds.rid", function(fields, results, error){
                            var log = [];                   
                            for(var x = 0; x < results.length; x++){
                                log.push(results[x]["gid"], results[x]["aid"], results[x]["nme"], results[x]["fee"], results[x]["rnd"], results[x]["d1"], results[x]["d2"]);
                            }
                            connection.query("INSERT INTO gamelog (gid, aid, nme, fee, rnd, r1, r2) VALUES ?;", [log], function(fields, results, error){
                                connection.query("DELETE FROM rounds WHERE gid = '"+gid+"';", function(fields, results, error){
                                    connection.query("DELETE FROM participants WHERE gid = '"+gid+"';", function(fields, results, error){
                                        connection.query("DELETE FROM games WHERE gid = '"+gid+"';", function(fields ,results, error){
                                            //GAME RESULTS LOGGED AND DELETED
                                        });
                                    });
                                });
                            });
                        });
                    }
                    catch(err){
                        console.log(err);
                    }
                }
            }
        });
    }, 1000);
}



const linkAlreadySent = function(email){
    //FUNCTION CHECK IF VERIFICATION LINK HAS ALREADY BEEN SENT
    //FOR A PARTICULAR EMAIL ADDRESS AND IS STILL VALID
    return new Promise(function(resolve, reject){
        var emailAddress = addslashes(email);
        connection.query("SELECT UNIX_TIMESTAMP()-UNIX_TIMESTAMP(ts) tme FROM pendingLogins WHERE eml = '"+emailAddress+"' AND UNIX_TIMESTAMP() - UNIX_TIMESTAMP(ts) < '"+verificationLinkExperationTimeout+"';", function(fields, results, error){
            try{
                if(error){
                    //console.log(error)
                    //throw new Error();
                }
                if(typeof(results[0]["tme"]) != "undefined"){
                    //REMAINING TIME
                    resolve(results[0]["tme"]);
                }
                else{
                    connection.query("DELETE FROM pendingLogins WHERE eml = '"+emailAddress+"';", function(fields, results, error){});                    
                    resolve(false);
                }
            }
            catch(err){
                connection.query("DELETE FROM pendingLogins WHERE eml = '"+emailAddress+"';", function(fields, results, error){});                
                resolve(false);
            }
        });
    });
}


const checkSession = function(sid, token){
    return new Promise(function(resolve, reject){
        connection.query("SELECT * FROM sessions WHERE sid = '"+sid+"';", function(fields, results, error){
            try{
                if(sha256(token) == results[0]["tkn"]){
                    resolve(true);
                }
                else{
                    resolve(false);
                }
            }
            catch(err){
                console.log(err);
                resolve(false);
            }
        });
    });
}

const sessionIdToAccountId = function(session_id){
    return new Promise(function(resolve, reject){
        session_id = addslashes(session_id);
        connection.query("SELECT * FROM sessions JOIN accounts ON sessions.aid = accounts.aid WHERE sessions.sid = '"+session_id+"';", function(fields, results, error){
            resolve(results[0]["aid"]);
        });
    });
}



const createBot = function(){
    //TO-DO
    //GET RESERVED CASH FROM PAYPAL
    //CREATE AN ROBOT PLAYER TO ENCOURAGE OTHER USERS TO PLAY
    getPaypalBalance().then(function(bal){

    });
    connection.query("SELECT * FROM accounts JOIN participants ON accounts.aid = participants.aid WHERE accounts.bot = 1 GROUP BY participants.pid;", function(){
        //FREE BOTS
    });
}


const buyVQ = function(aid, amount){
    return new Promise(function(resolve, reject){
        aid = addslashes(aid);
        amount = addslashes(amount);
        var cost = paypalTokenPurchaseFeeCalculator(gameTokenValue).toFixed(2);
        if(checkIfNumber(amount) == true){
            amount = Math.abs(amount);
            const transaction = {
                "intent": "sale",
                "payer": {
                    "payment_method": "paypal"
                },
                "redirect_urls": {
                    "return_url": serverDomain,//success?tkn="+checkoutTkn,
                    "cancel_url": serverDomain+"cancel"
                },
                "transactions": [{
                    "item_list": {
                        "items": [{
                            "name": "Virtual Quarter(s)",
                            "sku": "item",
                            "price": cost,
                            "currency": "USD",
                            "quantity": amount
                        }]
                    },
                    "amount": {
                        "currency": "USD",
                        "total": (amount*cost).toFixed(2)
                    },
                    "description": "Purchase Virtual Quarters (VQs) for your Double Six account. Each Virtual Quarter costs USD$0.25 + PayPal's Fees (3.9% + 0.30) = USD$0.57"
                }]
            };
            paypal.payment.create(transaction, function (error, payment) {
                if(error){
                    console.log(JSON.stringify(error));
                    resolve(false);
                } 
                else{
                    for(var x = 0; x < payment["links"].length; x++){
                        if(payment["links"][x]["rel"] == "approval_url"){
                            var paymentURL = payment["links"][x]["href"];
                            console.log(paymentURL);
                            connection.query("INSERT INTO pendingOrders (ctkn, vq, aid) VALUES ('"+sha256(randomString())+"', '"+amount+"', '"+aid+"');", function(fields, results, error){
                                resolve(JSON.stringify(paymentURL));
                            });
                        }
                    }
                }
            });
        }
        else{
            resolve(false);
        }        
    });
}


const sellVQ = function(aid, amount, emailAddress){
    return new Promise(function(resolve, reject){
        aid = addslashes(aid);
        amount = addslashes(amount);
        emailAddress = addslashes(emailAddress);
        if(checkIfNumber(amount) == true){
            amount = Math.abs(amount);
            pay(emailAddress, (amount*gameTokenValue).toFixed(2), "You have traded "+amount+" tokens, each valued at "+gameTokenValue+". Here is your payout. Yours truly, The Double Six Team.", function(err, response){
                if(err){
                    //console.log(err);
                    resolve(false);
                }
                else{
                    
                    connection.query("INSERT INTO transactions (aid, vq, ppal, sell) VALUES ('"+aid+"', '"+amount*-1+"', '"+1+"', '"+1+"');", function(fields, results, error){
                        resolve(true);
                    });
                };
            });            
        }      
        else{
            resolve(false);
        }
    });
}

const emptyGameRemover = function(){
    return setInterval(function(){
        connection.query("DELETE FROM games WHERE gid NOT IN (SELECT gid FROM participants);", function(fields, results, error){

        });
    }, 3000);
}
emptyGameRemover();

//////////////////////////
//END OF HELPER FUNCTIONS
//////////////////////////








///////////////////////
//SERVER CONFICURATIONS
///////////////////////
const router = express();
const httpServer = express();

//HELMET PROTECTION MIDDLEWARE
router.use(helmet());

//USING SESSIONS
router.use(session({
    secret: "lkfwjcnehle73ye72668*&^#*etgqilx#hdkdpefhui",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }//, maxAge: 1800000 }
}));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1500,
    message: "please try again later"
  });
   
//LIMITS REQUESTS FROM IP ADDRESS
router.use(limiter);

//REQUEST BODY PARSER
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//REDIRECTS TO HTTPS
httpServer.use('/', httpsRedirect(true));

const credentials = {
    key: fs.readFileSync("./key.pem", "utf8"),
    cert: fs.readFileSync("./cert.pem", "utf8")
}

https.createServer(credentials, router).listen(443, function () {
    console.log('Website Server Started..');
});

httpServer.listen(80, function () {
    console.log("HTTP redirect to HTTPS Server Started..");
});

//////////////////////////////////
//SERVER APPLICATION ENTRY POINTS
/////////////////////////////////


router.get('/', function(req, res){
    //FOR TESTING PURPOSES
    res.send("HELLO WORLD");
});

router.get('/login', function (req, res){
    var verification_token = addslashes(req["query"]["t"]);
    if(typeof(verification_token) == "undefined"){
        //PURPOSLY HANG THE USER
        //res.send("Invalid Verification Token");
    }
    else{
    //CHECK IF USER EXISTS
        connection.query("SELECT * FROM accounts WHERE eml = (SELECT eml FROM pendingLogins WHERE tkn = '"+verification_token+"' AND UNIX_TIMESTAMP() - UNIX_TIMESTAMP(ts) < '"+verificationLinkExperationTimeout+"');", function(fields, results, error){
            if(results.length == 0){      
                //ACCOUNT DOES NOT EXIST
                try{
                    if(typeof(req["query"]["usr"]) != "undefined"){
                        var username = addslashes(req["query"]["usr"]);
                        if(username.length > 5 && username.indexOf(" ") == -1 && username.indexOf("pbot") == -1){
                            connection.query("SELECT * FROM pendingLogins WHERE tkn = '"+verification_token+"' AND UNIX_TIMESTAMP() - UNIX_TIMESTAMP(ts) < '"+verificationLinkExperationTimeout+"';", function(fields, results, error){
                                try{
                                    var email = addslashes(results[0]["eml"]);
                                    if(validateEmail(email)){
                                        connection.query("INSERT INTO accounts (eml, usrname) VALUES ('"+email+"', '"+username+"');", function(fields, results, error){
                                            var session_token_unhashed = randomString();
                                            var session_token_hashed = sha256(session_token_unhashed);
                                            connection.query("INSERT INTO sessions (aid, tkn) VALUES ('"+results["insertId"]+"', '"+session_token_hashed+"')", function(fields, results, error){
                                                connection.query("UPDATE pendingLogins SET acptd = '1', sesid = '"+results["insertId"]+"', sestkn = '"+session_token_unhashed+"' WHERE tkn = '"+verification_token+"';", function(fields, results, error){
                                                    res.send("Login Successful");
                                                });
                                            });
                                        });
                                    }
                                    else{
                                        //PURPOSLY HANG THE USER
                                        //res.send("Invalid Verification Token");
                                    }
                                }
                                catch(err){
                                    console.log(err);
                                    //PURPOSLY HANG THE USER
                                    //res.send("Invalid Verification Token");
                                }
                            });
                        }
                        else{
                            throw new Error();
                        }
                    }
                    else{
                        res.send(`
                            <script>
                                var username = prompt("Please Enter Your Username")
                                while(username.length < 6 || username.indexOf(" ") > -1){
                                    username = prompt("Please Enter Your Username")
                                    if(username.length < 6){
                                        alert("Username is too short");
                                    }
                                    if(username.indexOf(" ") == -1){
                                        alert("No whitespaces allowed in username");
                                    }
                                }
                                window.location.href = "`+serverDomain+`login?t=`+verification_token+`&usr="+username;
                            </script>
                        `);                    
                    }   
                }   
                catch(err){
                    res.send(`
                        <script>
                            var username = prompt("Please Enter Your Username")
                            while(username.length < 6 || username.indexOf(" ") > -1){
                                username = prompt("Please Enter Your Username")
                                if(username.length < 6){
                                    alert("Username is too short");
                                }
                                if(username.indexOf(" ") == -1){
                                    alert("No whitespaces allowed in username");
                                }
                            }
                            window.location.href = "`+serverDomain+`login?t=`+verification_token+`&usr="+username;
                        </script>
                    `); 
                }
            }
            else{
                //OLD USER
                var accountId = results[0]["aid"];
                var session_token_unhashed = randomString();
                var session_token_hashed = sha256(session_token_unhashed);
                connection.query("INSERT INTO sessions (aid, tkn) VALUES ('"+accountId+"', '"+session_token_hashed+"')", function(fields, results, error){
                    connection.query("UPDATE pendingLogins SET acptd = '1', sesid = '"+results["insertId"]+"', sestkn = '"+session_token_unhashed+"' WHERE tkn = '"+verification_token+"';", function(fields, results, error){
                        res.send("Login Successful");
                    });
                });             
            }
        });
    }
});



router.get('/success', function(req, res){
    //ROUTE FOR HANDING PURCHASES MADE THROUGH PAYPAL
    const payerId = addslashes(req["query"]["PayerID"]);
    const paymentId = addslashes(req["query"]["paymentId"]);
    const checkoutTkn = addslashes(req["query"]["tkn"]);
    connection.query("SELECT * FROM pendingLogins WHERE ctkn = '"+checkoutTkn+"';", function(fields, orderDetails, error){
        const vq = orderDetails[0]["vq"];
        const total = orderDetails[0]["vq"] * gameTokenValue;
        const aid = orderDetails[0]["aid"];
        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": total.toString()
                }
            }]
          };
        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment){
            if(error){
                console.log(error);
            }
            else{
                connection.query("INSERT INTO transactions (aid, vq, ppal, buy) VALUES ('"+aid+"', '"+vq+"', '"+1+"', '"+1+"');", function(fields, results, error){
                    connection.query("DELETE FROM pendingLogins WHERE ctkn = '"+checkoutTkn+"';", function(fields, error, results){
                        //PAYMENT SUCCESSFUL, REDIRECT TO APP HOMESCREEN AND ALERT USER
                        res.send(`
                            <script>
                                $.mobile.navigate('index#home', { transition: 'slide', reverse:true});
                                refreshAll();
                                alertUser("Your transaction has been processed successfully", function(){}, "Payment Successful", "OK");
                            </script>
                        `);
                    });
                });
            }
        });        
    });
});

router.get('/cancel', function(req, res){
    res.send(`
        <script>
            $.mobile.navigate('index#home', { transition: 'slide', reverse:true});
        </script>
    `);
});




router.post('/gamelist', function(req, res){
    connection.query("SELECT *, SUM(participants.pid) playersCnt FROM participants JOIN games ON participants.gid = games.gid GROUP BY games.gid;", function(fields, results, error){
        var response = [];
        var promiseArr = [];
        var noPasswordHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
        var playersForGame = function(gid){
            return new Promise(function(resolve, reject){
                connection.query("SELECT * FROM participants JOIN games ON participants.gid = games.gid WHERE games.gid = '"+gid+"' GROUP BY games.gid;", function(fields, results, error){
                    resolve(results);
                });
            });
        }
        for(var x = 0; x < results.length; x++){
            promiseArr.push(playersForGame(results[x]["gid"]));
            if(results[x]["pwd"] == noPasswordHash){
                response.push({
                    "name": results[x]["nme"],
                    "fee": results[x]["fee"],
                    "ts": results[x]["ts"],
                    "game_id": results[x]["gid"],
                    "plyrs": 0,
                    "key": false
                });  
            }
            else{
                response.push({
                    "name": results[x]["nme"],
                    "fee": results[x]["fee"],
                    "ts": results[x]["ts"],
                    "game_id": results[x]["gid"],
                    "plyrs": 0,
                    "key": true
                });  
            }
          
        }
        Promise.all(promiseArr).then(function(data){
            for(var x = 0; x < results.length; x++){
                response[x]["plyrs"] = data[x].length;     
            }
            response = response.sort(function(a, b) {
                return (a.name > b.name) - (a.name < b.name);
            });        
            res.send(JSON.stringify(response));
        });
    });
});








router.post("/pocket", function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(){
                var account_id = results[0]["aid"];
                connection.query("SELECT SUM(vq) buc FROM minerTransactions WHERE aid = '"+account_id+"';", function(fields, results, error){
                    var bucketBalance = parseFloat(results[0]["buc"]);
                    if(bucketBalance > 0){
                        connection.query("INSERT INTO minerTransactions (aid, vq) VALUES ('"+account_id+"', '"+(bucketBalance * -1)+"');", function(){
                            connection.query("INSERT INTO transactions (aid, vq, ppal) VALUES ('"+account_id+"', '"+bucketBalance+"', 0);", function(fields, results, error){
                                //CASH POCKETED FROM BUCKET TO WALLET
                            });
                        });
                    }
                });
            });
        }
    });
});




router.post("/withdraw", function(req, res){
    //RETURN PAYPAL LINK SELL VQ
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    var email = addslashes(req["body"]["emailAdd"]);
    var amount = addslashes(req["body"]["amt"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                getPlayerBalance(aid).then(function(bal){
                    if(amount <= bal){
                        sellVQ(aid, amount, email).then(function(bool){
                            if(bool){
                                //TRANSACTON SUCCESSFUL
                                res.send("true");
                            }
                            else{
                                //TRANSACTION FAILED
                                res.send("false");
                            }
                        });
                    }
                    else{
                        res.send("-1");
                    }
                });
            })
        }
    });
});





router.post("/topup", function(req, res){
    //RETURN PAYPAL LINK BUY VQ
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    var amount = addslashes(req["body"]["amt"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            buyVQ(session_id, amount).then(function(url){
                if(typeof(url) == "boolean"){
                    res.send("false");
                }
                else{
                    res.send(url);
                }
            });
        }
    });
});







router.post('/connect', function(req, res){
    //SEND VERIFICATION EMAIL THAT WILL BE USED TO CONNECT DEVICE
    var emailAddress = addslashes(req["body"]["email"]);
    if(validateEmail(emailAddress) && emailAddress.indexOf("@mailinator.com") == -1){
        linkAlreadySent(emailAddress).then(function(data){
            if(data == false){
                //LINK NOT SENT
                var verification_token = sha256(randomString());
                connection.query("INSERT INTO pendingLogins (eml, tkn) VALUES ('"+emailAddress+"', '"+verification_token+"');", function(fields, results, error){
                    try{
                        if(error){
                            throw new Error();
                        }
                        sendmail(emailAddress,"Device Verification",`
                        <br>
                        Greetings! A device is trying to connect to your Double Six account. To verify this device click the link below:
                        <br>
                        <br>
                        `+serverDomain+`login?t=`+verification_token+`
                        <br>
                        <br>
                        Do you recognize this activity? If not, please do not click the link as it may be a security breach. In the case of such an event you are given the option to disconnect all devices within the App.
                        `);
                        new Promise(function(resolve, reject){
                            setTimeout(function(){
                                connection.query("DELETE FROM pendingLogins WHERE eml = '"+emailAddress+"';", function(fields, results, error){
    
                                });
                            }, verificationLinkExperationTimeout*1000);
                        });
                        var response = {
                            "timeout": verificationLinkExperationTimeout,
                            "accepted": false,
                            "pollTkn": results["insertId"]
                        };
                        res.send(JSON.stringify(response));
                    }
                    catch(err){
                        console.log(err);
                    }
                });        
            }
            else{
                //LINK ALREADY SENT
                var timeRemaining = verificationLinkExperationTimeout - data;
                var pollTkn = addslashes(req["body"]["pollTkn"]);
                connection.query("SELECT * FROM pendingLogins WHERE eml = '"+emailAddress+"' AND acptd = '1' AND id = '"+pollTkn+"';", function(fields, results, error){
                    if(results.length > 0){
                        //LINK ACCEPTED
                        var response = {
                            "session_id": results[0]["sesid"],
                            "session_tkn": results[0]["sestkn"]
                        };
                        connection.query("DELETE FROM pendingLogins WHERE eml = '"+emailAddress+"';", function(fields, results, error){
                            
                        });            
                    }
                    else{
                        var response = {
                            "timeout": timeRemaining,
                            "accepted": false
                        };
                    }
                    res.send(JSON.stringify(response));
                });
            }     
        });
    }
    else{
        //INVALID EMAIL ADDRESS
        res.send("false");
    }
});




router.post('/checksession', function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            res.send("true");
        }
        else{
            res.send("false");
        }
    });
});



router.post('/connecteddevices', function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                connection.query("SELECT * FROM sessions WHERE aid = '"+aid+"';", function(fields, results, error){
                    res.send(JSON.stringify(results.length));
                });
            });
        }
    });
});





router.post('/getusername', function(req, res){
    //GETS THE USERNAME TIED TO A PARTICULAR SESSION TOKEN
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT accounts.usrname FROM accounts JOIN sessions ON sessions.aid = accounts.aid WHERE sessions.tkn = '"+session_token+"';", function(fields, results, error){
                res.send(JSON.stringify(results[0]["usrname"]));
            });
        }
    });
});



router.post('/disconnectdevices', function(req, res){
    //DISCONNECTS ALL DEVICES OTHER THAN THE USER'S DEVICE USING THE SAME ACCOUNT
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                connection.query("DELETE FROM sessions WHERE aid = '"+aid+"' AND sid <> '"+session_id+"';", function(fields, results, error){
                    if(!error){
                        res.send("true");
                    }
                    else{
                        res.send("false");
                    }
                });
            });
        }
    });
});





router.post('/disconnect', function(req, res){
    //DISCONNECTS THE CURRENT USER'S DEVICE
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    connection.query("DELETE FROM sessions WHERE sid = '"+session_id+"' AND tkn = '"+sha256(session_token)+"';", function(fields, results, error){
        if(error){
            res.send("false");
        }
        else{
            res.send("true");
        }
    });
});












router.post('/roll', function (req, res){
    //ROLLS THE DICE FOR THE CURRENT USER WHO IS IN A GAME
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT * FROM participants WHERE participants.sid = '"+session_id+"';", function(fields, playerInformation, error){
                if(playerInformation.length > 0){
                    var gid = playerInformation[0]["gid"];
                    var pid = playerInformation[0]["pid"];
                    var aid = playerInformation[0]["aid"];
                    var roll = [diceroll(), diceroll()];
                    //DETERMINE IF PLAYER HAS ROLLED ALREADY
                    connection.query("INSERT INTO rounds (rnd, gid, pid, aid, d1, d2) VALUES ('"+roundCounters[gid]+"', '"+gid+"', '"+pid+"', '"+aid+"', '"+roll[0]+"', '"+roll[1]+"');", function(fields, results, error){
                        try{
                            if(typeof(results["insertId"]) != "undefined"){
                                connection.query("SELECT d1, d2 FROM rounds WHERE rid = '"+results["insertId"]+"' AND pid = '"+pid+"';", function(fields, results, error){
                                    res.send(JSON.stringify([results[0]["d1"], results[0]["d2"]]));
                                });
                            }
                            else{
                                res.send("false");
                            }
                        }
                        catch(err){
                            res.send("false");
                        }
                    });
                }
                else{
                    res.send("false");
                }      
            });
        }
    });
});






router.post('/creategame', function(req, res){
    //CREATES A NEW GAME
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    var gamename = addslashes(req["body"]["gname"]);
    var password = addslashes(req["body"]["pw"]);
    var fee = addslashes(req["body"]["f"]); 
    console.log(req["body"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            if(checkForSpecialCharacters(gamename)){
                //GAME NAME SHOULD NOT CONTAIN ANY SPECIAL CHARACTERS
                res.send("-1");
            }
            else
            if(gamename.length < 3){
                //GAME NAME SHOULD BE AT LEAST 3 CHARACTERS LONG
                res.send("-2");
            }
            else
            if(checkIfNumber(fee) == false || fee < 0){
                //GAME FEE IS INVALID
                res.send("-3");
            }
            else{
                //GET USER ACCOUNT ID
                sessionIdToAccountId(session_id).then(function(aid){
                    try{
                        var account = aid;
                        //CREATE GAME
                        canPlayerAffordFee(null, session_id, fee).then(function(bool){
                            if(bool == false){
                                res.send("-7");
                            }
                            else{
                                connection.query("INSERT INTO games (aid, nme, pwd, fee) VALUES ('"+account+"', '"+gamename+"', '"+sha256(password)+"', '"+fee+"');", function(fields, results, error){
                                    try{
                                        if(typeof(results["insertId"]) != "undefined" && !error){
                                            var gameId = results["insertId"]
                                            
                                            connection.query("INSERT INTO participants (sid, aid, gid, gain, con) VALUES ('"+session_id+"', '"+aid+"', '"+gameId+"', '"+fee*-1+"', '"+1+"');", function(fields, results, error){
                                                //START GAME MANAGER
                                                if(error){
                                                    console.log(error);
                                                    res.send("false");
                                                }
                                                else{
                                                    if(typeof(managerSubprocesses[gameId]) == "undefined"){
                                                        gameManager(gameId);
                                                    }    
                                                    res.send(JSON.stringify(gameId));                                
                                                }
                                            });      
                                        }
                                        else{
                                            res.send("-4");
                                        }
                                    }
                                    catch(err){
                                        console.log(err);
                                        //GAME NAME ALREADY EXISTS
                                        res.send("-5");
                                    }
                                });  
                            }
                        });
                    }
                    catch(err){
                        console.log(err);
                        res.send("-6");
                    }                    
                });
            }
        }
    });
});








router.post('/join', function(req, res){
    // ROUTE TO ADD A PLAYER TO THE PARTICIPANT TABLE 
    // FOR A SPECIFIC GAME
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    var gid = addslashes(req["body"]["game_id"]);
    if(typeof(req["body"]["pwd"]) == "undefined")
        var pwd = "";
    else
        var pwd = addslashes(req["body"]["pwd"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT * FROM games WHERE gid = '"+gid+"';", function(fields, results, error){
                try{
                    if(sha256(pwd) == results[0]["pwd"]){
                        canPlayerAffordFee(gid, session_id).then(function(bool){
                            if(bool == false){
                                res.send("-1");
                            }
                            else{
                                var joinable = results[0]["canjoin"];
                                if(parseInt(joinable) == 1){
                                    connection.query("SELECT * FROM participants WHERE gid = '"+gid+"';", function(fields, results, error){
                                        if(results.length <= maxPlayersPerGame){
                                            sessionIdToAccountId(session_id).then(function(aid){
                                                connection.query("INSERT INTO participants (sid, aid, gid, gain, con) VALUES ('"+session_id+"', '"+aid+"', '"+gid+"', '"+0+"', '"+0+"');", function(fields, insertionResults, error){
                                                    if(error){
                                                        res.send("false");
                                                    }
                                                    else{
                                                        //PLAYER JOINED GAME
                                                        //RETURN GAME INFO
                                                        getGameInformation(session_id).then(function(gameInfo){
                                                            res.send(JSON.stringify(gameInfo));
                                                        });
                                                    }
                                                });
                                            });
                                        }
                                        else{
                                            //GAME IS FULL
                                            res.send("-2");
                                        }
                                    });
                                }
                                else{
                                    //GAME IS CURRENTLY IN ROUND
                                    res.send("true"); 
                                }
                            }
                        });
                    }
                    else{
                        //PASSWORD INCORRCT
                        res.send("0");
                    }
                }
                catch(err){

                }
            });            

            connection.query("SELECT * FROM games WHERE gid = '"+gid+"';", function(fields, results, error){
                try{
                    if(sha256(pwd) == results[0]["pwd"]){
                        //CONNETION TO GAME SUCCESSFUL
                        sessionIdToAccountId(session_id).then(function(aid){
                            //var gain = parseFloat(results[0]["fee"]) * -1;
                            var joinable = results[0]["canjoin"];
                            if(parseInt(joinable) == 1){
                                connection.query("SELECT * FROM participants WHERE gid = '"+gid+"';", function(fields, results, error){
                                    if(results.length <= maxPlayersPerGame){
                                        connection.query("INSERT INTO participants (sid, aid, gid, gain, con) VALUES ('"+session_id+"', '"+aid+"', '"+gid+"', '"+0+"', '"+0+"');", function(fields, insertionResults, error){
                                            if(error){
                                                res.send("false");
                                            }
                                            else{
                                                //PLAYER JOINED GAME
                                                //RETURN GAME INFO
                                                getGameInformation(session_id).then(function(gameInfo){
                                                    res.send(JSON.stringify(gameInfo));
                                                });
                                            }
                                        });
                                    }
                                    else{
                                        res.send("-1");
                                    }
                                });
                            }
                            else{
                                res.send("true"); 
                            }
                        });     
                    }
                    else{
                        res.send("0");
                    }
                }
                catch(err){

                }
            });  
        }
    });
});





router.post('/getbal', function(req, res){
    //RETURNS A USERS CURRENT BALANCE
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                getPlayerBalance(aid).then(function(bal){
                    res.send(JSON.stringify(bal));
                });
            });
        }
        else{
            res.send("false");
        }
    });    
});

/*
router.post('/getsaleprofit', function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                connection.query("SELECT SUM() FROM transactions WHERE aid = '"+aid+"' AND ppal = '"+1+"';", function(fields, results, error){

                });
            });
        }
    }
});*/

router.post('/bucket', function(req, res){
    //RETURNS THE VQ MINED BY THE USER
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            sessionIdToAccountId(session_id).then(function(aid){
                getPlayerBucket(aid).then(function(bucket){
                    res.send(JSON.stringify(bucket));
                });
            });
        }
    });    
});




router.post('/rounddetails', function(req ,res){
    //GETS THE ROUND DETAILS FOR A SPECIFIC GAME
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            getGameInformation(session_id).then(function(gameInfo){
                res.send(JSON.stringify(gameInfo));
            });   
        }
    });
});



router.post('/jackpot', function(req, res){
    //RETURNS THE JACKPOT FOR A SPECIFIC GAME
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT * FROM participants JOIN games ON participants.gid = games.gid WHERE participants.sid = '"+session_id+"' GROUP BY games.gid;", function(fields, results, error){
                var gid = results[0]["gid"];
                connection.query("SELECT * FROM games JOIN participants ON participants.gid = games.gid WHERE games.gid = '"+gid+"' GROUP BY participants.pid;", function(fields, results, error){
                    res.send(JSON.stringify({
                        "fee": results[0]["fee"],
                        "jp": results[0]["fee"] * results.length
                    }));
                });
            });
        }
    });   
});




router.post('/confirm', function(req, res){
    //SETS A BOOLEAN FIELD TO INDICATE A CONDITION
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("UPDATE participants SET con = 1 WHERE sid = '"+session_id+"';", function(fields, results, error){
                if(error){
                    res.send("false");
                }
                else{
                    res.send("true");
                }
            });
        }
    });   
});


router.post('/exitgame', function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    if(typeof(addslashes(req["body"]["confm"])) != "undefined"){
        var confm = addslashes(req["body"]["confm"]);
    }
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT * FROM participants JOIN games ON participants.gid = games.gid WHERE participants.sid = '"+session_id+"' GROUP BY participants.pid;", function(fields, results, error){
                try{
                    console.log(results);
                    if(results.length > 0){
                        //USER IS CURRENTLY IN A GAME
                        var pid = results[0]["pid"];
                        if(results[0]['canjoin'] == 0){
                            //USER IS CURRENLY IN ROUND
                            res.send("-1");
                        }
                        else{
                            console.log("DELETING PARTICIPANTS");
                            connection.query("DELETE FROM rounds WHERE pid = '"+pid+"';", function(fields, results, error){
                                connection.query("DELETE FROM participants WHERE pid = '"+pid+"';", function(fields, results, error){
                                    res.send("true");
                                });
                            });
                        }
                    }
                    else{
                        res.send("0");
                    }
                }
                catch(err){
                    res.send("false");
                }
            });
        }
    });
});



router.post('/inround', function(req, res){
    var session_id = addslashes(req["body"]["sess_id"]);
    var session_token = addslashes(req["body"]["sess_tkn"]);
    checkSession(session_id, session_token).then(function(bool){
        if(bool){
            session_token = sha256(session_token);
            connection.query("SELECT * FROM games JOIN participants ON games.gid = participants.gid WHERE participants.sid = '"+session_id+"' AND games.canjoin = 0 GROUP BY participants.pid;", function(fields, results, error){
                if(results.length > 0){
                    res.send("true");
                }
                else{
                    res.send("false");
                }
            });
        }
    });
});


