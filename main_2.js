const gu_botton = document.getElementById("gu_botton");
const ch_botton = document.getElementById("ch_botton");
const pa_botton = document.getElementById("pa_botton");

gu_botton.addEventListener("click", function(){
    rpc(0);
});

ch_botton.addEventListener("click", function(){
    rpc(1);
});

pa_botton.addEventListener("click", function(){
    rpc(2);
});

function rpc(p_hand){
    const e_hand = Math.floor(Math.random()*3);

    switch((p_hand - e_hand + 3) % 3){
        case 0:
            console.log("まけだよん");
            break;
        case 1:
            console.log("ひきわけだよん");
            break;
        case 2:
            console.log("かったよん");
            break;
        default:
            break;
    }
}