var home= `
    <header class="fill theme" style="height: 104px;">
        <table class="fill">
            <tr>
                <td style="width: calc(90% - 10px); padding: 0 0 0 10px; color: white;">
                    <span style="font-size: 16px;">Double Six</span>
                </td>
                <td>
                    <div style="float: right; margin: 0 10px 0 0;">
                        <img src="img/menu.png" style="width: 20px;" onclick="$('.mainMenuComponent').slideToggle(100);">
                    </div>
                </td>
            </tr>
        </table>
        <ul class="tabs" style="background-color:#607D8D;">
            <li class="tab col s3"><a id="lobbyTab" class="active" href="#lobby" style="color:white; font-weight:normal;"><img src="img/dice.png" style="margin-bottom:-4px;"></img>LOBBY</a></li>
            <li class="tab col s3"><a href="#wallet" style="color:white; font-weight:normal; vertical-align:bottom;"> <img src="img/wallet.png" style="margin-bottom:-4px;">  WALLET</a></li>
            <li class="tab col s3"><a href="#miner" style="color:white; font-weight:normal;"> <img src="img/miner.png" style="margin-bottom:-4px;" >  MINER</a></li>
        </ul>
    </header>


    <section class="fill theme" style="height: calc(100vh - 104px); padding: 5px 5px 0 5px; overflow: auto;">
        <!--LOBBY PAGE-->    
        <div id="lobby" class="theme">    
            <table id="gamesPlaceholder" style="width: 100%; height: calc(100vh - 170px); top: 104px;">
                <tr>
                    <td style="text-align: center;">
                        <span>No Games Available</span>
                    </td>
                </tr>
            </table>       
            <div class="card" style="display: none;">
                <table style="height: 100%;">
                    <tr>
                        <td style="width: 50px;">
                            <img src="img/people.png" style="width:40px; opacity: 0.7;">
                        </td>
                        <td style="color: white;">
                            <div class="fill" style="font-size: 16px; padding: 0 0 4px 0;">
                                <span>Game Name</span>
                            </div>
                            <div class="fill">
                                <span>Players: </span>
                            </div>
                            <div class="fill">
                                <span>Round Fee: </span>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>









        <!--WALLET PAGE-->
        <div id="wallet" class="row theme">

            <table class="fill">
                <tr>
                    <td style="text-align: center;">
                        <span style="color:white; font-size: 14px; font-weight: normal;">Your Balance</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <span style="color:white; font-size:25px;"><span id="balanceContainer">---</span> VQ</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center; padding: 0 0 60px 0;">
                        <img src="img/money.png" style="width:220px; height:220px;">
                    </td>
                </tr>
            </table>

            <div style="position: absolute; width: 100%;  bottom: 0; left: 0; background-color: inherit;">
                <table style="float: left; width: 80%; margin: 0 0 0 10%;">
                    <tr>
                        <td style="padding: 0 0 15px 0; text-align: center;">
                            <div onclick="$('#topupAmountDialog').toggle(true); $('#topupFieldHolder').focus(); showClouder();" class="okBtnTheme" style="display: inline-block; width: 100%; max-width: 200px; padding: 5px 0;">TOP UP</div>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 0 15px 0; text-align: center;">
                            <div onclick="$('#withdrawAmountDialog').toggle(true); $('#withdrawEmailFieldHolder').focus(); showClouder();" class="waves-light okBtnTheme" style="display: inline-block; width: 100%; max-width: 200px; padding: 5px 0;">WITHDRAW</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>






        <!--MINER PAGE-->
        <div id="miner" class="row" style="background-color:#607D8D; overflow: auto;">

            <table class="fill">
                <tr>
                    <td style="text-align: center; position: relative;">
                        <span onclick="$('#miningInfoPrompt').toggle(true); showClouder();" style="position: absolute; border: 1px solid; padding: 3px 9px; border-radius: 100px; right: 10px; font-family: georgia;";>i</span>
                        <span id="minerLabel" style="font-size: 16px;">Tap to Start Mining</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <div onclick="toggleMining();" style="display: inline-block; background-color: #132832; position: relative; border: 2px solid #215968; width: 150px; height: 150px; border-radius: 100px;">
                            <table style="height: 100%; width: 100%; position: absolute; z-index: 2;">
                                <tr>
                                    <td style="text-align: center;">
                                        <img src="img/mining.png" style="width: 60px;">
                                    </td>
                                </tr>
                            </table>
                            <img id="miningIndicator" src="img/miner.gif" style="opacity: 0.6; display: none; position: absolute; left: -18px; top: -15px; width: 180px;">
                        </div>                        
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <span style="color:white;">Your Bucket</span>
                    </td>
                </tr>
                <tr>
                    <td style="text-align: center;">
                        <span style="color:white; font-size: 30px;"><span id="bucketContainer">---</span> VQ</span>
                    </td>
                </tr>
            </table>
            <div style="position: absolute; z-index: 2; width: 100%;  bottom: 0; left: 0; background-color: inherit;">
                <table style="float: left; width: 80%; margin: 0 0 0 10%;">
                    <tr>
                        <td style="padding: 0 0 15px 0; text-align: center;">
                            <div class="okBtnTheme" style="width: 100%; display: inline-block; max-width: 200px; padding: 5px 0;">POCKET</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        



        <div class="mainMenuComponent" onclick="$('.mainMenuComponent').toggle(false);" style="display: none; z-index: 3; width: 120px; background-color: white; border: 1px solid lightgray; position: absolute; top: 20px; right: 20px;">
            <table class="fill">
                <tr>
                    <td class="menuOption" onclick="$('#createGameFormDialog').toggle(true); showClouder();">
                        <span>Create Game</span>
                    </td>
                <tr/>
                <tr>
                    <td class="menuOption" onclick="$('#searchGameDialog').toggle(true); $('#searchGameField').focus(); showClouder();">
                        <span>Search</span>
                    </td>
                <tr/>
                <tr>
                    <td class="menuOption" onclick="disconnectDevices();">
                        <span>Disconnect</span>
                    </td>
                <tr/>   
                <tr>
                    <td class="menuOption" onclick="refreshGamesList();">
                        <span>Refresh</span>
                    </td>
                <tr/>      
                <tr>
                    <td class="menuOption" onclick="signOut();">
                        <span>Exit</span>
                    </td>
                <tr/>      
            </table>
        </div> 
        <div id="createGameFormDialog" class="customDialogBox" style="height: 217px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0;">
                        <span class="textTheme customDialogBoxTitle">Create Game</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input id="createNewGameNameContainer" class="textTheme browser-default" placeholder="Game Name" style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input id="createNewGamePasswordContainer" class="textTheme browser-default" placeholder="Password" style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%;">
                    </td>
                </tr>
                <tr>
                    <td style="width: 80px;">
                        <input id="createNewGameFeeContainer" class="textTheme browser-default" placeholder="Fee" type="number" style="font-size: 15px; background-color: transparent; padding: 10px 0px; border: none; border-bottom: 2px solid lightgray; width: 94%; color: #4B6675; margin: 0 0 0 2px;">
                    </td>
                    <td>
                        <span style="font-size: 12px; color: black;">VQ</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 5px 0 0 0;">
                        <button onclick="createGame();" style="float: right; margin: 0 0 0 0; color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">CREATE</button>
                    </td>
                </tr>
            </table>
        </div>  
        <div id="miningInfoPrompt" class="customDialogBox" style="height: 200px;">
            <table class="fill">
                <tr>
                    <td style="padding: 0 0 5px 0;">
                        <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Mining Info</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="customDialogBoxBody" style="color: black;">Welcome to the Double Six Miner. Do not expect to make millions from this, however mining effort is cumulative! Earn payouts faster by telling others to mine</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px 0 0 0;">
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>   
        <div id="incorrectPasswordPrompt" class="customDialogBox" style="height: 125px;">
            <table class="fill">
                <tr>
                    <td style="padding: 0 0 5px 0;">
                        <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Password Incorrect</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="customDialogBoxBody" style="color: black;">The game password supplied is incorrect.</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px 0 0 0;">
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div> 
        <div id="gameFullPrompt" class="customDialogBox" style="height: 108px;">
            <table class="fill">
                <tr>
                    <td style="padding: 0 0 5px 0;">
                        <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Game Full</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="customDialogBoxBody" style="color: black;">The selected game is full.</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px 0 0 0;">
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="tooPoorPrompt" class="customDialogBox" style="height: 143px;">
            <table class="fill">
                <tr>
                    <td style="padding: 0 0 5px 0;">
                        <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Insufficient Funds</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="customDialogBoxBody" style="color: black;">You do not have enough Virtual Quarters to join the selected game</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px 0 0 0;">
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="confirmationTimeoutPrompt" class="customDialogBox" style="height: 125px;">
            <table class="fill">
                <tr>
                    <td style="padding: 0 0 5px 0;">
                        <span class="textTheme customDialogBoxTitle" style="margin: 0; color: black; /*color: #4B6675;*/">Confirmation Timeout</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span class="customDialogBoxBody" style="color: black;">You have been removed from the game</span>
                    </td>
                </tr>
                <tr>
                    <td style="padding: 5px 0 0 0;">
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="gameKeyFieldDialog" class="customDialogBox" style="height: 120px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 10px 0;">
                        <span class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Game Key</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input id="gameKeyFieldHolder" class="textTheme browser-default" placeholder="" type="password"  style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%; background-color: transparent; border: none; border-bottom: 2px solid lightgray; padding: 3px 5px;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 0 0 0">
                        <button id="submitGameKeyBtn" style="float: right; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">JOIN</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="searchGameDialog" class="customDialogBox" style="height: 120px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 10px 0">
                        <span class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Search Games</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 0 0;">
                        <input id="searchGameField" class="textTheme browser-default" placeholder="Enter Search Query" type="text"  style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%; background-color: transparent; border: none; border-bottom: 2px solid lightgray; padding: 3px 5px;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 0 0 0;">
                        <button id="submitTopupBtn" onclick="searchGames($('#searchGameField').val()); hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="topupAmountDialog" class="customDialogBox" style="height: 120px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 10px 0">
                        <span class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Top Up</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 0 0;">
                        <input id="topupFieldHolder" class="textTheme browser-default" placeholder="Amount" type="number"  style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%; background-color: transparent; border: none; border-bottom: 2px solid lightgray; padding: 3px 5px;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 10px 0 0 0;">
                        <button id="submitTopupBtn" onclick="topup(); $('#topupAmountDialog').css('display', 'none');" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div id="withdrawAmountDialog" class="customDialogBox" style="height: 170px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 10px 0;">
                        <span class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Withdraw</span>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <input id="withdrawEmailFieldHolder" class="textTheme browser-default" placeholder="Paypal Email Address" type="text"  style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%; background-color: transparent; border: none; border-bottom: 2px solid lightgray; padding: 3px 5px;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 20px 0 0 0;">
                        <input id="withdrawFieldHolder" class="textTheme browser-default" placeholder="Amount" type="number"  style="width: 94%; border-bottom: 2px solid lightgray; margin: 0 0 0 3%; background-color: transparent; border: none; border-bottom: 2px solid lightgray; padding: 3px 5px;">
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 15px 0 10px 0;">
                        <button id="submitwithdrawBtn" onclick="withdraw(); $('#withdrawAmountDialog').toggle(false);" style="float: right; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>
        <div class="createGameProcess customDialogBox" style="height: 150px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 10px 0 0 10px;">
                        <span class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Creating Game..</span>
                        <br>
                        <div class="fill" style="text-align: center; margin: 20px 0 0 0;">
                            <div class="preloader-wrapper big active" style="display: inline-block;">
                                <div class="spinner-layer spinner-blue-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div><div class="gap-patch">
                                        <div class="circle"></div>
                                    </div><div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>                        
                        </div>                     
                    </td>
                </tr>               
            </table>
        </div> 
        <div id="processDialog" class="customDialogBox" style="height: 80px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0;">
                        <div class="fill" style="text-align: center; margin: 5px;">
                            <table class="fill">
                                <tr>
                                    <td>
                                        <div class="preloader-wrapper big active" style="display: inline-block; width: 30px; height: 30px;">
                                            <div class="spinner-layer spinner-cyan-only">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>                                     
                                    </td>
                                    <td style="color: gray; font-size: 14px;">
                                        <span id="processDialogText">Please wait...</span>
                                    </td>
                                </tr>
                            </table>
                        </div>                     
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0;">
                        <button id="submitwithdrawBtn" onclick="cancelProcess('', '', true);" style="float: right; margin: -13px -15px 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">CANCEL</button>
                    </td>
                </tr>                 
            </table>
        </div> 
        <div id="creatingGameProcessDialog" class="customDialogBox" style="height: 80px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0;">
                        <div class="fill" style="text-align: center; margin: 5px;">
                            <table class="fill">
                                <tr>
                                    <td>
                                        <div class="preloader-wrapper big active" style="display: inline-block; width: 30px; height: 30px;">
                                            <div class="spinner-layer spinner-cyan-only">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>                                     
                                    </td>
                                    <td style="color: gray; font-size: 14px;">
                                        <span id="processDialogText">Creating Game...</span>
                                    </td>
                                </tr>
                            </table>
                        </div>                     
                    </td>
                </tr>                
            </table>
        </div>       
        <div id="toppingUpProcessDialog" class="customDialogBox" style="height: 80px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0;">
                        <div class="fill" style="text-align: center; margin: 5px;">
                            <table class="fill">
                                <tr>
                                    <td>
                                        <div class="preloader-wrapper big active" style="display: inline-block; width: 30px; height: 30px;">
                                            <div class="spinner-layer spinner-cyan-only">
                                                <div class="circle-clipper left">
                                                    <div class="circle"></div>
                                                </div><div class="gap-patch">
                                                    <div class="circle"></div>
                                                </div><div class="circle-clipper right">
                                                    <div class="circle"></div>
                                                </div>
                                            </div>
                                        </div>                                     
                                    </td>
                                    <td style="color: gray; font-size: 14px;">
                                        <span id="processDialogText">Please Wait..</span>
                                    </td>
                                </tr>
                            </table>
                        </div>                     
                    </td>
                </tr>                
            </table>
        </div>         
        <div id="withdrawlDialog" class="customDialogBox" style="height: 160px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0">
                        <span id="withdrawlDialogTitle" class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Withdrawing</span>
                        <br>
                        <div class="fill" style="text-align: center; margin: 20px 0 0 0;">
                            <div class="preloader-wrapper big active" style="display: inline-block;">
                                <div class="spinner-layer spinner-cyan-only">
                                    <div class="circle-clipper left">
                                        <div class="circle"></div>
                                    </div><div class="gap-patch">
                                        <div class="circle"></div>
                                    </div><div class="circle-clipper right">
                                        <div class="circle"></div>
                                    </div>
                                </div>
                            </div>                                                
                        </div>                     
                    </td>
                </tr>              
            </table>
        </div>         
        <div id="miningLevelDialog" class="customDialogBox" style="height: 174px;">
            <table class="fill">
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0">
                        <span id="withdrawlDialogTitle" class="textTheme" style="font-size: 16px; margin: 0; color: black; /*color: #4B6675;*/">Select Intensity</span>                 
                    </td>
                </tr> 
                <tr>
                    <td colspan="2" style="padding: 5px 0 0 0">
                        <table class="fill">
                            <tr>
                                <td style="padding: 0 0 0 0;">
                                    <input class="miSelect" name="miningIntensity"  value="0.9" checked style="opacity: 1; position: relative; pointer-events: auto;" data-role="none" type="radio">
                                </td>
                                <td style="padding: 3px 0 5px 2px;">
                                    <span style="color: black;">10% CPU - No Slowdown</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="miSelect" name="miningIntensity" value="0.7" style="opacity: 1; position: relative; pointer-events: auto;" data-role="none" type="radio">
                                </td>
                                <td style="padding: 3px 0 5px 2px;">
                                    <span style="color: black;">30% CPU - Slight Slowdown</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="miSelect" name="miningIntensity" value="0.45" style="opacity: 1; position: relative; pointer-events: auto;" data-role="none" type="radio">
                                </td>
                                <td style="padding: 3px 0 5px 2px;">
                                    <span style="color: black;">55% CPU - Moderate Slowdown</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input class="miSelect" name="miningIntensity" value="0.3" style="opacity: 1; position: relative; pointer-events: auto;" data-role="none" type="radio">
                                </td>
                                <td style="padding: 3px 0 5px 2px;">
                                    <span style="color: black;">70% CPU - Overnight Mining</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>  
                <tr>
                    <td colspan="2" style="padding: 0 0 0 0">
                        <button onclick="hideClouder(); startMining();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>              
            </table>
        </div>
        <div id="withdrawlSuccessPrompt" class="customDialogBox" style="height: 142px;">
            <table class="fill">
                <tr>
                    <td style="text-align: center;">
                        <div class="fill" style="padding: 0 0 5px 0; text-align: center;">
                            <span class="confirmationTextGreen" style="font-size: 14px;">Withdrawl Successful</span>
                        </div>
                        <img id="withdrawlSuccessIndicator" src="img/check_tick.gif" style="width: 60px; height: 60px; display: inline-block;">
                    </td>
                </tr>
                <tr>
                    <td>
                        <button onclick="hideClouder();" style="float: right; margin: 0 0 0 0; /*color: #4B6675;*/ color: #07998B; background-color: transparent; border: none; font-size: 12px; padding: 3px 10px; border-radius: 5px;">OK</button>
                    </td>
                </tr>
            </table>
        </div>        
        <div class="mainMenuComponent" onclick="$('.mainMenuComponent').toggle(false);" style="display: none; width: 100%; height: 100vh; position: fixed; top: 0; left: 0; z-index: 2;"></div>
        <div id="clouder" class="clouder" onclick="hideClouder();"></div>
    </section>
` ;

