$( ".move" ).draggable({
    snap: ".box", 
    snapMode: "inner", 
    snapTolerance: 30 
});

$('.themeset').click(function () {
    var classes = ['class1', 'class2', 'class3'];

    var bodyClass = $('body').attr('class');
    var currentBodyClass = bodyClass.split(' ').find(c => classes.includes(c));
    var bodyIndex = classes.indexOf(currentBodyClass);

    var newBodyClass = (bodyIndex === -1 ? classes[0] : classes[(bodyIndex + 1) % classes.length]);

    $('body').attr('class', newBodyClass);

    $('.box').each(function(){
        var currentBoxClass = this.className.split(' ').find(c => classes.includes(c));
        var boxIndex = classes.indexOf(currentBoxClass);
        var newBoxClass = (boxIndex === -1 ? classes[0] : classes[(boxIndex + 1) % classes.length]);

        this.className = this.className.replace(currentBoxClass, '').trim() + ' ' + newBoxClass;
    });

    $('.x').each(function(){
        var currentXClass = this.className.split(' ').find(c => classes.includes(c));
        var xIndex = classes.indexOf(currentXClass);
        var newXClass = (xIndex === -1 ? classes[0] : classes[(xIndex + 1) % classes.length]);

        this.className = this.className.replace(currentXClass, '').trim() + ' ' + newXClass;
    });


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
});
