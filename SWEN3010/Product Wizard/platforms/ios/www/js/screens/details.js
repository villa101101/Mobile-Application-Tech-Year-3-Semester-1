var details = `
    <header class="theme" style="width: 100%; height: 55px; position: fixed; box-shadow: 0 2px #E4E4E4; z-index: 1;">
        <table class="fill" style="height: 50px;">
            <tr>
                <td style="padding: 11px 0 0 3px; width: 35px;">
                    <img src="img/back.png" style="width: 30px;" onclick="window.history.back();" style="cursor: pointer;">
                </td>
                <td style="padding: 7px 0 0 0;">
                    <span style="color: white;font-family: arial;">Product Summary  <span>
                </td>
                <td>
                    <img id="deleteIcon" src="img/remove.png" style="width: 27px; display: none; float: right; margin: 7px 7px 0 0;" onclick="removeProduct();">
                </td>
            </tr>
        </table>
    </header>
    <section class="fill" style="height: calc(100vh - 100px); overflow: auto; margin: 55px 0 0 0;">
        <!--<div class="fill">
            <button style="background-color: #EB4646; color: white; border: 1px solid lightgray; padding: 3px 5px; border-radius: 5px; width: calc(100% - 20px); margin: 10px 0 0 10px;" onclick="removeProduct();" data-role="none">REMOVE</button>
        </div>-->
        <div class="fill" style="text-align: center; padding: 10px 0 4px 0; background-color: #F7F7F7; margin: 30px 0 5px 0;">
            <div style="display: inline-block;">
                <img id="productImageHolder" style="border: 1px solid lightgray; width: 90px; height: 90px; float: left; background-color: white;">
            </div>
        </div>
        <table class="fill">
            <tr>
                <td class="detailsHeading" style="padding: 0 0 0 10px;">
                    <span>Product Name</span>
                </td>
            </tr>
            <tr>
                <td class="detailsBody">
                    <textarea id="productNameHolder" class="headingLabelFieldsItemUpdate" placeholder="Unknown Product" onkeyup="textAreaAdjust(this);" style="float: left;height: 20px;  width: calc(100% - 20px); background-color: transparent; border: none; max-height: 65px; overflow: auto;" data-role="none" value="Product Name"></textarea>
                </td>
            </tr>
            <tr>
                <td class="detailsHeading">
                    <span>Origin</span>
                </td>
            </tr>
            <tr>
                <td class="detailsBody">
                    <input id="productOriginHolder" class="headingLabelFieldsItemUpdate" placeholder="Unknown Product Origin" style="background-color: transparent; border: none;" data-role="none">
                </td>
            </tr>
            <tr>
                <td class="detailsHeading">
                    <span>Unit</span>
                </td>
            </tr>
            <tr>
                <td class="detailsBody">
                    <input id="productUnitHolder" class="headingLabelFieldsItemUpdate" placeholder="Unknown Product Unit" style="background-color: transparent; border: none;" data-role="none">
                </td>
            </tr>
            <tr>
                <td class="detailsHeading" style="padding: 20px 0 0 10px;">
                    <span>Description</span>
                </td>
            </tr>
            <tr>
                <td class="detailsBody">
                    <textarea id="productDecsriptionHolder" class="headingLabelFieldsItemUpdate" placeholder="Enter Product Description Here" onkeyup="textAreaAdjust(this);" style=" width: calc(100% - 20px); background-color: transparent; border: none; font-size: 12px; float: left; max-height: 165px; overflow: auto;" data-role="none"></textarea>
                </td>
            </tr>
            <tr>
                <td class="detailsBody" style="text-align: center; padding: 0;">
                    <div style="display: inline-block;">
                        <svg id="bcode" style="float: left; width: 100%; padding: 0; margin: 0 0 0 -20px;"></svg>
                    </div>
                </td>
            </tr>
            <tr>
                <td class="detailsHeading" style="padding: 20px 0 0 10px;">
                    <table id="consumableCheck">
                        <tr>
                            <td>
                                <input id="isConsumable" type="checkbox" data-role="none" onclick="showFacts()">
                            </td>
                            <td>
                                <span>Consumable?</span>          
                            </td>
                        </tr>
                    </table>
                    
                </td>
            </tr>
        </table>

        <div id="nutFactsTable" class="fill" style="display: none; text-align: center; padding: 14px 0 0 0;">
            <div id="nutFactsTableChild" style="display: inline-block; border: 1px solid gray; padding: 6px 4px;">
                <table style="width: 248px; line-height: 16px;">
                    <tr>
                        <td colspan="2" style="text-align: left; padding: 0 0 0 0px; border-bottom: 3px solid black;">
                            <span style="font-size: 26px; font-weight: bold;">Nutrition Facts</span>
                            <br>
                            <span style="font-size: 12px;">Serving Size </span><span id="nutFactsServingSize" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                            <br>
                            <span style="font-size: 12px;">Servings Per Container </span><span id="nutFactsServings" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: left; border-bottom: 1px solid lightgray;">
                            <span style="font-size: 10px; font-weight: bold;">Amount Per Serving</span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="width: 30%; text-align: left; border-bottom: 2px solid black; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold; float: left;">Calories <span id="nutFactsCalories" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span></span>
                            <span style="font-size: 12px; float: right; padding: 0 3px 0 0;">Calories from Fat <span id="nutFactsCaloriesFat" class="nutFactsUpdateField" style="font-size: 12px;">?</span></span>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" style="text-align: right; border-bottom: 1px solid lightgray;">
                            <span style="font-size: 10px; font-weight: bold;">% Daily Values</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold;">Total Fat </span><span id="nutFactsTotalFat" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsTotalFatPercentage" class="nutFactsUpdateField">?</span><span>%</span>
                        </td>
                    </tr>  
                    <tr>
                        <td style="width: 80%; text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: normal; padding: 0 0 0 20px;">Saturated Fat </span>
                            <span id="nutFactsSaturatedFat" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsSaturatedFatPercentage" class="nutFactsUpdateField">?</span><span>%</span>
                        </td>
                    </tr>    
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: normal; padding: 0 0 0 20px;">Trans Fat </span>
                            <span id="nutFactsTransFat" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsTransFatPercentage" class="nutFactsUpdateField">?</span><span>%</span>
                        </td>
                    </tr>  
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold;">Cholesterol </span>
                            <span id="nutFactsCholesterol" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsCholesterolPercentage" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold;">Sodium </span>
                            <span id="nutFactsSodium" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsSodiumPercentage" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold;">Total Carbohydrate </span>
                            <span id="nutFactsTotalCarbohydrates" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsTotalCarbohydratesPercentage" class="nutFactsUpdateField">?</span><span>%</span>
                        </td>
                    </tr>    
                    <tr>
                        <td colspan="2" style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: normal; padding: 0 0 0 20px;">Dietary Fiber </span>
                            <span id="nutFactsTotalCarbohydratesDietaryFiber" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span>
                        </td>
                    </tr>    
                    <tr>
                        <td colspan="2" style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: normal; padding: 0 0 0 20px;">Sugars </span>
                            <span id="nutFactsTotalSugars" class="nutFactsUpdateField" style="font-size: 12px; font-weight: normal;">?</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border-bottom: 3px solid black; font-size: 12px;">
                            <span style="font-size: 12px; font-weight: bold;">Protein </span>
                            <span id="nutFactsTotalProtein" class="nutFactsUpdateField" style="font-size: 12px;">?</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 3px solid black;">
                            <span id="nutFactsTotalProteinPercentage" class="nutFactsUpdateField">?</span><span>%</span>
                        </td>
                    </tr>
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin A</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminA" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin B6</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminB6" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin B12</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminB12" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin C</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminC" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin D</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminD" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin E</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminE" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr> 
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Vitamin K</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsVitaminK" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr>                                        
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Iron</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsIron" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr>                   
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Calcium</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsCalcium" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr>                
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Zinc</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsZinc" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr>              
                    <tr>
                        <td style="text-align: left; border-bottom: 1px solid lightgray; font-size: 12px;">
                            <span style="font-size: 12px;">Potassium</span>
                        </td>
                        <td style="text-align: right; font-size: 12px; font-weight: bold; border-bottom: 1px solid lightgray;">
                            <span id="nutFactsPotassium" class="nutFactsUpdateField">?</span><span>%</span>    
                        </td>
                    </tr>                   
                    <tr>
                        <td colspan="2" style="text-align: left; line-height: 9px;">
                            <span style="font-size: 9px;">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</span>
                            <table class="fill" style="width: 100%; margin: 4px 0 0 0;">
                                <thead style="border-bottom: 1px solid lightgray;">
                                    <tr>
                                        <td style="width: 42%; font-size: 9px; text-align: center;">

                                        </td>
                                        <td style="width: 24%; font-size: 9px; text-align: center;">
                                            <span>Calories</span>
                                        </td>
                                        <td style="width: 18%; font-size: 9px; text-align: center;">
                                            <span>2,000</span>
                                        </td>
                                        <td style="width: 18%; font-size: 9px; text-align: center;">
                                            <span>2,500</span>
                                        </td>
                                    </tr>  
                                </thead>    
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span>Total Fat</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalFat2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalFat2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>   
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span style="padding: 0 0 0 4px;">Sat Fat</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercSaturatedFat2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercSaturatedFat2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span>Cholestorol</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercCholestorol2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercCholestorol2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span>Sodium</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercSodium2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercSodium2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span>Total Carbohydrate</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalCarbohydrates2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalCarbohydrates2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>  
                                <tr>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span style="padding: 0 0 0 4px;">Dietary Fibre</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left; ">
                                        <span>Less Than</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalDietaryFiber2000" class="nutFactsUpdateField">?</span>
                                    </td>
                                    <td style="font-size: 9px; text-align: left;">
                                        <span id="nutFactsPercTotalDietaryFiber2500" class="nutFactsUpdateField">?</span>
                                    </td>
                                </tr>                                
                            </table>
                        </td>
                    </tr>                                                                                          
                </table>            
            </div>
            <div class="fill">
                <div class="theme" style="width: 248px; display: inline-block; border: 2px solid lightgray; border-radius: 5px; margin: 3px 0 0 0;">
                    <table class="fill">
                        <tr>
                            <td style=" width: 75%; font-weight: normal; padding: 4px 0 0 6px; text-align: left;">
                                <span style="color: white;">Edit</span>
                            </td>
                            <td>
                                <table style="width: 80px; float: right; margin: 6px 0 0 0;">
                                    <tr>
                                        <td style="width: 50%;">
                                            <button onclick="navigateFields(false);" class="theme" data-role="none" style="float: left; border-radius: 4px; height: 30px; width: 30px; border: 1px solid white; color: white;"><</button>
                                        </td>
                                        <td style="width: 50%;">
                                            <button id="nextBtn" onclick="navigateFields(true);" class="theme" data-role="none" style="float: left; border-radius: 4px;height: 30px; width: 30px; border: 1px solid white; color: white;">></button>
                                        </td>                                    
                                    </tr>
                                </table>
                            </td>
                        </tr> 
                        <tr>
                            <td style="font-weight: normal; padding: 7px 0 0 6px;">
                                <input id="updateNutFactField" style="background: none; border: none; border-bottom: 2px solid; color: white; padding: 3px 5px; float: left; width: 140px;" data-role="none" placeholder="value">
                            </td>
                            <td style="text-align: center; padding: 4px 0 0 0;">
                                <button onclick="setChanges();" class="theme" style="display: inline-block; border: 1px solid white; color: white; border-radius: 4px;" data-role="none">set</button>
                            </td>
                        </tr>                    
                        <tr>
                            <td colspan="2" style="padding: 15px 0 0 0;">
                                <button onclick="writeChanges();" class="theme" data-role="none" style="float: left; font-size: 14px; border-radius: 4px; height: 30px; border: 1px solid white; color: white; width: calc(100% - 8px); margin: 0 0 4px 4px;">
                                    <div style="display: inline-block; padding: 2px 0;">
                                        <table>
                                            <tr>
                                                <td>
                                                    <img src="img/update.png" style="width: 20px;">            
                                                </td>
                                                <td style="padding: 0 0 5px 3px;">
                                                    update            
                                                </td>
                                            </tr>
                                        </table>                                
                                    </div>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>            
            </div>
        </div>
        <div id="footPadding" class="fill" style="height: 20px;"></div>
    </section>
    <footer style="position: fixed; bottom: 0; left: 0; z-index: 1; width: 100%; height: 45px; text-align: center; background-color: white;">
        <button onclick="saveProduct();" class="theme" data-role="none" style="cursor: pointer; width: 90%; display: inline-block; border: 2px solid lightgray; padding: 0 0 0 0; height: 40px; color: white;">
            <div style="display: inline-block;">
                <table>
                    <tr>
                        <td style="padding: 5px 0 0 0;">
                            <img src="img/save.png" style="width: 23px;">
                        </td>
                        <td style="padding: 2px 0 0 0;">
                            <span>save</span>
                        </td>
                    </tr>
                </table>            
            </div>
        </button>
    </footer>
`;  