$("#home").html(home);

new Promise(function(resolve, reject){
    setTimeout(function(){
        $("#lobbyTab").click();
    }, 400);
});



if(typeof(localStorage["sess_id"]) == "undefined"){
    localStorage["sess_id"] = "";
}

if(typeof(localStorage["sess_tkn"]) == "undefined"){
    localStorage["sess_tkn"] = "";
}



const buildGameCard = function(gameName, players, fee, ts, game_id, keyNeeded){
    if(keyNeeded){
        return `
        <div class="card" onclick="joinGame('`+game_id+`', '', true)">
            <table style="height: 100%;">
                <tr>
                    <td style="width: 50px;">
                        <img src="img/people.png" style="width:40px; opacity: 0.7;">
                    </td>
                    <td style="color: white;">
                        <div class="fill" style="font-size: 16px; padding: 0 0 4px 0;">
                            <span class="gameNameContainer">`+gameName+`</span>
                        </div>
                        <div class="fill">
                            <span>Players: `+players+`</span>
                        </div>
                        <div class="fill">
                            <span>Round Fee: `+fee+`</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>     
        `;
    }
    else{
        return `
        <div class="card" onclick="joinGame('`+game_id+`', '')">
            <table style="height: 100%;">
                <tr>
                    <td style="width: 50px;">
                        <img src="img/people.png" style="width:40px; opacity: 0.7;">
                    </td>
                    <td style="color: white;">
                        <div class="fill" style="font-size: 16px; padding: 0 0 4px 0;">
                            <span class="gameNameContainer">`+gameName+`</span>
                        </div>
                        <div class="fill">
                            <span>Players: `+players+`</span>
                        </div>
                        <div class="fill">
                            <span>Round Fee: `+fee+`</span>
                        </div>
                    </td>
                </tr>
            </table>
        </div>     
        `;
    }
}


