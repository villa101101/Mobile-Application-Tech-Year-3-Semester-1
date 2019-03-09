var home = `
    <header class="fill">
        <table class="fill" style="height: 80px;">
            <tr>
                <td style="width: 80%; padding: 0 10px;">
                    <input id="searchbar" type="number" onkeyup="replaceIcon(this.value);" style="border: 0px solid; border-bottom: 1px solid #6EB5CB; color: #6EB5CB; background: none; padding: 3px 5px; width: 100%;" placeholder="ITEM BARCODE" data-role="none">
                </td>
                <td style="padding: 0 10px 0 0;">
                    <button id="searchBtn" onclick="searchBarcode($('#searchbar').val(), true)" style="background-color: #6EB5CB; float: right; width: 50px; height: 30px; border: 1px solid lightgray; padding: 2px 0 0 0 ; border: 1px solid lightgray;" class="browser-default" data-role="none">
                        <img id="searchBtnImg" src="img/camera.png" style="width: 25px;">
                    </button>
                </td>
            </tr>
        </table>
    </header>
    <section id="savedProductsSection" class="fill" style="height: calc(100vh - 80px); overflow-y: auto;">
        <table class="fill" style="height: 100%;">
            <tr>
                <td style="text-align: center; opacity: 0.09;">
                    <img src="img/list.png" style="width: 50px;"> 
                    <br>
                    <span>Saved Products will Show Here</span>
                </td>
            </tr>
        </table>
        <div class="card" style="display: none;" onclick="loadProduct({})">
            <table class="fill" style="height: 60px;">
                <tr>
                    <td style="padding: 6px 0 0 3px;">
                        <img style="width: 60px; border: 1px solid #F2F2F2;" src="https://images.barcodelookup.com/386/3865395-1.jpg">
                    </td>
                    <td>
                        <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0px; width: calc(100% - 80px);">
                            <span style="font-size: ; color: gray;">WIde riked bo asd sad asd oks</span>
                        </div>  
                    </td>
                </tr>
            </table>
        </div>
    </section>
    <table id="loader" style="width: 100%; display: none; height: 100vh; position: fixed; top: 0; left: 0; background-color: black; opacity: 0.6; z-index: 4;">
        <tr>
            <td style="text-align: center;">
                <div>                    
                    <img src="img/loading.gif" style="width: 50px; opacity: 0.7;">
                    <br>
                    <span style="padding: 0 0 0 5px; color: gray;">Loading..</span>                    
                </div>
            </td>
        </tr>
    </table>    
`;

$("#home").html(home);

if(typeof(localStorage["ProductWizard"]) == "undefined"){
    localStorage["ProductWizard"] = "{}";
}


const replaceIcon = function(value){
    if(value.length == 0){
        $("#searchBtnImg").attr("src", "img/camera.png");
        $("#searchBtn").attr("onclick", "searchBarcode($('#searchbar').val(), true)");
    }
    else{
        $("#searchBtnImg").attr("src", "img/search.png");
        $("#searchBtn").attr("onclick", "searchBarcode($('#searchbar').val(), false)");
    }
}

setInterval(function(){
    replaceIcon($("#searchbar").val());
}, 1000);

$("#searchbar").on("change", function(){
    replaceIcon($("#searchbar").val());
});

const readNutritionalFacts = function(barcode){
    return new Promise(function(resolve, reject){
        queryDatabase([barcode]).then(function(nutritionFacts){
            $("#isConsumable").prop("checked", false);
            $("#nutFactsTable").toggle(false);
            if(nutritionFacts == null){
                $(".nutFactsUpdateField").html("?");
                $("#consumableCheck").toggle(true);
                resolve(false);
            }
            else{
                checkIfConsumable = true;
                for(var x in nutritionFacts){
                    $("#"+x).html(nutritionFacts[x]);
                    if(typeof(fieldLabelMapper[x]) != "undefined" && checkIfConsumable){
                        if((nutritionFacts[x] != "?" && nutritionFacts[x] != "")){
                            $("#nutFactsTable").toggle(true);
                            $("#consumableCheck").toggle(false);
                            checkIfConsumable = false;
                        }
                    }                    
                }
                resolve(nutritionFacts);                
            }
        });
    });
}

function textAreaAdjust(o) {
    o.style.height = "1px";
    o.style.height = (25+o.scrollHeight)+"px";
}

