(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{MLJj:function(e,t,n){"use strict";n.r(t),n.d(t,"WebsiteModule",(function(){return N}));var o=n("ofXK"),i=n("tyNb"),r=n("fXoL"),a=n("PSD3"),b=n.n(a),s=n("dz5x"),c=n("N+K7"),d=n("n90K");function g(e,t){if(1&e){const e=r.Pb();r.Ob(0,"li",15),r.Ob(1,"div",16),r.Wb("click",(function(){return r.jc(e),r.Yb().toggleDashboard()})),r.Kb(2,"img",17),r.Nb(),r.Ob(3,"div",18),r.Ob(4,"a",19),r.oc(5," Dashboard"),r.Nb(),r.Ob(6,"a",20),r.Wb("click",(function(){return r.jc(e),r.Yb().logout()})),r.Kb(7,"div",21),r.oc(8," Logout "),r.Nb(),r.Nb(),r.Nb()}}function l(e,t){1&e&&(r.Ob(0,"a",22),r.oc(1,"Login"),r.Nb())}function m(e,t){1&e&&(r.Ob(0,"a",23),r.oc(1,"Signup"),r.Nb())}function h(e,t){if(1&e){const e=r.Pb();r.Ob(0,"div",24),r.Ob(1,"div",16),r.Wb("click",(function(){return r.jc(e),r.Yb().toggleDashboard()})),r.Kb(2,"img",17),r.Nb(),r.Ob(3,"div",18),r.Ob(4,"a",19),r.oc(5," Dashboard"),r.Nb(),r.Ob(6,"a",20),r.Wb("click",(function(){return r.jc(e),r.Yb().logout()})),r.Kb(7,"div",21),r.oc(8," Logout "),r.Nb(),r.Nb(),r.Nb()}}let u=(()=>{class e{constructor(e,t,n){this.share=e,this.http=t,this.storage=n}ngOnInit(){document.addEventListener("scroll",this.fixHeader),$(".hamburger-container").on("click",this.toggleHam),$(".navbar-menu-item").on("click",this.toggleHam),$(document).mouseup(e=>{$(".dashboard-icon").is(e.target)||0!==$(".dashboard-icon").has(e.target).length||$(".dashboard-menu").is(e.target)||0!==$(".dashboard-menu").has(e.target).length||$(".dashboard-menu").removeClass("show")})}fixHeader(){$(window).scroll((function(){$(window).scrollTop()>=100?$(".navbar").addClass("fixed"):$(".navbar").removeClass("fixed")}))}toggleHam(){$(".hamburger-container").hasClass("open")?($(".hamburger-container").removeClass("open"),$(".navbar-menu").removeClass("open")):($(".hamburger-container").addClass("open"),$(".navbar-menu").addClass("open"))}toggleDashboard(){$(".dashboard-menu").toggleClass("show")}logout(){$("#logout-btn").addClass("running"),$("#logout-btn").prop("disabled",!0),this.http.postToBackend("/users/logout",{}).then(e=>{console.log(e),7e3===e.statusCode?(this.share.token=null,this.share.user=null,this.storage.destroyToken(),this.storage.destroyUser(),$("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1)):($("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),b.a.fire({title:"Some Error Occured",icon:"error",text:"Please try again!"}))}).catch(e=>{b.a.fire({title:"Internal server error",icon:"error",text:e.message})})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(s.a),r.Jb(c.a),r.Jb(d.a))},e.\u0275cmp=r.Db({type:e,selectors:[["app-navbar"]],decls:23,vars:8,consts:[["id","navbar",1,"navbar"],[1,"container","navbar-container"],[1,"navbar-logo"],["routerLink","/"],["src","assets/img/logo.png","alt","logo",1,"navbar-logo-img"],[1,"navbar-menu"],[1,"navbar-menu-item"],["routerLink","/about"],["routerLink","/blog"],["class","navbar-menu-item dashboard dashboard-lg mr-0",4,"ngIf"],["routerLink","/login",4,"ngIf"],["routerLink","/signup",4,"ngIf"],["class","dashboard dashboard-sm",4,"ngIf"],[1,"hamburger-container"],[1,"hamburger"],[1,"navbar-menu-item","dashboard","dashboard-lg","mr-0"],[1,"dashboard-icon",3,"click"],["src","assets/img/icons/user.svg","alt","dashboard"],[1,"dashboard-menu"],["routerLink","/dashboard",1,"dashboard-link"],["id","logout-btn",1,"dashboard-link","ld-ext-right",3,"click"],[1,"ld","ld-ring","ld-spin-fast"],["routerLink","/login"],["routerLink","/signup"],[1,"dashboard","dashboard-sm"]],template:function(e,t){1&e&&(r.Ob(0,"nav",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"a",3),r.Kb(4,"img",4),r.Nb(),r.Nb(),r.Ob(5,"ul",5),r.Ob(6,"li",6),r.Ob(7,"a",3),r.oc(8,"Home"),r.Nb(),r.Nb(),r.Ob(9,"li",6),r.Ob(10,"a",7),r.oc(11,"About"),r.Nb(),r.Nb(),r.Ob(12,"li",6),r.Ob(13,"a",8),r.oc(14,"Blog"),r.Nb(),r.Nb(),r.nc(15,g,9,0,"li",9),r.Ob(16,"li",6),r.nc(17,l,2,0,"a",10),r.Nb(),r.Ob(18,"li",6),r.nc(19,m,2,0,"a",11),r.Nb(),r.Nb(),r.nc(20,h,9,0,"div",12),r.Ob(21,"div",13),r.Kb(22,"div",14),r.Nb(),r.Nb(),r.Nb()),2&e&&(r.zb(15),r.ec("ngIf",t.share.token),r.zb(1),r.Bb("mr-0",t.share.token),r.zb(1),r.ec("ngIf",!t.share.token),r.zb(1),r.Bb("mr-0",t.share.token),r.zb(1),r.ec("ngIf",!t.share.token),r.zb(1),r.ec("ngIf",t.share.token))},directives:[i.e,o.k],styles:['.hamburger-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .3s ease-in-out;display:none}@media (max-width:47.99em){.hamburger-container[_ngcontent-%COMP%]{display:block}}.hamburger[_ngcontent-%COMP%]{position:relative;width:30px;height:4px}.hamburger[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{border-radius:25px;background:#202020;transition:all .3s ease-in-out}.hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{content:"";position:absolute;width:inherit;height:inherit}.hamburger-container[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:translateY(-10px)}.hamburger[_ngcontent-%COMP%]:after{transform:translateY(10px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{transform:translateX(-40px);background:transparent;box-shadow:none}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:rotate(45deg) translate(28px,-28px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:after{transform:rotate(-45deg) translate(28px,28px)}.navbar[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;z-index:1050;padding:2rem 0;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}.navbar-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}.navbar-logo[_ngcontent-%COMP%]{position:relative;z-index:1000}.navbar-logo-img[_ngcontent-%COMP%]{width:6rem}.navbar-menu[_ngcontent-%COMP%]{list-style:none;display:flex;align-items:center;transition:all .3s cubic-bezier(.45,.19,.13,1.26)}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:4rem}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:700;transition:all .3s cubic-bezier(.25,.46,.45,.94);font-size:1.4rem;font-family:Montserrat}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1ac293}@media (max-width:61.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]{margin:2rem 0}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:0}}@media (max-width:47.99em){.navbar-menu[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;position:fixed;left:0;top:0;width:100%;background-color:#fff;opacity:0;transform:scale(.6);visibility:hidden}.navbar-menu.open[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:scale(1)}}.navbar.fixed[_ngcontent-%COMP%]{padding:1rem 0}.dashboard-icon[_ngcontent-%COMP%], .navbar.fixed[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.dashboard-icon[_ngcontent-%COMP%]{height:5rem;cursor:pointer;z-index:50;width:5rem;border-radius:50%;padding:.2rem;display:flex;align-items:center;justify-content:center}.dashboard-icon[_ngcontent-%COMP%], .dashboard-lg[_ngcontent-%COMP%]{position:relative}@media (max-width:47.99em){.dashboard-lg[_ngcontent-%COMP%]{display:none}}.dashboard-sm[_ngcontent-%COMP%]{display:none;position:absolute;right:4em}@media (max-width:47.99em){.dashboard-sm[_ngcontent-%COMP%]{display:block}}@media (max-width:35.99em){.dashboard-sm[_ngcontent-%COMP%]{right:4.5em}}.dashboard-menu[_ngcontent-%COMP%]{min-width:15rem;background-color:#fff;box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);padding:1rem;border-radius:1rem;visibility:hidden;opacity:0;transform:translateY(1rem);transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.1s;position:absolute;right:0;top:110%}.dashboard-menu.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translateY(0)}.dashboard-link[_ngcontent-%COMP%]{padding:1rem;font-weight:500;cursor:pointer;display:block;transition:all .3s cubic-bezier(.25,.46,.45,.94)}.dashboard-link[_ngcontent-%COMP%]:hover{background-color:#dfe6f6}']}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-footer"]],decls:48,vars:0,consts:[[1,"get-started"],[1,"container"],[1,"get-started-card","bg-gradient"],[1,"row","align-items-center"],[1,"col-sm-7"],[1,"get-started-content"],[1,"text-white"],[1,"col-sm-5","get-started-btn"],["routerLink","/signup",1,"btn"],["src","assets/img/bg/shape-1.svg","alt","",1,"bg","bg-tr","get-started-bg"],[1,"bg","bg-bl","bg-circle","get-started-circle"],[1,"footer"],[1,"row","no-gutters","justify-content-between"],[1,"col-md-4"],[1,"footer-about"],[1,"footer-logo"],["src","assets/img/logo.png","alt",""],[1,"text-white","d-block","d-md-none","mt-5"],[1,"footer-links"],["routerLink","/about",1,"link"],["routerLink","/blog",1,"link"],["href","mailto:jonathan@draymoncapital.com","target","_blank",1,"link"],[1,"text-white","d-none","d-md-block"],[1,"footer-social"],["href","https://www.linkedin.com/in/jqhauck","target","_blank",1,"footer-social-item"],["src","assets/img/icons/linkedin.svg","alt","linkedin"],["href","https://m.facebook.com/profile.php?id=1180812594&ref=content_filter","target","_blank",1,"footer-social-item"],["src","assets/img/icons/facebook.svg","alt","facebook"],["href","mailto:jonathan@draymoncapital.com","target","_blank",1,"footer-social-item"],["src","assets/img/icons/email.svg","alt","email"],[1,"footer-copy"],["routerLink","/",1,"gradient-text"]],template:function(e,t){1&e&&(r.Ob(0,"footer"),r.Ob(1,"div",0),r.Ob(2,"div",1),r.Ob(3,"div",2),r.Ob(4,"div",3),r.Ob(5,"div",4),r.Ob(6,"h4",5),r.oc(7," Ready to take your business to next level. "),r.Nb(),r.Ob(8,"h3",6),r.oc(9," Get Started "),r.Nb(),r.Nb(),r.Ob(10,"div",7),r.Ob(11,"a",8),r.oc(12," Get Started "),r.Nb(),r.Nb(),r.Nb(),r.Kb(13,"img",9),r.Kb(14,"div",10),r.Nb(),r.Nb(),r.Nb(),r.Ob(15,"div",11),r.Ob(16,"div",1),r.Ob(17,"div",12),r.Ob(18,"div",13),r.Ob(19,"div",14),r.Ob(20,"div",15),r.Kb(21,"img",16),r.Nb(),r.Ob(22,"h4",17),r.oc(23," Step in and experience huge transformations with finest procedures! "),r.Nb(),r.Nb(),r.Ob(24,"ul",18),r.Ob(25,"li"),r.Ob(26,"a",19),r.oc(27,"About Us"),r.Nb(),r.Nb(),r.Ob(28,"li"),r.Ob(29,"a",20),r.oc(30,"Blog"),r.Nb(),r.Nb(),r.Ob(31,"li"),r.Ob(32,"a",21),r.oc(33,"Contact Us"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(34,"div",13),r.Ob(35,"h4",22),r.oc(36," Step in and experience huge transformations with finest procedures! "),r.Nb(),r.Ob(37,"div",23),r.Ob(38,"a",24),r.Kb(39,"img",25),r.Nb(),r.Ob(40,"a",26),r.Kb(41,"img",27),r.Nb(),r.Ob(42,"a",28),r.Kb(43,"img",29),r.Nb(),r.Nb(),r.Ob(44,"p",30),r.oc(45," \xa9 2020 "),r.Ob(46,"a",31),r.oc(47,"Draymon Capitals"),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb())},directives:[i.e],styles:[".get-started[_ngcontent-%COMP%]{padding-bottom:12rem;position:relative}.get-started-card[_ngcontent-%COMP%]{z-index:5;position:relative;padding:5rem 7rem;border-radius:.8rem;box-shadow:0 4rem 10rem -1rem rgba(22,22,22,.5);overflow:hidden}@media (max-width:47.99em){.get-started-card[_ngcontent-%COMP%]{padding:4rem 6rem}}.get-started-content[_ngcontent-%COMP%]{color:#fff;margin-bottom:2rem}.get-started-btn[_ngcontent-%COMP%]{text-align:right}.get-started-bg[_ngcontent-%COMP%]{width:32rem;z-index:0;opacity:.4;transform:translate(40%,-50%) rotateX(180deg)}.get-started-circle[_ngcontent-%COMP%]{width:20rem;height:20rem;opacity:.1;transform:translate(-20%,10%)}.footer[_ngcontent-%COMP%]{background-color:#10263e;padding:25rem 0 10rem;margin-top:-25rem;-webkit-clip-path:polygon(0 18vh,85% 0,100% 20vh,100% 100%,0 100%);clip-path:polygon(0 18vh,85% 0,100% 20vh,100% 100%,0 100%)}@media (max-width:61.99em){.footer[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 10vh,85% 0,100% 15vh,100% 100%,0 100%);clip-path:polygon(0 10vh,85% 0,100% 15vh,100% 100%,0 100%)}}@media (max-width:47.99em){.footer[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 6vh,85% 0,100% 10vh,100% 100%,0 100%);clip-path:polygon(0 6vh,85% 0,100% 10vh,100% 100%,0 100%)}}.footer-logo[_ngcontent-%COMP%]{width:6rem}.footer-copy[_ngcontent-%COMP%]{margin-top:2rem;color:#fff}.footer-heading[_ngcontent-%COMP%]{color:#1ac293;margin-bottom:1rem;font-size:1.8rem;font-weight:600}.footer-links[_ngcontent-%COMP%]{list-style:none;margin-top:4rem}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:2rem}.footer-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#dfe6f6}.footer-contact[_ngcontent-%COMP%]{margin-bottom:2rem}.footer-contact-text[_ngcontent-%COMP%]{color:#fff;display:block}.footer-social[_ngcontent-%COMP%]{display:flex;margin-top:5rem}.footer-social-item[_ngcontent-%COMP%]{width:2.5rem}.footer-social-item[_ngcontent-%COMP%]:not(:last-child){margin-right:2.5rem}.footer-social-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:brightness(0) invert(1);filter:brightness(0) invert(1)}"]}),e})();function O(e,t){1&e&&r.Kb(0,"app-footer")}const v=[{path:"",component:(()=>{class e{constructor(e){this.router=e,this.hideFooter=!1,this.checkforFooter()}ngOnInit(){}checkforFooter(){this.router.events.subscribe(e=>{e instanceof i.b&&(this.hideFooter=!("/login"!=e.url&&"/signup"!=e.url&&!e.url.includes("/verify")))})}}return e.\u0275fac=function(t){return new(t||e)(r.Jb(i.c))},e.\u0275cmp=r.Db({type:e,selectors:[["app-website"]],decls:3,vars:1,consts:[[4,"ngIf"]],template:function(e,t){1&e&&(r.Kb(0,"app-navbar"),r.Kb(1,"router-outlet"),r.nc(2,O,1,0,"app-footer",0)),2&e&&(r.zb(2),r.ec("ngIf",!t.hideFooter))},directives:[u,i.g,o.k,p],styles:[""]}),e})(),children:[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}scrollToSection(e){$(e).animatescroll({easing:"easeInOutQuint",scrollSpeed:1e3,padding:150,element:"html,body"})}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Db({type:e,selectors:[["app-home"]],decls:185,vars:0,consts:[[1,"header","bg-light"],[1,"container"],[1,"row","align-items-center"],[1,"col-lg-6"],[1,"header-heading","header-heading--primary"],[1,"header-heading","header-heading--secondary","text-secondary","text-sub"],[1,"header-btns"],["href","#",1,"btn",3,"click"],["routerLink","/signup",1,"btn","btn-dark"],["src","assets/img/149.jpg","alt","",1,"header-hero-img"],[1,"bg","bg-cube","header-bg-cube"],["src","assets/img/bg/shape-6.svg",1,"bg","header-bg-circle"],[1,"bg","bg-circle","header-bg-circle-plain"],["id","features",1,"features","pt-0"],[1,"col-md-4","col-sm-6","d-flex"],[1,"card","feature-card"],[1,"feature-img"],["src","assets/img/icons/experience.svg","alt",""],[1,"feature-content"],[1,"feature-title"],[1,"feature-text"],["src","assets/img/icons/plant.svg","alt",""],["src","assets/img/icons/graph.svg","alt",""],[1,"about-section","pt-0"],[1,"row"],[1,"col-lg-7"],[1,"border-1"],[1,"text-secondary","mb-3"],[1,"text","mb-3"],[1,"text"],[1,"text-secondary","mt-5","mb-3"],[1,"mission-and-vision","bg-light"],[1,"col-lg-6","mb-5"],[1,"text-secondary","mb-0"],["routerLink","/about",1,"btn","btn-dark","d-none","d-lg-inline-block"],[1,"col-md-8"],[1,"gradient-card"],[1,"gradient-icon"],["src","assets/img/icons/mission.svg","alt",""],[1,"gradient-content"],[1,"gradient-title"],[1,"row","justify-content-end"],["src","assets/img/icons/vision.svg","alt",""],[1,"text-right","d-block","d-lg-none"],["routerLink","/about",1,"btn","btn-dark"],["src","assets/img/rocket.svg","alt","",1,"rocket-img"],[1,"industries"],[1,"text-white","text-center"],[1,"row","justify-content-center"],[1,"col-md-4","col-6"],[1,"industry-card"],[1,"industry-img"],["src","assets/img/icons/globe.svg","alt",""],[1,"industry-title"],["src","assets/img/icons/investment.svg","alt",""],["src","assets/img/icons/certificate.svg","alt",""],["src","assets/img/icons/label.svg","alt",""],["src","assets/img/icons/technical-support.svg","alt",""],["src","assets/img/icons/camera-lens.svg","alt",""],["src","assets/img/icons/air-conditioner.svg","alt",""],[1,"values","bg-light","last-section"],[1,"row","justify-content-between","mt-5"],[1,"col-lg-12"],[1,"text-secondary"],[1,"col-md-4"],[1,"value-card"],[1,"value-top"],[1,"value-img"],["src","assets/img/icons/snow.svg","alt",""],[1,"value-title"],[1,"value-content"],[1,"value-text"]],template:function(e,t){1&e&&(r.Ob(0,"header",0),r.Ob(1,"div",1),r.Ob(2,"div",2),r.Ob(3,"div",3),r.Ob(4,"h1",4),r.oc(5," Draymon Capital "),r.Nb(),r.Ob(6,"h4",5),r.oc(7," Start planning for your new venture. "),r.Kb(8,"br"),r.oc(9," You can count on us for your funding needs. "),r.Nb(),r.Ob(10,"div",6),r.Ob(11,"a",7),r.Wb("click",(function(){return t.scrollToSection("#features")})),r.oc(12," Know More "),r.Nb(),r.Ob(13,"a",8),r.oc(14," Get Started "),r.Nb(),r.Nb(),r.Nb(),r.Kb(15,"img",9),r.Nb(),r.Nb(),r.Kb(16,"div",10),r.Kb(17,"img",11),r.Kb(18,"div",12),r.Nb(),r.Ob(19,"section",13),r.Ob(20,"div",1),r.Ob(21,"div",2),r.Ob(22,"div",14),r.Ob(23,"div",15),r.Ob(24,"div",16),r.Kb(25,"img",17),r.Nb(),r.Ob(26,"div",18),r.Ob(27,"h4",19),r.oc(28," Mentoring "),r.Nb(),r.Ob(29,"p",20),r.oc(30," Mentoring is a holistic relationship wherein we connect with the mentee on different levels mental, emotional, and professional dimensions of a founding team\u2019s life. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(31,"div",14),r.Ob(32,"div",15),r.Ob(33,"div",16),r.Kb(34,"img",21),r.Nb(),r.Ob(35,"div",18),r.Ob(36,"h4",19),r.oc(37," Fostering "),r.Nb(),r.Ob(38,"p",20),r.oc(39," Fostering the spirit of entrepreneurship by creating an environment of greater trust, and more equal commitment to risks and rewards. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(40,"div",14),r.Ob(41,"div",15),r.Ob(42,"div",16),r.Kb(43,"img",22),r.Nb(),r.Ob(44,"div",18),r.Ob(45,"h4",19),r.oc(46," Scalability "),r.Nb(),r.Ob(47,"p",20),r.oc(48," We continue to transform businesses of our worldwide customers by integrating capabilities along with expertise and ensuring visible business outcomes every time. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(49,"section",23),r.Ob(50,"div",1),r.Ob(51,"div",24),r.Ob(52,"div",25),r.Ob(53,"h1",26),r.oc(54," Our Story "),r.Nb(),r.Ob(55,"h4",27),r.oc(56," Harnessing the Power of Entrepreneurs to Open Innovation "),r.Nb(),r.Ob(57,"p",28),r.oc(58," In an increasingly digital and connected world, large enterprises and small entrepreneurs alike are exploring the value that can be created by closer and deeper collaborations. Enterprises gain access to new skills, ideas, talent, and markets, while entrepreneurs turn to large companies for funding, distribution networks and much needed, timely and sage advice. "),r.Nb(),r.Ob(59,"p",29),r.oc(60," Draymon Capital was founded to be relentless in inculcating and nurturing a culture of continuous innovation and execution excellence for young entrepreneurs with no or minimal experience in the field, by combining continuous counselling, mentorship and deep financial domain expertise, delivering the best suited profitable solutions in the most dignified experiences to every customer. "),r.Nb(),r.Ob(61,"h4",30),r.oc(62," Simplified Lending. Amplified Growth "),r.Nb(),r.Ob(63,"p",28),r.oc(64," Draymon Capital understands that small businesses need cash at critical times and hence promotes rapid funding to help them in the right time. "),r.Nb(),r.Ob(65,"p",29),r.oc(66," Persistent change, challenged assumptions, and disruption are now the norm, rather than the exception, in business and society. And as these indicators accelerate and multiply as we progress into the future, we are here to standby and guide you in the process. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(67,"section",31),r.Ob(68,"div",1),r.Ob(69,"div",24),r.Ob(70,"div",32),r.Ob(71,"h3",33),r.oc(72," Draymon Capital was founded to help you with finding money for your new insights, technologies, and innovative organizational methods. "),r.Nb(),r.Ob(73,"a",34),r.oc(74," See more "),r.Nb(),r.Nb(),r.Ob(75,"div",3),r.Ob(76,"div",24),r.Ob(77,"div",35),r.Ob(78,"div",36),r.Ob(79,"div",37),r.Kb(80,"img",38),r.Nb(),r.Ob(81,"div",39),r.Ob(82,"h2",40),r.oc(83," Mission "),r.Nb(),r.Ob(84,"p"),r.oc(85," To become a key partner in the short-term and long-term growth of small businesses. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(86,"div",41),r.Ob(87,"div",35),r.Ob(88,"div",36),r.Ob(89,"div",37),r.Kb(90,"img",42),r.Nb(),r.Ob(91,"div",39),r.Ob(92,"h2",40),r.oc(93," Vision "),r.Nb(),r.Ob(94,"p"),r.oc(95," To provide capital lending that best suits the customer. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(96,"div",43),r.Ob(97,"a",44),r.oc(98," See more "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Kb(99,"img",45),r.Nb(),r.Ob(100,"section",46),r.Ob(101,"div",1),r.Ob(102,"h2",47),r.oc(103," Industries we have lended money to "),r.Nb(),r.Ob(104,"div",48),r.Ob(105,"div",49),r.Ob(106,"div",50),r.Ob(107,"div",51),r.Kb(108,"img",52),r.Nb(),r.Ob(109,"h4",53),r.oc(110," Aerospace "),r.Nb(),r.Nb(),r.Nb(),r.Ob(111,"div",49),r.Ob(112,"div",50),r.Ob(113,"div",51),r.Kb(114,"img",54),r.Nb(),r.Ob(115,"h4",53),r.oc(116," Insurance "),r.Nb(),r.Nb(),r.Nb(),r.Ob(117,"div",49),r.Ob(118,"div",50),r.Ob(119,"div",51),r.Kb(120,"img",55),r.Nb(),r.Ob(121,"h4",53),r.oc(122," Education "),r.Nb(),r.Nb(),r.Nb(),r.Ob(123,"div",49),r.Ob(124,"div",50),r.Ob(125,"div",51),r.Kb(126,"img",56),r.Nb(),r.Ob(127,"h4",53),r.oc(128," Retail "),r.Nb(),r.Nb(),r.Nb(),r.Ob(129,"div",49),r.Ob(130,"div",50),r.Ob(131,"div",51),r.Kb(132,"img",57),r.Nb(),r.Ob(133,"h4",53),r.oc(134," Consulting "),r.Nb(),r.Nb(),r.Nb(),r.Ob(135,"div",49),r.Ob(136,"div",50),r.Ob(137,"div",51),r.Kb(138,"img",58),r.Nb(),r.Ob(139,"h4",53),r.oc(140," Photography "),r.Nb(),r.Nb(),r.Nb(),r.Ob(141,"div",49),r.Ob(142,"div",50),r.Ob(143,"div",51),r.Kb(144,"img",59),r.Nb(),r.Ob(145,"h4",53),r.oc(146," Air Quality "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(147,"section",60),r.Ob(148,"div",1),r.Ob(149,"div",61),r.Ob(150,"div",62),r.Ob(151,"h3",63),r.oc(152," We hope to become your partner in laying a strong foundation for your businesses and helping it grow to its full potential endorsing our core values of: "),r.Nb(),r.Nb(),r.Ob(153,"div",62),r.Ob(154,"div",24),r.Ob(155,"div",64),r.Ob(156,"div",65),r.Ob(157,"div",66),r.Ob(158,"div",67),r.Kb(159,"img",68),r.Nb(),r.Ob(160,"h4",69),r.oc(161," Collaboration "),r.Nb(),r.Nb(),r.Ob(162,"div",70),r.Ob(163,"p",71),r.oc(164," Connecting new entrepreneurs with established ones creating a positive effect on culture and confidence "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(165,"div",64),r.Ob(166,"div",65),r.Ob(167,"div",66),r.Ob(168,"div",67),r.Kb(169,"img",68),r.Nb(),r.Ob(170,"h4",69),r.oc(171," Support "),r.Nb(),r.Nb(),r.Ob(172,"div",70),r.Ob(173,"p",71),r.oc(174," Supporting new age innovators find their way through the market. "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Ob(175,"div",64),r.Ob(176,"div",65),r.Ob(177,"div",66),r.Ob(178,"div",67),r.Kb(179,"img",68),r.Nb(),r.Ob(180,"h4",69),r.oc(181," Service "),r.Nb(),r.Nb(),r.Ob(182,"div",70),r.Ob(183,"p",71),r.oc(184," Promoting the concept of fast and flexible money through rapid funding "),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb(),r.Nb())},directives:[i.e],styles:[".feature-card[_ngcontent-%COMP%]{text-align:center;max-width:32rem;min-height:43rem;margin:auto auto 5rem}@media (max-width:35.99em){.feature-card[_ngcontent-%COMP%]{max-width:40rem}}.feature-img[_ngcontent-%COMP%]{width:100%;height:14rem;padding:1rem;margin:auto;border-bottom:1px solid #ebebeb;display:flex;align-items:center;justify-content:center}.feature-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:85%}.feature-title[_ngcontent-%COMP%]{color:#202020;margin-bottom:1.8rem}.feature-content[_ngcontent-%COMP%]{padding:2rem 1.5rem}.gradient-card[_ngcontent-%COMP%]{margin-bottom:4rem}.gradient-icon[_ngcontent-%COMP%]{border-radius:1.6rem;box-shadow:0 2rem 6rem 0 rgba(87,96,109,.92);width:17rem;height:17rem;background-image:linear-gradient(to bottom right,#10263e,#202020);display:flex;align-items:center;justify-content:center}.gradient-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:65%}.gradient-content[_ngcontent-%COMP%]{padding:2rem 0}.gradient-title[_ngcontent-%COMP%]{color:#202020;margin-bottom:2.5rem}.industry-card[_ngcontent-%COMP%]{text-align:center;margin-top:5rem}.industry-img[_ngcontent-%COMP%]{background-image:linear-gradient(to bottom right,#10263e,#202020);box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:1rem;margin:auto auto 2rem;width:18rem;height:18rem;display:flex;align-items:center;justify-content:center}.industry-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:50%}.industry-title[_ngcontent-%COMP%]{color:#dfe6f6}.value-card[_ngcontent-%COMP%]{margin-top:3rem;padding:1rem 0}.value-top[_ngcontent-%COMP%]{margin-bottom:2rem}.value-img[_ngcontent-%COMP%], .value-top[_ngcontent-%COMP%]{display:flex;align-items:center}.value-img[_ngcontent-%COMP%]{border-radius:1.5rem;height:6rem;margin-right:2rem;width:6rem;box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);justify-content:center;background-image:linear-gradient(to bottom right,#10263e,#202020)}.value-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%}.value-content[_ngcontent-%COMP%]{flex:1}.value-title[_ngcontent-%COMP%]{color:#202020;margin-bottom:0}.features[_ngcontent-%COMP%]{margin-top:-18rem}@media (max-width:35.99em){.features[_ngcontent-%COMP%]{margin-top:-10rem}}.mission-and-vision[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 30vh,75% 0,100% 35vh,100% 100%,0 100%);clip-path:polygon(0 30vh,75% 0,100% 35vh,100% 100%,0 100%);min-height:70rem;padding-top:35vh;margin-top:-10vh}@media (max-width:74.99em){.mission-and-vision[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 15vh,75% 0,100% 20vh,100% 100%,0 100%);clip-path:polygon(0 15vh,75% 0,100% 20vh,100% 100%,0 100%);margin-top:-4vh;padding-top:25vh;padding-bottom:15rem}}@media (max-width:61.99em){.mission-and-vision[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 8vh,75% 0,100% 10vh,100% 100%,0 100%);clip-path:polygon(0 8vh,75% 0,100% 10vh,100% 100%,0 100%);margin-top:0;padding-top:15vh;padding-bottom:20rem}}@media (max-width:47.99em){.mission-and-vision[_ngcontent-%COMP%]{-webkit-clip-path:polygon(0 6vh,75% 0,100% 3vh,100% 100%,0 100%);clip-path:polygon(0 6vh,75% 0,100% 3vh,100% 100%,0 100%);padding-top:10vh;padding-bottom:25rem}}.mission-and-vision[_ngcontent-%COMP%]   .rocket-img[_ngcontent-%COMP%]{position:absolute;left:0;bottom:-.5rem;width:55rem;max-width:70%}.industries[_ngcontent-%COMP%]{padding:15rem 0;margin:-8rem 0;background-image:linear-gradient(90deg,rgba(5,100,182,.8),rgba(26,194,147,.95)),url(/assets/img/industry-bg.jpg);background-size:cover;background-position:bottom;background-attachment:fixed;position:relative;z-index:5;-webkit-clip-path:polygon(0 5rem,100% 0,100% calc(100% - 8rem),0 100%);clip-path:polygon(0 5rem,100% 0,100% calc(100% - 8rem),0 100%)}@media (max-width:47.99em){.industries[_ngcontent-%COMP%]{margin:-5rem 0;background-image:linear-gradient(to bottom right,rgba(5,100,182,.8),rgba(26,194,147,.95)),url(/assets/img/industry-bg.jpg);-webkit-clip-path:polygon(0 3rem,100% 0,100% calc(100% - 5rem),0 100%);clip-path:polygon(0 3rem,100% 0,100% calc(100% - 5rem),0 100%)}}.values[_ngcontent-%COMP%]{padding-top:12rem}"]}),e})()},{path:"about",loadChildren:()=>n.e(23).then(n.bind(null,"p9WY")).then(e=>e.AboutModule)},{path:"login",loadChildren:()=>n.e(26).then(n.bind(null,"IMZ8")).then(e=>e.LoginModule)},{path:"signup",loadChildren:()=>n.e(27).then(n.bind(null,"Vqaw")).then(e=>e.SignupModule)},{path:"verify",loadChildren:()=>n.e(28).then(n.bind(null,"Ieov")).then(e=>e.VerifyModule)},{path:"blog",loadChildren:()=>Promise.all([n.e(2),n.e(25)]).then(n.bind(null,"sdWO")).then(e=>e.BlogModule)},{path:"blogpost/:id",loadChildren:()=>Promise.all([n.e(2),n.e(24)]).then(n.bind(null,"SBtk")).then(e=>e.BlogPostModule)}]}];let f=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[i.f.forChild(v)],i.f]}),e})(),N=(()=>{class e{}return e.\u0275mod=r.Hb({type:e}),e.\u0275inj=r.Gb({factory:function(t){return new(t||e)},imports:[[o.b,f]]}),e})()}}]);