function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Dft3:function(t,n,e){"use strict";e.r(n),e.d(n,"AdminPanelModule",(function(){return _}));var o=e("ofXK"),i=e("tyNb"),a=e("PSD3"),r=e.n(a),l=e("fXoL"),b=e("N+K7"),c=e("dz5x"),s=function(t){return["/admin/booking-details",t]};function d(t,n){if(1&t&&(l.Ob(0,"div",30),l.Ob(1,"div",31),l.Ob(2,"h5",1),l.oc(3),l.Nb(),l.Ob(4,"h6",32),l.oc(5),l.Zb(6,"titlecase"),l.Nb(),l.Ob(7,"p"),l.oc(8),l.Nb(),l.Ob(9,"div",33),l.Ob(10,"a",34),l.oc(11,"View Full Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){var e=n.$implicit;l.zb(3),l.pc(null==e?null:e.userName),l.zb(2),l.pc(l.ac(6,4,null==e?null:e.counsultingType)),l.zb(3),l.pc(null==e?null:e.reason),l.zb(2),l.ec("routerLink",l.hc(6,s,null==e?null:e.id))}}function u(t,n){if(1&t&&(l.Ob(0,"span",45),l.Ob(1,"a",46),l.Ob(2,"i",47),l.oc(3," remove_red_eye "),l.Nb(),l.Ob(4,"div",40),l.Ob(5,"p"),l.oc(6,"View Booking Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t){var e=l.Yb().$implicit;l.zb(1),l.ec("routerLink",l.hc(1,s,null==e?null:e.id))}}function m(t,n){if(1&t){var e=l.Pb();l.Ob(0,"div",30),l.Ob(1,"div",35),l.Ob(2,"div",36),l.nc(3,u,7,3,"span",37),l.Ob(4,"span",38),l.Wb("click",(function(){l.jc(e);var t=n.$implicit,o=n.index;return l.Yb().deleteSlot(null==t?null:t.id,null==t?null:t.transactionId,t.booked,o)})),l.Ob(5,"i",39),l.oc(6," delete_outline "),l.Nb(),l.Ob(7,"div",40),l.Ob(8,"p"),l.oc(9,"Delete this slot ?"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(10,"h4",1),l.oc(11),l.Nb(),l.Ob(12,"h6",41),l.oc(13),l.Zb(14,"date"),l.Zb(15,"date"),l.Nb(),l.Ob(16,"div",42),l.Ob(17,"span",43),l.oc(18),l.Nb(),l.Ob(19,"span",44),l.oc(20),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&t){var o=n.$implicit,i=n.index;l.zb(3),l.ec("ngIf",null==o?null:o.booked),l.zb(8),l.qc("Slot ",i+1,""),l.zb(2),l.rc(" ",l.bc(14,10,null==o?null:o.startTime,"h:mm a")," - ",l.bc(15,13,null==o?null:o.endTime,"h:mm a"),""),l.zb(5),l.qc("",null==o?null:o.duration," MINS"),l.zb(1),l.Bb("text-block--primary",null==o?null:o.booked)("text-block--secondary",!(null!=o&&o.booked)),l.zb(1),l.qc(" ",1==(null==o?null:o.booked)?"Booked":"Not Booked"," ")}}var g,h,O,f,p,v=((g=function(){function t(n,e){_classCallCheck(this,t),this.http=n,this.share=e,this.bookedSlots=[],this.allSlots=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.http.postToBackend("/admin/dashboard",{adminId:this.share.user}).then((function(n){console.log(n),7e3==n.statusCode&&(t.mostRecent=n.data.recentMetting,t.bookedSlots=n.data.latest.splice(0,5),t.allSlots=n.data.recent)})).catch((function(t){console.log(t)}))}},{key:"deleteSlot",value:function(t,n,e,o){var i=this;e?r.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to remove it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(e){e.value&&i.http.postToBackend("/admin/refund",{adminId:i.share.user,slotId:t,transactionId:n}).then((function(t){console.log(t),7e3===t.statusCode?(i.allSlots.splice(o,1),r.a.fire("Deleted","Slot deleted successfully. Refund Initiated","success")):r.a.fire("Failed",t.message,"error")})).catch((function(t){console.log(t),r.a.fire("Failed","Failed to delete slot","error")}))})):r.a.fire({icon:"question",title:"Delete this slot?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(n){n.value&&i.http.postToBackend("/admin/slot/delete",{adminId:i.share.user,slotId:t}).then((function(t){console.log(t),t.statusCode?(r.a.fire("Deleted","Slot Deleted Successfully","success"),i.allSlots.splice(o,1)):r.a.fire("Failed","Failed to delete slot","error")})).catch((function(t){console.log(t),r.a.fire("Failed","Failed to delete slot","error")})),console.log(n.value,t)}))}}]),t}()).\u0275fac=function(t){return new(t||g)(l.Jb(b.a),l.Jb(c.a))},g.\u0275cmp=l.Db({type:g,selectors:[["app-dashboard"]],decls:102,vars:22,consts:[[1,"next-meeting"],[1,"text-dark"],[1,"row"],[1,"col-md-9"],[1,"card","slot-card","p-5"],[1,"col-md-6"],[1,"text-dark","mb-3"],[1,"text"],[1,"text-dark","mt-4","border-1"],[1,"text-right"],["routerLink","/admin/video-call",1,"btn","btn-dark","mt-4"],[1,"slots-container","pt-2"],[1,"d-flex","align-items-end","justify-content-between","border-1"],[1,"heading"],[1,"text-dark","mb-0"],["routerLink","/admin/all-bookings",1,"btn","btn-dark","btn-sm","mt-0"],[1,"slot-section"],["class","col-lg-3 col-md-4 col-6",4,"ngFor","ngForOf"],["routerLink","/admin/all-slots",1,"btn","btn-dark","btn-sm","mt-0"],["id","booked-modal",1,"modal"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","border-none"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","text-center"],[1,"text-dark","text-center"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-dark"],["id","not-booked-modal",1,"modal"],[1,"col-lg-3","col-md-4","col-6"],[1,"card","slot-card","text-center","pt-5"],[1,"text-light-gray","slot-time","mt-2","mb-4"],[1,"text-center"],[1,"btn","btn-sm","btn-dark","mt-3",3,"routerLink"],[1,"card","slot-card"],[1,"slot-option"],["class","my-tooltip",4,"ngIf"],[1,"my-tooltip",3,"click"],[1,"material-icons","material-icons-rounded"],[1,"my-tooltip-content"],[1,"text-light-gray","slot-time","mb-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-block","text-block--dark"],[1,"text-block"],[1,"my-tooltip"],[3,"routerLink"],[1,"material-icons","material-icons-outlined","text-dark"]],template:function(t,n){1&t&&(l.Ob(0,"section",0),l.Ob(1,"h2",1),l.oc(2,"Next Meeting to attend"),l.Nb(),l.Ob(3,"div",2),l.Ob(4,"div",3),l.Ob(5,"div",4),l.Ob(6,"div",2),l.Ob(7,"div",5),l.Ob(8,"h4",6),l.oc(9," Meeting Details "),l.Nb(),l.Ob(10,"h6"),l.oc(11," Booked by "),l.Nb(),l.Ob(12,"p",7),l.oc(13),l.Nb(),l.Ob(14,"h6"),l.oc(15," Phone Number "),l.Nb(),l.Ob(16,"p",7),l.oc(17),l.Nb(),l.Ob(18,"h6"),l.oc(19," Consulting Type "),l.Nb(),l.Ob(20,"p",7),l.oc(21),l.Zb(22,"titlecase"),l.Nb(),l.Ob(23,"h6"),l.oc(24," Reason for meeting "),l.Nb(),l.Ob(25,"p",7),l.oc(26),l.Nb(),l.Nb(),l.Ob(27,"div",5),l.Ob(28,"h4",6),l.oc(29," Payment Details "),l.Nb(),l.Ob(30,"h6"),l.oc(31," Payment Paid "),l.Nb(),l.Ob(32,"h3",8),l.oc(33),l.Nb(),l.Ob(34,"h4",1),l.oc(35," Slot Details: "),l.Nb(),l.Ob(36,"h6"),l.oc(37," Date "),l.Nb(),l.Ob(38,"p",7),l.oc(39),l.Zb(40,"date"),l.Nb(),l.Ob(41,"h6"),l.oc(42," Time "),l.Nb(),l.Ob(43,"p",7),l.oc(44),l.Zb(45,"date"),l.Zb(46,"date"),l.Nb(),l.Ob(47,"div",9),l.Ob(48,"a",10),l.oc(49," Attend Meeting "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(50,"section",11),l.Ob(51,"div",12),l.Ob(52,"div",13),l.Ob(53,"h3",14),l.oc(54,"Latest Bookings"),l.Nb(),l.Nb(),l.Ob(55,"a",15),l.oc(56," See All"),l.Nb(),l.Nb(),l.Ob(57,"div",16),l.Ob(58,"div",2),l.nc(59,d,12,8,"div",17),l.Nb(),l.Nb(),l.Nb(),l.Ob(60,"section",11),l.Ob(61,"div",12),l.Ob(62,"div",13),l.Ob(63,"h3",14),l.oc(64,"Latest Added Slots"),l.Nb(),l.Nb(),l.Ob(65,"a",18),l.oc(66," See All"),l.Nb(),l.Nb(),l.Ob(67,"div",16),l.Ob(68,"div",2),l.nc(69,m,21,16,"div",17),l.Nb(),l.Nb(),l.Nb(),l.Ob(70,"div",19),l.Ob(71,"div",20),l.Ob(72,"div",21),l.Ob(73,"div",22),l.Ob(74,"button",23),l.oc(75," \xd7 "),l.Nb(),l.Nb(),l.Ob(76,"div",24),l.Ob(77,"h3",25),l.oc(78,"Delete this slot ?"),l.Nb(),l.Ob(79,"p"),l.oc(80," This slot is already booked. "),l.Kb(81,"br"),l.oc(82," Deleting this will result in refund of the payment. "),l.Nb(),l.Nb(),l.Ob(83,"div",26),l.Ob(84,"button",27),l.oc(85," Yes, Delete it "),l.Nb(),l.Ob(86,"button",28),l.oc(87," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(88,"div",29),l.Ob(89,"div",20),l.Ob(90,"div",21),l.Ob(91,"div",22),l.Ob(92,"button",23),l.oc(93," \xd7 "),l.Nb(),l.Nb(),l.Ob(94,"div",24),l.Ob(95,"h3",25),l.oc(96,"Delete this slot ?"),l.Nb(),l.Nb(),l.Ob(97,"div",26),l.Ob(98,"button",27),l.oc(99," Yes, Delete it "),l.Nb(),l.Ob(100,"button",28),l.oc(101," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.zb(13),l.qc(" ",null==n.mostRecent?null:n.mostRecent.userName," "),l.zb(4),l.qc(" ",null==n.mostRecent?null:n.mostRecent.mobileNo," "),l.zb(4),l.qc(" ",l.ac(22,11,null==n.mostRecent?null:n.mostRecent.counsultingType)," "),l.zb(5),l.qc(" ",null==n.mostRecent?null:n.mostRecent.reason," "),l.zb(7),l.qc(" $",null==n.mostRecent?null:n.mostRecent.amountPaid," "),l.zb(6),l.qc(" ",l.bc(40,13,null==n.mostRecent?null:n.mostRecent.date,"MMMM d,y")," "),l.zb(5),l.sc(" ",l.bc(45,16,null==n.mostRecent?null:n.mostRecent.startTime,"h:mm a")," - ",l.bc(46,19,null==n.mostRecent?null:n.mostRecent.endTime,"h:mm a"),"(",null==n.mostRecent?null:n.mostRecent.duration," MINS) "),l.zb(15),l.ec("ngForOf",n.bookedSlots),l.zb(10),l.ec("ngForOf",n.allSlots))},directives:[i.e,o.j,o.k],pipes:[o.p,o.d],styles:[".slot-card[_ngcontent-%COMP%]{border-radius:1rem;position:relative;padding-top:5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:15rem;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);margin-bottom:3rem}.slot-option[_ngcontent-%COMP%]{position:absolute;right:0;top:0;cursor:pointer;padding:1.5rem}.slot-option[_ngcontent-%COMP%]   .my-tooltip[_ngcontent-%COMP%]:not(:last-child){margin-right:2rem}.modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}"]}),g),N=e("n90K"),C=((h=function(){function t(n,e,o,i){_classCallCheck(this,t),this.share=n,this.storage=e,this.http=o,this.router=i}return _createClass(t,[{key:"ngOnInit",value:function(){this.fixHeader(),$(".hamburger-container").on("click",this.toggleHam),$(".navbar-menu-item").on("click",this.toggleHam)}},{key:"fixHeader",value:function(){$(window).scroll((function(){$(window).scrollTop()>=100?$(".navbar").addClass("fixed"):$(".navbar").removeClass("fixed")}))}},{key:"toggleHam",value:function(){$(".hamburger-container").hasClass("open")?($(".hamburger-container").removeClass("open"),$(".navbar-menu").removeClass("open")):($(".hamburger-container").addClass("open"),$(".navbar-menu").addClass("open"))}},{key:"logout",value:function(){var t=this;this.http.postToBackend("/admin/logout",{}).then((function(n){console.log(n),7e3===n.statusCode&&(t.share.token=null,t.share.user=null,t.storage.destroyToken(),t.storage.destroyUser(),t.router.navigate(["/admin/login"]))}))}}]),t}()).\u0275fac=function(t){return new(t||h)(l.Jb(c.a),l.Jb(N.a),l.Jb(b.a),l.Jb(i.c))},h.\u0275cmp=l.Db({type:h,selectors:[["app-header"]],decls:28,vars:0,consts:[["id","navbar",1,"navbar"],[1,"navbar-container"],[1,"navbar-logo"],["routerLink","/"],["src","assets/img/logo.png","alt","logo",1,"navbar-logo-img"],[1,"text-dark"],[1,"navbar-menu-wrapper"],[1,"navbar-menu"],[1,"navbar-menu-item"],["routerLink","/admin"],["routerLink","/admin/all-slots"],["routerLink","/admin/all-bookings"],["routerLink","/admin/blogs"],["routerLink","/admin/add-slot",1,"btn","btn-primary","btn-big","btn-sm","m-0"],[1,"btn","logout-btn",3,"click"],["src","assets/img/icons/logout.svg","alt",""],[1,"hamburger-container"],[1,"hamburger"]],template:function(t,n){1&t&&(l.Ob(0,"nav",0),l.Ob(1,"div",1),l.Ob(2,"div",2),l.Ob(3,"a",3),l.Kb(4,"img",4),l.Nb(),l.Ob(5,"h4",5),l.oc(6,"Admin Panel"),l.Nb(),l.Nb(),l.Ob(7,"div",6),l.Ob(8,"ul",7),l.Ob(9,"li",8),l.Ob(10,"a",9),l.oc(11,"Dashboard"),l.Nb(),l.Nb(),l.Ob(12,"li",8),l.Ob(13,"a",10),l.oc(14,"All Slots"),l.Nb(),l.Nb(),l.Ob(15,"li",8),l.Ob(16,"a",11),l.oc(17,"All Bookings"),l.Nb(),l.Nb(),l.Ob(18,"li",8),l.Ob(19,"a",12),l.oc(20,"Blogs"),l.Nb(),l.Nb(),l.Ob(21,"li",8),l.Ob(22,"a",13),l.oc(23,"Add new slot"),l.Nb(),l.Nb(),l.Nb(),l.Ob(24,"button",14),l.Wb("click",(function(){return n.logout()})),l.Kb(25,"img",15),l.Nb(),l.Nb(),l.Ob(26,"div",16),l.Kb(27,"div",17),l.Nb(),l.Nb(),l.Nb())},directives:[i.e],styles:['.hamburger-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .3s ease-in-out;display:none}@media (max-width:47.99em){.hamburger-container[_ngcontent-%COMP%]{display:block}}.hamburger[_ngcontent-%COMP%]{position:relative;width:30px;height:4px}.hamburger[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{border-radius:25px;background:#202020;transition:all .3s ease-in-out}.hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{content:"";position:absolute;width:inherit;height:inherit}.hamburger-container[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:translateY(-10px)}.hamburger[_ngcontent-%COMP%]:after{transform:translateY(10px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{transform:translateX(-40px);background:transparent;box-shadow:none}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:rotate(45deg) translate(28px,-28px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:after{transform:rotate(-45deg) translate(28px,28px)}.navbar[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;z-index:1050;padding:2rem 0;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}.navbar-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.navbar-logo[_ngcontent-%COMP%]{position:relative;z-index:1000}.navbar-logo-img[_ngcontent-%COMP%]{width:6rem}.navbar-menu[_ngcontent-%COMP%]{list-style:none;display:flex;transition:all .3s cubic-bezier(.45,.19,.13,1.26)}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:4rem}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:700;transition:all .3s cubic-bezier(.25,.46,.45,.94);font-size:1.4rem;font-family:Montserrat}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1ac293}@media (max-width:61.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]{margin:2rem 0}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:0}}@media (max-width:47.99em){.navbar-menu[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;position:fixed;left:0;top:0;width:100%;background-color:#fff;opacity:0;transform:scale(.6);visibility:hidden}.navbar-menu.open[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:scale(1)}}.navbar.fixed[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.navbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-logo-img[_ngcontent-%COMP%]{height:4rem;width:auto;margin-right:1rem}.navbar-container[_ngcontent-%COMP%]{padding:0 3vw}.navbar-menu[_ngcontent-%COMP%]{align-items:center}.navbar-menu-wrapper[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{border-radius:50%;height:5rem;width:5rem;margin:0 0 0 2rem;padding:0;justify-content:center}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;position:relative;z-index:5;transition:all .3s cubic-bezier(.25,.46,.45,.94)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:after{height:100%;transform-origin:bottom;transform:scaleY(0) scaleX(1)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover:after{transform:scaleY(1) scaleX(1)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}@media (max-width:47.99em){.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{position:absolute;right:calc(3vw + 45px);top:50%;transform:translateY(-50%)}}.navbar.fixed[_ngcontent-%COMP%]{padding:1rem 0}@media (max-width:47.99em){.navbar.fixed[_ngcontent-%COMP%]{padding:2rem 0}}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{background-color:#202020}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}@media (max-width:47.99em){.btn-big[_ngcontent-%COMP%]{padding:1.8rem 3rem!important;font-size:2rem!important}}']}),h),M=[{path:"",component:(O=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),O.\u0275fac=function(t){return new(t||O)},O.\u0275cmp=l.Db({type:O,selectors:[["app-admin-panel"]],decls:5,vars:0,consts:[[1,"dash","bg-light"],[1,"container"],[1,"dash-container"]],template:function(t,n){1&t&&(l.Ob(0,"div",0),l.Kb(1,"app-header"),l.Ob(2,"div",1),l.Ob(3,"div",2),l.Kb(4,"router-outlet"),l.Nb(),l.Nb(),l.Nb())},directives:[C,i.g],styles:[".dash[_ngcontent-%COMP%]{min-height:100vh}.dash-container[_ngcontent-%COMP%]{padding:15vh 0 5vh}@media (max-width:47.99em){.dash-container[_ngcontent-%COMP%]{padding-top:10vh}}"]}),O),children:[{path:"",component:v},{path:"booking-details/:id",loadChildren:function(){return e.e(17).then(e.bind(null,"PqMW")).then((function(t){return t.BookingDetailsModule}))}},{path:"all-bookings",loadChildren:function(){return e.e(13).then(e.bind(null,"N9uA")).then((function(t){return t.AllBookingsModule}))}},{path:"all-slots",loadChildren:function(){return e.e(14).then(e.bind(null,"fEIi")).then((function(t){return t.AllSlotsModule}))}},{path:"add-slot",loadChildren:function(){return Promise.all([e.e(0),e.e(4),e.e(11)]).then(e.bind(null,"pBEy")).then((function(t){return t.AddSlotModule}))}},{path:"video-call",loadChildren:function(){return e.e(18).then(e.bind(null,"XihW")).then((function(t){return t.VideoCallModule}))}},{path:"blogs",loadChildren:function(){return Promise.all([e.e(3),e.e(16)]).then(e.bind(null,"oS7f")).then((function(t){return t.BlogsModule}))}},{path:"blog/:id",loadChildren:function(){return e.e(15).then(e.bind(null,"XfPR")).then((function(t){return t.BlogPostModule}))}},{path:"blogs/post-new",loadChildren:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"106v")).then((function(t){return t.PostBlogModule}))}}]}],P=((p=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:p}),p.\u0275inj=l.Gb({factory:function(t){return new(t||p)},imports:[[i.f.forChild(M)],i.f]}),p),_=((f=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:f}),f.\u0275inj=l.Gb({factory:function(t){return new(t||f)},imports:[[o.b,P]]}),f)}}]);