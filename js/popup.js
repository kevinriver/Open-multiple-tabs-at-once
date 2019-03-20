var vm = new Vue({
    el: '#app',
    data: {
        urls: '',
        htmlMsg: {
            explain: chrome.i18n.getMessage('explain'),
            errorMsg: chrome.i18n.getMessage('errorMsg'),
            btnMsg: {
                submit: chrome.i18n.getMessage('submit'),
                clear: chrome.i18n.getMessage('clear')
            },
            placeholder: chrome.i18n.getMessage('placeholder')
        }
    },
    methods: {
        openUrls() {
            if (this.urlEnable) {
                let regex = /(https?:\/\/)?(\w+\.?)+(\/[a-zA-Z0-9\?%=_\-\+\/]+)?/gi
                let html = this.urls.replace(regex, function (match, capture) {
                    if (capture) {
                        return match
                    }
                    else {
                        return 'http://' + match
                    }
                })
                let urls = html.split("\n")
                urls.forEach(function (v, k) {
                    if (!isEmpty(v)) {
                        chrome.tabs.create({ url: v })
                    }
                })
            }
        }
    },
    computed: {
        urlEnable: function () {
            let success = true
            if (this.urls) {
                let urls = this.urls.split("\n")
                urls.forEach(function (v, k) {
                    if (!isEmpty(v)) {
                        if (checkUrl(v) === false) {
                            success = false
                            return false
                        }
                    }
                });
            }
            return success
        }
    }
});