const searchGames = function(query){
    if(query == ""){
        $(".card").toggle(true);
    }
    else{
        $(".card").toggle(false);
        for(var x = 0; x < $(".card").length; x++){
            if($($(".gameNameContainer", $(".card")[x])).html().indexOf(query) > -1){
                $($(".card")[x]).toggle(true);
            }
        }
    }
}


const checkSession = function(){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"checksession",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(response){
                resolve(JSON.parse(response));
            },
            "error": function (x, y, z) {
                toastMessageBottomShort("Could not connect to server");
                resolve(false);
            },
            timeout: 5000           
        });
    });
}



const showClouder = function(){
    $("#clouder").toggle(true); 
    $("#clouder").css('opacity', '0'); 
    $("#clouder").animate({opacity: '0.7'});
}

const hideClouder = function(){
    $("#clouder").toggle(false); 
    $("#clouder").css('opacity', '0');
    $("#createGameFormDialog").toggle(false);
    $("#mainMenuComponent").toggle(false);
    $("#gameKeyFieldDialog").toggle(false);
    $('#topupAmountDialog').toggle(false);
    $('#withdrawAmountDialog').toggle(false);  
    $("#processDialog").toggle(false);    
    $("#withdrawlDialog").toggle(false); 
    $("#withdrawlSuccessPrompt").toggle(false);
    $("#miningInfoPrompt").toggle(false); 
    $("#incorrectPasswordPrompt").toggle(false);
    $("#gameFullPrompt").toggle(false);
    $("#tooPoorPrompt").toggle(false);
    $("#searchGameDialog").toggle(false);
    $("#creatingGameProcessDialog").toggle(false);
    $("#confirmationTimeoutPrompt").toggle(false);
    $("#miningLevelDialog").toggle(false);
    $("#toppingUpProcessDialog").toggle(false);
    hideGameClouder();
}

