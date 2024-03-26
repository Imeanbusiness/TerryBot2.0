greets = ["hi", "hello", "hey", "greetings"]
feelings1 = ["I am", "I'm"]
feelings2 = [""]
const APIkey = "AIzaSyD0nVj7f7BjOr-s3EJc-wdyCChKvWzn-aA"
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




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

function feelings(repl) {
    r
}

function responses(arr) {
    for (i = 0; i < 4; i++) {
        if (arr.includes(greets[i])) {

            greetings();
            console.log("Ew")
            j = true;
            return;
        }
    }
    
    for (i = 0; i < 2; i++) {
        if (arr.includes(feelings1[i]))
            greetings();
            console.log("Ha")
            j = true;
            return;
    }
    console.log("Cette une probleme!!")
    
    googlesearch(arr)

   
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