$("#details").html(details);

setInterval(function(){
    if($("#productNameHolder").val() == ""){
        $("#productNameHolder").css("height", "20px");
    }
}, 1000);

const showFacts = function(){
    if($("#isConsumable").is(":checked")){
        $("#nutFactsTable").slideToggle(1000);      
        setTimeout(function(){
            $('section').animate({
                scrollTop: 1000
            }, 1000); 
            toastMessageBottomShort("Enter the nutrition facts as shown on product label");
        },0);
    }
    else
        $("#nutFactsTable").slideToggle(200);
}


const fieldLabelMapper = { 
    nutFactsServingSize: 'Serving Size',
    nutFactsServings: 'Servings',
    nutFactsCalories: 'Calories',
    nutFactsCaloriesFat: 'Calories From Fat',
    nutFactsTotalFat: 'Total Fat',
    nutFactsTotalFatPercentage: 'Total Fat Percentage',
    nutFactsSaturatedFat: 'Saturated Fat',
    nutFactsSaturatedFatPercentage: 'Saturated Fat Percentage',
    nutFactsTransFat: 'Trans Fat',
    nutFactsTransFatPercentage: 'Trans Fat Percentage',
    nutFactsCholesterol: 'Cholesterol',
    nutFactsCholesterolPercentage: 'Cholesterol Percentage',
    nutFactsSodium: 'Sodium',
    nutFactsSodiumPercentage: 'Sodium Percentage',
    nutFactsTotalCarbohydrates: 'Total Carbohydrates',
    nutFactsTotalCarbohydratesPercentage: 'Total Carbohydrates Percentage',
    nutFactsTotalCarbohydratesDietaryFiber: 'Dietary Fiber',
    nutFactsTotalSugars: 'Sugars',
    nutFactsTotalProtein: 'Protein',
    nutFactsTotalProteinPercentage: 'Protein Percentage',
    nutFactsVitaminA: 'Vitamin A',
    nutFactsVitaminB6: 'Vitamin B6',
    nutFactsVitaminB12: 'Vitamin B12',
    nutFactsVitaminC: 'Vitamin C',
    nutFactsVitaminD: 'Vitamin D',
    nutFactsVitaminE: 'Vitamin E',
    nutFactsVitaminK: 'Vitamin k',
    nutFactsIron: 'Iron',
    nutFactsCalcium: 'Calcium',
    nutFactsZinc: 'Zinc',
    nutFactsPotassium: 'Potassium',
    nutFactsPercTotalFat2000: 'Total Fat 2000',
    nutFactsPercTotalFat2500: 'Total Fat 2500',
    nutFactsPercSaturatedFat2000: 'Saturated Fat 2000',
    nutFactsPercSaturatedFat2500: 'Saturated Fat 2500',
    nutFactsPercCholestorol2000: 'Cholesterol 2000',
    nutFactsPercCholestorol2500: 'Cholesterol 2500',
    nutFactsPercSodium2000: 'Sodium 2000',
    nutFactsPercSodium2500: 'Sodium 2500',
    nutFactsPercTotalCarbohydrates2000: 'Total Carbohydrates 2000',
    nutFactsPercTotalCarbohydrates2500: 'Total Carbohydrates 2500',
    nutFactsPercTotalDietaryFiber2000: 'Dietary Fiber 2000',
    nutFactsPercTotalDietaryFiber2500: 'Dietary Fiber 2500' 
};

