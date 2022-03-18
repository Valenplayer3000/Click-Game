var clicks = 0; clicks.MAX_VALUE;

var click_require = 10;
var click_require_multi = 1000;

var click_multi = 1;
var more_click = 1;

function onClick() {
  clicks += more_click;
  clicks *= click_multi
  document.getElementById("clicks").innerHTML = clicks;
};

function buy_more_click(){
    if (clicks == click_require){
        more_click += 1;
        clicks -= click_require;
        click_require += 10;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("clicks_requires").innerHTML = click_require;
        document.getElementById("buy_error").innerHTML = "";
        document.getElementById("more_click_counter").innerHTML = more_click;
        return 0;
    }else if (clicks < click_require){
        document.getElementById("buy_error").innerHTML = "Error: Insufficient Clicks required to buy";
        return 1;
    }else if (clicks > click_require){
        more_click += 1;
        clicks -= click_require;
        click_require += 10;
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("clicks_requires").innerHTML = click_require;
        document.getElementById("buy_error").innerHTML = "";
        document.getElementById("more_click_counter").innerHTML = more_click;
    }
}

function buy_click_multi(){
    if (clicks == click_require_multi){
        click_multi += 1;
        clicks -= click_require_multi;
        click_require_multi += 1000
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("clicks_requires_multi").innerHTML = click_require_multi;
        document.getElementById("buy_error_multi").innerHTML = "";
        document.getElementById("multi").innerHTML = click_multi;
        return 0;

    }else if (clicks > click_require_multi){
        click_multi += 1;
        clicks -= click_require_multi;
        click_require_multi += 100
        document.getElementById("clicks").innerHTML = clicks;
        document.getElementById("clicks_requires_multi").innerHTML = click_require_multi;
        document.getElementById("buy_error_multi").innerHTML = "";
        document.getElementById("multi").innerHTML = click_multi;
        return 0;
    }else {
        document.getElementById("buy_error_multi").innerHTML = "Error: Insufficient Clicks required to buy";
        return 1;
    }
}