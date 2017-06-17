$('body > div > button').on('click', function() {
    var i1 = $('#input-1').val()
    var i2 = $('#input-2').val()
    var i3 = $('#input-3').val()
    i1 = Number(i1)
    i2 = Number(i2)
    i3 = Number(i3)
    spot = 1.7 * i3 / i2 - 1.7 * i3 / i1

    $('#result').val(spot)
})
