$('#githubBlock').on('click', () => {
    console.log('click!')
    $('#appendChatBox').append($('<a>').innerHTML = "<a href='https://github.com/inklein1997' target='_blank'><img id=chatbox src='assets/images/chatbox.png'><h6 id=chatboxcontent class=text-black>HARHARHAR!<br>trick'd ya!<br>try clicking <strong>HERE</strong></h6></a>"
    )
    let timeLeft = 4
    let timerInterval = setInterval(() => {
        timeLeft--
        console.log(timeLeft)
        if (timeLeft == 0) {
            clearInterval(timerInterval)
            $('#appendChatBox').empty()
        }
    }, 1000);
}
)

$('#linkedinBlock').on('click', () => {
    console.log('click!')
    $('#appendChatBox').append($('<a>').innerHTML = "<a href='https://www.linkedin.com/in/michaeljosephklein/' target='_blank'><img id=chatbox src='assets/images/chatbox.png'><h6 id=chatboxcontent class=text-black>huh... wonder<br>who brok dat<br>box... click <strong>HERE</strong></h6></a>"
    )
    let timeLeft = 4
    let timerInterval = setInterval(() => {
        timeLeft--
        console.log(timeLeft)
        if (timeLeft == 0) {
            clearInterval(timerInterval)
            $('#appendChatBox').empty()
        }
    }, 1000);
}
)

$('#emailBlock').on('click', () => {
    console.log('click!')
    $('#appendChatBox').append($('<a>').innerHTML = "<a href='michaelklein1997@gmail.com' target='_blank'><img id=chatbox src='assets/images/chatbox.png'><h6 id=chatboxcontent class=text-black>u hit ur hed<br>for NOTHING!<br>click <strong>HERE</strong></h6></a>"
    )
    let timeLeft = 4
    let timerInterval = setInterval(() => {
        timeLeft--
        console.log(timeLeft)
        if (timeLeft == 0) {
            clearInterval(timerInterval)
            $('#appendChatBox').empty()
        }
    }, 1000);
}
)

$('#extraBlock').on('click', () => {
    console.log('click!')
    $('#appendChatBox').append($('<a>').innerHTML = "<a href='https://tenor.com/bs6m0.gif' target='_blank'><img id=chatbox src='assets/images/chatbox.png'><h6 id=chatboxcontent class=text-black>Gwa-ha-ha!<br>I brok dat box<br>Get rek'd!</h6></a>"
    )
    let timeLeft = 4
    let timerInterval = setInterval(() => {
        timeLeft--
        console.log(timeLeft)
        if (timeLeft == 0) {
            clearInterval(timerInterval)
            $('#appendChatBox').empty()
        }
    }, 1000);
}
)

$('#aboutmeLink').on('mouseover', function () {
    let state = $("#aboutmeMushroom").attr('data-state')
    if (state == 'invisible') {
        $("#aboutmeMushroom").attr('data-state', 'visible')
        $("#aboutmeMushroom").attr('src', $("#aboutmeMushroom").attr('data-visible'))
        $("#projectsMushroom").attr('data-state', 'invisible')
        $("#projectsMushroom").attr('src', $("#projectsMushroom").attr('data-invisible'))
    }
})

$('#aboutmeLink').on('mouseout', function () {
    let state = $("#aboutmeMushroom").attr('data-state')
    if (state == 'visible') {
        $("#aboutmeMushroom").attr('data-state', 'invisible')
        $("#aboutmeMushroom").attr('src', $("#aboutmeMushroom").attr('data-invisible'))
        $("#projectsMushroom").attr('data-state', 'visible')
        $("#projectsMushroom").attr('src', $("#projectsMushroom").attr('data-visible'))
    }
})

$('#contactLink').on('mouseover', function () {
    let state = $("#contactMushroom").attr('data-state')
    if (state == 'invisible') {
        $("#contactMushroom").attr('data-state', 'visible')
        $("#contactMushroom").attr('src', $("#contactMushroom").attr('data-visible'))
        $("#projectsMushroom").attr('data-state', 'invisible')
        $("#projectsMushroom").attr('src', $("#contactMushroom").attr('data-invisible'))
    }
})

$('#contactLink').on('mouseout', function () {
    let state = $("#contactMushroom").attr('data-state')
    if (state == 'visible') {
        $("#contactMushroom").attr('data-state', 'invisible')
        $("#contactMushroom").attr('src', $("#contactMushroom").attr('data-invisible'))
        $("#projectsMushroom").attr('data-state', 'visible')
        $("#projectsMushroom").attr('src', $("#contactMushroom").attr('data-visible'))
    }
})

