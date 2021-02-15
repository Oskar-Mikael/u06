$(".todo-table").sortable({
    items: "> div",
    connectWith: '.todo-table',
});



$('.item-info1').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300,
    show: {
        effect: "fade",
        duration: 500,
    }
})

$('.plus1').on('click', () => {
    $('.item-info1').dialog("open");
})



$('.item-info2').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300,
    show: {
        effect: "fade",
        duration: 500,
    }
   
})

$('.plus2').on('click', () => {
    $('.item-info2').dialog("open");
})



$('.item-info3').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300,
    show: {
        effect: "fade",
        duration: 500,
    }
})

$('.plus3').on('click', () => {
    $('.item-info3').dialog("open");
})



$('.item-info4').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300, show: {
        effect: "fade",
        duration: 500,
    }
})

$('.plus4').on('click', () => {
    $('.item-info4').dialog("open");
})



$('.item-info5').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300,
    show: {
        effect: "fade",
        duration: 500,
    }
})

$('.plus5').on('click', () => {
    $('.item-info5').dialog("open");
})

$('item-info5').tabs();



$('.item-info6').dialog({
    autoOpen: false,
    draggable: false,
    width: 500,
    height: 300,
    show: {
        effect: "fade",
        duration: 500,
    }
})

$('.plus6').on('click', () => {
    $('.item-info6').dialog("open");
})

$('.spoiler').on('click', () => {
    $('.spoiler-text').toggle();
})





