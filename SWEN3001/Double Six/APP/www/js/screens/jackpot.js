var jackpot=`
    <header id="jackpotHeader" class="fill theme" style="height: 68px;">
        <table>
            <tr>
                <td style="width: 30px; padding: 15px 0 0 20px;">
                    <img src="img/back.png" onclick="exitgame(); showGameClouder();">
                </td>
                <td style="text-align: center; padding: 15px 35px 0 0;">
                    <span style="font-size: 23px;">Jackpot</span>
                </td>
            </tr>
            <tr>
                <td colspan="2" style="text-align: center; padding: 0 0 0 7px;">
                    <span style="font-size: 18px;"><span id="jackpotContainer">0</span> VQ</span>
                </td>
            </tr>
        </table>
    </header>
    <section class="theme fill" style="overflow: auto;">
        <div id="roundAndDiceContainer" class="fill" style="height: 75px; padding: 0 0 0 10px;">
            <table style="width: 100%; font-size: 18px;">
                <tr>
                    <td style="padding: 0; width: 60px;">
                        <span>Round</span>    
                    </td>
                    <td style="padding: 0;">
                        <span id="roundCntContainer">0</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 0 0 0 0; vertical-align: top;">
                        <span id="roundTimer">20</span>    
                    </td>
                    <td style="padding: 5px 0 0 0;">
                        <div id="diceContainer" class="textTheme" style="height: 47px; width: 87px; padding: 7px 5px 0 5px; float: right; border: 1px solid; margin: 0 10px 0 0;">
                            <img class="dicesRolled" src="img/dice0.png" style="background-color: black; width: 35px; height: 33px; border-radius: 3px; display: inline-block;">
                            <img class="dicesRolled" src="img/dice0.png" style="background-color: black; width: 35px; height: 33px; border-radius: 3px; display: inline-block;">
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div class="fill" style="height: calc(100vh - 190px); padding: 0 5px 0 15px; overflow: auto; text-align: center;">
            <div style="display: inline-block; width: 100%; padding: 15px 0 0 0;">
                <table id="gameTable">
                    <tr>
                        <td style="width: 33%; position: relative;">
                            <div style="white-space: nowrap; overflow: hidden; top: 5px; text-overflow: ellipsis; width: 100%; position: absolute;">
                                <span style="font-size: 16px;">player1</span>
                            </div> 
                        </td>
                        <td style="text-align: center;">
                            <span style="font-size: 16px;">10</span> 
                        </td>
                        <td style="text-align: right; padding: 0 20px 0 0;">
                            <span style="font-size: 16px;">-900000VQ</span>   
                        </td>
                    </tr>
                </table>            
            </div>
        </div>
    </section>
    <footer class="theme" style="width: 100%; position: fixed; bottom: 0; left: 0; height: 47px; text-align: center;">
        <div onclick="rolldice();" class="okBtnTheme" style="width: 90%; display: inline-block; margin: 0 0 10px 0; padding: 5px 0;">ROLL</div>
    </footer>

    <div id="continueToNextRoundConfirmation" class="customDialogBox" style="height: 127px;">
        <table class="fill">
            <tr>
                <td style="padding: 0 0 5px 0;">
                    <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Continue</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="customDialogBoxBody" style="color: black;">Would you like to continue to the next round?</span>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="fill" style="margin: 7px 0 0 0;">
                        <tr>
                            <td style="width: 80%;">
                                <button onclick="exitgame(); hideGameClouder(); continueToNextRound = false;" style="float: left; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">NO</button>        
                            </td>
                            <td>
                                <button onclick="nextRound(); hideGameClouder(); continueToNextRound = true;" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">YES</button>        
                            </td>
                        </tr>
                    </table>                        
                </td>
            </tr>
        </table>
    </div>
    <div id="exitWarningConfirmation" class="customDialogBox" style="height: 180px;">
        <table class="fill">
            <tr>
                <td style="padding: 0 0 5px 0;">
                    <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Exit Game</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="customDialogBoxBody" style="color: black;">You are currently in a round. Your balance will still be affected if you leave the game, however you will be removed from the game in the following round.</span>
                </td>
            </tr>
            <tr>
                <td>
                    <table class="fill" style="margin: 7px 0 0 0;">
                        <tr>
                            <td>
                                <button onclick="hideGameClouder();" style="float: left; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">CANCEL</button>        
                            </td>
                            <td>
                                <button onclick="confirmGameExit(); hideGameClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">EXIT</button>        
                            </td>
                        </tr>
                    </table>                        
                </td>
            </tr>
        </table>
    </div>
    <div id="gameClouder" class="clouder" onclick="hideGameClouder();"></div>
`;

$("#jackpot").html(jackpot);



const showGameClouder = function(){
    $("#gameClouder").toggle(true); 
    $("#gameClouder").css('opacity', '0'); 
    $("#gameClouder").animate({opacity: '0.7'});
}


