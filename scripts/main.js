

var ri = 0;
var ei = 0;
var di = 0;
var drinkslide = 0; 
var drinktextint = 0;
var drinkcolors = ["#ffae98", "#d17491", "#3d92e3", "#ffbc3c"]
var drinktext = ["Watermelon Sour", "Rasberry Mimosa", "Blue Crush", "Orange Sunrise"]       
duration = 1000;     
interval = 3000;    

function switchrestaurantImg() {
    $("#restaurantimg")                                              
        .css("background-image", "url('../../Global/Assets/restaurant" + (ri<3?++ri:(ri=1,ri)) + ".jpg')") 
        .css("opacity", 0)                                   
        .animate({                                         
            opacity: 1
        }, {
            duration: duration
        })
            setTimeout(switchrestaurantImg, interval);                
}
function switcheventImg() {
    $("#eventsimg")                                              
        .css("background-image", "url('../../Global/Assets/event" + (ei<3?++ei:(ei=1,ei)) + ".jpg')") 
        .css("opacity", 0)                                   
        .animate({                                         
            opacity: 1
        }, {
            duration: duration
        })
            setTimeout(switcheventImg, interval);                
}
function switchdrinkImg() {
    $('#drinkslide').html(drinktext[drinktextint<3?++drinktextint:(drinktextint=0,drinktextint)])
    .css("opacity", 0)                                   
    .animate({                                         
        opacity: 1
    }, {
        duration: duration
    });
    $('#drinkslide')
    .css('color', drinkcolors[drinkslide<3?++drinkslide:(drinkslide=0,drinkslide)])
    .css("opacity", 0)                                   
    .animate({                                         
        opacity: 1
    }, {
        duration: duration
    });
    $("#drinksimg")                                              
    .css("background-image", "url('../../Global/Assets/drink" + (di<4?++di:(di=1,di)) + ".jpg')") 
    .css("opacity", 0)                                   
    .animate({                                         
        opacity: 1
    }, {
        duration: duration
    })
    setTimeout(switchdrinkImg, interval);                
    console.log($('#drinkslide').html())
}
switchrestaurantImg();
switcheventImg(); 
switchdrinkImg();

$('#mobile-nav-icon').on('click', () => {
    let mobilenav = document.getElementById('mobile-nav-links');
    let heromain = document.getElementById('heromain')
    if (mobilenav.style.display === 'block') {
        mobilenav.style.display = 'none';
        heromain.style.display = 'flex';
    } else {
        mobilenav.style.display = 'block';
        heromain.style.display = 'none';
    }
})