$("button").click(function(){
    var age = parseInt($("#age").val());
    console.log(age);
    var currentYear = parseInt($("#currentYear").val());
     console.log(currentYear);
    var year = parseInt($("#year").val());
     console.log(year);
    var answer=year-currentYear+age;
    $("#answer").text(answer);
    
     
     
});