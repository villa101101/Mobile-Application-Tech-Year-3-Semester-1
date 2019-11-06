person1 = ""; //player 1
person2 = ""; //player 2
person3 = ""; //player 3
person4 = ""; // player 4
entryplayers = 0; //number of players that want to sign up
numberOfPlayers = 0; //number of persosn actually playing the game
postionInGame = 1; //which player turn it is 
legalPlay = false; //if there is a legal turn
legalGame = false; //if there is a game in progress
picker = false; //if the player as the option to choose a title at the current moment


//identifes which grid and button is selected and shows S or O on the grid
($('.grid-item').click(function () {
if (legalGame == true){
    if (picker == false){
        alert("You made a move already!");
    } else{
            //makes all the border colors black
            for (var i= 0; i<50; i++){
                var tile = document.getElementById(i);
                $(tile).css('borderColor','black');
            }
                cur = this.id;    
            document.getElementById(cur).style.borderColor = "yellow";

            //if the user selects the button with S
            if($('#sos1').click(function(){
                //determines if the tile was previous used as a selection
                if($('#'+cur).css("backgroundColor") ==  $('#standardGridCol').css("backgroundColor")){
                    
                } else {
                    //checks if the tile is already apart of a SOS
                    if($('#'+cur).css("backgroundColor") != $('#standardCol').css("backgroundColor") ){
                        document.getElementById(cur).style.backgroundColor = "#AFDCE1";
                        // $('#'+cur+'>p').html('S');
                        $("P", "#"+cur).html('S');
                        legalPlay = true;
                        picker = false;
                        next();
                    }
                
                
                }   }));
        
            //if the user selects the button with O
            if($('#sos2').click(function(){
                if($('#'+cur).css("backgroundColor") ==  $('#standardGridCol').css("backgroundColor")){
                
                } else {
                    if($('#'+cur).css("backgroundColor") != $('#standardCol').css("backgroundColor") ){
                        document.getElementById(cur).style.backgroundColor = "#AFDCE1";
                        $("P", "#"+cur).html('O');
                        legalPlay = true;
                        picker = false;
                        next();
                    }
        
            
            
            }   }));
        }
    } else{ alert("No Game In Progress!");}
    
    
}));

//displays the start game page
($('#new').click(function () {
    var modal = document.getElementById('newGame')
    $('#p1').val('')
    $('#p2').val('')
    $('#p3').val('')
    $('#p4').val('')
    modal.style.display = "block";

}));

var span = document.getElementsByClassName("close")[0];

//when the x on the start game page is clicked the page closes
span.onclick = function() {
    var modal = document.getElementById('newGame')
    modal.style.display = "none";
}

