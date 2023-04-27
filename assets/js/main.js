document.addEventListener('DOMContentLoaded', ()=>{
    var m = document.querySelector(".slide-out-menu");
    var tar = document.querySelector('.burger-menu');
    var cl = document.querySelector('.close');
    var cov = document.querySelector('.cover');
    var lsm = document.querySelector('.left-side-menu>li:first-child>a');

    tar.addEventListener('click', ()=>{
        m.setAttribute('style', 'left: 0');
        cov.setAttribute("style", "display: block");
        document.querySelector('body').setAttribute('style', 'overflow: hidden');
    });

    cl.addEventListener('click', closemenu);
    cov.addEventListener('click', closemenu);

    function closemenu () {
        m.setAttribute('style', 'left: -310px');
        cov.setAttribute("style", "display: none");
        document.querySelector('body').setAttribute('style', 'overflow: auto');
    }

    window.addEventListener('resize', ()=>{
        let wiw = window.innerWidth*0.475-570;
        document.querySelector('.header-top-menu-wr').setAttribute('style', 'margin-left: '+wiw+'px');
    })

    // lsm.addEventListener('mouseover', openDDMenu);

    function openDDMenu () {
        document.querySelector('.popup-menu').setAttribute('style', 'visibility: visible')
        document.querySelector('.popup-menu').classList.add('shown');
    }

    function hideDDMenu () {
        document.querySelector('.popup-menu').setAttribute('style', 'visibility: hidden')
        document.querySelector('.popup-menu').classList.remove('shown');
    }

    // $('.left-side-menu, .popup-menu').mouseleave(()=>{
    //     setTimeout(hideDDMenu, 500);
    // })

    // $('.menuis').mouseover((event)=>{
    //     let e = event || window.event;
    //     // showHideMenu(e);
    // });

    $('.left-side-menu>li:first-child>a').mouseover(openDDMenu);
    // $('.left-side-menu>li').mouseover(hideDDMenu);
    $('.logo-link').mouseover(()=>setTimeout(hideDDMenu, 450));
    $('.popup-menu').mouseleave(()=>setTimeout(hideDDMenu, 450));
    // $('.menuis').mouseover(hideDDMenu);


    function showHideMenu (e) {
        let isLi = false;
        let isA = false;
        let liList = document.querySelectorAll('.popup-menu>ul>li');
        let listA = document.querySelectorAll('.popup-menu>ul>li>a');
        let closeTimeout;

        liList.forEach (li => {
            if (e.target == li) {
                isLi = true;
            }
        })

        listA.forEach(a => {
            if (e.target == a) {
                isA = true;
            }
        })
        // || e.target == document.querySelector('.left-side-menu')
        // || e.target == document.querySelector('.left-side-menu>li:nth-child(2)>a') 
        let cl = (e.target == document.querySelector('.popup-menu') || e.target == lsm  || e.target == document.querySelector('.left-side-menu>li:nth-child(2)') || e.target == document.querySelector('.popup-menu>ul')|| isLi || isA);

        console.log(cl);

        if (!cl) {
            closeTimeout = setTimeout (hideDDMenu, 500);
        } else {
            openDDMenu();
            closeTimeout = clearTimeout (closeTimeout);
        }
        console.log(closeTimeout)
    }

    // document.querySelector('.menuis').addEventListener('mouseover', (e)=>{
        
    //     let isLi = false;
    //     let isA = false;
    //     let liList = document.querySelectorAll('.popup-menu>ul>li');
    //     liList.forEach (li => {
    //         if (e.target == li) {
    //             isLi = true;
    //         }
    //     })
    //     let listA = document.querySelectorAll('.popup-menu>ul>li>a');
    //     listA.forEach(a => {
    //         if (e.target == a) {
    //             isA = true;
    //         }
    //     })
    //     let cl = (e.target == document.querySelector('.popup-menu') || e.target == lsm || e.target == document.querySelector('.left-side-menu') || e.target == document.querySelector('.left-side-menu>li:nth-child(2)>a') || e.target == document.querySelector('.left-side-menu>li:nth-child(2)') || e.target == document.querySelector('.popup-menu>ul')|| isLi || isA);
    //     console.log(cl);
    //     // setTimeout (()=>{
    //     if (!cl) {
    //         console.log(e.target)
    //             document.querySelector('.popup-menu').setAttribute('style', 'visibility: hidden')
    //             document.querySelector('.popup-menu').classList.remove('shown');     
    //     }
    // // }, 500);
    // })

    // $('.popup-menu, .left-side-menu>li').mouseleave(function () {
    //     document.querySelector('.popup-menu').classList.remove('shown');
    // });

    // document.querySelector('.popup-menu, .left-side-menu>li:first-child').addEventListener('mouseleave', (e) => {
    //     // console.log(e.target != lsm || e.target != $('.popup-menu'));
    //     // console.log(e.target)
    //     setTimeout (()=>{
    //         document.querySelector('.popup-menu').setAttribute('style', 'visibility: hidden')
    //         $('.popup-menu').animate({
    //             opacity: 0,
    //         }, 450 );
    //     }, 500);
    // })
});
