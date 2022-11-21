/*
Name: Mark Holber/UML CS/mark_holber@student.uml.edu
Date: 11-10-2022
File: script.js
Description: Validation and modifications using jquery
*/



//when the document is ready to output, this function runs
$(document).ready(function(){
        
        (function($){
                $("#myTabs").tabs();
                })(jQuery);

        //saving table
        var i = 0;
      

        $('#1a').hide();
        $('#2a').hide();
        $('#3a').hide();
        $('#4a').hide();
        $('#5a').hide();
        $('#6a').hide();
        $('#7a').hide();
        $('#8a').hide();
        $('#9a').hide();
        $('#10a').hide();
        
        $("#save").click(function(){

           
                if(i == 0){
                        $('#1a').show(); 
                        $('#1').show();    
                }
                if(i == 1){
                        $('#2a').show();   
                        $('#2').show();   
                }
                else if(i == 2){
                        $('#3a').show();
                        $('#3').show();      
                }
                else if(i == 3){
                        $('#4a').show(); 
                        $('#4').show();     
                }
                else if(i == 4){
                        $('#5a').show(); 
                        $('#5').show();     
                }
                else if(i == 5){
                        $('#6a').show(); 
                        $('#6').show();     
                }
                else if(i == 6){
                        $('#7a').show();  
                        $('#7').show();    
                }
                else if(i == 7){
                        $('#8a').show(); 
                        $('#8').show();     
                }
                else if(i == 8){
                        $('#9a').show();  
                        $('#9').show();    
                }
                else if(i == 9){
                        $('#10a').show();  
                        $('#10').show();    
                }
                if(i < 9){
                        i++;   
                }
               
                /*var ul = document.getElementById("myTabs");
                var li = document.createElement("li");
                li.appendChild(document.getElementById('t1').lastChild);
                ul.appendChild(li);*/

                var str = i.toString();               
                const node = document.getElementById('t1').lastChild;
                const clone = node.cloneNode(true);        
                document.getElementById(str).appendChild(clone); 
                
                
                //document.getElementById('one').appendChild(clone);

                //console.log(node);         
        })

        //delete individual tabs
        $("#delete").click(function(){
           
           
                if(i == 1){
                        $('#1a').hide();   
                        $('#1').hide(); 
         
                        $('#1').empty();   
                }
                if(i == 2){
                        $('#2a').hide();   
                        $('#2').hide();  
                      
                        $('#2').empty();  
                }
                else if(i == 3){
                        $('#3a').hide(); 
                        $('#3').hide();   
                      
                        $('#3').empty();   
                }
                else if(i == 4){
                        $('#4a').hide(); 
                        $('#4').hide();  
                      
                        $('#4').empty();    
                }
                else if(i == 5){
                        $('#5a').hide();  
                        $('#5').hide();
                     
                        $('#5').empty();    
                }
                else if(i == 6){
                        $('#6a').hide();
                        $('#6').hide();   
                       
                        $('#6').empty();    
                }
                else if(i == 7){
                        $('#7a').hide();
                        $('#7').hide();   
                     
                        $('#7').empty();    
                }
                else if(i == 8){
                        $('#8a').hide(); 
                        $('#8').hide();  
                   
                        $('#8').empty();    
                }
                else if(i == 9){
                        $('#9a').hide(); 
                        $('#9').hide();   
                         
                        $('#9').empty();   
                }
                else if(i == 10){
                        $('#10a').hide(); 
                        $('#10').hide();  
                   
                        $('#10').empty();    
                }
                if(i > 0){
                        i--;   
                }

       
                    
        })
        //delete all tabs
        $("#deleteAll").click(function(){
           
           
                i = 0;
                $('#1a').hide();   
                $('#1').hide(); 
              
                $('#1').empty();   

                $('#2a').hide();   
                $('#2').hide(); 
              
                $('#2').empty();   

                $('#3a').hide();   
                $('#3').hide(); 
              
                $('#3').empty();   

                $('#4a').hide();   
                $('#4').hide(); 
             
                $('#5').empty();   

                $('#5a').hide();   
                $('#5').hide(); 
              
                $('#5').empty();   

                $('#6a').hide();   
                $('#6').hide(); 
               
                $('#6').empty();   


                $('#7a').hide();   
                $('#7').hide(); 
              
                $('#7').empty();   


                $('#8a').hide();   
                $('#8').hide(); 
              
                $('#8').empty();   


                $('#9a').hide();   
                $('#9').hide(); 
          
                $('#9').empty();   


                $('#10a').hide();   
                $('#10').hide(); 
             
                $('#10').empty();   

       
                    
        })
        
       
        
        test = 'Please insert desired values in chart and press <u>Make Table</u>'
      
        document.getElementById('t1').innerHTML = test;

        
    
        document.getElementById('xMin').innerHTML = 0;
        document.getElementById('xMax').innerHTML = 0;
        document.getElementById('yMin').innerHTML = 0;
        document.getElementById('yMax').innerHTML = 0;
                       

        

        //validation for inputs
        $("#form1").validate({
                rules: {
                        xMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                                
                                
                               
                        },
                        yMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        xMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        yMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                },
                //messages that output upon specific condition
                messages: {
                        xMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                         
                        },
                        yMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        xMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        yMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                },
        })
        //update the form as needed
        function update(input_id, value){
                $(input_id).val(value);
        }
        
                $("#slider1").slider({
                        min: -50,
                        max: 50,
                        value: 0,
                        slide: function(event, ui) {
                                update("#xMin", $(this).slider("value"))
                                check(); 
                        },
                        change: function(event, ui) {
                                update("#xMin", $(this).slider("value"))
                                check(); 
                        }
                });(jQuery);
                $("#slider2").slider({
                        min: -50,
                        max: 50,
                        value: 0,
                        slide: function(event, ui) {
                                update("#xMax", $(this).slider("value"))
                                check(); 
                        },
                        change: function(event, ui) {
                                update("#xMax", $(this).slider("value"))
                                check(); 
                        }
                });(jQuery);
                $("#slider3").slider({
                        min: -50,
                        max: 50,
                        value: 0,
                        slide: function(event, ui) {
                                update("#yMin", $(this).slider("value"))
                                check(); 
                        },
                        change: function(event, ui) {
                                update("#yMin", $(this).slider("value"))
                                check();  
                        }
                        });(jQuery);
                $("#slider4").slider({
                        min: -50,
                        max: 50,
                        value: 0,
                        slide: function(event, ui) {
                        update("#yMax", $(this).slider("value"))
                        check(); 
                        },
                        change: function(event, ui) {
                        update("#yMax", $(this).slider("value"))
                        check(); 
                        }
                        });(jQuery);

                $("#xMin").change(function () {
                        $("#slider1").slider("value", $(this).val());
                        $("#slider1").prop("value", $(this).val());
                        check(); 
                        });
                        $("#xMax").change(function () {
                        $("#slider2").slider("value", $(this).val());
                        $("#slider2").prop("value", $(this).val());
                        check(); 
                        });
                        $("#yMin").change(function () {
                        $("#slider3").slider("value", $(this).val());
                        $("#slider3").prop("value", $(this).val());
                        check(); 
                        });
                        $("#yMax").change(function () {
                        $("#slider4").slider("value", $(this).val());
                        $("#slider4").prop("value", $(this).val());
                        check(); 
                        });
                
})