var fields = [];

for(var x in fieldLabelMapper){
    fields.push(x);
}


const mainFieldsLabelMapper = [
    "productNameHolder",
    "productOriginHolder",
    "productUnitHolder",
    "productDecsriptionHolder" 
];


var cnt = -1;
const navigateFields = function(direction){
    if(direction){
        //NEXT
        if(cnt < fields.length)
            cnt++;
    }
    else{
        //PREVIOUS
        if(cnt > -1)
            cnt--;
    }
    $(".nutFactsUpdateField").css("border", "none");
    $("#"+fields[cnt]).css("border", "1px solid red");
    $("#updateNutFactField").attr("placeholder", fieldLabelMapper[fields[cnt]]);
}


const setChanges = function(){
    $(".nutFactsUpdateField").css("border", "none");
    $("#"+fields[cnt]).html($("#updateNutFactField").val());
    toastMessageBottomShort("Information Set");
}


const createProductObject = function(){
    var result = {};
    for(var x = 0; x < fields.length; x++){
        result[fields[x]] = $("#"+fields[x]).html();
    }
    for(var x = 0; x < mainFieldsLabelMapper.length; x++){
        result[mainFieldsLabelMapper[x]] = $("#"+mainFieldsLabelMapper[x]).val();
    }
    return result;
}


const writeChanges = function(){
    writeDatabase([currentBarcode], createProductObject()).then(function(bool){
        if(bool)
            toastMessageBottomShort("Product Information Updated Successfully");
    });
}

const saveProduct = function(){
    new Promise(function(resolve, reject){
        var savedProducts = JSON.parse(localStorage["ProductWizard"]);
        savedProducts[currentBarcode] = createProductObject();
        localStorage["ProductWizard"] = JSON.stringify(savedProducts);
        toastMessageBottomShort("Product information saved to this device");
        loadSavedProducts();
    });
}

const removeProduct = function(){
    confirmUser("Are you sure you want to remove this item?", function(choice){
        if(choice == 2){
            //CANCEL
        }
        else{
            //REMOVE CONFIRMATION
            var savedProducts = JSON.parse(localStorage["ProductWizard"]);
            delete savedProducts[currentBarcode];
            localStorage["ProductWizard"] = JSON.stringify(savedProducts);
            toastMessageBottomShort("Removed Successfully");
            loadSavedProducts();
            setTimeout(function(){
                window.history.back();    
            }, 500);            
        }
    }, "Remove", ["OK", "CANCEL"]);
};