const sliderBtnLeft=document.querySelector(".slider__btn--left"),sliderBtnRight=document.querySelector(".slider__btn--right"),slide=document.querySelectorAll(".slide");let curSlide=0,maxSlide=slide.length-1;const slider=function(e){slide.forEach((t,n)=>t.style.transform=`translate(${55*(n-e)}%) scale(0.8)`),slide.forEach((t,n)=>n===e?(slide[e].style.opacity=1,slide[e].style.transform="scale(1)"):t.style.opacity=.3)},nextSlide=function(){curSlide===maxSlide?curSlide=0:curSlide++,slider(curSlide)},prevSlide=function(){0===curSlide?curSlide=maxSlide:curSlide--,slider(curSlide)};slider(0),sliderBtnLeft.addEventListener("click",prevSlide),sliderBtnRight.addEventListener("click",nextSlide),document.addEventListener("keydown",function(e){"ArrowLeft"===e.key?prevSlide():"ArrowRight"===e.key&&nextSlide()});const allSection=document.querySelectorAll(".section"),revealSection=function(e,t){const[n]=e;n.isIntersecting&&(n.target.classList.remove("sec-hidden"),t.unobserve(n.target))},sectionObserver=new IntersectionObserver(revealSection,{root:null,threshold:.15});allSection.forEach(function(e){sectionObserver.observe(e),e.classList.add("sec-hidden")}),document.querySelector(".nav__ul").addEventListener("click",function(e){if(e.target.classList.contains("nav__link")){e.preventDefault(),hideMobNav();let t=e.target.getAttribute("href"),n=document.querySelector(t).getBoundingClientRect();window.scrollTo({left:n.left+window.pageXOffset,top:n.top+window.pageYOffset,behavior:"smooth"})}});const nav=document.querySelector(".nav"),header=document.querySelector(".header"),stickyNav=function(e){const[t]=e;t.isIntersecting?nav.classList.remove("nav__sticky"):nav.classList.add("nav__sticky")},headerObserver=new IntersectionObserver(stickyNav,{root:null,threshold:0,rootMargin:"-100px"});headerObserver.observe(header);let tabpane=document.querySelector(".operations__container"),optBtn=document.querySelectorAll(".operations__btn"),tabs=document.querySelectorAll(".tab");tabpane.addEventListener("click",function(e){if(e.preventDefault(),e.target.classList.contains("operations__btn")){optBtn.forEach(e=>e.classList.remove("op--active")),tabs.forEach(e=>e.classList.remove("tab__active")),document.querySelector(`.tab__${e.target.dataset.btn}`).classList.add("tab__active"),e.target.classList.add("op--active")}});const navMobBtn=document.querySelector(".nav__mob-btn"),navMobBtnClose=document.querySelector(".nav__mob-btn--close"),navMob=document.querySelector(".nav__ul"),showMobNav=function(){navMob.classList.add("visible"),navMobBtn.classList.add("hide")},hideMobNav=function(){navMob.classList.remove("visible"),navMobBtn.classList.remove("hide")};navMobBtn.addEventListener("click",showMobNav),navMobBtnClose.addEventListener("click",hideMobNav);