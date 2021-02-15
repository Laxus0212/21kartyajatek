$(function () {
//    $("#kezd").click(init);
    init();
});
function init(){
    for (var i = 0; i < 32; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).attr({"id":""+(i+1)});
        $("#jatekter div img").eq(i).attr({"src":"kartya/hatlap.jpg", "alt": "kep"});
        
    }
    
    $("#jatekter div").addClass("kartya");
    
    $("#jatekter div").click(
            function (){
                var id = "";
                id = $(this).attr("id");
                console.log(id);
                $("#jatekter div img").eq(id-1).attr({"src":"kartya/"+(id)+".png", "alt": "kep"});
            }
            );
    
    
}