const disconnectDevices = function(){
    confirmUser("Disconnect all other devices from your account?", function(choice){
        if(choice == 1){
            //CANCEL
        }
        else
        if(choice == 2){
            //CONFIRM
            $.ajax({
                "url": serverDomain+"disconnectdevices",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"]
                },
                "success": function(response){
                    resolve(JSON.parse(response));
                    if(response){
                        //SUCCESSFULLY EXECUTED
                        alertUser("All other devices connected to your", function(){}, "Device Disconnected", "OK");
                    }
                    else{
                        alertUser("An error occurred while performing action", function(){}, "Error Occurred", "OK");
                    }
                },
                "error": function (x, y, z) {
                    resolve(false);
                }             
            });            
        }
    }, "Disconnect", ["CANCEL", "OK"]);
}


const signOut = function(){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"disconnect",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(response){
                resolve(JSON.parse(response));
                if(response){
                    //SUCCESSFULLY EXECUTED
                    localStorage.clear();
                    $.mobile.navigate("#connect", { transition: 'fade', reverse: false});
                }
                else{
                    localStorage.clear();
                    $.mobile.navigate("#connect", { transition: 'fade', reverse: false});
                }
            },
            "error": function (x, y, z) {
                localStorage.clear();
                $.mobile.navigate("#connect", { transition: 'fade', reverse: false});
            }             
        });
    }); 
}


