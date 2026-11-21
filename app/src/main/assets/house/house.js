(()=>{var bh=Object.defineProperty,Eh=Object.defineProperties;var wh=Object.getOwnPropertyDescriptors;var Xa=Object.getOwnPropertySymbols;var Ah=Object.prototype.hasOwnProperty,Th=Object.prototype.propertyIsEnumerable;var qa=(n,t,e)=>t in n?bh(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,dn=(n,t)=>{for(var e in t||(t={}))Ah.call(t,e)&&qa(n,e,t[e]);if(Xa)for(var e of Xa(t))Th.call(t,e)&&qa(n,e,t[e]);return n},Tn=(n,t)=>Eh(n,wh(t));var wa="162";var Ch=0,Ya=1,Rh=2;var bc=1,Aa=2,Ln=3,ti=0,je=1,Dn=2,$n=0,ss=1,Za=2,Ja=3,$a=4,Fh=5,yi=100,Ph=101,Ih=102,Ka=103,ja=104,Lh=200,Dh=201,Uh=202,Nh=203,ko=204,Ho=205,Bh=206,Oh=207,zh=208,kh=209,Hh=210,Vh=211,Gh=212,Wh=213,Xh=214,qh=0,Yh=1,Zh=2,vr=3,Jh=4,$h=5,Kh=6,jh=7,Ta=0,Qh=1,tu=2,Kn=0,eu=1,nu=2,iu=3,su=4,ru=5,ou=6,au=7;var Ec=300,as=301,ls=302,Vo=303,Go=304,Yr=306,Wo=1e3,_n=1001,Xo=1002,Ee=1003,Qa=1004;var As=1005;var Je=1006,so=1007;var Mi=1008;var jn=1009,lu=1010,cu=1011,Ca=1012,wc=1013,Jn=1014,Un=1015,Us=1016,Ac=1017,Tc=1018,bi=1020,hu=1021,xn=1023,uu=1024,du=1025,Ei=1026,cs=1027,fu=1028,Cc=1029,pu=1030,Rc=1031,Fc=1033,ro=33776,oo=33777,ao=33778,lo=33779,tl=35840,el=35841,nl=35842,il=35843,Pc=36196,sl=37492,rl=37496,ol=37808,al=37809,ll=37810,cl=37811,hl=37812,ul=37813,dl=37814,fl=37815,pl=37816,ml=37817,gl=37818,_l=37819,xl=37820,yl=37821,co=36492,vl=36494,Ml=36495,mu=36283,Sl=36284,bl=36285,El=36286;var Mr=2300,Sr=2301,ho=2302,wl=2400,Al=2401,Tl=2402;var gu=3200,_u=3201,Ic=0,xu=1,Zn="",$e="srgb",si="srgb-linear",Ra="display-p3",Zr="display-p3-linear",br="linear",fe="srgb",Er="rec709",wr="p3";var Ni=7680;var Cl=519,yu=512,vu=513,Mu=514,Lc=515,Su=516,bu=517,Eu=518,wu=519,qo=35044;var Rl="300 es",Yo=1035,Nn=2e3,Ar=2001,ei=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var uo=Math.PI/180,Zo=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]).toLowerCase()}function Ke(n,t,e){return Math.max(t,Math.min(e,n))}function Au(n,t){return(n%t+t)%t}function fo(n,t,e){return(1-e)*n+e*t}function Fl(n){return(n&n-1)===0&&n!==0}function Jo(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var kt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$t=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],v=s[0],p=s[3],u=s[6],E=s[1],x=s[4],R=s[7],F=s[2],b=s[5],w=s[8];return r[0]=a*v+o*E+l*F,r[3]=a*p+o*x+l*b,r[6]=a*u+o*R+l*w,r[1]=c*v+h*E+d*F,r[4]=c*p+h*x+d*b,r[7]=c*u+h*R+d*w,r[2]=f*v+m*E+g*F,r[5]=f*p+m*x+g*b,r[8]=f*u+m*R+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*r,m=c*r-a*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(po.makeScale(t,e)),this}rotate(t){return this.premultiply(po.makeRotation(-t)),this}translate(t,e){return this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},po=new $t;function Dc(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Tr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tu(){let n=Tr("canvas");return n.style.display="block",n}var Pl={};function Uc(n){n in Pl||(Pl[n]=!0,console.warn(n))}var Il=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[si]:{transfer:br,primaries:Er,toReference:n=>n,fromReference:n=>n},[$e]:{transfer:fe,primaries:Er,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Zr]:{transfer:br,primaries:wr,toReference:n=>n.applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Il)},[Ra]:{transfer:fe,primaries:wr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Ll),fromReference:n=>n.applyMatrix3(Il).convertLinearToSRGB()}},Cu=new Set([si,Zr]),ce={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Cu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Js[t].toReference,s=Js[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Js[n].primaries},getTransfer:function(n){return n===Zn?br:Js[n].transfer}};function rs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function mo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Bi,Cr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bi===void 0&&(Bi=Tr("canvas")),Bi.width=t.width,Bi.height=t.height;let i=Bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Tr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=rs(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rs(e[i]/255)*255):e[i]=rs(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ru=0,Rr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=Qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(go(s[a].image)):r.push(go(s[a]))}else r=go(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function go(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?Cr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Fu=0,on=class n extends ei{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=_n,s=_n,r=Je,a=Mi,o=xn,l=jn,c=n.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=Qn(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wo:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wo:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Ec;on.DEFAULT_ANISOTROPY=1;var Le=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,R=(m+1)/2,F=(u+1)/2,b=(h+f)/4,w=(d+v)/4,B=(g+p)/4;return x>R&&x>F?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=b/i,r=w/i):R>F?R<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(R),i=b/s,r=B/s):F<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(F),i=w/r,s=B/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-v)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$o=class extends ei{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);let s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let r=new on(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Rr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends $o{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fr=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ko=class extends on{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ee,this.minFilter=Ee,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ni=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||l!==f||c!==m||h!==g){let p=1-o,u=l*f+c*m+h*g+d*v,E=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let F=Math.sqrt(x),b=Math.atan2(F,u*E);p=Math.sin(p*b)/F,o=Math.sin(o*b)/F}let R=o*E;if(l=l*p+f*R,c=c*p+m*R,h=h*p+g*R,d=d*p+v*R,p===1-o){let F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-o*m,t[e+2]=c*g+h*m+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+o+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(i>o&&i>d){let m=2*Math.sqrt(1+i-o-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-i-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ke(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-e;return this._w=m*a+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _o.copy(this).projectOnVector(t),this.sub(_o)}reflect(t){return this.sub(_o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ke(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_o=new L,Dl=new ni,wi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fn):fn.fromBufferAttribute(r,a),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$s.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$s.copy(i.boundingBox)),$s.applyMatrix4(t.matrixWorld),this.union($s)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Ks.subVectors(this.max,Ts),Oi.subVectors(t.a,Ts),zi.subVectors(t.b,Ts),ki.subVectors(t.c,Ts),Vn.subVectors(zi,Oi),Gn.subVectors(ki,zi),di.subVectors(Oi,ki);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-di.z,di.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,di.z,0,-di.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-di.y,di.x,0];return!xo(e,Oi,zi,ki,Ks)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,Oi,zi,ki,Ks))?!1:(js.crossVectors(Vn,Gn),e=[js.x,js.y,js.z],xo(e,Oi,zi,ki,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Cn=[new L,new L,new L,new L,new L,new L,new L,new L],fn=new L,$s=new wi,Oi=new L,zi=new L,ki=new L,Vn=new L,Gn=new L,di=new L,Ts=new L,Ks=new L,js=new L,fi=new L;function xo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){fi.fromArray(n,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=t.dot(fi),c=e.dot(fi),h=i.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pu=new wi,Cs=new L,yo=new L,Ns=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Pu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);let e=Cs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Cs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(yo)),this.expandByPoint(Cs.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rn=new L,vo=new L,Qs=new L,Wn=new L,Mo=new L,tr=new L,So=new L,Pr=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){vo.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(vo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=Wn.dot(this.direction),l=-Wn.dot(Qs),c=Wn.lengthSq(),h=Math.abs(1-a*a),d,f,m,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let v=1/h;d*=v,f*=v,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(vo).addScaledVector(Qs,f),m}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);let i=Rn.dot(this.direction),s=Rn.dot(Rn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,i,s,r){Mo.subVectors(e,t),tr.subVectors(i,t),So.crossVectors(Mo,tr);let a=this.direction.dot(So),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);let l=o*this.direction.dot(tr.crossVectors(Wn,tr));if(l<0)return null;let c=o*this.direction.dot(Mo.cross(Wn));if(c<0||l+c>a)return null;let h=-o*Wn.dot(So);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ye=class n{constructor(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p)}set(t,e,i,s,r,a,o,l,c,h,d,f,m,g,v,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Hi.setFromMatrixColumn(t,0).length(),r=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=g+m*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,v=c*d;e[0]=f+v*o,e[4]=g*o-m,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,m=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=m*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-v*d}else if(t.order==="XZY"){let f=a*l,m=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+v,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Iu,t,Lu)}lookAt(t,e,i){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Xn.crossVectors(i,nn),Xn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Xn.crossVectors(i,nn)),Xn.normalize(),er.crossVectors(nn,Xn),s[0]=Xn.x,s[4]=er.x,s[8]=nn.x,s[1]=Xn.y,s[5]=er.y,s[9]=nn.y,s[2]=Xn.z,s[6]=er.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],E=i[3],x=i[7],R=i[11],F=i[15],b=s[0],w=s[4],B=s[8],Q=s[12],y=s[1],C=s[5],tt=s[9],et=s[13],I=s[2],q=s[6],Y=s[10],K=s[14],J=s[3],j=s[7],lt=s[11],ot=s[15];return r[0]=a*b+o*y+l*I+c*J,r[4]=a*w+o*C+l*q+c*j,r[8]=a*B+o*tt+l*Y+c*lt,r[12]=a*Q+o*et+l*K+c*ot,r[1]=h*b+d*y+f*I+m*J,r[5]=h*w+d*C+f*q+m*j,r[9]=h*B+d*tt+f*Y+m*lt,r[13]=h*Q+d*et+f*K+m*ot,r[2]=g*b+v*y+p*I+u*J,r[6]=g*w+v*C+p*q+u*j,r[10]=g*B+v*tt+p*Y+u*lt,r[14]=g*Q+v*et+p*K+u*ot,r[3]=E*b+x*y+R*I+F*J,r[7]=E*w+x*C+R*q+F*j,r[11]=E*B+x*tt+R*Y+F*lt,r[15]=E*Q+x*et+R*K+F*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*m-i*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*d-e*o*m-r*a*d+i*a*m+r*o*h-i*c*h)+u*(-s*o*h-e*l*d+e*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],E=d*p*c-v*f*c+v*l*m-o*p*m-d*l*u+o*f*u,x=g*f*c-h*p*c-g*l*m+a*p*m+h*l*u-a*f*u,R=h*v*c-g*d*c+g*o*m-a*v*m-h*o*u+a*d*u,F=g*d*l-h*v*l-g*o*f+a*v*f+h*o*p-a*d*p,b=e*E+i*x+s*R+r*F;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return t[0]=E*w,t[1]=(v*f*r-d*p*r-v*s*m+i*p*m+d*s*u-i*f*u)*w,t[2]=(o*p*r-v*l*r+v*s*c-i*p*c-o*s*u+i*l*u)*w,t[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*m-i*l*m)*w,t[4]=x*w,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*w,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*u-e*l*u)*w,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*w,t[8]=R*w,t[9]=(g*d*r-h*v*r-g*i*m+e*v*m+h*i*u-e*d*u)*w,t[10]=(a*v*r-g*o*r+g*i*c-e*v*c-a*i*u+e*o*u)*w,t[11]=(h*o*r-a*d*r-h*i*c+e*d*c+a*i*m-e*o*m)*w,t[12]=F*w,t[13]=(h*v*s-g*d*s+g*i*f-e*v*f-h*i*p+e*d*p)*w,t[14]=(g*o*s-a*v*s-g*i*l+e*v*l+a*i*p-e*o*p)*w,t[15]=(a*d*s-h*o*s+h*i*l-e*d*l-a*i*f+e*o*f)*w,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,f=r*c,m=r*h,g=r*d,v=a*h,p=a*d,u=o*d,E=l*c,x=l*h,R=l*d,F=i.x,b=i.y,w=i.z;return s[0]=(1-(v+u))*F,s[1]=(m+R)*F,s[2]=(g-x)*F,s[3]=0,s[4]=(m-R)*b,s[5]=(1-(f+u))*b,s[6]=(p+E)*b,s[7]=0,s[8]=(g+x)*w,s[9]=(p-E)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Hi.set(s[0],s[1],s[2]).length(),a=Hi.set(s[4],s[5],s[6]).length(),o=Hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);let c=1/r,h=1/a,d=1/o;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=d,pn.elements[9]*=d,pn.elements[10]*=d,e.setFromRotationMatrix(pn),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Nn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,g;if(o===Nn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ar)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Nn){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(a-r),f=(e+t)*c,m=(i+s)*h,g,v;if(o===Nn)g=(a+r)*d,v=-2*d;else if(o===Ar)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Hi=new L,pn=new ye,Iu=new L(0,0,0),Lu=new L(1,1,1),Xn=new L,er=new L,nn=new L,Ul=new ye,Nl=new ni,bn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ul,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Bs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Du=0,Bl=new L,Vi=new ni,Fn=new ye,nr=new L,Rs=new L,Uu=new L,Nu=new ni,Ol=new L(1,0,0),zl=new L(0,1,0),kl=new L(0,0,1),Bu={type:"added"},Ou={type:"removed"},bo={type:"childadded",child:null},Eo={type:"childremoved",child:null},He=class n extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new bn,i=new ni,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new $t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,e){return Vi.setFromAxisAngle(t,e),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Ol,t)}rotateY(t){return this.rotateOnAxis(zl,t)}rotateZ(t){return this.rotateOnAxis(kl,t)}translateOnAxis(t,e){return Bl.copy(t).applyQuaternion(this.quaternion),this.position.add(Bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ol,t)}translateY(t){return this.translateOnAxis(zl,t)}translateZ(t){return this.translateOnAxis(kl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?nr.copy(t):nr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Rs,nr,this.up):Fn.lookAt(nr,Rs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Bu),bo.child=t,this.dispatchEvent(bo),bo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ou),Eo.child=t,this.dispatchEvent(Eo),Eo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,t,Uu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rs,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};He.DEFAULT_UP=new L(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new L,Pn=new L,wo=new L,In=new L,Gi=new L,Wi=new L,Hl=new L,Ao=new L,To=new L,Co=new L,Si=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){mn.subVectors(s,e),Pn.subVectors(i,e),wo.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(Pn),l=mn.dot(wo),c=Pn.dot(Pn),h=Pn.dot(wo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static isFrontFacing(t,e,i,s){return mn.subVectors(i,e),Pn.subVectors(t,e),mn.cross(Pn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),mn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,i),Wi.subVectors(r,i),Ao.subVectors(t,i);let l=Gi.dot(Ao),c=Wi.dot(Ao);if(l<=0&&c<=0)return e.copy(i);To.subVectors(t,s);let h=Gi.dot(To),d=Wi.dot(To);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Gi,a);Co.subVectors(t,r);let m=Gi.dot(Co),g=Wi.dot(Co);if(g>=0&&m<=g)return e.copy(r);let v=m*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(Wi,o);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Hl.subVectors(r,s),o=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Hl,o);let u=1/(p+v+f);return a=v*u,o=f*u,e.copy(i).addScaledVector(Gi,a).addScaledVector(Wi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Ro(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ce.workingColorSpace){return this.r=t,this.g=e,this.b=i,ce.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ce.workingColorSpace){if(t=Au(t,1),e=Ke(e,0,1),i=Ke(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ro(a,r,t+1/3),this.g=Ro(a,r,t),this.b=Ro(a,r,t-1/3)}return ce.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){let i=Nc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return ce.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ke(ke.r*255,0,255))*65536+Math.round(Ke(ke.g*255,0,255))*256+Math.round(Ke(ke.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(ke.copy(this),e);let i=ke.r,s=ke.g,r=ke.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=$e){ce.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,i=ke.g,s=ke.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(ir);let i=fo(qn.h,ir.h,e),s=fo(qn.s,ir.s,e),r=fo(qn.l,ir.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new Kt;Kt.NAMES=Nc;var zu=0,ii=class extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=ss,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ss&&(i.blending=this.blending),this.side!==ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==yi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},On=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var be=new L,sr=new kt,Ne=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qo&&(t.usage=this.usage),t}};var Ir=class extends Ne{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Lr=class extends Ne{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var rn=class extends Ne{constructor(t,e,i){super(new Float32Array(t),e,i)}},ku=0,hn=new ye,Fo=new He,Xi=new L,sn=new wi,Fs=new wi,Ie=new L,yn=class n extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Dc(t)?Lr:Ir)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new $t().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Fo.lookAt(t),Fo.updateMatrix(),this.applyMatrix4(Fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new rn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Fs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(sn.min,Fs.min),sn.expandByPoint(Ie),Ie.addVectors(sn.max,Fs.max),sn.expandByPoint(Ie)):(sn.expandByPoint(Fs.min),sn.expandByPoint(Fs.max))}sn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ie));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ie.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(t,c),Ie.add(Xi)),s=Math.max(s,i.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ne(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<i.count;B++)o[B]=new L,l[B]=new L;let c=new L,h=new L,d=new L,f=new kt,m=new kt,g=new kt,v=new L,p=new L;function u(B,Q,y){c.fromBufferAttribute(i,B),h.fromBufferAttribute(i,Q),d.fromBufferAttribute(i,y),f.fromBufferAttribute(r,B),m.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,y),h.sub(c),d.sub(c),m.sub(f),g.sub(f);let C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[B].add(v),o[Q].add(v),o[y].add(v),l[B].add(p),l[Q].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let B=0,Q=E.length;B<Q;++B){let y=E[B],C=y.start,tt=y.count;for(let et=C,I=C+tt;et<I;et+=3)u(t.getX(et+0),t.getX(et+1),t.getX(et+2))}let x=new L,R=new L,F=new L,b=new L;function w(B){F.fromBufferAttribute(s,B),b.copy(F);let Q=o[B];x.copy(Q),x.sub(F.multiplyScalar(F.dot(Q))).normalize(),R.crossVectors(b,Q);let C=R.dot(l[B])<0?-1:1;a.setXYZW(B,x.x,x.y,x.z,C)}for(let B=0,Q=E.length;B<Q;++B){let y=E[B],C=y.start,tt=y.count;for(let et=C,I=C+tt;et<I;et+=3)w(t.getX(et+0)),w(t.getX(et+1)),w(t.getX(et+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ne(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new Ne(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vl=new ye,pi=new Pr,rr=new Ns,Gl=new L,qi=new L,Yi=new L,Zi=new L,Po=new L,or=new L,ar=new kt,lr=new kt,cr=new kt,Wl=new L,Xl=new L,ql=new L,hr=new L,ur=new L,De=class extends He{constructor(t=new yn,e=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){or.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Po.fromBufferAttribute(d,t),a?or.addScaledVector(Po,h):or.addScaledVector(Po.sub(e),h))}e.add(or)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(rr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(rr,Gl)===null||pi.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),pi.copy(t.ray).applyMatrix4(Vl),!(i.boundingBox!==null&&pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let R=E,F=x;R<F;R+=3){let b=o.getX(R),w=o.getX(R+1),B=o.getX(R+2);s=dr(this,u,t,i,c,h,d,b,w,B),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let E=o.getX(p),x=o.getX(p+1),R=o.getX(p+2);s=dr(this,a,t,i,c,h,d,E,x,R),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let p=f[g],u=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let R=E,F=x;R<F;R+=3){let b=R,w=R+1,B=R+2;s=dr(this,u,t,i,c,h,d,b,w,B),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let E=p,x=p+1,R=p+2;s=dr(this,a,t,i,c,h,d,E,x,R),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Hu(n,t,e,i,s,r,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===ti,o),l===null)return null;ur.copy(o),ur.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(ur);return c<e.near||c>e.far?null:{distance:c,point:ur.clone(),object:n}}function dr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,qi),n.getVertexPosition(l,Yi),n.getVertexPosition(c,Zi);let h=Hu(n,t,e,i,qi,Yi,Zi,hr);if(h){s&&(ar.fromBufferAttribute(s,o),lr.fromBufferAttribute(s,l),cr.fromBufferAttribute(s,c),h.uv=Si.getInterpolation(hr,qi,Yi,Zi,ar,lr,cr,new kt)),r&&(ar.fromBufferAttribute(r,o),lr.fromBufferAttribute(r,l),cr.fromBufferAttribute(r,c),h.uv1=Si.getInterpolation(hr,qi,Yi,Zi,ar,lr,cr,new kt)),a&&(Wl.fromBufferAttribute(a,o),Xl.fromBufferAttribute(a,l),ql.fromBufferAttribute(a,c),h.normal=Si.getInterpolation(hr,qi,Yi,Zi,Wl,Xl,ql,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};Si.getNormal(qi,Yi,Zi,d.normal),h.face=d}return h}var Ai=class n extends yn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new rn(c,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(d,2));function g(v,p,u,E,x,R,F,b,w,B,Q){let y=R/w,C=F/B,tt=R/2,et=F/2,I=b/2,q=w+1,Y=B+1,K=0,J=0,j=new L;for(let lt=0;lt<Y;lt++){let ot=lt*C-et;for(let nt=0;nt<q;nt++){let wt=nt*y-tt;j[v]=wt*E,j[p]=ot*x,j[u]=I,c.push(j.x,j.y,j.z),j[v]=0,j[p]=0,j[u]=b>0?1:-1,h.push(j.x,j.y,j.z),d.push(nt/w),d.push(1-lt/B),K+=1}}for(let lt=0;lt<B;lt++)for(let ot=0;ot<w;ot++){let nt=f+ot+q*lt,wt=f+ot+q*(lt+1),G=f+(ot+1)+q*(lt+1),it=f+(ot+1)+q*lt;l.push(nt,wt,it),l.push(wt,G,it),J+=6}o.addGroup(m,J,Q),m+=J,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function hs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Xe(n){let t={};for(let e=0;e<n.length;e++){let i=hs(n[e]);for(let s in i)t[s]=i[s]}return t}function Vu(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bc(n){return n.getRenderTarget()===null?n.outputColorSpace:ce.workingColorSpace}var Gu={clone:hs,merge:Xe},Wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wu,this.fragmentShader=Xu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.uniformsGroups=Vu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Dr=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Yn=new L,Yl=new kt,Zl=new kt,qe=class extends Dr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Zo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zo*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Yl,Zl),e.subVectors(Zl,Yl)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(uo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,$i=1,jo=class extends He{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Ji,$i,t,e);s.layers=this.layers,this.add(s);let r=new qe(Ji,$i,t,e);r.layers=this.layers,this.add(r);let a=new qe(Ji,$i,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ji,$i,t,e);o.layers=this.layers,this.add(o);let l=new qe(Ji,$i,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ji,$i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Nn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ur=class extends on{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qo=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ur(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:$n});r.uniforms.tEquirect.value=e;let a=new De(s,r),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Je),new jo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Io=new L,qu=new L,Yu=new $t,gn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Io.subVectors(i,e).cross(qu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Io),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Yu.getNormalMatrix(t),s=this.coplanarPoint(Io).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new Ns,fr=new L,Os=class{constructor(t=new gn,e=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Nn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],E=s[13],x=s[14],R=s[15];if(i[0].setComponents(l-r,f-c,p-m,R-u).normalize(),i[1].setComponents(l+r,f+c,p+m,R+u).normalize(),i[2].setComponents(l+a,f+h,p+g,R+E).normalize(),i[3].setComponents(l-a,f-h,p-g,R-E).normalize(),i[4].setComponents(l-o,f-d,p-v,R-x).normalize(),e===Nn)i[5].setComponents(l+o,f+d,p+v,R+x).normalize();else if(e===Ar)i[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Oc(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Zu(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let v=0,p=g.length;v<p;v++){let u=g[v];e?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:a,remove:o,update:l}}var us=class n extends yn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,f=e/l,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){let E=u*f-a;for(let x=0;x<c;x++){let R=x*d-r;g.push(R,-E,0),v.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<o;E++){let x=E+c*u,R=E+c*(u+1),F=E+1+c*(u+1),b=E+1+c*u;m.push(x,R,b),m.push(R,F,b)}this.setIndex(m),this.setAttribute("position",new rn(g,3)),this.setAttribute("normal",new rn(v,3)),this.setAttribute("uv",new rn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ju=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$u=`#ifdef USE_ALPHAHASH
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
#endif`,Ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ju=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ed=`#ifdef USE_AOMAP
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
#endif`,nd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,id=`#ifdef USE_BATCHING
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
#endif`,sd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,rd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ad=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ld=`#ifdef USE_IRIDESCENCE
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
#endif`,cd=`#ifdef USE_BUMPMAP
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ud=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xd=`#define PI 3.141592653589793
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
} // validated`,yd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vd=`vec3 transformedNormal = objectNormal;
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
#endif`,Md=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ed=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`
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
}`,Td=`#ifdef USE_ENVMAP
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
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Fd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nd=`#ifdef USE_GRADIENTMAP
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
}`,Bd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yd=`PhysicalMaterial material;
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
#endif`,Zd=`struct PhysicalMaterial {
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
}`,Jd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ef=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,of=`#if defined( USE_POINTS_UV )
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
#endif`,af=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uf=`#ifdef USE_MORPHNORMALS
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
#endif`,df=`#ifdef USE_MORPHTARGETS
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
#endif`,ff=`#ifdef USE_MORPHTARGETS
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
#endif`,pf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
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
#endif`,vf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uf=`float getShadowMask() {
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
}`,Nf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wf=`#ifdef USE_TRANSMISSION
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
#endif`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Kf=`uniform sampler2D t2D;
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
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`#include <common>
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
}`,ip=`#if DEPTH_PACKING == 3200
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
}`,sp=`#define DISTANCE
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
}`,rp=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ap=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`uniform float scale;
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
}`,cp=`uniform vec3 diffuse;
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
}`,hp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define MATCAP
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
}`,mp=`#define MATCAP
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
}`,gp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,xp=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,vp=`#define STANDARD
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
}`,Mp=`#define STANDARD
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
}`,Sp=`#define TOON
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
}`,bp=`#define TOON
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
}`,Ep=`uniform float size;
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
}`,wp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Tp=`uniform vec3 color;
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
}`,Cp=`uniform float rotation;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Ju,alphahash_pars_fragment:$u,alphamap_fragment:Ku,alphamap_pars_fragment:ju,alphatest_fragment:Qu,alphatest_pars_fragment:td,aomap_fragment:ed,aomap_pars_fragment:nd,batching_pars_vertex:id,batching_vertex:sd,begin_vertex:rd,beginnormal_vertex:od,bsdfs:ad,iridescence_fragment:ld,bumpmap_pars_fragment:cd,clipping_planes_fragment:hd,clipping_planes_pars_fragment:ud,clipping_planes_pars_vertex:dd,clipping_planes_vertex:fd,color_fragment:pd,color_pars_fragment:md,color_pars_vertex:gd,color_vertex:_d,common:xd,cube_uv_reflection_fragment:yd,defaultnormal_vertex:vd,displacementmap_pars_vertex:Md,displacementmap_vertex:Sd,emissivemap_fragment:bd,emissivemap_pars_fragment:Ed,colorspace_fragment:wd,colorspace_pars_fragment:Ad,envmap_fragment:Td,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Rd,envmap_pars_vertex:Fd,envmap_physical_pars_fragment:Vd,envmap_vertex:Pd,fog_vertex:Id,fog_pars_vertex:Ld,fog_fragment:Dd,fog_pars_fragment:Ud,gradientmap_pars_fragment:Nd,lightmap_fragment:Bd,lightmap_pars_fragment:Od,lights_lambert_fragment:zd,lights_lambert_pars_fragment:kd,lights_pars_begin:Hd,lights_toon_fragment:Gd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:qd,lights_physical_fragment:Yd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Kd,logdepthbuf_fragment:jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:ef,map_fragment:nf,map_pars_fragment:sf,map_particle_fragment:rf,map_particle_pars_fragment:of,metalnessmap_fragment:af,metalnessmap_pars_fragment:lf,morphinstance_vertex:cf,morphcolor_vertex:hf,morphnormal_vertex:uf,morphtarget_pars_vertex:df,morphtarget_vertex:ff,normal_fragment_begin:pf,normal_fragment_maps:mf,normal_pars_fragment:gf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:vf,clearcoat_normal_fragment_maps:Mf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:bf,opaque_fragment:Ef,packing:wf,premultiplied_alpha_fragment:Af,project_vertex:Tf,dithering_fragment:Cf,dithering_pars_fragment:Rf,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Pf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Lf,shadowmap_vertex:Df,shadowmask_pars_fragment:Uf,skinbase_vertex:Nf,skinning_pars_vertex:Bf,skinning_vertex:Of,skinnormal_vertex:zf,specularmap_fragment:kf,specularmap_pars_fragment:Hf,tonemapping_fragment:Vf,tonemapping_pars_fragment:Gf,transmission_fragment:Wf,transmission_pars_fragment:Xf,uv_pars_fragment:qf,uv_pars_vertex:Yf,uv_vertex:Zf,worldpos_vertex:Jf,background_vert:$f,background_frag:Kf,backgroundCube_vert:jf,backgroundCube_frag:Qf,cube_vert:tp,cube_frag:ep,depth_vert:np,depth_frag:ip,distanceRGBA_vert:sp,distanceRGBA_frag:rp,equirect_vert:op,equirect_frag:ap,linedashed_vert:lp,linedashed_frag:cp,meshbasic_vert:hp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:fp,meshmatcap_vert:pp,meshmatcap_frag:mp,meshnormal_vert:gp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:yp,meshphysical_vert:vp,meshphysical_frag:Mp,meshtoon_vert:Sp,meshtoon_frag:bp,points_vert:Ep,points_frag:wp,shadow_vert:Ap,shadow_frag:Tp,sprite_vert:Cp,sprite_frag:Rp},ut={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Mn={basic:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Xe([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Xe([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Xe([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Xe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Xe([ut.points,ut.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Xe([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Xe([ut.common,ut.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Xe([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Xe([ut.sprite,ut.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Xe([ut.common,ut.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Xe([ut.lights,ut.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Mn.physical={uniforms:Xe([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var pr={r:0,b:0,g:0},gi=new bn,Fp=new ye;function Pp(n,t,e,i,s,r,a){let o=new Kt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let E=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?v(o,l):x&&x.isColor&&(v(x,1),E=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yr)?(h===void 0&&(h=new De(new Ai(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:hs(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(u.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(gi)),h.material.toneMapped=ce.getTransfer(x.colorSpace)!==fe,(d!==x||f!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new De(new us(2,2),new En({name:"BackgroundMaterial",uniforms:hs(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ce.getTransfer(x.colorSpace)!==fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,f=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function v(p,u){p.getRGB(pr,Bc(n)),i.buffers.color.setClear(pr.r,pr.g,pr.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,v(o,l)},render:g}}function Ip(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=p(null),c=l,h=!1;function d(I,q,Y,K,J){let j=!1;if(a){let lt=v(K,Y,q);c!==lt&&(c=lt,m(c.object)),j=u(I,K,Y,J),j&&E(I,K,Y,J)}else{let lt=q.wireframe===!0;(c.geometry!==K.id||c.program!==Y.id||c.wireframe!==lt)&&(c.geometry=K.id,c.program=Y.id,c.wireframe=lt,j=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(j||h)&&(h=!1,B(I,q,Y,K),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(I){return i.isWebGL2?n.bindVertexArray(I):r.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function v(I,q,Y){let K=Y.wireframe===!0,J=o[I.id];J===void 0&&(J={},o[I.id]=J);let j=J[q.id];j===void 0&&(j={},J[q.id]=j);let lt=j[K];return lt===void 0&&(lt=p(f()),j[K]=lt),lt}function p(I){let q=[],Y=[],K=[];for(let J=0;J<s;J++)q[J]=0,Y[J]=0,K[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:Y,attributeDivisors:K,object:I,attributes:{},index:null}}function u(I,q,Y,K){let J=c.attributes,j=q.attributes,lt=0,ot=Y.getAttributes();for(let nt in ot)if(ot[nt].location>=0){let G=J[nt],it=j[nt];if(it===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(it=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(it=I.instanceColor)),G===void 0||G.attribute!==it||it&&G.data!==it.data)return!0;lt++}return c.attributesNum!==lt||c.index!==K}function E(I,q,Y,K){let J={},j=q.attributes,lt=0,ot=Y.getAttributes();for(let nt in ot)if(ot[nt].location>=0){let G=j[nt];G===void 0&&(nt==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),nt==="instanceColor"&&I.instanceColor&&(G=I.instanceColor));let it={};it.attribute=G,G&&G.data&&(it.data=G.data),J[nt]=it,lt++}c.attributes=J,c.attributesNum=lt,c.index=K}function x(){let I=c.newAttributes;for(let q=0,Y=I.length;q<Y;q++)I[q]=0}function R(I){F(I,0)}function F(I,q){let Y=c.newAttributes,K=c.enabledAttributes,J=c.attributeDivisors;Y[I]=1,K[I]===0&&(n.enableVertexAttribArray(I),K[I]=1),J[I]!==q&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),J[I]=q)}function b(){let I=c.newAttributes,q=c.enabledAttributes;for(let Y=0,K=q.length;Y<K;Y++)q[Y]!==I[Y]&&(n.disableVertexAttribArray(Y),q[Y]=0)}function w(I,q,Y,K,J,j,lt){lt===!0?n.vertexAttribIPointer(I,q,Y,J,j):n.vertexAttribPointer(I,q,Y,K,J,j)}function B(I,q,Y,K){if(i.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let J=K.attributes,j=Y.getAttributes(),lt=q.defaultAttributeValues;for(let ot in j){let nt=j[ot];if(nt.location>=0){let wt=J[ot];if(wt===void 0&&(ot==="instanceMatrix"&&I.instanceMatrix&&(wt=I.instanceMatrix),ot==="instanceColor"&&I.instanceColor&&(wt=I.instanceColor)),wt!==void 0){let G=wt.normalized,it=wt.itemSize,mt=e.get(wt);if(mt===void 0)continue;let Ut=mt.buffer,Mt=mt.type,gt=mt.bytesPerElement,se=i.isWebGL2===!0&&(Mt===n.INT||Mt===n.UNSIGNED_INT||wt.gpuType===wc);if(wt.isInterleavedBufferAttribute){let Nt=wt.data,N=Nt.stride,we=wt.offset;if(Nt.isInstancedInterleavedBuffer){for(let At=0;At<nt.locationSize;At++)F(nt.location+At,Nt.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let At=0;At<nt.locationSize;At++)R(nt.location+At);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let At=0;At<nt.locationSize;At++)w(nt.location+At,it/nt.locationSize,Mt,G,N*gt,(we+it/nt.locationSize*At)*gt,se)}else{if(wt.isInstancedBufferAttribute){for(let Nt=0;Nt<nt.locationSize;Nt++)F(nt.location+Nt,wt.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=wt.meshPerAttribute*wt.count)}else for(let Nt=0;Nt<nt.locationSize;Nt++)R(nt.location+Nt);n.bindBuffer(n.ARRAY_BUFFER,Ut);for(let Nt=0;Nt<nt.locationSize;Nt++)w(nt.location+Nt,it/nt.locationSize,Mt,G,it*gt,it/nt.locationSize*Nt*gt,se)}}else if(lt!==void 0){let G=lt[ot];if(G!==void 0)switch(G.length){case 2:n.vertexAttrib2fv(nt.location,G);break;case 3:n.vertexAttrib3fv(nt.location,G);break;case 4:n.vertexAttrib4fv(nt.location,G);break;default:n.vertexAttrib1fv(nt.location,G)}}}}b()}function Q(){tt();for(let I in o){let q=o[I];for(let Y in q){let K=q[Y];for(let J in K)g(K[J].object),delete K[J];delete q[Y]}delete o[I]}}function y(I){if(o[I.id]===void 0)return;let q=o[I.id];for(let Y in q){let K=q[Y];for(let J in K)g(K[J].object),delete K[J];delete q[Y]}delete o[I.id]}function C(I){for(let q in o){let Y=o[q];if(Y[I.id]===void 0)continue;let K=Y[I.id];for(let J in K)g(K[J].object),delete K[J];delete Y[I.id]}}function tt(){et(),h=!0,c!==l&&(c=l,m(c.object))}function et(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:tt,resetDefaultState:et,dispose:Q,releaseStatesOfGeometry:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:R,disableUnusedAttributes:b}}function Lp(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,d){n.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Dp(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext!="undefined"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,R=a||t.has("OES_texture_float"),F=x&&R,b=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:R,floatVertexTextures:F,maxSamples:b}}function Up(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gn,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,x=E*4,R=u.clippingState||null;l.value=R,R=h(g,f,x,m);for(let F=0;F!==x;++F)R[F]=e[F];u.clippingState=R,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){let v=d!==null?d.length:0,p=null;if(v!==0){if(p=l.value,g!==!0||p===null){let u=m+v*4,E=f.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,R=m;x!==v;++x,R+=4)a.copy(d[x]).applyMatrix4(E,o),a.normal.toArray(p,R),p[R+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Np(n){let t=new WeakMap;function e(a,o){return o===Vo?a.mapping=as:o===Go&&(a.mapping=ls),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vo||o===Go)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Qo(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Nr=class extends Dr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ns=4,Jl=[.125,.215,.35,.446,.526,.582],vi=20,Lo=new Nr,$l=new Kt,Do=null,Uo=0,No=0,xi=(1+Math.sqrt(5))/2,Ki=1/xi,Kl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,xi,Ki),new L(0,xi,-Ki),new L(Ki,0,xi),new L(-Ki,0,xi),new L(xi,Ki,0),new L(-xi,Ki,0)],Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ql(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Do,Uo,No),t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Us,format:xn,colorSpace:si,depthBuffer:!1},s=jl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jl(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(r)),this._blurMaterial=Op(r,t,e)}return s}_compileMaterial(t){let e=new De(this._lodPlanes[0],t);this._renderer.compile(e,Lo)}_sceneToCubeUV(t,e,i,s){let o=new qe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($l),h.toneMapping=Kn,h.autoClear=!1;let m=new On({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1}),g=new De(new Ai,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy($l),v=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):E===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));let x=this._cubeSize;mr(s,E*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===as||t.mapping===ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ql());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new De(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;mr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Lo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Kl[(s-1)%Kl.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new De(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*vi-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):vi;p>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);let u=[],E=0;for(let w=0;w<vi;++w){let B=w/v,Q=Math.exp(-B*B/2);u.push(Q),w===0?E+=Q:w<p&&(E+=2*Q)}for(let w=0;w<u.length;w++)u[w]=u[w]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let R=this._sizeLods[s],F=3*R*(s>x-ns?s-x+ns:0),b=4*(this._cubeSize-R);mr(e,F,b,3*R,2*R),l.setRenderTarget(e),l.render(d,Lo)}};function Bp(n){let t=[],e=[],i=[],s=n,r=n-ns+1+Jl.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-ns?l=Jl[a-n+ns-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,v=3,p=2,u=1,E=new Float32Array(v*g*m),x=new Float32Array(p*g*m),R=new Float32Array(u*g*m);for(let b=0;b<m;b++){let w=b%3*2/3-1,B=b>2?0:-1,Q=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];E.set(Q,v*g*b),x.set(f,p*g*b);let y=[b,b,b,b,b,b];R.set(y,u*g*b)}let F=new yn;F.setAttribute("position",new Ne(E,v)),F.setAttribute("uv",new Ne(x,p)),F.setAttribute("faceIndex",new Ne(R,u)),t.push(F),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jl(n,t,e){let i=new Bn(n,t,e);return i.texture.mapping=Yr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function mr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Op(n,t,e){let i=new Float32Array(vi),s=new L(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ql(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function tc(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Fa(){return`

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
	`}function zp(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Vo||l===Go,h=l===as||l===ls;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Br(n)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new Br(n));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function kp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Hp(n,t,e,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let v=m[g];for(let p=0,u=v.length;p<u;p++)t.update(v[p],n.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,v=0;if(m!==null){let E=m.array;v=m.version;for(let x=0,R=E.length;x<R;x+=3){let F=E[x+0],b=E[x+1],w=E[x+2];f.push(F,b,b,w,w,F)}}else if(g!==void 0){let E=g.array;v=g.version;for(let x=0,R=E.length/3-1;x<R;x+=3){let F=x+0,b=x+1,w=x+2;f.push(F,b,b,w,w,F)}}else return;let p=new(Dc(f)?Lr:Ir)(f,1);p.version=v;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Vp(n,t,e,i){let s=i.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,o,m*l),e.update(g,r,1)}function d(m,g,v){if(v===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*l,v),e.update(g,r,v)}function f(m,g,v){if(v===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,v);let u=0;for(let E=0;E<v;E++)u+=g[E];e.update(u,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Gp(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Wp(n,t){return n[0]-t[0]}function Xp(n,t){return Math.abs(t[1])-Math.abs(n[1])}function qp(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new Le,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let tt=function(){y.dispose(),r.delete(h),h.removeEventListener("dispose",tt)};v!==void 0&&v.texture.dispose();let p=h.morphAttributes.position!==void 0,u=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],F=h.morphAttributes.color||[],b=0;p===!0&&(b=1),u===!0&&(b=2),E===!0&&(b=3);let w=h.attributes.position.count*b,B=1;w>t.maxTextureSize&&(B=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let Q=new Float32Array(w*B*4*g),y=new Fr(Q,w,B,g);y.type=Un,y.needsUpdate=!0;let C=b*4;for(let et=0;et<g;et++){let I=x[et],q=R[et],Y=F[et],K=w*B*4*et;for(let J=0;J<I.count;J++){let j=J*C;p===!0&&(a.fromBufferAttribute(I,J),Q[K+j+0]=a.x,Q[K+j+1]=a.y,Q[K+j+2]=a.z,Q[K+j+3]=0),u===!0&&(a.fromBufferAttribute(q,J),Q[K+j+4]=a.x,Q[K+j+5]=a.y,Q[K+j+6]=a.z,Q[K+j+7]=0),E===!0&&(a.fromBufferAttribute(Y,J),Q[K+j+8]=a.x,Q[K+j+9]=a.y,Q[K+j+10]=a.z,Q[K+j+11]=Y.itemSize===4?a.w:1)}}v={count:g,texture:y,size:new kt(w,B)},r.set(h,v),h.addEventListener("dispose",tt)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,e);else{let p=0;for(let E=0;E<f.length;E++)p+=f[E];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f)}d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<m;x++){let R=g[x];R[0]=x,R[1]=f[x]}g.sort(Xp);for(let x=0;x<8;x++)x<m&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Wp);let v=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let R=o[x],F=R[0],b=R[1];F!==Number.MAX_SAFE_INTEGER&&b?(v&&h.getAttribute("morphTarget"+x)!==v[F]&&h.setAttribute("morphTarget"+x,v[F]),p&&h.getAttribute("morphNormal"+x)!==p[F]&&h.setAttribute("morphNormal"+x,p[F]),s[x]=b,u+=b):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Yp(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var Or=class extends on{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ei,h!==Ei&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ei&&(i=Jn),i===void 0&&h===cs&&(i=bi),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ee,this.minFilter=l!==void 0?l:Ee,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},zc=new on,kc=new Or(1,1);kc.compareFunction=Lc;var Hc=new Fr,Vc=new Ko,Gc=new Ur,ec=[],nc=[],ic=new Float32Array(16),sc=new Float32Array(9),rc=new Float32Array(4);function gs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ec[s];if(r===void 0&&(r=new Float32Array(s),ec[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ce(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Re(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Jr(n,t){let e=nc[t];e===void 0&&(e=new Int32Array(t),nc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Zp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Jp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2fv(this.addr,t),Re(e,t)}}function $p(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;n.uniform3fv(this.addr,t),Re(e,t)}}function Kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4fv(this.addr,t),Re(e,t)}}function jp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;rc.set(i),n.uniformMatrix2fv(this.addr,!1,rc),Re(e,i)}}function Qp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;sc.set(i),n.uniformMatrix3fv(this.addr,!1,sc),Re(e,i)}}function tm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ce(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Re(e,t)}else{if(Ce(e,i))return;ic.set(i),n.uniformMatrix4fv(this.addr,!1,ic),Re(e,i)}}function em(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function nm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2iv(this.addr,t),Re(e,t)}}function im(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3iv(this.addr,t),Re(e,t)}}function sm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4iv(this.addr,t),Re(e,t)}}function rm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;n.uniform2uiv(this.addr,t),Re(e,t)}}function am(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;n.uniform3uiv(this.addr,t),Re(e,t)}}function lm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;n.uniform4uiv(this.addr,t),Re(e,t)}}function cm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?kc:zc;e.setTexture2D(t||r,s)}function hm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Vc,s)}function um(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Gc,s)}function dm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hc,s)}function fm(n){switch(n){case 5126:return Zp;case 35664:return Jp;case 35665:return $p;case 35666:return Kp;case 35674:return jp;case 35675:return Qp;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(n,t){n.uniform1fv(this.addr,t)}function mm(n,t){let e=gs(t,this.size,2);n.uniform2fv(this.addr,e)}function gm(n,t){let e=gs(t,this.size,3);n.uniform3fv(this.addr,e)}function _m(n,t){let e=gs(t,this.size,4);n.uniform4fv(this.addr,e)}function xm(n,t){let e=gs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function ym(n,t){let e=gs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function vm(n,t){let e=gs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Mm(n,t){n.uniform1iv(this.addr,t)}function Sm(n,t){n.uniform2iv(this.addr,t)}function bm(n,t){n.uniform3iv(this.addr,t)}function Em(n,t){n.uniform4iv(this.addr,t)}function wm(n,t){n.uniform1uiv(this.addr,t)}function Am(n,t){n.uniform2uiv(this.addr,t)}function Tm(n,t){n.uniform3uiv(this.addr,t)}function Cm(n,t){n.uniform4uiv(this.addr,t)}function Rm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||zc,r[a])}function Fm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Vc,r[a])}function Pm(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Gc,r[a])}function Im(n,t,e){let i=this.cache,s=t.length,r=Jr(e,s);Ce(i,r)||(n.uniform1iv(this.addr,r),Re(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hc,r[a])}function Lm(n){switch(n){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return xm;case 35675:return ym;case 35676:return vm;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return bm;case 35669:case 35673:return Em;case 5125:return wm;case 36294:return Am;case 36295:return Tm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}var ta=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=fm(e.type)}},ea=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lm(e.type)}},na=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Bo=/(\w+)(\])?(\[|\.)?/g;function oc(n,t){n.seq.push(t),n.map[t.id]=t}function Dm(n,t,e){let i=n.name,s=i.length;for(Bo.lastIndex=0;;){let r=Bo.exec(i),a=Bo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){oc(e,c===void 0?new ta(o,n,t):new ea(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new na(o),oc(e,d)),e=d}}}var os=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Dm(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function ac(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Um=37297,Nm=0;function Bm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function Om(n){let t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(n),i;switch(t===e?i="":t===wr&&e===Er?i="LinearDisplayP3ToLinearSRGB":t===Er&&e===wr&&(i="LinearSRGBToLinearDisplayP3"),n){case si:case Zr:return[i,"LinearTransferOETF"];case $e:case Ra:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bm(n.getShaderSource(t),a)}else return s}function zm(n,t){let e=Om(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function km(n,t){let e;switch(t){case eu:e="Linear";break;case nu:e="Reinhard";break;case iu:e="OptimizedCineon";break;case su:e="ACESFilmic";break;case ou:e="AgX";break;case au:e="Neutral";break;case ru:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Hm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(is).join(`
`)}function Vm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(is).join(`
`)}function Gm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Wm(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function is(n){return n!==""}function cc(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ia(n){return n.replace(Xm,Ym)}var qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ym(n,t){let e=Jt[t];if(e===void 0){let i=qm.get(t);if(i!==void 0)e=Jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ia(e)}var Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uc(n){return n.replace(Zm,Jm)}function Jm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function $m(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Aa?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(t="SHADOWMAP_TYPE_VSM"),t}function Km(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case Yr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function Qm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ta:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function t0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function e0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$m(e),c=Km(e),h=jm(e),d=Qm(e),f=t0(e),m=e.isWebGL2?"":Hm(e),g=Vm(e),v=Gm(r),p=s.createProgram(),u,E,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(is).join(`
`),u.length>0&&(u+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(is).join(`
`),E.length>0&&(E+=`
`)):(u=[dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(is).join(`
`),E=[m,dc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Kn?km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,zm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(is).join(`
`)),a=ia(a),a=cc(a,e),a=hc(a,e),o=ia(o),o=cc(o,e),o=hc(o,e),a=uc(a),o=uc(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let R=x+u+a,F=x+E+o,b=ac(s,s.VERTEX_SHADER,R),w=ac(s,s.FRAGMENT_SHADER,F);s.attachShader(p,b),s.attachShader(p,w),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function B(tt){if(n.debug.checkShaderErrors){let et=s.getProgramInfoLog(p).trim(),I=s.getShaderInfoLog(b).trim(),q=s.getShaderInfoLog(w).trim(),Y=!0,K=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,b,w);else{let J=lc(s,b,"vertex"),j=lc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+tt.name+`
Material Type: `+tt.type+`

Program Info Log: `+et+`
`+J+`
`+j)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(I===""||q==="")&&(K=!1);K&&(tt.diagnostics={runnable:Y,programLog:et,vertexShader:{log:I,prefix:u},fragmentShader:{log:q,prefix:E}})}s.deleteShader(b),s.deleteShader(w),Q=new os(s,p),y=Wm(s,p)}let Q;this.getUniforms=function(){return Q===void 0&&B(this),Q};let y;this.getAttributes=function(){return y===void 0&&B(this),y};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(p,Um)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=w,this}var n0=0,sa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ra(t),e.set(t,i)),i}},ra=class{constructor(t){this.id=n0++,this.code=t,this.usedTimes=0}};function i0(n,t,e,i,s,r,a){let o=new Bs,l=new sa,c=new Set,h=[],d=s.isWebGL2,f=s.logarithmicDepthBuffer,m=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,C,tt,et,I){let q=et.fog,Y=I.geometry,K=y.isMeshStandardMaterial?et.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||K),j=J&&J.mapping===Yr?J.image.height:null,lt=v[y.type];y.precision!==null&&(g=s.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));let ot=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=ot!==void 0?ot.length:0,wt=0;Y.morphAttributes.position!==void 0&&(wt=1),Y.morphAttributes.normal!==void 0&&(wt=2),Y.morphAttributes.color!==void 0&&(wt=3);let G,it,mt,Ut;if(lt){let S=Mn[lt];G=S.vertexShader,it=S.fragmentShader}else G=y.vertexShader,it=y.fragmentShader,l.update(y),mt=l.getVertexShaderID(y),Ut=l.getFragmentShaderID(y);let Mt=n.getRenderTarget(),gt=I.isInstancedMesh===!0,se=I.isBatchedMesh===!0,Nt=!!y.map,N=!!y.matcap,we=!!J,At=!!y.aoMap,Wt=!!y.lightMap,Tt=!!y.bumpMap,Rt=!!y.normalMap,Xt=!!y.displacementMap,zt=!!y.emissiveMap,de=!!y.metalnessMap,A=!!y.roughnessMap,_=y.anisotropy>0,X=y.clearcoat>0,Z=y.iridescence>0,rt=y.sheen>0,$=y.transmission>0,Bt=_&&!!y.anisotropyMap,Ct=X&&!!y.clearcoatMap,ht=X&&!!y.clearcoatNormalMap,dt=X&&!!y.clearcoatRoughnessMap,Dt=Z&&!!y.iridescenceMap,at=Z&&!!y.iridescenceThicknessMap,_e=rt&&!!y.sheenColorMap,Yt=rt&&!!y.sheenRoughnessMap,St=!!y.specularMap,vt=!!y.specularColorMap,xt=!!y.specularIntensityMap,te=$&&!!y.transmissionMap,Ht=$&&!!y.thicknessMap,ue=!!y.gradientMap,P=!!y.alphaMap,ft=y.alphaTest>0,k=!!y.alphaHash,ct=!!y.extensions,pt=Kn;y.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(pt=n.toneMapping);let ne={isWebGL2:d,shaderID:lt,shaderType:y.type,shaderName:y.name,vertexShader:G,fragmentShader:it,defines:y.defines,customVertexShaderID:mt,customFragmentShaderID:Ut,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:se,instancing:gt,instancingColor:gt&&I.instanceColor!==null,instancingMorph:gt&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Mt===null?n.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:si,alphaToCoverage:!!y.alphaToCoverage,map:Nt,matcap:N,envMap:we,envMapMode:we&&J.mapping,envMapCubeUVHeight:j,aoMap:At,lightMap:Wt,bumpMap:Tt,normalMap:Rt,displacementMap:m&&Xt,emissiveMap:zt,normalMapObjectSpace:Rt&&y.normalMapType===xu,normalMapTangentSpace:Rt&&y.normalMapType===Ic,metalnessMap:de,roughnessMap:A,anisotropy:_,anisotropyMap:Bt,clearcoat:X,clearcoatMap:Ct,clearcoatNormalMap:ht,clearcoatRoughnessMap:dt,iridescence:Z,iridescenceMap:Dt,iridescenceThicknessMap:at,sheen:rt,sheenColorMap:_e,sheenRoughnessMap:Yt,specularMap:St,specularColorMap:vt,specularIntensityMap:xt,transmission:$,transmissionMap:te,thicknessMap:Ht,gradientMap:ue,opaque:y.transparent===!1&&y.blending===ss&&y.alphaToCoverage===!1,alphaMap:P,alphaTest:ft,alphaHash:k,combine:y.combine,mapUv:Nt&&p(y.map.channel),aoMapUv:At&&p(y.aoMap.channel),lightMapUv:Wt&&p(y.lightMap.channel),bumpMapUv:Tt&&p(y.bumpMap.channel),normalMapUv:Rt&&p(y.normalMap.channel),displacementMapUv:Xt&&p(y.displacementMap.channel),emissiveMapUv:zt&&p(y.emissiveMap.channel),metalnessMapUv:de&&p(y.metalnessMap.channel),roughnessMapUv:A&&p(y.roughnessMap.channel),anisotropyMapUv:Bt&&p(y.anisotropyMap.channel),clearcoatMapUv:Ct&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ht&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&p(y.sheenRoughnessMap.channel),specularMapUv:St&&p(y.specularMap.channel),specularColorMapUv:vt&&p(y.specularColorMap.channel),specularIntensityMapUv:xt&&p(y.specularIntensityMap.channel),transmissionMapUv:te&&p(y.transmissionMap.channel),thicknessMapUv:Ht&&p(y.thicknessMap.channel),alphaMapUv:P&&p(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Rt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!Y.attributes.uv&&(Nt||P),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:wt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&tt.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Nt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Dn,flipSided:y.side===je,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ct&&y.extensions.derivatives===!0,extensionFragDepth:ct&&y.extensions.fragDepth===!0,extensionDrawBuffers:ct&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ct&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ct&&y.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function E(y){let C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(let tt in y.defines)C.push(tt),C.push(y.defines[tt]);return y.isRawShaderMaterial===!1&&(x(C,y),R(C,y),C.push(n.outputColorSpace)),C.push(y.customProgramCacheKey),C.join()}function x(y,C){y.push(C.precision),y.push(C.outputColorSpace),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.mapUv),y.push(C.alphaMapUv),y.push(C.lightMapUv),y.push(C.aoMapUv),y.push(C.bumpMapUv),y.push(C.normalMapUv),y.push(C.displacementMapUv),y.push(C.emissiveMapUv),y.push(C.metalnessMapUv),y.push(C.roughnessMapUv),y.push(C.anisotropyMapUv),y.push(C.clearcoatMapUv),y.push(C.clearcoatNormalMapUv),y.push(C.clearcoatRoughnessMapUv),y.push(C.iridescenceMapUv),y.push(C.iridescenceThicknessMapUv),y.push(C.sheenColorMapUv),y.push(C.sheenRoughnessMapUv),y.push(C.specularMapUv),y.push(C.specularColorMapUv),y.push(C.specularIntensityMapUv),y.push(C.transmissionMapUv),y.push(C.thicknessMapUv),y.push(C.combine),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numSpotLightMaps),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.numSpotLightShadowsWithMaps),y.push(C.numLightProbes),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection),y.push(C.depthPacking)}function R(y,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),y.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),y.push(o.mask)}function F(y){let C=v[y.type],tt;if(C){let et=Mn[C];tt=Gu.clone(et.uniforms)}else tt=y.uniforms;return tt}function b(y,C){let tt;for(let et=0,I=h.length;et<I;et++){let q=h[et];if(q.cacheKey===C){tt=q,++tt.usedTimes;break}}return tt===void 0&&(tt=new e0(n,C,y,r),h.push(tt)),tt}function w(y){if(--y.usedTimes===0){let C=h.indexOf(y);h[C]=h[h.length-1],h.pop(),y.destroy()}}function B(y){l.remove(y)}function Q(){l.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:F,acquireProgram:b,releaseProgram:w,releaseShaderCache:B,programs:h,dispose:Q}}function s0(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function r0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function fc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function pc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d,f,m,g,v,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=v,u.group=p),t++,u}function o(d,f,m,g,v,p){let u=a(d,f,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,v,p){let u=a(d,f,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||r0),i.length>1&&i.sort(f||fc),s.length>1&&s.sort(f||fc)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function o0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new pc,n.set(i,[a])):s>=r.length?(a=new pc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function a0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Kt};break;case"SpotLight":e={position:new L,direction:new L,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function l0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var c0=0;function h0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function u0(n,t){let e=new a0,i=l0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new ye,o=new ye;function l(h,d){let f=0,m=0,g=0;for(let tt=0;tt<9;tt++)s.probe[tt].set(0,0,0);let v=0,p=0,u=0,E=0,x=0,R=0,F=0,b=0,w=0,B=0,Q=0;h.sort(h0);let y=d===!0?Math.PI:1;for(let tt=0,et=h.length;tt<et;tt++){let I=h[tt],q=I.color,Y=I.intensity,K=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=q.r*Y*y,m+=q.g*Y*y,g+=q.b*Y*y;else if(I.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(I.sh.coefficients[j],Y);Q++}else if(I.isDirectionalLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){let lt=I.shadow,ot=i.get(I);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,s.directionalShadow[v]=ot,s.directionalShadowMap[v]=J,s.directionalShadowMatrix[v]=I.shadow.matrix,R++}s.directional[v]=j,v++}else if(I.isSpotLight){let j=e.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(q).multiplyScalar(Y*y),j.distance=K,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,s.spot[u]=j;let lt=I.shadow;if(I.map&&(s.spotLightMap[w]=I.map,w++,lt.updateMatrices(I),I.castShadow&&B++),s.spotLightMatrix[u]=lt.matrix,I.castShadow){let ot=i.get(I);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,s.spotShadow[u]=ot,s.spotShadowMap[u]=J,b++}u++}else if(I.isRectAreaLight){let j=e.get(I);j.color.copy(q).multiplyScalar(Y),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),s.rectArea[E]=j,E++}else if(I.isPointLight){let j=e.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*y),j.distance=I.distance,j.decay=I.decay,I.castShadow){let lt=I.shadow,ot=i.get(I);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,ot.shadowCameraNear=lt.camera.near,ot.shadowCameraFar=lt.camera.far,s.pointShadow[p]=ot,s.pointShadowMap[p]=J,s.pointShadowMatrix[p]=I.shadow.matrix,F++}s.point[p]=j,p++}else if(I.isHemisphereLight){let j=e.get(I);j.skyColor.copy(I.color).multiplyScalar(Y*y),j.groundColor.copy(I.groundColor).multiplyScalar(Y*y),s.hemi[x]=j,x++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let C=s.hash;(C.directionalLength!==v||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==E||C.hemiLength!==x||C.numDirectionalShadows!==R||C.numPointShadows!==F||C.numSpotShadows!==b||C.numSpotMaps!==w||C.numLightProbes!==Q)&&(s.directional.length=v,s.spot.length=u,s.rectArea.length=E,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=F,s.pointShadowMap.length=F,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=F,s.spotLightMatrix.length=b+w-B,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=Q,C.directionalLength=v,C.pointLength=p,C.spotLength=u,C.rectAreaLength=E,C.hemiLength=x,C.numDirectionalShadows=R,C.numPointShadows=F,C.numSpotShadows=b,C.numSpotMaps=w,C.numLightProbes=Q,s.version=c0++)}function c(h,d){let f=0,m=0,g=0,v=0,p=0,u=d.matrixWorldInverse;for(let E=0,x=h.length;E<x;E++){let R=h[E];if(R.isDirectionalLight){let F=s.directional[f];F.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(u),f++}else if(R.isSpotLight){let F=s.spot[g];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(u),F.direction.setFromMatrixPosition(R.matrixWorld),r.setFromMatrixPosition(R.target.matrixWorld),F.direction.sub(r),F.direction.transformDirection(u),g++}else if(R.isRectAreaLight){let F=s.rectArea[v];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(u),o.identity(),a.copy(R.matrixWorld),a.premultiply(u),o.extractRotation(a),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),F.halfWidth.applyMatrix4(o),F.halfHeight.applyMatrix4(o),v++}else if(R.isPointLight){let F=s.point[m];F.position.setFromMatrixPosition(R.matrixWorld),F.position.applyMatrix4(u),m++}else if(R.isHemisphereLight){let F=s.hemi[p];F.direction.setFromMatrixPosition(R.matrixWorld),F.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function mc(n,t){let e=new u0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(d){i.push(d)}function o(d){s.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function d0(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new mc(n,t),e.set(r,[l])):a>=o.length?(l=new mc(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var oa=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},aa=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`;function m0(n,t,e){let i=new Os,s=new kt,r=new kt,a=new Le,o=new oa({depthPacking:_u}),l=new aa,c={},h=e.maxTextureSize,d={[ti]:je,[je]:ti,[Dn]:Dn},f=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new yn;g.setAttribute("position",new Ne(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new De(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bc;let u=this.type;this.render=function(b,w,B){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;let Q=n.getRenderTarget(),y=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),tt=n.state;tt.setBlending($n),tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);let et=u!==Ln&&this.type===Ln,I=u===Ln&&this.type!==Ln;for(let q=0,Y=b.length;q<Y;q++){let K=b[q],J=K.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let j=J.getFrameExtents();if(s.multiply(j),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,J.mapSize.y=r.y)),J.map===null||et===!0||I===!0){let ot=this.type!==Ln?{minFilter:Ee,magFilter:Ee}:{};J.map!==null&&J.map.dispose(),J.map=new Bn(s.x,s.y,ot),J.map.texture.name=K.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let lt=J.getViewportCount();for(let ot=0;ot<lt;ot++){let nt=J.getViewport(ot);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),tt.viewport(a),J.updateMatrices(K,ot),i=J.getFrustum(),R(w,B,J.camera,K,this.type)}J.isPointLightShadow!==!0&&this.type===Ln&&E(J,B),J.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(Q,y,C)};function E(b,w){let B=t.update(v);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bn(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(w,null,B,f,v,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(w,null,B,m,v,null)}function x(b,w,B,Q){let y=null,C=B.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)y=C;else if(y=B.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let tt=y.uuid,et=w.uuid,I=c[tt];I===void 0&&(I={},c[tt]=I);let q=I[et];q===void 0&&(q=y.clone(),I[et]=q,w.addEventListener("dispose",F)),y=q}if(y.visible=w.visible,y.wireframe=w.wireframe,Q===Ln?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:d[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,B.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let tt=n.properties.get(y);tt.light=B}return y}function R(b,w,B,Q,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Ln)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,b.matrixWorld);let et=t.update(b),I=b.material;if(Array.isArray(I)){let q=et.groups;for(let Y=0,K=q.length;Y<K;Y++){let J=q[Y],j=I[J.materialIndex];if(j&&j.visible){let lt=x(b,j,Q,y);b.onBeforeShadow(n,b,w,B,et,lt,J),n.renderBufferDirect(B,null,et,lt,b,J),b.onAfterShadow(n,b,w,B,et,lt,J)}}}else if(I.visible){let q=x(b,I,Q,y);b.onBeforeShadow(n,b,w,B,et,q,null),n.renderBufferDirect(B,null,et,q,b,null),b.onAfterShadow(n,b,w,B,et,q,null)}}let tt=b.children;for(let et=0,I=tt.length;et<I;et++)R(tt[et],w,B,Q,y)}function F(b){b.target.removeEventListener("dispose",F);for(let B in c){let Q=c[B],y=b.target.uuid;y in Q&&(Q[y].dispose(),delete Q[y])}}}function g0(n,t,e){let i=e.isWebGL2;function s(){let P=!1,ft=new Le,k=null,ct=new Le(0,0,0,0);return{setMask:function(pt){k!==pt&&!P&&(n.colorMask(pt,pt,pt,pt),k=pt)},setLocked:function(pt){P=pt},setClear:function(pt,ne,S,W,U){U===!0&&(pt*=W,ne*=W,S*=W),ft.set(pt,ne,S,W),ct.equals(ft)===!1&&(n.clearColor(pt,ne,S,W),ct.copy(ft))},reset:function(){P=!1,k=null,ct.set(-1,0,0,0)}}}function r(){let P=!1,ft=null,k=null,ct=null;return{setTest:function(pt){pt?gt(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(pt){ft!==pt&&!P&&(n.depthMask(pt),ft=pt)},setFunc:function(pt){if(k!==pt){switch(pt){case qh:n.depthFunc(n.NEVER);break;case Yh:n.depthFunc(n.ALWAYS);break;case Zh:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Jh:n.depthFunc(n.EQUAL);break;case $h:n.depthFunc(n.GEQUAL);break;case Kh:n.depthFunc(n.GREATER);break;case jh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}k=pt}},setLocked:function(pt){P=pt},setClear:function(pt){ct!==pt&&(n.clearDepth(pt),ct=pt)},reset:function(){P=!1,ft=null,k=null,ct=null}}}function a(){let P=!1,ft=null,k=null,ct=null,pt=null,ne=null,S=null,W=null,U=null;return{setTest:function(T){P||(T?gt(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(T){ft!==T&&!P&&(n.stencilMask(T),ft=T)},setFunc:function(T,O,st){(k!==T||ct!==O||pt!==st)&&(n.stencilFunc(T,O,st),k=T,ct=O,pt=st)},setOp:function(T,O,st){(ne!==T||S!==O||W!==st)&&(n.stencilOp(T,O,st),ne=T,S=O,W=st)},setLocked:function(T){P=T},setClear:function(T){U!==T&&(n.clearStencil(T),U=T)},reset:function(){P=!1,ft=null,k=null,ct=null,pt=null,ne=null,S=null,W=null,U=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,v=[],p=null,u=!1,E=null,x=null,R=null,F=null,b=null,w=null,B=null,Q=new Kt(0,0,0),y=0,C=!1,tt=null,et=null,I=null,q=null,Y=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,j=0,lt=n.getParameter(n.VERSION);lt.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(lt)[1]),J=j>=1):lt.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),J=j>=2);let ot=null,nt={},wt=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),it=new Le().fromArray(wt),mt=new Le().fromArray(G);function Ut(P,ft,k,ct){let pt=new Uint8Array(4),ne=n.createTexture();n.bindTexture(P,ne),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let S=0;S<k;S++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ft,0,n.RGBA,1,1,ct,0,n.RGBA,n.UNSIGNED_BYTE,pt):n.texImage2D(ft+S,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,pt);return ne}let Mt={};Mt[n.TEXTURE_2D]=Ut(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=Ut(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Mt[n.TEXTURE_2D_ARRAY]=Ut(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=Ut(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(n.DEPTH_TEST),l.setFunc(vr),Xt(!1),zt(Ya),gt(n.CULL_FACE),Tt($n);function gt(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function se(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Nt(P,ft){return m[P]!==ft?(n.bindFramebuffer(P,ft),m[P]=ft,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ft),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ft)),!0):!1}function N(P,ft){let k=v,ct=!1;if(P){k=g.get(ft),k===void 0&&(k=[],g.set(ft,k));let pt=P.textures;if(k.length!==pt.length||k[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,S=pt.length;ne<S;ne++)k[ne]=n.COLOR_ATTACHMENT0+ne;k.length=pt.length,ct=!0}}else k[0]!==n.BACK&&(k[0]=n.BACK,ct=!0);if(ct)if(e.isWebGL2)n.drawBuffers(k);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(k);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function we(P){return p!==P?(n.useProgram(P),p=P,!0):!1}let At={[yi]:n.FUNC_ADD,[Ph]:n.FUNC_SUBTRACT,[Ih]:n.FUNC_REVERSE_SUBTRACT};if(i)At[Ka]=n.MIN,At[ja]=n.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(At[Ka]=P.MIN_EXT,At[ja]=P.MAX_EXT)}let Wt={[Lh]:n.ZERO,[Dh]:n.ONE,[Uh]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[Hh]:n.SRC_ALPHA_SATURATE,[zh]:n.DST_COLOR,[Bh]:n.DST_ALPHA,[Nh]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[kh]:n.ONE_MINUS_DST_COLOR,[Oh]:n.ONE_MINUS_DST_ALPHA,[Vh]:n.CONSTANT_COLOR,[Gh]:n.ONE_MINUS_CONSTANT_COLOR,[Wh]:n.CONSTANT_ALPHA,[Xh]:n.ONE_MINUS_CONSTANT_ALPHA};function Tt(P,ft,k,ct,pt,ne,S,W,U,T){if(P===$n){u===!0&&(se(n.BLEND),u=!1);return}if(u===!1&&(gt(n.BLEND),u=!0),P!==Fh){if(P!==E||T!==C){if((x!==yi||b!==yi)&&(n.blendEquation(n.FUNC_ADD),x=yi,b=yi),T)switch(P){case ss:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Za:n.blendFunc(n.ONE,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case ss:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Za:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ja:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $a:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}R=null,F=null,w=null,B=null,Q.set(0,0,0),y=0,E=P,C=T}return}pt=pt||ft,ne=ne||k,S=S||ct,(ft!==x||pt!==b)&&(n.blendEquationSeparate(At[ft],At[pt]),x=ft,b=pt),(k!==R||ct!==F||ne!==w||S!==B)&&(n.blendFuncSeparate(Wt[k],Wt[ct],Wt[ne],Wt[S]),R=k,F=ct,w=ne,B=S),(W.equals(Q)===!1||U!==y)&&(n.blendColor(W.r,W.g,W.b,U),Q.copy(W),y=U),E=P,C=!1}function Rt(P,ft){P.side===Dn?se(n.CULL_FACE):gt(n.CULL_FACE);let k=P.side===je;ft&&(k=!k),Xt(k),P.blending===ss&&P.transparent===!1?Tt($n):Tt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);let ct=P.stencilWrite;c.setTest(ct),ct&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),A(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?gt(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(P){tt!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),tt=P)}function zt(P){P!==Ch?(gt(n.CULL_FACE),P!==et&&(P===Ya?n.cullFace(n.BACK):P===Rh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),et=P}function de(P){P!==I&&(J&&n.lineWidth(P),I=P)}function A(P,ft,k){P?(gt(n.POLYGON_OFFSET_FILL),(q!==ft||Y!==k)&&(n.polygonOffset(ft,k),q=ft,Y=k)):se(n.POLYGON_OFFSET_FILL)}function _(P){P?gt(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function X(P){P===void 0&&(P=n.TEXTURE0+K-1),ot!==P&&(n.activeTexture(P),ot=P)}function Z(P,ft,k){k===void 0&&(ot===null?k=n.TEXTURE0+K-1:k=ot);let ct=nt[k];ct===void 0&&(ct={type:void 0,texture:void 0},nt[k]=ct),(ct.type!==P||ct.texture!==ft)&&(ot!==k&&(n.activeTexture(k),ot=k),n.bindTexture(P,ft||Mt[P]),ct.type=P,ct.texture=ft)}function rt(){let P=nt[ot];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function $(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Bt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ct(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Yt(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function St(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(P){it.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),it.copy(P))}function xt(P){mt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),mt.copy(P))}function te(P,ft){let k=d.get(ft);k===void 0&&(k=new WeakMap,d.set(ft,k));let ct=k.get(P);ct===void 0&&(ct=n.getUniformBlockIndex(ft,P.name),k.set(P,ct))}function Ht(P,ft){let ct=d.get(ft).get(P);h.get(ft)!==ct&&(n.uniformBlockBinding(ft,ct,P.__bindingPointIndex),h.set(ft,ct))}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ot=null,nt={},m={},g=new WeakMap,v=[],p=null,u=!1,E=null,x=null,R=null,F=null,b=null,w=null,B=null,Q=new Kt(0,0,0),y=0,C=!1,tt=null,et=null,I=null,q=null,Y=null,it.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:gt,disable:se,bindFramebuffer:Nt,drawBuffers:N,useProgram:we,setBlending:Tt,setMaterial:Rt,setFlipSided:Xt,setCullFace:zt,setLineWidth:de,setPolygonOffset:A,setScissorTest:_,activeTexture:X,bindTexture:Z,unbindTexture:rt,compressedTexImage2D:$,compressedTexImage3D:Bt,texImage2D:Yt,texImage3D:St,updateUBOMapping:te,uniformBlockBinding:Ht,texStorage2D:at,texStorage3D:_e,texSubImage2D:Ct,texSubImage3D:ht,compressedTexSubImage2D:dt,compressedTexSubImage3D:Dt,scissor:vt,viewport:xt,reset:ue}}function _0(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,d=new WeakMap,f,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function v(A,_){return g?new OffscreenCanvas(A,_):Tr("canvas")}function p(A,_,X,Z){let rt=1,$=de(A);if(($.width>Z||$.height>Z)&&(rt=Z/Math.max($.width,$.height)),rt<1||_===!0)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let Bt=_?Jo:Math.floor,Ct=Bt(rt*$.width),ht=Bt(rt*$.height);f===void 0&&(f=v(Ct,ht));let dt=X?v(Ct,ht):f;return dt.width=Ct,dt.height=ht,dt.getContext("2d").drawImage(A,0,0,Ct,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Ct+"x"+ht+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),A;return A}function u(A){let _=de(A);return Fl(_.width)&&Fl(_.height)}function E(A){return o?!1:A.wrapS!==_n||A.wrapT!==_n||A.minFilter!==Ee&&A.minFilter!==Je}function x(A,_){return A.generateMipmaps&&_&&A.minFilter!==Ee&&A.minFilter!==Je}function R(A){n.generateMipmap(A)}function F(A,_,X,Z,rt=!1){if(o===!1)return _;if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=_;if(_===n.RED&&(X===n.FLOAT&&($=n.R32F),X===n.HALF_FLOAT&&($=n.R16F),X===n.UNSIGNED_BYTE&&($=n.R8)),_===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&($=n.R8UI),X===n.UNSIGNED_SHORT&&($=n.R16UI),X===n.UNSIGNED_INT&&($=n.R32UI),X===n.BYTE&&($=n.R8I),X===n.SHORT&&($=n.R16I),X===n.INT&&($=n.R32I)),_===n.RG&&(X===n.FLOAT&&($=n.RG32F),X===n.HALF_FLOAT&&($=n.RG16F),X===n.UNSIGNED_BYTE&&($=n.RG8)),_===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&($=n.RG8UI),X===n.UNSIGNED_SHORT&&($=n.RG16UI),X===n.UNSIGNED_INT&&($=n.RG32UI),X===n.BYTE&&($=n.RG8I),X===n.SHORT&&($=n.RG16I),X===n.INT&&($=n.RG32I)),_===n.RGBA){let Bt=rt?br:ce.getTransfer(Z);X===n.FLOAT&&($=n.RGBA32F),X===n.HALF_FLOAT&&($=n.RGBA16F),X===n.UNSIGNED_BYTE&&($=Bt===fe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function b(A,_,X){return x(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Ee&&A.minFilter!==Je?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function w(A){return A===Ee||A===Qa||A===As?n.NEAREST:n.LINEAR}function B(A){let _=A.target;_.removeEventListener("dispose",B),y(_),_.isVideoTexture&&d.delete(_)}function Q(A){let _=A.target;_.removeEventListener("dispose",Q),tt(_)}function y(A){let _=i.get(A);if(_.__webglInit===void 0)return;let X=A.source,Z=m.get(X);if(Z){let rt=Z[_.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&C(A),Object.keys(Z).length===0&&m.delete(X)}i.remove(A)}function C(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let X=A.source,Z=m.get(X);delete Z[_.__cacheKey],a.memory.textures--}function tt(A){let _=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let rt=0;rt<_.__webglFramebuffer[Z].length;rt++)n.deleteFramebuffer(_.__webglFramebuffer[Z][rt]);else n.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[Z]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let X=A.textures;for(let Z=0,rt=X.length;Z<rt;Z++){let $=i.get(X[Z]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(X[Z])}i.remove(A)}let et=0;function I(){et=0}function q(){let A=et;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),et+=1,A}function Y(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function K(A,_){let X=i.get(A);if(A.isVideoTexture&&Xt(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(X,A,_);return}}e.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+_)}function J(A,_){let X=i.get(A);if(A.version>0&&X.__version!==A.version){mt(X,A,_);return}e.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+_)}function j(A,_){let X=i.get(A);if(A.version>0&&X.__version!==A.version){mt(X,A,_);return}e.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+_)}function lt(A,_){let X=i.get(A);if(A.version>0&&X.__version!==A.version){Ut(X,A,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+_)}let ot={[Wo]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},nt={[Ee]:n.NEAREST,[Qa]:n.NEAREST_MIPMAP_NEAREST,[As]:n.NEAREST_MIPMAP_LINEAR,[Je]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[Mi]:n.LINEAR_MIPMAP_LINEAR},wt={[yu]:n.NEVER,[wu]:n.ALWAYS,[vu]:n.LESS,[Lc]:n.LEQUAL,[Mu]:n.EQUAL,[Eu]:n.GEQUAL,[Su]:n.GREATER,[bu]:n.NOTEQUAL};function G(A,_,X){if(_.type===Un&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Je||_.magFilter===so||_.magFilter===As||_.magFilter===Mi||_.minFilter===Je||_.minFilter===so||_.minFilter===As||_.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),X?(n.texParameteri(A,n.TEXTURE_WRAP_S,ot[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ot[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ot[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,nt[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,nt[_.minFilter])):(n.texParameteri(A,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(A,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(_.wrapS!==_n||_.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(A,n.TEXTURE_MAG_FILTER,w(_.magFilter)),n.texParameteri(A,n.TEXTURE_MIN_FILTER,w(_.minFilter)),_.minFilter!==Ee&&_.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ee||_.minFilter!==As&&_.minFilter!==Mi||_.type===Un&&t.has("OES_texture_float_linear")===!1||o===!1&&_.type===Us&&t.has("OES_texture_half_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function it(A,_){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",B));let Z=_.source,rt=m.get(Z);rt===void 0&&(rt={},m.set(Z,rt));let $=Y(_);if($!==A.__cacheKey){rt[$]===void 0&&(rt[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),rt[$].usedTimes++;let Bt=rt[A.__cacheKey];Bt!==void 0&&(rt[A.__cacheKey].usedTimes--,Bt.usedTimes===0&&C(_)),A.__cacheKey=$,A.__webglTexture=rt[$].texture}return X}function mt(A,_,X){let Z=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=n.TEXTURE_3D);let rt=it(A,_),$=_.source;e.bindTexture(Z,A.__webglTexture,n.TEXTURE0+X);let Bt=i.get($);if($.version!==Bt.__version||rt===!0){e.activeTexture(n.TEXTURE0+X);let Ct=ce.getPrimaries(ce.workingColorSpace),ht=_.colorSpace===Zn?null:ce.getPrimaries(_.colorSpace),dt=_.colorSpace===Zn||Ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Dt=E(_)&&u(_.image)===!1,at=p(_.image,Dt,!1,s.maxTextureSize);at=zt(_,at);let _e=u(at)||o,Yt=r.convert(_.format,_.colorSpace),St=r.convert(_.type),vt=F(_.internalFormat,Yt,St,_.colorSpace,_.isVideoTexture);G(Z,_,_e);let xt,te=_.mipmaps,Ht=o&&_.isVideoTexture!==!0&&vt!==Pc,ue=Bt.__version===void 0||rt===!0,P=$.dataReady,ft=b(_,at,_e);if(_.isDepthTexture)vt=n.DEPTH_COMPONENT,o?_.type===Un?vt=n.DEPTH_COMPONENT32F:_.type===Jn?vt=n.DEPTH_COMPONENT24:_.type===bi?vt=n.DEPTH24_STENCIL8:vt=n.DEPTH_COMPONENT16:_.type===Un&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Ei&&vt===n.DEPTH_COMPONENT&&_.type!==Ca&&_.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=Jn,St=r.convert(_.type)),_.format===cs&&vt===n.DEPTH_COMPONENT&&(vt=n.DEPTH_STENCIL,_.type!==bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=bi,St=r.convert(_.type))),ue&&(Ht?e.texStorage2D(n.TEXTURE_2D,1,vt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,vt,at.width,at.height,0,Yt,St,null));else if(_.isDataTexture)if(te.length>0&&_e){Ht&&ue&&e.texStorage2D(n.TEXTURE_2D,ft,vt,te[0].width,te[0].height);for(let k=0,ct=te.length;k<ct;k++)xt=te[k],Ht?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,xt.width,xt.height,Yt,St,xt.data):e.texImage2D(n.TEXTURE_2D,k,vt,xt.width,xt.height,0,Yt,St,xt.data);_.generateMipmaps=!1}else Ht?(ue&&e.texStorage2D(n.TEXTURE_2D,ft,vt,at.width,at.height),P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,Yt,St,at.data)):e.texImage2D(n.TEXTURE_2D,0,vt,at.width,at.height,0,Yt,St,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ht&&ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,vt,te[0].width,te[0].height,at.depth);for(let k=0,ct=te.length;k<ct;k++)xt=te[k],_.format!==xn?Yt!==null?Ht?P&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xt.width,xt.height,at.depth,Yt,xt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,k,vt,xt.width,xt.height,at.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,k,0,0,0,xt.width,xt.height,at.depth,Yt,St,xt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,k,vt,xt.width,xt.height,at.depth,0,Yt,St,xt.data)}else{Ht&&ue&&e.texStorage2D(n.TEXTURE_2D,ft,vt,te[0].width,te[0].height);for(let k=0,ct=te.length;k<ct;k++)xt=te[k],_.format!==xn?Yt!==null?Ht?P&&e.compressedTexSubImage2D(n.TEXTURE_2D,k,0,0,xt.width,xt.height,Yt,xt.data):e.compressedTexImage2D(n.TEXTURE_2D,k,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,xt.width,xt.height,Yt,St,xt.data):e.texImage2D(n.TEXTURE_2D,k,vt,xt.width,xt.height,0,Yt,St,xt.data)}else if(_.isDataArrayTexture)Ht?(ue&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,vt,at.width,at.height,at.depth),P&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Yt,St,at.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,at.width,at.height,at.depth,0,Yt,St,at.data);else if(_.isData3DTexture)Ht?(ue&&e.texStorage3D(n.TEXTURE_3D,ft,vt,at.width,at.height,at.depth),P&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Yt,St,at.data)):e.texImage3D(n.TEXTURE_3D,0,vt,at.width,at.height,at.depth,0,Yt,St,at.data);else if(_.isFramebufferTexture){if(ue)if(Ht)e.texStorage2D(n.TEXTURE_2D,ft,vt,at.width,at.height);else{let k=at.width,ct=at.height;for(let pt=0;pt<ft;pt++)e.texImage2D(n.TEXTURE_2D,pt,vt,k,ct,0,Yt,St,null),k>>=1,ct>>=1}}else if(te.length>0&&_e){if(Ht&&ue){let k=de(te[0]);e.texStorage2D(n.TEXTURE_2D,ft,vt,k.width,k.height)}for(let k=0,ct=te.length;k<ct;k++)xt=te[k],Ht?P&&e.texSubImage2D(n.TEXTURE_2D,k,0,0,Yt,St,xt):e.texImage2D(n.TEXTURE_2D,k,vt,Yt,St,xt);_.generateMipmaps=!1}else if(Ht){if(ue){let k=de(at);e.texStorage2D(n.TEXTURE_2D,ft,vt,k.width,k.height)}P&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Yt,St,at)}else e.texImage2D(n.TEXTURE_2D,0,vt,Yt,St,at);x(_,_e)&&R(Z),Bt.__version=$.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ut(A,_,X){if(_.image.length!==6)return;let Z=it(A,_),rt=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+X);let $=i.get(rt);if(rt.version!==$.__version||Z===!0){e.activeTexture(n.TEXTURE0+X);let Bt=ce.getPrimaries(ce.workingColorSpace),Ct=_.colorSpace===Zn?null:ce.getPrimaries(_.colorSpace),ht=_.colorSpace===Zn||Bt===Ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let dt=_.isCompressedTexture||_.image[0].isCompressedTexture,Dt=_.image[0]&&_.image[0].isDataTexture,at=[];for(let k=0;k<6;k++)!dt&&!Dt?at[k]=p(_.image[k],!1,!0,s.maxCubemapSize):at[k]=Dt?_.image[k].image:_.image[k],at[k]=zt(_,at[k]);let _e=at[0],Yt=u(_e)||o,St=r.convert(_.format,_.colorSpace),vt=r.convert(_.type),xt=F(_.internalFormat,St,vt,_.colorSpace),te=o&&_.isVideoTexture!==!0,Ht=$.__version===void 0||Z===!0,ue=rt.dataReady,P=b(_,_e,Yt);G(n.TEXTURE_CUBE_MAP,_,Yt);let ft;if(dt){te&&Ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,P,xt,_e.width,_e.height);for(let k=0;k<6;k++){ft=at[k].mipmaps;for(let ct=0;ct<ft.length;ct++){let pt=ft[ct];_.format!==xn?St!==null?te?ue&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,0,0,pt.width,pt.height,St,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,xt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?ue&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,0,0,pt.width,pt.height,St,vt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct,xt,pt.width,pt.height,0,St,vt,pt.data)}}}else{if(ft=_.mipmaps,te&&Ht){ft.length>0&&P++;let k=de(at[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,P,xt,k.width,k.height)}for(let k=0;k<6;k++)if(Dt){te?ue&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,at[k].width,at[k].height,St,vt,at[k].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,xt,at[k].width,at[k].height,0,St,vt,at[k].data);for(let ct=0;ct<ft.length;ct++){let ne=ft[ct].image[k].image;te?ue&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,0,0,ne.width,ne.height,St,vt,ne.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,xt,ne.width,ne.height,0,St,vt,ne.data)}}else{te?ue&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,St,vt,at[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,xt,St,vt,at[k]);for(let ct=0;ct<ft.length;ct++){let pt=ft[ct];te?ue&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,0,0,St,vt,pt.image[k]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+k,ct+1,xt,St,vt,pt.image[k])}}}x(_,Yt)&&R(n.TEXTURE_CUBE_MAP),$.__version=rt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Mt(A,_,X,Z,rt,$){let Bt=r.convert(X.format,X.colorSpace),Ct=r.convert(X.type),ht=F(X.internalFormat,Bt,Ct,X.colorSpace);if(!i.get(_).__hasExternalTextures){let Dt=Math.max(1,_.width>>$),at=Math.max(1,_.height>>$);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,$,ht,Dt,at,_.depth,0,Bt,Ct,null):e.texImage2D(rt,$,ht,Dt,at,0,Bt,Ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),Rt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,rt,i.get(X).__webglTexture,0,Tt(_)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,rt,i.get(X).__webglTexture,$),e.bindFramebuffer(n.FRAMEBUFFER,null)}function gt(A,_,X){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer&&!_.stencilBuffer){let Z=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||Rt(_)){let rt=_.depthTexture;rt&&rt.isDepthTexture&&(rt.type===Un?Z=n.DEPTH_COMPONENT32F:rt.type===Jn&&(Z=n.DEPTH_COMPONENT24));let $=Tt(_);Rt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$,Z,_.width,_.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,$,Z,_.width,_.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,A)}else if(_.depthBuffer&&_.stencilBuffer){let Z=Tt(_);X&&Rt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,_.width,_.height):Rt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,A)}else{let Z=_.textures;for(let rt=0;rt<Z.length;rt++){let $=Z[rt],Bt=r.convert($.format,$.colorSpace),Ct=r.convert($.type),ht=F($.internalFormat,Bt,Ct,$.colorSpace),dt=Tt(_);X&&Rt(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,ht,_.width,_.height):Rt(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,ht,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ht,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let Z=i.get(_.depthTexture).__webglTexture,rt=Tt(_);if(_.depthTexture.format===Ei)Rt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(_.depthTexture.format===cs)Rt(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,rt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Nt(A){let _=i.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");se(_.__webglFramebuffer,A)}else if(X){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]=n.createRenderbuffer(),gt(_.__webglDepthbuffer[Z],A,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),gt(_.__webglDepthbuffer,A,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function N(A,_,X){let Z=i.get(A);_!==void 0&&Mt(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&Nt(A)}function we(A){let _=A.texture,X=i.get(A),Z=i.get(_);A.addEventListener("dispose",Q);let rt=A.textures,$=A.isWebGLCubeRenderTarget===!0,Bt=rt.length>1,Ct=u(A)||o;if(Bt||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=_.version,a.memory.textures++),$){X.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer[ht]=[];for(let dt=0;dt<_.mipmaps.length;dt++)X.__webglFramebuffer[ht][dt]=n.createFramebuffer()}else X.__webglFramebuffer[ht]=n.createFramebuffer()}else{if(o&&_.mipmaps&&_.mipmaps.length>0){X.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)X.__webglFramebuffer[ht]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Bt)if(s.drawBuffers)for(let ht=0,dt=rt.length;ht<dt;ht++){let Dt=i.get(rt[ht]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=n.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&Rt(A)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ht=0;ht<rt.length;ht++){let dt=rt[ht];X.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[ht]);let Dt=r.convert(dt.format,dt.colorSpace),at=r.convert(dt.type),_e=F(dt.internalFormat,Dt,at,dt.colorSpace,A.isXRRenderTarget===!0),Yt=Tt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Yt,_e,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,X.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),gt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),G(n.TEXTURE_CUBE_MAP,_,Ct);for(let ht=0;ht<6;ht++)if(o&&_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Mt(X.__webglFramebuffer[ht][dt],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else Mt(X.__webglFramebuffer[ht],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);x(_,Ct)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Bt){for(let ht=0,dt=rt.length;ht<dt;ht++){let Dt=rt[ht],at=i.get(Dt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),G(n.TEXTURE_2D,Dt,Ct),Mt(X.__webglFramebuffer,A,Dt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),x(Dt,Ct)&&R(n.TEXTURE_2D)}e.unbindTexture()}else{let ht=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ht=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,Z.__webglTexture),G(ht,_,Ct),o&&_.mipmaps&&_.mipmaps.length>0)for(let dt=0;dt<_.mipmaps.length;dt++)Mt(X.__webglFramebuffer[dt],A,_,n.COLOR_ATTACHMENT0,ht,dt);else Mt(X.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,ht,0);x(_,Ct)&&R(ht),e.unbindTexture()}A.depthBuffer&&Nt(A)}function At(A){let _=u(A)||o,X=A.textures;for(let Z=0,rt=X.length;Z<rt;Z++){let $=X[Z];if(x($,_)){let Bt=A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ct=i.get($).__webglTexture;e.bindTexture(Bt,Ct),R(Bt),e.unbindTexture()}}}function Wt(A){if(o&&A.samples>0&&Rt(A)===!1){let _=A.textures,X=A.width,Z=A.height,rt=n.COLOR_BUFFER_BIT,$=[],Bt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(A),ht=_.length>1;if(ht)for(let dt=0;dt<_.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let dt=0;dt<_.length;dt++){$.push(n.COLOR_ATTACHMENT0+dt),A.depthBuffer&&$.push(Bt);let Dt=Ct.__ignoreDepthValues!==void 0?Ct.__ignoreDepthValues:!1;if(Dt===!1&&(A.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]),Dt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Bt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Bt])),ht){let at=i.get(_[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,at,0)}n.blitFramebuffer(0,0,X,Z,0,0,X,Z,rt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<_.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[dt]);let Dt=i.get(_[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}}function Tt(A){return Math.min(s.maxSamples,A.samples)}function Rt(A){let _=i.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Xt(A){let _=a.render.frame;d.get(A)!==_&&(d.set(A,_),A.update())}function zt(A,_){let X=A.colorSpace,Z=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Yo||X!==si&&X!==Zn&&(ce.getTransfer(X)===fe?o===!1?t.has("EXT_sRGB")===!0&&Z===xn?(A.format=Yo,A.minFilter=Je,A.generateMipmaps=!1):_=Cr.sRGBToLinear(_):(Z!==xn||rt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),_}function de(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=J,this.setTexture3D=j,this.setTextureCube=lt,this.rebindTextures=N,this.setupRenderTarget=we,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Rt}function x0(n,t,e){let i=e.isWebGL2;function s(r,a=Zn){let o,l=ce.getTransfer(a);if(r===jn)return n.UNSIGNED_BYTE;if(r===Ac)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Tc)return n.UNSIGNED_SHORT_5_5_5_1;if(r===lu)return n.BYTE;if(r===cu)return n.SHORT;if(r===Ca)return n.UNSIGNED_SHORT;if(r===wc)return n.INT;if(r===Jn)return n.UNSIGNED_INT;if(r===Un)return n.FLOAT;if(r===Us)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===hu)return n.ALPHA;if(r===xn)return n.RGBA;if(r===uu)return n.LUMINANCE;if(r===du)return n.LUMINANCE_ALPHA;if(r===Ei)return n.DEPTH_COMPONENT;if(r===cs)return n.DEPTH_STENCIL;if(r===Yo)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===fu)return n.RED;if(r===Cc)return n.RED_INTEGER;if(r===pu)return n.RG;if(r===Rc)return n.RG_INTEGER;if(r===Fc)return n.RGBA_INTEGER;if(r===ro||r===oo||r===ao||r===lo)if(l===fe)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tl||r===el||r===nl||r===il)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===el)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===il)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Pc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===sl||r===rl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===sl)return l===fe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===rl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l||r===xl||r===yl)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===ol)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===al)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ll)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ul)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===dl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ml)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_l)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===xl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yl)return l===fe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===co||r===vl||r===Ml)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===co)return l===fe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ml)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mu||r===Sl||r===bl||r===El)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===co)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Sl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===El)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bi?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var la=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Te=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},y0={type:"move"},Ds=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(y0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Te;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},v0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`,ca=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let s=new on,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){let i=e.cameras[0].viewport,s=new En({extensions:{fragDepth:!0},vertexShader:v0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new De(new us(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},ha=class extends ei{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,v=new ca,p=e.getContextAttributes(),u=null,E=null,x=[],R=[],F=new kt,b=null,w=new qe;w.layers.enable(1),w.viewport=new Le;let B=new qe;B.layers.enable(2),B.viewport=new Le;let Q=[w,B],y=new la;y.layers.enable(1),y.layers.enable(2);let C=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let it=x[G];return it===void 0&&(it=new Ds,x[G]=it),it.getTargetRaySpace()},this.getControllerGrip=function(G){let it=x[G];return it===void 0&&(it=new Ds,x[G]=it),it.getGripSpace()},this.getHand=function(G){let it=x[G];return it===void 0&&(it=new Ds,x[G]=it),it.getHandSpace()};function et(G){let it=R.indexOf(G.inputSource);if(it===-1)return;let mt=x[it];mt!==void 0&&(mt.update(G.inputSource,G.frame,c||a),mt.dispatchEvent({type:G.type,data:G.inputSource}))}function I(){s.removeEventListener("select",et),s.removeEventListener("selectstart",et),s.removeEventListener("selectend",et),s.removeEventListener("squeeze",et),s.removeEventListener("squeezestart",et),s.removeEventListener("squeezeend",et),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",q);for(let G=0;G<x.length;G++){let it=R[G];it!==null&&(R[G]=null,x[G].disconnect(it))}C=null,tt=null,v.reset(),t.setRenderTarget(u),m=null,f=null,d=null,s=null,E=null,wt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(u=t.getRenderTarget(),s.addEventListener("select",et),s.addEventListener("selectstart",et),s.addEventListener("selectend",et),s.addEventListener("squeeze",et),s.addEventListener("squeezestart",et),s.addEventListener("squeezeend",et),s.addEventListener("end",I),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(F),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let it={antialias:s.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new Bn(m.framebufferWidth,m.framebufferHeight,{format:xn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,mt=null,Ut=null;p.depth&&(Ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?cs:Ei,mt=p.stencil?bi:Jn);let Mt={colorFormat:e.RGBA8,depthFormat:Ut,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(Mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new Bn(f.textureWidth,f.textureHeight,{format:xn,type:jn,depthTexture:new Or(f.textureWidth,f.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0});let gt=t.properties.get(E);gt.__ignoreDepthValues=f.ignoreDepthValues}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(G){for(let it=0;it<G.removed.length;it++){let mt=G.removed[it],Ut=R.indexOf(mt);Ut>=0&&(R[Ut]=null,x[Ut].disconnect(mt))}for(let it=0;it<G.added.length;it++){let mt=G.added[it],Ut=R.indexOf(mt);if(Ut===-1){for(let gt=0;gt<x.length;gt++)if(gt>=R.length){R.push(mt),Ut=gt;break}else if(R[gt]===null){R[gt]=mt,Ut=gt;break}if(Ut===-1)break}let Mt=x[Ut];Mt&&Mt.connect(mt)}}let Y=new L,K=new L;function J(G,it,mt){Y.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(mt.matrixWorld);let Ut=Y.distanceTo(K),Mt=it.projectionMatrix.elements,gt=mt.projectionMatrix.elements,se=Mt[14]/(Mt[10]-1),Nt=Mt[14]/(Mt[10]+1),N=(Mt[9]+1)/Mt[5],we=(Mt[9]-1)/Mt[5],At=(Mt[8]-1)/Mt[0],Wt=(gt[8]+1)/gt[0],Tt=se*At,Rt=se*Wt,Xt=Ut/(-At+Wt),zt=Xt*-At;it.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(zt),G.translateZ(Xt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();let de=se+Xt,A=Nt+Xt,_=Tt-zt,X=Rt+(Ut-zt),Z=N*Nt/A*de,rt=we*Nt/A*de;G.projectionMatrix.makePerspective(_,X,Z,rt,de,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function j(G,it){it===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(it.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),y.near=B.near=w.near=G.near,y.far=B.far=w.far=G.far,(C!==y.near||tt!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,tt=y.far,w.near=C,w.far=tt,B.near=C,B.far=tt,w.updateProjectionMatrix(),B.updateProjectionMatrix(),G.updateProjectionMatrix());let it=G.parent,mt=y.cameras;j(y,it);for(let Ut=0;Ut<mt.length;Ut++)j(mt[Ut],it);mt.length===2?J(y,w,B):y.projectionMatrix.copy(w.projectionMatrix),lt(G,y,it)};function lt(G,it,mt){mt===null?G.matrix.copy(it.matrixWorld):(G.matrix.copy(mt.matrixWorld),G.matrix.invert(),G.matrix.multiply(it.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(it.projectionMatrix),G.projectionMatrixInverse.copy(it.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Zo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(G){l=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null};let ot=null;function nt(G,it){if(h=it.getViewerPose(c||a),g=it,h!==null){let mt=h.views;m!==null&&(t.setRenderTargetFramebuffer(E,m.framebuffer),t.setRenderTarget(E));let Ut=!1;mt.length!==y.cameras.length&&(y.cameras.length=0,Ut=!0);for(let gt=0;gt<mt.length;gt++){let se=mt[gt],Nt=null;if(m!==null)Nt=m.getViewport(se);else{let we=d.getViewSubImage(f,se);Nt=we.viewport,gt===0&&(t.setRenderTargetTextures(E,we.colorTexture,f.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(E))}let N=Q[gt];N===void 0&&(N=new qe,N.layers.enable(gt),N.viewport=new Le,Q[gt]=N),N.matrix.fromArray(se.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(se.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),gt===0&&(y.matrix.copy(N.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Ut===!0&&y.cameras.push(N)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")){let gt=d.getDepthInformation(mt[0]);gt&&gt.isValid&&gt.texture&&v.init(t,gt,s.renderState)}}for(let mt=0;mt<x.length;mt++){let Ut=R[mt],Mt=x[mt];Ut!==null&&Mt!==void 0&&Mt.update(Ut,it,c||a)}v.render(t,y),ot&&ot(G,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let wt=new Oc;wt.setAnimationLoop(nt),this.setAnimationLoop=function(G){ot=G},this.dispose=function(){}}},_i=new bn,S0=new ye;function b0(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Bc(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,x,R){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,R)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,E,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===je&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===je&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u),x=E.envMap,R=E.envMapRotation;if(x&&(p.envMap.value=x,_i.copy(R),_i.x*=-1,_i.y*=-1,_i.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),p.envMapRotation.value.setFromMatrix4(S0.makeRotationFromEuler(_i)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let F=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*F,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===je&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E0(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){let R=x.program;i.uniformBlockBinding(E,R)}function c(E,x){let R=s[E.id];R===void 0&&(g(E),R=h(E),s[E.id]=R,E.addEventListener("dispose",p));let F=x.program;i.updateUBOMapping(E,F);let b=t.render.frame;r[E.id]!==b&&(f(E),r[E.id]=b)}function h(E){let x=d();E.__bindingPointIndex=x;let R=n.createBuffer(),F=E.__size,b=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,F,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,R),R}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let x=s[E.id],R=E.uniforms,F=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let b=0,w=R.length;b<w;b++){let B=Array.isArray(R[b])?R[b]:[R[b]];for(let Q=0,y=B.length;Q<y;Q++){let C=B[Q];if(m(C,b,Q,F)===!0){let tt=C.__offset,et=Array.isArray(C.value)?C.value:[C.value],I=0;for(let q=0;q<et.length;q++){let Y=et[q],K=v(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,tt+I,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,tt,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,x,R,F){let b=E.value,w=x+"_"+R;if(F[w]===void 0)return typeof b=="number"||typeof b=="boolean"?F[w]=b:F[w]=b.clone(),!0;{let B=F[w];if(typeof b=="number"||typeof b=="boolean"){if(B!==b)return F[w]=b,!0}else if(B.equals(b)===!1)return B.copy(b),!0}return!1}function g(E){let x=E.uniforms,R=0,F=16;for(let w=0,B=x.length;w<B;w++){let Q=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,C=Q.length;y<C;y++){let tt=Q[y],et=Array.isArray(tt.value)?tt.value:[tt.value];for(let I=0,q=et.length;I<q;I++){let Y=et[I],K=v(Y),J=R%F;J!==0&&F-J<K.boundary&&(R+=F-J),tt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=R,R+=K.storage}}}let b=R%F;return b>0&&(R+=F-b),E.__size=R,E.__cache={},this}function v(E){let x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){let x=E.target;x.removeEventListener("dispose",p);let R=a.indexOf(x.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let E in s)n.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}var ds=class{constructor(t={}){let{canvas:e=Tu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this._useLegacyLights=!1,this.toneMapping=Kn,this.toneMappingExposure=1;let x=this,R=!1,F=0,b=0,w=null,B=-1,Q=null,y=new Le,C=new Le,tt=null,et=new Kt(0),I=0,q=e.width,Y=e.height,K=1,J=null,j=null,lt=new Le(0,0,q,Y),ot=new Le(0,0,q,Y),nt=!1,wt=new Os,G=!1,it=!1,mt=null,Ut=new ye,Mt=new kt,gt=new L,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return w===null?K:1}let N=i;function we(M,D){for(let H=0;H<M.length;H++){let V=M[H],z=e.getContext(V,D);if(z!==null)return z}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wa}`),e.addEventListener("webglcontextlost",ue,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){let D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),N=we(D,M),N===null)throw we(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let At,Wt,Tt,Rt,Xt,zt,de,A,_,X,Z,rt,$,Bt,Ct,ht,dt,Dt,at,_e,Yt,St,vt,xt;function te(){At=new kp(N),Wt=new Dp(N,At,t),At.init(Wt),St=new x0(N,At,Wt),Tt=new g0(N,At,Wt),Rt=new Gp(N),Xt=new s0,zt=new _0(N,At,Tt,Xt,Wt,St,Rt),de=new Np(x),A=new zp(x),_=new Zu(N,Wt),vt=new Ip(N,At,_,Wt),X=new Hp(N,_,Rt,vt),Z=new Yp(N,X,_,Rt),at=new qp(N,Wt,zt),ht=new Up(Xt),rt=new i0(x,de,A,At,Wt,vt,ht),$=new b0(x,Xt),Bt=new o0,Ct=new d0(At,Wt),Dt=new Pp(x,de,A,Tt,Z,f,l),dt=new m0(x,Z,Wt),xt=new E0(N,Rt,Wt,Tt),_e=new Lp(N,At,Rt,Wt),Yt=new Vp(N,At,Rt,Wt),Rt.programs=rt.programs,x.capabilities=Wt,x.extensions=At,x.properties=Xt,x.renderLists=Bt,x.shadowMap=dt,x.state=Tt,x.info=Rt}te();let Ht=new ha(x,N);this.xr=Ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=At.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=At.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(M){M!==void 0&&(K=M,this.setSize(q,Y,!1))},this.getSize=function(M){return M.set(q,Y)},this.setSize=function(M,D,H=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,Y=D,e.width=Math.floor(M*K),e.height=Math.floor(D*K),H===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(q*K,Y*K).floor()},this.setDrawingBufferSize=function(M,D,H){q=M,Y=D,K=H,e.width=Math.floor(M*H),e.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(y)},this.getViewport=function(M){return M.copy(lt)},this.setViewport=function(M,D,H,V){M.isVector4?lt.set(M.x,M.y,M.z,M.w):lt.set(M,D,H,V),Tt.viewport(y.copy(lt).multiplyScalar(K).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,D,H,V){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,D,H,V),Tt.scissor(C.copy(ot).multiplyScalar(K).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){Tt.setScissorTest(nt=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(M=!0,D=!0,H=!0){let V=0;if(M){let z=!1;if(w!==null){let _t=w.texture.format;z=_t===Fc||_t===Rc||_t===Cc}if(z){let _t=w.texture.type,bt=_t===jn||_t===Jn||_t===Ca||_t===bi||_t===Ac||_t===Tc,Lt=Dt.getClearColor(),Ot=Dt.getClearAlpha(),ee=Lt.r,Vt=Lt.g,qt=Lt.b;bt?(m[0]=ee,m[1]=Vt,m[2]=qt,m[3]=Ot,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=ee,g[1]=Vt,g[2]=qt,g[3]=Ot,N.clearBufferiv(N.COLOR,0,g))}else V|=N.COLOR_BUFFER_BIT}D&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ue,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),Bt.dispose(),Ct.dispose(),Xt.dispose(),de.dispose(),A.dispose(),Z.dispose(),vt.dispose(),xt.dispose(),rt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",U),Ht.removeEventListener("sessionend",T),mt&&(mt.dispose(),mt=null),O.stop()};function ue(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let M=Rt.autoReset,D=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,z=dt.type;te(),Rt.autoReset=M,dt.enabled=D,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=z}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function k(M){let D=M.target;D.removeEventListener("dispose",k),ct(D)}function ct(M){pt(M),Xt.remove(M)}function pt(M){let D=Xt.get(M).programs;D!==void 0&&(D.forEach(function(H){rt.releaseProgram(H)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,V,z,_t){D===null&&(D=se);let bt=z.isMesh&&z.matrixWorld.determinant()<0,Lt=ci(M,D,H,V,z);Tt.setMaterial(V,bt);let Ot=H.index,ee=1;if(V.wireframe===!0){if(Ot=X.getWireframeAttribute(H),Ot===void 0)return;ee=2}let Vt=H.drawRange,qt=H.attributes.position,ve=Vt.start*ee,en=(Vt.start+Vt.count)*ee;_t!==null&&(ve=Math.max(ve,_t.start*ee),en=Math.min(en,(_t.start+_t.count)*ee)),Ot!==null?(ve=Math.max(ve,0),en=Math.min(en,Ot.count)):qt!=null&&(ve=Math.max(ve,0),en=Math.min(en,qt.count));let Pe=en-ve;if(Pe<0||Pe===1/0)return;vt.setup(z,V,Lt,H,Ot);let An,xe=_e;if(Ot!==null&&(An=_.get(Ot),xe=Yt,xe.setIndex(An)),z.isMesh)V.wireframe===!0?(Tt.setLineWidth(V.wireframeLinewidth*Nt()),xe.setMode(N.LINES)):xe.setMode(N.TRIANGLES);else if(z.isLine){let Zt=V.linewidth;Zt===void 0&&(Zt=1),Tt.setLineWidth(Zt*Nt()),z.isLineSegments?xe.setMode(N.LINES):z.isLineLoop?xe.setMode(N.LINE_LOOP):xe.setMode(N.LINE_STRIP)}else z.isPoints?xe.setMode(N.POINTS):z.isSprite&&xe.setMode(N.TRIANGLES);if(z.isBatchedMesh)xe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)xe.renderInstances(ve,Pe,z.count);else if(H.isInstancedBufferGeometry){let Zt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,to=Math.min(H.instanceCount,Zt);xe.renderInstances(ve,Pe,to)}else xe.render(ve,Pe)};function ne(M,D,H){M.transparent===!0&&M.side===Dn&&M.forceSinglePass===!1?(M.side=je,M.needsUpdate=!0,Se(M,D,H),M.side=ti,M.needsUpdate=!0,Se(M,D,H),M.side=Dn):Se(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),p=Ct.get(H),p.init(),E.push(p),H.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(x._useLegacyLights);let V=new Set;return M.traverse(function(z){let _t=z.material;if(_t)if(Array.isArray(_t))for(let bt=0;bt<_t.length;bt++){let Lt=_t[bt];ne(Lt,H,z),V.add(Lt)}else ne(_t,H,z),V.add(_t)}),E.pop(),p=null,V},this.compileAsync=function(M,D,H=null){let V=this.compile(M,D,H);return new Promise(z=>{function _t(){if(V.forEach(function(bt){Xt.get(bt).currentProgram.isReady()&&V.delete(bt)}),V.size===0){z(M);return}setTimeout(_t,10)}At.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let S=null;function W(M){S&&S(M)}function U(){O.stop()}function T(){O.start()}let O=new Oc;O.setAnimationLoop(W),typeof self!="undefined"&&O.setContext(self),this.setAnimationLoop=function(M){S=M,Ht.setAnimationLoop(M),M===null?O.stop():O.start()},Ht.addEventListener("sessionstart",U),Ht.addEventListener("sessionend",T),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(D),D=Ht.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,D,w),p=Ct.get(M,E.length),p.init(),E.push(p),Ut.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),wt.setFromProjectionMatrix(Ut),it=this.localClippingEnabled,G=ht.init(this.clippingPlanes,it),v=Bt.get(M,u.length),v.init(),u.push(v),st(M,D,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(J,j),this.info.render.frame++,G===!0&&ht.beginShadows();let H=p.state.shadowsArray;if(dt.render(H,M,D),G===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1)&&Dt.render(v,M),p.setupLights(x._useLegacyLights),D.isArrayCamera){let V=D.cameras;for(let z=0,_t=V.length;z<_t;z++){let bt=V[z];It(v,M,bt,bt.viewport)}}else It(v,M,D);w!==null&&(zt.updateMultisampleRenderTarget(w),zt.updateRenderTargetMipmap(w)),M.isScene===!0&&M.onAfterRender(x,M,D),vt.resetDefaultState(),B=-1,Q=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function st(M,D,H,V){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||wt.intersectsSprite(M)){V&&gt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ut);let bt=Z.update(M),Lt=M.material;Lt.visible&&v.push(M,bt,Lt,H,gt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||wt.intersectsObject(M))){let bt=Z.update(M),Lt=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),gt.copy(M.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),gt.copy(bt.boundingSphere.center)),gt.applyMatrix4(M.matrixWorld).applyMatrix4(Ut)),Array.isArray(Lt)){let Ot=bt.groups;for(let ee=0,Vt=Ot.length;ee<Vt;ee++){let qt=Ot[ee],ve=Lt[qt.materialIndex];ve&&ve.visible&&v.push(M,bt,ve,H,gt.z,qt)}}else Lt.visible&&v.push(M,bt,Lt,H,gt.z,null)}}let _t=M.children;for(let bt=0,Lt=_t.length;bt<Lt;bt++)st(_t[bt],D,H,V)}function It(M,D,H,V){let z=M.opaque,_t=M.transmissive,bt=M.transparent;p.setupLightsView(H),G===!0&&ht.setGlobalState(x.clippingPlanes,H),_t.length>0&&yt(z,_t,D,H),V&&Tt.viewport(y.copy(V)),z.length>0&&Ft(z,D,H),_t.length>0&&Ft(_t,D,H),bt.length>0&&Ft(bt,D,H),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function yt(M,D,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;let _t=Wt.isWebGL2;mt===null&&(mt=new Bn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")?Us:jn,minFilter:Mi,samples:_t?4:0})),x.getDrawingBufferSize(Mt),_t?mt.setSize(Mt.x,Mt.y):mt.setSize(Jo(Mt.x),Jo(Mt.y));let bt=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(et),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();let Lt=x.toneMapping;x.toneMapping=Kn,Ft(M,H,V),zt.updateMultisampleRenderTarget(mt),zt.updateRenderTargetMipmap(mt);let Ot=!1;for(let ee=0,Vt=D.length;ee<Vt;ee++){let qt=D[ee],ve=qt.object,en=qt.geometry,Pe=qt.material,An=qt.group;if(Pe.side===Dn&&ve.layers.test(V.layers)){let xe=Pe.side;Pe.side=je,Pe.needsUpdate=!0,Et(ve,H,V,en,Pe,An),Pe.side=xe,Pe.needsUpdate=!0,Ot=!0}}Ot===!0&&(zt.updateMultisampleRenderTarget(mt),zt.updateRenderTargetMipmap(mt)),x.setRenderTarget(bt),x.setClearColor(et,I),x.toneMapping=Lt}function Ft(M,D,H){let V=D.isScene===!0?D.overrideMaterial:null;for(let z=0,_t=M.length;z<_t;z++){let bt=M[z],Lt=bt.object,Ot=bt.geometry,ee=V===null?bt.material:V,Vt=bt.group;Lt.layers.test(H.layers)&&Et(Lt,D,H,Ot,ee,Vt)}}function Et(M,D,H,V,z,_t){M.onBeforeRender(x,D,H,V,z,_t),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(x,D,H,V,M,_t),z.transparent===!0&&z.side===Dn&&z.forceSinglePass===!1?(z.side=je,z.needsUpdate=!0,x.renderBufferDirect(H,D,V,z,M,_t),z.side=ti,z.needsUpdate=!0,x.renderBufferDirect(H,D,V,z,M,_t),z.side=Dn):x.renderBufferDirect(H,D,V,z,M,_t),M.onAfterRender(x,D,H,V,z,_t)}function Se(M,D,H){D.isScene!==!0&&(D=se);let V=Xt.get(M),z=p.state.lights,_t=p.state.shadowsArray,bt=z.state.version,Lt=rt.getParameters(M,z.state,_t,D,H),Ot=rt.getProgramCacheKey(Lt),ee=V.programs;V.environment=M.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(M.isMeshStandardMaterial?A:de).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,ee===void 0&&(M.addEventListener("dispose",k),ee=new Map,V.programs=ee);let Vt=ee.get(Ot);if(Vt!==void 0){if(V.currentProgram===Vt&&V.lightsStateVersion===bt)return ln(M,Lt),Vt}else Lt.uniforms=rt.getUniforms(M),M.onBuild(H,Lt,x),M.onBeforeCompile(Lt,x),Vt=rt.acquireProgram(Lt,Ot),ee.set(Ot,Vt),V.uniforms=Lt.uniforms;let qt=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qt.clippingPlanes=ht.uniform),ln(M,Lt),V.needsLights=Ue(M),V.lightsStateVersion=bt,V.needsLights&&(qt.ambientLightColor.value=z.state.ambient,qt.lightProbe.value=z.state.probe,qt.directionalLights.value=z.state.directional,qt.directionalLightShadows.value=z.state.directionalShadow,qt.spotLights.value=z.state.spot,qt.spotLightShadows.value=z.state.spotShadow,qt.rectAreaLights.value=z.state.rectArea,qt.ltc_1.value=z.state.rectAreaLTC1,qt.ltc_2.value=z.state.rectAreaLTC2,qt.pointLights.value=z.state.point,qt.pointLightShadows.value=z.state.pointShadow,qt.hemisphereLights.value=z.state.hemi,qt.directionalShadowMap.value=z.state.directionalShadowMap,qt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,qt.spotShadowMap.value=z.state.spotShadowMap,qt.spotLightMatrix.value=z.state.spotLightMatrix,qt.spotLightMap.value=z.state.spotLightMap,qt.pointShadowMap.value=z.state.pointShadowMap,qt.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Vt,V.uniformsList=null,Vt}function Ae(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=os.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function ln(M,D){let H=Xt.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function ci(M,D,H,V,z){D.isScene!==!0&&(D=se),zt.resetTextureUnits();let _t=D.fog,bt=V.isMeshStandardMaterial?D.environment:null,Lt=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:si,Ot=(V.isMeshStandardMaterial?A:de).get(V.envMap||bt),ee=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Vt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),qt=!!H.morphAttributes.position,ve=!!H.morphAttributes.normal,en=!!H.morphAttributes.color,Pe=Kn;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pe=x.toneMapping);let An=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,xe=An!==void 0?An.length:0,Zt=Xt.get(V),to=p.state.lights;if(G===!0&&(it===!0||M!==Q)){let cn=M===Q&&V.id===B;ht.setState(V,M,cn)}let pe=!1;V.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==to.state.version||Zt.outputColorSpace!==Lt||z.isBatchedMesh&&Zt.batching===!1||!z.isBatchedMesh&&Zt.batching===!0||z.isInstancedMesh&&Zt.instancing===!1||!z.isInstancedMesh&&Zt.instancing===!0||z.isSkinnedMesh&&Zt.skinning===!1||!z.isSkinnedMesh&&Zt.skinning===!0||z.isInstancedMesh&&Zt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Zt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Zt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Zt.instancingMorph===!1&&z.morphTexture!==null||Zt.envMap!==Ot||V.fog===!0&&Zt.fog!==_t||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==ht.numPlanes||Zt.numIntersection!==ht.numIntersection)||Zt.vertexAlphas!==ee||Zt.vertexTangents!==Vt||Zt.morphTargets!==qt||Zt.morphNormals!==ve||Zt.morphColors!==en||Zt.toneMapping!==Pe||Wt.isWebGL2===!0&&Zt.morphTargetsCount!==xe)&&(pe=!0):(pe=!0,Zt.__version=V.version);let hi=Zt.currentProgram;pe===!0&&(hi=Se(V,D,z));let Ga=!1,ws=!1,eo=!1,Oe=hi.getUniforms(),ui=Zt.uniforms;if(Tt.useProgram(hi.program)&&(Ga=!0,ws=!0,eo=!0),V.id!==B&&(B=V.id,ws=!0),Ga||Q!==M){Oe.setValue(N,"projectionMatrix",M.projectionMatrix),Oe.setValue(N,"viewMatrix",M.matrixWorldInverse);let cn=Oe.map.cameraPosition;cn!==void 0&&cn.setValue(N,gt.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&Oe.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Oe.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,ws=!0,eo=!0)}if(z.isSkinnedMesh){Oe.setOptional(N,z,"bindMatrix"),Oe.setOptional(N,z,"bindMatrixInverse");let cn=z.skeleton;cn&&(Wt.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),Oe.setValue(N,"boneTexture",cn.boneTexture,zt)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Oe.setOptional(N,z,"batchingTexture"),Oe.setValue(N,"batchingTexture",z._matricesTexture,zt));let no=H.morphAttributes;if((no.position!==void 0||no.normal!==void 0||no.color!==void 0&&Wt.isWebGL2===!0)&&at.update(z,H,hi),(ws||Zt.receiveShadow!==z.receiveShadow)&&(Zt.receiveShadow=z.receiveShadow,Oe.setValue(N,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ui.envMap.value=Ot,ui.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ws&&(Oe.setValue(N,"toneMappingExposure",x.toneMappingExposure),Zt.needsLights&&Ze(ui,eo),_t&&V.fog===!0&&$.refreshFogUniforms(ui,_t),$.refreshMaterialUniforms(ui,V,K,Y,mt),os.upload(N,Ae(Zt),ui,zt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(os.upload(N,Ae(Zt),ui,zt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Oe.setValue(N,"center",z.center),Oe.setValue(N,"modelViewMatrix",z.modelViewMatrix),Oe.setValue(N,"normalMatrix",z.normalMatrix),Oe.setValue(N,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let cn=V.uniformsGroups;for(let io=0,Sh=cn.length;io<Sh;io++)if(Wt.isWebGL2){let Wa=cn[io];xt.update(Wa,hi),xt.bind(Wa,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function Ze(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ue(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(M,D,H){Xt.get(M.texture).__webglTexture=D,Xt.get(M.depthTexture).__webglTexture=H;let V=Xt.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let H=Xt.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){w=M,F=D,b=H;let V=!0,z=null,_t=!1,bt=!1;if(M){let Ot=Xt.get(M);Ot.__useDefaultFramebuffer!==void 0?(Tt.bindFramebuffer(N.FRAMEBUFFER,null),V=!1):Ot.__webglFramebuffer===void 0?zt.setupRenderTarget(M):Ot.__hasExternalTextures&&zt.rebindTextures(M,Xt.get(M.texture).__webglTexture,Xt.get(M.depthTexture).__webglTexture);let ee=M.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(bt=!0);let Vt=Xt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Vt[D])?z=Vt[D][H]:z=Vt[D],_t=!0):Wt.isWebGL2&&M.samples>0&&zt.useMultisampledRTT(M)===!1?z=Xt.get(M).__webglMultisampledFramebuffer:Array.isArray(Vt)?z=Vt[H]:z=Vt,y.copy(M.viewport),C.copy(M.scissor),tt=M.scissorTest}else y.copy(lt).multiplyScalar(K).floor(),C.copy(ot).multiplyScalar(K).floor(),tt=nt;if(Tt.bindFramebuffer(N.FRAMEBUFFER,z)&&Wt.drawBuffers&&V&&Tt.drawBuffers(M,z),Tt.viewport(y),Tt.scissor(C),Tt.setScissorTest(tt),_t){let Ot=Xt.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ot.__webglTexture,H)}else if(bt){let Ot=Xt.get(M.texture),ee=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,H||0,ee)}B=-1},this.readRenderTargetPixels=function(M,D,H,V,z,_t,bt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Xt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&bt!==void 0&&(Lt=Lt[bt]),Lt){Tt.bindFramebuffer(N.FRAMEBUFFER,Lt);try{let Ot=M.texture,ee=Ot.format,Vt=Ot.type;if(ee!==xn&&St.convert(ee)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let qt=Vt===Us&&(At.has("EXT_color_buffer_half_float")||Wt.isWebGL2&&At.has("EXT_color_buffer_float"));if(Vt!==jn&&St.convert(Vt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Vt===Un&&(Wt.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-V&&H>=0&&H<=M.height-z&&N.readPixels(D,H,V,z,St.convert(ee),St.convert(Vt),_t)}finally{let Ot=w!==null?Xt.get(w).__webglFramebuffer:null;Tt.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(M,D,H=0){let V=Math.pow(2,-H),z=Math.floor(D.image.width*V),_t=Math.floor(D.image.height*V);zt.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,M.x,M.y,z,_t),Tt.unbindTexture()},this.copyTextureToTexture=function(M,D,H,V=0){let z=D.image.width,_t=D.image.height,bt=St.convert(H.format),Lt=St.convert(H.type);zt.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,V,M.x,M.y,z,_t,bt,Lt,D.image.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,V,M.x,M.y,D.mipmaps[0].width,D.mipmaps[0].height,bt,D.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,V,M.x,M.y,bt,Lt,D.image),V===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H,V,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let _t=Math.round(M.max.x-M.min.x),bt=Math.round(M.max.y-M.min.y),Lt=M.max.z-M.min.z+1,Ot=St.convert(V.format),ee=St.convert(V.type),Vt;if(V.isData3DTexture)zt.setTexture3D(V,0),Vt=N.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)zt.setTexture2DArray(V,0),Vt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);let qt=N.getParameter(N.UNPACK_ROW_LENGTH),ve=N.getParameter(N.UNPACK_IMAGE_HEIGHT),en=N.getParameter(N.UNPACK_SKIP_PIXELS),Pe=N.getParameter(N.UNPACK_SKIP_ROWS),An=N.getParameter(N.UNPACK_SKIP_IMAGES),xe=H.isCompressedTexture?H.mipmaps[z]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(Vt,z,D.x,D.y,D.z,_t,bt,Lt,Ot,ee,xe.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Vt,z,D.x,D.y,D.z,_t,bt,Lt,Ot,xe.data):N.texSubImage3D(Vt,z,D.x,D.y,D.z,_t,bt,Lt,Ot,ee,xe),N.pixelStorei(N.UNPACK_ROW_LENGTH,qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve),N.pixelStorei(N.UNPACK_SKIP_PIXELS,en),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,An),z===0&&V.generateMipmaps&&N.generateMipmap(Vt),Tt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?zt.setTextureCube(M,0):M.isData3DTexture?zt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?zt.setTexture2DArray(M,0):zt.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){F=0,b=0,w=null,Tt.reset(),vt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Ra?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Zr?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ua=class extends ds{};ua.prototype.isWebGL1Renderer=!0;var zr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Hr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Uc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},We=new L,zs=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Sn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=le(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Sn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Sn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Sn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Sn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),i=le(i,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ne(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fs=class extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ji,Ps=new L,Qi=new L,ts=new L,es=new kt,Is=new kt,Wc=new ye,gr=new L,Ls=new L,_r=new L,gc=new kt,Oo=new kt,_c=new kt,ks=class extends He{constructor(t=new fs){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new yn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Hr(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new zs(i,3,0,!1)),ji.setAttribute("uv",new zs(i,2,3,!1))}this.geometry=ji,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),Wc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;xr(gr.set(-.5,-.5,0),ts,a,Qi,s,r),xr(Ls.set(.5,-.5,0),ts,a,Qi,s,r),xr(_r.set(.5,.5,0),ts,a,Qi,s,r),gc.set(0,0),Oo.set(1,0),_c.set(1,1);let o=t.ray.intersectTriangle(gr,Ls,_r,!1,Ps);if(o===null&&(xr(Ls.set(-.5,.5,0),ts,a,Qi,s,r),Oo.set(0,1),o=t.ray.intersectTriangle(gr,_r,Ls,!1,Ps),o===null))return;let l=t.ray.origin.distanceTo(Ps);l<t.near||l>t.far||e.push({distance:l,point:Ps.clone(),uv:Si.getInterpolation(Ps,gr,Ls,_r,gc,Oo,_c,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function xr(n,t,e,i,s,r){es.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Is.x=r*es.x-s*es.y,Is.y=s*es.x+r*es.y):Is.copy(es),n.copy(t),n.x+=Is.x,n.y+=Is.y,n.applyMatrix4(Wc)}var ps=class extends on{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hs=class n extends yn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,f=(e-t)/s,m=new L,g=new kt;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let u=r+p/i*a;m.x=d*Math.cos(u),m.y=d*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){let p=v*(i+1);for(let u=0;u<i;u++){let E=u+p,x=E,R=E+i+1,F=E+i+2,b=E+1;o.push(x,R,b),o.push(R,F,b)}}this.setIndex(o),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(c,3)),this.setAttribute("uv",new rn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ti=class extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Ta,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function yr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function w0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ms=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},da=class extends ms{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wl,endingEnd:wl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Al:r=t,o=2*e-i;break;case Tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Al:a=t,l=2*i-e;break;case Tl:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),v=g*g,p=v*g,u=-f*p+2*f*v-f*g,E=(1+f)*p+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-m)*p+(1.5+m)*v+.5*g,R=m*p-m*v;for(let F=0;F!==o;++F)r[F]=u*a[h+F]+E*a[c+F]+x*a[l+F]+R*a[d+F];return r}},fa=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},pa=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yr(e,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:yr(t.times,Array),values:yr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new pa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new da(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Mr:e=this.InterpolantFactoryMethodDiscrete;break;case Sr:e=this.InterpolantFactoryMethodLinear;break;case ho:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&w0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ho,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,f=d-i,m=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[f+g]||v!==e[m+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,f=a*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Sr;var Ci=class extends vn{};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Mr;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends vn{};ma.prototype.ValueTypeName="color";var ga=class extends vn{};ga.prototype.ValueTypeName="number";var _a=class extends ms{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ni.slerpFlat(r,0,a,c-o,a,c,l);return r}},Vs=class extends vn{InterpolantFactoryMethodLinear(t){return new _a(this.times,this.values,this.getValueSize(),t)}};Vs.prototype.ValueTypeName="quaternion";Vs.prototype.DefaultInterpolation=Sr;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends vn{};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Mr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends vn{};xa.prototype.ValueTypeName="vector";var ya=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},A0=new ya,va=class{constructor(t){this.manager=t!==void 0?t:A0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};va.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vr=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Gr=class extends Vr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},zo=new ye,xc=new L,yc=new L,Ma=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;xc.setFromMatrixPosition(t.matrixWorld),e.position.copy(xc),yc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(yc),e.updateMatrixWorld(),zo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Sa=class extends Ma{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wr=class extends Vr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Sa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function vc(){return(typeof performance=="undefined"?Date:performance).now()}var Pa="\\[\\]\\.:\\/",T0=new RegExp("["+Pa+"]","g"),Ia="[^"+Pa+"]",C0="[^"+Pa.replace("\\.","")+"]",R0=/((?:WC+[\/:])*)/.source.replace("WC",Ia),F0=/(WCOD+)?/.source.replace("WCOD",C0),P0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ia),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ia),L0=new RegExp("^"+R0+F0+P0+I0+"$"),D0=["material","materials","bones","map"],ba=class{constructor(t,e,i){let s=i||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(t){let e=L0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};me.Composite=ba;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ag=new Float32Array(1);var Mc=new ye,qr=class{constructor(t,e,i=0,s=1/0){this.ray=new Pr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Bs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Mc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mc),this}intersectObject(t,e=!0,i=[]){return Ea(t,this,i,e),i.sort(Sc),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ea(t[s],this,i,e);return i.sort(Sc),i}};function Sc(n,t){return n.distance-t.distance}function Ea(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,a=s.length;r<a;r++)Ea(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wa}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wa);function qc(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new yn,c=0;for(let h=0;h<n.length;++h){let d=n[h],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!i.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(t){let m;if(e)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,h),c+=m}}if(e){let h=0,d=[];for(let f=0;f<n.length;++f){let m=n[f].index;for(let g=0;g<m.count;++g)d.push(m.getX(g)+h);h+=n[f].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Xc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){let m=[];for(let v=0;v<a[h].length;++v)m.push(a[h][v][f]);let g=Xc(m);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Xc(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Ne(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let f=0,m=h.count;f<m;f++)for(let g=0;g<e;g++){let v=h.getComponent(f,g);o.setComponent(f+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var U0=1/16;function Fi(n){let t=n>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t%1e5/1e5)}function _s(n){let t=2166136261;for(let e=0;e<n.length;e++)t=Math.imul(t^n.charCodeAt(e),16777619);return t>>>0}var zn={};function N0(){return zn.solid||(zn.solid=new Ti({vertexColors:!0})),zn.solid}function B0(){return zn.glass||(zn.glass=new Ti({vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1})),zn.glass}function O0(){return zn.glow||(zn.glow=new On({vertexColors:!0})),zn.glow}var Kr=new Kt;function ri(n,{scale:t=U0,seed:e=1,jitter:i=.05,shadows:s=!0}={}){let r=Fi(e),a={solid:[],glass:[],glow:[]};for(let l of n){if(!l)continue;let[c,h,d,f,m,g,v,p]=l;if(f<=0||m<=0||g<=0)continue;let u=new Ai(f*t,m*t,g*t);u.translate(c*t,(h+m/2)*t,d*t),Kr.set(v);let E=1+(r()*2-1)*i,x=u.attributes.position.count,R=new Float32Array(x*3);for(let F=0;F<x;F++)R[F*3]=Math.min(1,Kr.r*E),R[F*3+1]=Math.min(1,Kr.g*E),R[F*3+2]=Math.min(1,Kr.b*E);u.setAttribute("color",new Ne(R,3)),a[p&&a[p]?p:"solid"].push(u)}let o=new Te;for(let[l,c]of Object.entries(a)){if(!c.length)continue;let h=qc(c);c.forEach(m=>m.dispose());let d=l==="glass"?B0():l==="glow"?O0():N0(),f=new De(h,d);f.castShadow=s&&l!=="glass",f.receiveShadow=s,o.add(f)}return o}function Yc(n){let t=1/0,e=-1/0,i=-1/0,s=1/0,r=-1/0;for(let a of n){if(!a)continue;let[o,l,c,h,d,f]=a;t=Math.min(t,o-h/2),e=Math.max(e,o+h/2),s=Math.min(s,c-f/2),r=Math.max(r,c+f/2),i=Math.max(i,l+d)}return{w:e-t,h:i,d:r-s,x0:t,x1:e,z0:s,z1:r}}var Pi="#B9784A",Fe="#8A5634",z0="#D9A066",Pt="#FFFFFF",Gs="#F2EEE8",jt="#2B1E3A";function kn(n,t,e,i,s,r,a=1){let o=[];for(let l=0;l<i;l+=a){let c=Math.round(Math.sqrt(Math.max(.25,i*i-(l+.5)*(l+.5))));o.push([n,t,e+l+a/2,c*2,s,a,r]),o.push([n,t,e-l-a/2,c*2,s,a,r])}return o}function Ii(n,t,e,i,s,r=0){let a=[];for(let o=0;o<e;o++){let l=Math.round(Math.sqrt(Math.max(.25,e*e-(o+.5)*(o+.5))));a.push([n,t+o,r+i/2,l*2,1,i,s]),a.push([n,t-o-1,r+i/2,l*2,1,i,s])}return a}var Da={bed:()=>[[0,0,0,22,4,34,Pi],[-10,0,-16,2,2,2,Fe],[10,0,-16,2,2,2,Fe],[-10,0,16,2,2,2,Fe],[10,0,16,2,2,2,Fe],[0,4,0,20,4,32,Pt],[0,8,5,21,2,22,"#FF8FB1"],[0,10,5,21,.6,3,"#FFC2D6"],[0,10,12,21,.6,3,"#FFC2D6"],[0,8,-11,14,3,7,"#FFF7E0"],[0,0,-17.5,22,18,2,Pi],[0,16,-17.5,18,2,2.4,z0],[0,0,17.5,22,10,2,Pi]],teddy:()=>[[0,0,0,8,7,6,"#B07A4A"],[0,1,3,5,5,1,"#E3C29B"],[-4.5,0,2,3,3,5,"#9C6A3E"],[4.5,0,2,3,3,5,"#9C6A3E"],[-5,4,0,2,4,3,"#9C6A3E"],[5,4,0,2,4,3,"#9C6A3E"],[0,7,0,8,7,7,"#B07A4A"],[-3.5,13,0,3,3,2,"#9C6A3E"],[3.5,13,0,3,3,2,"#9C6A3E"],[0,8,3.5,4,3,2,"#E3C29B"],[0,10,4.6,2,1,.6,jt],[-2,11,3.6,1,1.2,.4,jt],[2,11,3.6,1,1.2,.4,jt],[0,6.5,3.2,8,1.4,1,"#FF5A5F"]],lamp:()=>[[0,0,0,8,1.5,8,"#C9A227"],[0,1.5,0,1.4,22,1.4,"#C9A227"],[0,20,0,3,3,3,"#FFF3B0","glow"],[0,22,0,10,2,10,"#FFB8D4"],[0,24,0,9,3,9,"#FFC9DC"],[0,27,0,7,2,7,"#FFD6E5"]],picture:()=>[[0,-5,.6,18,13,1.2,Pi],[0,-3.5,1.2,15,10,.6,"#BDE7FF"],[0,-3.5,1.5,15,3,.6,"#7ED957"],[-3,-.5,1.5,7,2,.6,"#5CC23A"],[4,3,1.6,3,3,.6,"#FFD43B"],[-4,3.5,1.6,4,1,.6,Pt]],clock:()=>[...Ii(0,0,6,1.5,Fe),...Ii(0,0,5,2,"#FFFDF5"),[0,-.5,2.3,1,4.5,.4,jt],[1.2,-.5,2.5,3.4,1,.4,jt],[0,4,2.2,1,1,.4,"#FF5A5F"],[0,-5,2.2,1,1,.4,jt],[4.5,-.5,2.2,1,1,.4,jt],[-4.5,-.5,2.2,1,1,.4,jt]],books:()=>[[0,0,0,9,2,7,"#3FA9F5"],[4.6,.3,0,.3,1.4,6.6,Gs],[.5,2,.3,8,2,6,"#FF5A5F"],[4.6,2.3,.3,.3,1.4,5.6,Gs],[-.3,4,-.2,7,2,6,"#2EC27E"],[3.3,4.3,-.2,.3,1.4,5.6,Gs],[.4,6,0,6,1.6,5,"#FFD43B"]],guitar:()=>[[0,3,0,4,2,6,Fe],[0,0,0,12,2,6,Fe],[0,2,1,11,9,3,"#F08C3A"],[0,11,1,8,5,3,"#F08C3A"],[0,5,2.6,4,4,.4,jt],[0,16,1,2.4,13,1.6,Fe],[0,29,1,3.4,4,1.8,jt],[0,3,2.6,4,1,.5,Fe],[0,4,2.7,.3,26,.2,"#EEE"]],game:()=>[[0,0,0,12,26,10,"#6C4CF0"],[-6.3,0,0,.8,26,10.2,"#FF5C9A"],[6.3,0,0,.8,26,10.2,"#FF5C9A"],[0,16,5.1,10,7,.4,"#1B1530"],[0,17,5.4,8,5,.3,"#5CE1E6","glow"],[-1,18,5.6,2,2,.2,"#FFD43B","glow"],[2,20,5.6,1,1,.2,"#FF5A5F","glow"],[0,11,6.5,12,2,4,"#3A2A8C"],[-3,13,7,1,2.5,1,jt],[-3,15.5,7,2,1.5,2,"#FF5A5F"],[2,13,7.5,1.6,.8,1.6,"#FFD43B"],[4.2,13,7.5,1.6,.8,1.6,"#2EC27E"],[0,23.5,5.1,10,2,.5,"#FFD43B","glow"]],unicorn:()=>[[-3.5,0,-6,2.5,9,2.5,Pt],[3.5,0,-6,2.5,9,2.5,Pt],[-3.5,0,6,2.5,9,2.5,Pt],[3.5,0,6,2.5,9,2.5,Pt],[-3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,-6,2.7,1.5,2.7,"#C9A0FF"],[-3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[3.5,0,6,2.7,1.5,2.7,"#C9A0FF"],[0,8,0,9,7,16,Pt],[0,13,8.5,6,9,5,Pt],[0,18,11.5,6,6,9,Pt],[0,18,16.5,5,4,2,"#FFE3EE"],[-3.1,21,13,.4,1.5,1.5,jt],[3.1,21,13,.4,1.5,1.5,jt],[-2,24,10,1.5,2.5,1.5,Pt],[2,24,10,1.5,2.5,1.5,Pt],[0,24,13,2,3,2,"#FFD43B"],[0,27,13.3,1.2,3,1.2,"#FFE680"],[0,22,8.5,2,3,3,"#FF5C9A"],[0,19,6.5,2,3,3,"#FFB13B"],[0,16,5,2,3,3,"#FFD43B"],[0,13,3.8,2,3,2.5,"#2EC27E"],[0,23.5,11,2,2,3,"#3FA9F5"],[0,11,-8.5,2,3,2,"#FF5C9A"],[0,7,-9.5,2,4,2,"#8E6CFF"],[0,4,-10,2,3,2,"#3FA9F5"]],chair:()=>[[-4.5,0,-4.5,1.5,8,1.5,Fe],[4.5,0,-4.5,1.5,8,1.5,Fe],[-4.5,0,4.5,1.5,8,1.5,Fe],[4.5,0,4.5,1.5,8,1.5,Fe],[0,8,0,11,1.5,11,Pi],[0,9.5,.5,9,1,9,"#FF8FB1"],[-4.5,9.5,-4.8,1.5,10,1.5,Fe],[4.5,9.5,-4.8,1.5,10,1.5,Fe],[0,15,-4.8,9,4,1.2,Pi]],plates:()=>[[0,0,0,7,.8,7,"#E8E3DA"],[0,.8,0,9,.6,9,Pt],[0,1.4,0,7,.8,7,"#E8E3DA"],[0,2.2,0,9,.6,9,Pt],[0,2.8,0,7,.8,7,"#E8E3DA"],[0,3.6,0,9,.6,9,Pt],[0,4.2,0,7,.1,7,"#9FD8F5"],[6,0,0,.8,.5,6,"#BFC4CC"],[-6,0,0,.8,.5,6,"#BFC4CC"]],pizza:()=>[...kn(0,0,0,6,1.2,"#E0A458"),...kn(0,1.2,0,5,.5,"#E8473C"),...kn(0,1.5,0,4.5,.4,"#FFE08A"),[-2,1.9,-2,2,.5,2,"#B3261E"],[2.5,1.9,-1,2,.5,2,"#B3261E"],[0,1.9,2.5,2,.5,2,"#B3261E"],[-2.5,1.9,2,1,.4,1,"#2EC27E"],[2,1.9,2.5,1,.4,1,"#2EC27E"]],cake:()=>[[0,0,0,12,1,12,"#E8E3DA"],[0,1,0,10,4,10,"#FFC2D6"],[0,4,0,10.4,1,10.4,Pt],[0,5,0,7,3.5,7,"#FFE3EE"],[0,8,0,7.4,.8,7.4,Pt],[-2,8.8,0,.8,3,.8,"#3FA9F5"],[0,8.8,0,.8,3,.8,"#FFD43B"],[2,8.8,0,.8,3,.8,"#2EC27E"],[-2,11.8,0,.6,1,.6,"#FFB13B","glow"],[0,11.8,0,.6,1,.6,"#FFB13B","glow"],[2,11.8,0,.6,1,.6,"#FFB13B","glow"],[-5,3,5.1,1,1,.4,"#FF5A5F"],[-1.5,3,5.1,1,1,.4,"#FF5A5F"],[2,3,5.1,1,1,.4,"#FF5A5F"],[4.5,3,5.1,1,1,.4,"#FF5A5F"]],teapot:()=>[[0,0,0,6,1,6,"#3FA9F5"],[0,1,0,8,5,8,"#5CC0F7"],[0,6,0,6,1,6,"#3FA9F5"],[0,7,0,2,1.2,2,Pt],[5,2.5,0,3,1.5,1.5,"#5CC0F7"],[6.8,3.5,0,1.5,2.5,1.5,"#5CC0F7"],[-5,2,0,1.5,4,1.5,"#3FA9F5"],[-4.5,5.5,0,2,1,1.5,"#3FA9F5"],[0,3,4.1,2,2,.4,Pt]],watermelon:()=>[[0,0,0,10,3,8,"#2E8B3A"],[0,3,0,10,1,8,"#9BE07A"],[0,3,0,9,2.5,7,"#FF5A6E"],[0,5.5,0,7,1,5,"#FF5A6E"],[-2.5,5.6,1,.8,1,.8,jt],[0,6.6,0,.8,.6,.8,jt],[2.5,5.6,-1,.8,1,.8,jt],[1,5,2.8,.8,.8,.8,jt],[-4,.5,4.05,1,2,.2,"#1E6B2A"],[0,.5,4.05,1,2,.2,"#1E6B2A"],[4,.5,4.05,1,2,.2,"#1E6B2A"]],candy:()=>[[0,0,0,3,1,3,"#E8E3DA"],[0,1,0,.8,8,.8,Pt],...Ii(0,13.5,4.5,1.4,"#FF5C9A",-.7),...Ii(0,13.5,3.2,1.6,"#FFD43B",-.8),...Ii(0,13.5,1.8,1.8,"#3FA9F5",-.9)],cupcake:()=>[[0,0,0,5,3.5,5,"#5CC0F7"],[-2.6,0,0,.2,3.5,5,"#3FA9F5"],[2.6,0,0,.2,3.5,5,"#3FA9F5"],[0,3.5,0,6,2,6,"#FFC2D6"],[0,5.5,0,4.5,1.5,4.5,"#FFC2D6"],[0,7,0,3,1,3,"#FFE3EE"],[0,8,0,1.6,1.6,1.6,"#E8473C"],[.3,9.6,0,.3,1.2,.3,"#2E8B3A"],[-2,5.5,2.3,.6,.4,.6,"#FFD43B"],[1.5,6,2,.6,.4,.6,"#2EC27E"],[2.4,5.6,-1,.6,.4,.6,"#8E6CFF"]],candle:()=>[[0,-3,.5,7,1.5,1,"#C9A227"],[0,-4.5,3,6,1.5,5,"#C9A227"],[0,-3,3,2.5,6,2.5,"#FFF7E0"],[0,3,3,.4,.8,.4,jt],[0,3.6,3,1.4,2.2,1.4,"#FFB13B","glow"],[0,4.2,3,.7,1.2,.7,"#FFF3B0","glow"]],sofa:()=>[[0,0,0,38,2,14,Fe],[0,2,0,36,5,14,"#2BB5A5"],[-8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[8.75,7,1.5,16.5,2.5,10,"#47CDBC"],[0,7,-5.5,36,10,3,"#2BB5A5"],[-8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[8.75,9.5,-3.4,15,6,1.6,"#47CDBC"],[-18.5,2,0,3,10,14,"#239A8C"],[18.5,2,0,3,10,14,"#239A8C"],[-11,9.5,2,5,5,2,"#FFD43B"],[11,9.5,2,5,5,2,"#FF8FB1"]],tv:()=>[[0,0,0,26,7,9,Pi],[-6.5,1.5,4.6,11,4,.4,Fe],[6.5,1.5,4.6,11,4,.4,Fe],[0,7,-1,4,2,3,"#333"],[0,9,-1,24,15,2,"#222"],[0,10,.05,22,13,.2,"#3FA9F5","glow"],[0,10,.2,22,4,.2,"#7ED957","glow"],[5,18,.2,4,4,.2,"#FFD43B","glow"],[-5,17,.2,7,2,.2,Pt,"glow"]],piano:()=>[[0,0,0,30,20,9,"#1F1A2B"],[0,20,-1,31,1.5,10,"#2C2540"],[0,10,6,30,2,5,"#1F1A2B"],[0,12,6,28,1,4.5,Pt],...[-12,-9,-4,-1,2,7,10].map(n=>[n,13,5,1,.8,2.5,jt]),[-13,0,6,2,10,2,"#1F1A2B"],[13,0,6,2,10,2,"#1F1A2B"],[0,14,4.6,10,5,.5,"#C9A227"],[0,0,15,12,6,6,Fe],[0,6,15,13,1.5,7,"#E8473C"]],plant:()=>[[0,0,0,7,6,7,"#D9744A"],[0,6,0,8,1.5,8,"#E88A5E"],[0,7,0,7,.4,7,"#6B4426"],[0,7,0,1.5,8,1.5,"#3E8E41"],[-3,10,0,5,3,3,"#4CB050"],[3,12,1,5,3,3,"#5CC23A"],[0,15,-2,4,4,4,"#4CB050"],[-1,17,2,3,3,3,"#7ED957"],[2,9,-2,3,2,3,"#7ED957"]],rainbow:()=>{let n=["#FF5A5F","#FF9F43","#FFD43B","#2EC27E","#3FA9F5","#8E6CFF"],t=[];return n.forEach((e,i)=>{let s=13-i*1.6;for(let r=0;r<12;r++){let a=(r+.5)/12*Math.PI;t.push([Math.cos(a)*s,Math.sin(a)*s-6,.8,3.2,2,1.6,e])}}),t.push([-12,-8,1.5,6,3,2,Pt],[-14,-7,1.5,4,3,2,Pt],[12,-8,1.5,6,3,2,Pt],[14,-7,1.5,4,3,2,Pt]),t},puzzle:()=>[[-3,0,-3,6,1,6,"#FF5A5F"],[3,0,-3,6,1,6,"#3FA9F5"],[-3,0,3,6,1,6,"#FFD43B"],[3,0,3,6,1,6,"#2EC27E"],[0,0,-3,1.6,1,2,"#FF5A5F"],[-3,0,0,2,1,1.6,"#FFD43B"],[3,0,0,2,1,1.6,"#3FA9F5"],[0,0,3,1.6,1,2,"#2EC27E"],[9,0,4,5,1,5,"#8E6CFF"],[8,0,1.2,1.6,1,1.6,"#8E6CFF"]],cat:()=>La({body:"#FF9F43",light:"#FFE0B8",ears:!0}),dog:()=>La({body:"#E0B070",light:"#FFF1DC",flop:"#8A5634"}),bathtub:()=>[[-13,0,-6,2,2,2,"#C9A227"],[13,0,-6,2,2,2,"#C9A227"],[-13,0,6,2,2,2,"#C9A227"],[13,0,6,2,2,2,"#C9A227"],[0,2,0,32,2,17,Pt],[0,4,-7.5,32,7,2,Pt],[0,4,7.5,32,7,2,Pt],[-15,4,0,2,7,13,Pt],[15,4,0,2,7,13,Pt],[0,4,0,28,5,13,"#7FD0FF"],[-6,9,-2,4,2,4,"#FFFFFF"],[-3,9,2,3,3,3,"#F4FBFF"],[4,9,-1,5,2,4,"#FFFFFF"],[8,9,3,3,2,3,"#F4FBFF"],[14,11,-7,1.4,6,1.4,"#C0C7D1"],[12.5,16,-7,4,1.4,1.4,"#C0C7D1"]],toilet:()=>[[0,0,1,7,6,7,Pt],[0,6,1.5,10,2,11,Gs],[0,8,1.5,10,.8,11,"#9FD8F5"],[0,6,-5,11,12,4,Pt],[0,18,-5,12,1.4,5,Gs],[3.5,15,-2.7,2,1,.8,"#C0C7D1"]],mirror:()=>[...Ii(0,0,8,1,"#C9A227"),...Ii(0,0,7,1.4,"#CFEFFF"),[-2,2,1.5,1,3,.2,Pt,"glow"],[-1,4,1.5,1,1,.2,Pt,"glow"]],soap:()=>[[0,0,0,7,.8,5,"#9FD8F5"],[0,.8,0,5,2.5,3.5,"#FF8FB1"],[-2,3.3,0,2,2,2,"#F4FBFF","glass"],[1,3.6,1,1.4,1.4,1.4,"#F4FBFF","glass"],[2,5,-1,1,1,1,"#F4FBFF","glass"]],duck:()=>[[0,0,0,7,4,8,"#FFD43B"],[0,3,-3.5,4,3,2,"#FFD43B"],[0,4,2.5,5,5,5,"#FFD43B"],[0,5.5,5.5,3,1.4,2.4,"#FF9F43"],[-2.6,7,3.5,.4,1.2,1.2,jt],[2.6,7,3.5,.4,1.2,1.2,jt],[-3.6,1,0,.5,2.5,4,"#F5C518"],[3.6,1,0,.5,2.5,4,"#F5C518"]],toothbrush:()=>[[0,0,0,4,6,4,"#8E6CFF"],[0,6,0,4.4,.6,4.4,"#A88BFF"],[-.8,4,0,.8,9,.8,"#3FA9F5"],[-.8,13,.5,.9,2,1.6,Pt],[.8,4,.3,.8,8,.8,"#FF5C9A"],[.8,12,.8,.9,2,1.6,Pt],[5,0,1,2,1,6,Pt],[5,1,-1,2,1,2,"#3FA9F5"]],lotion:()=>[[0,0,0,4,8,3,"#FF8FB1"],[0,2,1.55,3,3,.2,Pt],[0,8,0,1.6,1.4,1.6,Pt],[0,9.4,0,1,1.6,1,Pt],[1,10.4,0,2.4,.8,1,Pt]],sponge:()=>[[0,0,0,7,3,5,"#FFD43B"],[0,3,0,7,1.2,5,"#2EC27E"],[-2,1.2,2.55,.8,.8,.2,"#E8B800"],[1.5,.8,2.55,.8,.8,.2,"#E8B800"],[2.5,2,2.55,.6,.6,.2,"#E8B800"]],tree:()=>[[0,0,0,5,20,5,"#8A5634"],[0,0,0,7,2,7,"#6E4228"],[0,16,0,22,8,22,"#3E9B45"],[0,24,0,18,6,18,"#4CB050"],[0,30,0,10,4,10,"#5CC23A"],[-11.3,19,3,1.2,2,2,"#E8473C"],[6,18,11.3,2,2,1.2,"#E8473C"],[11.3,21,-4,1.2,2,2,"#E8473C"],[-3,25,9.3,2,2,1.2,"#E8473C"],[-4,19,-11.3,2,2,1.2,"#E8473C"]],flower:()=>[[0,0,0,1.2,14,1.2,"#3E8E41"],[-2,5,0,3,1,2,"#4CB050"],[2,8,0,3,1,2,"#4CB050"],[0,13,.5,9,9,1.5,"#FFD43B"],[0,15,1.3,4,5,1,"#8A5634"],[0,12,.5,4,1,1.4,"#FFB13B"],[0,22,.5,4,1,1.4,"#FFB13B"],[-5,15,.5,1,4,1.4,"#FFB13B"],[5,15,.5,1,4,1.4,"#FFB13B"]],tulips:()=>[[0,0,0,12,1,8,"#6B4426"],...[[-4,"#FF5C9A",9],[0,"#FF5A5F",12],[4,"#FFD43B",10]].flatMap(([n,t,e])=>[[n,1,0,.8,e,.8,"#3E8E41"],[n-1,2,.5,1,4,2,"#4CB050"],[n,1+e,0,3,3,3,t],[n-1,4+e,0,1,1,3,t],[n+1,4+e,0,1,1,3,t]])],mushroom:()=>[[0,0,0,4,6,4,"#FFF7E0"],[0,6,0,11,3,11,"#E8473C"],[0,9,0,7,2,7,"#E8473C"],[-3,8.5,5.6,2,1.5,.3,Pt],[3,7,5.6,1.5,1.5,.3,Pt],[0,11,0,2,.3,2,Pt],[5.6,7.5,1,.3,1.5,2,Pt],[-5.6,7.5,-2,.3,1.5,2,Pt]],ball:()=>{let n=[];for(let e=0;e<2*4;e++){let i=Math.sqrt(Math.max(.5,16-(e+.5-4)*(e+.5-4)));n.push(...kn(0,e,0,i,1,Pt,.5))}return n.push([0,3,3.95,2.4,2,.4,jt],[3.95,3,0,.4,2,2.4,jt],[0,3,-3.95,2.4,2,.4,jt],[-3.95,3,0,.4,2,2.4,jt],[0,7.8,0,2.4,.4,2.4,jt],[2.6,5.6,2.6,1.4,1.2,1.4,jt],[-2.6,5.6,-2.6,1.4,1.2,1.4,jt],[2.6,1.2,-2.6,1.4,1.2,1.4,jt],[-2.6,1.2,2.6,1.4,1.2,1.4,jt]),n},butterfly:()=>[[0,-1,0,1,1,6,jt],[-3,-.5,-1,5,.6,5,"#FF5C9A"],[3,-.5,-1,5,.6,5,"#FF5C9A"],[-2.5,-.5,3,4,.6,3,"#8E6CFF"],[2.5,-.5,3,4,.6,3,"#8E6CFF"],[-3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[3.5,-.4,-1.5,1.5,.6,1.5,"#FFD43B"],[-.7,0,-3.5,.3,.3,2,jt],[.7,0,-3.5,.3,.3,2,jt]],bee:()=>[[0,-2,0,4,4,6,"#FFD43B"],[0,-2.1,-.5,4.2,4.2,1,jt],[0,-2.1,1.8,4.2,4.2,1,jt],[0,-1.5,-3.8,3,3,2,jt],[-.8,-.5,-4.85,.5,.8,.3,Pt],[.8,-.5,-4.85,.5,.8,.3,Pt],[-2.5,2,0,3,.4,3,"#E6F6FF","glass"],[2.5,2,0,3,.4,3,"#E6F6FF","glass"],[0,-1,3.5,1,1,1.5,jt]],bunny:()=>La({body:"#F2EEE8",light:"#FFFFFF",bunny:!0}),fountain:()=>[...kn(0,0,0,16,2,"#A9B1BC"),...kn(0,2,0,16,3,"#C0C7D1"),...kn(0,3,0,14,2.4,"#5CC0F7"),[0,5,0,4,10,4,"#C0C7D1"],...kn(0,13,0,7,2,"#C0C7D1"),...kn(0,14,0,6,1.4,"#5CC0F7"),[0,15,0,1.6,7,1.6,"#BDE7FF","glass"],[0,21,0,4,1.5,4,"#BDE7FF","glass"],[4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[-4,12,0,1.2,3,1.2,"#BDE7FF","glass"],[0,12,4,1.2,3,1.2,"#BDE7FF","glass"],[0,12,-4,1.2,3,1.2,"#BDE7FF","glass"]]};function La({body:n,light:t,ears:e,flop:i,bunny:s}){let r=[[0,0,-1,7,6,9,n],[0,0,2.5,5,4,2,t],[-2.5,0,4,2,2,2,n],[2.5,0,4,2,2,2,n],[0,5,3.5,7,6,6,n],[0,5.6,6.5,4,2.6,1.4,t],[0,7.2,7.2,1.4,1,.4,s?"#FF8FB1":jt],[-2,8.6,6.55,1,1.4,.4,jt],[2,8.6,6.55,1,1.4,.4,jt]];return e&&r.push([-2.5,11,3.5,2,2,2,n],[2.5,11,3.5,2,2,2,n],[-2.5,11,4.5,1,1,.2,"#FF8FB1"],[2.5,11,4.5,1,1,.2,"#FF8FB1"]),i&&r.push([-4,6.5,3.5,1.4,5,3,i],[4,6.5,3.5,1.4,5,3,i]),s&&r.push([-1.6,11,3,1.6,6,1.4,n],[1.6,11,3,1.6,6,1.4,n],[-1.6,12,3.75,.8,4,.2,"#FF8FB1"],[1.6,12,3.75,.8,4,.2,"#FF8FB1"]),s?r.push([0,2,-6,3,3,2,t]):r.push([0,1,-6,1.6,1.6,3,n],[0,2,-7.5,1.6,5,1.6,n],[0,7,-7.5,1.6,1.6,1.6,t]),r}var Hn={picture:{wall:!0},clock:{wall:!0},candle:{wall:!0},rainbow:{wall:!0},mirror:{wall:!0},butterfly:{fly:!0},bee:{fly:!0},teddy:{small:!0},books:{small:!0},plates:{small:!0},pizza:{small:!0},cake:{small:!0},teapot:{small:!0},watermelon:{small:!0},candy:{small:!0},cupcake:{small:!0},soap:{small:!0},duck:{small:!0},toothbrush:{small:!0},lotion:{small:!0},sponge:{small:!0},puzzle:{},ball:{}};var ie={fair:"#FCE0C8",light:"#F6D2B0",tan:"#E3B58C",brown:"#C68B59",dark:"#8D5A3B"},re="#2B1E3A",he="#FFFFFF",oe="#FFD43B",Ws="#E8B800",k0="rgba(255,120,160,0.55)",H0={1:["010","110","010","010","111"],0:["111","101","101","101","111"],7:["111","001","010","010","010"]};function jr(n,t,e,i=1.5,s=.75){let r=[],a=n.length*4*s-s;return n.split("").forEach((o,l)=>{H0[o].forEach((c,h)=>{c.split("").forEach((d,f)=>{d==="1"&&r.push([-a/2+(l*4+f+.5)*s,i+(4-h)*s,e,s,s,.3,t])})})}),r}var wn=(n,t,e,i=oe,s=1)=>[[n,t,e,1*s,3*s,.3,i],[n,t+1*s,e,3*s,1*s,.3,i]];function V0(n,t){if(n==="none")return[];let e=[[0,8.5,0,10.8,2.6,10.8,t],[0,2.5,-5.2,10.8,7,1,t],[5.2,4.5,-.5,.8,5,9.6,t],[-5.2,4.5,-.5,.8,5,9.6,t]];return(n==="long"||n==="longbow")&&e.push([0,-6,-5.6,11,9,1.8,t],[5.4,-2,-1,1.2,7,8,t],[-5.4,-2,-1,1.2,7,8,t]),n==="buns"&&e.push([4.6,9,-1,4,4,4,t],[-4.6,9,-1,4,4,4,t]),n==="bun"&&e.push([0,10.6,-1.5,4.5,3.5,4.5,t]),n==="ponytail"&&e.push([0,4,-6.5,3.2,5,2.6,t],[0,-1,-6.8,2.6,5,2.2,t]),n==="pigtails"&&e.push([6.4,2.5,-1.5,2.6,5,2.6,t],[-6.4,2.5,-1.5,2.6,5,2.6,t]),e}function G0(n,t,e){let i=(r,a,o=1,l=1)=>n.fillRect(r,a,o,l);n.clearRect(0,0,20,20),n.fillStyle=t.faceColor||t.skin,i(0,0,20,20),t.mask&&(n.fillStyle=t.mask,i(0,0,20,7),i(0,14,20,6)),t.fringe!==!1&&t.hair&&t.style!=="none"&&(n.fillStyle=t.hair,i(0,0,20,3),t.fringe==="side"?(i(0,3,9,2),i(0,5,4,1)):(i(0,3,6,1),i(12,3,8,2)),(t.style==="long"||t.style==="longbow")&&(i(0,0,2,13),i(18,0,2,13)));let s=t.eye||re;n.fillStyle=s,e==="sleepy"?(i(4,11,4,1),i(12,11,4,1)):e==="cheer"?(i(4,11),i(5,10),i(6,10),i(7,11),i(12,11),i(13,10),i(14,10),i(15,11)):(i(5,9,2,3),i(13,9,2,3),n.fillStyle=he,i(5,9),i(13,9)),t.glasses&&(n.fillStyle=t.glasses,i(3,8,6,1),i(3,12,6,1),i(3,8,1,5),i(8,8,1,5),i(11,8,6,1),i(11,12,6,1),i(11,8,1,5),i(16,8,1,5),i(9,9,2,1)),t.mask||(n.fillStyle=k0,i(2,13,3,2),i(15,13,3,2)),t.animal&&(n.fillStyle=t.nose||"#FF7AA2",i(9,12,2,1)),t.whiskers&&(n.fillStyle=re,i(0,13,4,1),i(16,13,4,1),i(1,15,3,1),i(16,15,3,1)),!t.mask&&(e==="cheer"?(n.fillStyle="#9B2335",i(8,14,4,3),n.fillStyle="#FF8FB1",i(9,16,2,1)):e==="sleepy"?(n.fillStyle="#9B2335",i(9,15,2,1)):(n.fillStyle="#9B2335",i(8,15,4,1),i(7,14),i(12,14)),t.faceExtra&&t.faceExtra(n,i))}var Gt=n=>n,Ua={boni:Gt({animal:"bunny",fur:"#D9CCFF",light:"#F1ECFF",skin:"#E6DCFF",extra:n=>{n.body.push([0,6.5,0,9.8,1.8,5.8,"#2EC27E"],[2.5,2.5,2.9,2.2,4,.8,"#2EC27E"]),n.head.push([3.6,9.5,2.5,3,1.5,.6,"#FF8FB1"])}}),bobi:Gt({animal:"bunny",fur:"#A9C4F5",light:"#E2ECFF",skin:"#B9D0F8",extra:n=>{n.head.push([0,8.8,0,10.8,2.4,10.8,"#FF5A5F"],[0,8.8,6.5,9,.8,4,"#FF5A5F"],[0,11.2,0,1.4,1,1.4,oe]),n.body.push([0,7,0,9.6,1.2,5.6,"#2EC27E"])}}),mika:Gt({skin:ie.light,hair:"#6B3E26",style:"buns",shirt:"#8E6CFF",pants:"#4A3A8C",shoes:"#FF5C9A",extra:n=>{n.body.push([0,6,2.6,3,1,.3,he],[-1,5,2.6,1,1,.3,he],[1,5,2.6,1,1,.3,he]),n.head.push(...wn(3.5,8.5,5.5))}}),noam:Gt({skin:ie.light,hair:"#6B3E26",style:"short",shirt:"#2EC27E",pants:"#3A3F6B",shoes:"#FF5A5F",fringe:!1,extra:n=>{n.head.push([0,8.5,0,10.8,2.8,10.8,"#3FA9F5"],[0,8.5,6.5,9,.8,4,"#3FA9F5"]),n.body.push(...wn(0,3,2.6))}}),pitzi:Gt({animal:"cat",fur:"#FFB0CF",light:"#FFE3EE",whiskers:!0}),shoko:Gt({animal:"cat",fur:"#8DB8F0",light:"#E2EEFF",whiskers:!0,extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#FF5A5F"])}}),chip:Gt({animal:"dog",fur:"#C98A55",light:"#F3D9B8",ears:"#7A4A2A",extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#3FA9F5"],[0,5.8,2.9,1.4,1.4,.6,oe])}}),lola:Gt({animal:"dog",fur:"#F3E2C3",light:"#FFF6E8",ears:"#D9A86A",extra:n=>{n.body.push([0,7,0,9.6,1.2,5.6,"#FF5C9A"]),n.head.push([0,10,0,2,1.5,1.5,"#FF5C9A"],[-1.8,10,0,1.8,2,1.5,"#FF5C9A"],[1.8,10,0,1.8,2,1.5,"#FF5C9A"])}}),kangi:Gt({animal:"kangaroo",fur:"#D4A373",light:"#F1D6B0",gloves:"#FF5A5F"}),roni:Gt({animal:"kangaroo",fur:"#C99366",light:"#EED2AE",gloves:"#9B7BFF",baby:!0,extra:n=>{n.head.push([-1.8,10,0,1.8,2,1.5,"#9B7BFF"],[1.8,10,0,1.8,2,1.5,"#9B7BFF"],[0,10,0,1.6,1.6,1.6,"#9B7BFF"])}}),blocky:Gt({skin:ie.light,hair:"#3A2A4D",style:"long",shirt:"#FF5C9A",pants:"#3A2A4D",shoes:"#8E6CFF",extra:n=>{n.body.push(...wn(0,3,2.6)),n.head.push([4,8.5,4,2.4,2.4,2.4,"#8E6CFF"])}}),kubi:Gt({skin:ie.light,hair:"#8B5A2B",style:"short",shirt:"#2EC27E",pants:"#2F4A9C",shoes:"#2B1E3A",extra:n=>{n.body.push([0,3,2.6,2.5,2.5,.3,oe])}}),astro:Gt({skin:ie.fair,hair:"#6B3E26",style:"short",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#8E6CFF",helmet:"#FFFFFF",extra:n=>$c(n,"#FF5A5F")}),astro_g:Gt({skin:ie.fair,hair:"#C0452B",style:"long",shirt:"#F4F4F8",pants:"#F4F4F8",shoes:"#FF5C9A",helmet:"#FFFFFF",extra:n=>$c(n,"#8E6CFF")}),goli:Gt({skin:ie.light,hair:"#2B1E14",style:"short",shirt:"#2EC27E",pants:he,shoes:re,extra:n=>{n.body.push(...jr("10",he,2.65)),n.root.push(...Zc(6,0,4))}}),goli_g:Gt({skin:ie.light,hair:"#6B3E26",style:"pigtails",shirt:"#8E6CFF",pants:he,shoes:re,extra:n=>{n.body.push(...jr("10",he,2.65)),n.head.push([6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"],[-6.4,7.5,-1.5,3,1.5,3,"#FF5C9A"]),n.root.push(...Zc(6,0,4))}}),sali:Gt({skin:ie.brown,hair:"#2B1E14",style:"short",shirt:"#FF9F43",pants:"#FF9F43",shoes:he,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#FF5A5F"]),n.body.push(...jr("7",he,2.65)),n.armR.push(...Jc(0,-13.5,0))}}),sali_g:Gt({skin:ie.dark,hair:"#1E140E",style:"bun",shirt:"#3FA9F5",pants:"#3FA9F5",shoes:he,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"]),n.body.push(...jr("7",he,2.65)),n.armR.push(...Jc(0,-13.5,0))}}),ginga:Gt({skin:ie.tan,hair:"#2B1E14",style:"short",shirt:"#3FA9F5",pants:"#F4F4F8",shoes:ie.tan,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#2EC27E"],[-4,6,-6,1.5,1.5,2,"#2EC27E"],[-4.6,4,-6.4,1,2.5,1,"#2EC27E"]),n.body.push([0,0,0,9.4,1.2,5.4,oe],[2,-2,2.8,1,2.5,.6,oe])}}),ginga_g:Gt({skin:ie.tan,hair:"#2B1E14",style:"ponytail",shirt:oe,pants:"#F4F4F8",shoes:ie.tan,extra:n=>{n.head.push([0,6.6,0,10.6,1.4,10.6,"#FF9F43"]),n.body.push([0,0,0,9.4,1.2,5.4,"#FF9F43"],[2,-2,2.8,1,2.5,.6,"#FF9F43"])}}),turbo:Gt({skin:ie.light,hair:"#C0452B",style:"none",shirt:"#2E2440",pants:"#3A3F6B",shoes:re,fringe:!1,extra:n=>Kc(n,"#FF5A5F")}),turbo_g:Gt({skin:ie.light,hair:"#FF5C9A",style:"long",shirt:"#8E6CFF",pants:"#3A2A4D",shoes:re,extra:n=>Kc(n,"#FF5C9A")}),ninja:Gt({skin:ie.light,style:"none",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:"#1E4F8C",faceColor:ie.light,mask:"#2F7BD6",headColor:"#2F7BD6",extra:n=>jc(n,oe)}),ninja_g:Gt({skin:ie.light,style:"none",shirt:"#D63B3B",pants:"#D63B3B",shoes:"#8C1E1E",faceColor:ie.light,mask:"#D63B3B",headColor:"#D63B3B",extra:n=>jc(n,he)}),wizard_b:Gt({skin:ie.light,hair:"#8B5A2B",style:"short",shirt:"#2F7BD6",pants:"#2F7BD6",shoes:re,extra:n=>Qc(n,"#2F7BD6")}),wizard_g:Gt({skin:ie.light,hair:"#F2C14E",style:"long",shirt:"#8E6CFF",pants:"#8E6CFF",shoes:re,extra:n=>Qc(n,"#8E6CFF")}),dancer_b:Gt({skin:ie.brown,hair:"#2B1E14",style:"short",shirt:"#2B2B35",pants:"#3FA9F5",shoes:he,fringe:!1,extra:n=>{n.head.push([0,8.5,0,10.8,2.8,10.8,"#FF5A5F"],[0,8.5,-6.5,9,.8,4,"#FF5A5F"]);for(let t=0;t<5;t++)n.body.push([-3+t*1.5,1.5+t*1.2,2.65,1.6,1.2,.3,oe])}}),dancer_g:Gt({skin:ie.tan,hair:"#2B1E14",style:"bun",shirt:"#FF9EC4",pants:"#FFD1E3",shoes:"#FF5C9A",extra:n=>{n.body.push([0,-1,0,13,2.4,9,"#FFB8D4"],[0,.5,0,11.5,1.2,8,"#FFD1E3"]),n.head.push([0,14,-1.5,3,1.6,1.6,"#FF5C9A"],[-1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"],[1.8,13.6,-1.5,1.6,2.4,1.6,"#FF5C9A"])}}),builder_b:Gt({skin:ie.light,hair:"#8B5A2B",style:"short",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:n=>th(n)}),builder_g:Gt({skin:ie.light,hair:"#8B5A2B",style:"long",shirt:"#FF9F43",pants:"#2F4A9C",shoes:"#6B4426",fringe:!1,extra:n=>th(n)}),teacher_b:Gt({skin:ie.light,hair:"#6B3E26",style:"short",shirt:"#9C9AC0",pants:"#3A3F6B",shoes:re,glasses:re,extra:n=>{n.body.push([0,4,2.6,1.2,4,.3,"#3FA9F5"]),n.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,he])}}),teacher_g:Gt({skin:ie.light,hair:"#8B5A2B",style:"long",shirt:"#2EC27E",pants:"#3A3F6B",shoes:re,glasses:re,extra:n=>{n.body.push([0,6,2.6,3,1.2,.3,he]),n.armR.push([0,-12,1.5,4.5,5.5,.8,"#FF5A5F"],[0,-11.5,2,3.5,4.5,.3,he])}}),police_b:Gt({skin:ie.light,hair:"#2B1E14",style:"short",shirt:"#2F5DA8",pants:"#24325E",shoes:re,fringe:!1,extra:n=>eh(n)}),police_g:Gt({skin:ie.brown,hair:"#2B1E14",style:"long",shirt:"#2F5DA8",pants:"#24325E",shoes:re,fringe:!1,extra:n=>eh(n)}),fire_b:Gt({skin:ie.light,hair:"#6B3E26",style:"short",shirt:"#2B2B35",pants:"#2B2B35",shoes:re,fringe:!1,extra:n=>nh(n)}),fire_g:Gt({skin:ie.light,hair:"#C0452B",style:"long",shirt:"#2B2B35",pants:"#2B2B35",shoes:re,fringe:!1,extra:n=>nh(n)}),manager_b:Gt({skin:ie.tan,hair:"#2B1E14",style:"short",shirt:"#4A4E6B",pants:"#3A3D55",shoes:re,extra:n=>ih(n)}),manager_g:Gt({skin:ie.tan,hair:"#2B1E14",style:"long",shirt:"#4A4E6B",pants:"#3A3D55",shoes:re,extra:n=>ih(n)}),pilot_b:Gt({skin:ie.light,hair:"#2B1E14",style:"short",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:re,fringe:!1,extra:n=>sh(n)}),pilot_g:Gt({skin:ie.light,hair:"#F2C14E",style:"long",shirt:"#1F3A6B",pants:"#1F3A6B",shoes:re,fringe:!1,extra:n=>sh(n)}),soldier_b:Gt({skin:ie.light,hair:"#2B1E14",style:"short",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:n=>rh(n)}),soldier_g:Gt({skin:ie.tan,hair:"#2B1E14",style:"long",shirt:"#6B7F3A",pants:"#5C6E32",shoes:"#3B2A1A",fringe:!1,extra:n=>rh(n)})};function Zc(n,t,e){return[[n,t,e,4.4,4.4,4.4,he],[n,t+1.4,e+2.25,1.6,1.6,.2,re],[n+2.25,t+1.4,e,.2,1.6,1.6,re],[n,t+4.45,e,1.6,.2,1.6,re]]}function Jc(n,t,e){return[[n,t,e,5,5,5,"#E8762B"],[n,t,e,5.1,.4,5.1,re],[n,t,e,.4,5.1,5.1,re]]}function $c(n,t){n.head.push([0,10,0,12.4,1.6,12.4,he],[0,-.6,-6,12.4,10.6,1,he],[6,-.6,0,1,10.6,12.4,he],[-6,-.6,0,1,10.6,12.4,he],[0,-.6,6,12.4,1,1,he],[0,.4,6,10.8,9.6,.6,"#CDEBFF","glass"],[3,11.6,0,.6,3,.6,"#C0C7D1"],[3,14.6,0,1.6,1.6,1.6,"#FF5A5F"]),n.body.push([0,.5,0,9.4,1.2,5.4,t],[0,3.5,2.6,3,2.6,.3,"#3FA9F5"],...wn(0,3.8,2.8,oe,.6)),n.body.push([0,1,-3.3,7,6,2,"#E0E0EA"])}function Kc(n,t){n.head.push([0,9,0,11.6,2.6,11.6,t],[0,0,-5.8,11.6,11,1.2,t],[5.8,0,-.5,1.2,11,10.6,t],[-5.8,0,-.5,1.2,11,10.6,t],[0,6.4,5.9,9.6,2,.6,"#BDE7FF"],[5.9,5,2,.4,3,1,oe],[5.9,3,1,.4,3,1,oe]),n.body.push([-2,0,2.6,1,8,.3,t],[2,0,2.6,1,8,.3,t])}function jc(n,t){n.head.push([0,7,0,10.6,1.4,10.6,t],[0,6.5,-5.8,2,2,1,t],[1,4.5,-6.3,1,3,.6,t],[-1,5,-6.3,1,2.5,.6,t]),n.body.push([0,0,0,9.4,1.2,5.4,t],[0,2,2.6,7,1,.3,"#1B1530"]),n.body.push([3,2,-3,.8,9,.8,"#C0C7D1"])}function Qc(n,t){n.head.push([0,9.5,0,13,1,13,t],[0,10.5,0,9,3,9,t],[0,13.5,-.3,6.5,3,6.5,t],[0,16.5,-.6,4,3,4,t],[0,19.5,-.9,2,2,2,t],...wn(0,11,4.6)),n.body.push([0,-5,0,10,5.2,6,t],...wn(-2,4,2.6,oe,.6),...wn(2,1,2.6,oe,.6),...wn(-1,-3,3.1,oe,.6)),n.armR.push([0,-15,1.5,.8,7,.8,"#8A5634"],...wn(0,-9,1.5,oe,.7))}function th(n){n.head.push([0,8.5,0,11.2,3.2,11.2,oe],[0,8.5,.6,12.4,.8,12.4,oe],[0,11.7,0,2,.8,9,"#F5C518"]),n.body.push([0,2,2.6,9.2,1,.3,he],[0,5,2.6,9.2,1,.3,he]),n.armR.push([0,-15,1,.9,7,.9,"#8A5634"],[0,-9,1,3.5,1.6,1.6,"#9AA3AE"])}function eh(n){n.head.push([0,8.5,0,11,3,11,"#24325E"],[0,8.5,6,9,.8,2.6,re],[0,9.5,5.6,1.6,1.6,.4,oe]),n.body.push([0,0,0,9.4,1.2,5.4,re],[-2.4,5,2.6,1.4,1.4,.3,oe],...wn(2,4.5,2.6,oe,.5))}function nh(n){n.head.push([0,8.5,0,11.4,3.2,11.4,"#E8473C"],[0,8.5,-.5,13.4,.9,13.4,"#E8473C"],[0,9,5.8,2.6,2.4,.4,oe]),n.body.push([0,1.5,0,9.4,1,5.4,oe],[0,4.5,0,9.4,1,5.4,oe]),n.armL.push([0,-4,0,3.4,1,3.6,oe]),n.armR.push([0,-4,0,3.4,1,3.6,oe]),n.legL.push([0,-3.5,0,4,.8,4.6,oe]),n.legR.push([0,-3.5,0,4,.8,4.6,oe])}function ih(n){n.body.push([0,4,2.55,3,4,.3,he],[0,3,2.7,1,4.5,.3,"#E8473C"],[0,7.2,2.7,1.6,.8,.3,"#E8473C"]),n.armR.push([0,-14,0,2,5,6,"#8A5634"],[0,-9,0,1,1.2,2.4,"#5A3A22"])}function sh(n){n.head.push([0,8.5,0,11,3,11,he],[0,8.5,6,9,.8,2.6,re],[0,8.4,0,11.1,.8,11.1,re],[0,9.5,5.6,2.4,1.4,.4,Ws]),n.body.push([0,3,2.6,1,4,.3,Ws],[-2.4,5.5,2.6,2,.8,.3,Ws]),n.armL.push([0,-6,0,3.4,.8,3.6,Ws]),n.armR.push([0,-6,0,3.4,.8,3.6,Ws])}function rh(n){n.head.push([0,8.5,-.5,11,2.2,11,"#3E7B32"],[1.2,10.3,-.3,9,1.4,9,"#3E7B32"],[-3,9.6,5.1,1.4,1.4,.4,oe]),n.body.push([-2.3,4,2.6,2.6,2,.3,"#5C6E32"],[2.3,4,2.6,2.6,2,.3,"#5C6E32"],[0,0,0,9.4,1.2,5.4,"#3B2A1A"])}function W0(n,t){let e=n.fur,i=n.light;n.animal==="bunny"?(t.head.push([2.4,10,0,2.4,8,1.6,e],[-2.4,10,0,2.4,8,1.6,e],[2.4,11,.85,1.2,6,.2,"#FFB0CF"],[-2.4,11,.85,1.2,6,.2,"#FFB0CF"]),t.head.push([0,1,5.3,4,2.6,.8,i]),t.body.push([0,-3,-3,3.4,3,2,he])):n.animal==="cat"?(t.head.push([3.2,10,0,3,2.4,2,e],[-3.2,10,0,3,2.4,2,e],[3.2,12.4,0,1.4,1.2,1.6,e],[-3.2,12.4,0,1.4,1.2,1.6,e]),t.head.push([3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"],[-3.2,10.3,1.05,1.4,1.4,.2,"#FF8FB1"]),t.body.push([0,0,-3.5,1.8,1.8,3,e],[0,0,-5.2,1.8,9,1.8,e],[0,9,-5.2,1.8,1.8,1.8,i])):n.animal==="dog"?(t.head.push([5.6,1.5,.5,1.4,8,4.5,n.ears],[-5.6,1.5,.5,1.4,8,4.5,n.ears]),t.head.push([0,.5,5.9,5,3.4,1.8,i],[0,3.2,6.9,2,1,.4,re]),t.head.push([2.5,7.5,5.1,2.4,2.4,.2,i]),t.body.push([0,2,-3.5,1.8,1.8,3,e],[0,3.5,-5,1.8,3,1.8,e])):n.animal==="kangaroo"&&(t.head.push([2.6,10,-.5,2.2,6.5,1.4,e],[-2.6,10,-.5,2.2,6.5,1.4,e],[2.6,11,.3,1.1,4.5,.2,"#F1B7A0"],[-2.6,11,.3,1.1,4.5,.2,"#F1B7A0"]),t.head.push([0,.5,5.6,5,3.4,1.4,i]),t.body.push([0,.3,2.85,6.5,3.5,.8,i]),t.body.push([0,-7,-4.5,3.4,3.4,4,e],[0,-7,-8.5,2.8,2.4,4.5,e],[0,-7,-11.5,2.2,1.8,2,e]),n.baby&&t.body.push([0,2.5,3.6,3.4,3.2,2.6,e],[-.8,4.2,4.95,.6,.8,.2,re],[.8,4.2,4.95,.6,.8,.2,re],[-1,5.7,3.6,.8,1.4,.8,e],[1,5.7,3.6,.8,1.4,.8,e]),t.armL.push([0,-9,0,3.4,2.6,3.4,n.gloves]),t.armR.push([0,-9,0,3.4,2.6,3.4,n.gloves])),t.body.push([0,.5,2.55,6,6,.3,i])}var X0=Object.keys(Ua);function Na(n,{shadows:t=!0}={}){let e=Ua[n]||Ua.boni,i=dn({},e);i.animal&&(i.skin=i.skin||i.fur,i.shirt=i.fur,i.pants=i.fur,i.shoes=i.light,i.hands=i.fur,i.faceColor=i.faceColor||i.fur,i.style="none");let s={head:[],body:[],armL:[],armR:[],legL:[],legR:[],root:[]},r=i.sleeve||i.shirt;s.head.push([0,0,0,10,10,10,i.headColor||i.faceColor||i.skin]),s.head.push(...V0(i.style||"short",i.hair)),s.body.push([0,0,0,9,8,5,i.shirt]);for(let[w,B]of[[s.armL,1],[s.armR,-1]])w.push([0,-6,0,3,6,3.2,r],[0,-8.5,0,2.8,2.5,2.8,i.hands||i.skin]);for(let w of[s.legL,s.legR])w.push([0,-7,0,3.8,7,4,i.pants],[0,-7,.4,4,1.6,4.8,i.shoes]);i.animal&&W0(i,s),i.extra&&i.extra(s);let a=_s(n),o=(w,B)=>ri(w,{seed:a+B,jitter:.035,shadows:t}),l=new Te,c=1/16,h=(w,B,Q,y,C)=>{let tt=new Te;return tt.position.set(B*c,Q*c,y*c),tt.add(o(w,C)),l.add(tt),tt},d=h(s.legL,2.1,7,0,1),f=h(s.legR,-2.1,7,0,2),m=h(s.body,0,7,0,3),g=h(s.head,0,15,0,4),v=h(s.armL,6,14.5,0,5),p=h(s.armR,-6,14.5,0,6);s.root.length&&l.add(o(s.root,7));let u=document.createElement("canvas");u.width=20,u.height=20;let E=u.getContext("2d"),x=new ps(u);x.magFilter=Ee,x.minFilter=Ee,x.colorSpace=$e;let R=new De(new us(10*c,10*c),new Ti({map:x}));R.position.set(0,5*c,5.02*c),g.add(R);let F="",b=w=>{w!==F&&(F=w,G0(E,i,w),x.needsUpdate=!0)};return b("happy"),{id:n,root:l,head:g,body:m,armL:v,armR:p,legL:d,legR:f,setMood:b,height:25*c}}function Ba(n,t,{walking:e=0,cheer:i=0,sleepy:s=0}){let r=Math.sin(t*9)*.7*e;n.legL.rotation.x=r,n.legR.rotation.x=-r;let a=i*(2.5+Math.sin(t*12)*.25);n.armL.rotation.x=-r*.9,n.armR.rotation.x=r*.9,n.armL.rotation.z=a,n.armR.rotation.z=-a;let o=e?Math.abs(Math.sin(t*9))*.04:0,l=i?Math.abs(Math.sin(t*7))*.25*i:0;n.body.position.y=7/16+o,n.head.position.y=15/16+o,n.armL.position.y=n.armR.position.y=14.5/16+o,n.root.position.y=l,n.head.rotation.z=s*.14,n.head.rotation.x=s*.1+Math.sin(t*2)*.03}var oh={_about:"House templates, shared by the 3D house (web/house/src/world.js) and the app (Layouts.kt). Floor tiles; rooms keep the app's numbering: 0 bedroom, 1 dining room, 2 living room, 3 bathroom, 4 garden. Doors: on the line x=c (axis x) or z=c (axis z), at position p along it. Windows: room+side (N z=z0, S z=z1, W x=x0, E x=x1) -> position(s) along that wall.",layouts:[{id:"classic",price:0,rooms:[{x0:0,z0:0,x1:8,z1:8},{x0:0,z0:8,x1:8,z1:16},{x0:8,z0:8,x1:16,z1:16},{x0:8,z0:0,x1:16,z1:8},{x0:16,z0:0,x1:24,z1:16,garden:!0}],doors:[{a:0,b:1,axis:"z",c:8,p:4},{a:0,b:3,axis:"x",c:8,p:4},{a:3,b:2,axis:"z",c:8,p:12},{a:1,b:2,axis:"x",c:8,p:12},{a:2,b:4,axis:"x",c:16,p:12}],windows:{"0N":2.5,"1W":12,"2S":[10,14],"3N":10.2}},{id:"long",price:0,rooms:[{x0:17,z0:0,x1:24,z1:8},{x0:0,z0:0,x1:8,z1:8},{x0:8,z0:0,x1:17,z1:8},{x0:24,z0:0,x1:30,z1:8},{x0:0,z0:8,x1:30,z1:15,garden:!0}],doors:[{a:1,b:2,axis:"x",c:8,p:4},{a:2,b:0,axis:"x",c:17,p:4},{a:0,b:3,axis:"x",c:24,p:4.5},{a:2,b:4,axis:"z",c:8,p:12.5}],windows:{"0N":20,"1N":4,"1W":4,"2N":[10.5,14.5],"3N":27,"3E":4.5,"0S":20.5,"1S":4}},{id:"corner",price:0,rooms:[{x0:0,z0:0,x1:8,z1:8},{x0:0,z0:8,x1:9,z1:15},{x0:0,z0:15,x1:9,z1:23},{x0:8,z0:0,x1:14,z1:8},{x0:9,z0:8,x1:19,z1:23,garden:!0}],doors:[{a:0,b:3,axis:"x",c:8,p:4},{a:0,b:1,axis:"z",c:8,p:4},{a:1,b:2,axis:"z",c:15,p:4.5},{a:2,b:4,axis:"x",c:9,p:19},{a:1,b:4,axis:"x",c:9,p:11.5}],windows:{"0N":2.5,"0W":4,"1W":11.5,"2W":[17,21],"2S":4.5,"3N":9.7,"3E":4}},{id:"courtyard",price:1500,rooms:[{x0:0,z0:0,x1:7,z1:8},{x0:17,z0:0,x1:24,z1:16},{x0:7,z0:0,x1:17,z1:8},{x0:0,z0:8,x1:7,z1:14},{x0:7,z0:8,x1:17,z1:16,garden:!0}],doors:[{a:0,b:2,axis:"x",c:7,p:4},{a:0,b:3,axis:"z",c:8,p:1.6},{a:2,b:1,axis:"x",c:17,p:4},{a:2,b:4,axis:"z",c:8,p:12},{a:1,b:4,axis:"x",c:17,p:12}],windows:{"0N":2.5,"0W":4,"2N":[10,14],"1N":20.5,"1E":[4,12],"3W":11,"3S":3.5}},{id:"villa",price:2500,rooms:[{x0:0,z0:0,x1:10,z1:9},{x0:12,z0:9,x1:20,z1:19},{x0:0,z0:9,x1:12,z1:19},{x0:10,z0:0,x1:16,z1:9},{x0:0,z0:19,x1:20,z1:27,garden:!0}],doors:[{a:0,b:3,axis:"x",c:10,p:5},{a:0,b:2,axis:"z",c:9,p:5},{a:3,b:1,axis:"z",c:9,p:14.5},{a:2,b:1,axis:"x",c:12,p:14},{a:2,b:4,axis:"z",c:19,p:6},{a:1,b:4,axis:"z",c:19,p:16}],windows:{"0N":[2.5,6.5],"0W":4.5,"2W":[12,16],"3N":11.7,"3E":4.5,"1E":[12,16],"1N":18}}]};var ah=oh.layouts;function Y0(){let n=null;try{window.Android&&window.Android.layout&&(n=window.Android.layout())}catch(t){}return n||(n=new URLSearchParams(location.search).get("layout")),ah.find(t=>t.id===n)||ah[0]}var Oa=Y0(),ae=Oa.rooms,Qt={x0:Math.min(...ae.map(n=>n.x0)),z0:Math.min(...ae.map(n=>n.z0)),x1:Math.max(...ae.map(n=>n.x1)),z1:Math.max(...ae.map(n=>n.z1))},za={x:(Qt.x0+Qt.x1)/2,z:(Qt.z0+Qt.z1)/2},xs=3,Ve=.16,un=1.7,Xs=2.3,ys=.16,vs=Oa.doors,Z0=Oa.windows||{},Qr=ae.findIndex(n=>n.garden);function J0(){let n=t=>({x:(ae[t].x0+ae[t].x1)/2,z:(ae[t].z0+ae[t].z1)/2});return{night:{x:ae[0].x1-.85,z:ae[0].z0+.8},bedRug:{x:n(0).x,z:n(0).z+.6},table:{x:n(1).x,z:n(1).z+.2},livRug:{x:n(2).x,z:n(2).z+.6},coffee:{x:n(2).x,z:n(2).z+1.05},sink:{x:ae[3].x1-2.05,z:ae[3].z0+.75}}}var Be=J0();function Ye(n,t){for(let e=0;e<ae.length;e++){let i=ae[e];if(n>=i.x0&&n<i.x1&&t>=i.z0&&t<i.z1)return e}return-1}function Li(n){let t=ae[n];return new L((t.x0+t.x1)/2,0,(t.z0+t.z1)/2)}var qs=[{room:0,x0:Be.night.x-.55,x1:Be.night.x+.55,z0:Be.night.z-.5,z1:Be.night.z+.5,y:.8},{room:1,x0:Be.table.x-1.7,x1:Be.table.x+1.7,z0:Be.table.z-1,z1:Be.table.z+1,y:.95},{room:2,x0:Be.coffee.x-1,x1:Be.coffee.x+1,z0:Be.coffee.z-.55,z1:Be.coffee.z+.55,y:.5},{room:3,x0:Be.sink.x-1.65,x1:Be.sink.x+1.65,z0:Be.sink.z-.55,z1:Be.sink.z+.55,y:1}];function lh(n,t){let e=0;for(let i of qs)n>i.x0&&n<i.x1&&t>i.z0&&t<i.z1&&(e=Math.max(e,i.y));return e}function $0(){let n=[];return ae.forEach((t,e)=>{if(!t.garden)for(let i of["N","S","W","E"]){let s=i==="N"||i==="S"?"z":"x",r=i==="N"?t.z0:i==="S"?t.z1:i==="W"?t.x0:t.x1,a=s==="z"?t.x0:t.z0,o=s==="z"?t.x1:t.z1,l=vs.filter(h=>(h.a===e||h.b===e)&&h.axis===s&&h.c===r&&h.p>a&&h.p<o).map(h=>h.p).sort((h,d)=>h-d),c=i==="N"||i==="W"?1:-1;n.push({room:e,side:i,axis:s,c:r,from:a,to:o,doors:l,inward:c,lowered:!1,k:1})}}),n}function ch(n,t,e){let i=ae[n],s={N:e-i.z0,S:i.z1-e,W:t-i.x0,E:i.x1-t},r="N";for(let c of["S","W","E"])s[c]<s[r]&&(r=c);let a=.7,o=Math.min(i.x1-a,Math.max(i.x0+a,t)),l=Math.min(i.z1-a,Math.max(i.z0+a,e));return r==="N"?{side:r,x:o,z:i.z0+Ve,rotY:0}:r==="S"?{side:r,x:o,z:i.z1-Ve,rotY:Math.PI}:r==="W"?{side:r,x:i.x0+Ve,z:l,rotY:Math.PI/2}:{side:r,x:i.x1-Ve,z:l,rotY:-Math.PI/2}}function hh(n){let t={walls:$0(),wallGroups:[]},e=Fi(7),i=za,s=[];s.push([i.x*16,-6,i.z*16,(Qt.x1-Qt.x0+56)*16,2,(Qt.z1-Qt.z0+54)*16,"#8ED16F"]);let r=b=>b[Math.floor(e()*b.length)];ae.forEach((b,w)=>{for(let B=b.x0;B<b.x1;B++)for(let Q=b.z0;Q<b.z1;Q++){let y;w===0?y=r(["#E8B98A","#E2B080","#EDC296"]):w===1?y=(B+Q)%2?"#B8C7E0":"#FFFFFF":w===2?y=r(["#D29E6C","#C99463","#D8A673"]):w===3?y=(B+Q)%2?"#CDEBFF":"#FFFFFF":y=r(["#7ED957","#74CF4E","#86DE60","#6FC94A"]),s.push([(B+.5)*16,-3,(Q+.5)*16,16,3,16,y])}});let a=ae[Qr],o=vs.find(b=>b.a===Qr||b.b===Qr),l={axis:o.axis,p:o.p},c=(b,w)=>Math.abs((l.axis==="z"?b:w)-l.p)<.8,h=o.axis==="x"?o.c===a.x0?"E":"W":o.c===a.z0?"S":"N";if(o.axis==="x")for(let b=a.x0;b<a.x1;b++)s.push([(b+.5)*16,-2.8,o.p*16,14,3,14,b%2?"#D8D2C4":"#CFC8B8"]);else for(let b=a.z0;b<a.z1;b++)s.push([o.p*16,-2.8,(b+.5)*16,14,3,14,b%2?"#D8D2C4":"#CFC8B8"]);let d=(a.x1-a.x0)*(a.z1-a.z0);for(let b=0;b<Math.round(d/5);b++){let w=a.x0+.3+e()*(a.x1-a.x0-.6),B=a.z0+.3+e()*(a.z1-a.z0-.6);c(w,B)||s.push([w*16,0,B*16,1.2,2+e()*2,1.2,"#5CB83A"])}let f=(b,w)=>ae.some(B=>b>B.x0-.6&&b<B.x1+.6&&w>B.z0-.6&&w<B.z1+.6);for(let b=0;b<40;b++){let w=Qt.x0-6+e()*(Qt.x1-Qt.x0+12),B=Qt.z0-6+e()*(Qt.z1-Qt.z0+12);f(w,B)||(e()<.5?s.push([w*16,-4,B*16,10,8,10,r(["#4CB050","#3E9B45","#5CC23A"])]):s.push([w*16,-4,B*16,3,7,3,r(["#FF8FB1","#FFD43B","#FFFFFF","#C9A0FF"])]))}let m=ri(s,{seed:3,jitter:.03});m.traverse(b=>{b.isMesh&&(b.castShadow=!1)}),n.add(m);let g="#B9784A",v="#8A5634",p=Be,u=b=>b*16,E=[[u(p.bedRug.x),0,u(p.bedRug.z),52,.6,36,"#FFB8D4"],[u(p.bedRug.x),.6,u(p.bedRug.z),44,.3,28,"#FFD1E3"],[u(p.night.x),0,u(p.night.z),17,12.8,15,g],[u(p.night.x),4,u(p.night.z+.5)+.5,13,3.5,.6,v],[u(p.night.x),5.5,u(p.night.z+.5)+1,2,1,.6,"#FFD43B"],[u(p.table.x),14,u(p.table.z),54,1.4,32,g],[u(p.table.x),15.2,u(p.table.z),50,.2,28,"#FFFFFF"],...[[-24,-13],[24,-13],[-24,13],[24,13]].map(([b,w])=>[u(p.table.x)+b,0,u(p.table.z)+w,2,14,2,v]),[u(p.livRug.x),0,u(p.livRug.z),64,.6,44,"#8E6CFF"],[u(p.livRug.x),.6,u(p.livRug.z),52,.3,34,"#B9A6FF"],[u(p.coffee.x),6,u(p.coffee.z),32,2,18,v],...[[-14,-7],[14,-7],[-14,7],[14,7]].map(([b,w])=>[u(p.coffee.x)+b,0,u(p.coffee.z)+w,2,6,2,g]),[u(p.sink.x),0,u(p.sink.z),52,15,17,"#FFFFFF"],[u(p.sink.x),15,u(p.sink.z),54,1,18,"#9FD8F5"],[u(p.sink.x),15.2,u(p.sink.z+.1),14,1,10,"#CDEBFF"],[u(p.sink.x),16,u(p.sink.z-.35),1.6,4,1.6,"#C0C7D1"],[u(p.sink.x),19,u(p.sink.z-.2),1.6,1.2,4,"#C0C7D1"],[u(p.sink.x-.75),4,u(p.sink.z+.55)+1,18,8,.5,"#E6F6FF"],[u(p.sink.x+.75),4,u(p.sink.z+.55)+1,18,8,.5,"#E6F6FF"]],x=[],R=(b,w)=>x.push([b*16,0,w*16,2,11,2,"#FFFFFF"],[b*16,11,w*16,1.4,1.4,1.4,"#F2EEE8"]),F=(b,w)=>{let B=Ye(b,w);return B>=0&&B!==Qr};for(let b of["N","S","W","E"]){let w=b==="N"||b==="S",B=w?a.x0:a.z0,Q=w?a.x1:a.z1,y=b==="N"?a.z0+.1:b==="S"?a.z1-.1:b==="W"?a.x0+.1:a.x1-.1,C=b==="N"||b==="W"?-.4:.4,tt=q=>w?[q,y]:[y,q],et=q=>w?F(q,y+C):F(y+C,q),I=q=>b===h&&Math.abs(q-o.p)<.6;for(let q=B+.5;q<Q;q+=1){if(et(q)||I(q))continue;R(...tt(q));let Y=q+1;if(Y<Q&&!et(Y)&&!I(Y)){let[K,J]=tt(q+.5);x.push(w?[K*16,6,J*16,16,1.5,1,"#FFFFFF"]:[K*16,6,J*16,1,1.5,16,"#FFFFFF"])}}}return n.add(ri(E.concat(x),{seed:11,jitter:.03})),t.wallParent=new Te,n.add(t.wallParent),t.setWallColors=b=>K0(t,b),t}function K0(n,t){for(let e of n.wallGroups)n.wallParent.remove(e),e.traverse(i=>i.geometry&&i.geometry.dispose());n.wallGroups=[];for(let e of n.walls){let i=t[e.room]||"#FFF1DC",s=[],r=[],a=e.from;for(let f of e.doors)r.push([a,f-un/2,0,xs],[f-un/2,f+un/2,Xs,xs]),a=f+un/2;r.push([a,e.to,0,xs]);let o=e.c+e.inward*Ve/2,l=(f,m,g,v,p,u=Ve,E=0,x)=>{let R=m-f;if(R<=0)return;let F=(f+m)/2,b=o+e.inward*E;e.axis==="z"?s.push([F*16,g*16,b*16,R*16,(v-g)*16,u*16,p,x]):s.push([b*16,g*16,F*16,u*16,(v-g)*16,R*16,p,x])};for(let[f,m,g,v]of r)l(f,m,g,v,i),l(f,m,g,Math.min(v,.18),"#FFFFFF",Ve+.04,.02),e.room===3&&l(f,m,g,Math.min(v,1.3),"#9FD8F5",Ve+.04,.02),v>=xs&&l(f,m,xs-.12,xs,"#FFFFFF",Ve+.02,0);for(let f of e.doors)l(f-un/2-.12,f-un/2,0,Xs,"#FFFFFF",Ve+.06,.02),l(f+un/2,f+un/2+.12,0,Xs,"#FFFFFF",Ve+.06,.02),l(f-un/2-.12,f+un/2+.12,Xs,Xs+.12,"#FFFFFF",Ve+.06,.02);let c=Z0[`${e.room}${e.side}`],h=c==null?[]:Array.isArray(c)?c:[c];for(let f of h)l(f-1.05,f+1.05,1.05,2.55,"#FFFFFF",Ve+.06,0),l(f-.9,f+.9,1.2,2.4,"#BDE7FF",Ve+.08,0,"glow"),l(f-.04,f+.04,1.2,2.4,"#FFFFFF",Ve+.1,0),l(f-.9,f+.9,1.76,1.84,"#FFFFFF",Ve+.1,0);let d=ri(s,{seed:e.room*10+e.c,jitter:.015});d.scale.y=e.k,e.group=d,n.wallGroups.push(d),n.wallParent.add(d)}}function uh(n,t,e,i){for(let s of n.walls){let r=s.axis==="z"?t.z:t.x,a=s.axis==="z"?e.z:e.x,o=(r-s.c)*(a-s.c)<0;s.lowered=o;let l=o?.12:1;s.k+=(l-s.k)*Math.min(1,i*8),s.group&&(s.group.scale.y=s.k)}}function dh(n,t,e){return n.walls.find(i=>i.room===t&&i.side===e)}var Ha=.3,Di=.25,ge=Math.round((Qt.x1-Qt.x0)/Di),li=Math.round((Qt.z1-Qt.z0)/Di),ph=[];ae.forEach((n,t)=>{let e=[{axis:"z",c:n.z0,from:n.x0,to:n.x1},{axis:"z",c:n.z1,from:n.x0,to:n.x1},{axis:"x",c:n.x0,from:n.z0,to:n.z1},{axis:"x",c:n.x1,from:n.z0,to:n.z1}];for(let i of e){let s=vs.filter(r=>(r.a===t||r.b===t)&&r.axis===i.axis&&r.c===i.c).map(r=>r.p);ph.push(Tn(dn({},i),{doors:s}))}});var j0=qs.map(n=>({x0:n.x0,x1:n.x1,z0:n.z0,z1:n.z1}));function ka(n,t,e){if(n<Qt.x0+e+ys||n>Qt.x1-e-ys||t<Qt.z0+e+ys||t>Qt.z1-e-ys)return!0;for(let i of ph){let s=i.axis==="z"?t:n,r=i.axis==="z"?n:t;if(!(Math.abs(s-i.c)>=ys+e)&&!(r<i.from-e||r>i.to+e)&&!i.doors.some(a=>Math.abs(r-a)<un/2-e))return!0}return!1}function fh(n,t,e,i){return n>e.x0-i&&n<e.x1+i&&t>e.z0-i&&t<e.z1+i}function mh(n,t){let e=j0.concat(n),i=Ha;return{blocked:(a,o)=>{if(ka(a,o,i))return!0;for(let l of e)if(fh(a,o,l,i))return!0;for(let l of t)if((l.x-a)**2+(l.z-o)**2<(2*i)**2)return!0;return!1},blockedStatic:(a,o)=>{if(ka(a,o,i))return!0;for(let l of e)if(fh(a,o,l,i))return!0;return!1},others:t}}var oi=n=>Qt.x0+(n+.5)*Di,ai=n=>Qt.z0+(n+.5)*Di,Ms=n=>Math.min(ge-1,Math.max(0,Math.floor((n-Qt.x0)/Di))),Ss=n=>Math.min(li-1,Math.max(0,Math.floor((n-Qt.z0)/Di)));function Q0(n){let t=new Uint8Array(ge*li);for(let e=0;e<li;e++)for(let i=0;i<ge;i++)t[e*ge+i]=n.blocked(oi(i),ai(e))?1:0;return t}function tg(n,t){let e=new Float64Array(ge*li).fill(1/0),i=new Int32Array(ge*li).fill(-1),s=[],r=(l,c)=>{s.push([c,l]);let h=s.length-1;for(;h>0;){let d=h-1>>1;if(s[d][0]<=s[h][0])break;[s[d],s[h]]=[s[h],s[d]],h=d}},a=()=>{let l=s[0],c=s.pop();if(s.length){s[0]=c;let h=0;for(;;){let d=2*h+1,f=d+1,m=h;if(d<s.length&&s[d][0]<s[m][0]&&(m=d),f<s.length&&s[f][0]<s[m][0]&&(m=f),m===h)break;[s[m],s[h]]=[s[h],s[m]],h=m}}return l};e[t]=0,r(t,0);let o=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,1.414],[1,-1,1.414],[-1,1,1.414],[-1,-1,1.414]];for(;s.length;){let[l,c]=a();if(l>e[c])continue;let h=c%ge,d=c/ge|0;for(let[f,m,g]of o){let v=h+f,p=d+m;if(v<0||p<0||v>=ge||p>=li)continue;let u=p*ge+v;if(n[u]||f&&m&&(n[d*ge+v]||n[p*ge+h]))continue;let E=l+g;E<e[u]&&(e[u]=E,i[u]=c,r(u,E))}}return{dist:e,prev:i}}function eg(n,t,e,i,s){let r=Math.hypot(i-t,s-e),a=Math.max(1,Math.ceil(r/.08));for(let o=1;o<=a;o++){let l=o/a;if(n.blocked(t+(i-t)*l,e+(s-e)*l))return!1}return!0}function gh(n,t,e,i,s){let r=Q0(n),a=Ss(e)*ge+Ms(t),o=[];if(r[a]){let u=-1,E=1/0;for(let x=Math.max(0,Ss(e)-4);x<=Math.min(li-1,Ss(e)+4);x++)for(let R=Math.max(0,Ms(t)-4);R<=Math.min(ge-1,Ms(t)+4);R++){let F=x*ge+R,b=(oi(R)-t)**2+(ai(x)-e)**2;!r[F]&&b<E&&!ka((oi(R)+t)/2,(ai(x)+e)/2,.05)&&(E=b,u=F)}if(u<0)return null;a=u,o.push({x:oi(a%ge),z:ai(a/ge|0)})}let{dist:l,prev:c}=tg(r,a),h=Ss(s)*ge+Ms(i),d={x:i,z:s};if(r[h]||n.blocked(i,s)){let u=-1,E=1/0,x=2.6,R=Ye(i,s),F=Math.ceil(x/Di);for(let b=Math.max(0,Ss(s)-F);b<=Math.min(li-1,Ss(s)+F);b++)for(let w=Math.max(0,Ms(i)-F);w<=Math.min(ge-1,Ms(i)+F);w++){let B=b*ge+w,Q=(oi(w)-i)**2+(ai(b)-s)**2;Q<=x*x&&l[B]<1/0&&Q<E&&Ye(oi(w),ai(b))===R&&(E=Q,u=B)}if(u<0)return null;h=u,d={x:oi(h%ge),z:ai(h/ge|0)}}else if(l[h]===1/0)return null;let f=[];for(let u=h;u>=0&&u!==a;u=c[u])f.unshift({x:oi(u%ge),z:ai(u/ge|0)});f.length?f[f.length-1]=d:f.push(d);let m=o.length?o[0]:{x:t,z:e},g=[],v=m,p=0;for(;p<f.length;){let u=p;for(let E=f.length-1;E>p;E--)if(eg(n,v.x,v.z,f[E].x,f[E].z)){u=E;break}g.push(f[u]),v=f[u],p=u+1}return o.concat(g)}var an=new URLSearchParams(location.search),Es=an.get("thumb"),_h=window.Android,xh={onReady(){},onMoved(n,t,e,i,s){console.log("moved",n,t,e,i,s)},onStore(n){console.log("store",n),Zs.items=Zs.items.map(t=>t.id===n?Tn(dn({},t),{inRoom:!1}):t),Ys.setState(JSON.stringify(Zs))},onTapBuddy(n){Ys.say(n,"\u05E9\u05DC\u05D5\u05DD! \u05D0\u05E0\u05D9 "+n)},onFocus(n){console.log("focus",n)}},bs={};for(let n of Object.keys(xh))bs[n]=(...t)=>{try{return _h?_h[n](...t):xh[n](...t)}catch(e){console.error("bridge "+n+": "+e.message)}};var tn;try{tn=new ds({antialias:!0,alpha:!!Es,preserveDrawingBuffer:!!Es})}catch(n){tn=new ds({antialias:!1})}tn.setPixelRatio(Math.min(window.devicePixelRatio||1,2));tn.shadowMap.enabled=!0;tn.shadowMap.type=Aa;document.body.appendChild(tn.domElement);var Qe=new kr,Ge=new qe(42,1,.1,200);Qe.add(new Gr(16777215,13214586,1.5));var Me=new Wr(16777215,1.9);Me.castShadow=!0;Me.shadow.mapSize.set(Es?1024:2048,Es?1024:2048);Me.shadow.bias=-8e-4;Me.shadow.normalBias=.02;Qe.add(Me,Me.target);function Va(){let n=window.innerWidth||document.documentElement.clientWidth||1,t=window.innerHeight||document.documentElement.clientHeight||1;tn.setSize(n,t,!1),tn.domElement.style.width=n+"px",tn.domElement.style.height=t+"px",Ge.aspect=n/t,Ge.updateProjectionMatrix()}window.addEventListener("resize",Va);Va();var Ui={};function yh(n){if(!Ui[n]){let t=Da[n],e=t?t():[[0,0,0,8,8,8,"#FF5C9A"]];Ui[n]={boxes:e,bounds:Yc(e)}}return Ui[n]}function vh(n){let{boxes:t,bounds:e}=yh(n),i=ri(t,{seed:_s(n)}),s=new Te;return s.add(i),s.userData={kind:"item",id:n,bounds:e},s}if(Es){let[n,t]=Es.split(":"),e,i;if(n==="item"){e=vh(t);let c=Ui[t].bounds,h=Hn[t]||{};if(i={w:c.w/16,h:c.h/16,d:c.d/16,cy:h.wall||h.fly?0:c.h/32},h.wall||h.fly){let d=1/0,f=-1/0;Ui[t].boxes.forEach(m=>{d=Math.min(d,m[1]),f=Math.max(f,m[1]+m[4])}),i.cy=(d+f)/32,i.h=(f-d)/16}}else{let c=Na(t),h=an.get("mood")||"happy";if(c.setMood(h),Ba(c,.13,{cheer:h==="cheer"?1:0,sleepy:h==="sleepy"?1:0}),c.root.position.y=0,e=new Te,e.add(c.root),h==="sleepy"){let d=new fs({map:Mh(),transparent:!0,depthWrite:!1});[[.45,1.65,.22],[.62,1.88,.3]].forEach(([f,m,g])=>{let v=new ks(d);v.position.set(f,m,.2),v.scale.setScalar(g),e.add(v)})}i={w:1,h:1.55,d:.7,cy:.82},(t==="wizard_b"||t==="wizard_g")&&(i={w:1,h:1.85,d:.7,cy:.95}),(t==="kangi"||t==="roni"||t==="boni"||t==="bobi")&&(i.h=1.75,i.cy=.9)}Qe.add(e);let s=n==="item"?(Hn[t]||{}).wall?.35:.55:.38,r=n==="item"?.42:.18,o=(Math.max(i.w,i.h,i.d)*1.25+.2)/Math.tan(Ge.fov*Math.PI/360)*.62,l=new L(0,i.cy,0);Ge.position.set(Math.sin(s)*Math.cos(r)*o,i.cy+Math.sin(r)*o,Math.cos(s)*Math.cos(r)*o),Ge.lookAt(l),Me.position.set(3,8,6),Me.shadow.camera.left=Me.shadow.camera.bottom=-3,Me.shadow.camera.right=Me.shadow.camera.top=3,Me.shadow.camera.updateProjectionMatrix(),tn.setClearColor(0,0),tn.render(Qe,Ge),window.__thumbDone=!0}else try{sg();let n=document.getElementById("msg");n&&(n.style.display="none")}catch(n){throw window.houseError&&window.houseError(n&&n.message?n.message:String(n)),n}var ng=0,ig=setInterval(()=>{Va(),++ng>20&&clearInterval(ig)},250),Ys,Zs;function sg(){Qe.background=new Kt("#BFE6FF"),Qe.fog=new zr("#BFE6FF",45,90);let n=hh(Qe),t=za,e=Math.max(Qt.x1-Qt.x0,Qt.z1-Qt.z0),i=Math.max(18,e*.75+2);Me.position.set(t.x+8,30,t.z+14),Me.target.position.set(t.x,0,t.z),Me.shadow.camera.left=-i,Me.shadow.camera.right=i,Me.shadow.camera.top=i,Me.shadow.camera.bottom=-i,Me.shadow.camera.near=5,Me.shadow.camera.far=80,Me.shadow.camera.updateProjectionMatrix();let s=document.getElementById("overlay"),r={yaw:.55,pitch:.9,dist:13,target:Li(0).setY(.6)},a={yaw:r.yaw,pitch:r.pitch,dist:r.dist,target:r.target.clone()},o=0,l=!1;function c(){let S=Math.cos(r.pitch);Ge.position.set(r.target.x+Math.sin(r.yaw)*S*r.dist,r.target.y+Math.sin(r.pitch)*r.dist,r.target.z+Math.cos(r.yaw)*S*r.dist),Ge.lookAt(r.target)}function h(S,W){o=S,l=!1,a.target.copy(Li(S)).setY(.6),a.dist=S===4?17:12.5,W&&(r.target.copy(a.target),r.dist=a.dist)}let d=new Map,f=new Te;Qe.add(f);function m(S){let W=ae[S.room]||ae[0],U=Hn[S.id]||{},T=Math.min(1,Math.max(0,(S.x||0)/.85)),O=Math.min(1,Math.max(0,(S.y||0)/.85)),st=Fi(_s(S.id));if(U.small&&g(S.room)){let Et=g(S.room);return{x:Et.x0+.3+st()*(Et.x1-Et.x0-.6),z:Et.z0+.3+st()*(Et.z1-Et.z0-.6)}}if(U.wall&&!W.garden)return{x:W.x0+1+T*6,z:W.z0+.2};let yt=W.x0+1+T*(W.x1-W.x0-2),Ft=W.z0+1.3+Math.max(0,(O-.4)/.6)*(W.z1-W.z0-2.3);return{x:yt,z:Ft}}let g=S=>rg(S)[0];function v(S,W){let U=Ui[S]?Ui[S].bounds:yh(S).bounds,T=U.w/32,O=U.d/32;return W%2?{hx:O,hz:T}:{hx:T,hz:O}}function p(S){let{obj:W,data:U}=S,T=Hn[U.id]||{},O=U.gx,st=U.gz;if(O==null||st==null||isNaN(O)||isNaN(st)){let Ft=m(U);O=Ft.x,st=Ft.z}let It=Ye(O,st);It<0&&(It=U.room||0),S.room=It;let yt=ae[It];if(T.wall&&!yt.garden){let Ft=ch(It,O,st);W.position.set(Ft.x,1.85,Ft.z),W.rotation.y=Ft.rotY,S.wall=dh(n,It,Ft.side),S.x=Ft.x,S.z=Ft.z}else{let{hx:Ft,hz:Et}=v(U.id,U.rot||0);O=Math.min(yt.x1-Ft-.17,Math.max(yt.x0+Ft+.17,O)),st=Math.min(yt.z1-Et-.17,Math.max(yt.z0+Et+.17,st)),yt.x1-yt.x0<Ft*2+.34&&(O=(yt.x0+yt.x1)/2);let Se=T.fly||T.wall?1.7:T.small?lh(O,st):0;W.position.set(O,Se,st),W.rotation.y=(U.rot||0)*Math.PI/2,S.wall=null,S.x=O,S.z=st,S.baseY=Se}}function u(S){let W=new Set;for(let U of S){if(!U.inRoom)continue;W.add(U.id);let T=d.get(U.id);if(!T){let O=vh(U.id);f.add(O),T={obj:O,data:U},d.set(U.id,T)}wt&&wt.rec===T||(T.data=U,p(T))}for(let[U,T]of d)W.has(U)||(f.remove(T.obj),d.delete(U))}let E=new Map,x=new Te;Qe.add(x);let R=!1,F="";function b(S,W=Math.random){let U=ae[S];return new L(U.x0+1.2+W()*(U.x1-U.x0-2.4),0,U.z0+1.6+W()*(U.z1-U.z0-2.8))}function w(S,W,U){let T=Ye(S.x,S.z),O=[];if(T>=0&&T!==W){let st={[T]:null},It=[T];for(;It.length;){let Et=It.shift();if(Et===W)break;for(let Se of vs){let Ae=Se.a===Et?Se.b:Se.b===Et?Se.a:-1;Ae>=0&&!(Ae in st)&&(st[Ae]={room:Et,door:Se},It.push(Ae))}}let yt=[],Ft=W;for(;st[Ft];)yt.unshift({door:st[Ft].door,from:st[Ft].room,to:Ft}),Ft=st[Ft].room;for(let{door:Et,from:Se,to:Ae}of yt){let ln=Li(Se),ci=Li(Ae),Ze=Et.axis==="z"?new L(Et.p,0,Et.c):new L(Et.c,0,Et.p),Ue=Et.axis==="z"?Math.sign(ln.z-Et.c):Math.sign(ln.x-Et.c),M=-Ue,D=(H,V)=>Et.axis==="z"?new L(Ze.x,0,Ze.z+V*H):new L(Ze.x+V*H,0,Ze.z);O.push(D(.8,Ue),Ze.clone(),D(.8,M))}}return O.push(U),O}function B(S){let W=new Set;S.forEach((U,T)=>{W.add(U.id);let O=E.get(U.id);if(!O){let st=Na(U.id),It=new Te;It.add(st.root),It.userData={kind:"char",id:U.id},st.root.traverse(Et=>{Et.userData.charId=U.id}),x.add(It);let yt=U.main?Li(U.room).add(new L(.6,0,1.2)):b(U.room,Fi(_s(U.id)));It.position.copy(yt),It.rotation.y=.3,O=Tn(dn({id:U.id},st),{holder:It,room:U.room,path:[],idle:1+Math.random()*3,talk:null,talkT:0,awake:!1,cheerT:0,phase:Math.random()*10}),E.set(U.id,O);let Ft=et(O,yt.x,yt.z);Ft&&It.position.set(Ft.x,0,Ft.z)}if(O.main=U.main,O.index=T,O.room!==U.room){O.room=U.room;let st=Ye(O.holder.position.x,O.holder.position.z),It=!U.main&&(Rt===O.id||O.stayT>0);if(st!==U.room&&!It){let yt=U.main?Li(U.room).add(new L(.6,0,1.2)):b(U.room),Ft=tt(O,yt.x,yt.z);O.path=Ft||w(O.holder.position,U.room,yt),O.goal=null}}});for(let[U,T]of E)W.has(U)||(x.remove(T.holder),T.bubble&&T.bubble.remove(),E.delete(U))}function Q(S,W,U=!0){let T=E.get(S);T&&(T.awake=!0,T.talk=W,T.talkT=3.2,T.cheerT=U?1.6:0)}function y(S){let W=[];for(let T of d.values()){let O=Hn[T.data.id]||{};if(T.wall||O.wall||O.fly||O.small&&T.baseY>0)continue;let{hx:st,hz:It}=v(T.data.id,T.data.rot||0);W.push({x0:T.x-st,x1:T.x+st,z0:T.z-It,z1:T.z+It})}let U=[];for(let T of E.values())T!==S&&U.push({x:T.holder.position.x,z:T.holder.position.z});return mh(W,U)}function C(S){return S.map(W=>new L(W.x,0,W.z))}function tt(S,W,U){let T=gh(y(S),S.holder.position.x,S.holder.position.z,W,U);return T?C(T):null}function et(S,W,U){let T=y(S);if(!T.blocked(W,U))return null;for(let O=.25;O<3;O+=.25)for(let st=0;st<16;st++){let It=W+Math.cos(st/16*Math.PI*2)*O,yt=U+Math.sin(st/16*Math.PI*2)*O;if(Ye(It,yt)===Ye(W,U)&&!T.blocked(It,yt))return{x:It,z:yt}}return null}let I=["\u05D0\u05D5-\u05D0\u05D5! \u{1F62E}","\u05D0\u05D5-\u05D0\u05D5... \u05D0\u05D9\u05DF \u05DC\u05D9 \u05D3\u05E8\u05DA \u05DC\u05E9\u05DD","\u05D0\u05D5-\u05D0\u05D5! \u05DE\u05E9\u05D4\u05D5 \u05D7\u05D5\u05E1\u05DD \u05DC\u05D9 \u05D0\u05EA \u05D4\u05D3\u05E8\u05DA"];function q(S){S.path=[],S.goal=null,Q(S.id,I[Math.floor(Math.random()*I.length)],!1),S.shakeT=.6}function Y(S,W,U){S.awake=!0;let T=tt(S,W,U);return T?(S.path=T,S.goal=T[T.length-1].clone(),S.waitT=0,S.stayT=25,X(S.goal),!0):(q(S),!1)}function K(S,W){S.bubble||(S.bubble=document.createElement("div"),S.bubble.className="bubble",s.appendChild(S.bubble)),S.bubble.textContent!==W&&(S.bubble.textContent=W);let U=S.holder.position.clone();U.y+=1.95,U.project(Ge);let T=(U.x*.5+.5)*window.innerWidth,O=(-U.y*.5+.5)*window.innerHeight;S.bubble.style.display=U.z<1?"block":"none",S.bubble.style.left=Math.round(Math.min(window.innerWidth-90,Math.max(90,T)))+"px",S.bubble.style.top=Math.round(Math.max(30,O))+"px"}let J=new qr,j=new kt,lt=new gn(new L(0,1,0),0),ot=new Map,nt=null,wt=null,G={id:null,t:0},it=null;function mt(S,W){let U=tn.domElement.getBoundingClientRect();j.set((S-U.left)/U.width*2-1,-((W-U.top)/U.height)*2+1),J.setFromCamera(j,Ge)}function Ut(S,W){mt(S,W);let U=[];for(let O of d.values())O.obj.visible&&U.push(O.obj);for(let O of E.values())U.push(O.holder);let T=J.intersectObjects(U,!0);for(let O of T){let st=O.object;for(;st&&!st.userData.kind;)st=st.parent;if(st){if(st.userData.kind==="item")return{kind:"item",id:st.userData.id,point:O.point};if(st.userData.kind==="char")return{kind:"char",id:st.userData.id,point:O.point}}}return null}function Mt(S,W){mt(S,W);let U=new L;return J.ray.intersectPlane(lt,U)?U:null}let gt=tn.domElement;gt.addEventListener("pointerdown",S=>{if(gt.setPointerCapture(S.pointerId),ot.set(S.pointerId,{x:S.clientX,y:S.clientY}),ot.size===2){Wt();let[U,T]=[...ot.values()];nt={type:"pinch",d:Math.hypot(U.x-T.x,U.y-T.y),mx:(U.x+T.x)/2,my:(U.y+T.y)/2,dist:a.dist};return}if(ot.size>2)return;let W=Ut(S.clientX,S.clientY);nt={type:"press",x0:S.clientX,y0:S.clientY,x:S.clientX,y:S.clientY,t0:performance.now(),hit:W,moved:!1}}),gt.addEventListener("pointermove",S=>{if(!ot.has(S.pointerId))return;let W=ot.get(S.pointerId);if(ot.set(S.pointerId,{x:S.clientX,y:S.clientY}),!nt)return;if(nt.type==="pinch"&&ot.size>=2){let[O,st]=[...ot.values()],It=Math.hypot(O.x-st.x,O.y-st.y);a.dist=Math.min(34,Math.max(4,nt.dist*nt.d/Math.max(It,1))),r.dist=a.dist;let yt=(O.x+st.x)/2,Ft=(O.y+st.y)/2;Nt(yt-nt.mx,Ft-nt.my),nt.mx=yt,nt.my=Ft;return}if(nt.type!=="press"&&nt.type!=="turn"&&nt.type!=="drag")return;let U=S.clientX-W.x,T=S.clientY-W.y;if(nt.type==="press"){if(Math.hypot(S.clientX-nt.x0,S.clientY-nt.y0)<10)return;nt.moved=!0;let O=nt.hit;O&&O.kind==="item"&&!Rt?we(O):nt.type="turn"}nt.type==="turn"?(a.yaw-=U*.008,a.pitch=Math.min(1.45,Math.max(.25,a.pitch+T*.006)),r.yaw=a.yaw,r.pitch=a.pitch):nt.type==="drag"&&At(S.clientX,S.clientY)});let se=S=>{if(ot.delete(S.pointerId),!!nt){if(nt.type==="pinch"){ot.size===0&&(nt=null);return}nt.type==="press"&&!nt.moved&&N(nt.hit,S.clientX,S.clientY),nt.type==="drag"&&Wt(),nt=null}};gt.addEventListener("pointerup",se),gt.addEventListener("pointercancel",se),gt.addEventListener("wheel",S=>{S.preventDefault(),a.dist=Math.min(34,Math.max(4,a.dist*(S.deltaY>0?1.1:.9)))},{passive:!1});function Nt(S,W){let U=r.dist*.0018,T=new L(Math.cos(r.yaw),0,-Math.sin(r.yaw)),O=new L(-Math.sin(r.yaw),0,-Math.cos(r.yaw));a.target.addScaledVector(T,-S*U).addScaledVector(O,W*U),a.target.x=Math.min(Qt.x1+2,Math.max(Qt.x0-2,a.target.x)),a.target.z=Math.min(Qt.z1+2,Math.max(Qt.z0-2,a.target.z)),r.target.copy(a.target)}function N(S,W,U){if(S&&S.kind==="char"){if(Rt===S.id){Dt(null);return}Dt(S.id),bs.onTapBuddy(S.id);return}if(Rt){let O=E.get(Rt),st=S?S.point.clone().setY(0):Mt(W,U);if(!O||!st)return;if(Ye(st.x,st.z)<0){Dt(null);return}Y(O,st.x,st.z);return}if(!S){let O=Mt(W,U),st=performance.now();if(O){let It=Ye(O.x,O.z);if(It>=0&&G.id==="floor"+It&&st-G.t<350){bs.onFocus(It),h(It),G={id:null,t:0};return}G={id:"floor"+It,t:st}}return}let T=performance.now();if(G.id===S.id&&T-G.t<350){clearTimeout(it),G={id:null,t:0},bs.onStore(S.id);return}G={id:S.id,t:T},clearTimeout(it),it=setTimeout(()=>{let O=d.get(S.id);!O||(Hn[S.id]||{}).wall&&!ae[O.room].garden||(O.data=Tn(dn({},O.data),{rot:((O.data.rot||0)+1)%4,gx:O.x,gz:O.z}),p(O),Tt(O))},360)}function we(S){nt.type="drag";let W=d.get(S.id);if(!W){nt.type="turn";return}let U=Mt(nt.x0,nt.y0)||new L(W.x,0,W.z);wt={kind:"item",rec:W,dx:W.x-U.x,dz:W.z-U.z}}function At(S,W){if(!wt)return;let U=Mt(S,W);if(!U)return;let T=Math.min(Qt.x1-.3,Math.max(Qt.x0+.3,U.x+wt.dx)),O=Math.min(Qt.z1-.3,Math.max(Qt.z0+.3,U.z+wt.dz)),st=wt.rec;st.data=Tn(dn({},st.data),{gx:T,gz:O}),p(st),st.obj.position.y+=.25}function Wt(){if(!wt)return;let S=wt.rec;p(S),Tt(S),wt=null}function Tt(S){S.data=Tn(dn({},S.data),{gx:S.x,gz:S.z,room:S.room}),bs.onMoved(S.data.id,S.x,S.z,S.data.rot||0,S.room)}let Rt=null,Xt=new On({color:"#FFD43B",transparent:!0,opacity:.95,depthWrite:!1}),zt=new De(new Hs(.42,.56,32),Xt);zt.rotation.x=-Math.PI/2,zt.visible=!1,Qe.add(zt);let de=new On({color:"#FF5C9A",transparent:!0,opacity:0,depthWrite:!1}),A=new De(new Hs(.16,.3,24),de);A.rotation.x=-Math.PI/2,Qe.add(A);let _=0;function X(S){A.position.set(S.x,.04,S.z),_=1.4}let Z=document.createElement("div");Z.id="joy",Z.innerHTML='<div class="knob"></div><button class="close" title="close">\u2716</button>',document.body.appendChild(Z);let rt=Z.querySelector(".knob"),$={id:null,x:0,y:0,cx:0,cy:0},Bt=52;function Ct(){rt.style.transform=`translate(${$.x*Bt}px, ${$.y*Bt}px)`}Z.addEventListener("pointerdown",S=>{if(S.target.classList.contains("close"))return;S.preventDefault(),S.stopPropagation(),Z.setPointerCapture(S.pointerId);let W=Z.getBoundingClientRect();$.id=S.pointerId,$.cx=W.left+W.width/2,$.cy=W.top+W.height/2,ht(S)});function ht(S){let W=(S.clientX-$.cx)/Bt,U=(S.clientY-$.cy)/Bt,T=Math.hypot(W,U);T>1&&(W/=T,U/=T),$.x=W,$.y=U,Ct()}Z.addEventListener("pointermove",S=>{S.pointerId===$.id&&ht(S)});let dt=S=>{S.pointerId===$.id&&($.id=null,$.x=$.y=0,Ct())};Z.addEventListener("pointerup",dt),Z.addEventListener("pointercancel",dt),Z.querySelector(".close").addEventListener("click",S=>{S.stopPropagation(),Dt(null)});function Dt(S){Rt=S&&E.has(S)?S:null,zt.visible=!!Rt,Z.style.display=Rt?"block":"none",$.id=null,$.x=$.y=0,Ct()}Dt(null);function at(S,W){let U=Math.hypot($.x,$.y);if(U<.15){S.joyWalk=0;return}let T=new L(Math.cos(r.yaw),0,-Math.sin(r.yaw)),O=new L(-Math.sin(r.yaw),0,-Math.cos(r.yaw)),st=T.multiplyScalar($.x).addScaledVector(O,-$.y),It=3.4*Math.min(1,U),yt=S.holder.position,Ft=y(S),Et=Ft.blocked(yt.x,yt.z),Se=(Ze,Ue)=>!Ft.blocked(Ze,Ue)||Et&&!Ft.blockedStatic(Ze,Ue)&&_e(Ft,Ze,Ue)>_e(Ft,yt.x,yt.z),Ae=st.x*It*W/Math.max(U,1e-6)*Math.min(1,U),ln=st.z*It*W/Math.max(U,1e-6)*Math.min(1,U);Se(yt.x+Ae,yt.z+ln)?(yt.x+=Ae,yt.z+=ln):Se(yt.x+Ae,yt.z)?yt.x+=Ae:Se(yt.x,yt.z+ln)&&(yt.z+=ln),S.path=[],S.goal=null,S.stayT=25,S.awake=!0,Yt(S,Math.atan2(st.x,st.z),W),S.joyWalk=1,a.target.set(yt.x,.6,yt.z),l=!1;let ci=Ye(yt.x,yt.z);ci>=0&&(o=ci)}function _e(S,W,U){let T=1/0;for(let O of S.others)T=Math.min(T,Math.hypot(O.x-W,O.z-U));return T}function Yt(S,W,U){let T=W-S.holder.rotation.y;T=Math.atan2(Math.sin(T),Math.cos(T)),S.holder.rotation.y+=T*Math.min(1,U*10)}let St=(S,W,U)=>{let T=document.createElement("button");T.textContent=S,T.title=W,T.addEventListener("click",O=>{O.stopPropagation(),U()}),document.getElementById("buttons").appendChild(T)};St("\u2795","zoom in",()=>{a.dist=Math.max(4,a.dist*.75)}),St("\u2796","zoom out",()=>{a.dist=Math.min(Math.max(34,e*1.6),a.dist*1.33)}),St("\u{1F504}","turn",()=>{a.yaw+=Math.PI/2}),St("\u{1F3E0}","whole house",()=>{if(l){h(o);return}l=!0,a.target.set(t.x,.6,t.z),a.dist=Math.max(27,e*1.15),a.pitch=Math.max(a.pitch,.9)});let vt=new Xr,xt=0,te=[],Ht=0;function ue(){try{P()}catch(S){++Ht===1&&window.houseError&&window.houseError(S&&S.message?S.message:String(S))}requestAnimationFrame(ue)}function P(){let S=Math.min(.05,vt.getDelta());xt+=S;let W=Math.min(1,S*6);r.yaw+=(a.yaw-r.yaw)*W,r.pitch+=(a.pitch-r.pitch)*W,r.dist+=(a.dist-r.dist)*W,r.target.lerp(a.target,W),c(),uh(n,Ge.position,r.target,S);for(let T of d.values())T.obj.visible=!(T.wall&&T.wall.k<.6),(Hn[T.data.id]||{}).fly&&!(wt&&wt.rec===T)&&(T.obj.position.y=T.baseY+Math.sin(xt*2+T.x)*.15,T.obj.rotation.y=(T.data.rot||0)*Math.PI/2+Math.sin(xt*.7+T.z)*.6);let U=!1;Rt&&!E.has(Rt)&&Dt(null);for(let T of E.values()){let O=R&&!T.awake,st=0;if(T.stayT>0&&(T.stayT-=S),Rt===T.id&&$.id!=null)at(T,S),st=T.joyWalk;else if(T.path.length){let Ft=T.path[0],Et=new L().subVectors(Ft,T.holder.position).setY(0),Ae=(T.main||T.goal?3.2:1.6)*S,ln=T.holder.position.x+(Et.length()>0?Et.x/Et.length()*Math.min(Ae,Et.length()):0),ci=T.holder.position.z+(Et.length()>0?Et.z/Et.length()*Math.min(Ae,Et.length()):0),Ze=!1;for(let Ue of E.values()){if(Ue===T)continue;let M=Math.hypot(Ue.holder.position.x-T.holder.position.x,Ue.holder.position.z-T.holder.position.z),D=Math.hypot(Ue.holder.position.x-ln,Ue.holder.position.z-ci);if(D<Ha*2&&D<M){Ze=!0;break}}if(Ze)if(T.goal){if(T.waitT=(T.waitT||0)+S,T.waitT>.8){T.waitT=0;let Ue=tt(T,T.goal.x,T.goal.z);Ue?T.path=Ue:q(T)}}else T.path=[],T.idle=1+Math.random()*2;else Et.length()<=Ae?(T.holder.position.copy(Ft),T.path.shift(),st=1,T.path.length||(T.goal=null)):(Et.normalize(),T.holder.position.addScaledVector(Et,Ae),Yt(T,Math.atan2(Et.x,Et.z),S),st=1)}else if(!O){if(T.idle-=S,T.idle<=0)if(T.idle=3+Math.random()*5,!T.main&&!(T.stayT>0)&&Rt!==T.id){let Ft=Ye(T.holder.position.x,T.holder.position.z),Et=b(Ft>=0?Ft:T.room);T.path=tt(T,Et.x,Et.z)||[]}else T.lookAtCam=!0;if(T.lookAtCam||T.talkT>0){let Et=Math.atan2(Ge.position.x-T.holder.position.x,Ge.position.z-T.holder.position.z)-T.holder.rotation.y;Et=Math.atan2(Math.sin(Et),Math.cos(Et)),T.holder.rotation.y+=Et*Math.min(1,S*5),Math.abs(Et)<.05&&(T.lookAtCam=!1)}}T.talkT>0&&(T.talkT-=S),T.cheerT>0&&(T.cheerT-=S);let It=T.cheerT>0?1:0;T.setMood(It?"cheer":O?"sleepy":"happy"),Ba(T,xt+T.phase,{walking:st,cheer:It,sleepy:O?1:0}),T.shakeT>0?(T.shakeT-=S,T.root.rotation.y=Math.sin(T.shakeT*30)*.25*(T.shakeT/.6)):T.root.rotation.y=0,Rt===T.id&&(zt.position.set(T.holder.position.x,.04,T.holder.position.z),zt.scale.setScalar(1+Math.sin(xt*5)*.08));let yt=T.talkT>0?T.talk:null;!yt&&O&&!U&&F&&Ye(T.holder.position.x,T.holder.position.z)===o&&(yt=F,U=!0),yt?K(T,yt):T.bubble&&(T.bubble.style.display="none"),T.asleep=O}_>0?(_-=S,de.opacity=Math.min(1,_*1.5),A.scale.setScalar(1+(1.4-_)*.5)):de.opacity=0,ct(S),tn.render(Qe,Ge)}let ft=new fs({map:Mh(),transparent:!0,depthWrite:!1}),k=0;function ct(S){if(k-=S,k<=0){k=.9;for(let W of E.values()){if(!W.asleep)continue;let U=new ks(ft);U.scale.set(.35,.35,.35),U.position.copy(W.holder.position).add(new L(.3,1.8,0)),U.userData.life=2.2,Qe.add(U),te.push(U)}}for(let W=te.length-1;W>=0;W--){let U=te[W];U.userData.life-=S,U.position.y+=S*.35,U.position.x+=Math.sin(U.userData.life*3)*S*.2,U.material.opacity=1;let T=Math.max(0,U.userData.life/2.2);U.scale.setScalar(.2+(1-T)*.25),U.userData.life<=0&&(Qe.remove(U),te.splice(W,1))}}let pt=-1;Ys={setState(S){try{ne(typeof S=="string"?JSON.parse(S):S)}catch(W){window.houseError&&window.houseError(W&&W.message?W.message:String(W))}},say:Q,focus(S){h(S)}};function ne(S){S.walls&&n.setWallColors(S.walls),R=!!S.asleep,F=S.sleepLine||"",S.room!=null&&S.room!==pt&&(h(S.room,pt<0),pt=S.room),u(S.items||[]),B(S.buddies||[])}if(window.house=Ys,!window.Android){let S=Object.keys(Da),W={bed:0,teddy:0,lamp:0,picture:0,clock:0,books:0,guitar:0,game:0,unicorn:0,chair:1,plates:1,pizza:1,cake:1,teapot:1,watermelon:1,candy:1,cupcake:1,candle:1,sofa:2,tv:2,piano:2,plant:2,rainbow:2,puzzle:2,cat:2,dog:2,bathtub:3,toilet:3,mirror:3,soap:3,duck:3,toothbrush:3,lotion:3,sponge:3},U=Fi(5);Zs={room:Number(an.get("room")||0),walls:["#FFD1E3","#FFF1DC","#CFF5E1","#CDEBFF","#FFF1DC"],asleep:an.get("asleep")==="1",sleepLine:"\u05D6\u05D6\u05D6... \u05DB\u05D5\u05DC\u05DD \u05D9\u05E9\u05E0\u05D9\u05DD. \u05DC\u05D7\u05E6\u05D9 \u05E2\u05DC \u05DE\u05D9\u05E9\u05D4\u05D5 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E2\u05D9\u05E8",items:S.filter(T=>an.get("items")!=="none").map(T=>{var O,st;return{id:T,room:(O=W[T])!=null?O:4,x:U()*.85,y:(st=Hn[T])!=null&&st.wall?.2:.6+U()*.25,inRoom:!0}}),buddies:(an.get("buddies")||"boni,mika,pitzi,blocky,astro,wizard_g").split(",").map((T,O)=>({id:T,room:O===0?Number(an.get("room")||0):O%5,main:O===0}))},Ys.setState(Zs),window.__debug={project(T){let O=d.get(T),st=E.get(T),It=O?O.obj:st?st.holder:null;if(!It)return null;let yt=It.position.clone();return yt.y+=.3,yt.project(Ge),{x:(yt.x*.5+.5)*window.innerWidth,y:(-yt.y*.5+.5)*window.innerHeight}},item(T){let O=d.get(T);return O&&{x:O.x,z:O.z,rot:O.data.rot||0,room:O.room}},screen(T,O){let st=new L(T,0,O).project(Ge);return{x:(st.x*.5+.5)*window.innerWidth,y:(-st.y*.5+.5)*window.innerHeight}},char(T){let O=E.get(T);return O&&{x:O.holder.position.x,z:O.holder.position.z,path:O.path.length,talk:O.talkT>0?O.talk:null,selected:Rt===T}},chars(){return[...E.keys()]}}}an.get("yaw")&&(a.yaw=r.yaw=Number(an.get("yaw"))),an.get("pitch")&&(a.pitch=r.pitch=Number(an.get("pitch"))),an.get("dist")&&(a.dist=r.dist=Number(an.get("dist"))),c(),ue();try{bs.onReady()}catch(S){window.houseError&&window.houseError("bridge: "+S.message)}}function rg(n){return qs.filter(t=>t.room===n)}function Mh(){let n=document.createElement("canvas");n.width=n.height=16;let t=n.getContext("2d");t.fillStyle="#8E6CFF",[[3,3,10,2],[9,5,2,2],[7,7,2,2],[5,9,2,2],[3,11,10,2]].forEach(([i,s,r,a])=>t.fillRect(i,s,r,a));let e=new ps(n);return e.magFilter=Ee,e.colorSpace=$e,e}})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
