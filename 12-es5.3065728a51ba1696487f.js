function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Dft3:function(n,t,e){"use strict";e.r(t),e.d(t,"AdminPanelModule",(function(){return y}));var o=e("ofXK"),i=e("tyNb"),a=e("PSD3"),r=e.n(a),l=e("fXoL"),b=e("N+K7"),c=e("CNll");function s(n,t){1&n&&(l.Mb(0),l.Ob(1,"div",13),l.Ob(2,"span",14),l.oc(3," Getting dashboard data... "),l.Kb(4,"div",15),l.Nb(),l.Nb(),l.Lb())}function d(n,t){1&n&&(l.Ob(0,"div",35),l.Ob(1,"a",36),l.oc(2," Attend Meeting "),l.Nb(),l.Nb())}var u=function(n){return["/admin/booking-details",n]};function m(n,t){if(1&n&&(l.Ob(0,"div",37),l.Ob(1,"div",38),l.Ob(2,"h5",18),l.oc(3),l.Nb(),l.Ob(4,"h6",39),l.oc(5),l.Zb(6,"titlecase"),l.Nb(),l.Ob(7,"p"),l.oc(8),l.Zb(9,"date"),l.Nb(),l.Ob(10,"div",40),l.Ob(11,"a",41),l.oc(12,"View Full Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&n){var e=t.$implicit;l.zb(3),l.pc(null==e?null:e.userName),l.zb(2),l.pc(l.ac(6,4,null==e?null:e.counsultingType)),l.zb(3),l.pc(l.bc(9,6,null==e?null:e.date,"mediumDate")),l.zb(3),l.ec("routerLink",l.hc(9,u,null==e?null:e.id))}}function g(n,t){if(1&n&&(l.Ob(0,"span",53),l.Ob(1,"a",54),l.Ob(2,"i",55),l.oc(3," remove_red_eye "),l.Nb(),l.Ob(4,"div",47),l.Ob(5,"p"),l.oc(6,"View Booking Details"),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&n){var e=l.Yb().$implicit;l.zb(1),l.ec("routerLink",l.hc(1,u,null==e?null:e.id))}}function h(n,t){if(1&n){var e=l.Pb();l.Ob(0,"div",37),l.Ob(1,"div",42),l.Ob(2,"div",43),l.nc(3,g,7,3,"span",44),l.Ob(4,"span",45),l.Wb("click",(function(){l.jc(e);var n=t.$implicit,o=t.index;return l.Yb(2).deleteSlot(null==n?null:n.id,null==n?null:n.transactionId,n.booked,o)})),l.Ob(5,"i",46),l.oc(6," delete_outline "),l.Nb(),l.Ob(7,"div",47),l.Ob(8,"p"),l.oc(9,"Delete this slot ?"),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(10,"h4",48),l.oc(11),l.Zb(12,"date"),l.Nb(),l.Ob(13,"h6",49),l.oc(14),l.Zb(15,"date"),l.Zb(16,"date"),l.Nb(),l.Ob(17,"div",50),l.Ob(18,"span",51),l.oc(19),l.Nb(),l.Ob(20,"span",52),l.oc(21),l.Nb(),l.Nb(),l.Nb(),l.Nb()}if(2&n){var o=t.$implicit;l.zb(3),l.ec("ngIf",null==o?null:o.booked),l.zb(8),l.pc(l.bc(12,10,null==o?null:o.date,"mediumDate")),l.zb(3),l.rc(" ",l.bc(15,13,null==o?null:o.startTime,"h:mm a")," - ",l.bc(16,16,null==o?null:o.endTime,"h:mm a"),""),l.zb(5),l.qc("",null==o?null:o.duration," MINS"),l.zb(1),l.Bb("text-block--primary",null==o?null:o.booked)("text-block--secondary",!(null!=o&&o.booked)),l.zb(1),l.qc(" ",1==(null==o?null:o.booked)?"Booked":"Not Booked"," ")}}function f(n,t){if(1&n&&(l.Ob(0,"div",16),l.Ob(1,"section",17),l.Ob(2,"h2",18),l.oc(3,"Next Meeting to attend"),l.Nb(),l.Ob(4,"div",19),l.Ob(5,"div",20),l.Ob(6,"div",21),l.Ob(7,"div",19),l.Ob(8,"div",22),l.Ob(9,"h4",23),l.oc(10," Meeting Details "),l.Nb(),l.Ob(11,"h6"),l.oc(12," Booked by "),l.Nb(),l.Ob(13,"p",24),l.oc(14),l.Nb(),l.Ob(15,"h6"),l.oc(16," Phone Number "),l.Nb(),l.Ob(17,"p",24),l.oc(18),l.Nb(),l.Ob(19,"h6"),l.oc(20," Consulting Type "),l.Nb(),l.Ob(21,"p",24),l.oc(22),l.Zb(23,"titlecase"),l.Nb(),l.Ob(24,"h6"),l.oc(25," Reason for meeting "),l.Nb(),l.Ob(26,"p",24),l.oc(27),l.Nb(),l.Nb(),l.Ob(28,"div",22),l.Ob(29,"h4",23),l.oc(30," Payment Details "),l.Nb(),l.Ob(31,"h6"),l.oc(32," Payment Paid "),l.Nb(),l.Ob(33,"h3",25),l.oc(34),l.Nb(),l.Ob(35,"h4",23),l.oc(36," Slot Details: "),l.Nb(),l.Ob(37,"h6"),l.oc(38," Date "),l.Nb(),l.Ob(39,"p",24),l.oc(40),l.Zb(41,"date"),l.Nb(),l.Ob(42,"h6"),l.oc(43," Time "),l.Nb(),l.Ob(44,"p",24),l.oc(45),l.Zb(46,"date"),l.Zb(47,"date"),l.Nb(),l.nc(48,d,3,0,"div",26),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(49,"section",27),l.Ob(50,"div",28),l.Ob(51,"div",29),l.Ob(52,"h3",30),l.oc(53,"Latest Bookings"),l.Nb(),l.Nb(),l.Ob(54,"a",31),l.oc(55," See All"),l.Nb(),l.Nb(),l.Ob(56,"div",32),l.Ob(57,"div",19),l.nc(58,m,13,11,"div",33),l.Nb(),l.Nb(),l.Nb(),l.Ob(59,"section",27),l.Ob(60,"div",28),l.Ob(61,"div",29),l.Ob(62,"h3",30),l.oc(63,"Latest Added Slots"),l.Nb(),l.Nb(),l.Ob(64,"a",34),l.oc(65," See All"),l.Nb(),l.Nb(),l.Ob(66,"div",32),l.Ob(67,"div",19),l.nc(68,h,22,19,"div",33),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&n){var e=l.Yb();l.zb(14),l.qc(" ",null==e.mostRecent?null:e.mostRecent.userName," "),l.zb(4),l.qc(" ",null==e.mostRecent?null:e.mostRecent.mobileNo," "),l.zb(4),l.qc(" ",l.ac(23,12,null==e.mostRecent?null:e.mostRecent.counsultingType)," "),l.zb(5),l.qc(" ",null==e.mostRecent?null:e.mostRecent.reason," "),l.zb(7),l.qc(" $",null==e.mostRecent?null:e.mostRecent.amountPaid," "),l.zb(6),l.qc(" ",l.bc(41,14,null==e.mostRecent?null:e.mostRecent.date,"MMMM d,y")," "),l.zb(5),l.sc(" ",l.bc(46,17,null==e.mostRecent?null:e.mostRecent.startTime,"h:mm a")," - ",l.bc(47,20,null==e.mostRecent?null:e.mostRecent.endTime,"h:mm a"),"(",null==e.mostRecent?null:e.mostRecent.duration," MINS) "),l.zb(3),l.ec("ngIf",e.canAttend),l.zb(10),l.ec("ngForOf",e.bookedSlots),l.zb(10),l.ec("ngForOf",e.allSlots)}}var p,O,v,C,N,M=((p=function(){function n(t,e){_classCallCheck(this,n),this.http=t,this.share=e,this.bookedSlots=[],this.allSlots=[],this.canAttend=!1}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.loading=!0,this.http.postToBackend("/admin/dashboard",{adminId:this.share.user}).then((function(t){var e,o;console.log(t),n.loading=!1,7e3==t.statusCode?(n.mostRecent=t.data.recentMetting,n.bookedSlots=t.data.latest.splice(0,5),n.allSlots=t.data.recent,e=new Date(n.mostRecent.startTime),o=new Date,n.canAttend=(e-o)/36e5<=1,console.log(n.canAttend,"##",(e-o)/36e5)):r.a.fire("Error",t.message,"error")})).catch((function(t){n.loading=!1,console.log(t),r.a.fire("Error",t.message,"error")}))}},{key:"deleteSlot",value:function(n,t,e,o){var i=this;e?r.a.fire({icon:"question",title:"Delete this slot?",text:"This slot is booked. Removing it will require refund for the slot. Do you still want to remove it?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(e){e.value&&i.http.postToBackend("/admin/refund",{adminId:i.share.user,slotId:n,transactionId:t}).then((function(n){console.log(n),7e3===n.statusCode?(i.allSlots.splice(o,1),r.a.fire("Deleted","Slot deleted successfully. Refund Initiated","success")):r.a.fire("Failed",n.message,"error")})).catch((function(n){console.log(n),r.a.fire("Failed","Failed to delete slot","error")}))})):r.a.fire({icon:"question",title:"Delete this slot?",showCancelButton:!0,confirmButtonText:"Yes, delete this slot!"}).then((function(t){t.value&&i.http.postToBackend("/admin/slot/delete",{adminId:i.share.user,slotId:n}).then((function(n){console.log(n),n.statusCode?(r.a.fire("Deleted","Slot Deleted Successfully","success"),i.allSlots.splice(o,1)):r.a.fire("Failed","Failed to delete slot","error")})).catch((function(n){console.log(n),r.a.fire("Failed","Failed to delete slot","error")})),console.log(t.value,n)}))}}]),n}()).\u0275fac=function(n){return new(n||p)(l.Jb(b.a),l.Jb(c.a))},p.\u0275cmp=l.Db({type:p,selectors:[["app-dashboard"]],decls:34,vars:2,consts:[[4,"ngIf"],["class","wrapper",4,"ngIf"],["id","booked-modal",1,"modal"],[1,"modal-dialog","modal-md"],[1,"modal-content"],[1,"modal-header","border-none"],["type","button","data-dismiss","modal",1,"close"],[1,"modal-body","text-center"],[1,"text-dark","text-center"],[1,"modal-footer"],["type","button",1,"btn","btn-sm","btn-primary"],["type","button","data-dismiss","modal",1,"btn","btn-sm","btn-dark"],["id","not-booked-modal",1,"modal"],[1,"text-center","mt-5","pt-4"],[1,"text","mx-auto","ld-ext-left","running"],[1,"ld","ld-ring","ld-spin"],[1,"wrapper"],[1,"next-meeting"],[1,"text-dark"],[1,"row"],[1,"col-md-9"],[1,"card","slot-card","p-5"],[1,"col-md-6"],[1,"text-dark","mb-3"],[1,"text"],[1,"text-dark","mt-4","border-1"],["class","text-right",4,"ngIf"],[1,"slots-container","pt-2"],[1,"d-flex","align-items-end","justify-content-between","border-1"],[1,"heading"],[1,"text-dark","mb-0"],["routerLink","/admin/all-bookings",1,"btn","btn-dark","btn-sm","mt-0"],[1,"slot-section"],["class","col-lg-3 col-md-4 col-6",4,"ngFor","ngForOf"],["routerLink","/admin/all-slots",1,"btn","btn-dark","btn-sm","mt-0"],[1,"text-right"],["routerLink","/admin/video-call",1,"btn","btn-dark","mt-4"],[1,"col-lg-3","col-md-4","col-6"],[1,"card","slot-card","text-center","pt-5"],[1,"text-light-gray","slot-time","mt-2","mb-2"],[1,"text-center"],[1,"btn","btn-sm","btn-dark","mt-3",3,"routerLink"],[1,"card","slot-card"],[1,"slot-option"],["class","my-tooltip",4,"ngIf"],[1,"my-tooltip",3,"click"],[1,"material-icons","material-icons-rounded"],[1,"my-tooltip-content"],[1,"text-dark","mb-2"],[1,"text-light-gray","slot-time","mb-4"],[1,"d-flex","align-items-center","justify-content-between"],[1,"text-block","text-block--dark"],[1,"text-block"],[1,"my-tooltip"],[3,"routerLink"],[1,"material-icons","material-icons-outlined","text-dark"]],template:function(n,t){1&n&&(l.nc(0,s,5,0,"ng-container",0),l.nc(1,f,69,23,"div",1),l.Ob(2,"div",2),l.Ob(3,"div",3),l.Ob(4,"div",4),l.Ob(5,"div",5),l.Ob(6,"button",6),l.oc(7," \xd7 "),l.Nb(),l.Nb(),l.Ob(8,"div",7),l.Ob(9,"h3",8),l.oc(10,"Delete this slot ?"),l.Nb(),l.Ob(11,"p"),l.oc(12," This slot is already booked. "),l.Kb(13,"br"),l.oc(14," Deleting this will result in refund of the payment. "),l.Nb(),l.Nb(),l.Ob(15,"div",9),l.Ob(16,"button",10),l.oc(17," Yes, Delete it "),l.Nb(),l.Ob(18,"button",11),l.oc(19," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Ob(20,"div",12),l.Ob(21,"div",3),l.Ob(22,"div",4),l.Ob(23,"div",5),l.Ob(24,"button",6),l.oc(25," \xd7 "),l.Nb(),l.Nb(),l.Ob(26,"div",7),l.Ob(27,"h3",8),l.oc(28,"Delete this slot ?"),l.Nb(),l.Nb(),l.Ob(29,"div",9),l.Ob(30,"button",10),l.oc(31," Yes, Delete it "),l.Nb(),l.Ob(32,"button",11),l.oc(33," No "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&n&&(l.ec("ngIf",t.loading),l.zb(1),l.ec("ngIf",!t.loading))},directives:[o.k,i.e,o.j],pipes:[o.p,o.d],styles:[".slot-card[_ngcontent-%COMP%]{border-radius:1rem;position:relative;padding-top:5rem;display:flex;flex-direction:column;justify-content:space-between;min-height:15rem;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);margin-bottom:3rem}.slot-option[_ngcontent-%COMP%]{position:absolute;right:0;top:0;cursor:pointer;padding:1.5rem}.slot-option[_ngcontent-%COMP%]   .my-tooltip[_ngcontent-%COMP%]:not(:last-child){margin-right:2rem}.modal[_ngcontent-%COMP%]{padding:2rem;-webkit-animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards;animation:fade_in .32s cubic-bezier(.45,.19,.13,1.26) forwards}.modal-dialog[_ngcontent-%COMP%]{margin:0 auto;min-height:90vh;display:flex;align-items:center;justify-content:center}.modal-content[_ngcontent-%COMP%]{box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);border-radius:.8rem;padding:1.5rem 2rem;border:none}.modal-title[_ngcontent-%COMP%]{text-align:center}.modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{background-color:transparent;color:#000}"]}),p),P=e("kGJY"),_=((O=function(){function n(t,e,o,i){_classCallCheck(this,n),this.share=t,this.storage=e,this.http=o,this.router=i}return _createClass(n,[{key:"ngOnInit",value:function(){this.fixHeader(),$(".hamburger-container").on("click",this.toggleHam),$(".navbar-menu-item").on("click",this.toggleHam)}},{key:"fixHeader",value:function(){$(window).scroll((function(){$(window).scrollTop()>=100?$(".navbar").addClass("fixed"):$(".navbar").removeClass("fixed")}))}},{key:"toggleHam",value:function(){$(".hamburger-container").hasClass("open")?($(".hamburger-container").removeClass("open"),$(".navbar-menu").removeClass("open")):($(".hamburger-container").addClass("open"),$(".navbar-menu").addClass("open"))}},{key:"logout",value:function(){var n=this;$("#logout-btn").addClass("running"),$("#logout-btn").prop("disabled",!0),this.http.postToBackend("/admin/logout",{}).then((function(t){console.log(t),7e3===t.statusCode?(n.share.token=null,n.share.user=null,n.storage.destroyToken(),n.storage.destroyUser(),$("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),n.router.navigate(["/admin/login"])):($("#logout-btn").removeClass("running"),$("#logout-btn").prop("disabled",!1),r.a.fire({title:"Some Error Occured",icon:"error",text:t.message}))})).catch((function(n){r.a.fire({title:"Internal server error",icon:"error",text:n.message})}))}}]),n}()).\u0275fac=function(n){return new(n||O)(l.Jb(c.a),l.Jb(P.a),l.Jb(b.a),l.Jb(i.c))},O.\u0275cmp=l.Db({type:O,selectors:[["app-header"]],decls:31,vars:0,consts:[["id","navbar",1,"navbar"],[1,"navbar-container"],[1,"navbar-logo"],["routerLink","/"],["src","assets/img/logo.png","alt","logo",1,"navbar-logo-img"],[1,"text-dark"],[1,"navbar-menu-wrapper"],[1,"navbar-menu"],[1,"navbar-menu-item"],["routerLink","/admin"],["routerLink","/admin/all-slots"],["routerLink","/admin/all-bookings"],["routerLink","/admin/blogs"],["routerLink","/admin/add-slot",1,"btn","btn-primary","btn-big","btn-sm","m-0"],["id","logout-btn",1,"btn","btn-dark","btn-sm","logout-btn","ld-ext-right",3,"click"],["src","assets/img/icons/logout.svg","alt",""],[1,"ld","ld-ring","ld-spin-fast"],[1,"hamburger-container"],[1,"hamburger"]],template:function(n,t){1&n&&(l.Ob(0,"nav",0),l.Ob(1,"div",1),l.Ob(2,"div",2),l.Ob(3,"a",3),l.Kb(4,"img",4),l.Nb(),l.Ob(5,"h4",5),l.oc(6,"Admin Panel"),l.Nb(),l.Nb(),l.Ob(7,"div",6),l.Ob(8,"ul",7),l.Ob(9,"li",8),l.Ob(10,"a",9),l.oc(11,"Dashboard"),l.Nb(),l.Nb(),l.Ob(12,"li",8),l.Ob(13,"a",10),l.oc(14,"All Slots"),l.Nb(),l.Nb(),l.Ob(15,"li",8),l.Ob(16,"a",11),l.oc(17,"All Bookings"),l.Nb(),l.Nb(),l.Ob(18,"li",8),l.Ob(19,"a",12),l.oc(20,"Blogs"),l.Nb(),l.Nb(),l.Ob(21,"li",8),l.Ob(22,"a",13),l.oc(23,"Add new slot"),l.Nb(),l.Nb(),l.Nb(),l.Ob(24,"button",14),l.Wb("click",(function(){return t.logout()})),l.Kb(25,"img",15),l.Kb(26,"div",16),l.Ob(27,"span"),l.oc(28," Logout "),l.Nb(),l.Nb(),l.Nb(),l.Ob(29,"div",17),l.Kb(30,"div",18),l.Nb(),l.Nb(),l.Nb())},directives:[i.e],styles:['.hamburger-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .3s ease-in-out;display:none}@media (max-width:47.99em){.hamburger-container[_ngcontent-%COMP%]{display:block}}.hamburger[_ngcontent-%COMP%]{position:relative;width:30px;height:4px}.hamburger[_ngcontent-%COMP%], .hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{border-radius:25px;background:#202020;transition:all .3s ease-in-out}.hamburger[_ngcontent-%COMP%]:after, .hamburger[_ngcontent-%COMP%]:before{content:"";position:absolute;width:inherit;height:inherit}.hamburger-container[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:translateY(-10px)}.hamburger[_ngcontent-%COMP%]:after{transform:translateY(10px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{transform:translateX(-40px);background:transparent;box-shadow:none}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:before{transform:rotate(45deg) translate(28px,-28px)}.hamburger-container.open[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]:after{transform:rotate(-45deg) translate(28px,28px)}.navbar[_ngcontent-%COMP%]{position:fixed;left:0;top:0;width:100%;z-index:1050;padding:2rem 0;transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.2s}.navbar-container[_ngcontent-%COMP%]{position:relative;display:flex;justify-content:space-between;align-items:center}.navbar-logo[_ngcontent-%COMP%]{position:relative;z-index:1000}.navbar-logo-img[_ngcontent-%COMP%]{width:6rem}.navbar-menu[_ngcontent-%COMP%]{list-style:none;display:flex;transition:all .3s cubic-bezier(.45,.19,.13,1.26)}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:4rem}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#202020;text-transform:capitalize;font-weight:700;transition:all .3s cubic-bezier(.25,.46,.45,.94);font-size:1.4rem;font-family:Montserrat}.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#1ac293}@media (max-width:61.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:1.6rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:2rem}}@media (max-width:47.99em){.navbar-menu-item[_ngcontent-%COMP%]{margin:2rem 0}.navbar-menu-item[_ngcontent-%COMP%]:not(:last-child){margin-right:0}}@media (max-width:47.99em){.navbar-menu[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;height:100vh;position:fixed;left:0;top:0;width:100%;background-color:#fff;opacity:0;transform:scale(.6);visibility:hidden}.navbar-menu.open[_ngcontent-%COMP%]{opacity:1;visibility:visible;transform:scale(1)}}.dashboard-icon[_ngcontent-%COMP%], .navbar.fixed[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25)}.dashboard-icon[_ngcontent-%COMP%]{height:5rem;cursor:pointer;z-index:50;width:5rem;border-radius:50%;padding:.2rem;display:flex;align-items:center;justify-content:center}.dashboard-icon[_ngcontent-%COMP%], .dashboard-lg[_ngcontent-%COMP%]{position:relative}@media (max-width:47.99em){.dashboard-lg[_ngcontent-%COMP%]{display:none}}.dashboard-sm[_ngcontent-%COMP%]{display:none;position:absolute;right:4em}@media (max-width:47.99em){.dashboard-sm[_ngcontent-%COMP%]{display:block}}@media (max-width:35.99em){.dashboard-sm[_ngcontent-%COMP%]{right:4.5em}}.dashboard-menu[_ngcontent-%COMP%]{min-width:15rem;background-color:#fff;box-shadow:0 4rem 10rem -1rem rgba(87,96,109,.5);padding:1rem;border-radius:1rem;visibility:hidden;opacity:0;transform:translateY(1rem);transition:all .3s cubic-bezier(.25,.46,.45,.94);transition-duration:.1s;position:absolute;right:0;top:110%}.dashboard-menu.show[_ngcontent-%COMP%]{visibility:visible;opacity:1;transform:translateY(0)}.dashboard-link[_ngcontent-%COMP%]{padding:1rem;font-weight:500;cursor:pointer;display:block;transition:all .3s cubic-bezier(.25,.46,.45,.94)}.dashboard-link[_ngcontent-%COMP%]:hover{background-color:#dfe6f6}.navbar-logo[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar-logo-img[_ngcontent-%COMP%]{height:4rem;width:auto;margin-right:1rem}.navbar-container[_ngcontent-%COMP%]{padding:0 3vw}.navbar-menu[_ngcontent-%COMP%]{align-items:center}.navbar-menu-wrapper[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{display:flex;align-items:center}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{z-index:5;margin:0 0 0 2rem;position:relative;justify-content:center}@media (max-width:47.99em){.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{position:absolute;right:calc(40px + 3vw)}}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;margin-right:.8rem;z-index:5;-webkit-filter:invert(1);filter:invert(1);transition:all .3s cubic-bezier(.25,.46,.45,.94)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;z-index:5}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   .ld[_ngcontent-%COMP%]{z-index:20}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:after{height:100%;transform-origin:bottom;z-index:0;transform:scaleY(0) scaleX(1)}.navbar[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]:hover:after{transform:scaleY(1) scaleX(1)}.navbar.fixed[_ngcontent-%COMP%]{padding:1rem 0}@media (max-width:47.99em){.navbar.fixed[_ngcontent-%COMP%]{padding:2rem 0}}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]{background-color:#202020}.navbar.fixed[_ngcontent-%COMP%]   .logout-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-webkit-filter:invert(1);filter:invert(1)}@media (max-width:47.99em){.btn-big[_ngcontent-%COMP%]{padding:1.8rem 3rem!important;font-size:2rem!important}}']}),O),k=[{path:"",component:(v=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),v.\u0275fac=function(n){return new(n||v)},v.\u0275cmp=l.Db({type:v,selectors:[["app-admin-panel"]],decls:5,vars:0,consts:[[1,"dash","bg-light"],[1,"container"],[1,"dash-container"]],template:function(n,t){1&n&&(l.Ob(0,"div",0),l.Kb(1,"app-header"),l.Ob(2,"div",1),l.Ob(3,"div",2),l.Kb(4,"router-outlet"),l.Nb(),l.Nb(),l.Nb())},directives:[_,i.g],styles:[".dash[_ngcontent-%COMP%]{min-height:100vh}.dash-container[_ngcontent-%COMP%]{padding:15vh 0 5vh}@media (max-width:47.99em){.dash-container[_ngcontent-%COMP%]{padding-top:15vh}}"]}),v),children:[{path:"",component:M},{path:"booking-details/:id",loadChildren:function(){return e.e(17).then(e.bind(null,"PqMW")).then((function(n){return n.BookingDetailsModule}))}},{path:"all-bookings",loadChildren:function(){return e.e(13).then(e.bind(null,"N9uA")).then((function(n){return n.AllBookingsModule}))}},{path:"all-slots",loadChildren:function(){return e.e(14).then(e.bind(null,"fEIi")).then((function(n){return n.AllSlotsModule}))}},{path:"add-slot",loadChildren:function(){return Promise.all([e.e(3),e.e(11)]).then(e.bind(null,"pBEy")).then((function(n){return n.AddSlotModule}))}},{path:"video-call",loadChildren:function(){return e.e(18).then(e.bind(null,"XihW")).then((function(n){return n.VideoCallModule}))}},{path:"blogs",loadChildren:function(){return Promise.all([e.e(2),e.e(16)]).then(e.bind(null,"oS7f")).then((function(n){return n.BlogsModule}))}},{path:"blog/:id",loadChildren:function(){return e.e(15).then(e.bind(null,"XfPR")).then((function(n){return n.BlogPostModule}))}},{path:"blogs/post-new",loadChildren:function(){return Promise.all([e.e(4),e.e(9)]).then(e.bind(null,"106v")).then((function(n){return n.PostBlogModule}))}}]}],x=((N=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:N}),N.\u0275inj=l.Gb({factory:function(n){return new(n||N)},imports:[[i.f.forChild(k)],i.f]}),N),y=((C=function n(){_classCallCheck(this,n)}).\u0275mod=l.Hb({type:C}),C.\u0275inj=l.Gb({factory:function(n){return new(n||C)},imports:[[o.b,x]]}),C)}}]);