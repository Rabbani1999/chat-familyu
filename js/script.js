window.addEventListener("scroll",function(){
        let navbar = document.querySelector("nav.navbar");
        if(window.pageYOffset >300){
                navbar.classList.add("navbar-sticky");
        }else{
                navbar.classList.remove("navbar-sticky");
        };
});
