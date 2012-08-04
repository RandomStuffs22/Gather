(function(){(function(e){var t,n;return t=function(e){var t,n,r,i,s,o,u,a;return document.selection?(o=document.selection.createRange(),s=0,o&&o.parentElement()===e&&(i=e.value.replace(/\r\n/g,"\n"),r=i.length,a=e.createTextRange(),a.moveToBookmark(o.getBookmark()),n=e.createTextRange(),n.collapse(!1),a.compareEndPoints("StartToEnd",n)>-1?u=t=r:(u=-a.moveStart("character",-r),t=-a.moveEnd("character",-r)))):u=e.selectionStart,u},n=function(e,t){var n;return document.selection?(n=e.createTextRange(),n.move("character",t),n.select()):e.setSelectionRange(t,t)},e.fn.caretPos=function(e){var r;return r=this[0],r.focus(),e?n(r,e):t(r)}})(window.jQuery)}).call(this);(function(){(function(e){var t,n,r,i,s,o,u,a,f,l,c;return r={$mirror:null,css:["overflowY","height","width","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","fontFamily","borderStyle","borderWidth","wordWrap","fontSize","lineHeight","overflowX"],init:function(t){var n,r;return n=e("<div></div>"),r={position:"absolute",left:-9999,top:0,zIndex:-2e4,"white-space":"pre-wrap"},e.each(this.css,function(e,n){return r[n]=t.css(n)}),n.css(r),this.$mirror=n,t.after(n),this},setContent:function(e){return this.$mirror.html(e),this},getFlagRect:function(){var e,t,n;return e=this.$mirror.find("span#flag"),t=e.position(),n={left:t.left,top:t.top,bottom:e.height()+t.top},this.$mirror.remove(),n}},t=function(t){var s,o=this;return s=this.$inputor=e(t),this.options={},this.query={text:"",start:0,stop:0},this._cache={},this.pos=0,this.flags={},this.theflag=null,this.search_word={},this.view=n,this.mirror=r,s.on("keyup.inputor",function(e){var t,n;n=e.keyCode===40||e.keyCode===38,t=!n||!o.view.isShowing();if(t)return o.lookup()}).on("mouseup.inputor",function(e){return o.lookup()}),this.init(),i("At.new",s[0]),this},t.prototype={constructor:t,init:function(){var e=this;return this.$inputor.on("keydown.inputor",function(t){return e.onkeydown(t)}).on("scroll.inputor",function(t){return e.view.hide()}).on("blur.inputor",function(t){return e.view.hide(1e3)}),i("At.init",this.$inputor[0])},reg:function(t,n){var r,s,o;return r={},e.isFunction(n)?r.callback=n:r=n,o=(s=this.options)[t]||(s[t]=e.fn.atWho["default"]),this.options[t]=e.extend({},o,r),i("At.reg",this.$inputor[0],t,n)},dataValue:function(){var e,t;return t=this.search_word[this.theflag],t?t:(e=/data-value=["']?\$\{(\w+)\}/g.exec(this.getOpt("tpl")),this.search_word[this.theflag]=a(e)?null:e[1])},getOpt:function(e){try{return this.options[this.theflag][e]}catch(t){return null}},rect:function(){var t,n,r,i,s,o,u,a,f,l;return t=this.$inputor,document.selection?(n=document.selection.createRange(),f=n.boundingLeft+t.scrollLeft(),l=n.boundingTop+e(window).scrollTop()+t.scrollTop(),i=l+n.boundingHeight,{top:l-2,left:f-2,bottom:i-2}):(s=function(e){return e.replace(/</g,"&lt").replace(/>/g,"&gt").replace(/`/g,"&#96").replace(/"/g,"&quot").replace(/\r\n|\r|\n/g,"<br />")},a=t.val().slice(0,this.pos-1),o="<span>"+s(a)+"</span>",o+="<span id='flag'>@</span>",u=t.offset(),r=this.mirror.init(t).setContent(o).getFlagRect(),f=u.left+r.left-t.scrollLeft(),l=u.top-t.scrollTop(),i=l+r.bottom,l+=r.top,{top:l,left:f,bottom:i+2})},cache:function(e){var t,n;return t=this.query.text,!this.getOpt("cache")||!t?null:(n=this._cache)[t]||(n[t]=e)},getKeyname:function(){var t,n,r,s,o,u,f,l,c=this;return t=this.$inputor,l=t.val(),n=t.caretPos(),f=l.slice(0,n),o=null,e.each(this.options,function(e){var t,n;n=new RegExp(e+"([A-Za-z0-9_+-]*)$|"+e+"([^\\x00-\\xff]*)$","gi"),t=n.exec(f);if(!a(t))return o=t[1]===void 0?t[2]:t[1],c.theflag=e,!1}),typeof o=="string"&&o.length<=20?(u=n-o.length,r=u+o.length,this.pos=u,s={text:o.toLowerCase(),start:u,end:r}):this.view.hide(),i("At.getKeyname",s),this.query=s},replaceStr:function(e){var t,n,r,s,o,u;return t=this.$inputor,r=this.query,s=t.val(),n=this.getOpt("display_flag")?0:this.theflag.length,o=s.slice(0,r.start-n),u=o+e+s.slice(r.end),t.val(u),t.caretPos(o.length+e.length),t.change(),i("At.replaceStr",u)},onkeydown:function(t){var n;n=this.view;if(!n.isShowing())return;switch(t.keyCode){case 38:t.preventDefault(),n.prev();break;case 40:t.preventDefault(),n.next();break;case 9:case 13:if(!n.isShowing())return;t.preventDefault(),n.choose();break;default:e.noop()}return t.stopPropagation()},renderView:function(e){return i("At.renderView",this,e),e=e.splice(0,this.getOpt("limit")),e=c(e,this.dataValue()),e=f(e),e=l.call(this,e),this.view.render(this,e)},lookup:function(){var t,n,r;return r=this.getKeyname(),r?(i("At.lookup.key",r),a(n=this.cache())?a(n=this.lookupWithData(r))?e.isFunction(t=this.getOpt("callback"))?t(r.text,e.proxy(this.renderView,this)):this.view.hide():this.renderView(n):this.renderView(n),e.noop()):!1},lookupWithData:function(t){var n,r,i=this;return n=this.getOpt("data"),e.isArray(n)&&n.length!==0&&(r=e.map(n,function(n,r){var s,o,u;try{o=e.isPlainObject(n)?n[i.dataValue()]:n,u=new RegExp(t.text.replace("+","\\+"),"i"),s=o.match(u)}catch(a){return null}return s?n:null})),r}},n={timeout_id:null,id:"#at-view",holder:null,_jqo:null,jqo:function(){var t;return t=this._jqo,t=a(t)?this._jqo=e(this.id):t},init:function(){var t,n,r=this;if(!a(this.jqo()))return;return n="<div id='"+this.id.slice(1)+"' class='at-view'><ul id='"+this.id.slice(1)+"-ul'></ul></div>",e("body").append(n),t=this.jqo().find("ul"),t.on("mouseenter.view","li",function(n){return t.find(".cur").removeClass("cur"),e(n.currentTarget).addClass("cur")}).on("click",function(e){return e.stopPropagation(),e.preventDefault(),r.choose()})},isShowing:function(){return this.jqo().is(":visible")},choose:function(){var e,t;return e=this.jqo().find(".cur"),t=a(e)?this.holder.query.text+" ":e.attr(this.holder.getOpt("choose"))+" ",this.holder.replaceStr(t),this.hide()},rePosition:function(){var t;return t=this.holder.rect(),t.bottom+this.jqo().height()-e(window).scrollTop()>e(window).height()&&(t.bottom=t.top-this.jqo().height()),i("AtView.rePosition",{left:t.left,top:t.bottom}),this.jqo().offset({left:t.left,top:t.bottom})},next:function(){var t,n;return t=this.jqo().find(".cur").removeClass("cur"),n=t.next(),n.length||(n=e(this.jqo().find("li")[0])),n.addClass("cur")},prev:function(){var e,t;return e=this.jqo().find(".cur").removeClass("cur"),t=e.prev(),t.length||(t=this.jqo().find("li").last()),t.addClass("cur")},show:function(){return this.isShowing()||this.jqo().show(),this.rePosition()},hide:function(e){var t,n=this;if(!isNaN(e))return t=function(){return n.hide()},clearTimeout(this.timeout_id),this.timeout_id=setTimeout(t,300);if(this.isShowing())return this.jqo().hide()},clear:function(e){return e===!0&&(this._cache={}),this.jqo().find("ul").empty()},render:function(t,n){var r,a;return e.isArray(n)?n.length<=0?(this.hide(),!0):(this.holder=t,t.cache(n),this.clear(),r=this.jqo().find("ul"),a=t.getOpt("tpl"),e.each(n,function(e,n){var f;return a||(a=s),f=o(a,n),i("AtView.render",f),r.append(u(f,t.query.text))}),this.show(),r.find("li:eq(0)").addClass("cur")):!1}},f=function(t){return e.map(t,function(t,n){return e.isPlainObject(t)||(t={id:n,name:t}),t})},o=function(e,t){var n;try{return n=e.replace(/\$\{([^\}]*)\}/g,function(e,n,r){return t[n]})}catch(r){return""}},u=function(e,t){return a(t)?e:e.replace(new RegExp(">\\s*(\\w*)("+t.replace("+","\\+")+")(\\w*)\\s*<","ig"),function(e,t,n,r){return"> "+t+"<strong>"+n+"</strong>"+r+" <"})},l=function(e){var t,n,r,i,s,o,u;t=this.dataValue(),r=this.query.text,i=[];for(o=0,u=e.length;o<u;o++){n=e[o],s=n[t];if(s.toLowerCase().indexOf(r)===-1)continue;n.order=s.toLowerCase().indexOf(r),i.push(n)}return i.sort(function(e,t){return e.order-t.order}),i},c=function(t,n){var r;return r=[],e.map(t,function(t,i){var s;s=e.isPlainObject(t)?t[n]:t;if(e.inArray(s,r)<0)return r.push(s),t})},a=function(t){return!t||e.isPlainObject(t)&&e.isEmptyObject(t)||e.isArray(t)&&t.length===0||t instanceof e&&t.length===0||t===void 0},s="<li id='${id}' data-value='${name}'>${name}</li>",i=function(){},e.fn.atWho=function(r,i){return n.init(),this.filter("textarea, input").each(function(){var n,s;return n=e(this),s=n.data("AtWho"),s||n.data("AtWho",s=new t(this)),s.reg(r,i)})},e.fn.atWho["default"]={data:[],choose:"data-value",callback:null,cache:!0,limit:5,display_flag:!0,tpl:s}})(window.jQuery)}).call(this);(function(){var e=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};$(function(){var t,n,r,i,s,o,u,a,f,l;i=[],n=function(t){var n;n=$(t).text();if(e.call(i,n)<0)return i.push(n)},f=$(".username");for(s=0,u=f.length;s<u;s++)t=f[s],n(t);l=$(".reply_user");for(o=0,a=l.length;o<a;o++)t=l[o],n(t);$("#content").atWho("@",{data:i}),$(".reply").click(function(){var e,t,n,r,i;return n=$(this),e=n.data("floor"),i=n.data("user"),r=$("#content"),t="#"+e+" @"+i+" ",r.val().trim().length===0?t+="":t="\n"+t,r.focus().val(r.val()+t),!1});if(!window.localStorage)return;$("#title").length!==0?($("#title").val(window.localStorage.getItem("title")).change(function(){window.localStorage.setItem("title",$(this).val())}),r="post"):r=/\w{24}/.exec(window.location)[0];if(!r)return;return $("#content").val(window.localStorage.getItem(r)).change(function(){window.localStorage.setItem(r,$(this).val())}),$("form").submit(function(){window.localStorage.setItem("title",""),window.localStorage.setItem(r,"")})})}).call(this);