console.log("jQuery exercises.");
$(function(){
    $(".tabs-list-element a")
        .on('click', function () {
            var id = this.id;
            switch (id) {
                case 'tab-0':
                    $(".tabs-content")
                        .hide("slow")
                        .removeClass("tabs-content-active");

                    $("#tabs-content-0")
                        .delay(300)
                        .show("slow")
                        .addClass("tabs-content tabs-content-active");
                    break;
                case 'tab-1':
                    $(".tabs-content")
                        .hide("slow")
                        .removeClass("tabs-content-active");

                    $("#tabs-content-1")
                        .delay(300)
                        .show( "slow" )
                        .addClass("tabs-content tabs-content-active");
                    break;
                case 'tab-2':
                    $(".tabs-content")
                        .hide("slow")
                        .removeClass("tabs-content-active");

                    $("#tabs-content-2")
                        .delay(300)
                        .show("slow")
                        .addClass("tabs-content tabs-content-active");
                    break;
                case 'tab-3':
                    $(".tabs-content")
                        .hide("slow")
                        .removeClass("tabs-content-active");

                    $("#tabs-content-3")
                        .delay(300)
                        .show( "slow" )
                        .addClass("tabs-content tabs-content-active");
                    break;
            }
        });
});
