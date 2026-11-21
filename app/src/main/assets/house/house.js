(()=>{var Eh=Object.defineProperty,wh=Object.defineProperties;var Ah=Object.getOwnPropertyDescriptors;var Xa=Object.getOwnPropertySymbols;var Th=Object.prototype.hasOwnProperty,Ch=Object.prototype.propertyIsEnumerable;var Ya=(n,t,e)=>t in n?Eh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,rn=(n,t)=>{for(var e in t||(t={}))Th.call(t,e)&&Ya(n,e,t[e]);if(Xa)for(var e of Xa(t))Ch.call(t,e)&&Ya(n,e,t[e]);return n},gn=(n,t)=>wh(n,Ah(t));var wa="162";var Rh=0,qa=1,Fh=2;var bc=1,Aa=2,Bn=3,ii=0,Qe=1,On=2,Qn=0,rs=1,Za=2,Ja=3,$a=4,Ph=5,Mi=100,Ih=101,Lh=102,Ka=103,ja=104,Dh=200,Uh=201,Nh=202,Bh=203,ko=204,Ho=205,Oh=206,zh=207,kh=208,Hh=209,Vh=210,Gh=211,Wh=212,Xh=213,Yh=214,qh=0,Zh=1,Jh=2,vr=3,$h=4,Kh=5,jh=6,Qh=7,Ta=0,tu=1,eu=2,ti=0,nu=1,iu=2,su=3,ru=4,ou=5,au=6,lu=7;var Ec=300,ls=301,cs=302,Vo=303,Go=304,qr=306,Wo=1e3,Mn=1001,Xo=1002,Re=1003,Qa=1004;var Cs=1005;var $e=1006,so=1007;var bi=1008;var ei=1009,cu=1010,hu=1011,Ca=1012,wc=1013,jn=1014,zn=1015,Bs=1016,Ac=1017,Tc=1018,wi=1020,uu=1021,Sn=1023,du=1024,fu=1025,Ai=1026,hs=1027,pu=1028,Cc=1029,mu=1030,Rc=1031,Fc=1033,ro=33776,oo=33777,ao=33778,lo=33779,tl=35840,el=35841,nl=35842,il=35843,Pc=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,yl=37821,co=36492,vl=36494,Ml=36495,gu=36283,Sl=36284,bl=36285,El=36286;var Mr=2300,Sr=2301,ho=2302,wl=2400,Al=2401,Tl=2402;var _u=3200,xu=3201,Ic=0,yu=1,Kn="",Ke="srgb",ai="srgb-linear",Ra="display-p3",Zr="display-p3-linear",br="linear",pe="srgb",Er="rec709",wr="p3";var Bi=7680;var Cl=519,vu=512,Mu=513,Su=514,Lc=515,bu=516,Eu=517,wu=518,Au=519,Yo=35044;var Rl="300 es",qo=1035,kn=2e3,Ar=2001,si=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uo=Math.PI/180,Zo=180/Math.PI;function ni(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function je(n,t,e){return Math.max(t,Math.min(e,n))}function Tu(n,t){return(n%t+t)%t}function fo(n,t,e){return(1-e)*n+e*t}function Fl(n){return(n&n-1)===0&&n!==0}function Jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Ot=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],v=s[0],p=s[3],u=s[6],b=s[1],x=s[4],T=s[7],F=s[2],R=s[5],C=s[8];return r[0]=a*v+o*b+l*F,r[3]=a*p+o*x+l*R,r[6]=a*u+o*T+l*C,r[1]=c*v+h*b+d*F,r[4]=c*p+h*x+d*R,r[7]=c*u+h*T+d*C,r[2]=f*v+m*b+g*F,r[5]=f*p+m*x+g*R,r[8]=f*u+m*T+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new $t;function Dc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Cu(){let n=Tr("canvas");return n.style.display="block",n}var Pl={};function Uc(n){n in Pl||(Pl[n]=!0,console.warn(n))}var Il=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[ai]:{transfer:br,primaries:Er,toReference:n=>n,fromReference:n=>n},[Ke]:{transfer:pe,primaries:Er,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zr]:{transfer:br,primaries:wr,toReference:n=>n.applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Il)},[Ra]:{transfer:pe,primaries:wr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Il).convertLinearToSRGB()}},Ru=new Set([ai,Zr]),de={enabled:!0,_workingColorSpace:ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ru.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Js[t].toReference,s=Js[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Js[n].primaries},getTransfer:function(n){return n===Kn?br:Js[n].transfer}};function os(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Oi,Cr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Oi===void 0&&(Oi=Tr("canvas")),Oi.width=t.width,Oi.height=t.height;let i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(os(e[i]/255)*255):e[i]=os(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Fu=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=ni(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function go(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Cr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Pu=0,cn=class n extends si{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Mn,s=Mn,r=$e,a=bi,o=Sn,l=ei,c=n.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=ni(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ec;cn.DEFAULT_ANISOTROPY=1;var Ue=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,T=(m+1)/2,F=(u+1)/2,R=(h+f)/4,C=(d+v)/4,G=(g+p)/4;return x>T&&x>F?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=C/i):T>F?T<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),i=R/s,r=G/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=C/r,s=G/r),this.set(i,s,r,e),this}let b=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(p-g)/b,this.y=(d-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends si{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ue(0,0,t,e),this.scissorTest=!1,this.viewport=new Ue(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let r=new cn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Rr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hn=class extends $o{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fr=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends cn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==m||h!==g){let p=1-o,u=l*f+c*m+h*g+d*v,b=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let F=Math.sqrt(x),R=Math.atan2(F,u*b);p=Math.sin(p*R)/F,o=Math.sin(o*R)/F}let T=o*b;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,d=d*p+v*T,p===1-o){let F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-o*m,t[e+2]=c*g+h*m+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(je(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new D,Dl=new ri,Ti=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Ks.subVectors(this.max,Rs),zi.subVectors(t.a,Rs),ki.subVectors(t.b,Rs),Hi.subVectors(t.c,Rs),Xn.subVectors(ki,zi),Yn.subVectors(Hi,ki),pi.subVectors(zi,Hi);let e=[0,-Xn.z,Xn.y,0,-Yn.z,Yn.y,0,-pi.z,pi.y,Xn.z,0,-Xn.x,Yn.z,0,-Yn.x,pi.z,0,-pi.x,-Xn.y,Xn.x,0,-Yn.y,Yn.x,0,-pi.y,pi.x,0];return!xo(e,zi,ki,Hi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,zi,ki,Hi,Ks))?!1:(js.crossVectors(Xn,Yn),e=[js.x,js.y,js.z],xo(e,zi,ki,Hi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(In),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},In=[new D,new D,new D,new D,new D,new D,new D,new D],_n=new D,$s=new Ti,zi=new D,ki=new D,Hi=new D,Xn=new D,Yn=new D,pi=new D,Rs=new D,Ks=new D,js=new D,mi=new D;function xo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){mi.fromArray(n,r);let o=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),l=t.dot(mi),c=e.dot(mi),h=i.dot(mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Iu=new Ti,Fs=new D,yo=new D,Os=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Iu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);let e=Fs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Fs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(yo)),this.expandByPoint(Fs.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ln=new D,vo=new D,Qs=new D,qn=new D,Mo=new D,tr=new D,So=new D,Pr=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vo.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=qn.dot(this.direction),l=-qn.dot(Qs),c=qn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let v=1/h;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vo).addScaledVector(Qs,f),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);let i=Ln.dot(this.direction),s=Ln.dot(Ln)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,i,s,r){Mo.subVectors(e,t),tr.subVectors(i,t),So.crossVectors(Mo,tr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);let l=o*this.direction.dot(tr.crossVectors(qn,tr));if(l<0)return null;let c=o*this.direction.dot(Mo.cross(qn));if(c<0||l+c>a)return null;let h=-o*qn.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},be=class n{constructor(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p)}set(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-v*d}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lu,t,Du)}lookAt(t,e,i){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Zn.crossVectors(i,on),Zn.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Zn.crossVectors(i,on)),Zn.normalize(),er.crossVectors(on,Zn),s[0]=Zn.x,s[4]=er.x,s[8]=on.x,s[1]=Zn.y,s[5]=er.y,s[9]=on.y,s[2]=Zn.z,s[6]=er.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],b=i[3],x=i[7],T=i[11],F=i[15],R=s[0],C=s[4],G=s[8],j=s[12],y=s[1],w=s[5],st=s[9],it=s[13],I=s[2],$=s[6],Y=s[10],K=s[14],Z=s[3],J=s[7],lt=s[11],ht=s[15];return r[0]=a*R+o*y+l*I+c*Z,r[4]=a*C+o*w+l*$+c*J,r[8]=a*G+o*st+l*Y+c*lt,r[12]=a*j+o*it+l*K+c*ht,r[1]=h*R+d*y+f*I+m*Z,r[5]=h*C+d*w+f*$+m*J,r[9]=h*G+d*st+f*Y+m*lt,r[13]=h*j+d*it+f*K+m*ht,r[2]=g*R+v*y+p*I+u*Z,r[6]=g*C+v*w+p*$+u*J,r[10]=g*G+v*st+p*Y+u*lt,r[14]=g*j+v*it+p*K+u*ht,r[3]=b*R+x*y+T*I+F*Z,r[7]=b*C+x*w+T*$+F*J,r[11]=b*G+x*st+T*Y+F*lt,r[15]=b*j+x*it+T*K+F*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*m-i*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+i*a*m+r*o*h-i*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],b=d*p*c-v*f*c+v*l*m-o*p*m-d*l*u+o*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,T=h*v*c-g*d*c+g*o*m-a*v*m-h*o*u+a*d*u,F=g*d*l-h*v*l-g*o*f+a*v*f+h*o*p-a*d*p,R=e*b+i*x+s*T+r*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/R;return t[0]=b*C,t[1]=(v*f*r-d*p*r-v*s*m+i*p*m+d*s*u-i*f*u)*C,t[2]=(o*p*r-v*l*r+v*s*c-i*p*c-o*s*u+i*l*u)*C,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*m-i*l*m)*C,t[4]=x*C,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*C,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*u-e*l*u)*C,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*C,t[8]=T*C,t[9]=(g*d*r-h*v*r-g*i*m+e*v*m+h*i*u-e*d*u)*C,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*u+e*o*u)*C,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*m-e*o*m)*C,t[12]=F*C,t[13]=(h*v*s-g*d*s+g*i*f-e*v*f-h*i*p+e*d*p)*C,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*p-e*o*p)*C,t[15]=(a*d*s-h*o*s+h*i*l-e*d*l-a*i*f+e*o*f)*C,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,v=a*h,p=a*d,u=o*d,b=l*c,x=l*h,T=l*d,F=i.x,R=i.y,C=i.z;return s[0]=(1-(v+u))*F,s[1]=(m+T)*F,s[2]=(g-x)*F,s[3]=0,s[4]=(m-T)*R,s[5]=(1-(f+u))*R,s[6]=(p+b)*R,s[7]=0,s[8]=(g+x)*C,s[9]=(p-b)*C,s[10]=(1-(f+v))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Vi.set(s[0],s[1],s[2]).length(),a=Vi.set(s[4],s[5],s[6]).length(),o=Vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);let c=1/r,h=1/a,d=1/o;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,g;if(o===kn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ar)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=kn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(a-r),f=(e+t)*c,m=(i+s)*h,g,v;if(o===kn)g=(a+r)*d,v=-2*d;else if(o===Ar)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Vi=new D,xn=new be,Lu=new D(0,0,0),Du=new D(1,1,1),Zn=new D,er=new D,on=new D,Ul=new be,Nl=new ri,Tn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Uu=0,Bl=new D,Gi=new ri,Dn=new be,nr=new D,Ps=new D,Nu=new D,Bu=new ri,Ol=new D(1,0,0),zl=new D(0,1,0),kl=new D(0,0,1),Ou={type:"added"},zu={type:"removed"},bo={type:"childadded",child:null},Eo={type:"childremoved",child:null},Ve=class n extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new Tn,i=new ri,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new be},normalMatrix:{value:new $t}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.multiply(Gi),this}rotateOnWorldAxis(t,e){return Gi.setFromAxisAngle(t,e),this.quaternion.premultiply(Gi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ps,nr,this.up):Dn.lookAt(nr,Ps,this.up),this.quaternion.setFromRotationMatrix(Dn),s&&(Dn.extractRotation(s.matrixWorld),Gi.setFromRotationMatrix(Dn),this.quaternion.premultiply(Gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),bo.child=t,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zu),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Nu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Bu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ve.DEFAULT_UP=new D(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yn=new D,Un=new D,wo=new D,Nn=new D,Wi=new D,Xi=new D,Hl=new D,Ao=new D,To=new D,Co=new D,Ei=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){yn.subVectors(s,e),Un.subVectors(i,e),wo.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(Un),l=yn.dot(wo),c=Un.dot(Un),h=Un.dot(wo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Nn)===null?!1:Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Nn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Nn.x),l.addScaledVector(a,Nn.y),l.addScaledVector(o,Nn.z),l)}static isFrontFacing(t,e,i,s){return yn.subVectors(i,e),Un.subVectors(t,e),yn.cross(Un).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),yn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Wi.subVectors(s,i),Xi.subVectors(r,i),Ao.subVectors(t,i);let l=Wi.dot(Ao),c=Xi.dot(Ao);if(l<=0&&c<=0)return e.copy(i);To.subVectors(t,s);let h=Wi.dot(To),d=Xi.dot(To);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Wi,a);Co.subVectors(t,r);let m=Wi.dot(Co),g=Xi.dot(Co);if(g>=0&&m<=g)return e.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Xi,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Hl.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Hl,o);let u=1/(p+v+f);return a=v*u,o=f*u,e.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,de.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=de.workingColorSpace){return this.r=t,this.g=e,this.b=i,de.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=de.workingColorSpace){if(t=Tu(t,1),e=je(e,0,1),i=je(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return de.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=Nc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return de.fromWorkingColorSpace(He.copy(this),t),Math.round(je(He.r*255,0,255))*65536+Math.round(je(He.g*255,0,255))*256+Math.round(je(He.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=de.workingColorSpace){de.fromWorkingColorSpace(He.copy(this),e);let i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=de.workingColorSpace){return de.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=Ke){de.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,s=He.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(ir);let i=fo(Jn.h,ir.h,e),s=fo(Jn.s,ir.s,e),r=fo(Jn.l,ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Kt;Kt.NAMES=Nc;var ku=0,oi=class extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=rs,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Vn=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new D,sr=new Ot,Oe=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yo&&(t.usage=this.usage),t}};var Ir=class extends Oe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Lr=class extends Oe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ln=class extends Oe{constructor(t,e,i){super(new Float32Array(t),e,i)}},Hu=0,pn=new be,Fo=new Ve,Yi=new D,an=new Ti,Is=new Ti,De=new D,bn=class n extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Lr:Ir)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ln(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];an.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(an.min,Is.min),an.expandByPoint(De),De.addVectors(an.max,Is.max),an.expandByPoint(De)):(an.expandByPoint(Is.min),an.expandByPoint(Is.max))}an.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Yi.fromBufferAttribute(t,c),De.add(Yi)),s=Math.max(s,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Oe(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<i.count;G++)o[G]=new D,l[G]=new D;let c=new D,h=new D,d=new D,f=new Ot,m=new Ot,g=new Ot,v=new D,p=new D;function u(G,j,y){c.fromBufferAttribute(i,G),h.fromBufferAttribute(i,j),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,G),m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),m.sub(f),g.sub(f);let w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[G].add(v),o[j].add(v),o[y].add(v),l[G].add(p),l[j].add(p),l[y].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let G=0,j=b.length;G<j;++G){let y=b[G],w=y.start,st=y.count;for(let it=w,I=w+st;it<I;it+=3)u(t.getX(it+0),t.getX(it+1),t.getX(it+2))}let x=new D,T=new D,F=new D,R=new D;function C(G){F.fromBufferAttribute(s,G),R.copy(F);let j=o[G];x.copy(j),x.sub(F.multiplyScalar(F.dot(j))).normalize(),T.crossVectors(R,j);let w=T.dot(l[G])<0?-1:1;a.setXYZW(G,x.x,x.y,x.z,w)}for(let G=0,j=b.length;G<j;++G){let y=b[G],w=y.start,st=y.count;for(let it=w,I=w+st;it<I;it+=3)C(t.getX(it+0)),C(t.getX(it+1)),C(t.getX(it+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Oe(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=new be,gi=new Pr,rr=new Os,Gl=new D,qi=new D,Zi=new D,Ji=new D,Po=new D,or=new D,ar=new Ot,lr=new Ot,cr=new Ot,Wl=new D,Xl=new D,Yl=new D,hr=new D,ur=new D,Ne=class extends Ve{constructor(t=new bn,e=new Vn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Po.fromBufferAttribute(d,t),a?or.addScaledVector(Po,h):or.addScaledVector(Po.sub(e),h))}e.add(or)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),gi.copy(t.ray).recast(t.near),!(rr.containsPoint(gi.origin)===!1&&(gi.intersectSphere(rr,Gl)===null||gi.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),gi.copy(t.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,gi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,F=x;T<F;T+=3){let R=o.getX(T),C=o.getX(T+1),G=o.getX(T+2);s=dr(this,u,t,i,c,h,d,R,C,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let b=o.getX(p),x=o.getX(p+1),T=o.getX(p+2);s=dr(this,a,t,i,c,h,d,b,x,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=a[p.materialIndex],b=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=b,F=x;T<F;T+=3){let R=T,C=T+1,G=T+2;s=dr(this,u,t,i,c,h,d,R,C,G),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let b=p,x=p+1,T=p+2;s=dr(this,a,t,i,c,h,d,b,x,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Vu(n,t,e,i,s,r,a,o){let l;if(t.side===Qe?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ii,o),l===null)return null;ur.copy(o),ur.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:n}}function dr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,qi),n.getVertexPosition(l,Zi),n.getVertexPosition(c,Ji);let h=Vu(n,t,e,i,qi,Zi,Ji,hr);if(h){s&&(ar.fromBufferAttribute(s,o),lr.fromBufferAttribute(s,l),cr.fromBufferAttribute(s,c),h.uv=Ei.getInterpolation(hr,qi,Zi,Ji,ar,lr,cr,new Ot)),r&&(ar.fromBufferAttribute(r,o),lr.fromBufferAttribute(r,l),cr.fromBufferAttribute(r,c),h.uv1=Ei.getInterpolation(hr,qi,Zi,Ji,ar,lr,cr,new Ot)),a&&(Wl.fromBufferAttribute(a,o),Xl.fromBufferAttribute(a,l),Yl.fromBufferAttribute(a,c),h.normal=Ei.getInterpolation(hr,qi,Zi,Ji,Wl,Xl,Yl,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};Ei.getNormal(qi,Zi,Ji,d.normal),h.face=d}return h}var Ci=class n extends bn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(d,2));function g(v,p,u,b,x,T,F,R,C,G,j){let y=T/C,w=F/G,st=T/2,it=F/2,I=R/2,$=C+1,Y=G+1,K=0,Z=0,J=new D;for(let lt=0;lt<Y;lt++){let ht=lt*w-it;for(let _t=0;_t<$;_t++){let zt=_t*y-st;J[v]=zt*b,J[p]=ht*x,J[u]=I,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[u]=R>0?1:-1,h.push(J.x,J.y,J.z),d.push(_t/C),d.push(1-lt/G),K+=1}}for(let lt=0;lt<G;lt++)for(let ht=0;ht<C;ht++){let _t=f+ht+$*lt,zt=f+ht+$*(lt+1),W=f+(ht+1)+$*(lt+1),Q=f+(ht+1)+$*lt;l.push(_t,zt,Q),l.push(zt,W,Q),Z+=6}o.addGroup(m,Z,j),m+=Z,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function us(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function qe(n){let t={};for(let e=0;e<n.length;e++){let i=us(n[e]);for(let s in i)t[s]=i[s]}return t}function Gu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bc(n){return n.getRenderTarget()===null?n.outputColorSpace:de.workingColorSpace}var Wu={clone:us,merge:qe},Xu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Gu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Dr=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new D,ql=new Ot,Zl=new Ot,Ze=class extends Dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,ql,Zl),e.subVectors(Zl,ql)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},$i=-90,Ki=1,jo=class extends Ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze($i,Ki,t,e);s.layers=this.layers,this.add(s);let r=new Ze($i,Ki,t,e);r.layers=this.layers,this.add(r);let a=new Ze($i,Ki,t,e);a.layers=this.layers,this.add(a);let o=new Ze($i,Ki,t,e);o.layers=this.layers,this.add(o);let l=new Ze($i,Ki,t,e);l.layers=this.layers,this.add(l);let c=new Ze($i,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ur=class extends cn{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ci(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Qn});r.uniforms.tEquirect.value=e;let a=new Ne(s,r),o=e.minFilter;return e.minFilter===bi&&(e.minFilter=$e),new jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Io=new D,qu=new D,Zu=new $t,vn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Io.subVectors(i,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Zu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},_i=new Os,fr=new D,ks=class{constructor(t=new vn,e=new vn,i=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],b=s[13],x=s[14],T=s[15];if(i[0].setComponents(l-r,f-c,p-m,T-u).normalize(),i[1].setComponents(l+r,f+c,p+m,T+u).normalize(),i[2].setComponents(l+a,f+h,p+g,T+b).normalize(),i[3].setComponents(l-a,f-h,p-g,T-b).normalize(),i[4].setComponents(l-o,f-d,p-v,T-x).normalize(),e===kn)i[5].setComponents(l+o,f+d,p+v,T+x).normalize();else if(e===Ar)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ju(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){let u=g[v];e?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var ds=class n extends bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){let b=u*f-a;for(let x=0;x<c;x++){let T=x*d-r;g.push(T,-b,0),v.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let b=0;b<o;b++){let x=b+c*u,T=b+c*(u+1),F=b+1+c*(u+1),R=b+1+c*u;m.push(x,T,R),m.push(T,F,R)}this.setIndex(m),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},$u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ku=`#ifdef USE_ALPHAHASH
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
#endif`,ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ed=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
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
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sd=`#ifdef USE_BATCHING
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
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ad=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,hd=`#ifdef USE_BUMPMAP
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,vd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Td=`
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
}`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ud=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Jd=`struct PhysicalMaterial {
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
}`,$d=`
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,af=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
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
#endif`,ff=`#ifdef USE_MORPHTARGETS
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
#endif`,pf=`#ifdef USE_MORPHTARGETS
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
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vf=`#ifdef USE_NORMALMAP
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
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,If=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nf=`float getShadowMask() {
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
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Of=`#ifdef USE_SKINNING
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
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$f=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jf=`uniform sampler2D t2D;
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
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,_p=`#define NORMAL
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
}`,xp=`#define NORMAL
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
}`,yp=`#define PHONG
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
}`,vp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define STANDARD
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
}`,bp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,wp=`uniform float size;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Tp=`#include <common>
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
}`,Cp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:$u,alphahash_pars_fragment:Ku,alphamap_fragment:ju,alphamap_pars_fragment:Qu,alphatest_fragment:td,alphatest_pars_fragment:ed,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:sd,batching_vertex:rd,begin_vertex:od,beginnormal_vertex:ad,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:hd,clipping_planes_fragment:ud,clipping_planes_pars_fragment:dd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:xd,common:yd,cube_uv_reflection_fragment:vd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:bd,emissivemap_fragment:Ed,emissivemap_pars_fragment:wd,colorspace_fragment:Ad,colorspace_pars_fragment:Td,envmap_fragment:Cd,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Fd,envmap_pars_vertex:Pd,envmap_physical_pars_fragment:Gd,envmap_vertex:Id,fog_vertex:Ld,fog_pars_vertex:Dd,fog_fragment:Ud,fog_pars_fragment:Nd,gradientmap_pars_fragment:Bd,lightmap_fragment:Od,lightmap_pars_fragment:zd,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Vd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Yd,lights_phong_pars_fragment:qd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Jd,lights_fragment_begin:$d,lights_fragment_maps:Kd,lights_fragment_end:jd,logdepthbuf_fragment:Qd,logdepthbuf_pars_fragment:tf,logdepthbuf_pars_vertex:ef,logdepthbuf_vertex:nf,map_fragment:sf,map_pars_fragment:rf,map_particle_fragment:of,map_particle_pars_fragment:af,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:xf,normal_vertex:yf,normalmap_pars_fragment:vf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:Sf,clearcoat_pars_fragment:bf,iridescence_pars_fragment:Ef,opaque_fragment:wf,packing:Af,premultiplied_alpha_fragment:Tf,project_vertex:Cf,dithering_fragment:Rf,dithering_pars_fragment:Ff,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:If,shadowmap_pars_fragment:Lf,shadowmap_pars_vertex:Df,shadowmap_vertex:Uf,shadowmask_pars_fragment:Nf,skinbase_vertex:Bf,skinning_pars_vertex:Of,skinning_vertex:zf,skinnormal_vertex:kf,specularmap_fragment:Hf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:Yf,uv_pars_fragment:qf,uv_pars_vertex:Zf,uv_vertex:Jf,worldpos_vertex:$f,background_vert:Kf,background_frag:jf,backgroundCube_vert:Qf,backgroundCube_frag:tp,cube_vert:ep,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:op,equirect_vert:ap,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:vp,meshphysical_vert:Mp,meshphysical_frag:Sp,meshtoon_vert:bp,meshtoon_frag:Ep,points_vert:wp,points_frag:Ap,shadow_vert:Tp,shadow_frag:Cp,sprite_vert:Rp,sprite_frag:Fp},dt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},wn={basic:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([dt.points,dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([dt.common,dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([dt.sprite,dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:qe([dt.common,dt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:qe([dt.lights,dt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};wn.physical={uniforms:qe([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var pr={r:0,b:0,g:0},xi=new Tn,Pp=new be;function Ip(n,t,e,i,s,r,a){let o=new Kt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let b=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),b=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===qr)?(h===void 0&&(h=new Ne(new Ci(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:us(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),xi.copy(u.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(xi)),h.material.toneMapped=de.getTransfer(x.colorSpace)!==pe,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ne(new ds(2,2),new Cn({name:"BackgroundMaterial",uniforms:us(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=de.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(pr,Bc(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Lp(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(I,$,Y,K,Z){let J=!1;if(a){let lt=v(K,Y,$);c!==lt&&(c=lt,m(c.object)),J=u(I,K,Y,Z),J&&b(I,K,Y,Z)}else{let lt=$.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==lt)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=lt,J=!0)}Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,G(I,$,Y,K),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,$,Y){let K=Y.wireframe===!0,Z=o[I.id];Z===void 0&&(Z={},o[I.id]=Z);let J=Z[$.id];J===void 0&&(J={},Z[$.id]=J);let lt=J[K];return lt===void 0&&(lt=p(f()),J[K]=lt),lt}function p(I){let $=[],Y=[],K=[];for(let Z=0;Z<s;Z++)$[Z]=0,Y[Z]=0,K[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function u(I,$,Y,K){let Z=c.attributes,J=$.attributes,lt=0,ht=Y.getAttributes();for(let _t in ht)if(ht[_t].location>=0){let W=Z[_t],Q=J[_t];if(Q===void 0&&(_t==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),_t==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;lt++}return c.attributesNum!==lt||c.index!==K}function b(I,$,Y,K){let Z={},J=$.attributes,lt=0,ht=Y.getAttributes();for(let _t in ht)if(ht[_t].location>=0){let W=J[_t];W===void 0&&(_t==="instanceMatrix"&&I.instanceMatrix&&(W=I.instanceMatrix),_t==="instanceColor"&&I.instanceColor&&(W=I.instanceColor));let Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),Z[_t]=Q,lt++}c.attributes=Z,c.attributesNum=lt,c.index=K}function x(){let I=c.newAttributes;for(let $=0,Y=I.length;$<Y;$++)I[$]=0}function T(I){F(I,0)}function F(I,$){let Y=c.newAttributes,K=c.enabledAttributes,Z=c.attributeDivisors;Y[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),Z[I]!==$&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,$),Z[I]=$)}function R(){let I=c.newAttributes,$=c.enabledAttributes;for(let Y=0,K=$.length;Y<K;Y++)$[Y]!==I[Y]&&(n.disableVertexAttribArray(Y),$[Y]=0)}function C(I,$,Y,K,Z,J,lt){lt===!0?n.vertexAttribIPointer(I,$,Y,Z,J):n.vertexAttribPointer(I,$,Y,K,Z,J)}function G(I,$,Y,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let Z=K.attributes,J=Y.getAttributes(),lt=$.defaultAttributeValues;for(let ht in J){let _t=J[ht];if(_t.location>=0){let zt=Z[ht];if(zt===void 0&&(ht==="instanceMatrix"&&I.instanceMatrix&&(zt=I.instanceMatrix),ht==="instanceColor"&&I.instanceColor&&(zt=I.instanceColor)),zt!==void 0){let W=zt.normalized,Q=zt.itemSize,nt=e.get(zt);if(nt===void 0)continue;let xt=nt.buffer,St=nt.type,yt=nt.bytesPerElement,se=i.isWebGL2===!0&&(St===n.INT||St===n.UNSIGNED_INT||zt.gpuType===wc);if(zt.isInterleavedBufferAttribute){let Dt=zt.data,U=Dt.stride,me=zt.offset;if(Dt.isInstancedInterleavedBuffer){for(let Ct=0;Ct<_t.locationSize;Ct++)F(_t.location+Ct,Dt.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Dt.meshPerAttribute*Dt.count)}else for(let Ct=0;Ct<_t.locationSize;Ct++)T(_t.location+Ct);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Ct=0;Ct<_t.locationSize;Ct++)C(_t.location+Ct,Q/_t.locationSize,St,W,U*yt,(me+Q/_t.locationSize*Ct)*yt,se)}else{if(zt.isInstancedBufferAttribute){for(let Dt=0;Dt<_t.locationSize;Dt++)F(_t.location+Dt,zt.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=zt.meshPerAttribute*zt.count)}else for(let Dt=0;Dt<_t.locationSize;Dt++)T(_t.location+Dt);n.bindBuffer(n.ARRAY_BUFFER,xt);for(let Dt=0;Dt<_t.locationSize;Dt++)C(_t.location+Dt,Q/_t.locationSize,St,W,Q*yt,Q/_t.locationSize*Dt*yt,se)}}else if(lt!==void 0){let W=lt[ht];if(W!==void 0)switch(W.length){case 2:n.vertexAttrib2fv(_t.location,W);break;case 3:n.vertexAttrib3fv(_t.location,W);break;case 4:n.vertexAttrib4fv(_t.location,W);break;default:n.vertexAttrib1fv(_t.location,W)}}}}R()}function j(){st();for(let I in o){let $=o[I];for(let Y in $){let K=$[Y];for(let Z in K)g(K[Z].object),delete K[Z];delete $[Y]}delete o[I]}}function y(I){if(o[I.id]===void 0)return;let $=o[I.id];for(let Y in $){let K=$[Y];for(let Z in K)g(K[Z].object),delete K[Z];delete $[Y]}delete o[I.id]}function w(I){for(let $ in o){let Y=o[$];if(Y[I.id]===void 0)continue;let K=Y[I.id];for(let Z in K)g(K[Z].object),delete K[Z];delete Y[I.id]}}function st(){it(),h=!0,c!==l&&(c=l,m(c.object))}function it(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:st,resetDefaultState:it,dispose:j,releaseStatesOfGeometry:y,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:T,disableUnusedAttributes:R}}function Dp(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,d){n.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Up(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,T=a||t.has("OES_texture_float"),F=x&&T,R=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:F,maxSamples:R}}function Np(n){let t=this,e=null,i=0,s=!1,r=!1,a=new vn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let b=r?0:i,x=b*4,T=u.clippingState||null;l.value=T,T=h(g,f,x,m);for(let F=0;F!==x;++F)T[F]=e[F];u.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let u=m+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,T=m;x!==v;++x,T+=4)a.copy(d[x]).applyMatrix4(b,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Bp(n){let t=new WeakMap;function e(a,o){return o===Vo?a.mapping=ls:o===Go&&(a.mapping=cs),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vo||o===Go)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qo(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,Jl=[.125,.215,.35,.446,.526,.582],Si=20,Lo=new Nr,$l=new Kt,Do=null,Uo=0,No=0,vi=(1+Math.sqrt(5))/2,ji=1/vi,Kl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,vi,ji),new D(0,vi,-ji),new D(ji,0,vi),new D(-ji,0,vi),new D(vi,ji,0),new D(-vi,ji,0)],Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:Bs,format:Sn,colorSpace:ai,depthBuffer:!1},s=jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Op(r)),this._blurMaterial=zp(r,t,e)}return s}_compileMaterial(t){let e=new Ne(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,i,s){let o=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($l),h.toneMapping=ti,h.autoClear=!1;let m=new Vn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),g=new Ne(new Ci,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy($l),v=!0);for(let u=0;u<6;u++){let b=u%3;b===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):b===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let x=this._cubeSize;mr(s,b*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ne(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Lo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kl[(s-1)%Kl.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ne(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Si-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Si;p>Si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Si}`);let u=[],b=0;for(let C=0;C<Si;++C){let G=C/v,j=Math.exp(-G*G/2);u.push(j),C===0?b+=j:C<p&&(b+=2*j)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let T=this._sizeLods[s],F=3*T*(s>x-is?s-x+is:0),R=4*(this._cubeSize-T);mr(e,F,R,3*T,2*T),l.setRenderTarget(e),l.render(d,Lo)}};function Op(n){let t=[],e=[],i=[],s=n,r=n-is+1+Jl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-is?l=Jl[a-n+is-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,b=new Float32Array(v*g*m),x=new Float32Array(p*g*m),T=new Float32Array(u*g*m);for(let R=0;R<m;R++){let C=R%3*2/3-1,G=R>2?0:-1,j=[C,G,0,C+2/3,G,0,C+2/3,G+1,0,C,G,0,C+2/3,G+1,0,C,G+1,0];b.set(j,v*g*R),x.set(f,p*g*R);let y=[R,R,R,R,R,R];T.set(y,u*g*R)}let F=new bn;F.setAttribute("position",new Oe(b,v)),F.setAttribute("uv",new Oe(x,p)),F.setAttribute("faceIndex",new Oe(T,u)),t.push(F),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jl(n,t,e){let i=new Hn(n,t,e);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zp(n,t,e){let i=new Float32Array(Si),s=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ql(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function tc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function kp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Vo||l===Go,h=l===ls||l===cs;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Br(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Br(n));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Hp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Vp(n,t,e,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,u=v.length;p<u;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let b=m.array;v=m.version;for(let x=0,T=b.length;x<T;x+=3){let F=b[x+0],R=b[x+1],C=b[x+2];f.push(F,R,R,C,C,F)}}else if(g!==void 0){let b=g.array;v=g.version;for(let x=0,T=b.length/3-1;x<T;x+=3){let F=x+0,R=x+1,C=x+2;f.push(F,R,R,C,C,F)}}else return;let p=new(Dc(f)?Lr:Ir)(f,1);p.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Gp(n,t,e,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*l),e.update(g,r,1)}function d(m,g,v){if(v===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*l,v),e.update(g,r,v)}function f(m,g,v){if(v===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let u=0;for(let b=0;b<v;b++)u+=g[b];e.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Wp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Xp(n,t){return n[0]-t[0]}function Yp(n,t){return Math.abs(t[1])-Math.abs(n[1])}function qp(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new Ue,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let st=function(){y.dispose(),r.delete(h),h.removeEventListener("dispose",st)};v!==void 0&&v.texture.dispose();let p=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],F=h.morphAttributes.color||[],R=0;p===!0&&(R=1),u===!0&&(R=2),b===!0&&(R=3);let C=h.attributes.position.count*R,G=1;C>t.maxTextureSize&&(G=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let j=new Float32Array(C*G*4*g),y=new Fr(j,C,G,g);y.type=zn,y.needsUpdate=!0;let w=R*4;for(let it=0;it<g;it++){let I=x[it],$=T[it],Y=F[it],K=C*G*4*it;for(let Z=0;Z<I.count;Z++){let J=Z*w;p===!0&&(a.fromBufferAttribute(I,Z),j[K+J+0]=a.x,j[K+J+1]=a.y,j[K+J+2]=a.z,j[K+J+3]=0),u===!0&&(a.fromBufferAttribute($,Z),j[K+J+4]=a.x,j[K+J+5]=a.y,j[K+J+6]=a.z,j[K+J+7]=0),b===!0&&(a.fromBufferAttribute(Y,Z),j[K+J+8]=a.x,j[K+J+9]=a.y,j[K+J+10]=a.z,j[K+J+11]=Y.itemSize===4?a.w:1)}}v={count:g,texture:y,size:new Ot(C,G)},r.set(h,v),h.addEventListener("dispose",st)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let p=0;for(let b=0;b<f.length;b++)p+=f[b];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<m;x++){let T=g[x];T[0]=x,T[1]=f[x]}g.sort(Yp);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xp);let v=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let T=o[x],F=T[0],R=T[1];F!==Number.MAX_SAFE_INTEGER&&R?(v&&h.getAttribute("morphTarget"+x)!==v[F]&&h.setAttribute("morphTarget"+x,v[F]),p&&h.getAttribute("morphNormal"+x)!==p[F]&&h.setAttribute("morphNormal"+x,p[F]),s[x]=R,u+=R):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let b=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Zp(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Or=class extends cn{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ai,h!==Ai&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ai&&(i=jn),i===void 0&&h===hs&&(i=wi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Re,this.minFilter=l!==void 0?l:Re,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zc=new cn,kc=new Or(1,1);kc.compareFunction=Lc;var Hc=new Fr,Vc=new Ko,Gc=new Ur,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function _s(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Pe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ie(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jr(n,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Jp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function $p(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2fv(this.addr,t),Ie(e,t)}}function Kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;n.uniform3fv(this.addr,t),Ie(e,t)}}function jp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4fv(this.addr,t),Ie(e,t)}}function Qp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),Ie(e,i)}}function tm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),Ie(e,i)}}function em(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),Ie(e,i)}}function nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2iv(this.addr,t),Ie(e,t)}}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3iv(this.addr,t),Ie(e,t)}}function rm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4iv(this.addr,t),Ie(e,t)}}function om(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;n.uniform2uiv(this.addr,t),Ie(e,t)}}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;n.uniform3uiv(this.addr,t),Ie(e,t)}}function cm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;n.uniform4uiv(this.addr,t),Ie(e,t)}}function hm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kc:zc;e.setTexture2D(t||r,s)}function um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vc,s)}function dm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gc,s)}function fm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hc,s)}function pm(n){switch(n){case 5126:return Jp;case 35664:return $p;case 35665:return Kp;case 35666:return jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return om;case 36294:return am;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return hm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return dm;case 36289:case 36303:case 36311:case 36292:return fm}}function mm(n,t){n.uniform1fv(this.addr,t)}function gm(n,t){let e=_s(t,this.size,2);n.uniform2fv(this.addr,e)}function _m(n,t){let e=_s(t,this.size,3);n.uniform3fv(this.addr,e)}function xm(n,t){let e=_s(t,this.size,4);n.uniform4fv(this.addr,e)}function ym(n,t){let e=_s(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function vm(n,t){let e=_s(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Mm(n,t){let e=_s(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Sm(n,t){n.uniform1iv(this.addr,t)}function bm(n,t){n.uniform2iv(this.addr,t)}function Em(n,t){n.uniform3iv(this.addr,t)}function wm(n,t){n.uniform4iv(this.addr,t)}function Am(n,t){n.uniform1uiv(this.addr,t)}function Tm(n,t){n.uniform2uiv(this.addr,t)}function Cm(n,t){n.uniform3uiv(this.addr,t)}function Rm(n,t){n.uniform4uiv(this.addr,t)}function Fm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zc,r[a])}function Pm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function Im(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function Lm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Pe(i,r)||(n.uniform1iv(this.addr,r),Ie(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function Dm(n){switch(n){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return xm;case 35674:return ym;case 35675:return vm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return bm;case 35668:case 35672:return Em;case 35669:case 35673:return wm;case 5125:return Am;case 36294:return Tm;case 36295:return Cm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Lm}}var ta=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=pm(e.type)}},ea=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dm(e.type)}},na=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function oc(n,t){n.seq.push(t),n.map[t.id]=t}function Um(n,t,e){let i=n.name,s=i.length;for(Bo.lastIndex=0;;){let r=Bo.exec(i),a=Bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){oc(e,c===void 0?new ta(o,n,t):new ea(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new na(o),oc(e,d)),e=d}}}var as=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Um(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function ac(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Nm=37297,Bm=0;function Om(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function zm(n){let t=de.getPrimaries(de.workingColorSpace),e=de.getPrimaries(n),i;switch(t===e?i="":t===wr&&e===Er?i="LinearDisplayP3ToLinearSRGB":t===Er&&e===wr&&(i="LinearSRGBToLinearDisplayP3"),n){case ai:case Zr:return[i,"LinearTransferOETF"];case Ke:case Ra:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Om(n.getShaderSource(t),a)}else return s}function km(n,t){let e=zm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hm(n,t){let e;switch(t){case nu:e="Linear";break;case iu:e="Reinhard";break;case su:e="OptimizedCineon";break;case ru:e="ACESFilmic";break;case au:e="AgX";break;case lu:e="Neutral";break;case ou:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Vm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ss).join(`
`)}function Gm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Wm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Xm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ss(n){return n!==""}function cc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(Ym,Zm)}var qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Zm(n,t){let e=Jt[t];if(e===void 0){let i=qm.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}var Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(Jm,$m)}function $m(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Km(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function jm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function t0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case tu:t="ENVMAP_BLENDING_MIX";break;case eu:t="ENVMAP_BLENDING_ADD";break}return t}function e0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function n0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Km(e),c=jm(e),h=Qm(e),d=t0(e),f=e0(e),m=e.isWebGL2?"":Vm(e),g=Gm(e),v=Wm(r),p=s.createProgram(),u,b,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),u.length>0&&(u+=`
`),b=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(ss).join(`
`),b.length>0&&(b+=`
`)):(u=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),b=[m,dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Hm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,km("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ss).join(`
`)),a=ia(a),a=cc(a,e),a=hc(a,e),o=ia(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,b=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);let T=x+u+a,F=x+b+o,R=ac(s,s.VERTEX_SHADER,T),C=ac(s,s.FRAGMENT_SHADER,F);s.attachShader(p,R),s.attachShader(p,C),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function G(st){if(n.debug.checkShaderErrors){let it=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(R).trim(),$=s.getShaderInfoLog(C).trim(),Y=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,R,C);else{let Z=lc(s,R,"vertex"),J=lc(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+st.name+`
Material Type: `+st.type+`

Program Info Log: `+it+`
`+Z+`
`+J)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(I===""||$==="")&&(K=!1);K&&(st.diagnostics={runnable:Y,programLog:it,vertexShader:{log:I,prefix:u},fragmentShader:{log:$,prefix:b}})}s.deleteShader(R),s.deleteShader(C),j=new as(s,p),y=Xm(s,p)}let j;this.getUniforms=function(){return j===void 0&&G(this),j};let y;this.getAttributes=function(){return y===void 0&&G(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(p,Nm)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Bm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=C,this}var i0=0,sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ra(t),e.set(t,i)),i}},ra=class{constructor(t){this.id=i0++,this.code=t,this.usedTimes=0}};function s0(n,t,e,i,s,r,a){let o=new zs,l=new sa,c=new Set,h=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,w,st,it,I){let $=it.fog,Y=I.geometry,K=y.isMeshStandardMaterial?it.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),J=Z&&Z.mapping===qr?Z.image.height:null,lt=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,_t=ht!==void 0?ht.length:0,zt=0;Y.morphAttributes.position!==void 0&&(zt=1),Y.morphAttributes.normal!==void 0&&(zt=2),Y.morphAttributes.color!==void 0&&(zt=3);let W,Q,nt,xt;if(lt){let he=wn[lt];W=he.vertexShader,Q=he.fragmentShader}else W=y.vertexShader,Q=y.fragmentShader,l.update(y),nt=l.getVertexShaderID(y),xt=l.getFragmentShaderID(y);let St=n.getRenderTarget(),yt=I.isInstancedMesh===!0,se=I.isBatchedMesh===!0,Dt=!!y.map,U=!!y.matcap,me=!!Z,Ct=!!y.aoMap,Xt=!!y.lightMap,Ft=!!y.bumpMap,ie=!!y.normalMap,Gt=!!y.displacementMap,Yt=!!y.emissiveMap,ge=!!y.metalnessMap,E=!!y.roughnessMap,_=y.anisotropy>0,X=y.clearcoat>0,q=y.iridescence>0,rt=y.sheen>0,et=y.transmission>0,Ut=_&&!!y.anisotropyMap,Pt=X&&!!y.clearcoatMap,ot=X&&!!y.clearcoatNormalMap,ft=X&&!!y.clearcoatRoughnessMap,vt=q&&!!y.iridescenceMap,at=q&&!!y.iridescenceThicknessMap,_e=rt&&!!y.sheenColorMap,qt=rt&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,Mt=!!y.specularColorMap,Et=!!y.specularIntensityMap,ne=et&&!!y.transmissionMap,Bt=et&&!!y.thicknessMap,ae=!!y.gradientMap,P=!!y.alphaMap,ut=y.alphaTest>0,k=!!y.alphaHash,ct=!!y.extensions,pt=ti;y.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(pt=n.toneMapping);let te={isWebGL2:d,shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:Q,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:xt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:se,instancing:yt,instancingColor:yt&&I.instanceColor!==null,instancingMorph:yt&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:ai,alphaToCoverage:!!y.alphaToCoverage,map:Dt,matcap:U,envMap:me,envMapMode:me&&Z.mapping,envMapCubeUVHeight:J,aoMap:Ct,lightMap:Xt,bumpMap:Ft,normalMap:ie,displacementMap:m&&Gt,emissiveMap:Yt,normalMapObjectSpace:ie&&y.normalMapType===yu,normalMapTangentSpace:ie&&y.normalMapType===Ic,metalnessMap:ge,roughnessMap:E,anisotropy:_,anisotropyMap:Ut,clearcoat:X,clearcoatMap:Pt,clearcoatNormalMap:ot,clearcoatRoughnessMap:ft,iridescence:q,iridescenceMap:vt,iridescenceThicknessMap:at,sheen:rt,sheenColorMap:_e,sheenRoughnessMap:qt,specularMap:Tt,specularColorMap:Mt,specularIntensityMap:Et,transmission:et,transmissionMap:ne,thicknessMap:Bt,gradientMap:ae,opaque:y.transparent===!1&&y.blending===rs&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:ut,alphaHash:k,combine:y.combine,mapUv:Dt&&p(y.map.channel),aoMapUv:Ct&&p(y.aoMap.channel),lightMapUv:Xt&&p(y.lightMap.channel),bumpMapUv:Ft&&p(y.bumpMap.channel),normalMapUv:ie&&p(y.normalMap.channel),displacementMapUv:Gt&&p(y.displacementMap.channel),emissiveMapUv:Yt&&p(y.emissiveMap.channel),metalnessMapUv:ge&&p(y.metalnessMap.channel),roughnessMapUv:E&&p(y.roughnessMap.channel),anisotropyMapUv:Ut&&p(y.anisotropyMap.channel),clearcoatMapUv:Pt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:qt&&p(y.sheenRoughnessMap.channel),specularMapUv:Tt&&p(y.specularMap.channel),specularColorMapUv:Mt&&p(y.specularColorMap.channel),specularIntensityMapUv:Et&&p(y.specularIntensityMap.channel),transmissionMapUv:ne&&p(y.transmissionMap.channel),thicknessMapUv:Bt&&p(y.thicknessMap.channel),alphaMapUv:P&&p(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ie||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(Dt||P),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:zt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&st.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&de.getTransfer(y.map.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===Qe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return te.vertexUv1s=c.has(1),te.vertexUv2s=c.has(2),te.vertexUv3s=c.has(3),c.clear(),te}function b(y){let w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(let st in y.defines)w.push(st),w.push(y.defines[st]);return y.isRawShaderMaterial===!1&&(x(w,y),T(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function x(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function T(y,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.instancingMorph&&o.enable(4),w.matcap&&o.enable(5),w.envMap&&o.enable(6),w.normalMapObjectSpace&&o.enable(7),w.normalMapTangentSpace&&o.enable(8),w.clearcoat&&o.enable(9),w.iridescence&&o.enable(10),w.alphaTest&&o.enable(11),w.vertexColors&&o.enable(12),w.vertexAlphas&&o.enable(13),w.vertexUv1s&&o.enable(14),w.vertexUv2s&&o.enable(15),w.vertexUv3s&&o.enable(16),w.vertexTangents&&o.enable(17),w.anisotropy&&o.enable(18),w.alphaHash&&o.enable(19),w.batching&&o.enable(20),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function F(y){let w=v[y.type],st;if(w){let it=wn[w];st=Wu.clone(it.uniforms)}else st=y.uniforms;return st}function R(y,w){let st;for(let it=0,I=h.length;it<I;it++){let $=h[it];if($.cacheKey===w){st=$,++st.usedTimes;break}}return st===void 0&&(st=new n0(n,w,y,r),h.push(st)),st}function C(y){if(--y.usedTimes===0){let w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function G(y){l.remove(y)}function j(){l.dispose()}return{getParameters:u,getProgramCacheKey:b,getUniforms:F,acquireProgram:R,releaseProgram:C,releaseShaderCache:G,programs:h,dispose:j}}function r0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function o0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,m,g,v,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),t++,u}function o(d,f,m,g,v,p){let u=a(d,f,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,v,p){let u=a(d,f,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||o0),i.length>1&&i.sort(f||fc),s.length>1&&s.sort(f||fc)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function a0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new pc,n.set(i,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function l0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Kt};break;case"SpotLight":e={position:new D,direction:new D,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function c0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var h0=0;function u0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function d0(n,t){let e=new l0,i=c0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,a=new be,o=new be;function l(h,d){let f=0,m=0,g=0;for(let st=0;st<9;st++)s.probe[st].set(0,0,0);let v=0,p=0,u=0,b=0,x=0,T=0,F=0,R=0,C=0,G=0,j=0;h.sort(u0);let y=d===!0?Math.PI:1;for(let st=0,it=h.length;st<it;st++){let I=h[st],$=I.color,Y=I.intensity,K=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=$.r*Y*y,m+=$.g*Y*y,g+=$.b*Y*y;else if(I.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(I.sh.coefficients[J],Y);j++}else if(I.isDirectionalLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){let lt=I.shadow,ht=i.get(I);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,s.directionalShadow[v]=ht,s.directionalShadowMap[v]=Z,s.directionalShadowMatrix[v]=I.shadow.matrix,T++}s.directional[v]=J,v++}else if(I.isSpotLight){let J=e.get(I);J.position.setFromMatrixPosition(I.matrixWorld),J.color.copy($).multiplyScalar(Y*y),J.distance=K,J.coneCos=Math.cos(I.angle),J.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),J.decay=I.decay,s.spot[u]=J;let lt=I.shadow;if(I.map&&(s.spotLightMap[C]=I.map,C++,lt.updateMatrices(I),I.castShadow&&G++),s.spotLightMatrix[u]=lt.matrix,I.castShadow){let ht=i.get(I);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,s.spotShadow[u]=ht,s.spotShadowMap[u]=Z,R++}u++}else if(I.isRectAreaLight){let J=e.get(I);J.color.copy($).multiplyScalar(Y),J.halfWidth.set(I.width*.5,0,0),J.halfHeight.set(0,I.height*.5,0),s.rectArea[b]=J,b++}else if(I.isPointLight){let J=e.get(I);if(J.color.copy(I.color).multiplyScalar(I.intensity*y),J.distance=I.distance,J.decay=I.decay,I.castShadow){let lt=I.shadow,ht=i.get(I);ht.shadowBias=lt.bias,ht.shadowNormalBias=lt.normalBias,ht.shadowRadius=lt.radius,ht.shadowMapSize=lt.mapSize,ht.shadowCameraNear=lt.camera.near,ht.shadowCameraFar=lt.camera.far,s.pointShadow[p]=ht,s.pointShadowMap[p]=Z,s.pointShadowMatrix[p]=I.shadow.matrix,F++}s.point[p]=J,p++}else if(I.isHemisphereLight){let J=e.get(I);J.skyColor.copy(I.color).multiplyScalar(Y*y),J.groundColor.copy(I.groundColor).multiplyScalar(Y*y),s.hemi[x]=J,x++}}b>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let w=s.hash;(w.directionalLength!==v||w.pointLength!==p||w.spotLength!==u||w.rectAreaLength!==b||w.hemiLength!==x||w.numDirectionalShadows!==T||w.numPointShadows!==F||w.numSpotShadows!==R||w.numSpotMaps!==C||w.numLightProbes!==j)&&(s.directional.length=v,s.spot.length=u,s.rectArea.length=b,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=R+C-G,s.spotLightMap.length=C,s.numSpotLightShadowsWithMaps=G,s.numLightProbes=j,w.directionalLength=v,w.pointLength=p,w.spotLength=u,w.rectAreaLength=b,w.hemiLength=x,w.numDirectionalShadows=T,w.numPointShadows=F,w.numSpotShadows=R,w.numSpotMaps=C,w.numLightProbes=j,s.version=h0++)}function c(h,d){let f=0,m=0,g=0,v=0,p=0,u=d.matrixWorldInverse;for(let b=0,x=h.length;b<x;b++){let T=h[b];if(T.isDirectionalLight){let F=s.directional[f];F.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(u),f++}else if(T.isSpotLight){let F=s.spot[g];F.position.setFromMatrixPosition(T.matrixWorld),F.position.applyMatrix4(u),F.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(u),g++}else if(T.isRectAreaLight){let F=s.rectArea[v];F.position.setFromMatrixPosition(T.matrixWorld),F.position.applyMatrix4(u),o.identity(),a.copy(T.matrixWorld),a.premultiply(u),o.extractRotation(a),F.halfWidth.set(T.width*.5,0,0),F.halfHeight.set(0,T.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){let F=s.point[m];F.position.setFromMatrixPosition(T.matrixWorld),F.position.applyMatrix4(u),m++}else if(T.isHemisphereLight){let F=s.hemi[p];F.direction.setFromMatrixPosition(T.matrixWorld),F.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function mc(n,t){let e=new d0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function f0(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new mc(n,t),e.set(r,[l])):a>=o.length?(l=new mc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var oa=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},p0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,m0=`uniform sampler2D shadow_pass;
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
}`;function g0(n,t,e){let i=new ks,s=new Ot,r=new Ot,a=new Ue,o=new oa({depthPacking:xu}),l=new aa,c={},h=e.maxTextureSize,d={[ii]:Qe,[Qe]:ii,[On]:On},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:p0,fragmentShader:m0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new bn;g.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ne(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let u=this.type;this.render=function(R,C,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;let j=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),st=n.state;st.setBlending(Qn),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let it=u!==Bn&&this.type===Bn,I=u===Bn&&this.type!==Bn;for(let $=0,Y=R.length;$<Y;$++){let K=R[$],Z=K.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let J=Z.getFrameExtents();if(s.multiply(J),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,Z.mapSize.y=r.y)),Z.map===null||it===!0||I===!0){let ht=this.type!==Bn?{minFilter:Re,magFilter:Re}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Hn(s.x,s.y,ht),Z.map.texture.name=K.name+".shadowMap",Z.camera.updateProjectionMatrix()}n.setRenderTarget(Z.map),n.clear();let lt=Z.getViewportCount();for(let ht=0;ht<lt;ht++){let _t=Z.getViewport(ht);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),st.viewport(a),Z.updateMatrices(K,ht),i=Z.getFrustum(),T(C,G,Z.camera,K,this.type)}Z.isPointLightShadow!==!0&&this.type===Bn&&b(Z,G),Z.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(j,y,w)};function b(R,C){let G=t.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Hn(s.x,s.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,G,f,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,G,m,v,null)}function x(R,C,G,j){let y=null,w=G.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)y=w;else if(y=G.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let st=y.uuid,it=C.uuid,I=c[st];I===void 0&&(I={},c[st]=I);let $=I[it];$===void 0&&($=y.clone(),I[it]=$,C.addEventListener("dispose",F)),y=$}if(y.visible=C.visible,y.wireframe=C.wireframe,j===Bn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let st=n.properties.get(y);st.light=G}return y}function T(R,C,G,j,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Bn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld);let it=t.update(R),I=R.material;if(Array.isArray(I)){let $=it.groups;for(let Y=0,K=$.length;Y<K;Y++){let Z=$[Y],J=I[Z.materialIndex];if(J&&J.visible){let lt=x(R,J,j,y);R.onBeforeShadow(n,R,C,G,it,lt,Z),n.renderBufferDirect(G,null,it,lt,R,Z),R.onAfterShadow(n,R,C,G,it,lt,Z)}}}else if(I.visible){let $=x(R,I,j,y);R.onBeforeShadow(n,R,C,G,it,$,null),n.renderBufferDirect(G,null,it,$,R,null),R.onAfterShadow(n,R,C,G,it,$,null)}}let st=R.children;for(let it=0,I=st.length;it<I;it++)T(st[it],C,G,j,y)}function F(R){R.target.removeEventListener("dispose",F);for(let G in c){let j=c[G],y=R.target.uuid;y in j&&(j[y].dispose(),delete j[y])}}}function _0(n,t,e){let i=e.isWebGL2;function s(){let P=!1,ut=new Ue,k=null,ct=new Ue(0,0,0,0);return{setMask:function(pt){k!==pt&&!P&&(n.colorMask(pt,pt,pt,pt),k=pt)},setLocked:function(pt){P=pt},setClear:function(pt,te,he,we,Je){Je===!0&&(pt*=we,te*=we,he*=we),ut.set(pt,te,he,we),ct.equals(ut)===!1&&(n.clearColor(pt,te,he,we),ct.copy(ut))},reset:function(){P=!1,k=null,ct.set(-1,0,0,0)}}}function r(){let P=!1,ut=null,k=null,ct=null;return{setTest:function(pt){pt?yt(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(pt){ut!==pt&&!P&&(n.depthMask(pt),ut=pt)},setFunc:function(pt){if(k!==pt){switch(pt){case qh:n.depthFunc(n.NEVER);break;case Zh:n.depthFunc(n.ALWAYS);break;case Jh:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case $h:n.depthFunc(n.EQUAL);break;case Kh:n.depthFunc(n.GEQUAL);break;case jh:n.depthFunc(n.GREATER);break;case Qh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=pt}},setLocked:function(pt){P=pt},setClear:function(pt){ct!==pt&&(n.clearDepth(pt),ct=pt)},reset:function(){P=!1,ut=null,k=null,ct=null}}}function a(){let P=!1,ut=null,k=null,ct=null,pt=null,te=null,he=null,we=null,Je=null;return{setTest:function(oe){P||(oe?yt(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(oe){ut!==oe&&!P&&(n.stencilMask(oe),ut=oe)},setFunc:function(oe,Be,S){(k!==oe||ct!==Be||pt!==S)&&(n.stencilFunc(oe,Be,S),k=oe,ct=Be,pt=S)},setOp:function(oe,Be,S){(te!==oe||he!==Be||we!==S)&&(n.stencilOp(oe,Be,S),te=oe,he=Be,we=S)},setLocked:function(oe){P=oe},setClear:function(oe){Je!==oe&&(n.clearStencil(oe),Je=oe)},reset:function(){P=!1,ut=null,k=null,ct=null,pt=null,te=null,he=null,we=null,Je=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,v=[],p=null,u=!1,b=null,x=null,T=null,F=null,R=null,C=null,G=null,j=new Kt(0,0,0),y=0,w=!1,st=null,it=null,I=null,$=null,Y=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,J=0,lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(lt)[1]),Z=J>=1):lt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),Z=J>=2);let ht=null,_t={},zt=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),Q=new Ue().fromArray(zt),nt=new Ue().fromArray(W);function xt(P,ut,k,ct){let pt=new Uint8Array(4),te=n.createTexture();n.bindTexture(P,te),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let he=0;he<k;he++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ut,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ut+he,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return te}let St={};St[n.TEXTURE_2D]=xt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(St[n.TEXTURE_2D_ARRAY]=xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),yt(n.DEPTH_TEST),l.setFunc(vr),Gt(!1),Yt(qa),yt(n.CULL_FACE),Ft(Qn);function yt(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function se(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Dt(P,ut){return m[P]!==ut?(n.bindFramebuffer(P,ut),m[P]=ut,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ut),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ut)),!0):!1}function U(P,ut){let k=v,ct=!1;if(P){k=g.get(ut),k===void 0&&(k=[],g.set(ut,k));let pt=P.textures;if(k.length!==pt.length||k[0]!==n.COLOR_ATTACHMENT0){for(let te=0,he=pt.length;te<he;te++)k[te]=n.COLOR_ATTACHMENT0+te;k.length=pt.length,ct=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,ct=!0);if(ct)if(e.isWebGL2)n.drawBuffers(k);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function me(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let Ct={[Mi]:n.FUNC_ADD,[Ih]:n.FUNC_SUBTRACT,[Lh]:n.FUNC_REVERSE_SUBTRACT};if(i)Ct[Ka]=n.MIN,Ct[ja]=n.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Ct[Ka]=P.MIN_EXT,Ct[ja]=P.MAX_EXT)}let Xt={[Dh]:n.ZERO,[Uh]:n.ONE,[Nh]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[Vh]:n.SRC_ALPHA_SATURATE,[kh]:n.DST_COLOR,[Oh]:n.DST_ALPHA,[Bh]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[Hh]:n.ONE_MINUS_DST_COLOR,[zh]:n.ONE_MINUS_DST_ALPHA,[Gh]:n.CONSTANT_COLOR,[Wh]:n.ONE_MINUS_CONSTANT_COLOR,[Xh]:n.CONSTANT_ALPHA,[Yh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ft(P,ut,k,ct,pt,te,he,we,Je,oe){if(P===Qn){u===!0&&(se(n.BLEND),u=!1);return}if(u===!1&&(yt(n.BLEND),u=!0),P!==Ph){if(P!==b||oe!==w){if((x!==Mi||R!==Mi)&&(n.blendEquation(n.FUNC_ADD),x=Mi,R=Mi),oe)switch(P){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Za:n.blendFunc(n.ONE,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Za:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,F=null,C=null,G=null,j.set(0,0,0),y=0,b=P,w=oe}return}pt=pt||ut,te=te||k,he=he||ct,(ut!==x||pt!==R)&&(n.blendEquationSeparate(Ct[ut],Ct[pt]),x=ut,R=pt),(k!==T||ct!==F||te!==C||he!==G)&&(n.blendFuncSeparate(Xt[k],Xt[ct],Xt[te],Xt[he]),T=k,F=ct,C=te,G=he),(we.equals(j)===!1||Je!==y)&&(n.blendColor(we.r,we.g,we.b,Je),j.copy(we),y=Je),b=P,w=!1}function ie(P,ut){P.side===On?se(n.CULL_FACE):yt(n.CULL_FACE);let k=P.side===Qe;ut&&(k=!k),Gt(k),P.blending===rs&&P.transparent===!1?Ft(Qn):Ft(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let ct=P.stencilWrite;c.setTest(ct),ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),E(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?yt(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(P){st!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),st=P)}function Yt(P){P!==Rh?(yt(n.CULL_FACE),P!==it&&(P===qa?n.cullFace(n.BACK):P===Fh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),it=P}function ge(P){P!==I&&(Z&&n.lineWidth(P),I=P)}function E(P,ut,k){P?(yt(n.POLYGON_OFFSET_FILL),($!==ut||Y!==k)&&(n.polygonOffset(ut,k),$=ut,Y=k)):se(n.POLYGON_OFFSET_FILL)}function _(P){P?yt(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function X(P){P===void 0&&(P=n.TEXTURE0+K-1),ht!==P&&(n.activeTexture(P),ht=P)}function q(P,ut,k){k===void 0&&(ht===null?k=n.TEXTURE0+K-1:k=ht);let ct=_t[k];ct===void 0&&(ct={type:void 0,texture:void 0},_t[k]=ct),(ct.type!==P||ct.texture!==ut)&&(ht!==k&&(n.activeTexture(k),ht=k),n.bindTexture(P,ut||St[P]),ct.type=P,ct.texture=ut)}function rt(){let P=_t[ht];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ut(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ft(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function qt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(P){Q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),Q.copy(P))}function Et(P){nt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),nt.copy(P))}function ne(P,ut){let k=d.get(ut);k===void 0&&(k=new WeakMap,d.set(ut,k));let ct=k.get(P);ct===void 0&&(ct=n.getUniformBlockIndex(ut,P.name),k.set(P,ct))}function Bt(P,ut){let ct=d.get(ut).get(P);h.get(ut)!==ct&&(n.uniformBlockBinding(ut,ct,P.__bindingPointIndex),h.set(ut,ct))}function ae(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ht=null,_t={},m={},g=new WeakMap,v=[],p=null,u=!1,b=null,x=null,T=null,F=null,R=null,C=null,G=null,j=new Kt(0,0,0),y=0,w=!1,st=null,it=null,I=null,$=null,Y=null,Q.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:yt,disable:se,bindFramebuffer:Dt,drawBuffers:U,useProgram:me,setBlending:Ft,setMaterial:ie,setFlipSided:Gt,setCullFace:Yt,setLineWidth:ge,setPolygonOffset:E,setScissorTest:_,activeTexture:X,bindTexture:q,unbindTexture:rt,compressedTexImage2D:et,compressedTexImage3D:Ut,texImage2D:qt,texImage3D:Tt,updateUBOMapping:ne,uniformBlockBinding:Bt,texStorage2D:at,texStorage3D:_e,texSubImage2D:Pt,texSubImage3D:ot,compressedTexSubImage2D:ft,compressedTexSubImage3D:vt,scissor:Mt,viewport:Et,reset:ae}}function x0(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,d=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function v(E,_){return g?new OffscreenCanvas(E,_):Tr("canvas")}function p(E,_,X,q){let rt=1,et=ge(E);if((et.width>q||et.height>q)&&(rt=q/Math.max(et.width,et.height)),rt<1||_===!0)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let Ut=_?Jo:Math.floor,Pt=Ut(rt*et.width),ot=Ut(rt*et.height);f===void 0&&(f=v(Pt,ot));let ft=X?v(Pt,ot):f;return ft.width=Pt,ft.height=ot,ft.getContext("2d").drawImage(E,0,0,Pt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Pt+"x"+ot+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),E;return E}function u(E){let _=ge(E);return Fl(_.width)&&Fl(_.height)}function b(E){return o?!1:E.wrapS!==Mn||E.wrapT!==Mn||E.minFilter!==Re&&E.minFilter!==$e}function x(E,_){return E.generateMipmaps&&_&&E.minFilter!==Re&&E.minFilter!==$e}function T(E){n.generateMipmap(E)}function F(E,_,X,q,rt=!1){if(o===!1)return _;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=_;if(_===n.RED&&(X===n.FLOAT&&(et=n.R32F),X===n.HALF_FLOAT&&(et=n.R16F),X===n.UNSIGNED_BYTE&&(et=n.R8)),_===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.R8UI),X===n.UNSIGNED_SHORT&&(et=n.R16UI),X===n.UNSIGNED_INT&&(et=n.R32UI),X===n.BYTE&&(et=n.R8I),X===n.SHORT&&(et=n.R16I),X===n.INT&&(et=n.R32I)),_===n.RG&&(X===n.FLOAT&&(et=n.RG32F),X===n.HALF_FLOAT&&(et=n.RG16F),X===n.UNSIGNED_BYTE&&(et=n.RG8)),_===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(et=n.RG8UI),X===n.UNSIGNED_SHORT&&(et=n.RG16UI),X===n.UNSIGNED_INT&&(et=n.RG32UI),X===n.BYTE&&(et=n.RG8I),X===n.SHORT&&(et=n.RG16I),X===n.INT&&(et=n.RG32I)),_===n.RGBA){let Ut=rt?br:de.getTransfer(q);X===n.FLOAT&&(et=n.RGBA32F),X===n.HALF_FLOAT&&(et=n.RGBA16F),X===n.UNSIGNED_BYTE&&(et=Ut===pe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(E,_,X){return x(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==Re&&E.minFilter!==$e?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){return E===Re||E===Qa||E===Cs?n.NEAREST:n.LINEAR}function G(E){let _=E.target;_.removeEventListener("dispose",G),y(_),_.isVideoTexture&&d.delete(_)}function j(E){let _=E.target;_.removeEventListener("dispose",j),st(_)}function y(E){let _=i.get(E);if(_.__webglInit===void 0)return;let X=E.source,q=m.get(X);if(q){let rt=q[_.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(E),Object.keys(q).length===0&&m.delete(X)}i.remove(E)}function w(E){let _=i.get(E);n.deleteTexture(_.__webglTexture);let X=E.source,q=m.get(X);delete q[_.__cacheKey],a.memory.textures--}function st(E){let _=i.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let rt=0;rt<_.__webglFramebuffer[q].length;rt++)n.deleteFramebuffer(_.__webglFramebuffer[q][rt]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=E.textures;for(let q=0,rt=X.length;q<rt;q++){let et=i.get(X[q]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),i.remove(X[q])}i.remove(E)}let it=0;function I(){it=0}function $(){let E=it;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),it+=1,E}function Y(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function K(E,_){let X=i.get(E);if(E.isVideoTexture&&Gt(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){let q=E.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(X,E,_);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+_)}function Z(E,_){let X=i.get(E);if(E.version>0&&X.__version!==E.version){nt(X,E,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+_)}function J(E,_){let X=i.get(E);if(E.version>0&&X.__version!==E.version){nt(X,E,_);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+_)}function lt(E,_){let X=i.get(E);if(E.version>0&&X.__version!==E.version){xt(X,E,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+_)}let ht={[Wo]:n.REPEAT,[Mn]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},_t={[Re]:n.NEAREST,[Qa]:n.NEAREST_MIPMAP_NEAREST,[Cs]:n.NEAREST_MIPMAP_LINEAR,[$e]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},zt={[vu]:n.NEVER,[Au]:n.ALWAYS,[Mu]:n.LESS,[Lc]:n.LEQUAL,[Su]:n.EQUAL,[wu]:n.GEQUAL,[bu]:n.GREATER,[Eu]:n.NOTEQUAL};function W(E,_,X){if(_.type===zn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===$e||_.magFilter===so||_.magFilter===Cs||_.magFilter===bi||_.minFilter===$e||_.minFilter===so||_.minFilter===Cs||_.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(E,n.TEXTURE_WRAP_S,ht[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,ht[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,ht[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,_t[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,_t[_.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==Mn||_.wrapT!==Mn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,C(_.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,C(_.minFilter)),_.minFilter!==Re&&_.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,zt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Re||_.minFilter!==Cs&&_.minFilter!==bi||_.type===zn&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===Bs&&t.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Q(E,_){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",G));let q=_.source,rt=m.get(q);rt===void 0&&(rt={},m.set(q,rt));let et=Y(_);if(et!==E.__cacheKey){rt[et]===void 0&&(rt[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),rt[et].usedTimes++;let Ut=rt[E.__cacheKey];Ut!==void 0&&(rt[E.__cacheKey].usedTimes--,Ut.usedTimes===0&&w(_)),E.__cacheKey=et,E.__webglTexture=rt[et].texture}return X}function nt(E,_,X){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);let rt=Q(E,_),et=_.source;e.bindTexture(q,E.__webglTexture,n.TEXTURE0+X);let Ut=i.get(et);if(et.version!==Ut.__version||rt===!0){e.activeTexture(n.TEXTURE0+X);let Pt=de.getPrimaries(de.workingColorSpace),ot=_.colorSpace===Kn?null:de.getPrimaries(_.colorSpace),ft=_.colorSpace===Kn||Pt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let vt=b(_)&&u(_.image)===!1,at=p(_.image,vt,!1,s.maxTextureSize);at=Yt(_,at);let _e=u(at)||o,qt=r.convert(_.format,_.colorSpace),Tt=r.convert(_.type),Mt=F(_.internalFormat,qt,Tt,_.colorSpace,_.isVideoTexture);W(q,_,_e);let Et,ne=_.mipmaps,Bt=o&&_.isVideoTexture!==!0&&Mt!==Pc,ae=Ut.__version===void 0||rt===!0,P=et.dataReady,ut=R(_,at,_e);if(_.isDepthTexture)Mt=n.DEPTH_COMPONENT,o?_.type===zn?Mt=n.DEPTH_COMPONENT32F:_.type===jn?Mt=n.DEPTH_COMPONENT24:_.type===wi?Mt=n.DEPTH24_STENCIL8:Mt=n.DEPTH_COMPONENT16:_.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ai&&Mt===n.DEPTH_COMPONENT&&_.type!==Ca&&_.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=jn,Tt=r.convert(_.type)),_.format===hs&&Mt===n.DEPTH_COMPONENT&&(Mt=n.DEPTH_STENCIL,_.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=wi,Tt=r.convert(_.type))),ae&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Mt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Mt,at.width,at.height,0,qt,Tt,null));else if(_.isDataTexture)if(ne.length>0&&_e){Bt&&ae&&e.texStorage2D(n.TEXTURE_2D,ut,Mt,ne[0].width,ne[0].height);for(let k=0,ct=ne.length;k<ct;k++)Et=ne[k],Bt?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,Et.width,Et.height,qt,Tt,Et.data):e.texImage2D(n.TEXTURE_2D,k,Mt,Et.width,Et.height,0,qt,Tt,Et.data);_.generateMipmaps=!1}else Bt?(ae&&e.texStorage2D(n.TEXTURE_2D,ut,Mt,at.width,at.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,qt,Tt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Mt,at.width,at.height,0,qt,Tt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Mt,ne[0].width,ne[0].height,at.depth);for(let k=0,ct=ne.length;k<ct;k++)Et=ne[k],_.format!==Sn?qt!==null?Bt?P&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Et.width,Et.height,at.depth,qt,Et.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,Mt,Et.width,Et.height,at.depth,0,Et.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,Et.width,Et.height,at.depth,qt,Tt,Et.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,Mt,Et.width,Et.height,at.depth,0,qt,Tt,Et.data)}else{Bt&&ae&&e.texStorage2D(n.TEXTURE_2D,ut,Mt,ne[0].width,ne[0].height);for(let k=0,ct=ne.length;k<ct;k++)Et=ne[k],_.format!==Sn?qt!==null?Bt?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,Et.width,Et.height,qt,Et.data):e.compressedTexImage2D(n.TEXTURE_2D,k,Mt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,Et.width,Et.height,qt,Tt,Et.data):e.texImage2D(n.TEXTURE_2D,k,Mt,Et.width,Et.height,0,qt,Tt,Et.data)}else if(_.isDataArrayTexture)Bt?(ae&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Mt,at.width,at.height,at.depth),P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,qt,Tt,at.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,at.width,at.height,at.depth,0,qt,Tt,at.data);else if(_.isData3DTexture)Bt?(ae&&e.texStorage3D(n.TEXTURE_3D,ut,Mt,at.width,at.height,at.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,qt,Tt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,at.width,at.height,at.depth,0,qt,Tt,at.data);else if(_.isFramebufferTexture){if(ae)if(Bt)e.texStorage2D(n.TEXTURE_2D,ut,Mt,at.width,at.height);else{let k=at.width,ct=at.height;for(let pt=0;pt<ut;pt++)e.texImage2D(n.TEXTURE_2D,pt,Mt,k,ct,0,qt,Tt,null),k>>=1,ct>>=1}}else if(ne.length>0&&_e){if(Bt&&ae){let k=ge(ne[0]);e.texStorage2D(n.TEXTURE_2D,ut,Mt,k.width,k.height)}for(let k=0,ct=ne.length;k<ct;k++)Et=ne[k],Bt?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,qt,Tt,Et):e.texImage2D(n.TEXTURE_2D,k,Mt,qt,Tt,Et);_.generateMipmaps=!1}else if(Bt){if(ae){let k=ge(at);e.texStorage2D(n.TEXTURE_2D,ut,Mt,k.width,k.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,qt,Tt,at)}else e.texImage2D(n.TEXTURE_2D,0,Mt,qt,Tt,at);x(_,_e)&&T(q),Ut.__version=et.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,X){if(_.image.length!==6)return;let q=Q(E,_),rt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+X);let et=i.get(rt);if(rt.version!==et.__version||q===!0){e.activeTexture(n.TEXTURE0+X);let Ut=de.getPrimaries(de.workingColorSpace),Pt=_.colorSpace===Kn?null:de.getPrimaries(_.colorSpace),ot=_.colorSpace===Kn||Ut===Pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let ft=_.isCompressedTexture||_.image[0].isCompressedTexture,vt=_.image[0]&&_.image[0].isDataTexture,at=[];for(let k=0;k<6;k++)!ft&&!vt?at[k]=p(_.image[k],!1,!0,s.maxCubemapSize):at[k]=vt?_.image[k].image:_.image[k],at[k]=Yt(_,at[k]);let _e=at[0],qt=u(_e)||o,Tt=r.convert(_.format,_.colorSpace),Mt=r.convert(_.type),Et=F(_.internalFormat,Tt,Mt,_.colorSpace),ne=o&&_.isVideoTexture!==!0,Bt=et.__version===void 0||q===!0,ae=rt.dataReady,P=R(_,_e,qt);W(n.TEXTURE_CUBE_MAP,_,qt);let ut;if(ft){ne&&Bt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,P,Et,_e.width,_e.height);for(let k=0;k<6;k++){ut=at[k].mipmaps;for(let ct=0;ct<ut.length;ct++){let pt=ut[ct];_.format!==Sn?Tt!==null?ne?ae&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,0,0,pt.width,pt.height,Tt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,0,0,pt.width,pt.height,Tt,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,Et,pt.width,pt.height,0,Tt,Mt,pt.data)}}}else{if(ut=_.mipmaps,ne&&Bt){ut.length>0&&P++;let k=ge(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,P,Et,k.width,k.height)}for(let k=0;k<6;k++)if(vt){ne?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,at[k].width,at[k].height,Tt,Mt,at[k].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Et,at[k].width,at[k].height,0,Tt,Mt,at[k].data);for(let ct=0;ct<ut.length;ct++){let te=ut[ct].image[k].image;ne?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,0,0,te.width,te.height,Tt,Mt,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,Et,te.width,te.height,0,Tt,Mt,te.data)}}else{ne?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Tt,Mt,at[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Et,Tt,Mt,at[k]);for(let ct=0;ct<ut.length;ct++){let pt=ut[ct];ne?ae&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,0,0,Tt,Mt,pt.image[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,Et,Tt,Mt,pt.image[k])}}}x(_,qt)&&T(n.TEXTURE_CUBE_MAP),et.__version=rt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function St(E,_,X,q,rt,et){let Ut=r.convert(X.format,X.colorSpace),Pt=r.convert(X.type),ot=F(X.internalFormat,Ut,Pt,X.colorSpace);if(!i.get(_).__hasExternalTextures){let vt=Math.max(1,_.width>>et),at=Math.max(1,_.height>>et);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,ot,vt,at,_.depth,0,Ut,Pt,null):e.texImage2D(rt,et,ot,vt,at,0,Ut,Pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),ie(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,rt,i.get(X).__webglTexture,0,Ft(_)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,rt,i.get(X).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(E,_,X){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer&&!_.stencilBuffer){let q=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||ie(_)){let rt=_.depthTexture;rt&&rt.isDepthTexture&&(rt.type===zn?q=n.DEPTH_COMPONENT32F:rt.type===jn&&(q=n.DEPTH_COMPONENT24));let et=Ft(_);ie(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,q,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,q,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,q,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(_.depthBuffer&&_.stencilBuffer){let q=Ft(_);X&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,_.width,_.height):ie(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,q,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let q=_.textures;for(let rt=0;rt<q.length;rt++){let et=q[rt],Ut=r.convert(et.format,et.colorSpace),Pt=r.convert(et.type),ot=F(et.internalFormat,Ut,Pt,et.colorSpace),ft=Ft(_);X&&ie(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ft,ot,_.width,_.height):ie(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ft,ot,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ot,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let q=i.get(_.depthTexture).__webglTexture,rt=Ft(_);if(_.depthTexture.format===Ai)ie(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,q,0);else if(_.depthTexture.format===hs)ie(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Dt(E){let _=i.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");se(_.__webglFramebuffer,E)}else if(X){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]=n.createRenderbuffer(),yt(_.__webglDepthbuffer[q],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),yt(_.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function U(E,_,X){let q=i.get(E);_!==void 0&&St(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Dt(E)}function me(E){let _=E.texture,X=i.get(E),q=i.get(_);E.addEventListener("dispose",j);let rt=E.textures,et=E.isWebGLCubeRenderTarget===!0,Ut=rt.length>1,Pt=u(E)||o;if(Ut||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,a.memory.textures++),et){X.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[ot]=[];for(let ft=0;ft<_.mipmaps.length;ft++)X.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else X.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let ot=0;ot<_.mipmaps.length;ot++)X.__webglFramebuffer[ot]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Ut)if(s.drawBuffers)for(let ot=0,ft=rt.length;ot<ft;ot++){let vt=i.get(rt[ot]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&ie(E)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ot=0;ot<rt.length;ot++){let ft=rt[ot];X.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ot]);let vt=r.convert(ft.format,ft.colorSpace),at=r.convert(ft.type),_e=F(ft.internalFormat,vt,at,ft.colorSpace,E.isXRRenderTarget===!0),qt=Ft(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,qt,_e,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,X.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(X.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),W(n.TEXTURE_CUBE_MAP,_,Pt);for(let ot=0;ot<6;ot++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)St(X.__webglFramebuffer[ot][ft],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else St(X.__webglFramebuffer[ot],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);x(_,Pt)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ot=0,ft=rt.length;ot<ft;ot++){let vt=rt[ot],at=i.get(vt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),W(n.TEXTURE_2D,vt,Pt),St(X.__webglFramebuffer,E,vt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),x(vt,Pt)&&T(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?ot=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,q.__webglTexture),W(ot,_,Pt),o&&_.mipmaps&&_.mipmaps.length>0)for(let ft=0;ft<_.mipmaps.length;ft++)St(X.__webglFramebuffer[ft],E,_,n.COLOR_ATTACHMENT0,ot,ft);else St(X.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,ot,0);x(_,Pt)&&T(ot),e.unbindTexture()}E.depthBuffer&&Dt(E)}function Ct(E){let _=u(E)||o,X=E.textures;for(let q=0,rt=X.length;q<rt;q++){let et=X[q];if(x(et,_)){let Ut=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Pt=i.get(et).__webglTexture;e.bindTexture(Ut,Pt),T(Ut),e.unbindTexture()}}}function Xt(E){if(o&&E.samples>0&&ie(E)===!1){let _=E.textures,X=E.width,q=E.height,rt=n.COLOR_BUFFER_BIT,et=[],Ut=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pt=i.get(E),ot=_.length>1;if(ot)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){et.push(n.COLOR_ATTACHMENT0+ft),E.depthBuffer&&et.push(Ut);let vt=Pt.__ignoreDepthValues!==void 0?Pt.__ignoreDepthValues:!1;if(vt===!1&&(E.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),ot&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[ft]),vt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ut]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ut])),ot){let at=i.get(_[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,X,q,0,0,X,q,rt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,Pt.__webglColorRenderbuffer[ft]);let vt=i.get(_[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Pt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,vt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}}function Ft(E){return Math.min(s.maxSamples,E.samples)}function ie(E){let _=i.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Gt(E){let _=a.render.frame;d.get(E)!==_&&(d.set(E,_),E.update())}function Yt(E,_){let X=E.colorSpace,q=E.format,rt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===qo||X!==ai&&X!==Kn&&(de.getTransfer(X)===pe?o===!1?t.has("EXT_sRGB")===!0&&q===Sn?(E.format=qo,E.minFilter=$e,E.generateMipmaps=!1):_=Cr.sRGBToLinear(_):(q!==Sn||rt!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),_}function ge(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(h.width=E.naturalWidth||E.width,h.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(h.width=E.displayWidth,h.height=E.displayHeight):(h.width=E.width,h.height=E.height),h}this.allocateTextureUnit=$,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=lt,this.rebindTextures=U,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ie}function y0(n,t,e){let i=e.isWebGL2;function s(r,a=Kn){let o,l=de.getTransfer(a);if(r===ei)return n.UNSIGNED_BYTE;if(r===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===cu)return n.BYTE;if(r===hu)return n.SHORT;if(r===Ca)return n.UNSIGNED_SHORT;if(r===wc)return n.INT;if(r===jn)return n.UNSIGNED_INT;if(r===zn)return n.FLOAT;if(r===Bs)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===uu)return n.ALPHA;if(r===Sn)return n.RGBA;if(r===du)return n.LUMINANCE;if(r===fu)return n.LUMINANCE_ALPHA;if(r===Ai)return n.DEPTH_COMPONENT;if(r===hs)return n.DEPTH_STENCIL;if(r===qo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===pu)return n.RED;if(r===Cc)return n.RED_INTEGER;if(r===mu)return n.RG;if(r===Rc)return n.RG_INTEGER;if(r===Fc)return n.RGBA_INTEGER;if(r===ro||r===oo||r===ao||r===lo)if(l===pe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tl||r===el||r===nl||r===il)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===el)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sl||r===rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===sl)return l===pe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===rl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===yl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ol)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===al)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ll)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ul)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ml)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_l)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yl)return l===pe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===co||r===vl||r===Ml)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===co)return l===pe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gu||r===Sl||r===bl||r===El)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===co)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===El)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var la=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Fe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},v0={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Fe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},M0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S0=`
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

}`,ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new cn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let i=e.cameras[0].viewport,s=new Cn({extensions:{fragDepth:!0},vertexShader:M0,fragmentShader:S0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ne(new ds(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},ha=class extends si{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,v=new ca,p=e.getContextAttributes(),u=null,b=null,x=[],T=[],F=new Ot,R=null,C=new Ze;C.layers.enable(1),C.viewport=new Ue;let G=new Ze;G.layers.enable(2),G.viewport=new Ue;let j=[C,G],y=new la;y.layers.enable(1),y.layers.enable(2);let w=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=x[W];return Q===void 0&&(Q=new Ns,x[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=x[W];return Q===void 0&&(Q=new Ns,x[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=x[W];return Q===void 0&&(Q=new Ns,x[W]=Q),Q.getHandSpace()};function it(W){let Q=T.indexOf(W.inputSource);if(Q===-1)return;let nt=x[Q];nt!==void 0&&(nt.update(W.inputSource,W.frame,c||a),nt.dispatchEvent({type:W.type,data:W.inputSource}))}function I(){s.removeEventListener("select",it),s.removeEventListener("selectstart",it),s.removeEventListener("selectend",it),s.removeEventListener("squeeze",it),s.removeEventListener("squeezestart",it),s.removeEventListener("squeezeend",it),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",$);for(let W=0;W<x.length;W++){let Q=T[W];Q!==null&&(T[W]=null,x[W].disconnect(Q))}w=null,st=null,v.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,b=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",it),s.addEventListener("selectstart",it),s.addEventListener("selectend",it),s.addEventListener("squeeze",it),s.addEventListener("squeezestart",it),s.addEventListener("squeezeend",it),s.addEventListener("end",I),s.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new Hn(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,nt=null,xt=null;p.depth&&(xt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?hs:Ai,nt=p.stencil?wi:jn);let St={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(St),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Hn(f.textureWidth,f.textureHeight,{format:Sn,type:ei,depthTexture:new Or(f.textureWidth,f.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let yt=t.properties.get(b);yt.__ignoreDepthValues=f.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),zt.setContext(s),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function $(W){for(let Q=0;Q<W.removed.length;Q++){let nt=W.removed[Q],xt=T.indexOf(nt);xt>=0&&(T[xt]=null,x[xt].disconnect(nt))}for(let Q=0;Q<W.added.length;Q++){let nt=W.added[Q],xt=T.indexOf(nt);if(xt===-1){for(let yt=0;yt<x.length;yt++)if(yt>=T.length){T.push(nt),xt=yt;break}else if(T[yt]===null){T[yt]=nt,xt=yt;break}if(xt===-1)break}let St=x[xt];St&&St.connect(nt)}}let Y=new D,K=new D;function Z(W,Q,nt){Y.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(nt.matrixWorld);let xt=Y.distanceTo(K),St=Q.projectionMatrix.elements,yt=nt.projectionMatrix.elements,se=St[14]/(St[10]-1),Dt=St[14]/(St[10]+1),U=(St[9]+1)/St[5],me=(St[9]-1)/St[5],Ct=(St[8]-1)/St[0],Xt=(yt[8]+1)/yt[0],Ft=se*Ct,ie=se*Xt,Gt=xt/(-Ct+Xt),Yt=Gt*-Ct;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Yt),W.translateZ(Gt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();let ge=se+Gt,E=Dt+Gt,_=Ft-Yt,X=ie+(xt-Yt),q=U*Dt/E*ge,rt=me*Dt/E*ge;W.projectionMatrix.makePerspective(_,X,q,rt,ge,E),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function J(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),y.near=G.near=C.near=W.near,y.far=G.far=C.far=W.far,(w!==y.near||st!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,st=y.far,C.near=w,C.far=st,G.near=w,G.far=st,C.updateProjectionMatrix(),G.updateProjectionMatrix(),W.updateProjectionMatrix());let Q=W.parent,nt=y.cameras;J(y,Q);for(let xt=0;xt<nt.length;xt++)J(nt[xt],Q);nt.length===2?Z(y,C,G):y.projectionMatrix.copy(C.projectionMatrix),lt(W,y,Q)};function lt(W,Q,nt){nt===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(nt.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Zo*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null};let ht=null;function _t(W,Q){if(h=Q.getViewerPose(c||a),g=Q,h!==null){let nt=h.views;m!==null&&(t.setRenderTargetFramebuffer(b,m.framebuffer),t.setRenderTarget(b));let xt=!1;nt.length!==y.cameras.length&&(y.cameras.length=0,xt=!0);for(let yt=0;yt<nt.length;yt++){let se=nt[yt],Dt=null;if(m!==null)Dt=m.getViewport(se);else{let me=d.getViewSubImage(f,se);Dt=me.viewport,yt===0&&(t.setRenderTargetTextures(b,me.colorTexture,f.ignoreDepthValues?void 0:me.depthStencilTexture),t.setRenderTarget(b))}let U=j[yt];U===void 0&&(U=new Ze,U.layers.enable(yt),U.viewport=new Ue,j[yt]=U),U.matrix.fromArray(se.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(se.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),yt===0&&(y.matrix.copy(U.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),xt===!0&&y.cameras.push(U)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")){let yt=d.getDepthInformation(nt[0]);yt&&yt.isValid&&yt.texture&&v.init(t,yt,s.renderState)}}for(let nt=0;nt<x.length;nt++){let xt=T[nt],St=x[nt];xt!==null&&St!==void 0&&St.update(xt,Q,c||a)}v.render(t,y),ht&&ht(W,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}let zt=new Oc;zt.setAnimationLoop(_t),this.setAnimationLoop=function(W){ht=W},this.dispose=function(){}}},yi=new Tn,b0=new be;function E0(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Bc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,b,x,T){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,T)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,b,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Qe&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Qe&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let b=t.get(u),x=b.envMap,T=b.envMapRotation;if(x&&(p.envMap.value=x,yi.copy(T),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(yi)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let F=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*F,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,b,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*b,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,b){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Qe&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let b=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function w0(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(b,x){let T=x.program;i.uniformBlockBinding(b,T)}function c(b,x){let T=s[b.id];T===void 0&&(g(b),T=h(b),s[b.id]=T,b.addEventListener("dispose",p));let F=x.program;i.updateUBOMapping(b,F);let R=t.render.frame;r[b.id]!==R&&(f(b),r[b.id]=R)}function h(b){let x=d();b.__bindingPointIndex=x;let T=n.createBuffer(),F=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,F,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,T),T}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let x=s[b.id],T=b.uniforms,F=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,C=T.length;R<C;R++){let G=Array.isArray(T[R])?T[R]:[T[R]];for(let j=0,y=G.length;j<y;j++){let w=G[j];if(m(w,R,j,F)===!0){let st=w.__offset,it=Array.isArray(w.value)?w.value:[w.value],I=0;for(let $=0;$<it.length;$++){let Y=it[$],K=v(Y);typeof Y=="number"||typeof Y=="boolean"?(w.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,st+I,w.__data)):Y.isMatrix3?(w.__data[0]=Y.elements[0],w.__data[1]=Y.elements[1],w.__data[2]=Y.elements[2],w.__data[3]=0,w.__data[4]=Y.elements[3],w.__data[5]=Y.elements[4],w.__data[6]=Y.elements[5],w.__data[7]=0,w.__data[8]=Y.elements[6],w.__data[9]=Y.elements[7],w.__data[10]=Y.elements[8],w.__data[11]=0):(Y.toArray(w.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,x,T,F){let R=b.value,C=x+"_"+T;if(F[C]===void 0)return typeof R=="number"||typeof R=="boolean"?F[C]=R:F[C]=R.clone(),!0;{let G=F[C];if(typeof R=="number"||typeof R=="boolean"){if(G!==R)return F[C]=R,!0}else if(G.equals(R)===!1)return G.copy(R),!0}return!1}function g(b){let x=b.uniforms,T=0,F=16;for(let C=0,G=x.length;C<G;C++){let j=Array.isArray(x[C])?x[C]:[x[C]];for(let y=0,w=j.length;y<w;y++){let st=j[y],it=Array.isArray(st.value)?st.value:[st.value];for(let I=0,$=it.length;I<$;I++){let Y=it[I],K=v(Y),Z=T%F;Z!==0&&F-Z<K.boundary&&(T+=F-Z),st.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=T,T+=K.storage}}}let R=T%F;return R>0&&(T+=F-R),b.__size=T,b.__cache={},this}function v(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function p(b){let x=b.target;x.removeEventListener("dispose",p);let T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var fs=class{constructor(t={}){let{canvas:e=Cu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,u=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this._useLegacyLights=!1,this.toneMapping=ti,this.toneMappingExposure=1;let x=this,T=!1,F=0,R=0,C=null,G=-1,j=null,y=new Ue,w=new Ue,st=null,it=new Kt(0),I=0,$=e.width,Y=e.height,K=1,Z=null,J=null,lt=new Ue(0,0,$,Y),ht=new Ue(0,0,$,Y),_t=!1,zt=new ks,W=!1,Q=!1,nt=null,xt=new be,St=new Ot,yt=new D,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Dt(){return C===null?K:1}let U=i;function me(M,L){for(let H=0;H<M.length;H++){let z=M[H],N=e.getContext(z,L);if(N!==null)return N}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",ae,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ut,!1),U===null){let L=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&L.shift(),U=me(L,M),U===null)throw me(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ct,Xt,Ft,ie,Gt,Yt,ge,E,_,X,q,rt,et,Ut,Pt,ot,ft,vt,at,_e,qt,Tt,Mt,Et;function ne(){Ct=new Hp(U),Xt=new Up(U,Ct,t),Ct.init(Xt),Tt=new y0(U,Ct,Xt),Ft=new _0(U,Ct,Xt),ie=new Wp(U),Gt=new r0,Yt=new x0(U,Ct,Ft,Gt,Xt,Tt,ie),ge=new Bp(x),E=new kp(x),_=new Ju(U,Xt),Mt=new Lp(U,Ct,_,Xt),X=new Vp(U,_,ie,Mt),q=new Zp(U,X,_,ie),at=new qp(U,Xt,Yt),ot=new Np(Gt),rt=new s0(x,ge,E,Ct,Xt,Mt,ot),et=new E0(x,Gt),Ut=new a0,Pt=new f0(Ct,Xt),vt=new Ip(x,ge,E,Ft,q,f,l),ft=new g0(x,q,Xt),Et=new w0(U,ie,Xt,Ft),_e=new Dp(U,Ct,ie,Xt),qt=new Gp(U,Ct,ie,Xt),ie.programs=rt.programs,x.capabilities=Xt,x.extensions=Ct,x.properties=Gt,x.renderLists=Ut,x.shadowMap=ft,x.state=Ft,x.info=ie}ne();let Bt=new ha(x,U);this.xr=Bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize($,Y,!1))},this.getSize=function(M){return M.set($,Y)},this.setSize=function(M,L,H=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=M,Y=L,e.width=Math.floor(M*K),e.height=Math.floor(L*K),H===!0&&(e.style.width=M+"px",e.style.height=L+"px"),this.setViewport(0,0,M,L)},this.getDrawingBufferSize=function(M){return M.set($*K,Y*K).floor()},this.setDrawingBufferSize=function(M,L,H){$=M,Y=L,K=H,e.width=Math.floor(M*H),e.height=Math.floor(L*H),this.setViewport(0,0,M,L)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,L,H,z){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,L,H,z),Ft.viewport(y.copy(lt).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(ht)},this.setScissor=function(M,L,H,z){M.isVector4?ht.set(M.x,M.y,M.z,M.w):ht.set(M,L,H,z),Ft.scissor(w.copy(ht).multiplyScalar(K).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(M){Ft.setScissorTest(_t=M)},this.setOpaqueSort=function(M){Z=M},this.setTransparentSort=function(M){J=M},this.getClearColor=function(M){return M.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(M=!0,L=!0,H=!0){let z=0;if(M){let N=!1;if(C!==null){let mt=C.texture.format;N=mt===Fc||mt===Rc||mt===Cc}if(N){let mt=C.texture.type,bt=mt===ei||mt===jn||mt===Ca||mt===wi||mt===Ac||mt===Tc,Rt=vt.getClearColor(),Lt=vt.getClearAlpha(),Qt=Rt.r,Ht=Rt.g,Wt=Rt.b;bt?(m[0]=Qt,m[1]=Ht,m[2]=Wt,m[3]=Lt,U.clearBufferuiv(U.COLOR,0,m)):(g[0]=Qt,g[1]=Ht,g[2]=Wt,g[3]=Lt,U.clearBufferiv(U.COLOR,0,g))}else z|=U.COLOR_BUFFER_BIT}L&&(z|=U.DEPTH_BUFFER_BIT),H&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ae,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),Ut.dispose(),Pt.dispose(),Gt.dispose(),ge.dispose(),E.dispose(),q.dispose(),Mt.dispose(),Et.dispose(),rt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Je),Bt.removeEventListener("sessionend",oe),nt&&(nt.dispose(),nt=null),Be.stop()};function ae(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let M=ie.autoReset,L=ft.enabled,H=ft.autoUpdate,z=ft.needsUpdate,N=ft.type;ne(),ie.autoReset=M,ft.enabled=L,ft.autoUpdate=H,ft.needsUpdate=z,ft.type=N}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function k(M){let L=M.target;L.removeEventListener("dispose",k),ct(L)}function ct(M){pt(M),Gt.remove(M)}function pt(M){let L=Gt.get(M).programs;L!==void 0&&(L.forEach(function(H){rt.releaseProgram(H)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,L,H,z,N,mt){L===null&&(L=se);let bt=N.isMesh&&N.matrixWorld.determinant()<0,Rt=Nt(M,L,H,z,N);Ft.setMaterial(z,bt);let Lt=H.index,Qt=1;if(z.wireframe===!0){if(Lt=X.getWireframeAttribute(H),Lt===void 0)return;Qt=2}let Ht=H.drawRange,Wt=H.attributes.position,Ae=Ht.start*Qt,sn=(Ht.start+Ht.count)*Qt;mt!==null&&(Ae=Math.max(Ae,mt.start*Qt),sn=Math.min(sn,(mt.start+mt.count)*Qt)),Lt!==null?(Ae=Math.max(Ae,0),sn=Math.min(sn,Lt.count)):Wt!=null&&(Ae=Math.max(Ae,0),sn=Math.min(sn,Wt.count));let Le=sn-Ae;if(Le<0||Le===1/0)return;Mt.setup(N,z,Rt,H,Lt);let Pn,Se=_e;if(Lt!==null&&(Pn=_.get(Lt),Se=qt,Se.setIndex(Pn)),N.isMesh)z.wireframe===!0?(Ft.setLineWidth(z.wireframeLinewidth*Dt()),Se.setMode(U.LINES)):Se.setMode(U.TRIANGLES);else if(N.isLine){let Zt=z.linewidth;Zt===void 0&&(Zt=1),Ft.setLineWidth(Zt*Dt()),N.isLineSegments?Se.setMode(U.LINES):N.isLineLoop?Se.setMode(U.LINE_LOOP):Se.setMode(U.LINE_STRIP)}else N.isPoints?Se.setMode(U.POINTS):N.isSprite&&Se.setMode(U.TRIANGLES);if(N.isBatchedMesh)Se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)Se.renderInstances(Ae,Le,N.count);else if(H.isInstancedBufferGeometry){let Zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,to=Math.min(H.instanceCount,Zt);Se.renderInstances(Ae,Le,to)}else Se.render(Ae,Le)};function te(M,L,H){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Qe,M.needsUpdate=!0,tt(M,L,H),M.side=ii,M.needsUpdate=!0,tt(M,L,H),M.side=On):tt(M,L,H)}this.compile=function(M,L,H=null){H===null&&(H=M),p=Pt.get(H),p.init(),b.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);let z=new Set;return M.traverse(function(N){let mt=N.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){let Rt=mt[bt];te(Rt,H,N),z.add(Rt)}else te(mt,H,N),z.add(mt)}),b.pop(),p=null,z},this.compileAsync=function(M,L,H=null){let z=this.compile(M,L,H);return new Promise(N=>{function mt(){if(z.forEach(function(bt){Gt.get(bt).currentProgram.isReady()&&z.delete(bt)}),z.size===0){N(M);return}setTimeout(mt,10)}Ct.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let he=null;function we(M){he&&he(M)}function Je(){Be.stop()}function oe(){Be.start()}let Be=new Oc;Be.setAnimationLoop(we),typeof self!="undefined"&&Be.setContext(self),this.setAnimationLoop=function(M){he=M,Bt.setAnimationLoop(M),M===null?Be.stop():Be.start()},Bt.addEventListener("sessionstart",Je),Bt.addEventListener("sessionend",oe),this.render=function(M,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(L),L=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,L,C),p=Pt.get(M,b.length),p.init(),b.push(p),xt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),zt.setFromProjectionMatrix(xt),Q=this.localClippingEnabled,W=ot.init(this.clippingPlanes,Q),v=Ut.get(M,u.length),v.init(),u.push(v),S(M,L,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(Z,J),this.info.render.frame++,W===!0&&ot.beginShadows();let H=p.state.shadowsArray;if(ft.render(H,M,L),W===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1)&&vt.render(v,M),p.setupLights(x._useLegacyLights),L.isArrayCamera){let z=L.cameras;for(let N=0,mt=z.length;N<mt;N++){let bt=z[N];V(v,M,bt,bt.viewport)}}else V(v,M,L);C!==null&&(Yt.updateMultisampleRenderTarget(C),Yt.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(x,M,L),Mt.resetDefaultState(),G=-1,j=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function S(M,L,H,z){if(M.visible===!1)return;if(M.layers.test(L.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(L);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||zt.intersectsSprite(M)){z&&yt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);let bt=q.update(M),Rt=M.material;Rt.visible&&v.push(M,bt,Rt,H,yt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||zt.intersectsObject(M))){let bt=q.update(M),Rt=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),yt.copy(M.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),yt.copy(bt.boundingSphere.center)),yt.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(Rt)){let Lt=bt.groups;for(let Qt=0,Ht=Lt.length;Qt<Ht;Qt++){let Wt=Lt[Qt],Ae=Rt[Wt.materialIndex];Ae&&Ae.visible&&v.push(M,bt,Ae,H,yt.z,Wt)}}else Rt.visible&&v.push(M,bt,Rt,H,yt.z,null)}}let mt=M.children;for(let bt=0,Rt=mt.length;bt<Rt;bt++)S(mt[bt],L,H,z)}function V(M,L,H,z){let N=M.opaque,mt=M.transmissive,bt=M.transparent;p.setupLightsView(H),W===!0&&ot.setGlobalState(x.clippingPlanes,H),mt.length>0&&O(N,mt,L,H),z&&Ft.viewport(y.copy(z)),N.length>0&&A(N,L,H),mt.length>0&&A(mt,L,H),bt.length>0&&A(bt,L,H),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function O(M,L,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let mt=Xt.isWebGL2;nt===null&&(nt=new Hn(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")?Bs:ei,minFilter:bi,samples:mt?4:0})),x.getDrawingBufferSize(St),mt?nt.setSize(St.x,St.y):nt.setSize(Jo(St.x),Jo(St.y));let bt=x.getRenderTarget();x.setRenderTarget(nt),x.getClearColor(it),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Rt=x.toneMapping;x.toneMapping=ti,A(M,H,z),Yt.updateMultisampleRenderTarget(nt),Yt.updateRenderTargetMipmap(nt);let Lt=!1;for(let Qt=0,Ht=L.length;Qt<Ht;Qt++){let Wt=L[Qt],Ae=Wt.object,sn=Wt.geometry,Le=Wt.material,Pn=Wt.group;if(Le.side===On&&Ae.layers.test(z.layers)){let Se=Le.side;Le.side=Qe,Le.needsUpdate=!0,B(Ae,H,z,sn,Le,Pn),Le.side=Se,Le.needsUpdate=!0,Lt=!0}}Lt===!0&&(Yt.updateMultisampleRenderTarget(nt),Yt.updateRenderTargetMipmap(nt)),x.setRenderTarget(bt),x.setClearColor(it,I),x.toneMapping=Rt}function A(M,L,H){let z=L.isScene===!0?L.overrideMaterial:null;for(let N=0,mt=M.length;N<mt;N++){let bt=M[N],Rt=bt.object,Lt=bt.geometry,Qt=z===null?bt.material:z,Ht=bt.group;Rt.layers.test(H.layers)&&B(Rt,L,H,Lt,Qt,Ht)}}function B(M,L,H,z,N,mt){M.onBeforeRender(x,L,H,z,N,mt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(x,L,H,z,M,mt),N.transparent===!0&&N.side===On&&N.forceSinglePass===!1?(N.side=Qe,N.needsUpdate=!0,x.renderBufferDirect(H,L,z,N,M,mt),N.side=ii,N.needsUpdate=!0,x.renderBufferDirect(H,L,z,N,M,mt),N.side=On):x.renderBufferDirect(H,L,z,N,M,mt),M.onAfterRender(x,L,H,z,N,mt)}function tt(M,L,H){L.isScene!==!0&&(L=se);let z=Gt.get(M),N=p.state.lights,mt=p.state.shadowsArray,bt=N.state.version,Rt=rt.getParameters(M,N.state,mt,L,H),Lt=rt.getProgramCacheKey(Rt),Qt=z.programs;z.environment=M.isMeshStandardMaterial?L.environment:null,z.fog=L.fog,z.envMap=(M.isMeshStandardMaterial?E:ge).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?L.environmentRotation:M.envMapRotation,Qt===void 0&&(M.addEventListener("dispose",k),Qt=new Map,z.programs=Qt);let Ht=Qt.get(Lt);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===bt)return gt(M,Rt),Ht}else Rt.uniforms=rt.getUniforms(M),M.onBuild(H,Rt,x),M.onBeforeCompile(Rt,x),Ht=rt.acquireProgram(Rt,Lt),Qt.set(Lt,Ht),z.uniforms=Rt.uniforms;let Wt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Wt.clippingPlanes=ot.uniform),gt(M,Rt),z.needsLights=xe(M),z.lightsStateVersion=bt,z.needsLights&&(Wt.ambientLightColor.value=N.state.ambient,Wt.lightProbe.value=N.state.probe,Wt.directionalLights.value=N.state.directional,Wt.directionalLightShadows.value=N.state.directionalShadow,Wt.spotLights.value=N.state.spot,Wt.spotLightShadows.value=N.state.spotShadow,Wt.rectAreaLights.value=N.state.rectArea,Wt.ltc_1.value=N.state.rectAreaLTC1,Wt.ltc_2.value=N.state.rectAreaLTC2,Wt.pointLights.value=N.state.point,Wt.pointLightShadows.value=N.state.pointShadow,Wt.hemisphereLights.value=N.state.hemi,Wt.directionalShadowMap.value=N.state.directionalShadowMap,Wt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Wt.spotShadowMap.value=N.state.spotShadowMap,Wt.spotLightMatrix.value=N.state.spotLightMatrix,Wt.spotLightMap.value=N.state.spotLightMap,Wt.pointShadowMap.value=N.state.pointShadowMap,Wt.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ht,z.uniformsList=null,Ht}function wt(M){if(M.uniformsList===null){let L=M.currentProgram.getUniforms();M.uniformsList=as.seqWithValue(L.seq,M.uniforms)}return M.uniformsList}function gt(M,L){let H=Gt.get(M);H.outputColorSpace=L.outputColorSpace,H.batching=L.batching,H.instancing=L.instancing,H.instancingColor=L.instancingColor,H.instancingMorph=L.instancingMorph,H.skinning=L.skinning,H.morphTargets=L.morphTargets,H.morphNormals=L.morphNormals,H.morphColors=L.morphColors,H.morphTargetsCount=L.morphTargetsCount,H.numClippingPlanes=L.numClippingPlanes,H.numIntersection=L.numClipIntersection,H.vertexAlphas=L.vertexAlphas,H.vertexTangents=L.vertexTangents,H.toneMapping=L.toneMapping}function Nt(M,L,H,z,N){L.isScene!==!0&&(L=se),Yt.resetTextureUnits();let mt=L.fog,bt=z.isMeshStandardMaterial?L.environment:null,Rt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ai,Lt=(z.isMeshStandardMaterial?E:ge).get(z.envMap||bt),Qt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ht=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Wt=!!H.morphAttributes.position,Ae=!!H.morphAttributes.normal,sn=!!H.morphAttributes.color,Le=ti;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Le=x.toneMapping);let Pn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Se=Pn!==void 0?Pn.length:0,Zt=Gt.get(z),to=p.state.lights;if(W===!0&&(Q===!0||M!==j)){let fn=M===j&&z.id===G;ot.setState(z,M,fn)}let ye=!1;z.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==to.state.version||Zt.outputColorSpace!==Rt||N.isBatchedMesh&&Zt.batching===!1||!N.isBatchedMesh&&Zt.batching===!0||N.isInstancedMesh&&Zt.instancing===!1||!N.isInstancedMesh&&Zt.instancing===!0||N.isSkinnedMesh&&Zt.skinning===!1||!N.isSkinnedMesh&&Zt.skinning===!0||N.isInstancedMesh&&Zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Zt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Zt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Zt.instancingMorph===!1&&N.morphTexture!==null||Zt.envMap!==Lt||z.fog===!0&&Zt.fog!==mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ot.numPlanes||Zt.numIntersection!==ot.numIntersection)||Zt.vertexAlphas!==Qt||Zt.vertexTangents!==Ht||Zt.morphTargets!==Wt||Zt.morphNormals!==Ae||Zt.morphColors!==sn||Zt.toneMapping!==Le||Xt.isWebGL2===!0&&Zt.morphTargetsCount!==Se)&&(ye=!0):(ye=!0,Zt.__version=z.version);let di=Zt.currentProgram;ye===!0&&(di=tt(z,L,N));let Ga=!1,Ts=!1,eo=!1,ze=di.getUniforms(),fi=Zt.uniforms;if(Ft.useProgram(di.program)&&(Ga=!0,Ts=!0,eo=!0),z.id!==G&&(G=z.id,Ts=!0),Ga||j!==M){ze.setValue(U,"projectionMatrix",M.projectionMatrix),ze.setValue(U,"viewMatrix",M.matrixWorldInverse);let fn=ze.map.cameraPosition;fn!==void 0&&fn.setValue(U,yt.setFromMatrixPosition(M.matrixWorld)),Xt.logarithmicDepthBuffer&&ze.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ze.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),j!==M&&(j=M,Ts=!0,eo=!0)}if(N.isSkinnedMesh){ze.setOptional(U,N,"bindMatrix"),ze.setOptional(U,N,"bindMatrixInverse");let fn=N.skeleton;fn&&(Xt.floatVertexTextures?(fn.boneTexture===null&&fn.computeBoneTexture(),ze.setValue(U,"boneTexture",fn.boneTexture,Yt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(ze.setOptional(U,N,"batchingTexture"),ze.setValue(U,"batchingTexture",N._matricesTexture,Yt));let no=H.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&Xt.isWebGL2===!0)&&at.update(N,H,di),(Ts||Zt.receiveShadow!==N.receiveShadow)&&(Zt.receiveShadow=N.receiveShadow,ze.setValue(U,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(fi.envMap.value=Lt,fi.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),Ts&&(ze.setValue(U,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&It(fi,eo),mt&&z.fog===!0&&et.refreshFogUniforms(fi,mt),et.refreshMaterialUniforms(fi,z,K,Y,nt),as.upload(U,wt(Zt),fi,Yt)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(as.upload(U,wt(Zt),fi,Yt),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ze.setValue(U,"center",N.center),ze.setValue(U,"modelViewMatrix",N.modelViewMatrix),ze.setValue(U,"normalMatrix",N.normalMatrix),ze.setValue(U,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let fn=z.uniformsGroups;for(let io=0,bh=fn.length;io<bh;io++)if(Xt.isWebGL2){let Wa=fn[io];Et.update(Wa,di),Et.bind(Wa,di)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return di}function It(M,L){M.ambientLightColor.needsUpdate=L,M.lightProbe.needsUpdate=L,M.directionalLights.needsUpdate=L,M.directionalLightShadows.needsUpdate=L,M.pointLights.needsUpdate=L,M.pointLightShadows.needsUpdate=L,M.spotLights.needsUpdate=L,M.spotLightShadows.needsUpdate=L,M.rectAreaLights.needsUpdate=L,M.hemisphereLights.needsUpdate=L}function xe(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,L,H){Gt.get(M.texture).__webglTexture=L,Gt.get(M.depthTexture).__webglTexture=H;let z=Gt.get(M);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,L){let H=Gt.get(M);H.__webglFramebuffer=L,H.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(M,L=0,H=0){C=M,F=L,R=H;let z=!0,N=null,mt=!1,bt=!1;if(M){let Lt=Gt.get(M);Lt.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Lt.__webglFramebuffer===void 0?Yt.setupRenderTarget(M):Lt.__hasExternalTextures&&Yt.rebindTextures(M,Gt.get(M.texture).__webglTexture,Gt.get(M.depthTexture).__webglTexture);let Qt=M.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(bt=!0);let Ht=Gt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ht[L])?N=Ht[L][H]:N=Ht[L],mt=!0):Xt.isWebGL2&&M.samples>0&&Yt.useMultisampledRTT(M)===!1?N=Gt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[H]:N=Ht,y.copy(M.viewport),w.copy(M.scissor),st=M.scissorTest}else y.copy(lt).multiplyScalar(K).floor(),w.copy(ht).multiplyScalar(K).floor(),st=_t;if(Ft.bindFramebuffer(U.FRAMEBUFFER,N)&&Xt.drawBuffers&&z&&Ft.drawBuffers(M,N),Ft.viewport(y),Ft.scissor(w),Ft.setScissorTest(st),mt){let Lt=Gt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Lt.__webglTexture,H)}else if(bt){let Lt=Gt.get(M.texture),Qt=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,H||0,Qt)}G=-1},this.readRenderTargetPixels=function(M,L,H,z,N,mt,bt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Gt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){Ft.bindFramebuffer(U.FRAMEBUFFER,Rt);try{let Lt=M.texture,Qt=Lt.format,Ht=Lt.type;if(Qt!==Sn&&Tt.convert(Qt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Wt=Ht===Bs&&(Ct.has("EXT_color_buffer_half_float")||Xt.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(Ht!==ei&&Tt.convert(Ht)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===zn&&(Xt.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=M.width-z&&H>=0&&H<=M.height-N&&U.readPixels(L,H,z,N,Tt.convert(Qt),Tt.convert(Ht),mt)}finally{let Lt=C!==null?Gt.get(C).__webglFramebuffer:null;Ft.bindFramebuffer(U.FRAMEBUFFER,Lt)}}},this.copyFramebufferToTexture=function(M,L,H=0){let z=Math.pow(2,-H),N=Math.floor(L.image.width*z),mt=Math.floor(L.image.height*z);Yt.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,H,0,0,M.x,M.y,N,mt),Ft.unbindTexture()},this.copyTextureToTexture=function(M,L,H,z=0){let N=L.image.width,mt=L.image.height,bt=Tt.convert(H.format),Rt=Tt.convert(H.type);Yt.setTexture2D(H,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,M.x,M.y,N,mt,bt,Rt,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,M.x,M.y,L.mipmaps[0].width,L.mipmaps[0].height,bt,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,M.x,M.y,bt,Rt,L.image),z===0&&H.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(M,L,H,z,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let mt=Math.round(M.max.x-M.min.x),bt=Math.round(M.max.y-M.min.y),Rt=M.max.z-M.min.z+1,Lt=Tt.convert(z.format),Qt=Tt.convert(z.type),Ht;if(z.isData3DTexture)Yt.setTexture3D(z,0),Ht=U.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)Yt.setTexture2DArray(z,0),Ht=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let Wt=U.getParameter(U.UNPACK_ROW_LENGTH),Ae=U.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=U.getParameter(U.UNPACK_SKIP_PIXELS),Le=U.getParameter(U.UNPACK_SKIP_ROWS),Pn=U.getParameter(U.UNPACK_SKIP_IMAGES),Se=H.isCompressedTexture?H.mipmaps[N]:H.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Se.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Se.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,M.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,M.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?U.texSubImage3D(Ht,N,L.x,L.y,L.z,mt,bt,Rt,Lt,Qt,Se.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Ht,N,L.x,L.y,L.z,mt,bt,Rt,Lt,Se.data):U.texSubImage3D(Ht,N,L.x,L.y,L.z,mt,bt,Rt,Lt,Qt,Se),U.pixelStorei(U.UNPACK_ROW_LENGTH,Wt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ae),U.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Le),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Pn),N===0&&z.generateMipmaps&&U.generateMipmap(Ht),Ft.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?Yt.setTextureCube(M,0):M.isData3DTexture?Yt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Yt.setTexture2DArray(M,0):Yt.setTexture2D(M,0),Ft.unbindTexture()},this.resetState=function(){F=0,R=0,C=null,Ft.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ra?"display-p3":"srgb",e.unpackColorSpace=de.workingColorSpace===Zr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ua=class extends fs{};ua.prototype.isWebGL1Renderer=!0;var zr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ye=new D,Hs=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ue(e,this.array),i=ue(i,this.array),s=ue(s,this.array),r=ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ps=class extends oi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,Ls=new D,ts=new D,es=new D,ns=new Ot,Ds=new Ot,Wc=new be,gr=new D,Us=new D,_r=new D,gc=new Ot,Oo=new Ot,_c=new Ot,Vs=class extends Ve{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new bn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hr(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new Hs(i,3,0,!1)),Qi.setAttribute("uv",new Hs(i,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new Ot(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),Wc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;xr(gr.set(-.5,-.5,0),es,a,ts,s,r),xr(Us.set(.5,-.5,0),es,a,ts,s,r),xr(_r.set(.5,.5,0),es,a,ts,s,r),gc.set(0,0),Oo.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(gr,Us,_r,!1,Ls);if(o===null&&(xr(Us.set(-.5,.5,0),es,a,ts,s,r),Oo.set(0,1),o=t.ray.intersectTriangle(gr,_r,Us,!1,Ls),o===null))return;let l=t.ray.origin.distanceTo(Ls);l<t.near||l>t.far||e.push({distance:l,point:Ls.clone(),uv:Ei.getInterpolation(Ls,gr,Us,_r,gc,Oo,_c,new Ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xr(n,t,e,i,s,r){ns.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ds.x=r*ns.x-s*ns.y,Ds.y=s*ns.x+r*ns.y):Ds.copy(ns),n.copy(t),n.x+=Ds.x,n.y+=Ds.y,n.applyMatrix4(Wc)}var ms=class extends cn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gs=class n extends bn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,f=(e-t)/s,m=new D,g=new Ot;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let u=r+p/i*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){let p=v*(i+1);for(let u=0;u<i;u++){let b=u+p,x=b,T=b+i+1,F=b+i+2,R=b+1;o.push(x,T,R),o.push(T,F,R)}}this.setIndex(o),this.setAttribute("position",new ln(l,3)),this.setAttribute("normal",new ln(c,3)),this.setAttribute("uv",new ln(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ri=class extends oi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function A0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var gs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends gs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=t,o=2*e-i;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=t,l=2*i-e;break;case Tl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),v=g*g,p=v*g,u=-f*p+2*f*v-f*g,b=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*v+.5*g,T=m*p-m*v;for(let F=0;F!==o;++F)r[F]=u*a[h+F]+b*a[c+F]+x*a[l+F]+T*a[d+F];return r}},fa=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},pa=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},En=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Sr:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&A0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,m=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[f+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};En.prototype.TimeBufferType=Float32Array;En.prototype.ValueBufferType=Float32Array;En.prototype.DefaultInterpolation=Sr;var Fi=class extends En{};Fi.prototype.ValueTypeName="bool";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Mr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends En{};ma.prototype.ValueTypeName="color";var ga=class extends En{};ga.prototype.ValueTypeName="number";var _a=class extends gs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ri.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ws=class extends En{InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Ws.prototype.ValueTypeName="quaternion";Ws.prototype.DefaultInterpolation=Sr;Ws.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends En{};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Mr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends En{};xa.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},T0=new ya,va=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Gr=class extends Vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zo=new be,xc=new D,yc=new D,Ma=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ks,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new Ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sa=class extends Ma{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new Sa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function vc(){return(typeof performance=="undefined"?Date:performance).now()}var Pa="\\[\\]\\.:\\/",C0=new RegExp("["+Pa+"]","g"),Ia="[^"+Pa+"]",R0="[^"+Pa.replace("\\.","")+"]",F0=/((?:WC+[\/:])*)/.source.replace("WC",Ia),P0=/(WCOD+)?/.source.replace("WCOD",R0),I0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),L0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),D0=new RegExp("^"+F0+P0+I0+L0+"$"),U0=["material","materials","bones","map"],ba=class{constructor(t,e,i){let s=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(C0,"")}static parseTrackName(t){let e=D0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);U0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=ba;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rg=new Float32Array(1);var Mc=new be,Yr=class{constructor(t,e,i=0,s=1/0){this.ray=new Pr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new zs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(t,e=!0,i=[]){return Ea(t,this,i,e),i.sort(Sc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ea(t[s],this,i,e);return i.sort(Sc),i}};function Sc(n,t){return n.distance-t.distance}function Ea(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Ea(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);function Yc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new bn,c=0;for(let h=0;h<n.length;++h){let d=n[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,d=[];for(let f=0;f<n.length;++f){let m=n[f].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Xc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let m=[];for(let v=0;v<a[h].length;++v)m.push(a[h][v][f]);let g=Xc(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Xc(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Oe(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<e;g++){let v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var N0=1/16;function Ii(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t%1e5/1e5)}function xs(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}var Gn={};function B0(){return Gn.solid||(Gn.solid=new Ri({vertexColors:!0})),Gn.solid}function O0(){return Gn.glass||(Gn.glass=new Ri({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1})),Gn.glass}function z0(){return Gn.glow||(Gn.glow=new Vn({vertexColors:!0})),Gn.glow}var Kr=new Kt;function li(n,{scale:t=N0,seed:e=1,jitter:i=.05,shadows:s=!0}={}){let r=Ii(e),a={solid:[],glass:[],glow:[]};for(let l of n){if(!l)continue;let[c,h,d,f,m,g,v,p]=l;if(f<=0||m<=0||g<=0)continue;let u=new Ci(f*t,m*t,g*t);u.translate(c*t,(h+m/2)*t,d*t),Kr.set(v);let b=1+(r()*2-1)*i,x=u.attributes.position.count,T=new Float32Array(x*3);for(let F=0;F<x;F++)T[F*3]=Math.min(1,Kr.r*b),T[F*3+1]=Math.min(1,Kr.g*b),T[F*3+2]=Math.min(1,Kr.b*b);u.setAttribute("color",new Oe(T,3)),a[p&&a[p]?p:"solid"].push(u)}let o=new Fe;for(let[l,c]of Object.entries(a)){if(!c.length)continue;let h=Yc(c);c.forEach(m=>m.dispose());let d=l==="glass"?O0():l==="glow"?z0():B0(),f=new Ne(h,d);f.castShadow=s&&l!=="glass",f.receiveShadow=s,o.add(f)}return o}function qc(n){let t=1/0,e=-1/0,i=-1/0,s=1/0,r=-1/0;for(let a of n){if(!a)continue;let[o,l,c,h,d,f]=a;t=Math.min(t,o-h/2),e=Math.max(e,o+h/2),s=Math.min(s,c-f/2),r=Math.max(r,c+f/2),i=Math.max(i,l+d)}return{w:e-t,h:i,d:r-s,x0:t,x1:e,z0:s,z1:r}}var Rn="#B9784A",Ee="#8A5634",k0="#D9A066",At="#FFFFFF",hn="#F2EEE8",kt="#2B1E3A";function Wn(n,t,e,i,s,r,a=1){let o=[];for(let l=0;l<i;l+=a){let c=Math.round(Math.sqrt(Math.max(.25,i*i-(l+.5)*(l+.5))));o.push([n,t,e+l+a/2,c*2,s,a,r]),o.push([n,t,e-l-a/2,c*2,s,a,r])}return o}function Li(n,t,e,i,s,r=0){let a=[];for(let o=0;o<e;o++){let l=Math.round(Math.sqrt(Math.max(.25,e*e-(o+.5)*(o+.5))));a.push([n,t+o,r+i/2,l*2,1,i,s]),a.push([n,t-o-1,r+i/2,l*2,1,i,s])}return a}var Da={bed:()=>[[0,0,0,22,4,34,Rn],[-10,0,-16,2,2,2,Ee],[10,0,-16,2,2,2,Ee],[-10,0,16,2,2,2,Ee],[10,0,16,2,2,2,Ee],[0,4,0,20,4,32,At],[0,8,5,21,2,22,"#FF8FB1"],[0,10,5,21,.6,3,"#FFC2D6"],[0,10,12,21,.6,3,"#FFC2D6"],[0,8,-11,14,3,7,"#FFF7E0"],[0,0,-17.5,22,18,2,Rn],[0,16,-17.5,18,2,2.4,k0],[0,0,17.5,22,10,2,Rn]],teddy:()=>[[0,0,0,8,7,6,"#B07A4A"],[0,1,3,5,5,1,"#E3C29B"],[-4.5,0,2,3,3,5,"#9C6A3E"],[4.5,0,2,3,3,5,"#9C6A3E"],[-5,4,0,2,4,3,"#9C6A3E"],[5,4,0,2,4,3,"#9C6A3E"],[0,7,0,8,7,7,"#B07A4A"],[-3.5,13,0,3,3,2,"#9C6A3E"],[3.5,13,0,3,3,2,"#9C6A3E"],[0,8,3.5,4,3,2,"#E3C29B"],[0,10,4.6,2,1,.6,kt],[-2,11,3.6,1,1.2,.4,kt],[2,11,3.6,1,1.2,.4,kt],[0,6.5,3.2,8,1.4,1,"#FF5A5F"]],lamp:()=>[[0,0,0,8,1.5,8,"#C9A227"],[0,1.5,0,1.4,22,1.4,"#C9A227"],[0,20,0,3,3,3,"#FFF3B0","glow"],[0,22,0,10,2,10,"#FFB8D4"],[0,24,0,9,3,9,"#FFC9DC"],[0,27,0,7,2,7,"#FFD6E5"]],picture:()=>[[0,-5,.6,18,13,1.2,Rn],[0,-3.5,1.2,15,10,.6,"#BDE7FF"],[0,-3.5,1.5,15,3,.6,"#7ED957"],[-3,-.5,1.5,7,2,.6,"#5CC23A"],[4,3,1.6,3,3,.6,"#FFD43B"],[-4,3.5,1.6,4,1,.6,At]],clock:()=>[...Li(0,0,6,1.5,Ee),...Li(0,0,5,2,"#FFFDF5"),[0,-.5,2.3,1,4.5,.4,kt],[1.2,-.5,2.5,3.4,1,.4,kt],[0,4,2.2,1,1,.4,"#FF5A5F"],[0,-5,2.2,1,1,.4,kt],[4.5,-.5,2.2,1,1,.4,kt],[-4.5,-.5,2.2,1,1,.4,kt]],books:()=>[[0,0,0,9,2,7,"#3FA9F5"],[4.6,.3,0,.3,1.4,6.6,hn],[.5,2,.3,8,2,6,"#FF5A5F"],[4.6,2.3,.3,.3,1.4,5.6,hn],[-.3,4,-.2,7,2,6,"#2EC27E"],[3.3,4.3,-.2,.3,1.4,5.6,hn],[.4,6,0,6,1.6,5,"#FFD43B"]],guitar:()=>[[0,3,0,4,2,6,Ee],[0,0,0,12,2,6,Ee],[0,2,1,11,9,3,"#F08C3A"],[0,11,1,8,5,3,"#F08C3A"],[0,5,2.6,4,4,.4,kt],[0,16,1,2.4,13,1.6,Ee],[0,29,1,3.4,4,1.8,kt],[0,3,2.6,4,1,.5,Ee],[0,4,2.7,.3,26,.2,"#EEE"]],game:()=>[[0,0,0,12,26,10,"#6C4CF0"],[-6.3,0,0,.8,26,10.2,"#FF5C9A"],[6.3,0,0,.8,26,10.2,"#FF5C9A"],[0,16,5.1,10,7,.4,"#1B1530"],[0,17,5.4,8,5,.3,"#5CE1E6","glow"],[-1,18,5.6,2,2,.2,"#FFD43B","glow"],[2,20,5.6,1,1,.2,"#FF5A5F","glow"],[0,11,6.5,12,2,4,"#3A2A8C"],[-3,13,7,1,2.5,1,kt],[-3,15.5,7,2,1.5,2,"#FF5A5F"],[2,13,7.5,1.6,.8,1.6,"#FFD43B"],[4.2,13,7.5,1.6,.8,1.6,"#2EC27E"],[0,23.5,5.1,10,2,.5,"#FFD43B","glow"]],unicorn:()=>[[-3.5,0,-6,2.5,9,2.5,At],[3.5,0,-6,2.5,9,2.5,At],[-3.5,0,6,2.5,9,2.5,At],[3.5,0,6,2.5,9,2.5,At],[-3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[-3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[0,8,0,9,7,16,At],[0,13,8.5,6,9,5,At],[0,18,11.5,6,6,9,At],[0,18,16.5,5,4,2,"#FFE3EE"],[-3.1,21,13,.4,1.5,1.5,kt],[3.1,21,13,.4,1.5,1.5,kt],[-2,24,10,1.5,2.5,1.5,At],[2,24,10,1.5,2.5,1.5,At],[0,24,13,2,3,2,"#FFD43B"],[0,27,13.3,1.2,3,1.2,"#FFE680"],[0,22,8.5,2,3,3,"#FF5C9A"],[0,19,6.5,2,3,3,"#FFB13B"],[0,16,5,2,3,3,"#FFD43B"],[0,13,3.8,2,3,2.5,"#2EC27E"],[0,23.5,11,2,2,3,"#3FA9F5"],[0,11,-8.5,2,3,2,"#FF5C9A"],[0,7,-9.5,2,4,2,"#8E6CFF"],[0,4,-10,2,3,2,"#3FA9F5"]],chair:()=>[[-4.5,0,-4.5,1.5,8,1.5,Ee],[4.5,0,-4.5,1.5,8,1.5,Ee],[-4.5,0,4.5,1.5,8,1.5,Ee],[4.5,0,4.5,1.5,8,1.5,Ee],[0,8,0,11,1.5,11,Rn],[0,9.5,.5,9,1,9,"#FF8FB1"],[-4.5,9.5,-4.8,1.5,10,1.5,Ee],[4.5,9.5,-4.8,1.5,10,1.5,Ee],[0,15,-4.8,9,4,1.2,Rn]],plates:()=>[[0,0,0,7,.8,7,"#E8E3DA"],[0,.8,0,9,.6,9,At],[0,1.4,0,7,.8,7,"#E8E3DA"],[0,2.2,0,9,.6,9,At],[0,2.8,0,7,.8,7,"#E8E3DA"],[0,3.6,0,9,.6,9,At],[0,4.2,0,7,.1,7,"#9FD8F5"],[6,0,0,.8,.5,6,"#BFC4CC"],[-6,0,0,.8,.5,6,"#BFC4CC"]],pizza:()=>[...Wn(0,0,0,6,1.2,"#E0A458"),...Wn(0,1.2,0,5,.5,"#E8473C"),...Wn(0,1.5,0,4.5,.4,"#FFE08A"),[-2,1.9,-2,2,.5,2,"#B3261E"],[2.5,1.9,-1,2,.5,2,"#B3261E"],[0,1.9,2.5,2,.5,2,"#B3261E"],[-2.5,1.9,2,1,.4,1,"#2EC27E"],[2,1.9,2.5,1,.4,1,"#2EC27E"]],cake:()=>[[0,0,0,12,1,12,"#E8E3DA"],[0,1,0,10,4,10,"#FFC2D6"],[0,4,0,10.4,1,10.4,At],[0,5,0,7,3.5,7,"#FFE3EE"],[0,8,0,7.4,.8,7.4,At],[-2,8.8,0,.8,3,.8,"#3FA9F5"],[0,8.8,0,.8,3,.8,"#FFD43B"],[2,8.8,0,.8,3,.8,"#2EC27E"],[-2,11.8,0,.6,1,.6,"#FFB13B","glow"],[0,11.8,0,.6,1,.6,"#FFB13B","glow"],[2,11.8,0,.6,1,.6,"#FFB13B","glow"],[-5,3,5.1,1,1,.4,"#FF5A5F"],[-1.5,3,5.1,1,1,.4,"#FF5A5F"],[2,3,5.1,1,1,.4,"#FF5A5F"],[4.5,3,5.1,1,1,.4,"#FF5A5F"]],teapot:()=>[[0,0,0,6,1,6,"#3FA9F5"],[0,1,0,8,5,8,"#5CC0F7"],[0,6,0,6,1,6,"#3FA9F5"],[0,7,0,2,1.2,2,At],[5,2.5,0,3,1.5,1.5,"#5CC0F7"],[6.8,3.5,0,1.5,2.5,1.5,"#5CC0F7"],[-5,2,0,1.5,4,1.5,"#3FA9F5"],[-4.5,5.5,0,2,1,1.5,"#3FA9F5"],[0,3,4.1,2,2,.4,At]],watermelon:()=>[[0,0,0,10,3,8,"#2E8B3A"],[0,3,0,10,1,8,"#9BE07A"],[0,3,0,9,2.5,7,"#FF5A6E"],[0,5.5,0,7,1,5,"#FF5A6E"],[-2.5,5.6,1,.8,1,.8,kt],[0,6.6,0,.8,.6,.8,kt],[2.5,5.6,-1,.8,1,.8,kt],[1,5,2.8,.8,.8,.8,kt],[-4,.5,4.05,1,2,.2,"#1E6B2A"],[0,.5,4.05,1,2,.2,"#1E6B2A"],[4,.5,4.05,1,2,.2,"#1E6B2A"]],candy:()=>[[0,0,0,3,1,3,"#E8E3DA"],[0,1,0,.8,8,.8,At],...Li(0,13.5,4.5,1.4,"#FF5C9A",-.7),...Li(0,13.5,3.2,1.6,"#FFD43B",-.8),...Li(0,13.5,1.8,1.8,"#3FA9F5",-.9)],cupcake:()=>[[0,0,0,5,3.5,5,"#5CC0F7"],[-2.6,0,0,.2,3.5,5,"#3FA9F5"],[2.6,0,0,.2,3.5,5,"#3FA9F5"],[0,3.5,0,6,2,6,"#FFC2D6"],[0,5.5,0,4.5,1.5,4.5,"#FFC2D6"],[0,7,0,3,1,3,"#FFE3EE"],[0,8,0,1.6,1.6,1.6,"#E8473C"],[.3,9.6,0,.3,1.2,.3,"#2E8B3A"],[-2,5.5,2.3,.6,.4,.6,"#FFD43B"],[1.5,6,2,.6,.4,.6,"#2EC27E"],[2.4,5.6,-1,.6,.4,.6,"#8E6CFF"]],candle:()=>[[0,-3,.5,7,1.5,1,"#C9A227"],[0,-4.5,3,6,1.5,5,"#C9A227"],[0,-3,3,2.5,6,2.5,"#FFF7E0"],[0,3,3,.4,.8,.4,kt],[0,3.6,3,1.4,2.2,1.4,"#FFB13B","glow"],[0,4.2,3,.7,1.2,.7,"#FFF3B0","glow"]],sofa:()=>[[0,0,0,38,2,14,Ee],[0,2,0,36,5,14,"#2BB5A5"],[-8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[0,7,-5.5,36,10,3,"#2BB5A5"],[-8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[-18.5,2,0,3,10,14,"#239A8C"],[18.5,2,0,3,10,14,"#239A8C"],[-11,9.5,2,5,5,2,"#FFD43B"],[11,9.5,2,5,5,2,"#FF8FB1"]],tv:()=>[[0,0,0,26,7,9,Rn],[-6.5,1.5,4.6,11,4,.4,Ee],[6.5,1.5,4.6,11,4,.4,Ee],[0,7,-1,4,2,3,"#333"],[0,9,-1,24,15,2,"#222"],[0,10,.05,22,13,.2,"#3FA9F5","glow"],[0,10,.2,22,4,.2,"#7ED957","glow"],[5,18,.2,4,4,.2,"#FFD43B","glow"],[-5,17,.2,7,2,.2,At,"glow"]],piano:()=>[[0,0,0,30,20,9,"#1F1A2B"],[0,20,-1,31,1.5,10,"#2C2540"],[0,10,6,30,2,5,"#1F1A2B"],[0,12,6,28,1,4.5,At],...[-12,-9,-4,-1,2,7,10].map(n=>[n,13,5,1,.8,2.5,kt]),[-13,0,6,2,10,2,"#1F1A2B"],[13,0,6,2,10,2,"#1F1A2B"],[0,14,4.6,10,5,.5,"#C9A227"],[0,0,15,12,6,6,Ee],[0,6,15,13,1.5,7,"#E8473C"]],plant:()=>[[0,0,0,7,6,7,"#D9744A"],[0,6,0,8,1.5,8,"#E88A5E"],[0,7,0,7,.4,7,"#6B4426"],[0,7,0,1.5,8,1.5,"#3E8E41"],[-3,10,0,5,3,3,"#4CB050"],[3,12,1,5,3,3,"#5CC23A"],[0,15,-2,4,4,4,"#4CB050"],[-1,17,2,3,3,3,"#7ED957"],[2,9,-2,3,2,3,"#7ED957"]],rainbow:()=>{let n=["#FF5A5F","#FF9F43","#FFD43B","#2EC27E","#3FA9F5","#8E6CFF"],t=[];return n.forEach((e,i)=>{let s=13-i*1.6;for(let r=0;r<12;r++){let a=(r+.5)/12*Math.PI;t.push([Math.cos(a)*s,Math.sin(a)*s-6,.8,3.2,2,1.6,e])}}),t.push([-12,-8,1.5,6,3,2,At],[-14,-7,1.5,4,3,2,At],[12,-8,1.5,6,3,2,At],[14,-7,1.5,4,3,2,At]),t},puzzle:()=>[[-3,0,-3,6,1,6,"#FF5A5F"],[3,0,-3,6,1,6,"#3FA9F5"],[-3,0,3,6,1,6,"#FFD43B"],[3,0,3,6,1,6,"#2EC27E"],[0,0,-3,1.6,1,2,"#FF5A5F"],[-3,0,0,2,1,1.6,"#FFD43B"],[3,0,0,2,1,1.6,"#3FA9F5"],[0,0,3,1.6,1,2,"#2EC27E"],[9,0,4,5,1,5,"#8E6CFF"],[8,0,1.2,1.6,1,1.6,"#8E6CFF"]],cat:()=>La({body:"#FF9F43",light:"#FFE0B8",ears:!0}),dog:()=>La({body:"#E0B070",light:"#FFF1DC",flop:"#8A5634"}),bathtub:()=>[[-13,0,-6,2,2,2,"#C9A227"],[13,0,-6,2,2,2,"#C9A227"],[-13,0,6,2,2,2,"#C9A227"],[13,0,6,2,2,2,"#C9A227"],[0,2,0,32,2,17,At],[0,4,-7.5,32,7,2,At],[0,4,7.5,32,7,2,At],[-15,4,0,2,7,13,At],[15,4,0,2,7,13,At],[0,4,0,28,5,13,"#7FD0FF"],[-6,9,-2,4,2,4,"#FFFFFF"],[-3,9,2,3,3,3,"#F4FBFF"],[4,9,-1,5,2,4,"#FFFFFF"],[8,9,3,3,2,3,"#F4FBFF"],[14,11,-7,1.4,6,1.4,"#C0C7D1"],[12.5,16,-7,4,1.4,1.4,"#C0C7D1"]],toilet:()=>[[0,0,1,7,6,7,At],[0,6,1.5,10,2,11,hn],[0,8,1.5,10,.8,11,"#9FD8F5"],[0,6,-5,11,12,4,At],[0,18,-5,12,1.4,5,hn],[3.5,15,-2.7,2,1,.8,"#C0C7D1"]],mirror:()=>[...Li(0,0,8,1,"#C9A227"),...Li(0,0,7,1.4,"#CFEFFF"),[-2,2,1.5,1,3,.2,At,"glow"],[-1,4,1.5,1,1,.2,At,"glow"]],soap:()=>[[0,0,0,7,.8,5,"#9FD8F5"],[0,.8,0,5,2.5,3.5,"#FF8FB1"],[-2,3.3,0,2,2,2,"#F4FBFF","glass"],[1,3.6,1,1.4,1.4,1.4,"#F4FBFF","glass"],[2,5,-1,1,1,1,"#F4FBFF","glass"]],duck:()=>[[0,0,0,7,4,8,"#FFD43B"],[0,3,-3.5,4,3,2,"#FFD43B"],[0,4,2.5,5,5,5,"#FFD43B"],[0,5.5,5.5,3,1.4,2.4,"#FF9F43"],[-2.6,7,3.5,.4,1.2,1.2,kt],[2.6,7,3.5,.4,1.2,1.2,kt],[-3.6,1,0,.5,2.5,4,"#F5C518"],[3.6,1,0,.5,2.5,4,"#F5C518"]],toothbrush:()=>[[0,0,0,4,6,4,"#8E6CFF"],[0,6,0,4.4,.6,4.4,"#A88BFF"],[-.8,4,0,.8,9,.8,"#3FA9F5"],[-.8,13,.5,.9,2,1.6,At],[.8,4,.3,.8,8,.8,"#FF5C9A"],[.8,12,.8,.9,2,1.6,At],[5,0,1,2,1,6,At],[5,1,-1,2,1,2,"#3FA9F5"]],lotion:()=>[[0,0,0,4,8,3,"#FF8FB1"],[0,2,1.55,3,3,.2,At],[0,8,0,1.6,1.4,1.6,At],[0,9.4,0,1,1.6,1,At],[1,10.4,0,2.4,.8,1,At]],sponge:()=>[[0,0,0,7,3,5,"#FFD43B"],[0,3,0,7,1.2,5,"#2EC27E"],[-2,1.2,2.55,.8,.8,.2,"#E8B800"],[1.5,.8,2.55,.8,.8,.2,"#E8B800"],[2.5,2,2.55,.6,.6,.2,"#E8B800"]],tree:()=>[[0,0,0,5,20,5,"#8A5634"],[0,0,0,7,2,7,"#6E4228"],[0,16,0,22,8,22,"#3E9B45"],[0,24,0,18,6,18,"#4CB050"],[0,30,0,10,4,10,"#5CC23A"],[-11.3,19,3,1.2,2,2,"#E8473C"],[6,18,11.3,2,2,1.2,"#E8473C"],[11.3,21,-4,1.2,2,2,"#E8473C"],[-3,25,9.3,2,2,1.2,"#E8473C"],[-4,19,-11.3,2,2,1.2,"#E8473C"]],flower:()=>[[0,0,0,1.2,14,1.2,"#3E8E41"],[-2,5,0,3,1,2,"#4CB050"],[2,8,0,3,1,2,"#4CB050"],[0,13,.5,9,9,1.5,"#FFD43B"],[0,15,1.3,4,5,1,"#8A5634"],[0,12,.5,4,1,1.4,"#FFB13B"],[0,22,.5,4,1,1.4,"#FFB13B"],[-5,15,.5,1,4,1.4,"#FFB13B"],[5,15,.5,1,4,1.4,"#FFB13B"]],tulips:()=>[[0,0,0,12,1,8,"#6B4426"],...[[-4,"#FF5C9A",9],[0,"#FF5A5F",12],[4,"#FFD43B",10]].flatMap(([n,t,e])=>[[n,1,0,.8,e,.8,"#3E8E41"],[n-1,2,.5,1,4,2,"#4CB050"],[n,1+e,0,3,3,3,t],[n-1,4+e,0,1,1,3,t],[n+1,4+e,0,1,1,3,t]])],mushroom:()=>[[0,0,0,4,6,4,"#FFF7E0"],[0,6,0,11,3,11,"#E8473C"],[0,9,0,7,2,7,"#E8473C"],[-3,8.5,5.6,2,1.5,.3,At],[3,7,5.6,1.5,1.5,.3,At],[0,11,0,2,.3,2,At],[5.6,7.5,1,.3,1.5,2,At],[-5.6,7.5,-2,.3,1.5,2,At]],ball:()=>{let n=[];for(let e=0;e<2*4;e++){let i=Math.sqrt(Math.max(.5,16-(e+.5-4)*(e+.5-4)));n.push(...Wn(0,e,0,i,1,At,.5))}return n.push([0,3,3.95,2.4,2,.4,kt],[3.95,3,0,.4,2,2.4,kt],[0,3,-3.95,2.4,2,.4,kt],[-3.95,3,0,.4,2,2.4,kt],[0,7.8,0,2.4,.4,2.4,kt],[2.6,5.6,2.6,1.4,1.2,1.4,kt],[-2.6,5.6,-2.6,1.4,1.2,1.4,kt],[2.6,1.2,-2.6,1.4,1.2,1.4,kt],[-2.6,1.2,2.6,1.4,1.2,1.4,kt]),n},butterfly:()=>[[0,-1,0,1,1,6,kt],[-3,-.5,-1,5,.6,5,"#FF5C9A"],[3,-.5,-1,5,.6,5,"#FF5C9A"],[-2.5,-.5,3,4,.6,3,"#8E6CFF"],[2.5,-.5,3,4,.6,3,"#8E6CFF"],[-3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[-.7,0,-3.5,.3,.3,2,kt],[.7,0,-3.5,.3,.3,2,kt]],bee:()=>[[0,-2,0,4,4,6,"#FFD43B"],[0,-2.1,-.5,4.2,4.2,1,kt],[0,-2.1,1.8,4.2,4.2,1,kt],[0,-1.5,-3.8,3,3,2,kt],[-.8,-.5,-4.85,.5,.8,.3,At],[.8,-.5,-4.85,.5,.8,.3,At],[-2.5,2,0,3,.4,3,"#E6F6FF","glass"],[2.5,2,0,3,.4,3,"#E6F6FF","glass"],[0,-1,3.5,1,1,1.5,kt]],bunny:()=>La({body:"#F2EEE8",light:"#FFFFFF",bunny:!0}),goal:()=>{let n="#E9EEF2",s=[[-20,0,6,2,20,2,At],[20,0,6,2,20,2,At],[0,18,6,42,2,2,At],[-20,0,-7,1.4,19,1.4,hn],[20,0,-7,1.4,19,1.4,hn],[0,18,-7,40,1.4,1.4,hn],[-20,18,0,1.4,1.4,14,hn],[20,18,0,1.4,1.4,14,hn],[0,0,-7,40,.8,1.4,hn],[-20,0,0,1.4,.8,14,hn],[20,0,0,1.4,.8,14,hn],[0,0,-7.2,40,18,.2,"#FFFFFF","glass"],[0,18.8,0,40,.2,14,"#FFFFFF","glass"],[-20,0,0,.2,18,14,"#FFFFFF","glass"],[20,0,0,.2,18,14,"#FFFFFF","glass"]];for(let r=-16;r<20;r+=4)s.push([r,0,-7,.3,18,.3,n],[r,20-1.5,0,.3,.3,2*7,n]);for(let r=3;r<18;r+=3)s.push([0,r,-7,2*20,.3,.3,n],[-20,r,0,.3,.3,2*7,n],[20,r,0,.3,.3,2*7,n]);for(let r=-7+3.5;r<7;r+=3.5)s.push([-20,0,r,.3,18,.3,n],[20,0,r,.3,18,.3,n],[0,20-1.5,r,2*20,.3,.3,n]);return s},hoop:()=>{let n="#FF7A1A",t="#F4F4F4",s=[[0,0,-5,11,3,9,"#3A3F4B"],[0,3,-5,9,1,7,"#4A5160"],[0,4,-5,2.6,34,2.6,"#7A8494"],[0,35,-3,2,2,5,"#7A8494"],[0,29,-.5,22,15,1.2,At],[0,29,.2,22,.8,.4,"#3FA9F5"],[0,43.2,.2,22,.8,.4,"#3FA9F5"],[-10.6,29,.2,.8,15,.4,"#3FA9F5"],[10.6,29,.2,.8,15,.4,"#3FA9F5"],[0,33,.3,8,.8,.4,"#E8473C"],[0,39,.3,8,.8,.4,"#E8473C"],[-3.6,33,.3,.8,6.8,.4,"#E8473C"],[3.6,33,.3,.8,6.8,.4,"#E8473C"],[0,32.5,1.4,2,1.2,1.6,n],[0,33,2.5,8,.8,.8,n],[0,33,10.5,8,.8,.8,n],[-4,33,6.5,.8,.8,8,n],[4,33,6.5,.8,.8,8,n]];for(let r=0;r<3;r++){let a=31-r*2,o=2,l=3.6-r*.6;for(let c of[-l,0,l])s.push([c,a,6.5-l,.3,o,.3,t],[c,a,6.5+l,.3,o,.3,t],[-l,a,6.5+c,.3,o,.3,t],[l,a,6.5+c,.3,o,.3,t]);s.push([0,a,6.5-l,2*l,.3,.3,t],[0,a,6.5+l,2*l,.3,.3,t],[-l,a,6.5,.3,.3,2*l,t],[l,a,6.5,.3,.3,2*l,t])}return s.push([8,0,3,6,6,6,"#F08C3A"],[8,2.75,3,6.2,.5,6.2,kt],[8,0,3,.5,6.1,6.2,kt],[8,0,3,6.2,6.1,.5,kt]),s},fountain:()=>[...Wn(0,0,0,16,2,"#A9B1BC"),...Wn(0,2,0,16,3,"#C0C7D1"),...Wn(0,3,0,14,2.4,"#5CC0F7"),[0,5,0,4,10,4,"#C0C7D1"],...Wn(0,13,0,7,2,"#C0C7D1"),...Wn(0,14,0,6,1.4,"#5CC0F7"),[0,15,0,1.6,7,1.6,"#BDE7FF","glass"],[0,21,0,4,1.5,4,"#BDE7FF","glass"],[4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[-4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[0,12,4,1.2,3,1.2,"#BDE7FF","glass"],[0,12,-4,1.2,3,1.2,"#BDE7FF","glass"]],bedrug:()=>[[0,0,0,52,.6,36,"#FFB8D4"],[0,.6,0,44,.3,28,"#FFD1E3"]],nightstand:()=>[[0,0,0,17,12.8,15,Rn],[0,4,7.8,13,3.5,.6,Ee],[0,5.5,8.4,2,1,.6,"#FFD43B"]],table:()=>[[0,14,0,54,1.4,32,Rn],[0,15.4,0,50,.3,28,At],...[[-24,-13],[24,-13],[-24,13],[24,13]].map(([n,t])=>[n,0,t,2,14,2,Ee])],livrug:()=>[[0,0,0,64,.6,44,"#8E6CFF"],[0,.6,0,52,.3,34,"#B9A6FF"]],coffee:()=>[[0,6,0,32,2,18,Ee],...[[-14,-7],[14,-7],[-14,7],[14,7]].map(([n,t])=>[n,0,t,2,6,2,Rn])],sink:()=>[[0,0,0,52,15,17,At],[0,15,0,54,1,18,"#9FD8F5"],[0,15.2,1.6,14,1,10,"#CDEBFF"],[0,16,-5.6,1.6,4,1.6,"#C0C7D1"],[0,19,-3.2,1.6,1.2,4,"#C0C7D1"],[-12,4,8.75,18,8,.5,"#E6F6FF"],[12,4,8.75,18,8,.5,"#E6F6FF"]]};function La({body:n,light:t,ears:e,flop:i,bunny:s}){let r=[[0,0,-1,7,6,9,n],[0,0,2.5,5,4,2,t],[-2.5,0,4,2,2,2,n],[2.5,0,4,2,2,2,n],[0,5,3.5,7,6,6,n],[0,5.6,6.5,4,2.6,1.4,t],[0,7.2,7.2,1.4,1,.4,s?"#FF8FB1":kt],[-2,8.6,6.55,1,1.4,.4,kt],[2,8.6,6.55,1,1.4,.4,kt]];return e&&r.push([-2.5,11,3.5,2,2,2,n],[2.5,11,3.5,2,2,2,n],[-2.5,11,4.5,1,1,.2,"#FF8FB1"],[2.5,11,4.5,1,1,.2,"#FF8FB1"]),i&&r.push([-4,6.5,3.5,1.4,5,3,i],[4,6.5,3.5,1.4,5,3,i]),s&&r.push([-1.6,11,3,1.6,6,1.4,n],[1.6,11,3,1.6,6,1.4,n],[-1.6,12,3.75,.8,4,.2,"#FF8FB1"],[1.6,12,3.75,.8,4,.2,"#FF8FB1"]),s?r.push([0,2,-6,3,3,2,t]):r.push([0,1,-6,1.6,1.6,3,n],[0,2,-7.5,1.6,5,1.6,n],[0,7,-7.5,1.6,1.6,1.6,t]),r}var un={picture:{wall:!0},clock:{wall:!0},candle:{wall:!0},rainbow:{wall:!0},mirror:{wall:!0},butterfly:{fly:!0},bee:{fly:!0},teddy:{small:!0},books:{small:!0},plates:{small:!0},pizza:{small:!0},cake:{small:!0},teapot:{small:!0},watermelon:{small:!0},candy:{small:!0},cupcake:{small:!0},soap:{small:!0},duck:{small:!0},toothbrush:{small:!0},lotion:{small:!0},sponge:{small:!0},puzzle:{},ball:{},nightstand:{surface:.8},table:{surface:15.7/16},coffee:{surface:.5},sink:{surface:1},bedrug:{flat:!0},livrug:{flat:!0}};var ee={fair:"#FCE0C8",light:"#F6D2B0",tan:"#E3B58C",brown:"#C68B59",dark:"#8D5A3B"},re="#2B1E3A",fe="#FFFFFF",le="#FFD43B",Xs="#E8B800",H0="rgba(255,120,160,0.55)",V0={1:["010","110","010","010","111"],0:["111","101","101","101","111"],7:["111","001","010","010","010"]};function jr(n,t,e,i=1.5,s=.75){let r=[],a=n.length*4*s-s;return n.split("").forEach((o,l)=>{V0[o].forEach((c,h)=>{c.split("").forEach((d,f)=>{d==="1"&&r.push([-a/2+(l*4+f+.5)*s,i+(4-h)*s,e,s,s,.3,t])})})}),r}var Fn=(n,t,e,i=le,s=1)=>[[n,t,e,1*s,3*s,.3,i],[n,t+1*s,e,3*s,1*s,.3,i]];function G0(n,t){if(n==="none")return[];let e=[[0,8.5,0,10.8,2.6,10.8,t],[0,2.5,-5.2,10.8,7,1,t],[5.2,4.5,-.5,.8,5,9.6,t],[-5.2,4.5,-.5,.8,5,9.6,t]];return(n==="long"||n==="longbow")&&e.push([0,-6,-5.6,11,9,1.8,t],[5.4,-2,-1,1.2,7,8,t],[-5.4,-2,-1,1.2,7,8,t]),n==="buns"&&e.push([4.6,9,-1,4,4,4,t],[-4.6,9,-1,4,4,4,t]),n==="bun"&&e.push([0,10.6,-1.5,4.5,3.5,4.5,t]),n==="ponytail"&&e.push([0,4,-6.5,3.2,5,2.6,t],[0,-1,-6.8,2.6,5,2.2,t]),n==="pigtails"&&e.push([6.4,2.5,-1.5,2.6,5,2.6,t],[-6.4,2.5,-1.5,2.6,5,2.6,t]),e}function W0(n,t,e){let i=(r,a,o=1,l=1)=>n.fillRect(r,a,o,l);n.clearRect(0,0,20,20),n.fillStyle=t.faceColor||t.skin,i(0,0,20,20),t.mask&&(n.fillStyle=t.mask,i(0,0,20,7),i(0,14,20,6)),t.fringe!==!1&&t.hair&&t.style!=="none"&&(n.fillStyle=t.hair,i(0,0,20,3),t.fringe==="side"?(i(0,3,9,2),i(0,5,4,1)):(i(0,3,6,1),i(12,3,8,2)),(t.style==="long"||t.style==="longbow")&&(i(0,0,2,13),i(18,0,2,13)));let s=t.eye||re;n.fillStyle=s,e==="sleepy"?(i(4,11,4,1),i(12,11,4,1)):e==="cheer"?(i(4,11),i(5,10),i(6,10),i(7,11),i(12,11),i(13,10),i(14,10),i(15,11)):(i(5,9,2,3),i(13,9,2,3),n.fillStyle=fe,i(5,9),i(13,9)),t.glasses&&(n.fillStyle=t.glasses,i(3,8,6,1),i(3,12,6,1),i(3,8,1,5),i(8,8,1,5),i(11,8,6,1),i(11,12,6,1),i(11,8,1,5),i(16,8,1,5),i(9,9,2,1)),t.mask||(n.fillStyle=H0,i(2,13,3,2),i(15,13,3,2)),t.animal&&(n.fillStyle=t.nose||"#FF7AA2",i(9,12,2,1)),t.whiskers&&(n.fillStyle=re,i(0,13,4,1),i(16,13,4,1),i(1,15,3,1),i(16,15,3,1)),!t.mask&&(e==="cheer"?(n.fillStyle="#9B2335",i(8,14,4,3),n.fillStyle="#FF8FB1",i(9,16,2,1)):e==="sleepy"?(n.fillStyle="#9B2335",i(9,15,2,1)):(n.fillStyle="#9B2335",i(8,15,4,1),i(7,14),i(12,14)),t.faceExtra&&t.faceExtra(n,i))}var Vt=n=>n,Ua={boni:Vt({animal:"bunny",fur:"#D9CCFF",light:"#F1ECFF",skin:"#E6DCFF",extra:n=>{n.body.push([0,6.5,0,9.8,1.8,5.8,"#2EC27E"],[2.5,2.5,2.9,2.2,4,.8,"#2EC27E"]),n.head.push([3.6,9.5,2.5,3,1.5,.6,"#FF8FB1"])}}),bobi:Vt({animal:"bunny",fur:"#A9C4F5",light:"#E2ECFF",skin:"#B9D0F8",extra:n=>{n.head.push([0,8.8,0,10.8,2.4,10.8,"#FF5A5F"],[0,8.8,6.5,9,.8,4,"#FF5A5F"],[0,11.2,0,1.4,1,1.4,le]),n.body.push([0,7,0,9.6,1.2,5.6,"#2EC27E"])}}),mika:Vt({skin:ee.light,hair:"#6B3E26",style:"buns",shirt:"#8E6CFF",pants:"#4A3A8C",shoes:"#FF5C9A",extra:n=>{n.body.push([0,6,2.6,3,1,.3,fe],[-1,5,2.6,1,1,.3,fe],[1,5,2.6,1,1,.3,fe]),n.head.push(...Fn(3.5,8.5,5.5))}}),noam:Vt({skin:ee.light,hair:"#6B3E26",style:"short",shirt:"#2EC27E",pants:"#3A3F6B",shoes:"#FF5A5F",fringe:!1,extra:n=>{n.head.push([0,8.5,0,10.8,2.8,10.8,"#3FA9F5"],[0,8.5,6.5,9,.8,4,"#3FA9F5"]),n.body.push(...Fn(0,3,2.6))}}),pitzi:Vt({animal:"cat",fur:"#FFB0CF",light:"#FFE3EE",whiskers:!0}),shoko:Vt({animal:"cat",fur:"#8DB8F0",light:"#E2EEFF",whiskers:!0,extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#FF5A5F"])}}),chip:Vt({animal:"dog",fur:"#C98A55",light:"#F3D9B8",ears:"#7A4A2A",extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#3FA9F5"],[0,5.8,2.9,1.4,1.4,.6,le])}}),lola:Vt({animal:"dog",fur:"#F3E2C3",light:"#FFF6E8",ears:"#D9A86A",extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#FF5C9A"]),n.head.push([0,10,0,2,1.5,1.5,"#FF5C9A"],[-1.8,10,0,1.8,2,1.5,"#FF5C9A"],[1.8,10,0,1.8,2,1.5,"#FF5C9A"])}}),kangi:Vt({animal:"kangaroo",fur:"#D4A373",light:"#F1D6B0",gloves:"#FF5A5F"}),roni:Vt({animal:"kangaroo",fur:"#C99366",light:"#EED2AE",gloves:"#9B7BFF",baby:!0,extra:n=>{n.head.push([-1.8,10,0,1.8,2,1.5,"#9B7BFF"],[1.8,10,0,1.8,2,1.5,"#9B7BFF"],[0,10,0,1.6,1.6,1.6,"#9B7BFF"])}}),blocky:Vt({skin:ee.light,hair:"#3A2A4D",style:"long",shirt:"#FF5C9A",pants:"#3A2A4D",shoes:"#8E6CFF",extra:n=>{n.body.push(...Fn(0,3,2.6)),n.head.push([4,8.5,4,2.4,2.4,2.4,"#8E6CFF"])}}),kubi:Vt({skin:ee.light,hair:"#8B5A2B",style:"short",shirt:"#2EC27E",pants:"#2F4A9C",shoes:"#2B1E3A",extra:n=>{n.body.push([0,3,2.6,2.5,2.5,.3,le])}}),astro:Vt({skin:ee.fair,hair:"#6B3E26",style:"short",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#8E6CFF",helmet:"#FFFFFF",extra:n=>$c(n,"#FF5A5F")}),astro_g:Vt({skin:ee.fair,hair:"#C0452B",style:"long",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#FF5C9A",helmet:"#FFFFFF",extra:n=>$c(n,"#8E6CFF")}),goli:Vt({skin:ee.light,hair:"#2B1E14",style:"short",shirt:"#2EC27E",pants:fe,shoes:re,extra:n=>{n.body.push(...jr("10",fe,2.65)),n.root.push(...Zc(6,0,4))}}),goli_g:Vt({skin:ee.light,hair:"#6B3E26",style:"pigtails",shirt:"#8E6CFF",pants:fe,shoes:re,extra:n=>{n.body.push(...jr("10",fe,2.65)),n.head.push([6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"],[-6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"]),n.root.push(...Zc(6,0,4))}}),sali:Vt({skin:ee.brown,hair:"#2B1E14",style:"short",shirt:"#FF9F43",pants:"#FF9F43",shoes:fe,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#FF5A5F"]),n.body.push(...jr("7",fe,2.65)),n.armR.push(...Jc(0,-13.5,0))}}),sali_g:Vt({skin:ee.dark,hair:"#1E140E",style:"bun",shirt:"#3FA9F5",pants:"#3FA9F5",shoes:fe,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"]),n.body.push(...jr("7",fe,2.65)),n.armR.push(...Jc(0,-13.5,0))}}),ginga:Vt({skin:ee.tan,hair:"#2B1E14",style:"short",shirt:"#3FA9F5",pants:"#F4F4F8",shoes:ee.tan,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"],[-4,6,-6,1.5,1.5,2,"#2EC27E"],[-4.6,4,-6.4,1,2.5,1,"#2EC27E"]),n.body.push([0,0,0,9.4,1.2,5.4,le],[2,-2,2.8,1,2.5,.6,le])}}),ginga_g:Vt({skin:ee.tan,hair:"#2B1E14",style:"ponytail",shirt:le,pants:"#F4F4F8",shoes:ee.tan,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#FF9F43"]),n.body.push([0,0,0,9.4,1.2,5.4,"#FF9F43"],[2,-2,2.8,1,2.5,.6,"#FF9F43"])}}),turbo:Vt({skin:ee.light,hair:"#C0452B",style:"none",shirt:"#2E2440",pants:"#3A3F6B",shoes:re,fringe:!1,extra:n=>Kc(n,"#FF5A5F")}),turbo_g:Vt({skin:ee.light,hair:"#FF5C9A",style:"long",shirt:"#8E6CFF",pants:"#3A2A4D",shoes:re,extra:n=>Kc(n,"#FF5C9A")}),ninja:Vt({skin:ee.light,style:"none",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:"#1E4F8C",faceColor:ee.light,mask:"#2F7BD6",headColor:"#2F7BD6",extra:n=>jc(n,le)}),ninja_g:Vt({skin:ee.light,style:"none",shirt:"#D63B3B",pants:"#D63B3B",shoes:"#8C1E1E",faceColor:ee.light,mask:"#D63B3B",headColor:"#D63B3B",extra:n=>jc(n,fe)}),wizard_b:Vt({skin:ee.light,hair:"#8B5A2B",style:"short",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:re,extra:n=>Qc(n,"#2F7BD6")}),wizard_g:Vt({skin:ee.light,hair:"#F2C14E",style:"long",shirt:"#8E6CFF",pants:"#8E6CFF",shoes:re,extra:n=>Qc(n,"#8E6CFF")}),dancer_b:Vt({skin:ee.brown,hair:"#2B1E14",style:"short",shirt:"#2B2B35",pants:"#3FA9F5",shoes:fe,fringe:!1,extra:n=>{n.head.push([0,8.5,0,10.8,2.8,10.8,"#FF5A5F"],[0,8.5,-6.5,9,.8,4,"#FF5A5F"]);for(let t=0;t<5;t++)n.body.push([-3+t*1.5,1.5+t*1.2,2.65,1.6,1.2,.3,le])}}),dancer_g:Vt({skin:ee.tan,hair:"#2B1E14",style:"bun",shirt:"#FF9EC4",pants:"#FFD1E3",shoes:"#FF5C9A",extra:n=>{n.body.push([0,-1,0,13,2.4,9,"#FFB8D4"],[0,.5,0,11.5,1.2,8,"#FFD1E3"]),n.head.push([0,14,-1.5,3,1.6,1.6,"#FF5C9A"],[-1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"],[1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"])}}),builder_b:Vt({skin:ee.light,hair:"#8B5A2B",style:"short",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:n=>th(n)}),builder_g:Vt({skin:ee.light,hair:"#8B5A2B",style:"long",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:n=>th(n)}),teacher_b:Vt({skin:ee.light,hair:"#6B3E26",style:"short",shirt:"#9C9AC0",pants:"#3A3F6B",shoes:re,glasses:re,extra:n=>{n.body.push([0,4,2.6,1.2,4,.3,"#3FA9F5"]),n.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,fe])}}),teacher_g:Vt({skin:ee.light,hair:"#8B5A2B",style:"long",shirt:"#2EC27E",pants:"#3A3F6B",shoes:re,glasses:re,extra:n=>{n.body.push([0,6,2.6,3,1.2,.3,fe]),n.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,fe])}}),police_b:Vt({skin:ee.light,hair:"#2B1E14",style:"short",shirt:"#2F5DA8",pants:"#24325E",shoes:re,fringe:!1,extra:n=>eh(n)}),police_g:Vt({skin:ee.brown,hair:"#2B1E14",style:"long",shirt:"#2F5DA8",pants:"#24325E",shoes:re,fringe:!1,extra:n=>eh(n)}),fire_b:Vt({skin:ee.light,hair:"#6B3E26",style:"short",shirt:"#2B2B35",pants:"#2B2B35",shoes:re,fringe:!1,extra:n=>nh(n)}),fire_g:Vt({skin:ee.light,hair:"#C0452B",style:"long",shirt:"#2B2B35",pants:"#2B2B35",shoes:re,fringe:!1,extra:n=>nh(n)}),manager_b:Vt({skin:ee.tan,hair:"#2B1E14",style:"short",shirt:"#4A4E6B",pants:"#3A3D55",shoes:re,extra:n=>ih(n)}),manager_g:Vt({skin:ee.tan,hair:"#2B1E14",style:"long",shirt:"#4A4E6B",pants:"#3A3D55",shoes:re,extra:n=>ih(n)}),pilot_b:Vt({skin:ee.light,hair:"#2B1E14",style:"short",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:re,fringe:!1,extra:n=>sh(n)}),pilot_g:Vt({skin:ee.light,hair:"#F2C14E",style:"long",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:re,fringe:!1,extra:n=>sh(n)}),soldier_b:Vt({skin:ee.light,hair:"#2B1E14",style:"short",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:n=>rh(n)}),soldier_g:Vt({skin:ee.tan,hair:"#2B1E14",style:"long",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:n=>rh(n)})};function Zc(n,t,e){return[[n,t,e,4.4,4.4,4.4,fe],[n,t+1.4,e+2.25,1.6,1.6,.2,re],[n+2.25,t+1.4,e,.2,1.6,1.6,re],[n,t+4.45,e,1.6,.2,1.6,re]]}function Jc(n,t,e){return[[n,t,e,5,5,5,"#E8762B"],[n,t,e,5.1,.4,5.1,re],[n,t,e,.4,5.1,5.1,re]]}function $c(n,t){n.head.push([0,10,0,12.4,1.6,12.4,fe],[0,-.6,-6,12.4,10.6,1,fe],[6,-.6,0,1,10.6,12.4,fe],[-6,-.6,0,1,10.6,12.4,fe],[0,-.6,6,12.4,1,1,fe],[0,.4,6,10.8,9.6,.6,"#CDEBFF","glass"],[3,11.6,0,.6,3,.6,"#C0C7D1"],[3,14.6,0,1.6,1.6,1.6,"#FF5A5F"]),n.body.push([0,.5,0,9.4,1.2,5.4,t],[0,3.5,2.6,3,2.6,.3,"#3FA9F5"],...Fn(0,3.8,2.8,le,.6)),n.body.push([0,1,-3.3,7,6,2,"#E0E0EA"])}function Kc(n,t){n.head.push([0,9,0,11.6,2.6,11.6,t],[0,0,-5.8,11.6,11,1.2,t],[5.8,0,-.5,1.2,11,10.6,t],[-5.8,0,-.5,1.2,11,10.6,t],[0,6.4,5.9,9.6,2,.6,"#BDE7FF"],[5.9,5,2,.4,3,1,le],[5.9,3,1,.4,3,1,le]),n.body.push([-2,0,2.6,1,8,.3,t],[2,0,2.6,1,8,.3,t])}function jc(n,t){n.head.push([0,7,0,10.6,1.4,10.6,t],[0,6.5,-5.8,2,2,1,t],[1,4.5,-6.3,1,3,.6,t],[-1,5,-6.3,1,2.5,.6,t]),n.body.push([0,0,0,9.4,1.2,5.4,t],[0,2,2.6,7,1,.3,"#1B1530"]),n.body.push([3,2,-3,.8,9,.8,"#C0C7D1"])}function Qc(n,t){n.head.push([0,9.5,0,13,1,13,t],[0,10.5,0,9,3,9,t],[0,13.5,-.3,6.5,3,6.5,t],[0,16.5,-.6,4,3,4,t],[0,19.5,-.9,2,2,2,t],...Fn(0,11,4.6)),n.body.push([0,-5,0,10,5.2,6,t],...Fn(-2,4,2.6,le,.6),...Fn(2,1,2.6,le,.6),...Fn(-1,-3,3.1,le,.6)),n.armR.push([0,-15,1.5,.8,7,.8,"#8A5634"],...Fn(0,-9,1.5,le,.7))}function th(n){n.head.push([0,8.5,0,11.2,3.2,11.2,le],[0,8.5,.6,12.4,.8,12.4,le],[0,11.7,0,2,.8,9,"#F5C518"]),n.body.push([0,2,2.6,9.2,1,.3,fe],[0,5,2.6,9.2,1,.3,fe]),n.armR.push([0,-15,1,.9,7,.9,"#8A5634"],[0,-9,1,3.5,1.6,1.6,"#9AA3AE"])}function eh(n){n.head.push([0,8.5,0,11,3,11,"#24325E"],[0,8.5,6,9,.8,2.6,re],[0,9.5,5.6,1.6,1.6,.4,le]),n.body.push([0,0,0,9.4,1.2,5.4,re],[-2.4,5,2.6,1.4,1.4,.3,le],...Fn(2,4.5,2.6,le,.5))}function nh(n){n.head.push([0,8.5,0,11.4,3.2,11.4,"#E8473C"],[0,8.5,-.5,13.4,.9,13.4,"#E8473C"],[0,9,5.8,2.6,2.4,.4,le]),n.body.push([0,1.5,0,9.4,1,5.4,le],[0,4.5,0,9.4,1,5.4,le]),n.armL.push([0,-4,0,3.4,1,3.6,le]),n.armR.push([0,-4,0,3.4,1,3.6,le]),n.legL.push([0,-3.5,0,4,.8,4.6,le]),n.legR.push([0,-3.5,0,4,.8,4.6,le])}function ih(n){n.body.push([0,4,2.55,3,4,.3,fe],[0,3,2.7,1,4.5,.3,"#E8473C"],[0,7.2,2.7,1.6,.8,.3,"#E8473C"]),n.armR.push([0,-14,0,2,5,6,"#8A5634"],[0,-9,0,1,1.2,2.4,"#5A3A22"])}function sh(n){n.head.push([0,8.5,0,11,3,11,fe],[0,8.5,6,9,.8,2.6,re],[0,8.4,0,11.1,.8,11.1,re],[0,9.5,5.6,2.4,1.4,.4,Xs]),n.body.push([0,3,2.6,1,4,.3,Xs],[-2.4,5.5,2.6,2,.8,.3,Xs]),n.armL.push([0,-6,0,3.4,.8,3.6,Xs]),n.armR.push([0,-6,0,3.4,.8,3.6,Xs])}function rh(n){n.head.push([0,8.5,-.5,11,2.2,11,"#3E7B32"],[1.2,10.3,-.3,9,1.4,9,"#3E7B32"],[-3,9.6,5.1,1.4,1.4,.4,le]),n.body.push([-2.3,4,2.6,2.6,2,.3,"#5C6E32"],[2.3,4,2.6,2.6,2,.3,"#5C6E32"],[0,0,0,9.4,1.2,5.4,"#3B2A1A"])}function X0(n,t){let e=n.fur,i=n.light;n.animal==="bunny"?(t.head.push([2.4,10,0,2.4,8,1.6,e],[-2.4,10,0,2.4,8,1.6,e],[2.4,11,.85,1.2,6,.2,"#FFB0CF"],[-2.4,11,.85,1.2,6,.2,"#FFB0CF"]),t.head.push([0,1,5.3,4,2.6,.8,i]),t.body.push([0,-3,-3,3.4,3,2,fe])):n.animal==="cat"?(t.head.push([3.2,10,0,3,2.4,2,e],[-3.2,10,0,3,2.4,2,e],[3.2,12.4,0,1.4,1.2,1.6,e],[-3.2,12.4,0,1.4,1.2,1.6,e]),t.head.push([3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"],[-3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"]),t.body.push([0,0,-3.5,1.8,1.8,3,e],[0,0,-5.2,1.8,9,1.8,e],[0,9,-5.2,1.8,1.8,1.8,i])):n.animal==="dog"?(t.head.push([5.6,1.5,.5,1.4,8,4.5,n.ears],[-5.6,1.5,.5,1.4,8,4.5,n.ears]),t.head.push([0,.5,5.9,5,3.4,1.8,i],[0,3.2,6.9,2,1,.4,re]),t.head.push([2.5,7.5,5.1,2.4,2.4,.2,i]),t.body.push([0,2,-3.5,1.8,1.8,3,e],[0,3.5,-5,1.8,3,1.8,e])):n.animal==="kangaroo"&&(t.head.push([2.6,10,-.5,2.2,6.5,1.4,e],[-2.6,10,-.5,2.2,6.5,1.4,e],[2.6,11,.3,1.1,4.5,.2,"#F1B7A0"],[-2.6,11,.3,1.1,4.5,.2,"#F1B7A0"]),t.head.push([0,.5,5.6,5,3.4,1.4,i]),t.body.push([0,.3,2.85,6.5,3.5,.8,i]),t.body.push([0,-7,-4.5,3.4,3.4,4,e],[0,-7,-8.5,2.8,2.4,4.5,e],[0,-7,-11.5,2.2,1.8,2,e]),n.baby&&t.body.push([0,2.5,3.6,3.4,3.2,2.6,e],[-.8,4.2,4.95,.6,.8,.2,re],[.8,4.2,4.95,.6,.8,.2,re],[-1,5.7,3.6,.8,1.4,.8,e],[1,5.7,3.6,.8,1.4,.8,e]),t.armL.push([0,-9,0,3.4,2.6,3.4,n.gloves]),t.armR.push([0,-9,0,3.4,2.6,3.4,n.gloves])),t.body.push([0,.5,2.55,6,6,.3,i])}var Y0=Object.keys(Ua);function Na(n,{shadows:t=!0}={}){let e=Ua[n]||Ua.boni,i=rn({},e);i.animal&&(i.skin=i.skin||i.fur,i.shirt=i.fur,i.pants=i.fur,i.shoes=i.light,i.hands=i.fur,i.faceColor=i.faceColor||i.fur,i.style="none");let s={head:[],body:[],armL:[],armR:[],legL:[],legR:[],root:[]},r=i.sleeve||i.shirt;s.head.push([0,0,0,10,10,10,i.headColor||i.faceColor||i.skin]),s.head.push(...G0(i.style||"short",i.hair)),s.body.push([0,0,0,9,8,5,i.shirt]);for(let[C,G]of[[s.armL,1],[s.armR,-1]])C.push([0,-6,0,3,6,3.2,r],[0,-8.5,0,2.8,2.5,2.8,i.hands||i.skin]);for(let C of[s.legL,s.legR])C.push([0,-7,0,3.8,7,4,i.pants],[0,-7,.4,4,1.6,4.8,i.shoes]);i.animal&&X0(i,s),i.extra&&i.extra(s);let a=xs(n),o=(C,G)=>li(C,{seed:a+G,jitter:.035,shadows:t}),l=new Fe,c=1/16,h=(C,G,j,y,w)=>{let st=new Fe;return st.position.set(G*c,j*c,y*c),st.add(o(C,w)),l.add(st),st},d=h(s.legL,2.1,7,0,1),f=h(s.legR,-2.1,7,0,2),m=h(s.body,0,7,0,3),g=h(s.head,0,15,0,4),v=h(s.armL,6,14.5,0,5),p=h(s.armR,-6,14.5,0,6);s.root.length&&l.add(o(s.root,7));let u=document.createElement("canvas");u.width=20,u.height=20;let b=u.getContext("2d"),x=new ms(u);x.magFilter=Re,x.minFilter=Re,x.colorSpace=Ke;let T=new Ne(new ds(10*c,10*c),new Ri({map:x}));T.position.set(0,5*c,5.02*c),g.add(T);let F="",R=C=>{C!==F&&(F=C,W0(b,i,C),x.needsUpdate=!0)};return R("happy"),{id:n,root:l,head:g,body:m,armL:v,armR:p,legL:d,legR:f,setMood:R,height:25*c}}function Ba(n,t,{walking:e=0,cheer:i=0,sleepy:s=0}){let r=Math.sin(t*9)*.7*e;n.legL.rotation.x=r,n.legR.rotation.x=-r;let a=i*(2.5+Math.sin(t*12)*.25);n.armL.rotation.x=-r*.9,n.armR.rotation.x=r*.9,n.armL.rotation.z=a,n.armR.rotation.z=-a;let o=e?Math.abs(Math.sin(t*9))*.04:0,l=i?Math.abs(Math.sin(t*7))*.25*i:0;n.body.position.y=7/16+o,n.head.position.y=15/16+o,n.armL.position.y=n.armR.position.y=14.5/16+o,n.root.position.y=l,n.head.rotation.z=s*.14,n.head.rotation.x=s*.1+Math.sin(t*2)*.03}var oh={_about:"House templates, shared by the 3D house (web/house/src/world.js) and the app (Layouts.kt). Floor tiles; rooms keep the app's numbering: 0 bedroom, 1 dining room, 2 living room, 3 bathroom, 4 garden. Doors: on the line x=c (axis x) or z=c (axis z), at position p along it. Windows: room+side (N z=z0, S z=z1, W x=x0, E x=x1) -> position(s) along that wall.",layouts:[{id:"classic",price:0,rooms:[{x0:0,z0:0,x1:8,z1:8},{x0:0,z0:8,x1:8,z1:16},{x0:8,z0:8,x1:16,z1:16},{x0:8,z0:0,x1:16,z1:8},{x0:16,z0:0,x1:24,z1:16,garden:!0}],doors:[{a:0,b:1,axis:"z",c:8,p:4},{a:0,b:3,axis:"x",c:8,p:4},{a:3,b:2,axis:"z",c:8,p:12},{a:1,b:2,axis:"x",c:8,p:12},{a:2,b:4,axis:"x",c:16,p:12}],windows:{"0N":2.5,"1W":12,"2S":[10,14],"3N":10.2}},{id:"long",price:0,rooms:[{x0:17,z0:0,x1:24,z1:8},{x0:0,z0:0,x1:8,z1:8},{x0:8,z0:0,x1:17,z1:8},{x0:24,z0:0,x1:30,z1:8},{x0:0,z0:8,x1:30,z1:15,garden:!0}],doors:[{a:1,b:2,axis:"x",c:8,p:4},{a:2,b:0,axis:"x",c:17,p:4},{a:0,b:3,axis:"x",c:24,p:4.5},{a:2,b:4,axis:"z",c:8,p:12.5}],windows:{"0N":20,"1N":4,"1W":4,"2N":[10.5,14.5],"3N":27,"3E":4.5,"0S":20.5,"1S":4}},{id:"corner",price:0,rooms:[{x0:0,z0:0,x1:8,z1:8},{x0:0,z0:8,x1:9,z1:15},{x0:0,z0:15,x1:9,z1:23},{x0:8,z0:0,x1:14,z1:8},{x0:9,z0:8,x1:19,z1:23,garden:!0}],doors:[{a:0,b:3,axis:"x",c:8,p:4},{a:0,b:1,axis:"z",c:8,p:4},{a:1,b:2,axis:"z",c:15,p:4.5},{a:2,b:4,axis:"x",c:9,p:19},{a:1,b:4,axis:"x",c:9,p:11.5}],windows:{"0N":2.5,"0W":4,"1W":11.5,"2W":[17,21],"2S":4.5,"3N":9.7,"3E":4}},{id:"courtyard",price:1500,rooms:[{x0:0,z0:0,x1:7,z1:8},{x0:17,z0:0,x1:24,z1:16},{x0:7,z0:0,x1:17,z1:8},{x0:0,z0:8,x1:7,z1:14},{x0:7,z0:8,x1:17,z1:16,garden:!0}],doors:[{a:0,b:2,axis:"x",c:7,p:4},{a:0,b:3,axis:"z",c:8,p:1.6},{a:2,b:1,axis:"x",c:17,p:4},{a:2,b:4,axis:"z",c:8,p:12},{a:1,b:4,axis:"x",c:17,p:12}],windows:{"0N":2.5,"0W":4,"2N":[10,14],"1N":20.5,"1E":[4,12],"3W":11,"3S":3.5}},{id:"villa",price:2500,rooms:[{x0:0,z0:0,x1:10,z1:9},{x0:12,z0:9,x1:20,z1:19},{x0:0,z0:9,x1:12,z1:19},{x0:10,z0:0,x1:16,z1:9},{x0:0,z0:19,x1:20,z1:27,garden:!0}],doors:[{a:0,b:3,axis:"x",c:10,p:5},{a:0,b:2,axis:"z",c:9,p:5},{a:3,b:1,axis:"z",c:9,p:14.5},{a:2,b:1,axis:"x",c:12,p:14},{a:2,b:4,axis:"z",c:19,p:6},{a:1,b:4,axis:"z",c:19,p:16}],windows:{"0N":[2.5,6.5],"0W":4.5,"2W":[12,16],"3N":11.7,"3E":4.5,"1E":[12,16],"1N":18}}]};var ah=oh.layouts;function Z0(){let n=null;try{window.Android&&window.Android.layout&&(n=window.Android.layout())}catch(t){}return n||(n=new URLSearchParams(location.search).get("layout")),ah.find(t=>t.id===n)||ah[0]}var Oa=Z0(),ce=Oa.rooms,jt={x0:Math.min(...ce.map(n=>n.x0)),z0:Math.min(...ce.map(n=>n.z0)),x1:Math.max(...ce.map(n=>n.x1)),z1:Math.max(...ce.map(n=>n.z1))},za={x:(jt.x0+jt.x1)/2,z:(jt.z0+jt.z1)/2},ys=3,Ge=.16,mn=1.7,Ys=2.3,vs=.16,Ms=Oa.doors,J0=Oa.windows||{},Qr=ce.findIndex(n=>n.garden);function lh(n){let t=e=>({x:(ce[e].x0+ce[e].x1)/2,z:(ce[e].z0+ce[e].z1)/2});switch(n){case"nightstand":return{x:ce[0].x1-.85,z:ce[0].z0+.8};case"bedrug":return{x:t(0).x,z:t(0).z+.6};case"table":return{x:t(1).x,z:t(1).z+.2};case"livrug":return{x:t(2).x,z:t(2).z+.6};case"coffee":return{x:t(2).x,z:t(2).z+1.05};case"sink":return{x:ce[3].x1-2.05,z:ce[3].z0+.75};default:return null}}function We(n,t){for(let e=0;e<ce.length;e++){let i=ce[e];if(n>=i.x0&&n<i.x1&&t>=i.z0&&t<i.z1)return e}return-1}function Di(n){let t=ce[n];return new D((t.x0+t.x1)/2,0,(t.z0+t.z1)/2)}var Ss=[];function ch(n,t){let e=0;for(let i of Ss)n>i.x0&&n<i.x1&&t>i.z0&&t<i.z1&&(e=Math.max(e,i.y));return e}function $0(){let n=[];return ce.forEach((t,e)=>{if(!t.garden)for(let i of["N","S","W","E"]){let s=i==="N"||i==="S"?"z":"x",r=i==="N"?t.z0:i==="S"?t.z1:i==="W"?t.x0:t.x1,a=s==="z"?t.x0:t.z0,o=s==="z"?t.x1:t.z1,l=Ms.filter(h=>(h.a===e||h.b===e)&&h.axis===s&&h.c===r&&h.p>a&&h.p<o).map(h=>h.p).sort((h,d)=>h-d),c=i==="N"||i==="W"?1:-1;n.push({room:e,side:i,axis:s,c:r,from:a,to:o,doors:l,inward:c,lowered:!1,k:1})}}),n}function hh(n,t,e){let i=ce[n],s={N:e-i.z0,S:i.z1-e,W:t-i.x0,E:i.x1-t},r="N";for(let c of["S","W","E"])s[c]<s[r]&&(r=c);let a=.7,o=Math.min(i.x1-a,Math.max(i.x0+a,t)),l=Math.min(i.z1-a,Math.max(i.z0+a,e));return r==="N"?{side:r,x:o,z:i.z0+Ge,rotY:0}:r==="S"?{side:r,x:o,z:i.z1-Ge,rotY:Math.PI}:r==="W"?{side:r,x:i.x0+Ge,z:l,rotY:Math.PI/2}:{side:r,x:i.x1-Ge,z:l,rotY:-Math.PI/2}}function uh(n){let t={walls:$0(),wallGroups:[]},e=Ii(7),i=za,s=[];s.push([i.x*16,-6,i.z*16,(jt.x1-jt.x0+56)*16,2,(jt.z1-jt.z0+54)*16,"#8ED16F"]);let r=u=>u[Math.floor(e()*u.length)];ce.forEach((u,b)=>{for(let x=u.x0;x<u.x1;x++)for(let T=u.z0;T<u.z1;T++){let F;b===0?F=r(["#E8B98A","#E2B080","#EDC296"]):b===1?F=(x+T)%2?"#B8C7E0":"#FFFFFF":b===2?F=r(["#D29E6C","#C99463","#D8A673"]):b===3?F=(x+T)%2?"#CDEBFF":"#FFFFFF":F=r(["#7ED957","#74CF4E","#86DE60","#6FC94A"]),s.push([(x+.5)*16,-3,(T+.5)*16,16,3,16,F])}});let a=ce[Qr],o=Ms.find(u=>u.a===Qr||u.b===Qr),l={axis:o.axis,p:o.p},c=(u,b)=>Math.abs((l.axis==="z"?u:b)-l.p)<.8,h=o.axis==="x"?o.c===a.x0?"E":"W":o.c===a.z0?"S":"N";if(o.axis==="x")for(let u=a.x0;u<a.x1;u++)s.push([(u+.5)*16,-2.8,o.p*16,14,3,14,u%2?"#D8D2C4":"#CFC8B8"]);else for(let u=a.z0;u<a.z1;u++)s.push([o.p*16,-2.8,(u+.5)*16,14,3,14,u%2?"#D8D2C4":"#CFC8B8"]);let d=(a.x1-a.x0)*(a.z1-a.z0);for(let u=0;u<Math.round(d/5);u++){let b=a.x0+.3+e()*(a.x1-a.x0-.6),x=a.z0+.3+e()*(a.z1-a.z0-.6);c(b,x)||s.push([b*16,0,x*16,1.2,2+e()*2,1.2,"#5CB83A"])}let f=(u,b)=>ce.some(x=>u>x.x0-.6&&u<x.x1+.6&&b>x.z0-.6&&b<x.z1+.6);for(let u=0;u<40;u++){let b=jt.x0-6+e()*(jt.x1-jt.x0+12),x=jt.z0-6+e()*(jt.z1-jt.z0+12);f(b,x)||(e()<.5?s.push([b*16,-4,x*16,10,8,10,r(["#4CB050","#3E9B45","#5CC23A"])]):s.push([b*16,-4,x*16,3,7,3,r(["#FF8FB1","#FFD43B","#FFFFFF","#C9A0FF"])]))}let m=li(s,{seed:3,jitter:.03});m.traverse(u=>{u.isMesh&&(u.castShadow=!1)}),n.add(m);let g=[],v=(u,b)=>g.push([u*16,0,b*16,2,11,2,"#FFFFFF"],[u*16,11,b*16,1.4,1.4,1.4,"#F2EEE8"]),p=(u,b)=>{let x=We(u,b);return x>=0&&x!==Qr};for(let u of["N","S","W","E"]){let b=u==="N"||u==="S",x=b?a.x0:a.z0,T=b?a.x1:a.z1,F=u==="N"?a.z0+.1:u==="S"?a.z1-.1:u==="W"?a.x0+.1:a.x1-.1,R=u==="N"||u==="W"?-.4:.4,C=y=>b?[y,F]:[F,y],G=y=>b?p(y,F+R):p(F+R,y),j=y=>u===h&&Math.abs(y-o.p)<.6;for(let y=x+.5;y<T;y+=1){if(G(y)||j(y))continue;v(...C(y));let w=y+1;if(w<T&&!G(w)&&!j(w)){let[st,it]=C(y+.5);g.push(b?[st*16,6,it*16,16,1.5,1,"#FFFFFF"]:[st*16,6,it*16,1,1.5,16,"#FFFFFF"])}}}return n.add(li(g,{seed:11,jitter:.03})),t.wallParent=new Fe,n.add(t.wallParent),t.setWallColors=u=>K0(t,u),t}function K0(n,t){for(let e of n.wallGroups)n.wallParent.remove(e),e.traverse(i=>i.geometry&&i.geometry.dispose());n.wallGroups=[];for(let e of n.walls){let i=t[e.room]||"#FFF1DC",s=[],r=[],a=e.from;for(let f of e.doors)r.push([a,f-mn/2,0,ys],[f-mn/2,f+mn/2,Ys,ys]),a=f+mn/2;r.push([a,e.to,0,ys]);let o=e.c+e.inward*Ge/2,l=(f,m,g,v,p,u=Ge,b=0,x)=>{let T=m-f;if(T<=0)return;let F=(f+m)/2,R=o+e.inward*b;e.axis==="z"?s.push([F*16,g*16,R*16,T*16,(v-g)*16,u*16,p,x]):s.push([R*16,g*16,F*16,u*16,(v-g)*16,T*16,p,x])};for(let[f,m,g,v]of r)l(f,m,g,v,i),l(f,m,g,Math.min(v,.18),"#FFFFFF",Ge+.04,.02),e.room===3&&l(f,m,g,Math.min(v,1.3),"#9FD8F5",Ge+.04,.02),v>=ys&&l(f,m,ys-.12,ys,"#FFFFFF",Ge+.02,0);for(let f of e.doors)l(f-mn/2-.12,f-mn/2,0,Ys,"#FFFFFF",Ge+.06,.02),l(f+mn/2,f+mn/2+.12,0,Ys,"#FFFFFF",Ge+.06,.02),l(f-mn/2-.12,f+mn/2+.12,Ys,Ys+.12,"#FFFFFF",Ge+.06,.02);let c=J0[`${e.room}${e.side}`],h=c==null?[]:Array.isArray(c)?c:[c];for(let f of h)l(f-1.05,f+1.05,1.05,2.55,"#FFFFFF",Ge+.06,0),l(f-.9,f+.9,1.2,2.4,"#BDE7FF",Ge+.08,0,"glow"),l(f-.04,f+.04,1.2,2.4,"#FFFFFF",Ge+.1,0),l(f-.9,f+.9,1.76,1.84,"#FFFFFF",Ge+.1,0);let d=li(s,{seed:e.room*10+e.c,jitter:.015});d.scale.y=e.k,e.group=d,n.wallGroups.push(d),n.wallParent.add(d)}}function dh(n,t,e,i){for(let s of n.walls){let r=s.axis==="z"?t.z:t.x,a=s.axis==="z"?e.z:e.x,o=(r-s.c)*(a-s.c)<0;s.lowered=o;let l=o?.12:1;s.k+=(l-s.k)*Math.min(1,i*8),s.group&&(s.group.scale.y=s.k)}}function fh(n,t,e){return n.walls.find(i=>i.room===t&&i.side===e)}var Ha=.3,Ui=.25,Me=Math.round((jt.x1-jt.x0)/Ui),ui=Math.round((jt.z1-jt.z0)/Ui),mh=[];ce.forEach((n,t)=>{let e=[{axis:"z",c:n.z0,from:n.x0,to:n.x1},{axis:"z",c:n.z1,from:n.x0,to:n.x1},{axis:"x",c:n.x0,from:n.z0,to:n.z1},{axis:"x",c:n.x1,from:n.z0,to:n.z1}];for(let i of e){let s=Ms.filter(r=>(r.a===t||r.b===t)&&r.axis===i.axis&&r.c===i.c).map(r=>r.p);mh.push(gn(rn({},i),{doors:s}))}});function ka(n,t,e){if(n<jt.x0+e+vs||n>jt.x1-e-vs||t<jt.z0+e+vs||t>jt.z1-e-vs)return!0;for(let i of mh){let s=i.axis==="z"?t:n,r=i.axis==="z"?n:t;if(!(Math.abs(s-i.c)>=vs+e)&&!(r<i.from-e||r>i.to+e)&&!i.doors.some(a=>Math.abs(r-a)<mn/2-e))return!0}return!1}function ph(n,t,e,i){return n>e.x0-i&&n<e.x1+i&&t>e.z0-i&&t<e.z1+i}function gh(n,t){let e=n,i=Ha;return{blocked:(a,o)=>{if(ka(a,o,i))return!0;for(let l of e)if(ph(a,o,l,i))return!0;for(let l of t)if((l.x-a)**2+(l.z-o)**2<(2*i)**2)return!0;return!1},blockedStatic:(a,o)=>{if(ka(a,o,i))return!0;for(let l of e)if(ph(a,o,l,i))return!0;return!1},others:t}}var ci=n=>jt.x0+(n+.5)*Ui,hi=n=>jt.z0+(n+.5)*Ui,bs=n=>Math.min(Me-1,Math.max(0,Math.floor((n-jt.x0)/Ui))),Es=n=>Math.min(ui-1,Math.max(0,Math.floor((n-jt.z0)/Ui)));function j0(n){let t=new Uint8Array(Me*ui);for(let e=0;e<ui;e++)for(let i=0;i<Me;i++)t[e*Me+i]=n.blocked(ci(i),hi(e))?1:0;return t}function Q0(n,t){let e=new Float64Array(Me*ui).fill(1/0),i=new Int32Array(Me*ui).fill(-1),s=[],r=(l,c)=>{s.push([c,l]);let h=s.length-1;for(;h>0;){let d=h-1>>1;if(s[d][0]<=s[h][0])break;[s[d],s[h]]=[s[h],s[d]],h=d}},a=()=>{let l=s[0],c=s.pop();if(s.length){s[0]=c;let h=0;for(;;){let d=2*h+1,f=d+1,m=h;if(d<s.length&&s[d][0]<s[m][0]&&(m=d),f<s.length&&s[f][0]<s[m][0]&&(m=f),m===h)break;[s[m],s[h]]=[s[h],s[m]],h=m}}return l};e[t]=0,r(t,0);let o=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;s.length;){let[l,c]=a();if(l>e[c])continue;let h=c%Me,d=c/Me|0;for(let[f,m,g]of o){let v=h+f,p=d+m;if(v<0||p<0||v>=Me||p>=ui)continue;let u=p*Me+v;if(n[u]||f&&m&&(n[d*Me+v]||n[p*Me+h]))continue;let b=l+g;b<e[u]&&(e[u]=b,i[u]=c,r(u,b))}}return{dist:e,prev:i}}function tg(n,t,e,i,s){let r=Math.hypot(i-t,s-e),a=Math.max(1,Math.ceil(r/.08));for(let o=1;o<=a;o++){let l=o/a;if(n.blocked(t+(i-t)*l,e+(s-e)*l))return!1}return!0}function _h(n,t,e,i,s){let r=j0(n),a=Es(e)*Me+bs(t),o=[];if(r[a]){let u=-1,b=1/0;for(let x=Math.max(0,Es(e)-4);x<=Math.min(ui-1,Es(e)+4);x++)for(let T=Math.max(0,bs(t)-4);T<=Math.min(Me-1,bs(t)+4);T++){let F=x*Me+T,R=(ci(T)-t)**2+(hi(x)-e)**2;!r[F]&&R<b&&!ka((ci(T)+t)/2,(hi(x)+e)/2,.05)&&(b=R,u=F)}if(u<0)return null;a=u,o.push({x:ci(a%Me),z:hi(a/Me|0)})}let{dist:l,prev:c}=Q0(r,a),h=Es(s)*Me+bs(i),d={x:i,z:s};if(r[h]||n.blocked(i,s)){let u=-1,b=1/0,x=2.6,T=We(i,s),F=Math.ceil(x/Ui);for(let R=Math.max(0,Es(s)-F);R<=Math.min(ui-1,Es(s)+F);R++)for(let C=Math.max(0,bs(i)-F);C<=Math.min(Me-1,bs(i)+F);C++){let G=R*Me+C,j=(ci(C)-i)**2+(hi(R)-s)**2;j<=x*x&&l[G]<1/0&&j<b&&We(ci(C),hi(R))===T&&(b=j,u=G)}if(u<0)return null;h=u,d={x:ci(h%Me),z:hi(h/Me|0)}}else if(l[h]===1/0)return null;let f=[];for(let u=h;u>=0&&u!==a;u=c[u])f.unshift({x:ci(u%Me),z:hi(u/Me|0)});f.length?f[f.length-1]=d:f.push(d);let m=o.length?o[0]:{x:t,z:e},g=[],v=m,p=0;for(;p<f.length;){let u=p;for(let b=f.length-1;b>p;b--)if(tg(n,v.x,v.z,f[b].x,f[b].z)){u=b;break}g.push(f[u]),v=f[u],p=u+1}return o.concat(g)}var dn=new URLSearchParams(location.search),As=dn.get("thumb"),xh=window.Android,yh={onReady(){},onMoved(n,t,e,i,s){console.log("moved",n,t,e,i,s)},onStore(n){console.log("store",n),Zs.items=Zs.items.map(t=>t.id===n?gn(rn({},t),{inRoom:!1}):t),qs.setState(JSON.stringify(Zs))},onTapBuddy(n){qs.say(n,"\u05E9\u05DC\u05D5\u05DD! \u05D0\u05E0\u05D9 "+n)},onFocus(n){console.log("focus",n)}},ws={};for(let n of Object.keys(yh))ws[n]=(...t)=>{try{return xh?xh[n](...t):yh[n](...t)}catch(e){console.error("bridge "+n+": "+e.message)}};var nn;try{nn=new fs({antialias:!0,alpha:!!As,preserveDrawingBuffer:!!As})}catch(n){nn=new fs({antialias:!1})}nn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));nn.shadowMap.enabled=!0;nn.shadowMap.type=Aa;document.body.appendChild(nn.domElement);var en=new kr,Xe=new Ze(42,1,.1,200);en.add(new Gr(16777215,13214586,1.5));var Te=new Wr(16777215,1.9);Te.castShadow=!0;Te.shadow.mapSize.set(As?1024:2048,As?1024:2048);Te.shadow.bias=-8e-4;Te.shadow.normalBias=.02;en.add(Te,Te.target);function Va(){let n=window.innerWidth||document.documentElement.clientWidth||1,t=window.innerHeight||document.documentElement.clientHeight||1;nn.setSize(n,t,!1),nn.domElement.style.width=n+"px",nn.domElement.style.height=t+"px",Xe.aspect=n/t,Xe.updateProjectionMatrix()}window.addEventListener("resize",Va);Va();var Ni={};function vh(n){if(!Ni[n]){let t=Da[n],e=t?t():[[0,0,0,8,8,8,"#FF5C9A"]];Ni[n]={boxes:e,bounds:qc(e)}}return Ni[n]}var tn=n=>n.model||n.id;function Mh(n,t=n){let{boxes:e,bounds:i}=vh(n),s=li(e,{seed:xs(n)}),r=new Fe;return r.add(s),r.userData={kind:"item",id:t,bounds:i},r}if(As){let[n,t]=As.split(":"),e,i;if(n==="item"){e=Mh(t);let c=Ni[t].bounds,h=un[t]||{};if(i={w:c.w/16,h:c.h/16,d:c.d/16,cy:h.wall||h.fly?0:c.h/32},h.wall||h.fly){let d=1/0,f=-1/0;Ni[t].boxes.forEach(m=>{d=Math.min(d,m[1]),f=Math.max(f,m[1]+m[4])}),i.cy=(d+f)/32,i.h=(f-d)/16}}else{let c=Na(t),h=dn.get("mood")||"happy";if(c.setMood(h),Ba(c,.13,{cheer:h==="cheer"?1:0,sleepy:h==="sleepy"?1:0}),c.root.position.y=0,e=new Fe,e.add(c.root),h==="sleepy"){let d=new ps({map:Sh(),transparent:!0,depthWrite:!1});[[.45,1.65,.22],[.62,1.88,.3]].forEach(([f,m,g])=>{let v=new Vs(d);v.position.set(f,m,.2),v.scale.setScalar(g),e.add(v)})}i={w:1,h:1.55,d:.7,cy:.82},(t==="wizard_b"||t==="wizard_g")&&(i={w:1,h:1.85,d:.7,cy:.95}),(t==="kangi"||t==="roni"||t==="boni"||t==="bobi")&&(i.h=1.75,i.cy=.9)}en.add(e);let s=n==="item"?(un[t]||{}).wall?.35:.55:.38,r=n==="item"?.42:.18,o=(Math.max(i.w,i.h,i.d)*1.25+.2)/Math.tan(Xe.fov*Math.PI/360)*.62,l=new D(0,i.cy,0);Xe.position.set(Math.sin(s)*Math.cos(r)*o,i.cy+Math.sin(r)*o,Math.cos(s)*Math.cos(r)*o),Xe.lookAt(l),Te.position.set(3,8,6),Te.shadow.camera.left=Te.shadow.camera.bottom=-3,Te.shadow.camera.right=Te.shadow.camera.top=3,Te.shadow.camera.updateProjectionMatrix(),nn.setClearColor(0,0),nn.render(en,Xe),window.__thumbDone=!0}else try{ig();let n=document.getElementById("msg");n&&(n.style.display="none")}catch(n){throw window.houseError&&window.houseError(n&&n.message?n.message:String(n)),n}var eg=0,ng=setInterval(()=>{Va(),++eg>20&&clearInterval(ng)},250),qs,Zs;function ig(){en.background=new Kt("#BFE6FF"),en.fog=new zr("#BFE6FF",45,90);let n=uh(en),t=za,e=Math.max(jt.x1-jt.x0,jt.z1-jt.z0),i=Math.max(18,e*.75+2);Te.position.set(t.x+8,30,t.z+14),Te.target.position.set(t.x,0,t.z),Te.shadow.camera.left=-i,Te.shadow.camera.right=i,Te.shadow.camera.top=i,Te.shadow.camera.bottom=-i,Te.shadow.camera.near=5,Te.shadow.camera.far=80,Te.shadow.camera.updateProjectionMatrix();let s=document.getElementById("overlay"),r={yaw:.55,pitch:.9,dist:13,target:Di(0).setY(.6)},a={yaw:r.yaw,pitch:r.pitch,dist:r.dist,target:r.target.clone()},o=0,l=!1;function c(){let S=Math.cos(r.pitch);Xe.position.set(r.target.x+Math.sin(r.yaw)*S*r.dist,r.target.y+Math.sin(r.pitch)*r.dist,r.target.z+Math.cos(r.yaw)*S*r.dist),Xe.lookAt(r.target)}function h(S,V){o=S,l=!1,a.target.copy(Di(S)).setY(.6),a.dist=S===4?17:12.5,V&&(r.target.copy(a.target),r.dist=a.dist)}let d=new Map,f=new Fe;en.add(f);function m(S){let V=ce[S.room]||ce[0],O=un[tn(S)]||{},A=S.id===tn(S)&&lh(S.id);if(A&&We(A.x,A.z)===S.room)return A;let B=Math.min(1,Math.max(0,(S.x||0)/.85)),tt=Math.min(1,Math.max(0,(S.y||0)/.85)),wt=Ii(xs(S.id));if(O.small&&g(S.room)){let xe=g(S.room);return{x:xe.x0+.3+wt()*(xe.x1-xe.x0-.6),z:xe.z0+.3+wt()*(xe.z1-xe.z0-.6)}}if(O.wall&&!V.garden)return{x:V.x0+1+B*6,z:V.z0+.2};let Nt=V.x0+1+B*(V.x1-V.x0-2),It=V.z0+1.3+Math.max(0,(tt-.4)/.6)*(V.z1-V.z0-2.3);return{x:Nt,z:It}}let g=S=>Ss.find(V=>V.room===S);function v(S,V){let O=Ni[S]?Ni[S].bounds:vh(S).bounds,A=O.w/32,B=O.d/32;return V%2?{hx:B,hz:A}:{hx:A,hz:B}}function p(S){let{obj:V,data:O}=S,A=un[tn(O)]||{},B=O.gx,tt=O.gz;if(B==null||tt==null||isNaN(B)||isNaN(tt)){let Nt=m(O);B=Nt.x,tt=Nt.z}let wt=We(B,tt);wt<0&&(wt=O.room||0),S.room=wt;let gt=ce[wt];if(A.wall&&!gt.garden){let Nt=hh(wt,B,tt);V.position.set(Nt.x,1.85,Nt.z),V.rotation.y=Nt.rotY,S.wall=fh(n,wt,Nt.side),S.x=Nt.x,S.z=Nt.z}else{let{hx:Nt,hz:It}=v(tn(O),O.rot||0);B=Math.min(gt.x1-Nt-.17,Math.max(gt.x0+Nt+.17,B)),tt=Math.min(gt.z1-It-.17,Math.max(gt.z0+It+.17,tt)),gt.x1-gt.x0<Nt*2+.34&&(B=(gt.x0+gt.x1)/2);let xe=A.fly||A.wall?1.7:A.small?ch(B,tt):0;V.position.set(B,xe,tt),V.rotation.y=(O.rot||0)*Math.PI/2,S.wall=null,S.x=B,S.z=tt,S.baseY=xe}}let u=S=>!!(un[tn(S)]||{}).surface;function b(){Ss.length=0;for(let S of d.values()){let V=un[tn(S.data)]||{};if(!V.surface||S.wall)continue;let{hx:O,hz:A}=v(tn(S.data),S.data.rot||0);Ss.push({id:S.data.id,room:S.room,x0:S.x-O,x1:S.x+O,z0:S.z-A,z1:S.z+A,y:V.surface})}}function x(S){let V=Ss.find(A=>A.id===S.data.id);if(!V)return[];let O=[];for(let A of d.values()){let B=un[tn(A.data)]||{};A===S||!B.small||!(A.baseY>0)||A.x>V.x0&&A.x<V.x1&&A.z>V.z0&&A.z<V.z1&&O.push({rec:A,dx:A.x-S.x,dz:A.z-S.z})}return O}function T(){for(let S of d.values())(un[tn(S.data)]||{}).small&&!(xt&&xt.rec===S)&&p(S)}function F(S){let V=new Set,O=S.filter(B=>u(B)).concat(S.filter(B=>!u(B))),A=!1;for(let B of O){if(!B.inRoom)continue;!A&&!u(B)&&(b(),A=!0),V.add(B.id);let tt=d.get(B.id);if(!tt){let wt=Mh(tn(B),B.id);f.add(wt),tt={obj:wt,data:B},d.set(B.id,tt)}xt&&xt.rec===tt||(tt.data=B,p(tt))}for(let[B,tt]of d)V.has(B)||(f.remove(tt.obj),d.delete(B));b()}let R=new Map,C=new Fe;en.add(C);let G=!1,j="";function y(S,V=Math.random){let O=ce[S];return new D(O.x0+1.2+V()*(O.x1-O.x0-2.4),0,O.z0+1.6+V()*(O.z1-O.z0-2.8))}function w(S,V,O){let A=We(S.x,S.z),B=[];if(A>=0&&A!==V){let tt={[A]:null},wt=[A];for(;wt.length;){let It=wt.shift();if(It===V)break;for(let xe of Ms){let M=xe.a===It?xe.b:xe.b===It?xe.a:-1;M>=0&&!(M in tt)&&(tt[M]={room:It,door:xe},wt.push(M))}}let gt=[],Nt=V;for(;tt[Nt];)gt.unshift({door:tt[Nt].door,from:tt[Nt].room,to:Nt}),Nt=tt[Nt].room;for(let{door:It,from:xe,to:M}of gt){let L=Di(xe),H=Di(M),z=It.axis==="z"?new D(It.p,0,It.c):new D(It.c,0,It.p),N=It.axis==="z"?Math.sign(L.z-It.c):Math.sign(L.x-It.c),mt=-N,bt=(Rt,Lt)=>It.axis==="z"?new D(z.x,0,z.z+Lt*Rt):new D(z.x+Lt*Rt,0,z.z);B.push(bt(.8,N),z.clone(),bt(.8,mt))}}return B.push(O),B}function st(S){let V=new Set;S.forEach((O,A)=>{V.add(O.id);let B=R.get(O.id);if(!B){let tt=Na(O.id),wt=new Fe;wt.add(tt.root),wt.userData={kind:"char",id:O.id},tt.root.traverse(It=>{It.userData.charId=O.id}),C.add(wt);let gt=O.main?Di(O.room).add(new D(.6,0,1.2)):y(O.room,Ii(xs(O.id)));wt.position.copy(gt),wt.rotation.y=.3,B=gn(rn({id:O.id},tt),{holder:wt,room:O.room,path:[],idle:1+Math.random()*3,talk:null,talkT:0,awake:!1,cheerT:0,phase:Math.random()*10}),R.set(O.id,B);let Nt=K(B,gt.x,gt.z);Nt&&wt.position.set(Nt.x,0,Nt.z)}if(B.main=O.main,B.index=A,B.room!==O.room){B.room=O.room;let tt=We(B.holder.position.x,B.holder.position.z),wt=!O.main&&(_===B.id||B.stayT>0);if(tt!==O.room&&!wt){let gt=O.main?Di(O.room).add(new D(.6,0,1.2)):y(O.room),Nt=Y(B,gt.x,gt.z);B.path=Nt||w(B.holder.position,O.room,gt),B.goal=null}}});for(let[O,A]of R)V.has(O)||(C.remove(A.holder),A.bubble&&A.bubble.remove(),R.delete(O))}function it(S,V,O=!0){let A=R.get(S);A&&(A.awake=!0,A.talk=V,A.talkT=3.2,A.cheerT=O?1.6:0)}function I(S){let V=[];for(let A of d.values()){let B=un[tn(A.data)]||{};if(A.wall||B.wall||B.fly||B.flat||B.small&&A.baseY>0)continue;let{hx:tt,hz:wt}=v(tn(A.data),A.data.rot||0);V.push({x0:A.x-tt,x1:A.x+tt,z0:A.z-wt,z1:A.z+wt})}let O=[];for(let A of R.values())A!==S&&O.push({x:A.holder.position.x,z:A.holder.position.z});return gh(V,O)}function $(S){return S.map(V=>new D(V.x,0,V.z))}function Y(S,V,O){let A=_h(I(S),S.holder.position.x,S.holder.position.z,V,O);return A?$(A):null}function K(S,V,O){let A=I(S);if(!A.blocked(V,O))return null;for(let B=.25;B<3;B+=.25)for(let tt=0;tt<16;tt++){let wt=V+Math.cos(tt/16*Math.PI*2)*B,gt=O+Math.sin(tt/16*Math.PI*2)*B;if(We(wt,gt)===We(V,O)&&!A.blocked(wt,gt))return{x:wt,z:gt}}return null}let Z=["\u05D0\u05D5-\u05D0\u05D5! \u{1F62E}","\u05D0\u05D5-\u05D0\u05D5... \u05D0\u05D9\u05DF \u05DC\u05D9 \u05D3\u05E8\u05DA \u05DC\u05E9\u05DD","\u05D0\u05D5-\u05D0\u05D5! \u05DE\u05E9\u05D4\u05D5 \u05D7\u05D5\u05E1\u05DD \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA"];function J(S){S.path=[],S.goal=null,it(S.id,Z[Math.floor(Math.random()*Z.length)],!1),S.shakeT=.6}function lt(S,V,O){S.awake=!0;let A=Y(S,V,O);return A?(S.path=A,S.goal=A[A.length-1].clone(),S.waitT=0,S.stayT=25,Pt(S.goal),!0):(J(S),!1)}function ht(S,V){S.bubble||(S.bubble=document.createElement("div"),S.bubble.className="bubble",s.appendChild(S.bubble)),S.bubble.textContent!==V&&(S.bubble.textContent=V);let O=S.holder.position.clone();O.y+=1.95,O.project(Xe);let A=(O.x*.5+.5)*window.innerWidth,B=(-O.y*.5+.5)*window.innerHeight;S.bubble.style.display=O.z<1?"block":"none",S.bubble.style.left=Math.round(Math.min(window.innerWidth-90,Math.max(90,A)))+"px",S.bubble.style.top=Math.round(Math.max(30,B))+"px"}let _t=new Yr,zt=new Ot,W=new vn(new D(0,1,0),0),Q=new Map,nt=null,xt=null,St={id:null,t:0},yt=null;function se(S,V){let O=nn.domElement.getBoundingClientRect();zt.set((S-O.left)/O.width*2-1,-((V-O.top)/O.height)*2+1),_t.setFromCamera(zt,Xe)}function Dt(S,V){se(S,V);let O=[];for(let B of d.values())B.obj.visible&&O.push(B.obj);for(let B of R.values())O.push(B.holder);let A=_t.intersectObjects(O,!0);for(let B of A){let tt=B.object;for(;tt&&!tt.userData.kind;)tt=tt.parent;if(tt){if(tt.userData.kind==="item")return{kind:"item",id:tt.userData.id,point:B.point};if(tt.userData.kind==="char")return{kind:"char",id:tt.userData.id,point:B.point}}}return null}function U(S,V){se(S,V);let O=new D;return _t.ray.intersectPlane(W,O)?O:null}let me=nn.domElement;me.addEventListener("pointerdown",S=>{if(me.setPointerCapture(S.pointerId),Q.set(S.pointerId,{x:S.clientX,y:S.clientY}),Q.size===2){ge();let[O,A]=[...Q.values()];nt={type:"pinch",d:Math.hypot(O.x-A.x,O.y-A.y),mx:(O.x+A.x)/2,my:(O.y+A.y)/2,dist:a.dist};return}if(Q.size>2)return;let V=Dt(S.clientX,S.clientY);nt={type:"press",x0:S.clientX,y0:S.clientY,x:S.clientX,y:S.clientY,t0:performance.now(),hit:V,moved:!1}}),me.addEventListener("pointermove",S=>{if(!Q.has(S.pointerId))return;let V=Q.get(S.pointerId);if(Q.set(S.pointerId,{x:S.clientX,y:S.clientY}),!nt)return;if(nt.type==="pinch"&&Q.size>=2){let[B,tt]=[...Q.values()],wt=Math.hypot(B.x-tt.x,B.y-tt.y);a.dist=Math.min(34,Math.max(4,nt.dist*nt.d/Math.max(wt,1))),r.dist=a.dist;let gt=(B.x+tt.x)/2,Nt=(B.y+tt.y)/2;Xt(gt-nt.mx,Nt-nt.my),nt.mx=gt,nt.my=Nt;return}if(nt.type!=="press"&&nt.type!=="turn"&&nt.type!=="drag")return;let O=S.clientX-V.x,A=S.clientY-V.y;if(nt.type==="press"){if(Math.hypot(S.clientX-nt.x0,S.clientY-nt.y0)<10)return;nt.moved=!0;let B=nt.hit;B&&B.kind==="item"&&!_?ie(B):nt.type="turn"}nt.type==="turn"?(a.yaw-=O*.008,a.pitch=Math.min(1.45,Math.max(.25,a.pitch+A*.006)),r.yaw=a.yaw,r.pitch=a.pitch):nt.type==="drag"&&Gt(S.clientX,S.clientY)});let Ct=S=>{if(Q.delete(S.pointerId),!!nt){if(nt.type==="pinch"){Q.size===0&&(nt=null);return}nt.type==="press"&&!nt.moved&&Ft(nt.hit,S.clientX,S.clientY),nt.type==="drag"&&ge(),nt=null}};me.addEventListener("pointerup",Ct),me.addEventListener("pointercancel",Ct),me.addEventListener("wheel",S=>{S.preventDefault(),a.dist=Math.min(34,Math.max(4,a.dist*(S.deltaY>0?1.1:.9)))},{passive:!1});function Xt(S,V){let O=r.dist*.0018,A=new D(Math.cos(r.yaw),0,-Math.sin(r.yaw)),B=new D(-Math.sin(r.yaw),0,-Math.cos(r.yaw));a.target.addScaledVector(A,-S*O).addScaledVector(B,V*O),a.target.x=Math.min(jt.x1+2,Math.max(jt.x0-2,a.target.x)),a.target.z=Math.min(jt.z1+2,Math.max(jt.z0-2,a.target.z)),r.target.copy(a.target)}function Ft(S,V,O){if(S&&S.kind==="char"){if(_===S.id){Mt(null);return}Mt(S.id),ws.onTapBuddy(S.id);return}if(_){let B=R.get(_),tt=S?S.point.clone().setY(0):U(V,O);if(!B||!tt)return;if(We(tt.x,tt.z)<0){Mt(null);return}lt(B,tt.x,tt.z);return}if(!S){let B=U(V,O),tt=performance.now();if(B){let wt=We(B.x,B.z);if(wt>=0&&St.id==="floor"+wt&&tt-St.t<350){ws.onFocus(wt),h(wt),St={id:null,t:0};return}St={id:"floor"+wt,t:tt}}return}let A=performance.now();if(St.id===S.id&&A-St.t<350){clearTimeout(yt),St={id:null,t:0},ws.onStore(S.id);return}St={id:S.id,t:A},clearTimeout(yt),yt=setTimeout(()=>{let B=d.get(S.id);if(!B)return;let tt=un[tn(B.data)]||{};if(tt.wall&&!ce[B.room].garden)return;let wt=x(B);if(B.data=gn(rn({},B.data),{rot:((B.data.rot||0)+1)%4,gx:B.x,gz:B.z}),p(B),E(B),tt.surface){b();for(let gt of wt)gt.rec.data=gn(rn({},gt.rec.data),{gx:B.x+gt.dz,gz:B.z-gt.dx,rot:((gt.rec.data.rot||0)+1)%4}),p(gt.rec),E(gt.rec);T()}},360)}function ie(S){nt.type="drag";let V=d.get(S.id);if(!V){nt.type="turn";return}let O=U(nt.x0,nt.y0)||new D(V.x,0,V.z);xt={kind:"item",rec:V,dx:V.x-O.x,dz:V.z-O.z,on:x(V)}}function Gt(S,V){if(!xt)return;let O=U(S,V);if(!O)return;let A=Math.min(jt.x1-.3,Math.max(jt.x0+.3,O.x+xt.dx)),B=Math.min(jt.z1-.3,Math.max(jt.z0+.3,O.z+xt.dz)),tt=xt.rec;tt.data=gn(rn({},tt.data),{gx:A,gz:B}),p(tt),Yt(),tt.obj.position.y+=.25;for(let wt of xt.on)wt.rec.obj.position.y+=.25}function Yt(){if(!xt.on.length&&!u(xt.rec.data))return;let S=xt.rec;b();for(let V of xt.on)V.rec.data=gn(rn({},V.rec.data),{gx:S.x+V.dx,gz:S.z+V.dz}),p(V.rec)}function ge(){if(!xt)return;let S=xt.rec;p(S),Yt(),E(S);for(let O of xt.on)E(O.rec);let V=u(S.data);xt=null,V&&T()}function E(S){S.data=gn(rn({},S.data),{gx:S.x,gz:S.z,room:S.room}),ws.onMoved(S.data.id,S.x,S.z,S.data.rot||0,S.room)}let _=null,X=new Vn({color:"#FFD43B",transparent:!0,opacity:.95,depthWrite:!1}),q=new Ne(new Gs(.42,.56,32),X);q.rotation.x=-Math.PI/2,q.visible=!1,en.add(q);let rt=new Vn({color:"#FF5C9A",transparent:!0,opacity:0,depthWrite:!1}),et=new Ne(new Gs(.16,.3,24),rt);et.rotation.x=-Math.PI/2,en.add(et);let Ut=0;function Pt(S){et.position.set(S.x,.04,S.z),Ut=1.4}let ot=document.createElement("div");ot.id="joy",ot.innerHTML='<div class="knob"></div><button class="close" title="close">\u2716</button>',document.body.appendChild(ot);let ft=ot.querySelector(".knob"),vt={id:null,x:0,y:0,cx:0,cy:0},at=52;function _e(){ft.style.transform=`translate(${vt.x*at}px, ${vt.y*at}px)`}ot.addEventListener("pointerdown",S=>{if(S.target.classList.contains("close"))return;S.preventDefault(),S.stopPropagation(),ot.setPointerCapture(S.pointerId);let V=ot.getBoundingClientRect();vt.id=S.pointerId,vt.cx=V.left+V.width/2,vt.cy=V.top+V.height/2,qt(S)});function qt(S){let V=(S.clientX-vt.cx)/at,O=(S.clientY-vt.cy)/at,A=Math.hypot(V,O);A>1&&(V/=A,O/=A),vt.x=V,vt.y=O,_e()}ot.addEventListener("pointermove",S=>{S.pointerId===vt.id&&qt(S)});let Tt=S=>{S.pointerId===vt.id&&(vt.id=null,vt.x=vt.y=0,_e())};ot.addEventListener("pointerup",Tt),ot.addEventListener("pointercancel",Tt),ot.querySelector(".close").addEventListener("click",S=>{S.stopPropagation(),Mt(null)});function Mt(S){_=S&&R.has(S)?S:null,q.visible=!!_,ot.style.display=_?"block":"none",vt.id=null,vt.x=vt.y=0,_e()}Mt(null);function Et(S,V){let O=Math.hypot(vt.x,vt.y);if(O<.15){S.joyWalk=0;return}let A=new D(Math.cos(r.yaw),0,-Math.sin(r.yaw)),B=new D(-Math.sin(r.yaw),0,-Math.cos(r.yaw)),tt=A.multiplyScalar(vt.x).addScaledVector(B,-vt.y),wt=3.4*Math.min(1,O),gt=S.holder.position,Nt=I(S),It=Nt.blocked(gt.x,gt.z),xe=(z,N)=>!Nt.blocked(z,N)||It&&!Nt.blockedStatic(z,N)&&ne(Nt,z,N)>ne(Nt,gt.x,gt.z),M=tt.x*wt*V/Math.max(O,1e-6)*Math.min(1,O),L=tt.z*wt*V/Math.max(O,1e-6)*Math.min(1,O);xe(gt.x+M,gt.z+L)?(gt.x+=M,gt.z+=L):xe(gt.x+M,gt.z)?gt.x+=M:xe(gt.x,gt.z+L)&&(gt.z+=L),S.path=[],S.goal=null,S.stayT=25,S.awake=!0,Bt(S,Math.atan2(tt.x,tt.z),V),S.joyWalk=1,a.target.set(gt.x,.6,gt.z),l=!1;let H=We(gt.x,gt.z);H>=0&&(o=H)}function ne(S,V,O){let A=1/0;for(let B of S.others)A=Math.min(A,Math.hypot(B.x-V,B.z-O));return A}function Bt(S,V,O){let A=V-S.holder.rotation.y;A=Math.atan2(Math.sin(A),Math.cos(A)),S.holder.rotation.y+=A*Math.min(1,O*10)}let ae=(S,V,O)=>{let A=document.createElement("button");A.textContent=S,A.title=V,A.addEventListener("click",B=>{B.stopPropagation(),O()}),document.getElementById("buttons").appendChild(A)};ae("\u2795","zoom in",()=>{a.dist=Math.max(4,a.dist*.75)}),ae("\u2796","zoom out",()=>{a.dist=Math.min(Math.max(34,e*1.6),a.dist*1.33)}),ae("\u{1F504}","turn",()=>{a.yaw+=Math.PI/2}),ae("\u{1F3E0}","whole house",()=>{if(l){h(o);return}l=!0,a.target.set(t.x,.6,t.z),a.dist=Math.max(27,e*1.15),a.pitch=Math.max(a.pitch,.9)});let P=new Xr,ut=0,k=[],ct=0;function pt(){try{te()}catch(S){++ct===1&&window.houseError&&window.houseError(S&&S.message?S.message:String(S))}requestAnimationFrame(pt)}function te(){let S=Math.min(.05,P.getDelta());ut+=S;let V=Math.min(1,S*6);r.yaw+=(a.yaw-r.yaw)*V,r.pitch+=(a.pitch-r.pitch)*V,r.dist+=(a.dist-r.dist)*V,r.target.lerp(a.target,V),c(),dh(n,Xe.position,r.target,S);for(let A of d.values())A.obj.visible=!(A.wall&&A.wall.k<.6),(un[tn(A.data)]||{}).fly&&!(xt&&xt.rec===A)&&(A.obj.position.y=A.baseY+Math.sin(ut*2+A.x)*.15,A.obj.rotation.y=(A.data.rot||0)*Math.PI/2+Math.sin(ut*.7+A.z)*.6);let O=!1;_&&!R.has(_)&&Mt(null);for(let A of R.values()){let B=G&&!A.awake,tt=0;if(A.stayT>0&&(A.stayT-=S),_===A.id&&vt.id!=null)Et(A,S),tt=A.joyWalk;else if(A.path.length){let Nt=A.path[0],It=new D().subVectors(Nt,A.holder.position).setY(0),M=(A.main||A.goal?3.2:1.6)*S,L=A.holder.position.x+(It.length()>0?It.x/It.length()*Math.min(M,It.length()):0),H=A.holder.position.z+(It.length()>0?It.z/It.length()*Math.min(M,It.length()):0),z=!1;for(let N of R.values()){if(N===A)continue;let mt=Math.hypot(N.holder.position.x-A.holder.position.x,N.holder.position.z-A.holder.position.z),bt=Math.hypot(N.holder.position.x-L,N.holder.position.z-H);if(bt<Ha*2&&bt<mt){z=!0;break}}if(z)if(A.goal){if(A.waitT=(A.waitT||0)+S,A.waitT>.8){A.waitT=0;let N=Y(A,A.goal.x,A.goal.z);N?A.path=N:J(A)}}else A.path=[],A.idle=1+Math.random()*2;else It.length()<=M?(A.holder.position.copy(Nt),A.path.shift(),tt=1,A.path.length||(A.goal=null)):(It.normalize(),A.holder.position.addScaledVector(It,M),Bt(A,Math.atan2(It.x,It.z),S),tt=1)}else if(!B){if(A.idle-=S,A.idle<=0)if(A.idle=3+Math.random()*5,!A.main&&!(A.stayT>0)&&_!==A.id){let Nt=We(A.holder.position.x,A.holder.position.z),It=y(Nt>=0?Nt:A.room);A.path=Y(A,It.x,It.z)||[]}else A.lookAtCam=!0;if(A.lookAtCam||A.talkT>0){let It=Math.atan2(Xe.position.x-A.holder.position.x,Xe.position.z-A.holder.position.z)-A.holder.rotation.y;It=Math.atan2(Math.sin(It),Math.cos(It)),A.holder.rotation.y+=It*Math.min(1,S*5),Math.abs(It)<.05&&(A.lookAtCam=!1)}}A.talkT>0&&(A.talkT-=S),A.cheerT>0&&(A.cheerT-=S);let wt=A.cheerT>0?1:0;A.setMood(wt?"cheer":B?"sleepy":"happy"),Ba(A,ut+A.phase,{walking:tt,cheer:wt,sleepy:B?1:0}),A.shakeT>0?(A.shakeT-=S,A.root.rotation.y=Math.sin(A.shakeT*30)*.25*(A.shakeT/.6)):A.root.rotation.y=0,_===A.id&&(q.position.set(A.holder.position.x,.04,A.holder.position.z),q.scale.setScalar(1+Math.sin(ut*5)*.08));let gt=A.talkT>0?A.talk:null;!gt&&B&&!O&&j&&We(A.holder.position.x,A.holder.position.z)===o&&(gt=j,O=!0),gt?ht(A,gt):A.bubble&&(A.bubble.style.display="none"),A.asleep=B}Ut>0?(Ut-=S,rt.opacity=Math.min(1,Ut*1.5),et.scale.setScalar(1+(1.4-Ut)*.5)):rt.opacity=0,Je(S),nn.render(en,Xe)}let he=new ps({map:Sh(),transparent:!0,depthWrite:!1}),we=0;function Je(S){if(we-=S,we<=0){we=.9;for(let V of R.values()){if(!V.asleep)continue;let O=new Vs(he);O.scale.set(.35,.35,.35),O.position.copy(V.holder.position).add(new D(.3,1.8,0)),O.userData.life=2.2,en.add(O),k.push(O)}}for(let V=k.length-1;V>=0;V--){let O=k[V];O.userData.life-=S,O.position.y+=S*.35,O.position.x+=Math.sin(O.userData.life*3)*S*.2,O.material.opacity=1;let A=Math.max(0,O.userData.life/2.2);O.scale.setScalar(.2+(1-A)*.25),O.userData.life<=0&&(en.remove(O),k.splice(V,1))}}let oe=-1;qs={setState(S){try{Be(typeof S=="string"?JSON.parse(S):S)}catch(V){window.houseError&&window.houseError(V&&V.message?V.message:String(V))}},say:it,focus(S){h(S)}};function Be(S){S.walls&&n.setWallColors(S.walls),G=!!S.asleep,j=S.sleepLine||"",S.room!=null&&S.room!==oe&&(h(S.room,oe<0),oe=S.room),F(S.items||[]),st(S.buddies||[])}if(window.house=qs,!window.Android){let S=Object.keys(Da),V={bed:0,teddy:0,lamp:0,picture:0,clock:0,books:0,guitar:0,game:0,unicorn:0,chair:1,plates:1,pizza:1,cake:1,teapot:1,watermelon:1,candy:1,cupcake:1,candle:1,sofa:2,tv:2,piano:2,plant:2,rainbow:2,puzzle:2,cat:2,dog:2,bathtub:3,toilet:3,bedrug:0,nightstand:0,table:1,livrug:2,coffee:2,sink:3,mirror:3,soap:3,duck:3,toothbrush:3,lotion:3,sponge:3},O=Ii(5);Zs={room:Number(dn.get("room")||0),walls:["#FFD1E3","#FFF1DC","#CFF5E1","#CDEBFF","#FFF1DC"],asleep:dn.get("asleep")==="1",sleepLine:"\u05D6\u05D6\u05D6... \u05DB\u05D5\u05DC\u05DD \u05D9\u05E9\u05E0\u05D9\u05DD. \u05DC\u05D7\u05E6\u05D9 \u05E2\u05DC \u05DE\u05D9\u05E9\u05D4\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05D9\u05E8",items:S.filter(A=>dn.get("items")!=="none").map(A=>{var B,tt;return{id:A,room:(B=V[A])!=null?B:4,x:O()*.85,y:(tt=un[A])!=null&&tt.wall?.2:.6+O()*.25,inRoom:!0}}),buddies:(dn.get("buddies")||"boni,mika,pitzi,blocky,astro,wizard_g").split(",").map((A,B)=>({id:A,room:B===0?Number(dn.get("room")||0):B%5,main:B===0}))},qs.setState(Zs),window.__debug={project(A){let B=d.get(A),tt=R.get(A),wt=B?B.obj:tt?tt.holder:null;if(!wt)return null;let gt=wt.position.clone();return gt.y+=.3,gt.project(Xe),{x:(gt.x*.5+.5)*window.innerWidth,y:(-gt.y*.5+.5)*window.innerHeight}},item(A){let B=d.get(A);return B&&{x:B.x,z:B.z,rot:B.data.rot||0,room:B.room}},screen(A,B){let tt=new D(A,0,B).project(Xe);return{x:(tt.x*.5+.5)*window.innerWidth,y:(-tt.y*.5+.5)*window.innerHeight}},char(A){let B=R.get(A);return B&&{x:B.holder.position.x,z:B.holder.position.z,path:B.path.length,talk:B.talkT>0?B.talk:null,selected:_===A}},chars(){return[...R.keys()]},hit(A,B){let tt=Dt(A,B);return tt&&{kind:tt.kind,id:tt.id}}}}dn.get("yaw")&&(a.yaw=r.yaw=Number(dn.get("yaw"))),dn.get("pitch")&&(a.pitch=r.pitch=Number(dn.get("pitch"))),dn.get("dist")&&(a.dist=r.dist=Number(dn.get("dist"))),c(),pt();try{ws.onReady()}catch(S){window.houseError&&window.houseError("bridge: "+S.message)}}function Sh(){let n=document.createElement("canvas");n.width=n.height=16;let t=n.getContext("2d");t.fillStyle="#8E6CFF",[[3,3,10,2],[9,5,2,2],[7,7,2,2],[5,9,2,2],[3,11,10,2]].forEach(([i,s,r,a])=>t.fillRect(i,s,r,a));let e=new ms(n);return e.magFilter=Re,e.colorSpace=Ke,e}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
