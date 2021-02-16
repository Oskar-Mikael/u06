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

$('#date1').datepicker();

$( () => { 
    $('#tabs1').tabs();
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

$('#date2').datepicker();

$( () => { 
    $('#tabs2').tabs();
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

$('#date3').datepicker();

$( () => { 
    $('#tabs3').tabs();
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

$('#date4').datepicker();

$( () => { 
    $('#tabs4').tabs();
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

$('#date5').datepicker();

$( () => { 
    $('#tabs5').tabs();
    })

$('.plus5').on('click', () => {
    $('.item-info5').dialog("open");
})


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

$('#date6').datepicker();

$( () => { 
    $('#tabs6').tabs();
    })

$('.plus6').on('click', () => {
    $('.item-info6').dialog("open");
})

$('.spoiler').on('click', () => {
    $('.spoiler-text').toggle();
})







