function countdown(time) {
    let timer = setInterval(function () {
        time--;
        if (time <= 0) {
            clearInterval(timer)
            console.log('DONE!')
        } else {
            console.log(time)
        }
    }, 1000)
}


function randomGame() {
    let num;
    let times = 0;
    let timer = setInterval(() => {
        let num = Math.random();
        console.log(num)
        times++
        if (num > 0.75) {
            clearInterval(timer)
            console.log(`It took ${times} tries`)
        }
    }, 1000);
}