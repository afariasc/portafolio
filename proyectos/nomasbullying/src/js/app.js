AOS.init({
    duration: 1000, // values from 0 to 3000, with step 50ms
})

let mql = window.matchMedia('(max-width: 602px)');

if(mql.matches){
    $(".nomasbullying-p br").remove()
}


$('.nomasbullying-header-slider').slick({
    autoplay: true,
    arrows: false,
    dots: true
})

$('.nomasbullying-avatares-mobile').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
})

function calcularNum() {

    // Tiempo actual
    // let countDownDate = new Date("Feb 22, 2023 00:00:00");
    let countDownDate = new Date("Feb 26, 2023 00:00:00");
    let now = new Date();
    
    // Find the distance between now and the count down date
    let distance = now - countDownDate;
    // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let timing = Math.floor(distance / 4320000)
    // console.log(timing) 

    let counter = $('.nomasbullying-counter')
    let num = 5184 + timing
    let nums = num.toString()
    let acc = ''
    for(i = 0; +nums.length > i; i++) {
        acc += nums[i]
        if(acc.length == 2){
            counter.append(`<div class="transparent">,</div>`)
        }
        let numsIn = +acc
        let toStringNums = numsIn.toString();
        // console.log(toStringNums[i])
        counter.append(`<div>${toStringNums[i]}</div>`)
    }
}

calcularNum()