//when the button is clicked
function validate(){
       
        check();
        
        
        //validation form for checking requirments
 

        
};

//table being made
function getValues2(){
        var rowLow1 = document.getElementById('xMin').value;
        var rowHigh1 = document.getElementById('xMax').value;
        var colLow1 = document.getElementById('yMin').value;
        var colHigh1 = document.getElementById('yMax').value;
        


                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
        
                //test statements
                var pass = 'All inputs are valid numbers'
                var fail = 'Not all inputs are valid numbers'
                var fail2 ="Minimum must be lower or equal to Maximum"
                var toHigh = 'Out of bounds, please input number between -50 and 50'

                
               
                 
                 if(typeof rowLow === 'number' && typeof rowHigh === 'number' && typeof colLow === 'number' && typeof colHigh === 'number')
                {
                 //       if((rowLow <= 50 && rowLow >=-50) && (rowHigh <= 50 && rowHigh >=-50) && (colLow <= 50 && colLow >=-50) && (colHigh <= 50 && colHigh >=-50)) 
                  //      {
                   //             
                    //    if(rowLow > rowHigh || colLow > colHigh)
                     //   {
                      //          document.getElementById('output5').innerHTML = fail2;
                       //         return;
                        //}
                        
                        //document.getElementById('output5').innerHTML = pass;
                       
                
                
           
                    var font = '<table border="1">\n';
                     var body = ' ';
                     var emptySpace = '-'
                     var emptyCell = '-'
             
             
                        //table being made
                     for(var a = rowLow - 1, a1 = 0; a <= rowHigh; a++, a1++)
                     {
                        
                               
                                if(a1 == 0)
                                {
                                body = body + '<td>';
                                body = body + emptySpace;
                                body = body + '</td>';
                                }
             
                                else
                                {
                                body = body + '<td>';
                                body = body + a;
                                body = body + '</td>';
                                }
                                
             
                        
                     }
                     /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                    body = body + '<tr>';
                    body = body +'</tr>\n'; 
               
                         for(var b = colLow, b1 = 0; b <= colHigh; b++, b1++)
                         {
             
                               
                                body = body + '<td>';
                                body = body + b;
                                body = body + '</td>';
        
        
                        for(var a = rowLow; a <= rowHigh; a++)
                        {
                            
                                body = body + '<td>';
                                body = body + a * b;
                                body = body + '</td>';
                     
                        }
                  
                        /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                         
                                body = body + '<tr>';
                                body = body +'</tr>\n'; 
           
                     }
                     var bottom = '</table>';
                     //table being output
                     document.getElementById('t1').innerHTML = font + body + bottom;
             
             
                     }
                
                
                //else
                //{
                 //       document.getElementById('output5').innerHTML = toHigh;
                 //       return;
                //}
        
                //}
                //else
                //{
                //        document.getElementById('output5').innerHTML = fail;
                //        return;
                //} 
               
        }


//checking for correct values
function check(){
        test = 'Please insert desired values in chart and press <u>Make Table</u>'
        column = 'Enter column minimum: '
        row = 'Enter row minimum: '
        minimum = '<u>Minimum must be lower than maximum</u>'
        correct = 'Please enter only acceptable values in chart'
        fill = 'Please fill in all necessary areas'

        //getValues2(); 
        document.getElementById('t1').innerHTML = test;


        var rowLow1 = document.getElementById('xMin').value;
        var rowHigh1 = document.getElementById('xMax').value;
        var colLow1 = document.getElementById('yMin').value;
        var colHigh1 = document.getElementById('yMax').value;
        


                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
                
        if(rowLow > rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow > rowHigh && colLow <= colHigh){
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('p3').innerHTML = row;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow <= rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = column;
                document.getElementById('t1').innerHTML = correct;
        }      
        else if(!rowLow1 || !rowHigh1 || !colLow1 || !colHigh1){
                document.getElementById('t1').innerHTML = fill;
        }
        else{
                document.getElementById('p1').innerHTML = column;
                document.getElementById('p3').innerHTML = row;
                getValues2(); 
        }
}











        
        
                
        
              
     
     






 

        
      

    
 
 
    
