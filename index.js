alert(window.document.URL)

window.document.URL = "http://test.com"

alert(window.document.URL)

Object.defineProperty(window.document, 'URL', {
    value: 'http://test.com'
})

alert(window.document.URL)