var loggedInPages = ["home"];
var loggedOutPages = ["connect", "success"];
var globalPages = [];

checkSession().then(function(data){
    console.log(data);
    if(data == false){
        for(var x = 0; x < loggedInPages.length; x++){
            if(loggedInPages[x].indexOf($.mobile.activePage.attr('id')) >= 0){
                $.mobile.navigate("#connect", { transition: 'none', reverse: false});
                break;
            }
        }
    }
    else{
        for(var x = 0; x < loggedOutPages.length; x++){
            if(loggedOutPages[x].indexOf($.mobile.activePage.attr('id')) >= 0){
                $.mobile.navigate("#home", { transition: 'none', reverse: false});
                break;
            }
        }
    }
});


const getGameList = function(){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"gamelist",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(response){
                resolve(JSON.parse(response));
            },
            "error": function (x, y, z) {
                resolve(false);
            }             
        });
    });
}

const getBucket = function(){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"bucket",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(balance){          
                resolve(balance);
            },
            "error": function (x, y, z) {
                resolve("0");
            }             
        });
    });
}

const getBalance = function(){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"getbal",
            "type": "post",
            "data": {
                "sess_id": localStorage["sess_id"],
                "sess_tkn": localStorage["sess_tkn"]
            },
            "success": function(balance){          
                resolve(balance);
            },
            "error": function (x, y, z) {
                resolve("0");
            }             
        });
    });    
}




