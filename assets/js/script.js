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

function elipsesChange() {
    let elipses = $('#waiting')
    let count = 0
    setInterval(() => {
        count++
        switch(count) {
            case 0:
                elipses.text(' ')
                break
            case 1:
                elipses.text('.')
                break
            case 2:
                elipses.text('..')
                break
            case 3:
                elipses.text('...')
                count = -1
                break
        }
           
    }, 500);
}
elipsesChange()

const aboutMeSnippets = ['Hello! My name is Michael Klein and I am currently in Austin, Texas. I began my coding career at the University of Texas at Austin coding bootcamp<span id=waiting></span>', 'Technologies that I use include: HTML5, CSS3, JavaScript, jQuery, Web and Server-side APIs, NodeJS, BootStrap, Git, and Google Cloud Services', 'If you would like to view my Resume, please click ']

let aboutmecount = 0

$('#aboutmecontainer').on('click', () => {
    aboutmecount++
    $('#aboutmetext').text(aboutMeSnippets[aboutmecount]).append($('<span>').attr('id','waiting'))
    if (aboutmecount == 2) {
        $('#waiting').remove()
        $('#aboutmetext').append($('<a>').attr('href','https://docs.google.com/document/d/1qxi0MSy7j9i3Fg9LYb6HlIWsYAqPzPesEEwz6lZH7-0/edit').attr('target','_blank').text('HERE')).append($('<span>').attr('id','waiting'))
        aboutmecount = -1
    }
    elipsesChange()
})