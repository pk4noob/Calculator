let hesab = "";
let numm = "";
let keep = false;
$('.number').on('click', function(){
    numm = this.value
    if(keep){
        return false
    }
    if(!hesab){
        $('#first-number').append(numm);
    }else{
        $('#second-number').append(numm);
    }
})

$('.operator').on('click', function(){
   
    if(keep){
        return false
    }
    if($('#first-number').html()){
        hesab = this.value;
    }else{
        return false
    }
    if(hesab == "plus"){
        $("#operator").html("+")
    }else if(hesab == "minus"){
        $("#operator").html("-")
    }else if(hesab == "times"){
        $("#operator").html("X")
    }else if(hesab=="divide"){
        $("#operator").html("/")
    }else if(hesab=="power"){
        $("#operator").html("**")
    }else if(hesab=="equals"){
        $("#operator").html("=")
    }else if(hesab=="clear"){
        $("#operator").html("silindi")
    }
}
)
$("#button-equal").on("click",function(){
    netice = false;
    if(keep){
        return false
    }
    if(hesab == "plus"){
        netice = parseInt($("#first-number").html())+parseInt($("#second-number").html())
        $("#result").html(netice)
    }else if(hesab == "minus"){
        netice = parseInt($("#first-number").html())-parseInt($("#second-number").html())
        $("#result").html(netice)
    }else if(hesab == "times"){
        netice = parseInt($("#first-number").html())*parseInt($("#second-number").html())
        $("#result").html(netice)
    }else if(hesab == "divide"){
        netice = parseInt($("#first-number").html())/parseInt($("#second-number").html())
        $("#result").html(netice)
    }else if(hesab == "power"){
        netice = Math.pow($("#first-number").html()),parseInt($("#second-number").html())
        $("#result").html(netice)
    }
    keep = true
})
$("#button-clear").on("click", function(){
    keep = false;
    hesab = "";
    $("#first-number,#second-number,#result,#operator").empty();
})