const refreshGamesList = function(){
    getGameList().then(function(games){
        $("#lobby").html("");
        if(typeof(games) == "boolean"){
            //SHOW TOAST
            toastMessageBottomShort("Could not get games. Please enable internet connection and try again");
            $("#lobby").html(`
            <table id="gamesPlaceholder" style="width: 100%; height: calc(100vh - 170px); top: 104px;">
                <tr>
                    <td style="text-align: center;">
                        <span>No Games Available</span>
                    </td>
                </tr>
            </table>                  
            `);            
        }
        else{
            $("#lobby").html("");
            if(games.length == 0){
                $("#lobby").html(`
                <table id="gamesPlaceholder" style="width: 100%; height: calc(100vh - 170px); top: 104px;">
                    <tr>
                        <td style="text-align: center;">
                            <span>No Games Available</span>
                        </td>
                    </tr>
                </table>                  
                `);
            }
            else{
                $("#gamesPlaceholder").toggle(false);
                for(var x = 0; x < games.length; x++){
                    $("#lobby").append(buildGameCard(games[x]["name"], games[x]["plyrs"], games[x]["fee"], games[x]["ts"], games[x]["game_id"], games[x]["key"]));
                }            
            }
        }
    });
}

const refreshAll = function(){
    getBalance().then(function(bal){
        if(checkIfNumber(bal)){
            $("#balanceContainer").html(parseFloat(bal).toFixed(1));
        }
        else{
            $("#balanceContainer").html("0");
        }
    });
    getBucket().then(function(buc){
        if(checkIfNumber(buc)){
            $("#bucketContainer").html(parseFloat(buc).toFixed(1));
        }
        else{
            $("#bucketContainer").html("0");
        }
        
    });
    refreshGamesList();
}


refreshAll();

var monitor = setInterval(function(){
    refreshAll();
}, 100000);



const topup = function(){
    return new Promise(function(resolve, reject){
        $("#toppingUpProcessDialog").toggle(true);
        var amount = $("#topupFieldHolder").val();
        $("#topupFieldHolder").val('');
        if(!isNaN(amount) && amount > 0){
            $.ajax({
                "url": serverDomain+"topup",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"],
                    "amt": amount
                },
                "success": function(response){
                    try{
                        response = JSON.parse(response);
                        if(typeof(response) == "boolean"){
                            toastMessageBottomShort("An error occurred dugin the topup process. Please try again later");
                        }
                        else{
                            window.location.href = response;
                        }
                    }
                    catch(err){
                        window.location.href = response;
                    }
                },
                "error": function (x, y, z) {
                    hideClouder();
                    toastMessageBottomShort("Please check your internet connectivity");
                    resolve(false);
                }
            });
        }
        else{
            toastMessageBottomShort("Please enter a valid topup amount");
        }
    });
}


