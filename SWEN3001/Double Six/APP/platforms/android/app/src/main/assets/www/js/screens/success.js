var success = `
<div id="successPageContainer">
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
                        <table id="successTable" style="max-width: 300px;">
                            <tr>
                                <td style="text-align: center;">
                                    <span class="confirmationTextGreen" style="font-size: 18px;">Verification Successful</span>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <img id="successIndicator" src="img/check_tick.gif" style="width: 70px; height: 70px; display: inline-block;">
                                </td>
                            </tr>   
                            <tr>
                                <td>
                                    <div onclick="goHome()" class="fill okBtnTheme browser-default" style="padding: 10px 0; width: 250px; text-align: center;">Proceed</div>
                                </td>
                            </tr>                            
                        </table>                    
                    </div>
                </td>
            </tr>
        </table>
    </section>
</div>
`;

$("#success").html(success);


const showSuccess = function(){
    $.mobile.navigate("#success", { transition: 'none', reverse: false});
    /*$("#pendingPageContents").fadeOut("slow");
    setTimeout(function(){
        $.mobile.navigate("#success", { transition: 'none', reverse: false});
    },1000);*/
}


const goHome = function(){
    $("#successPageContainer").fadeOut("slow");
    setTimeout(function(){
        $.mobile.navigate("#home", { transition: 'fade', reverse: false});
    }, 2000);
}