const hideGameClouder = function(){
    $("#gameClouder").toggle(false); 
    $("#gameClouder").css('opacity', '0');
    $("#continueToNextRoundConfirmation").toggle(false);
    $("#exitWarningConfirmation").toggle(false);
}

const buildPlayerRow = function(playerName, diceRoll, profit){
    return `
        <tr>
            <td style="width: 33%; position: relative;">
                <div style="white-space: nowrap; overflow: hidden; top: 5px; text-overflow: ellipsis; width: 100%; position: absolute;">
                    <span class="playerUsernameContainer" style="font-size: 16px;">`+playerName+`</span>
                </div> 
            </td>
            <td style="text-align: center;">
                <span class="playerScoreContainer" style="font-size: 16px;">`+diceRoll+`</span> 
            </td>
            <td style="text-align: right; padding: 0 20px 0 0;">
                <span style="font-size: 16px;">`+profit+`VQ</span>   
            </td>
        </tr>    
    `;
}

for(var x = 0; x < $(".dicesRolled").length; x++){
    if($($(".dicesRolled")[x]).attr("src") == "" || $($(".dicesRolled")[x]).attr("src") == "img/dice0.png"){
        $($(".dicesRolled")[x]).toggle(false);
    }
    else{
        $($(".dicesRolled")[x]).toggle(true);
    }
}

var interval = "";
var countdown = "";
var roundDuration = 20;
var graceperiod = 8;
var playerCnt = "";
var continueToNextRound = null;
var currentRound = 0;

const startgame = function(){
    return new Promise(function(resolve , reject){
        $.ajax({
            "url": serverDomain+"rounddetails",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(response){
                var players = JSON.parse(response);
                playerCnt = players.length;
                if(players.length == 0){
                    stopgame();
                    hideGameClouder();
                    $.mobile.navigate("#home", { transition: 'slide', reverse: true});
                }
                else{
                    var gameTableHTML = "";
                    var jackpot = players[0]["fee"] * players.length;
                    $("#roundCntContainer").html(players[0]["round"]);
                    for(var x = 0; x < players.length; x++){
                        if(players[x]["me"]){
                            //INSERT DICE
                            $($(".dicesRolled")[0]).attr("src", "img/dice"+String(players[x]["dice1"])+".png");
                            $($(".dicesRolled")[1]).attr("src", "img/dice"+String(players[x]["dice2"])+".png");
                        }
                        $($(".playerScoreContainer")[x]).html(players[x]["dice1"]+players[x]["dice2"]);
                        console.log(players);
                        gameTableHTML += buildPlayerRow(players[x]["username"], players[x]["dice1"]+players[x]["dice2"], players[x]["profit"]);                    
                        resolve(true);
                    }
                    for(var x = 0; x < $(".dicesRolled").length; x++){
                        if($($(".dicesRolled")[x]).attr("src") == "" || $($(".dicesRolled")[x]).attr("src") == "img/dice0.png"){
                            $($(".dicesRolled")[x]).toggle(false);
                        }
                        else{
                            $($(".dicesRolled")[x]).toggle(true);
                        }
                    }                 
                    //UPDATE TIMER
                    $("#roundTimer").html(players[0]["timer"]);
                    //UPDATE JACKPOT
                    $("#jackpotContainer").html(jackpot);
                    //UPDATE TABLE
                    $("#gameTable").html(gameTableHTML);
                }
            },
            "error": function (x, y, z) {
                toastMessageBottomShort("Please enable internet connectivity");
                resolve(false);
            }             
        });  
        interval = setInterval(function(){
            $.ajax({
                "url": serverDomain+"rounddetails",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"]
                },
                "success": function(response){
                    var players = JSON.parse(response);
                    if(typeof(players) == "boolean"){
                        clearInterval(interval);
                        clearInterval(interval);     
                        window.history.back();                   
                        //$.mobile.navigate("#home", { transition: 'slide', reverse: false});
                        stopgame();
                        hideGameClouder();
                        refreshAll();
                        //alertUser("You have been removed from the game", function(){}, "Confirmation Timeout", "OK");
                        $("#confirmationTimeoutPrompt").toggle(true);
                        showClouder();
                    }
                    else{
                        if(players.length == 0){
                            stopgame();
                        }
                        else{
                            if(typeof(countdown) != "number"){
                                countdown = setInterval(function(){
                                    try{
                                        var cnt = $("#roundTimer").html();
                                        if(cnt > 0 && playerCnt > 1 && cnt != 20){
                                            cnt--;
                                        }
                                        $("#roundTimer").html(cnt);
                                    }
                                    catch(err){
                                        //$("#roundTimer").html("15");
                                    }
                                }, 1000);   
                            }
                            if(currentRound < players[0]["timer"]){
                                continueToNextRound = null;
                            }
                            currentRound = players[0]["timer"];
                            var gameTableHTML = "";
                            var jackpot = players[0]["fee"] * players.length;
                            $("#roundCntContainer").html(players[0]["round"]);
                            for(var x = 0; x < players.length; x++){
                                if(players[x]["me"]){
                                    //INSERT DICE
                                    if(players[x]["dice1"] == "0" || players[x]["dice2"] == 0){
                                        $($(".dicesRolled")[0]).attr("src", "img/dice0.png");
                                        $($(".dicesRolled")[1]).attr("src", "img/dice0.png");
                                    }
                                    else{
                                        $($(".dicesRolled")[0]).attr("src", "img/dice"+String(players[x]["dice1"])+".png");
                                        $($(".dicesRolled")[1]).attr("src", "img/dice"+String(players[x]["dice2"])+".png");
                                    }
                                }
                                $($(".playerScoreContainer")[x]).html(players[x]["dice1"]+players[x]["dice2"]);
                                gameTableHTML += buildPlayerRow(players[x]["username"], players[x]["dice1"]+players[x]["dice2"], players[x]["profit"]);                    
                            }
                            for(var x = 0; x < $(".dicesRolled").length; x++){
                                if($($(".dicesRolled")[x]).attr("src") == "" || $($(".dicesRolled")[x]).attr("src") == "img/dice0.png"){
                                    $($(".dicesRolled")[x]).toggle(false);
                                }
                                else{
                                    $($(".dicesRolled")[x]).toggle(true);
                                }
                            }             
                            if(players[0]["timer"] <= graceperiod && players[0]["round"] > 0 && continueToNextRound == null){
                                if($("#gameClouder").css("display") == "none"){
                                    $("#continueToNextRoundConfirmation").toggle(true);
                                    showGameClouder();
                                }
                            }                                   
                            //UPDATE TIMER
                            $("#roundTimer").html(players[0]["timer"]);
                            //UPDATE JACKPOT
                            $("#jackpotContainer").html(jackpot);
                            //UPDATE TABLE
                            $("#gameTable").html(gameTableHTML);
                        }
                    }
                },
                "error": function (x, y, z) {
                    //SHOW TOAST
                    toastMessageBottomShort("Please enable internet connectivity");
                }             
            });        
        }, 3000);        
    });  
}


