hljs.LANGUAGES.django=function(){function a(a,b){return b==undefined||!a.className&&b.className=="tag"||a.className=="value"}function b(c,e){var f={};for(var g in c){g!="contains"&&(f[g]=c[g]);var h=[];for(var i=0;c.contains&&i<c.contains.length;i++)h.push(b(c.contains[i],c));a(c,e)&&(h=d.concat(h)),h.length&&(f.contains=h)}return f}var c={className:"filter",begin:"\\|[A-Za-z]+\\:?",excludeEnd:!0,keywords:{truncatewords:1,removetags:1,linebreaksbr:1,yesno:1,get_digit:1,timesince:1,random:1,striptags:1,filesizeformat:1,escape:1,linebreaks:1,length_is:1,ljust:1,rjust:1,cut:1,urlize:1,fix_ampersands:1,title:1,floatformat:1,capfirst:1,pprint:1,divisibleby:1,add:1,make_list:1,unordered_list:1,urlencode:1,timeuntil:1,urlizetrunc:1,wordcount:1,stringformat:1,linenumbers:1,slice:1,date:1,dictsort:1,dictsortreversed:1,default_if_none:1,pluralize:1,lower:1,join:1,center:1,"default":1,truncatewords_html:1,upper:1,length:1,phone2numeric:1,wordwrap:1,time:1,addslashes:1,slugify:1,first:1},contains:[{className:"argument",begin:'"',end:'"'}]},d=[{className:"template_comment",begin:"{%\\s*comment\\s*%}",end:"{%\\s*endcomment\\s*%}"},{className:"template_comment",begin:"{#",end:"#}"},{className:"template_tag",begin:"{%",end:"%}",keywords:{comment:1,endcomment:1,load:1,templatetag:1,ifchanged:1,endifchanged:1,"if":1,endif:1,firstof:1,"for":1,endfor:1,"in":1,ifnotequal:1,endifnotequal:1,widthratio:1,"extends":1,include:1,spaceless:1,endspaceless:1,regroup:1,by:1,as:1,ifequal:1,endifequal:1,ssi:1,now:1,"with":1,cycle:1,url:1,filter:1,endfilter:1,debug:1,block:1,endblock:1,"else":1},contains:[c]},{className:"variable",begin:"{{",end:"}}",contains:[c]}];return{case_insensitive:!0,defaultMode:b(hljs.LANGUAGES.xml.defaultMode)}}();