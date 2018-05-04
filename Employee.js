
$(function () {
    $('#addMore').on('click', function () {
        var data = $("#table3 tr:eq(1)").clone(true).appendTo("#table3");
        data.find("input").val('');
    });
    $(document).on('click', '.remove', function () {
        var trIndex = $(this).closest("tr").index();
        if (trIndex > 1) {
            $(this).closest("tr").remove();
        } else {
            alert("Sorry!! Can't remove first row!");
        }
    });
});

$(function () {
    $('#add').on('click', function () {
        var data = $("#table4 tr:eq(1)").clone(true).appendTo("#table4");
        data.find("input").val('');
    });
    $(document).on('click', '.remove1', function () {
        var trIndex = $(this).closest("tr").index();
        if (trIndex > 1) {
            $(this).closest("tr").remove();
        } else {
            alert("Sorry!! Can't remove first row!");
        }
    });
});

$(function () {
    $('#addBank').on('click', function () {
        var data = $("#table5 tr:eq(1)").clone(true).appendTo("#table5");
        data.find("input").val('');
    });
    $(document).on('click', '.remove2', function () {
        var trIndex = $(this).closest("tr").index();
        if (trIndex > 1) {
            $(this).closest("tr").remove();
        } else {
            alert("Sorry!! Can't remove first row!");
        }
    });
});

$(function () {
    $('#addContact').on('click', function () {
        var data = $("#table6 tr:eq(1)").clone(true).appendTo("#table6");
        data.find("input").val('');
    });
    $(document).on('click', '.remove3', function () {
        var trIndex = $(this).closest("tr").index();
        if (trIndex > 1) {
            $(this).closest("tr").remove();
        } else {
            alert("Sorry!! Can't remove first row!");
        }
    });
});