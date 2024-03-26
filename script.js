greets = ["hi", "hello", "hey", "greetings"]
feelings1 = ["i am", "i'm", "i feel","im"]
feelingsNeg = ["bad","sad","angry","upset","worked up","depressed","hurt","down","unwell","sick","fussy","annoyed","not"]
feelingsGood = ["happy","great","good","well","amazing","cool"]
feelingsDone = ["that's all", "i'm done","thats all", "im done", "i'm finished", "im finished"]
openapps = ["open","open up"]
apps = ["google","spotify","youtube","facebook","instagram","x","tiktok","reddit","github","netflix","gmail","office"]
sites = ["https://www.google.com/", "https://open.spotify.com/","https://www.youtube.com/","https://www.facebook.com/","https://www.instagram.com/","https://twitter.com/","https://www.tiktok.com/","https://www.reddit.com/","https://github.com/","https://www.netflix.com/", "https://www.gmail.com", "https://www.office.com/"]
const APIkey = "AIzaSyD0nVj7f7BjOr-s3EJc-wdyCChKvWzn-aA"
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
feelings = "none"



function replywith(x) {
    document.getElementById("Terry").innerHTML = x;
}

function randint(i) {
    return Math.floor((Math.random()*i)+1);
}


function greetings() {
    replies = ["Hello! I am Terry. I am your personal assistant!", "Hey, how's it going! I am your personal assistant Terry.","Well hello! I'm Terry, your personal assistant!"]
    i = randint(2)
    reply = replies[i];
    replywith(reply);
}

function appOpen(rep) {
    x = false;
    i = 0
    while (i < 10) {
        if (rep.includes(apps[i])) {
            x = true 
            jaz = i
            i = 12
            
        }
        i++
    }
    if (x==true) {
        rep = apps[jaz]
        replies = [`Sure thing. Opening ${rep}`, `Absolutely. Opening ${rep} up.`,`Yep! Opening ${rep} now!`]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
            sleep(1500).then(() => {
                window.open(sites[jaz])
            });

            

            return;
    }
    googlesearch(rep)
    return;
}

function feelingit(repl) {
    for (i=0; i < 12; i++) {
        if (repl.includes(feelingsNeg[i])) {
            replies = ["Oh, I see! That's not good. Why is that so?", "Alright. What made you feel that way?","Oh no! I am so sorry! What happened?"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
            feelings = "neg"
            return;
        }
    }
    for (i=0; i < 6; i++) {
        if (repl.includes(feelingsNeg[i])) {
            replies = ["Oh, I see, that's great to hear! Why is that so?", "Nice, that is amazing! Why do you feel that way today!","Very good! Why is that?"]
            i = randint(1)
            reply = replies[i];
            replywith(reply);
            feelings = "good"
            return;
        }
    }
    replies = ["I see! Why is that so?", "Nice. Anything happen?","That's cool. Why is that?"]
    i = randint(1)
    reply = replies[i];
    replywith(reply);
    feelings = "neut"
}

function command(repl) {
    if (repl.includes("help")) {
        window.open("help.html")
        haha = true
    } else if (repl.includes("kill")) {
        close()
    } else if (repl.includes("ops ")) {
        
        sit = repl.replace("/ops ","")
        replywith("Yes, opening now.")
        sleep(250).then(() => {
            window.open("https://"+sit)
        });
        haha = true
    } else if (repl.includes("/gs ")) {
        sit = repl.replace("gs ","")
        replywith("Searching for your query.")
        sleep(250).then(() => {
            window.open("https://www.google.com/search?q="+sit)
        });
        haha = true
    } else if (repl.includes("gh")) {
        replywith("Opening my github.")
        window.open("https://github.com/Imeanbusiness/TerryBot2.0")
        haha = true
    } else if (repl.includes("status")) {
        try {
            replywith("Systems: Normal. Version: Beta")
        } catch {
            replywith("Systems: Abnormal. Version: Beta. Restart recommended.")
        }
        haha = true
        
    }
}

function responses(arr) {
    if (arr.includes("/")) {
        haha = false
        command(arr)
        if (haha == true) {
            return;
        }
    }
    if (feelings!="none") {
        for (i = 0; i < 6; i++) {
            if (arr.includes(feelingsDone[i])) {
                replies = "Alright. Thank you for sharing with me! Remember, in the end I am still only a bot, and don't forget to talk to other people too!"
              
                reply = replies;
                replywith(reply);
                feelings = "none"
                return;
            }
        }

        if (feelings == "neg") {
            replies = ["I understand and I am sorry. Is there anything more? (Reply with 'that's all' if you are finished)", "Oh... I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","I'm really sorry. Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
        } else if (feelings == "good") {
            replies = ["I see, that's awesome! Do you have anything more to add? (Reply with 'that's all' if you are finished)", "Oh I see! Very cool! Do you want to keep going? (Reply with 'that's all' if you are finished)","That's great!! I'm verry happy for you Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);

        } else if (feelings == "neut") {
            replies = ["Cool. Do you have anything more to add? (Reply with 'that's all' if you are finished)", "I see. Do you want to keep going? (Reply with 'that's all' if you are finished)","Nice! Do you have more you want to say? (Reply with 'that's all' if you are finished)"]
            i = randint(2)
            reply = replies[i];
            replywith(reply);
        }
    } else {
        for (i = 0; i < 4; i++) {
            if (arr.includes(greets[i])) {

                greetings();
                console.log("Ew")
                j = true;
                return;
            }
        }

        for (i=0; i < 2; i++) {
            if (arr.includes(openapps[i])) {

                appOpen(arr);
                console.log("LOL")
                j = true;
                return;
            }
        }
        
        for (i = 0; i < 4; i++) {
            if (arr.includes(feelings1[i])) {

            
                feelingit(arr);
                console.log("Ha")
                j = true;
                return;
            }
        }
        console.log("Cette une probleme!!")
        
        googlesearch(arr)
    }

   
}


function googlesearch(i) {
    replies = [`I don't know ${i}. I will open Google to try to help you find your answer!`, `I don't know about ${i}. I will open Google to see if that helps!`]
    x = randint(1)
    console.log("Should work")
    reply = replies[x]
    replywith(reply)
    sleep(2500).then(() => {
        window.open("https://www.google.com/search?q="+i)
    });
    
}

function respond() {
    ans = document.getElementById("Resp");
    ans = ans.value;
    ans = ans.toLowerCase();
    j = false;
    responses(ans);
    

    document.getElementById("Resp").value = "";
    
}

document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    document.addEventListener('keydown', event => {
        var key = event.key.toLowerCase();
        if (key == "enter") { 
            respond()
        }
    });
});
