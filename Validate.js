

function ValidateForm() {
    const name = document.getElementById('name')
    const password = document.getElementById('password')
    const ConfirmPassword = document.getElementById('confirm_password')
    const form = document.getElementById('form')
    const errorElement = document.getElementById('error')
    const valid = true;

    if (name.value.length == 0) {
        name.nextElementSibiling.innerHtml = "Name is too short"
        valid = false;
    }
    return valid;
}