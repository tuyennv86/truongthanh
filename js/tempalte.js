$(document).ready(function(){
	
    $(".header .expand").click(function() {
        $(".header a").removeClass("active");
        var a = $(this).attr("action");
        if (a == undefined || a == "open") {
            OpenMenu();
            $(".header a.expand").addClass("active").html("<span class='expand_up'></span>")
        } else {
            if (a == "close") {
                CloseMenu();
                $(".header a.expand").removeClass("active").html("")
            }
        }
    });
    
});
    
function OpenMenu() {
    expand = true;
    window.scrollTo(0, 0);
    $("#wrapper_mn").show();
    $("#wrapper").hide();
    $("#wrapper_s").hide();
    $(".header .font").hide();
    $(".header .expand").attr("action", "close")
}

function CloseMenu() {
    expand = false;
    $("#wrapper_mn").hide();
    $("#wrapper_s").hide();
    $("#wrapper").show();
    $(".header .expand").attr("action", "open");
    $(".header .font").show()
}