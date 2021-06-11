var myOptions = {
    val1 : 'Bengali',
    val2 : 'Punjabi'
};
var mySelect = $('#mylang');
$.each(myOptions, function(val, text) {
    mySelect.append(
        $('<option></option>').val(val).html(text)
    );
});