const withdraw = function(){
    return new Promise(function(resolve, reject){
        console.log("withdraw");
        var amount = $("#withdrawFieldHolder").val();
        var email = $("#withdrawEmailFieldHolder").val();
        if(checkIfNumber(amount) && amount > 0){
            $("#withdrawlDialog").toggle(true);
            $.ajax({
                "url": serverDomain+"withdraw",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"],
                    "emailAdd": email,
                    "amt": amount
                },
                "success": function(response){
                    try{
                        console.log(response);
                        response = JSON.parse(response);
                        hideClouder();
                        if(typeof(response) == "boolean"){
                            if(response){
                                $("#withdrawlSuccessPrompt").toggle(true);
                                showClouder();
                                setTimeout(function(){
                                    if($("#withdrawlSuccessPrompt").css("display") != "none")
                                        $("#withdrawlSuccessPrompt").fadeToggle(1350);
                                        hideClouder();
                                }, 4000);
                            }
                            else{
                                if(response == -1){
                                    toastMessageBottomShort("Transaction failed to complete. Not enough credits");
                                }
                                else{
                                    toastMessageBottomShort("Failed to complete withdrawl transaction. Please try again later");
                                }
                            }
                        }
                        else{

                        }
                    }
                    catch(err){
                        window.location.href = response;
                    }
                },
                "error": function (x, y, z) {
                    hideClouder();
                    toastMessageBottomShort("Please enable internet connectivity");
                    resolve(false);
                }     
            });
        }
        else{
            toastMessageBottomShort("Please enter a valid topup amount");
        }        
    });
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

const createGame = function(){
    return new Promise(function(resolve ,reject){
        //VALIDATE FORM INPUTS
        $("#createGameFormDialog").toggle(false);     
        $("#creatingGameProcessDialog").toggle(true);
        showClouder();        
        var gamename = $("#createNewGameNameContainer").val();
        var pwd = $("#createNewGamePasswordContainer").val();
        var fee = $("#createNewGameFeeContainer").val();
        var error = false;
        if(gamename.length < 3){
            toastMessageBottomShort("The game name set is too short");
            error = true;
            $("#createNewGameNameContainer").focus();
            $("#creatingGameProcessDialog").toggle(false);
        }
        else
        if(checkForSpecialCharacters(gamename)){
            toastMessageBottomShort("Please remove special characters from game name");
            error = true;
            $("#createNewGameNameContainer").focus();
            $("#creatingGameProcessDialog").toggle(false);
        }
        else
        if(checkIfNumber(fee) == false || fee < 0){
            toastMessageBottomShort("Please enter a valid number");
            error = true;
            $("#createNewGameFeeContainer").focus();
            $("#creatingGameProcessDialog").toggle(false);
        }
        if(!error){            
            $.ajax({
                "url": serverDomain+"creategame",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"],
                    "gname": $("#createNewGameNameContainer").val(),
                    "pw": $("#createNewGamePasswordContainer").val(),
                    "f": $("#createNewGameFeeContainer").val()
                },
                "success": function(response){
                    response = JSON.parse(response);
                    console.log(response);
                    if(typeof(response) == "number"){
                        if(response > 0){
                            hideClouder();
                            joinGame(response, $("#createNewGamePasswordContainer").val());
                        }
                        else{
                            if(response == -7){
                                //TOO POOR TO AFFORD FEE
                                toastMessageBottomShort("You do not have enough credits to create the game");
                                $("#createNewGameFeeContainer").focus()
                            }
                            else{
                                //AN UNKNOWN ERROR OCCURRED
                                toastMessageBottomShort("An unknown error occurred. Please try again later");
                            }
                        }
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                },
                "error": function (x, y, z) {
                    toastMessageBottomShort("Please enable internet connectivity");
                    resolve(false);
                }             
            }); 
        }
        else{
            resolve(false);
        }
    });
}


