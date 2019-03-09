var pending = `
    <header class="fill textTheme" style="text-align: center; padding: 20px 0 0 0; height: 72px;">
        <span style="font-size: 24px;">Double Six</span>
        <br>
        <span style="font-size: 16px;">The Ultimate Dice Roll</span>
    </header>  
    <section id="pendingPageContents" class="fill">
        <table class="fill" style="height: calc(100vh - 72px);">
            <tr>
                <td style="text-align: center; padding: 0 0 60px 0;">
                    <div class="textTheme" style="display: inline-block; padding: 0 20px;">
                        <table style="max-width: 300px;">
                            <tr>
                                <td>
                                    <span style="font-size: 22px;">Verification Link Sent</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span style="font-size: 14px;">Open the verification link sent to your inbox to connect this device.</span>
                                </td>
                            </tr>  
                            <tr>
                                <td>
                                    <span style="font-size: 14px; float: right;">Link will expire in: <span id="timerHolder">300</span>s</span>
                                </td>
                            </tr>  
                            <tr>
                                <td>
                                    <button onclick="abortConnect();" class="fill cancelBtnTheme" style="padding: 10px 0;">Abort</button>
                                </td>
                            </tr>                            
                        </table>                    
                    </div>
                </td>
            </tr>
        </table>
    </section>
`;

$("#pending").html(pending);

