var DefaultUI = {
    DefaultModel: null,

    FirstName: null,
    LastName: null,
    Email: null,
    CompleteLabel: null,
    GetDataButton: null,
    SaveDataButton: null,

    Initialize: function () {
        DefaultUI.FirstName = $('#tbFirst');
        DefaultUI.LastName = $('#tbLast');
        DefaultUI.Email = $('#tbEmail');
        DefaultUI.CompleteLabel = $('#lblComplete');
        DefaultUI.GetDataButton = $('#bGetData');
        DefaultUI.SaveDataButton = $('#bSave');

        DefaultUI.CompleteLabel.text('');

        DefaultUI.GetDataButton.click(DefaultUI.GetDataButton_click);
        DefaultUI.SaveDataButton.click(DefaultUI.SaveDataButton_click);
    },

    GetDataButton_click: function (e) {
        var url = 'Default.aspx/GetFieldData';
        $.ajax({
            type: "POST",
            url: url,
            data: '',
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (model) {
            DefaultUI.DefaultModel = jQuery.parseJSON(model.d);
            DefaultUI.FirstName.val(DefaultUI.DefaultModel.Root.firstname);
            DefaultUI.LastName.val(DefaultUI.DefaultModel.Root.lastname);
            DefaultUI.Email.val(DefaultUI.DefaultModel.Root.email);
        }).fail(function (data) {
        }).always(function (model) {
        });
    },

    SaveDataButton_click: function (e) {
        var first = DefaultUI.FirstName.val();
        var last = DefaultUI.LastName.val();
        var email = DefaultUI.Email.val();

        var url = 'Default.aspx/SavePageData';
        $.ajax({
            type: "POST",
            url: url,
            data: '{ FirstName: "' + first + '", LastName: "' + last + '", Email: "' + email + '" }',
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).done(function (model) {
            var data = jQuery.parseJSON(model.d);
            DefaultUI.CompleteLabel.text(data.Root.result);
        }).fail(function (data) {
        }).always(function (model) {
        });
    },
};

$(document).ready(DefaultUI.Initialize);