const loadProduct = function(productObj){
    try{
        productObj = JSON.parse(productObj);
    }
    catch(err){
        if(typeof(productObj) == "string"){
            $("#deleteIcon").toggle(true);
            var params = JSON.parse(atob(productObj));
            productObj = {
                "product": params[0],
                "origin": params[1],
                "unit": params[2],
                "description": params[3],
                "barcode": params[4],
                "image": "data:image/jpeg;base64,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"
            };
            var nutritionFacts = JSON.parse(localStorage["ProductWizard"])[productObj["barcode"]];
            var checkIfConsumable = true;
            for(var x in nutritionFacts){
                $("#"+x).html(nutritionFacts[x]);
                $("#"+x).val(nutritionFacts[x]);
                if(typeof(fieldLabelMapper[x]) != "undefined" && checkIfConsumable){
                    if((nutritionFacts[x] != "?" && nutritionFacts[x] != "")){
                        $("#nutFactsTable").toggle(true);
                        $("#consumableCheck").toggle(false);
                        checkIfConsumable = false;
                    }
                }
            }                      
            $("#productImageHolder").attr("src", productObj["image"]);
            $(".headingLabelFieldsItemUpdate").prop("disabled", "disabled");
            $("#productDecsriptionHolder").prop("disabled", "");
            currentBarcode = productObj["barcode"];
            JsBarcode("#bcode").options({background: "#F9F9F9"}).EAN13(currentBarcode, {fontSize: 18, textMargin: 0}).render();
            $.mobile.navigate("#details", {
                "transition":"slide"
            });            
            return;
        } 
        else{
            $("#deleteIcon").toggle(false);
        }
    }
    readNutritionalFacts(productObj["barcode"]).then(function(data){
        if(productObj["product"] == "" || typeof(productObj["product"]) == "undefined"){
            //PRODUCT NOT FOUNT ON WEBSITE'S DATABASE
            //RESULT FROM FIREBASE WOULD ALWAYS BE EDITABLE BY THE USERS OF THE APP,
            //WHICH IS WHY THE FIELDS HAVE BEEN ENABLED
            if(typeof(data) != "boolean"){
                $("#productNameHolder").val(data["productNameHolder"]);
                $("#productOriginHolder").val(data["productOriginHolder"]);
                $("#productUnitHolder").val(data["productUnitHolder"]);
                $("#productDecsriptionHolder").val(data["productDecsriptionHolder"]); 
            }
            else{
                //EMPTY FIELDS
                $(".headingLabelFieldsItemUpdate").prop("disabled", "");
                $(".headingLabelFieldsItemUpdate").val('');
                toastMessageBottomShort("Product not registered. Enter the new product's information");
                $("#productDecsriptionHolder").val(productObj["description"]);
            }

            $($(".headingLabelFieldsItemUpdate")[x]).prop("disabled", "");
        }
        else{
            //PRODUCT FOUND ON WEBSITE'S DATABASE, DISABLE HEADING FIELDS
            //USER IS STILL ABLE TO EDIT THE PRODUCT'S NUTRITIONAL FACTS HOWEVER
            $("#productNameHolder").val(productObj["product"]);
            $("#productOriginHolder").val(productObj["origin"]);
            $("#productUnitHolder").val(productObj["unit"]);                   
            $(".headingLabelFieldsItemUpdate").prop("disabled", "disabled");    
        }        
        //PRODUCT DESCRIPTION IS ALWAYS EDITABLE
        $("#productDecsriptionHolder").prop("disabled", "");
        //EXPANDS DESCRIPTION BOX IF OVERFLOWED
        $("#productDecsriptionHolder").keyup();
        //INSERTS PRODUCT'S IMAGE
        $("#productImageHolder").attr("src", productObj["image"]);
        $("#loader").toggle(false); 
        currentBarcode = productObj["barcode"];
        JsBarcode("#bcode").options({background: "#F9F9F9"}).EAN13(currentBarcode, {fontSize: 18, textMargin: 0}).render();        
        if($("#loader").css("display") == "none"){
            $.mobile.navigate("#details", {
                "transition":"slide"
            });            
        }
        else{
            setTimeout(function(){
                $.mobile.navigate("#details", {
                    "transition":"slide"
                });     
            }, 500);  
        }      
    }).catch(function(err){
        alert(err);
    });
}


var currentBarcode = "";

