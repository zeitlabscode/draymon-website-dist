function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{XihW:function(e,t,n){"use strict";n.r(t),n.d(t,"VideoCallModule",(function(){return b}));var o=n("ofXK"),i=n("fXoL"),r=n("N+K7"),a=n("dz5x"),c=n("tyNb");function s(e,t){if(1&e&&(i.Ob(0,"div"),i.Ob(1,"h4"),i.Ob(2,"span",2),i.oc(3,"Time Remaining: "),i.Nb(),i.oc(4),i.Nb(),i.Ob(5,"div",3),i.Kb(6,"iframe",4),i.Nb(),i.Nb()),2&e){var n=i.Yb();i.zb(4),i.sc(" ",n.hour,"h ",n.minute,"m ",n.second,"s")}}function l(e,t){1&e&&(i.Ob(0,"div"),i.Ob(1,"div",5),i.Kb(2,"img",6),i.Ob(3,"p"),i.oc(4,"Meeting Over"),i.Nb(),i.Ob(5,"a",7),i.oc(6," Go to Dashboard"),i.Nb(),i.Nb(),i.Nb())}var m,d,h=[{path:"",component:(m=function(){function e(t,n,o){_classCallCheck(this,e),this.http=t,this.share=n,this.router=o,this.meeting=!1,this.hour=0,this.minute=0,this.second=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.http.postToBackend("/admin/meeting/current",{adminId:this.share.user}).then((function(t){console.log(t),7e3==t.statusCode&&(console.log(new Date(t.data.endTime)),e.meeting=!0,e.startTimer(t.data.endTime))})).catch((function(e){console.log(e)}))}},{key:"startTimer",value:function(e){var t,n=this;this.x=setInterval((function(){t=(new Date).getTime();var o=new Date(e)-t,i=(Math.floor(o/864e5),Math.floor(o%864e5/36e5)),r=Math.floor(o%36e5/6e4),a=Math.floor(o%6e4/1e3);n.hour=i,n.minute=r,n.second=a,o<0&&(clearInterval(n.x),n.meeting=!1,console.log("end hit"))}),1e3)}}]),e}(),m.\u0275fac=function(e){return new(e||m)(i.Jb(r.a),i.Jb(a.a),i.Jb(c.c))},m.\u0275cmp=i.Db({type:m,selectors:[["app-video-call"]],decls:3,vars:2,consts:[[1,"container"],[4,"ngIf"],[1,"text-dark"],[1,"iframe-container"],["src","https://tokbox.com/embed/embed/ot-embed.js?embedId=bec6518c-a0ab-4c90-a177-f906c4b1979c&room=DEFAULT_ROOM&iframe=true","width","800","height","640","scrolling","auto","allow","microphone; camera"],[1,"meeting-over"],["src","assets/img/icons/end.svg","alt",""],["routerLink","/admin",1,"btn"]],template:function(e,t){1&e&&(i.Ob(0,"div",0),i.nc(1,s,7,3,"div",1),i.nc(2,l,7,0,"div",1),i.Nb()),2&e&&(i.zb(1),i.ec("ngIf",t.meeting),i.zb(1),i.ec("ngIf",!t.meeting))},directives:[o.k,c.e],styles:[".meeting-over[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;margin-top:5rem}.meeting-over[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{opacity:.6;height:7rem;margin-bottom:2rem}.meeting-over[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-weight:600}.iframe-container[_ngcontent-%COMP%]{z-index:2;margin:4rem 0;width:100%;height:0;box-shadow:0 2rem 5rem 0 rgba(123,136,153,.25);padding-bottom:56.25%;position:relative;overflow:hidden}.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{position:absolute;left:0;top:0;border:none;height:100%;width:100%}"]}),m)}],b=((d=function e(){_classCallCheck(this,e)}).\u0275mod=i.Hb({type:d}),d.\u0275inj=i.Gb({factory:function(e){return new(e||d)},imports:[[o.b,c.f.forChild(h)]]}),d)}}]);