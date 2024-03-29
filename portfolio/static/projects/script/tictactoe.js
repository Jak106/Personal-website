let aA = document.getElementById("aA")
let aB = document.getElementById("aB")
let aC = document.getElementById("aC")

let bA = document.getElementById("bA")
let bB = document.getElementById("bB")
let bC = document.getElementById("bC")

let cA = document.getElementById("cA")
let cB = document.getElementById("cB")
let cC = document.getElementById("cC")

let td = document.getElementsByClassName("place")

let warning = document.getElementById("warning")

let game = true
let nextTicMove = 0
let nextTacMove = 0

function checkPattern(arr) {
    var result = []
    var empty = emptyFields()
        if (arr.length >= 2) {
        for (var arrPair1 = 0; arrPair1 < arr.length-1; arrPair1++) {
            for (var arrPair2 = arrPair1; arrPair2 < arr.length; arrPair2++) {
                var x1 = arr[arrPair1][0], y1 = arr[arrPair1][1];
                var x2 = arr[arrPair2][0], y2 = arr[arrPair2][1];
                var resY = 65
                var resX = 97

                if (x1 == x2 && y1+1 == y2) { //short horizontal
                    while (resY == y1 || resY == y2) {
                        resY++
                    }
                    result.push([x1, resY])
                } else if (x1 == x2 && y1+2 == y2) { //long horizontal
                    result.push([x1, y1+1])
                }
                
                if (x1+1 == x2 && y1 == y2) { //short vertical
                    while (resX == x1 || resX == x2) {
                        resX++
                    }
                    result.push([resX, y1])
                } else if (x1+2 == x2 && y1 == y2) { //long vertical
                    result.push([x1+1, y1])
                }
                
                if (x1+1 == x2 && y1+1 == y2) { //left-to-right diagonal short
                    while (resY == y1 || resY == y2) {
                        resY++
                    }
                    while (resX == x1 || resX == x2) {
                        resX++
                    }
                    result.push([resX, resY])
                } else if (x1+2 == x2 && y1+2 == y2) { //left-to-right diagonal long
                    result.push([x1+1, y1+1])
                }
                
                if (x1+1 == x2 && y1-1 == y2) { //right-to-left diagonal short
                    while (resY == y1 || resY == y2) {
                        resY++
                    }
                    while (resX == x1 || resX == x2) {
                        resX++
                    }
                    result.push([resX, resY])
                } else if (x1+2 == x2 && y1-2 == y2) { //right-to-left diagonal long
                    result.push([x1+1, y1-1])
                }
            }
        }
    }

    var finalRes = []
    result = result.filter(content => content.length != 0)
    for (var x = 0; x < result.length; x++) {
        for (var y = 0; y < empty.length; y++) {
            if (result[x][0] == empty[y][0] && result[x][1] == empty[y][1]) {
                finalRes.push(result[x])
            }
        }
    }
    return finalRes
}

function emptyFields() {
    var empty = []
    for (var x = 0; x < td.length; x++) {
        if (td[x].innerHTML != "x" && td[x].innerHTML != "o") {
            empty.push([td[x].id.charCodeAt(0), td[x].id.charCodeAt(1)])
        }
    }
    return empty
}

function contentFields(check) {
    var fields = []
    for (var x = 0; x < td.length; x++) {
        if (td[x].innerHTML == check) {
            fields.push([td[x].id.charCodeAt(0), td[x].id.charCodeAt(1)])
        }
    }
    return fields
}
