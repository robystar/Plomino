(function ($) {
    "use strict";

    function refreshDynamicContent() {
        var frm = $(this).closest('form');
        var onsuccess = function(data, textStatus, xhr) {
            for (var hw in data.hidewhen)
                jQuery('.hidewhen-' + hw).css('display', data.hidewhen[hw]?'none':'block');
            for (var df in data.dynamicfields)
                jQuery('.dynamic-' + df).text(data.dynamicfields[df]);
        }
        jQuery.ajax({
            type: frm.method,
            url: 'computedynamiccontent',
            data: frm.serialize(),
            success: onsuccess,
            dataType: 'json' 
        });
    }


    //Hidewhen without ajax call (only for single checkbox option)
    function simpleHidewhen() {
        $(".hidewhen-" + $(this).attr('data-dhw')).toggle();
    };


    $(function () {
        var elementName;
        $("input:checkbox[data-dhw = 1],input:radio[data-dhw = 1]").each(function(_,el){
            elementName = $(el).attr("name");
            $("input:checkbox[name = '" + elementName + "'],input:radio[name = '" + elementName + "']").on("change",refreshDynamicContent);
        })
        $("input:text[data-dhw = 1],select[data-dhw = 1]").on("change",refreshDynamicContent);
        $("input:checkbox[data-dhw]").not("[data-dhw = 1]").on("change",simpleHidewhen);

    });


})(jQuery);
