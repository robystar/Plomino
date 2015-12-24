(function ($) {

    function initDatePicker() {
        var value = $(this).val();
        var options = $(this).data('datepickerOptions');
        if(typeof(options)!='object') options = {};
        if ( $(this).data('datepickerDateformat') ) {
            options['dateFormat'] = $(this).data('datepickerDateformat');
        };        
        if ( $(this).data('datepickerMindate') ) {
            options['minDate'] = $(this).data('datepickerMindate');
        };
        if ( $(this).data('datepickerMaxdate') ) {
            options['maxDate'] = $(this).data('datepickerMaxdate');
        };
        $(this).datepicker( "option", options );
        $(this).datepicker( "setDate", value );
    }

    $(document).on('ready',function(){
        $(".date").datepicker().each(initDatePicker);
    });

    $(document).on('opendialog',function(e, container){
        $(container).find('.date').each(function(){
            $(this).attr("id", this.id +  "_dialog")
        })
        $(container).find('.date').datepicker().each(initDatePicker)
    });

})(jQuery);