//when outside the start game page is click the page closes
window.onclick = function(event) {
    var modal = document.getElementById('newGame')
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//option to enter players details are hidden
window.onload = function() {
    document.getElementById('pr2').style.display = 'none';
    document.getElementById('pr3').style.display = 'none';
    document.getElementById('pr4').style.display = 'none';
    document.getElementById('button').style.display = 'none';

  };

//give users the option to enter two players
function show2(){
    document.getElementById('pr2').style.display = 'block';
    document.getElementById('pr3').style.display = 'none';
    document.getElementById('pr4').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    entryplayers = 2;
}

//gives users the option to emter three players
function show3(){
    document.getElementById('pr2').style.display = 'block';
    document.getElementById('pr3').style.display = 'block';
    document.getElementById('pr4').style.display = 'none';
    document.getElementById('button').style.display = 'block';
    entryplayers = 3;
}

//gives users the option to enter three players
function show4(){
    document.getElementById('pr2').style.display = 'block';    
    document.getElementById('pr3').style.display = 'block';
    document.getElementById('pr4').style.display = 'block';   
    document.getElementById('button').style.display = 'block';
    entryplayers = 4;
}

//starts game
function startGame(){

    if (checkValidity() == true )
    {
        person1 = document.getElementById('p1').value
        person2 = document.getElementById('p2').value
        person3 = document.getElementById('p3').value
        person4 = document.getElementById('p4').value

        document.getElementById('curplayer1').innerHTML = person1;
        document.getElementById('curplayer2').innerHTML = person2;
        document.getElementById('curplayer3').innerHTML = person3;
        document.getElementById('curplayer4').innerHTML = person4;

        //all the scores are changed changed to empty
        document.getElementById('score1').innerHTML = "";
        document.getElementById('score2').innerHTML = "";
        document.getElementById('score3').innerHTML = "";
        document.getElementById('score4').innerHTML = "";

        document.getElementById('currentPlayer').innerHTML = person1;
        legalGame = true;
        picker = true;

        //calculates the number of players in a the game
        if (person4 == '' && person3 != ''){
            numberOfPlayers = 3;
        } else if (person3 == ''){
            numberOfPlayers = 2;
        } else {
            numberOfPlayers = 4;
        };

        //assigns each player a score of zero when the game starts
        if(numberOfPlayers == 2){
            document.getElementById('score1').innerHTML = 0;
            document.getElementById('score2').innerHTML = 0;  
        } else if (numberOfPlayers == 3){
            document.getElementById('score1').innerHTML = 0;
            document.getElementById('score2').innerHTML = 0;    
            document.getElementById('score3').innerHTML = 0;
        } else if (numberOfPlayers == 4){
            document.getElementById('score1').innerHTML = 0;
            document.getElementById('score2').innerHTML = 0;    
            document.getElementById('score3').innerHTML = 0;
            document.getElementById('score4').innerHTML = 0;
        }

        var modal = document.getElementById('newGame')
        modal.style.display = "none";

        localStorage.clear();
        addDB();

        document.getElementById('lastResults').style.display = "none" ;

        var i;
        for( i=1; i<51; i++){
           var chan = document.getElementById(i);
            $(chan).css("background-color","#81dbeb");
            document.getElementById("t"+i).innerHTML = "  ";
        }     


    }else {
        alert("Please fill all fields")
    }
}

//checks if all the fields are filled when users are starting a new game
function checkValidity(){
    if(entryplayers == 2 && (document.getElementById('p1').value != "") && (document.getElementById('p2').value != "") ){
        return true
    }else if(entryplayers == 3 && (document.getElementById('p1').value != "") && (document.getElementById('p2').value != "") && (document.getElementById('p3').value != "") ){
        return true
    }else if (entryplayers == 4 && (document.getElementById('p1').value != "") && (document.getElementById('p2').value != "") && (document.getElementById('p3').value != "") && (document.getElementById('p4').value != "")){
        return true
    }else{
        return false
    }
}



//shows which player is next
function next () {

    detectTrio();

    if (legalGame == false){
        alert("Please start a new game")
    } else {

        if (legalPlay == false){
            alert("Please make a move");

        } else{

            if (postionInGame == 1){
                document.getElementById('currentPlayer').innerHTML = person2;
                postionInGame = 2;
                legalPlay = false;
                picker = true;
            } else if (postionInGame == 2) {
                if(numberOfPlayers == 2){
                    postionInGame = 1;
                    legalPlay = false;
                    picker = true;
                    document.getElementById('currentPlayer').innerHTML = person1;
                } else {
                    postionInGame = 3;
                    legalPlay = false;
                    picker = true;
                    document.getElementById('currentPlayer').innerHTML = person3;
                }
            } else if (postionInGame == 3) {
                if(numberOfPlayers == 3 ){
                    postionInGame = 1;
                    legalPlay = false;
                    picker = true;
                    document.getElementById('currentPlayer').innerHTML = person1;
                } else {
                    postionInGame = 4;
                    legalPlay = false;
                    picker = true;
                    document.getElementById('currentPlayer').innerHTML = person4;
                }
            } else {
                document.getElementById('currentPlayer').innerHTML = person1;
                legalPlay = false;
                picker = true;   
                postionInGame = 1;
            }    

            var t=0;
            for (var s=1; s<51; s++){
                var data = document.getElementById(s);
                if($(data).css("background-color") == $('#standardCol').css("background-color") || $(data).css("background-color") == $('#standardGridCol').css("background-color")  ){
                    t=t+1;                 
                } else {
                }
                
            }
            if(t==49){
                alert("Game over!");
                gameResults();
            }

        }
    }

    

};

//determine when there is a SOS
function detectTrio (){
    if($('#t2').text() == "O" && $('#t1').text() == "S" && $('#t3').text() == "S" && (($('#2').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#1').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('1').style.backgroundColor = "lightgreen";   
        document.getElementById('2').style.backgroundColor = "lightgreen";  
        document.getElementById('3').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t3').text() == "O" && $('#t2').text() == "S" && $('#t4').text() == "S" && (($('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#2').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('3').style.backgroundColor = "lightgreen";   
        document.getElementById('2').style.backgroundColor = "lightgreen";  
        document.getElementById('4').style.backgroundColor = "lightgreen"; 
        setPosition();

    }  if  ($('#t4').text() == "O" && $('#t3').text() == "S" && $('#t5').text() == "S" && (($('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('4').style.backgroundColor = "lightgreen";   
        document.getElementById('3').style.backgroundColor = "lightgreen";  
        document.getElementById('5').style.backgroundColor = "lightgreen"; 
        setPosition();

    }  if  ($('#t5').text() == "O" && $('#t4').text() == "S" && $('#t6').text() == "S" && (($('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#6').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('5').style.backgroundColor = "lightgreen";   
        document.getElementById('4').style.backgroundColor = "lightgreen";  
        document.getElementById('6').style.backgroundColor = "lightgreen"; 
        setPosition();

    }  if  ($('#t6').text() == "O" && $('#t5').text() == "S" && $('#t7').text() == "S" && (($('#6').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#7').css("backgroundColor") != $('#standardCol').css("backgroundColor"))) ){
        document.getElementById('6').style.backgroundColor = "lightgreen";   
        document.getElementById('5').style.backgroundColor = "lightgreen";  
        document.getElementById('7').style.backgroundColor = "lightgreen"; 
        setPosition();

    }  if  ($('#t8').text() == "O" && $('#t1').text() == "S" && $('#t15').text() == "S" && (($('#8').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#1').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('8').style.backgroundColor = "lightgreen";   
        document.getElementById('1').style.backgroundColor = "lightgreen";  
        document.getElementById('15').style.backgroundColor = "lightgreen"; 
        setPosition();

    }  if  ($('#t9').text() == "O" && $('#t1').text() == "S" && $('#t17').text() == "S" && (($('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#1').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('9').style.backgroundColor = "lightgreen";   
        document.getElementById('1').style.backgroundColor = "lightgreen";  
        document.getElementById('17').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t9').text() == "O" && $('#t2').text() == "S" && $('#t16').text() == "S" && (($('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#2').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('9').style.backgroundColor = "lightgreen";   
        document.getElementById('2').style.backgroundColor = "lightgreen";  
        document.getElementById('16').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t9').text() == "O" && $('#t3').text() == "S" && $('#t15').text() == "S" && (($('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('9').style.backgroundColor = "lightgreen";   
        document.getElementById('3').style.backgroundColor = "lightgreen";  
        document.getElementById('15').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t9').text() == "O" && $('#t8').text() == "S" && $('#t10').text() == "S" && (($('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#8').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('9').style.backgroundColor = "lightgreen";   
        document.getElementById('8').style.backgroundColor = "lightgreen";  
        document.getElementById('10').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t10').text() == "O" && $('#t3').text() == "S" && $('#t17').text() == "S" && (($('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('10').style.backgroundColor = "lightgreen";   
        document.getElementById('3').style.backgroundColor = "lightgreen";  
        document.getElementById('17').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t10').text() == "O" && $('#t4').text() == "S" && $('#t16').text() == "S" && (($('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('10').style.backgroundColor = "lightgreen";   
        document.getElementById('4').style.backgroundColor = "lightgreen";  
        document.getElementById('16').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t10').text() == "O" && $('#t11').text() == "S" && $('#t9').text() == "S" && (($('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('10').style.backgroundColor = "lightgreen";   
        document.getElementById('11').style.backgroundColor = "lightgreen";  
        document.getElementById('9').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t10').text() == "O" && $('#t18').text() == "S" && $('#t2').text() == "S" && (($('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#2').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('10').style.backgroundColor = "lightgreen";   
        document.getElementById('18').style.backgroundColor = "lightgreen";  
        document.getElementById('2').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t11').text() == "O" && $('#t4').text() == "S" && $('#t18').text() == "S" && (($('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('11').style.backgroundColor = "lightgreen";   
        document.getElementById('4').style.backgroundColor = "lightgreen";  
        document.getElementById('18').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t11').text() == "O" && $('#t5').text() == "S" && $('#t17').text() == "S" && (($('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('11').style.backgroundColor = "lightgreen";   
        document.getElementById('5').style.backgroundColor = "lightgreen";  
        document.getElementById('17').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t11').text() == "O" && $('#t12').text() == "S" && $('#t10').text() == "S" && (($('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('11').style.backgroundColor = "lightgreen";   
        document.getElementById('12').style.backgroundColor = "lightgreen";  
        document.getElementById('10').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t11').text() == "O" && $('#t19').text() == "S" && $('#t3').text() == "S" && (($('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('11').style.backgroundColor = "lightgreen";   
        document.getElementById('19').style.backgroundColor = "lightgreen";  
        document.getElementById('3').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t12').text() == "O" && $('#t5').text() == "S" && $('#t19').text() == "S" && (($('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('12').style.backgroundColor = "lightgreen";   
        document.getElementById('5').style.backgroundColor = "lightgreen";  
        document.getElementById('19').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t12').text() == "O" && $('#t6').text() == "S" && $('#t18').text() == "S" && (($('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#6').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('12').style.backgroundColor = "lightgreen";   
        document.getElementById('6').style.backgroundColor = "lightgreen";  
        document.getElementById('18').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t12').text() == "O" && $('#t13').text() == "S" && $('#t11').text() == "S" && (($('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('12').style.backgroundColor = "lightgreen";   
        document.getElementById('13').style.backgroundColor = "lightgreen";  
        document.getElementById('11').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t12').text() == "O" && $('#t20').text() == "S" && $('#t4').text() == "S" && (($('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#4').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('12').style.backgroundColor = "lightgreen";   
        document.getElementById('20').style.backgroundColor = "lightgreen";  
        document.getElementById('4').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t13').text() == "O" && $('#t6').text() == "S" && $('#t20').text() == "S" && (($('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#6').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('13').style.backgroundColor = "lightgreen";   
        document.getElementById('6').style.backgroundColor = "lightgreen";  
        document.getElementById('20').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t13').text() == "O" && $('#t7').text() == "S" && $('#t19').text() == "S" && (($('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#7').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('13').style.backgroundColor = "lightgreen";   
        document.getElementById('7').style.backgroundColor = "lightgreen";  
        document.getElementById('19').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t13').text() == "O" && $('#t14').text() == "S" && $('#t12').text() == "S" && (($('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#14').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('13').style.backgroundColor = "lightgreen";   
        document.getElementById('14').style.backgroundColor = "lightgreen";  
        document.getElementById('12').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t13').text() == "O" && $('#t21').text() == "S" && $('#t5').text() == "S" && (($('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#5').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('13').style.backgroundColor = "lightgreen";   
        document.getElementById('21').style.backgroundColor = "lightgreen";  
        document.getElementById('5').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t14').text() == "O" && $('#t7').text() == "S" && $('#t21').text() == "S" && (($('#14').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#7').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('14').style.backgroundColor = "lightgreen";   
        document.getElementById('7').style.backgroundColor = "lightgreen";  
        document.getElementById('21').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t15').text() == "O" && $('#t8').text() == "S" && $('#t22').text() == "S" && (($('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#8').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('15').style.backgroundColor = "lightgreen";   
        document.getElementById('8').style.backgroundColor = "lightgreen";  
        document.getElementById('22').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t16').text() == "O" && $('#t9').text() == "S" && $('#t23').text() == "S" && (($('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('16').style.backgroundColor = "lightgreen";   
        document.getElementById('9').style.backgroundColor = "lightgreen";  
        document.getElementById('23').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t16').text() == "O" && $('#t10').text() == "S" && $('#t22').text() == "S" && (($('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('16').style.backgroundColor = "lightgreen";   
        document.getElementById('10').style.backgroundColor = "lightgreen";  
        document.getElementById('22').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t16').text() == "O" && $('#t17').text() == "S" && $('#t15').text() == "S" && (($('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('16').style.backgroundColor = "lightgreen";   
        document.getElementById('17').style.backgroundColor = "lightgreen";  
        document.getElementById('15').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t16').text() == "O" && $('#t24').text() == "S" && $('#t8').text() == "S" && (($('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#8').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('16').style.backgroundColor = "lightgreen";   
        document.getElementById('24').style.backgroundColor = "lightgreen";  
        document.getElementById('8').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t17').text() == "O" && $('#t10').text() == "S" && $('#t24').text() == "S" && (($('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('17').style.backgroundColor = "lightgreen";   
        document.getElementById('10').style.backgroundColor = "lightgreen";  
        document.getElementById('24').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t17').text() == "O" && $('#t11').text() == "S" && $('#t23').text() == "S" && (($('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('17').style.backgroundColor = "lightgreen";   
        document.getElementById('11').style.backgroundColor = "lightgreen";  
        document.getElementById('23').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t17').text() == "O" && $('#t18').text() == "S" && $('#t16').text() == "S" && (($('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('17').style.backgroundColor = "lightgreen";   
        document.getElementById('18').style.backgroundColor = "lightgreen";  
        document.getElementById('16').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t17').text() == "O" && $('#t25').text() == "S" && $('#t9').text() == "S" && (($('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#9').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('17').style.backgroundColor = "lightgreen";   
        document.getElementById('25').style.backgroundColor = "lightgreen";  
        document.getElementById('9').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t18').text() == "O" && $('#t11').text() == "S" && $('#t25').text() == "S" && (($('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('18').style.backgroundColor = "lightgreen";   
        document.getElementById('11').style.backgroundColor = "lightgreen";  
        document.getElementById('25').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t18').text() == "O" && $('#t12').text() == "S" && $('#t24').text() == "S" && (($('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('18').style.backgroundColor = "lightgreen";   
        document.getElementById('12').style.backgroundColor = "lightgreen";  
        document.getElementById('24').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t18').text() == "O" && $('#t19').text() == "S" && $('#t17').text() == "S" && (($('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('18').style.backgroundColor = "lightgreen";   
        document.getElementById('19').style.backgroundColor = "lightgreen";  
        document.getElementById('17').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t18').text() == "O" && $('#t26').text() == "S" && $('#t10').text() == "S" && (($('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#10').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('18').style.backgroundColor = "lightgreen";   
        document.getElementById('26').style.backgroundColor = "lightgreen";  
        document.getElementById('10').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t19').text() == "O" && $('#t12').text() == "S" && $('#t26').text() == "S" && (($('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('19').style.backgroundColor = "lightgreen";   
        document.getElementById('12').style.backgroundColor = "lightgreen";  
        document.getElementById('26').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t19').text() == "O" && $('#t13').text() == "S" && $('#t25').text() == "S" && (($('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('19').style.backgroundColor = "lightgreen";   
        document.getElementById('13').style.backgroundColor = "lightgreen";  
        document.getElementById('25').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t19').text() == "O" && $('#t20').text() == "S" && $('#t18').text() == "S" && (($('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('19').style.backgroundColor = "lightgreen";   
        document.getElementById('20').style.backgroundColor = "lightgreen";  
        document.getElementById('18').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t19').text() == "O" && $('#t27').text() == "S" && $('#t11').text() == "S" && (($('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#11').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('19').style.backgroundColor = "lightgreen";   
        document.getElementById('27').style.backgroundColor = "lightgreen";  
        document.getElementById('11').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t20').text() == "O" && $('#t13').text() == "S" && $('#t27').text() == "S" && (($('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#13').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('20').style.backgroundColor = "lightgreen";   
        document.getElementById('13').style.backgroundColor = "lightgreen";  
        document.getElementById('27').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t20').text() == "O" && $('#t14').text() == "S" && $('#t26').text() == "S" && (($('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#14').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('20').style.backgroundColor = "lightgreen";   
        document.getElementById('14').style.backgroundColor = "lightgreen";  
        document.getElementById('26').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t20').text() == "O" && $('#t21').text() == "S" && $('#t19').text() == "S" && (($('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('20').style.backgroundColor = "lightgreen";   
        document.getElementById('21').style.backgroundColor = "lightgreen";  
        document.getElementById('19').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t20').text() == "O" && $('#t28').text() == "S" && $('#t12').text() == "S" && (($('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#12').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('20').style.backgroundColor = "lightgreen";   
        document.getElementById('28').style.backgroundColor = "lightgreen";  
        document.getElementById('12').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t21').text() == "O" && $('#t14').text() == "S" && $('#t28').text() == "S" && (($('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#14').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('21').style.backgroundColor = "lightgreen";   
        document.getElementById('14').style.backgroundColor = "lightgreen";  
        document.getElementById('28').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t22').text() == "O" && $('#t15').text() == "S" && $('#t29').text() == "S" && (($('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('22').style.backgroundColor = "lightgreen";   
        document.getElementById('15').style.backgroundColor = "lightgreen";  
        document.getElementById('29').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t23').text() == "O" && $('#t16').text() == "S" && $('#t30').text() == "S" && (($('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('23').style.backgroundColor = "lightgreen";   
        document.getElementById('16').style.backgroundColor = "lightgreen";  
        document.getElementById('30').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t23').text() == "O" && $('#t17').text() == "S" && $('#t29').text() == "S" && (($('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('23').style.backgroundColor = "lightgreen";   
        document.getElementById('17').style.backgroundColor = "lightgreen";  
        document.getElementById('29').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t23').text() == "O" && $('#t24').text() == "S" && $('#t22').text() == "S" && (($('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('23').style.backgroundColor = "lightgreen";   
        document.getElementById('24').style.backgroundColor = "lightgreen";  
        document.getElementById('22').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t23').text() == "O" && $('#t31').text() == "S" && $('#t15').text() == "S" && (($('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#15').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('23').style.backgroundColor = "lightgreen";   
        document.getElementById('31').style.backgroundColor = "lightgreen";  
        document.getElementById('15').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t24').text() == "O" && $('#t17').text() == "S" && $('#t31').text() == "S" && (($('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('24').style.backgroundColor = "lightgreen";   
        document.getElementById('17').style.backgroundColor = "lightgreen";  
        document.getElementById('31').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t24').text() == "O" && $('#t18').text() == "S" && $('#t30').text() == "S" && (($('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('24').style.backgroundColor = "lightgreen";   
        document.getElementById('18').style.backgroundColor = "lightgreen";  
        document.getElementById('30').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t24').text() == "O" && $('#t25').text() == "S" && $('#t23').text() == "S" && (($('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('24').style.backgroundColor = "lightgreen";   
        document.getElementById('25').style.backgroundColor = "lightgreen";  
        document.getElementById('23').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t24').text() == "O" && $('#t32').text() == "S" && $('#t16').text() == "S" && (($('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#16').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('24').style.backgroundColor = "lightgreen";   
        document.getElementById('32').style.backgroundColor = "lightgreen";  
        document.getElementById('16').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t25').text() == "O" && $('#t18').text() == "S" && $('#t32').text() == "S" && (($('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('25').style.backgroundColor = "lightgreen";   
        document.getElementById('18').style.backgroundColor = "lightgreen";  
        document.getElementById('32').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t25').text() == "O" && $('#t19').text() == "S" && $('#t31').text() == "S" && (($('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('25').style.backgroundColor = "lightgreen";   
        document.getElementById('19').style.backgroundColor = "lightgreen";  
        document.getElementById('31').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t25').text() == "O" && $('#t26').text() == "S" && $('#t24').text() == "S" && (($('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('25').style.backgroundColor = "lightgreen";   
        document.getElementById('26').style.backgroundColor = "lightgreen";  
        document.getElementById('24').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t25').text() == "O" && $('#t33').text() == "S" && $('#t17').text() == "S" && (($('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#17').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('25').style.backgroundColor = "lightgreen";   
        document.getElementById('33').style.backgroundColor = "lightgreen";  
        document.getElementById('17').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t26').text() == "O" && $('#t19').text() == "S" && $('#t33').text() == "S" && (($('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('26').style.backgroundColor = "lightgreen";   
        document.getElementById('19').style.backgroundColor = "lightgreen";  
        document.getElementById('33').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t26').text() == "O" && $('#t20').text() == "S" && $('#32').text() == "S" && (($('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('26').style.backgroundColor = "lightgreen";   
        document.getElementById('20').style.backgroundColor = "lightgreen";  
        document.getElementById('32').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t26').text() == "O" && $('#t27').text() == "S" && $('#t25').text() == "S" && (($('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('26').style.backgroundColor = "lightgreen";   
        document.getElementById('27').style.backgroundColor = "lightgreen";  
        document.getElementById('25').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t26').text() == "O" && $('#t34').text() == "S" && $('#t18').text() == "S" && (($('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#18').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('26').style.backgroundColor = "lightgreen";   
        document.getElementById('34').style.backgroundColor = "lightgreen";  
        document.getElementById('18').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t27').text() == "O" && $('#t20').text() == "S" && $('#t34').text() == "S" && (($('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#20').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('27').style.backgroundColor = "lightgreen";   
        document.getElementById('20').style.backgroundColor = "lightgreen";  
        document.getElementById('34').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t27').text() == "O" && $('#t21').text() == "S" && $('#t33').text() == "S" && (($('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('27').style.backgroundColor = "lightgreen";   
        document.getElementById('21').style.backgroundColor = "lightgreen";  
        document.getElementById('33').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t27').text() == "O" && $('#t28').text() == "S" && $('#t26').text() == "S" && (($('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('27').style.backgroundColor = "lightgreen";   
        document.getElementById('28').style.backgroundColor = "lightgreen";  
        document.getElementById('26').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t27').text() == "O" && $('#t35').text() == "S" && $('#t19').text() == "S" && (($('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#19').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('27').style.backgroundColor = "lightgreen";   
        document.getElementById('35').style.backgroundColor = "lightgreen";  
        document.getElementById('19').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t28').text() == "O" && $('#t21').text() == "S" && $('#t35').text() == "S" && (($('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#21').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('28').style.backgroundColor = "lightgreen";   
        document.getElementById('21').style.backgroundColor = "lightgreen";  
        document.getElementById('35').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t29').text() == "O" && $('#t22').text() == "S" && $('#t36').text() == "S" && (($('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#36').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('29').style.backgroundColor = "lightgreen";   
        document.getElementById('22').style.backgroundColor = "lightgreen";  
        document.getElementById('36').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t30').text() == "O" && $('#t23').text() == "S" && $('#t37').text() == "S" && (($('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('30').style.backgroundColor = "lightgreen";   
        document.getElementById('23').style.backgroundColor = "lightgreen";  
        document.getElementById('37').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t30').text() == "O" && $('#t24').text() == "S" && $('#t36').text() == "S" && (($('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#36').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('30').style.backgroundColor = "lightgreen";   
        document.getElementById('24').style.backgroundColor = "lightgreen";  
        document.getElementById('36').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t30').text() == "O" && $('#t31').text() == "S" && $('#t29').text() == "S" && (($('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('30').style.backgroundColor = "lightgreen";   
        document.getElementById('31').style.backgroundColor = "lightgreen";  
        document.getElementById('29').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t30').text() == "O" && $('#t38').text() == "S" && $('#t22').text() == "S" && (($('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#22').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('30').style.backgroundColor = "lightgreen";   
        document.getElementById('38').style.backgroundColor = "lightgreen";  
        document.getElementById('22').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t31').text() == "O" && $('#t24').text() == "S" && $('#t38').text() == "S" && (($('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('31').style.backgroundColor = "lightgreen";   
        document.getElementById('24').style.backgroundColor = "lightgreen";  
        document.getElementById('38').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t31').text() == "O" && $('#t25').text() == "S" && $('#t37').text() == "S" && (($('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('31').style.backgroundColor = "lightgreen";   
        document.getElementById('25').style.backgroundColor = "lightgreen";  
        document.getElementById('37').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t31').text() == "O" && $('#t32').text() == "S" && $('#t30').text() == "S" && (($('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('31').style.backgroundColor = "lightgreen";   
        document.getElementById('32').style.backgroundColor = "lightgreen";  
        document.getElementById('30').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t31').text() == "O" && $('#t39').text() == "S" && $('#t23').text() == "S" && (($('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#23').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('31').style.backgroundColor = "lightgreen";   
        document.getElementById('39').style.backgroundColor = "lightgreen";  
        document.getElementById('23').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t32').text() == "O" && $('#t25').text() == "S" && $('#t39').text() == "S" && (($('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('32').style.backgroundColor = "lightgreen";   
        document.getElementById('25').style.backgroundColor = "lightgreen";  
        document.getElementById('39').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t32').text() == "O" && $('#t26').text() == "S" && $('#t38').text() == "S" && (($('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('32').style.backgroundColor = "lightgreen";   
        document.getElementById('26').style.backgroundColor = "lightgreen";  
        document.getElementById('38').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t32').text() == "O" && $('#t33').text() == "S" && $('#t31').text() == "S" && (($('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('32').style.backgroundColor = "lightgreen";   
        document.getElementById('33').style.backgroundColor = "lightgreen";  
        document.getElementById('31').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t32').text() == "O" && $('#t40').text() == "S" && $('#t24').text() == "S" && (($('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#24').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('32').style.backgroundColor = "lightgreen";   
        document.getElementById('40').style.backgroundColor = "lightgreen";  
        document.getElementById('24').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t33').text() == "O" && $('#t26').text() == "S" && $('#t40').text() == "S" && (($('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('33').style.backgroundColor = "lightgreen";   
        document.getElementById('26').style.backgroundColor = "lightgreen";  
        document.getElementById('40').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t33').text() == "O" && $('#t27').text() == "S" && $('#t39').text() == "S" && (($('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('33').style.backgroundColor = "lightgreen";   
        document.getElementById('27').style.backgroundColor = "lightgreen";  
        document.getElementById('39').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t33').text() == "O" && $('#t34').text() == "S" && $('#t32').text() == "S" && (($('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('33').style.backgroundColor = "lightgreen";   
        document.getElementById('34').style.backgroundColor = "lightgreen";  
        document.getElementById('32').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t33').text() == "O" && $('#t41').text() == "S" && $('#t25').text() == "S" && (($('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#25').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('33').style.backgroundColor = "lightgreen";   
        document.getElementById('41').style.backgroundColor = "lightgreen";  
        document.getElementById('25').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t34').text() == "O" && $('#t27').text() == "S" && $('#t41').text() == "S" && (($('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#27').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('34').style.backgroundColor = "lightgreen";   
        document.getElementById('27').style.backgroundColor = "lightgreen";  
        document.getElementById('41').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t34').text() == "O" && $('#t28').text() == "S" && $('#t40').text() == "S" && (($('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('34').style.backgroundColor = "lightgreen";   
        document.getElementById('28').style.backgroundColor = "lightgreen";  
        document.getElementById('40').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t34').text() == "O" && $('#t35').text() == "S" && $('#t33').text() == "S" && (($('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('34').style.backgroundColor = "lightgreen";   
        document.getElementById('35').style.backgroundColor = "lightgreen";  
        document.getElementById('33').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t34').text() == "O" && $('#t42').text() == "S" && $('#t26').text() == "S" && (($('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#42').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#26').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('34').style.backgroundColor = "lightgreen";   
        document.getElementById('42').style.backgroundColor = "lightgreen";  
        document.getElementById('26').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t35').text() == "O" && $('#t28').text() == "S" && $('#t42').text() == "S" && (($('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#28').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#42').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('35').style.backgroundColor = "lightgreen";   
        document.getElementById('28').style.backgroundColor = "lightgreen";  
        document.getElementById('42').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t36').text() == "O" && $('#t29').text() == "S" && $('#t43').text() == "S" && (($('#36').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#43').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('36').style.backgroundColor = "lightgreen";   
        document.getElementById('29').style.backgroundColor = "lightgreen";  
        document.getElementById('43').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t37').text() == "O" && $('#t30').text() == "S" && $('#t44').text() == "S" && (($('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#44').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('37').style.backgroundColor = "lightgreen";   
        document.getElementById('30').style.backgroundColor = "lightgreen";  
        document.getElementById('44').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t37').text() == "O" && $('#t31').text() == "S" && $('#t43').text() == "S" && (($('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#43').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('37').style.backgroundColor = "lightgreen";   
        document.getElementById('31').style.backgroundColor = "lightgreen";  
        document.getElementById('43').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t37').text() == "O" && $('#t38').text() == "S" && $('#t36').text() == "S" && (($('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#36').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('37').style.backgroundColor = "lightgreen";   
        document.getElementById('38').style.backgroundColor = "lightgreen";  
        document.getElementById('36').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t37').text() == "O" && $('#t45').text() == "S" && $('#t29').text() == "S" && (($('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#29').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('37').style.backgroundColor = "lightgreen";   
        document.getElementById('45').style.backgroundColor = "lightgreen";  
        document.getElementById('29').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t38').text() == "O" && $('#t31').text() == "S" && $('#t45').text() == "S" && (($('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('38').style.backgroundColor = "lightgreen";   
        document.getElementById('31').style.backgroundColor = "lightgreen";  
        document.getElementById('45').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t38').text() == "O" && $('#t32').text() == "S" && $('#t44').text() == "S" && (($('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#44').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('38').style.backgroundColor = "lightgreen";   
        document.getElementById('32').style.backgroundColor = "lightgreen";  
        document.getElementById('44').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t38').text() == "O" && $('#t39').text() == "S" && $('#t37').text() == "S" && (($('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#37').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('38').style.backgroundColor = "lightgreen";   
        document.getElementById('39').style.backgroundColor = "lightgreen";  
        document.getElementById('37').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t38').text() == "O" && $('#t46').text() == "S" && $('#t30').text() == "S" && (($('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#30').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('38').style.backgroundColor = "lightgreen";   
        document.getElementById('46').style.backgroundColor = "lightgreen";  
        document.getElementById('30').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t39').text() == "O" && $('#t32').text() == "S" && $('#t46').text() == "S" && (($('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('39').style.backgroundColor = "lightgreen";   
        document.getElementById('32').style.backgroundColor = "lightgreen";  
        document.getElementById('46').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t39').text() == "O" && $('#t33').text() == "S" && $('#t45').text() == "S" && (($('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('39').style.backgroundColor = "lightgreen";   
        document.getElementById('33').style.backgroundColor = "lightgreen";  
        document.getElementById('45').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t39').text() == "O" && $('#t40').text() == "S" && $('#t38').text() == "S" && (($('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#38').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('39').style.backgroundColor = "lightgreen";   
        document.getElementById('40').style.backgroundColor = "lightgreen";  
        document.getElementById('38').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t39').text() == "O" && $('#t47').text() == "S" && $('#t31').text() == "S" && (($('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#31').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('39').style.backgroundColor = "lightgreen";   
        document.getElementById('47').style.backgroundColor = "lightgreen";  
        document.getElementById('31').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t40').text() == "O" && $('#t33').text() == "S" && $('#t47').text() == "S" && (($('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('40').style.backgroundColor = "lightgreen";   
        document.getElementById('33').style.backgroundColor = "lightgreen";  
        document.getElementById('47').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t40').text() == "O" && $('#t34').text() == "S" && $('#t40').text() == "S" && (($('#3').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('40').style.backgroundColor = "lightgreen";   
        document.getElementById('34').style.backgroundColor = "lightgreen";  
        document.getElementById('46').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t40').text() == "O" && $('#t41').text() == "S" && $('#t39').text() == "S" && (($('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#39').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('40').style.backgroundColor = "lightgreen";   
        document.getElementById('41').style.backgroundColor = "lightgreen";  
        document.getElementById('39').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t40').text() == "O" && $('#t48').text() == "S" && $('#t32').text() == "S" && (($('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#48').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#32').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('40').style.backgroundColor = "lightgreen";   
        document.getElementById('48').style.backgroundColor = "lightgreen";  
        document.getElementById('32').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t41').text() == "O" && $('#t34').text() == "S" && $('#t48').text() == "S" && (($('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#34').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#48').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('41').style.backgroundColor = "lightgreen";   
        document.getElementById('34').style.backgroundColor = "lightgreen";  
        document.getElementById('48').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t41').text() == "O" && $('#t35').text() == "S" && $('#t47').text() == "S" && (($('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('41').style.backgroundColor = "lightgreen";   
        document.getElementById('35').style.backgroundColor = "lightgreen";  
        document.getElementById('47').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t41').text() == "O" && $('#t42').text() == "S" && $('#t40').text() == "S" && (($('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#42').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#40').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('41').style.backgroundColor = "lightgreen";   
        document.getElementById('42').style.backgroundColor = "lightgreen";  
        document.getElementById('40').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t41').text() == "O" && $('#t49').text() == "S" && $('#t33').text() == "S" && (($('#41').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#49').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#33').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('41').style.backgroundColor = "lightgreen";   
        document.getElementById('49').style.backgroundColor = "lightgreen";  
        document.getElementById('33').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t42').text() == "O" && $('#t35').text() == "S" && $('#t49').text() == "S" && (($('#42').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#35').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#49').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('42').style.backgroundColor = "lightgreen";   
        document.getElementById('35').style.backgroundColor = "lightgreen";  
        document.getElementById('49').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t44').text() == "O" && $('#t43').text() == "S" && $('#t45').text() == "S" && (($('#44').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#43').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('44').style.backgroundColor = "lightgreen";   
        document.getElementById('43').style.backgroundColor = "lightgreen";  
        document.getElementById('45').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t45').text() == "O" && $('#t44').text() == "S" && $('#t46').text() == "S" && (($('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#44').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('45').style.backgroundColor = "lightgreen";   
        document.getElementById('44').style.backgroundColor = "lightgreen";  
        document.getElementById('46').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t46').text() == "O" && $('#t45').text() == "S" && $('#t47').text() == "S" && (($('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#45').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('46').style.backgroundColor = "lightgreen";   
        document.getElementById('45').style.backgroundColor = "lightgreen";  
        document.getElementById('47').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t47').text() == "O" && $('#t46').text() == "S" && $('#t48').text() == "S" && (($('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#46').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#48').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('47').style.backgroundColor = "lightgreen";   
        document.getElementById('46').style.backgroundColor = "lightgreen";  
        document.getElementById('48').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }  if  ($('#t48').text() == "O" && $('#t47').text() == "S" && $('#t49').text() == "S" && (($('#48').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#47').css("backgroundColor") != $('#standardCol').css("backgroundColor") || $('#49').css("backgroundColor") != $('#standardCol').css("backgroundColor")) ) ){
        document.getElementById('48').style.backgroundColor = "lightgreen";   
        document.getElementById('47').style.backgroundColor = "lightgreen";  
        document.getElementById('49').style.backgroundColor = "lightgreen"; 
        setPosition();
        
    }


   
}

//increases the score of a player when they get a SOS
function setPosition (){
    if (postionInGame == 1){
        var num = parseInt($('#score1').html());
        var num = num + 3;
        $('#score1').html(num);
    } else if (postionInGame == 2){
        var num = parseInt($('#score2').html());
        var num = num + 3;
        $('#score2').html(num);
    } else if (postionInGame == 3){
        var num = parseInt($('#score3').html());
        var num = num + 3;
        $('#score3').html(num);
    } else if (postionInGame == 4){
        var num = parseInt($('#score4').html());
        var num = num + 3;
        $('#score4').html(num);
    }
}

//confirmation to end game
($('#end').click(function () {
    var modal = document.getElementById('endGame')
    modal.style.display = "block";

}));

var spanned = document.getElementsByClassName("close")[1];

//when the x on the end game page is clicked the page closes
spanned.onclick = function() {
    var modal = document.getElementById('endGame')
    modal.style.display = "none";
}

//when outside the end game page is click the page closes
window.onclick = function(event) {
    var modar = document.getElementById('endGame')
    if (event.target == modar) {
        modar.style.display = "none";
    }
}

var spanned1 = document.getElementsByClassName("close")[2];

//when the x on the end game page is clicked the page closes
spanned1.onclick = function() {
    var modal = document.getElementById('results')
    modal.style.display = "none";
}

//when outside the end game page is click the page closes
window.onclick = function(event) {
    var modal = document.getElementById('results')
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//shows the game results
function gameResults(){
    var modal = document.getElementById('endGame')
    modal.style.display = "none";
    var result = document.getElementById('results')
    result.style.display = "block";
    legalGame = false;
    legalPlay = false;

    document.getElementById('rname1').innerHTML =  document.getElementById('curplayer1').innerHTML;
    document.getElementById('rscore1').innerHTML = document.getElementById('score1').innerHTML;
    document.getElementById('rname2').innerHTML =  document.getElementById('curplayer2').innerHTML;
    document.getElementById('rscore2').innerHTML = document.getElementById('score2').innerHTML;
    document.getElementById('rname3').innerHTML =  document.getElementById('curplayer3').innerHTML;
    document.getElementById('rscore3').innerHTML = document.getElementById('score3').innerHTML;
    document.getElementById('rname4').innerHTML =  document.getElementById('curplayer4').innerHTML;
    document.getElementById('rscore4').innerHTML = document.getElementById('score4').innerHTML;
 

}

//adds the game results to the database
function addDB(){

    if( document.getElementById('rname4').innerHTML != ""){
        localStorage.setItem(document.getElementById('rname1').innerHTML, document.getElementById('rscore1').innerHTML);
        localStorage.setItem(document.getElementById('rname2').innerHTML, document.getElementById('rscore2').innerHTML)
        localStorage.setItem(document.getElementById('rname3').innerHTML, document.getElementById('rscore3').innerHTML);
        localStorage.setItem(document.getElementById('rname4').innerHTML, document.getElementById('rscore4').innerHTML);
        
    } else if( document.getElementById('rname3').innerHTML != ""){
        localStorage.setItem(document.getElementById('rname1').innerHTML, document.getElementById('rscore1').innerHTML);
        localStorage.setItem(document.getElementById('rname2').innerHTML, document.getElementById('rscore2').innerHTML)
        localStorage.setItem(document.getElementById('rname3').innerHTML, document.getElementById('rscore3').innerHTML);

    } else if ( document.getElementById('rname2').innerHTML != ""){
        localStorage.setItem(document.getElementById('rname1').innerHTML, document.getElementById('rscore1').innerHTML);
        localStorage.setItem(document.getElementById('rname2').innerHTML, document.getElementById('rscore2').innerHTML);

    } else {
        
    }

}

//shows the previous game results 
function previousResults(){
    document.getElementById('lastResults').style.display = "block" ;

    if( localStorage.length == 4){

        document.getElementById('rnam1').innerHTML =  localStorage.key(0);
        document.getElementById('rnam2').innerHTML =  localStorage.key(1);
        document.getElementById('rnam3').innerHTML =  localStorage.key(2);
        document.getElementById('rnam4').innerHTML =  localStorage.key(3);
        document.getElementById('rscor1').innerHTML = localStorage.getItem(localStorage.key(0));
        document.getElementById('rscor2').innerHTML = localStorage.getItem(localStorage.key(1));
        document.getElementById('rscor3').innerHTML = localStorage.getItem(localStorage.key(2));
        document.getElementById('rscor4').innerHTML = localStorage.getItem(localStorage.key(3));


    } else if ( localStorage.length == 3){

        document.getElementById('rnam1').innerHTML =  localStorage.key(0);
        document.getElementById('rnam2').innerHTML =  localStorage.key(1);
        document.getElementById('rnam3').innerHTML =  localStorage.key(2);
        document.getElementById('rscor1').innerHTML = localStorage.getItem(localStorage.key(0));
        document.getElementById('rscor2').innerHTML = localStorage.getItem(localStorage.key(1));
        document.getElementById('rscor3').innerHTML = localStorage.getItem(localStorage.key(2));

    } else if ( localStorage.length == 2 ){

        document.getElementById('rnam1').innerHTML =  localStorage.key(0);
        document.getElementById('rnam2').innerHTML =  localStorage.key(1);
        document.getElementById('rscor1').innerHTML = localStorage.getItem(localStorage.key(0));
        document.getElementById('rscor2').innerHTML = localStorage.getItem(localStorage.key(1));
    } else {

    }

    
    

}

// function moveAlert() {
//     var message = "You made a move already!";
//     var title = "Game Alert";
//     var buttonName = "Ok";
//     navigator.notification.alert(message, alertCallback, title, buttonName);
    
//     function alertCallback() {
//        console.log("Alert is Dismissed!");
//     }
//  }

//  function playAlert() {
//     var message = "No Game In Progress!";
//     var title = "Game Alert";
//     var buttonName = "Ok";
//     navigator.notification.alert(message, alertCallback, title, buttonName);
    
//     function alertCallback() {
//        console.log("Alert is Dismissed!");
//     }
//  }