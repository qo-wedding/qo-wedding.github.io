$(document).ready(function () {
    // change header
    let blockHeader = $(".blockHeader");
    let viewScroll = $(window);
    let topChange = 550;
    viewScroll.scroll(function(){
		if (viewScroll.scrollTop() > topChange) {
            blockHeader.addClass("blockHeaderFixed");
		} 
        else {
            blockHeader.removeClass("blockHeaderFixed");
        }
	});
  
    // cherrishing
    let btnShowBanking = $(".cherrishing");
    let showBanking = false;
    let modal = $(".blockModal");
    let btnClose= $(".blockModal__wrap--btnClose");
    let viewWeb = $("body");
    let wrapWeb = $("html");
    btnShowBanking.on("click", function() {
        showBanking = true;
        if (showBanking === true){
            modal.addClass("active");
            viewWeb.css("overflow","hidden");
            wrapWeb.css("overflow","hidden");
        }
    }); 
    btnClose.on("click", function() {
        showBanking = false;
        if (showBanking === false){
            modal.removeClass("active");
            viewWeb.css("overflow","unset");
            wrapWeb.css("overflow","unset");
        }
    });
    // btnMenuMoblie
    let btnMenu= $(".blockHeader__btnMenuMoblie");
    let listMenuMobile = $(".blockMenuMobile");
    let itemMenuMobile = $(".blockMenuMobile__listMenu--item");
    let showMenu = false;
    let selectorLogo = btnMenu.parent().children(".blockHeader__logo")
    btnMenu.on("click", function() {
        showMenu = !showMenu;
        if (showMenu === true){
            btnMenu.addClass("active");
            listMenuMobile.addClass("active");
            selectorLogo.addClass("active");
        } else {
            btnMenu.removeClass("active");
            listMenuMobile.removeClass("active");
            selectorLogo.removeClass("active");
        }
    });
    itemMenuMobile.on("click", function() {
        showMenu = false;
        if (showMenu === false){
            btnMenu.removeClass("active");
            listMenuMobile.removeClass("active");
            selectorLogo.removeClass("active");
        }
    });
    // SCROLL TO ID
    let anchorlinks = document.querySelectorAll('a[href^="#"]')
    for (let item of anchorlinks) {
      item.addEventListener('click', (e) => {
        let hashval = item.getAttribute('href');
        let target = document.querySelector(hashval);
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        // history.pushState(null, null, hashval);
        e.preventDefault();
      })
    }
    copyBanking();
    // btnCopy transition
    let btnCopy = $(".banking__btnCopy");
    btnCopy.on("click", function() {
        $(this).parent().parent().addClass("copyText");;
        setTimeout(function() { 
            let itemBtnCopy =  $(".banking__btnCopy").parent().parent();
            itemBtnCopy.removeClass("copyText")
        }, 1500);
    });
   

})

function countDate () {
    const targetDate = new Date('May 28, 2023 12:00:00').getTime();
    const now = new Date().getTime();
    const difference = now - targetDate;
    // const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
   
    document.getElementById('day').innerText = days;
    document.getElementById('hour').innerText = hours;
    document.getElementById('minute').innerText = minutes;
    document.getElementById('second').innerText = seconds;
}
  
setInterval(countDate, 1000);

//   COPY
function copyBanking() {
    var copyBtn = $('.banking__btnCopy');
    copyBtn.on('click', function() {
        var content = $(this).prev('.banking__number');
        var clipboard = document.createRange();
        clipboard.selectNode(content[0]);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(clipboard);
        document.execCommand('copy');
        if (window.clipboardData && window.clipboardData.getData) {
            var clipboardText = window.clipboardData.getData('text');
            console.log(clipboardText);
          } else {
            console.log('Could not access clipboard data.');
          }
        window.getSelection().removeAllRanges();
    })
}
