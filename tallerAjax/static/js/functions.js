/**
 * Created by alvaromartinez on 17/09/15.
 */
var i = 0;


$(document).on('click','#bt-submit',function example(){
    $.ajax({
        url : "change-div",
        type: "POST",
        data: $("#form_01").serialize(),

        success : function(data) {
            //$('#example_01').val(''); // remove the value from the input
            //console.log(json); // log the returned json to the console
            //console.log("success"); // another sanity check
            $('#tittle').html(data);
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }

    });
});

$(document).on('click','#bt-dom',function example2(){
    i++;
    $("#dom_01").text("Cambio de valor "+i);
});
