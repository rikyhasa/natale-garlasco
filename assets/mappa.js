(()=>{var ep=Object.defineProperty;var np=(n,t,e)=>t in n?ep(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Zn=(n,t,e)=>np(n,typeof t!="symbol"?t+"":t,e);var zh=4,kh=0,Gh=1,ip=2;function ns(n){let t=n.length;for(;--t>=0;)n[t]=0}var sp=0,rp=1,ap=2,op=29,Jl=256,lp=286,Kl=30,Su=19,bu=573,wu=15,Il=16;var Eu=256,Au=16,Tu=17,Cu=18,cp=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),hp=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),py=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),Ru=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),up=512,Pu=new Array(288*2);ns(Pu);var Iu=new Array(Kl*2);ns(Iu);var Hl=new Array(up);ns(Hl);var $l=new Array(256);ns($l);var Lu=new Array(op);ns(Lu);var Du=new Array(Kl);ns(Du);var Nu=n=>n<256?Hl[n]:Hl[256+(n>>>7)],ma=(n,t)=>{n.pending_buf[n.pending++]=t&255,n.pending_buf[n.pending++]=t>>>8&255},pn=(n,t,e)=>{n.bi_valid>Il-e?(n.bi_buf|=t<<n.bi_valid&65535,ma(n,n.bi_buf),n.bi_buf=t>>Il-n.bi_valid,n.bi_valid+=e-Il):(n.bi_buf|=t<<n.bi_valid&65535,n.bi_valid+=e)},Kn=(n,t,e)=>{pn(n,e[t*2],e[t*2+1])},dp=(n,t)=>{let e=0;do e|=n&1,n>>>=1,e<<=1;while(--t>0);return e>>>1};var fp=(n,t)=>{let e=t.dyn_tree,i=t.max_code,s=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,c=t.stat_desc.max_length,l,h,f,d,u,_,w=0;for(d=0;d<=wu;d++)n.bl_count[d]=0;for(e[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<bu;l++)h=n.heap[l],d=e[e[h*2+1]*2+1]+1,d>c&&(d=c,w++),e[h*2+1]=d,!(h>i)&&(n.bl_count[d]++,u=0,h>=o&&(u=a[h-o]),_=e[h*2],n.opt_len+=_*(d+u),r&&(n.static_len+=_*(s[h*2+1]+u)));if(w!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,w-=2}while(w>0);for(d=c;d!==0;d--)for(h=n.bl_count[d];h!==0;)f=n.heap[--l],!(f>i)&&(e[f*2+1]!==d&&(n.opt_len+=(d-e[f*2+1])*e[f*2],e[f*2+1]=d),h--)}},pp=(n,t,e)=>{let i=new Array(16),s=0,r,a;for(r=1;r<=wu;r++)s=s+e[r-1]<<1,i[r]=s;for(a=0;a<=t;a++){let o=n[a*2+1];o!==0&&(n[a*2]=dp(i[o]++,o))}};var mp=n=>{let t;for(t=0;t<lp;t++)n.dyn_ltree[t*2]=0;for(t=0;t<Kl;t++)n.dyn_dtree[t*2]=0;for(t=0;t<Su;t++)n.bl_tree[t*2]=0;n.dyn_ltree[Eu*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},Uu=n=>{n.bi_valid>8?ma(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},Vh=(n,t,e,i)=>{let s=t*2,r=e*2;return n[s]<n[r]||n[s]===n[r]&&i[t]<=i[e]},Ll=(n,t,e)=>{let i=n.heap[e],s=e<<1;for(;s<=n.heap_len&&(s<n.heap_len&&Vh(t,n.heap[s+1],n.heap[s],n.depth)&&s++,!Vh(t,i,n.heap[s],n.depth));)n.heap[e]=n.heap[s],e=s,s<<=1;n.heap[e]=i},Hh=(n,t,e)=>{let i,s,r=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+r++]&255,i+=(n.pending_buf[n.sym_buf+r++]&255)<<8,s=n.pending_buf[n.sym_buf+r++],i===0?Kn(n,s,t):(a=$l[s],Kn(n,a+Jl+1,t),o=cp[a],o!==0&&(s-=Lu[a],pn(n,s,o)),i--,a=Nu(i),Kn(n,a,e),o=hp[a],o!==0&&(i-=Du[a],pn(n,i,o)));while(r<n.sym_next);Kn(n,Eu,t)},Wl=(n,t)=>{let e=t.dyn_tree,i=t.stat_desc.static_tree,s=t.stat_desc.has_stree,r=t.stat_desc.elems,a,o,c=-1,l;for(n.heap_len=0,n.heap_max=bu,a=0;a<r;a++)e[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):e[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,e[l*2]=1,n.depth[l]=0,n.opt_len--,s&&(n.static_len-=i[l*2+1]);for(t.max_code=c,a=n.heap_len>>1;a>=1;a--)Ll(n,e,a);l=r;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],Ll(n,e,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,e[l*2]=e[a*2]+e[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,e[a*2+1]=e[o*2+1]=l,n.heap[1]=l++,Ll(n,e,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],fp(n,t),pp(e,c,n.bl_count)},Wh=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),t[(e+1)*2+1]=65535,i=0;i<=e;i++)r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)&&(o<l?n.bl_tree[r*2]+=o:r!==0?(r!==s&&n.bl_tree[r*2]++,n.bl_tree[Au*2]++):o<=10?n.bl_tree[Tu*2]++:n.bl_tree[Cu*2]++,o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))},Xh=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=e;i++)if(r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)){if(o<l)do Kn(n,r,n.bl_tree);while(--o!==0);else r!==0?(r!==s&&(Kn(n,r,n.bl_tree),o--),Kn(n,Au,n.bl_tree),pn(n,o-3,2)):o<=10?(Kn(n,Tu,n.bl_tree),pn(n,o-3,3)):(Kn(n,Cu,n.bl_tree),pn(n,o-11,7));o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}},gp=n=>{let t;for(Wh(n,n.dyn_ltree,n.l_desc.max_code),Wh(n,n.dyn_dtree,n.d_desc.max_code),Wl(n,n.bl_desc),t=Su-1;t>=3&&n.bl_tree[Ru[t]*2+1]===0;t--);return n.opt_len+=3*(t+1)+5+5+4,t},_p=(n,t,e,i)=>{let s;for(pn(n,t-257,5),pn(n,e-1,5),pn(n,i-4,4),s=0;s<i;s++)pn(n,n.bl_tree[Ru[s]*2+1],3);Xh(n,n.dyn_ltree,t-1),Xh(n,n.dyn_dtree,e-1)},xp=n=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&n.dyn_ltree[e*2]!==0)return kh;if(n.dyn_ltree[18]!==0||n.dyn_ltree[20]!==0||n.dyn_ltree[26]!==0)return Gh;for(e=32;e<Jl;e++)if(n.dyn_ltree[e*2]!==0)return Gh;return kh};var Xl=(n,t,e,i)=>{pn(n,(sp<<1)+(i?1:0),3),Uu(n),ma(n,e),ma(n,~e),e&&n.pending_buf.set(n.window.subarray(t,t+e),n.pending),n.pending+=e};var vp=(n,t,e,i)=>{let s,r,a=0;n.level>0?(n.strm.data_type===ip&&(n.strm.data_type=xp(n)),Wl(n,n.l_desc),Wl(n,n.d_desc),a=gp(n),s=n.opt_len+3+7>>>3,r=n.static_len+3+7>>>3,(r<=s||n.strategy===zh)&&(s=r)):s=r=e+5,e+4<=s&&t!==-1?Xl(n,t,e,i):n.strategy===zh||r===s?(pn(n,(rp<<1)+(i?1:0),3),Hh(n,Pu,Iu)):(pn(n,(ap<<1)+(i?1:0),3),_p(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),Hh(n,n.dyn_ltree,n.dyn_dtree)),mp(n),i&&Uu(n)},Js=(n,t,e)=>(n.pending_buf[n.sym_buf+n.sym_next++]=t,n.pending_buf[n.sym_buf+n.sym_next++]=t>>8,n.pending_buf[n.sym_buf+n.sym_next++]=e,t===0?n.dyn_ltree[e*2]++:(n.matches++,t--,n.dyn_ltree[($l[e]+Jl+1)*2]++,n.dyn_dtree[Nu(t)*2]++),n.sym_next===n.sym_end),ga=(n,t,e,i)=>{let s=n&65535|0,r=n>>>16&65535|0,a=0;for(;e!==0;){a=e>2e3?2e3:e,e-=a;do s=s+t[i++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0},yp=()=>{let n=new Uint32Array(2048),t;for(let e=0;e<256;e++){t=e;for(let i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t}for(let e=0;e<256;e++){t=n[e];for(let i=256;i<256*8;i+=256)t=n[t&255]^t>>>8,n[i+e]=t}return n},Mp=yp(),Rn=(n,t,e,i)=>{let s=Mp,r=i+e,a=i;n^=-1;for(let o=r-7;a<o;a+=8)n^=t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24,n=s[1792+(n&255)]^s[1536+(n>>>8&255)]^s[1280+(n>>>16&255)]^s[1024+(n>>>24)]^s[768+t[a+4]]^s[512+t[a+5]]^s[256+t[a+6]]^s[t[a+7]];for(;a<r;a++)n=n>>>8^s[(n^t[a])&255];return n^-1},Dl={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var Ge=3,Nl=258,Bn=262;var vi=1,jl=2,Ql=3,tc=4;var Sp=n=>{let t,e,i,s=n.w_size;t=n.hash_size,i=t;do e=n.head[--i],n.head[i]=e>=s?e-s:0;while(--t);t=s,i=t;do e=n.prev[--i],n.prev[i]=e>=s?e-s:0;while(--t)},ec=(n,t,e)=>(t<<n.hash_shift^e)&n.hash_mask,es=(n,t)=>{let e;if(n.legacy_hash)e=n.ins_h=ec(n,n.ins_h,n.window[t+Ge-1]);else{let s=n.window,r=s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24;e=n.ins_h=Math.imul(r,66521)+66521>>>16&n.hash_mask}let i=n.prev[t&n.w_mask]=n.head[e];return n.head[e]=t,i},ql=n=>{let t=n.state,e=t.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(n.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),n.next_out),n.next_out+=e,t.pending_out+=e,n.total_out+=e,n.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},Bi=(n,t)=>{vp(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,t),n.block_start=n.strstart,ql(n.strm)};var Yl=(n,t,e,i)=>{let s=n.avail_in;return s>i&&(s=i),s===0?0:(n.avail_in-=s,t.set(n.input.subarray(n.next_in,n.next_in+s),e),n.state.wrap===1?n.adler=ga(n.adler,t,s,e):n.state.wrap===2&&(n.adler=Rn(n.adler,t,s,e)),n.next_in+=s,n.total_in+=s,s)},Fu=(n,t)=>{let e=n.max_chain_length,i=n.strstart,s,r,a=n.prev_length,o=n.nice_match,c=n.strstart>n.w_size-Bn?n.strstart-(n.w_size-Bn):0,l=n.window,h=n.w_mask,f=n.prev,d=n.strstart+Nl,u=l[i+a-1],_=l[i+a];n.prev_length>=n.good_match&&(e>>=2),o>n.lookahead&&(o=n.lookahead);do if(s=t,!(l[s+a]!==_||l[s+a-1]!==u||l[s]!==l[i]||l[++s]!==l[i+1])){i+=2,s++;do;while(l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&i<d);if(r=Nl-(d-i),i=d-Nl,r>a){if(n.match_start=t,a=r,r>=o)break;u=l[i+a-1],_=l[i+a]}}while((t=f[t&h])>c&&--e!==0);return a<=n.lookahead?a:n.lookahead},Ou=n=>{let t=n.w_size,e,i,s;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=t+(t-Bn)&&(n.window.set(n.window.subarray(t,t+t-i),0),n.match_start-=t,n.strstart-=t,n.block_start-=t,n.insert>n.strstart&&(n.insert=n.strstart),Sp(n),i+=t),n.strm.avail_in===0)break;if(e=Yl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=e,n.legacy_hash){if(n.lookahead+n.insert>=Ge)for(s=n.strstart-n.insert,n.ins_h=n.window[s],n.ins_h=ec(n,n.ins_h,n.window[s+1]);n.insert&&(es(n,s),s++,n.insert--,!(n.lookahead+n.insert<Ge)););}else if(n.lookahead+n.insert>Ge)for(s=n.strstart-n.insert;n.insert&&(es(n,s),s++,n.insert--,!(n.lookahead+n.insert<=Ge)););}while(n.lookahead<Bn&&n.strm.avail_in!==0)},bp=(n,t)=>{let e=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,s,r,a=0,o=n.strm.avail_in;do{if(i=65535,r=n.bi_valid+42>>3,n.strm.avail_out<r||(r=n.strm.avail_out-r,s=n.strstart-n.block_start,i>s+n.strm.avail_in&&(i=s+n.strm.avail_in),i>r&&(i=r),i<e&&(i===0&&t!==4||t===0||i!==s+n.strm.avail_in)))break;a=t===4&&i===s+n.strm.avail_in?1:0,Xl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,ql(n.strm),s&&(s>i&&(s=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+s),n.strm.next_out),n.strm.next_out+=s,n.strm.avail_out-=s,n.strm.total_out+=s,n.block_start+=s,i-=s),i&&(Yl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?tc:t!==0&&t!==4&&n.strm.avail_in===0&&n.strstart===n.block_start?jl:(r=n.window_size-n.strstart,n.strm.avail_in>r&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,r+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),r>n.strm.avail_in&&(r=n.strm.avail_in),r&&(Yl(n.strm,n.window,n.strstart,r),n.strstart+=r,n.insert+=r>n.w_size-n.insert?n.w_size-n.insert:r),n.high_water<n.strstart&&(n.high_water=n.strstart),r=n.bi_valid+42>>3,r=n.pending_buf_size-r>65535?65535:n.pending_buf_size-r,e=r>n.w_size?n.w_size:r,s=n.strstart-n.block_start,(s>=e||(s||t===4)&&t!==0&&n.strm.avail_in===0&&s<=r)&&(i=s>r?r:s,a=t===4&&n.strm.avail_in===0&&i===s?1:0,Xl(n,n.block_start,i,a),n.block_start+=i,ql(n.strm)),a?Ql:vi)},Ul=(n,t)=>{let e,i;for(;;){if(n.lookahead<Bn){if(Ou(n),n.lookahead<Bn&&t===0)return vi;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ge&&(e=es(n,n.strstart)),e!==0&&n.strstart-e<=n.w_size-Bn&&(n.match_length=Fu(n,e)),n.match_length>=Ge)if(i=Js(n,n.strstart-n.match_start,n.match_length-Ge),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=Ge){n.match_length--;do n.strstart++,e=es(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=ec(n,n.ins_h,n.window[n.strstart+1]));else i=Js(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Bi(n,!1),n.strm.avail_out===0))return vi}return n.insert=n.strstart<Ge-1?n.strstart:Ge-1,t===4?(Bi(n,!0),n.strm.avail_out===0?Ql:tc):n.sym_next&&(Bi(n,!1),n.strm.avail_out===0)?vi:jl},ts=(n,t)=>{let e,i,s;for(;;){if(n.lookahead<Bn){if(Ou(n),n.lookahead<Bn&&t===0)return vi;if(n.lookahead===0)break}if(e=0,n.lookahead>=Ge&&(e=es(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=Ge-1,e!==0&&n.prev_length<n.max_lazy_match&&n.strstart-e<=n.w_size-Bn&&(n.match_length=Fu(n,e),n.match_length<=5&&(n.strategy===1||n.match_length===Ge&&n.strstart-n.match_start>4096)&&(n.match_length=Ge-1)),n.prev_length>=Ge&&n.match_length<=n.prev_length){s=n.strstart+n.lookahead-Ge,i=Js(n,n.strstart-1-n.prev_match,n.prev_length-Ge),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=s&&(e=es(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=Ge-1,n.strstart++,i&&(Bi(n,!1),n.strm.avail_out===0))return vi}else if(n.match_available){if(i=Js(n,0,n.window[n.strstart-1]),i&&Bi(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return vi}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Js(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<Ge-1?n.strstart:Ge-1,t===4?(Bi(n,!0),n.strm.avail_out===0?Ql:tc):n.sym_next&&(Bi(n,!1),n.strm.avail_out===0)?vi:jl};var On=class{constructor(n,t,e,i,s){this.good_length=n,this.max_lazy=t,this.nice_length=e,this.max_chain=i,this.func=s}},my=[new On(0,0,0,0,bp),new On(4,4,8,4,Ul),new On(4,5,16,8,Ul),new On(4,6,32,32,Ul),new On(4,4,16,16,ts),new On(8,16,32,32,ts),new On(8,16,128,128,ts),new On(8,32,128,256,ts),new On(32,128,258,1024,ts),new On(32,258,258,4096,ts)];var ua=16209,wp=16191;function Ep(n,t){let e,i,s,r,a,o,c,l,h,f,d,u,_,w,p,m,S,v,y,C,E,g,b,P,A=n.state;e=n.next_in,b=n.input,i=e+(n.avail_in-5),s=n.next_out,P=n.output,r=s-(t-n.avail_out),a=s+(n.avail_out-257),o=A.dmax,c=A.wsize,l=A.whave,h=A.wnext,f=A.window,d=A.hold,u=A.bits,_=A.lencode,w=A.distcode,p=(1<<A.lenbits)-1,m=(1<<A.distbits)-1;t:do{u<15&&(d+=b[e++]<<u,u+=8,d+=b[e++]<<u,u+=8),S=_[d&p];e:for(;;){if(v=S>>>24,d>>>=v,u-=v,v=S>>>16&255,v===0)P[s++]=S&65535;else if(v&16){y=S&65535,v&=15,v&&(u<v&&(d+=b[e++]<<u,u+=8),y+=d&(1<<v)-1,d>>>=v,u-=v),u<15&&(d+=b[e++]<<u,u+=8,d+=b[e++]<<u,u+=8),S=w[d&m];n:for(;;){if(v=S>>>24,d>>>=v,u-=v,v=S>>>16&255,v&16){if(C=S&65535,v&=15,u<v&&(d+=b[e++]<<u,u+=8,u<v&&(d+=b[e++]<<u,u+=8)),C+=d&(1<<v)-1,C>o){n.msg="invalid distance too far back",A.mode=ua;break t}if(d>>>=v,u-=v,v=s-r,C>v){if(v=C-v,v>l&&A.sane){n.msg="invalid distance too far back",A.mode=ua;break t}if(E=0,g=f,h===0){if(E+=c-v,v<y){y-=v;do P[s++]=f[E++];while(--v);E=s-C,g=P}}else if(h<v){if(E+=c+h-v,v-=h,v<y){y-=v;do P[s++]=f[E++];while(--v);if(E=0,h<y){v=h,y-=v;do P[s++]=f[E++];while(--v);E=s-C,g=P}}}else if(E+=h-v,v<y){y-=v;do P[s++]=f[E++];while(--v);E=s-C,g=P}for(;y>2;)P[s++]=g[E++],P[s++]=g[E++],P[s++]=g[E++],y-=3;y&&(P[s++]=g[E++],y>1&&(P[s++]=g[E++]))}else{E=s-C;do P[s++]=P[E++],P[s++]=P[E++],P[s++]=P[E++],y-=3;while(y>2);y&&(P[s++]=P[E++],y>1&&(P[s++]=P[E++]))}}else if((v&64)===0){S=w[(S&65535)+(d&(1<<v)-1)];continue n}else{n.msg="invalid distance code",A.mode=ua;break t}break}}else if((v&64)===0){S=_[(S&65535)+(d&(1<<v)-1)];continue e}else if(v&32){A.mode=wp;break t}else{n.msg="invalid literal/length code",A.mode=ua;break t}break}}while(e<i&&s<a);y=u>>3,e-=y,u-=y<<3,d&=(1<<u)-1,n.next_in=e,n.next_out=s,n.avail_in=e<i?5+(i-e):5-(e-i),n.avail_out=s<a?257+(a-s):257-(s-a),A.hold=d,A.bits=u}var da=15,qh=852,Yh=592,Zh=0,Fl=1,Jh=2,Ap=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Tp=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),Cp=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Rp=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Ks=(n,t,e,i,s,r,a,o)=>{let c=o.bits,l=0,h=0,f=0,d=0,u=0,_=0,w=0,p=0,m=0,S=0,v,y,C,E,g,b=null,P,A=new Uint16Array(16),D=new Uint16Array(16),z=null,Z,L,W;for(l=0;l<=da;l++)A[l]=0;for(h=0;h<i;h++)A[t[e+h]]++;for(u=c,d=da;d>=1&&A[d]===0;d--);if(u>d&&(u=d),d===0)return s[r++]=20971520,s[r++]=20971520,o.bits=1,0;for(f=1;f<d&&A[f]===0;f++);for(u<f&&(u=f),p=1,l=1;l<=da;l++)if(p<<=1,p-=A[l],p<0)return-1;if(p>0&&(n===Zh||d!==1))return-1;for(D[1]=0,l=1;l<da;l++)D[l+1]=D[l]+A[l];for(h=0;h<i;h++)t[e+h]!==0&&(a[D[t[e+h]]++]=h);if(n===Zh?(b=z=a,P=20):n===Fl?(b=Ap,z=Tp,P=257):(b=Cp,z=Rp,P=0),S=0,h=0,l=f,g=r,_=u,w=0,C=-1,m=1<<u,E=m-1,n===Fl&&m>qh||n===Jh&&m>Yh)return 1;for(;;){Z=l-w,a[h]+1<P?(L=0,W=a[h]):a[h]>=P?(L=z[a[h]-P],W=b[a[h]-P]):(L=96,W=0),v=1<<l-w,y=1<<_,f=y;do y-=v,s[g+(S>>w)+y]=Z<<24|L<<16|W|0;while(y!==0);for(v=1<<l-1;S&v;)v>>=1;if(v!==0?(S&=v-1,S+=v):S=0,h++,--A[l]===0){if(l===d)break;l=t[e+a[h]]}if(l>u&&(S&E)!==C){for(w===0&&(w=u),g+=f,_=l-w,p=1<<_;_+w<d&&(p-=A[_+w],!(p<=0));)_++,p<<=1;if(m+=1<<_,n===Fl&&m>qh||n===Jh&&m>Yh)return 1;C=S&E,s[C]=u<<24|_<<16|g-r|0}}return S!==0&&(s[g+S]=l-w<<24|4194304),o.bits=u,0},Pp=0,Bu=1,zu=2,xa=16180,Kh=16181,$h=16182,jh=16183,Qh=16184,tu=16185,eu=16186,nu=16187,iu=16188,su=16189,_a=16190,Jn=16191,Ol=16192,ru=16193,Bl=16194,au=16195,ou=16196,lu=16197,cu=16198,fa=16199,pa=16200,hu=16201,uu=16202,du=16203,fu=16204,pu=16205,zl=16206,mu=16207,gu=16208,Oe=16209,Zl=16210,ku=16211,Ip=852,Lp=592;var _u=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24),Dp=class{constructor(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}},is=n=>{if(!n)return 1;let t=n.state;return!t||t.strm!==n||t.mode<xa||t.mode>ku?1:0},Np=n=>{if(is(n))return-2;let t=n.state;return n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=xa,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Ip),t.distcode=t.distdyn=new Int32Array(Lp),t.sane=1,t.back=-1,0},Gu=n=>{if(is(n))return-2;let t=n.state;return t.wsize=0,t.whave=0,t.wnext=0,Np(n)},Up=(n,t)=>{let e;if(is(n))return-2;let i=n.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?-2:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=e,i.wbits=t,Gu(n))},Fp=(n,t)=>{if(!n)return-2;let e=new Dp;n.state=e,e.strm=n,e.window=null,e.mode=xa;let i=Up(n,t);return i!==0&&(n.state=null),i};var xu=!0,kl,Gl,Op=n=>{if(xu){kl=new Int32Array(512),Gl=new Int32Array(32);let t=0;for(;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(Ks(Bu,n.lens,0,288,kl,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;Ks(zu,n.lens,0,32,Gl,0,n.work,{bits:5}),xu=!1}n.lencode=kl,n.lenbits=9,n.distcode=Gl,n.distbits=5},Vu=(n,t,e,i)=>{let s,r=n.state;return r.window===null&&(r.window=new Uint8Array(1<<r.wbits)),r.wsize===0&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0),i>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>i&&(s=i),r.window.set(t.subarray(e-i,e-i+s),r.wnext),i-=s,i?(r.window.set(t.subarray(e-i,e),0),r.wnext=i,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},Vl=(n,t)=>{let e,i,s,r,a,o,c,l,h,f,d,u,_,w,p=0,m,S,v,y,C,E,g,b,P=new Uint8Array(4),A,D,z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(is(n)||!n.output||!n.input&&n.avail_in!==0)return-2;e=n.state,e.mode===Jn&&(e.mode=Ol),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,f=o,d=c,b=0;t:for(;;)switch(e.mode){case xa:if(e.wrap===0){e.mode=Ol;break}for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&2&&l===35615){e.wbits===0&&(e.wbits=15),e.check=0,P[0]=l&255,P[1]=l>>>8&255,e.check=Rn(e.check,P,2,0),l=0,h=0,e.mode=Kh;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",e.mode=Oe;break}if((l&15)!==8){n.msg="unknown compression method",e.mode=Oe;break}if(l>>>=4,h-=4,g=(l&15)+8,e.wbits===0&&(e.wbits=g),g>15||g>e.wbits){n.msg="invalid window size",e.mode=Oe;break}e.dmax=1<<e.wbits,e.flags=0,n.adler=e.check=1,e.mode=l&512?su:Jn,l=0,h=0;break;case Kh:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.flags=l,(e.flags&255)!==8){n.msg="unknown compression method",e.mode=Oe;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=Oe;break}e.head&&(e.head.text=l>>8&1),e.flags&512&&e.wrap&4&&(P[0]=l&255,P[1]=l>>>8&255,e.check=Rn(e.check,P,2,0)),l=0,h=0,e.mode=$h;case $h:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.time=l>>>0),e.flags&512&&e.wrap&4&&(P[0]=l&255,P[1]=l>>>8&255,P[2]=l>>>16&255,P[3]=l>>>24&255,e.check=Rn(e.check,P,4,0)),l=0,h=0,e.mode=jh;case jh:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.xflags=l&255,e.head.os=l>>8),e.flags&512&&e.wrap&4&&(P[0]=l&255,P[1]=l>>>8&255,e.check=Rn(e.check,P,2,0)),l=0,h=0,e.mode=Qh;case Qh:if(e.flags&1024){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length=l,e.head&&(e.head.extra_len=l),e.flags&512&&e.wrap&4&&(P[0]=l&255,P[1]=l>>>8&255,e.check=Rn(e.check,P,2,0)),l=0,h=0}else e.head&&(e.head.extra=null);e.mode=tu;case tu:if(e.flags&1024&&(u=e.length,u>o&&(u=o),u&&(e.head&&(g=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(i.subarray(r,r+u),g)),e.flags&512&&e.wrap&4&&(e.check=Rn(e.check,i,u,r)),o-=u,r+=u,e.length-=u),e.length))break t;e.length=0,e.mode=eu;case eu:if(e.flags&2048){if(o===0)break t;u=0;do g=i[r+u++],e.head&&g&&e.length<65536&&(e.head.name+=String.fromCharCode(g),e.length++);while(g&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=Rn(e.check,i,u,r)),o-=u,r+=u,g)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=nu;case nu:if(e.flags&4096){if(o===0)break t;u=0;do g=i[r+u++],e.head&&g&&e.length<65536&&(e.head.comment+=String.fromCharCode(g),e.length++);while(g&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=Rn(e.check,i,u,r)),o-=u,r+=u,g)break t}else e.head&&(e.head.comment=null);e.mode=iu;case iu:if(e.flags&512){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.check&65535)){n.msg="header crc mismatch",e.mode=Oe;break}l=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=Jn;break;case su:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}n.adler=e.check=_u(l),l=0,h=0,e.mode=_a;case _a:if(e.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,2;n.adler=e.check=1,e.mode=Jn;case Jn:if(t===5||t===6)break t;case Ol:if(e.last){l>>>=h&7,h-=h&7,e.mode=zl;break}for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}switch(e.last=l&1,l>>>=1,h-=1,l&3){case 0:e.mode=ru;break;case 1:if(Op(e),e.mode=fa,t===6){l>>>=2,h-=2;break t}break;case 2:e.mode=ou;break;case 3:n.msg="invalid block type",e.mode=Oe}l>>>=2,h-=2;break;case ru:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",e.mode=Oe;break}if(e.length=l&65535,l=0,h=0,e.mode=Bl,t===6)break t;case Bl:e.mode=au;case au:if(u=e.length,u){if(u>o&&(u=o),u>c&&(u=c),u===0)break t;s.set(i.subarray(r,r+u),a),o-=u,r+=u,c-=u,a+=u,e.length-=u;break}e.mode=Jn;break;case ou:for(;h<14;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.nlen=(l&31)+257,l>>>=5,h-=5,e.ndist=(l&31)+1,l>>>=5,h-=5,e.ncode=(l&15)+4,l>>>=4,h-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=Oe;break}e.have=0,e.mode=lu;case lu:for(;e.have<e.ncode;){for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.lens[z[e.have++]]=l&7,l>>>=3,h-=3}for(;e.have<19;)e.lens[z[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,A={bits:e.lenbits},b=Ks(Pp,e.lens,0,19,e.lencode,0,e.work,A),e.lenbits=A.bits,b){n.msg="invalid code lengths set",e.mode=Oe;break}e.have=0,e.mode=cu;case cu:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[l&(1<<e.lenbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(v<16)l>>>=m,h-=m,e.lens[e.have++]=v;else{if(v===16){for(D=m+2;h<D;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(l>>>=m,h-=m,e.have===0){n.msg="invalid bit length repeat",e.mode=Oe;break}g=e.lens[e.have-1],u=3+(l&3),l>>>=2,h-=2}else if(v===17){for(D=m+3;h<D;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=m,h-=m,g=0,u=3+(l&7),l>>>=3,h-=3}else{for(D=m+7;h<D;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=m,h-=m,g=0,u=11+(l&127),l>>>=7,h-=7}if(e.have+u>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=Oe;break}for(;u--;)e.lens[e.have++]=g}}if(e.mode===Oe)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=Oe;break}if(e.lenbits=9,A={bits:e.lenbits},b=Ks(Bu,e.lens,0,e.nlen,e.lencode,0,e.work,A),e.lenbits=A.bits,b){n.msg="invalid literal/lengths set",e.mode=Oe;break}if(e.distbits=6,e.distcode=e.distdyn,A={bits:e.distbits},b=Ks(zu,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,A),e.distbits=A.bits,b){n.msg="invalid distances set",e.mode=Oe;break}if(e.mode=fa,t===6)break t;case fa:e.mode=pa;case pa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,Ep(n,d),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,e.mode===Jn&&(e.back=-1);break}for(e.back=0;p=e.lencode[l&(1<<e.lenbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(S&&(S&240)===0){for(y=m,C=S,E=v;p=e.lencode[E+((l&(1<<y+C)-1)>>y)],m=p>>>24,S=p>>>16&255,v=p&65535,!(y+m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,e.back+=y}if(l>>>=m,h-=m,e.back+=m,e.length=v,S===0){e.mode=pu;break}if(S&32){e.back=-1,e.mode=Jn;break}if(S&64){n.msg="invalid literal/length code",e.mode=Oe;break}e.extra=S&15,e.mode=hu;case hu:if(e.extra){for(D=e.extra;h<D;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=uu;case uu:for(;p=e.distcode[l&(1<<e.distbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((S&240)===0){for(y=m,C=S,E=v;p=e.distcode[E+((l&(1<<y+C)-1)>>y)],m=p>>>24,S=p>>>16&255,v=p&65535,!(y+m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,e.back+=y}if(l>>>=m,h-=m,e.back+=m,S&64){n.msg="invalid distance code",e.mode=Oe;break}e.offset=v,e.extra=S&15,e.mode=du;case du:if(e.extra){for(D=e.extra;h<D;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.offset+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=Oe;break}e.mode=fu;case fu:if(c===0)break t;if(u=d-c,e.offset>u){if(u=e.offset-u,u>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=Oe;break}u>e.wnext?(u-=e.wnext,_=e.wsize-u):_=e.wnext-u,u>e.length&&(u=e.length),w=e.window}else w=s,_=a-e.offset,u=e.length;u>c&&(u=c),c-=u,e.length-=u;do s[a++]=w[_++];while(--u);e.length===0&&(e.mode=pa);break;case pu:if(c===0)break t;s[a++]=e.length,c--,e.mode=pa;break;case zl:if(e.wrap){for(;h<32;){if(o===0)break t;o--,l|=i[r++]<<h,h+=8}if(d-=c,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?Rn(e.check,s,d,a-d):ga(e.check,s,d,a-d)),d=c,e.wrap&4&&(e.flags?l:_u(l))!==e.check){n.msg="incorrect data check",e.mode=Oe;break}l=0,h=0}e.mode=mu;case mu:if(e.wrap&&e.flags){for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=Oe;break}l=0,h=0}e.mode=gu;case gu:b=1;break t;case Oe:b=-3;break t;case Zl:return-4;case ku:default:return-2}return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,(e.wsize||d!==n.avail_out&&e.mode<Oe&&(e.mode<zl||t!==4))&&Vu(n,n.output,n.next_out,d-n.avail_out)?(e.mode=Zl,-4):(f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?Rn(e.check,s,d,n.next_out-d):ga(e.check,s,d,n.next_out-d)),n.data_type=e.bits+(e.last?64:0)+(e.mode===Jn?128:0)+(e.mode===fa||e.mode===Bl?256:0),(f===0&&d===0||t===4)&&b===0&&(b=-5),b)},vu=n=>{if(is(n))return-2;let t=n.state;return t.window&&(t.window=null),n.state=null,0};var yu=(n,t)=>{let e=t.length,i,s,r;return is(n)||(i=n.state,i.wrap!==0&&i.mode!==_a)?-2:i.mode===_a&&(s=1,s=ga(s,t,e,0),s!==i.check)?-3:(r=Vu(n,t,e,e),r?(i.mode=Zl,-4):(i.havedict=1,0))},Bp=class{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}};var zp=n=>{let t=new Uint8Array(n.reduce((i,s)=>i+s.length,0)),e=0;for(let i of n)t.set(i,e),e+=i.length;return t};var Mu=Object.prototype.toString,kp={chunkSize:1024*64,windowBits:15,raw:!1,dictionary:new Uint8Array(0)},Gp=class{constructor(n={}){Zn(this,"options");Zn(this,"err");Zn(this,"msg");Zn(this,"ended");Zn(this,"started");Zn(this,"chunks");Zn(this,"strm");Zn(this,"result");this.options=Object.assign({},kp,n);let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!n.windowBits&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array(0),this.strm=new Bp,this.strm.avail_out=0;let e=Fp(this.strm,t.windowBits);if(e!==0)throw new Error(Dl[e]);Mu.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary));let i=t.dictionary;if(t.raw&&i.length&&(e=yu(this.strm,i),e!==0))throw new Error(Dl[e])}push(n,t=!1){let e=this.strm,i=this.options.chunkSize,s,r,a;if(this.ended)return this.err===0;for(typeof t=="number"?r=t:r=t===!0?4:0,Mu.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length,this.started||(this.started=!0,this.onStart(e));;){if(e.avail_out===0&&(e.output=new Uint8Array(i),e.next_out=0,e.avail_out=i),s=Vl(e,r),s===2){let o=this.options.dictionary;o.length&&(s=yu(e,o),s===0?s=Vl(e,r):s===-3&&(s=2))}for(;e.avail_in>0&&s===1&&e.state.wrap&2&&e.state.flags!==0&&e.input[e.next_in]!==0;)Gu(e),s=Vl(e,r);if(s===-2||s===-3||s===2||s===-4)break;if(a=e.avail_out,e.next_out&&(e.avail_out===0||s===1||r>0)&&(this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out)),e.avail_out=0,e.next_out=0),!((s===0||s===-5)&&a===0)){if(s===1){s=vu(this.strm);break}if(e.avail_in===0){if(r===4){s=vu(this.strm),s===0&&(s=-5);break}return!0}}}return this.err=s,this.msg=e.msg||Dl[s],this.ended=!0,this.onEnd(s),s===0}onStart(n){}onData(n){this.chunks.push(n)}onEnd(n){n===0&&(this.result=zp(this.chunks)),this.chunks=[]}};function Vp(n,t={}){let e=new Gp(t);if(e.push(n,!0),e.err)throw new Error(e.msg);let i=e.result;return t.toText?new TextDecoder().decode(i):i}function Hu(n,t={}){return Vp(n,{...t,raw:!0})}function Wu(n,t){var e=atob(n.hz),i=new Uint8Array(e.length),s,r,a;for(s=0;s<e.length;s++)i[s]=e.charCodeAt(s);var o=Hu(i),c=n.w,l=n.h,h=new Uint8Array(c*l),f=new Float32Array(c*l);for(r=0;r<l;r++)for(s=0;s<c;s++){a=r*c+s;var d=s?h[a-1]:0,u=r?h[a-c]:0;h[a]=o[a]+(d+u>>1)&255,f[a]=n.base+n.step*h[a]}var _=(n.lat0+n.lat1)/2,w=(n.lon0+n.lon1)/2,p=111.2,m=111.2*Math.cos(_*Math.PI/180),S=(n.lon1-n.lon0)*m,v=(n.lat1-n.lat0)*p;function y(k,ht){return[(k-w)*m,-(ht-_)*p]}function C(k,ht){var vt=(k+S/2)/S*(c-1),St=(ht+v/2)/v*(l-1);vt=Math.min(c-1.001,Math.max(0,vt)),St=Math.min(l-1.001,Math.max(0,St));var it=vt|0,It=St|0,qt=vt-it,Lt=St-It,$t=It*c+it,ae=f[$t],rt=f[$t+1],Et=f[$t+c],Mt=f[$t+c+1];return qt+Lt<=1?ae+qt*(rt-ae)+Lt*(Et-ae):Mt+(1-qt)*(Et-Mt)+(1-Lt)*(rt-Mt)}for(var E=atob(n.pb),g=0,b=0,P=0,A=[];g<E.length;){for(var D=0;D<2;D++){var z=0,Z=0,L;do L=E.charCodeAt(g++)-63,z|=(L&31)<<Z,Z+=5;while(L>=32);var W=z&1?~(z>>1):z>>1;D===0?b+=W:P+=W}var K=y(P/1e5,b/1e5);A.push({x:K[0],z:K[1],m:C(K[0],K[1])})}(function(){var k=.2,ht=1.5,vt=[0],St=A.length,it,It;for(it=1;it<St;it++)vt[it]=vt[it-1]+Math.hypot(A[it].x-A[it-1].x,A[it].z-A[it-1].z);var qt=vt[St-1],Lt=Math.max(2,Math.round(qt/k)),$t=new Float64Array(Lt+1),ae=new Float64Array(Lt+1),rt=1;for(it=0;it<=Lt;it++){for(var Et=qt*it/Lt;rt<St-1&&vt[rt]<Et;)rt++;var Mt=A[rt-1],zt=A[rt],Pt=vt[rt]-vt[rt-1],ee=Pt>0?(Et-vt[rt-1])/Pt:0;$t[it]=Mt.x+(zt.x-Mt.x)*ee,ae[it]=Mt.z+(zt.z-Mt.z)*ee}var kt=Math.ceil(3*ht/k),oe=[],he=0;for(it=-kt;it<=kt;it++){var ue=Math.exp(-(it*k)*(it*k)/(2*ht*ht));oe.push(ue),he+=ue}function U(mt,R){return R<0?2*mt[0]-mt[Math.min(Lt,-R)]:R>Lt?2*mt[Lt]-mt[Math.max(0,2*Lt-R)]:mt[R]}var _e=[],le=[];for(it=0;it<=Lt;it++){var de=0,Tt=0;for(It=-kt;It<=kt;It++){var De=oe[It+kt];de+=De*U($t,it+It),Tt+=De*U(ae,it+It)}_e.push({x:de/he,z:Tt/he}),le.push(C(de/he,Tt/he))}var Yt=1.4;function ne(mt){var R=_e[mt-3],nt=_e[mt],j=_e[mt+3],wt=Math.hypot(nt.x-R.x,nt.z-R.z),xt=Math.hypot(j.x-nt.x,j.z-nt.z),gt=Math.hypot(R.x-j.x,R.z-j.z),Gt=Math.abs((nt.x-R.x)*(j.z-R.z)-(nt.z-R.z)*(j.x-R.x))/2;return Gt>1e-9?wt*xt*gt/(4*Gt):1e9}for(var T=0;T<80;T++){var x=[],V=!1;for(it=3;it<Lt-2;it++)ne(it)<Yt&&(x.push(it),V=!0);if(!V)break;var pt={},tt={};x.forEach(function(mt){for(var R=-2;R<=2;R++){var nt=mt+R;if(!(nt<1||nt>Lt-1||pt[nt]!==void 0)){for(var j=0,wt=0,xt=0,gt=-3;gt<=3;gt++){var Gt=Math.max(0,Math.min(Lt,nt+gt));j+=_e[Gt].x,wt+=_e[Gt].z,xt++}pt[nt]=_e[nt].x*.4+j/xt*.6,tt[nt]=_e[nt].z*.4+wt/xt*.6}}});for(var ut in pt)_e[ut].x=pt[ut],_e[ut].z=tt[ut]}for(it=0;it<=Lt;it++)le[it]=C(_e[it].x,_e[it].z);for(it=0;it<=Lt;it++){var Ct=0,$=0;for(It=-3;It<=3;It++){var at=Math.max(0,Math.min(Lt,it+It));Ct+=le[at],$++}_e[it].m=Math.max(le[it],Ct/$)}A=_e})();var G=[0];for(s=1;s<A.length;s++)G[s]=G[s-1]+Math.hypot(A[s].x-A[s-1].x,A[s].z-A[s-1].z);var ct=G[G.length-1],q=[],ot=0;t.forEach(function(k,ht){var vt=y(k.lon,k.lat),St;if(ht===0)St=0;else if(ht===t.length-1)St=A.length-1;else{var it=-1,It=1e9;for(a=ot;a<A.length;a++){var qt=Math.hypot(A[a].x-vt[0],A[a].z-vt[1]);if(qt<3&&qt<It)It=qt,it=a;else if(it>=0&&qt>It+4)break}if(it<0)for(It=1e9,a=ot;a<A.length;a++){var Lt=Math.hypot(A[a].x-vt[0],A[a].z-vt[1]);Lt<It&&(It=Lt,it=a)}St=it}ot=St,q.push({x:A[St].x,z:A[St].z,idx:St,s:G[St],m:A[St].m,min:st(k.h)})});function st(k){var ht=String(k).split(":");return+ht[0]*60+ +ht[1]}function Ft(k){k=Math.max(0,Math.min(ct,k));for(var ht=0,vt=G.length-1;vt-ht>1;){var St=ht+vt>>1;G[St]<=k?ht=St:vt=St}var it=G[vt]-G[ht],It=it>0?(k-G[ht])/it:0,qt=A[ht],Lt=A[vt];return{x:qt.x+(Lt.x-qt.x)*It,z:qt.z+(Lt.z-qt.z)*It,m:qt.m+(Lt.m-qt.m)*It,i:ht,t:It}}function Bt(k){if(k<=q[0].s)return q[0].min;for(var ht=1;ht<q.length;ht++)if(k<=q[ht].s){var vt=q[ht-1],St=q[ht],it=St.s>vt.s?(k-vt.s)/(St.s-vt.s):1;return vt.min+(St.min-vt.min)*it}return q[q.length-1].min}return{W:c,H:l,el:f,SX:S,SZ:v,proj:y,quota:C,route:A,cum:G,total:ct,tappe:q,puntoA:Ft,orologio:Bt}}function va(n){n=Math.round(n);var t=Math.floor(n/60),e=n%60;return(t<10?"0":"")+t+":"+(e<10?"0":"")+e}function Xu(n,t,e){var i=n.getContext("2d"),s=0,r=0,a=1,o=0,c=-1,l=1250,h=e.caldo,f=e.onScrub||function(){};function d(v,y){var C=getComputedStyle(n).getPropertyValue(v).trim();return C||y}function u(){var v=n.getBoundingClientRect();a=Math.min(window.devicePixelRatio||1,2),s=Math.max(200,Math.round(v.width)),r=Math.max(90,Math.round(v.height)),n.width=s*a,n.height=r*a,p()}function _(v){return 34+(s-44)*v/t.total}function w(v){return r-22-(r-36)*Math.min(v,l)/l}function p(){i.setTransform(a,0,0,a,0,0),i.clearRect(0,0,s,r);var v=d("--bordo","#1D2A23"),y=d("--vinaccia","#A22B3C"),C=d("--oro","#E2A93B"),E=d("--tenue","#8a8f86"),g=t.route,b;i.font='500 10px "DM Mono",monospace',i.textBaseline="middle",i.lineWidth=1,i.strokeStyle=E,i.fillStyle=E,i.globalAlpha=.35,[0,500,1e3].forEach(function(ct){i.beginPath(),i.moveTo(30,w(ct)),i.lineTo(s-6,w(ct)),i.stroke()}),i.globalAlpha=.9,[0,500,1e3].forEach(function(ct){i.fillText(ct+"",2,w(ct)-6)}),i.globalAlpha=1;var P=i.createLinearGradient(0,w(1200),0,w(0));for(P.addColorStop(0,C),P.addColorStop(1,"rgba(226,169,59,0)"),i.beginPath(),i.moveTo(_(0),w(0)),b=0;b<g.length;b++)i.lineTo(_(t.cum[b]),w(g[b].m));i.lineTo(_(t.total),w(0)),i.closePath(),i.globalAlpha=.28,i.fillStyle=P,i.fill(),i.globalAlpha=1;var A=t.tappe[h[0]].idx,D=t.tappe[h[1]].idx;function z(ct,q,ot,st,Ft){i.beginPath(),i.setLineDash(Ft||[]),i.lineWidth=st,i.strokeStyle=ot,i.lineJoin="round";for(var Bt=ct;Bt<=q;Bt++){var k=_(t.cum[Bt]),ht=w(g[Bt].m);Bt===ct?i.moveTo(k,ht):i.lineTo(k,ht)}i.stroke(),i.setLineDash([])}i.globalAlpha=.7,z(0,A,v,1.5,[3,4]),z(D,g.length-1,v,1.5,[3,4]),i.globalAlpha=1,z(A,D,y,3),t.tappe.forEach(function(ct,q){var ot=_(ct.s),st=w(ct.m);i.beginPath(),i.arc(ot,st,q===c?8:6,0,6.2832),i.fillStyle=q===c?y:d("--carta","#F6ECD8"),i.fill(),i.lineWidth=2,i.strokeStyle=v,i.stroke(),i.fillStyle=q===c?"#fff":v,i.textAlign="center",i.font='500 9px "DM Mono",monospace',i.fillText(String(q+1),ot,st+.5),i.textAlign="left"});var Z=t.puntoA(o),L=_(o);i.setLineDash([2,3]),i.strokeStyle=v,i.lineWidth=1,i.beginPath(),i.moveTo(L,6),i.lineTo(L,r-20),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(L,w(Z.m),5,0,6.2832),i.fillStyle=C,i.fill(),i.lineWidth=2,i.strokeStyle=v,i.stroke();var W=Math.round(Z.m/10)*10+" m \xB7 "+va(t.orologio(o));i.font='500 11px "DM Mono",monospace';var K=i.measureText(W).width+12,G=Math.min(s-K-4,Math.max(32,L-K/2));i.fillStyle=v,i.beginPath(),i.roundRect?i.roundRect(G,r-18,K,16,5):i.rect(G,r-18,K,16),i.fill(),i.fillStyle=d("--carta","#F6ECD8"),i.fillText(W,G+6,r-10)}function m(v){var y=n.getBoundingClientRect(),C=(v.clientX-y.left-34)/(s-44)*t.total;return Math.max(0,Math.min(t.total,C))}var S=!1;return n.addEventListener("pointerdown",function(v){S=!0;try{n.setPointerCapture(v.pointerId)}catch(y){}f(m(v))}),n.addEventListener("pointermove",function(v){S&&f(m(v))}),n.addEventListener("pointerup",function(){S=!1}),n.addEventListener("pointercancel",function(){S=!1}),window.ResizeObserver?new ResizeObserver(u).observe(n):window.addEventListener("resize",u),u(),{set:function(v,y){o=v,y!==void 0&&(c=y),p()},ridisegna:p}}var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ni={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Td=0,Fc=1,Cd=2;var Jr=1,Rd=2,Os=3,Ui=0,hn=1,En=2,Wi=0,Bs=1,Kr=2,Oc=3,Bc=4,Pd=5;var Xi=100,Id=101,Ld=102,Dd=103,Nd=104,Ud=200,Fd=201,Od=202,Bd=203,zc=204,kc=205,zd=206,kd=207,Gd=208,Vd=209,Hd=210,Wd=211,Xd=212,qd=213,Yd=214,Za=0,Ja=1,Ka=2,bs=3,$a=4,ja=5,Qa=6,to=7,Io=0,Zd=1,Jd=2,Wn=0,Gc=1,Vc=2,Hc=3,Wc=4,Xc=5,qc=6,Yc=7;var Zc=300,qi=301,zs=302,Lo=303,Do=304,eo=1e3,kn=1001,no=1002,je=1003,Kd=1004;var $r=1005;var on=1006,No=1007;var ci=1008;var dn=1009,Jc=1010,Kc=1011,ks=1012,Uo=1013,Nn=1014,An=1015,Un=1016,Fo=1017,Oo=1018,Yi=1020,$c=35902,jc=35899,Qc=1021,th=1022,Fn=1023,si=1026,hi=1027,Bo=1028,zo=1029,Fi=1030,ko=1031;var Go=1033,jr=33776,Qr=33777,ta=33778,ea=33779,Vo=35840,Ho=35841,Wo=35842,Xo=35843,qo=36196,Yo=37492,Zo=37496,Jo=37488,Ko=37489,na=37490,$o=37491,jo=37808,Qo=37809,tl=37810,el=37811,nl=37812,il=37813,sl=37814,rl=37815,al=37816,ol=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,ia=36285,_l=36286;var dr=2300,io=2301,qa=2302,Ac=2303,Tc=2400,Cc=2401,Rc=2402;var $d=3200;var xl=0,jd=1,ui="",Qe="srgb",fr="srgb-linear",pr="linear",Pe="srgb";var Ya=7680;var Qd=519,tf=512,ef=513,nf=514,eh=515,sf=516,rf=517,nh=518,ih=519,sh=35044;var rh="300 es",wn=2e3,ws=2001;function Hp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Wp(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function mr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function af(){let n=mr("canvas");return n.style.display="block",n}var qu={},Es=null;function gr(...n){let t="THREE."+n.shift();Es?Es("log",t,...n):console.log(t,...n)}function of(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ie(...n){n=of(n);let t="THREE."+n.shift();if(Es)Es("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function re(...n){n=of(n);let t="THREE."+n.shift();if(Es)Es("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function or(...n){let t=n.join(" ");t in qu||(qu[t]=!0,ie(...n))}function lf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var cf={[Za]:Za,[Ka]:Qa,[$a]:$a,[bs]:ja,[Ja]:Ja,[Qa]:Ka,[to]:to,[ja]:bs},Dn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yu=1234567,lr=Math.PI/180,As=180/Math.PI;function di(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function ye(n,t,e){return Math.max(t,Math.min(e,n))}function ah(n,t){return(n%t+t)%t}function Xp(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function qp(n,t,e){return n!==t?(e-n)/(t-n):0}function cr(n,t,e){return(1-e)*n+e*t}function Yp(n,t,e,i){return cr(n,t,1-Math.exp(-e*i))}function Zp(n,t=1){return t-Math.abs(ah(n,t*2)-t)}function Jp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function $p(n,t){return n+Math.floor(Math.random()*(t-n+1))}function jp(n,t){return n+Math.random()*(t-n)}function Qp(n){return n*(.5-Math.random())}function tm(n){n!==void 0&&(Yu=n);let t=Yu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function em(n){return n*lr}function nm(n){return n*As}function im(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function sm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rm(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),u=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*u,o*l);break;case"YXY":n.set(c*u,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*u,o*h,o*l);break;default:ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vl(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function lh(n,t){if(t.constructor===Float32Array)return n;let e=vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function ch(n,t){if(t.constructor===Float32Array)return n;let e=vl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var hh={DEG2RAD:lr,RAD2DEG:As,generateUUID:di,clamp:ye,euclideanModulo:ah,mapLinear:Xp,inverseLerp:qp,lerp:cr,damp:Yp,pingpong:Zp,smoothstep:Jp,smootherstep:Kp,randInt:$p,randFloat:jp,randFloatSpread:Qp,seededRandom:tm,degToRad:em,radToDeg:nm,isPowerOfTwo:im,ceilPowerOfTwo:sm,floorPowerOfTwo:oh,setQuaternionFromProperEuler:rm,normalize:ch,denormalize:lh},gh=class gh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gh.prototype.isVector2=!0;var _t=gh,xn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],d=r[a+0],u=r[a+1],_=r[a+2],w=r[a+3];if(f!==w||c!==d||l!==u||h!==_){let p=c*d+l*u+h*_+f*w;p<0&&(d=-d,u=-u,_=-_,w=-w,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),v=Math.sin(S);m=Math.sin(m*S)/v,o=Math.sin(o*S)/v,c=c*m+d*o,l=l*m+u*o,h=h*m+_*o,f=f*m+w*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+_*o,f=f*m+w*o;let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],d=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+h*f+c*u-l*d,t[e+1]=c*_+h*d+l*f-o*u,t[e+2]=l*_+h*u+o*d-c*f,t[e+3]=h*_-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),d=c(i/2),u=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"YZX":this._x=d*h*f+l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f-d*u*_;break;case"XZY":this._x=d*h*f-l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f+d*u*_;break;default:ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},_h=class _h{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return nc.copy(this).projectOnVector(t),this.sub(nc)}reflect(t){return this.sub(nc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ye(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_h.prototype.isVector3=!0;var O=_h,nc=new O,Zu=new xn,xh=class xh{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],u=i[5],_=i[8],w=s[0],p=s[3],m=s[6],S=s[1],v=s[4],y=s[7],C=s[2],E=s[5],g=s[8];return r[0]=a*w+o*S+c*C,r[3]=a*p+o*v+c*E,r[6]=a*m+o*y+c*g,r[1]=l*w+h*S+f*C,r[4]=l*p+h*v+f*E,r[7]=l*m+h*y+f*g,r[2]=d*w+u*S+_*C,r[5]=d*p+u*v+_*E,r[8]=d*m+u*y+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,_=e*f+i*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=f*w,t[1]=(s*l-h*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(h*e-s*c)*w,t[5]=(s*r-o*e)*w,t[6]=u*w,t[7]=(i*c-l*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return or("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ic.makeScale(t,e)),this}rotate(t){return or("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ic.makeRotation(-t)),this}translate(t,e){return or("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ic.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xh.prototype.isMatrix3=!0;var ce=xh,ic=new ce,Ju=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ku=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function am(){let n={enabled:!0,workingColorSpace:fr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Pe&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pe&&(s.r=Ss(s.r),s.g=Ss(s.g),s.b=Ss(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ui?pr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[fr]:{primaries:t,whitePoint:i,transfer:pr,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:i,transfer:Pe,toXYZ:Ju,fromXYZ:Ku,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),n}var Ee=am();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ss(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ss,so=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ss===void 0&&(ss=mr("canvas")),ss.width=t.width,ss.height=t.height;let s=ss.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ss}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=mr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},om=0,Ts=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sc(s[a].image)):r.push(sc(s[a]))}else r=sc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function sc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?so.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ie("Texture: Unable to serialize Texture."),{})}var lm=0,rc=new O,ln=class n extends Dn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=kn,s=kn,r=on,a=ci,o=Fn,c=dn,l=n.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=di(),this.name="",this.source=new Ts(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(rc).x}get height(){return this.source.getSize(rc).y}get depth(){return this.source.getSize(rc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){ie(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case no:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case no:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Zc;ln.DEFAULT_ANISOTROPY=1;var vh=class vh{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],_=c[9],w=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-w)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+w)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(u+1)/2,C=(m+1)/2,E=(h+d)/4,g=(f+w)/4,b=(_+p)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=g/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=g/r,s=b/r),this.set(i,s,r,e),this}let S=Math.sqrt((p-_)*(p-_)+(f-w)*(f-w)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-w)/S,this.z=(d-h)/S,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ye(this.x,t.x,e.x),this.y=ye(this.y,t.y,e.y),this.z=ye(this.z,t.z,e.z),this.w=ye(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ye(this.x,t,e),this.y=ye(this.y,t,e),this.z=ye(this.z,t,e),this.w=ye(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ye(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vh.prototype.isVector4=!0;var Be=vh,ro=class extends Dn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new ln({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ts(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends ro{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},_r=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends ln{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=je,this.minFilter=je,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Po=class Po{constructor(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p)}set(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=_,m[11]=w,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/rs.setFromMatrixColumn(t,0).length(),r=1/rs.setFromMatrixColumn(t,1).length(),a=1/rs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,_=o*h,w=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+_*l,e[5]=d-w*l,e[9]=-o*c,e[2]=w-d*l,e[6]=_+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,_=l*h,w=l*f;e[0]=d+w*o,e[4]=_*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=w+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,_=l*h,w=l*f;e[0]=d-w*o,e[4]=-a*f,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=w-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,_=o*h,w=o*f;e[0]=c*h,e[4]=_*l-u,e[8]=d*l+w,e[1]=c*f,e[5]=w*l+d,e[9]=u*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,_=o*c,w=o*l;e[0]=c*h,e[4]=w-d*f,e[8]=_*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+_,e[10]=d-w*f}else if(t.order==="XZY"){let d=a*c,u=a*l,_=o*c,w=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+w,e[5]=a*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=o*h,e[10]=w*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(cm,t,hm)}lookAt(t,e,i){let s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),yi.crossVectors(i,mn),yi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),yi.crossVectors(i,mn)),yi.normalize(),ya.crossVectors(mn,yi),s[0]=yi.x,s[4]=ya.x,s[8]=mn.x,s[1]=yi.y,s[5]=ya.y,s[9]=mn.y,s[2]=yi.z,s[6]=ya.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],u=i[13],_=i[2],w=i[6],p=i[10],m=i[14],S=i[3],v=i[7],y=i[11],C=i[15],E=s[0],g=s[4],b=s[8],P=s[12],A=s[1],D=s[5],z=s[9],Z=s[13],L=s[2],W=s[6],K=s[10],G=s[14],ct=s[3],q=s[7],ot=s[11],st=s[15];return r[0]=a*E+o*A+c*L+l*ct,r[4]=a*g+o*D+c*W+l*q,r[8]=a*b+o*z+c*K+l*ot,r[12]=a*P+o*Z+c*G+l*st,r[1]=h*E+f*A+d*L+u*ct,r[5]=h*g+f*D+d*W+u*q,r[9]=h*b+f*z+d*K+u*ot,r[13]=h*P+f*Z+d*G+u*st,r[2]=_*E+w*A+p*L+m*ct,r[6]=_*g+w*D+p*W+m*q,r[10]=_*b+w*z+p*K+m*ot,r[14]=_*P+w*Z+p*G+m*st,r[3]=S*E+v*A+y*L+C*ct,r[7]=S*g+v*D+y*W+C*q,r[11]=S*b+v*z+y*K+C*ot,r[15]=S*P+v*Z+y*G+C*st,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],w=t[7],p=t[11],m=t[15],S=c*u-l*d,v=o*u-l*f,y=o*d-c*f,C=a*u-l*h,E=a*d-c*h,g=a*f-o*h;return e*(w*S-p*v+m*y)-i*(_*S-p*C+m*E)+s*(_*v-w*C+m*g)-r*(_*y-w*E+p*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],w=t[13],p=t[14],m=t[15],S=e*o-i*a,v=e*c-s*a,y=e*l-r*a,C=i*c-s*o,E=i*l-r*o,g=s*l-r*c,b=h*w-f*_,P=h*p-d*_,A=h*m-u*_,D=f*p-d*w,z=f*m-u*w,Z=d*m-u*p,L=S*Z-v*z+y*D+C*A-E*P+g*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return t[0]=(o*Z-c*z+l*D)*W,t[1]=(s*z-i*Z-r*D)*W,t[2]=(w*g-p*E+m*C)*W,t[3]=(d*E-f*g-u*C)*W,t[4]=(c*A-a*Z-l*P)*W,t[5]=(e*Z-s*A+r*P)*W,t[6]=(p*y-_*g-m*v)*W,t[7]=(h*g-d*y+u*v)*W,t[8]=(a*z-o*A+l*b)*W,t[9]=(i*A-e*z-r*b)*W,t[10]=(_*E-w*y+m*S)*W,t[11]=(f*y-h*E-u*S)*W,t[12]=(o*P-a*D-c*b)*W,t[13]=(e*D-i*P+s*b)*W,t[14]=(w*v-_*C-p*S)*W,t[15]=(h*C-f*v+d*S)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,_=r*f,w=a*h,p=a*f,m=o*f,S=c*l,v=c*h,y=c*f,C=i.x,E=i.y,g=i.z;return s[0]=(1-(w+m))*C,s[1]=(u+y)*C,s[2]=(_-v)*C,s[3]=0,s[4]=(u-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(_+v)*g,s[9]=(p-S)*g,s[10]=(1-(d+w))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=rs.set(s[0],s[1],s[2]).length(),o=rs.set(s[4],s[5],s[6]).length(),c=rs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Pn.copy(this);let l=1/a,h=1/o,f=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=h,Pn.elements[5]*=h,Pn.elements[6]*=h,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,e.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=wn,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),_,w;if(c)_=r/(a-r),w=a*r/(a-r);else if(o===wn)_=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===ws)_=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=w,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=wn,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),u=-(i+s)/(i-s),_,w;if(c)_=1/(a-r),w=a/(a-r);else if(o===wn)_=-2/(a-r),w=-(a+r)/(a-r);else if(o===ws)_=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=w,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Po.prototype.isMatrix4=!0;var Ie=Po,rs=new O,Pn=new Ie,cm=new O(0,0,0),hm=new O(1,1,1),yi=new O,ya=new O,mn=new O,$u=new Ie,ju=new xn,ri=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return $u.makeRotationFromQuaternion(t),this.setFromRotationMatrix($u,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ju.setFromEuler(this),this.setFromQuaternion(ju,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var xr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},um=0,Qu=new O,as=new xn,$n=new Ie,Ma=new O,$s=new O,dm=new O,fm=new xn,td=new O(1,0,0),ed=new O(0,1,0),nd=new O(0,0,1),id={type:"added"},pm={type:"removed"},os={type:"childadded",child:null},ac={type:"childremoved",child:null},Ue=class n extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new ri,i=new xn,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new ce}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.multiply(as),this}rotateOnWorldAxis(t,e){return as.setFromAxisAngle(t,e),this.quaternion.premultiply(as),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qu.copy(t).applyQuaternion(this.quaternion),this.position.add(Qu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ma.copy(t):Ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt($s,Ma,this.up):$n.lookAt(Ma,$s,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),as.setFromRotationMatrix($n),this.quaternion.premultiply(as.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),os.child=t,this.dispatchEvent(os),os.child=null):re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(pm),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,t,dm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,fm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ue.DEFAULT_UP=new O(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},mm={type:"move"},Cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,i),m=this._getHandJoint(l,w);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;l.inputState.pinching&&d>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new un;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},hf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function oc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var te=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ee.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,Ee.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Ee.workingColorSpace){if(t=ah(t,1),e=ye(e,0,1),i=ye(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=oc(a,r,t+1/3),this.g=oc(a,r,t),this.b=oc(a,r,t-1/3)}return Ee.colorSpaceToWorking(this,s),this}setStyle(t,e=Qe){function i(r){r!==void 0&&parseFloat(r)<1&&ie("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:ie("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);ie("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let i=hf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):ie("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return Ee.workingToColorSpace(nn.copy(this),t),Math.round(ye(nn.r*255,0,255))*65536+Math.round(ye(nn.g*255,0,255))*256+Math.round(ye(nn.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ee.workingColorSpace){Ee.workingToColorSpace(nn.copy(this),e);let i=nn.r,s=nn.g,r=nn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Ee.workingColorSpace){return Ee.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=Qe){Ee.workingToColorSpace(nn.copy(this),t);let e=nn.r,i=nn.g,s=nn.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(Sa);let i=cr(Mi.h,Sa.h,e),s=cr(Mi.s,Sa.s,e),r=cr(Mi.l,Sa.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new te;te.NAMES=hf;var vr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},yr=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},In=new O,jn=new O,lc=new O,Qn=new O,ls=new O,cs=new O,sd=new O,cc=new O,hc=new O,uc=new O,dc=new Be,fc=new Be,pc=new Be,ni=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),In.subVectors(t,e),s.cross(In);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){In.subVectors(s,e),jn.subVectors(i,e),lc.subVectors(t,e);let a=In.dot(In),o=In.dot(jn),c=In.dot(lc),l=jn.dot(jn),h=jn.dot(lc),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qn.x),c.addScaledVector(a,Qn.y),c.addScaledVector(o,Qn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return dc.setScalar(0),fc.setScalar(0),pc.setScalar(0),dc.fromBufferAttribute(t,e),fc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(dc,r.x),a.addScaledVector(fc,r.y),a.addScaledVector(pc,r.z),a}static isFrontFacing(t,e,i,s){return In.subVectors(i,e),jn.subVectors(t,e),In.cross(jn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),In.cross(jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ls.subVectors(s,i),cs.subVectors(r,i),cc.subVectors(t,i);let c=ls.dot(cc),l=cs.dot(cc);if(c<=0&&l<=0)return e.copy(i);hc.subVectors(t,s);let h=ls.dot(hc),f=cs.dot(hc);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(ls,a);uc.subVectors(t,r);let u=ls.dot(uc),_=cs.dot(uc);if(_>=0&&u<=_)return e.copy(r);let w=u*l-c*_;if(w<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(cs,o);let p=h*_-u*f;if(p<=0&&f-h>=0&&u-_>=0)return sd.subVectors(r,s),o=(f-h)/(f-h+(u-_)),e.copy(s).addScaledVector(sd,o);let m=1/(p+w+d);return a=w*m,o=d*m,e.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Vn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ba.copy(i.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),wa.subVectors(this.max,js),hs.subVectors(t.a,js),us.subVectors(t.b,js),ds.subVectors(t.c,js),Si.subVectors(us,hs),bi.subVectors(ds,us),zi.subVectors(hs,ds);let e=[0,-Si.z,Si.y,0,-bi.z,bi.y,0,-zi.z,zi.y,Si.z,0,-Si.x,bi.z,0,-bi.x,zi.z,0,-zi.x,-Si.y,Si.x,0,-bi.y,bi.x,0,-zi.y,zi.x,0];return!mc(e,hs,us,ds,wa)||(e=[1,0,0,0,1,0,0,0,1],!mc(e,hs,us,ds,wa))?!1:(Ea.crossVectors(Si,bi),e=[Ea.x,Ea.y,Ea.z],mc(e,hs,us,ds,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ti=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,ba=new Vn,hs=new O,us=new O,ds=new O,Si=new O,bi=new O,zi=new O,js=new O,wa=new O,Ea=new O,ki=new O;function mc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ki.fromArray(n,r);let o=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),c=t.dot(ki),l=e.dot(ki),h=i.dot(ki);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var We=new O,Aa=new _t,gm=0,Xe=class extends Dn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=sh,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=t!==void 0?vl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ch(t,this.array)}};var Mr=class extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Sr=class extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Le=class extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}},_m=new Vn,Qs=new O,gc=new O,Ei=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_m.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qs.subVectors(t,this.center);let e=Qs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qs.copy(t.center).add(gc)),this.expandByPoint(Qs.copy(t.center).sub(gc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},xm=0,bn=new Ie,_c=new Ue,fs=new O,gn=new Vn,tr=new Vn,$e=new O,qe=class n extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hp(t)?Sr:Mr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ce().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,i){return bn.makeTranslation(t,e,i),this.applyMatrix4(bn),this}scale(t,e,i){return bn.makeScale(t,e,i),this.applyMatrix4(bn),this}lookAt(t){return _c.lookAt(t),_c.updateMatrix(),this.applyMatrix4(_c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];tr.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(gn.min,tr.min),gn.expandByPoint($e),$e.addVectors(gn.max,tr.max),gn.expandByPoint($e)):(gn.expandByPoint(tr.min),gn.expandByPoint(tr.max))}gn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)$e.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(t,l),$e.add(fs)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Xe(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let P=0;P<i.count;P++)o[P]=new O,c[P]=new O;let h=new O,f=new O,d=new O,u=new _t,_=new _t,w=new _t,p=new O,m=new O;function S(P,A,D){l[P]=l[A]=l[D]=1,h.fromBufferAttribute(i,P),f.fromBufferAttribute(i,A),d.fromBufferAttribute(i,D),u.fromBufferAttribute(r,P),_.fromBufferAttribute(r,A),w.fromBufferAttribute(r,D),f.sub(h),d.sub(h),_.sub(u),w.sub(u);let z=1/(_.x*w.y-w.x*_.y);isFinite(z)&&(p.copy(f).multiplyScalar(w.y).addScaledVector(d,-_.y).multiplyScalar(z),m.copy(d).multiplyScalar(_.x).addScaledVector(f,-w.x).multiplyScalar(z),o[P].add(p),o[A].add(p),o[D].add(p),c[P].add(m),c[A].add(m),c[D].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let P=0,A=v.length;P<A;++P){let D=v[P],z=D.start,Z=D.count;for(let L=z,W=z+Z;L<W;L+=3)S(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new O,C=new O,E=new O,g=new O;function b(P){E.fromBufferAttribute(s,P),g.copy(E);let A=o[P];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),C.crossVectors(g,A);let z=C.dot(c[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,z)}for(let P=0,A=i.count;P<A;++P)l[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new O,r=new O,a=new O,o=new O,c=new O,l=new O,h=new O,f=new O;if(t)for(let d=0,u=t.count;d<u;d+=3){let _=t.getX(d+0),w=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,w),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,_=0;for(let w=0,p=c.length;w<p;w++){o.isInterleavedBufferAttribute?u=c[w]*o.data.stride+o.offset:u=c[w]*h;for(let m=0;m<h;m++)d[_++]=l[u++]}return new Xe(d,h,f)}if(this.index===null)return ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,i);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=sh,this.updateRanges=[],this.version=0,this.uuid=di()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=rd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function rd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=di()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var rn=new O,br=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?vl(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){gr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){gr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):lh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):ch(t,this.data.array)}},xc=new O,vm=new O,ym=new ce,_n=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=xc.subVectors(i,e).cross(vm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(xc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ym.getNormalMatrix(t),s=this.coplanarPoint(xc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Mm=0,ai=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mm++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Bs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=kc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){ie(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){ie(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new _n().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Rs=class extends ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ps,er=new O,ms=new O,gs=new O,_s=new _t,nr=new _t,uf=new Ie,Ta=new O,ir=new O,Ca=new O,ad=new _t,vc=new _t,od=new _t,wr=class extends Ue{constructor(t=new Rs){if(super(),this.isSprite=!0,this.type="Sprite",ps===void 0){ps=new qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new oo(e,5);ps.setIndex([0,1,2,0,2,3]),ps.setAttribute("position",new br(i,3,0,!1)),ps.setAttribute("uv",new br(i,2,3,!1))}this.geometry=ps,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&re('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ms.setFromMatrixScale(this.matrixWorld),uf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),gs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ms.multiplyScalar(-gs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ra(Ta.set(-.5,-.5,0),gs,a,ms,s,r),Ra(ir.set(.5,-.5,0),gs,a,ms,s,r),Ra(Ca.set(.5,.5,0),gs,a,ms,s,r),ad.set(0,0),vc.set(1,0),od.set(1,1);let o=t.ray.intersectTriangle(Ta,ir,Ca,!1,er);if(o===null&&(Ra(ir.set(-.5,.5,0),gs,a,ms,s,r),vc.set(0,1),o=t.ray.intersectTriangle(Ta,Ca,ir,!1,er),o===null))return;let c=t.ray.origin.distanceTo(er);c<t.near||c>t.far||e.push({distance:c,point:er.clone(),uv:ni.getInterpolation(er,Ta,ir,Ca,ad,vc,od,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Ra(n,t,e,i,s,r){_s.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(nr.x=r*_s.x-s*_s.y,nr.y=s*_s.x+r*_s.y):nr.copy(_s),n.copy(t),n.x+=nr.x,n.y+=nr.y,n.applyMatrix4(uf)}var ei=new O,yc=new O,Pa=new O,Ia=new O,Ps=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){yc.copy(t).add(e).multiplyScalar(.5),Pa.copy(e).sub(t).normalize(),Ia.copy(this.origin).sub(yc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),c=-Ia.dot(Pa),l=Ia.lengthSq(),h=Math.abs(1-a*a),f,d,u,_;if(h>0)if(f=a*c-o,d=a*o-c,_=r*h,f>=0)if(d>=-_)if(d<=_){let w=1/h;f*=w,d*=w,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(yc).addScaledVector(Pa,d),u}intersectSphere(t,e){if(t.radius<0)return null;ei.subVectors(t.center,this.origin);let i=ei.dot(this.direction),s=ei.dot(ei)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,_=e.x-a.x,w=e.y-a.y,p=e.z-a.z,m=i.x-a.x,S=i.y-a.y,v=i.z-a.z,y=Math.abs(c),C=Math.abs(l),E=Math.abs(h),g,b,P,A,D,z,Z,L,W,K,G,ct;if(y>=C&&y>=E?(P=c,z=f,W=_,ct=m,c>=0?(g=l,b=h,A=d,D=u,Z=w,L=p,K=S,G=v):(g=h,b=l,A=u,D=d,Z=p,L=w,K=v,G=S)):C>=E?(P=l,z=d,W=w,ct=S,l>=0?(g=h,b=c,A=u,D=f,Z=p,L=_,K=v,G=m):(g=c,b=h,A=f,D=u,Z=_,L=p,K=m,G=v)):(P=h,z=u,W=p,ct=v,h>=0?(g=c,b=l,A=f,D=d,Z=_,L=w,K=m,G=S):(g=l,b=c,A=d,D=f,Z=w,L=_,K=S,G=m)),P===0)return null;let q=g/P,ot=b/P,st=1/P,Ft=A-q*z,Bt=D-ot*z,k=Z-q*W,ht=L-ot*W,vt=K-q*ct,St=G-ot*ct,it=vt*ht-St*k,It=Ft*St-Bt*vt,qt=k*Bt-ht*Ft;if(s){if(it<0||It<0||qt<0)return null}else if((it<0||It<0||qt<0)&&(it>0||It>0||qt>0))return null;let Lt=it+It+qt;if(Lt===0)return null;let $t=st*(it*z+It*W+qt*ct);return(Lt>0?$t<0:$t>0)?null:this.at($t/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Io,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ld=new Ie,Gi=new Ps,La=new Ei,cd=new O,Da=new O,Na=new O,Ua=new O,Mc=new O,Fa=new O,hd=new O,Oa=new O,Wt=class extends Ue{constructor(t=new qe,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Mc.fromBufferAttribute(f,t),a?Fa.addScaledVector(Mc,h):Fa.addScaledVector(Mc.sub(e),h))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),La.copy(i.boundingSphere),La.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(La.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(La,cd)===null||Gi.origin.distanceToSquared(cd)>(t.far-t.near)**2))&&(ld.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(ld),!(i.boundingBox!==null&&Gi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,w=d.length;_<w;_++){let p=d[_],m=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,C=v;y<C;y+=3){let E=o.getX(y),g=o.getX(y+1),b=o.getX(y+2);s=Ba(this,m,t,i,l,h,f,E,g,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),w=Math.min(o.count,u.start+u.count);for(let p=_,m=w;p<m;p+=3){let S=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);s=Ba(this,a,t,i,l,h,f,S,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,w=d.length;_<w;_++){let p=d[_],m=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,C=v;y<C;y+=3){let E=y,g=y+1,b=y+2;s=Ba(this,m,t,i,l,h,f,E,g,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),w=Math.min(c.count,u.start+u.count);for(let p=_,m=w;p<m;p+=3){let S=p,v=p+1,y=p+2;s=Ba(this,a,t,i,l,h,f,S,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Sm(n,t,e,i,s,r,a,o){let c;if(t.side===hn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Ui,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(Oa);return l<e.near||l>e.far?null:{distance:l,point:Oa.clone(),object:n}}function Ba(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Da),n.getVertexPosition(c,Na),n.getVertexPosition(l,Ua);let h=Sm(n,t,e,i,Da,Na,Ua,hd);if(h){let f=new O;ni.getBarycoord(hd,Da,Na,Ua,f),s&&(h.uv=ni.getInterpolatedAttribute(s,o,c,l,f,new _t)),r&&(h.uv1=ni.getInterpolatedAttribute(r,o,c,l,f,new _t)),a&&(h.normal=ni.getInterpolatedAttribute(a,o,c,l,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new O,materialIndex:0};ni.getNormal(Da,Na,Ua,d.normal),h.face=d,h.barycoord=f}return h}var Er=class extends ln{constructor(t=null,e=1,i=1,s,r,a,o,c,l=je,h=je,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ar=class extends Xe{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},xs=new Ie,ud=new Ie,za=[],dd=new Vn,bm=new Ie,sr=new Wt,rr=new Ei,Ye=class extends Wt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ar(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,bm)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),dd.copy(t.boundingBox).applyMatrix4(xs),this.boundingBox.union(dd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ei),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,xs),rr.copy(t.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(rr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(i),t.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,xs),ud.multiplyMatrices(i,xs),sr.matrixWorld=ud,sr.raycast(t,za);for(let a=0,o=za.length;a<o;a++){let c=za[a];c.instanceId=r,c.object=this,e.push(c)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Er(new Float32Array(s*this.count),s,this.count,Bo,An));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Vi=new Ei,wm=new _t(.5,.5),ka=new O,Ai=class{constructor(t=new _n,e=new _n,i=new _n,s=new _n,r=new _n,a=new _n){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],_=r[8],w=r[9],p=r[10],m=r[11],S=r[12],v=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-a,u-h,m-_,C-S).normalize(),s[1].setComponents(l+a,u+h,m+_,C+S).normalize(),s[2].setComponents(l+o,u+f,m+w,C+v).normalize(),s[3].setComponents(l-o,u-f,m-w,C-v).normalize(),i)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,u-d,m-p,C-y).normalize();else if(s[4].setComponents(l-c,u-d,m-p,C-y).normalize(),e===wn)s[5].setComponents(l+c,u+d,m+p,C+y).normalize();else if(e===ws)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){Vi.center.set(0,0,0);let e=wm.distanceTo(t.center);return Vi.radius=.7071067811865476+e,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ka.x=s.normal.x>0?t.max.x:t.min.x,ka.y=s.normal.y>0?t.max.y:t.min.y,ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},fd=new Ie,lo=class n{constructor(){this.coordinateSystem=wn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];fd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Ai),i[s].setFromProjectionMatrix(fd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new Ai),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Tr=class extends ln{constructor(t=[],e=qi,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ti=class extends ln{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends ln{constructor(t,e,i=Nn,s,r,a,o=je,c=je,l,h=si,f=1){if(h!==si&&h!==hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ts(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Cr=class extends oi{constructor(t,e=Nn,i=qi,s,r,a=je,o=je,c,l=si){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rr=class extends ln{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Me=class n extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function _(w,p,m,S,v,y,C,E,g,b,P){let A=y/g,D=C/b,z=y/2,Z=C/2,L=E/2,W=g+1,K=b+1,G=0,ct=0,q=new O;for(let ot=0;ot<K;ot++){let st=ot*D-Z;for(let Ft=0;Ft<W;Ft++){let Bt=Ft*A-z;q[w]=Bt*S,q[p]=st*v,q[m]=L,l.push(q.x,q.y,q.z),q[w]=0,q[p]=0,q[m]=E>0?1:-1,h.push(q.x,q.y,q.z),f.push(Ft/g),f.push(1-ot/b),G+=1}}for(let ot=0;ot<b;ot++)for(let st=0;st<g;st++){let Ft=d+st+W*ot,Bt=d+st+W*(ot+1),k=d+(st+1)+W*(ot+1),ht=d+(st+1)+W*ot;c.push(Ft,Bt,ht),c.push(Bt,k,ht),ct+=6}o.addGroup(u,ct,P),u+=ct,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Is=class n extends qe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new O,h=new _t;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=i+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tn=class n extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],_=0,w=[],p=i/2,m=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2));function S(){let y=new O,C=new O,E=0,g=(e-t)/i;for(let b=0;b<=r;b++){let P=[],A=b/r,D=A*(e-t)+t;for(let z=0;z<=s;z++){let Z=z/s,L=Z*c+o,W=Math.sin(L),K=Math.cos(L);C.x=D*W,C.y=-A*i+p,C.z=D*K,f.push(C.x,C.y,C.z),y.set(W,g,K).normalize(),d.push(y.x,y.y,y.z),u.push(Z,1-A),P.push(_++)}w.push(P)}for(let b=0;b<s;b++)for(let P=0;P<r;P++){let A=w[P][b],D=w[P+1][b],z=w[P+1][b+1],Z=w[P][b+1];(t>0||P!==0)&&(h.push(A,D,Z),E+=3),(e>0||P!==r-1)&&(h.push(D,z,Z),E+=3)}l.addGroup(m,E,0),m+=E}function v(y){let C=_,E=new _t,g=new O,b=0,P=y===!0?t:e,A=y===!0?1:-1;for(let z=1;z<=s;z++)f.push(0,p*A,0),d.push(0,A,0),u.push(.5,.5),_++;let D=_;for(let z=0;z<=s;z++){let L=z/s*c+o,W=Math.cos(L),K=Math.sin(L);g.x=P*K,g.y=p*A,g.z=P*W,f.push(g.x,g.y,g.z),d.push(0,A,0),E.x=W*.5+.5,E.y=K*.5*A+.5,u.push(E.x,E.y),_++}for(let z=0;z<s;z++){let Z=C+z,L=D+z;y===!0?h.push(L,L+1,Z):h.push(L+1,L,Z),b+=3}l.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ci=class n extends tn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ie("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new _t:new O);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new O,s=[],r=[],a=[],o=new O,c=new Ie;for(let u=0;u<=t;u++){let _=u/t;s[u]=this.getTangentAt(_,new O)}r[0]=new O,a[0]=new O;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(ye(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,_))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(ye(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends yn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new _t){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},co=class extends Ls{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uh(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var pd=new O,md=new O,Sc=new uh,bc=new uh,wc=new uh,Ds=class extends yn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new O){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(md.subVectors(s[0],s[1]).add(s[0]),l=md);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(pd.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=pd),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),u),w=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);w<1e-4&&(w=1),_<1e-4&&(_=w),p<1e-4&&(p=w),Sc.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,_,w,p),bc.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,_,w,p),wc.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,_,w,p)}else this.curveType==="catmullrom"&&(Sc.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),bc.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),wc.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return i.set(Sc.calc(c),bc.calc(c),wc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new O().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function gd(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Em(n,t){let e=1-n;return e*e*t}function Am(n,t){return 2*(1-n)*n*t}function Tm(n,t){return n*n*t}function hr(n,t,e,i){return Em(n,t)+Am(n,e)+Tm(n,i)}function Cm(n,t){let e=1-n;return e*e*e*t}function Rm(n,t){let e=1-n;return 3*e*e*n*t}function Pm(n,t){return 3*(1-n)*n*n*t}function Im(n,t){return n*n*n*t}function ur(n,t,e,i,s){return Cm(n,t)+Rm(n,e)+Pm(n,i)+Im(n,s)}var Pr=class extends yn{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ho=class extends yn{constructor(t=new O,e=new O,i=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ur(t,s.x,r.x,a.x,o.x),ur(t,s.y,r.y,a.y,o.y),ur(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ir=class extends yn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uo=class extends yn{constructor(t=new O,e=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new O){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new O){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Lr=class extends yn{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dr=class extends yn{constructor(t=new O,e=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new O){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(hr(t,s.x,r.x,a.x),hr(t,s.y,r.y,a.y),hr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Nr=class extends yn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(gd(o,c.x,l.x,h.x,f.x),gd(o,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new _t().fromArray(s))}return this}},fo=Object.freeze({__proto__:null,ArcCurve:co,CatmullRomCurve3:Ds,CubicBezierCurve:Pr,CubicBezierCurve3:ho,EllipseCurve:Ls,LineCurve:Ir,LineCurve3:uo,QuadraticBezierCurve:Lr,QuadraticBezierCurve3:Dr,SplineCurve:Nr}),po=class extends yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new fo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ur=class extends po{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Ir(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Lr(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Pr(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Nr(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new Ls(t,e,i,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ri=class extends Ur{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Ur().fromJSON(s))}return this}};function Lm(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=df(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Om(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let h=o,f=c;for(let d=e;d<s;d+=e){let u=n[d],_=n[d+1];u<o&&(o=u),_<c&&(c=_),u>h&&(h=u),_>f&&(f=_)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Fr(r,a,e,o,c,l,0),a}function df(n,t,e,i,s){let r;if(s===Zm(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=_d(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=_d(a/i|0,n[a],n[a+1],r);return r&&Ns(r,r.next)&&(Br(r),r=r.next),r}function Hi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Ns(e,e.next)||ze(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Fr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Vm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?Nm(n,i,s,r):Dm(n)){t.push(c.i,n.i,l.i),Br(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Um(Hi(n),t),Fr(n,t,e,i,s,r,2)):a===2&&Fm(n,t,e,i,s,r):Fr(Hi(n),t,e,i,s,r,1);break}}}function Dm(n){let t=n.prev,e=n,i=n.next;if(ze(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=u&&ar(s,o,r,c,a,l,_.x,_.y)&&ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Nm(n,t,e,i){let s=n.prev,r=n,a=n.next;if(ze(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),_=Math.min(h,f,d),w=Math.max(o,c,l),p=Math.max(h,f,d),m=Pc(u,_,t,e,i),S=Pc(w,p,t,e,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=u&&v.x<=w&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&ar(o,h,c,f,l,d,v.x,v.y)&&ze(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=w&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&ar(o,h,c,f,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=w&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&ar(o,h,c,f,l,d,v.x,v.y)&&ze(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=w&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&ar(o,h,c,f,l,d,y.x,y.y)&&ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Um(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Ns(i,s)&&pf(i,e,e.next,s)&&Or(i,s)&&Or(s,i)&&(t.push(i.i,e.i,s.i),Br(e),Br(e.next),e=n=s),e=e.next}while(e!==n);return Hi(e)}function Fm(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Xm(a,o)){let c=mf(a,o);a=Hi(a,a.next),c=Hi(c,c.next),Fr(a,t,e,i,s,r,0),Fr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Om(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=df(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Wm(l))}s.sort(Bm);for(let r=0;r<s.length;r++)e=zm(s[r],e);return e}function Bm(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function zm(n,t){let e=km(n,t);if(!e)return t;let i=mf(e,n);return Hi(i,i.next),Hi(e,e.next)}function km(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Ns(n,e))return e;do{if(Ns(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&ff(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);Or(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&Gm(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function Gm(n,t){return ze(n.prev,n,t.prev)<0&&ze(t.next,n,n.next)<0}function Vm(n,t,e,i){let s=n;do s.z===0&&(s.z=Pc(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Pc(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Wm(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ff(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function ar(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&ff(n,t,e,i,s,r,a,o)}function Xm(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!qm(n,t)&&(Or(n,t)&&Or(t,n)&&Ym(n,t)&&(ze(n.prev,n,t.prev)||ze(n,t.prev,t))||Ns(n,t)&&ze(n.prev,n,n.next)>0&&ze(t.prev,t,t.next)>0)}function ze(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Ns(n,t){return n.x===t.x&&n.y===t.y}function pf(n,t,e,i){let s=Va(ze(n,t,e)),r=Va(ze(n,t,i)),a=Va(ze(e,i,n)),o=Va(ze(e,i,t));return!!(s!==r&&a!==o||s===0&&Ga(n,e,t)||r===0&&Ga(n,i,t)||a===0&&Ga(e,n,i)||o===0&&Ga(e,t,i))}function Ga(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Va(n){return n>0?1:n<0?-1:0}function qm(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&pf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function Or(n,t){return ze(n.prev,n,n.next)<0?ze(n,t,n.next)>=0&&ze(n,n.prev,t)>=0:ze(n,t,n.prev)<0||ze(n,n.next,t)<0}function Ym(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function mf(n,t){let e=Ic(n.i,n.x,n.y),i=Ic(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function _d(n,t,e,i){let s=Ic(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Br(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ic(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zm(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Lc=class{static triangulate(t,e,i=2){return Lm(t,e,i)}},Gn=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];xd(t),vd(i,t);let a=t.length;e.forEach(xd);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,vd(i,e[c]);let o=Lc.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function xd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function vd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var zr=class n extends qe{constructor(t=new Ri([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Le(s,3)),this.setAttribute("uv",new Le(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Jm,v,y=!1,C,E,g,b;if(m){v=m.getSpacedPoints(h),y=!0,d=!1;let rt=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,rt),E=new O,g=new O,b=new O}d||(p=0,u=0,_=0,w=0);let P=o.extractPoints(l),A=P.shape,D=P.holes;if(!Gn.isClockWise(A)){A=A.reverse();for(let rt=0,Et=D.length;rt<Et;rt++){let Mt=D[rt];Gn.isClockWise(Mt)&&(D[rt]=Mt.reverse())}}function Z(rt){let Mt=10000000000000001e-36,zt=rt[0];for(let Pt=1;Pt<=rt.length;Pt++){let ee=Pt%rt.length,kt=rt[ee],oe=kt.x-zt.x,he=kt.y-zt.y,ue=oe*oe+he*he,U=Math.max(Math.abs(kt.x),Math.abs(kt.y),Math.abs(zt.x),Math.abs(zt.y)),_e=Mt*U*U;if(ue<=_e){rt.splice(ee,1),Pt--;continue}zt=kt}}Z(A),D.forEach(Z);let L=D.length,W=A;for(let rt=0;rt<L;rt++){let Et=D[rt];A=A.concat(Et)}function K(rt,Et,Mt){return Et||re("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(Et,Mt)}let G=A.length;function ct(rt,Et,Mt){let zt,Pt,ee,kt=rt.x-Et.x,oe=rt.y-Et.y,he=Mt.x-rt.x,ue=Mt.y-rt.y,U=kt*kt+oe*oe,_e=kt*ue-oe*he;if(Math.abs(_e)>Number.EPSILON){let le=Math.sqrt(U),de=Math.sqrt(he*he+ue*ue),Tt=Et.x-oe/le,De=Et.y+kt/le,Yt=Mt.x-ue/de,ne=Mt.y+he/de,T=((Yt-Tt)*ue-(ne-De)*he)/(kt*ue-oe*he);zt=Tt+kt*T-rt.x,Pt=De+oe*T-rt.y;let x=zt*zt+Pt*Pt;if(x<=2)return new _t(zt,Pt);ee=Math.sqrt(x/2)}else{let le=!1;kt>Number.EPSILON?he>Number.EPSILON&&(le=!0):kt<-Number.EPSILON?he<-Number.EPSILON&&(le=!0):Math.sign(oe)===Math.sign(ue)&&(le=!0),le?(zt=-oe,Pt=kt,ee=Math.sqrt(U)):(zt=kt,Pt=oe,ee=Math.sqrt(U/2))}return new _t(zt/ee,Pt/ee)}let q=[];for(let rt=0,Et=W.length,Mt=Et-1,zt=rt+1;rt<Et;rt++,Mt++,zt++)Mt===Et&&(Mt=0),zt===Et&&(zt=0),q[rt]=ct(W[rt],W[Mt],W[zt]);let ot=[],st,Ft=q.concat();for(let rt=0,Et=L;rt<Et;rt++){let Mt=D[rt];st=[];for(let zt=0,Pt=Mt.length,ee=Pt-1,kt=zt+1;zt<Pt;zt++,ee++,kt++)ee===Pt&&(ee=0),kt===Pt&&(kt=0),st[zt]=ct(Mt[zt],Mt[ee],Mt[kt]);ot.push(st),Ft=Ft.concat(st)}let Bt;if(p===0)Bt=Gn.triangulateShape(W,D);else{let rt=[],Et=[];for(let Mt=0;Mt<p;Mt++){let zt=Mt/p,Pt=u*Math.cos(zt*Math.PI/2),ee=_*Math.sin(zt*Math.PI/2)+w;for(let kt=0,oe=W.length;kt<oe;kt++){let he=K(W[kt],q[kt],ee);It(he.x,he.y,-Pt),zt===0&&rt.push(he)}for(let kt=0,oe=L;kt<oe;kt++){let he=D[kt];st=ot[kt];let ue=[];for(let U=0,_e=he.length;U<_e;U++){let le=K(he[U],st[U],ee);It(le.x,le.y,-Pt),zt===0&&ue.push(le)}zt===0&&Et.push(ue)}}Bt=Gn.triangulateShape(rt,Et)}let k=Bt.length,ht=_+w;for(let rt=0;rt<G;rt++){let Et=d?K(A[rt],Ft[rt],ht):A[rt];y?(g.copy(C.normals[0]).multiplyScalar(Et.x),E.copy(C.binormals[0]).multiplyScalar(Et.y),b.copy(v[0]).add(g).add(E),It(b.x,b.y,b.z)):It(Et.x,Et.y,0)}for(let rt=1;rt<=h;rt++)for(let Et=0;Et<G;Et++){let Mt=d?K(A[Et],Ft[Et],ht):A[Et];y?(g.copy(C.normals[rt]).multiplyScalar(Mt.x),E.copy(C.binormals[rt]).multiplyScalar(Mt.y),b.copy(v[rt]).add(g).add(E),It(b.x,b.y,b.z)):It(Mt.x,Mt.y,f/h*rt)}for(let rt=p-1;rt>=0;rt--){let Et=rt/p,Mt=u*Math.cos(Et*Math.PI/2),zt=_*Math.sin(Et*Math.PI/2)+w;for(let Pt=0,ee=W.length;Pt<ee;Pt++){let kt=K(W[Pt],q[Pt],zt);It(kt.x,kt.y,f+Mt)}for(let Pt=0,ee=D.length;Pt<ee;Pt++){let kt=D[Pt];st=ot[Pt];for(let oe=0,he=kt.length;oe<he;oe++){let ue=K(kt[oe],st[oe],zt);y?It(ue.x,ue.y+v[h-1].y,v[h-1].x+Mt):It(ue.x,ue.y,f+Mt)}}}vt(),St();function vt(){let rt=s.length/3;if(d){let Et=0,Mt=G*Et;for(let zt=0;zt<k;zt++){let Pt=Bt[zt];qt(Pt[2]+Mt,Pt[1]+Mt,Pt[0]+Mt)}Et=h+p*2,Mt=G*Et;for(let zt=0;zt<k;zt++){let Pt=Bt[zt];qt(Pt[0]+Mt,Pt[1]+Mt,Pt[2]+Mt)}}else{for(let Et=0;Et<k;Et++){let Mt=Bt[Et];qt(Mt[2],Mt[1],Mt[0])}for(let Et=0;Et<k;Et++){let Mt=Bt[Et];qt(Mt[0]+G*h,Mt[1]+G*h,Mt[2]+G*h)}}i.addGroup(rt,s.length/3-rt,0)}function St(){let rt=s.length/3,Et=0;it(W,Et),Et+=W.length;for(let Mt=0,zt=D.length;Mt<zt;Mt++){let Pt=D[Mt];it(Pt,Et),Et+=Pt.length}i.addGroup(rt,s.length/3-rt,1)}function it(rt,Et){let Mt=rt.length;for(;--Mt>=0;){let zt=Mt,Pt=Mt-1;Pt<0&&(Pt=rt.length-1);for(let ee=0,kt=h+p*2;ee<kt;ee++){let oe=G*ee,he=G*(ee+1),ue=Et+zt+oe,U=Et+Pt+oe,_e=Et+Pt+he,le=Et+zt+he;Lt(ue,U,_e,le)}}}function It(rt,Et,Mt){c.push(rt),c.push(Et),c.push(Mt)}function qt(rt,Et,Mt){$t(rt),$t(Et),$t(Mt);let zt=s.length/3,Pt=S.generateTopUV(i,s,zt-3,zt-2,zt-1);ae(Pt[0]),ae(Pt[1]),ae(Pt[2])}function Lt(rt,Et,Mt,zt){$t(rt),$t(Et),$t(zt),$t(Et),$t(Mt),$t(zt);let Pt=s.length/3,ee=S.generateSideWallUV(i,s,Pt-6,Pt-3,Pt-2,Pt-1);ae(ee[0]),ae(ee[1]),ae(ee[3]),ae(ee[1]),ae(ee[2]),ae(ee[3])}function $t(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function ae(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Km(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new fo[s.type]().fromJSON(s)),new n(i,t.options)}},Jm={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new _t(r,a),new _t(o,c),new _t(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],d=t[s*3],u=t[s*3+1],_=t[s*3+2],w=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new _t(a,1-c),new _t(l,1-f),new _t(d,1-_),new _t(w,1-m)]:[new _t(o,1-c),new _t(h,1-f),new _t(u,1-_),new _t(p,1-m)]}};function Km(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var cn=class n extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],_=[],w=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let v=0;v<l;v++){let y=v*f-r;_.push(y,-S,0),w.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let v=S+l*m,y=S+l*(m+1),C=S+1+l*(m+1),E=S+1+l*m;u.push(v,y,E),u.push(y,C,E)}this.setIndex(u),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(w,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var kr=class n extends qe{constructor(t=new Ri([new _t(0,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Le(s,3)),this.setAttribute("normal",new Le(r,3)),this.setAttribute("uv",new Le(a,2));function l(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,_=d.holes;Gn.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=_.length;p<m;p++){let S=_[p];Gn.isClockWise(S)===!0&&(_[p]=S.reverse())}let w=Gn.triangulateShape(u,_);for(let p=0,m=_.length;p<m;p++){let S=_[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){let S=u[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=w.length;p<m;p++){let S=w[p],v=S[0]+f,y=S[1]+f,C=S[2]+f;i.push(v,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return $m(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function $m(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var li=class n extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new O,d=new O,u=[],_=[],w=[],p=[];for(let m=0;m<=i;m++){let S=[],v=m/i,y=a+v*o,C=t*Math.cos(y),E=Math.sqrt(t*t-C*C),g=0;m===0&&a===0?g=.5/e:m===i&&c===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let P=b/e,A=s+P*r;f.x=-E*Math.cos(A),f.y=C,f.z=E*Math.sin(A),_.push(f.x,f.y,f.z),d.copy(f).normalize(),w.push(d.x,d.y,d.z),p.push(P+g,1-v),S.push(l++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let v=h[m][S+1],y=h[m][S],C=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&u.push(v,y,E),(m!==i-1||c<Math.PI)&&u.push(y,C,E)}this.setIndex(u),this.setAttribute("position",new Le(_,3)),this.setAttribute("normal",new Le(w,3)),this.setAttribute("uv",new Le(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Gr=class n extends qe{constructor(t=new Dr(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new O,c=new O,l=new _t,h=new O,f=[],d=[],u=[],_=[];w(),this.setIndex(_),this.setAttribute("position",new Le(f,3)),this.setAttribute("normal",new Le(d,3)),this.setAttribute("uv",new Le(u,2));function w(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),S(),m()}function p(v){h=t.getPointAt(v/e,h);let y=a.normals[v],C=a.binormals[v];for(let E=0;E<=s;E++){let g=E/s*Math.PI*2,b=Math.sin(g),P=-Math.cos(g);c.x=P*y.x+b*C.x,c.y=P*y.y+b*C.y,c.z=P*y.z+b*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){let C=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),g=(s+1)*v+y,b=(s+1)*(v-1)+y;_.push(C,E,b),_.push(E,g,b)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)l.x=v/e,l.y=y/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new fo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Zi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(yd(s))s.isRenderTargetTexture?(ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(yd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function sn(n){let t={};for(let e=0;e<n.length;e++){let i=Zi(n[e]);for(let s in i)t[s]=i[s]}return t}function yd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function jm(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function dh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ee.workingColorSpace}var gf={clone:Zi,merge:sn},Qm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hn=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qm,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zi(t.uniforms),this.uniformsGroups=jm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new te().setHex(s.value);break;case"v2":this.uniforms[i].value=new _t().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ce().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},mo=class extends Hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var pe=class extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xl,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Io,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},go=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_o=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function vs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Ha(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Pi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Pi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Tc,endingEnd:Tc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Cc:r=t,o=2*e-i;break;case Rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Cc:a=t,c=2*i-e;break;case Rc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(i-e)/(s-e),w=_*_,p=w*_,m=-d*p+2*d*w-d*_,S=(1+d)*p+(-1.5-2*d)*w+(-.5+d)*_+1,v=(-1-u)*p+(1.5+u)*w+.5*_,y=u*p-u*w;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+S*a[l+C]+v*a[c+C]+y*a[f+C];return r}},vo=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},yo=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mo=class extends Pi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(s-e),w=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*w+a[c+p]*_;return r}let d=o*2,u=t-1;for(let _=0;_!==o;++_){let w=a[l+_],p=a[c+_],m=u*d+_*2,S=f[m],v=f[m+1],y=t*d+_*2,C=h[y],E=h[y+1],g=ng(i,e,S,C,s);r[_]=_f(g,w,v,E,p)}return r}};function _f(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function eg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function ng(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=_f(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=eg(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Ha(t.settings)&&(i.settings={inTangents:vs(t.settings.inTangents,Array),outTangents:vs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Mo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case dr:e=this.InterpolantFactoryMethodDiscrete;break;case io:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case Ac:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return ie("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Ac}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Ha(this.settings)&&(Md(this.settings.inTangents,t),Md(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Ha(this.settings)&&(Sd(this.settings.inTangents,t),Sd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(re("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(re("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){re("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){re("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Wp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){re("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,d=f-i,u=f+i;for(let _=0;_!==i;++_){let w=e[f+_];if(w!==e[d+_]||w!==e[u+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Md(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Sd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=io;var Ii=class extends Mn{constructor(t,e,i){super(t,e,i)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=dr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends Mn{constructor(t,e,i,s){super(t,e,i,s)}};So.prototype.ValueTypeName="color";var bo=class extends Mn{constructor(t,e,i,s){super(t,e,i,s)}};bo.prototype.ValueTypeName="number";var wo=class extends Pi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)xn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Vr=class extends Mn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new wo(this.times,this.values,this.getValueSize(),t)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Mn{constructor(t,e,i){super(t,e,i)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=dr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends Mn{constructor(t,e,i,s){super(t,e,i,s)}};Eo.prototype.ValueTypeName="vector";var Ao=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],_=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new Ao,To=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var Hr=class extends Ue{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Wr=class extends Hr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ec=new Ie,bd=new O,wd=new O,Co=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;bd.setFromMatrixPosition(t.matrixWorld),e.position.copy(bd),wd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Ec,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===ws||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wa=new O,Xa=new xn,zn=new O,Xr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wa,Xa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,zn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Wa,Xa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new O,Ed=new _t,Ad=new _t,an=class extends Xr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,Ed,Ad),e.subVectors(Ad,Ed)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qr=class extends Xr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dc=class extends Co{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Yr=class extends Hr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Dc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ys=-90,Ms=1,Us=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(ys,Ms,t,e);s.layers=this.layers,this.add(s);let r=new an(ys,Ms,t,e);r.layers=this.layers,this.add(r);let a=new an(ys,Ms,t,e);a.layers=this.layers,this.add(a);let o=new an(ys,Ms,t,e);o.layers=this.layers,this.add(o);let c=new an(ys,Ms,t,e);c.layers=this.layers,this.add(c);let l=new an(ys,Ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ws)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},Ro=class extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var fh="\\[\\]\\.:\\/",ig=new RegExp("["+fh+"]","g"),ph="[^"+fh+"]",sg="[^"+fh.replace("\\.","")+"]",rg=/((?:WC+[\/:])*)/.source.replace("WC",ph),ag=/(WCOD+)?/.source.replace("WCOD",sg),og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ph),lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ph),cg=new RegExp("^"+rg+ag+og+lg+"$"),hg=["material","materials","bones","map"],Nc=class{constructor(t,e,i){let s=i||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ne=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(t){let e=cg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);hg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){re("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){re("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){re("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){re("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){re("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){re("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;re("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){re("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ne.Composite=Nc;Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);var Fs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(ye(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var yh=class yh{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};yh.prototype.isMatrix2=!0;var Uc=yh;var Zr=class extends Dn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function mh(n,t,e,i){let s=ug(i);switch(e){case Qc:return n*t;case Bo:return n*t/s.components*s.byteLength;case zo:return n*t/s.components*s.byteLength;case Fi:return n*t*2/s.components*s.byteLength;case ko:return n*t*2/s.components*s.byteLength;case th:return n*t*3/s.components*s.byteLength;case Fn:return n*t*4/s.components*s.byteLength;case Go:return n*t*4/s.components*s.byteLength;case jr:case Qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ho:case Xo:return Math.max(n,16)*Math.max(t,8)/4;case Vo:case Wo:return Math.max(n,8)*Math.max(t,8)/2;case qo:case Yo:case Jo:case Ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zo:case na:case $o:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case tl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case dl:case fl:case pl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case ml:case gl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ia:case _l:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ug(n){switch(n){case dn:case Jc:return{byteLength:1,components:1};case ks:case Kc:case Un:return{byteLength:2,components:1};case Fo:case Oo:return{byteLength:2,components:4};case Nn:case Uo:case An:return{byteLength:4,components:1};case $c:case jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function kf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function fg(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){let _=f[d],w=f[u];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++d,f[d]=w)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){let w=f[u];n.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mg=`#ifdef USE_ALPHAHASH
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
#endif`,gg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yg=`#ifdef USE_AOMAP
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
#endif`,Mg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,bg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ag=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tg=`#ifdef USE_IRIDESCENCE
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
#endif`,Cg=`#ifdef USE_BUMPMAP
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ug=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Og=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Bg=`vec3 transformedNormal = objectNormal;
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
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,qg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t0=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s0=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,r0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,h0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,u0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d0=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m0=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,g0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,b0=`#if defined( USE_POINTS_UV )
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
#endif`,w0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,E0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,t_=`#ifdef USE_SKINNING
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
#endif`,e_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,l_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,M_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,b_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,A_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
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
}`,C_=`uniform vec3 diffuse;
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,I_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,N_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,U_=`#define PHONG
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
}`,F_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,O_=`#define STANDARD
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
}`,B_=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,z_=`#define TOON
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
}`,k_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,G_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,H_=`#include <common>
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
}`,W_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,X_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,q_=`uniform vec3 diffuse;
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
}`,Se={alphahash_fragment:pg,alphahash_pars_fragment:mg,alphamap_fragment:gg,alphamap_pars_fragment:_g,alphatest_fragment:xg,alphatest_pars_fragment:vg,aomap_fragment:yg,aomap_pars_fragment:Mg,batching_pars_vertex:Sg,batching_vertex:bg,begin_vertex:wg,beginnormal_vertex:Eg,bsdfs:Ag,iridescence_fragment:Tg,bumpmap_pars_fragment:Cg,clipping_planes_fragment:Rg,clipping_planes_pars_fragment:Pg,clipping_planes_pars_vertex:Ig,clipping_planes_vertex:Lg,color_fragment:Dg,color_pars_fragment:Ng,color_pars_vertex:Ug,color_vertex:Fg,common:Og,defaultnormal_vertex:Bg,displacementmap_pars_vertex:zg,displacementmap_vertex:kg,emissivemap_fragment:Gg,emissivemap_pars_fragment:Vg,colorspace_fragment:Hg,colorspace_pars_fragment:Wg,envmap_fragment:Xg,envmap_common_pars_fragment:qg,envmap_pars_fragment:Yg,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:r0,envmap_vertex:Jg,fog_vertex:Kg,fog_pars_vertex:$g,fog_fragment:jg,fog_pars_fragment:Qg,gradientmap_pars_fragment:t0,lightmap_pars_fragment:e0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:s0,lights_toon_fragment:a0,lights_toon_pars_fragment:o0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:h0,lights_physical_pars_fragment:u0,lights_fragment_begin:d0,lights_fragment_maps:f0,lights_fragment_end:p0,lightprobes_pars_fragment:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:x0,logdepthbuf_vertex:v0,map_fragment:y0,map_pars_fragment:M0,map_particle_fragment:S0,map_particle_pars_fragment:b0,metalnessmap_fragment:w0,metalnessmap_pars_fragment:E0,morphinstance_vertex:A0,morphcolor_vertex:T0,morphnormal_vertex:C0,morphtarget_pars_vertex:R0,morphtarget_vertex:P0,normal_fragment_begin:I0,normal_fragment_maps:L0,normal_pars_fragment:D0,normal_pars_vertex:N0,normal_vertex:U0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:k0,opaque_fragment:G0,packing:V0,premultiplied_alpha_fragment:H0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:K0,shadowmap_vertex:$0,shadowmask_pars_fragment:j0,skinbase_vertex:Q0,skinning_pars_vertex:t_,skinning_vertex:e_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:a_,transmission_fragment:o_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:h_,uv_vertex:u_,worldpos_vertex:d_,background_vert:f_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:x_,depth_vert:v_,depth_frag:y_,distance_vert:M_,distance_frag:S_,equirect_vert:b_,equirect_frag:w_,linedashed_vert:E_,linedashed_frag:A_,meshbasic_vert:T_,meshbasic_frag:C_,meshlambert_vert:R_,meshlambert_frag:P_,meshmatcap_vert:I_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:N_,meshphong_vert:U_,meshphong_frag:F_,meshphysical_vert:O_,meshphysical_frag:B_,meshtoon_vert:z_,meshtoon_frag:k_,points_vert:G_,points_frag:V_,shadow_vert:H_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},Ot={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},qn={basic:{uniforms:sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:sn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:sn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:sn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new te(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:sn([Ot.points,Ot.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:sn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:sn([Ot.common,Ot.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:sn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:sn([Ot.sprite,Ot.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:sn([Ot.common,Ot.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:sn([Ot.lights,Ot.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ce},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};var yl={r:0,b:0,g:0},Y_=new Ie,Gf=new ce;Gf.set(-1,0,0,0,1,0,0,0,1);function Z_(n,t,e,i,s,r){let a=new te(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(S){let v=S.isScene===!0?S.background:null;if(v&&v.isTexture){let y=S.backgroundBlurriness>0;v=t.get(v,y)}return v}function _(S){let v=!1,y=u(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(S,v){let y=u(v);y&&y.isCubeTexture?(l===void 0&&(l=new Wt(new Me(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Zi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gf),l.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Pe,(h!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Wt(new cn(2,2),new Hn({name:"BackgroundMaterial",uniforms:Zi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ee.getTransfer(y.colorSpace)!==Pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(yl,dh(n)),e.buffers.color.setClear(yl.r,yl.g,yl.b,v,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:w,dispose:m}}function J_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(D,z,Z,L,W){let K=!1,G=f(D,L,Z,z);r!==G&&(r=G,l(r.object)),K=u(D,L,Z,W),K&&_(D,L,Z,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(D,z,Z,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function l(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function f(D,z,Z,L){let W=L.wireframe===!0,K=i[z.id];K===void 0&&(K={},i[z.id]=K);let G=D.isInstancedMesh===!0?D.id:0,ct=K[G];ct===void 0&&(ct={},K[G]=ct);let q=ct[Z.id];q===void 0&&(q={},ct[Z.id]=q);let ot=q[W];return ot===void 0&&(ot=d(c()),q[W]=ot),ot}function d(D){let z=[],Z=[],L=[];for(let W=0;W<e;W++)z[W]=0,Z[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:L,object:D,attributes:{},index:null}}function u(D,z,Z,L){let W=r.attributes,K=z.attributes,G=0,ct=Z.getAttributes();for(let q in ct)if(ct[q].location>=0){let st=W[q],Ft=K[q];if(Ft===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Ft=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Ft=D.instanceColor)),st===void 0||st.attribute!==Ft||Ft&&st.data!==Ft.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function _(D,z,Z,L){let W={},K=z.attributes,G=0,ct=Z.getAttributes();for(let q in ct)if(ct[q].location>=0){let st=K[q];st===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(st=D.instanceColor));let Ft={};Ft.attribute=st,st&&st.data&&(Ft.data=st.data),W[q]=Ft,G++}r.attributes=W,r.attributesNum=G,r.index=L}function w(){let D=r.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function p(D){m(D,0)}function m(D,z){let Z=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;Z[D]=1,L[D]===0&&(n.enableVertexAttribArray(D),L[D]=1),W[D]!==z&&(n.vertexAttribDivisor(D,z),W[D]=z)}function S(){let D=r.newAttributes,z=r.enabledAttributes;for(let Z=0,L=z.length;Z<L;Z++)z[Z]!==D[Z]&&(n.disableVertexAttribArray(Z),z[Z]=0)}function v(D,z,Z,L,W,K,G){G===!0?n.vertexAttribIPointer(D,z,Z,W,K):n.vertexAttribPointer(D,z,Z,L,W,K)}function y(D,z,Z,L){w();let W=L.attributes,K=Z.getAttributes(),G=z.defaultAttributeValues;for(let ct in K){let q=K[ct];if(q.location>=0){let ot=W[ct];if(ot===void 0&&(ct==="instanceMatrix"&&D.instanceMatrix&&(ot=D.instanceMatrix),ct==="instanceColor"&&D.instanceColor&&(ot=D.instanceColor)),ot!==void 0){let st=ot.normalized,Ft=ot.itemSize,Bt=t.get(ot);if(Bt===void 0)continue;let k=Bt.buffer,ht=Bt.type,vt=Bt.bytesPerElement,St=ht===n.INT||ht===n.UNSIGNED_INT||ot.gpuType===Uo;if(ot.isInterleavedBufferAttribute){let it=ot.data,It=it.isInterleavedBuffer===!0?it.stride:it.itemSize,qt=ot.offset;if(it.isInstancedInterleavedBuffer||it.isInstancedBufferAttribute){for(let Lt=0;Lt<q.locationSize;Lt++)m(q.location+Lt,it.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Lt=0;Lt<q.locationSize;Lt++)p(q.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,k);for(let Lt=0;Lt<q.locationSize;Lt++)v(q.location+Lt,Ft/q.locationSize,ht,st,It*vt,(qt+Ft/q.locationSize*Lt)*vt,St)}else{if(ot.isInstancedBufferAttribute){for(let it=0;it<q.locationSize;it++)m(q.location+it,ot.meshPerAttribute);D.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let it=0;it<q.locationSize;it++)p(q.location+it);n.bindBuffer(n.ARRAY_BUFFER,k);for(let it=0;it<q.locationSize;it++)v(q.location+it,Ft/q.locationSize,ht,st,Ft*vt,Ft/q.locationSize*it*vt,St)}}else if(G!==void 0){let st=G[ct];if(st!==void 0)switch(st.length){case 2:n.vertexAttrib2fv(q.location,st);break;case 3:n.vertexAttrib3fv(q.location,st);break;case 4:n.vertexAttrib4fv(q.location,st);break;default:n.vertexAttrib1fv(q.location,st)}}}}S()}function C(){P();for(let D in i){let z=i[D];for(let Z in z){let L=z[Z];for(let W in L){let K=L[W];for(let G in K)h(K[G].object),delete K[G];delete L[W]}}delete i[D]}}function E(D){if(i[D.id]===void 0)return;let z=i[D.id];for(let Z in z){let L=z[Z];for(let W in L){let K=L[W];for(let G in K)h(K[G].object),delete K[G];delete L[W]}}delete i[D.id]}function g(D){for(let z in i){let Z=i[z];for(let L in Z){let W=Z[L];if(W[D.id]===void 0)continue;let K=W[D.id];for(let G in K)h(K[G].object),delete K[G];delete W[D.id]}}}function b(D){for(let z in i){let Z=i[z],L=D.isInstancedMesh===!0?D.id:0,W=Z[L];if(W!==void 0){for(let K in W){let G=W[K];for(let ct in G)h(G[ct].object),delete G[ct];delete W[K]}delete Z[L],Object.keys(Z).length===0&&delete i[z]}}}function P(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:A,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:w,enableAttribute:p,disableUnusedAttributes:S}}function K_(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==Fn&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===Un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==dn&&g!==An&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,maxSamples:C,samples:E}}function j_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new _n,o=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,w=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let S=r?0:i,v=S*4,y=m.clippingState||null;c.value=y,y=h(_,d,v,u);for(let C=0;C!==v;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,u,_){let w=f!==null?f.length:0,p=null;if(w!==0){if(p=c.value,_!==!0||p===null){let m=u+w*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=u;v!==w;++v,y+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var aa=class extends vn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Tr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new Hn({name:"CubemapFromEquirect",uniforms:Zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Wi});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===ci&&(e.minFilter=on),new Us(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},vf=256,Q_=3,tx=20,Vf=256,Hf=16,ex=3,nx=new O,ix=new te,Sl=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Us(1,10,null),this._boxMesh=new Wt(new Me(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=nx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,_=c.autoClearStencil,w=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,w===null&&(t.background=c.getClearColor(ix));let p=new Us(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=_,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(vf,oh(t))}_fromTexture(t,e){t.mapping===qi||t.mapping===zs?this._setSize(t.image.length===0?vf:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=yf(t,!1,!1),i=Math.log2(t)-Q_;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=yf(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===qi||t.mapping===zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mf()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=sx(),this._integrationMaterial=rx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Hf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-ex)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Vf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=ax());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function yf(n,t,e){return new aa(n,{minFilter:ci,generateMipmaps:t,type:Un,colorSpace:fr,depthBuffer:e})}function oa(n,t,e){return new Hn({name:n,uniforms:t,vertexShader:Se.cube_vert,fragmentShader:e,side:hn,blending:Wi,depthTest:!1,depthWrite:!1})}function sx(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vf}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function rx(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Hf}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ax(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${tx}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mf(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sf(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function ox(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Lo||u===Do)if(t.has(d)){let _=t.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let w=new aa(_.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",l),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,_=u===Lo||u===Do,w=u===qi||u===zs;if(_||w){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Sl(n)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return _&&S&&S.height>0||w&&S&&c(S)?(i===null&&(i=new Sl(n)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===Lo?d.mapping=qi:u===Do&&(d.mapping=zs),d}function c(d){let u=0,_=6;for(let w=0;w<_;w++)d[w]!==void 0&&u++;return u===_}function l(d){let u=d.target;u.removeEventListener("dispose",l);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function lx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&or("WebGLRenderer: "+i+" extension not supported."),s}}}function cx(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let w=r.get(_);w&&(t.remove(w),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function h(_){let w=_.attributes;for(let p in w)t.update(w[p],n.ARRAY_BUFFER)}function f(_){let w=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let S=w!==null?w.array.length:p.array.length/3-1,v=p.count>=65535?Sr:Mr,y=new v(Math.ceil(S/3)*6,1),C=y.array;if(w!==null){let g=w.array;m=w.version;for(let b=0,P=0;b<S;b+=3){let A=g[b+0],D=g[b+1],z=g[b+2];C[P++]=A,C[P++]=D,C[P++]=D,C[P++]=z,C[P++]=z,C[P++]=A}}else{m=p.version;for(let g=0,b=0;g<S;g+=3){let P=g+0,A=g+1,D=g+2;C[b++]=P,C[b++]=A,C[b++]=A,C[b++]=D,C[b++]=D,C[b++]=P}}y.version=m;let E=r.get(_);E&&t.remove(E),r.set(_,y)}function d(_){let w=r.get(_);if(w){let p=_.index;p!==null&&w.version<p.version&&f(_)}else f(_);return r.get(_)}function u(){for(let _ in s){let w=s[_].deref();w!==void 0&&c(w)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function hx(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function l(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*a,u),e.update(d,i,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let w=0;for(let p=0;p<u;p++)w+=d[p];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function ux(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:re("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function dx(n,t,e){let i=new WeakMap,s=new Be;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let P=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],v=0;u===!0&&(v=1),_===!0&&(v=2),w===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*f),g=new _r(E,y,C,f);g.type=An,g.needsUpdate=!0;let b=v*4;for(let A=0;A<f;A++){let D=p[A],z=m[A],Z=S[A],L=y*C*4*A;for(let W=0;W<D.count;W++){let K=W*b;u===!0&&(s.fromBufferAttribute(D,W),E[L+K+0]=s.x,E[L+K+1]=s.y,E[L+K+2]=s.z,E[L+K+3]=0),_===!0&&(s.fromBufferAttribute(z,W),E[L+K+4]=s.x,E[L+K+5]=s.y,E[L+K+6]=s.z,E[L+K+7]=0),w===!0&&(s.fromBufferAttribute(Z,W),E[L+K+8]=s.x,E[L+K+9]=s.y,E[L+K+10]=s.z,E[L+K+11]=Z.itemSize===4?s.w:1)}}d={count:f,texture:g,size:new _t(y,C)},i.set(o,d),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let u=0;for(let w=0;w<l.length;w++)u+=l[w];let _=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function fx(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var px={[Gc]:"LINEAR_TONE_MAPPING",[Vc]:"REINHARD_TONE_MAPPING",[Hc]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[qc]:"AGX_TONE_MAPPING",[Yc]:"NEUTRAL_TONE_MAPPING",[Xc]:"CUSTOM_TONE_MAPPING"};function mx(n,t,e,i,s,r){let a=new vn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new qe;h.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Le([0,2,0,0,2,0],2));let f=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Wt(h,f),u=new qr(-1,1,1,-1,0,1),_=null,w=null,p=!1,m,S=null,v=[],y=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let g=0;g<v.length;g++){let b=v[g];b.setSize&&b.setSize(C,E)}},this.setEffects=function(C){v=C,y=v.length>0&&v[0].isRenderPass===!0;let E=a.width,g=a.height;v.length>0&&o===null&&(o=new vn(E,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new vn(E,g,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&v.some(P=>P.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new oi(E,g),r===!0&&(l.format=hi,l.type=Yi)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let P=0;P<v.length;P++){let A=v[P];A.setSize&&A.setSize(E,g),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(l)}},this.begin=function(C,E){if(p||C.toneMapping===Wn&&v.length===0)return!1;if(S=E,E!==null){let g=E.width,b=E.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return y===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=Wn,!0},this.hasRenderPass=function(){return y},this.end=function(C,E){C.toneMapping=m,p=!0;let g=a,b=o;for(let P=0;P<v.length;P++){let A=v[P];A.enabled!==!1&&(A.render(C,b,g,E),A.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==C.outputColorSpace||w!==C.toneMapping){_=C.outputColorSpace,w=C.toneMapping,f.defines={},Ee.getTransfer(_)===Pe&&(f.defines.SRGB_TRANSFER="");let P=px[w];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(S),C.render(d,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Wf=new ln,Xf=new oi(1,1),qf=new Cr(1),Yf=new _r,Zf=new ao,Jf=new Tr,bf=[],wf=[],Ef=new Float32Array(16),Af=new Float32Array(9),Tf=new Float32Array(4);function Vs(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=bf[s];if(r===void 0&&(r=new Float32Array(s),bf[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ze(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wl(n,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function gx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2fv(this.addr,t),Je(e,t)}}function xx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;n.uniform3fv(this.addr,t),Je(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4fv(this.addr,t),Je(e,t)}}function yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Tf.set(i),n.uniformMatrix2fv(this.addr,!1,Tf),Je(e,i)}}function Mx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),Je(e,i)}}function Sx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ze(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,i))return;Ef.set(i),n.uniformMatrix4fv(this.addr,!1,Ef),Je(e,i)}}function bx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2iv(this.addr,t),Je(e,t)}}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3iv(this.addr,t),Je(e,t)}}function Ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4iv(this.addr,t),Je(e,t)}}function Tx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Cx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;n.uniform2uiv(this.addr,t),Je(e,t)}}function Rx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;n.uniform3uiv(this.addr,t),Je(e,t)}}function Px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;n.uniform4uiv(this.addr,t),Je(e,t)}}function El(n){return n.version===0&&(n.compareFunction=ih,n.needsUpdate=!0),n}function Ix(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=El(Xf):r=Wf,e.setTexture2D(t||r,s)}function Lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Zf,s)}function Dx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=El(qf):r=Jf,e.setTextureCube(t||r,s)}function Nx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Yf,s)}function Ux(n){switch(n){case 5126:return gx;case 35664:return _x;case 35665:return xx;case 35666:return vx;case 35674:return yx;case 35675:return Mx;case 35676:return Sx;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Ex;case 35669:case 35673:return Ax;case 5125:return Tx;case 36294:return Cx;case 36295:return Rx;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Ix;case 35679:case 36299:case 36307:return Lx;case 35680:case 36300:case 36308:case 36293:return Dx;case 36289:case 36303:case 36311:case 36292:return Nx}}function Fx(n,t){n.uniform1fv(this.addr,t)}function Ox(n,t){let e=Vs(t,this.size,2);n.uniform2fv(this.addr,e)}function Bx(n,t){let e=Vs(t,this.size,3);n.uniform3fv(this.addr,e)}function zx(n,t){let e=Vs(t,this.size,4);n.uniform4fv(this.addr,e)}function kx(n,t){let e=Vs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Gx(n,t){let e=Vs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Vx(n,t){let e=Vs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hx(n,t){n.uniform1iv(this.addr,t)}function Wx(n,t){n.uniform2iv(this.addr,t)}function Xx(n,t){n.uniform3iv(this.addr,t)}function qx(n,t){n.uniform4iv(this.addr,t)}function Yx(n,t){n.uniform1uiv(this.addr,t)}function Zx(n,t){n.uniform2uiv(this.addr,t)}function Jx(n,t){n.uniform3uiv(this.addr,t)}function Kx(n,t){n.uniform4uiv(this.addr,t)}function $x(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=El(Xf):a=Wf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function jx(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zf,r[a])}function Qx(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=El(qf):a=Jf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function tv(n,t,e){let i=this.cache,s=t.length,r=wl(e,s);Ze(i,r)||(n.uniform1iv(this.addr,r),Je(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yf,r[a])}function ev(n){switch(n){case 5126:return Fx;case 35664:return Ox;case 35665:return Bx;case 35666:return zx;case 35674:return kx;case 35675:return Gx;case 35676:return Vx;case 5124:case 35670:return Hx;case 35667:case 35671:return Wx;case 35668:case 35672:return Xx;case 35669:case 35673:return qx;case 5125:return Yx;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return $x;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Qx;case 36289:case 36303:case 36311:case 36292:return tv}}var bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ux(e.type)}},wh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ev(e.type)}},Eh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Mh=/(\w+)(\])?(\[|\.)?/g;function Cf(n,t){n.seq.push(t),n.map[t.id]=t}function nv(n,t,e){let i=n.name,s=i.length;for(Mh.lastIndex=0;;){let r=Mh.exec(i),a=Mh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Cf(e,l===void 0?new bh(o,n,t):new wh(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new Eh(o),Cf(e,f)),e=f}}}var Gs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);nv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Rf(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var iv=37297,sv=0;function rv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Pf=new ce;function av(n){Ee._getMatrix(Pf,Ee.workingColorSpace,n);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(Ee.getTransfer(n)){case pr:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return ie("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function If(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+rv(n.getShaderSource(t),o)}else return r}function ov(n,t){let e=av(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var lv={[Gc]:"Linear",[Vc]:"Reinhard",[Hc]:"Cineon",[Wc]:"ACESFilmic",[qc]:"AgX",[Yc]:"Neutral",[Xc]:"Custom"};function cv(n,t){let e=lv[t];return e===void 0?(ie("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new O;function hv(){Ee.getLuminanceCoefficients(Ml);let n=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function dv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function fv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ra(n){return n!==""}function Lf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Df(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var pv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ah(n){return n.replace(pv,mv)}function mv(n,t){let e=Se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Ah(e)}var gv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(n){return n.replace(gv,_v)}function _v(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Uf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var xv={[Jr]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function vv(n){return xv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var yv={[zs]:"ENVMAP_MODE_REFRACTION"};function Mv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":yv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Sv={[Io]:"ENVMAP_BLENDING_MULTIPLY",[Zd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function bv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Sv[n.combine]||"ENVMAP_BLENDING_NONE"}function wv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=vv(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Mv(e),f=bv(e),d=uv(e),u=dv(r),_=s.createProgram(),w,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ra).join(`
`),w.length>0&&(w+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(ra).join(`
`),p.length>0&&(p+=`
`)):(w=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?Se.tonemapping_pars_fragment:"",e.toneMapping!==Wn?cv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,ov("linearToOutputTexel",e.outputColorSpace),hv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ra).join(`
`)),a=Ah(a),a=Lf(a,e),a=Df(a,e),o=Ah(o),o=Lf(o,e),o=Df(o,e),a=Nf(a),o=Nf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+w+a,v=m+p+o,y=Rf(s,s.VERTEX_SHADER,S),C=Rf(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(A){if(n.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(y)||"",Z=s.getShaderInfoLog(C)||"",L=D.trim(),W=z.trim(),K=Z.trim(),G=!0,ct=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,y,C);else{let q=If(s,y,"vertex"),ot=If(s,C,"fragment");re("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+L+`
`+q+`
`+ot)}else L!==""?ie("WebGLProgram: Program Info Log:",L):(W===""||K==="")&&(ct=!1);ct&&(A.diagnostics={runnable:G,programLog:L,vertexShader:{log:W,prefix:w},fragmentShader:{log:K,prefix:p}})}s.deleteShader(y),s.deleteShader(C),g=new Gs(s,_),b=fv(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(_,iv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=sv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=C,this}var Ev=0,Th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ch(t),e.set(t,i)),i}},Ch=class{constructor(t){this.id=Ev++,this.code=t,this.usedTimes=0}};function Av(n){return n===Fi||n===na||n===ia}function Tv(n,t,e,i,s,r){let a=new xr,o=new Th,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,P,A,D,z){let Z=A.fog,L=D.geometry,W=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?A.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=t.get(g.envMap||W,K),ct=d[g.type],q=i.precision;g.precision!==null&&(q=i.getMaxPrecision(g.precision),q!==g.precision&&ie("WebGLProgram.getParameters:",g.precision,"not supported, using",q,"instead."));let ot=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,st=ot!==void 0?ot.length:0,Ft=0;L.morphAttributes.position!==void 0&&(Ft=1),L.morphAttributes.normal!==void 0&&(Ft=2),L.morphAttributes.color!==void 0&&(Ft=3);let Bt,k,ht,vt;if(ct){let Nt=qn[ct];Bt=Nt.vertexShader,k=Nt.fragmentShader}else{Bt=g.vertexShader,k=g.fragmentShader;let Nt=o.getVertexShaderStage(g),Ce=o.getFragmentShaderStage(g);o.update(g,Nt,Ce),ht=Nt.id,vt=Ce.id}let St=n.getRenderTarget(),it=n.state.buffers.depth.getReversed(),It=D.isInstancedMesh===!0,qt=D.isBatchedMesh===!0,Lt=!!g.map,$t=!!g.matcap,ae=!!G,rt=ae&&G.isPMREMTexture===!0,Et=!!g.aoMap,Mt=!!g.lightMap,zt=!!g.bumpMap&&g.wireframe===!1,Pt=!!g.normalMap,ee=!!g.displacementMap,kt=!!g.emissiveMap,oe=!!g.metalnessMap,he=!!g.roughnessMap,ue=g.anisotropy>0,U=g.clearcoat>0,_e=g.diffuseRoughness>0,le=g.dispersion>0,de=g.retroreflectivity>0,Tt=g.iridescence>0,De=g.sheen>0,Yt=g.transmission>0,ne=ue&&!!g.anisotropyMap,T=U&&!!g.clearcoatMap,x=U&&!!g.clearcoatNormalMap,V=U&&!!g.clearcoatRoughnessMap,pt=_e&&!!g.diffuseRoughnessMap,tt=Tt&&!!g.iridescenceMap,ut=Tt&&!!g.iridescenceThicknessMap,Ct=De&&!!g.sheenColorMap,$=De&&!!g.sheenRoughnessMap,at=!!g.specularMap,mt=!!g.specularColorMap,R=!!g.specularIntensityMap,nt=Yt&&!!g.transmissionMap,j=Yt&&!!g.thicknessMap,wt=!!g.gradientMap,xt=!!g.alphaMap,gt=g.alphaTest>0,Gt=!!g.alphaHash,me=!!g.extensions,bt=Wn;g.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(bt=n.toneMapping);let Jt=rt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,fe={shaderID:ct,shaderType:g.type,shaderName:g.name,vertexShader:Bt,fragmentShader:k,defines:g.defines,customVertexShaderID:ht,customFragmentShaderID:vt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:q,batching:qt,batchingColor:qt&&D._colorsTexture!==null,instancing:It,instancingColor:It&&D.instanceColor!==null,instancingMorph:It&&D.morphTexture!==null,outputColorSpace:St===null?n.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ee.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Lt,matcap:$t,envMap:ae,envMapMode:ae&&G.mapping,envMapPMREM:rt,envMapMaxLod:rt?Jt.length-1:null,envMapSize:rt?Jt[0].width:null,aoMap:Et,lightMap:Mt,bumpMap:zt,normalMap:Pt,displacementMap:ee,emissiveMap:kt,normalMapObjectSpace:Pt&&g.normalMapType===jd,normalMapTangentSpace:Pt&&g.normalMapType===xl,packedNormalMap:Pt&&g.normalMapType===xl&&Av(g.normalMap.format),metalnessMap:oe,roughnessMap:he,anisotropy:ue,anisotropyMap:ne,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:V,diffuseRoughness:_e,diffuseRoughnessMap:pt,dispersion:le,retroreflection:de,iridescence:Tt,iridescenceMap:tt,iridescenceThicknessMap:ut,sheen:De,sheenColorMap:Ct,sheenRoughnessMap:$,specularMap:at,specularColorMap:mt,specularIntensityMap:R,transmission:Yt,transmissionMap:nt,thicknessMap:j,gradientMap:wt,opaque:g.transparent===!1&&g.blending===Bs&&g.alphaToCoverage===!1,alphaMap:xt,alphaTest:gt,alphaHash:Gt,combine:g.combine,mapUv:Lt&&u(g.map.channel),aoMapUv:Et&&u(g.aoMap.channel),lightMapUv:Mt&&u(g.lightMap.channel),bumpMapUv:zt&&u(g.bumpMap.channel),normalMapUv:Pt&&u(g.normalMap.channel),displacementMapUv:ee&&u(g.displacementMap.channel),emissiveMapUv:kt&&u(g.emissiveMap.channel),metalnessMapUv:oe&&u(g.metalnessMap.channel),roughnessMapUv:he&&u(g.roughnessMap.channel),anisotropyMapUv:ne&&u(g.anisotropyMap.channel),clearcoatMapUv:T&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pt&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:tt&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(g.sheenRoughnessMap.channel),specularMapUv:at&&u(g.specularMap.channel),specularColorMapUv:mt&&u(g.specularColorMap.channel),specularIntensityMapUv:R&&u(g.specularIntensityMap.channel),transmissionMapUv:nt&&u(g.transmissionMap.channel),thicknessMapUv:j&&u(g.thicknessMap.channel),alphaMapUv:xt&&u(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(Pt||ue),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Lt||xt),fog:!!Z,useFog:g.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&Pt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:it,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:Ft,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(Nt=>Nt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Lt&&g.map.isVideoTexture===!0&&Ee.getTransfer(g.map.colorSpace)===Pe,decodeVideoTextureEmissive:kt&&g.emissiveMap.isVideoTexture===!0&&Ee.getTransfer(g.emissiveMap.colorSpace)===Pe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===En,flipSided:g.side===hn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:me&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&g.extensions.multiDraw===!0||qt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function w(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let P in g.defines)b.push(P),b.push(g.defines[P]);return g.isRawShaderMaterial===!1&&(p(b,g),m(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let b=d[g.type],P;if(b){let A=qn[b];P=gf.clone(A.uniforms)}else P=g.uniforms;return P}function v(g,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new wv(n,b,g,s),l.push(P),h.set(b,P)),P}function y(g){if(--g.usedTimes===0){let b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function C(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:w,getUniforms:S,acquireProgram:v,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:E}}function Cv(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Rv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ff(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Of(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,_,w,p,m){let S=n[t];return S===void 0?(S={id:d.id,object:d,geometry:u,material:_,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:p,group:m},n[t]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=_,S.materialVariant=a(d),S.groupOrder=w,S.renderOrder=d.renderOrder,S.z=p,S.group=m),t++,S}function c(d,u,_,w,p,m,S){S.reversedDepth===!0&&(p=-p);let v=o(d,u,_,w,p,m);_.transmission>0?i.push(v):_.transparent===!0?s.push(v):e.push(v)}function l(d,u,_,w,p,m){let S=o(d,u,_,w,p,m);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,u){e.length>1&&e.sort(d||Rv),i.length>1&&i.sort(u||Ff),s.length>1&&s.sort(u||Ff)}function f(){for(let d=t,u=n.length;d<u;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function Pv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Of,n.set(i,[a])):s>=r.length?(a=new Of,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Iv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new te};break;case"SpotLight":e={position:new O,direction:new O,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function Lv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Dv=0;function Nv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Uv(n){let t=new Iv,e=Lv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);let s=new O,r=new Ie,a=new Ie;function o(l){let h=0,f=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let u=0,_=0,w=0,p=0,m=0,S=0,v=0,y=0,C=0,E=0,g=0,b=0,P=0,A=0;l.sort(Nv);for(let z=0,Z=l.length;z<Z;z++){let L=l[z],W=L.color,K=L.intensity,G=L.distance,ct=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Fi?ct=L.shadow.map.texture:ct=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*K,f+=W.g*K,d+=W.b*K;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],K);A++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,st=e.get(L);st.shadowIntensity=ot.intensity,st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize.copy(ot.mapSize).multiply(ot.getFrameExtents()),i.sunShadow[_]=st,i.sunShadowMap[_]=ct;let Ft=ot.getViewportCount();for(let Bt=0;Bt<Ft;Bt++)i.sunShadowMatrix[w+Bt]=ot.getMatrix(Bt),i.sunShadowCascade[w+Bt]=ot._cascadeData[Bt];w+=Ft,_++}i.sun[u]=q,u++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ot=L.shadow,st=e.get(L);st.shadowIntensity=ot.intensity,st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,i.directionalShadow[p]=st,i.directionalShadowMap[p]=ct,i.directionalShadowMatrix[p]=L.shadow.matrix,C++}i.directional[p]=q,p++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(W).multiplyScalar(K),q.distance=G,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[S]=q;let ot=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,ot.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[S]=ot.matrix,L.castShadow){let st=e.get(L);st.shadowIntensity=ot.intensity,st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,i.spotShadow[S]=st,i.spotShadowMap[S]=ct,g++}S++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(W).multiplyScalar(K),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[v]=q,v++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let ot=L.shadow,st=e.get(L);st.shadowIntensity=ot.intensity,st.shadowBias=ot.bias,st.shadowNormalBias=ot.normalBias,st.shadowRadius=ot.radius,st.shadowMapSize=ot.mapSize,st.shadowCameraNear=ot.camera.near,st.shadowCameraFar=ot.camera.far,i.pointShadow[m]=st,i.pointShadowMap[m]=ct,i.pointShadowMatrix[m]=L.shadow.matrix,E++}i.point[m]=q,m++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(K),q.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[y]=q,y++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ot.LTC_FLOAT_1,i.rectAreaLTC2=Ot.LTC_FLOAT_2):(i.rectAreaLTC1=Ot.LTC_HALF_1,i.rectAreaLTC2=Ot.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let D=i.hash;(D.sunLength!==u||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==S||D.rectAreaLength!==v||D.hemiLength!==y||D.numSunShadows!==_||D.numDirectionalShadows!==C||D.numPointShadows!==E||D.numSpotShadows!==g||D.numSpotMaps!==b||D.numLightProbes!==A)&&(i.sun.length=u,i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-P,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=A,D.sunLength=u,D.directionalLength=p,D.pointLength=m,D.spotLength=S,D.rectAreaLength=v,D.hemiLength=y,D.numSunShadows=_,D.numDirectionalShadows=C,D.numPointShadows=E,D.numSpotShadows=g,D.numSpotMaps=b,D.numLightProbes=A,i.version=Dv++)}function c(l,h){let f=0,d=0,u=0,_=0,w=0,p=0,m=h.matrixWorldInverse;for(let S=0,v=l.length;S<v;S++){let y=l[S];if(y.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(y.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let C=i.rectArea[w];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),w++}else if(y.isPointLight){let C=i.point[u];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function Bf(n){let t=new Uv(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Fv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Bf(n),t.set(s,[o])):r>=a.length?(o=new Bf(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zv=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],kv=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],zf=new Ie,sa=new O,Sh=new O;function Gv(n,t,e){let i=new Ai,s=new _t,r=new _t,a=new Be,o=new go,c=new _o,l={},h=e.maxTextureSize,f={[Ui]:hn,[hn]:Ui,[En]:En},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new qe;_.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Wt(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let m=this.type;this.render=function(E,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Rd&&(ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let P=n.getRenderTarget(),A=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Wi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let Z=m!==this.type;Z&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=E.length;L<W;L++){let K=E[L],G=K.shadow;if(G===void 0){ie("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ct=G.getFrameExtents();s.multiply(ct),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ct.x),s.x=r.x*ct.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ct.y),s.y=r.y*ct.y,G.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=q,G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Os){if(K.isPointLight){ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new vn(s.x,s.y,{format:Fi,type:Un,minFilter:on,magFilter:on,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new oi(s.x,s.y,An),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=si,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je}else K.isPointLight?(G.map=new aa(s.x),G.map.depthTexture=new Cr(s.x,Nn)):(G.map=new vn(s.x,s.y),G.map.depthTexture=new oi(s.x,s.y,Nn)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=si,this.type===Jr?(G.map.depthTexture.compareFunction=q?nh:eh,G.map.depthTexture.minFilter=on,G.map.depthTexture.magFilter=on):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=je,G.map.depthTexture.magFilter=je);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let ot=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,b);let st=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Ft=0;Ft<ot;Ft++){let Bt=G.getCamera(Ft);if(K.isPointLight){let k=G.camera,ht=G.matrix,vt=K.distance||k.far;vt!==k.far&&(k.far=vt,k.updateProjectionMatrix()),sa.setFromMatrixPosition(K.matrixWorld),k.position.copy(sa),Sh.copy(k.position),Sh.add(zv[Ft]),k.up.copy(kv[Ft]),k.lookAt(Sh),k.updateMatrixWorld(),ht.makeTranslation(-sa.x,-sa.y,-sa.z),zf.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),G._frustum.setFromProjectionMatrix(zf,k.coordinateSystem,k.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,Ft),n.clear();else{Ft===0&&(n.setRenderTarget(G.map),n.clear());let k=G.getViewport(Ft);a.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),z.viewport(a)}i=G.getFrustum(Ft),y(g,b,Bt,K,st,this.type)}G.isPointLightShadow!==!0&&this.type===Os&&S(G,b),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(P,A,D)};function S(E,g){let b=t.update(w);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new vn(s.x,s.y,{format:Fi,type:Un}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,b,d,w,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,b,u,w,null)}function v(E,g,b,P){let A=null,D=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)A=D;else if(A=b.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let z=A.uuid,Z=g.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let W=L[Z];W===void 0&&(W=A.clone(),L[Z]=W,g.addEventListener("dispose",C)),A=W}if(A.visible=g.visible,A.wireframe=g.wireframe,P===Os?A.side=g.shadowSide!==null?g.shadowSide:g.side:A.side=g.shadowSide!==null?g.shadowSide:f[g.side],A.alphaMap=g.alphaMap,A.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,A.map=g.map,A.clipShadows=g.clipShadows,A.clippingPlanes=g.clippingPlanes,A.clipIntersection=g.clipIntersection,A.displacementMap=g.displacementMap,A.displacementScale=g.displacementScale,A.displacementBias=g.displacementBias,A.wireframeLinewidth=g.wireframeLinewidth,A.linewidth=g.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let z=n.properties.get(A);z.light=b}return A}function y(E,g,b,P,A,D){if(E.visible===!1)return;if(E.layers.test(A)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&D===Os)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let L=t.update(E),W=E.material;if(Array.isArray(W)){let K=L.groups;for(let G=0,ct=K.length;G<ct;G++){let q=K[G],ot=W[q.materialIndex];if(ot&&ot.visible){let st=v(E,ot,P,D);E.onBeforeShadow(n,E,g,b,L,st,q),n.renderBufferDirect(b,null,L,st,E,q),E.onAfterShadow(n,E,g,b,L,st,q)}}}else if(W.visible){let K=v(E,W,P,D);E.onBeforeShadow(n,E,g,b,L,K,null),n.renderBufferDirect(b,null,L,K,E,null),E.onAfterShadow(n,E,g,b,L,K,null)}}let Z=E.children;for(let L=0,W=Z.length;L<W;L++)y(Z[L],g,b,P,A,D)}function C(E){E.target.removeEventListener("dispose",C);for(let b in l){let P=l[b],A=E.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function Vv(n,t){function e(){let R=!1,nt=new Be,j=null,wt=new Be(0,0,0,0);return{setMask:function(xt){j!==xt&&!R&&(n.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){R=xt},setClear:function(xt,gt,Gt,me,bt){bt===!0&&(xt*=me,gt*=me,Gt*=me),nt.set(xt,gt,Gt,me),wt.equals(nt)===!1&&(n.clearColor(xt,gt,Gt,me),wt.copy(nt))},reset:function(){R=!1,j=null,wt.set(-1,0,0,0)}}}function i(){let R=!1,nt=!1,j=null,wt=null,xt=null;return{setReversed:function(gt){if(nt!==gt){let Gt=t.get("EXT_clip_control");gt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),nt=gt;let me=xt;xt=null,this.setClear(me)}},getReversed:function(){return nt},setTest:function(gt){gt?it(n.DEPTH_TEST):It(n.DEPTH_TEST)},setMask:function(gt){j!==gt&&!R&&(n.depthMask(gt),j=gt)},setFunc:function(gt){if(nt&&(gt=cf[gt]),wt!==gt){switch(gt){case Za:n.depthFunc(n.NEVER);break;case Ja:n.depthFunc(n.ALWAYS);break;case Ka:n.depthFunc(n.LESS);break;case bs:n.depthFunc(n.LEQUAL);break;case $a:n.depthFunc(n.EQUAL);break;case ja:n.depthFunc(n.GEQUAL);break;case Qa:n.depthFunc(n.GREATER);break;case to:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=gt}},setLocked:function(gt){R=gt},setClear:function(gt){xt!==gt&&(xt=gt,nt&&(gt=1-gt),n.clearDepth(gt))},reset:function(){R=!1,j=null,wt=null,xt=null,nt=!1}}}function s(){let R=!1,nt=null,j=null,wt=null,xt=null,gt=null,Gt=null,me=null,bt=null;return{setTest:function(Jt){R||(Jt?it(n.STENCIL_TEST):It(n.STENCIL_TEST))},setMask:function(Jt){nt!==Jt&&!R&&(n.stencilMask(Jt),nt=Jt)},setFunc:function(Jt,fe,Nt){(j!==Jt||wt!==fe||xt!==Nt)&&(n.stencilFunc(Jt,fe,Nt),j=Jt,wt=fe,xt=Nt)},setOp:function(Jt,fe,Nt){(gt!==Jt||Gt!==fe||me!==Nt)&&(n.stencilOp(Jt,fe,Nt),gt=Jt,Gt=fe,me=Nt)},setLocked:function(Jt){R=Jt},setClear:function(Jt){bt!==Jt&&(n.clearStencil(Jt),bt=Jt)},reset:function(){R=!1,nt=null,j=null,wt=null,xt=null,gt=null,Gt=null,me=null,bt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,_=[],w=null,p=!1,m=null,S=null,v=null,y=null,C=null,E=null,g=null,b=new te(0,0,0),P=0,A=!1,D=null,z=null,Z=null,L=null,W=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ct=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(q)[1]),G=ct>=1):q.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),G=ct>=2);let ot=null,st={},Ft=n.getParameter(n.SCISSOR_BOX),Bt=n.getParameter(n.VIEWPORT),k=new Be().fromArray(Ft),ht=new Be().fromArray(Bt);function vt(R,nt,j,wt){let xt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(R,gt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Gt=0;Gt<j;Gt++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(nt,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(nt+Gt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return gt}let St={};St[n.TEXTURE_2D]=vt(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=vt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=vt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=vt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),it(n.DEPTH_TEST),a.setFunc(bs),zt(!1),Pt(Fc),it(n.CULL_FACE),Et(Wi);function it(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function It(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function qt(R,nt){return d[R]!==nt?(n.bindFramebuffer(R,nt),d[R]=nt,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=nt),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=nt),!0):!1}function Lt(R,nt){let j=_,wt=!1;if(R){j=u.get(nt),j===void 0&&(j=[],u.set(nt,j));let xt=R.textures;if(j.length!==xt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Gt=xt.length;gt<Gt;gt++)j[gt]=n.COLOR_ATTACHMENT0+gt;j.length=xt.length,wt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,wt=!0);wt&&n.drawBuffers(j)}function $t(R){return w!==R?(n.useProgram(R),w=R,!0):!1}let ae={[Xi]:n.FUNC_ADD,[Id]:n.FUNC_SUBTRACT,[Ld]:n.FUNC_REVERSE_SUBTRACT};ae[Dd]=n.MIN,ae[Nd]=n.MAX;let rt={[Ud]:n.ZERO,[Fd]:n.ONE,[Od]:n.SRC_COLOR,[zc]:n.SRC_ALPHA,[Hd]:n.SRC_ALPHA_SATURATE,[Gd]:n.DST_COLOR,[zd]:n.DST_ALPHA,[Bd]:n.ONE_MINUS_SRC_COLOR,[kc]:n.ONE_MINUS_SRC_ALPHA,[Vd]:n.ONE_MINUS_DST_COLOR,[kd]:n.ONE_MINUS_DST_ALPHA,[Wd]:n.CONSTANT_COLOR,[Xd]:n.ONE_MINUS_CONSTANT_COLOR,[qd]:n.CONSTANT_ALPHA,[Yd]:n.ONE_MINUS_CONSTANT_ALPHA};function Et(R,nt,j,wt,xt,gt,Gt,me,bt,Jt){if(R===Wi){p===!0&&(It(n.BLEND),p=!1);return}if(p===!1&&(it(n.BLEND),p=!0),R!==Pd){if(R!==m||Jt!==A){if((S!==Xi||C!==Xi)&&(n.blendEquation(n.FUNC_ADD),S=Xi,C=Xi),Jt)switch(R){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:re("WebGLState: Invalid blending: ",R);break}else switch(R){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Oc:re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:re("WebGLState: Invalid blending: ",R);break}v=null,y=null,E=null,g=null,b.set(0,0,0),P=0,m=R,A=Jt}return}xt=xt||nt,gt=gt||j,Gt=Gt||wt,(nt!==S||xt!==C)&&(n.blendEquationSeparate(ae[nt],ae[xt]),S=nt,C=xt),(j!==v||wt!==y||gt!==E||Gt!==g)&&(n.blendFuncSeparate(rt[j],rt[wt],rt[gt],rt[Gt]),v=j,y=wt,E=gt,g=Gt),(me.equals(b)===!1||bt!==P)&&(n.blendColor(me.r,me.g,me.b,bt),b.copy(me),P=bt),m=R,A=!1}function Mt(R,nt){R.side===En?It(n.CULL_FACE):it(n.CULL_FACE);let j=R.side===hn;nt&&(j=!j),zt(j),R.blending===Bs&&R.transparent===!1?Et(Wi):Et(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let wt=R.stencilWrite;o.setTest(wt),wt&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),kt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):It(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(R){D!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),D=R)}function Pt(R){R!==Td?(it(n.CULL_FACE),R!==z&&(R===Fc?n.cullFace(n.BACK):R===Cd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):It(n.CULL_FACE),z=R}function ee(R){R!==Z&&(G&&n.lineWidth(R),Z=R)}function kt(R,nt,j){R?(it(n.POLYGON_OFFSET_FILL),(L!==nt||W!==j)&&(L=nt,W=j,a.getReversed()&&(nt=-nt,j=-j),n.polygonOffset(nt,j))):It(n.POLYGON_OFFSET_FILL)}function oe(R){R?it(n.SCISSOR_TEST):It(n.SCISSOR_TEST)}function he(R){R===void 0&&(R=n.TEXTURE0+K-1),ot!==R&&(n.activeTexture(R),ot=R)}function ue(R,nt,j){j===void 0&&(ot===null?j=n.TEXTURE0+K-1:j=ot);let wt=st[j];wt===void 0&&(wt={type:void 0,texture:void 0},st[j]=wt),(wt.type!==R||wt.texture!==nt)&&(ot!==j&&(n.activeTexture(j),ot=j),n.bindTexture(R,nt||St[R]),wt.type=R,wt.texture=nt)}function U(){let R=st[ot];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _e(){try{n.compressedTexImage2D(...arguments)}catch(R){re("WebGLState:",R)}}function le(){try{n.compressedTexImage3D(...arguments)}catch(R){re("WebGLState:",R)}}function de(){try{n.texSubImage2D(...arguments)}catch(R){re("WebGLState:",R)}}function Tt(){try{n.texSubImage3D(...arguments)}catch(R){re("WebGLState:",R)}}function De(){try{n.compressedTexSubImage2D(...arguments)}catch(R){re("WebGLState:",R)}}function Yt(){try{n.compressedTexSubImage3D(...arguments)}catch(R){re("WebGLState:",R)}}function ne(){try{n.texStorage2D(...arguments)}catch(R){re("WebGLState:",R)}}function T(){try{n.texStorage3D(...arguments)}catch(R){re("WebGLState:",R)}}function x(){try{n.texImage2D(...arguments)}catch(R){re("WebGLState:",R)}}function V(){try{n.texImage3D(...arguments)}catch(R){re("WebGLState:",R)}}function pt(R){return f[R]!==void 0?f[R]:n.getParameter(R)}function tt(R,nt){f[R]!==nt&&(n.pixelStorei(R,nt),f[R]=nt)}function ut(R){k.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),k.copy(R))}function Ct(R){ht.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),ht.copy(R))}function $(R,nt){let j=l.get(nt);j===void 0&&(j=new WeakMap,l.set(nt,j));let wt=j.get(R);wt===void 0&&(wt=n.getUniformBlockIndex(nt,R.name),n.uniformBlockBinding(nt,wt,wt),j.set(R,wt))}function at(R,nt,j){let xt=l.get(nt).get(R);c[xt]!==j&&(n.bindBufferBase(n.UNIFORM_BUFFER,xt,j),c[xt]=j)}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},ot=null,st={},d={},c={},u=new WeakMap,_=[],w=null,p=!1,m=null,S=null,v=null,y=null,C=null,E=null,g=null,b=new te(0,0,0),P=0,A=!1,D=null,z=null,Z=null,L=null,W=null,k.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:it,disable:It,bindFramebuffer:qt,drawBuffers:Lt,useProgram:$t,setBlending:Et,setMaterial:Mt,setFlipSided:zt,setCullFace:Pt,setLineWidth:ee,setPolygonOffset:kt,setScissorTest:oe,activeTexture:he,bindTexture:ue,unbindTexture:U,compressedTexImage2D:_e,compressedTexImage3D:le,texImage2D:x,texImage3D:V,pixelStorei:tt,getParameter:pt,updateUBOMapping:$,uniformBlockBinding:at,texStorage2D:ne,texStorage3D:T,texSubImage2D:de,texSubImage3D:Tt,compressedTexSubImage2D:De,compressedTexSubImage3D:Yt,scissor:ut,viewport:Ct,reset:mt}}function Hv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap,f=new Set,d,u=new WeakMap,_=new Set,w=new FinalizationRegistry(T=>_.delete(T)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function m(T,x){return p?new OffscreenCanvas(T,x):mr("canvas")}function S(T,x,V){let pt=1,tt=ne(T);if((tt.width>V||tt.height>V)&&(pt=V/Math.max(tt.width,tt.height)),pt<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let ut=Math.floor(pt*tt.width),Ct=Math.floor(pt*tt.height);d===void 0&&(d=m(ut,Ct));let $=x?m(ut,Ct):d;return $.width=ut,$.height=Ct,$.getContext("2d").drawImage(T,0,0,ut,Ct),ie("WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+ut+"x"+Ct+")."),$}else return"data"in T&&ie("WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function v(T){return T.generateMipmaps}function y(T){n.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,x,V,pt,tt,ut=!1){if(T!==null){if(n[T]!==void 0)return n[T];ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Ct;pt&&(Ct=t.get("EXT_texture_norm16"),Ct||ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(V===n.FLOAT&&($=n.R32F),V===n.HALF_FLOAT&&($=n.R16F),V===n.UNSIGNED_BYTE&&($=n.R8),V===n.UNSIGNED_SHORT&&Ct&&($=Ct.R16_EXT),V===n.SHORT&&Ct&&($=Ct.R16_SNORM_EXT)),x===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.R8UI),V===n.UNSIGNED_SHORT&&($=n.R16UI),V===n.UNSIGNED_INT&&($=n.R32UI),V===n.BYTE&&($=n.R8I),V===n.SHORT&&($=n.R16I),V===n.INT&&($=n.R32I)),x===n.RG&&(V===n.FLOAT&&($=n.RG32F),V===n.HALF_FLOAT&&($=n.RG16F),V===n.UNSIGNED_BYTE&&($=n.RG8),V===n.UNSIGNED_SHORT&&Ct&&($=Ct.RG16_EXT),V===n.SHORT&&Ct&&($=Ct.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RG8UI),V===n.UNSIGNED_SHORT&&($=n.RG16UI),V===n.UNSIGNED_INT&&($=n.RG32UI),V===n.BYTE&&($=n.RG8I),V===n.SHORT&&($=n.RG16I),V===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RGB8UI),V===n.UNSIGNED_SHORT&&($=n.RGB16UI),V===n.UNSIGNED_INT&&($=n.RGB32UI),V===n.BYTE&&($=n.RGB8I),V===n.SHORT&&($=n.RGB16I),V===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&($=n.RGBA8UI),V===n.UNSIGNED_SHORT&&($=n.RGBA16UI),V===n.UNSIGNED_INT&&($=n.RGBA32UI),V===n.BYTE&&($=n.RGBA8I),V===n.SHORT&&($=n.RGBA16I),V===n.INT&&($=n.RGBA32I)),x===n.RGB&&(V===n.UNSIGNED_SHORT&&Ct&&($=Ct.RGB16_EXT),V===n.SHORT&&Ct&&($=Ct.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let at=ut?pr:Ee.getTransfer(tt);V===n.FLOAT&&($=n.RGBA32F),V===n.HALF_FLOAT&&($=n.RGBA16F),V===n.UNSIGNED_BYTE&&($=at===Pe?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&Ct&&($=Ct.RGBA16_EXT),V===n.SHORT&&Ct&&($=Ct.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function g(T,x){let V;return T?x===null||x===Nn||x===Yi?V=n.DEPTH24_STENCIL8:x===An?V=n.DEPTH32F_STENCIL8:x===ks&&(V=n.DEPTH24_STENCIL8,ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Nn||x===Yi?V=n.DEPTH_COMPONENT24:x===An?V=n.DEPTH_COMPONENT32F:x===ks&&(V=n.DEPTH_COMPONENT16),V}function b(T,x){return v(T)===!0||T.isFramebufferTexture&&T.minFilter!==je&&T.minFilter!==on?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){let x=new WeakRef(T);i.get(T).__ref=x,_.add(x),w.register(T,x,x)}function A(T){let x=i.get(T).__ref;x!==void 0&&(_.delete(x),w.unregister(x))}function D(T){Z(T.target)}function z(T){L(T.target)}function Z(T){T.removeEventListener("dispose",D),A(T),K(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&f.delete(T)}function L(T){T.removeEventListener("dispose",z),A(T),ct(T)}function W(){for(let T of _){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):Z(x))}_.clear(),f.clear()}function K(T){let x=i.get(T);if(x.__webglInit===void 0)return;let V=T.source,pt=u.get(V);if(pt){let tt=pt[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&G(T),Object.keys(pt).length===0&&u.delete(V)}i.remove(T)}function G(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let V=T.source,pt=u.get(V);delete pt[x.__cacheKey],a.memory.textures--}function ct(T){let x=i.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let V=T.depthTexture;if(V&&V.renderTarget===T&&Z(V),T.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(x.__webglFramebuffer[tt]))for(let ut=0;ut<x.__webglFramebuffer[tt].length;ut++)n.deleteFramebuffer(x.__webglFramebuffer[tt][ut]);else n.deleteFramebuffer(x.__webglFramebuffer[tt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[tt])}else{if(Array.isArray(x.__webglFramebuffer))for(let tt=0;tt<x.__webglFramebuffer.length;tt++)n.deleteFramebuffer(x.__webglFramebuffer[tt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let tt=0;tt<x.__webglColorRenderbuffer.length;tt++)x.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[tt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let pt=T.textures;for(let tt=0,ut=pt.length;tt<ut;tt++){let Ct=i.get(pt[tt]);Ct.__webglTexture&&(n.deleteTexture(Ct.__webglTexture),a.memory.textures--),i.remove(pt[tt])}i.remove(T)}let q=0;function ot(){q=0}function st(){return q}function Ft(T){q=T}function Bt(){let T=q;return T>=s.maxTextures&&ie("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function k(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ht(T,x){let V=i.get(T);if(T.isVideoTexture&&De(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let pt=T.image;if(pt===null)ie("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(V,T,x);return}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+x)}function vt(T,x){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Mt(V,T,x);return}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+x)}function St(T,x){let V=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){Mt(V,T,x);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+x)}function it(T,x){let V=i.get(T);if(T.version>0&&V.__version!==T.version){zt(V,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+x)}let It={[eo]:n.REPEAT,[kn]:n.CLAMP_TO_EDGE,[no]:n.MIRRORED_REPEAT},qt={[je]:n.NEAREST,[Kd]:n.NEAREST_MIPMAP_NEAREST,[$r]:n.NEAREST_MIPMAP_LINEAR,[on]:n.LINEAR,[No]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},Lt={[tf]:n.NEVER,[ih]:n.ALWAYS,[ef]:n.LESS,[eh]:n.LEQUAL,[nf]:n.EQUAL,[nh]:n.GEQUAL,[sf]:n.GREATER,[rf]:n.NOTEQUAL};function $t(T,x){if(x.type===An&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===on||x.magFilter===No||x.magFilter===$r||x.magFilter===ci||x.minFilter===on||x.minFilter===No||x.minFilter===$r||x.minFilter===ci)&&ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,It[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,It[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,It[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,qt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,qt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Lt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===je||x.minFilter!==$r&&x.minFilter!==ci||x.type===An&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ae(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",D),P(x));let pt=x.source,tt=u.get(pt);tt===void 0&&(tt={},u.set(pt,tt));let ut=k(x);if(ut!==T.__cacheKey){tt[ut]===void 0&&(tt[ut]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),tt[ut].usedTimes++;let Ct=tt[T.__cacheKey];Ct!==void 0&&(tt[T.__cacheKey].usedTimes--,Ct.usedTimes===0&&G(x)),T.__cacheKey=ut,T.__webglTexture=tt[ut].texture}return V}function rt(T,x,V){return Math.floor(Math.floor(T/V)/x)}function Et(T,x,V,pt){let ut=T.updateRanges;if(ut.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,V,pt,x.data);else{ut.sort((R,nt)=>R.start-nt.start);let Ct=0;for(let R=1;R<ut.length;R++){let nt=ut[Ct],j=ut[R],wt=nt.start+nt.count,xt=rt(j.start,x.width,4),gt=rt(nt.start,x.width,4);j.start<=wt+1&&xt===gt&&rt(j.start+j.count-1,x.width,4)===xt?nt.count=Math.max(nt.count,j.start+j.count-nt.start):(++Ct,ut[Ct]=j)}ut.length=Ct+1;let $=e.getParameter(n.UNPACK_ROW_LENGTH),at=e.getParameter(n.UNPACK_SKIP_PIXELS),mt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let R=0,nt=ut.length;R<nt;R++){let j=ut[R],wt=Math.floor(j.start/4),xt=Math.ceil(j.count/4),gt=wt%x.width,Gt=Math.floor(wt/x.width),me=xt,bt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Gt),e.texSubImage2D(n.TEXTURE_2D,0,gt,Gt,me,bt,V,pt,x.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,$),e.pixelStorei(n.UNPACK_SKIP_PIXELS,at),e.pixelStorei(n.UNPACK_SKIP_ROWS,mt)}}function Mt(T,x,V){let pt=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(pt=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(pt=n.TEXTURE_3D);let tt=ae(T,x),ut=x.source;e.bindTexture(pt,T.__webglTexture,n.TEXTURE0+V);let Ct=i.get(ut);if(ut.version!==Ct.__version||tt===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let bt=Ee.getPrimaries(Ee.workingColorSpace),Jt=x.colorSpace===ui?null:Ee.getPrimaries(x.colorSpace),fe=x.colorSpace===ui||bt===Jt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let at=S(x.image,!1,s.maxTextureSize);at=Yt(x,at);let mt=r.convert(x.format,x.colorSpace),R=r.convert(x.type),nt=E(x.internalFormat,mt,R,x.normalized,x.colorSpace,x.isVideoTexture);$t(pt,x);let j,wt=x.mipmaps,xt=x.isVideoTexture!==!0,gt=Ct.__version===void 0||tt===!0,Gt=ut.dataReady,me=b(x,at);if(x.isDepthTexture)nt=g(x.format===hi,x.type),gt&&(xt?e.texStorage2D(n.TEXTURE_2D,1,nt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,nt,at.width,at.height,0,mt,R,null));else if(x.isDataTexture)if(wt.length>0){xt&&gt&&e.texStorage2D(n.TEXTURE_2D,me,nt,wt[0].width,wt[0].height);for(let bt=0,Jt=wt.length;bt<Jt;bt++)j=wt[bt],xt?Gt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,j.width,j.height,mt,R,j.data):e.texImage2D(n.TEXTURE_2D,bt,nt,j.width,j.height,0,mt,R,j.data);x.generateMipmaps=!1}else xt?(gt&&e.texStorage2D(n.TEXTURE_2D,me,nt,at.width,at.height),Gt&&Et(x,at,mt,R)):e.texImage2D(n.TEXTURE_2D,0,nt,at.width,at.height,0,mt,R,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){xt&&gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,me,nt,wt[0].width,wt[0].height,at.depth);for(let bt=0,Jt=wt.length;bt<Jt;bt++)if(j=wt[bt],x.format!==Fn)if(mt!==null)if(xt){if(Gt)if(x.layerUpdates.size>0){let fe=mh(j.width,j.height,x.format,x.type);for(let Nt of x.layerUpdates){let Ce=j.data.subarray(Nt*fe/j.data.BYTES_PER_ELEMENT,(Nt+1)*fe/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,Nt,j.width,j.height,1,mt,Ce)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,j.width,j.height,at.depth,mt,j.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,bt,nt,j.width,j.height,at.depth,0,j.data,0,0);else ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Gt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,bt,0,0,0,j.width,j.height,at.depth,mt,R,j.data):e.texImage3D(n.TEXTURE_2D_ARRAY,bt,nt,j.width,j.height,at.depth,0,mt,R,j.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{xt&&gt&&e.texStorage2D(n.TEXTURE_2D,me,nt,wt[0].width,wt[0].height);for(let bt=0,Jt=wt.length;bt<Jt;bt++)j=wt[bt],x.format!==Fn?mt!==null?xt?Gt&&e.compressedTexSubImage2D(n.TEXTURE_2D,bt,0,0,j.width,j.height,mt,j.data):e.compressedTexImage2D(n.TEXTURE_2D,bt,nt,j.width,j.height,0,j.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Gt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,j.width,j.height,mt,R,j.data):e.texImage2D(n.TEXTURE_2D,bt,nt,j.width,j.height,0,mt,R,j.data)}else if(x.isDataArrayTexture)if(xt){if(gt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,me,nt,at.width,at.height,at.depth),Gt)if(x.layerUpdates.size>0){let bt=mh(at.width,at.height,x.format,x.type);for(let Jt of x.layerUpdates){let fe=at.data.subarray(Jt*bt/at.data.BYTES_PER_ELEMENT,(Jt+1)*bt/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Jt,at.width,at.height,1,mt,R,fe)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,mt,R,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,at.width,at.height,at.depth,0,mt,R,at.data);else if(x.isData3DTexture)xt?(gt&&e.texStorage3D(n.TEXTURE_3D,me,nt,at.width,at.height,at.depth),Gt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,mt,R,at.data)):e.texImage3D(n.TEXTURE_3D,0,nt,at.width,at.height,at.depth,0,mt,R,at.data);else if(x.isFramebufferTexture){if(gt)if(xt)e.texStorage2D(n.TEXTURE_2D,me,nt,at.width,at.height);else{let bt=at.width,Jt=at.height;for(let fe=0;fe<me;fe++)e.texImage2D(n.TEXTURE_2D,fe,nt,bt,Jt,0,mt,R,null),bt>>=1,Jt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let bt=n.canvas;if(bt.hasAttribute("layoutsubtree")||bt.setAttribute("layoutsubtree","true"),at.parentNode!==bt){bt.appendChild(at),f.add(x),bt.onpaint=Jt=>{let fe=Jt.changedElements;for(let Nt of f)fe.includes(Nt.image)&&(Nt.needsUpdate=!0)},bt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,at);else{let fe=n.RGBA,Nt=n.RGBA,Ce=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,fe,Nt,Ce,at)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(wt.length>0){if(xt&&gt){let bt=ne(wt[0]);e.texStorage2D(n.TEXTURE_2D,me,nt,bt.width,bt.height)}for(let bt=0,Jt=wt.length;bt<Jt;bt++)j=wt[bt],xt?Gt&&e.texSubImage2D(n.TEXTURE_2D,bt,0,0,mt,R,j):e.texImage2D(n.TEXTURE_2D,bt,nt,mt,R,j);x.generateMipmaps=!1}else if(xt){if(gt){let bt=ne(at);e.texStorage2D(n.TEXTURE_2D,me,nt,bt.width,bt.height)}Gt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,mt,R,at)}else e.texImage2D(n.TEXTURE_2D,0,nt,mt,R,at);v(x)&&x.mipmapsAutoUpdate===!0&&y(pt),Ct.__version=ut.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function zt(T,x,V){if(x.image.length!==6)return;let pt=ae(T,x),tt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+V);let ut=i.get(tt);if(tt.version!==ut.__version||pt===!0){e.activeTexture(n.TEXTURE0+V);let Ct=Ee.getPrimaries(Ee.workingColorSpace),$=x.colorSpace===ui?null:Ee.getPrimaries(x.colorSpace),at=x.colorSpace===ui||Ct===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let mt=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,nt=[];for(let Nt=0;Nt<6;Nt++)!mt&&!R?nt[Nt]=S(x.image[Nt],!0,s.maxCubemapSize):nt[Nt]=R?x.image[Nt].image:x.image[Nt],nt[Nt]=Yt(x,nt[Nt]);let j=nt[0],wt=r.convert(x.format,x.colorSpace),xt=r.convert(x.type),gt=E(x.internalFormat,wt,xt,x.normalized,x.colorSpace),Gt=x.isVideoTexture!==!0,me=ut.__version===void 0||pt===!0,bt=tt.dataReady,Jt=b(x,j);$t(n.TEXTURE_CUBE_MAP,x);let fe;if(x.isDepthTexture){if(gt=g(x.format===hi,x.type),me)if(Gt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,gt,j.width,j.height);else for(let Nt=0;Nt<6;Nt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,gt,j.width,j.height,0,wt,xt,null)}else if(mt){Gt&&me&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,gt,j.width,j.height);for(let Nt=0;Nt<6;Nt++){fe=nt[Nt].mipmaps;for(let Ce=0;Ce<fe.length;Ce++){let He=fe[Ce];x.format!==Fn?wt!==null?Gt?bt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce,0,0,He.width,He.height,wt,He.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce,gt,He.width,He.height,0,He.data):ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce,0,0,He.width,He.height,wt,xt,He.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce,gt,He.width,He.height,0,wt,xt,He.data)}}}else{if(fe=x.mipmaps,Gt&&me){fe.length>0&&Jt++;let Nt=ne(nt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Jt,gt,Nt.width,Nt.height)}for(let Nt=0;Nt<6;Nt++)if(R){Gt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,nt[Nt].width,nt[Nt].height,wt,xt,nt[Nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,gt,nt[Nt].width,nt[Nt].height,0,wt,xt,nt[Nt].data);for(let Ce=0;Ce<fe.length;Ce++){let Tn=fe[Ce].image[Nt].image;Gt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce+1,0,0,Tn.width,Tn.height,wt,xt,Tn.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce+1,gt,Tn.width,Tn.height,0,wt,xt,Tn.data)}}else{Gt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,0,0,wt,xt,nt[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0,gt,wt,xt,nt[Nt]);for(let Ce=0;Ce<fe.length;Ce++){let He=fe[Ce];Gt?bt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce+1,0,0,wt,xt,He.image[Nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ce+1,gt,wt,xt,He.image[Nt])}}}v(x)&&x.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),ut.__version=tt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Pt(T,x,V,pt,tt,ut){let Ct=r.convert(V.format,V.colorSpace),$=r.convert(V.type),at=E(V.internalFormat,Ct,$,V.normalized,V.colorSpace),mt=i.get(x),R=i.get(V);if(R.__renderTarget=x,!mt.__hasExternalTextures){let nt=Math.max(1,x.width>>ut),j=Math.max(1,x.height>>ut);tt===n.TEXTURE_3D||tt===n.TEXTURE_2D_ARRAY?e.texImage3D(tt,ut,at,nt,j,x.depth,0,Ct,$,null):e.texImage2D(tt,ut,at,nt,j,0,Ct,$,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pt,tt,R.__webglTexture,0,de(x)):(tt===n.TEXTURE_2D||tt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pt,tt,R.__webglTexture,ut),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(T,x,V){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let pt=x.depthTexture,tt=pt&&pt.isDepthTexture?pt.type:null,ut=g(x.stencilBuffer,tt),Ct=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Tt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(x),ut,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(x),ut,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ut,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,T)}else{let pt=x.textures;for(let tt=0;tt<pt.length;tt++){let ut=pt[tt],Ct=r.convert(ut.format,ut.colorSpace),$=r.convert(ut.type),at=E(ut.internalFormat,Ct,$,ut.normalized,ut.colorSpace);Tt(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,de(x),at,x.width,x.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,de(x),at,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,at,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function kt(T,x,V){let pt=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let tt=i.get(x.depthTexture);tt.__renderTarget=x;let ut=pt?x.depthTexture.image[0]:x.depthTexture.image;(!tt.__webglTexture||ut.width!==x.width||ut.height!==x.height)&&(ut.width=x.width,ut.height=x.height,x.depthTexture.needsUpdate=!0),pt?it(x.depthTexture,0):ht(x.depthTexture,0);let Ct=tt.__webglTexture,$=de(x),at=pt?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,mt=x.depthTexture.format===hi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===si)Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,at,Ct,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,mt,at,Ct,0);else if(x.depthTexture.format===hi)Tt(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,mt,at,Ct,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,mt,at,Ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(T){let x=i.get(T),V=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let pt=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),pt){let tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,pt.removeEventListener("dispose",tt)};pt.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=pt}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let pt=0;pt<6;pt++)kt(x.__webglFramebuffer[pt],T,pt);else T.texture.mipmaps.length>0?kt(x.__webglFramebuffer[0],T,0):kt(x.__webglFramebuffer,T,0);else if(V){x.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[pt]),x.__webglDepthbuffer[pt]===void 0)x.__webglDepthbuffer[pt]=n.createRenderbuffer(),ee(x.__webglDepthbuffer[pt],T,!1);else{let tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer[pt];n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ut)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ee(x.__webglDepthbuffer,T,!1);else{let tt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ut),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,ut)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(T,x,V){let pt=i.get(T);x!==void 0&&Pt(pt.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&oe(T)}function ue(T){let x=T.texture,V=i.get(T),pt=i.get(x);T.addEventListener("dispose",z),P(T);let tt=T.textures,ut=T.isWebGLCubeRenderTarget===!0,Ct=tt.length>1;if(Ct||(pt.__webglTexture===void 0&&(pt.__webglTexture=n.createTexture()),pt.__version=x.version,a.memory.textures++),ut){V.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){V.__webglFramebuffer[$]=[];for(let at=0;at<x.mipmaps.length;at++)V.__webglFramebuffer[$][at]=n.createFramebuffer()}else V.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps.length>0){V.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)V.__webglFramebuffer[$]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let $=0,at=tt.length;$<at;$++){let mt=i.get(tt[$]);mt.__webglTexture===void 0&&(mt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Tt(T)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let $=0;$<tt.length;$++){let at=tt[$];V.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[$]);let mt=r.convert(at.format,at.colorSpace),R=r.convert(at.type),nt=E(at.internalFormat,mt,R,at.normalized,at.colorSpace,T.isXRRenderTarget===!0),j=de(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,j,nt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,V.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ut){e.bindTexture(n.TEXTURE_CUBE_MAP,pt.__webglTexture),$t(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)Pt(V.__webglFramebuffer[$][at],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,at);else Pt(V.__webglFramebuffer[$],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);v(x)?y(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(Ct){for(let $=0,at=tt.length;$<at;$++){let mt=tt[$],R=i.get(mt),nt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(nt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(nt,R.__webglTexture),$t(nt,mt),Pt(V.__webglFramebuffer,T,mt,n.COLOR_ATTACHMENT0+$,nt,0),v(mt)&&y(nt)}e.unbindTexture()}else{let $=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture($,pt.__webglTexture),$t($,x),x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)Pt(V.__webglFramebuffer[at],T,x,n.COLOR_ATTACHMENT0,$,at);else Pt(V.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,$,0);v(x)?y($):x.mipmaps.length>0&&n.texParameteri($,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&oe(T)}function U(T){let x=T.textures;for(let V=0,pt=x.length;V<pt;V++){let tt=x[V];if(v(tt)&&tt.mipmapsAutoUpdate===!0){let ut=C(T),Ct=i.get(tt).__webglTexture;e.bindTexture(ut,Ct),y(ut),e.unbindTexture()}}}let _e=[];function le(T){if(T.samples>0){if(Tt(T)===!1){let x=T.textures,V=T.width,pt=T.height,tt=n.COLOR_BUFFER_BIT,ut=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(T),$=x.length>1;if($)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[mt]);let R=i.get(x[mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,V,pt,0,0,V,pt,tt,n.NEAREST),c===!0&&(_e.length=0,_e.push(n.COLOR_ATTACHMENT0+mt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&_e.push(ut),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[mt]);let R=i.get(x[mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,R,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function de(T){return Math.min(s.maxSamples,T.samples)}function Tt(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function De(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Yt(T,x){let V=T.colorSpace,pt=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==fr&&V!==ui&&(Ee.getTransfer(V)===Pe?(pt!==Fn||tt!==dn)&&ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):re("WebGLTextures: Unsupported texture color space:",V)),x}function ne(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Bt,this.resetTextureUnits=ot,this.getTextureUnits=st,this.setTextureUnits=Ft,this.setTexture2D=ht,this.setTexture2DArray=vt,this.setTexture3D=St,this.setTextureCube=it,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=Tt,this.dispose=W}function Wv(n,t){function e(i,s=ui){let r,a=Ee.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===Fo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Oo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$c)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===jc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Jc)return n.BYTE;if(i===Kc)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Uo)return n.INT;if(i===Nn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===Un)return n.HALF_FLOAT;if(i===Qc)return n.ALPHA;if(i===th)return n.RGB;if(i===Fn)return n.RGBA;if(i===si)return n.DEPTH_COMPONENT;if(i===hi)return n.DEPTH_STENCIL;if(i===Bo)return n.RED;if(i===zo)return n.RED_INTEGER;if(i===Fi)return n.RG;if(i===ko)return n.RG_INTEGER;if(i===Go)return n.RGBA_INTEGER;if(i===jr||i===Qr||i===ta||i===ea)if(a===Pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vo||i===Ho||i===Wo||i===Xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qo||i===Yo||i===Zo||i===Jo||i===Ko||i===na||i===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qo||i===Yo)return a===Pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jo)return r.COMPRESSED_R11_EAC;if(i===Ko)return r.COMPRESSED_SIGNED_R11_EAC;if(i===na)return r.COMPRESSED_RG11_EAC;if(i===$o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jo||i===Qo||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===jo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qo)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===el)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===al)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return a===Pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===fl||i===pl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return a===Pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===gl||i===ia||i===_l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Hn({vertexShader:Xv,fragmentShader:qv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ph=class extends Dn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,_=null,w=typeof XRWebGLBinding!="undefined",p=new Rh,m={},S=e.getContextAttributes(),v=null,y=null,C=[],E=[],g=new _t,b=null,P=null,A=new an;A.viewport=new Be;let D=new an;D.viewport=new Be;let z=[A,D],Z=new Ro,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let ht=C[k];return ht===void 0&&(ht=new Cs,C[k]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(k){let ht=C[k];return ht===void 0&&(ht=new Cs,C[k]=ht),ht.getGripSpace()},this.getHand=function(k){let ht=C[k];return ht===void 0&&(ht=new Cs,C[k]=ht),ht.getHandSpace()};function K(k){let ht=E.indexOf(k.inputSource);if(ht===-1)return;let vt=C[ht];vt!==void 0&&(vt.update(k.inputSource,k.frame,l||a),vt.dispatchEvent({type:k.type,data:k.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ct);for(let k=0;k<C.length;k++){let ht=E[k];ht!==null&&(E[k]=null,C[k].disconnect(ht))}L=null,W=null,p.reset();for(let k in m)delete m[k];if(t.setRenderTarget(v),u=null,d=null,f=null,s=null,y=null,Bt.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),P!==null){let k=P.camera;k.fov=P.fov,k.zoom=P.zoom,k.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ct),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,St=null,it=null;S.depth&&(it=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,vt=S.stencil?hi:si,St=S.stencil?Yi:Nn);let It={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new vn(d.textureWidth,d.textureHeight,{format:Fn,type:dn,depthTexture:new oi(d.textureWidth,d.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let vt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,vt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new vn(u.framebufferWidth,u.framebufferHeight,{format:Fn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Bt.setContext(s),Bt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ct(k){for(let ht=0;ht<k.removed.length;ht++){let vt=k.removed[ht],St=E.indexOf(vt);St>=0&&(E[St]=null,C[St].disconnect(vt))}for(let ht=0;ht<k.added.length;ht++){let vt=k.added[ht],St=E.indexOf(vt);if(St===-1){for(let It=0;It<C.length;It++)if(It>=E.length){E.push(vt),St=It;break}else if(E[It]===null){E[It]=vt,St=It;break}if(St===-1)break}let it=C[St];it&&it.connect(vt)}}function q(k,ht){ht===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(ht.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let ht=k.near,vt=k.far;p.texture!==null&&(p.depthNear>0&&(ht=p.depthNear),p.depthFar>0&&(vt=p.depthFar)),Z.near=D.near=A.near=ht,Z.far=D.far=A.far=vt,(L!==Z.near||W!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),L=Z.near,W=Z.far),Z.layers.mask=k.layers.mask|6,A.layers.mask=Z.layers.mask&-5,D.layers.mask=Z.layers.mask&-3;let St=k.parent,it=Z.cameras;q(Z,St);for(let It=0;It<it.length;It++)q(it[It],St);Z.projectionMatrix.copy(A.projectionMatrix),Z.projectionMatrixInverse.copy(A.projectionMatrixInverse),P===null&&k.isPerspectiveCamera&&(P={camera:k,fov:k.fov,zoom:k.zoom}),ot(k,Z,St)};function ot(k,ht,vt){vt===null?k.matrix.copy(ht.matrixWorld):(k.matrix.copy(vt.matrixWorld),k.matrix.invert(),k.matrix.multiply(ht.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(ht.projectionMatrix),k.projectionMatrixInverse.copy(ht.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=As*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=k)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(k){return m[k]};let st=null;function Ft(k,ht){if(h=ht.getViewerPose(l||a),_=ht,h!==null){let vt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let St=!1;vt.length!==Z.cameras.length&&(Z.cameras.length=0,St=!0);for(let Lt=0;Lt<vt.length;Lt++){let $t=vt[Lt],ae=null;if(u!==null)ae=u.getViewport($t);else{let Et=f.getViewSubImage(d,$t);ae=Et.viewport,Lt===0&&(t.setRenderTargetTextures(y,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(y))}let rt=z[Lt];rt===void 0&&(rt=new an,rt.layers.enable(Lt),rt.viewport=new Be,z[Lt]=rt),rt.matrix.fromArray($t.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray($t.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(Z.matrix.copy(rt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),St===!0&&Z.cameras.push(rt)}let it=s.enabledFeatures;if(it&&it.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=i.getBinding();let Lt=f.getDepthInformation(vt[0]);Lt&&Lt.isValid&&Lt.texture&&p.init(Lt,s.renderState)}if(it&&it.includes("camera-access")&&w){t.state.unbindTexture(),f=i.getBinding();for(let Lt=0;Lt<vt.length;Lt++){let $t=vt[Lt].camera;if($t){let ae=m[$t];ae||(ae=new Rr,m[$t]=ae);let rt=f.getCameraImage($t);ae.sourceTexture=rt}}}}for(let vt=0;vt<C.length;vt++){let St=E[vt],it=C[vt];St!==null&&it!==void 0&&it.update(St,ht,l||a)}st&&st(k,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),_=null}let Bt=new kf;Bt.setAnimationLoop(Ft),this.setAnimationLoop=function(k){st=k},this.dispose=function(){}}},Yv=new Ie,Kf=new ce;Kf.set(-1,0,0,0,1,0,0,0,1);function Zv(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,dh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,v,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),w(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===hn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===hn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),v=S.envMap,y=S.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(Yv.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function w(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jv(n,t,e,i){let s={},r={};function a(S,v){let y=v.program;i.uniformBlockBinding(S,y,s[S.id])}function o(S,v){let y=s[S.id];y===void 0&&(_(S),y=c(S),s[S.id]=y,S.addEventListener("dispose",p));let C=v.program;i.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){let v=n.createBuffer(),y=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),v}function l(S){let v=s[S.id],y=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,g=y.length;E<g;E++){let b=y[E];if(Array.isArray(b))for(let P=0,A=b.length;P<A;P++)h(b[P],E,P,C);else h(b,E,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,v,y,C){if(d(S,v,y,C)===!0){let E=S.__offset,g=S.value;if(Array.isArray(g)){let b=0;for(let P=0;P<g.length;P++){let A=g[P],D=w(A,!0);f(A,S.__data,b),b+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,S.__data)}}function f(S,v,y){typeof S=="number"||typeof S=="boolean"?v[y]=S:S.isMatrix3?(v[y]=S.elements[0],v[y+1]=S.elements[1],v[y+2]=S.elements[2],v[y+3]=0,v[y+4]=S.elements[3],v[y+5]=S.elements[4],v[y+6]=S.elements[5],v[y+7]=0,v[y+8]=S.elements[6],v[y+9]=S.elements[7],v[y+10]=S.elements[8],v[y+11]=0):ArrayBuffer.isView(S)?v.set(S.subarray(0,v.length-y),y):S.toArray(v,y)}function d(S,v,y,C){let E=S.value,g=v+"_"+y;if(Array.isArray(E)){C[g]===void 0&&(C[g]=[]);let b=C[g],P=!1;for(let A=0;A<E.length;A++)u(E[A],b,A)===!0&&(P=!0);return P}return u(E,C,g)}function u(S,v,y){if(v[y]===void 0)return typeof S=="number"||typeof S=="boolean"?v[y]=S:ArrayBuffer.isView(S)?v[y]=S.slice():v[y]=S.clone(),!0;{let C=v[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return v[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function _(S){let v=S.uniforms,y=0,C=16;for(let g=0,b=v.length;g<b;g++){let P=Array.isArray(v[g])?v[g]:[v[g]];for(let A=0,D=P.length;A<D;A++){let z=P[A],Z=Array.isArray(z.value)?z.value:[z.value],L=Array.isArray(v[g])||Array.isArray(z.value),W=y;for(let G=0,ct=Z.length;G<ct;G++){let q=Z[G],ot=w(q,L),st=y%C,Ft=st%ot.boundary,Bt=st+Ft;y+=Ft,Bt!==0&&C-Bt<ot.storage&&(y+=C-Bt),G===0&&(W=y),y+=ot.storage}let K=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new K((y-W)/Float32Array.BYTES_PER_ELEMENT),z.__offset=W}}let E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function w(S,v){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):ie("WebGLRenderer: Unsupported uniform value type.",S),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){let v=S.target;v.removeEventListener("dispose",p),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var Kv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function $v(){return Xn===null&&(Xn=new Er(Kv,16,16,Fi,Un),Xn.name="DFG_LUT",Xn.minFilter=on,Xn.magFilter=on,Xn.wrapS=kn,Xn.wrapT=kn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var bl=class{constructor(t={}){let{canvas:e=af(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=dn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let w=u,p=new Set([Go,ko,zo]),m=new Set([dn,Nn,ks,Yi,Fo,Oo]),S=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,E=null,g=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,D=!1,z=null,Z=null,L=null,W=null;this._outputColorSpace=Qe;let K=0,G=0,ct=null,q=-1,ot=null,st=new Be,Ft=new Be,Bt=null,k=new te(0),ht=0,vt=e.width,St=e.height,it=1,It=null,qt=null,Lt=new Be(0,0,vt,St),$t=new Be(0,0,vt,St),ae=!1,rt=new Ai,Et=new lo,Mt=!1,zt=!1,Pt=new Ie,ee=new O,kt=new Be,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},he=!1;function ue(){return ct===null?it:1}let U=i;function _e(M,F){return e.getContext(M,F)}let le,de,Tt,De,Yt,ne,T,x,V,pt,tt,ut,Ct,$,at,mt,R,nt,j,wt,xt,gt,Gt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",Nt,!1),U===null){let F="webgl2";if(U=_e(F,M),U===null)throw _e(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}me()}catch(M){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),re("WebGLRenderer: "+M.message),M}function me(){le=new lx(U),le.init(),xt=new Wv(U,le),de=new $_(U,le,t,xt),Tt=new Vv(U,le),de.reversedDepthBuffer&&d&&Tt.buffers.depth.setReversed(!0),Z=U.createFramebuffer(),L=U.createFramebuffer(),W=U.createFramebuffer(),De=new ux(U),Yt=new Cv,ne=new Hv(U,le,Tt,Yt,de,xt,De),T=new ox(A),x=new fg(U),gt=new J_(U,x),V=new cx(U,x,De,gt),pt=new fx(U,V,x,gt,De),nt=new dx(U,de,ne),at=new j_(Yt),tt=new Tv(A,T,le,de,gt,at),ut=new Zv(A,Yt),Ct=new Pv,$=new Fv(le),R=new Z_(A,T,Tt,pt,_,c),mt=new Gv(A,pt,de),Gt=new Jv(U,De,de,Tt),j=new K_(U,le,De),wt=new hx(U,le,De),De.programs=tt.programs,A.capabilities=de,A.extensions=le,A.properties=Yt,A.renderLists=Ct,A.shadowMap=mt,A.state=Tt,A.info=De}w!==dn&&(P=new mx(w,e.width,e.height,o,s,r));let bt=new Ph(A,U);this.xr=bt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=le.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=le.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(M){M!==void 0&&(it=M,this.setSize(vt,St,!1))},this.getSize=function(M){return M.set(vt,St)},this.setSize=function(M,F,J=!0){if(bt.isPresenting){ie("WebGLRenderer: Can't change size while VR device is presenting.");return}vt=M,St=F,e.width=Math.floor(M*it),e.height=Math.floor(F*it),J===!0&&(e.style.width=M+"px",e.style.height=F+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(vt*it,St*it).floor()},this.setDrawingBufferSize=function(M,F,J){vt=M,St=F,it=J,e.width=Math.floor(M*J),e.height=Math.floor(F*J),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(w===dn){re("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(st)},this.getViewport=function(M){return M.copy(Lt)},this.setViewport=function(M,F,J,H){M.isVector4?Lt.set(M.x,M.y,M.z,M.w):Lt.set(M,F,J,H),Tt.viewport(st.copy(Lt).multiplyScalar(ue()).round())},this.getScissor=function(M){return M.copy($t)},this.setScissor=function(M,F,J,H){M.isVector4?$t.set(M.x,M.y,M.z,M.w):$t.set(M,F,J,H),Tt.scissor(Ft.copy($t).multiplyScalar(ue()).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){Tt.setScissorTest(ae=M)},this.setOpaqueSort=function(M){It=M},this.setTransparentSort=function(M){qt=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,J=!0){let H=0;if(M){let X=!1;if(ct!==null){let At=ct.texture.format;X=p.has(At)}if(X){let At=ct.texture.type,I=m.has(At),N=R.getClearColor(),B=R.getClearAlpha(),Y=N.r,et=N.g,dt=N.b;I?(S[0]=Y,S[1]=et,S[2]=dt,S[3]=B,U.clearBufferuiv(U.COLOR,0,S)):(v[0]=Y,v[1]=et,v[2]=dt,v[3]=B,U.clearBufferiv(U.COLOR,0,v))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),z=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",Nt,!1),R.dispose(),Ct.dispose(),$.dispose(),ne.dispose(),Yt.dispose(),T.dispose(),pt.dispose(),V.dispose(),gt.dispose(),Gt.dispose(),tt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Ki),bt.removeEventListener("sessionend",Ws),Cn.stop()};function Jt(M){M.preventDefault(),gr("WebGLRenderer: Context Lost."),D=!0}function fe(){gr("WebGLRenderer: Context Restored."),D=!1;let M=De.autoReset,F=mt.enabled,J=mt.autoUpdate,H=mt.needsUpdate,X=mt.type;me(),De.autoReset=M,mt.enabled=F,mt.autoUpdate=J,mt.needsUpdate=H,mt.type=X}function Nt(M){re("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ce(M){let F=M.target;F.removeEventListener("dispose",Ce),He(F)}function He(M){Tn(M),Yt.remove(M)}function Tn(M){let F=Yt.get(M).programs;F!==void 0&&(F.forEach(function(J){tt.releaseProgram(J)}),M.isShaderMaterial&&tt.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,J,H,X,At){F===null&&(F=oe);let I=X.isMesh&&X.matrixWorld.determinantAffine()<0,N=Oi(M,F,J,H,X);Tt.setMaterial(H,I);let B=J.index,Y=1;if(H.wireframe===!0){if(B=V.getWireframeAttribute(J),B===void 0)return;Y=2}let et=J.drawRange,dt=J.attributes.position,lt=et.start*Y,Q=(et.start+et.count)*Y;At!==null&&(lt=Math.max(lt,At.start*Y),Q=Math.min(Q,(At.start+At.count)*Y)),B!==null?(lt=Math.max(lt,0),Q=Math.min(Q,B.count)):dt!=null&&(lt=Math.max(lt,0),Q=Math.min(Q,dt.count));let yt=Q-lt;if(yt<0||yt===1/0)return;gt.setup(X,H,N,J,B);let Ut,Dt=j;if(B!==null&&(Ut=x.get(B),Dt=wt,Dt.setIndex(Ut)),X.isMesh)H.wireframe===!0?(Tt.setLineWidth(H.wireframeLinewidth*ue()),Dt.setMode(U.LINES)):Dt.setMode(U.TRIANGLES);else if(X.isLine){let Zt=H.linewidth;Zt===void 0&&(Zt=1),Tt.setLineWidth(Zt*ue()),X.isLineSegments?Dt.setMode(U.LINES):X.isLineLoop?Dt.setMode(U.LINE_LOOP):Dt.setMode(U.LINE_STRIP)}else X.isPoints?Dt.setMode(U.POINTS):X.isSprite&&Dt.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(le.get("WEBGL_multi_draw"))Dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Zt=X._multiDrawStarts,ft=X._multiDrawCounts,jt=X._multiDrawCount,Rt=B?x.get(B).bytesPerElement:1,Qt=Yt.get(H).currentProgram.getUniforms();for(let se=0;se<jt;se++)Qt.setValue(U,"_gl_DrawID",se),Dt.render(Zt[se]/Rt,ft[se])}else if(X.isInstancedMesh)Dt.renderInstances(lt,yt,X.count);else if(J.isInstancedBufferGeometry){let Zt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ft=Math.min(J.instanceCount,Zt);Dt.renderInstances(lt,yt,ft)}else Dt.render(lt,yt)};function Hs(M,F,J,H){z!==null&&M.isNodeMaterial&&z.setObject(H,M),Mt===!0&&at.setState(M,J,!1),M.transparent===!0&&M.side===En&&M.forceSinglePass===!1?(M.side=hn,M.needsUpdate=!0,gi(M,F,H),M.side=Ui,M.needsUpdate=!0,gi(M,F,H),M.side=En):gi(M,F,H)}this.compile=function(M,F,J=null){J===null&&(J=M),z!==null&&z.renderStart(M,F,J),E=$.get(J),E.init(F),b.push(E),J.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),M!==J&&M.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(E.pushLight(X),X.castShadow&&E.pushShadow(X))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),zt=this.localClippingEnabled,Mt=at.init(this.clippingPlanes,zt),Mt===!0&&at.setGlobalState(this.clippingPlanes,F),z!==null&&mt.render(E.state.shadowsArray,J,F);let H=new Set;return M.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let At=X.material;if(At)if(Array.isArray(At))for(let I=0;I<At.length;I++){let N=At[I];Hs(N,J,F,X),H.add(N)}else Hs(At,J,F,X),H.add(At)}),E=b.pop(),z!==null&&z.renderEnd(),H},this.compileAsync=function(M,F,J=null){let H=this.compile(M,F,J);return new Promise(X=>{function At(){if(H.forEach(function(I){let B=Yt.get(I).currentProgram;(B===void 0||B.isReady())&&H.delete(I)}),H.size===0){X(M);return}setTimeout(At,10)}le.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Sn=null;function Rl(M){Sn&&Sn(M)}function Ki(){Cn.stop()}function Ws(){Cn.start()}let Cn=new kf;Cn.setAnimationLoop(Rl),typeof self!="undefined"&&Cn.setContext(self),this.setAnimationLoop=function(M){Sn=M,bt.setAnimationLoop(M),M===null?Cn.stop():Cn.start()},bt.addEventListener("sessionstart",Ki),bt.addEventListener("sessionend",Ws),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(M,F);let J=bt.enabled===!0&&bt.isPresenting===!0,H=P!==null&&(ct===null||J)&&P.begin(A,ct);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(F),F=bt.getCamera()),M.isScene===!0&&M.onBeforeRender(A,M,F,ct),E=$.get(M,b.length),E.init(F),E.state.textureUnits=ne.getTextureUnits(),b.push(E),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Et.setFromArrayCamera(F):rt.setFromProjectionMatrix(Pt,wn,F.reversedDepth),zt=this.localClippingEnabled,Mt=at.init(this.clippingPlanes,zt),C=Ct.get(M,g.length),C.init(),g.push(C),this.info.render.frame++,bt.enabled===!0&&bt.isPresenting===!0){let I=A.xr.getDepthSensingMesh();I!==null&&fi(I,F,-1/0,A.sortObjects)}fi(M,F,0,A.sortObjects),C.finish(),z!==null&&z.updateLights(E.state.lightsArray),A.sortObjects===!0&&C.sort(It,qt),he=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,he&&R.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&at.beginShadows();let X=E.state.shadowsArray;if(mt.render(X,M,F),Mt===!0&&at.endShadows(),(H&&P.hasRenderPass())===!1){let I=C.opaque,N=C.transmissive;if(E.setupLights(),F.isArrayCamera){let B=F.cameras;if(N.length>0)for(let Y=0,et=B.length;Y<et;Y++){let dt=B[Y];la(I,N,M,dt)}he&&R.render(M);for(let Y=0,et=B.length;Y<et;Y++){let dt=B[Y];Xs(C,M,dt,dt.viewport)}}else N.length>0&&la(I,N,M,F),he&&R.render(M),Xs(C,M,F)}ct!==null&&G===0&&(ne.updateMultisampleRenderTarget(ct),ne.updateRenderTargetMipmap(ct)),H&&P.end(A),M.isScene===!0&&M.onAfterRender(A,M,F),gt.resetDefaultState(),q=-1,ot=null,b.pop(),b.length>0?(E=b[b.length-1],ne.setTextureUnits(E.state.textureUnits),Mt===!0&&at.setGlobalState(A.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,z!==null&&z.renderEnd()};function fi(M,F,J,H){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)J=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let I=F.isArrayCamera?Et:rt;if(!M.frustumCulled||M.intersectsFrustum(I)){H&&kt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Pt);let N=pt.update(M),B=M.material;B.visible&&C.push(M,N,B,J,kt.z,null,F)}}else if(M.isMesh||M.isLine||M.isPoints){let I=F.isArrayCamera?Et:rt;if(!M.frustumCulled||M.intersectsFrustum(I)){let N=pt.update(M),B=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),kt.copy(M.boundingSphere.center)):(N.boundingSphere===null&&N.computeBoundingSphere(),kt.copy(N.boundingSphere.center)),kt.applyMatrix4(M.matrixWorld).applyMatrix4(Pt)),Array.isArray(B)){let Y=N.groups;for(let et=0,dt=Y.length;et<dt;et++){let lt=Y[et],Q=B[lt.materialIndex];Q&&Q.visible&&C.push(M,N,Q,J,kt.z,lt,F)}}else B.visible&&C.push(M,N,B,J,kt.z,null,F)}}}let At=M.children;for(let I=0,N=At.length;I<N;I++)fi(At[I],F,J,H)}function Xs(M,F,J,H){let{opaque:X,transmissive:At,transparent:I}=M;E.setupLightsView(J),Mt===!0&&at.setGlobalState(A.clippingPlanes,J),H&&Tt.viewport(st.copy(H)),X.length>0&&pi(X,F,J),At.length>0&&pi(At,F,J),I.length>0&&pi(I,F,J),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function la(M,F,J,H){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let lt=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[H.id]=new vn(1,1,{generateMipmaps:!0,type:lt?Un:dn,minFilter:ci,samples:Math.max(4,de.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ee.workingColorSpace})}let At=E.state.transmissionRenderTarget[H.id],I=H.viewport||st;At.setSize(I.z*A.transmissionResolutionScale,I.w*A.transmissionResolutionScale);let N=A.getRenderTarget(),B=A.getActiveCubeFace(),Y=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(k),ht=A.getClearAlpha(),ht<1&&A.setClearColor(16777215,.5),A.clear(),he&&R.render(J);let et=A.toneMapping;A.toneMapping=Wn;let dt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),Mt===!0&&at.setGlobalState(A.clippingPlanes,H),pi(M,J,H),ne.updateMultisampleRenderTarget(At),ne.updateRenderTargetMipmap(At),le.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let Q=0,yt=F.length;Q<yt;Q++){let Ut=F[Q],{object:Dt,geometry:Zt,material:ft,group:jt}=Ut;if(ft.side===En&&Dt.layers.test(H.layers)){let Rt=ft.side;ft.side=hn,ft.needsUpdate=!0,mi(Dt,J,H,Zt,ft,jt),ft.side=Rt,ft.needsUpdate=!0,lt=!0}}lt===!0&&(ne.updateMultisampleRenderTarget(At),ne.updateRenderTargetMipmap(At))}A.setRenderTarget(N,B,Y),A.setClearColor(k,ht),dt!==void 0&&(H.viewport=dt),A.toneMapping=et}function pi(M,F,J){let H=F.isScene===!0?F.overrideMaterial:null;for(let X=0,At=M.length;X<At;X++){let I=M[X],{object:N,geometry:B,group:Y}=I,et=I.material;et.allowOverride===!0&&H!==null&&(et=H),N.layers.test(J.layers)&&mi(N,F,J,B,et,Y)}}function mi(M,F,J,H,X,At){z!==null&&X.isNodeMaterial&&z.setObject(M,X),M.onBeforeRender(A,F,J,H,X,At),M.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),X.onBeforeRender(A,F,J,H,M,At),X.transparent===!0&&X.side===En&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,A.renderBufferDirect(J,F,H,X,M,At),X.side=Ui,X.needsUpdate=!0,A.renderBufferDirect(J,F,H,X,M,At),X.side=En):A.renderBufferDirect(J,F,H,X,M,At),M.onAfterRender(A,F,J,H,X,At)}function qs(M){let F=0;for(let J of M)J.texture!==null&&F++;return F}function gi(M,F,J){F.isScene!==!0&&(F=oe);let H=Yt.get(M),X=E.state.lights,At=E.state.shadowsArray,I=X.state.version,N=tt.getParameters(M,X.state,At,F,J,E.state.lightProbeGridArray),B=tt.getProgramCacheKey(N),Y=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let et=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=T.get(M.envMap||H.environment,et),H.envMapRotation=H.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,Y===void 0&&(M.addEventListener("dispose",Ce),Y=new Map,H.programs=Y,H.programVariants=new Map);let dt=Y.get(B);if(dt!==void 0){if(H.currentProgram===dt&&H.lightsStateVersion===I)return _i(M,N),dt}else N.uniforms=tt.getUniforms(M),z!==null&&M.isNodeMaterial&&z.build(M,J,N),M.onBeforeCompile(N,A),dt=tt.acquireProgram(N,B),Y.set(B,dt),H.uniforms=N.uniforms;let lt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(lt.clippingPlanes=at.uniform),_i(M,N),H.needsLights=Pl(M),H.lightsStateVersion=I,H.needsLights&&(lt.ambientLightColor.value=X.state.ambient,lt.lightProbe.value=X.state.probe,lt.sunLights.value=X.state.sun,lt.sunLightShadows.value=X.state.sunShadow,lt.directionalLights.value=X.state.directional,lt.directionalLightShadows.value=X.state.directionalShadow,lt.spotLights.value=X.state.spot,lt.spotLightShadows.value=X.state.spotShadow,lt.rectAreaLights.value=X.state.rectArea,lt.ltc_1.value=X.state.rectAreaLTC1,lt.ltc_2.value=X.state.rectAreaLTC2,lt.pointLights.value=X.state.point,lt.pointLightShadows.value=X.state.pointShadow,lt.hemisphereLights.value=X.state.hemi,lt.sunShadowMatrix.value=X.state.sunShadowMatrix,lt.sunShadowCascade.value=X.state.sunShadowCascade,lt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,lt.spotLightMatrix.value=X.state.spotLightMatrix,lt.spotLightMap.value=X.state.spotLightMap,lt.pointShadowMatrix.value=X.state.pointShadowMatrix),H.numLightProbeGrids=qs(E.state.lightProbeGridArray),H.currentProgram=dt,H.uniformsList=null,dt}function Yn(M,F,J,H,X){let At=Yt.get(M),I=At.currentProgram.id+","+H+","+X,N=At.programVariants.get(I);return N===void 0?(N=gi(M,F,J),At.programVariants.set(I,N)):(At.currentProgram=N,At.uniformsList=null,At.outputColorSpace=H,At.toneMapping=X),N}function ca(M){if(M.uniformsList===null){let F=M.currentProgram.getUniforms();M.uniformsList=Gs.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function _i(M,F){let J=Yt.get(M);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function Oi(M,F,J,H,X){F.isScene!==!0&&(F=oe),ne.resetTextureUnits();let At=F.fog,I=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,N=ct===null?A.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Ee.workingColorSpace,B=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Y=T.get(H.envMap||I,B),et=H.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,dt=!!J.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),lt=!!J.morphAttributes.position,Q=!!J.morphAttributes.normal,yt=!!J.morphAttributes.color,Ut=Wn;H.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(Ut=A.toneMapping);let Dt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Zt=Dt!==void 0?Dt.length:0,ft=Yt.get(H),jt=E.state.lights;if(Mt===!0&&(zt===!0||M!==ot)){let Ht=M===ot&&H.id===q;at.setState(H,M,Ht)}let Rt=!1,Qt=!1;H.version===ft.__version?ft.needsLights&&ft.lightsStateVersion!==jt.state.version||X.isBatchedMesh&&ft.batching===!1||!X.isBatchedMesh&&ft.batching===!0||X.isBatchedMesh&&ft.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&ft.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&ft.instancing===!1||!X.isInstancedMesh&&ft.instancing===!0||X.isSkinnedMesh&&ft.skinning===!1||!X.isSkinnedMesh&&ft.skinning===!0||X.isInstancedMesh&&ft.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ft.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ft.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ft.instancingMorph===!1&&X.morphTexture!==null||ft.envMap!==Y||H.fog===!0&&ft.fog!==At||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==at.numPlanes||ft.numIntersection!==at.numIntersection)||ft.vertexAlphas!==et||ft.vertexTangents!==dt||ft.morphTargets!==lt||ft.morphNormals!==Q||ft.morphColors!==yt||ft.morphTargetsCount!==Zt||ft.numLightProbeGrids!==qs(E.state.lightProbeGridArray)?Rt=!0:(ft.outputColorSpace!==N||ft.toneMapping!==Ut)&&(Qt=!0):(Rt=!0,ft.__version=H.version);let se=ft.currentProgram;(Rt===!0||Qt===!0)&&(se=Qt===!0?Yn(H,F,X,N,Ut):gi(H,F,X),z&&H.isNodeMaterial&&z.onUpdateProgram(H,se,ft));let we=!1,be=!1,ve=!1,Vt=se.getUniforms(),Ae=ft.uniforms;if(Tt.useProgram(se.program)&&(we=!0,be=!0,ve=!0),H.id!==q&&(q=H.id,be=!0),we||ot!==M){Tt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Vt.setValue(U,"projectionMatrix",M.projectionMatrix),Vt.setValue(U,"viewMatrix",M.matrixWorldInverse);let Kt=Vt.map.cameraPosition;Kt!==void 0&&Kt.setValue(U,ee.setFromMatrixPosition(M.matrixWorld)),de.logarithmicDepthBuffer&&Vt.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Vt.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),ot!==M&&(ot=M,be=!0,ve=!0)}if(ft.needsLights&&(jt.state.sunShadowMap.length>0&&Vt.setValue(U,"sunShadowMap",jt.state.sunShadowMap,ne),jt.state.directionalShadowMap.length>0&&Vt.setValue(U,"directionalShadowMap",jt.state.directionalShadowMap,ne),jt.state.spotShadowMap.length>0&&Vt.setValue(U,"spotShadowMap",jt.state.spotShadowMap,ne),jt.state.pointShadowMap.length>0&&Vt.setValue(U,"pointShadowMap",jt.state.pointShadowMap,ne)),X.isSkinnedMesh){Vt.setOptional(U,X,"bindMatrix"),Vt.setOptional(U,X,"bindMatrixInverse");let Ht=X.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Vt.setValue(U,"boneTexture",Ht.boneTexture,ne))}X.isBatchedMesh&&(Vt.setOptional(U,X,"batchingTexture"),Vt.setValue(U,"batchingTexture",X._matricesTexture,ne),Vt.setOptional(U,X,"batchingIdTexture"),Vt.setValue(U,"batchingIdTexture",X._indirectTexture,ne),Vt.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&Vt.setValue(U,"batchingColorTexture",X._colorsTexture,ne));let Te=J.morphAttributes;if((Te.position!==void 0||Te.normal!==void 0||Te.color!==void 0)&&nt.update(X,J,se),(be||ft.receiveShadow!==X.receiveShadow)&&(ft.receiveShadow=X.receiveShadow,Vt.setValue(U,"receiveShadow",X.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Ae.envMapIntensity.value=F.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=$v()),be){if(Vt.setValue(U,"toneMappingExposure",A.toneMappingExposure),ft.needsLights&&$i(Ae,ve),At&&H.fog===!0&&ut.refreshFogUniforms(Ae,At),ut.refreshMaterialUniforms(Ae,H,it,St,E.state.transmissionRenderTarget[M.id]),ft.needsLights&&ft.numLightProbeGrids>0){let Ht=y,Kt=0;for(let Xt of E.state.lightProbeGridArray)Xt.texture!==null&&(Ht.textures[Kt]=Xt.texture,Ht.min[Kt]=Xt.boundingBox.min,Ht.max[Kt]=Xt.boundingBox.max,Ht.resolution[Kt]=Xt.resolution,Kt++);for(let Xt in Ht)Ht[Xt].length=Kt;Ae.probesSH.value=Ht.textures,Ae.probesMin.value=Ht.min,Ae.probesMax.value=Ht.max,Ae.probesResolution.value=Ht.resolution}Gs.upload(U,ca(ft),Ae,ne)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Gs.upload(U,ca(ft),Ae,ne),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Vt.setValue(U,"center",X.center),Vt.setValue(U,"modelViewMatrix",X.modelViewMatrix),Vt.setValue(U,"normalMatrix",X.normalMatrix),Vt.setValue(U,"modelMatrix",X.matrixWorld),H.uniformsGroups!==void 0){let Ht=H.uniformsGroups;for(let Kt=0,Xt=Ht.length;Kt<Xt;Kt++){let xe=Ht[Kt];Gt.update(xe,se),Gt.bind(xe,se)}}return se}function $i(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function Pl(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ct},this.setRenderTargetTextures=function(M,F,J){let H=Yt.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Yt.get(M.texture).__webglTexture=F,Yt.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:J,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){let J=Yt.get(M);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,J=0){ct=M,K=F,G=J;let H=null,X=!1,At=!1;if(M){let N=Yt.get(M);if(N.__useDefaultFramebuffer!==void 0){Tt.bindFramebuffer(U.FRAMEBUFFER,N.__webglFramebuffer),st.copy(M.viewport),Ft.copy(M.scissor),Bt=M.scissorTest,Tt.viewport(st),Tt.scissor(Ft),Tt.setScissorTest(Bt),q=-1;return}else if(N.__webglFramebuffer===void 0)ne.setupRenderTarget(M);else if(N.__hasExternalTextures)ne.rebindTextures(M,Yt.get(M.texture).__webglTexture,Yt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let et=M.depthTexture;if(N.__boundDepthTexture!==et){if(et!==null&&Yt.has(et)&&(M.width!==et.image.width||M.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ne.setupDepthRenderbuffer(M)}}let B=M.texture;(B.isData3DTexture||B.isDataArrayTexture||B.isCompressedArrayTexture)&&(At=!0);let Y=Yt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Y[F])?H=Y[F][J]:H=Y[F],X=!0):M.samples>0&&ne.useMultisampledRTT(M)===!1?H=Yt.get(M).__webglMultisampledFramebuffer:Array.isArray(Y)?H=Y[J]:H=Y,st.copy(M.viewport),Ft.copy(M.scissor),Bt=M.scissorTest}else st.copy(Lt).multiplyScalar(it).floor(),Ft.copy($t).multiplyScalar(it).floor(),Bt=ae;if(J!==0&&(H=Z),Tt.bindFramebuffer(U.FRAMEBUFFER,H)&&Tt.drawBuffers(M,H),Tt.viewport(st),Tt.scissor(Ft),Tt.setScissorTest(Bt),X){let N=Yt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,N.__webglTexture,J)}else if(At){let N=F;for(let B=0;B<M.textures.length;B++){let Y=Yt.get(M.textures[B]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+B,Y.__webglTexture,J,N)}}else if(M!==null&&J!==0){let N=Yt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,N.__webglTexture,J)}q=-1};function ji(M){let F=Yt.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=de.textureFormatReadable(M.format),F.__typeReadable=de.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,J,H,X,At,I,N=0){if(!(M&&M.isWebGLRenderTarget)){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let B=Yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&I!==void 0&&(B=B[I],Array.isArray(B)&&(B=B[0])),B){Tt.bindFramebuffer(U.FRAMEBUFFER,B);try{let Y=M.textures[N],et=Y.format,dt=Y.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+N);let lt=ji(Y);if(lt.__formatReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(lt.__typeReadable===!1){re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-H&&J>=0&&J<=M.height-X&&U.readPixels(F,J,H,X,xt.convert(et),xt.convert(dt),At)}finally{let Y=ct!==null?Yt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,Y)}}},this.readRenderTargetPixelsAsync=async function(M,F,J,H,X,At,I,N=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let B=Yt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&I!==void 0&&(B=B[I],Array.isArray(B)&&(B=B[0])),B)if(F>=0&&F<=M.width-H&&J>=0&&J<=M.height-X){Tt.bindFramebuffer(U.FRAMEBUFFER,B);let Y=M.textures[N],et=Y.format,dt=Y.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+N);let lt=ji(Y);if(lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Q=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Q),U.bufferData(U.PIXEL_PACK_BUFFER,At.byteLength,U.STREAM_READ),U.readPixels(F,J,H,X,xt.convert(et),xt.convert(dt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let yt=ct!==null?Yt.get(ct).__webglFramebuffer:null;Tt.bindFramebuffer(U.FRAMEBUFFER,yt);let Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await lf(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Q),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,At),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Q),U.deleteSync(Ut),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,J=0){let H=Math.pow(2,-J),X=Math.floor(M.image.width*H),At=Math.floor(M.image.height*H),I=F!==null?F.x:0,N=F!==null?F.y:0;ne.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,J,0,0,I,N,X,At),Tt.unbindTexture()},this.copyTextureToTexture=function(M,F,J=null,H=null,X=0,At=0){let I,N,B,Y,et,dt,lt,Q,yt,Ut=M.isCompressedTexture?M.mipmaps[At]:M.image;if(J!==null)I=J.max.x-J.min.x,N=J.max.y-J.min.y,B=J.isBox3?J.max.z-J.min.z:1,Y=J.min.x,et=J.min.y,dt=J.isBox3?J.min.z:0;else{let Vt=Math.pow(2,-X);I=Math.floor(Ut.width*Vt),N=Math.floor(Ut.height*Vt),M.isDataArrayTexture?B=Ut.depth:M.isData3DTexture?B=Math.floor(Ut.depth*Vt):B=1,Y=0,et=0,dt=0}H!==null?(lt=H.x,Q=H.y,yt=H.z):(lt=0,Q=0,yt=0);let Dt=xt.convert(F.format),Zt=xt.convert(F.type),ft;F.isData3DTexture?(ne.setTexture3D(F,0),ft=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(ne.setTexture2DArray(F,0),ft=U.TEXTURE_2D_ARRAY):(ne.setTexture2D(F,0),ft=U.TEXTURE_2D),Tt.activeTexture(U.TEXTURE0),Tt.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),Tt.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Tt.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);let jt=Tt.getParameter(U.UNPACK_ROW_LENGTH),Rt=Tt.getParameter(U.UNPACK_IMAGE_HEIGHT),Qt=Tt.getParameter(U.UNPACK_SKIP_PIXELS),se=Tt.getParameter(U.UNPACK_SKIP_ROWS),we=Tt.getParameter(U.UNPACK_SKIP_IMAGES);Tt.pixelStorei(U.UNPACK_ROW_LENGTH,Ut.width),Tt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ut.height),Tt.pixelStorei(U.UNPACK_SKIP_PIXELS,Y),Tt.pixelStorei(U.UNPACK_SKIP_ROWS,et),Tt.pixelStorei(U.UNPACK_SKIP_IMAGES,dt);let be=M.isDataArrayTexture||M.isData3DTexture,ve=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){let Vt=Yt.get(M),Ae=Yt.get(F),Te=Yt.get(Vt.__renderTarget),Ht=Yt.get(Ae.__renderTarget);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,Te.__webglFramebuffer),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let Kt=0;Kt<B;Kt++)be&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.get(M).__webglTexture,X,dt+Kt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.get(F).__webglTexture,At,yt+Kt)),U.blitFramebuffer(Y,et,Y+I,et+N,lt,Q,lt+I,Q+N,U.DEPTH_BUFFER_BIT,U.NEAREST);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||M.isRenderTargetTexture||Yt.has(M)){let Vt=Yt.get(M),Ae=Yt.get(F);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,L),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,W);for(let Te=0;Te<B;Te++)be?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vt.__webglTexture,X,dt+Te):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,X),ve?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,At,yt+Te):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,At),X!==0?U.blitFramebuffer(Y,et,Y+I,et+N,lt,Q,lt+I,Q+N,U.COLOR_BUFFER_BIT,U.NEAREST):ve?U.copyTexSubImage3D(ft,At,lt,Q,yt+Te,Y,et,I,N):U.copyTexSubImage2D(ft,At,lt,Q,Y,et,I,N);Tt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ve?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(ft,At,lt,Q,yt,I,N,B,Dt,Zt,Ut.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(ft,At,lt,Q,yt,I,N,B,Dt,Ut.data):U.texSubImage3D(ft,At,lt,Q,yt,I,N,B,Dt,Zt,Ut):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,At,lt,Q,I,N,Dt,Zt,Ut.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,At,lt,Q,Ut.width,Ut.height,Dt,Ut.data):U.texSubImage2D(U.TEXTURE_2D,At,lt,Q,I,N,Dt,Zt,Ut);Tt.pixelStorei(U.UNPACK_ROW_LENGTH,jt),Tt.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt),Tt.pixelStorei(U.UNPACK_SKIP_PIXELS,Qt),Tt.pixelStorei(U.UNPACK_SKIP_ROWS,se),Tt.pixelStorei(U.UNPACK_SKIP_IMAGES,we),At===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&U.generateMipmap(ft),Tt.unbindTexture()},this.initRenderTarget=function(M){Yt.get(M).__webglFramebuffer===void 0&&ne.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ne.setTextureCube(M,0):M.isData3DTexture?ne.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ne.setTexture2DArray(M,0):ne.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){K=0,G=0,ct=null,Tt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=Ee._getUnpackColorSpace()}};var $f={type:"change"},Lh={type:"start"},Qf={type:"end"},Al=new Ps,jf=new _n,jv=Math.cos(70*hh.DEG2RAD),Ke=new O,fn=2*Math.PI,Re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ih=1e-6,Tl=class extends Zr{constructor(t,e=null){super(t,e),this.state=Re.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Ni.ROTATE,TWO:Ni.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new xn,this._lastTargetPosition=new O,this._quat=new xn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fs,this._sphericalDelta=new Fs,this._scale=1,this._panOffset=new O,this._rotateStart=new _t,this._rotateEnd=new _t,this._rotateDelta=new _t,this._panStart=new _t,this._panEnd=new _t,this._panDelta=new _t,this._dollyStart=new _t,this._dollyEnd=new _t,this._dollyDelta=new _t,this._dollyDirection=new O,this._mouse=new _t,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ty.bind(this),this._onPointerDown=Qv.bind(this),this._onPointerUp=ey.bind(this),this._onContextMenu=ly.bind(this),this._onMouseWheel=sy.bind(this),this._onKeyDown=ry.bind(this),this._onTouchStart=ay.bind(this),this._onTouchMove=oy.bind(this),this._onMouseDown=ny.bind(this),this._onMouseMove=iy.bind(this),this._interceptControlDown=cy.bind(this),this._interceptControlUp=hy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Re.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($f),this.update(),this.state=Re.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ke.copy(e).sub(this.target),Ke.applyQuaternion(this._quat),this._spherical.setFromVector3(Ke),this.autoRotate&&this.state===Re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=fn:i>Math.PI&&(i-=fn),s<-Math.PI?s+=fn:s>Math.PI&&(s-=fn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ke.setFromSpherical(this._spherical),Ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ke.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new O(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Al.origin.copy(this.object.position),Al.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Al.direction))<jv?this.object.lookAt(this.target):(jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Al.intersectPlane(jf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Ih||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ih||this._lastTargetPosition.distanceToSquared(this.target)>Ih?(this.dispatchEvent($f),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?fn/60*this.autoRotateSpeed*t:fn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ke.setFromMatrixColumn(e,0),Ke.multiplyScalar(-t),this._panOffset.add(Ke)}_panUp(t,e){this.screenSpacePanning===!0?Ke.setFromMatrixColumn(e,1):(Ke.setFromMatrixColumn(e,0),Ke.crossVectors(this.object.up,Ke)),Ke.multiplyScalar(t),this._panOffset.add(Ke)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ke.copy(s).sub(this.target);let r=Ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-fn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(fn*this._rotateDelta.x/e.clientHeight),this._rotateUp(fn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new _t,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Qv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ty(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function ey(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Qf),this.state=Re.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ny(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Re.DOLLY;break;case Di.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}break;case Di.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Re.PAN}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Lh)}function iy(n){switch(this.state){case Re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sy(n){this.enabled===!1||this.enableZoom===!1||this.state!==Re.NONE||(n.preventDefault(),this.dispatchEvent(Lh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Qf))}function ry(n){this.enabled!==!1&&this._handleKeyDown(n)}function ay(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ni.ROTATE:if(this.enableRotate===!1){this.state=Re.NONE;break}this._handleTouchStartRotate(n),this.state=Re.TOUCH_ROTATE;break;case Ni.PAN:if(this.enablePan===!1){this.state=Re.NONE;break}this._handleTouchStartPan(n),this.state=Re.TOUCH_PAN;break;default:this.state=Re.NONE}break;case 2:switch(this.touches.TWO){case Ni.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Re.TOUCH_DOLLY_PAN;break;case Ni.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Re.TOUCH_DOLLY_ROTATE;break;default:this.state=Re.NONE}break;default:this.state=Re.NONE}this.state!==Re.NONE&&this.dispatchEvent(Lh)}function oy(n){switch(this._trackPointer(n),this.state){case Re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Re.NONE}}function ly(n){this.enabled!==!1&&n.preventDefault()}function cy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Cl=[[0,"#D3DBA4"],[120,"#C4D498"],[210,"#B4CC90"],[380,"#A9C48C"],[560,"#7FA67F"],[780,"#4C7E62"],[930,"#3A6852"],[1060,"#DCE8E5"],[1300,"#FFFFFF"]].map(function(n){return[n[0],new te(n[1])]});function uy(n,t){for(var e=1;e<Cl.length-1&&n>Cl[e][0];)e++;var i=Cl[e-1],s=Cl[e],r=Math.max(0,Math.min(1,(n-i[0])/(s[0]-i[0])));return t.copy(i[1]).lerp(s[1],r)}function ge(n,t){var e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function Dh(n,t){var e=n.attributes.position.array,i=t.attributes.position.array,s=n.index.array,r=t.index.array,a=new Float32Array(e.length+i.length);a.set(e),a.set(i,e.length);var o=e.length/3,c=new Uint16Array(s.length+r.length);c.set(s);for(var l=0;l<r.length;l++)c[s.length+l]=r[l]+o;var h=new qe;return h.setAttribute("position",new Xe(a,3)),h.setIndex(new Xe(c,1)),h.computeVertexNormals(),h}function Nh(n,t){var e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var Ji=[[470,"#F6D8C4","#FFC89A",10],[570,"#DCEBEE","#FFE9C9",16],[750,"#CFE6EE","#FFF6E6",22],[900,"#E8E3D0","#FFE0B0",16],[998,"#F2B38A","#FF9E5E",9]].map(function(n){return[n[0],new te(n[1]),new te(n[2]),n[3]]});function dy(n,t,e){n=Math.max(Ji[0][0],Math.min(Ji[Ji.length-1][0],n));for(var i=1;i<Ji.length-1&&n>Ji[i][0];)i++;var s=Ji[i-1],r=Ji[i],a=(n-s[0])/(r[0]-s[0]);t.copy(s[1]).lerp(r[1],a),e.copy(s[2]).lerp(r[2],a);var o=(n-470)/528;return{az:(100+160*o)*Math.PI/180,el:(s[3]+(r[3]-s[3])*a)*Math.PI/180}}function tp(n,t){var e=n.ve,i=n.wrap,s=n.reduced,r=n.stops,a=window.devicePixelRatio||1,o=new bl({antialias:a<2,alpha:!1,powerPreference:"high-performance"}),c=Math.min(a,1.6),l=c;o.setPixelRatio(l),o.domElement.className="mappa-canvas",i.appendChild(o.domElement);var h=new yr,f=new te("#DCEBEE"),d=new te("#FFE9C9");h.background=f,h.fog=new vr(f,100,400);var u=new an(36,1,.3,900),_=new Wr("#FFF3E0","#9DB295",1.45);h.add(_);var w=new Yr("#FFE9C9",2);h.add(w,w.target);var p=t.W,m=t.H,S=p*m,v=new Float32Array(S*3),y=new Float32Array(S*3),C=new te,E,g,b;for(g=0;g<m;g++)for(E=0;E<p;E++){if(b=g*p+E,v[b*3]=-t.SX/2+E*t.SX/(p-1),v[b*3+1]=t.el[b]*e/1e3,v[b*3+2]=-t.SZ/2+g*t.SZ/(m-1),uy(t.el[b],C),t.el[b]<360){var P=ge(Math.floor(E/3)+7,Math.floor(g/3)+3),A=ge(Math.floor(E/5)+1,Math.floor(g/5)+9);C.offsetHSL((P-.5)*.045,(A-.5)*.1,(P-.5)*.05+(A-.5)*.03)}var D=1+(ge(E,g)-.5)*.06;y[b*3]=Math.min(1,C.r*D),y[b*3+1]=Math.min(1,C.g*D),y[b*3+2]=Math.min(1,C.b*D)}var z=new Uint16Array((p-1)*(m-1)*6),Z=0;for(g=0;g<m-1;g++)for(E=0;E<p-1;E++){var L=g*p+E,W=L+1,K=L+p,G=K+1;z[Z++]=L,z[Z++]=K,z[Z++]=W,z[Z++]=W,z[Z++]=K,z[Z++]=G}var ct=new qe;ct.setAttribute("position",new Xe(v,3)),ct.setAttribute("color",new Xe(y,3)),ct.setIndex(new Xe(z,1)),ct.computeVertexNormals();var q=new pe({vertexColors:!0,flatShading:!0}),ot={value:new _t(t.SX/2,t.SZ/2)};q.onBeforeCompile=function(I){I.uniforms.uHalf=ot,I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vXZ = position.xz;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;
uniform vec2 uHalf;`).replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
float ex = max(abs(vXZ.x) / uHalf.x, abs(vXZ.y) / uHalf.y);
gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, smoothstep(0.72, 0.96, ex));
#endif`)},h.add(new Wt(ct,q));function st(I,N){return t.quota(I,N)*e/1e3}var Ft=n.caldo,Bt=t.tappe[Ft[0]].s,k=2,ht=0,vt=Math.min(5.5,Bt*.12);function St(I){var N=t.puntoA(Math.max(0,I-.5)),B=t.puntoA(Math.min(t.total,I+.5)),Y=B.x-N.x,et=B.z-N.z,dt=Math.hypot(Y,et)||1;return[Y/dt,et/dt]}var it=[];(function(){for(var I=0;I<=Bt;I+=.35){var N=t.puntoA(I);it.push([N.x,N.z])}})();function It(I,N){for(var B=1e9,Y=0;Y<it.length;Y++){var et=Math.hypot(it[Y][0]-I,it[Y][1]-N);et<B&&(B=et)}return B}var qt=(function(){var I=t.puntoA(vt),N=St(vt);return{x:I.x-N[1]*(k/2+3),z:I.z+N[0]*(k/2+3),t:N,s:vt}})();(function(){var I=[];for(g=1;g<m-1;g++)for(E=1;E<p-1;E++){var N=Math.abs(E/(p-1)-.5)*2,B=Math.abs(g/(m-1)-.5)*2;if(!(N>.82||B>.82)){var Y=t.el[g*p+E];if(!(Y<290||Y>1100)){var et=.07+.42*Math.min(1,(Y-290)/520);ge(E*3.1,g*1.7)>et||I.push([E,g,Y])}}}var dt=Dh(new Ci(.24,.6,5).translate(0,.3,0),new Ci(.17,.55,5).translate(0,.66,0)),lt=new Ye(dt,new pe({flatShading:!0}),I.length),Q=new Ue,yt=new te,Ut=new Ye(new Is(.26,6).rotateX(-Math.PI/2),new Ve({color:"#27382b",transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),I.length);I.forEach(function(Dt,Zt){var ft=v[(Dt[1]*p+Dt[0])*3]+(ge(Dt[0],Dt[1]*2)-.5)*.5,jt=v[(Dt[1]*p+Dt[0])*3+2]+(ge(Dt[0]*2,Dt[1])-.5)*.5,Rt=st(ft,jt),Qt=.7+ge(Dt[0]*5,Dt[1]*7)*.7,se=Qt*(.9+ge(Dt[1],Dt[0])*.5);Q.position.set(ft,Rt-.02,jt),Q.scale.set(Qt,se,Qt),Q.rotation.y=ge(Dt[0],Dt[1])*6,Q.updateMatrix(),lt.setMatrixAt(Zt,Q.matrix),yt.setHSL(.4+ge(Dt[1],Dt[0]*3)*.05,.45,.2+ge(Dt[0]*9,Dt[1])*.1),lt.setColorAt(Zt,yt),Q.position.set(ft+.08,Rt+.03,jt+.06),Q.scale.set(Qt,1,Qt),Q.rotation.y=0,Q.updateMatrix(),Ut.setMatrixAt(Zt,Q.matrix)}),h.add(Ut,lt)})(),(function(){var I=[],N=[],B=[[9.1517,45.1847,34,2.1],[9.0069,44.9908,26,1.6],[9.1286,45.016,16,1.1],[8.9251,45.1953,22,1.3],[9.149,45.397,40,2.2],[9.2745,45.116,10,.9],[9.0476,45.1585,8,.8],[9.0305,45.267,10,.9],[9.247,45.285,14,1.1],[9.2024,44.9811,10,.9],[9.045,44.954,6,.7]];B.forEach(function(Q){I.push(Q)}),t.tappe.forEach(function(Q,yt){yt>0&&yt<t.tappe.length-1&&I.push([null,null,yt===7?14:5,yt===7?.9:.45,Q])}),I.forEach(function(Q,yt){var Ut,Dt;if(Q[4])Ut=Q[4].x,Dt=Q[4].z;else{var Zt=t.proj(Q[0],Q[1]);Ut=Zt[0],Dt=Zt[1]}for(var ft=0;ft<Q[2];ft++){var jt=ge(yt*7+ft,3.3)*6.283,Rt=Q[3]*Math.sqrt(ge(ft,yt*5+1)),Qt=Ut+Math.cos(jt)*Rt,se=Dt+Math.sin(jt)*Rt;t.quota(Qt,se)>900||It(Qt,se)<k/2+.9||Math.hypot(Qt-qt.x,se-qt.z)<3||N.push([Qt,se,ge(ft*3,yt)*3.14,.8+ge(yt,ft*2)*.6,ge(ft,yt*9)])}});var Y=new Ye(new Me(.2,.13,.14).translate(0,.065,0),new pe({flatShading:!0}),N.length),et=new Ye(new Ci(.17,.1,4).rotateY(Math.PI/4).scale(1.1,1,.8).translate(0,.18,0),new pe({flatShading:!0}),N.length),dt=new Ue,lt=new te;N.forEach(function(Q,yt){dt.position.set(Q[0],st(Q[0],Q[1])-.01,Q[1]),dt.rotation.y=Q[2],dt.scale.setScalar(Q[3]),dt.updateMatrix(),Y.setMatrixAt(yt,dt.matrix),et.setMatrixAt(yt,dt.matrix),lt.setHSL(.09+Q[4]*.04,.35,.82-Q[4]*.12),Y.setColorAt(yt,lt),lt.setHSL(.03+Q[4]*.03,.55,.4+Q[4]*.08),et.setColorAt(yt,lt)}),h.add(Y,et)})();var Lt=t.route,$t=.17;function ae(I){return new O(I.x,I.m*e/1e3+$t*.9+.06,I.z)}var rt=t.tappe[Ft[0]].idx,Et=t.tappe[Ft[1]].idx;function Mt(I,N,B){for(var Y=[],et=I;et<=N;et++)Y.push(ae(Lt[et]));return new Gr(new Ds(Y,!1,"centripetal"),Math.max(8,Math.min(3200,Math.round((N-I)*1.4))),B,5,!1)}h.add(new Wt(Mt(rt,Et,$t),new pe({color:"#A22B3C"}))),(function(){var I=new Wt(Mt(rt,Et,$t*.45),new pe({color:"#E2A93B"}));I.position.y+=$t*.55,h.add(I)})(),(function(){var I=[],N;[[t.tappe[Ft[1]].s,t.total]].forEach(function(et){for(N=et[0];N<et[1];N+=.8){var dt=t.puntoA(N);I.push(ae({x:dt.x,z:dt.z,m:dt.m}))}});var B=new Ye(new li($t*.58,6,5),new Ve({color:"#FFFBF2"}),I.length),Y=new Ue;I.forEach(function(et,dt){Y.position.copy(et),Y.updateMatrix(),B.setMatrixAt(dt,Y.matrix)}),h.add(B)})(),(function(){for(var I=1e9,N=Bt*.2;N<Bt*.8;N+=.5){var B=St(N-3),Y=St(N),et=St(N+3),dt=Math.abs(Nh(Math.atan2(B[1],B[0]),Math.atan2(Y[1],Y[0])))+Math.abs(Nh(Math.atan2(Y[1],Y[0]),Math.atan2(et[1],et[0])));dt<I&&(I=dt,ht=N)}})();function zt(I,N,B,Y,et,dt,lt){var Q=Math.max(2,Math.ceil((N-I)/.3)),yt=new Float32Array((Q+1)*6),Ut=new Float32Array((Q+1)*6),Dt=[],Zt,ft;for(Zt=0;Zt<=Q;Zt++){var jt=I+(N-I)*Zt/Q,Rt=t.puntoA(jt),Qt=St(jt),se=-Qt[1],we=Qt[0];for(ft=0;ft<2;ft++){var be=Y+(ft?1:-1)*B/2,ve=Rt.x+se*be,Vt=Rt.z+we*be,Ae=(Zt*2+ft)*3;yt[Ae]=ve,yt[Ae+1]=st(ve,Vt)+dt,yt[Ae+2]=Vt,Ut[Ae+1]=1}if(Zt<Q){var Te=Zt*2;Dt.push(Te,Te+1,Te+2,Te+1,Te+3,Te+2)}}var Ht=new qe;Ht.setAttribute("position",new Xe(yt,3)),Ht.setAttribute("normal",new Xe(Ut,3)),Ht.setIndex(Dt);var Kt=new pe({color:et,side:En,polygonOffset:!0,polygonOffsetFactor:-lt,polygonOffsetUnits:-lt});return new Wt(Ht,Kt)}(function(){var I=k/2;h.add(zt(0,Bt,k,0,"#464B53",.05,2)),[I-.07,-(I-.07),.045,-.045].forEach(function(ve,Vt){h.add(zt(0,Bt,Vt<2?.05:.03,ve,Vt<2?"#FFFFFF":"#F2C94C",.056,3))});for(var N=Math.floor(Bt/.9),B=new Ye(new cn(.4,.04).rotateX(-Math.PI/2),new Ve({color:"#FFFFFF",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),N*2),Y=new Ue,et=0;et<N;et++)for(var dt=0;dt<2;dt++){var lt=.5+et*.9,Q=t.puntoA(lt),yt=St(lt),Ut=(dt?1:-1)*.5,Dt=Q.x-yt[1]*Ut,Zt=Q.z+yt[0]*Ut;Y.position.set(Dt,st(Dt,Zt)+.058,Zt),Y.rotation.set(0,Math.atan2(-yt[1],yt[0]),0),Y.updateMatrix(),B.setMatrixAt(et*2+dt,Y.matrix)}h.add(B);var ft=Math.floor(Bt/2.2),jt=new Ye(new tn(.02,.025,.6,5).translate(0,.3,0),new pe({color:"#8B929A"}),ft),Rt=new Ye(new Me(.16,.035,.05).translate(.06,.6,0),new Ve({color:"#FFF3C8"}),ft),Qt=new Ue;for(et=0;et<ft;et++){lt=1.2+et*2.2,Q=t.puntoA(lt),yt=St(lt);var se=et%2?1:-1,we=-yt[1]*se*(I+.16),be=yt[0]*se*(I+.16);Qt.position.set(Q.x+we,st(Q.x+we,Q.z+be),Q.z+be),Qt.rotation.set(0,Math.atan2(-be,-we),0),Qt.updateMatrix(),jt.setMatrixAt(et,Qt.matrix),Rt.setMatrixAt(et,Qt.matrix)}h.add(jt,Rt)})(),(function(){var I=[],N=[],B=[],Y,et,dt,lt,Q,yt,Ut,Dt=0;for(Y=.8;Y<Bt+4;Y+=.75)for(lt=t.puntoA(Y),Q=St(Y),et=-1;et<=1;et+=2){Dt++;var Zt=ge(Y*3.7,et+9);Zt<.34?(dt=(k/2+.9+ge(Y,et*3)*1.4)*et,yt=lt.x-Q[1]*dt,Ut=lt.z+Q[0]*dt,It(yt,Ut)>k/2+.55&&Math.hypot(yt-qt.x,Ut-qt.z)>2.6&&I.push([yt,Ut,.8+ge(Y*5,et)*.7])):Zt<.62?(dt=(k/2+.45+ge(Y*2,et*7)*2.2)*et,yt=lt.x-Q[1]*dt,Ut=lt.z+Q[0]*dt,It(yt,Ut)>k/2+.3&&Math.hypot(yt-qt.x,Ut-qt.z)>2.6&&N.push([yt,Ut,.5+ge(Y,et*11)*.7])):Zt>.965&&Y>8&&(dt=(k/2+2.6+ge(Y*9,et)*2.2)*et,yt=lt.x-Q[1]*dt,Ut=lt.z+Q[0]*dt,Math.hypot(yt-qt.x,Ut-qt.z)>4.2&&It(yt,Ut)>k/2+1.8&&B.push([yt,Ut,Math.atan2(-Q[1],Q[0]),.9+ge(Y*4,et)*1.2,.7+ge(et,Y)*.6,ge(Y,et*5)]))}var ft=Dh(new tn(.02,.03,.12,5).translate(0,.06,0),new tn(.03,.16,1,6).translate(0,.62,0)),jt=new Ye(ft,new pe({flatShading:!0}),Math.max(1,I.length)),Rt=new Ue,Qt=new te;I.forEach(function(Xt,xe){Rt.position.set(Xt[0],st(Xt[0],Xt[1])-.01,Xt[1]),Rt.scale.set(Xt[2],Xt[2]*1.15,Xt[2]),Rt.rotation.set(0,Xt[0]*7,0),Rt.updateMatrix(),jt.setMatrixAt(xe,Rt.matrix),Qt.setHSL(.27+ge(xe,3)*.06,.5,.3+ge(xe,8)*.1),jt.setColorAt(xe,Qt)}),jt.count=I.length;var se=new Ye(new li(.2,5,4).translate(0,.12,0),new pe({flatShading:!0}),Math.max(1,N.length));N.forEach(function(Xt,xe){Rt.position.set(Xt[0],st(Xt[0],Xt[1])-.02,Xt[1]),Rt.scale.set(Xt[2],Xt[2]*.8,Xt[2]*1.2),Rt.rotation.set(0,xe,0),Rt.updateMatrix(),se.setMatrixAt(xe,Rt.matrix),Qt.setHSL(.22+ge(xe,2)*.08,.4,.32+ge(xe,6)*.1),se.setColorAt(xe,Qt)}),se.count=N.length;var we=new Ye(new Me(1,.3,.6).translate(0,.15,0),new pe({flatShading:!0}),Math.max(1,B.length));B.forEach(function(Xt,xe){Rt.position.set(Xt[0],st(Xt[0],Xt[1]),Xt[1]),Rt.rotation.set(0,Xt[2],0),Rt.scale.set(Xt[3],Xt[4],1),Rt.updateMatrix(),we.setMatrixAt(xe,Rt.matrix),Qt.setHSL(.1+Xt[5]*.05,.12,.62+Xt[5]*.15),we.setColorAt(xe,Qt)}),we.count=B.length,h.add(jt,se,we);var be=[];for(g=2;g<m-2;g+=1)for(E=2;E<p-2;E+=1){var ve=Math.abs(E/(p-1)-.5)*2,Vt=Math.abs(g/(m-1)-.5)*2;if(!(ve>.8||Vt>.8)){var Ae=t.el[g*p+E];if(!(Ae>=290||Ae<25)&&!(ge(E*1.3,g*2.1)>.055)){var Te=v[(g*p+E)*3]+(ge(E,g*3)-.5)*.5,Ht=v[(g*p+E)*3+2]+(ge(E*3,g)-.5)*.5;It(Te,Ht)<k/2+1.2||Math.hypot(Te-qt.x,Ht-qt.z)<3.2||be.push([Te,Ht])}}}var Kt=new Ye(new li(.17,5,4).translate(0,.28,0),new pe({flatShading:!0}),Math.max(1,be.length));be.forEach(function(Xt,xe){var Fe=.8+ge(xe,4)*.8;Rt.position.set(Xt[0],st(Xt[0],Xt[1])-.02,Xt[1]),Rt.scale.set(Fe,Fe,Fe),Rt.rotation.set(0,xe,0),Rt.updateMatrix(),Kt.setMatrixAt(xe,Rt.matrix),Qt.setHSL(.24+ge(xe,9)*.1,.42,.34+ge(xe,1)*.12),Kt.setColorAt(xe,Qt)}),Kt.count=be.length,h.add(Kt)})();var Pt,ee,kt,oe;(function(){function I(){kt=kt||document.createElement("canvas"),kt.width=512,kt.height=170;var Fe=kt.getContext("2d");return Fe.fillStyle="#EDEDED",Fe.fillRect(0,0,512,170),Fe}var N=I();N.fillStyle="#1D2A23",N.font="900 80px Georgia,serif",N.textAlign="center",N.textBaseline="middle",N.fillText("MIZETA",256,70),N.fillStyle="#F28A1D",N.fillRect(110,124,292,8),Pt=new Ti(kt),Pt.colorSpace=Qe,oe=document.createElement("canvas"),oe.width=1024,oe.height=220;function B(Fe){var ke=oe.getContext("2d");if(ke.fillStyle="#1F2A32",ke.fillRect(0,0,1024,220),ke.fillStyle="#F28A1D",ke.fillRect(0,0,18,220),ke.fillRect(0,196,1024,24),ke.fillStyle="#FFFFFF",ke.font="800 124px system-ui,Arial,sans-serif",ke.textAlign="left",ke.textBaseline="middle",ke.fillText("MIZETA",52,92),ke.fillStyle="#F7C98E",ke.font="600 34px system-ui,Arial,sans-serif",ke.fillText("TRASPORTI E LOGISTICA",56,168),Fe){var Ys=176,Qi=Ys*Fe.width/Fe.height;ke.fillStyle="#EDEDED",ke.fillRect(1024-Qi-40,22,Qi+20,Ys+0),ke.drawImage(Fe,1024-Qi-30,22,Qi,Ys)}}B(null),ee=new Ti(oe),ee.colorSpace=Qe;var Y=new Image;Y.onload=function(){var Fe=I();Fe.drawImage(Y,0,0,512,170),Pt.needsUpdate=!0,B(Y),ee.needsUpdate=!0,xt=!0,At()},Y.src="assets/mizeta.webp";var et=new un,dt=qt.t,lt=new pe({color:"#E9E6DC",flatShading:!0}),Q=new pe({color:"#8E9AA3",flatShading:!0}),yt=new Wt(new cn(4.6,3.8).rotateX(-Math.PI/2),new pe({color:"#8D9197",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));yt.position.set(0,.05,-.2),et.add(yt);var Ut=new Wt(new Me(3.2,.78,1.5),lt);Ut.position.set(.2,.4,.9),et.add(Ut);var Dt=new Wt(new Me(3.3,.06,1.6),Q);Dt.position.set(.2,.81,.9),et.add(Dt);var Zt=new Wt(new Me(.9,.62,.9),new pe({color:"#F28A1D",flatShading:!0}));Zt.position.set(-1.75,.33,.55),et.add(Zt);var ft=new Wt(new cn(.78,.2),new Ve({color:"#7FB6D5"}));ft.position.set(-1.75,.38,.09),ft.rotation.y=Math.PI,et.add(ft);for(var jt=new pe({color:"#39434B",flatShading:!0}),Rt=0;Rt<5;Rt++){var Qt=new Wt(new Me(.34,.34,.04),jt);Qt.position.set(-.7+Rt*.62,.2,.14),et.add(Qt)}var se=new Wt(new cn(2.9,.62),new Ve({map:ee}));se.position.set(.2,.62,.13),se.rotation.y=Math.PI,et.add(se);function we(Fe,ke,Ys,Qi){var xi=new un,Uh=new Wt(new Me(1.5,.46,.52),new pe({color:"#F4F1E8",flatShading:!0}));Uh.position.set(-.2,.34,0),xi.add(Uh);var Fh=new Wt(new Me(.42,.4,.5),new pe({color:Fe,flatShading:!0}));Fh.position.set(.76,.3,0),xi.add(Fh);var Oh=new Wt(new Me(.02,.2,.44),new Ve({color:"#7FB6D5"}));return Oh.position.set(.975,.38,0),xi.add(Oh),[-.6,.15,.75].forEach(function(ha){[-1,1].forEach(function(Zs){var Bh=new Wt(be,ve);Bh.position.set(ha,.1,Zs*.25),xi.add(Bh)})}),[-1,1].forEach(function(ha){var Zs=new Wt(new cn(.8,.26),new Ve({map:Pt}));Zs.position.set(-.2,.38,ha*.2625),ha<0&&(Zs.rotation.y=Math.PI),xi.add(Zs)}),xi.position.set(ke,.05,Ys),xi.rotation.y=Qi,xi}var be=new tn(.1,.1,.07,8).rotateX(Math.PI/2),ve=new pe({color:"#222"});et.add(we("#F28A1D",-.9,-.6,Math.PI/2-0),we("#F28A1D",0,-.75,Math.PI/2),we("#F28A1D",1.1,-.55,Math.PI/2+.05));var Vt=new un;[-.62,.62].forEach(function(Fe){var ke=new Wt(new Me(.06,1.5,.06),new pe({color:"#2A2F36"}));ke.position.set(Fe,.75,0),Vt.add(ke)});var Ae=new Wt(new Me(1.5,.52,.05),new pe({color:"#EDEDED"}));Ae.position.set(0,1.55,0),Vt.add(Ae);var Te=new Wt(new cn(1.44,.48),new Ve({map:Pt}));Te.position.set(0,1.55,.03),Vt.add(Te);var Ht=Te.clone();Ht.position.z=-.03,Ht.rotation.y=Math.PI,Vt.add(Ht);var Kt=t.puntoA(vt+3.4),Xt=St(vt+3.4),xe=k/2+.9;Vt.position.set(Kt.x-Xt[1]*xe,st(Kt.x-Xt[1]*xe,Kt.z+Xt[0]*xe),Kt.z+Xt[0]*xe),Vt.rotation.y=Math.atan2(-Xt[0],-Xt[1])+Math.PI/2*0,h.add(Vt),et.position.set(qt.x,st(qt.x,qt.z),qt.z),et.rotation.y=Math.atan2(-dt[1],dt[0]),h.add(et)})();var he=(function(){var I=Dh(new Me(.85,.24,.44).translate(0,.19,0),new Me(.42,.18,.38).translate(-.05,.4,0)),N=["#E8E4D8","#2E4057","#C74B50","#5E8C6A","#D9A441","#7C8591","#F2F2F2","#3A3F47"],B=[],Y=5,et=8,dt=2,lt=3,Q;for(Q=0;Q<Y;Q++)B.push({k:0,dir:1,v:3+ge(Q,5)*1.6,a:ge(Q,9)*40,off:.72,c:Q});for(Q=0;Q<et;Q++)B.push({k:0,dir:-1,v:4.5+ge(Q,7)*3,a:ge(Q,3)*40,off:Q%2?-.3:-.72,c:Q+3});for(Q=0;Q<dt;Q++)B.push({k:1,dir:1,v:2.4+ge(Q,2),a:8+ge(Q,4)*30,off:.72,c:Q});for(Q=0;Q<lt;Q++)B.push({k:1,dir:-1,v:3.4+ge(Q,6)*1.5,a:5+ge(Q,8)*30,off:-.72,c:Q});var yt=B.filter(function(we){return!we.k}),Ut=B.filter(function(we){return we.k}),Dt=new Ye(I,new pe({flatShading:!0}),yt.length),Zt=new Ye(new Me(1.5,.46,.5).translate(-.1,.34,0),new pe({color:"#F4F1E8",flatShading:!0}),Ut.length),ft=new Ye(new Me(.42,.4,.48).translate(.86,.3,0),new pe({color:"#F28A1D",flatShading:!0}),Ut.length),jt=new te;yt.forEach(function(we,be){jt.set(N[we.c%N.length]),Dt.setColorAt(be,jt)}),h.add(Dt,Zt,ft);var Rt=new Ue,Qt=Math.max(8,Bt-1.5);function se(we,be,ve,Vt,Ae){var Te=((Vt.a+Vt.dir*Vt.v*Ae)%Qt+Qt)%Qt,Ht=Vt.dir>0?.6+Te:Bt-.6-Te,Kt=t.puntoA(Ht),Xt=St(Ht),xe=Kt.x-Xt[1]*Vt.off,Fe=Kt.z+Xt[0]*Vt.off;Rt.position.set(xe,st(xe,Fe)+.055,Fe),Rt.rotation.set(0,Math.atan2(-Xt[1],Xt[0])+(Vt.dir<0?Math.PI:0),0),Rt.scale.setScalar(Vt.k?1:1.15),Rt.updateMatrix(),we.setMatrixAt(ve,Rt.matrix)}return function(we){yt.forEach(function(be,ve){se(Dt,yt,ve,be,we)}),Ut.forEach(function(be,ve){se(Zt,Ut,ve,be,we),se(ft,Ut,ve,be,we)}),Dt.instanceMatrix.needsUpdate=!0,Zt.instanceMatrix.needsUpdate=!0,ft.instanceMatrix.needsUpdate=!0}})(),ue=new un,U,_e=0,le=new O,de,Tt;(function(){var I=t.puntoA(ht),N=St(ht),B=new pe({color:"#8B929A",flatShading:!0}),Y=new pe({color:"#2A2F36",flatShading:!0});[-1,1].forEach(function(yt){var Ut=new Wt(new Me(.08,1.35,.08),B);Ut.position.set(0,.675,yt*(k/2+.2)),ue.add(Ut)});var et=new Wt(new Me(.16,.13,k+.5),B);et.position.y=1.35,ue.add(et),[-.26,.26].forEach(function(yt){var Ut=new Wt(new Me(.24,.17,.2),Y);Ut.position.set(.04,1.2,yt),ue.add(Ut);var Dt=new Wt(new Me(.03,.1,.1),new Ve({color:"#DDEBFF"}));Dt.position.set(.17,1.2,yt),ue.add(Dt)});var dt=document.createElement("canvas");dt.width=dt.height=64;var lt=dt.getContext("2d"),Q=lt.createRadialGradient(32,32,0,32,32,32);Q.addColorStop(0,"rgba(255,255,255,1)"),Q.addColorStop(.25,"rgba(255,250,225,.85)"),Q.addColorStop(1,"rgba(255,240,200,0)"),lt.fillStyle=Q,lt.fillRect(0,0,64,64),U=new wr(new Rs({map:new Ti(dt),transparent:!0,depthWrite:!1,blending:Kr,opacity:0})),U.position.set(.3,1.2,0),U.scale.setScalar(.01),ue.add(U),ue.position.set(I.x,st(I.x,I.z)+.05,I.z),ue.rotation.y=Math.atan2(-N[1],N[0]),h.add(ue),le.set(I.x,st(I.x,I.z)+1.8,I.z),de=document.createElement("div"),de.style.cssText="position:absolute;left:0;top:0;z-index:19;pointer-events:none;opacity:0;transition:opacity .25s,background .15s;will-change:transform;padding:4px 9px;border-radius:9px;font:700 11px/1 system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#27382b;white-space:nowrap",de.textContent="Autovelox",i.appendChild(de),Tt=document.createElement("div"),Tt.style.cssText="position:absolute;inset:0;z-index:30;pointer-events:none;background:#fff;opacity:0",i.appendChild(Tt)})();function De(){_e=performance.now(),!s&&Tt.animate&&Tt.animate([{opacity:0},{opacity:.5,offset:.1},{opacity:0}],{duration:480,easing:"ease-out"}),de.textContent="Multa!",de.style.background="#A22B3C"}var Yt="";function ne(){var I=$&&Math.abs(ut-ht)<11,N=ut>=ht?"Multa!":"Autovelox",B=(I?"1":"0")+N;B!==Yt&&(Yt=B,de.style.opacity=I?1:0,N!==de.textContent&&(de.textContent=N,de.style.background=N==="Multa!"?"#A22B3C":"#27382b"))}var T=t.tappe.map(function(I,N){var B=new un,Y=N===t.tappe.length-1,et=N===0,dt=I.m*e/1e3,lt=N>=Ft[0]&&N<=Ft[1];if(Y){[[1,0,1.5],[.8,.9,1.3],[.6,1.6,1.1]].forEach(function(ve){var Vt=new Wt(new Ci(ve[0],ve[2],7),new pe({color:"#1E5A43",flatShading:!0}));Vt.position.y=ve[1]+ve[2]/2+.3,B.add(Vt)});var Q=new Wt(new li(.28,8,6),new Ve({color:"#E2A93B"}));Q.position.y=3.25,B.add(Q);var yt=new Wt(new tn(.18,.18,.4,6),new pe({color:"#6b4a2f"}));yt.position.y=.2,B.add(yt)}else if(et){var Ut=new pe({color:"#F6ECD8",flatShading:!0}),Dt=St(.2),Zt=k/2+.3;[-Zt,Zt].forEach(function(ve){var Vt=new Wt(new Me(.16,1.2,.16),Ut);Vt.position.set(0,.6,ve),B.add(Vt)});var ft=new Wt(new Me(.4,.22,Zt*2+.3),new pe({color:"#A22B3C",flatShading:!0}));ft.position.y=1.3,B.add(ft);var jt=new Wt(new Me(.5,.5,.26),Ut);jt.position.set(0,.25,0),B.add(jt);var Rt=new Wt(new Me(.64,.05,.38),new pe({color:"#A22B3C"}));Rt.position.set(0,.52,0),B.add(Rt);var Qt=new Wt(new tn(.04,.04,2,5),new pe({color:"#2A2A2A"}));Qt.position.set(0,1,Zt+.35),B.add(Qt);var se=new Wt(new cn(.9,.55),new Ve({color:"#E2A93B",side:2}));se.position.set(.47,1.75,Zt+.35),B.add(se),B.rotation.y=Math.atan2(-Dt[1],Dt[0])}else{var we=new Wt(new tn(.05,.05,1.5,5),new pe({color:"#2A2A2A"}));we.position.y=.75,B.add(we);var be=new Wt(new li(.3,8,6),new pe({color:lt?"#E2A93B":"#FFFBF2"}));be.position.y=1.6,B.add(be)}return B.position.set(I.x,dt,I.z),h.add(B),{g:B,top:Y?3.7:et?2.4:1.9,y0:dt}}),x=new un;(function(){var I=new pe({color:"#A22B3C",flatShading:!0}),N=new pe({color:"#15181C",flatShading:!0}),B=new pe({color:"#16212B",flatShading:!0}),Y=new pe({color:"#F6ECD8",flatShading:!0}),et=new Ri;[[-.62,.1],[.62,.1],[.655,.17],[.63,.24],[.5,.285],[.25,.33],[.06,.49],[-.12,.525],[-.34,.47],[-.54,.365],[-.625,.3]].forEach(function(Ht,Kt){Kt?et.lineTo(Ht[0],Ht[1]):et.moveTo(Ht[0],Ht[1])});var dt=new zr(et,{depth:.46,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:1,steps:1});dt.translate(0,0,-.23),x.add(new Wt(dt,I));var lt=new Ri;[[.16,.34],[.04,.46],[-.11,.488],[-.3,.44],[-.46,.365],[-.2,.34]].forEach(function(Ht,Kt){Kt?lt.lineTo(Ht[0],Ht[1]):lt.moveTo(Ht[0],Ht[1])});var Q=new kr(lt);[1,-1].forEach(function(Ht){var Kt=new Wt(Q,B);Kt.position.z=Ht*.2565,Ht<0&&(Kt.rotation.y=Math.PI),x.add(Kt)});var yt=new Wt(new Me(.27,.012,.4),B);yt.position.set(.155,.415,0),yt.rotation.z=-.72,x.add(yt),[1,-1].forEach(function(Ht){var Kt=new Wt(new Me(.5,.17,.075),I);Kt.position.set(-.28,.215,Ht*.285),x.add(Kt);var Xt=new Wt(new Me(.36,.11,.05),I);Xt.position.set(.4,.2,Ht*.262),x.add(Xt);var xe=new Wt(new Me(.05,.04,.04),I);xe.position.set(.1,.375,Ht*.285),x.add(xe)});var Ut=new tn(.13,.13,.1,10).rotateX(Math.PI/2),Dt=new tn(.145,.145,.135,10).rotateX(Math.PI/2),Zt=new tn(.085,.085,.108,8).rotateX(Math.PI/2),ft=new tn(.095,.095,.14,8).rotateX(Math.PI/2),jt=new pe({color:"#C9CED4",flatShading:!0});[1,-1].forEach(function(Ht){var Kt=new Wt(Ut,N);Kt.position.set(.4,.13,Ht*.275),x.add(Kt);var Xt=new Wt(Zt,jt);Xt.position.copy(Kt.position),x.add(Xt);var xe=new Wt(Dt,N);xe.position.set(-.37,.145,Ht*.305),x.add(xe);var Fe=new Wt(ft,jt);Fe.position.copy(xe.position),x.add(Fe)}),[1,-1].forEach(function(Ht){var Kt=new Wt(new Me(.03,.14,.02),N);Kt.position.set(-.52,.5,Ht*.17),Kt.rotation.z=.25,x.add(Kt);var Xt=new Wt(new Me(.19,.075,.014),I);Xt.position.set(-.575,.585,Ht*.325),x.add(Xt);var xe=new Wt(new tn(.05,.05,.02,10).rotateZ(Math.PI/2),new Ve({color:"#FFF3B0"}));xe.position.set(.62,.265,Ht*.17),x.add(xe)});var Rt=new Wt(new Me(.15,.02,.64),N);Rt.position.set(-.575,.585,0),x.add(Rt);var Qt=new Wt(new Me(.15,.016,.56),N);Qt.position.set(.645,.095,0),x.add(Qt);var se=new Wt(new Me(.012,.03,.46),new Ve({color:"#FF2A3C"}));se.position.set(-.64,.27,0),x.add(se);var we=new Wt(new Is(.62,10).rotateX(-Math.PI/2).scale(1,1,.62),new Ve({color:"#27382b",transparent:!0,opacity:.28,depthWrite:!1}));we.position.y=.03,x.add(we);var be=document.createElement("canvas");be.width=be.height=64;var ve=be.getContext("2d");ve.fillStyle="#fff",ve.beginPath(),ve.arc(32,32,30,0,6.3),ve.fill(),ve.fillStyle="#111",ve.font="800 34px Georgia,serif",ve.textAlign="center",ve.textBaseline="middle",ve.fillText("19",32,35);var Vt=new Ti(be);Vt.colorSpace=Qe;var Ae=new Ve({map:Vt}),Te=new Wt(new cn(.15,.15).rotateX(-Math.PI/2),Ae);Te.position.set(-.06,.532,0),x.add(Te),[1,-1].forEach(function(Ht){var Kt=new Wt(new cn(.17,.17),Ae);Kt.position.set(-.02,.215,Ht*.2585),Ht<0&&(Kt.rotation.y=Math.PI),x.add(Kt)})})(),x.scale.setScalar(1.2),h.add(x);var V=n.pinsEl,pt=[];r.forEach(function(I,N){var B=document.createElement("button");B.type="button",B.className="pin",B.setAttribute("aria-label",I.n+", "+I.h),B.innerHTML='<span class="num">'+(N+1)+'</span><span class="et"><b></b><small></small></span>',B.querySelector("b").textContent=I.n,B.querySelector("small").textContent=I.h,B.addEventListener("click",function(Y){Y.stopPropagation(),n.onPick(N)}),V.appendChild(B),pt.push(B)});var tt=new Tl(u,o.domElement);tt.enableDamping=!0,tt.dampingFactor=.09,tt.rotateSpeed=.7,tt.zoomSpeed=.8,tt.minDistance=3,tt.maxDistance=135,tt.minPolarAngle=.12,tt.maxPolarAngle=1.38,tt.screenSpacePanning=!1;var ut=0,Ct=0,$=!1,at=!1,mt=null,R=0,nt=0,j=!0,wt=!1,xt=!0,gt=new O,Gt=new te,me=new te,bt="",Jt="",fe=0;function Nt(I){I&&$&&Yn(!1),wt=!!I,tt.enabled=wt&&!$,o.domElement.style.touchAction=wt?"none":"pan-y",n.onMode&&n.onMode(wt)}Nt(!1);function Ce(){var I=tt.target;I.x=Math.max(-t.SX/2,Math.min(t.SX/2,I.x)),I.z=Math.max(-t.SZ/2,Math.min(t.SZ/2,I.z))}tt.addEventListener("change",function(){Ce(),At()});function He(I){return I<.5?4*I*I*I:1-Math.pow(-2*I+2,3)/2}function Tn(I,N,B){s&&(I=1),mt={t0:performance.now(),ms:I,fn:N,fine:B},At()}function Hs(I,N,B,Y,et){var dt=u.position.clone(),lt=tt.target.clone();Y===void 0&&(Y=Math.atan2(dt.x-lt.x,dt.z-lt.z));var Q=new O(I.x+Math.sin(B)*Math.sin(Y)*N,I.y+Math.cos(B)*N,I.z+Math.sin(B)*Math.cos(Y)*N);Tn(et||1300,function(yt){tt.target.lerpVectors(lt,I,yt),u.position.lerpVectors(dt,Q,yt),u.position.y+=Math.sin(yt*Math.PI)*N*.25})}var Sn={t:new O(0,.5,0),d:112,pol:.78,az:.2};function Rl(){$&&Yn(!1),Hs(Sn.t,Sn.d,Sn.pol,Sn.az,1500)}function Ki(I){var N=t.orologio(ut),B=dy(N,Gt,me);f.copy(Gt),h.fog.color.copy(Gt),w.color.copy(me);var Y=tt.target.x,et=tt.target.z;w.position.set(Y+Math.sin(B.az)*Math.cos(B.el)*60,Math.sin(B.el)*60+4,et-Math.cos(B.az)*Math.cos(B.el)*60),w.target.position.set(Y,0,et),w.target.updateMatrixWorld();var dt=Gt.getHexString();dt!==Jt&&(Jt=dt,i.style.setProperty("--cielo","#"+dt));var lt=va(N);lt!==bt&&(bt=lt,n.onClock&&n.onClock(lt,N))}function Ws(I){var N=Bt-1.8;return I<N?.3:I<Bt?.3*(1-(I-N)/1.8):0}function Cn(I){var N=t.puntoA(ut),B=t.puntoA(ut+.4),Y=Ws(ut),et=Ws(ut+.4),dt=St(ut),lt=St(ut+.4),Q=N.x-dt[1]*Y,yt=N.z+dt[0]*Y,Ut=B.x-lt[1]*et,Dt=B.z+lt[0]*et,Zt=N.m*e/1e3+.06+(Y?st(Q,yt)-st(N.x,N.z):0),ft=B.m*e/1e3+.06+(et?st(Ut,Dt)-st(B.x,B.z):0);x.position.set(Q,Zt,yt);var jt=Ut-Q,Rt=Dt-yt;jt*jt+Rt*Rt>1e-8&&(x.rotation.set(0,Math.atan2(-Rt,jt),0),x.rotateZ(Math.atan2(ft-Zt,Math.hypot(jt,Rt)))),n.onS&&(!$||!I||I-fe>90)&&(fe=I||0,n.onS(ut))}function fi(I){ut=Math.max(0,Math.min(t.total,I)),Cn(),Ki(),At()}function Xs(I,N){if($&&N!==!1&&Yn(!1),Ct=I,fi(t.tappe[I].s),pt.forEach(function(et,dt){et.classList.toggle("sel",dt===I)}),N!==!1){var B=t.tappe[I],Y=new O(B.x,B.m*e/1e3,B.z);Hs(Y,I===0||I===t.tappe.length-1?26:15,.95,void 0,1400)}n.onSel&&n.onSel(I),xt=!0,At()}function la(I){$&&Yn(!1);var N=t.tappe[I],B=t.tappe[Math.max(0,I-1)],Y=new O(N.x-.4,N.m*e/1e3+1.15,N.z+.6),et=new O(B.x,B.m*e/1e3+1.6,B.z),dt=u.position.clone(),lt=tt.target.clone();fi(N.s),Ct=I,pt.forEach(function(Q,yt){Q.classList.toggle("sel",yt===I)}),n.onSel&&n.onSel(I),Tn(1900,function(Q){tt.target.lerpVectors(lt,et,Q),u.position.lerpVectors(dt,Y,Q),u.position.y+=Math.sin(Q*Math.PI)*6})}var pi=0,mi=0,qs=new O,gi=new O;function Yn(I){if(I===void 0&&(I=!$),I===$)return $;if($=I,tt.enabled=wt&&!$,I){ut>t.total-2&&fi(0),at=!0,mt=null,pi=performance.now(),J=0,F=0;var N=t.puntoA(ut),B=t.puntoA(ut+3);mi=Math.atan2(B.x-N.x,B.z-N.z),n.onGuida&&n.onGuida(!0)}else at=!1,n.onGuida&&n.onGuida(!1);return At(),$}function ca(I){var N=Math.min(.08,Math.max(.001,(I-pi)/1e3));pi=I;var B=ut;ut+=t.total/n.durata*N,B<ht&&ut>=ht&&De(),ut>=t.total&&(ut=t.total,Yn(!1)),Cn(I),Ki();var Y=t.puntoA(ut),et=t.puntoA(ut+3.2),dt=t.puntoA(ut+6),lt=Math.atan2(et.x-Y.x,et.z-Y.z);mi+=Nh(mi,lt)*(s?1:1-Math.exp(-N*2.2));var Q=Math.sin(mi),yt=Math.cos(mi),Ut=Y.m*e/1e3;qs.set(Y.x-Q*11,Ut+7.2,Y.z-yt*11),gi.set(dt.x*.35+et.x*.65,et.m*e/1e3+.2,dt.z*.35+et.z*.65);var Dt=s?1:1-Math.exp(-N*4),Zt=s?1:1-Math.exp(-N*5.5);u.position.lerp(qs,Dt),tt.target.lerp(gi,Zt);var ft=0,jt=1e9;t.tappe.forEach(function(Rt,Qt){var se=Math.abs(Rt.s-ut);se<jt&&(jt=se,ft=Qt)}),ft!==Ct&&jt<1.5&&(Ct=ft,pt.forEach(function(Rt,Qt){Rt.classList.toggle("sel",Qt===ft)}),n.onSel&&n.onSel(ft))}var _i=1,Oi=1;function $i(){var I=i.getBoundingClientRect();_i=Math.max(1,Math.round(I.width)),Oi=Math.max(1,Math.round(I.height)),o.setSize(_i,Oi,!1),u.aspect=_i/Oi,u.updateProjectionMatrix(),xt=!0,At()}function Pl(){t.tappe.forEach(function(I,N){gt.set(I.x,T[N].y0+T[N].top,I.z).project(u);var B=pt[N];if(gt.z>1||gt.z<-1){B.style.display="none";return}B.style.display="",B.style.transform="translate3d("+((gt.x*.5+.5)*_i).toFixed(1)+"px,"+((-gt.y*.5+.5)*Oi).toFixed(1)+"px,0) translate(-50%,-100%)",B.style.zIndex=N===Ct?20:Math.round(10+gt.z*5)})}function ji(){var I=u.position.distanceTo(tt.target);if(h.fog.near=Math.max(8,I*.8),h.fog.far=I*3.4+60,_e){var N=(performance.now()-_e)/520;N>=1?(_e=0,U.material.opacity=0,U.scale.setScalar(.01)):(U.material.opacity=1-N*N,U.scale.setScalar(.4+3.6*Math.sqrt(N)))}ne(),he(performance.now()/1e3),o.render(h,u),Pl(),gt.copy(le).project(u),gt.z<1&&gt.z>-1&&Math.abs(gt.x)<.92&&gt.y>-.8&&gt.y<1?de.style.transform="translate3d("+((gt.x*.5+.5)*_i).toFixed(1)+"px,"+((-gt.y*.5+.5)*Oi).toFixed(1)+"px,0) translate(-50%,-100%)":(de.style.opacity=0,Yt="")}var M=0,F=0,J=0;function H(I){if(!window.__noAdapt){if(M&&(F+=I-M,J++,J>=24)){var N=F/J;F=0,J=0,N>26&&l>.86&&(l=Math.max(.85,l*.85),o.setPixelRatio(l),$i())}M=I}}function X(I){R=0;var N=tt.update();$&&ca(I);var B=N||$||mt||_e;if(mt){var Y=Math.min(1,(I-mt.t0)/mt.ms);if(mt.fn(He(Y)),Y>=1){var et=mt.fine;mt=null,et&&et()}}B||xt?(ji(),xt=!1,nt=0,B?H(I):M=0):(nt++,M=0),(B||nt<25)&&j&&!document.hidden&&!R&&(R=requestAnimationFrame(X))}function At(){nt=0,!R&&j&&!document.hidden&&(R=requestAnimationFrame(X))}return window.IntersectionObserver&&new IntersectionObserver(function(I){j=I[0].isIntersecting,j?(xt=!0,At()):$&&Yn(!1)}).observe(i),document.addEventListener("visibilitychange",function(){document.hidden||(xt=!0,At())}),window.ResizeObserver?new ResizeObserver($i).observe(i):window.addEventListener("resize",$i),o.domElement.addEventListener("webglcontextlost",function(I){I.preventDefault(),n.onPersa&&n.onPersa()}),$i(),(function(){var I=Sn.t,N=Sn.d,B=Sn.pol,Y=Sn.az;tt.target.copy(I),u.position.set(I.x+Math.sin(B)*Math.sin(Y)*N,I.y+Math.cos(B)*N,I.z+Math.sin(B)*Math.cos(Y)*N)})(),Cn(),Ki(),Xs(0,!1),ji(),{seleziona:Xs,setS:fi,guida:Yn,dallAlto:Rl,muovi:Nt,vista:la,inGuida:function(){return $},_debug:{camera:u,controls:tt,render:ji,kick:At,scene:h,renderer:o}}}window.MappaNatale={init:function(n){var t=Wu(n.terreno,n.stops),e={D:t,webgl:!1},i=null,s=null,r=0;function a(o){s&&s.set(o,r)}s=Xu(n.profiloCanvas,t,{caldo:n.caldo,onScrub:function(o){i?(i.inGuida()&&i.guida(!1),i.setS(o)):s.set(o,r)}});try{i=tp({wrap:n.canvasBox,pinsEl:n.pinsEl,stops:n.stops,ve:n.ve,durata:n.durata,caldo:n.caldo,reduced:n.reduced,onPick:function(o){i.seleziona(o,!0)},onSel:function(o){r=o,s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o)},onS:a,onClock:n.onClock,onMode:n.onMode,onGuida:n.onGuida,onPersa:function(){n.onFallback&&n.onFallback("persa")}},t),e.webgl=!0}catch(o){i=null,n.onFallback&&n.onFallback("webgl",o)}return s.set(0,0),e.vai=function(o){r=o,i?i.seleziona(o,!0):(s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o))},e.guida=function(o){return i?i.guida(o):!1},e.dallAlto=function(){i&&i.dallAlto()},e.muovi=function(o){i&&i.muovi(o)},e.vista=function(o){i&&i.vista(o)},e._scena=i,window.MappaNatale.ultima=e,e}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
