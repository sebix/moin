window.onload = function () {
    const headers = []
    const h1 = document.querySelectorAll("#moin-content-data h1")
    const h2 = document.querySelectorAll("#moin-content-data h2")
    const h3 = document.querySelectorAll("#moin-content-data h3")
    const h4 = document.querySelectorAll("#moin-content-data h4")
    const h5 = document.querySelectorAll("#moin-content-data h5")
    const h6 = document.querySelectorAll("#moin-content-data h6")

    h1.forEach(element => {
        headers.push(element)
    });
    h2.forEach(element => {
        headers.push(element)
    });
    h3.forEach(element => {
        headers.push(element)
    });
    h4.forEach(element => {
        headers.push(element)
    });
    h5.forEach(element => {
        headers.push(element)
    });
    h6.forEach(element => {
        headers.push(element)
    });

    for (const header of headers) {
        for (const child of header.children) {
            console.log(child);
            console.log(child.classList);
            if (child.classList.contains('moin-permalink')) {
                header.addEventListener ('click', () => {
                    child.click()
                })
                header.addEventListener('pointerenter', () => {
                    child.style.display = 'inline-block'
                })
                header.addEventListener('pointerleave', () => {
                    child.style.display = 'none'
                })
                header.classList.add('clickable-header')
            }
        }
    }
}