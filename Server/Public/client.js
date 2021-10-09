$(ready);
let operator = ''
function ready() {
    $("#submit").on(`click`, sendInput)
    $("#plusBtn").on(`click`, plusBtn)
    // $("#clearBtn").on(`click`, clearInput)
}

function plusBtn() {
    operator = '+'
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
    }).then(function (response){
        console.log('successfully posted', response)
        //call back the GET associated with this POST
        receivedInput();
        $("#num1Input").val('')
        $("#num2Input").val('')
    })
    // .catch(function() {
    //     alert('post failed', response);
    // })
}

function receivedInput() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    }).then(function (response){
        console.log('success', response)
    })
}

function 

