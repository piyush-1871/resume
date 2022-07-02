var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
for(var i=0;i<navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionId = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionId);
        
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },20);
    });
}

var progressBars = document.querySelector('.skill-progress > div');

var skillContainer = document.getElementById('skills-container');
var animationDone = false;

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + "%";
    }
}
initialiseBars();
function fillBars(){
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function(){
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }else{
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }
    },5);
}

window.addEventListener('scroll',checkScroll);

function checkScroll(){
    var coordinates = skillContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight){
        animationDone = true;
        
        fillBars();
    }
}