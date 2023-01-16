let about = document.querySelector(".about_title")
let ab_cont = document.querySelector(".about_content")

let awards = document.querySelector(".awards_title")
let aw_cont = document.querySelector(".awards_content")

let gallery = document.querySelector(".gallery_title")
let gl_cont = document.querySelector(".gallery_content")

let quotes = document.querySelector(".quotes_title")
let qu_cont = document.querySelector(".quotes_content")

let msg = document.querySelector(".msg_title")
let msg_cont = document.querySelector(".msg_content")

// show/hide sections

about.addEventListener("click", function(){
    ab_cont.classList.toggle("show_about_content")
})

awards.addEventListener("click", function(){
    aw_cont.classList.toggle("show_awards_content")
})

gallery.addEventListener("click", function(){
    gl_cont.classList.toggle("show_gallery_content")
})

quotes.addEventListener("click", function(){
    qu_cont.classList.toggle("show_quotes_content")
})

msg.addEventListener("click", function(){
    msg_cont.classList.toggle("show_msg_content")
})

// scrollbar

let scroll = document.querySelector(".scrollbar");
        let totalheight = document.body.scrollHeight - window.innerHeight;
        window.onscroll = function () {
            let scrollheight = (window.pageYOffset / totalheight) * 100;
            scroll.style.height = scrollheight + "%";
        }

// Preloader

let loader = document.querySelector(".preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})

