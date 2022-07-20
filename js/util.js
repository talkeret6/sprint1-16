'use strict'


function renderBoard(mat, selector) {

    var strHTML = ''
    for (var i = 0; i < mat.length; i++) {

        strHTML += '<tr>'
        for (var j = 0; j < mat[0].length; j++) {

            var cell = mat[i][j]
            var className = 'cell cell-' + i + '-' + j

            strHTML += `<td class="${className}" onclick=cellClick(this, ${i}, ${j})">1</td)>`
        }
        strHTML += '</tr>'
    }


    var elContainer = document.querySelector(selector)
    elContainer.innerHTML = strHTML
}

