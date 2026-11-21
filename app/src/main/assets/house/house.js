(()=>{var _h=Object.defineProperty,xh=Object.defineProperties;var yh=Object.getOwnPropertyDescriptors;var Ha=Object.getOwnPropertySymbols;var vh=Object.prototype.hasOwnProperty,Mh=Object.prototype.propertyIsEnumerable;var Va=(i,t,e)=>t in i?_h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,cn=(i,t)=>{for(var e in t||(t={}))vh.call(t,e)&&Va(i,e,t[e]);if(Ha)for(var e of Ha(t))Mh.call(t,e)&&Va(i,e,t[e]);return i},wn=(i,t)=>xh(i,yh(t));var ba="162";var Sh=0,Ga=1,bh=2;var yc=1,Ea=2,Pn=3,jn=0,qe=1,In=2,Zn=0,is=1,Wa=2,Xa=3,qa=4,Eh=5,_i=100,wh=101,Ah=102,Ya=103,Za=104,Th=200,Ch=201,Rh=202,Fh=203,Oo=204,zo=205,Ph=206,Ih=207,Lh=208,Dh=209,Uh=210,Nh=211,Bh=212,Oh=213,zh=214,kh=0,Hh=1,Vh=2,yr=3,Gh=4,Wh=5,Xh=6,qh=7,wa=0,Yh=1,Zh=2,Jn=0,Jh=1,$h=2,Kh=3,jh=4,Qh=5,tu=6,eu=7;var vc=300,os=301,as=302,ko=303,Ho=304,qr=306,Vo=1e3,pn=1001,Go=1002,Me=1003,Ja=1004;var Es=1005;var Ge=1006,no=1007;var yi=1008;var $n=1009,nu=1010,iu=1011,Aa=1012,Mc=1013,Yn=1014,Ln=1015,Ls=1016,Sc=1017,bc=1018,Mi=1020,su=1021,mn=1023,ru=1024,ou=1025,Si=1026,ls=1027,au=1028,Ec=1029,lu=1030,wc=1031,Ac=1033,io=33776,so=33777,ro=33778,oo=33779,$a=35840,Ka=35841,ja=35842,Qa=35843,Tc=36196,tl=37492,el=37496,nl=37808,il=37809,sl=37810,rl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,ml=37821,ao=36492,gl=36494,_l=36495,cu=36283,xl=36284,yl=36285,vl=36286;var vr=2300,Mr=2301,lo=2302,Ml=2400,Sl=2401,bl=2402;var hu=3200,uu=3201,Cc=0,du=1,qn="",We="srgb",ni="srgb-linear",Ta="display-p3",Yr="display-p3-linear",Sr="linear",le="srgb",br="rec709",Er="p3";var Ui=7680;var El=519,fu=512,pu=513,mu=514,Rc=515,gu=516,_u=517,xu=518,yu=519,Wo=35044;var wl="300 es",Xo=1035,Dn=2e3,wr=2001,Qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var co=Math.PI/180,qo=180/Math.PI;function Kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Xe(i,t,e){return Math.max(t,Math.min(e,i))}function vu(i,t){return(i%t+t)%t}function ho(i,t,e){return(1-e)*i+e*t}function Al(i){return(i&i-1)===0&&i!==0}function Yo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Zt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],x=s[0],p=s[3],d=s[6],E=s[1],y=s[4],C=s[7],I=s[2],R=s[5],T=s[8];return r[0]=a*x+o*E+l*I,r[3]=a*p+o*y+l*R,r[6]=a*d+o*C+l*T,r[1]=c*x+h*E+u*I,r[4]=c*p+h*y+u*R,r[7]=c*d+h*C+u*T,r[2]=f*x+m*E+g*I,r[5]=f*p+m*y+g*R,r[8]=f*d+m*C+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*u+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=m*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(uo.makeScale(t,e)),this}rotate(t){return this.premultiply(uo.makeRotation(-t)),this}translate(t,e){return this.premultiply(uo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},uo=new Zt;function Fc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Mu(){let i=Ar("canvas");return i.style.display="block",i}var Tl={};function Pc(i){i in Tl||(Tl[i]=!0,console.warn(i))}var Cl=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rl=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[ni]:{transfer:Sr,primaries:br,toReference:i=>i,fromReference:i=>i},[We]:{transfer:le,primaries:br,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Yr]:{transfer:Sr,primaries:Er,toReference:i=>i.applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl)},[Ta]:{transfer:le,primaries:Er,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Rl),fromReference:i=>i.applyMatrix3(Cl).convertLinearToSRGB()}},Su=new Set([ni,Yr]),re={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Su.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Zs[t].toReference,s=Zs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Zs[i].primaries},getTransfer:function(i){return i===qn?Sr:Zs[i].transfer}};function ss(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,Tr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ni===void 0&&(Ni=Ar("canvas")),Ni.width=t.width,Ni.height=t.height;let n=Ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ss(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ss(e[n]/255)*255):e[n]=ss(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bu=0,Cr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Tr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Eu=0,tn=class i extends Qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=pn,s=pn,r=Ge,a=yi,o=mn,l=$n,c=i.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Kn(),this.name="",this.source=new Cr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vo:t.x=t.x-Math.floor(t.x);break;case pn:t.x=t.x<0?0:1;break;case Go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vo:t.y=t.y-Math.floor(t.y);break;case pn:t.y=t.y<0?0:1;break;case Go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=vc;tn.DEFAULT_ANISOTROPY=1;var Re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,C=(m+1)/2,I=(d+1)/2,R=(h+f)/4,T=(u+x)/4,X=(g+p)/4;return y>C&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=R/n,r=T/n):C>I?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=R/s,r=X/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=T/r,s=X/r),this.set(n,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(u-x)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends Qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Cr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Rr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Me,this.minFilter=Me,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==f||c!==m||h!==g){let p=1-o,d=l*f+c*m+h*g+u*x,E=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){let I=Math.sqrt(y),R=Math.atan2(I,d*E);p=Math.sin(p*R)/I,o=Math.sin(o*R)/I}let C=o*E;if(l=l*p+f*C,c=c*p+m*C,h=h*p+g*C,u=u*p+x*C,p===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-o*m,t[e+2]=c*g+h*m+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){let m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){let m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mo.copy(this).projectOnVector(t),this.sub(mo)}reflect(t){return this.sub(mo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new U,Fl=new ti,bi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(t.matrixWorld),this.union(Js)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),$s.subVectors(this.max,ws),Bi.subVectors(t.a,ws),Oi.subVectors(t.b,ws),zi.subVectors(t.c,ws),kn.subVectors(Oi,Bi),Hn.subVectors(zi,Oi),hi.subVectors(Bi,zi);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-hi.z,hi.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,hi.z,0,-hi.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-hi.y,hi.x,0];return!go(e,Bi,Oi,zi,$s)||(e=[1,0,0,0,1,0,0,0,1],!go(e,Bi,Oi,zi,$s))?!1:(Ks.crossVectors(kn,Hn),e=[Ks.x,Ks.y,Ks.z],go(e,Bi,Oi,zi,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},An=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,Js=new bi,Bi=new U,Oi=new U,zi=new U,kn=new U,Hn=new U,hi=new U,ws=new U,$s=new U,Ks=new U,ui=new U;function go(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ui.fromArray(i,r);let o=s.x*Math.abs(ui.x)+s.y*Math.abs(ui.y)+s.z*Math.abs(ui.z),l=t.dot(ui),c=e.dot(ui),h=n.dot(ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var wu=new bi,As=new U,_o=new U,Ds=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):wu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;As.subVectors(t,this.center);let e=As.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(As.copy(t.center).add(_o)),this.expandByPoint(As.copy(t.center).sub(_o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new U,xo=new U,js=new U,Vn=new U,yo=new U,Qs=new U,vo=new U,Fr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xo.copy(t).add(e).multiplyScalar(.5),js.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(js),o=Vn.dot(this.direction),l=-Vn.dot(js),c=Vn.lengthSq(),h=Math.abs(1-a*a),u,f,m,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xo).addScaledVector(js,f),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let n=Tn.dot(this.direction),s=Tn.dot(Tn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,n,s,r){yo.subVectors(e,t),Qs.subVectors(n,t),vo.crossVectors(yo,Qs);let a=this.direction.dot(vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Vn.subVectors(this.origin,t);let l=o*this.direction.dot(Qs.crossVectors(Vn,Qs));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Vn));if(c<0||l+c>a)return null;let h=-o*Vn.dot(vo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},me=class i{constructor(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,m,g,x,p){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ki.setFromMatrixColumn(t,0).length(),r=1/ki.setFromMatrixColumn(t,1).length(),a=1/ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f+x*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*u,g=c*h,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*u,g=o*h,x=o*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,x=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Au,t,Tu)}lookAt(t,e,n){let s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Gn.crossVectors(n,Ke),Gn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Gn.crossVectors(n,Ke)),Gn.normalize(),tr.crossVectors(Ke,Gn),s[0]=Gn.x,s[4]=tr.x,s[8]=Ke.x,s[1]=Gn.y,s[5]=tr.y,s[9]=Ke.y,s[2]=Gn.z,s[6]=tr.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],x=n[6],p=n[10],d=n[14],E=n[3],y=n[7],C=n[11],I=n[15],R=s[0],T=s[4],X=s[8],j=s[12],M=s[1],A=s[5],rt=s[9],it=s[13],D=s[2],$=s[6],Z=s[10],K=s[14],Y=s[3],H=s[7],nt=s[11],at=s[15];return r[0]=a*R+o*M+l*D+c*Y,r[4]=a*T+o*A+l*$+c*H,r[8]=a*X+o*rt+l*Z+c*nt,r[12]=a*j+o*it+l*K+c*at,r[1]=h*R+u*M+f*D+m*Y,r[5]=h*T+u*A+f*$+m*H,r[9]=h*X+u*rt+f*Z+m*nt,r[13]=h*j+u*it+f*K+m*at,r[2]=g*R+x*M+p*D+d*Y,r[6]=g*T+x*A+p*$+d*H,r[10]=g*X+x*rt+p*Z+d*nt,r[14]=g*j+x*it+p*K+d*at,r[3]=E*R+y*M+C*D+I*Y,r[7]=E*T+y*A+C*$+I*H,r[11]=E*X+y*rt+C*Z+I*nt,r[15]=E*j+y*it+C*K+I*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],x=t[7],p=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+x*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],x=t[13],p=t[14],d=t[15],E=u*p*c-x*f*c+x*l*m-o*p*m-u*l*d+o*f*d,y=g*f*c-h*p*c-g*l*m+a*p*m+h*l*d-a*f*d,C=h*x*c-g*u*c+g*o*m-a*x*m-h*o*d+a*u*d,I=g*u*l-h*x*l-g*o*f+a*x*f+h*o*p-a*u*p,R=e*E+n*y+s*C+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/R;return t[0]=E*T,t[1]=(x*f*r-u*p*r-x*s*m+n*p*m+u*s*d-n*f*d)*T,t[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*d+n*l*d)*T,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*T,t[4]=y*T,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*d+e*f*d)*T,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*d-e*l*d)*T,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*T,t[8]=C*T,t[9]=(g*u*r-h*x*r-g*n*m+e*x*m+h*n*d-e*u*d)*T,t[10]=(a*x*r-g*o*r+g*n*c-e*x*c-a*n*d+e*o*d)*T,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*T,t[12]=I*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*p+e*u*p)*T,t[14]=(g*o*s-a*x*s-g*n*l+e*x*l+a*n*p-e*o*p)*T,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,g=r*u,x=a*h,p=a*u,d=o*u,E=l*c,y=l*h,C=l*u,I=n.x,R=n.y,T=n.z;return s[0]=(1-(x+d))*I,s[1]=(m+C)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(m-C)*R,s[5]=(1-(f+d))*R,s[6]=(p+E)*R,s[7]=0,s[8]=(g+y)*T,s[9]=(p-E)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ki.set(s[0],s[1],s[2]).length(),a=ki.set(s[4],s[5],s[6]).length(),o=ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],un.copy(this);let c=1/r,h=1/a,u=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Dn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),m,g;if(o===Dn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===wr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Dn){let l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,m=(n+s)*h,g,x;if(o===Dn)g=(a+r)*u,x=-2*u;else if(o===wr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ki=new U,un=new me,Au=new U(0,0,0),Tu=new U(1,1,1),Gn=new U,tr=new U,Ke=new U,Pl=new me,Il=new ti,Mn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Il.setFromEuler(this),this.setFromQuaternion(Il,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Cu=0,Ll=new U,Hi=new ti,Cn=new me,er=new U,Ts=new U,Ru=new U,Fu=new ti,Dl=new U(1,0,0),Ul=new U(0,1,0),Nl=new U(0,0,1),Pu={type:"added"},Iu={type:"removed"},Mo={type:"childadded",child:null},So={type:"childremoved",child:null},Ne=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Mn,n=new ti,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new me},normalMatrix:{value:new Zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.multiply(Hi),this}rotateOnWorldAxis(t,e){return Hi.setFromAxisAngle(t,e),this.quaternion.premultiply(Hi),this}rotateX(t){return this.rotateOnAxis(Dl,t)}rotateY(t){return this.rotateOnAxis(Ul,t)}rotateZ(t){return this.rotateOnAxis(Nl,t)}translateOnAxis(t,e){return Ll.copy(t).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Dl,t)}translateY(t){return this.translateOnAxis(Ul,t)}translateZ(t){return this.translateOnAxis(Nl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ts,er,this.up):Cn.lookAt(er,Ts,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Hi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Pu),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Iu),So.child=t,this.dispatchEvent(So),So.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,t,Ru),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ts,Fu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ne.DEFAULT_UP=new U(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new U,Rn=new U,bo=new U,Fn=new U,Vi=new U,Gi=new U,Bl=new U,Eo=new U,wo=new U,Ao=new U,vi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),dn.subVectors(t,e),s.cross(dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){dn.subVectors(s,e),Rn.subVectors(n,e),bo.subVectors(t,e);let a=dn.dot(dn),o=dn.dot(Rn),l=dn.dot(bo),c=Rn.dot(Rn),h=Rn.dot(bo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static isFrontFacing(t,e,n,s){return dn.subVectors(n,e),Rn.subVectors(t,e),dn.cross(Rn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),dn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Eo.subVectors(t,n);let l=Vi.dot(Eo),c=Gi.dot(Eo);if(l<=0&&c<=0)return e.copy(n);wo.subVectors(t,s);let h=Vi.dot(wo),u=Gi.dot(wo);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Vi,a);Ao.subVectors(t,r);let m=Vi.dot(Ao),g=Gi.dot(Ao);if(g>=0&&m<=g)return e.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Gi,o);let p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return Bl.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Bl,o);let d=1/(p+x+f);return a=x*d,o=f*d,e.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function To(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=vu(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=To(a,r,t+1/3),this.g=To(a,r,t),this.b=To(a,r,t-1/3)}return re.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=Ic[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ss(t.r),this.g=ss(t.g),this.b=ss(t.b),this}copyLinearToSRGB(t){return this.r=fo(t.r),this.g=fo(t.g),this.b=fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return re.fromWorkingColorSpace(Ue.copy(this),t),Math.round(Xe(Ue.r*255,0,255))*65536+Math.round(Xe(Ue.g*255,0,255))*256+Math.round(Xe(Ue.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.fromWorkingColorSpace(Ue.copy(this),e);let n=Ue.r,s=Ue.g,r=Ue.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=re.workingColorSpace){return re.fromWorkingColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=We){re.fromWorkingColorSpace(Ue.copy(this),t);let e=Ue.r,n=Ue.g,s=Ue.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(nr);let n=ho(Wn.h,nr.h,e),s=ho(Wn.s,nr.s,e),r=ho(Wn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ue=new Jt;Jt.NAMES=Ic;var Lu=0,ei=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=is,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=zo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==is&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==zo&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Nn=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ve=new U,ir=new Dt,Ie=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wo&&(t.usage=this.usage),t}};var Pr=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ir=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Qe=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Du=0,an=new me,Co=new Ne,Wi=new U,je=new bi,Cs=new bi,Ce=new U,gn=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fc(t)?Ir:Pr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Qe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];je.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Cs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(je.min,Cs.min),je.expandByPoint(Ce),Ce.addVectors(je.max,Cs.max),je.expandByPoint(Ce)):(je.expandByPoint(Cs.min),je.expandByPoint(Cs.max))}je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ce.fromBufferAttribute(o,c),l&&(Wi.fromBufferAttribute(t,c),Ce.add(Wi)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let X=0;X<n.count;X++)o[X]=new U,l[X]=new U;let c=new U,h=new U,u=new U,f=new Dt,m=new Dt,g=new Dt,x=new U,p=new U;function d(X,j,M){c.fromBufferAttribute(n,X),h.fromBufferAttribute(n,j),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,X),m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),m.sub(f),g.sub(f);let A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),o[X].add(x),o[j].add(x),o[M].add(x),l[X].add(p),l[j].add(p),l[M].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let X=0,j=E.length;X<j;++X){let M=E[X],A=M.start,rt=M.count;for(let it=A,D=A+rt;it<D;it+=3)d(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let y=new U,C=new U,I=new U,R=new U;function T(X){I.fromBufferAttribute(s,X),R.copy(I);let j=o[X];y.copy(j),y.sub(I.multiplyScalar(I.dot(j))).normalize(),C.crossVectors(R,j);let A=C.dot(l[X])<0?-1:1;a.setXYZW(X,y.x,y.y,y.z,A)}for(let X=0,j=E.length;X<j;++X){let M=E[X],A=M.start,rt=M.count;for(let it=A,D=A+rt;it<D;it+=3)T(t.getX(it+0)),T(t.getX(it+1)),T(t.getX(it+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),x=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Ie(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ol=new me,di=new Fr,sr=new Ds,zl=new U,Xi=new U,qi=new U,Yi=new U,Ro=new U,rr=new U,or=new Dt,ar=new Dt,lr=new Dt,kl=new U,Hl=new U,Vl=new U,cr=new U,hr=new U,Fe=class extends Ne{constructor(t=new gn,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ro.fromBufferAttribute(u,t),a?rr.addScaledVector(Ro,h):rr.addScaledVector(Ro.sub(e),h))}e.add(rr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),di.copy(t.ray).recast(t.near),!(sr.containsPoint(di.origin)===!1&&(di.intersectSphere(sr,zl)===null||di.origin.distanceToSquared(zl)>(t.far-t.near)**2))&&(Ol.copy(r).invert(),di.copy(t.ray).applyMatrix4(Ol),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let C=E,I=y;C<I;C+=3){let R=o.getX(C),T=o.getX(C+1),X=o.getX(C+2);s=ur(this,d,t,n,c,h,u,R,T,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=o.getX(p),y=o.getX(p+1),C=o.getX(p+2);s=ur(this,a,t,n,c,h,u,E,y,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){let p=f[g],d=a[p.materialIndex],E=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let C=E,I=y;C<I;C+=3){let R=C,T=C+1,X=C+2;s=ur(this,d,t,n,c,h,u,R,T,X),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=g,d=x;p<d;p+=3){let E=p,y=p+1,C=p+2;s=ur(this,a,t,n,c,h,u,E,y,C),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Uu(i,t,e,n,s,r,a,o){let l;if(t.side===qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hr);return c<e.near||c>e.far?null:{distance:c,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Xi),i.getVertexPosition(l,qi),i.getVertexPosition(c,Yi);let h=Uu(i,t,e,n,Xi,qi,Yi,cr);if(h){s&&(or.fromBufferAttribute(s,o),ar.fromBufferAttribute(s,l),lr.fromBufferAttribute(s,c),h.uv=vi.getInterpolation(cr,Xi,qi,Yi,or,ar,lr,new Dt)),r&&(or.fromBufferAttribute(r,o),ar.fromBufferAttribute(r,l),lr.fromBufferAttribute(r,c),h.uv1=vi.getInterpolation(cr,Xi,qi,Yi,or,ar,lr,new Dt)),a&&(kl.fromBufferAttribute(a,o),Hl.fromBufferAttribute(a,l),Vl.fromBufferAttribute(a,c),h.normal=vi.getInterpolation(cr,Xi,qi,Yi,kl,Hl,Vl,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};vi.getNormal(Xi,qi,Yi,u.normal),h.face=u}return h}var Ei=class i extends gn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(u,2));function g(x,p,d,E,y,C,I,R,T,X,j){let M=C/T,A=I/X,rt=C/2,it=I/2,D=R/2,$=T+1,Z=X+1,K=0,Y=0,H=new U;for(let nt=0;nt<Z;nt++){let at=nt*A-it;for(let gt=0;gt<$;gt++){let Ut=gt*M-rt;H[x]=Ut*E,H[p]=at*y,H[d]=D,c.push(H.x,H.y,H.z),H[x]=0,H[p]=0,H[d]=R>0?1:-1,h.push(H.x,H.y,H.z),u.push(gt/T),u.push(1-nt/X),K+=1}}for(let nt=0;nt<X;nt++)for(let at=0;at<T;at++){let gt=f+at+$*nt,Ut=f+at+$*(nt+1),q=f+(at+1)+$*(nt+1),et=f+(at+1)+$*nt;l.push(gt,Ut,et),l.push(Ut,q,et),Y+=6}o.addGroup(m,Y,j),m+=Y,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){let t={};for(let e=0;e<i.length;e++){let n=cs(i[e]);for(let s in n)t[s]=n[s]}return t}function Nu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lc(i){return i.getRenderTarget()===null?i.outputColorSpace:re.workingColorSpace}var Bu={clone:cs,merge:He},Ou=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Sn=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ou,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=cs(t.uniforms),this.uniformsGroups=Nu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lr=class extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Xn=new U,Gl=new Dt,Wl=new Dt,Ve=class extends Lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qo*2*Math.atan(Math.tan(co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Gl,Wl),e.subVectors(Wl,Gl)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(co*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ji=1,$o=class extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ve(Zi,Ji,t,e);s.layers=this.layers,this.add(s);let r=new Ve(Zi,Ji,t,e);r.layers=this.layers,this.add(r);let a=new Ve(Zi,Ji,t,e);a.layers=this.layers,this.add(a);let o=new Ve(Zi,Ji,t,e);o.layers=this.layers,this.add(o);let l=new Ve(Zi,Ji,t,e);l.layers=this.layers,this.add(l);let c=new Ve(Zi,Ji,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dr=class extends tn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ko=class extends Un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Dr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ge}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ei(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Zn});r.uniforms.tEquirect.value=e;let a=new Fe(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=Ge),new $o(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Fo=new U,ku=new U,Hu=new Zt,fn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Fo.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Fo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Hu.getNormalMatrix(t),s=this.coplanarPoint(Fo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},fi=new Ds,dr=new U,Ns=class{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],g=s[9],x=s[10],p=s[11],d=s[12],E=s[13],y=s[14],C=s[15];if(n[0].setComponents(l-r,f-c,p-m,C-d).normalize(),n[1].setComponents(l+r,f+c,p+m,C+d).normalize(),n[2].setComponents(l+a,f+h,p+g,C+E).normalize(),n[3].setComponents(l-a,f-h,p-g,C-E).normalize(),n[4].setComponents(l-o,f-u,p-x,C-y).normalize(),e===Dn)n[5].setComponents(l+o,f+u,p+x,C+y).normalize();else if(e===wr)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){return fi.center.set(0,0,0),fi.radius=.7071067811865476,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(dr.x=s.normal.x>0?t.max.x:t.min.x,dr.y=s.normal.y>0?t.max.y:t.min.y,dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(dr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Dc(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vu(i,t){let e=t.isWebGL2,n=new WeakMap;function s(c,h){let u=c.array,f=c.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),c.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){let f=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,c),m.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,p=g.length;x<p;x++){let d=g[x];e?i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):i.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):i.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);if(u===void 0)n.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var hs=class i extends gn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let E=d*f-a;for(let y=0;y<c;y++){let C=y*u-r;g.push(C,-E,0),x.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<o;E++){let y=E+c*d,C=E+c*(d+1),I=E+1+c*(d+1),R=E+1+c*d;m.push(y,C,R),m.push(C,I,R)}this.setIndex(m),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(x,3)),this.setAttribute("uv",new Qe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ju=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ku=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ju=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,id=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ud=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_d=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yd="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Xd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ef=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,of=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,af=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ff=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_f=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,vf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,If=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Df=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Uf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Of=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Kf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,jf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ip=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Sp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:Gu,alphahash_pars_fragment:Wu,alphamap_fragment:Xu,alphamap_pars_fragment:qu,alphatest_fragment:Yu,alphatest_pars_fragment:Zu,aomap_fragment:Ju,aomap_pars_fragment:$u,batching_pars_vertex:Ku,batching_vertex:ju,begin_vertex:Qu,beginnormal_vertex:td,bsdfs:ed,iridescence_fragment:nd,bumpmap_pars_fragment:id,clipping_planes_fragment:sd,clipping_planes_pars_fragment:rd,clipping_planes_pars_vertex:od,clipping_planes_vertex:ad,color_fragment:ld,color_pars_fragment:cd,color_pars_vertex:hd,color_vertex:ud,common:dd,cube_uv_reflection_fragment:fd,defaultnormal_vertex:pd,displacementmap_pars_vertex:md,displacementmap_vertex:gd,emissivemap_fragment:_d,emissivemap_pars_fragment:xd,colorspace_fragment:yd,colorspace_pars_fragment:vd,envmap_fragment:Md,envmap_common_pars_fragment:Sd,envmap_pars_fragment:bd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Nd,envmap_vertex:wd,fog_vertex:Ad,fog_pars_vertex:Td,fog_fragment:Cd,fog_pars_fragment:Rd,gradientmap_pars_fragment:Fd,lightmap_fragment:Pd,lightmap_pars_fragment:Id,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Bd,lights_toon_pars_fragment:Od,lights_phong_fragment:zd,lights_phong_pars_fragment:kd,lights_physical_fragment:Hd,lights_physical_pars_fragment:Vd,lights_fragment_begin:Gd,lights_fragment_maps:Wd,lights_fragment_end:Xd,logdepthbuf_fragment:qd,logdepthbuf_pars_fragment:Yd,logdepthbuf_pars_vertex:Zd,logdepthbuf_vertex:Jd,map_fragment:$d,map_pars_fragment:Kd,map_particle_fragment:jd,map_particle_pars_fragment:Qd,metalnessmap_fragment:tf,metalnessmap_pars_fragment:ef,morphinstance_vertex:nf,morphcolor_vertex:sf,morphnormal_vertex:rf,morphtarget_pars_vertex:of,morphtarget_vertex:af,normal_fragment_begin:lf,normal_fragment_maps:cf,normal_pars_fragment:hf,normal_pars_vertex:uf,normal_vertex:df,normalmap_pars_fragment:ff,clearcoat_normal_fragment_begin:pf,clearcoat_normal_fragment_maps:mf,clearcoat_pars_fragment:gf,iridescence_pars_fragment:_f,opaque_fragment:xf,packing:yf,premultiplied_alpha_fragment:vf,project_vertex:Mf,dithering_fragment:Sf,dithering_pars_fragment:bf,roughnessmap_fragment:Ef,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Tf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Rf,skinbase_vertex:Ff,skinning_pars_vertex:Pf,skinning_vertex:If,skinnormal_vertex:Lf,specularmap_fragment:Df,specularmap_pars_fragment:Uf,tonemapping_fragment:Nf,tonemapping_pars_fragment:Bf,transmission_fragment:Of,transmission_pars_fragment:zf,uv_pars_fragment:kf,uv_pars_vertex:Hf,uv_vertex:Vf,worldpos_vertex:Gf,background_vert:Wf,background_frag:Xf,backgroundCube_vert:qf,backgroundCube_frag:Yf,cube_vert:Zf,cube_frag:Jf,depth_vert:$f,depth_frag:Kf,distanceRGBA_vert:jf,distanceRGBA_frag:Qf,equirect_vert:tp,equirect_frag:ep,linedashed_vert:np,linedashed_frag:ip,meshbasic_vert:sp,meshbasic_frag:rp,meshlambert_vert:op,meshlambert_frag:ap,meshmatcap_vert:lp,meshmatcap_frag:cp,meshnormal_vert:hp,meshnormal_frag:up,meshphong_vert:dp,meshphong_frag:fp,meshphysical_vert:pp,meshphysical_frag:mp,meshtoon_vert:gp,meshtoon_frag:_p,points_vert:xp,points_frag:yp,shadow_vert:vp,shadow_frag:Mp,sprite_vert:Sp,sprite_frag:bp},ct={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},yn={basic:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:He([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:He([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:He([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:He([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:He([ct.points,ct.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:He([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:He([ct.common,ct.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:He([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:He([ct.sprite,ct.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:He([ct.common,ct.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:He([ct.lights,ct.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};yn.physical={uniforms:He([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var fr={r:0,b:0,g:0},pi=new Mn,Ep=new me;function wp(i,t,e,n,s,r,a){let o=new Jt(0),l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let E=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),E=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===qr)?(h===void 0&&(h=new Fe(new Ei(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:cs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),pi.copy(d.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(pi)),h.material.toneMapped=re.getTransfer(y.colorSpace)!==le,(u!==y||f!==y.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,m=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new hs(2,2),new Sn({name:"BackgroundMaterial",uniforms:cs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==le,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,m=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,d){p.getRGB(fr,Lc(i)),n.buffers.color.setClear(fr.r,fr.g,fr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(p,d=1){o.set(p),l=d,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(o,l)},render:g}}function Ap(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function u(D,$,Z,K,Y){let H=!1;if(a){let nt=x(K,Z,$);c!==nt&&(c=nt,m(c.object)),H=d(D,K,Z,Y),H&&E(D,K,Z,Y)}else{let nt=$.wireframe===!0;(c.geometry!==K.id||c.program!==Z.id||c.wireframe!==nt)&&(c.geometry=K.id,c.program=Z.id,c.wireframe=nt,H=!0)}Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(H||h)&&(h=!1,X(D,$,Z,K),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function x(D,$,Z){let K=Z.wireframe===!0,Y=o[D.id];Y===void 0&&(Y={},o[D.id]=Y);let H=Y[$.id];H===void 0&&(H={},Y[$.id]=H);let nt=H[K];return nt===void 0&&(nt=p(f()),H[K]=nt),nt}function p(D){let $=[],Z=[],K=[];for(let Y=0;Y<s;Y++)$[Y]=0,Z[Y]=0,K[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Z,attributeDivisors:K,object:D,attributes:{},index:null}}function d(D,$,Z,K){let Y=c.attributes,H=$.attributes,nt=0,at=Z.getAttributes();for(let gt in at)if(at[gt].location>=0){let q=Y[gt],et=H[gt];if(et===void 0&&(gt==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),gt==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),q===void 0||q.attribute!==et||et&&q.data!==et.data)return!0;nt++}return c.attributesNum!==nt||c.index!==K}function E(D,$,Z,K){let Y={},H=$.attributes,nt=0,at=Z.getAttributes();for(let gt in at)if(at[gt].location>=0){let q=H[gt];q===void 0&&(gt==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),gt==="instanceColor"&&D.instanceColor&&(q=D.instanceColor));let et={};et.attribute=q,q&&q.data&&(et.data=q.data),Y[gt]=et,nt++}c.attributes=Y,c.attributesNum=nt,c.index=K}function y(){let D=c.newAttributes;for(let $=0,Z=D.length;$<Z;$++)D[$]=0}function C(D){I(D,0)}function I(D,$){let Z=c.newAttributes,K=c.enabledAttributes,Y=c.attributeDivisors;Z[D]=1,K[D]===0&&(i.enableVertexAttribArray(D),K[D]=1),Y[D]!==$&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,$),Y[D]=$)}function R(){let D=c.newAttributes,$=c.enabledAttributes;for(let Z=0,K=$.length;Z<K;Z++)$[Z]!==D[Z]&&(i.disableVertexAttribArray(Z),$[Z]=0)}function T(D,$,Z,K,Y,H,nt){nt===!0?i.vertexAttribIPointer(D,$,Z,Y,H):i.vertexAttribPointer(D,$,Z,K,Y,H)}function X(D,$,Z,K){if(n.isWebGL2===!1&&(D.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();let Y=K.attributes,H=Z.getAttributes(),nt=$.defaultAttributeValues;for(let at in H){let gt=H[at];if(gt.location>=0){let Ut=Y[at];if(Ut===void 0&&(at==="instanceMatrix"&&D.instanceMatrix&&(Ut=D.instanceMatrix),at==="instanceColor"&&D.instanceColor&&(Ut=D.instanceColor)),Ut!==void 0){let q=Ut.normalized,et=Ut.itemSize,pt=e.get(Ut);if(pt===void 0)continue;let Ft=pt.buffer,Et=pt.type,xt=pt.bytesPerElement,ee=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||Ut.gpuType===Mc);if(Ut.isInterleavedBufferAttribute){let Pt=Ut.data,B=Pt.stride,ye=Ut.offset;if(Pt.isInstancedInterleavedBuffer){for(let _t=0;_t<gt.locationSize;_t++)I(gt.location+_t,Pt.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let _t=0;_t<gt.locationSize;_t++)C(gt.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let _t=0;_t<gt.locationSize;_t++)T(gt.location+_t,et/gt.locationSize,Et,q,B*xt,(ye+et/gt.locationSize*_t)*xt,ee)}else{if(Ut.isInstancedBufferAttribute){for(let Pt=0;Pt<gt.locationSize;Pt++)I(gt.location+Pt,Ut.meshPerAttribute);D.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ut.meshPerAttribute*Ut.count)}else for(let Pt=0;Pt<gt.locationSize;Pt++)C(gt.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let Pt=0;Pt<gt.locationSize;Pt++)T(gt.location+Pt,et/gt.locationSize,Et,q,et*xt,et/gt.locationSize*Pt*xt,ee)}}else if(nt!==void 0){let q=nt[at];if(q!==void 0)switch(q.length){case 2:i.vertexAttrib2fv(gt.location,q);break;case 3:i.vertexAttrib3fv(gt.location,q);break;case 4:i.vertexAttrib4fv(gt.location,q);break;default:i.vertexAttrib1fv(gt.location,q)}}}}R()}function j(){rt();for(let D in o){let $=o[D];for(let Z in $){let K=$[Z];for(let Y in K)g(K[Y].object),delete K[Y];delete $[Z]}delete o[D]}}function M(D){if(o[D.id]===void 0)return;let $=o[D.id];for(let Z in $){let K=$[Z];for(let Y in K)g(K[Y].object),delete K[Y];delete $[Z]}delete o[D.id]}function A(D){for(let $ in o){let Z=o[$];if(Z[D.id]===void 0)continue;let K=Z[D.id];for(let Y in K)g(K[Y].object),delete K[Y];delete Z[D.id]}}function rt(){it(),h=!0,c!==l&&(c=l,m(c.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:rt,resetDefaultState:it,dispose:j,releaseStatesOfGeometry:M,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:C,disableUnusedAttributes:R}}function Tp(i,t,e,n){let s=n.isWebGL2,r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Cp(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&i.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=f>0,C=a||t.has("OES_texture_float"),I=y&&C,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:E,vertexTextures:y,floatFragmentTextures:C,floatVertexTextures:I,maxSamples:R}}function Rp(i){let t=this,e=null,n=0,s=!1,r=!1,a=new fn,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:n,y=E*4,C=d.clippingState||null;l.value=C,C=h(g,f,y,m);for(let I=0;I!==y;++I)C[I]=e[I];d.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let d=m+x*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,C=m;y!==x;++y,C+=4)a.copy(u[y]).applyMatrix4(E,o),a.normal.toArray(p,C),p[C+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}function Fp(i){let t=new WeakMap;function e(a,o){return o===ko?a.mapping=os:o===Ho&&(a.mapping=as),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ko||o===Ho)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ko(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ur=class extends Lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},es=4,Xl=[.125,.215,.35,.446,.526,.582],xi=20,Po=new Ur,ql=new Jt,Io=null,Lo=0,Do=0,gi=(1+Math.sqrt(5))/2,$i=1/gi,Yl=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,gi,$i),new U(0,gi,-$i),new U($i,0,gi),new U(-$i,0,gi),new U(gi,$i,0),new U(-gi,$i,0)],Nr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Io,Lo,Do),t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),Do=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Ls,format:mn,colorSpace:ni,depthBuffer:!1},s=Zl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Ip(r,t,e)}return s}_compileMaterial(t){let e=new Fe(this._lodPlanes[0],t);this._renderer.compile(e,Po)}_sceneToCubeUV(t,e,n,s){let o=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ql),h.toneMapping=Jn,h.autoClear=!1;let m=new Nn({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new Fe(new Ei,m),x=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,x=!0):(m.color.copy(ql),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):E===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let y=this._cubeSize;pr(s,E*y,d>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===os||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Fe(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;pr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Po)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Yl[(s-1)%Yl.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Fe(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):xi;p>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);let d=[],E=0;for(let T=0;T<xi;++T){let X=T/x,j=Math.exp(-X*X/2);d.push(j),T===0?E+=j:T<p&&(E+=2*j)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let C=this._sizeLods[s],I=3*C*(s>y-es?s-y+es:0),R=4*(this._cubeSize-C);pr(e,I,R,3*C,2*C),l.setRenderTarget(e),l.render(u,Po)}};function Pp(i){let t=[],e=[],n=[],s=i,r=i-es+1+Xl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-es?l=Xl[a-i+es-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,x=3,p=2,d=1,E=new Float32Array(x*g*m),y=new Float32Array(p*g*m),C=new Float32Array(d*g*m);for(let R=0;R<m;R++){let T=R%3*2/3-1,X=R>2?0:-1,j=[T,X,0,T+2/3,X,0,T+2/3,X+1,0,T,X,0,T+2/3,X+1,0,T,X+1,0];E.set(j,x*g*R),y.set(f,p*g*R);let M=[R,R,R,R,R,R];C.set(M,d*g*R)}let I=new gn;I.setAttribute("position",new Ie(E,x)),I.setAttribute("uv",new Ie(y,p)),I.setAttribute("faceIndex",new Ie(C,d)),t.push(I),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zl(i,t,e){let n=new Un(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ip(i,t,e){let n=new Float32Array(xi),s=new U(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Jl(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function $l(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ko||l===Ho,h=l===os||l===as;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Nr(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Nr(i));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Dp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Up(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)t.remove(x[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let m=u.morphAttributes;for(let g in m){let x=m[g];for(let p=0,d=x.length;p<d;p++)t.update(x[p],i.ARRAY_BUFFER)}}function c(u){let f=[],m=u.index,g=u.attributes.position,x=0;if(m!==null){let E=m.array;x=m.version;for(let y=0,C=E.length;y<C;y+=3){let I=E[y+0],R=E[y+1],T=E[y+2];f.push(I,R,R,T,T,I)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,C=E.length/3-1;y<C;y+=3){let I=y+0,R=y+1,T=y+2;f.push(I,R,R,T,T,I)}}else return;let p=new(Fc(f)?Ir:Pr)(f,1);p.version=x;let d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){let f=r.get(u);if(f){let m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Np(i,t,e,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*l),e.update(g,r,1)}function u(m,g,x){if(x===0)return;let p,d;if(s)p=i,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,o,m*l,x),e.update(g,r,x)}function f(m,g,x){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<x;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,x);let d=0;for(let E=0;E<x;E++)d+=g[E];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Bp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Op(i,t){return i[0]-t[0]}function zp(i,t){return Math.abs(t[1])-Math.abs(i[1])}function kp(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,a=new Re,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,x=r.get(h);if(x===void 0||x.count!==g){let rt=function(){M.dispose(),r.delete(h),h.removeEventListener("dispose",rt)};x!==void 0&&x.texture.dispose();let p=h.morphAttributes.position!==void 0,d=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],R=0;p===!0&&(R=1),d===!0&&(R=2),E===!0&&(R=3);let T=h.attributes.position.count*R,X=1;T>t.maxTextureSize&&(X=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let j=new Float32Array(T*X*4*g),M=new Rr(j,T,X,g);M.type=Ln,M.needsUpdate=!0;let A=R*4;for(let it=0;it<g;it++){let D=y[it],$=C[it],Z=I[it],K=T*X*4*it;for(let Y=0;Y<D.count;Y++){let H=Y*A;p===!0&&(a.fromBufferAttribute(D,Y),j[K+H+0]=a.x,j[K+H+1]=a.y,j[K+H+2]=a.z,j[K+H+3]=0),d===!0&&(a.fromBufferAttribute($,Y),j[K+H+4]=a.x,j[K+H+5]=a.y,j[K+H+6]=a.z,j[K+H+7]=0),E===!0&&(a.fromBufferAttribute(Z,Y),j[K+H+8]=a.x,j[K+H+9]=a.y,j[K+H+10]=a.z,j[K+H+11]=Z.itemSize===4?a.w:1)}}x={count:g,texture:M,size:new Dt(T,X)},r.set(h,x),h.addEventListener("dispose",rt)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let p=0;for(let E=0;E<f.length;E++)p+=f[E];let d=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",d),u.getUniforms().setValue(i,"morphTargetInfluences",f)}u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let m=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==m){g=[];for(let y=0;y<m;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<m;y++){let C=g[y];C[0]=y,C[1]=f[y]}g.sort(zp);for(let y=0;y<8;y++)y<m&&g[y][1]?(o[y][0]=g[y][0],o[y][1]=g[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Op);let x=h.morphAttributes.position,p=h.morphAttributes.normal,d=0;for(let y=0;y<8;y++){let C=o[y],I=C[0],R=C[1];I!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+y)!==x[I]&&h.setAttribute("morphTarget"+y,x[I]),p&&h.getAttribute("morphNormal"+y)!==p[I]&&h.setAttribute("morphNormal"+y,p[I]),s[y]=R,d+=R):(x&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}let E=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(i,"morphTargetBaseInfluence",E),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Hp(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Br=class extends tn{constructor(t,e,n,s,r,a,o,l,c,h){if(h=h!==void 0?h:Si,h!==Si&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Si&&(n=Yn),n===void 0&&h===ls&&(n=Mi),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Me,this.minFilter=l!==void 0?l:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Uc=new tn,Nc=new Br(1,1);Nc.compareFunction=Rc;var Bc=new Rr,Oc=new Jo,zc=new Dr,Kl=[],jl=[],Ql=new Float32Array(16),tc=new Float32Array(9),ec=new Float32Array(4);function ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kl[s];if(r===void 0&&(r=new Float32Array(s),Kl[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function be(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=jl[t];e===void 0&&(e=new Int32Array(t),jl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function Wp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Xp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function qp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;ec.set(n),i.uniformMatrix2fv(this.addr,!1,ec),Ee(e,n)}}function Yp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),Ee(e,n)}}function Zp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(be(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,n))return;Ql.set(n),i.uniformMatrix4fv(this.addr,!1,Ql),Ee(e,n)}}function Jp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function $p(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function jp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Qp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function em(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function im(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Nc:Uc;e.setTexture2D(t||r,s)}function sm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Oc,s)}function rm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||zc,s)}function om(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Bc,s)}function am(i){switch(i){case 5126:return Vp;case 35664:return Gp;case 35665:return Wp;case 35666:return Xp;case 35674:return qp;case 35675:return Yp;case 35676:return Zp;case 5124:case 35670:return Jp;case 35667:case 35671:return $p;case 35668:case 35672:return Kp;case 35669:case 35673:return jp;case 5125:return Qp;case 36294:return tm;case 36295:return em;case 36296:return nm;case 35678:case 36198:case 36298:case 36306:case 35682:return im;case 35679:case 36299:case 36307:return sm;case 35680:case 36300:case 36308:case 36293:return rm;case 36289:case 36303:case 36311:case 36292:return om}}function lm(i,t){i.uniform1fv(this.addr,t)}function cm(i,t){let e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function hm(i,t){let e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function um(i,t){let e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function dm(i,t){let e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fm(i,t){let e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pm(i,t){let e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mm(i,t){i.uniform1iv(this.addr,t)}function gm(i,t){i.uniform2iv(this.addr,t)}function _m(i,t){i.uniform3iv(this.addr,t)}function xm(i,t){i.uniform4iv(this.addr,t)}function ym(i,t){i.uniform1uiv(this.addr,t)}function vm(i,t){i.uniform2uiv(this.addr,t)}function Mm(i,t){i.uniform3uiv(this.addr,t)}function Sm(i,t){i.uniform4uiv(this.addr,t)}function bm(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uc,r[a])}function Em(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Oc,r[a])}function wm(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||zc,r[a])}function Am(i,t,e){let n=this.cache,s=t.length,r=Zr(e,s);be(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Bc,r[a])}function Tm(i){switch(i){case 5126:return lm;case 35664:return cm;case 35665:return hm;case 35666:return um;case 35674:return dm;case 35675:return fm;case 35676:return pm;case 5124:case 35670:return mm;case 35667:case 35671:return gm;case 35668:case 35672:return _m;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return vm;case 36295:return Mm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return Em;case 35680:case 36300:case 36308:case 36293:return wm;case 36289:case 36303:case 36311:case 36292:return Am}}var jo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=am(e.type)}},Qo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tm(e.type)}},ta=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Uo=/(\w+)(\])?(\[|\.)?/g;function nc(i,t){i.seq.push(t),i.map[t.id]=t}function Cm(i,t,e){let n=i.name,s=n.length;for(Uo.lastIndex=0;;){let r=Uo.exec(n),a=Uo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){nc(e,c===void 0?new jo(o,i,t):new Qo(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new ta(o),nc(e,u)),e=u}}}var rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Cm(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ic(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rm=37297,Fm=0;function Pm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Im(i){let t=re.getPrimaries(re.workingColorSpace),e=re.getPrimaries(i),n;switch(t===e?n="":t===Er&&e===br?n="LinearDisplayP3ToLinearSRGB":t===br&&e===Er&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case Yr:return[n,"LinearTransferOETF"];case We:case Ta:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function sc(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pm(i.getShaderSource(t),a)}else return s}function Lm(i,t){let e=Im(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dm(i,t){let e;switch(t){case Jh:e="Linear";break;case $h:e="Reinhard";break;case Kh:e="OptimizedCineon";break;case jh:e="ACESFilmic";break;case tu:e="AgX";break;case eu:e="Neutral";break;case Qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Um(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function Nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Bm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ns(i){return i!==""}function rc(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function oc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ea(i){return i.replace(zm,Hm)}var km=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Hm(i,t){let e=Yt[t];if(e===void 0){let n=km.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ea(e)}var Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(i){return i.replace(Vm,Gm)}function Gm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Wm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ea?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function Xm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function qm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function Ym(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wa:t="ENVMAP_BLENDING_MULTIPLY";break;case Yh:t="ENVMAP_BLENDING_MIX";break;case Zh:t="ENVMAP_BLENDING_ADD";break}return t}function Zm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Jm(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Wm(e),c=Xm(e),h=qm(e),u=Ym(e),f=Zm(e),m=e.isWebGL2?"":Um(e),g=Nm(e),x=Bm(r),p=s.createProgram(),d,E,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),d.length>0&&(d+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(ns).join(`
`),E.length>0&&(E+=`
`)):(d=[lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),E=[m,lc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),a=ea(a),a=rc(a,e),a=oc(a,e),o=ea(o),o=rc(o,e),o=oc(o,e),a=ac(a),o=ac(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let C=y+d+a,I=y+E+o,R=ic(s,s.VERTEX_SHADER,C),T=ic(s,s.FRAGMENT_SHADER,I);s.attachShader(p,R),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(rt){if(i.debug.checkShaderErrors){let it=s.getProgramInfoLog(p).trim(),D=s.getShaderInfoLog(R).trim(),$=s.getShaderInfoLog(T).trim(),Z=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,R,T);else{let Y=sc(s,R,"vertex"),H=sc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+rt.name+`
Material Type: `+rt.type+`

Program Info Log: `+it+`
`+Y+`
`+H)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(D===""||$==="")&&(K=!1);K&&(rt.diagnostics={runnable:Z,programLog:it,vertexShader:{log:D,prefix:d},fragmentShader:{log:$,prefix:E}})}s.deleteShader(R),s.deleteShader(T),j=new rs(s,p),M=Om(s,p)}let j;this.getUniforms=function(){return j===void 0&&X(this),j};let M;this.getAttributes=function(){return M===void 0&&X(this),M};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(p,Rm)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=T,this}var $m=0,na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ia(t),e.set(t,n)),n}},ia=class{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}};function Km(i,t,e,n,s,r,a){let o=new Us,l=new na,c=new Set,h=[],u=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){return c.add(M),M===0?"uv":`uv${M}`}function d(M,A,rt,it,D){let $=it.fog,Z=D.geometry,K=M.isMeshStandardMaterial?it.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||K),H=Y&&Y.mapping===qr?Y.image.height:null,nt=x[M.type];M.precision!==null&&(g=s.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));let at=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=at!==void 0?at.length:0,Ut=0;Z.morphAttributes.position!==void 0&&(Ut=1),Z.morphAttributes.normal!==void 0&&(Ut=2),Z.morphAttributes.color!==void 0&&(Ut=3);let q,et,pt,Ft;if(nt){let w=yn[nt];q=w.vertexShader,et=w.fragmentShader}else q=M.vertexShader,et=M.fragmentShader,l.update(M),pt=l.getVertexShaderID(M),Ft=l.getFragmentShaderID(M);let Et=i.getRenderTarget(),xt=D.isInstancedMesh===!0,ee=D.isBatchedMesh===!0,Pt=!!M.map,B=!!M.matcap,ye=!!Y,_t=!!M.aoMap,Xt=!!M.lightMap,wt=!!M.bumpMap,Kt=!!M.normalMap,Lt=!!M.displacementMap,Nt=!!M.emissiveMap,de=!!M.metalnessMap,b=!!M.roughnessMap,_=M.anisotropy>0,O=M.clearcoat>0,J=M.iridescence>0,st=M.sheen>0,tt=M.transmission>0,Bt=_&&!!M.anisotropyMap,Tt=O&&!!M.clearcoatMap,lt=O&&!!M.clearcoatNormalMap,ut=O&&!!M.clearcoatRoughnessMap,Ot=J&&!!M.iridescenceMap,ot=J&&!!M.iridescenceThicknessMap,pe=st&&!!M.sheenColorMap,zt=st&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,yt=!!M.specularColorMap,vt=!!M.specularIntensityMap,Qt=tt&&!!M.transmissionMap,kt=tt&&!!M.thicknessMap,ie=!!M.gradientMap,L=!!M.alphaMap,ht=M.alphaTest>0,V=!!M.alphaHash,v=!!M.extensions,F=Jn;M.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(F=i.toneMapping);let P={isWebGL2:u,shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:et,defines:M.defines,customVertexShaderID:pt,customFragmentShaderID:Ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,batching:ee,instancing:xt,instancingColor:xt&&D.instanceColor!==null,instancingMorph:xt&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Et===null?i.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ni,alphaToCoverage:!!M.alphaToCoverage,map:Pt,matcap:B,envMap:ye,envMapMode:ye&&Y.mapping,envMapCubeUVHeight:H,aoMap:_t,lightMap:Xt,bumpMap:wt,normalMap:Kt,displacementMap:m&&Lt,emissiveMap:Nt,normalMapObjectSpace:Kt&&M.normalMapType===du,normalMapTangentSpace:Kt&&M.normalMapType===Cc,metalnessMap:de,roughnessMap:b,anisotropy:_,anisotropyMap:Bt,clearcoat:O,clearcoatMap:Tt,clearcoatNormalMap:lt,clearcoatRoughnessMap:ut,iridescence:J,iridescenceMap:Ot,iridescenceThicknessMap:ot,sheen:st,sheenColorMap:pe,sheenRoughnessMap:zt,specularMap:Mt,specularColorMap:yt,specularIntensityMap:vt,transmission:tt,transmissionMap:Qt,thicknessMap:kt,gradientMap:ie,opaque:M.transparent===!1&&M.blending===is&&M.alphaToCoverage===!1,alphaMap:L,alphaTest:ht,alphaHash:V,combine:M.combine,mapUv:Pt&&p(M.map.channel),aoMapUv:_t&&p(M.aoMap.channel),lightMapUv:Xt&&p(M.lightMap.channel),bumpMapUv:wt&&p(M.bumpMap.channel),normalMapUv:Kt&&p(M.normalMap.channel),displacementMapUv:Lt&&p(M.displacementMap.channel),emissiveMapUv:Nt&&p(M.emissiveMap.channel),metalnessMapUv:de&&p(M.metalnessMap.channel),roughnessMapUv:b&&p(M.roughnessMap.channel),anisotropyMapUv:Bt&&p(M.anisotropyMap.channel),clearcoatMapUv:Tt&&p(M.clearcoatMap.channel),clearcoatNormalMapUv:lt&&p(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&p(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&p(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&p(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&p(M.sheenRoughnessMap.channel),specularMapUv:Mt&&p(M.specularMap.channel),specularColorMapUv:yt&&p(M.specularColorMap.channel),specularIntensityMapUv:vt&&p(M.specularIntensityMap.channel),transmissionMapUv:Qt&&p(M.transmissionMap.channel),thicknessMapUv:kt&&p(M.thicknessMap.channel),alphaMapUv:L&&p(M.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Kt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!Z.attributes.uv&&(Pt||L),fog:!!$,useFog:M.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Ut,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&rt.length>0,shadowMapType:i.shadowMap.type,toneMapping:F,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&M.map.isVideoTexture===!0&&re.getTransfer(M.map.colorSpace)===le,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===In,flipSided:M.side===qe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:v&&M.extensions.derivatives===!0,extensionFragDepth:v&&M.extensions.fragDepth===!0,extensionDrawBuffers:v&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:v&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:v&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:v&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return P.vertexUv1s=c.has(1),P.vertexUv2s=c.has(2),P.vertexUv3s=c.has(3),c.clear(),P}function E(M){let A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(let rt in M.defines)A.push(rt),A.push(M.defines[rt]);return M.isRawShaderMaterial===!1&&(y(A,M),C(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function y(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function C(M,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),M.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),M.push(o.mask)}function I(M){let A=x[M.type],rt;if(A){let it=yn[A];rt=Bu.clone(it.uniforms)}else rt=M.uniforms;return rt}function R(M,A){let rt;for(let it=0,D=h.length;it<D;it++){let $=h[it];if($.cacheKey===A){rt=$,++rt.usedTimes;break}}return rt===void 0&&(rt=new Jm(i,A,M,r),h.push(rt)),rt}function T(M){if(--M.usedTimes===0){let A=h.indexOf(M);h[A]=h[h.length-1],h.pop(),M.destroy()}}function X(M){l.remove(M)}function j(){l.dispose()}return{getParameters:d,getProgramCacheKey:E,getUniforms:I,acquireProgram:R,releaseProgram:T,releaseShaderCache:X,programs:h,dispose:j}}function jm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function hc(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,g,x,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=p),t++,d}function o(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,g,x,p){let d=a(u,f,m,g,x,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||Qm),n.length>1&&n.sort(f||cc),s.length>1&&s.sort(f||cc)}function h(){for(let u=t,f=i.length;u<f;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function t0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new hc,i.set(n,[a])):s>=r.length?(a=new hc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function e0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Jt};break;case"SpotLight":e={position:new U,direction:new U,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function n0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var i0=0;function s0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function r0(i,t){let e=new e0,n=n0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new U);let r=new U,a=new me,o=new me;function l(h,u){let f=0,m=0,g=0;for(let rt=0;rt<9;rt++)s.probe[rt].set(0,0,0);let x=0,p=0,d=0,E=0,y=0,C=0,I=0,R=0,T=0,X=0,j=0;h.sort(s0);let M=u===!0?Math.PI:1;for(let rt=0,it=h.length;rt<it;rt++){let D=h[rt],$=D.color,Z=D.intensity,K=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=$.r*Z*M,m+=$.g*Z*M,g+=$.b*Z*M;else if(D.isLightProbe){for(let H=0;H<9;H++)s.probe[H].addScaledVector(D.sh.coefficients[H],Z);j++}else if(D.isDirectionalLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){let nt=D.shadow,at=n.get(D);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,s.directionalShadow[x]=at,s.directionalShadowMap[x]=Y,s.directionalShadowMatrix[x]=D.shadow.matrix,C++}s.directional[x]=H,x++}else if(D.isSpotLight){let H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy($).multiplyScalar(Z*M),H.distance=K,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,s.spot[d]=H;let nt=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,nt.updateMatrices(D),D.castShadow&&X++),s.spotLightMatrix[d]=nt.matrix,D.castShadow){let at=n.get(D);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,s.spotShadow[d]=at,s.spotShadowMap[d]=Y,R++}d++}else if(D.isRectAreaLight){let H=e.get(D);H.color.copy($).multiplyScalar(Z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),s.rectArea[E]=H,E++}else if(D.isPointLight){let H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),H.distance=D.distance,H.decay=D.decay,D.castShadow){let nt=D.shadow,at=n.get(D);at.shadowBias=nt.bias,at.shadowNormalBias=nt.normalBias,at.shadowRadius=nt.radius,at.shadowMapSize=nt.mapSize,at.shadowCameraNear=nt.camera.near,at.shadowCameraFar=nt.camera.far,s.pointShadow[p]=at,s.pointShadowMap[p]=Y,s.pointShadowMatrix[p]=D.shadow.matrix,I++}s.point[p]=H,p++}else if(D.isHemisphereLight){let H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(Z*M),H.groundColor.copy(D.groundColor).multiplyScalar(Z*M),s.hemi[y]=H,y++}}E>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let A=s.hash;(A.directionalLength!==x||A.pointLength!==p||A.spotLength!==d||A.rectAreaLength!==E||A.hemiLength!==y||A.numDirectionalShadows!==C||A.numPointShadows!==I||A.numSpotShadows!==R||A.numSpotMaps!==T||A.numLightProbes!==j)&&(s.directional.length=x,s.spot.length=d,s.rectArea.length=E,s.point.length=p,s.hemi.length=y,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+T-X,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=j,A.directionalLength=x,A.pointLength=p,A.spotLength=d,A.rectAreaLength=E,A.hemiLength=y,A.numDirectionalShadows=C,A.numPointShadows=I,A.numSpotShadows=R,A.numSpotMaps=T,A.numLightProbes=j,s.version=i0++)}function c(h,u){let f=0,m=0,g=0,x=0,p=0,d=u.matrixWorldInverse;for(let E=0,y=h.length;E<y;E++){let C=h[E];if(C.isDirectionalLight){let I=s.directional[f];I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),f++}else if(C.isSpotLight){let I=s.spot[g];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),I.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(d),g++}else if(C.isRectAreaLight){let I=s.rectArea[x];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),o.identity(),a.copy(C.matrixWorld),a.premultiply(d),o.extractRotation(a),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),x++}else if(C.isPointLight){let I=s.point[m];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(d),m++}else if(C.isHemisphereLight){let I=s.hemi[p];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function uc(i,t){let e=new r0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function o0(i,t){let e=new WeakMap;function n(r,a=0){let o=e.get(r),l;return o===void 0?(l=new uc(i,t),e.set(r,[l])):a>=o.length?(l=new uc(i,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:n,dispose:s}}var sa=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ra=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function c0(i,t,e){let n=new Ns,s=new Dt,r=new Dt,a=new Re,o=new sa({depthPacking:uu}),l=new ra,c={},h=e.maxTextureSize,u={[jn]:qe,[qe]:jn,[In]:In},f=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Fe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let d=this.type;this.render=function(R,T,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let j=i.getRenderTarget(),M=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),rt=i.state;rt.setBlending(Zn),rt.buffers.color.setClear(1,1,1,1),rt.buffers.depth.setTest(!0),rt.setScissorTest(!1);let it=d!==Pn&&this.type===Pn,D=d===Pn&&this.type!==Pn;for(let $=0,Z=R.length;$<Z;$++){let K=R[$],Y=K.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let H=Y.getFrameExtents();if(s.multiply(H),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/H.x),s.x=r.x*H.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/H.y),s.y=r.y*H.y,Y.mapSize.y=r.y)),Y.map===null||it===!0||D===!0){let at=this.type!==Pn?{minFilter:Me,magFilter:Me}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Un(s.x,s.y,at),Y.map.texture.name=K.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();let nt=Y.getViewportCount();for(let at=0;at<nt;at++){let gt=Y.getViewport(at);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),rt.viewport(a),Y.updateMatrices(K,at),n=Y.getFrustum(),C(T,X,Y.camera,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Pn&&E(Y,X),Y.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(j,M,A)};function E(R,T){let X=t.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Un(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,X,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,X,m,x,null)}function y(R,T,X,j){let M=null,A=X.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)M=A;else if(M=X.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let rt=M.uuid,it=T.uuid,D=c[rt];D===void 0&&(D={},c[rt]=D);let $=D[it];$===void 0&&($=M.clone(),D[it]=$,T.addEventListener("dispose",I)),M=$}if(M.visible=T.visible,M.wireframe=T.wireframe,j===Pn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,X.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let rt=i.properties.get(M);rt.light=X}return M}function C(R,T,X,j,M){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===Pn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld);let it=t.update(R),D=R.material;if(Array.isArray(D)){let $=it.groups;for(let Z=0,K=$.length;Z<K;Z++){let Y=$[Z],H=D[Y.materialIndex];if(H&&H.visible){let nt=y(R,H,j,M);R.onBeforeShadow(i,R,T,X,it,nt,Y),i.renderBufferDirect(X,null,it,nt,R,Y),R.onAfterShadow(i,R,T,X,it,nt,Y)}}}else if(D.visible){let $=y(R,D,j,M);R.onBeforeShadow(i,R,T,X,it,$,null),i.renderBufferDirect(X,null,it,$,R,null),R.onAfterShadow(i,R,T,X,it,$,null)}}let rt=R.children;for(let it=0,D=rt.length;it<D;it++)C(rt[it],T,X,j,M)}function I(R){R.target.removeEventListener("dispose",I);for(let X in c){let j=c[X],M=R.target.uuid;M in j&&(j[M].dispose(),delete j[M])}}}function h0(i,t,e){let n=e.isWebGL2;function s(){let L=!1,ht=new Re,V=null,v=new Re(0,0,0,0);return{setMask:function(F){V!==F&&!L&&(i.colorMask(F,F,F,F),V=F)},setLocked:function(F){L=F},setClear:function(F,P,w,z,Q){Q===!0&&(F*=z,P*=z,w*=z),ht.set(F,P,w,z),v.equals(ht)===!1&&(i.clearColor(F,P,w,z),v.copy(ht))},reset:function(){L=!1,V=null,v.set(-1,0,0,0)}}}function r(){let L=!1,ht=null,V=null,v=null;return{setTest:function(F){F?xt(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(F){ht!==F&&!L&&(i.depthMask(F),ht=F)},setFunc:function(F){if(V!==F){switch(F){case kh:i.depthFunc(i.NEVER);break;case Hh:i.depthFunc(i.ALWAYS);break;case Vh:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case Gh:i.depthFunc(i.EQUAL);break;case Wh:i.depthFunc(i.GEQUAL);break;case Xh:i.depthFunc(i.GREATER);break;case qh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}V=F}},setLocked:function(F){L=F},setClear:function(F){v!==F&&(i.clearDepth(F),v=F)},reset:function(){L=!1,ht=null,V=null,v=null}}}function a(){let L=!1,ht=null,V=null,v=null,F=null,P=null,w=null,z=null,Q=null;return{setTest:function(ft){L||(ft?xt(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(ft){ht!==ft&&!L&&(i.stencilMask(ft),ht=ft)},setFunc:function(ft,dt,St){(V!==ft||v!==dt||F!==St)&&(i.stencilFunc(ft,dt,St),V=ft,v=dt,F=St)},setOp:function(ft,dt,St){(P!==ft||w!==dt||z!==St)&&(i.stencilOp(ft,dt,St),P=ft,w=dt,z=St)},setLocked:function(ft){L=ft},setClear:function(ft){Q!==ft&&(i.clearStencil(ft),Q=ft)},reset:function(){L=!1,ht=null,V=null,v=null,F=null,P=null,w=null,z=null,Q=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},m={},g=new WeakMap,x=[],p=null,d=!1,E=null,y=null,C=null,I=null,R=null,T=null,X=null,j=new Jt(0,0,0),M=0,A=!1,rt=null,it=null,D=null,$=null,Z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,H=0,nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=H>=1):nt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=H>=2);let at=null,gt={},Ut=i.getParameter(i.SCISSOR_BOX),q=i.getParameter(i.VIEWPORT),et=new Re().fromArray(Ut),pt=new Re().fromArray(q);function Ft(L,ht,V,v){let F=new Uint8Array(4),P=i.createTexture();i.bindTexture(L,P),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let w=0;w<V;w++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ht,0,i.RGBA,1,1,v,0,i.RGBA,i.UNSIGNED_BYTE,F):i.texImage2D(ht+w,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,F);return P}let Et={};Et[i.TEXTURE_2D]=Ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=Ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=Ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=Ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xt(i.DEPTH_TEST),l.setFunc(yr),Lt(!1),Nt(Ga),xt(i.CULL_FACE),wt(Zn);function xt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function ee(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Pt(L,ht){return m[L]!==ht?(i.bindFramebuffer(L,ht),m[L]=ht,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ht),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ht)),!0):!1}function B(L,ht){let V=x,v=!1;if(L){V=g.get(ht),V===void 0&&(V=[],g.set(ht,V));let F=L.textures;if(V.length!==F.length||V[0]!==i.COLOR_ATTACHMENT0){for(let P=0,w=F.length;P<w;P++)V[P]=i.COLOR_ATTACHMENT0+P;V.length=F.length,v=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,v=!0);if(v)if(e.isWebGL2)i.drawBuffers(V);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(V);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ye(L){return p!==L?(i.useProgram(L),p=L,!0):!1}let _t={[_i]:i.FUNC_ADD,[wh]:i.FUNC_SUBTRACT,[Ah]:i.FUNC_REVERSE_SUBTRACT};if(n)_t[Ya]=i.MIN,_t[Za]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(_t[Ya]=L.MIN_EXT,_t[Za]=L.MAX_EXT)}let Xt={[Th]:i.ZERO,[Ch]:i.ONE,[Rh]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[Uh]:i.SRC_ALPHA_SATURATE,[Lh]:i.DST_COLOR,[Ph]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[zo]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ih]:i.ONE_MINUS_DST_ALPHA,[Nh]:i.CONSTANT_COLOR,[Bh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[zh]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(L,ht,V,v,F,P,w,z,Q,ft){if(L===Zn){d===!0&&(ee(i.BLEND),d=!1);return}if(d===!1&&(xt(i.BLEND),d=!0),L!==Eh){if(L!==E||ft!==A){if((y!==_i||R!==_i)&&(i.blendEquation(i.FUNC_ADD),y=_i,R=_i),ft)switch(L){case is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.ONE,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}C=null,I=null,T=null,X=null,j.set(0,0,0),M=0,E=L,A=ft}return}F=F||ht,P=P||V,w=w||v,(ht!==y||F!==R)&&(i.blendEquationSeparate(_t[ht],_t[F]),y=ht,R=F),(V!==C||v!==I||P!==T||w!==X)&&(i.blendFuncSeparate(Xt[V],Xt[v],Xt[P],Xt[w]),C=V,I=v,T=P,X=w),(z.equals(j)===!1||Q!==M)&&(i.blendColor(z.r,z.g,z.b,Q),j.copy(z),M=Q),E=L,A=!1}function Kt(L,ht){L.side===In?ee(i.CULL_FACE):xt(i.CULL_FACE);let V=L.side===qe;ht&&(V=!V),Lt(V),L.blending===is&&L.transparent===!1?wt(Zn):wt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);let v=L.stencilWrite;c.setTest(v),v&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),b(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(L){rt!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),rt=L)}function Nt(L){L!==Sh?(xt(i.CULL_FACE),L!==it&&(L===Ga?i.cullFace(i.BACK):L===bh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),it=L}function de(L){L!==D&&(Y&&i.lineWidth(L),D=L)}function b(L,ht,V){L?(xt(i.POLYGON_OFFSET_FILL),($!==ht||Z!==V)&&(i.polygonOffset(ht,V),$=ht,Z=V)):ee(i.POLYGON_OFFSET_FILL)}function _(L){L?xt(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function O(L){L===void 0&&(L=i.TEXTURE0+K-1),at!==L&&(i.activeTexture(L),at=L)}function J(L,ht,V){V===void 0&&(at===null?V=i.TEXTURE0+K-1:V=at);let v=gt[V];v===void 0&&(v={type:void 0,texture:void 0},gt[V]=v),(v.type!==L||v.texture!==ht)&&(at!==V&&(i.activeTexture(V),at=V),i.bindTexture(L,ht||Et[L]),v.type=L,v.texture=ht)}function st(){let L=gt[at];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function tt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ot(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Mt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(L){et.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),et.copy(L))}function vt(L){pt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),pt.copy(L))}function Qt(L,ht){let V=u.get(ht);V===void 0&&(V=new WeakMap,u.set(ht,V));let v=V.get(L);v===void 0&&(v=i.getUniformBlockIndex(ht,L.name),V.set(L,v))}function kt(L,ht){let v=u.get(ht).get(L);h.get(ht)!==v&&(i.uniformBlockBinding(ht,v,L.__bindingPointIndex),h.set(ht,v))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},at=null,gt={},m={},g=new WeakMap,x=[],p=null,d=!1,E=null,y=null,C=null,I=null,R=null,T=null,X=null,j=new Jt(0,0,0),M=0,A=!1,rt=null,it=null,D=null,$=null,Z=null,et.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xt,disable:ee,bindFramebuffer:Pt,drawBuffers:B,useProgram:ye,setBlending:wt,setMaterial:Kt,setFlipSided:Lt,setCullFace:Nt,setLineWidth:de,setPolygonOffset:b,setScissorTest:_,activeTexture:O,bindTexture:J,unbindTexture:st,compressedTexImage2D:tt,compressedTexImage3D:Bt,texImage2D:zt,texImage3D:Mt,updateUBOMapping:Qt,uniformBlockBinding:kt,texStorage2D:ot,texStorage3D:pe,texSubImage2D:Tt,texSubImage3D:lt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Ot,scissor:yt,viewport:vt,reset:ie}}function u0(i,t,e,n,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Dt,u=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(b){}function x(b,_){return g?new OffscreenCanvas(b,_):Ar("canvas")}function p(b,_,O,J){let st=1,tt=de(b);if((tt.width>J||tt.height>J)&&(st=J/Math.max(tt.width,tt.height)),st<1||_===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let Bt=_?Yo:Math.floor,Tt=Bt(st*tt.width),lt=Bt(st*tt.height);f===void 0&&(f=x(Tt,lt));let ut=O?x(Tt,lt):f;return ut.width=Tt,ut.height=lt,ut.getContext("2d").drawImage(b,0,0,Tt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Tt+"x"+lt+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),b;return b}function d(b){let _=de(b);return Al(_.width)&&Al(_.height)}function E(b){return o?!1:b.wrapS!==pn||b.wrapT!==pn||b.minFilter!==Me&&b.minFilter!==Ge}function y(b,_){return b.generateMipmaps&&_&&b.minFilter!==Me&&b.minFilter!==Ge}function C(b){i.generateMipmap(b)}function I(b,_,O,J,st=!1){if(o===!1)return _;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=_;if(_===i.RED&&(O===i.FLOAT&&(tt=i.R32F),O===i.HALF_FLOAT&&(tt=i.R16F),O===i.UNSIGNED_BYTE&&(tt=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.R8UI),O===i.UNSIGNED_SHORT&&(tt=i.R16UI),O===i.UNSIGNED_INT&&(tt=i.R32UI),O===i.BYTE&&(tt=i.R8I),O===i.SHORT&&(tt=i.R16I),O===i.INT&&(tt=i.R32I)),_===i.RG&&(O===i.FLOAT&&(tt=i.RG32F),O===i.HALF_FLOAT&&(tt=i.RG16F),O===i.UNSIGNED_BYTE&&(tt=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(tt=i.RG8UI),O===i.UNSIGNED_SHORT&&(tt=i.RG16UI),O===i.UNSIGNED_INT&&(tt=i.RG32UI),O===i.BYTE&&(tt=i.RG8I),O===i.SHORT&&(tt=i.RG16I),O===i.INT&&(tt=i.RG32I)),_===i.RGBA){let Bt=st?Sr:re.getTransfer(J);O===i.FLOAT&&(tt=i.RGBA32F),O===i.HALF_FLOAT&&(tt=i.RGBA16F),O===i.UNSIGNED_BYTE&&(tt=Bt===le?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function R(b,_,O){return y(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Me&&b.minFilter!==Ge?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){return b===Me||b===Ja||b===Es?i.NEAREST:i.LINEAR}function X(b){let _=b.target;_.removeEventListener("dispose",X),M(_),_.isVideoTexture&&u.delete(_)}function j(b){let _=b.target;_.removeEventListener("dispose",j),rt(_)}function M(b){let _=n.get(b);if(_.__webglInit===void 0)return;let O=b.source,J=m.get(O);if(J){let st=J[_.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(b),Object.keys(J).length===0&&m.delete(O)}n.remove(b)}function A(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let O=b.source,J=m.get(O);delete J[_.__cacheKey],a.memory.textures--}function rt(b){let _=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let st=0;st<_.__webglFramebuffer[J].length;st++)i.deleteFramebuffer(_.__webglFramebuffer[J][st]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=b.textures;for(let J=0,st=O.length;J<st;J++){let tt=n.get(O[J]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(b)}let it=0;function D(){it=0}function $(){let b=it;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),it+=1,b}function Z(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function K(b,_){let O=n.get(b);if(b.isVideoTexture&&Lt(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){let J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt(O,b,_);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Y(b,_){let O=n.get(b);if(b.version>0&&O.__version!==b.version){pt(O,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function H(b,_){let O=n.get(b);if(b.version>0&&O.__version!==b.version){pt(O,b,_);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function nt(b,_){let O=n.get(b);if(b.version>0&&O.__version!==b.version){Ft(O,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let at={[Vo]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},gt={[Me]:i.NEAREST,[Ja]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[no]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},Ut={[fu]:i.NEVER,[yu]:i.ALWAYS,[pu]:i.LESS,[Rc]:i.LEQUAL,[mu]:i.EQUAL,[xu]:i.GEQUAL,[gu]:i.GREATER,[_u]:i.NOTEQUAL};function q(b,_,O){if(_.type===Ln&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ge||_.magFilter===no||_.magFilter===Es||_.magFilter===yi||_.minFilter===Ge||_.minFilter===no||_.minFilter===Es||_.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(i.texParameteri(b,i.TEXTURE_WRAP_S,at[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,at[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,at[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,gt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,gt[_.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(_.wrapS!==pn||_.wrapT!==pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(_.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(_.minFilter)),_.minFilter!==Me&&_.minFilter!==Ge&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Ut[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Me||_.minFilter!==Es&&_.minFilter!==yi||_.type===Ln&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===Ls&&t.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function et(b,_){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",X));let J=_.source,st=m.get(J);st===void 0&&(st={},m.set(J,st));let tt=Z(_);if(tt!==b.__cacheKey){st[tt]===void 0&&(st[tt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),st[tt].usedTimes++;let Bt=st[b.__cacheKey];Bt!==void 0&&(st[b.__cacheKey].usedTimes--,Bt.usedTimes===0&&A(_)),b.__cacheKey=tt,b.__webglTexture=st[tt].texture}return O}function pt(b,_,O){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let st=et(b,_),tt=_.source;e.bindTexture(J,b.__webglTexture,i.TEXTURE0+O);let Bt=n.get(tt);if(tt.version!==Bt.__version||st===!0){e.activeTexture(i.TEXTURE0+O);let Tt=re.getPrimaries(re.workingColorSpace),lt=_.colorSpace===qn?null:re.getPrimaries(_.colorSpace),ut=_.colorSpace===qn||Tt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ot=E(_)&&d(_.image)===!1,ot=p(_.image,Ot,!1,s.maxTextureSize);ot=Nt(_,ot);let pe=d(ot)||o,zt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),yt=I(_.internalFormat,zt,Mt,_.colorSpace,_.isVideoTexture);q(J,_,pe);let vt,Qt=_.mipmaps,kt=o&&_.isVideoTexture!==!0&&yt!==Tc,ie=Bt.__version===void 0||st===!0,L=tt.dataReady,ht=R(_,ot,pe);if(_.isDepthTexture)yt=i.DEPTH_COMPONENT,o?_.type===Ln?yt=i.DEPTH_COMPONENT32F:_.type===Yn?yt=i.DEPTH_COMPONENT24:_.type===Mi?yt=i.DEPTH24_STENCIL8:yt=i.DEPTH_COMPONENT16:_.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Si&&yt===i.DEPTH_COMPONENT&&_.type!==Aa&&_.type!==Yn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Yn,Mt=r.convert(_.type)),_.format===ls&&yt===i.DEPTH_COMPONENT&&(yt=i.DEPTH_STENCIL,_.type!==Mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Mi,Mt=r.convert(_.type))),ie&&(kt?e.texStorage2D(i.TEXTURE_2D,1,yt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,yt,ot.width,ot.height,0,zt,Mt,null));else if(_.isDataTexture)if(Qt.length>0&&pe){kt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,yt,Qt[0].width,Qt[0].height);for(let V=0,v=Qt.length;V<v;V++)vt=Qt[V],kt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,vt.width,vt.height,zt,Mt,vt.data):e.texImage2D(i.TEXTURE_2D,V,yt,vt.width,vt.height,0,zt,Mt,vt.data);_.generateMipmaps=!1}else kt?(ie&&e.texStorage2D(i.TEXTURE_2D,ht,yt,ot.width,ot.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,zt,Mt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,yt,ot.width,ot.height,0,zt,Mt,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){kt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,yt,Qt[0].width,Qt[0].height,ot.depth);for(let V=0,v=Qt.length;V<v;V++)vt=Qt[V],_.format!==mn?zt!==null?kt?L&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,vt.width,vt.height,ot.depth,zt,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,yt,vt.width,vt.height,ot.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,vt.width,vt.height,ot.depth,zt,Mt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,V,yt,vt.width,vt.height,ot.depth,0,zt,Mt,vt.data)}else{kt&&ie&&e.texStorage2D(i.TEXTURE_2D,ht,yt,Qt[0].width,Qt[0].height);for(let V=0,v=Qt.length;V<v;V++)vt=Qt[V],_.format!==mn?zt!==null?kt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,vt.width,vt.height,zt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,V,yt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,vt.width,vt.height,zt,Mt,vt.data):e.texImage2D(i.TEXTURE_2D,V,yt,vt.width,vt.height,0,zt,Mt,vt.data)}else if(_.isDataArrayTexture)kt?(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,yt,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,zt,Mt,ot.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,yt,ot.width,ot.height,ot.depth,0,zt,Mt,ot.data);else if(_.isData3DTexture)kt?(ie&&e.texStorage3D(i.TEXTURE_3D,ht,yt,ot.width,ot.height,ot.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,zt,Mt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,yt,ot.width,ot.height,ot.depth,0,zt,Mt,ot.data);else if(_.isFramebufferTexture){if(ie)if(kt)e.texStorage2D(i.TEXTURE_2D,ht,yt,ot.width,ot.height);else{let V=ot.width,v=ot.height;for(let F=0;F<ht;F++)e.texImage2D(i.TEXTURE_2D,F,yt,V,v,0,zt,Mt,null),V>>=1,v>>=1}}else if(Qt.length>0&&pe){if(kt&&ie){let V=de(Qt[0]);e.texStorage2D(i.TEXTURE_2D,ht,yt,V.width,V.height)}for(let V=0,v=Qt.length;V<v;V++)vt=Qt[V],kt?L&&e.texSubImage2D(i.TEXTURE_2D,V,0,0,zt,Mt,vt):e.texImage2D(i.TEXTURE_2D,V,yt,zt,Mt,vt);_.generateMipmaps=!1}else if(kt){if(ie){let V=de(ot);e.texStorage2D(i.TEXTURE_2D,ht,yt,V.width,V.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,zt,Mt,ot)}else e.texImage2D(i.TEXTURE_2D,0,yt,zt,Mt,ot);y(_,pe)&&C(J),Bt.__version=tt.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Ft(b,_,O){if(_.image.length!==6)return;let J=et(b,_),st=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);let tt=n.get(st);if(st.version!==tt.__version||J===!0){e.activeTexture(i.TEXTURE0+O);let Bt=re.getPrimaries(re.workingColorSpace),Tt=_.colorSpace===qn?null:re.getPrimaries(_.colorSpace),lt=_.colorSpace===qn||Bt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ut=_.isCompressedTexture||_.image[0].isCompressedTexture,Ot=_.image[0]&&_.image[0].isDataTexture,ot=[];for(let V=0;V<6;V++)!ut&&!Ot?ot[V]=p(_.image[V],!1,!0,s.maxCubemapSize):ot[V]=Ot?_.image[V].image:_.image[V],ot[V]=Nt(_,ot[V]);let pe=ot[0],zt=d(pe)||o,Mt=r.convert(_.format,_.colorSpace),yt=r.convert(_.type),vt=I(_.internalFormat,Mt,yt,_.colorSpace),Qt=o&&_.isVideoTexture!==!0,kt=tt.__version===void 0||J===!0,ie=st.dataReady,L=R(_,pe,zt);q(i.TEXTURE_CUBE_MAP,_,zt);let ht;if(ut){Qt&&kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,vt,pe.width,pe.height);for(let V=0;V<6;V++){ht=ot[V].mipmaps;for(let v=0;v<ht.length;v++){let F=ht[v];_.format!==mn?Mt!==null?Qt?ie&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v,0,0,F.width,F.height,Mt,F.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v,vt,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v,0,0,F.width,F.height,Mt,yt,F.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v,vt,F.width,F.height,0,Mt,yt,F.data)}}}else{if(ht=_.mipmaps,Qt&&kt){ht.length>0&&L++;let V=de(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,vt,V.width,V.height)}for(let V=0;V<6;V++)if(Ot){Qt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,ot[V].width,ot[V].height,Mt,yt,ot[V].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,vt,ot[V].width,ot[V].height,0,Mt,yt,ot[V].data);for(let v=0;v<ht.length;v++){let P=ht[v].image[V].image;Qt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v+1,0,0,P.width,P.height,Mt,yt,P.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v+1,vt,P.width,P.height,0,Mt,yt,P.data)}}else{Qt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Mt,yt,ot[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,vt,Mt,yt,ot[V]);for(let v=0;v<ht.length;v++){let F=ht[v];Qt?ie&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v+1,0,0,Mt,yt,F.image[V]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,v+1,vt,Mt,yt,F.image[V])}}}y(_,zt)&&C(i.TEXTURE_CUBE_MAP),tt.__version=st.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Et(b,_,O,J,st,tt){let Bt=r.convert(O.format,O.colorSpace),Tt=r.convert(O.type),lt=I(O.internalFormat,Bt,Tt,O.colorSpace);if(!n.get(_).__hasExternalTextures){let Ot=Math.max(1,_.width>>tt),ot=Math.max(1,_.height>>tt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,tt,lt,Ot,ot,_.depth,0,Bt,Tt,null):e.texImage2D(st,tt,lt,Ot,ot,0,Bt,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),Kt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,st,n.get(O).__webglTexture,0,wt(_)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,st,n.get(O).__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(b,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer&&!_.stencilBuffer){let J=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||Kt(_)){let st=_.depthTexture;st&&st.isDepthTexture&&(st.type===Ln?J=i.DEPTH_COMPONENT32F:st.type===Yn&&(J=i.DEPTH_COMPONENT24));let tt=wt(_);Kt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt,J,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,tt,J,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,J,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(_.depthBuffer&&_.stencilBuffer){let J=wt(_);O&&Kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,_.width,_.height):Kt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,J,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{let J=_.textures;for(let st=0;st<J.length;st++){let tt=J[st],Bt=r.convert(tt.format,tt.colorSpace),Tt=r.convert(tt.type),lt=I(tt.internalFormat,Bt,Tt,tt.colorSpace),ut=wt(_);O&&Kt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,lt,_.width,_.height):Kt(_)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,lt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,lt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let J=n.get(_.depthTexture).__webglTexture,st=wt(_);if(_.depthTexture.format===Si)Kt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===ls)Kt(_)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pt(b){let _=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ee(_.__webglFramebuffer,b)}else if(O){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]=i.createRenderbuffer(),xt(_.__webglDepthbuffer[J],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),xt(_.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function B(b,_,O){let J=n.get(b);_!==void 0&&Et(J.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Pt(b)}function ye(b){let _=b.texture,O=n.get(b),J=n.get(_);b.addEventListener("dispose",j);let st=b.textures,tt=b.isWebGLCubeRenderTarget===!0,Bt=st.length>1,Tt=d(b)||o;if(Bt||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),tt){O.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[lt]=[];for(let ut=0;ut<_.mipmaps.length;ut++)O.__webglFramebuffer[lt][ut]=i.createFramebuffer()}else O.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let lt=0;lt<_.mipmaps.length;lt++)O.__webglFramebuffer[lt]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Bt)if(s.drawBuffers)for(let lt=0,ut=st.length;lt<ut;lt++){let Ot=n.get(st[lt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Kt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let lt=0;lt<st.length;lt++){let ut=st[lt];O.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[lt]);let Ot=r.convert(ut.format,ut.colorSpace),ot=r.convert(ut.type),pe=I(ut.internalFormat,Ot,ot,ut.colorSpace,b.isXRRenderTarget===!0),zt=wt(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,pe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,O.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),xt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),q(i.TEXTURE_CUBE_MAP,_,Tt);for(let lt=0;lt<6;lt++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Et(O.__webglFramebuffer[lt][ut],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ut);else Et(O.__webglFramebuffer[lt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(_,Tt)&&C(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let lt=0,ut=st.length;lt<ut;lt++){let Ot=st[lt],ot=n.get(Ot);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),q(i.TEXTURE_2D,Ot,Tt),Et(O.__webglFramebuffer,b,Ot,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,0),y(Ot,Tt)&&C(i.TEXTURE_2D)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?lt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,J.__webglTexture),q(lt,_,Tt),o&&_.mipmaps&&_.mipmaps.length>0)for(let ut=0;ut<_.mipmaps.length;ut++)Et(O.__webglFramebuffer[ut],b,_,i.COLOR_ATTACHMENT0,lt,ut);else Et(O.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,lt,0);y(_,Tt)&&C(lt),e.unbindTexture()}b.depthBuffer&&Pt(b)}function _t(b){let _=d(b)||o,O=b.textures;for(let J=0,st=O.length;J<st;J++){let tt=O[J];if(y(tt,_)){let Bt=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Tt=n.get(tt).__webglTexture;e.bindTexture(Bt,Tt),C(Bt),e.unbindTexture()}}}function Xt(b){if(o&&b.samples>0&&Kt(b)===!1){let _=b.textures,O=b.width,J=b.height,st=i.COLOR_BUFFER_BIT,tt=[],Bt=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),lt=_.length>1;if(lt)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){tt.push(i.COLOR_ATTACHMENT0+ut),b.depthBuffer&&tt.push(Bt);let Ot=Tt.__ignoreDepthValues!==void 0?Tt.__ignoreDepthValues:!1;if(Ot===!1&&(b.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),lt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[ut]),Ot===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Bt])),lt){let ot=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,st,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[ut]);let Ot=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}}function wt(b){return Math.min(s.maxSamples,b.samples)}function Kt(b){let _=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Lt(b){let _=a.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function Nt(b,_){let O=b.colorSpace,J=b.format,st=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Xo||O!==ni&&O!==qn&&(re.getTransfer(O)===le?o===!1?t.has("EXT_sRGB")===!0&&J===mn?(b.format=Xo,b.minFilter=Ge,b.generateMipmaps=!1):_=Tr.sRGBToLinear(_):(J!==mn||st!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function de(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=Y,this.setTexture3D=H,this.setTextureCube=nt,this.rebindTextures=B,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Kt}function d0(i,t,e){let n=e.isWebGL2;function s(r,a=qn){let o,l=re.getTransfer(a);if(r===$n)return i.UNSIGNED_BYTE;if(r===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===bc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===nu)return i.BYTE;if(r===iu)return i.SHORT;if(r===Aa)return i.UNSIGNED_SHORT;if(r===Mc)return i.INT;if(r===Yn)return i.UNSIGNED_INT;if(r===Ln)return i.FLOAT;if(r===Ls)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===su)return i.ALPHA;if(r===mn)return i.RGBA;if(r===ru)return i.LUMINANCE;if(r===ou)return i.LUMINANCE_ALPHA;if(r===Si)return i.DEPTH_COMPONENT;if(r===ls)return i.DEPTH_STENCIL;if(r===Xo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===au)return i.RED;if(r===Ec)return i.RED_INTEGER;if(r===lu)return i.RG;if(r===wc)return i.RG_INTEGER;if(r===Ac)return i.RGBA_INTEGER;if(r===io||r===so||r===ro||r===oo)if(l===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===io)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===so)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===io)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===so)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ro)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===$a||r===Ka||r===ja||r===Qa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===$a)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ja)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===tl||r===el)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===tl)return l===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===el)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===nl||r===il||r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===nl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===il)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===rl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ol)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===al)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ll)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===cl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ul)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===dl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===fl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===pl)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ml)return l===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ao||r===gl||r===_l)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===ao)return l===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===gl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_l)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cu||r===xl||r===yl||r===vl)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===ao)return o.COMPRESSED_RED_RGTC1_EXT;if(r===xl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Mi?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var oa=class extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Se=class extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}},f0={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,aa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let n=e.cameras[0].viewport,s=new Sn({extensions:{fragDepth:!0},vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fe(new hs(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},la=class extends Qn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null,x=new aa,p=e.getContextAttributes(),d=null,E=null,y=[],C=[],I=new Dt,R=null,T=new Ve;T.layers.enable(1),T.viewport=new Re;let X=new Ve;X.layers.enable(2),X.viewport=new Re;let j=[T,X],M=new oa;M.layers.enable(1),M.layers.enable(2);let A=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=y[q];return et===void 0&&(et=new Is,y[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=y[q];return et===void 0&&(et=new Is,y[q]=et),et.getGripSpace()},this.getHand=function(q){let et=y[q];return et===void 0&&(et=new Is,y[q]=et),et.getHandSpace()};function it(q){let et=C.indexOf(q.inputSource);if(et===-1)return;let pt=y[et];pt!==void 0&&(pt.update(q.inputSource,q.frame,c||a),pt.dispatchEvent({type:q.type,data:q.inputSource}))}function D(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",$);for(let q=0;q<y.length;q++){let et=C[q];et!==null&&(C[q]=null,y[q].disconnect(et))}A=null,rt=null,x.reset(),t.setRenderTarget(d),m=null,f=null,u=null,s=null,E=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",D),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Un(m.framebufferWidth,m.framebufferHeight,{format:mn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let et=null,pt=null,Ft=null;p.depth&&(Ft=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=p.stencil?ls:Si,pt=p.stencil?Mi:Yn);let Et={colorFormat:e.RGBA8,depthFormat:Ft,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Un(f.textureWidth,f.textureHeight,{format:mn,type:$n,depthTexture:new Br(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let xt=t.properties.get(E);xt.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function $(q){for(let et=0;et<q.removed.length;et++){let pt=q.removed[et],Ft=C.indexOf(pt);Ft>=0&&(C[Ft]=null,y[Ft].disconnect(pt))}for(let et=0;et<q.added.length;et++){let pt=q.added[et],Ft=C.indexOf(pt);if(Ft===-1){for(let xt=0;xt<y.length;xt++)if(xt>=C.length){C.push(pt),Ft=xt;break}else if(C[xt]===null){C[xt]=pt,Ft=xt;break}if(Ft===-1)break}let Et=y[Ft];Et&&Et.connect(pt)}}let Z=new U,K=new U;function Y(q,et,pt){Z.setFromMatrixPosition(et.matrixWorld),K.setFromMatrixPosition(pt.matrixWorld);let Ft=Z.distanceTo(K),Et=et.projectionMatrix.elements,xt=pt.projectionMatrix.elements,ee=Et[14]/(Et[10]-1),Pt=Et[14]/(Et[10]+1),B=(Et[9]+1)/Et[5],ye=(Et[9]-1)/Et[5],_t=(Et[8]-1)/Et[0],Xt=(xt[8]+1)/xt[0],wt=ee*_t,Kt=ee*Xt,Lt=Ft/(-_t+Xt),Nt=Lt*-_t;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Nt),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let de=ee+Lt,b=Pt+Lt,_=wt-Nt,O=Kt+(Ft-Nt),J=B*Pt/b*de,st=ye*Pt/b*de;q.projectionMatrix.makePerspective(_,O,J,st,de,b),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function H(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;x.texture!==null&&(q.near=x.depthNear,q.far=x.depthFar),M.near=X.near=T.near=q.near,M.far=X.far=T.far=q.far,(A!==M.near||rt!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),A=M.near,rt=M.far,T.near=A,T.far=rt,X.near=A,X.far=rt,T.updateProjectionMatrix(),X.updateProjectionMatrix(),q.updateProjectionMatrix());let et=q.parent,pt=M.cameras;H(M,et);for(let Ft=0;Ft<pt.length;Ft++)H(pt[Ft],et);pt.length===2?Y(M,T,X):M.projectionMatrix.copy(T.projectionMatrix),nt(q,M,et)};function nt(q,et,pt){pt===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(pt.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null};let at=null;function gt(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Ft=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,Ft=!0);for(let xt=0;xt<pt.length;xt++){let ee=pt[xt],Pt=null;if(m!==null)Pt=m.getViewport(ee);else{let ye=u.getViewSubImage(f,ee);Pt=ye.viewport,xt===0&&(t.setRenderTargetTextures(E,ye.colorTexture,f.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(E))}let B=j[xt];B===void 0&&(B=new Ve,B.layers.enable(xt),B.viewport=new Re,j[xt]=B),B.matrix.fromArray(ee.transform.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale),B.projectionMatrix.fromArray(ee.projectionMatrix),B.projectionMatrixInverse.copy(B.projectionMatrix).invert(),B.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),xt===0&&(M.matrix.copy(B.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Ft===!0&&M.cameras.push(B)}let Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){let xt=u.getDepthInformation(pt[0]);xt&&xt.isValid&&xt.texture&&x.init(t,xt,s.renderState)}}for(let pt=0;pt<y.length;pt++){let Ft=C[pt],Et=y[pt];Ft!==null&&Et!==void 0&&Et.update(Ft,et,c||a)}x.render(t,M),at&&at(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}let Ut=new Dc;Ut.setAnimationLoop(gt),this.setAnimationLoop=function(q){at=q},this.dispose=function(){}}},mi=new Mn,g0=new me;function _0(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Lc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,y,C){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,C)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,E,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===qe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===qe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=t.get(d),y=E.envMap,C=E.envMapRotation;if(y&&(p.envMap.value=y,mi.copy(C),mi.x*=-1,mi.y*=-1,mi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),p.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(mi)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;let I=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*I,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,E,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let E=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function x0(i,t,e,n){let s={},r={},a=[],o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,y){let C=y.program;n.uniformBlockBinding(E,C)}function c(E,y){let C=s[E.id];C===void 0&&(g(E),C=h(E),s[E.id]=C,E.addEventListener("dispose",p));let I=y.program;n.updateUBOMapping(E,I);let R=t.render.frame;r[E.id]!==R&&(f(E),r[E.id]=R)}function h(E){let y=u();E.__bindingPointIndex=y;let C=i.createBuffer(),I=E.__size,R=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,I,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,C),C}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=s[E.id],C=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let R=0,T=C.length;R<T;R++){let X=Array.isArray(C[R])?C[R]:[C[R]];for(let j=0,M=X.length;j<M;j++){let A=X[j];if(m(A,R,j,I)===!0){let rt=A.__offset,it=Array.isArray(A.value)?A.value:[A.value],D=0;for(let $=0;$<it.length;$++){let Z=it[$],K=x(Z);typeof Z=="number"||typeof Z=="boolean"?(A.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,rt+D,A.__data)):Z.isMatrix3?(A.__data[0]=Z.elements[0],A.__data[1]=Z.elements[1],A.__data[2]=Z.elements[2],A.__data[3]=0,A.__data[4]=Z.elements[3],A.__data[5]=Z.elements[4],A.__data[6]=Z.elements[5],A.__data[7]=0,A.__data[8]=Z.elements[6],A.__data[9]=Z.elements[7],A.__data[10]=Z.elements[8],A.__data[11]=0):(Z.toArray(A.__data,D),D+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,rt,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,y,C,I){let R=E.value,T=y+"_"+C;if(I[T]===void 0)return typeof R=="number"||typeof R=="boolean"?I[T]=R:I[T]=R.clone(),!0;{let X=I[T];if(typeof R=="number"||typeof R=="boolean"){if(X!==R)return I[T]=R,!0}else if(X.equals(R)===!1)return X.copy(R),!0}return!1}function g(E){let y=E.uniforms,C=0,I=16;for(let T=0,X=y.length;T<X;T++){let j=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,A=j.length;M<A;M++){let rt=j[M],it=Array.isArray(rt.value)?rt.value:[rt.value];for(let D=0,$=it.length;D<$;D++){let Z=it[D],K=x(Z),Y=C%I;Y!==0&&I-Y<K.boundary&&(C+=I-Y),rt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),rt.__offset=C,C+=K.storage}}}let R=C%I;return R>0&&(C+=I-R),E.__size=C,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function p(E){let y=E.target;y.removeEventListener("dispose",p);let C=a.indexOf(y.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var us=class{constructor(t={}){let{canvas:e=Mu(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=Jn,this.toneMappingExposure=1;let y=this,C=!1,I=0,R=0,T=null,X=-1,j=null,M=new Re,A=new Re,rt=null,it=new Jt(0),D=0,$=e.width,Z=e.height,K=1,Y=null,H=null,nt=new Re(0,0,$,Z),at=new Re(0,0,$,Z),gt=!1,Ut=new Ns,q=!1,et=!1,pt=null,Ft=new me,Et=new Dt,xt=new U,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return T===null?K:1}let B=n;function ye(S,N){for(let G=0;G<S.length;G++){let W=S[G],k=e.getContext(W,N);if(k!==null)return k}return null}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ba}`),e.addEventListener("webglcontextlost",ie,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ht,!1),B===null){let N=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&N.shift(),B=ye(N,S),B===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let _t,Xt,wt,Kt,Lt,Nt,de,b,_,O,J,st,tt,Bt,Tt,lt,ut,Ot,ot,pe,zt,Mt,yt,vt;function Qt(){_t=new Dp(B),Xt=new Cp(B,_t,t),_t.init(Xt),Mt=new d0(B,_t,Xt),wt=new h0(B,_t,Xt),Kt=new Bp(B),Lt=new jm,Nt=new u0(B,_t,wt,Lt,Xt,Mt,Kt),de=new Fp(y),b=new Lp(y),_=new Vu(B,Xt),yt=new Ap(B,_t,_,Xt),O=new Up(B,_,Kt,yt),J=new Hp(B,O,_,Kt),ot=new kp(B,Xt,Nt),lt=new Rp(Lt),st=new Km(y,de,b,_t,Xt,yt,lt),tt=new _0(y,Lt),Bt=new t0,Tt=new o0(_t,Xt),Ot=new wp(y,de,b,wt,J,f,l),ut=new c0(y,J,Xt),vt=new x0(B,Kt,Xt,wt),pe=new Tp(B,_t,Kt,Xt),zt=new Np(B,_t,Kt,Xt),Kt.programs=st.programs,y.capabilities=Xt,y.extensions=_t,y.properties=Lt,y.renderLists=Bt,y.shadowMap=ut,y.state=wt,y.info=Kt}Qt();let kt=new la(y,B);this.xr=kt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let S=_t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=_t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize($,Z,!1))},this.getSize=function(S){return S.set($,Z)},this.setSize=function(S,N,G=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,Z=N,e.width=Math.floor(S*K),e.height=Math.floor(N*K),G===!0&&(e.style.width=S+"px",e.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set($*K,Z*K).floor()},this.setDrawingBufferSize=function(S,N,G){$=S,Z=N,K=G,e.width=Math.floor(S*G),e.height=Math.floor(N*G),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(nt)},this.setViewport=function(S,N,G,W){S.isVector4?nt.set(S.x,S.y,S.z,S.w):nt.set(S,N,G,W),wt.viewport(M.copy(nt).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(at)},this.setScissor=function(S,N,G,W){S.isVector4?at.set(S.x,S.y,S.z,S.w):at.set(S,N,G,W),wt.scissor(A.copy(at).multiplyScalar(K).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(S){wt.setScissorTest(gt=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){H=S},this.getClearColor=function(S){return S.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(S=!0,N=!0,G=!0){let W=0;if(S){let k=!1;if(T!==null){let mt=T.texture.format;k=mt===Ac||mt===wc||mt===Ec}if(k){let mt=T.texture.type,bt=mt===$n||mt===Yn||mt===Aa||mt===Mi||mt===Sc||mt===bc,Rt=Ot.getClearColor(),It=Ot.getClearAlpha(),$t=Rt.r,Vt=Rt.g,Wt=Rt.b;bt?(m[0]=$t,m[1]=Vt,m[2]=Wt,m[3]=It,B.clearBufferuiv(B.COLOR,0,m)):(g[0]=$t,g[1]=Vt,g[2]=Wt,g[3]=It,B.clearBufferiv(B.COLOR,0,g))}else W|=B.COLOR_BUFFER_BIT}N&&(W|=B.DEPTH_BUFFER_BIT),G&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ie,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Bt.dispose(),Tt.dispose(),Lt.dispose(),de.dispose(),b.dispose(),J.dispose(),yt.dispose(),vt.dispose(),st.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",Q),kt.removeEventListener("sessionend",ft),pt&&(pt.dispose(),pt=null),dt.stop()};function ie(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let S=Kt.autoReset,N=ut.enabled,G=ut.autoUpdate,W=ut.needsUpdate,k=ut.type;Qt(),Kt.autoReset=S,ut.enabled=N,ut.autoUpdate=G,ut.needsUpdate=W,ut.type=k}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function V(S){let N=S.target;N.removeEventListener("dispose",V),v(N)}function v(S){F(S),Lt.remove(S)}function F(S){let N=Lt.get(S).programs;N!==void 0&&(N.forEach(function(G){st.releaseProgram(G)}),S.isShaderMaterial&&st.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,G,W,k,mt){N===null&&(N=ee);let bt=k.isMesh&&k.matrixWorld.determinant()<0,Rt=Ss(S,N,G,W,k);wt.setMaterial(W,bt);let It=G.index,$t=1;if(W.wireframe===!0){if(It=O.getWireframeAttribute(G),It===void 0)return;$t=2}let Vt=G.drawRange,Wt=G.attributes.position,_e=Vt.start*$t,$e=(Vt.start+Vt.count)*$t;mt!==null&&(_e=Math.max(_e,mt.start*$t),$e=Math.min($e,(mt.start+mt.count)*$t)),It!==null?(_e=Math.max(_e,0),$e=Math.min($e,It.count)):Wt!=null&&(_e=Math.max(_e,0),$e=Math.min($e,Wt.count));let Te=$e-_e;if(Te<0||Te===1/0)return;yt.setup(k,W,Rt,G,It);let En,fe=pe;if(It!==null&&(En=_.get(It),fe=zt,fe.setIndex(En)),k.isMesh)W.wireframe===!0?(wt.setLineWidth(W.wireframeLinewidth*Pt()),fe.setMode(B.LINES)):fe.setMode(B.TRIANGLES);else if(k.isLine){let qt=W.linewidth;qt===void 0&&(qt=1),wt.setLineWidth(qt*Pt()),k.isLineSegments?fe.setMode(B.LINES):k.isLineLoop?fe.setMode(B.LINE_LOOP):fe.setMode(B.LINE_STRIP)}else k.isPoints?fe.setMode(B.POINTS):k.isSprite&&fe.setMode(B.TRIANGLES);if(k.isBatchedMesh)fe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)fe.renderInstances(_e,Te,k.count);else if(G.isInstancedBufferGeometry){let qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jr=Math.min(G.instanceCount,qt);fe.renderInstances(_e,Te,jr)}else fe.render(_e,Te)};function P(S,N,G){S.transparent===!0&&S.side===In&&S.forceSinglePass===!1?(S.side=qe,S.needsUpdate=!0,xn(S,N,G),S.side=jn,S.needsUpdate=!0,xn(S,N,G),S.side=In):xn(S,N,G)}this.compile=function(S,N,G=null){G===null&&(G=S),p=Tt.get(G),p.init(),E.push(p),G.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==G&&S.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(y._useLegacyLights);let W=new Set;return S.traverse(function(k){let mt=k.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let Rt=mt[bt];P(Rt,G,k),W.add(Rt)}else P(mt,G,k),W.add(mt)}),E.pop(),p=null,W},this.compileAsync=function(S,N,G=null){let W=this.compile(S,N,G);return new Promise(k=>{function mt(){if(W.forEach(function(bt){Lt.get(bt).currentProgram.isReady()&&W.delete(bt)}),W.size===0){k(S);return}setTimeout(mt,10)}_t.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let w=null;function z(S){w&&w(S)}function Q(){dt.stop()}function ft(){dt.start()}let dt=new Dc;dt.setAnimationLoop(z),typeof self!="undefined"&&dt.setContext(self),this.setAnimationLoop=function(S){w=S,kt.setAnimationLoop(S),S===null?dt.stop():dt.start()},kt.addEventListener("sessionstart",Q),kt.addEventListener("sessionend",ft),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(N),N=kt.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,T),p=Tt.get(S,E.length),p.init(),E.push(p),Ft.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ut.setFromProjectionMatrix(Ft),et=this.localClippingEnabled,q=lt.init(this.clippingPlanes,et),x=Bt.get(S,d.length),x.init(),d.push(x),St(S,N,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Y,H),this.info.render.frame++,q===!0&&lt.beginShadows();let G=p.state.shadowsArray;if(ut.render(G,S,N),q===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(kt.enabled===!1||kt.isPresenting===!1||kt.hasDepthSensing()===!1)&&Ot.render(x,S),p.setupLights(y._useLegacyLights),N.isArrayCamera){let W=N.cameras;for(let k=0,mt=W.length;k<mt;k++){let bt=W[k];At(x,S,bt,bt.viewport)}}else At(x,S,N);T!==null&&(Nt.updateMultisampleRenderTarget(T),Nt.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(y,S,N),yt.resetDefaultState(),X=-1,j=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function St(S,N,G,W){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ut.intersectsSprite(S)){W&&xt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ft);let bt=J.update(S),Rt=S.material;Rt.visible&&x.push(S,bt,Rt,G,xt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ut.intersectsObject(S))){let bt=J.update(S),Rt=S.material;if(W&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),xt.copy(S.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),xt.copy(bt.boundingSphere.center)),xt.applyMatrix4(S.matrixWorld).applyMatrix4(Ft)),Array.isArray(Rt)){let It=bt.groups;for(let $t=0,Vt=It.length;$t<Vt;$t++){let Wt=It[$t],_e=Rt[Wt.materialIndex];_e&&_e.visible&&x.push(S,bt,_e,G,xt.z,Wt)}}else Rt.visible&&x.push(S,bt,Rt,G,xt.z,null)}}let mt=S.children;for(let bt=0,Rt=mt.length;bt<Rt;bt++)St(mt[bt],N,G,W)}function At(S,N,G,W){let k=S.opaque,mt=S.transmissive,bt=S.transparent;p.setupLightsView(G),q===!0&&lt.setGlobalState(y.clippingPlanes,G),mt.length>0&&Pe(k,mt,N,G),W&&wt.viewport(M.copy(W)),k.length>0&&ge(k,N,G),mt.length>0&&ge(mt,N,G),bt.length>0&&ge(bt,N,G),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Pe(S,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;let mt=Xt.isWebGL2;pt===null&&(pt=new Un(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")?Ls:$n,minFilter:yi,samples:mt?4:0})),y.getDrawingBufferSize(Et),mt?pt.setSize(Et.x,Et.y):pt.setSize(Yo(Et.x),Yo(Et.y));let bt=y.getRenderTarget();y.setRenderTarget(pt),y.getClearColor(it),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();let Rt=y.toneMapping;y.toneMapping=Jn,ge(S,G,W),Nt.updateMultisampleRenderTarget(pt),Nt.updateRenderTargetMipmap(pt);let It=!1;for(let $t=0,Vt=N.length;$t<Vt;$t++){let Wt=N[$t],_e=Wt.object,$e=Wt.geometry,Te=Wt.material,En=Wt.group;if(Te.side===In&&_e.layers.test(W.layers)){let fe=Te.side;Te.side=qe,Te.needsUpdate=!0,rn(_e,G,W,$e,Te,En),Te.side=fe,Te.needsUpdate=!0,It=!0}}It===!0&&(Nt.updateMultisampleRenderTarget(pt),Nt.updateRenderTargetMipmap(pt)),y.setRenderTarget(bt),y.setClearColor(it,D),y.toneMapping=Rt}function ge(S,N,G){let W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,mt=S.length;k<mt;k++){let bt=S[k],Rt=bt.object,It=bt.geometry,$t=W===null?bt.material:W,Vt=bt.group;Rt.layers.test(G.layers)&&rn(Rt,N,G,It,$t,Vt)}}function rn(S,N,G,W,k,mt){S.onBeforeRender(y,N,G,W,k,mt),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,N,G,W,S,mt),k.transparent===!0&&k.side===In&&k.forceSinglePass===!1?(k.side=qe,k.needsUpdate=!0,y.renderBufferDirect(G,N,W,k,S,mt),k.side=jn,k.needsUpdate=!0,y.renderBufferDirect(G,N,W,k,S,mt),k.side=In):y.renderBufferDirect(G,N,W,k,S,mt),S.onAfterRender(y,N,G,W,k,mt)}function xn(S,N,G){N.isScene!==!0&&(N=ee);let W=Lt.get(S),k=p.state.lights,mt=p.state.shadowsArray,bt=k.state.version,Rt=st.getParameters(S,k.state,mt,N,G),It=st.getProgramCacheKey(Rt),$t=W.programs;W.environment=S.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(S.isMeshStandardMaterial?b:de).get(S.envMap||W.environment),W.envMapRotation=W.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,$t===void 0&&(S.addEventListener("dispose",V),$t=new Map,W.programs=$t);let Vt=$t.get(It);if(Vt!==void 0){if(W.currentProgram===Vt&&W.lightsStateVersion===bt)return Ae(S,Rt),Vt}else Rt.uniforms=st.getUniforms(S),S.onBuild(G,Rt,y),S.onBeforeCompile(Rt,y),Vt=st.acquireProgram(Rt,It),$t.set(It,Vt),W.uniforms=Rt.uniforms;let Wt=W.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Wt.clippingPlanes=lt.uniform),Ae(S,Rt),W.needsLights=Ys(S),W.lightsStateVersion=bt,W.needsLights&&(Wt.ambientLightColor.value=k.state.ambient,Wt.lightProbe.value=k.state.probe,Wt.directionalLights.value=k.state.directional,Wt.directionalLightShadows.value=k.state.directionalShadow,Wt.spotLights.value=k.state.spot,Wt.spotLightShadows.value=k.state.spotShadow,Wt.rectAreaLights.value=k.state.rectArea,Wt.ltc_1.value=k.state.rectAreaLTC1,Wt.ltc_2.value=k.state.rectAreaLTC2,Wt.pointLights.value=k.state.point,Wt.pointLightShadows.value=k.state.pointShadow,Wt.hemisphereLights.value=k.state.hemi,Wt.directionalShadowMap.value=k.state.directionalShadowMap,Wt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Wt.spotShadowMap.value=k.state.spotShadowMap,Wt.spotLightMatrix.value=k.state.spotLightMatrix,Wt.spotLightMap.value=k.state.spotLightMap,Wt.pointShadowMap.value=k.state.pointShadowMap,Wt.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Vt,W.uniformsList=null,Vt}function ze(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=rs.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function Ae(S,N){let G=Lt.get(S);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Ss(S,N,G,W,k){N.isScene!==!0&&(N=ee),Nt.resetTextureUnits();let mt=N.fog,bt=W.isMeshStandardMaterial?N.environment:null,Rt=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ni,It=(W.isMeshStandardMaterial?b:de).get(W.envMap||bt),$t=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Vt=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Wt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,$e=!!G.morphAttributes.color,Te=Jn;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Te=y.toneMapping);let En=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fe=En!==void 0?En.length:0,qt=Lt.get(W),jr=p.state.lights;if(q===!0&&(et===!0||S!==j)){let on=S===j&&W.id===X;lt.setState(W,S,on)}let ce=!1;W.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==jr.state.version||qt.outputColorSpace!==Rt||k.isBatchedMesh&&qt.batching===!1||!k.isBatchedMesh&&qt.batching===!0||k.isInstancedMesh&&qt.instancing===!1||!k.isInstancedMesh&&qt.instancing===!0||k.isSkinnedMesh&&qt.skinning===!1||!k.isSkinnedMesh&&qt.skinning===!0||k.isInstancedMesh&&qt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&qt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&qt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&qt.instancingMorph===!1&&k.morphTexture!==null||qt.envMap!==It||W.fog===!0&&qt.fog!==mt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==lt.numPlanes||qt.numIntersection!==lt.numIntersection)||qt.vertexAlphas!==$t||qt.vertexTangents!==Vt||qt.morphTargets!==Wt||qt.morphNormals!==_e||qt.morphColors!==$e||qt.toneMapping!==Te||Xt.isWebGL2===!0&&qt.morphTargetsCount!==fe)&&(ce=!0):(ce=!0,qt.__version=W.version);let li=qt.currentProgram;ce===!0&&(li=xn(W,N,k));let za=!1,bs=!1,Qr=!1,Le=li.getUniforms(),ci=qt.uniforms;if(wt.useProgram(li.program)&&(za=!0,bs=!0,Qr=!0),W.id!==X&&(X=W.id,bs=!0),za||j!==S){Le.setValue(B,"projectionMatrix",S.projectionMatrix),Le.setValue(B,"viewMatrix",S.matrixWorldInverse);let on=Le.map.cameraPosition;on!==void 0&&on.setValue(B,xt.setFromMatrixPosition(S.matrixWorld)),Xt.logarithmicDepthBuffer&&Le.setValue(B,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Le.setValue(B,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,bs=!0,Qr=!0)}if(k.isSkinnedMesh){Le.setOptional(B,k,"bindMatrix"),Le.setOptional(B,k,"bindMatrixInverse");let on=k.skeleton;on&&(Xt.floatVertexTextures?(on.boneTexture===null&&on.computeBoneTexture(),Le.setValue(B,"boneTexture",on.boneTexture,Nt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Le.setOptional(B,k,"batchingTexture"),Le.setValue(B,"batchingTexture",k._matricesTexture,Nt));let to=G.morphAttributes;if((to.position!==void 0||to.normal!==void 0||to.color!==void 0&&Xt.isWebGL2===!0)&&ot.update(k,G,li),(bs||qt.receiveShadow!==k.receiveShadow)&&(qt.receiveShadow=k.receiveShadow,Le.setValue(B,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ci.envMap.value=It,ci.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),bs&&(Le.setValue(B,"toneMappingExposure",y.toneMappingExposure),qt.needsLights&&ai(ci,Qr),mt&&W.fog===!0&&tt.refreshFogUniforms(ci,mt),tt.refreshMaterialUniforms(ci,W,K,Z,pt),rs.upload(B,ze(qt),ci,Nt)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(rs.upload(B,ze(qt),ci,Nt),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Le.setValue(B,"center",k.center),Le.setValue(B,"modelViewMatrix",k.modelViewMatrix),Le.setValue(B,"normalMatrix",k.normalMatrix),Le.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let on=W.uniformsGroups;for(let eo=0,gh=on.length;eo<gh;eo++)if(Xt.isWebGL2){let ka=on[eo];vt.update(ka,li),vt.bind(ka,li)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return li}function ai(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function Ys(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,N,G){Lt.get(S.texture).__webglTexture=N,Lt.get(S.depthTexture).__webglTexture=G;let W=Lt.get(S);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let G=Lt.get(S);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,G=0){T=S,I=N,R=G;let W=!0,k=null,mt=!1,bt=!1;if(S){let It=Lt.get(S);It.__useDefaultFramebuffer!==void 0?(wt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1):It.__webglFramebuffer===void 0?Nt.setupRenderTarget(S):It.__hasExternalTextures&&Nt.rebindTextures(S,Lt.get(S.texture).__webglTexture,Lt.get(S.depthTexture).__webglTexture);let $t=S.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(bt=!0);let Vt=Lt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Vt[N])?k=Vt[N][G]:k=Vt[N],mt=!0):Xt.isWebGL2&&S.samples>0&&Nt.useMultisampledRTT(S)===!1?k=Lt.get(S).__webglMultisampledFramebuffer:Array.isArray(Vt)?k=Vt[G]:k=Vt,M.copy(S.viewport),A.copy(S.scissor),rt=S.scissorTest}else M.copy(nt).multiplyScalar(K).floor(),A.copy(at).multiplyScalar(K).floor(),rt=gt;if(wt.bindFramebuffer(B.FRAMEBUFFER,k)&&Xt.drawBuffers&&W&&wt.drawBuffers(S,k),wt.viewport(M),wt.scissor(A),wt.setScissorTest(rt),mt){let It=Lt.get(S.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+N,It.__webglTexture,G)}else if(bt){let It=Lt.get(S.texture),$t=N||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,It.__webglTexture,G||0,$t)}X=-1},this.readRenderTargetPixels=function(S,N,G,W,k,mt,bt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Lt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){wt.bindFramebuffer(B.FRAMEBUFFER,Rt);try{let It=S.texture,$t=It.format,Vt=It.type;if($t!==mn&&Mt.convert($t)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Vt===Ls&&(_t.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&_t.has("EXT_color_buffer_float"));if(Vt!==$n&&Mt.convert(Vt)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Ln&&(Xt.isWebGL2||_t.has("OES_texture_float")||_t.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-W&&G>=0&&G<=S.height-k&&B.readPixels(N,G,W,k,Mt.convert($t),Mt.convert(Vt),mt)}finally{let It=T!==null?Lt.get(T).__webglFramebuffer:null;wt.bindFramebuffer(B.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(S,N,G=0){let W=Math.pow(2,-G),k=Math.floor(N.image.width*W),mt=Math.floor(N.image.height*W);Nt.setTexture2D(N,0),B.copyTexSubImage2D(B.TEXTURE_2D,G,0,0,S.x,S.y,k,mt),wt.unbindTexture()},this.copyTextureToTexture=function(S,N,G,W=0){let k=N.image.width,mt=N.image.height,bt=Mt.convert(G.format),Rt=Mt.convert(G.type);Nt.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,S.x,S.y,k,mt,bt,Rt,N.image.data):N.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,bt,N.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,W,S.x,S.y,bt,Rt,N.image),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),wt.unbindTexture()},this.copyTextureToTexture3D=function(S,N,G,W,k=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=Math.round(S.max.x-S.min.x),bt=Math.round(S.max.y-S.min.y),Rt=S.max.z-S.min.z+1,It=Mt.convert(W.format),$t=Mt.convert(W.type),Vt;if(W.isData3DTexture)Nt.setTexture3D(W,0),Vt=B.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Nt.setTexture2DArray(W,0),Vt=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);let Wt=B.getParameter(B.UNPACK_ROW_LENGTH),_e=B.getParameter(B.UNPACK_IMAGE_HEIGHT),$e=B.getParameter(B.UNPACK_SKIP_PIXELS),Te=B.getParameter(B.UNPACK_SKIP_ROWS),En=B.getParameter(B.UNPACK_SKIP_IMAGES),fe=G.isCompressedTexture?G.mipmaps[k]:G.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,fe.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,fe.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,S.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,S.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,S.min.z),G.isDataTexture||G.isData3DTexture?B.texSubImage3D(Vt,k,N.x,N.y,N.z,mt,bt,Rt,It,$t,fe.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Vt,k,N.x,N.y,N.z,mt,bt,Rt,It,fe.data):B.texSubImage3D(Vt,k,N.x,N.y,N.z,mt,bt,Rt,It,$t,fe),B.pixelStorei(B.UNPACK_ROW_LENGTH,Wt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_e),B.pixelStorei(B.UNPACK_SKIP_PIXELS,$e),B.pixelStorei(B.UNPACK_SKIP_ROWS,Te),B.pixelStorei(B.UNPACK_SKIP_IMAGES,En),k===0&&W.generateMipmaps&&B.generateMipmap(Vt),wt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?Nt.setTextureCube(S,0):S.isData3DTexture?Nt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Nt.setTexture2DArray(S,0):Nt.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){I=0,R=0,T=null,wt.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ta?"display-p3":"srgb",e.unpackColorSpace=re.workingColorSpace===Yr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ca=class extends us{};ca.prototype.isWebGL1Renderer=!0;var Or=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Jt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},zr=class extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},kr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Pc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new U,Bs=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ds=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ki,Rs=new U,ji=new U,Qi=new U,ts=new Dt,Fs=new Dt,kc=new me,mr=new U,Ps=new U,gr=new U,dc=new Dt,No=new Dt,fc=new Dt,Os=class extends Ne{constructor(t=new ds){if(super(),this.isSprite=!0,this.type="Sprite",Ki===void 0){Ki=new gn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kr(e,5);Ki.setIndex([0,1,2,0,2,3]),Ki.setAttribute("position",new Bs(n,3,0,!1)),Ki.setAttribute("uv",new Bs(n,2,3,!1))}this.geometry=Ki,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),kc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Qi.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;_r(mr.set(-.5,-.5,0),Qi,a,ji,s,r),_r(Ps.set(.5,-.5,0),Qi,a,ji,s,r),_r(gr.set(.5,.5,0),Qi,a,ji,s,r),dc.set(0,0),No.set(1,0),fc.set(1,1);let o=t.ray.intersectTriangle(mr,Ps,gr,!1,Rs);if(o===null&&(_r(Ps.set(-.5,.5,0),Qi,a,ji,s,r),No.set(0,1),o=t.ray.intersectTriangle(mr,gr,Ps,!1,Rs),o===null))return;let l=t.ray.origin.distanceTo(Rs);l<t.near||l>t.far||e.push({distance:l,point:Rs.clone(),uv:vi.getInterpolation(Rs,mr,Ps,gr,dc,No,fc,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function _r(i,t,e,n,s,r){ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Fs.x=r*ts.x-s*ts.y,Fs.y=s*ts.x+r*ts.y):Fs.copy(ts),i.copy(t),i.x+=Fs.x,i.y+=Fs.y,i.applyMatrix4(kc)}var fs=class extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class i extends gn{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=t,f=(e-t)/s,m=new U,g=new Dt;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let d=r+p/n*a;m.x=u*Math.cos(d),m.y=u*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let p=x*(n+1);for(let d=0;d<n;d++){let E=d+p,y=E,C=E+n+1,I=E+n+2,R=E+1;o.push(y,C,R),o.push(C,I,R)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var wi=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function xr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function y0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ps=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ha=class extends ps{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ml,endingEnd:Ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sl:r=t,o=2*e-n;break;case bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sl:a=t,l=2*n-e;break;case bl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-e)/(s-e),x=g*g,p=x*g,d=-f*p+2*f*x-f*g,E=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-m)*p+(1.5+m)*x+.5*g,C=m*p-m*x;for(let I=0;I!==o;++I)r[I]=d*a[h+I]+E*a[c+I]+y*a[l+I]+C*a[u+I];return r}},ua=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},da=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case vr:e=this.InterpolantFactoryMethodDiscrete;break;case Mr:e=this.InterpolantFactoryMethodLinear;break;case lo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&y0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===lo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,m=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let m=0;m!==n;++m)e[f+m]=e[u+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=Mr;var Ai=class extends _n{};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=vr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var fa=class extends _n{};fa.prototype.ValueTypeName="color";var pa=class extends _n{};pa.prototype.ValueTypeName="number";var ma=class extends ps{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ti.slerpFlat(r,0,a,c-o,a,c,l);return r}},ks=class extends _n{InterpolantFactoryMethodLinear(t){return new ma(this.times,this.values,this.getValueSize(),t)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.DefaultInterpolation=Mr;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends _n{};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=vr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends _n{};ga.prototype.ValueTypeName="vector";var _a=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},v0=new _a,xa=class{constructor(t){this.manager=t!==void 0?t:v0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};xa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Vr=class extends Hr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Bo=new me,pc=new U,mc=new U,ya=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),mc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mc),e.updateMatrixWorld(),Bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var va=class extends ya{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new va}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=gc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function gc(){return(typeof performance=="undefined"?Date:performance).now()}var Ra="\\[\\]\\.:\\/",M0=new RegExp("["+Ra+"]","g"),Fa="[^"+Ra+"]",S0="[^"+Ra.replace("\\.","")+"]",b0=/((?:WC+[\/:])*)/.source.replace("WC",Fa),E0=/(WCOD+)?/.source.replace("WCOD",S0),w0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fa),A0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fa),T0=new RegExp("^"+b0+E0+w0+A0+"$"),C0=["material","materials","bones","map"],Ma=class{constructor(t,e,n){let s=n||he.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},he=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(M0,"")}static parseTrackName(t){let e=T0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);C0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};he.Composite=Ma;he.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};he.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};he.prototype.GetterByBindingType=[he.prototype._getValue_direct,he.prototype._getValue_array,he.prototype._getValue_arrayElement,he.prototype._getValue_toArray];he.prototype.SetterByBindingTypeAndVersioning=[[he.prototype._setValue_direct,he.prototype._setValue_direct_setNeedsUpdate,he.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[he.prototype._setValue_array,he.prototype._setValue_array_setNeedsUpdate,he.prototype._setValue_array_setMatrixWorldNeedsUpdate],[he.prototype._setValue_arrayElement,he.prototype._setValue_arrayElement_setNeedsUpdate,he.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[he.prototype._setValue_fromArray,he.prototype._setValue_fromArray_setNeedsUpdate,he.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j0=new Float32Array(1);var _c=new me,Xr=class{constructor(t,e,n=0,s=1/0){this.ray=new Fr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return _c.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_c),this}intersectObject(t,e=!0,n=[]){return Sa(t,this,n,e),n.sort(xc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sa(t[s],this,n,e);return n.sort(xc),n}};function xc(i,t){return i.distance-t.distance}function Sa(i,t,e,n){if(i.layers.test(t.layers)&&i.raycast(t,e),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Sa(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);function Vc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new gn,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in u.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(u.attributes[m]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in u.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(u.morphAttributes[m])}if(t){let m;if(e)m=u.index.count;else if(u.attributes.position!==void 0)m=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let m=i[f].index;for(let g=0;g<m.count;++g)u.push(m.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Hc(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let m=[];for(let x=0;x<a[h].length;++x)m.push(a[h][x][f]);let g=Hc(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Hc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ie(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<e;g++){let x=h.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var R0=1/16;function Ci(i){let t=i>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t%1e5/1e5)}function gs(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619);return t>>>0}var Bn={};function F0(){return Bn.solid||(Bn.solid=new wi({vertexColors:!0})),Bn.solid}function P0(){return Bn.glass||(Bn.glass=new wi({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1})),Bn.glass}function I0(){return Bn.glow||(Bn.glow=new Nn({vertexColors:!0})),Bn.glow}var $r=new Jt;function ii(i,{scale:t=R0,seed:e=1,jitter:n=.05,shadows:s=!0}={}){let r=Ci(e),a={solid:[],glass:[],glow:[]};for(let l of i){if(!l)continue;let[c,h,u,f,m,g,x,p]=l;if(f<=0||m<=0||g<=0)continue;let d=new Ei(f*t,m*t,g*t);d.translate(c*t,(h+m/2)*t,u*t),$r.set(x);let E=1+(r()*2-1)*n,y=d.attributes.position.count,C=new Float32Array(y*3);for(let I=0;I<y;I++)C[I*3]=Math.min(1,$r.r*E),C[I*3+1]=Math.min(1,$r.g*E),C[I*3+2]=Math.min(1,$r.b*E);d.setAttribute("color",new Ie(C,3)),a[p&&a[p]?p:"solid"].push(d)}let o=new Se;for(let[l,c]of Object.entries(a)){if(!c.length)continue;let h=Vc(c);c.forEach(m=>m.dispose());let u=l==="glass"?P0():l==="glow"?I0():F0(),f=new Fe(h,u);f.castShadow=s&&l!=="glass",f.receiveShadow=s,o.add(f)}return o}function Gc(i){let t=1/0,e=-1/0,n=-1/0,s=1/0,r=-1/0;for(let a of i){if(!a)continue;let[o,l,c,h,u,f]=a;t=Math.min(t,o-h/2),e=Math.max(e,o+h/2),s=Math.min(s,c-f/2),r=Math.max(r,c+f/2),n=Math.max(n,l+u)}return{w:e-t,h:n,d:r-s,x0:t,x1:e,z0:s,z1:r}}var Ri="#B9784A",we="#8A5634",L0="#D9A066",Ct="#FFFFFF",en="#F2EEE8",Ht="#2B1E3A";function On(i,t,e,n,s,r,a=1){let o=[];for(let l=0;l<n;l+=a){let c=Math.round(Math.sqrt(Math.max(.25,n*n-(l+.5)*(l+.5))));o.push([i,t,e+l+a/2,c*2,s,a,r]),o.push([i,t,e-l-a/2,c*2,s,a,r])}return o}function Fi(i,t,e,n,s,r=0){let a=[];for(let o=0;o<e;o++){let l=Math.round(Math.sqrt(Math.max(.25,e*e-(o+.5)*(o+.5))));a.push([i,t+o,r+n/2,l*2,1,n,s]),a.push([i,t-o-1,r+n/2,l*2,1,n,s])}return a}var Ia={bed:()=>[[0,0,0,22,4,34,Ri],[-10,0,-16,2,2,2,we],[10,0,-16,2,2,2,we],[-10,0,16,2,2,2,we],[10,0,16,2,2,2,we],[0,4,0,20,4,32,Ct],[0,8,5,21,2,22,"#FF8FB1"],[0,10,5,21,.6,3,"#FFC2D6"],[0,10,12,21,.6,3,"#FFC2D6"],[0,8,-11,14,3,7,"#FFF7E0"],[0,0,-17.5,22,18,2,Ri],[0,16,-17.5,18,2,2.4,L0],[0,0,17.5,22,10,2,Ri]],teddy:()=>[[0,0,0,8,7,6,"#B07A4A"],[0,1,3,5,5,1,"#E3C29B"],[-4.5,0,2,3,3,5,"#9C6A3E"],[4.5,0,2,3,3,5,"#9C6A3E"],[-5,4,0,2,4,3,"#9C6A3E"],[5,4,0,2,4,3,"#9C6A3E"],[0,7,0,8,7,7,"#B07A4A"],[-3.5,13,0,3,3,2,"#9C6A3E"],[3.5,13,0,3,3,2,"#9C6A3E"],[0,8,3.5,4,3,2,"#E3C29B"],[0,10,4.6,2,1,.6,Ht],[-2,11,3.6,1,1.2,.4,Ht],[2,11,3.6,1,1.2,.4,Ht],[0,6.5,3.2,8,1.4,1,"#FF5A5F"]],lamp:()=>[[0,0,0,8,1.5,8,"#C9A227"],[0,1.5,0,1.4,22,1.4,"#C9A227"],[0,20,0,3,3,3,"#FFF3B0","glow"],[0,22,0,10,2,10,"#FFB8D4"],[0,24,0,9,3,9,"#FFC9DC"],[0,27,0,7,2,7,"#FFD6E5"]],picture:()=>[[0,-5,.6,18,13,1.2,Ri],[0,-3.5,1.2,15,10,.6,"#BDE7FF"],[0,-3.5,1.5,15,3,.6,"#7ED957"],[-3,-.5,1.5,7,2,.6,"#5CC23A"],[4,3,1.6,3,3,.6,"#FFD43B"],[-4,3.5,1.6,4,1,.6,Ct]],clock:()=>[...Fi(0,0,6,1.5,we),...Fi(0,0,5,2,"#FFFDF5"),[0,-.5,2.3,1,4.5,.4,Ht],[1.2,-.5,2.5,3.4,1,.4,Ht],[0,4,2.2,1,1,.4,"#FF5A5F"],[0,-5,2.2,1,1,.4,Ht],[4.5,-.5,2.2,1,1,.4,Ht],[-4.5,-.5,2.2,1,1,.4,Ht]],books:()=>[[0,0,0,9,2,7,"#3FA9F5"],[4.6,.3,0,.3,1.4,6.6,en],[.5,2,.3,8,2,6,"#FF5A5F"],[4.6,2.3,.3,.3,1.4,5.6,en],[-.3,4,-.2,7,2,6,"#2EC27E"],[3.3,4.3,-.2,.3,1.4,5.6,en],[.4,6,0,6,1.6,5,"#FFD43B"]],guitar:()=>[[0,3,0,4,2,6,we],[0,0,0,12,2,6,we],[0,2,1,11,9,3,"#F08C3A"],[0,11,1,8,5,3,"#F08C3A"],[0,5,2.6,4,4,.4,Ht],[0,16,1,2.4,13,1.6,we],[0,29,1,3.4,4,1.8,Ht],[0,3,2.6,4,1,.5,we],[0,4,2.7,.3,26,.2,"#EEE"]],game:()=>[[0,0,0,12,26,10,"#6C4CF0"],[-6.3,0,0,.8,26,10.2,"#FF5C9A"],[6.3,0,0,.8,26,10.2,"#FF5C9A"],[0,16,5.1,10,7,.4,"#1B1530"],[0,17,5.4,8,5,.3,"#5CE1E6","glow"],[-1,18,5.6,2,2,.2,"#FFD43B","glow"],[2,20,5.6,1,1,.2,"#FF5A5F","glow"],[0,11,6.5,12,2,4,"#3A2A8C"],[-3,13,7,1,2.5,1,Ht],[-3,15.5,7,2,1.5,2,"#FF5A5F"],[2,13,7.5,1.6,.8,1.6,"#FFD43B"],[4.2,13,7.5,1.6,.8,1.6,"#2EC27E"],[0,23.5,5.1,10,2,.5,"#FFD43B","glow"]],unicorn:()=>[[-3.5,0,-6,2.5,9,2.5,Ct],[3.5,0,-6,2.5,9,2.5,Ct],[-3.5,0,6,2.5,9,2.5,Ct],[3.5,0,6,2.5,9,2.5,Ct],[-3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[-3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[0,8,0,9,7,16,Ct],[0,13,8.5,6,9,5,Ct],[0,18,11.5,6,6,9,Ct],[0,18,16.5,5,4,2,"#FFE3EE"],[-3.1,21,13,.4,1.5,1.5,Ht],[3.1,21,13,.4,1.5,1.5,Ht],[-2,24,10,1.5,2.5,1.5,Ct],[2,24,10,1.5,2.5,1.5,Ct],[0,24,13,2,3,2,"#FFD43B"],[0,27,13.3,1.2,3,1.2,"#FFE680"],[0,22,8.5,2,3,3,"#FF5C9A"],[0,19,6.5,2,3,3,"#FFB13B"],[0,16,5,2,3,3,"#FFD43B"],[0,13,3.8,2,3,2.5,"#2EC27E"],[0,23.5,11,2,2,3,"#3FA9F5"],[0,11,-8.5,2,3,2,"#FF5C9A"],[0,7,-9.5,2,4,2,"#8E6CFF"],[0,4,-10,2,3,2,"#3FA9F5"]],chair:()=>[[-4.5,0,-4.5,1.5,8,1.5,we],[4.5,0,-4.5,1.5,8,1.5,we],[-4.5,0,4.5,1.5,8,1.5,we],[4.5,0,4.5,1.5,8,1.5,we],[0,8,0,11,1.5,11,Ri],[0,9.5,.5,9,1,9,"#FF8FB1"],[-4.5,9.5,-4.8,1.5,10,1.5,we],[4.5,9.5,-4.8,1.5,10,1.5,we],[0,15,-4.8,9,4,1.2,Ri]],plates:()=>[[0,0,0,7,.8,7,"#E8E3DA"],[0,.8,0,9,.6,9,Ct],[0,1.4,0,7,.8,7,"#E8E3DA"],[0,2.2,0,9,.6,9,Ct],[0,2.8,0,7,.8,7,"#E8E3DA"],[0,3.6,0,9,.6,9,Ct],[0,4.2,0,7,.1,7,"#9FD8F5"],[6,0,0,.8,.5,6,"#BFC4CC"],[-6,0,0,.8,.5,6,"#BFC4CC"]],pizza:()=>[...On(0,0,0,6,1.2,"#E0A458"),...On(0,1.2,0,5,.5,"#E8473C"),...On(0,1.5,0,4.5,.4,"#FFE08A"),[-2,1.9,-2,2,.5,2,"#B3261E"],[2.5,1.9,-1,2,.5,2,"#B3261E"],[0,1.9,2.5,2,.5,2,"#B3261E"],[-2.5,1.9,2,1,.4,1,"#2EC27E"],[2,1.9,2.5,1,.4,1,"#2EC27E"]],cake:()=>[[0,0,0,12,1,12,"#E8E3DA"],[0,1,0,10,4,10,"#FFC2D6"],[0,4,0,10.4,1,10.4,Ct],[0,5,0,7,3.5,7,"#FFE3EE"],[0,8,0,7.4,.8,7.4,Ct],[-2,8.8,0,.8,3,.8,"#3FA9F5"],[0,8.8,0,.8,3,.8,"#FFD43B"],[2,8.8,0,.8,3,.8,"#2EC27E"],[-2,11.8,0,.6,1,.6,"#FFB13B","glow"],[0,11.8,0,.6,1,.6,"#FFB13B","glow"],[2,11.8,0,.6,1,.6,"#FFB13B","glow"],[-5,3,5.1,1,1,.4,"#FF5A5F"],[-1.5,3,5.1,1,1,.4,"#FF5A5F"],[2,3,5.1,1,1,.4,"#FF5A5F"],[4.5,3,5.1,1,1,.4,"#FF5A5F"]],teapot:()=>[[0,0,0,6,1,6,"#3FA9F5"],[0,1,0,8,5,8,"#5CC0F7"],[0,6,0,6,1,6,"#3FA9F5"],[0,7,0,2,1.2,2,Ct],[5,2.5,0,3,1.5,1.5,"#5CC0F7"],[6.8,3.5,0,1.5,2.5,1.5,"#5CC0F7"],[-5,2,0,1.5,4,1.5,"#3FA9F5"],[-4.5,5.5,0,2,1,1.5,"#3FA9F5"],[0,3,4.1,2,2,.4,Ct]],watermelon:()=>[[0,0,0,10,3,8,"#2E8B3A"],[0,3,0,10,1,8,"#9BE07A"],[0,3,0,9,2.5,7,"#FF5A6E"],[0,5.5,0,7,1,5,"#FF5A6E"],[-2.5,5.6,1,.8,1,.8,Ht],[0,6.6,0,.8,.6,.8,Ht],[2.5,5.6,-1,.8,1,.8,Ht],[1,5,2.8,.8,.8,.8,Ht],[-4,.5,4.05,1,2,.2,"#1E6B2A"],[0,.5,4.05,1,2,.2,"#1E6B2A"],[4,.5,4.05,1,2,.2,"#1E6B2A"]],candy:()=>[[0,0,0,3,1,3,"#E8E3DA"],[0,1,0,.8,8,.8,Ct],...Fi(0,13.5,4.5,1.4,"#FF5C9A",-.7),...Fi(0,13.5,3.2,1.6,"#FFD43B",-.8),...Fi(0,13.5,1.8,1.8,"#3FA9F5",-.9)],cupcake:()=>[[0,0,0,5,3.5,5,"#5CC0F7"],[-2.6,0,0,.2,3.5,5,"#3FA9F5"],[2.6,0,0,.2,3.5,5,"#3FA9F5"],[0,3.5,0,6,2,6,"#FFC2D6"],[0,5.5,0,4.5,1.5,4.5,"#FFC2D6"],[0,7,0,3,1,3,"#FFE3EE"],[0,8,0,1.6,1.6,1.6,"#E8473C"],[.3,9.6,0,.3,1.2,.3,"#2E8B3A"],[-2,5.5,2.3,.6,.4,.6,"#FFD43B"],[1.5,6,2,.6,.4,.6,"#2EC27E"],[2.4,5.6,-1,.6,.4,.6,"#8E6CFF"]],candle:()=>[[0,-3,.5,7,1.5,1,"#C9A227"],[0,-4.5,3,6,1.5,5,"#C9A227"],[0,-3,3,2.5,6,2.5,"#FFF7E0"],[0,3,3,.4,.8,.4,Ht],[0,3.6,3,1.4,2.2,1.4,"#FFB13B","glow"],[0,4.2,3,.7,1.2,.7,"#FFF3B0","glow"]],sofa:()=>[[0,0,0,38,2,14,we],[0,2,0,36,5,14,"#2BB5A5"],[-8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[0,7,-5.5,36,10,3,"#2BB5A5"],[-8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[-18.5,2,0,3,10,14,"#239A8C"],[18.5,2,0,3,10,14,"#239A8C"],[-11,9.5,2,5,5,2,"#FFD43B"],[11,9.5,2,5,5,2,"#FF8FB1"]],tv:()=>[[0,0,0,26,7,9,Ri],[-6.5,1.5,4.6,11,4,.4,we],[6.5,1.5,4.6,11,4,.4,we],[0,7,-1,4,2,3,"#333"],[0,9,-1,24,15,2,"#222"],[0,10,.05,22,13,.2,"#3FA9F5","glow"],[0,10,.2,22,4,.2,"#7ED957","glow"],[5,18,.2,4,4,.2,"#FFD43B","glow"],[-5,17,.2,7,2,.2,Ct,"glow"]],piano:()=>[[0,0,0,30,20,9,"#1F1A2B"],[0,20,-1,31,1.5,10,"#2C2540"],[0,10,6,30,2,5,"#1F1A2B"],[0,12,6,28,1,4.5,Ct],...[-12,-9,-4,-1,2,7,10].map(i=>[i,13,5,1,.8,2.5,Ht]),[-13,0,6,2,10,2,"#1F1A2B"],[13,0,6,2,10,2,"#1F1A2B"],[0,14,4.6,10,5,.5,"#C9A227"],[0,0,15,12,6,6,we],[0,6,15,13,1.5,7,"#E8473C"]],plant:()=>[[0,0,0,7,6,7,"#D9744A"],[0,6,0,8,1.5,8,"#E88A5E"],[0,7,0,7,.4,7,"#6B4426"],[0,7,0,1.5,8,1.5,"#3E8E41"],[-3,10,0,5,3,3,"#4CB050"],[3,12,1,5,3,3,"#5CC23A"],[0,15,-2,4,4,4,"#4CB050"],[-1,17,2,3,3,3,"#7ED957"],[2,9,-2,3,2,3,"#7ED957"]],rainbow:()=>{let i=["#FF5A5F","#FF9F43","#FFD43B","#2EC27E","#3FA9F5","#8E6CFF"],t=[];return i.forEach((e,n)=>{let s=13-n*1.6;for(let r=0;r<12;r++){let a=(r+.5)/12*Math.PI;t.push([Math.cos(a)*s,Math.sin(a)*s-6,.8,3.2,2,1.6,e])}}),t.push([-12,-8,1.5,6,3,2,Ct],[-14,-7,1.5,4,3,2,Ct],[12,-8,1.5,6,3,2,Ct],[14,-7,1.5,4,3,2,Ct]),t},puzzle:()=>[[-3,0,-3,6,1,6,"#FF5A5F"],[3,0,-3,6,1,6,"#3FA9F5"],[-3,0,3,6,1,6,"#FFD43B"],[3,0,3,6,1,6,"#2EC27E"],[0,0,-3,1.6,1,2,"#FF5A5F"],[-3,0,0,2,1,1.6,"#FFD43B"],[3,0,0,2,1,1.6,"#3FA9F5"],[0,0,3,1.6,1,2,"#2EC27E"],[9,0,4,5,1,5,"#8E6CFF"],[8,0,1.2,1.6,1,1.6,"#8E6CFF"]],cat:()=>Pa({body:"#FF9F43",light:"#FFE0B8",ears:!0}),dog:()=>Pa({body:"#E0B070",light:"#FFF1DC",flop:"#8A5634"}),bathtub:()=>[[-13,0,-6,2,2,2,"#C9A227"],[13,0,-6,2,2,2,"#C9A227"],[-13,0,6,2,2,2,"#C9A227"],[13,0,6,2,2,2,"#C9A227"],[0,2,0,32,2,17,Ct],[0,4,-7.5,32,7,2,Ct],[0,4,7.5,32,7,2,Ct],[-15,4,0,2,7,13,Ct],[15,4,0,2,7,13,Ct],[0,4,0,28,5,13,"#7FD0FF"],[-6,9,-2,4,2,4,"#FFFFFF"],[-3,9,2,3,3,3,"#F4FBFF"],[4,9,-1,5,2,4,"#FFFFFF"],[8,9,3,3,2,3,"#F4FBFF"],[14,11,-7,1.4,6,1.4,"#C0C7D1"],[12.5,16,-7,4,1.4,1.4,"#C0C7D1"]],toilet:()=>[[0,0,1,7,6,7,Ct],[0,6,1.5,10,2,11,en],[0,8,1.5,10,.8,11,"#9FD8F5"],[0,6,-5,11,12,4,Ct],[0,18,-5,12,1.4,5,en],[3.5,15,-2.7,2,1,.8,"#C0C7D1"]],mirror:()=>[...Fi(0,0,8,1,"#C9A227"),...Fi(0,0,7,1.4,"#CFEFFF"),[-2,2,1.5,1,3,.2,Ct,"glow"],[-1,4,1.5,1,1,.2,Ct,"glow"]],soap:()=>[[0,0,0,7,.8,5,"#9FD8F5"],[0,.8,0,5,2.5,3.5,"#FF8FB1"],[-2,3.3,0,2,2,2,"#F4FBFF","glass"],[1,3.6,1,1.4,1.4,1.4,"#F4FBFF","glass"],[2,5,-1,1,1,1,"#F4FBFF","glass"]],duck:()=>[[0,0,0,7,4,8,"#FFD43B"],[0,3,-3.5,4,3,2,"#FFD43B"],[0,4,2.5,5,5,5,"#FFD43B"],[0,5.5,5.5,3,1.4,2.4,"#FF9F43"],[-2.6,7,3.5,.4,1.2,1.2,Ht],[2.6,7,3.5,.4,1.2,1.2,Ht],[-3.6,1,0,.5,2.5,4,"#F5C518"],[3.6,1,0,.5,2.5,4,"#F5C518"]],toothbrush:()=>[[0,0,0,4,6,4,"#8E6CFF"],[0,6,0,4.4,.6,4.4,"#A88BFF"],[-.8,4,0,.8,9,.8,"#3FA9F5"],[-.8,13,.5,.9,2,1.6,Ct],[.8,4,.3,.8,8,.8,"#FF5C9A"],[.8,12,.8,.9,2,1.6,Ct],[5,0,1,2,1,6,Ct],[5,1,-1,2,1,2,"#3FA9F5"]],lotion:()=>[[0,0,0,4,8,3,"#FF8FB1"],[0,2,1.55,3,3,.2,Ct],[0,8,0,1.6,1.4,1.6,Ct],[0,9.4,0,1,1.6,1,Ct],[1,10.4,0,2.4,.8,1,Ct]],sponge:()=>[[0,0,0,7,3,5,"#FFD43B"],[0,3,0,7,1.2,5,"#2EC27E"],[-2,1.2,2.55,.8,.8,.2,"#E8B800"],[1.5,.8,2.55,.8,.8,.2,"#E8B800"],[2.5,2,2.55,.6,.6,.2,"#E8B800"]],tree:()=>[[0,0,0,5,20,5,"#8A5634"],[0,0,0,7,2,7,"#6E4228"],[0,16,0,22,8,22,"#3E9B45"],[0,24,0,18,6,18,"#4CB050"],[0,30,0,10,4,10,"#5CC23A"],[-11.3,19,3,1.2,2,2,"#E8473C"],[6,18,11.3,2,2,1.2,"#E8473C"],[11.3,21,-4,1.2,2,2,"#E8473C"],[-3,25,9.3,2,2,1.2,"#E8473C"],[-4,19,-11.3,2,2,1.2,"#E8473C"]],flower:()=>[[0,0,0,1.2,14,1.2,"#3E8E41"],[-2,5,0,3,1,2,"#4CB050"],[2,8,0,3,1,2,"#4CB050"],[0,13,.5,9,9,1.5,"#FFD43B"],[0,15,1.3,4,5,1,"#8A5634"],[0,12,.5,4,1,1.4,"#FFB13B"],[0,22,.5,4,1,1.4,"#FFB13B"],[-5,15,.5,1,4,1.4,"#FFB13B"],[5,15,.5,1,4,1.4,"#FFB13B"]],tulips:()=>[[0,0,0,12,1,8,"#6B4426"],...[[-4,"#FF5C9A",9],[0,"#FF5A5F",12],[4,"#FFD43B",10]].flatMap(([i,t,e])=>[[i,1,0,.8,e,.8,"#3E8E41"],[i-1,2,.5,1,4,2,"#4CB050"],[i,1+e,0,3,3,3,t],[i-1,4+e,0,1,1,3,t],[i+1,4+e,0,1,1,3,t]])],mushroom:()=>[[0,0,0,4,6,4,"#FFF7E0"],[0,6,0,11,3,11,"#E8473C"],[0,9,0,7,2,7,"#E8473C"],[-3,8.5,5.6,2,1.5,.3,Ct],[3,7,5.6,1.5,1.5,.3,Ct],[0,11,0,2,.3,2,Ct],[5.6,7.5,1,.3,1.5,2,Ct],[-5.6,7.5,-2,.3,1.5,2,Ct]],ball:()=>{let i=[];for(let e=0;e<2*4;e++){let n=Math.sqrt(Math.max(.5,16-(e+.5-4)*(e+.5-4)));i.push(...On(0,e,0,n,1,Ct,.5))}return i.push([0,3,3.95,2.4,2,.4,Ht],[3.95,3,0,.4,2,2.4,Ht],[0,3,-3.95,2.4,2,.4,Ht],[-3.95,3,0,.4,2,2.4,Ht],[0,7.8,0,2.4,.4,2.4,Ht],[2.6,5.6,2.6,1.4,1.2,1.4,Ht],[-2.6,5.6,-2.6,1.4,1.2,1.4,Ht],[2.6,1.2,-2.6,1.4,1.2,1.4,Ht],[-2.6,1.2,2.6,1.4,1.2,1.4,Ht]),i},butterfly:()=>[[0,-1,0,1,1,6,Ht],[-3,-.5,-1,5,.6,5,"#FF5C9A"],[3,-.5,-1,5,.6,5,"#FF5C9A"],[-2.5,-.5,3,4,.6,3,"#8E6CFF"],[2.5,-.5,3,4,.6,3,"#8E6CFF"],[-3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[-.7,0,-3.5,.3,.3,2,Ht],[.7,0,-3.5,.3,.3,2,Ht]],bee:()=>[[0,-2,0,4,4,6,"#FFD43B"],[0,-2.1,-.5,4.2,4.2,1,Ht],[0,-2.1,1.8,4.2,4.2,1,Ht],[0,-1.5,-3.8,3,3,2,Ht],[-.8,-.5,-4.85,.5,.8,.3,Ct],[.8,-.5,-4.85,.5,.8,.3,Ct],[-2.5,2,0,3,.4,3,"#E6F6FF","glass"],[2.5,2,0,3,.4,3,"#E6F6FF","glass"],[0,-1,3.5,1,1,1.5,Ht]],bunny:()=>Pa({body:"#F2EEE8",light:"#FFFFFF",bunny:!0}),goal:()=>{let i="#E9EEF2",s=[[-20,0,6,2,20,2,Ct],[20,0,6,2,20,2,Ct],[0,18,6,42,2,2,Ct],[-20,0,-7,1.4,19,1.4,en],[20,0,-7,1.4,19,1.4,en],[0,18,-7,40,1.4,1.4,en],[-20,18,0,1.4,1.4,14,en],[20,18,0,1.4,1.4,14,en],[0,0,-7,40,.8,1.4,en],[-20,0,0,1.4,.8,14,en],[20,0,0,1.4,.8,14,en],[0,0,-7.2,40,18,.2,"#FFFFFF","glass"],[0,18.8,0,40,.2,14,"#FFFFFF","glass"],[-20,0,0,.2,18,14,"#FFFFFF","glass"],[20,0,0,.2,18,14,"#FFFFFF","glass"]];for(let r=-16;r<20;r+=4)s.push([r,0,-7,.3,18,.3,i],[r,20-1.5,0,.3,.3,2*7,i]);for(let r=3;r<18;r+=3)s.push([0,r,-7,2*20,.3,.3,i],[-20,r,0,.3,.3,2*7,i],[20,r,0,.3,.3,2*7,i]);for(let r=-7+3.5;r<7;r+=3.5)s.push([-20,0,r,.3,18,.3,i],[20,0,r,.3,18,.3,i],[0,20-1.5,r,2*20,.3,.3,i]);return s},hoop:()=>{let i="#FF7A1A",t="#F4F4F4",s=[[0,0,-5,11,3,9,"#3A3F4B"],[0,3,-5,9,1,7,"#4A5160"],[0,4,-5,2.6,34,2.6,"#7A8494"],[0,35,-3,2,2,5,"#7A8494"],[0,29,-.5,22,15,1.2,Ct],[0,29,.2,22,.8,.4,"#3FA9F5"],[0,43.2,.2,22,.8,.4,"#3FA9F5"],[-10.6,29,.2,.8,15,.4,"#3FA9F5"],[10.6,29,.2,.8,15,.4,"#3FA9F5"],[0,33,.3,8,.8,.4,"#E8473C"],[0,39,.3,8,.8,.4,"#E8473C"],[-3.6,33,.3,.8,6.8,.4,"#E8473C"],[3.6,33,.3,.8,6.8,.4,"#E8473C"],[0,32.5,1.4,2,1.2,1.6,i],[0,33,2.5,8,.8,.8,i],[0,33,10.5,8,.8,.8,i],[-4,33,6.5,.8,.8,8,i],[4,33,6.5,.8,.8,8,i]];for(let r=0;r<3;r++){let a=31-r*2,o=2,l=3.6-r*.6;for(let c of[-l,0,l])s.push([c,a,6.5-l,.3,o,.3,t],[c,a,6.5+l,.3,o,.3,t],[-l,a,6.5+c,.3,o,.3,t],[l,a,6.5+c,.3,o,.3,t]);s.push([0,a,6.5-l,2*l,.3,.3,t],[0,a,6.5+l,2*l,.3,.3,t],[-l,a,6.5,.3,.3,2*l,t],[l,a,6.5,.3,.3,2*l,t])}return s.push([8,0,3,6,6,6,"#F08C3A"],[8,2.75,3,6.2,.5,6.2,Ht],[8,0,3,.5,6.1,6.2,Ht],[8,0,3,6.2,6.1,.5,Ht]),s},fountain:()=>[...On(0,0,0,16,2,"#A9B1BC"),...On(0,2,0,16,3,"#C0C7D1"),...On(0,3,0,14,2.4,"#5CC0F7"),[0,5,0,4,10,4,"#C0C7D1"],...On(0,13,0,7,2,"#C0C7D1"),...On(0,14,0,6,1.4,"#5CC0F7"),[0,15,0,1.6,7,1.6,"#BDE7FF","glass"],[0,21,0,4,1.5,4,"#BDE7FF","glass"],[4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[-4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[0,12,4,1.2,3,1.2,"#BDE7FF","glass"],[0,12,-4,1.2,3,1.2,"#BDE7FF","glass"]]};function Pa({body:i,light:t,ears:e,flop:n,bunny:s}){let r=[[0,0,-1,7,6,9,i],[0,0,2.5,5,4,2,t],[-2.5,0,4,2,2,2,i],[2.5,0,4,2,2,2,i],[0,5,3.5,7,6,6,i],[0,5.6,6.5,4,2.6,1.4,t],[0,7.2,7.2,1.4,1,.4,s?"#FF8FB1":Ht],[-2,8.6,6.55,1,1.4,.4,Ht],[2,8.6,6.55,1,1.4,.4,Ht]];return e&&r.push([-2.5,11,3.5,2,2,2,i],[2.5,11,3.5,2,2,2,i],[-2.5,11,4.5,1,1,.2,"#FF8FB1"],[2.5,11,4.5,1,1,.2,"#FF8FB1"]),n&&r.push([-4,6.5,3.5,1.4,5,3,n],[4,6.5,3.5,1.4,5,3,n]),s&&r.push([-1.6,11,3,1.6,6,1.4,i],[1.6,11,3,1.6,6,1.4,i],[-1.6,12,3.75,.8,4,.2,"#FF8FB1"],[1.6,12,3.75,.8,4,.2,"#FF8FB1"]),s?r.push([0,2,-6,3,3,2,t]):r.push([0,1,-6,1.6,1.6,3,i],[0,2,-7.5,1.6,5,1.6,i],[0,7,-7.5,1.6,1.6,1.6,t]),r}var zn={picture:{wall:!0},clock:{wall:!0},candle:{wall:!0},rainbow:{wall:!0},mirror:{wall:!0},butterfly:{fly:!0},bee:{fly:!0},teddy:{small:!0},books:{small:!0},plates:{small:!0},pizza:{small:!0},cake:{small:!0},teapot:{small:!0},watermelon:{small:!0},candy:{small:!0},cupcake:{small:!0},soap:{small:!0},duck:{small:!0},toothbrush:{small:!0},lotion:{small:!0},sponge:{small:!0},puzzle:{},ball:{}};var jt={fair:"#FCE0C8",light:"#F6D2B0",tan:"#E3B58C",brown:"#C68B59",dark:"#8D5A3B"},te="#2B1E3A",oe="#FFFFFF",ne="#FFD43B",Hs="#E8B800",D0="rgba(255,120,160,0.55)",U0={1:["010","110","010","010","111"],0:["111","101","101","101","111"],7:["111","001","010","010","010"]};function Kr(i,t,e,n=1.5,s=.75){let r=[],a=i.length*4*s-s;return i.split("").forEach((o,l)=>{U0[o].forEach((c,h)=>{c.split("").forEach((u,f)=>{u==="1"&&r.push([-a/2+(l*4+f+.5)*s,n+(4-h)*s,e,s,s,.3,t])})})}),r}var bn=(i,t,e,n=ne,s=1)=>[[i,t,e,1*s,3*s,.3,n],[i,t+1*s,e,3*s,1*s,.3,n]];function N0(i,t){if(i==="none")return[];let e=[[0,8.5,0,10.8,2.6,10.8,t],[0,2.5,-5.2,10.8,7,1,t],[5.2,4.5,-.5,.8,5,9.6,t],[-5.2,4.5,-.5,.8,5,9.6,t]];return(i==="long"||i==="longbow")&&e.push([0,-6,-5.6,11,9,1.8,t],[5.4,-2,-1,1.2,7,8,t],[-5.4,-2,-1,1.2,7,8,t]),i==="buns"&&e.push([4.6,9,-1,4,4,4,t],[-4.6,9,-1,4,4,4,t]),i==="bun"&&e.push([0,10.6,-1.5,4.5,3.5,4.5,t]),i==="ponytail"&&e.push([0,4,-6.5,3.2,5,2.6,t],[0,-1,-6.8,2.6,5,2.2,t]),i==="pigtails"&&e.push([6.4,2.5,-1.5,2.6,5,2.6,t],[-6.4,2.5,-1.5,2.6,5,2.6,t]),e}function B0(i,t,e){let n=(r,a,o=1,l=1)=>i.fillRect(r,a,o,l);i.clearRect(0,0,20,20),i.fillStyle=t.faceColor||t.skin,n(0,0,20,20),t.mask&&(i.fillStyle=t.mask,n(0,0,20,7),n(0,14,20,6)),t.fringe!==!1&&t.hair&&t.style!=="none"&&(i.fillStyle=t.hair,n(0,0,20,3),t.fringe==="side"?(n(0,3,9,2),n(0,5,4,1)):(n(0,3,6,1),n(12,3,8,2)),(t.style==="long"||t.style==="longbow")&&(n(0,0,2,13),n(18,0,2,13)));let s=t.eye||te;i.fillStyle=s,e==="sleepy"?(n(4,11,4,1),n(12,11,4,1)):e==="cheer"?(n(4,11),n(5,10),n(6,10),n(7,11),n(12,11),n(13,10),n(14,10),n(15,11)):(n(5,9,2,3),n(13,9,2,3),i.fillStyle=oe,n(5,9),n(13,9)),t.glasses&&(i.fillStyle=t.glasses,n(3,8,6,1),n(3,12,6,1),n(3,8,1,5),n(8,8,1,5),n(11,8,6,1),n(11,12,6,1),n(11,8,1,5),n(16,8,1,5),n(9,9,2,1)),t.mask||(i.fillStyle=D0,n(2,13,3,2),n(15,13,3,2)),t.animal&&(i.fillStyle=t.nose||"#FF7AA2",n(9,12,2,1)),t.whiskers&&(i.fillStyle=te,n(0,13,4,1),n(16,13,4,1),n(1,15,3,1),n(16,15,3,1)),!t.mask&&(e==="cheer"?(i.fillStyle="#9B2335",n(8,14,4,3),i.fillStyle="#FF8FB1",n(9,16,2,1)):e==="sleepy"?(i.fillStyle="#9B2335",n(9,15,2,1)):(i.fillStyle="#9B2335",n(8,15,4,1),n(7,14),n(12,14)),t.faceExtra&&t.faceExtra(i,n))}var Gt=i=>i,La={boni:Gt({animal:"bunny",fur:"#D9CCFF",light:"#F1ECFF",skin:"#E6DCFF",extra:i=>{i.body.push([0,6.5,0,9.8,1.8,5.8,"#2EC27E"],[2.5,2.5,2.9,2.2,4,.8,"#2EC27E"]),i.head.push([3.6,9.5,2.5,3,1.5,.6,"#FF8FB1"])}}),bobi:Gt({animal:"bunny",fur:"#A9C4F5",light:"#E2ECFF",skin:"#B9D0F8",extra:i=>{i.head.push([0,8.8,0,10.8,2.4,10.8,"#FF5A5F"],[0,8.8,6.5,9,.8,4,"#FF5A5F"],[0,11.2,0,1.4,1,1.4,ne]),i.body.push([0,7,0,9.6,1.2,5.6,"#2EC27E"])}}),mika:Gt({skin:jt.light,hair:"#6B3E26",style:"buns",shirt:"#8E6CFF",pants:"#4A3A8C",shoes:"#FF5C9A",extra:i=>{i.body.push([0,6,2.6,3,1,.3,oe],[-1,5,2.6,1,1,.3,oe],[1,5,2.6,1,1,.3,oe]),i.head.push(...bn(3.5,8.5,5.5))}}),noam:Gt({skin:jt.light,hair:"#6B3E26",style:"short",shirt:"#2EC27E",pants:"#3A3F6B",shoes:"#FF5A5F",fringe:!1,extra:i=>{i.head.push([0,8.5,0,10.8,2.8,10.8,"#3FA9F5"],[0,8.5,6.5,9,.8,4,"#3FA9F5"]),i.body.push(...bn(0,3,2.6))}}),pitzi:Gt({animal:"cat",fur:"#FFB0CF",light:"#FFE3EE",whiskers:!0}),shoko:Gt({animal:"cat",fur:"#8DB8F0",light:"#E2EEFF",whiskers:!0,extra:i=>{i.body.push([0,7,0,9.6,1.2,5.6,"#FF5A5F"])}}),chip:Gt({animal:"dog",fur:"#C98A55",light:"#F3D9B8",ears:"#7A4A2A",extra:i=>{i.body.push([0,7,0,9.6,1.2,5.6,"#3FA9F5"],[0,5.8,2.9,1.4,1.4,.6,ne])}}),lola:Gt({animal:"dog",fur:"#F3E2C3",light:"#FFF6E8",ears:"#D9A86A",extra:i=>{i.body.push([0,7,0,9.6,1.2,5.6,"#FF5C9A"]),i.head.push([0,10,0,2,1.5,1.5,"#FF5C9A"],[-1.8,10,0,1.8,2,1.5,"#FF5C9A"],[1.8,10,0,1.8,2,1.5,"#FF5C9A"])}}),kangi:Gt({animal:"kangaroo",fur:"#D4A373",light:"#F1D6B0",gloves:"#FF5A5F"}),roni:Gt({animal:"kangaroo",fur:"#C99366",light:"#EED2AE",gloves:"#9B7BFF",baby:!0,extra:i=>{i.head.push([-1.8,10,0,1.8,2,1.5,"#9B7BFF"],[1.8,10,0,1.8,2,1.5,"#9B7BFF"],[0,10,0,1.6,1.6,1.6,"#9B7BFF"])}}),blocky:Gt({skin:jt.light,hair:"#3A2A4D",style:"long",shirt:"#FF5C9A",pants:"#3A2A4D",shoes:"#8E6CFF",extra:i=>{i.body.push(...bn(0,3,2.6)),i.head.push([4,8.5,4,2.4,2.4,2.4,"#8E6CFF"])}}),kubi:Gt({skin:jt.light,hair:"#8B5A2B",style:"short",shirt:"#2EC27E",pants:"#2F4A9C",shoes:"#2B1E3A",extra:i=>{i.body.push([0,3,2.6,2.5,2.5,.3,ne])}}),astro:Gt({skin:jt.fair,hair:"#6B3E26",style:"short",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#8E6CFF",helmet:"#FFFFFF",extra:i=>qc(i,"#FF5A5F")}),astro_g:Gt({skin:jt.fair,hair:"#C0452B",style:"long",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#FF5C9A",helmet:"#FFFFFF",extra:i=>qc(i,"#8E6CFF")}),goli:Gt({skin:jt.light,hair:"#2B1E14",style:"short",shirt:"#2EC27E",pants:oe,shoes:te,extra:i=>{i.body.push(...Kr("10",oe,2.65)),i.root.push(...Wc(6,0,4))}}),goli_g:Gt({skin:jt.light,hair:"#6B3E26",style:"pigtails",shirt:"#8E6CFF",pants:oe,shoes:te,extra:i=>{i.body.push(...Kr("10",oe,2.65)),i.head.push([6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"],[-6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"]),i.root.push(...Wc(6,0,4))}}),sali:Gt({skin:jt.brown,hair:"#2B1E14",style:"short",shirt:"#FF9F43",pants:"#FF9F43",shoes:oe,extra:i=>{i.head.push([0,6.6,0,10.6,1.4,10.6,"#FF5A5F"]),i.body.push(...Kr("7",oe,2.65)),i.armR.push(...Xc(0,-13.5,0))}}),sali_g:Gt({skin:jt.dark,hair:"#1E140E",style:"bun",shirt:"#3FA9F5",pants:"#3FA9F5",shoes:oe,extra:i=>{i.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"]),i.body.push(...Kr("7",oe,2.65)),i.armR.push(...Xc(0,-13.5,0))}}),ginga:Gt({skin:jt.tan,hair:"#2B1E14",style:"short",shirt:"#3FA9F5",pants:"#F4F4F8",shoes:jt.tan,extra:i=>{i.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"],[-4,6,-6,1.5,1.5,2,"#2EC27E"],[-4.6,4,-6.4,1,2.5,1,"#2EC27E"]),i.body.push([0,0,0,9.4,1.2,5.4,ne],[2,-2,2.8,1,2.5,.6,ne])}}),ginga_g:Gt({skin:jt.tan,hair:"#2B1E14",style:"ponytail",shirt:ne,pants:"#F4F4F8",shoes:jt.tan,extra:i=>{i.head.push([0,6.6,0,10.6,1.4,10.6,"#FF9F43"]),i.body.push([0,0,0,9.4,1.2,5.4,"#FF9F43"],[2,-2,2.8,1,2.5,.6,"#FF9F43"])}}),turbo:Gt({skin:jt.light,hair:"#C0452B",style:"none",shirt:"#2E2440",pants:"#3A3F6B",shoes:te,fringe:!1,extra:i=>Yc(i,"#FF5A5F")}),turbo_g:Gt({skin:jt.light,hair:"#FF5C9A",style:"long",shirt:"#8E6CFF",pants:"#3A2A4D",shoes:te,extra:i=>Yc(i,"#FF5C9A")}),ninja:Gt({skin:jt.light,style:"none",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:"#1E4F8C",faceColor:jt.light,mask:"#2F7BD6",headColor:"#2F7BD6",extra:i=>Zc(i,ne)}),ninja_g:Gt({skin:jt.light,style:"none",shirt:"#D63B3B",pants:"#D63B3B",shoes:"#8C1E1E",faceColor:jt.light,mask:"#D63B3B",headColor:"#D63B3B",extra:i=>Zc(i,oe)}),wizard_b:Gt({skin:jt.light,hair:"#8B5A2B",style:"short",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:te,extra:i=>Jc(i,"#2F7BD6")}),wizard_g:Gt({skin:jt.light,hair:"#F2C14E",style:"long",shirt:"#8E6CFF",pants:"#8E6CFF",shoes:te,extra:i=>Jc(i,"#8E6CFF")}),dancer_b:Gt({skin:jt.brown,hair:"#2B1E14",style:"short",shirt:"#2B2B35",pants:"#3FA9F5",shoes:oe,fringe:!1,extra:i=>{i.head.push([0,8.5,0,10.8,2.8,10.8,"#FF5A5F"],[0,8.5,-6.5,9,.8,4,"#FF5A5F"]);for(let t=0;t<5;t++)i.body.push([-3+t*1.5,1.5+t*1.2,2.65,1.6,1.2,.3,ne])}}),dancer_g:Gt({skin:jt.tan,hair:"#2B1E14",style:"bun",shirt:"#FF9EC4",pants:"#FFD1E3",shoes:"#FF5C9A",extra:i=>{i.body.push([0,-1,0,13,2.4,9,"#FFB8D4"],[0,.5,0,11.5,1.2,8,"#FFD1E3"]),i.head.push([0,14,-1.5,3,1.6,1.6,"#FF5C9A"],[-1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"],[1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"])}}),builder_b:Gt({skin:jt.light,hair:"#8B5A2B",style:"short",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:i=>$c(i)}),builder_g:Gt({skin:jt.light,hair:"#8B5A2B",style:"long",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:i=>$c(i)}),teacher_b:Gt({skin:jt.light,hair:"#6B3E26",style:"short",shirt:"#9C9AC0",pants:"#3A3F6B",shoes:te,glasses:te,extra:i=>{i.body.push([0,4,2.6,1.2,4,.3,"#3FA9F5"]),i.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,oe])}}),teacher_g:Gt({skin:jt.light,hair:"#8B5A2B",style:"long",shirt:"#2EC27E",pants:"#3A3F6B",shoes:te,glasses:te,extra:i=>{i.body.push([0,6,2.6,3,1.2,.3,oe]),i.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,oe])}}),police_b:Gt({skin:jt.light,hair:"#2B1E14",style:"short",shirt:"#2F5DA8",pants:"#24325E",shoes:te,fringe:!1,extra:i=>Kc(i)}),police_g:Gt({skin:jt.brown,hair:"#2B1E14",style:"long",shirt:"#2F5DA8",pants:"#24325E",shoes:te,fringe:!1,extra:i=>Kc(i)}),fire_b:Gt({skin:jt.light,hair:"#6B3E26",style:"short",shirt:"#2B2B35",pants:"#2B2B35",shoes:te,fringe:!1,extra:i=>jc(i)}),fire_g:Gt({skin:jt.light,hair:"#C0452B",style:"long",shirt:"#2B2B35",pants:"#2B2B35",shoes:te,fringe:!1,extra:i=>jc(i)}),manager_b:Gt({skin:jt.tan,hair:"#2B1E14",style:"short",shirt:"#4A4E6B",pants:"#3A3D55",shoes:te,extra:i=>Qc(i)}),manager_g:Gt({skin:jt.tan,hair:"#2B1E14",style:"long",shirt:"#4A4E6B",pants:"#3A3D55",shoes:te,extra:i=>Qc(i)}),pilot_b:Gt({skin:jt.light,hair:"#2B1E14",style:"short",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:te,fringe:!1,extra:i=>th(i)}),pilot_g:Gt({skin:jt.light,hair:"#F2C14E",style:"long",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:te,fringe:!1,extra:i=>th(i)}),soldier_b:Gt({skin:jt.light,hair:"#2B1E14",style:"short",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:i=>eh(i)}),soldier_g:Gt({skin:jt.tan,hair:"#2B1E14",style:"long",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:i=>eh(i)})};function Wc(i,t,e){return[[i,t,e,4.4,4.4,4.4,oe],[i,t+1.4,e+2.25,1.6,1.6,.2,te],[i+2.25,t+1.4,e,.2,1.6,1.6,te],[i,t+4.45,e,1.6,.2,1.6,te]]}function Xc(i,t,e){return[[i,t,e,5,5,5,"#E8762B"],[i,t,e,5.1,.4,5.1,te],[i,t,e,.4,5.1,5.1,te]]}function qc(i,t){i.head.push([0,10,0,12.4,1.6,12.4,oe],[0,-.6,-6,12.4,10.6,1,oe],[6,-.6,0,1,10.6,12.4,oe],[-6,-.6,0,1,10.6,12.4,oe],[0,-.6,6,12.4,1,1,oe],[0,.4,6,10.8,9.6,.6,"#CDEBFF","glass"],[3,11.6,0,.6,3,.6,"#C0C7D1"],[3,14.6,0,1.6,1.6,1.6,"#FF5A5F"]),i.body.push([0,.5,0,9.4,1.2,5.4,t],[0,3.5,2.6,3,2.6,.3,"#3FA9F5"],...bn(0,3.8,2.8,ne,.6)),i.body.push([0,1,-3.3,7,6,2,"#E0E0EA"])}function Yc(i,t){i.head.push([0,9,0,11.6,2.6,11.6,t],[0,0,-5.8,11.6,11,1.2,t],[5.8,0,-.5,1.2,11,10.6,t],[-5.8,0,-.5,1.2,11,10.6,t],[0,6.4,5.9,9.6,2,.6,"#BDE7FF"],[5.9,5,2,.4,3,1,ne],[5.9,3,1,.4,3,1,ne]),i.body.push([-2,0,2.6,1,8,.3,t],[2,0,2.6,1,8,.3,t])}function Zc(i,t){i.head.push([0,7,0,10.6,1.4,10.6,t],[0,6.5,-5.8,2,2,1,t],[1,4.5,-6.3,1,3,.6,t],[-1,5,-6.3,1,2.5,.6,t]),i.body.push([0,0,0,9.4,1.2,5.4,t],[0,2,2.6,7,1,.3,"#1B1530"]),i.body.push([3,2,-3,.8,9,.8,"#C0C7D1"])}function Jc(i,t){i.head.push([0,9.5,0,13,1,13,t],[0,10.5,0,9,3,9,t],[0,13.5,-.3,6.5,3,6.5,t],[0,16.5,-.6,4,3,4,t],[0,19.5,-.9,2,2,2,t],...bn(0,11,4.6)),i.body.push([0,-5,0,10,5.2,6,t],...bn(-2,4,2.6,ne,.6),...bn(2,1,2.6,ne,.6),...bn(-1,-3,3.1,ne,.6)),i.armR.push([0,-15,1.5,.8,7,.8,"#8A5634"],...bn(0,-9,1.5,ne,.7))}function $c(i){i.head.push([0,8.5,0,11.2,3.2,11.2,ne],[0,8.5,.6,12.4,.8,12.4,ne],[0,11.7,0,2,.8,9,"#F5C518"]),i.body.push([0,2,2.6,9.2,1,.3,oe],[0,5,2.6,9.2,1,.3,oe]),i.armR.push([0,-15,1,.9,7,.9,"#8A5634"],[0,-9,1,3.5,1.6,1.6,"#9AA3AE"])}function Kc(i){i.head.push([0,8.5,0,11,3,11,"#24325E"],[0,8.5,6,9,.8,2.6,te],[0,9.5,5.6,1.6,1.6,.4,ne]),i.body.push([0,0,0,9.4,1.2,5.4,te],[-2.4,5,2.6,1.4,1.4,.3,ne],...bn(2,4.5,2.6,ne,.5))}function jc(i){i.head.push([0,8.5,0,11.4,3.2,11.4,"#E8473C"],[0,8.5,-.5,13.4,.9,13.4,"#E8473C"],[0,9,5.8,2.6,2.4,.4,ne]),i.body.push([0,1.5,0,9.4,1,5.4,ne],[0,4.5,0,9.4,1,5.4,ne]),i.armL.push([0,-4,0,3.4,1,3.6,ne]),i.armR.push([0,-4,0,3.4,1,3.6,ne]),i.legL.push([0,-3.5,0,4,.8,4.6,ne]),i.legR.push([0,-3.5,0,4,.8,4.6,ne])}function Qc(i){i.body.push([0,4,2.55,3,4,.3,oe],[0,3,2.7,1,4.5,.3,"#E8473C"],[0,7.2,2.7,1.6,.8,.3,"#E8473C"]),i.armR.push([0,-14,0,2,5,6,"#8A5634"],[0,-9,0,1,1.2,2.4,"#5A3A22"])}function th(i){i.head.push([0,8.5,0,11,3,11,oe],[0,8.5,6,9,.8,2.6,te],[0,8.4,0,11.1,.8,11.1,te],[0,9.5,5.6,2.4,1.4,.4,Hs]),i.body.push([0,3,2.6,1,4,.3,Hs],[-2.4,5.5,2.6,2,.8,.3,Hs]),i.armL.push([0,-6,0,3.4,.8,3.6,Hs]),i.armR.push([0,-6,0,3.4,.8,3.6,Hs])}function eh(i){i.head.push([0,8.5,-.5,11,2.2,11,"#3E7B32"],[1.2,10.3,-.3,9,1.4,9,"#3E7B32"],[-3,9.6,5.1,1.4,1.4,.4,ne]),i.body.push([-2.3,4,2.6,2.6,2,.3,"#5C6E32"],[2.3,4,2.6,2.6,2,.3,"#5C6E32"],[0,0,0,9.4,1.2,5.4,"#3B2A1A"])}function O0(i,t){let e=i.fur,n=i.light;i.animal==="bunny"?(t.head.push([2.4,10,0,2.4,8,1.6,e],[-2.4,10,0,2.4,8,1.6,e],[2.4,11,.85,1.2,6,.2,"#FFB0CF"],[-2.4,11,.85,1.2,6,.2,"#FFB0CF"]),t.head.push([0,1,5.3,4,2.6,.8,n]),t.body.push([0,-3,-3,3.4,3,2,oe])):i.animal==="cat"?(t.head.push([3.2,10,0,3,2.4,2,e],[-3.2,10,0,3,2.4,2,e],[3.2,12.4,0,1.4,1.2,1.6,e],[-3.2,12.4,0,1.4,1.2,1.6,e]),t.head.push([3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"],[-3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"]),t.body.push([0,0,-3.5,1.8,1.8,3,e],[0,0,-5.2,1.8,9,1.8,e],[0,9,-5.2,1.8,1.8,1.8,n])):i.animal==="dog"?(t.head.push([5.6,1.5,.5,1.4,8,4.5,i.ears],[-5.6,1.5,.5,1.4,8,4.5,i.ears]),t.head.push([0,.5,5.9,5,3.4,1.8,n],[0,3.2,6.9,2,1,.4,te]),t.head.push([2.5,7.5,5.1,2.4,2.4,.2,n]),t.body.push([0,2,-3.5,1.8,1.8,3,e],[0,3.5,-5,1.8,3,1.8,e])):i.animal==="kangaroo"&&(t.head.push([2.6,10,-.5,2.2,6.5,1.4,e],[-2.6,10,-.5,2.2,6.5,1.4,e],[2.6,11,.3,1.1,4.5,.2,"#F1B7A0"],[-2.6,11,.3,1.1,4.5,.2,"#F1B7A0"]),t.head.push([0,.5,5.6,5,3.4,1.4,n]),t.body.push([0,.3,2.85,6.5,3.5,.8,n]),t.body.push([0,-7,-4.5,3.4,3.4,4,e],[0,-7,-8.5,2.8,2.4,4.5,e],[0,-7,-11.5,2.2,1.8,2,e]),i.baby&&t.body.push([0,2.5,3.6,3.4,3.2,2.6,e],[-.8,4.2,4.95,.6,.8,.2,te],[.8,4.2,4.95,.6,.8,.2,te],[-1,5.7,3.6,.8,1.4,.8,e],[1,5.7,3.6,.8,1.4,.8,e]),t.armL.push([0,-9,0,3.4,2.6,3.4,i.gloves]),t.armR.push([0,-9,0,3.4,2.6,3.4,i.gloves])),t.body.push([0,.5,2.55,6,6,.3,n])}var z0=Object.keys(La);function Da(i,{shadows:t=!0}={}){let e=La[i]||La.boni,n=cn({},e);n.animal&&(n.skin=n.skin||n.fur,n.shirt=n.fur,n.pants=n.fur,n.shoes=n.light,n.hands=n.fur,n.faceColor=n.faceColor||n.fur,n.style="none");let s={head:[],body:[],armL:[],armR:[],legL:[],legR:[],root:[]},r=n.sleeve||n.shirt;s.head.push([0,0,0,10,10,10,n.headColor||n.faceColor||n.skin]),s.head.push(...N0(n.style||"short",n.hair)),s.body.push([0,0,0,9,8,5,n.shirt]);for(let[T,X]of[[s.armL,1],[s.armR,-1]])T.push([0,-6,0,3,6,3.2,r],[0,-8.5,0,2.8,2.5,2.8,n.hands||n.skin]);for(let T of[s.legL,s.legR])T.push([0,-7,0,3.8,7,4,n.pants],[0,-7,.4,4,1.6,4.8,n.shoes]);n.animal&&O0(n,s),n.extra&&n.extra(s);let a=gs(i),o=(T,X)=>ii(T,{seed:a+X,jitter:.035,shadows:t}),l=new Se,c=1/16,h=(T,X,j,M,A)=>{let rt=new Se;return rt.position.set(X*c,j*c,M*c),rt.add(o(T,A)),l.add(rt),rt},u=h(s.legL,2.1,7,0,1),f=h(s.legR,-2.1,7,0,2),m=h(s.body,0,7,0,3),g=h(s.head,0,15,0,4),x=h(s.armL,6,14.5,0,5),p=h(s.armR,-6,14.5,0,6);s.root.length&&l.add(o(s.root,7));let d=document.createElement("canvas");d.width=20,d.height=20;let E=d.getContext("2d"),y=new fs(d);y.magFilter=Me,y.minFilter=Me,y.colorSpace=We;let C=new Fe(new hs(10*c,10*c),new wi({map:y}));C.position.set(0,5*c,5.02*c),g.add(C);let I="",R=T=>{T!==I&&(I=T,B0(E,n,T),y.needsUpdate=!0)};return R("happy"),{id:i,root:l,head:g,body:m,armL:x,armR:p,legL:u,legR:f,setMood:R,height:25*c}}function Ua(i,t,{walking:e=0,cheer:n=0,sleepy:s=0}){let r=Math.sin(t*9)*.7*e;i.legL.rotation.x=r,i.legR.rotation.x=-r;let a=n*(2.5+Math.sin(t*12)*.25);i.armL.rotation.x=-r*.9,i.armR.rotation.x=r*.9,i.armL.rotation.z=a,i.armR.rotation.z=-a;let o=e?Math.abs(Math.sin(t*9))*.04:0,l=n?Math.abs(Math.sin(t*7))*.25*n:0;i.body.position.y=7/16+o,i.head.position.y=15/16+o,i.armL.position.y=i.armR.position.y=14.5/16+o,i.root.position.y=l,i.head.rotation.z=s*.14,i.head.rotation.x=s*.1+Math.sin(t*2)*.03}var Ye=[{x0:0,z0:0,x1:8,z1:8},{x0:0,z0:8,x1:8,z1:16},{x0:8,z0:8,x1:16,z1:16},{x0:8,z0:0,x1:16,z1:8},{x0:16,z0:0,x1:24,z1:16,garden:!0}],ae={x0:0,z0:0,x1:24,z1:16},Pi=3,Be=.16,ln=1.7,Vs=2.3,_s=.16,Gs=[{a:0,b:1,axis:"z",c:8,p:4},{a:0,b:3,axis:"x",c:8,p:4},{a:3,b:2,axis:"z",c:8,p:12},{a:1,b:2,axis:"x",c:8,p:12},{a:2,b:4,axis:"x",c:16,p:12}],k0={"0N":2.5,"1W":12,"2S":[10,14],"3N":10.2};function nn(i,t){for(let e=0;e<Ye.length;e++){let n=Ye[e];if(i>=n.x0&&i<n.x1&&t>=n.z0&&t<n.z1)return e}return-1}function Ii(i){let t=Ye[i];return new U((t.x0+t.x1)/2,0,(t.z0+t.z1)/2)}var Ws=[{room:0,x0:6.6,x1:7.7,z0:.3,z1:1.3,y:.8},{room:1,x0:2.3,x1:5.7,z0:11.2,z1:13.2,y:.95},{room:2,x0:11,x1:13,z0:12.5,z1:13.6,y:.5},{room:3,x0:12.3,x1:15.6,z0:.2,z1:1.3,y:1}];function nh(i,t){let e=0;for(let n of Ws)i>n.x0&&i<n.x1&&t>n.z0&&t<n.z1&&(e=Math.max(e,n.y));return e}function H0(){let i=[];return Ye.forEach((t,e)=>{if(!t.garden)for(let n of["N","S","W","E"]){let s=n==="N"||n==="S"?"z":"x",r=n==="N"?t.z0:n==="S"?t.z1:n==="W"?t.x0:t.x1,a=s==="z"?t.x0:t.z0,o=s==="z"?t.x1:t.z1,l=Gs.find(h=>(h.a===e||h.b===e)&&h.axis===s&&h.c===r),c=n==="N"||n==="W"?1:-1;i.push({room:e,side:n,axis:s,c:r,from:a,to:o,door:l?l.p:null,inward:c,lowered:!1,k:1})}}),i}function ih(i,t,e){let n=Ye[i],s={N:e-n.z0,S:n.z1-e,W:t-n.x0,E:n.x1-t},r="N";for(let c of["S","W","E"])s[c]<s[r]&&(r=c);let a=.7,o=Math.min(n.x1-a,Math.max(n.x0+a,t)),l=Math.min(n.z1-a,Math.max(n.z0+a,e));return r==="N"?{side:r,x:o,z:n.z0+Be,rotY:0}:r==="S"?{side:r,x:o,z:n.z1-Be,rotY:Math.PI}:r==="W"?{side:r,x:n.x0+Be,z:l,rotY:Math.PI/2}:{side:r,x:n.x1-Be,z:l,rotY:-Math.PI/2}}function sh(i){let t={walls:H0(),wallGroups:[]},e=Ci(7),n=[];n.push([12*16,-6,8*16,80*16,2,70*16,"#8ED16F"]);let s=u=>u[Math.floor(e()*u.length)];Ye.forEach((u,f)=>{for(let m=u.x0;m<u.x1;m++)for(let g=u.z0;g<u.z1;g++){let x;f===0?x=s(["#E8B98A","#E2B080","#EDC296"]):f===1?x=(m+g)%2?"#B8C7E0":"#FFFFFF":f===2?x=s(["#D29E6C","#C99463","#D8A673"]):f===3?x=(m+g)%2?"#CDEBFF":"#FFFFFF":x=s(["#7ED957","#74CF4E","#86DE60","#6FC94A"]),n.push([(m+.5)*16,-3,(g+.5)*16,16,3,16,x])}});for(let u=16;u<24;u++)n.push([(u+.5)*16,-2.8,12.5*16,14,3,14,u%2?"#D8D2C4":"#CFC8B8"]);for(let u=0;u<26;u++){let f=16.3+e()*7.4,m=.3+e()*15.4;Math.abs(m-12.5)<.8||n.push([f*16,0,m*16,1.2,2+e()*2,1.2,"#5CB83A"])}for(let u=0;u<40;u++){let f=-6+e()*36,m=-6+e()*28;f>-.6&&f<24.6&&m>-.6&&m<16.6||(e()<.5?n.push([f*16,-4,m*16,10,8,10,s(["#4CB050","#3E9B45","#5CC23A"])]):n.push([f*16,-4,m*16,3,7,3,s(["#FF8FB1","#FFD43B","#FFFFFF","#C9A0FF"])]))}let r=ii(n,{seed:3,jitter:.03});r.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),i.add(r);let a="#B9784A",o="#8A5634",l=[[4*16,0,4.6*16,52,.6,36,"#FFB8D4"],[4*16,.6,4.6*16,44,.3,28,"#FFD1E3"],[7.15*16,0,.8*16,17,12.8,15,a],[7.15*16,4,1.3*16+.5,13,3.5,.6,o],[7.15*16,5.5,1.3*16+1,2,1,.6,"#FFD43B"],[4*16,14,12.2*16,54,1.4,32,a],[4*16,15.2,12.2*16,50,.2,28,"#FFFFFF"],...[[-24,-13],[24,-13],[-24,13],[24,13]].map(([u,f])=>[4*16+u,0,12.2*16+f,2,14,2,o]),[12*16,0,12.6*16,64,.6,44,"#8E6CFF"],[12*16,.6,12.6*16,52,.3,34,"#B9A6FF"],[12*16,6,13.05*16,32,2,18,o],...[[-14,-7],[14,-7],[-14,7],[14,7]].map(([u,f])=>[12*16+u,0,13.05*16+f,2,6,2,a]),[13.95*16,0,.75*16,52,15,17,"#FFFFFF"],[13.95*16,15,.75*16,54,1,18,"#9FD8F5"],[13.95*16,15.2,.85*16,14,1,10,"#CDEBFF"],[13.95*16,16,.4*16,1.6,4,1.6,"#C0C7D1"],[13.95*16,19,.55*16,1.6,1.2,4,"#C0C7D1"],[13.2*16,4,1.3*16+1,18,8,.5,"#E6F6FF"],[14.7*16,4,1.3*16+1,18,8,.5,"#E6F6FF"]],c=[],h=(u,f)=>c.push([u*16,0,f*16,2,11,2,"#FFFFFF"],[u*16,11,f*16,1.4,1.4,1.4,"#F2EEE8"]);for(let u=16.5;u<24;u+=1)h(u,.1),h(u,15.9);for(let u=.5;u<16;u+=1)Math.abs(u-12.5)>.6&&h(23.9,u);return c.push([20*16,6,.1*16,128,1.5,1,"#FFFFFF"],[20*16,6,15.9*16,128,1.5,1,"#FFFFFF"]),c.push([23.9*16,6,5.75*16,1,1.5,11.5*16-10,"#FFFFFF"],[23.9*16,6,14.5*16+2,1,1.5,2.5*16-8,"#FFFFFF"]),i.add(ii(l.concat(c),{seed:11,jitter:.03})),t.wallParent=new Se,i.add(t.wallParent),t.setWallColors=u=>V0(t,u),t}function V0(i,t){for(let e of i.wallGroups)i.wallParent.remove(e),e.traverse(n=>n.geometry&&n.geometry.dispose());i.wallGroups=[];for(let e of i.walls){let n=t[e.room]||"#FFF1DC",s=[],r=[];e.door!=null?r.push([e.from,e.door-ln/2,0,Pi],[e.door+ln/2,e.to,0,Pi],[e.door-ln/2,e.door+ln/2,Vs,Pi]):r.push([e.from,e.to,0,Pi]);let a=e.c+e.inward*Be/2,o=(u,f,m,g,x,p=Be,d=0,E)=>{let y=f-u;if(y<=0)return;let C=(u+f)/2,I=a+e.inward*d;e.axis==="z"?s.push([C*16,m*16,I*16,y*16,(g-m)*16,p*16,x,E]):s.push([I*16,m*16,C*16,p*16,(g-m)*16,y*16,x,E])};for(let[u,f,m,g]of r)o(u,f,m,g,n),o(u,f,m,Math.min(g,.18),"#FFFFFF",Be+.04,.02),e.room===3&&o(u,f,m,Math.min(g,1.3),"#9FD8F5",Be+.04,.02),g>=Pi&&o(u,f,Pi-.12,Pi,"#FFFFFF",Be+.02,0);e.door!=null&&(o(e.door-ln/2-.12,e.door-ln/2,0,Vs,"#FFFFFF",Be+.06,.02),o(e.door+ln/2,e.door+ln/2+.12,0,Vs,"#FFFFFF",Be+.06,.02),o(e.door-ln/2-.12,e.door+ln/2+.12,Vs,Vs+.12,"#FFFFFF",Be+.06,.02));let l=k0[`${e.room}${e.side}`],c=l==null?[]:Array.isArray(l)?l:[l];for(let u of c)o(u-1.05,u+1.05,1.05,2.55,"#FFFFFF",Be+.06,0),o(u-.9,u+.9,1.2,2.4,"#BDE7FF",Be+.08,0,"glow"),o(u-.04,u+.04,1.2,2.4,"#FFFFFF",Be+.1,0),o(u-.9,u+.9,1.76,1.84,"#FFFFFF",Be+.1,0);let h=ii(s,{seed:e.room*10+e.c,jitter:.015});h.scale.y=e.k,e.group=h,i.wallGroups.push(h),i.wallParent.add(h)}}function rh(i,t,e,n){for(let s of i.walls){let r=s.axis==="z"?t.z:t.x,a=s.axis==="z"?e.z:e.x,o=(r-s.c)*(a-s.c)<0;s.lowered=o;let l=o?.12:1;s.k+=(l-s.k)*Math.min(1,n*8),s.group&&(s.group.scale.y=s.k)}}function oh(i,t,e){return i.walls.find(n=>n.room===t&&n.side===e)}var Ba=.3,Li=.25,ue=Math.round((ae.x1-ae.x0)/Li),oi=Math.round((ae.z1-ae.z0)/Li),lh=[];Ye.forEach((i,t)=>{let e=[{axis:"z",c:i.z0,from:i.x0,to:i.x1},{axis:"z",c:i.z1,from:i.x0,to:i.x1},{axis:"x",c:i.x0,from:i.z0,to:i.z1},{axis:"x",c:i.x1,from:i.z0,to:i.z1}];for(let n of e){let s=Gs.filter(r=>(r.a===t||r.b===t)&&r.axis===n.axis&&r.c===n.c).map(r=>r.p);lh.push(wn(cn({},n),{doors:s}))}});var G0=Ws.map(i=>({x0:i.x0,x1:i.x1,z0:i.z0,z1:i.z1}));function Na(i,t,e){if(i<ae.x0+e+_s||i>ae.x1-e-_s||t<ae.z0+e+_s||t>ae.z1-e-_s)return!0;for(let n of lh){let s=n.axis==="z"?t:i,r=n.axis==="z"?i:t;if(!(Math.abs(s-n.c)>=_s+e)&&!(r<n.from-e||r>n.to+e)&&!n.doors.some(a=>Math.abs(r-a)<ln/2-e))return!0}return!1}function ah(i,t,e,n){return i>e.x0-n&&i<e.x1+n&&t>e.z0-n&&t<e.z1+n}function ch(i,t){let e=G0.concat(i),n=Ba;return{blocked:(a,o)=>{if(Na(a,o,n))return!0;for(let l of e)if(ah(a,o,l,n))return!0;for(let l of t)if((l.x-a)**2+(l.z-o)**2<(2*n)**2)return!0;return!1},blockedStatic:(a,o)=>{if(Na(a,o,n))return!0;for(let l of e)if(ah(a,o,l,n))return!0;return!1},others:t}}var si=i=>ae.x0+(i+.5)*Li,ri=i=>ae.z0+(i+.5)*Li,xs=i=>Math.min(ue-1,Math.max(0,Math.floor((i-ae.x0)/Li))),ys=i=>Math.min(oi-1,Math.max(0,Math.floor((i-ae.z0)/Li)));function W0(i){let t=new Uint8Array(ue*oi);for(let e=0;e<oi;e++)for(let n=0;n<ue;n++)t[e*ue+n]=i.blocked(si(n),ri(e))?1:0;return t}function X0(i,t){let e=new Float32Array(ue*oi).fill(1/0),n=new Int32Array(ue*oi).fill(-1),s=[],r=(l,c)=>{s.push([c,l]);let h=s.length-1;for(;h>0;){let u=h-1>>1;if(s[u][0]<=s[h][0])break;[s[u],s[h]]=[s[h],s[u]],h=u}},a=()=>{let l=s[0],c=s.pop();if(s.length){s[0]=c;let h=0;for(;;){let u=2*h+1,f=u+1,m=h;if(u<s.length&&s[u][0]<s[m][0]&&(m=u),f<s.length&&s[f][0]<s[m][0]&&(m=f),m===h)break;[s[m],s[h]]=[s[h],s[m]],h=m}}return l};e[t]=0,r(t,0);let o=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;s.length;){let[l,c]=a();if(l>e[c])continue;let h=c%ue,u=c/ue|0;for(let[f,m,g]of o){let x=h+f,p=u+m;if(x<0||p<0||x>=ue||p>=oi)continue;let d=p*ue+x;if(i[d]||f&&m&&(i[u*ue+x]||i[p*ue+h]))continue;let E=l+g;E<e[d]&&(e[d]=E,n[d]=c,r(d,E))}}return{dist:e,prev:n}}function q0(i,t,e,n,s){let r=Math.hypot(n-t,s-e),a=Math.max(1,Math.ceil(r/.08));for(let o=1;o<=a;o++){let l=o/a;if(i.blocked(t+(n-t)*l,e+(s-e)*l))return!1}return!0}function hh(i,t,e,n,s){let r=W0(i),a=ys(e)*ue+xs(t),o=[];if(r[a]){let d=-1,E=1/0;for(let y=Math.max(0,ys(e)-4);y<=Math.min(oi-1,ys(e)+4);y++)for(let C=Math.max(0,xs(t)-4);C<=Math.min(ue-1,xs(t)+4);C++){let I=y*ue+C,R=(si(C)-t)**2+(ri(y)-e)**2;!r[I]&&R<E&&!Na((si(C)+t)/2,(ri(y)+e)/2,.05)&&(E=R,d=I)}if(d<0)return null;a=d,o.push({x:si(a%ue),z:ri(a/ue|0)})}let{dist:l,prev:c}=X0(r,a),h=ys(s)*ue+xs(n),u={x:n,z:s};if(r[h]||i.blocked(n,s)){let d=-1,E=1/0,y=2.6,C=nn(n,s),I=Math.ceil(y/Li);for(let R=Math.max(0,ys(s)-I);R<=Math.min(oi-1,ys(s)+I);R++)for(let T=Math.max(0,xs(n)-I);T<=Math.min(ue-1,xs(n)+I);T++){let X=R*ue+T,j=(si(T)-n)**2+(ri(R)-s)**2;j<=y*y&&l[X]<1/0&&j<E&&nn(si(T),ri(R))===C&&(E=j,d=X)}if(d<0)return null;h=d,u={x:si(h%ue),z:ri(h/ue|0)}}else if(l[h]===1/0)return null;let f=[];for(let d=h;d>=0&&d!==a;d=c[d])f.unshift({x:si(d%ue),z:ri(d/ue|0)});f.length?f[f.length-1]=u:f.push(u);let m=o.length?o[0]:{x:t,z:e},g=[],x=m,p=0;for(;p<f.length;){let d=p;for(let E=f.length-1;E>p;E--)if(q0(i,x.x,x.z,f[E].x,f[E].z)){d=E;break}g.push(f[d]),x=f[d],p=d+1}return o.concat(g)}var sn=new URLSearchParams(location.search),Ms=sn.get("thumb"),uh=window.Android,dh={onReady(){},onMoved(i,t,e,n,s){console.log("moved",i,t,e,n,s)},onStore(i){console.log("store",i),qs.items=qs.items.map(t=>t.id===i?wn(cn({},t),{inRoom:!1}):t),Xs.setState(JSON.stringify(qs))},onTapBuddy(i){Xs.say(i,"\u05E9\u05DC\u05D5\u05DD! \u05D0\u05E0\u05D9 "+i)},onFocus(i){console.log("focus",i)}},vs={};for(let i of Object.keys(dh))vs[i]=(...t)=>{try{return uh?uh[i](...t):dh[i](...t)}catch(e){console.error("bridge "+i+": "+e.message)}};var Je;try{Je=new us({antialias:!0,alpha:!!Ms,preserveDrawingBuffer:!!Ms})}catch(i){Je=new us({antialias:!1})}Je.setPixelRatio(Math.min(window.devicePixelRatio||1,2));Je.shadowMap.enabled=!0;Je.shadowMap.type=Ea;document.body.appendChild(Je.domElement);var Ze=new zr,Oe=new Ve(42,1,.1,200);Ze.add(new Vr(16777215,13214586,1.5));var xe=new Gr(16777215,1.9);xe.castShadow=!0;xe.shadow.mapSize.set(Ms?1024:2048,Ms?1024:2048);xe.shadow.bias=-8e-4;xe.shadow.normalBias=.02;Ze.add(xe,xe.target);function Oa(){let i=window.innerWidth||document.documentElement.clientWidth||1,t=window.innerHeight||document.documentElement.clientHeight||1;Je.setSize(i,t,!1),Je.domElement.style.width=i+"px",Je.domElement.style.height=t+"px",Oe.aspect=i/t,Oe.updateProjectionMatrix()}window.addEventListener("resize",Oa);Oa();var Di={};function fh(i){if(!Di[i]){let t=Ia[i],e=t?t():[[0,0,0,8,8,8,"#FF5C9A"]];Di[i]={boxes:e,bounds:Gc(e)}}return Di[i]}function ph(i){let{boxes:t,bounds:e}=fh(i),n=ii(t,{seed:gs(i)}),s=new Se;return s.add(n),s.userData={kind:"item",id:i,bounds:e},s}if(Ms){let[i,t]=Ms.split(":"),e,n;if(i==="item"){e=ph(t);let c=Di[t].bounds,h=zn[t]||{};if(n={w:c.w/16,h:c.h/16,d:c.d/16,cy:h.wall||h.fly?0:c.h/32},h.wall||h.fly){let u=1/0,f=-1/0;Di[t].boxes.forEach(m=>{u=Math.min(u,m[1]),f=Math.max(f,m[1]+m[4])}),n.cy=(u+f)/32,n.h=(f-u)/16}}else{let c=Da(t),h=sn.get("mood")||"happy";if(c.setMood(h),Ua(c,.13,{cheer:h==="cheer"?1:0,sleepy:h==="sleepy"?1:0}),c.root.position.y=0,e=new Se,e.add(c.root),h==="sleepy"){let u=new ds({map:mh(),transparent:!0,depthWrite:!1});[[.45,1.65,.22],[.62,1.88,.3]].forEach(([f,m,g])=>{let x=new Os(u);x.position.set(f,m,.2),x.scale.setScalar(g),e.add(x)})}n={w:1,h:1.55,d:.7,cy:.82},(t==="wizard_b"||t==="wizard_g")&&(n={w:1,h:1.85,d:.7,cy:.95}),(t==="kangi"||t==="roni"||t==="boni"||t==="bobi")&&(n.h=1.75,n.cy=.9)}Ze.add(e);let s=i==="item"?(zn[t]||{}).wall?.35:.55:.38,r=i==="item"?.42:.18,o=(Math.max(n.w,n.h,n.d)*1.25+.2)/Math.tan(Oe.fov*Math.PI/360)*.62,l=new U(0,n.cy,0);Oe.position.set(Math.sin(s)*Math.cos(r)*o,n.cy+Math.sin(r)*o,Math.cos(s)*Math.cos(r)*o),Oe.lookAt(l),xe.position.set(3,8,6),xe.shadow.camera.left=xe.shadow.camera.bottom=-3,xe.shadow.camera.right=xe.shadow.camera.top=3,xe.shadow.camera.updateProjectionMatrix(),Je.setClearColor(0,0),Je.render(Ze,Oe),window.__thumbDone=!0}else try{J0();let i=document.getElementById("msg");i&&(i.style.display="none")}catch(i){throw window.houseError&&window.houseError(i&&i.message?i.message:String(i)),i}var Y0=0,Z0=setInterval(()=>{Oa(),++Y0>20&&clearInterval(Z0)},250),Xs,qs;function J0(){Ze.background=new Jt("#BFE6FF"),Ze.fog=new Or("#BFE6FF",45,90);let i=sh(Ze);xe.position.set(20,30,22),xe.target.position.set(12,0,8),xe.shadow.camera.left=-18,xe.shadow.camera.right=18,xe.shadow.camera.top=18,xe.shadow.camera.bottom=-18,xe.shadow.camera.near=5,xe.shadow.camera.far=80,xe.shadow.camera.updateProjectionMatrix();let t=document.getElementById("overlay"),e={yaw:.55,pitch:.9,dist:13,target:Ii(0).setY(.6)},n={yaw:e.yaw,pitch:e.pitch,dist:e.dist,target:e.target.clone()},s=0,r=!1;function a(){let v=Math.cos(e.pitch);Oe.position.set(e.target.x+Math.sin(e.yaw)*v*e.dist,e.target.y+Math.sin(e.pitch)*e.dist,e.target.z+Math.cos(e.yaw)*v*e.dist),Oe.lookAt(e.target)}function o(v,F){s=v,r=!1,n.target.copy(Ii(v)).setY(.6),n.dist=v===4?17:12.5,F&&(e.target.copy(n.target),e.dist=n.dist)}let l=new Map,c=new Se;Ze.add(c);function h(v){let F=Ye[v.room]||Ye[0],P=zn[v.id]||{},w=Math.min(1,Math.max(0,(v.x||0)/.85)),z=Math.min(1,Math.max(0,(v.y||0)/.85)),Q=Ci(gs(v.id));if(P.small&&u(v.room)){let At=u(v.room);return{x:At.x0+.3+Q()*(At.x1-At.x0-.6),z:At.z0+.3+Q()*(At.z1-At.z0-.6)}}if(P.wall&&!F.garden)return{x:F.x0+1+w*6,z:F.z0+.2};let dt=F.x0+1+w*(F.x1-F.x0-2),St=F.z0+1.3+Math.max(0,(z-.4)/.6)*(F.z1-F.z0-2.3);return{x:dt,z:St}}let u=v=>$0(v)[0];function f(v,F){let P=Di[v]?Di[v].bounds:fh(v).bounds,w=P.w/32,z=P.d/32;return F%2?{hx:z,hz:w}:{hx:w,hz:z}}function m(v){let{obj:F,data:P}=v,w=zn[P.id]||{},z=P.gx,Q=P.gz;if(z==null||Q==null||isNaN(z)||isNaN(Q)){let St=h(P);z=St.x,Q=St.z}let ft=nn(z,Q);ft<0&&(ft=P.room||0),v.room=ft;let dt=Ye[ft];if(w.wall&&!dt.garden){let St=ih(ft,z,Q);F.position.set(St.x,1.85,St.z),F.rotation.y=St.rotY,v.wall=oh(i,ft,St.side),v.x=St.x,v.z=St.z}else{let{hx:St,hz:At}=f(P.id,P.rot||0);z=Math.min(dt.x1-St-.17,Math.max(dt.x0+St+.17,z)),Q=Math.min(dt.z1-At-.17,Math.max(dt.z0+At+.17,Q)),dt.x1-dt.x0<St*2+.34&&(z=(dt.x0+dt.x1)/2);let Pe=w.fly||w.wall?1.7:w.small?nh(z,Q):0;F.position.set(z,Pe,Q),F.rotation.y=(P.rot||0)*Math.PI/2,v.wall=null,v.x=z,v.z=Q,v.baseY=Pe}}function g(v){let F=new Set;for(let P of v){if(!P.inRoom)continue;F.add(P.id);let w=l.get(P.id);if(!w){let z=ph(P.id);c.add(z),w={obj:z,data:P},l.set(P.id,w)}nt&&nt.rec===w||(w.data=P,m(w))}for(let[P,w]of l)F.has(P)||(c.remove(w.obj),l.delete(P))}let x=new Map,p=new Se;Ze.add(p);let d=!1,E="";function y(v,F=Math.random){let P=Ye[v];return new U(P.x0+1.2+F()*(P.x1-P.x0-2.4),0,P.z0+1.6+F()*(P.z1-P.z0-2.8))}function C(v,F,P){let w=nn(v.x,v.z),z=[];if(w>=0&&w!==F){let Q={[w]:null},ft=[w];for(;ft.length;){let At=ft.shift();if(At===F)break;for(let Pe of Gs){let ge=Pe.a===At?Pe.b:Pe.b===At?Pe.a:-1;ge>=0&&!(ge in Q)&&(Q[ge]={room:At,door:Pe},ft.push(ge))}}let dt=[],St=F;for(;Q[St];)dt.unshift({door:Q[St].door,from:Q[St].room,to:St}),St=Q[St].room;for(let{door:At,from:Pe,to:ge}of dt){let rn=Ii(Pe),xn=Ii(ge),ze=At.axis==="z"?new U(At.p,0,At.c):new U(At.c,0,At.p),Ae=At.axis==="z"?Math.sign(rn.z-At.c):Math.sign(rn.x-At.c),Ss=-Ae,ai=(Ys,S)=>At.axis==="z"?new U(ze.x,0,ze.z+S*Ys):new U(ze.x+S*Ys,0,ze.z);z.push(ai(.8,Ae),ze.clone(),ai(.8,Ss))}}return z.push(P),z}function I(v){let F=new Set;v.forEach((P,w)=>{F.add(P.id);let z=x.get(P.id);if(!z){let Q=Da(P.id),ft=new Se;ft.add(Q.root),ft.userData={kind:"char",id:P.id},Q.root.traverse(At=>{At.userData.charId=P.id}),p.add(ft);let dt=P.main?Ii(P.room).add(new U(.6,0,1.2)):y(P.room,Ci(gs(P.id)));ft.position.copy(dt),ft.rotation.y=.3,z=wn(cn({id:P.id},Q),{holder:ft,room:P.room,path:[],idle:1+Math.random()*3,talk:null,talkT:0,awake:!1,cheerT:0,phase:Math.random()*10}),x.set(P.id,z);let St=M(z,dt.x,dt.z);St&&ft.position.set(St.x,0,St.z)}if(z.main=P.main,z.index=w,z.room!==P.room){z.room=P.room;let Q=nn(z.holder.position.x,z.holder.position.z),ft=!P.main&&(_t===z.id||z.stayT>0);if(Q!==P.room&&!ft){let dt=P.main?Ii(P.room).add(new U(.6,0,1.2)):y(P.room),St=j(z,dt.x,dt.z);z.path=St||C(z.holder.position,P.room,dt),z.goal=null}}});for(let[P,w]of x)F.has(P)||(p.remove(w.holder),w.bubble&&w.bubble.remove(),x.delete(P))}function R(v,F,P=!0){let w=x.get(v);w&&(w.awake=!0,w.talk=F,w.talkT=3.2,w.cheerT=P?1.6:0)}function T(v){let F=[];for(let w of l.values()){let z=zn[w.data.id]||{};if(w.wall||z.wall||z.fly||z.small&&w.baseY>0)continue;let{hx:Q,hz:ft}=f(w.data.id,w.data.rot||0);F.push({x0:w.x-Q,x1:w.x+Q,z0:w.z-ft,z1:w.z+ft})}let P=[];for(let w of x.values())w!==v&&P.push({x:w.holder.position.x,z:w.holder.position.z});return ch(F,P)}function X(v){return v.map(F=>new U(F.x,0,F.z))}function j(v,F,P){let w=hh(T(v),v.holder.position.x,v.holder.position.z,F,P);return w?X(w):null}function M(v,F,P){let w=T(v);if(!w.blocked(F,P))return null;for(let z=.25;z<3;z+=.25)for(let Q=0;Q<16;Q++){let ft=F+Math.cos(Q/16*Math.PI*2)*z,dt=P+Math.sin(Q/16*Math.PI*2)*z;if(nn(ft,dt)===nn(F,P)&&!w.blocked(ft,dt))return{x:ft,z:dt}}return null}let A=["\u05D0\u05D5-\u05D0\u05D5! \u{1F62E}","\u05D0\u05D5-\u05D0\u05D5... \u05D0\u05D9\u05DF \u05DC\u05D9 \u05D3\u05E8\u05DA \u05DC\u05E9\u05DD","\u05D0\u05D5-\u05D0\u05D5! \u05DE\u05E9\u05D4\u05D5 \u05D7\u05D5\u05E1\u05DD \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA"];function rt(v){v.path=[],v.goal=null,R(v.id,A[Math.floor(Math.random()*A.length)],!1),v.shakeT=.6}function it(v,F,P){v.awake=!0;let w=j(v,F,P);return w?(v.path=w,v.goal=w[w.length-1].clone(),v.waitT=0,v.stayT=25,de(v.goal),!0):(rt(v),!1)}function D(v,F){v.bubble||(v.bubble=document.createElement("div"),v.bubble.className="bubble",t.appendChild(v.bubble)),v.bubble.textContent!==F&&(v.bubble.textContent=F);let P=v.holder.position.clone();P.y+=1.95,P.project(Oe);let w=(P.x*.5+.5)*window.innerWidth,z=(-P.y*.5+.5)*window.innerHeight;v.bubble.style.display=P.z<1?"block":"none",v.bubble.style.left=Math.round(Math.min(window.innerWidth-90,Math.max(90,w)))+"px",v.bubble.style.top=Math.round(Math.max(30,z))+"px"}let $=new Xr,Z=new Dt,K=new fn(new U(0,1,0),0),Y=new Map,H=null,nt=null,at={id:null,t:0},gt=null;function Ut(v,F){let P=Je.domElement.getBoundingClientRect();Z.set((v-P.left)/P.width*2-1,-((F-P.top)/P.height)*2+1),$.setFromCamera(Z,Oe)}function q(v,F){Ut(v,F);let P=[];for(let z of l.values())z.obj.visible&&P.push(z.obj);for(let z of x.values())P.push(z.holder);let w=$.intersectObjects(P,!0);for(let z of w){let Q=z.object;for(;Q&&!Q.userData.kind;)Q=Q.parent;if(Q){if(Q.userData.kind==="item")return{kind:"item",id:Q.userData.id,point:z.point};if(Q.userData.kind==="char")return{kind:"char",id:Q.userData.id,point:z.point}}}return null}function et(v,F){Ut(v,F);let P=new U;return $.ray.intersectPlane(K,P)?P:null}let pt=Je.domElement;pt.addEventListener("pointerdown",v=>{if(pt.setPointerCapture(v.pointerId),Y.set(v.pointerId,{x:v.clientX,y:v.clientY}),Y.size===2){B();let[P,w]=[...Y.values()];H={type:"pinch",d:Math.hypot(P.x-w.x,P.y-w.y),mx:(P.x+w.x)/2,my:(P.y+w.y)/2,dist:n.dist};return}if(Y.size>2)return;let F=q(v.clientX,v.clientY);H={type:"press",x0:v.clientX,y0:v.clientY,x:v.clientX,y:v.clientY,t0:performance.now(),hit:F,moved:!1}}),pt.addEventListener("pointermove",v=>{if(!Y.has(v.pointerId))return;let F=Y.get(v.pointerId);if(Y.set(v.pointerId,{x:v.clientX,y:v.clientY}),!H)return;if(H.type==="pinch"&&Y.size>=2){let[z,Q]=[...Y.values()],ft=Math.hypot(z.x-Q.x,z.y-Q.y);n.dist=Math.min(34,Math.max(4,H.dist*H.d/Math.max(ft,1))),e.dist=n.dist;let dt=(z.x+Q.x)/2,St=(z.y+Q.y)/2;Et(dt-H.mx,St-H.my),H.mx=dt,H.my=St;return}if(H.type!=="press"&&H.type!=="turn"&&H.type!=="drag")return;let P=v.clientX-F.x,w=v.clientY-F.y;if(H.type==="press"){if(Math.hypot(v.clientX-H.x0,v.clientY-H.y0)<10)return;H.moved=!0;let z=H.hit;z&&z.kind==="item"&&!_t?ee(z):H.type="turn"}H.type==="turn"?(n.yaw-=P*.008,n.pitch=Math.min(1.45,Math.max(.25,n.pitch+w*.006)),e.yaw=n.yaw,e.pitch=n.pitch):H.type==="drag"&&Pt(v.clientX,v.clientY)});let Ft=v=>{if(Y.delete(v.pointerId),!!H){if(H.type==="pinch"){Y.size===0&&(H=null);return}H.type==="press"&&!H.moved&&xt(H.hit,v.clientX,v.clientY),H.type==="drag"&&B(),H=null}};pt.addEventListener("pointerup",Ft),pt.addEventListener("pointercancel",Ft),pt.addEventListener("wheel",v=>{v.preventDefault(),n.dist=Math.min(34,Math.max(4,n.dist*(v.deltaY>0?1.1:.9)))},{passive:!1});function Et(v,F){let P=e.dist*.0018,w=new U(Math.cos(e.yaw),0,-Math.sin(e.yaw)),z=new U(-Math.sin(e.yaw),0,-Math.cos(e.yaw));n.target.addScaledVector(w,-v*P).addScaledVector(z,F*P),n.target.x=Math.min(ae.x1+2,Math.max(ae.x0-2,n.target.x)),n.target.z=Math.min(ae.z1+2,Math.max(ae.z0-2,n.target.z)),e.target.copy(n.target)}function xt(v,F,P){if(v&&v.kind==="char"){if(_t===v.id){Tt(null);return}Tt(v.id),vs.onTapBuddy(v.id);return}if(_t){let z=x.get(_t),Q=v?v.point.clone().setY(0):et(F,P);if(!z||!Q)return;if(Q.x<ae.x0||Q.x>ae.x1||Q.z<ae.z0||Q.z>ae.z1){Tt(null);return}it(z,Q.x,Q.z);return}if(!v){let z=et(F,P),Q=performance.now();if(z){let ft=nn(z.x,z.z);if(ft>=0&&at.id==="floor"+ft&&Q-at.t<350){vs.onFocus(ft),o(ft),at={id:null,t:0};return}at={id:"floor"+ft,t:Q}}return}let w=performance.now();if(at.id===v.id&&w-at.t<350){clearTimeout(gt),at={id:null,t:0},vs.onStore(v.id);return}at={id:v.id,t:w},clearTimeout(gt),gt=setTimeout(()=>{let z=l.get(v.id);!z||(zn[v.id]||{}).wall&&!Ye[z.room].garden||(z.data=wn(cn({},z.data),{rot:((z.data.rot||0)+1)%4,gx:z.x,gz:z.z}),m(z),ye(z))},360)}function ee(v){H.type="drag";let F=l.get(v.id);if(!F){H.type="turn";return}let P=et(H.x0,H.y0)||new U(F.x,0,F.z);nt={kind:"item",rec:F,dx:F.x-P.x,dz:F.z-P.z}}function Pt(v,F){if(!nt)return;let P=et(v,F);if(!P)return;let w=Math.min(ae.x1-.3,Math.max(ae.x0+.3,P.x+nt.dx)),z=Math.min(ae.z1-.3,Math.max(ae.z0+.3,P.z+nt.dz)),Q=nt.rec;Q.data=wn(cn({},Q.data),{gx:w,gz:z}),m(Q),Q.obj.position.y+=.25}function B(){if(!nt)return;let v=nt.rec;m(v),ye(v),nt=null}function ye(v){v.data=wn(cn({},v.data),{gx:v.x,gz:v.z,room:v.room}),vs.onMoved(v.data.id,v.x,v.z,v.data.rot||0,v.room)}let _t=null,Xt=new Nn({color:"#FFD43B",transparent:!0,opacity:.95,depthWrite:!1}),wt=new Fe(new zs(.42,.56,32),Xt);wt.rotation.x=-Math.PI/2,wt.visible=!1,Ze.add(wt);let Kt=new Nn({color:"#FF5C9A",transparent:!0,opacity:0,depthWrite:!1}),Lt=new Fe(new zs(.16,.3,24),Kt);Lt.rotation.x=-Math.PI/2,Ze.add(Lt);let Nt=0;function de(v){Lt.position.set(v.x,.04,v.z),Nt=1.4}let b=document.createElement("div");b.id="joy",b.innerHTML='<div class="knob"></div><button class="close" title="close">\u2716</button>',document.body.appendChild(b);let _=b.querySelector(".knob"),O={id:null,x:0,y:0,cx:0,cy:0},J=52;function st(){_.style.transform=`translate(${O.x*J}px, ${O.y*J}px)`}b.addEventListener("pointerdown",v=>{if(v.target.classList.contains("close"))return;v.preventDefault(),v.stopPropagation(),b.setPointerCapture(v.pointerId);let F=b.getBoundingClientRect();O.id=v.pointerId,O.cx=F.left+F.width/2,O.cy=F.top+F.height/2,tt(v)});function tt(v){let F=(v.clientX-O.cx)/J,P=(v.clientY-O.cy)/J,w=Math.hypot(F,P);w>1&&(F/=w,P/=w),O.x=F,O.y=P,st()}b.addEventListener("pointermove",v=>{v.pointerId===O.id&&tt(v)});let Bt=v=>{v.pointerId===O.id&&(O.id=null,O.x=O.y=0,st())};b.addEventListener("pointerup",Bt),b.addEventListener("pointercancel",Bt),b.querySelector(".close").addEventListener("click",v=>{v.stopPropagation(),Tt(null)});function Tt(v){_t=v&&x.has(v)?v:null,wt.visible=!!_t,b.style.display=_t?"block":"none",O.id=null,O.x=O.y=0,st()}Tt(null);function lt(v,F){let P=Math.hypot(O.x,O.y);if(P<.15){v.joyWalk=0;return}let w=new U(Math.cos(e.yaw),0,-Math.sin(e.yaw)),z=new U(-Math.sin(e.yaw),0,-Math.cos(e.yaw)),Q=w.multiplyScalar(O.x).addScaledVector(z,-O.y),ft=3.4*Math.min(1,P),dt=v.holder.position,St=T(v),At=St.blocked(dt.x,dt.z),Pe=(ze,Ae)=>!St.blocked(ze,Ae)||At&&!St.blockedStatic(ze,Ae)&&ut(St,ze,Ae)>ut(St,dt.x,dt.z),ge=Q.x*ft*F/Math.max(P,1e-6)*Math.min(1,P),rn=Q.z*ft*F/Math.max(P,1e-6)*Math.min(1,P);Pe(dt.x+ge,dt.z+rn)?(dt.x+=ge,dt.z+=rn):Pe(dt.x+ge,dt.z)?dt.x+=ge:Pe(dt.x,dt.z+rn)&&(dt.z+=rn),v.path=[],v.goal=null,v.stayT=25,v.awake=!0,Ot(v,Math.atan2(Q.x,Q.z),F),v.joyWalk=1,n.target.set(dt.x,.6,dt.z),r=!1;let xn=nn(dt.x,dt.z);xn>=0&&(s=xn)}function ut(v,F,P){let w=1/0;for(let z of v.others)w=Math.min(w,Math.hypot(z.x-F,z.z-P));return w}function Ot(v,F,P){let w=F-v.holder.rotation.y;w=Math.atan2(Math.sin(w),Math.cos(w)),v.holder.rotation.y+=w*Math.min(1,P*10)}let ot=(v,F,P)=>{let w=document.createElement("button");w.textContent=v,w.title=F,w.addEventListener("click",z=>{z.stopPropagation(),P()}),document.getElementById("buttons").appendChild(w)};ot("\u2795","zoom in",()=>{n.dist=Math.max(4,n.dist*.75)}),ot("\u2796","zoom out",()=>{n.dist=Math.min(34,n.dist*1.33)}),ot("\u{1F504}","turn",()=>{n.yaw+=Math.PI/2}),ot("\u{1F3E0}","whole house",()=>{if(r){o(s);return}r=!0,n.target.set(12,.6,8),n.dist=27,n.pitch=Math.max(n.pitch,.9)});let pe=new Wr,zt=0,Mt=[],yt=0;function vt(){try{Qt()}catch(v){++yt===1&&window.houseError&&window.houseError(v&&v.message?v.message:String(v))}requestAnimationFrame(vt)}function Qt(){let v=Math.min(.05,pe.getDelta());zt+=v;let F=Math.min(1,v*6);e.yaw+=(n.yaw-e.yaw)*F,e.pitch+=(n.pitch-e.pitch)*F,e.dist+=(n.dist-e.dist)*F,e.target.lerp(n.target,F),a(),rh(i,Oe.position,e.target,v);for(let w of l.values())w.obj.visible=!(w.wall&&w.wall.k<.6),(zn[w.data.id]||{}).fly&&!(nt&&nt.rec===w)&&(w.obj.position.y=w.baseY+Math.sin(zt*2+w.x)*.15,w.obj.rotation.y=(w.data.rot||0)*Math.PI/2+Math.sin(zt*.7+w.z)*.6);let P=!1;_t&&!x.has(_t)&&Tt(null);for(let w of x.values()){let z=d&&!w.awake,Q=0;if(w.stayT>0&&(w.stayT-=v),_t===w.id&&O.id!=null)lt(w,v),Q=w.joyWalk;else if(w.path.length){let St=w.path[0],At=new U().subVectors(St,w.holder.position).setY(0),ge=(w.main||w.goal?3.2:1.6)*v,rn=w.holder.position.x+(At.length()>0?At.x/At.length()*Math.min(ge,At.length()):0),xn=w.holder.position.z+(At.length()>0?At.z/At.length()*Math.min(ge,At.length()):0),ze=!1;for(let Ae of x.values()){if(Ae===w)continue;let Ss=Math.hypot(Ae.holder.position.x-w.holder.position.x,Ae.holder.position.z-w.holder.position.z),ai=Math.hypot(Ae.holder.position.x-rn,Ae.holder.position.z-xn);if(ai<Ba*2&&ai<Ss){ze=!0;break}}if(ze)if(w.goal){if(w.waitT=(w.waitT||0)+v,w.waitT>.8){w.waitT=0;let Ae=j(w,w.goal.x,w.goal.z);Ae?w.path=Ae:rt(w)}}else w.path=[],w.idle=1+Math.random()*2;else At.length()<=ge?(w.holder.position.copy(St),w.path.shift(),Q=1,w.path.length||(w.goal=null)):(At.normalize(),w.holder.position.addScaledVector(At,ge),Ot(w,Math.atan2(At.x,At.z),v),Q=1)}else if(!z){if(w.idle-=v,w.idle<=0)if(w.idle=3+Math.random()*5,!w.main&&!(w.stayT>0)&&_t!==w.id){let St=nn(w.holder.position.x,w.holder.position.z),At=y(St>=0?St:w.room);w.path=j(w,At.x,At.z)||[]}else w.lookAtCam=!0;if(w.lookAtCam||w.talkT>0){let At=Math.atan2(Oe.position.x-w.holder.position.x,Oe.position.z-w.holder.position.z)-w.holder.rotation.y;At=Math.atan2(Math.sin(At),Math.cos(At)),w.holder.rotation.y+=At*Math.min(1,v*5),Math.abs(At)<.05&&(w.lookAtCam=!1)}}w.talkT>0&&(w.talkT-=v),w.cheerT>0&&(w.cheerT-=v);let ft=w.cheerT>0?1:0;w.setMood(ft?"cheer":z?"sleepy":"happy"),Ua(w,zt+w.phase,{walking:Q,cheer:ft,sleepy:z?1:0}),w.shakeT>0?(w.shakeT-=v,w.root.rotation.y=Math.sin(w.shakeT*30)*.25*(w.shakeT/.6)):w.root.rotation.y=0,_t===w.id&&(wt.position.set(w.holder.position.x,.04,w.holder.position.z),wt.scale.setScalar(1+Math.sin(zt*5)*.08));let dt=w.talkT>0?w.talk:null;!dt&&z&&!P&&E&&nn(w.holder.position.x,w.holder.position.z)===s&&(dt=E,P=!0),dt?D(w,dt):w.bubble&&(w.bubble.style.display="none"),w.asleep=z}Nt>0?(Nt-=v,Kt.opacity=Math.min(1,Nt*1.5),Lt.scale.setScalar(1+(1.4-Nt)*.5)):Kt.opacity=0,L(v),Je.render(Ze,Oe)}let kt=new ds({map:mh(),transparent:!0,depthWrite:!1}),ie=0;function L(v){if(ie-=v,ie<=0){ie=.9;for(let F of x.values()){if(!F.asleep)continue;let P=new Os(kt);P.scale.set(.35,.35,.35),P.position.copy(F.holder.position).add(new U(.3,1.8,0)),P.userData.life=2.2,Ze.add(P),Mt.push(P)}}for(let F=Mt.length-1;F>=0;F--){let P=Mt[F];P.userData.life-=v,P.position.y+=v*.35,P.position.x+=Math.sin(P.userData.life*3)*v*.2,P.material.opacity=1;let w=Math.max(0,P.userData.life/2.2);P.scale.setScalar(.2+(1-w)*.25),P.userData.life<=0&&(Ze.remove(P),Mt.splice(F,1))}}let ht=-1;Xs={setState(v){try{V(typeof v=="string"?JSON.parse(v):v)}catch(F){window.houseError&&window.houseError(F&&F.message?F.message:String(F))}},say:R,focus(v){o(v)}};function V(v){v.walls&&i.setWallColors(v.walls),d=!!v.asleep,E=v.sleepLine||"",v.room!=null&&v.room!==ht&&(o(v.room,ht<0),ht=v.room),g(v.items||[]),I(v.buddies||[])}if(window.house=Xs,!window.Android){let v=Object.keys(Ia),F={bed:0,teddy:0,lamp:0,picture:0,clock:0,books:0,guitar:0,game:0,unicorn:0,chair:1,plates:1,pizza:1,cake:1,teapot:1,watermelon:1,candy:1,cupcake:1,candle:1,sofa:2,tv:2,piano:2,plant:2,rainbow:2,puzzle:2,cat:2,dog:2,bathtub:3,toilet:3,mirror:3,soap:3,duck:3,toothbrush:3,lotion:3,sponge:3},P=Ci(5);qs={room:Number(sn.get("room")||0),walls:["#FFD1E3","#FFF1DC","#CFF5E1","#CDEBFF","#FFF1DC"],asleep:sn.get("asleep")==="1",sleepLine:"\u05D6\u05D6\u05D6... \u05DB\u05D5\u05DC\u05DD \u05D9\u05E9\u05E0\u05D9\u05DD. \u05DC\u05D7\u05E6\u05D9 \u05E2\u05DC \u05DE\u05D9\u05E9\u05D4\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05D9\u05E8",items:v.filter(w=>sn.get("items")!=="none").map(w=>{var z,Q;return{id:w,room:(z=F[w])!=null?z:4,x:P()*.85,y:(Q=zn[w])!=null&&Q.wall?.2:.6+P()*.25,inRoom:!0}}),buddies:(sn.get("buddies")||"boni,mika,pitzi,blocky,astro,wizard_g").split(",").map((w,z)=>({id:w,room:z===0?Number(sn.get("room")||0):z%5,main:z===0}))},Xs.setState(qs),window.__debug={project(w){let z=l.get(w),Q=x.get(w),ft=z?z.obj:Q?Q.holder:null;if(!ft)return null;let dt=ft.position.clone();return dt.y+=.3,dt.project(Oe),{x:(dt.x*.5+.5)*window.innerWidth,y:(-dt.y*.5+.5)*window.innerHeight}},item(w){let z=l.get(w);return z&&{x:z.x,z:z.z,rot:z.data.rot||0,room:z.room}},screen(w,z){let Q=new U(w,0,z).project(Oe);return{x:(Q.x*.5+.5)*window.innerWidth,y:(-Q.y*.5+.5)*window.innerHeight}},char(w){let z=x.get(w);return z&&{x:z.holder.position.x,z:z.holder.position.z,path:z.path.length,talk:z.talkT>0?z.talk:null,selected:_t===w}},chars(){return[...x.keys()]}}}sn.get("yaw")&&(n.yaw=e.yaw=Number(sn.get("yaw"))),sn.get("pitch")&&(n.pitch=e.pitch=Number(sn.get("pitch"))),sn.get("dist")&&(n.dist=e.dist=Number(sn.get("dist"))),a(),vt();try{vs.onReady()}catch(v){window.houseError&&window.houseError("bridge: "+v.message)}}function $0(i){return Ws.filter(t=>t.room===i)}function mh(){let i=document.createElement("canvas");i.width=i.height=16;let t=i.getContext("2d");t.fillStyle="#8E6CFF",[[3,3,10,2],[9,5,2,2],[7,7,2,2],[5,9,2,2],[3,11,10,2]].forEach(([n,s,r,a])=>t.fillRect(n,s,r,a));let e=new fs(i);return e.magFilter=Me,e.colorSpace=We,e}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
