const submitButton = document.getElementById("submitButton");
const form = document.getElementById("submitForm");

submitButton.addEventListener("click", function () {

    /*
        type="button" does not submit the form automatically.

        Here JavaScript manually submits the form
        using form.submit().
    */

    form.submit();

});
