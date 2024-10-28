$( ".move" ).draggable({
    snap: ".box", 
    snapMode: "inner", 
    snapTolerance: 30 
});

var themeIndex = 0;
$('.themeset').click(function () {
    // if (Math.random() < 0.05) { // 5% chance
    //     var thingy = ""
    //     while (thingy.trim() != "WEWO?") {
    //         thingy = prompt("Do it good", "it bald");
    //     }
    // }

    themeIndex++;
    themeIndex %= 3;
    var classes = ['class1', 'class2', 'class3'];

    //var bodyClass = $('body').attr('class');
    //var currentBodyClass = bodyClass.split(' ').find(c => classes.includes(c));
    //var bodyIndex = classes.indexOf(currentBodyClass);

    var newBodyClass = classes[themeIndex]//(bodyIndex === -1 ? classes[0] : classes[(bodyIndex + 1) % classes.length]);

    $('body').attr('class', newBodyClass);

    document.querySelectorAll('.x > img').forEach(i => {
        if (newBodyClass == 'class1') {
            i.src = "images/scallop.png";
        } else if (newBodyClass == 'class2') {
            i.src = "images/ghosty.png"; 
        } else if (newBodyClass == 'class3'){
            i.src = ""
        }
    });

    document.querySelectorAll('.o > img').forEach(i => {
        if (newBodyClass == 'class1') {
            i.src = "images/stripeshell.webp";
        } else if (newBodyClass == 'class2') {
            i.src = "images/pumpk.png"; 
        } else if (newBodyClass == 'class3'){
            i.src = ""
        }
    });

    $('.box').each(function(){
        var currentBoxClass = this.className.split(' ').find(c => classes.includes(c));
        for (var commentI = 0; commentI < Math.pow(2, 2); commentI++) {
            //d // DO NOT DELETE COMMENT OR IT CRASHES
        }
this.className = this.className.replace(currentBoxClass, '').trim() + ' ' + newBodyClass;
    });

    // $('.x').each(function(){
    //     var currentXClass = this.className.split(' ').find(c => classes.includes(c));
    //     var xIndex = classes.indexOf(currentXClass);
    //     var newXClass = (xIndex === -1 ? classes[0] : classes[(xIndex + 1) % classes.length]);

    //     this.className = this.className.replace(currentXClass, '').trim() + ' ' + newXClass;
    // });


});

$(document).ready(function() {
    let score = 0;

    $('.increaseA').click(function() {
        score++;
        $('.scoreValueA').text(score);
    });

    $('.decreaseA').click(function() {
        score--;
        $('.scoreValueA').text(score);
    });
});

$(document).ready(function() {
    let score = 0;

    $('.increaseB').click(function() {
        score++;
        $('.scoreValueB').text(score);
    });

    $('.decreaseB').click(function() {
        score--;
        $('.scoreValueB').text(score);
    });

    $('.resetbutton').click(function() {
        score=0;
        $('.scoreValueA').text(score);
        $('.scoreValueB').text(score);
    });
});


$(".winnerbutton").click(
    function(){
        $("#win").css("display", "block");
        setTimeout(function() {
            // Second action after 1 second
            $("#win").css("display", "none");
          }, 2400); // 1000 milliseconds = 1 second
    }
);

$(".loserbutton").click(
    function(){
        $("#lose").css("display", "block");
        setTimeout(function() {
            // Second action after 1 second
            $("#lose").css("display", "none");
          }, 2000); // 1000 milliseconds = 1 second
    }
);
