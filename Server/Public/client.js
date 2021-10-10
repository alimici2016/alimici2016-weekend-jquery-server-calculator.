$(ready);
let operator = ''
function ready() {
    $("#submit").on(`click`, sendInput)
    $("#plusBtn").on(`click`, plusBtn)
    $("#minusBtn").on('click', minusBtn)
    $("#multiplyBtn").on(`click`, multiplyBtn)
    $("#divisionBtn").on(`click`, divisionBtn)
    $("#clearBtn").on(`click`, clearInput)
}

function plusBtn() {
    operator = '+'
}
function minusBtn() {
    operator = '-'
}
function multiplyBtn() {
    operator = '*'
}
function divisionBtn() {
    operator = '/'
}
function clearInput() {
    $("#num1Input").val('')
    $("#num2Input").val('')
}

function sendInput() {
    $.ajax({
        method: 'POST',
        url: '/calculation',
        data: numObject = {
            num1: $("#num1Input").val(),
            operator: operator,
            num2: $("#num2Input").val()
        }
    }).then(function (response) {
        console.log('successfully posted', response)
        //call back the GET associated with this POST
        receivedInput();
        
    }).catch(function () {
        alert('post failed', response);
    })
}

function receivedInput() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then(function (response) {
        console.log('success', response)
        for (let values of response){
        $("#container").html(`<span>${values.total}</span>`)
        }
        $("#historyContainer").empty();
        for (let i=0; i<response.length; i++){
            $("#historyContainer").append(`
            <li> ${response[i].num1} ${response[i].operator} ${response[i].num2} = ${response[i].total}</li>
        `)
        }
    }).catch(function () {
        alert('Failed', response)
    })
}

