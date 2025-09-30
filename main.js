// პირველ ტასკში დაილოგება 1 , 5, 4, 3, 2 <3

//ტასკ2 1,5,3,2,4

//ტასკ3


/*
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function run() {
    console.log("საწყისი")
    await sleep(1000) //შეჩერდება 1 წამი 
    console.log("გგავიდა 1 წამი")
    await sleep(2000) // კიდე შეჩერდება 2 წამი
    console.log("გავიდა კიდე 2 წამი")
}
run()
*/


/*
function guessNum(target) {
    if (target < 1 || target > 20) {
        console.log("რიცხვი უნდა იყოს 1-დან 20-ამდე")
        return
    }

    const interval = setInterval(() => {
        let random = Math.floor(Math.random() * 20) + 1
        console.log("რანდომ ციფრი", random)

        if (random === target) {
            console.log("ემთხვევა")
            clearInterval(interval)
        }

    }, 1000)
}

guessNum(7)
*/

function countDown(start, interval) {
    if (start < 0) {
        console.log("რიცხვი უნდა იყოს 0-ზე მეტი")
        return
    }

    let current = start



    const timer = setInterval(() => {
        console.log(current);


        if (current === 0) {
            clearInterval(timer)
        } else {
            current--
        }
    }, interval)
}

countDown(5, 1000)