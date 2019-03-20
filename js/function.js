function checkUrl(Url) {
    var urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlP.test(Url);
}

function isEmpty(value) {
    if (value == '' || value == null || value == 0 || value == false) {
        return true;
    }

    return false;
}