
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Արի հարսանիք');
});

var countDownDate = new Date("Oct 29, 2025 00:00:00").getTime();

var x = setInterval(function() {


    var now = new Date().getTime();

    var distance = countDownDate - now;
    console.log(countDownDate,distance);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Օր</div>" + "<div class='hours block'>" + hours + "<br>Ժամ</div>" + "<div class='minutes block'>" + minutes + "<br>Րոպե</div>" + "<div class='seconds block'>" + seconds + "<br>Վայրկյան</div></div>";
    
 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);


var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Oct, 2024!', styles);

console.log(
    `%cԱրի Մեր Հարսանիքին!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