const joinGame = function(game_id, password, toggleKeyForm){
    return new Promise(function(resolve, reject){
        if(toggleKeyForm){
            $("#gameKeyFieldDialog").toggle(true);
            showClouder();
            $("#submitGameKeyBtn").on("click", function(){
                hideClouder();
                joinGame(game_id, $("#gameKeyFieldHolder").val());
            });        
        }
        else{
            $.ajax({
                "url": serverDomain+"join",
                "type": "post",
                "data": {
                    "sess_id": localStorage["sess_id"],
                    "sess_tkn": localStorage["sess_tkn"],
                    "game_id": game_id,
                    "pwd": password
                },
                "success": function(response){
                    try{
                        response = JSON.parse(response);
                        if(typeof(response) == "object"){
                            //startgame() CALLED FROM THE JACKPOT PAGE
                            //RESPONSE IS JSON OF THE GAME INFORMATION
                            //LOAD JACKPOT PAGE WITH GAME INFORMATION AND NAVIGATE
                            startgame().then(function(bool){
                                if(bool){
                                    hideClouder();
                                    $.mobile.navigate("#jackpot", { transition: 'slide', reverse: false});
                                }
                            });
                            //parseGameInformation(response);
                            resolve(true);
                        }
                        else{
                            //SHOW TOAST
                            if(response){
                                //GAME IS CURRENTLY IN A ROUND, DISPLAY LOADER
                                createJoiningPoller(game_id, password);
                            }
                            else{
                                if(response == 0){
                                    //INCORRECT PASSWORD
                                    console.log(password);
                                    $("#incorrectPasswordPrompt").toggle(true);
                                    showClouder();
                                    //alertUser("The password supplied is incorrect", function(){}, "Error While Joining", "OK");
                                }
                                if(response == -1){
                                    //TOO POOR TO PAY FEE
                                    $("#tooPoorPrompt").toggle(true);
                                    showClouder();
                                    toastMessageBottomShort("Unable to join game. Not enough credits");
                                }
                                if(response == -2){
                                    //GAME IS FULL
                                    $("#gameFullPrompt").toggle(true);
                                    showClouder();
                                }
                            }
                            resolve(false);
                        }
                    }
                    catch(err){
                        console.log(err);
                    }
                },
                "error": function (x, y, z) {
                    toastMessageBottomShort("Please enable internet connectivity");
                    console.log("ERROR WHILE JOINING");
                    resolve(false);
                }             
            }); 
        }
    });
}

var joinPoll = "";
const createJoiningPoller = function(game_id, password, cancel){
    if(typeof(joinPoll) == "number"){ 
        $("#processDialogTitle").html("Joining Game...");
        $("#processDialogBtn").attr("onclick", "createJoiningPoller('', '', true);");
        $("#processDialogDialog").toggle(true);
        if(cancel){
            hideClouder();            
            try{
                clearInterval(joinPoll);
            }
            catch(err){
                alert(err);
            }
        }
    }
    else{
        joinPoll = setInterval(function(){
            //POLLER TO REPEATEDLY ATTEMPT TO JOIN GAME IF ROUND IN PROGRESS
            //NEW PLAYERS CANNOT JOIN IF ROUND IS IN PROGRESS
            joinGame(game_id, password);
        }, 2000);
    }
}



var miner = "";
//MINER FUNCTIONS

if(typeof(localStorage["mining"]) == "undefined"){
    localStorage["mining"] = "false";
}
if(typeof(localStorage["mining"]) == "string"){
    var bool = JSON.parse(localStorage["mining"]);
    if(bool){
        $("#miningIndicator").css("display", "none");
    }
}



var showBucketNotif = "";
const startMining = function(){
    $.ajax({
        "url": serverDomain+"getusername",
        "type": "post",
        "data": {
            "sess_id": localStorage["sess_id"],
            "sess_tkn": localStorage["sess_tkn"]
        },
        "success": function(username){ 
            $("#miningIndicator").css("display", "none");
            $("#miningIndicator").fadeToggle("slow");                 
            $(".miSelect").each(function(){
                if($(this).is(':checked')){
                    miner = new CoinHive.User('bwZcD4N2jCp07PU6qEZK4N9eKmQTET8F', username, {
                        throttle: $(this).val()
                    });
                    miner.start();
                    startBackgroundProcess();
                    console.log("mining started"); 
                    $("#minerLabel").html("Mining"); 
                    localStorage["mining"] = "true";                    
                }
            }); 
        },
        "error": function (x, y, z) {      
            $("#miningIndicator").css("display", "none");
            $("#miningIndicator").fadeToggle("slow");                 
            $(".miSelect").each(function(){
                if($(this).is(':checked')){                       
                    miner = new CoinHive.User('bwZcD4N2jCp07PU6qEZK4N9eKmQTET8F', "anonymous", {
                        throttle: $(this).val()
                    });
                    miner.start();
                    startBackgroundProcess();
                    console.log("mining started"); 
                    $("#minerLabel").html("Mining"); 
                    localStorage["mining"] = "true";                    
                }
            });         
        },
        timeout: 5000            
    });
}


//$("#miningInfoPrompt").toggle(true);
//showClouder();

const stopMining = function(){
    try{
        miner.stop();
    }   
    catch(err){
        //alert(err);
    }
    finally{
        miner = "";
        localStorage["mining"] = "false";
        $("#miningIndicator").css("display", "block");
        $("#miningIndicator").fadeToggle("slow"); 
        $("#minerLabel").html("Tap to Start Mining");
        stopBackgroundProcess();
        clearInterval(showBucketNotif);
        showBucketNotif = "";   
    }
}

const toggleMining = function(){
    if(typeof(miner) == "object" || JSON.parse(localStorage["mining"]) == true){
        stopMining();
    }
    else{
        $("#miningLevelDialog").toggle(true);
        showClouder();
    }
}