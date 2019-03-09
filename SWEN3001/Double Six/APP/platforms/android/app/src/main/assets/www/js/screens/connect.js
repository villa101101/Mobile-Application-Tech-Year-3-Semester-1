var connect = `
    <header class="fill textTheme" style="text-align: center; padding: 20px 0 0 0; height: 72px;">
        <span style="font-size: 24px;">Double Six</span>
        <br>
        <span style="font-size: 16px;">The Ultimate Dice Roll</span>
    </header>  
    <section class="fill">
        <table class="fill" style="height: calc(100vh - 72px);">
            <tr>
                <td style="text-align: center; padding: 0 0 60px 0;">
                    <div class="textTheme" style="display: inline-block; padding: 0 20px;">
                        <table style="max-width: 300px;">
                            <tr>
                                <td>
                                    <span style="font-size: 22px;">Sign In</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input id="connectionEmailField" class="textTheme browser-default" placeholder="Email" style="width: 94%; border-bottom: 1px solid; margin: 0 0 0 3%;">
                                </td>
                            </tr>   
                            <tr>
                                <td>
                                    <span>By signing in you have accepted our <a style="text-decoration: underline; color: #0000FF; font-weight: normal;" href="#terms" data-transition="slide">Terms and Conditions<a></span>
                                </td>
                            </tr>    
                            <tr>
                                <td>
                                    <div onclick="startConnection();" class="fill okBtnTheme" style="padding: 10px 0; text-align: center;">Next</div>
                                </td>
                            </tr>                            
                        </table>                    
                    </div>
                </td>
            </tr>
        </table>
    </section>
`;
    
$("#connect").html(connect);

var timer = 0;
var pollTkn = "";
var poller = "";

const validateEmail = function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const startConnection = function(){
    var email = $("#connectionEmailField").val();
    if(validateEmail(email)){
        connectionRequest(email);
        $("#connectionEmailField").val('');
    }
    else{
        toastMessageBottomShort("Please provide a valid email address");
        $("#connectionEmailField").focus();
    }
}


const abortConnect = function(){
    try{
        clearInterval(poller);
        localStorage.removeItem("pollTkn");
        $.mobile.navigate("#connect", { transition: 'slide', reverse: true});
    }
    catch(err){

    }
}

const connectionRequest = function(email, poll_token){
    return new Promise(function(resolve, reject){
        $.ajax({
            "url": serverDomain+"connect",
            "type": "post",
            "data": {
                "email": email,
                "pollTkn": poll_token
            },
            "success": function(response){
                response = JSON.parse(response);
                if(typeof(response["pollTkn"]) != "undefined"){
                    localStorage["pollTkn"] = response["pollTkn"];
                }
                timer = parseInt(response["timeout"]);
                if(typeof(poller) != "number"){
                    poller = setInterval(function(){
                        connectionRequest(email, localStorage["pollTkn"]);
                        $("#timerHolder").html(timer);
                        timer--;
                    }, 1000);
                }
                $.mobile.navigate("#pending", { transition: 'slide', reverse: false});                
                try{
                    if(timer <  4){
                        localStorage.clear();
                        poller = "";
                        abortConnect();
                    }
                    if(typeof(response["session_id"]) != "undefined" && typeof(response["session_tkn"]) != "undefined"){
                        //CONNETION SUCCESSFUL
                        localStorage["sess_id"] = response["session_id"];
                        localStorage["sess_tkn"] = response["session_tkn"];
                        localStorage.removeItem("pollTkn");
                        $.mobile.navigate("#success", { transition: 'none', reverse: false});
                        clearInterval(poller);
                        resolve(true);
                    }
                    else{               
                        resolve(false);
                    }                        
                }
                catch(err){
                    console.log(err);
                }   
            }
        });
    });
}


