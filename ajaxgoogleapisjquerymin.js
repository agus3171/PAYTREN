!function(a,b) {
"object:=typeof module&&object==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document")
}

(undefined!=typeof window?window:this,function(a,b) {
varc:[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={
}

;n.fn=n.prototype= {
jquery:m,constructor:n,selector:,length:0,toArray:function(){return d.call(this)
}

,get:function(a) {
returnnull:a?0>a?this[a+this.length]:this[a]:d.call(this)
}

,pushStack:function(a) {
varb:n.merge(this.constructor(),a);
returnbprevobject:this,b.context=this.context,b
}

,eq:function(a) {
varb:this.length,c=+a+(0>a?b:0);
returnthispushstackc:0&&b>c?[this[c]]:[])
}

,n.extend=n.fn.extend=function() {
varabcdefg:arguments[0]||{
}

,n.extend( {
expando:jQuery+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)
}

,isFunction:function(a) {
returnfunction:==n.type(a)
}

,isArray:Array.isArray||function(a) {
returnarray:==n.type(a)
}

,isWindow:function(a) {
returnnull:a&&a==a.window
}

,isNumeric:function(a) {
returna-parsefloata:0
}

,isPlainObject:function(a) {
ifaobject:=n.type(a)||a.nodeType||n.isWindow(a))return!1
}

,type:function(a) {
returnnull:=a?a+:object==typeof a||function==typeof a?h[i.call(a)]||object:typeof a
}

,nodeName:function(a,b) {
returnanodenameanodenametolowercase:==b.toLowerCase()
}

,each:function(a,b,c) {
varde:0,f=a.length,g=s(a);
eifd:b.apply(a[e],c),d===!1)break
}

else if(g) {
eifd:b.call(a[e],e,a[e]),d===!1)break
}

,trim:k&&!k.call(\ufeff\xa0)?function(a) {
returnnull:=a?:k.call(a)
}

:function(a) {
returnnull:=a?:(a+"").replace(o,"")
}

,makeArray:function(a,b) {
varc:b||[];
returnnull:a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
}

,inArray:function(a,b,c) {
ford:b.length,c=c?0>c?Math.max(0,d+c):c:0;
cifcinbbc:==a)return c
}

,merge:function(a,b) {
varc:+b.length,d=0,e=a.length;
whilecdae:b[d++];
ifc:=c)while(void 0!==b[d])a[e++]=b[d++];
returnalength:e,a
}

,grep:function(a,b,c) {
forvarde:[],f=0,g=a.length,h=!c;
fd:!b(a[f],f),d!==h&&e.push(a[f])
}

,map:function(a,b,c) {
vardf:0,g=a.length,h=s(a),i=[];
fd:b(a[f],f,c),null!=d&&i.push(d);
elseforfinad:b(a[f],f,c),null!=d&&i.push(d)
}

,guid:1,proxy:function(a,b) {
returnstring:=typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0
}

),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b) {
hobjectb:b.toLowerCase()
}

);function s(a) {
varb:a.length,c=n.type(a);
returnfunction:==c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:array===c||0===b||number==typeof b&&b>0&&b-1 in a
}

var t=function(a) {
varbcdefghijklmnopqrs:sizzle+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0
}

.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a) {
forvarb:0,c=this.length;
bifthisb:==a)return b
}

,J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace(w,w#),N="\\["+K+*(+L+)+K+*(?:([*^$|!~]?=)+K+*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(+M+)|)|)+K+*\\],O=":("+L+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|+N.replace(3,8)+)*)|.*)\\)|),P=new RegExp(^+K++|((?:^|[^\\\\])(?:\\\\.)*)+K++$,g),Q=new RegExp(^+K+*,+K+*),R=new RegExp(^+K+*([>+~]|+K+)+K+*),S=new RegExp(=+K+*([^\\]'\"]*?)+K+*\\],g),T=new RegExp(O),U=new RegExp(^+M+$),V= {
id:new RegExp(^#(+L+")"),CLASS:new RegExp(^\\.(+L+")"),TAG:new RegExp(^(+L.replace(w,"w*")+")"),ATTR:new RegExp(^+N),PSEUDO:new RegExp(^+O),CHILD:new RegExp(^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp(^(?:+J+")$","i"),needsContext:new RegExp(^+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")
}