const searchBarcode = function(barcode, bool){
    new Promise(function(resolve, reject){
        if(bool){
            //SCAN BARCODE
            scanBarcode().then(function(barcode){
                resolve(barcode);
            });
        }
        else{
            //BARCODE PROVIDED
            if(isNaN(barcode) || barcode.length < 12 || barcode.length > 13){
                toastMessageBottomShort("Please enter a valid EAN-13 barcode");
                $("#searchbar").focus();
                return;
            }            
            resolve(barcode);
        }
    }).then(function(barcode){
        currentBarcode = barcode;
        if(barcode.length > 0)
            $("#loader").toggle(true);

            var info = {
                "barcode": barcode,
                "product":"",
                "origin":"",
                "unit":"",
                "image":"",
                "description":""          
            };

            if(typeof(localStorage[barcode]) != "undefined"){
                //ITEM IS SAVED TO THE DATABASE
                for(var x = 0; x < $(".cards").length; x++){
                    if($("#pid"+barcode, $(".cards")[x]) != null){
                        $($(".cards")[x]).click();
                        break;
                    }
                }
            }
            else{
                $.ajax({
                    "url": "https://upcitemdb.com/upc/"+barcode,
                    "type":"GET",
                    "success":function(response){
                        var dom = $.parseHTML(response);
    
                        if(typeof($(".detailtitle b", dom)) != "undefined")
                            info["product"] = $(".detailtitle b", dom).html();
                        else
                            info["product"] = "";
        
                        for(var x = 0; x < $("td", dom).length; x++){
                            if($($("td", dom)[x]).html().indexOf("Country of Registration") > -1)
                                info["origin"] = $($("td", dom)[x+1]).html();
                            
                            if($($("td", dom)[x]).html().indexOf("Weight") > -1)
                                info["unit"] = $($("td", dom)[x+1]).html();
                            
                            if($($("td", dom)[x]).html().indexOf("Color") > -1)
                                info["description"] = $($("td", dom)[x+1]).html();
                        }            
                        
                        if(info["description"] == "")
                            info["description"] = "Product Description Not Available";  
                            
                        if(info["image"] == "")
                            info["image"] = "data:image/jpeg;base64,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";
                       
                        loadProduct(info);
                    },
                    "error": function (x, y, z) {
                        if (x.status == 0) {
                            alertUser("Please enable internet connectivity and try again", function(){}, "Not Connected", "OK")
                            $("#loader").toggle(false);
                        }
                       else{
                            if(info["image"] == "")
                                info["image"] = "data:image/jpeg;base64,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";                       
                            $("#loader").toggle(false);                        
                            loadProduct(info);
                        }
                    }                    
                });
            }

    }).catch(function(err){
        toastMessageBottomShort("An unknown error occurred")
    });    
}


const createSavedItemCard = function(productName, productOrigin, productUnit, productDescription, barcode){
    productObj = btoa('["'+productName+'","'+productOrigin+'","'+productUnit+'","'+productDescription+'", "'+barcode+'"]');
    return `    <div id="pid`+barcode+`" class="card" onclick="loadProduct('`+productObj+`')">
                    <table class="fill" style="height: 60px;">
                        <tr>
                            <td style="padding: 6px 0 0 3px; width: 67px;">
                                <img style="width: 60px; border: 1px solid #F2F2F2;" src="data:image/jpeg;base64,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">
                            </td>
                            <td style="padding: 0 3px; overflow: hidden; text-align: left;">
                                <div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0px; width: calc(100% - 80px);">
                                    <span style="font-size: ; color: gray;">`+productName+`</span>
                                </div>  
                            </td>
                        </tr>
                    </table>
                    <div style="position: absolute; right: 0; top: 0; background-color: inherit; width: 50px; height: 100%;"></div>
                </div>`;
}

const loadSavedProducts = function(){
    new Promise(function(resolve, reject){
        var savedProducts = JSON.parse(localStorage["ProductWizard"]);
        var checkLength = true;
        var placeholder = ` <table class="fill" style="height: 100%;">
                                <tr>
                                    <td style="text-align: center; opacity: 0.09; padding: 0 0 50px 0;">
                                        <img src="img/list.png" style=" width: 50px;"> 
                                        <br>
                                        <span>Saved Products will Show Here</span>
                                    </td>
                                </tr>
                            </table>
                           `;
        for(var x in savedProducts){
            if(checkLength){
                $("#savedProductsSection").html(`
                            <div id="copyListBtn" class="theme" style="position: fixed; border-radius: 100px; bottom: 20px; right: 20px; width: 55px; height: 55px; border: 1px solid lightgray; box-shadow: 0px 2px #F0F0F0; z-index: 3;" onclick="shareText(localStorage['ProductWizard'], 'Share Database');">
                                <table class="fill" style="height: 100%;">
                                    <tr>
                                        <td style="text-align: center; padding: 6px 3px 0 0;">
                                            <img src="img/share.png" style="width: 24px; height: 24px;">
                                        </td>
                                    </tr>
                                </table>     
                            </div>                
                `);
                checkLength = false;
            }
            $("#savedProductsSection").append(createSavedItemCard(savedProducts[x]["productNameHolder"], savedProducts[x]["productOriginHolder"], savedProducts[x]["productUnitHolder"], savedProducts[x]["productDecsriptionHolder"], x));
        }
        if(checkLength){
            $("#savedProductsSection").html(placeholder);
        }
        else{
            $("#savedProductsSection").append("<div style='height: 90px;'></div>");
        }
    });
};


loadSavedProducts();