const stopgame = function(){
    clearInterval(interval);
    clearInterval(countdown);
    interval = "";
    countdown = "";
}

const rolldice = function(){
    $.ajax({
        "url": serverDomain+"roll",
        "type": "post",
        "data": {
            "sess_id": localStorage["sess_id"],
            "sess_tkn": localStorage["sess_tkn"]
        },
        "success": function(response){
            var diceroll = JSON.parse(response);
            try{
                if(typeof(diceroll) != "boolean"){
                    if(diceroll[0] == "0" || diceroll[1] == 0){
                        $($(".dicesRolled")[0]).attr("src", "img/dice0.png");
                        $($(".dicesRolled")[0]).attr("src", "img/dice0.png");
                    }
                    else{
                        $($(".dicesRolled")[0]).attr("src", "img/dice"+String(diceroll[0])+".png");
                        $($(".dicesRolled")[1]).attr("src", "img/dice"+String(diceroll[1])+".png");
                    }
                    $($(".playerScoreContainer")[x]).html(diceroll[0]+diceroll[1]);
                    for(var x = 0; x < $(".dicesRolled").length; x++){
                        if($($(".dicesRolled")[x]).attr("src") == "" || $($(".dicesRolled")[x]).attr("src") == "img/dice0.png"){
                            $($(".dicesRolled")[x]).toggle(false);
                        }
                        else{
                            $($(".dicesRolled")[x]).toggle(true);
                        }
                    }                 
                }
            }
            catch(err){
                $($(".dicesRolled")[0]).attr("src", "img/dice0.png");
                $($(".dicesRolled")[1]).attr("src", "img/dice0.png");
            }
        },
        "error": function (x, y, z) {
            toastMessageBottomShort("Please enable internet connectivity");
        }             
    });   
}


const nextRound = function(){
    $.ajax({
        "url": serverDomain+"confirm",
        "type": "post",
        "data": {
            "sess_id": localStorage["sess_id"],
            "sess_tkn": localStorage["sess_tkn"]
        },
        "success": function(response){
            response = JSON.parse(response);
        },
        "error": function (x, y, z) {
            toastMessageBottomShort("Please enable internet connectivity");
        }   
    });
}

const confirmGameExit = function(){
    stopgame();
    $.mobile.navigate("#home", { transition: 'slide', reverse: true});
}

const exitgame = function(){
    $.ajax({
        "url": serverDomain+"exitgame",
        "type": "post",
        "data": {
            "sess_id": localStorage["sess_id"],
            "sess_tkn": localStorage["sess_tkn"]
        },
        "success": function(response){
            response = JSON.parse(response);
            if(response == true){
                stopgame();
                window.history.back();
            }
            if(response == -1){
                $("#exitWarningConfirmation").toggle(true);
                showGameClouder();
            }
            if(response == 0){
                //NOT IN GAME
            }
        },
        "error": function (x, y, z) {
            //SHOW TOAST
        }             
    }); 
}

