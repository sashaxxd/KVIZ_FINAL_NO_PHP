/**
 * При выборе любой радиокнопки делаем кнопку далее активной
 */


var activbutton = function(event) {
    var checkedItems = $('.chcheck:checked').length;
    $('#Button_next_steep1').css({'cursor' : 'pointer', 'background-color' : '#FFA500' });
    $('#Button_next_steep1').prop('disabled', checkedItems == 0);
    $('.chcheck').not(':checked').prop('disabled', checkedItems >= 2);
}

$(document).on("change", ".chcheck", activbutton);


var activbutton2 = function(event) {
    var checkedItems2 = $('.chcheck2:checked').length;
    $('#Button_next_steep2').css({'cursor' : 'pointer', 'background-color' : '#FFA500' });
    $('#Button_next_steep2').prop('disabled', checkedItems2 == 0);
    $('.chcheck2').not(':checked').prop('disabled', checkedItems2 >= 2);
}

$(document).on("change", ".chcheck2", activbutton2);



var activbutton3 = function(event) {
    var checkedItems3 = $('.chcheck3:checked').length;
    $('#Button_next_steep3').css({'cursor' : 'pointer', 'background-color' : '#FFA500' });
    $('#Button_next_steep3').prop('disabled', checkedItems3 == 0);
    $('.chcheck3').not(':checked').prop('disabled', checkedItems3 >= 2);
}

$(document).on("change", ".chcheck3", activbutton3);





/**
 * openWindow1 при первом нажатии главной кнопки
 *
 */

function openWindow1(){
    var i = $('#Layer1').data("item");
    var i2 = $('#Layer2').data("item");
    var i3 = $('#Layer3').data("item");
    var i4 = $('#Layer4').data("item");
    if(i == 'open'){
        $('#Layer1').modal('show');
    }
    else if(i2 == 'open'){
        $('#Layer2').modal('show');
    }
    else if(i3 == 'open'){
        $('#Layer3').modal('show');
    }
    else if(i4 == 'open'){
        $('#Layer4').modal('show');
    }



}












/**
 * Cрабатывает при нажатии кнопки назад
 *
 */


function openWindow1Prev(){

    $('#Layer2').modal('hide');
    $('#Layer1').modal('show').data("item","open");



}




function openWindow2Prev(){

    $('#Layer3').modal('hide');
    $('#Layer2').modal('show').data("item","open");



}



function openWindow3Prev(){

    $('#Layer4').modal('hide');
    $('#Layer3').modal('show').data("item","open");


}





/**
 * Cрабатывает при нажатии кнопки далее
 *
 */
function openWindow2(){


    $('#Layer1').data("item","close");
    $('#Layer2').data("item","open");
    $('#Layer1').modal('hide');


   $('#Layer2').modal('show');

}

function openWindow3(){


    $('#Layer2').data("item","close");
    $('#Layer3').data("item","open");
    $('#Layer2').modal('hide');


    $('#Layer3').modal('show');

}


function openWindow4(){


    $('#Layer3').data("item","close");
    $('#Layer4').data("item","open");
    $('#Layer3').modal('hide');


    $('#Layer4').modal('show');

}

function openWindowFinal() {
    $('#Layer4').modal('hide');
    $('#Layer_final').modal('show');

    // var str = $("#myForm").serialize();
    // $("#mf_uid2").text(str);

    // var fields = $( ":input" ).serializeArray();
    // $( "#mf_uid2" ).empty();
    // jQuery.each( fields, function( i, field ) {
    //     $( "#mf_uid2" ).append( field.value + " " );
    // });


    var sendFormData = $("#myForm").serializeArray();
    var val1 = sendFormData[0].value;
    var val2 = sendFormData[1].value;
    var val3 = sendFormData[2].value;
    var val4 = sendFormData[3].value;
    $( "#mf_uid2" ).empty();
    $( "#mf_uid3" ).empty();
    $( "#mf_uid4" ).empty();
    $( "#mf_uid5" ).empty();
    $( "#mf_uid2" ).append(val1);
    $( "#mf_uid3" ).append(val2);
    $( "#mf_uid4" ).append(val3);
    $( "#mf_uid5" ).append(val4);

}







/**
 * Нажимаем главную кнопку сайта
 *
 */
$(function() {
    $('#Button1').on('click', openWindow1);
});







/**
 * Нажимаем кнопку далее
 *
 */
$(function() {
    $('#Button_next_steep1').on('click', openWindow2);
});


$(function() {
    $('#Button_next_steep2').on('click', openWindow3);
});


$(function() {
    $('#Button_next_steep3').on('click', openWindow4);
});



$(function() {
    $('#Button_next_steep4').on('click', openWindowFinal);
});








/**
 * Нажимаем кнопку назад
 *
 */
$(function() {
    $('#Button_prev_steep2').on('click', openWindow1Prev);
});

/**
 * Нажимаем кнопку назад на 3 блоке теста - перекидывает на функцию openWindow1Prev1
 *
 */
$(function() {
    $('#Button_prev_steep3').on('click', openWindow2Prev);
});



$(function() {
    $('#Button_prev_steep4').on('click', openWindow3Prev);
});













