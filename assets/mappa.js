(()=>{var _f=Object.defineProperty;var xf=(n,t,e)=>t in n?_f(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Hn=(n,t,e)=>xf(n,typeof t!="symbol"?t+"":t,e);var lh=4,ch=0,hh=1,vf=2;function Ji(n){let t=n.length;for(;--t>=0;)n[t]=0}var yf=0,Sf=1,Mf=2,bf=29,El=256,wf=286,Al=30,Xh=19,qh=573,Yh=15,ol=16;var Zh=256,Jh=16,Kh=17,$h=18,Ef=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Af=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),dv=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),jh=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Tf=512,Qh=new Array(288*2);Ji(Qh);var tu=new Array(Al*2);Ji(tu);var vl=new Array(Tf);Ji(vl);var Tl=new Array(256);Ji(Tl);var eu=new Array(bf);Ji(eu);var nu=new Array(Al);Ji(nu);var iu=n=>n<256?vl[n]:vl[256+(n>>>7)],Xr=(n,t)=>{n.pending_buf[n.pending++]=t&255,n.pending_buf[n.pending++]=t>>>8&255},Qe=(n,t,e)=>{n.bi_valid>ol-e?(n.bi_buf|=t<<n.bi_valid&65535,Xr(n,n.bi_buf),n.bi_buf=t>>ol-n.bi_valid,n.bi_valid+=e-ol):(n.bi_buf|=t<<n.bi_valid&65535,n.bi_valid+=e)},Xn=(n,t,e)=>{Qe(n,e[t*2],e[t*2+1])},Cf=(n,t)=>{let e=0;do e|=n&1,n>>>=1,e<<=1;while(--t>0);return e>>>1};var Rf=(n,t)=>{let e=t.dyn_tree,i=t.max_code,s=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,c=t.stat_desc.max_length,l,h,m,d,u,x,w=0;for(d=0;d<=Yh;d++)n.bl_count[d]=0;for(e[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<qh;l++)h=n.heap[l],d=e[e[h*2+1]*2+1]+1,d>c&&(d=c,w++),e[h*2+1]=d,!(h>i)&&(n.bl_count[d]++,u=0,h>=o&&(u=a[h-o]),x=e[h*2],n.opt_len+=x*(d+u),r&&(n.static_len+=x*(s[h*2+1]+u)));if(w!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,w-=2}while(w>0);for(d=c;d!==0;d--)for(h=n.bl_count[d];h!==0;)m=n.heap[--l],!(m>i)&&(e[m*2+1]!==d&&(n.opt_len+=(d-e[m*2+1])*e[m*2],e[m*2+1]=d),h--)}},Pf=(n,t,e)=>{let i=new Array(16),s=0,r,a;for(r=1;r<=Yh;r++)s=s+e[r-1]<<1,i[r]=s;for(a=0;a<=t;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Cf(i[o]++,o))}};var If=n=>{let t;for(t=0;t<wf;t++)n.dyn_ltree[t*2]=0;for(t=0;t<Al;t++)n.dyn_dtree[t*2]=0;for(t=0;t<Xh;t++)n.bl_tree[t*2]=0;n.dyn_ltree[Zh*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},su=n=>{n.bi_valid>8?Xr(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},uh=(n,t,e,i)=>{let s=t*2,r=e*2;return n[s]<n[r]||n[s]===n[r]&&i[t]<=i[e]},ll=(n,t,e)=>{let i=n.heap[e],s=e<<1;for(;s<=n.heap_len&&(s<n.heap_len&&uh(t,n.heap[s+1],n.heap[s],n.depth)&&s++,!uh(t,i,n.heap[s],n.depth));)n.heap[e]=n.heap[s],e=s,s<<=1;n.heap[e]=i},dh=(n,t,e)=>{let i,s,r=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+r++]&255,i+=(n.pending_buf[n.sym_buf+r++]&255)<<8,s=n.pending_buf[n.sym_buf+r++],i===0?Xn(n,s,t):(a=Tl[s],Xn(n,a+El+1,t),o=Ef[a],o!==0&&(s-=eu[a],Qe(n,s,o)),i--,a=iu(i),Xn(n,a,e),o=Af[a],o!==0&&(i-=nu[a],Qe(n,i,o)));while(r<n.sym_next);Xn(n,Zh,t)},yl=(n,t)=>{let e=t.dyn_tree,i=t.stat_desc.static_tree,s=t.stat_desc.has_stree,r=t.stat_desc.elems,a,o,c=-1,l;for(n.heap_len=0,n.heap_max=qh,a=0;a<r;a++)e[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):e[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,e[l*2]=1,n.depth[l]=0,n.opt_len--,s&&(n.static_len-=i[l*2+1]);for(t.max_code=c,a=n.heap_len>>1;a>=1;a--)ll(n,e,a);l=r;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],ll(n,e,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,e[l*2]=e[a*2]+e[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,e[a*2+1]=e[o*2+1]=l,n.heap[1]=l++,ll(n,e,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],Rf(n,t),Pf(e,c,n.bl_count)},fh=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),t[(e+1)*2+1]=65535,i=0;i<=e;i++)r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)&&(o<l?n.bl_tree[r*2]+=o:r!==0?(r!==s&&n.bl_tree[r*2]++,n.bl_tree[Jh*2]++):o<=10?n.bl_tree[Kh*2]++:n.bl_tree[$h*2]++,o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))},ph=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=e;i++)if(r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)){if(o<l)do Xn(n,r,n.bl_tree);while(--o!==0);else r!==0?(r!==s&&(Xn(n,r,n.bl_tree),o--),Xn(n,Jh,n.bl_tree),Qe(n,o-3,2)):o<=10?(Xn(n,Kh,n.bl_tree),Qe(n,o-3,3)):(Xn(n,$h,n.bl_tree),Qe(n,o-11,7));o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}},Lf=n=>{let t;for(fh(n,n.dyn_ltree,n.l_desc.max_code),fh(n,n.dyn_dtree,n.d_desc.max_code),yl(n,n.bl_desc),t=Xh-1;t>=3&&n.bl_tree[jh[t]*2+1]===0;t--);return n.opt_len+=3*(t+1)+5+5+4,t},Df=(n,t,e,i)=>{let s;for(Qe(n,t-257,5),Qe(n,e-1,5),Qe(n,i-4,4),s=0;s<i;s++)Qe(n,n.bl_tree[jh[s]*2+1],3);ph(n,n.dyn_ltree,t-1),ph(n,n.dyn_dtree,e-1)},Nf=n=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&n.dyn_ltree[e*2]!==0)return ch;if(n.dyn_ltree[18]!==0||n.dyn_ltree[20]!==0||n.dyn_ltree[26]!==0)return hh;for(e=32;e<El;e++)if(n.dyn_ltree[e*2]!==0)return hh;return ch};var Sl=(n,t,e,i)=>{Qe(n,(yf<<1)+(i?1:0),3),su(n),Xr(n,e),Xr(n,~e),e&&n.pending_buf.set(n.window.subarray(t,t+e),n.pending),n.pending+=e};var Uf=(n,t,e,i)=>{let s,r,a=0;n.level>0?(n.strm.data_type===vf&&(n.strm.data_type=Nf(n)),yl(n,n.l_desc),yl(n,n.d_desc),a=Lf(n),s=n.opt_len+3+7>>>3,r=n.static_len+3+7>>>3,(r<=s||n.strategy===lh)&&(s=r)):s=r=e+5,e+4<=s&&t!==-1?Sl(n,t,e,i):n.strategy===lh||r===s?(Qe(n,(Sf<<1)+(i?1:0),3),dh(n,Qh,tu)):(Qe(n,(Mf<<1)+(i?1:0),3),Df(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),dh(n,n.dyn_ltree,n.dyn_dtree)),If(n),i&&su(n)},Fs=(n,t,e)=>(n.pending_buf[n.sym_buf+n.sym_next++]=t,n.pending_buf[n.sym_buf+n.sym_next++]=t>>8,n.pending_buf[n.sym_buf+n.sym_next++]=e,t===0?n.dyn_ltree[e*2]++:(n.matches++,t--,n.dyn_ltree[(Tl[e]+El+1)*2]++,n.dyn_dtree[iu(t)*2]++),n.sym_next===n.sym_end),qr=(n,t,e,i)=>{let s=n&65535|0,r=n>>>16&65535|0,a=0;for(;e!==0;){a=e>2e3?2e3:e,e-=a;do s=s+t[i++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0},Ff=()=>{let n=new Uint32Array(2048),t;for(let e=0;e<256;e++){t=e;for(let i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t}for(let e=0;e<256;e++){t=n[e];for(let i=256;i<256*8;i+=256)t=n[t&255]^t>>>8,n[i+e]=t}return n},Of=Ff(),_n=(n,t,e,i)=>{let s=Of,r=i+e,a=i;n^=-1;for(let o=r-7;a<o;a+=8)n^=t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24,n=s[1792+(n&255)]^s[1536+(n>>>8&255)]^s[1280+(n>>>16&255)]^s[1024+(n>>>24)]^s[768+t[a+4]]^s[512+t[a+5]]^s[256+t[a+6]]^s[t[a+7]];for(;a<r;a++)n=n>>>8^s[(n^t[a])&255];return n^-1},cl={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var ve=3,hl=258,In=262;var ci=1,Cl=2,Rl=3,Pl=4;var Bf=n=>{let t,e,i,s=n.w_size;t=n.hash_size,i=t;do e=n.head[--i],n.head[i]=e>=s?e-s:0;while(--t);t=s,i=t;do e=n.prev[--i],n.prev[i]=e>=s?e-s:0;while(--t)},Il=(n,t,e)=>(t<<n.hash_shift^e)&n.hash_mask,Zi=(n,t)=>{let e;if(n.legacy_hash)e=n.ins_h=Il(n,n.ins_h,n.window[t+ve-1]);else{let s=n.window,r=s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24;e=n.ins_h=Math.imul(r,66521)+66521>>>16&n.hash_mask}let i=n.prev[t&n.w_mask]=n.head[e];return n.head[e]=t,i},Ml=n=>{let t=n.state,e=t.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(n.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),n.next_out),n.next_out+=e,t.pending_out+=e,n.total_out+=e,n.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},Li=(n,t)=>{Uf(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,t),n.block_start=n.strstart,Ml(n.strm)};var bl=(n,t,e,i)=>{let s=n.avail_in;return s>i&&(s=i),s===0?0:(n.avail_in-=s,t.set(n.input.subarray(n.next_in,n.next_in+s),e),n.state.wrap===1?n.adler=qr(n.adler,t,s,e):n.state.wrap===2&&(n.adler=_n(n.adler,t,s,e)),n.next_in+=s,n.total_in+=s,s)},ru=(n,t)=>{let e=n.max_chain_length,i=n.strstart,s,r,a=n.prev_length,o=n.nice_match,c=n.strstart>n.w_size-In?n.strstart-(n.w_size-In):0,l=n.window,h=n.w_mask,m=n.prev,d=n.strstart+hl,u=l[i+a-1],x=l[i+a];n.prev_length>=n.good_match&&(e>>=2),o>n.lookahead&&(o=n.lookahead);do if(s=t,!(l[s+a]!==x||l[s+a-1]!==u||l[s]!==l[i]||l[++s]!==l[i+1])){i+=2,s++;do;while(l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&i<d);if(r=hl-(d-i),i=d-hl,r>a){if(n.match_start=t,a=r,r>=o)break;u=l[i+a-1],x=l[i+a]}}while((t=m[t&h])>c&&--e!==0);return a<=n.lookahead?a:n.lookahead},au=n=>{let t=n.w_size,e,i,s;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=t+(t-In)&&(n.window.set(n.window.subarray(t,t+t-i),0),n.match_start-=t,n.strstart-=t,n.block_start-=t,n.insert>n.strstart&&(n.insert=n.strstart),Bf(n),i+=t),n.strm.avail_in===0)break;if(e=bl(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=e,n.legacy_hash){if(n.lookahead+n.insert>=ve)for(s=n.strstart-n.insert,n.ins_h=n.window[s],n.ins_h=Il(n,n.ins_h,n.window[s+1]);n.insert&&(Zi(n,s),s++,n.insert--,!(n.lookahead+n.insert<ve)););}else if(n.lookahead+n.insert>ve)for(s=n.strstart-n.insert;n.insert&&(Zi(n,s),s++,n.insert--,!(n.lookahead+n.insert<=ve)););}while(n.lookahead<In&&n.strm.avail_in!==0)},zf=(n,t)=>{let e=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,s,r,a=0,o=n.strm.avail_in;do{if(i=65535,r=n.bi_valid+42>>3,n.strm.avail_out<r||(r=n.strm.avail_out-r,s=n.strstart-n.block_start,i>s+n.strm.avail_in&&(i=s+n.strm.avail_in),i>r&&(i=r),i<e&&(i===0&&t!==4||t===0||i!==s+n.strm.avail_in)))break;a=t===4&&i===s+n.strm.avail_in?1:0,Sl(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Ml(n.strm),s&&(s>i&&(s=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+s),n.strm.next_out),n.strm.next_out+=s,n.strm.avail_out-=s,n.strm.total_out+=s,n.block_start+=s,i-=s),i&&(bl(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?Pl:t!==0&&t!==4&&n.strm.avail_in===0&&n.strstart===n.block_start?Cl:(r=n.window_size-n.strstart,n.strm.avail_in>r&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,r+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),r>n.strm.avail_in&&(r=n.strm.avail_in),r&&(bl(n.strm,n.window,n.strstart,r),n.strstart+=r,n.insert+=r>n.w_size-n.insert?n.w_size-n.insert:r),n.high_water<n.strstart&&(n.high_water=n.strstart),r=n.bi_valid+42>>3,r=n.pending_buf_size-r>65535?65535:n.pending_buf_size-r,e=r>n.w_size?n.w_size:r,s=n.strstart-n.block_start,(s>=e||(s||t===4)&&t!==0&&n.strm.avail_in===0&&s<=r)&&(i=s>r?r:s,a=t===4&&n.strm.avail_in===0&&i===s?1:0,Sl(n,n.block_start,i,a),n.block_start+=i,Ml(n.strm)),a?Rl:ci)},ul=(n,t)=>{let e,i;for(;;){if(n.lookahead<In){if(au(n),n.lookahead<In&&t===0)return ci;if(n.lookahead===0)break}if(e=0,n.lookahead>=ve&&(e=Zi(n,n.strstart)),e!==0&&n.strstart-e<=n.w_size-In&&(n.match_length=ru(n,e)),n.match_length>=ve)if(i=Fs(n,n.strstart-n.match_start,n.match_length-ve),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=ve){n.match_length--;do n.strstart++,e=Zi(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=Il(n,n.ins_h,n.window[n.strstart+1]));else i=Fs(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(Li(n,!1),n.strm.avail_out===0))return ci}return n.insert=n.strstart<ve-1?n.strstart:ve-1,t===4?(Li(n,!0),n.strm.avail_out===0?Rl:Pl):n.sym_next&&(Li(n,!1),n.strm.avail_out===0)?ci:Cl},Yi=(n,t)=>{let e,i,s;for(;;){if(n.lookahead<In){if(au(n),n.lookahead<In&&t===0)return ci;if(n.lookahead===0)break}if(e=0,n.lookahead>=ve&&(e=Zi(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=ve-1,e!==0&&n.prev_length<n.max_lazy_match&&n.strstart-e<=n.w_size-In&&(n.match_length=ru(n,e),n.match_length<=5&&(n.strategy===1||n.match_length===ve&&n.strstart-n.match_start>4096)&&(n.match_length=ve-1)),n.prev_length>=ve&&n.match_length<=n.prev_length){s=n.strstart+n.lookahead-ve,i=Fs(n,n.strstart-1-n.prev_match,n.prev_length-ve),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=s&&(e=Zi(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=ve-1,n.strstart++,i&&(Li(n,!1),n.strm.avail_out===0))return ci}else if(n.match_available){if(i=Fs(n,0,n.window[n.strstart-1]),i&&Li(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return ci}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Fs(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<ve-1?n.strstart:ve-1,t===4?(Li(n,!0),n.strm.avail_out===0?Rl:Pl):n.sym_next&&(Li(n,!1),n.strm.avail_out===0)?ci:Cl};var Pn=class{constructor(n,t,e,i,s){this.good_length=n,this.max_lazy=t,this.nice_length=e,this.max_chain=i,this.func=s}},fv=[new Pn(0,0,0,0,zf),new Pn(4,4,8,4,ul),new Pn(4,5,16,8,ul),new Pn(4,6,32,32,ul),new Pn(4,4,16,16,Yi),new Pn(8,16,32,32,Yi),new Pn(8,16,128,128,Yi),new Pn(8,32,128,256,Yi),new Pn(32,128,258,1024,Yi),new Pn(32,258,258,4096,Yi)];var Gr=16209,kf=16191;function Gf(n,t){let e,i,s,r,a,o,c,l,h,m,d,u,x,w,g,p,b,y,S,C,E,_,M,D,R=n.state;e=n.next_in,M=n.input,i=e+(n.avail_in-5),s=n.next_out,D=n.output,r=s-(t-n.avail_out),a=s+(n.avail_out-257),o=R.dmax,c=R.wsize,l=R.whave,h=R.wnext,m=R.window,d=R.hold,u=R.bits,x=R.lencode,w=R.distcode,g=(1<<R.lenbits)-1,p=(1<<R.distbits)-1;t:do{u<15&&(d+=M[e++]<<u,u+=8,d+=M[e++]<<u,u+=8),b=x[d&g];e:for(;;){if(y=b>>>24,d>>>=y,u-=y,y=b>>>16&255,y===0)D[s++]=b&65535;else if(y&16){S=b&65535,y&=15,y&&(u<y&&(d+=M[e++]<<u,u+=8),S+=d&(1<<y)-1,d>>>=y,u-=y),u<15&&(d+=M[e++]<<u,u+=8,d+=M[e++]<<u,u+=8),b=w[d&p];n:for(;;){if(y=b>>>24,d>>>=y,u-=y,y=b>>>16&255,y&16){if(C=b&65535,y&=15,u<y&&(d+=M[e++]<<u,u+=8,u<y&&(d+=M[e++]<<u,u+=8)),C+=d&(1<<y)-1,C>o){n.msg="invalid distance too far back",R.mode=Gr;break t}if(d>>>=y,u-=y,y=s-r,C>y){if(y=C-y,y>l&&R.sane){n.msg="invalid distance too far back",R.mode=Gr;break t}if(E=0,_=m,h===0){if(E+=c-y,y<S){S-=y;do D[s++]=m[E++];while(--y);E=s-C,_=D}}else if(h<y){if(E+=c+h-y,y-=h,y<S){S-=y;do D[s++]=m[E++];while(--y);if(E=0,h<S){y=h,S-=y;do D[s++]=m[E++];while(--y);E=s-C,_=D}}}else if(E+=h-y,y<S){S-=y;do D[s++]=m[E++];while(--y);E=s-C,_=D}for(;S>2;)D[s++]=_[E++],D[s++]=_[E++],D[s++]=_[E++],S-=3;S&&(D[s++]=_[E++],S>1&&(D[s++]=_[E++]))}else{E=s-C;do D[s++]=D[E++],D[s++]=D[E++],D[s++]=D[E++],S-=3;while(S>2);S&&(D[s++]=D[E++],S>1&&(D[s++]=D[E++]))}}else if((y&64)===0){b=w[(b&65535)+(d&(1<<y)-1)];continue n}else{n.msg="invalid distance code",R.mode=Gr;break t}break}}else if((y&64)===0){b=x[(b&65535)+(d&(1<<y)-1)];continue e}else if(y&32){R.mode=kf;break t}else{n.msg="invalid literal/length code",R.mode=Gr;break t}break}}while(e<i&&s<a);S=u>>3,e-=S,u-=S<<3,d&=(1<<u)-1,n.next_in=e,n.next_out=s,n.avail_in=e<i?5+(i-e):5-(e-i),n.avail_out=s<a?257+(a-s):257-(s-a),R.hold=d,R.bits=u}var Vr=15,mh=852,gh=592,_h=0,dl=1,xh=2,Vf=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Hf=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),Wf=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Xf=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Os=(n,t,e,i,s,r,a,o)=>{let c=o.bits,l=0,h=0,m=0,d=0,u=0,x=0,w=0,g=0,p=0,b=0,y,S,C,E,_,M=null,D,R=new Uint16Array(16),O=new Uint16Array(16),z=null,W,N,X;for(l=0;l<=Vr;l++)R[l]=0;for(h=0;h<i;h++)R[t[e+h]]++;for(u=c,d=Vr;d>=1&&R[d]===0;d--);if(u>d&&(u=d),d===0)return s[r++]=20971520,s[r++]=20971520,o.bits=1,0;for(m=1;m<d&&R[m]===0;m++);for(u<m&&(u=m),g=1,l=1;l<=Vr;l++)if(g<<=1,g-=R[l],g<0)return-1;if(g>0&&(n===_h||d!==1))return-1;for(O[1]=0,l=1;l<Vr;l++)O[l+1]=O[l]+R[l];for(h=0;h<i;h++)t[e+h]!==0&&(a[O[t[e+h]]++]=h);if(n===_h?(M=z=a,D=20):n===dl?(M=Vf,z=Hf,D=257):(M=Wf,z=Xf,D=0),b=0,h=0,l=m,_=r,x=u,w=0,C=-1,p=1<<u,E=p-1,n===dl&&p>mh||n===xh&&p>gh)return 1;for(;;){W=l-w,a[h]+1<D?(N=0,X=a[h]):a[h]>=D?(N=z[a[h]-D],X=M[a[h]-D]):(N=96,X=0),y=1<<l-w,S=1<<x,m=S;do S-=y,s[_+(b>>w)+S]=W<<24|N<<16|X|0;while(S!==0);for(y=1<<l-1;b&y;)y>>=1;if(y!==0?(b&=y-1,b+=y):b=0,h++,--R[l]===0){if(l===d)break;l=t[e+a[h]]}if(l>u&&(b&E)!==C){for(w===0&&(w=u),_+=m,x=l-w,g=1<<x;x+w<d&&(g-=R[x+w],!(g<=0));)x++,g<<=1;if(p+=1<<x,n===dl&&p>mh||n===xh&&p>gh)return 1;C=b&E,s[C]=u<<24|x<<16|_-r|0}}return b!==0&&(s[_+b]=l-w<<24|4194304),o.bits=u,0},qf=0,ou=1,lu=2,Zr=16180,vh=16181,yh=16182,Sh=16183,Mh=16184,bh=16185,wh=16186,Eh=16187,Ah=16188,Th=16189,Yr=16190,Wn=16191,fl=16192,Ch=16193,pl=16194,Rh=16195,Ph=16196,Ih=16197,Lh=16198,Hr=16199,Wr=16200,Dh=16201,Nh=16202,Uh=16203,Fh=16204,Oh=16205,ml=16206,Bh=16207,zh=16208,he=16209,wl=16210,cu=16211,Yf=852,Zf=592;var kh=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24),Jf=class{constructor(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}},Ki=n=>{if(!n)return 1;let t=n.state;return!t||t.strm!==n||t.mode<Zr||t.mode>cu?1:0},Kf=n=>{if(Ki(n))return-2;let t=n.state;return n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=Zr,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(Yf),t.distcode=t.distdyn=new Int32Array(Zf),t.sane=1,t.back=-1,0},hu=n=>{if(Ki(n))return-2;let t=n.state;return t.wsize=0,t.whave=0,t.wnext=0,Kf(n)},$f=(n,t)=>{let e;if(Ki(n))return-2;let i=n.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?-2:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=e,i.wbits=t,hu(n))},jf=(n,t)=>{if(!n)return-2;let e=new Jf;n.state=e,e.strm=n,e.window=null,e.mode=Zr;let i=$f(n,t);return i!==0&&(n.state=null),i};var Gh=!0,gl,_l,Qf=n=>{if(Gh){gl=new Int32Array(512),_l=new Int32Array(32);let t=0;for(;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(Os(ou,n.lens,0,288,gl,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;Os(lu,n.lens,0,32,_l,0,n.work,{bits:5}),Gh=!1}n.lencode=gl,n.lenbits=9,n.distcode=_l,n.distbits=5},uu=(n,t,e,i)=>{let s,r=n.state;return r.window===null&&(r.window=new Uint8Array(1<<r.wbits)),r.wsize===0&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0),i>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>i&&(s=i),r.window.set(t.subarray(e-i,e-i+s),r.wnext),i-=s,i?(r.window.set(t.subarray(e-i,e),0),r.wnext=i,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},xl=(n,t)=>{let e,i,s,r,a,o,c,l,h,m,d,u,x,w,g=0,p,b,y,S,C,E,_,M,D=new Uint8Array(4),R,O,z=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Ki(n)||!n.output||!n.input&&n.avail_in!==0)return-2;e=n.state,e.mode===Wn&&(e.mode=fl),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,m=o,d=c,M=0;t:for(;;)switch(e.mode){case Zr:if(e.wrap===0){e.mode=fl;break}for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&2&&l===35615){e.wbits===0&&(e.wbits=15),e.check=0,D[0]=l&255,D[1]=l>>>8&255,e.check=_n(e.check,D,2,0),l=0,h=0,e.mode=vh;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",e.mode=he;break}if((l&15)!==8){n.msg="unknown compression method",e.mode=he;break}if(l>>>=4,h-=4,_=(l&15)+8,e.wbits===0&&(e.wbits=_),_>15||_>e.wbits){n.msg="invalid window size",e.mode=he;break}e.dmax=1<<e.wbits,e.flags=0,n.adler=e.check=1,e.mode=l&512?Th:Wn,l=0,h=0;break;case vh:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.flags=l,(e.flags&255)!==8){n.msg="unknown compression method",e.mode=he;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=he;break}e.head&&(e.head.text=l>>8&1),e.flags&512&&e.wrap&4&&(D[0]=l&255,D[1]=l>>>8&255,e.check=_n(e.check,D,2,0)),l=0,h=0,e.mode=yh;case yh:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.time=l>>>0),e.flags&512&&e.wrap&4&&(D[0]=l&255,D[1]=l>>>8&255,D[2]=l>>>16&255,D[3]=l>>>24&255,e.check=_n(e.check,D,4,0)),l=0,h=0,e.mode=Sh;case Sh:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.xflags=l&255,e.head.os=l>>8),e.flags&512&&e.wrap&4&&(D[0]=l&255,D[1]=l>>>8&255,e.check=_n(e.check,D,2,0)),l=0,h=0,e.mode=Mh;case Mh:if(e.flags&1024){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length=l,e.head&&(e.head.extra_len=l),e.flags&512&&e.wrap&4&&(D[0]=l&255,D[1]=l>>>8&255,e.check=_n(e.check,D,2,0)),l=0,h=0}else e.head&&(e.head.extra=null);e.mode=bh;case bh:if(e.flags&1024&&(u=e.length,u>o&&(u=o),u&&(e.head&&(_=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(i.subarray(r,r+u),_)),e.flags&512&&e.wrap&4&&(e.check=_n(e.check,i,u,r)),o-=u,r+=u,e.length-=u),e.length))break t;e.length=0,e.mode=wh;case wh:if(e.flags&2048){if(o===0)break t;u=0;do _=i[r+u++],e.head&&_&&e.length<65536&&(e.head.name+=String.fromCharCode(_),e.length++);while(_&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=_n(e.check,i,u,r)),o-=u,r+=u,_)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=Eh;case Eh:if(e.flags&4096){if(o===0)break t;u=0;do _=i[r+u++],e.head&&_&&e.length<65536&&(e.head.comment+=String.fromCharCode(_),e.length++);while(_&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=_n(e.check,i,u,r)),o-=u,r+=u,_)break t}else e.head&&(e.head.comment=null);e.mode=Ah;case Ah:if(e.flags&512){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.check&65535)){n.msg="header crc mismatch",e.mode=he;break}l=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=Wn;break;case Th:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}n.adler=e.check=kh(l),l=0,h=0,e.mode=Yr;case Yr:if(e.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,2;n.adler=e.check=1,e.mode=Wn;case Wn:if(t===5||t===6)break t;case fl:if(e.last){l>>>=h&7,h-=h&7,e.mode=ml;break}for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}switch(e.last=l&1,l>>>=1,h-=1,l&3){case 0:e.mode=Ch;break;case 1:if(Qf(e),e.mode=Hr,t===6){l>>>=2,h-=2;break t}break;case 2:e.mode=Ph;break;case 3:n.msg="invalid block type",e.mode=he}l>>>=2,h-=2;break;case Ch:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",e.mode=he;break}if(e.length=l&65535,l=0,h=0,e.mode=pl,t===6)break t;case pl:e.mode=Rh;case Rh:if(u=e.length,u){if(u>o&&(u=o),u>c&&(u=c),u===0)break t;s.set(i.subarray(r,r+u),a),o-=u,r+=u,c-=u,a+=u,e.length-=u;break}e.mode=Wn;break;case Ph:for(;h<14;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.nlen=(l&31)+257,l>>>=5,h-=5,e.ndist=(l&31)+1,l>>>=5,h-=5,e.ncode=(l&15)+4,l>>>=4,h-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=he;break}e.have=0,e.mode=Ih;case Ih:for(;e.have<e.ncode;){for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.lens[z[e.have++]]=l&7,l>>>=3,h-=3}for(;e.have<19;)e.lens[z[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,R={bits:e.lenbits},M=Os(qf,e.lens,0,19,e.lencode,0,e.work,R),e.lenbits=R.bits,M){n.msg="invalid code lengths set",e.mode=he;break}e.have=0,e.mode=Lh;case Lh:for(;e.have<e.nlen+e.ndist;){for(;g=e.lencode[l&(1<<e.lenbits)-1],p=g>>>24,b=g>>>16&255,y=g&65535,!(p<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(y<16)l>>>=p,h-=p,e.lens[e.have++]=y;else{if(y===16){for(O=p+2;h<O;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(l>>>=p,h-=p,e.have===0){n.msg="invalid bit length repeat",e.mode=he;break}_=e.lens[e.have-1],u=3+(l&3),l>>>=2,h-=2}else if(y===17){for(O=p+3;h<O;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,_=0,u=3+(l&7),l>>>=3,h-=3}else{for(O=p+7;h<O;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=p,h-=p,_=0,u=11+(l&127),l>>>=7,h-=7}if(e.have+u>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=he;break}for(;u--;)e.lens[e.have++]=_}}if(e.mode===he)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=he;break}if(e.lenbits=9,R={bits:e.lenbits},M=Os(ou,e.lens,0,e.nlen,e.lencode,0,e.work,R),e.lenbits=R.bits,M){n.msg="invalid literal/lengths set",e.mode=he;break}if(e.distbits=6,e.distcode=e.distdyn,R={bits:e.distbits},M=Os(lu,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,R),e.distbits=R.bits,M){n.msg="invalid distances set",e.mode=he;break}if(e.mode=Hr,t===6)break t;case Hr:e.mode=Wr;case Wr:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,Gf(n,d),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,e.mode===Wn&&(e.back=-1);break}for(e.back=0;g=e.lencode[l&(1<<e.lenbits)-1],p=g>>>24,b=g>>>16&255,y=g&65535,!(p<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(b&&(b&240)===0){for(S=p,C=b,E=y;g=e.lencode[E+((l&(1<<S+C)-1)>>S)],p=g>>>24,b=g>>>16&255,y=g&65535,!(S+p<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=S,h-=S,e.back+=S}if(l>>>=p,h-=p,e.back+=p,e.length=y,b===0){e.mode=Oh;break}if(b&32){e.back=-1,e.mode=Wn;break}if(b&64){n.msg="invalid literal/length code",e.mode=he;break}e.extra=b&15,e.mode=Dh;case Dh:if(e.extra){for(O=e.extra;h<O;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Nh;case Nh:for(;g=e.distcode[l&(1<<e.distbits)-1],p=g>>>24,b=g>>>16&255,y=g&65535,!(p<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((b&240)===0){for(S=p,C=b,E=y;g=e.distcode[E+((l&(1<<S+C)-1)>>S)],p=g>>>24,b=g>>>16&255,y=g&65535,!(S+p<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=S,h-=S,e.back+=S}if(l>>>=p,h-=p,e.back+=p,b&64){n.msg="invalid distance code",e.mode=he;break}e.offset=y,e.extra=b&15,e.mode=Uh;case Uh:if(e.extra){for(O=e.extra;h<O;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.offset+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=he;break}e.mode=Fh;case Fh:if(c===0)break t;if(u=d-c,e.offset>u){if(u=e.offset-u,u>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=he;break}u>e.wnext?(u-=e.wnext,x=e.wsize-u):x=e.wnext-u,u>e.length&&(u=e.length),w=e.window}else w=s,x=a-e.offset,u=e.length;u>c&&(u=c),c-=u,e.length-=u;do s[a++]=w[x++];while(--u);e.length===0&&(e.mode=Wr);break;case Oh:if(c===0)break t;s[a++]=e.length,c--,e.mode=Wr;break;case ml:if(e.wrap){for(;h<32;){if(o===0)break t;o--,l|=i[r++]<<h,h+=8}if(d-=c,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?_n(e.check,s,d,a-d):qr(e.check,s,d,a-d)),d=c,e.wrap&4&&(e.flags?l:kh(l))!==e.check){n.msg="incorrect data check",e.mode=he;break}l=0,h=0}e.mode=Bh;case Bh:if(e.wrap&&e.flags){for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=he;break}l=0,h=0}e.mode=zh;case zh:M=1;break t;case he:M=-3;break t;case wl:return-4;case cu:default:return-2}return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,(e.wsize||d!==n.avail_out&&e.mode<he&&(e.mode<ml||t!==4))&&uu(n,n.output,n.next_out,d-n.avail_out)?(e.mode=wl,-4):(m-=n.avail_in,d-=n.avail_out,n.total_in+=m,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?_n(e.check,s,d,n.next_out-d):qr(e.check,s,d,n.next_out-d)),n.data_type=e.bits+(e.last?64:0)+(e.mode===Wn?128:0)+(e.mode===Hr||e.mode===pl?256:0),(m===0&&d===0||t===4)&&M===0&&(M=-5),M)},Vh=n=>{if(Ki(n))return-2;let t=n.state;return t.window&&(t.window=null),n.state=null,0};var Hh=(n,t)=>{let e=t.length,i,s,r;return Ki(n)||(i=n.state,i.wrap!==0&&i.mode!==Yr)?-2:i.mode===Yr&&(s=1,s=qr(s,t,e,0),s!==i.check)?-3:(r=uu(n,t,e,e),r?(i.mode=wl,-4):(i.havedict=1,0))},tp=class{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}};var ep=n=>{let t=new Uint8Array(n.reduce((i,s)=>i+s.length,0)),e=0;for(let i of n)t.set(i,e),e+=i.length;return t};var Wh=Object.prototype.toString,np={chunkSize:1024*64,windowBits:15,raw:!1,dictionary:new Uint8Array(0)},ip=class{constructor(n={}){Hn(this,"options");Hn(this,"err");Hn(this,"msg");Hn(this,"ended");Hn(this,"started");Hn(this,"chunks");Hn(this,"strm");Hn(this,"result");this.options=Object.assign({},np,n);let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!n.windowBits&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array(0),this.strm=new tp,this.strm.avail_out=0;let e=jf(this.strm,t.windowBits);if(e!==0)throw new Error(cl[e]);Wh.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary));let i=t.dictionary;if(t.raw&&i.length&&(e=Hh(this.strm,i),e!==0))throw new Error(cl[e])}push(n,t=!1){let e=this.strm,i=this.options.chunkSize,s,r,a;if(this.ended)return this.err===0;for(typeof t=="number"?r=t:r=t===!0?4:0,Wh.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length,this.started||(this.started=!0,this.onStart(e));;){if(e.avail_out===0&&(e.output=new Uint8Array(i),e.next_out=0,e.avail_out=i),s=xl(e,r),s===2){let o=this.options.dictionary;o.length&&(s=Hh(e,o),s===0?s=xl(e,r):s===-3&&(s=2))}for(;e.avail_in>0&&s===1&&e.state.wrap&2&&e.state.flags!==0&&e.input[e.next_in]!==0;)hu(e),s=xl(e,r);if(s===-2||s===-3||s===2||s===-4)break;if(a=e.avail_out,e.next_out&&(e.avail_out===0||s===1||r>0)&&(this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out)),e.avail_out=0,e.next_out=0),!((s===0||s===-5)&&a===0)){if(s===1){s=Vh(this.strm);break}if(e.avail_in===0){if(r===4){s=Vh(this.strm),s===0&&(s=-5);break}return!0}}}return this.err=s,this.msg=e.msg||cl[s],this.ended=!0,this.onEnd(s),s===0}onStart(n){}onData(n){this.chunks.push(n)}onEnd(n){n===0&&(this.result=ep(this.chunks)),this.chunks=[]}};function sp(n,t={}){let e=new ip(t);if(e.push(n,!0),e.err)throw new Error(e.msg);let i=e.result;return t.toText?new TextDecoder().decode(i):i}function du(n,t={}){return sp(n,{...t,raw:!0})}function fu(n,t){var e=atob(n.hz),i=new Uint8Array(e.length),s,r,a;for(s=0;s<e.length;s++)i[s]=e.charCodeAt(s);var o=du(i),c=n.w,l=n.h,h=new Uint8Array(c*l),m=new Float32Array(c*l);for(r=0;r<l;r++)for(s=0;s<c;s++){a=r*c+s;var d=s?h[a-1]:0,u=r?h[a-c]:0;h[a]=o[a]+(d+u>>1)&255,m[a]=n.base+n.step*h[a]}var x=(n.lat0+n.lat1)/2,w=(n.lon0+n.lon1)/2,g=111.2,p=111.2*Math.cos(x*Math.PI/180),b=(n.lon1-n.lon0)*p,y=(n.lat1-n.lat0)*g;function S(q,st){return[(q-w)*p,-(st-x)*g]}function C(q,st){var ct=(q+b/2)/b*(c-1),bt=(st+y/2)/y*(l-1);ct=Math.min(c-1.001,Math.max(0,ct)),bt=Math.min(l-1.001,Math.max(0,bt));var ut=ct|0,Tt=bt|0,Gt=ct-ut,Et=bt-Tt,Wt=Tt*c+ut,jt=m[Wt],Bt=m[Wt+1],se=m[Wt+c],re=m[Wt+c+1];return Gt+Et<=1?jt+Gt*(Bt-jt)+Et*(se-jt):re+(1-Gt)*(se-re)+(1-Et)*(Bt-re)}for(var E=atob(n.pb),_=0,M=0,D=0,R=[];_<E.length;){for(var O=0;O<2;O++){var z=0,W=0,N;do N=E.charCodeAt(_++)-63,z|=(N&31)<<W,W+=5;while(N>=32);var X=z&1?~(z>>1):z>>1;O===0?M+=X:D+=X}var Z=S(D/1e5,M/1e5);R.push({x:Z[0],z:Z[1],m:C(Z[0],Z[1])})}var G=[0];for(s=1;s<R.length;s++)G[s]=G[s-1]+Math.hypot(R[s].x-R[s-1].x,R[s].z-R[s-1].z);var nt=G[G.length-1],V=[],et=0;t.forEach(function(q,st){var ct=S(q.lon,q.lat),bt;if(st===0)bt=0;else if(st===t.length-1)bt=R.length-1;else{var ut=-1,Tt=1e9;for(a=et;a<R.length;a++){var Gt=Math.hypot(R[a].x-ct[0],R[a].z-ct[1]);if(Gt<3&&Gt<Tt)Tt=Gt,ut=a;else if(ut>=0&&Gt>Tt+4)break}if(ut<0)for(Tt=1e9,a=et;a<R.length;a++){var Et=Math.hypot(R[a].x-ct[0],R[a].z-ct[1]);Et<Tt&&(Tt=Et,ut=a)}bt=ut}et=bt,V.push({x:ct[0],z:ct[1],idx:bt,s:G[bt],m:C(ct[0],ct[1]),min:it(q.h)})});function it(q){var st=String(q).split(":");return+st[0]*60+ +st[1]}function At(q){q=Math.max(0,Math.min(nt,q));for(var st=0,ct=G.length-1;ct-st>1;){var bt=st+ct>>1;G[bt]<=q?st=bt:ct=bt}var ut=G[ct]-G[st],Tt=ut>0?(q-G[st])/ut:0,Gt=R[st],Et=R[ct];return{x:Gt.x+(Et.x-Gt.x)*Tt,z:Gt.z+(Et.z-Gt.z)*Tt,m:Gt.m+(Et.m-Gt.m)*Tt,i:st,t:Tt}}function It(q){if(q<=V[0].s)return V[0].min;for(var st=1;st<V.length;st++)if(q<=V[st].s){var ct=V[st-1],bt=V[st],ut=bt.s>ct.s?(q-ct.s)/(bt.s-ct.s):1;return ct.min+(bt.min-ct.min)*ut}return V[V.length-1].min}return{W:c,H:l,el:m,SX:b,SZ:y,proj:S,quota:C,route:R,cum:G,total:nt,tappe:V,puntoA:At,orologio:It}}function Jr(n){n=Math.round(n);var t=Math.floor(n/60),e=n%60;return(t<10?"0":"")+t+":"+(e<10?"0":"")+e}function pu(n,t,e){var i=n.getContext("2d"),s=0,r=0,a=1,o=0,c=-1,l=1250,h=e.caldo,m=e.onScrub||function(){};function d(y,S){var C=getComputedStyle(n).getPropertyValue(y).trim();return C||S}function u(){var y=n.getBoundingClientRect();a=Math.min(window.devicePixelRatio||1,2),s=Math.max(200,Math.round(y.width)),r=Math.max(90,Math.round(y.height)),n.width=s*a,n.height=r*a,g()}function x(y){return 34+(s-44)*y/t.total}function w(y){return r-22-(r-36)*Math.min(y,l)/l}function g(){i.setTransform(a,0,0,a,0,0),i.clearRect(0,0,s,r);var y=d("--bordo","#1D2A23"),S=d("--vinaccia","#A22B3C"),C=d("--oro","#E2A93B"),E=d("--tenue","#8a8f86"),_=t.route,M;i.font='500 10px "DM Mono",monospace',i.textBaseline="middle",i.lineWidth=1,i.strokeStyle=E,i.fillStyle=E,i.globalAlpha=.35,[0,500,1e3].forEach(function(nt){i.beginPath(),i.moveTo(30,w(nt)),i.lineTo(s-6,w(nt)),i.stroke()}),i.globalAlpha=.9,[0,500,1e3].forEach(function(nt){i.fillText(nt+"",2,w(nt)-6)}),i.globalAlpha=1;var D=i.createLinearGradient(0,w(1200),0,w(0));for(D.addColorStop(0,C),D.addColorStop(1,"rgba(226,169,59,0)"),i.beginPath(),i.moveTo(x(0),w(0)),M=0;M<_.length;M++)i.lineTo(x(t.cum[M]),w(_[M].m));i.lineTo(x(t.total),w(0)),i.closePath(),i.globalAlpha=.28,i.fillStyle=D,i.fill(),i.globalAlpha=1;var R=t.tappe[h[0]].idx,O=t.tappe[h[1]].idx;function z(nt,V,et,it,At){i.beginPath(),i.setLineDash(At||[]),i.lineWidth=it,i.strokeStyle=et,i.lineJoin="round";for(var It=nt;It<=V;It++){var q=x(t.cum[It]),st=w(_[It].m);It===nt?i.moveTo(q,st):i.lineTo(q,st)}i.stroke(),i.setLineDash([])}i.globalAlpha=.7,z(0,R,y,1.5,[3,4]),z(O,_.length-1,y,1.5,[3,4]),i.globalAlpha=1,z(R,O,S,3),t.tappe.forEach(function(nt,V){var et=x(nt.s),it=w(nt.m);i.beginPath(),i.arc(et,it,V===c?8:6,0,6.2832),i.fillStyle=V===c?S:d("--carta","#F6ECD8"),i.fill(),i.lineWidth=2,i.strokeStyle=y,i.stroke(),i.fillStyle=V===c?"#fff":y,i.textAlign="center",i.font='500 9px "DM Mono",monospace',i.fillText(String(V+1),et,it+.5),i.textAlign="left"});var W=t.puntoA(o),N=x(o);i.setLineDash([2,3]),i.strokeStyle=y,i.lineWidth=1,i.beginPath(),i.moveTo(N,6),i.lineTo(N,r-20),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(N,w(W.m),5,0,6.2832),i.fillStyle=C,i.fill(),i.lineWidth=2,i.strokeStyle=y,i.stroke();var X=Math.round(W.m/10)*10+" m \xB7 "+Jr(t.orologio(o));i.font='500 11px "DM Mono",monospace';var Z=i.measureText(X).width+12,G=Math.min(s-Z-4,Math.max(32,N-Z/2));i.fillStyle=y,i.beginPath(),i.roundRect?i.roundRect(G,r-18,Z,16,5):i.rect(G,r-18,Z,16),i.fill(),i.fillStyle=d("--carta","#F6ECD8"),i.fillText(X,G+6,r-10)}function p(y){var S=n.getBoundingClientRect(),C=(y.clientX-S.left-34)/(s-44)*t.total;return Math.max(0,Math.min(t.total,C))}var b=!1;return n.addEventListener("pointerdown",function(y){b=!0;try{n.setPointerCapture(y.pointerId)}catch(S){}m(p(y))}),n.addEventListener("pointermove",function(y){b&&m(p(y))}),n.addEventListener("pointerup",function(){b=!1}),n.addEventListener("pointercancel",function(){b=!1}),window.ResizeObserver?new ResizeObserver(u).observe(n):window.addEventListener("resize",u),u(),{set:function(y,S){o=y,S!==void 0&&(c=S),g()},ridisegna:g}}var Si={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Mi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Yu=0,cc=1,Zu=2;var Ar=1,Ju=2,Rs=3,bi=0,Je=1,pn=2,Bi=0,Ps=1,Tr=2,hc=3,uc=4,Ku=5;var zi=100,$u=101,ju=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,dc=204,fc=205,rd=206,ad=207,od=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,Ma=0,ba=1,wa=2,gs=3,Ea=4,Aa=5,Ta=6,Ca=7,ao=0,pd=1,md=2,Bn=0,pc=1,mc=2,gc=3,_c=4,xc=5,vc=6,yc=7;var Sc=300,ki=301,Is=302,oo=303,lo=304,Ra=1e3,Dn=1001,Pa=1002,Pe=1003,gd=1004;var Cr=1005;var Ye=1006,co=1007;var ii=1008;var $e=1009,Mc=1010,bc=1011,Ls=1012,ho=1013,bn=1014,mn=1015,wn=1016,uo=1017,fo=1018,Gi=1020,wc=35902,Ec=35899,Ac=1021,Tc=1022,En=1023,Qn=1026,si=1027,po=1028,mo=1029,wi=1030,go=1031;var _o=1033,Rr=33776,Pr=33777,Ir=33778,Lr=33779,xo=35840,vo=35841,yo=35842,So=35843,Mo=36196,bo=37492,wo=37496,Eo=37488,Ao=37489,Dr=37490,To=37491,Co=37808,Ro=37809,Po=37810,Io=37811,Lo=37812,Do=37813,No=37814,Uo=37815,Fo=37816,Oo=37817,Bo=37818,zo=37819,ko=37820,Go=37821,Vo=36492,Ho=36494,Wo=36495,Xo=36283,qo=36284,Nr=36285,Yo=36286;var js=2300,Ia=2301,ya=2302,nc=2303,ic=2400,sc=2401,rc=2402;var _d=3200;var Zo=0,xd=1,ri="",Xe="srgb",Qs="srgb-linear",tr="linear",ie="srgb";var Sa=7680;var vd=519,yd=512,Sd=513,Md=514,Cc=515,bd=516,wd=517,Rc=518,Pc=519,Ic=35044;var Lc="300 es",un=2e3,_s=2001;function rp(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ap(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ed(){let n=er("canvas");return n.style.display="block",n}var mu={},xs=null;function nr(...n){let t="THREE."+n.shift();xs?xs("log",t,...n):console.log(t,...n)}function Ad(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ft(...n){n=Ad(n);let t="THREE."+n.shift();if(xs)xs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function zt(...n){n=Ad(n);let t="THREE."+n.shift();if(xs)xs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ys(...n){let t=n.join(" ");t in mu||(mu[t]=!0,Ft(...n))}function Td(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Cd={[Ma]:Ma,[wa]:Ta,[Ea]:Ea,[gs]:Aa,[ba]:ba,[Ta]:wa,[Ca]:Ca,[Aa]:gs},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=1234567,Zs=Math.PI/180,vs=180/Math.PI;function Ei(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Oe[n&255]+Oe[n>>8&255]+Oe[n>>16&255]+Oe[n>>24&255]+"-"+Oe[t&255]+Oe[t>>8&255]+"-"+Oe[t>>16&15|64]+Oe[t>>24&255]+"-"+Oe[e&63|128]+Oe[e>>8&255]+"-"+Oe[e>>16&255]+Oe[e>>24&255]+Oe[i&255]+Oe[i>>8&255]+Oe[i>>16&255]+Oe[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function Dc(n,t){return(n%t+t)%t}function op(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function lp(n,t,e){return n!==t?(e-n)/(t-n):0}function Js(n,t,e){return(1-e)*n+e*t}function cp(n,t,e,i){return Js(n,t,1-Math.exp(-e*i))}function hp(n,t=1){return t-Math.abs(Dc(n,t*2)-t)}function up(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function dp(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function fp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function pp(n,t){return n+Math.random()*(t-n)}function mp(n){return n*(.5-Math.random())}function gp(n){n!==void 0&&(gu=n);let t=gu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _p(n){return n*Zs}function xp(n){return n*vs}function vp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function yp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sp(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),m=r((t-i)/2),d=a((t-i)/2),u=r((i-t)/2),x=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*m,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*m,o*l);break;case"ZXZ":n.set(c*m,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*x,c*u,o*l);break;case"YXY":n.set(c*u,o*h,c*x,o*l);break;case"ZYZ":n.set(c*x,c*u,o*h,o*l);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Jo(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Uc(n,t){if(t.constructor===Float32Array)return n;let e=Jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Fc(n,t){if(t.constructor===Float32Array)return n;let e=Jo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Oc={DEG2RAD:Zs,RAD2DEG:vs,generateUUID:Ei,clamp:Yt,euclideanModulo:Dc,mapLinear:op,inverseLerp:lp,lerp:Js,damp:cp,pingpong:hp,smoothstep:up,smootherstep:dp,randInt:fp,randFloat:pp,randFloatSpread:mp,seededRandom:gp,degToRad:_p,radToDeg:xp,isPowerOfTwo:vp,ceilPowerOfTwo:yp,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:Sp,normalize:Fc,denormalize:Uc},Hc=class Hc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hc.prototype.isVector2=!0;var St=Hc,sn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],m=i[s+3],d=r[a+0],u=r[a+1],x=r[a+2],w=r[a+3];if(m!==w||c!==d||l!==u||h!==x){let g=c*d+l*u+h*x+m*w;g<0&&(d=-d,u=-u,x=-x,w=-w,g=-g);let p=1-o;if(g<.9995){let b=Math.acos(g),y=Math.sin(b);p=Math.sin(p*b)/y,o=Math.sin(o*b)/y,c=c*p+d*o,l=l*p+u*o,h=h*p+x*o,m=m*p+w*o}else{c=c*p+d*o,l=l*p+u*o,h=h*p+x*o,m=m*p+w*o;let b=1/Math.sqrt(c*c+l*l+h*h+m*m);c*=b,l*=b,h*=b,m*=b}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],m=r[a],d=r[a+1],u=r[a+2],x=r[a+3];return t[e]=o*x+h*m+c*u-l*d,t[e+1]=c*x+h*d+l*m-o*u,t[e+2]=l*x+h*u+o*d-c*m,t[e+3]=h*x-o*m-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),m=o(r/2),d=c(i/2),u=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=d*h*m+l*u*x,this._y=l*u*m-d*h*x,this._z=l*h*x+d*u*m,this._w=l*h*m-d*u*x;break;case"YXZ":this._x=d*h*m+l*u*x,this._y=l*u*m-d*h*x,this._z=l*h*x-d*u*m,this._w=l*h*m+d*u*x;break;case"ZXY":this._x=d*h*m-l*u*x,this._y=l*u*m+d*h*x,this._z=l*h*x+d*u*m,this._w=l*h*m-d*u*x;break;case"ZYX":this._x=d*h*m-l*u*x,this._y=l*u*m+d*h*x,this._z=l*h*x-d*u*m,this._w=l*h*m+d*u*x;break;case"YZX":this._x=d*h*m+l*u*x,this._y=l*u*m+d*h*x,this._z=l*h*x-d*u*m,this._w=l*h*m-d*u*x;break;case"XZY":this._x=d*h*m-l*u*x,this._y=l*u*m-d*h*x,this._z=l*h*x+d*u*m,this._w=l*h*m+d*u*x;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],m=e[10],d=i+o+m;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(i>o&&i>m){let u=2*Math.sqrt(1+i-o-m);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>m){let u=2*Math.sqrt(1+o-i-m);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+m-i-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wc=class Wc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),m=2*(r*i-a*e);return this.x=e+c*l+a*m-o*h,this.y=i+c*h+o*l-r*m,this.z=s+c*m+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wc.prototype.isVector3=!0;var F=Wc,Ll=new F,_u=new sn,Xc=class Xc{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],m=i[7],d=i[2],u=i[5],x=i[8],w=s[0],g=s[3],p=s[6],b=s[1],y=s[4],S=s[7],C=s[2],E=s[5],_=s[8];return r[0]=a*w+o*b+c*C,r[3]=a*g+o*y+c*E,r[6]=a*p+o*S+c*_,r[1]=l*w+h*b+m*C,r[4]=l*g+h*y+m*E,r[7]=l*p+h*S+m*_,r[2]=d*w+u*b+x*C,r[5]=d*g+u*y+x*E,r[8]=d*p+u*S+x*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=h*a-o*l,d=o*c-h*r,u=l*r-a*c,x=e*m+i*d+s*u;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/x;return t[0]=m*w,t[1]=(s*l-h*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(h*e-s*c)*w,t[5]=(s*r-o*e)*w,t[6]=u*w,t[7]=(i*c-l*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(t,e)),this}rotate(t){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-t)),this}translate(t,e){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xc.prototype.isMatrix3=!0;var kt=Xc,Dl=new kt,xu=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vu=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mp(){let n={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ie&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ie&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qs]:{primaries:t,whitePoint:i,transfer:tr,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:ie,toXYZ:xu,fromXYZ:vu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}var $t=Mp();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ms(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $i,La=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{$i===void 0&&($i=er("canvas")),$i.width=t.width,$i.height=t.height;let s=$i.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=$i}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=jn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(jn(e[i]/255)*255):e[i]=jn(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bp=0,ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=Ei(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Nl(s[a].image)):r.push(Nl(s[a]))}else r=Nl(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Nl(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?La.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var wp=0,Ul=new F,Ze=class n extends Mn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Dn,s=Dn,r=Ye,a=ii,o=En,c=$e,l=n.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Ei(),this.name="",this.source=new ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ra:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ra:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Sc;Ze.DEFAULT_ANISOTROPY=1;var qc=class qc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],m=c[8],d=c[1],u=c[5],x=c[9],w=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(m-w)<.01&&Math.abs(x-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(m+w)<.1&&Math.abs(x+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,S=(u+1)/2,C=(p+1)/2,E=(h+d)/4,_=(m+w)/4,M=(x+g)/4;return y>S&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=E/i,r=_/i):S>C?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=E/s,r=M/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=_/r,s=M/r),this.set(i,s,r,e),this}let b=Math.sqrt((g-x)*(g-x)+(m-w)*(m-w)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(g-x)/b,this.y=(m-w)/b,this.z=(d-h)/b,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};qc.prototype.isVector4=!0;var de=qc,Da=class extends Mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new Ze({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Da{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ir=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends Ze{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ro=class ro{constructor(t,e,i,s,r,a,o,c,l,h,m,d,u,x,w,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,m,d,u,x,w,g)}set(t,e,i,s,r,a,o,c,l,h,m,d,u,x,w,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=m,p[14]=d,p[3]=u,p[7]=x,p[11]=w,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ro().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*m,x=o*h,w=o*m;e[0]=c*h,e[4]=-c*m,e[8]=l,e[1]=u+x*l,e[5]=d-w*l,e[9]=-o*c,e[2]=w-d*l,e[6]=x+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*m,x=l*h,w=l*m;e[0]=d+w*o,e[4]=x*o-u,e[8]=a*l,e[1]=a*m,e[5]=a*h,e[9]=-o,e[2]=u*o-x,e[6]=w+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*m,x=l*h,w=l*m;e[0]=d-w*o,e[4]=-a*m,e[8]=x+u*o,e[1]=u+x*o,e[5]=a*h,e[9]=w-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*m,x=o*h,w=o*m;e[0]=c*h,e[4]=x*l-u,e[8]=d*l+w,e[1]=c*m,e[5]=w*l+d,e[9]=u*l-x,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,x=o*c,w=o*l;e[0]=c*h,e[4]=w-d*m,e[8]=x*m+u,e[1]=m,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*m+x,e[10]=d-w*m}else if(t.order==="XZY"){let d=a*c,u=a*l,x=o*c,w=o*l;e[0]=c*h,e[4]=-m,e[8]=l*h,e[1]=d*m+w,e[5]=a*h,e[9]=u*m-x,e[2]=x*m-u,e[6]=o*h,e[10]=w*m+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ep,t,Ap)}lookAt(t,e,i){let s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),hi.crossVectors(i,tn),hi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),hi.crossVectors(i,tn)),hi.normalize(),Kr.crossVectors(tn,hi),s[0]=hi.x,s[4]=Kr.x,s[8]=tn.x,s[1]=hi.y,s[5]=Kr.y,s[9]=tn.y,s[2]=hi.z,s[6]=Kr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],m=i[5],d=i[9],u=i[13],x=i[2],w=i[6],g=i[10],p=i[14],b=i[3],y=i[7],S=i[11],C=i[15],E=s[0],_=s[4],M=s[8],D=s[12],R=s[1],O=s[5],z=s[9],W=s[13],N=s[2],X=s[6],Z=s[10],G=s[14],nt=s[3],V=s[7],et=s[11],it=s[15];return r[0]=a*E+o*R+c*N+l*nt,r[4]=a*_+o*O+c*X+l*V,r[8]=a*M+o*z+c*Z+l*et,r[12]=a*D+o*W+c*G+l*it,r[1]=h*E+m*R+d*N+u*nt,r[5]=h*_+m*O+d*X+u*V,r[9]=h*M+m*z+d*Z+u*et,r[13]=h*D+m*W+d*G+u*it,r[2]=x*E+w*R+g*N+p*nt,r[6]=x*_+w*O+g*X+p*V,r[10]=x*M+w*z+g*Z+p*et,r[14]=x*D+w*W+g*G+p*it,r[3]=b*E+y*R+S*N+C*nt,r[7]=b*_+y*O+S*X+C*V,r[11]=b*M+y*z+S*Z+C*et,r[15]=b*D+y*W+S*G+C*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],m=t[6],d=t[10],u=t[14],x=t[3],w=t[7],g=t[11],p=t[15],b=c*u-l*d,y=o*u-l*m,S=o*d-c*m,C=a*u-l*h,E=a*d-c*h,_=a*m-o*h;return e*(w*b-g*y+p*S)-i*(x*b-g*C+p*E)+s*(x*y-w*C+p*_)-r*(x*S-w*E+g*_)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],m=t[9],d=t[10],u=t[11],x=t[12],w=t[13],g=t[14],p=t[15],b=e*o-i*a,y=e*c-s*a,S=e*l-r*a,C=i*c-s*o,E=i*l-r*o,_=s*l-r*c,M=h*w-m*x,D=h*g-d*x,R=h*p-u*x,O=m*g-d*w,z=m*p-u*w,W=d*p-u*g,N=b*W-y*z+S*O+C*R-E*D+_*M;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/N;return t[0]=(o*W-c*z+l*O)*X,t[1]=(s*z-i*W-r*O)*X,t[2]=(w*_-g*E+p*C)*X,t[3]=(d*E-m*_-u*C)*X,t[4]=(c*R-a*W-l*D)*X,t[5]=(e*W-s*R+r*D)*X,t[6]=(g*S-x*_-p*y)*X,t[7]=(h*_-d*S+u*y)*X,t[8]=(a*z-o*R+l*M)*X,t[9]=(i*R-e*z-r*M)*X,t[10]=(x*E-w*S+p*b)*X,t[11]=(m*S-h*E-u*b)*X,t[12]=(o*D-a*O-c*M)*X,t[13]=(e*O-i*D+s*M)*X,t[14]=(w*y-x*C-g*b)*X,t[15]=(h*C-m*y+d*b)*X,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,m=o+o,d=r*l,u=r*h,x=r*m,w=a*h,g=a*m,p=o*m,b=c*l,y=c*h,S=c*m,C=i.x,E=i.y,_=i.z;return s[0]=(1-(w+p))*C,s[1]=(u+S)*C,s[2]=(x-y)*C,s[3]=0,s[4]=(u-S)*E,s[5]=(1-(d+p))*E,s[6]=(g+b)*E,s[7]=0,s[8]=(x+y)*_,s[9]=(g-b)*_,s[10]=(1-(d+w))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let l=1/a,h=1/o,m=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=m,xn.elements[9]*=m,xn.elements[10]*=m,e.setFromRotationMatrix(xn),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=un,c=!1){let l=this.elements,h=2*r/(e-t),m=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),x,w;if(c)x=r/(a-r),w=a*r/(a-r);else if(o===un)x=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===_s)x=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=m,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=w,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=un,c=!1){let l=this.elements,h=2/(e-t),m=2/(i-s),d=-(e+t)/(e-t),u=-(i+s)/(i-s),x,w;if(c)x=1/(a-r),w=a/(a-r);else if(o===un)x=-2/(a-r),w=-(a+r)/(a-r);else if(o===_s)x=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=m,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=x,l[14]=w,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};ro.prototype.isMatrix4=!0;var ae=ro,ji=new F,xn=new ae,Ep=new F(0,0,0),Ap=new F(1,1,1),hi=new F,Kr=new F,tn=new F,yu=new ae,Su=new sn,ti=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],m=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return yu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Su.setFromEuler(this),this.setFromQuaternion(Su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tp=0,Mu=new F,Qi=new sn,qn=new ae,$r=new F,Bs=new F,Cp=new F,Rp=new sn,bu=new F(1,0,0),wu=new F(0,1,0),Eu=new F(0,0,1),Au={type:"added"},Pp={type:"removed"},ts={type:"childadded",child:null},Fl={type:"childremoved",child:null},ge=class n extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new F,e=new ti,i=new sn,s=new F(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new kt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(bu,t)}rotateY(t){return this.rotateOnAxis(wu,t)}rotateZ(t){return this.rotateOnAxis(Eu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bu,t)}translateY(t){return this.translateOnAxis(wu,t)}translateZ(t){return this.translateOnAxis(Eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?$r.copy(t):$r.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Bs,$r,this.up):qn.lookAt($r,Bs,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(qn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Au),ts.child=t,this.dispatchEvent(ts),ts.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pp),Fl.child=t,this.dispatchEvent(Fl),Fl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Au),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Cp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let m=c[l];r(t.shapes,m)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),m=a(t.shapes),d=a(t.skeletons),u=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),m.length>0&&(i.shapes=m),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ge.DEFAULT_UP=new F(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Sn=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ip={type:"move"},Ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let w of t.hand.values()){let g=e.getJointPose(w,i),p=this._getHandJoint(l,w);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],m=l.joints["thumb-tip"],d=h.position.distanceTo(m.position),u=.02,x=.005;l.inputState.pinching&&d>u+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ip)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Sn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Ol(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Ot=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=Dc(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ol(a,r,t+1/3),this.g=Ol(a,r,t),this.b=Ol(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=Xe){function i(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=Rd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return $t.workingToColorSpace(Be.copy(this),t),Math.round(Yt(Be.r*255,0,255))*65536+Math.round(Yt(Be.g*255,0,255))*256+Math.round(Yt(Be.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(Be.copy(this),e);let i=Be.r,s=Be.g,r=Be.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let m=a-o;switch(l=h<=.5?m/(a+o):m/(2-a-o),a){case i:c=(s-r)/m+(s<r?6:0);break;case s:c=(r-i)/m+2;break;case r:c=(i-s)/m+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Xe){$t.workingToColorSpace(Be.copy(this),t);let e=Be.r,i=Be.g,s=Be.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(jr);let i=Js(ui.h,jr.h,e),s=Js(ui.s,jr.s,e),r=Js(ui.l,jr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Ot;Ot.NAMES=Rd;var rr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ot(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ar=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new F,Yn=new F,Bl=new F,Zn=new F,es=new F,ns=new F,Tu=new F,zl=new F,kl=new F,Gl=new F,Vl=new de,Hl=new de,Wl=new de,$n=class n{constructor(t=new F,e=new F,i=new F){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){vn.subVectors(s,e),Yn.subVectors(i,e),Bl.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Yn),c=vn.dot(Bl),l=Yn.dot(Yn),h=Yn.dot(Bl),m=a*l-o*o;if(m===0)return r.set(0,0,0),null;let d=1/m,u=(l*c-o*h)*d,x=(a*h-o*c)*d;return r.set(1-u-x,x,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(a,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Vl.setScalar(0),Hl.setScalar(0),Wl.setScalar(0),Vl.fromBufferAttribute(t,e),Hl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Hl,r.y),a.addScaledVector(Wl,r.z),a}static isFrontFacing(t,e,i,s){return vn.subVectors(i,e),Yn.subVectors(t,e),vn.cross(Yn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),vn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;es.subVectors(s,i),ns.subVectors(r,i),zl.subVectors(t,i);let c=es.dot(zl),l=ns.dot(zl);if(c<=0&&l<=0)return e.copy(i);kl.subVectors(t,s);let h=es.dot(kl),m=ns.dot(kl);if(h>=0&&m<=h)return e.copy(s);let d=c*m-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(es,a);Gl.subVectors(t,r);let u=es.dot(Gl),x=ns.dot(Gl);if(x>=0&&u<=x)return e.copy(r);let w=u*l-c*x;if(w<=0&&l>=0&&x<=0)return o=l/(l-x),e.copy(i).addScaledVector(ns,o);let g=h*x-u*m;if(g<=0&&m-h>=0&&u-x>=0)return Tu.subVectors(r,s),o=(m-h)/(m-h+(u-x)),e.copy(s).addScaledVector(Tu,o);let p=1/(g+w+d);return a=w*p,o=d*p,e.copy(i).addScaledVector(es,a).addScaledVector(ns,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),ta.subVectors(this.max,zs),is.subVectors(t.a,zs),ss.subVectors(t.b,zs),rs.subVectors(t.c,zs),di.subVectors(ss,is),fi.subVectors(rs,ss),Di.subVectors(is,rs);let e=[0,-di.z,di.y,0,-fi.z,fi.y,0,-Di.z,Di.y,di.z,0,-di.x,fi.z,0,-fi.x,Di.z,0,-Di.x,-di.y,di.x,0,-fi.y,fi.x,0,-Di.y,Di.x,0];return!Xl(e,is,ss,rs,ta)||(e=[1,0,0,0,1,0,0,0,1],!Xl(e,is,ss,rs,ta))?!1:(ea.crossVectors(di,fi),e=[ea.x,ea.y,ea.z],Xl(e,is,ss,rs,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new F,new F,new F,new F,new F,new F,new F,new F],yn=new F,Qr=new Nn,is=new F,ss=new F,rs=new F,di=new F,fi=new F,Di=new F,zs=new F,ta=new F,ea=new F,Ni=new F;function Xl(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ni.fromArray(n,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),c=t.dot(Ni),l=e.dot(Ni),h=i.dot(Ni);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Se=new F,na=new St,Lp=0,Me=class extends Mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ic,this.updateRanges=[],this.gpuType=mn,this.version=0,this._normalizationScale=t!==void 0?Jo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uc(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Fc(t,this.array)}};var or=class extends Me{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lr=class extends Me{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends Me{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dp=new Nn,ks=new F,ql=new F,mi=class{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ks,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ql.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(ql)),this.expandByPoint(ks.copy(t.center).sub(ql))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Np=0,hn=new ae,Yl=new ge,as=new F,en=new Nn,Gs=new Nn,Re=new F,Ne=class n extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Ei(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rp(t)?lr:or)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return hn.makeRotationFromQuaternion(t),this.applyMatrix4(hn),this}rotateX(t){return hn.makeRotationX(t),this.applyMatrix4(hn),this}rotateY(t){return hn.makeRotationY(t),this.applyMatrix4(hn),this}rotateZ(t){return hn.makeRotationZ(t),this.applyMatrix4(hn),this}translate(t,e,i){return hn.makeTranslation(t,e,i),this.applyMatrix4(hn),this}scale(t,e,i){return hn.makeScale(t,e,i),this.applyMatrix4(hn),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){let i=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(en.min,Gs.min),en.expandByPoint(Re),Re.addVectors(en.max,Gs.max),en.expandByPoint(Re)):(en.expandByPoint(Gs.min),en.expandByPoint(Gs.max))}en.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Re.fromBufferAttribute(o,l),c&&(as.fromBufferAttribute(t,l),Re.add(as)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Me(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,c[D]=new F;let h=new F,m=new F,d=new F,u=new St,x=new St,w=new St,g=new F,p=new F;function b(D,R,O){l[D]=l[R]=l[O]=1,h.fromBufferAttribute(i,D),m.fromBufferAttribute(i,R),d.fromBufferAttribute(i,O),u.fromBufferAttribute(r,D),x.fromBufferAttribute(r,R),w.fromBufferAttribute(r,O),m.sub(h),d.sub(h),x.sub(u),w.sub(u);let z=1/(x.x*w.y-w.x*x.y);isFinite(z)&&(g.copy(m).multiplyScalar(w.y).addScaledVector(d,-x.y).multiplyScalar(z),p.copy(d).multiplyScalar(x.x).addScaledVector(m,-w.x).multiplyScalar(z),o[D].add(g),o[R].add(g),o[O].add(g),c[D].add(p),c[R].add(p),c[O].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let D=0,R=y.length;D<R;++D){let O=y[D],z=O.start,W=O.count;for(let N=z,X=z+W;N<X;N+=3)b(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let S=new F,C=new F,E=new F,_=new F;function M(D){E.fromBufferAttribute(s,D),_.copy(E);let R=o[D];S.copy(R),S.sub(E.multiplyScalar(E.dot(R))).normalize(),C.crossVectors(_,R);let z=C.dot(c[D])<0?-1:1;a.setXYZW(D,S.x,S.y,S.z,z)}for(let D=0,R=i.count;D<R;++D)l[D]&&M(D);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,m=new F;if(t)for(let d=0,u=t.count;d<u;d+=3){let x=t.getX(d+0),w=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,g),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,w),l.fromBufferAttribute(i,g),o.add(h),c.add(h),l.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),m.subVectors(s,r),h.cross(m),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,m=o.normalized,d=new l.constructor(c.length*h),u=0,x=0;for(let w=0,g=c.length;w<g;w++){o.isInterleavedBufferAttribute?u=c[w]*o.data.stride+o.offset:u=c[w]*h;for(let p=0;p<h;p++)d[x++]=l[u++]}return new Me(d,h,m)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,m=l.length;h<m;h++){let d=l[h],u=t(d,i);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let m=0,d=l.length;m<d;m++){let u=l[m];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],m=r[l];for(let d=0,u=m.length;d<u;d++)h.push(m[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let m=a[l];this.addGroup(m.start,m.count,m.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ua=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ic,this.updateRanges=[],this.version=0,this.uuid=Ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Cu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Cu(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function Cu(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ei()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var We=new F,cr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?Jo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Uc(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Fc(t,this.data.array)}},Zl=new F,Up=new F,Fp=new kt,nn=class{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Zl.subVectors(i,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Zl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fp.getNormalMatrix(t),s=this.coplanarPoint(Zl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Op=0,ei=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Ei(),this.name="",this.type="Material",this.blending=Ps,this.side=bi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ot().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new nn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new St().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ms=class extends ei{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ot(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,Vs=new F,ls=new F,cs=new F,hs=new St,Hs=new St,Pd=new ae,ia=new F,Ws=new F,sa=new F,Ru=new St,Jl=new St,Pu=new St,hr=class extends ge{constructor(t=new Ms){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ua(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new cr(i,3,0,!1)),os.setAttribute("uv",new cr(i,2,3,!1))}this.geometry=os,this.material=t,this.center=new St(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),Pd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;ra(ia.set(-.5,-.5,0),cs,a,ls,s,r),ra(Ws.set(.5,-.5,0),cs,a,ls,s,r),ra(sa.set(.5,.5,0),cs,a,ls,s,r),Ru.set(0,0),Jl.set(1,0),Pu.set(1,1);let o=t.ray.intersectTriangle(ia,Ws,sa,!1,Vs);if(o===null&&(ra(Ws.set(-.5,.5,0),cs,a,ls,s,r),Jl.set(0,1),o=t.ray.intersectTriangle(ia,sa,Ws,!1,Vs),o===null))return;let c=t.ray.origin.distanceTo(Vs);c<t.near||c>t.far||e.push({distance:c,point:Vs.clone(),uv:$n.getInterpolation(Vs,ia,Ws,sa,Ru,Jl,Pu,new St),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ra(n,t,e,i,s,r){hs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Hs.x=r*hs.x-s*hs.y,Hs.y=s*hs.x+r*hs.y):Hs.copy(hs),n.copy(t),n.x+=Hs.x,n.y+=Hs.y,n.applyMatrix4(Pd)}var Kn=new F,Kl=new F,aa=new F,oa=new F,bs=class{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Kl.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),oa.copy(this.origin).sub(Kl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(aa),o=oa.dot(this.direction),c=-oa.dot(aa),l=oa.lengthSq(),h=Math.abs(1-a*a),m,d,u,x;if(h>0)if(m=a*c-o,d=a*o-c,x=r*h,m>=0)if(d>=-x)if(d<=x){let w=1/h;m*=w,d*=w,u=m*(m+a*d+2*o)+d*(a*m+d+2*c)+l}else d=r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;else d=-r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;else d<=-x?(m=Math.max(0,-(-a*r+o)),d=m>0?-r:Math.min(Math.max(-r,-c),r),u=-m*m+d*(d+2*c)+l):d<=x?(m=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(m=Math.max(0,-(a*r+o)),d=m>0?r:Math.min(Math.max(-r,-c),r),u=-m*m+d*(d+2*c)+l);else d=a>0?-r:r,m=Math.max(0,-(a*d+o)),u=-m*m+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Kl).addScaledVector(aa,d),u}intersectSphere(t,e){if(t.radius<0)return null;Kn.subVectors(t.center,this.origin);let i=Kn.dot(this.direction),s=Kn.dot(Kn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,m=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(t.min.z-d.z)*m,c=(t.max.z-d.z)*m):(o=(t.max.z-d.z)*m,c=(t.min.z-d.z)*m),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,m=t.x-a.x,d=t.y-a.y,u=t.z-a.z,x=e.x-a.x,w=e.y-a.y,g=e.z-a.z,p=i.x-a.x,b=i.y-a.y,y=i.z-a.z,S=Math.abs(c),C=Math.abs(l),E=Math.abs(h),_,M,D,R,O,z,W,N,X,Z,G,nt;if(S>=C&&S>=E?(D=c,z=m,X=x,nt=p,c>=0?(_=l,M=h,R=d,O=u,W=w,N=g,Z=b,G=y):(_=h,M=l,R=u,O=d,W=g,N=w,Z=y,G=b)):C>=E?(D=l,z=d,X=w,nt=b,l>=0?(_=h,M=c,R=u,O=m,W=g,N=x,Z=y,G=p):(_=c,M=h,R=m,O=u,W=x,N=g,Z=p,G=y)):(D=h,z=u,X=g,nt=y,h>=0?(_=c,M=l,R=m,O=d,W=x,N=w,Z=p,G=b):(_=l,M=c,R=d,O=m,W=w,N=x,Z=b,G=p)),D===0)return null;let V=_/D,et=M/D,it=1/D,At=R-V*z,It=O-et*z,q=W-V*X,st=N-et*X,ct=Z-V*nt,bt=G-et*nt,ut=ct*st-bt*q,Tt=At*bt-It*ct,Gt=q*It-st*At;if(s){if(ut<0||Tt<0||Gt<0)return null}else if((ut<0||Tt<0||Gt<0)&&(ut>0||Tt>0||Gt>0))return null;let Et=ut+Tt+Gt;if(Et===0)return null;let Wt=it*(ut*z+Tt*X+Gt*nt);return(Et>0?Wt<0:Wt>0)?null:this.at(Wt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class extends ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Iu=new ae,Ui=new bs,la=new mi,Lu=new F,ca=new F,ha=new F,ua=new F,$l=new F,da=new F,Du=new F,fa=new F,Jt=class extends ge{constructor(t=new Ne,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],m=r[c];h!==0&&($l.fromBufferAttribute(m,t),a?da.addScaledVector($l,h):da.addScaledVector($l.sub(e),h))}e.add(da)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),la.copy(i.boundingSphere),la.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(la.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(la,Lu)===null||Ui.origin.distanceToSquared(Lu)>(t.far-t.near)**2))&&(Iu.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Iu),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,m=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,w=d.length;x<w;x++){let g=d[x],p=a[g.materialIndex],b=Math.max(g.start,u.start),y=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let S=b,C=y;S<C;S+=3){let E=o.getX(S),_=o.getX(S+1),M=o.getX(S+2);s=pa(this,p,t,i,l,h,m,E,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),w=Math.min(o.count,u.start+u.count);for(let g=x,p=w;g<p;g+=3){let b=o.getX(g),y=o.getX(g+1),S=o.getX(g+2);s=pa(this,a,t,i,l,h,m,b,y,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,w=d.length;x<w;x++){let g=d[x],p=a[g.materialIndex],b=Math.max(g.start,u.start),y=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let S=b,C=y;S<C;S+=3){let E=S,_=S+1,M=S+2;s=pa(this,p,t,i,l,h,m,E,_,M),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let x=Math.max(0,u.start),w=Math.min(c.count,u.start+u.count);for(let g=x,p=w;g<p;g+=3){let b=g,y=g+1,S=g+2;s=pa(this,a,t,i,l,h,m,b,y,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Bp(n,t,e,i,s,r,a,o){let c;if(t.side===Je?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===bi,o),c===null)return null;fa.copy(o),fa.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(fa);return l<e.near||l>e.far?null:{distance:l,point:fa.clone(),object:n}}function pa(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,ca),n.getVertexPosition(c,ha),n.getVertexPosition(l,ua);let h=Bp(n,t,e,i,ca,ha,ua,Du);if(h){let m=new F;$n.getBarycoord(Du,ca,ha,ua,m),s&&(h.uv=$n.getInterpolatedAttribute(s,o,c,l,m,new St)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,c,l,m,new St)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,c,l,m,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};$n.getNormal(ca,ha,ua,d.normal),h.face=d,h.barycoord=m}return h}var ur=class extends Ze{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Pe,h=Pe,m,d){super(null,a,o,c,l,h,s,r,m,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dr=class extends Me{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new ae,Nu=new ae,ma=[],Uu=new Nn,zp=new ae,Xs=new Jt,qs=new mi,dn=class extends Jt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,zp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),Uu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,us),qs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(i),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,us),Nu.multiplyMatrices(i,us),Xs.matrixWorld=Nu,Xs.raycast(t,ma);for(let a=0,o=ma.length;a<o;a++){let c=ma[a];c.instanceId=r,c.object=this,e.push(c)}ma.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ur(new Float32Array(s*this.count),s,this.count,po,mn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fi=new mi,kp=new St(.5,.5),ga=new F,gi=class{constructor(t=new nn,e=new nn,i=new nn,s=new nn,r=new nn,a=new nn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=un,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],m=r[5],d=r[6],u=r[7],x=r[8],w=r[9],g=r[10],p=r[11],b=r[12],y=r[13],S=r[14],C=r[15];if(s[0].setComponents(l-a,u-h,p-x,C-b).normalize(),s[1].setComponents(l+a,u+h,p+x,C+b).normalize(),s[2].setComponents(l+o,u+m,p+w,C+y).normalize(),s[3].setComponents(l-o,u-m,p-w,C-y).normalize(),i)s[4].setComponents(c,d,g,S).normalize(),s[5].setComponents(l-c,u-d,p-g,C-S).normalize();else if(s[4].setComponents(l-c,u-d,p-g,C-S).normalize(),e===un)s[5].setComponents(l+c,u+d,p+g,C+S).normalize();else if(e===_s)s[5].setComponents(c,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=kp.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fu=new ae,Fa=class n{constructor(){this.coordinateSystem=un,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Fu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new gi),i[s].setFromProjectionMatrix(Fu,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new gi),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var fr=class extends Ze{constructor(t=[],e=ki,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ws=class extends Ze{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ni=class extends Ze{constructor(t,e,i=bn,s,r,a,o=Pe,c=Pe,l,h=Qn,m=1){if(h!==Qn&&h!==si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:m};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pr=class extends ni{constructor(t,e=bn,i=ki,s,r,a=Pe,o=Pe,c,l=Qn){let h={width:t,height:t,depth:1},m=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mr=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ie=class n extends Ne{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],m=[],d=0,u=0;x("z","y","x",-1,-1,i,e,t,a,r,0),x("z","y","x",1,-1,i,e,-t,a,r,1),x("x","z","y",1,1,t,i,e,s,a,2),x("x","z","y",1,-1,t,i,-e,s,a,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(m,2));function x(w,g,p,b,y,S,C,E,_,M,D){let R=S/_,O=C/M,z=S/2,W=C/2,N=E/2,X=_+1,Z=M+1,G=0,nt=0,V=new F;for(let et=0;et<Z;et++){let it=et*O-W;for(let At=0;At<X;At++){let It=At*R-z;V[w]=It*b,V[g]=it*y,V[p]=N,l.push(V.x,V.y,V.z),V[w]=0,V[g]=0,V[p]=E>0?1:-1,h.push(V.x,V.y,V.z),m.push(At/_),m.push(1-et/M),G+=1}}for(let et=0;et<M;et++)for(let it=0;it<_;it++){let At=d+it+X*et,It=d+it+X*(et+1),q=d+(it+1)+X*(et+1),st=d+(it+1)+X*et;c.push(At,It,st),c.push(It,q,st),nt+=6}o.addGroup(u,nt,D),u+=nt,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Es=class n extends Ne{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new F,h=new St;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let m=0,d=3;m<=e;m++,d+=3){let u=i+m/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let m=1;m<=e;m++)r.push(m,m+1,0);this.setIndex(r),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(o,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Un=class n extends Ne{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],m=[],d=[],u=[],x=0,w=[],g=i/2,p=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(u,2));function b(){let S=new F,C=new F,E=0,_=(e-t)/i;for(let M=0;M<=r;M++){let D=[],R=M/r,O=R*(e-t)+t;for(let z=0;z<=s;z++){let W=z/s,N=W*c+o,X=Math.sin(N),Z=Math.cos(N);C.x=O*X,C.y=-R*i+g,C.z=O*Z,m.push(C.x,C.y,C.z),S.set(X,_,Z).normalize(),d.push(S.x,S.y,S.z),u.push(W,1-R),D.push(x++)}w.push(D)}for(let M=0;M<s;M++)for(let D=0;D<r;D++){let R=w[D][M],O=w[D+1][M],z=w[D+1][M+1],W=w[D][M+1];(t>0||D!==0)&&(h.push(R,O,W),E+=3),(e>0||D!==r-1)&&(h.push(O,z,W),E+=3)}l.addGroup(p,E,0),p+=E}function y(S){let C=x,E=new St,_=new F,M=0,D=S===!0?t:e,R=S===!0?1:-1;for(let z=1;z<=s;z++)m.push(0,g*R,0),d.push(0,R,0),u.push(.5,.5),x++;let O=x;for(let z=0;z<=s;z++){let N=z/s*c+o,X=Math.cos(N),Z=Math.sin(N);_.x=D*Z,_.y=g*R,_.z=D*X,m.push(_.x,_.y,_.z),d.push(0,R,0),E.x=X*.5+.5,E.y=Z*.5*R+.5,u.push(E.x,E.y),x++}for(let z=0;z<s;z++){let W=C+z,N=O+z;S===!0?h.push(N,N+1,W):h.push(N+1,N,W),M+=3}l.addGroup(p,M,S===!0?1:2),p+=M}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},_i=class n extends Un{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new St:new F);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new F,s=[],r=[],a=[],o=new F,c=new ae;for(let u=0;u<=t;u++){let x=u/t;s[u]=this.getTangentAt(x,new F)}r[0]=new F,a[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),m=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),m<=l&&(l=m,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Yt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,x))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Yt(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let x=1;x<=t;x++)r[x].applyMatrix4(c.makeRotationAxis(s[x],u*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},gr=class extends fn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new St){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),m=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*m+this.aX,l=d*m+u*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends gr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,m){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+m)+(c-o)/m;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Ou=new F,Bu=new F,jl=new Bc,Ql=new Bc,tc=new Bc,As=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new F){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Bu.subVectors(s[0],s[1]).add(s[0]),l=Bu);let m=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Ou.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Ou),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,x=Math.pow(l.distanceToSquared(m),u),w=Math.pow(m.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);w<1e-4&&(w=1),x<1e-4&&(x=w),g<1e-4&&(g=w),jl.initNonuniformCatmullRom(l.x,m.x,d.x,h.x,x,w,g),Ql.initNonuniformCatmullRom(l.y,m.y,d.y,h.y,x,w,g),tc.initNonuniformCatmullRom(l.z,m.z,d.z,h.z,x,w,g)}else this.curveType==="catmullrom"&&(jl.initCatmullRom(l.x,m.x,d.x,h.x,this.tension),Ql.initCatmullRom(l.y,m.y,d.y,h.y,this.tension),tc.initCatmullRom(l.z,m.z,d.z,h.z,this.tension));return i.set(jl.calc(c),Ql.calc(c),tc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new F().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function zu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function Gp(n,t){let e=1-n;return e*e*t}function Vp(n,t){return 2*(1-n)*n*t}function Hp(n,t){return n*n*t}function Ks(n,t,e,i){return Gp(n,t)+Vp(n,e)+Hp(n,i)}function Wp(n,t){let e=1-n;return e*e*e*t}function Xp(n,t){let e=1-n;return 3*e*e*n*t}function qp(n,t){return 3*(1-n)*n*n*t}function Yp(n,t){return n*n*n*t}function $s(n,t,e,i,s){return Wp(n,t)+Xp(n,e)+qp(n,i)+Yp(n,s)}var Ba=class extends fn{constructor(t=new St,e=new St,i=new St,s=new St){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new St){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends fn{constructor(t=new F,e=new F,i=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ka=class extends fn{constructor(t=new St,e=new St){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new St){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new St){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends fn{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Va=class extends fn{constructor(t=new St,e=new St,i=new St){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new St){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_r=class extends fn{constructor(t=new F,e=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new F){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Ks(t,s.x,r.x,a.x),Ks(t,s.y,r.y,a.y),Ks(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ha=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new St){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return i.set(zu(o,c.x,l.x,h.x,m.x),zu(o,c.y,l.y,h.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new St().fromArray(s))}return this}},Zp=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:As,CubicBezierCurve:Ba,CubicBezierCurve3:za,EllipseCurve:gr,LineCurve:ka,LineCurve3:Ga,QuadraticBezierCurve:Va,QuadraticBezierCurve3:_r,SplineCurve:Ha});var Fn=class n extends Ne{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,m=t/o,d=e/c,u=[],x=[],w=[],g=[];for(let p=0;p<h;p++){let b=p*d-a;for(let y=0;y<l;y++){let S=y*m-r;x.push(S,-b,0),w.push(0,0,1),g.push(y/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let y=b+l*p,S=b+l*(p+1),C=b+1+l*(p+1),E=b+1+l*p;u.push(y,S,E),u.push(S,C,E)}this.setIndex(u),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(w,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Oi=class n extends Ne{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],m=new F,d=new F,u=[],x=[],w=[],g=[];for(let p=0;p<=i;p++){let b=[],y=p/i,S=a+y*o,C=t*Math.cos(S),E=Math.sqrt(t*t-C*C),_=0;p===0&&a===0?_=.5/e:p===i&&c===Math.PI&&(_=-.5/e);for(let M=0;M<=e;M++){let D=M/e,R=s+D*r;m.x=-E*Math.cos(R),m.y=C,m.z=E*Math.sin(R),x.push(m.x,m.y,m.z),d.copy(m).normalize(),w.push(d.x,d.y,d.z),g.push(D+_,1-y),b.push(l++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let y=h[p][b+1],S=h[p][b],C=h[p+1][b],E=h[p+1][b+1];(p!==0||a>0)&&u.push(y,S,E),(p!==i-1||c<Math.PI)&&u.push(S,C,E)}this.setIndex(u),this.setAttribute("position",new ue(x,3)),this.setAttribute("normal",new ue(w,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var xr=class n extends Ne{constructor(t=new _r(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,c=new F,l=new St,h=new F,m=[],d=[],u=[],x=[];w(),this.setIndex(x),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(u,2));function w(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),b(),p()}function g(y){h=t.getPointAt(y/e,h);let S=a.normals[y],C=a.binormals[y];for(let E=0;E<=s;E++){let _=E/s*Math.PI*2,M=Math.sin(_),D=-Math.cos(_);c.x=D*S.x+M*C.x,c.y=D*S.y+M*C.y,c.z=D*S.z+M*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,m.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let S=1;S<=s;S++){let C=(s+1)*(y-1)+(S-1),E=(s+1)*y+(S-1),_=(s+1)*y+S,M=(s+1)*(y-1)+S;x.push(C,E,M),x.push(E,_,M)}}function b(){for(let y=0;y<=e;y++)for(let S=0;S<=s;S++)l.x=y/e,l.y=S/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Zp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Vi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ku(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ku(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ke(n){let t={};for(let e=0;e<n.length;e++){let i=Vi(n[e]);for(let s in i)t[s]=i[s]}return t}function ku(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Jp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function zc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var Id={clone:Vi,merge:ke},Kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=Jp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Ot().setHex(s.value);break;case"v2":this.uniforms[i].value=new St().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new de().fromArray(s.value);break;case"m3":this.uniforms[i].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ae().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Wa=class extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var fe=class extends ei{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zo,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=ao,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Xa=class extends ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},qa=class extends ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ds(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function _a(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var xi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ya=class extends xi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ic,endingEnd:ic}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sc:r=t,o=2*e-i;break;case rc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case sc:a=t,c=2*i-e;break;case rc:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,m=this._offsetNext,d=this._weightPrev,u=this._weightNext,x=(i-e)/(s-e),w=x*x,g=w*x,p=-d*g+2*d*w-d*x,b=(1+d)*g+(-1.5-2*d)*w+(-.5+d)*x+1,y=(-1-u)*g+(1.5+u)*w+.5*x,S=u*g-u*w;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+b*a[l+C]+y*a[c+C]+S*a[m+C];return r}},Za=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),m=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*m+a[c+d]*h;return r}},Ja=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ka=class extends xi{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,m=this.outTangents;if(!h||!m){let x=(i-e)/(s-e),w=1-x;for(let g=0;g!==o;++g)r[g]=a[l+g]*w+a[c+g]*x;return r}let d=o*2,u=t-1;for(let x=0;x!==o;++x){let w=a[l+x],g=a[c+x],p=u*d+x*2,b=m[p],y=m[p+1],S=t*d+x*2,C=h[S],E=h[S+1],_=Qp(i,e,b,C,s);r[x]=Ld(_,w,y,E,g)}return r}};function Ld(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function jp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Qp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Ld(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=jp(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var an=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ds(e,this.TimeBufferType),this.values=ds(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:ds(t.times,Array),values:ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),_a(t.settings)&&(i.settings={inTangents:ds(t.settings.inTangents,Array),outTangents:ds(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case js:e=this.InterpolantFactoryMethodDiscrete;break;case Ia:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break;case nc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ft("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return js;case this.InterpolantFactoryMethodLinear:return Ia;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return nc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;_a(this.settings)&&(Gu(this.settings.inTangents,t),Gu(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;_a(this.settings)&&(Vu(this.settings.inTangents,t),Vu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){zt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){zt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&ap(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){zt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let m=o*i,d=m-i,u=m+i;for(let x=0;x!==i;++x){let w=e[m+x];if(w!==e[d+x]||w!==e[u+x]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let m=o*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[m+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,_a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Gu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function Vu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Ia;var vi=class extends an{constructor(t,e,i){super(t,e,i)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=js;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};$a.prototype.ValueTypeName="color";var ja=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};ja.prototype.ValueTypeName="number";var Qa=class extends xi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},vr=class extends an{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};vr.prototype.ValueTypeName="quaternion";vr.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends an{constructor(t,e,i){super(t,e,i)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=js;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends an{constructor(t,e,i,s){super(t,e,i,s)}};to.prototype.ValueTypeName="vector";var eo=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,m){return l.push(h,m),this},this.removeHandler=function(h){let m=l.indexOf(h);return m!==-1&&l.splice(m,2),this},this.getHandler=function(h){for(let m=0,d=l.length;m<d;m+=2){let u=l[m],x=l[m+1];if(u.global&&(u.lastIndex=0),u.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dd=new eo,no=class{constructor(t){this.manager=t!==void 0?t:Dd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends ge{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Sr=class extends yr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ot(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ec=new ae,Hu=new F,Wu=new F,io=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.mapType=$e,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gi,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Wu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ec.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ec,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===_s||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ec)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new F,va=new sn,Ln=new F,Mr=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,va,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,va,Ln.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(xa,va,Ln),Ln.x===1&&Ln.y===1&&Ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,va,Ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},pi=new F,Xu=new St,qu=new St,qe=class extends Mr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(Zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,e){return this.getViewBounds(t,Xu,qu),e.subVectors(qu,Xu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var br=class extends Mr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ac=class extends io{constructor(){super(new br(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wr=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new ac}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var fs=-90,ps=1,Ts=class extends ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(fs,ps,t,e);s.layers=this.layers,this.add(s);let r=new qe(fs,ps,t,e);r.layers=this.layers,this.add(r);let a=new qe(fs,ps,t,e);a.layers=this.layers,this.add(a);let o=new qe(fs,ps,t,e);o.layers=this.layers,this.add(o);let c=new qe(fs,ps,t,e);c.layers=this.layers,this.add(c);let l=new qe(fs,ps,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_s)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,m=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(m,d,u),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},so=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var kc="\\[\\]\\.:\\/",tm=new RegExp("["+kc+"]","g"),Gc="[^"+kc+"]",em="[^"+kc.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",Gc),im=/(WCOD+)?/.source.replace("WCOD",em),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),am=new RegExp("^"+nm+im+sm+rm+"$"),om=["material","materials","bones","map"],oc=class{constructor(t,e,i){let s=i||ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ce=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(tm,"")}static parseTrackName(t){let e=am.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);om.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ce.Composite=oc;ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ce.prototype.GetterByBindingType=[ce.prototype._getValue_direct,ce.prototype._getValue_array,ce.prototype._getValue_arrayElement,ce.prototype._getValue_toArray];ce.prototype.SetterByBindingTypeAndVersioning=[[ce.prototype._setValue_direct,ce.prototype._setValue_direct_setNeedsUpdate,ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_array,ce.prototype._setValue_array_setNeedsUpdate,ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_arrayElement,ce.prototype._setValue_arrayElement_setNeedsUpdate,ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ce.prototype._setValue_fromArray,ce.prototype._setValue_fromArray_setNeedsUpdate,ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wv=new Float32Array(1);var Cs=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Yc=class Yc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Yc.prototype.isMatrix2=!0;var lc=Yc;var Er=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Vc(n,t,e,i){let s=lm(i);switch(e){case Ac:return n*t;case po:return n*t/s.components*s.byteLength;case mo:return n*t/s.components*s.byteLength;case wi:return n*t*2/s.components*s.byteLength;case go:return n*t*2/s.components*s.byteLength;case Tc:return n*t*3/s.components*s.byteLength;case En:return n*t*4/s.components*s.byteLength;case _o:return n*t*4/s.components*s.byteLength;case Rr:case Pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Lr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vo:case So:return Math.max(n,16)*Math.max(t,8)/4;case xo:case yo:return Math.max(n,8)*Math.max(t,8)/2;case Mo:case bo:case Eo:case Ao:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case wo:case Dr:case To:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Io:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Do:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case No:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case zo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Ho:case Wo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Xo:case qo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Nr:case Yo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lm(n){switch(n){case $e:case Mc:return{byteLength:1,components:1};case Ls:case bc:case wn:return{byteLength:2,components:1};case uo:case fo:return{byteLength:2,components:4};case bn:case ho:case mn:return{byteLength:4,components:1};case wc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ef(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function hm(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,m=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:m}}function i(o,c,l){let h=c.array,m=c.updateRanges;if(n.bindBuffer(l,o),m.length===0)n.bufferSubData(l,0,h);else{m.sort((u,x)=>u.start-x.start);let d=0;for(let u=1;u<m.length;u++){let x=m[d],w=m[u];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++d,m[d]=w)}m.length=d+1;for(let u=0,x=m.length;u<x;u++){let w=m[u];n.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vm=`#ifdef USE_BATCHING
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
#endif`,ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Um=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,km="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Km=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,jm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,lg=`uniform sampler2D dfgLUT;
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
}`,cg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yg=`#if defined( USE_POINTS_UV )
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
#endif`,Sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`#ifdef USE_MORPHTARGETS
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
#endif`,Tg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,Kg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$g=`#ifdef USE_SKINNING
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
#endif`,jg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s0=`#ifdef USE_TRANSMISSION
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
#endif`,r0=`#ifdef USE_TRANSMISSION
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
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u0=`uniform sampler2D t2D;
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
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`uniform float backgroundBlurriness;
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
}`,p0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g0=`#include <common>
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
}`,_0=`#if DEPTH_PACKING == 3200
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
}`,x0=`#define DISTANCE
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
}`,v0=`#define DISTANCE
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M0=`uniform float scale;
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
}`,b0=`uniform vec3 diffuse;
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
}`,w0=`#include <common>
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
}`,E0=`uniform vec3 diffuse;
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
}`,A0=`#define LAMBERT
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
}`,T0=`#define LAMBERT
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
}`,C0=`#define MATCAP
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
}`,R0=`#define MATCAP
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
}`,P0=`#define NORMAL
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
}`,I0=`#define NORMAL
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
}`,L0=`#define PHONG
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
}`,D0=`#define PHONG
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
}`,N0=`#define STANDARD
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
}`,U0=`#define STANDARD
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
}`,F0=`#define TOON
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
}`,O0=`#define TOON
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
}`,B0=`uniform float size;
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
}`,z0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,G0=`uniform vec3 color;
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
}`,V0=`uniform float rotation;
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
}`,H0=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:xm,batching_pars_vertex:vm,batching_vertex:ym,begin_vertex:Sm,beginnormal_vertex:Mm,bsdfs:bm,iridescence_fragment:wm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Am,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Cm,clipping_planes_vertex:Rm,color_fragment:Pm,color_pars_fragment:Im,color_pars_vertex:Lm,color_vertex:Dm,common:Nm,defaultnormal_vertex:Um,displacementmap_pars_vertex:Fm,displacementmap_vertex:Om,emissivemap_fragment:Bm,emissivemap_pars_fragment:zm,colorspace_fragment:km,colorspace_pars_fragment:Gm,envmap_fragment:Vm,envmap_common_pars_fragment:Hm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ng,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:Km,gradientmap_pars_fragment:$m,lightmap_pars_fragment:jm,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ig,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,lightprobes_pars_fragment:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:xg,map_particle_fragment:vg,map_particle_pars_fragment:yg,metalnessmap_fragment:Sg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:bg,morphcolor_vertex:wg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Ag,morphtarget_vertex:Tg,normal_fragment_begin:Cg,normal_fragment_maps:Rg,normal_pars_fragment:Pg,normal_pars_vertex:Ig,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Og,opaque_fragment:Bg,packing:zg,premultiplied_alpha_fragment:kg,project_vertex:Gg,dithering_fragment:Vg,dithering_pars_fragment:Hg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Kg,skinning_pars_vertex:$g,skinning_vertex:jg,skinnormal_vertex:Qg,specularmap_fragment:t0,specularmap_pars_fragment:e0,tonemapping_fragment:n0,tonemapping_pars_fragment:i0,transmission_fragment:s0,transmission_pars_fragment:r0,uv_pars_fragment:a0,uv_pars_vertex:o0,uv_vertex:l0,worldpos_vertex:c0,background_vert:h0,background_frag:u0,backgroundCube_vert:d0,backgroundCube_frag:f0,cube_vert:p0,cube_frag:m0,depth_vert:g0,depth_frag:_0,distance_vert:x0,distance_frag:v0,equirect_vert:y0,equirect_frag:S0,linedashed_vert:M0,linedashed_frag:b0,meshbasic_vert:w0,meshbasic_frag:E0,meshlambert_vert:A0,meshlambert_frag:T0,meshmatcap_vert:C0,meshmatcap_frag:R0,meshnormal_vert:P0,meshnormal_frag:I0,meshphong_vert:L0,meshphong_frag:D0,meshphysical_vert:N0,meshphysical_frag:U0,meshtoon_vert:F0,meshtoon_frag:O0,points_vert:B0,points_frag:z0,shadow_vert:k0,shadow_frag:G0,sprite_vert:V0,sprite_frag:H0},Mt={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},kn={basic:{uniforms:ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:ke([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:ke([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:ke([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Ot(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:ke([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:ke([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:ke([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:ke([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:ke([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:ke([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distance:{uniforms:ke([Mt.common,Mt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distance_vert,fragmentShader:Zt.distance_frag},shadow:{uniforms:ke([Mt.lights,Mt.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};kn.physical={uniforms:ke([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};var Ko={r:0,b:0,g:0},W0=new ae,nf=new kt;nf.set(-1,0,0,0,1,0,0,0,1);function X0(n,t,e,i,s,r){let a=new Ot(0),o=s===!0?0:1,c,l,h=null,m=0,d=null;function u(b){let y=b.isScene===!0?b.background:null;if(y&&y.isTexture){let S=b.backgroundBlurriness>0;y=t.get(y,S)}return y}function x(b){let y=!1,S=u(b);S===null?g(a,o):S&&S.isColor&&(g(S,1),y=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(b,y){let S=u(y);S&&S.isCubeTexture?(l===void 0&&(l=new Jt(new Ie(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Vi(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(W0.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(nf),l.material.toneMapped=$t.getTransfer(S.colorSpace)!==ie,(h!==S||m!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,m=S.version,d=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Jt(new Fn(2,2),new On({name:"BackgroundMaterial",uniforms:Vi(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:bi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=$t.getTransfer(S.colorSpace)!==ie,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||m!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,m=S.version,d=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function g(b,y){b.getRGB(Ko,zc(n)),e.buffers.color.setClear(Ko.r,Ko.g,Ko.b,y,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,y=1){a.set(b),o=y,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:x,addToRenderList:w,dispose:p}}function q0(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(O,z,W,N,X){let Z=!1,G=m(O,N,W,z);r!==G&&(r=G,l(r.object)),Z=u(O,N,W,X),Z&&x(O,N,W,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,S(O,z,W,N),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function c(){return n.createVertexArray()}function l(O){return n.bindVertexArray(O)}function h(O){return n.deleteVertexArray(O)}function m(O,z,W,N){let X=N.wireframe===!0,Z=i[z.id];Z===void 0&&(Z={},i[z.id]=Z);let G=O.isInstancedMesh===!0?O.id:0,nt=Z[G];nt===void 0&&(nt={},Z[G]=nt);let V=nt[W.id];V===void 0&&(V={},nt[W.id]=V);let et=V[X];return et===void 0&&(et=d(c()),V[X]=et),et}function d(O){let z=[],W=[],N=[];for(let X=0;X<e;X++)z[X]=0,W[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:N,object:O,attributes:{},index:null}}function u(O,z,W,N){let X=r.attributes,Z=z.attributes,G=0,nt=W.getAttributes();for(let V in nt)if(nt[V].location>=0){let it=X[V],At=Z[V];if(At===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(At=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(At=O.instanceColor)),it===void 0||it.attribute!==At||At&&it.data!==At.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function x(O,z,W,N){let X={},Z=z.attributes,G=0,nt=W.getAttributes();for(let V in nt)if(nt[V].location>=0){let it=Z[V];it===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(it=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(it=O.instanceColor));let At={};At.attribute=it,it&&it.data&&(At.data=it.data),X[V]=At,G++}r.attributes=X,r.attributesNum=G,r.index=N}function w(){let O=r.newAttributes;for(let z=0,W=O.length;z<W;z++)O[z]=0}function g(O){p(O,0)}function p(O,z){let W=r.newAttributes,N=r.enabledAttributes,X=r.attributeDivisors;W[O]=1,N[O]===0&&(n.enableVertexAttribArray(O),N[O]=1),X[O]!==z&&(n.vertexAttribDivisor(O,z),X[O]=z)}function b(){let O=r.newAttributes,z=r.enabledAttributes;for(let W=0,N=z.length;W<N;W++)z[W]!==O[W]&&(n.disableVertexAttribArray(W),z[W]=0)}function y(O,z,W,N,X,Z,G){G===!0?n.vertexAttribIPointer(O,z,W,X,Z):n.vertexAttribPointer(O,z,W,N,X,Z)}function S(O,z,W,N){w();let X=N.attributes,Z=W.getAttributes(),G=z.defaultAttributeValues;for(let nt in Z){let V=Z[nt];if(V.location>=0){let et=X[nt];if(et===void 0&&(nt==="instanceMatrix"&&O.instanceMatrix&&(et=O.instanceMatrix),nt==="instanceColor"&&O.instanceColor&&(et=O.instanceColor)),et!==void 0){let it=et.normalized,At=et.itemSize,It=t.get(et);if(It===void 0)continue;let q=It.buffer,st=It.type,ct=It.bytesPerElement,bt=st===n.INT||st===n.UNSIGNED_INT||et.gpuType===ho;if(et.isInterleavedBufferAttribute){let ut=et.data,Tt=ut.isInterleavedBuffer===!0?ut.stride:ut.itemSize,Gt=et.offset;if(ut.isInstancedInterleavedBuffer||ut.isInstancedBufferAttribute){for(let Et=0;Et<V.locationSize;Et++)p(V.location+Et,ut.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Et=0;Et<V.locationSize;Et++)g(V.location+Et);n.bindBuffer(n.ARRAY_BUFFER,q);for(let Et=0;Et<V.locationSize;Et++)y(V.location+Et,At/V.locationSize,st,it,Tt*ct,(Gt+At/V.locationSize*Et)*ct,bt)}else{if(et.isInstancedBufferAttribute){for(let ut=0;ut<V.locationSize;ut++)p(V.location+ut,et.meshPerAttribute);O.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ut=0;ut<V.locationSize;ut++)g(V.location+ut);n.bindBuffer(n.ARRAY_BUFFER,q);for(let ut=0;ut<V.locationSize;ut++)y(V.location+ut,At/V.locationSize,st,it,At*ct,At/V.locationSize*ut*ct,bt)}}else if(G!==void 0){let it=G[nt];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(V.location,it);break;case 3:n.vertexAttrib3fv(V.location,it);break;case 4:n.vertexAttrib4fv(V.location,it);break;default:n.vertexAttrib1fv(V.location,it)}}}}b()}function C(){D();for(let O in i){let z=i[O];for(let W in z){let N=z[W];for(let X in N){let Z=N[X];for(let G in Z)h(Z[G].object),delete Z[G];delete N[X]}}delete i[O]}}function E(O){if(i[O.id]===void 0)return;let z=i[O.id];for(let W in z){let N=z[W];for(let X in N){let Z=N[X];for(let G in Z)h(Z[G].object),delete Z[G];delete N[X]}}delete i[O.id]}function _(O){for(let z in i){let W=i[z];for(let N in W){let X=W[N];if(X[O.id]===void 0)continue;let Z=X[O.id];for(let G in Z)h(Z[G].object),delete Z[G];delete X[O.id]}}}function M(O){for(let z in i){let W=i[z],N=O.isInstancedMesh===!0?O.id:0,X=W[N];if(X!==void 0){for(let Z in X){let G=X[Z];for(let nt in G)h(G[nt].object),delete G[nt];delete X[Z]}delete W[N],Object.keys(W).length===0&&delete i[z]}}}function D(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:R,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:w,enableAttribute:g,disableUnusedAttributes:b}}function Y0(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==En&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let M=_===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==$e&&_!==mn&&!M&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Ft("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let m=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&m===!1;e.reversedDepthBuffer===!0&&m===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&m===!0&&Ft("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:m,maxTextures:u,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:S,maxSamples:C,samples:E}}function J0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new nn,o=new kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,d){let u=m.length!==0||d||i!==0||s;return s=d,i=m.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,d){e=h(m,d,0)},this.setState=function(m,d,u){let x=m.clippingPlanes,w=m.clipIntersection,g=m.clipShadows,p=n.get(m);if(!s||x===null||x.length===0||r&&!g)r?h(null):l();else{let b=r?0:i,y=b*4,S=p.clippingState||null;c.value=S,S=h(x,d,y,u);for(let C=0;C!==y;++C)S[C]=e[C];p.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(m,d,u,x){let w=m!==null?m.length:0,g=null;if(w!==0){if(g=c.value,x!==!0||g===null){let p=u+w*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,S=u;y!==w;++y,S+=4)a.copy(m[y]).applyMatrix4(b,o),a.normal.toArray(g,S),g[S+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,g}}var Or=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new fr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ie(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:Bi});r.uniforms.tEquirect.value=e;let a=new Jt(s,r),o=e.minFilter;return e.minFilter===ii&&(e.minFilter=Ye),new Ts(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Nd=256,K0=3,$0=20,sf=256,rf=16,j0=3,Q0=new F,t_=new Ot,jo=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ts(1,10,null),this._boxMesh=new Jt(new Ie(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Q0}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let m=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,x=c.autoClearStencil,w=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,w===null&&(t.background=c.getClearColor(t_));let g=new Ts(i,s,h);return g.position.copy(o),g.update(c,t),c.autoClear=m,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=x,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Nd,Nc(t))}_fromTexture(t,e){t.mapping===ki||t.mapping===Is?this._setSize(t.image.length===0?Nd:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=Ud(t,!1,!1),i=Math.log2(t)-K0;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ud(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===ki||t.mapping===Is?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fd()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=e_(),this._integrationMaterial=n_());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/rf);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-j0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(sf*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=i_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function Ud(n,t,e){return new Or(n,{minFilter:ii,generateMipmaps:t,type:wn,colorSpace:Qs,depthBuffer:e})}function Br(n,t,e){return new On({name:n,uniforms:t,vertexShader:Zt.cube_vert,fragmentShader:e,side:Je,blending:Bi,depthTest:!1,depthWrite:!1})}function e_(){return Br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${sf}u

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
	`)}function n_(){return Br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:rf}},`

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
	`)}function i_(){return Br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$0}
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
	`)}function Fd(){return Br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Od(){return Br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function s_(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===oo||u===lo)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let w=new Or(x.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",l),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,x=u===oo||u===lo,w=u===ki||u===Is;if(x||w){let g=e.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new jo(n)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let b=d.image;return x&&b&&b.height>0||w&&b&&c(b)?(i===null&&(i=new jo(n)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===oo?d.mapping=ki:u===lo&&(d.mapping=Is),d}function c(d){let u=0,x=6;for(let w=0;w<x;w++)d[w]!==void 0&&u++;return u===x}function l(d){let u=d.target;u.removeEventListener("dispose",l);let x=t.get(u);x!==void 0&&(t.delete(u),x.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let x=e.get(u);x!==void 0&&(e.delete(u),x.dispose())}function m(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:m}}function r_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ys("WebGLRenderer: "+i+" extension not supported."),s}}}function a_(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){c(x.target)}function c(x){x.index!==null&&t.remove(x.index);for(let g in x.attributes)t.remove(x.attributes[g]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let w=r.get(x);w&&(t.remove(w),r.delete(x)),i.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,e.memory.geometries--}function l(x,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function h(x){let w=x.attributes;for(let g in w)t.update(w[g],n.ARRAY_BUFFER)}function m(x){let w=x.index,g=x.attributes.position,p=0;if(g===void 0)return;let b=w!==null?w.array.length:g.array.length/3-1,y=g.count>=65535?lr:or,S=new y(Math.ceil(b/3)*6,1),C=S.array;if(w!==null){let _=w.array;p=w.version;for(let M=0,D=0;M<b;M+=3){let R=_[M+0],O=_[M+1],z=_[M+2];C[D++]=R,C[D++]=O,C[D++]=O,C[D++]=z,C[D++]=z,C[D++]=R}}else{p=g.version;for(let _=0,M=0;_<b;_+=3){let D=_+0,R=_+1,O=_+2;C[M++]=D,C[M++]=R,C[M++]=R,C[M++]=O,C[M++]=O,C[M++]=D}}S.version=p;let E=r.get(x);E&&t.remove(E),r.set(x,S)}function d(x){let w=r.get(x);if(w){let g=x.index;g!==null&&w.version<g.version&&m(x)}else m(x);return r.get(x)}function u(){for(let x in s){let w=s[x].deref();w!==void 0&&c(w)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function o_(n,t,e){let i;function s(m){i=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function c(m,d){n.drawElements(i,d,r,m*a),e.update(d,i,1)}function l(m,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,m*a,u),e.update(d,i,u))}function h(m,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,m,0,u);let w=0;for(let g=0;g<u;g++)w+=d[g];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function l_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function c_(n,t,e){let i=new WeakMap,s=new de;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==m){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;u===!0&&(y=1),x===!0&&(y=2),w===!0&&(y=3);let S=o.attributes.position.count*y,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let E=new Float32Array(S*C*4*m),_=new ir(E,S,C,m);_.type=mn,_.needsUpdate=!0;let M=y*4;for(let R=0;R<m;R++){let O=g[R],z=p[R],W=b[R],N=S*C*4*R;for(let X=0;X<O.count;X++){let Z=X*M;u===!0&&(s.fromBufferAttribute(O,X),E[N+Z+0]=s.x,E[N+Z+1]=s.y,E[N+Z+2]=s.z,E[N+Z+3]=0),x===!0&&(s.fromBufferAttribute(z,X),E[N+Z+4]=s.x,E[N+Z+5]=s.y,E[N+Z+6]=s.z,E[N+Z+7]=0),w===!0&&(s.fromBufferAttribute(W,X),E[N+Z+8]=s.x,E[N+Z+9]=s.y,E[N+Z+10]=s.z,E[N+Z+11]=W.itemSize===4?s.w:1)}}d={count:m,texture:_,size:new St(S,C)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let u=0;for(let w=0;w<l.length;w++)u+=l[w];let x=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function h_(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,m=l.geometry,d=t.get(l,m);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var u_={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[_c]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[yc]:"NEUTRAL_TONE_MAPPING",[xc]:"CUSTOM_TONE_MAPPING"};function d_(n,t,e,i,s,r){let a=new rn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Ne;h.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ue([0,2,0,0,2,0],2));let m=new Wa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Jt(h,m),u=new br(-1,1,1,-1,0,1),x=null,w=null,g=!1,p,b=null,y=[],S=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let _=0;_<y.length;_++){let M=y[_];M.setSize&&M.setSize(C,E)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;let E=a.width,_=a.height;y.length>0&&o===null&&(o=new rn(E,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new rn(E,_,{type:wn,depthBuffer:!1,stencilBuffer:!1}));let M=s===!0&&y.some(D=>D.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new ni(E,_),r===!0&&(l.format=si,l.type=Gi)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let D=0;D<y.length;D++){let R=y[D];R.setSize&&R.setSize(E,_),M&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(l)}},this.begin=function(C,E){if(g||C.toneMapping===Bn&&y.length===0)return!1;if(b=E,E!==null){let _=E.width,M=E.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return S===!1&&C.setRenderTarget(a),p=C.toneMapping,C.toneMapping=Bn,!0},this.hasRenderPass=function(){return S},this.end=function(C,E){C.toneMapping=p,g=!0;let _=a,M=o;for(let D=0;D<y.length;D++){let R=y[D];R.enabled!==!1&&(R.render(C,M,_,E),R.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(x!==C.outputColorSpace||w!==C.toneMapping){x=C.outputColorSpace,w=C.toneMapping,m.defines={},$t.getTransfer(x)===ie&&(m.defines.SRGB_TRANSFER="");let D=u_[w];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=_.texture,C.setRenderTarget(b),C.render(d,u),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),m.dispose()}}var af=new Ze,of=new ni(1,1),lf=new pr(1),cf=new ir,hf=new Na,uf=new fr,Bd=[],zd=[],kd=new Float32Array(16),Gd=new Float32Array(9),Vd=new Float32Array(4);function Ns(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Bd[s];if(r===void 0&&(r=new Float32Array(s),Bd[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function we(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function tl(n,t){let e=zd[t];e===void 0&&(e=new Int32Array(t),zd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function f_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function p_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),we(e,t)}}function m_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),we(e,t)}}function g_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),we(e,t)}}function __(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),we(e,i)}}function x_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),we(e,i)}}function v_(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),we(e,t)}else{if(be(e,i))return;kd.set(i),n.uniformMatrix4fv(this.addr,!1,kd),we(e,i)}}function y_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function S_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),we(e,t)}}function M_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),we(e,t)}}function b_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),we(e,t)}}function w_(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function E_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),we(e,t)}}function A_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),we(e,t)}}function T_(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),we(e,t)}}function el(n){return n.version===0&&(n.compareFunction=Pc,n.needsUpdate=!0),n}function C_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=el(of):r=af,e.setTexture2D(t||r,s)}function R_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||hf,s)}function P_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=el(lf):r=uf,e.setTextureCube(t||r,s)}function I_(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||cf,s)}function L_(n){switch(n){case 5126:return f_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return x_;case 35676:return v_;case 5124:case 35670:return y_;case 35667:case 35671:return S_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return E_;case 36295:return A_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return R_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return I_}}function D_(n,t){n.uniform1fv(this.addr,t)}function N_(n,t){let e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function U_(n,t){let e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function F_(n,t){let e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function O_(n,t){let e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function B_(n,t){let e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function z_(n,t){let e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function k_(n,t){n.uniform1iv(this.addr,t)}function G_(n,t){n.uniform2iv(this.addr,t)}function V_(n,t){n.uniform3iv(this.addr,t)}function H_(n,t){n.uniform4iv(this.addr,t)}function W_(n,t){n.uniform1uiv(this.addr,t)}function X_(n,t){n.uniform2uiv(this.addr,t)}function q_(n,t){n.uniform3uiv(this.addr,t)}function Y_(n,t){n.uniform4uiv(this.addr,t)}function Z_(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=el(of):a=af;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function J_(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hf,r[a])}function K_(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=el(lf):a=uf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function $_(n,t,e){let i=this.cache,s=t.length,r=tl(e,s);be(i,r)||(n.uniform1iv(this.addr,r),we(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||cf,r[a])}function j_(n){switch(n){case 5126:return D_;case 35664:return N_;case 35665:return U_;case 35666:return F_;case 35674:return O_;case 35675:return B_;case 35676:return z_;case 5124:case 35670:return k_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return H_;case 5125:return W_;case 36294:return X_;case 36295:return q_;case 36296:return Y_;case 35678:case 36198:case 36298:case 36306:case 35682:return Z_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return $_}}var Kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=L_(e.type)}},$c=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Hd(n,t){n.seq.push(t),n.map[t.id]=t}function Q_(n,t,e){let i=n.name,s=i.length;for(Zc.lastIndex=0;;){let r=Zc.exec(i),a=Zc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Hd(e,l===void 0?new Kc(o,n,t):new $c(o,n,t));break}else{let m=e.map[o];m===void 0&&(m=new jc(o),Hd(e,m)),e=m}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Q_(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function Wd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var tx=37297,ex=0;function nx(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Xd=new kt;function ix(n){$t._getMatrix(Xd,$t.workingColorSpace,n);let t=`mat3( ${Xd.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case tr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function qd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+nx(n.getShaderSource(t),o)}else return r}function sx(n,t){let e=ix(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var rx={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[_c]:"ACESFilmic",[vc]:"AgX",[yc]:"Neutral",[xc]:"Custom"};function ax(n,t){let e=rx[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var $o=new F;function ox(){$t.getLuminanceCoefficients($o);let n=$o.x.toFixed(4),t=$o.y.toFixed(4),e=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function cx(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hx(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Fr(n){return n!==""}function Yd(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Zd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ux=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qc(n){return n.replace(ux,dx)}function dx(n,t){let e=Zt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Qc(e)}var fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jd(n){return n.replace(fx,px)}function px(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kd(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var mx={[Ar]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function gx(n){return mx[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _x={[Is]:"ENVMAP_MODE_REFRACTION"};function xx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_x[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vx={[ao]:"ENVMAP_BLENDING_MULTIPLY",[pd]:"ENVMAP_BLENDING_MIX",[md]:"ENVMAP_BLENDING_ADD"};function yx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vx[n.combine]||"ENVMAP_BLENDING_NONE"}function Sx(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=gx(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=xx(e),m=yx(e),d=lx(e),u=cx(r),x=s.createProgram(),w,g,p=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fr).join(`
`),w.length>0&&(w+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Fr).join(`
`),g.length>0&&(g+=`
`)):(w=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),g=[Kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+m:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Bn?ax("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,sx("linearToOutputTexel",e.outputColorSpace),ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Qc(a),a=Yd(a,e),a=Zd(a,e),o=Qc(o),o=Yd(o,e),o=Zd(o,e),a=Jd(a),o=Jd(o),e.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,g=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let b=p+w+a,y=p+g+o,S=Wd(s,s.VERTEX_SHADER,b),C=Wd(s,s.FRAGMENT_SHADER,y);s.attachShader(x,S),s.attachShader(x,C),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(R){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(x)||"",z=s.getShaderInfoLog(S)||"",W=s.getShaderInfoLog(C)||"",N=O.trim(),X=z.trim(),Z=W.trim(),G=!0,nt=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,S,C);else{let V=qd(s,S,"vertex"),et=qd(s,C,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+N+`
`+V+`
`+et)}else N!==""?Ft("WebGLProgram: Program Info Log:",N):(X===""||Z==="")&&(nt=!1);nt&&(R.diagnostics={runnable:G,programLog:N,vertexShader:{log:X,prefix:w},fragmentShader:{log:Z,prefix:g}})}s.deleteShader(S),s.deleteShader(C),_=new Ds(s,x),M=hx(s,x)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(x,tx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ex++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=C,this}var Mx=0,th=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new eh(t),e.set(t,i)),i}},eh=class{constructor(t){this.id=Mx++,this.code=t,this.usedTimes=0}};function bx(n){return n===wi||n===Dr||n===Nr}function wx(n,t,e,i,s,r){let a=new sr,o=new th,c=new Set,l=[],h=new Map,m=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,M,D,R,O,z){let W=R.fog,N=O.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||X,Z),nt=d[_.type],V=i.precision;_.precision!==null&&(V=i.getMaxPrecision(_.precision),V!==_.precision&&Ft("WebGLProgram.getParameters:",_.precision,"not supported, using",V,"instead."));let et=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,it=et!==void 0?et.length:0,At=0;N.morphAttributes.position!==void 0&&(At=1),N.morphAttributes.normal!==void 0&&(At=2),N.morphAttributes.color!==void 0&&(At=3);let It,q,st,ct;if(nt){let _t=kn[nt];It=_t.vertexShader,q=_t.fragmentShader}else{It=_.vertexShader,q=_.fragmentShader;let _t=o.getVertexShaderStage(_),ee=o.getFragmentShaderStage(_);o.update(_,_t,ee),st=_t.id,ct=ee.id}let bt=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),Tt=O.isInstancedMesh===!0,Gt=O.isBatchedMesh===!0,Et=!!_.map,Wt=!!_.matcap,jt=!!G,Bt=jt&&G.isPMREMTexture===!0,se=!!_.aoMap,re=!!_.lightMap,Le=!!_.bumpMap&&_.wireframe===!1,Kt=!!_.normalMap,Ue=!!_.displacementMap,ye=!!_.emissiveMap,Fe=!!_.metalnessMap,Ke=!!_.roughnessMap,Ve=_.anisotropy>0,B=_.clearcoat>0,He=_.diffuseRoughness>0,oe=_.dispersion>0,le=_.retroreflectivity>0,yt=_.iridescence>0,xe=_.sheen>0,Lt=_.transmission>0,wt=Ve&&!!_.anisotropyMap,T=B&&!!_.clearcoatMap,v=B&&!!_.clearcoatNormalMap,k=B&&!!_.clearcoatRoughnessMap,at=He&&!!_.diffuseRoughnessMap,j=yt&&!!_.iridescenceMap,dt=yt&&!!_.iridescenceThicknessMap,mt=xe&&!!_.sheenColorMap,K=xe&&!!_.sheenRoughnessMap,$=!!_.specularMap,ft=!!_.specularColorMap,P=!!_.specularIntensityMap,Q=Lt&&!!_.transmissionMap,J=Lt&&!!_.thicknessMap,gt=!!_.gradientMap,ht=!!_.alphaMap,pt=_.alphaTest>0,Rt=!!_.alphaHash,Xt=!!_.extensions,lt=Bn;_.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(lt=n.toneMapping);let Dt=Bt?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Vt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:It,fragmentShader:q,defines:_.defines,customVertexShaderID:st,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:V,batching:Gt,batchingColor:Gt&&O._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&O.instanceColor!==null,instancingMorph:Tt&&O.morphTexture!==null,outputColorSpace:bt===null?n.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:Wt,envMap:jt,envMapMode:jt&&G.mapping,envMapPMREM:Bt,envMapMaxLod:Bt?Dt.length-1:null,envMapSize:Bt?Dt[0].width:null,aoMap:se,lightMap:re,bumpMap:Le,normalMap:Kt,displacementMap:Ue,emissiveMap:ye,normalMapObjectSpace:Kt&&_.normalMapType===xd,normalMapTangentSpace:Kt&&_.normalMapType===Zo,packedNormalMap:Kt&&_.normalMapType===Zo&&bx(_.normalMap.format),metalnessMap:Fe,roughnessMap:Ke,anisotropy:Ve,anisotropyMap:wt,clearcoat:B,clearcoatMap:T,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:He,diffuseRoughnessMap:at,dispersion:oe,retroreflection:le,iridescence:yt,iridescenceMap:j,iridescenceThicknessMap:dt,sheen:xe,sheenColorMap:mt,sheenRoughnessMap:K,specularMap:$,specularColorMap:ft,specularIntensityMap:P,transmission:Lt,transmissionMap:Q,thicknessMap:J,gradientMap:gt,opaque:_.transparent===!1&&_.blending===Ps&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:pt,alphaHash:Rt,combine:_.combine,mapUv:Et&&u(_.map.channel),aoMapUv:se&&u(_.aoMap.channel),lightMapUv:re&&u(_.lightMap.channel),bumpMapUv:Le&&u(_.bumpMap.channel),normalMapUv:Kt&&u(_.normalMap.channel),displacementMapUv:Ue&&u(_.displacementMap.channel),emissiveMapUv:ye&&u(_.emissiveMap.channel),metalnessMapUv:Fe&&u(_.metalnessMap.channel),roughnessMapUv:Ke&&u(_.roughnessMap.channel),anisotropyMapUv:wt&&u(_.anisotropyMap.channel),clearcoatMapUv:T&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:at&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:j&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&u(_.sheenRoughnessMap.channel),specularMapUv:$&&u(_.specularMap.channel),specularColorMapUv:ft&&u(_.specularColorMap.channel),specularIntensityMapUv:P&&u(_.specularIntensityMap.channel),transmissionMapUv:Q&&u(_.transmissionMap.channel),thicknessMapUv:J&&u(_.thicknessMap.channel),alphaMapUv:ht&&u(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Kt||Ve),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Et||ht),fog:!!W,useFog:_.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&Kt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ut,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:At,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:z.filter(_t=>_t.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===ie,decodeVideoTextureEmissive:ye&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===ie,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===Je,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Xt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&_.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Vt.vertexUv1s=c.has(1),Vt.vertexUv2s=c.has(2),Vt.vertexUv3s=c.has(3),c.clear(),Vt}function w(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(g(M,_),p(M,_),M.push(n.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function g(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let M=d[_.type],D;if(M){let R=kn[M];D=Id.clone(R.uniforms)}else D=_.uniforms;return D}function y(_,M){let D=h.get(M);return D!==void 0?++D.usedTimes:(D=new Sx(n,M,_,s),l.push(D),h.set(M,D)),D}function S(_){if(--_.usedTimes===0){let M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function C(_){o.remove(_)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:w,getUniforms:b,acquireProgram:y,releaseProgram:S,releaseShaderCache:C,programs:l,dispose:E}}function Ex(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ax(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function $d(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,x,w,g,p){let b=n[t];return b===void 0?(b={id:d.id,object:d,geometry:u,material:x,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:g,group:p},n[t]=b):(b.id=d.id,b.object=d,b.geometry=u,b.material=x,b.materialVariant=a(d),b.groupOrder=w,b.renderOrder=d.renderOrder,b.z=g,b.group=p),t++,b}function c(d,u,x,w,g,p,b){b.reversedDepth===!0&&(g=-g);let y=o(d,u,x,w,g,p);x.transmission>0?i.push(y):x.transparent===!0?s.push(y):e.push(y)}function l(d,u,x,w,g,p){let b=o(d,u,x,w,g,p);x.transmission>0?i.unshift(b):x.transparent===!0?s.unshift(b):e.unshift(b)}function h(d,u){e.length>1&&e.sort(d||Ax),i.length>1&&i.sort(u||$d),s.length>1&&s.sort(u||$d)}function m(){for(let d=t,u=n.length;d<u;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:m,sort:h}}function Tx(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new jd,n.set(i,[a])):s>=r.length?(a=new jd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Cx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new F,color:new Ot};break;case"SpotLight":e={position:new F,direction:new F,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":e={color:new Ot,position:new F,halfWidth:new F,halfHeight:new F};break}return n[t.id]=e,e}}}function Rx(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Px=0;function Ix(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lx(n){let t=new Cx,e=Rx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let s=new F,r=new ae,a=new ae;function o(l){let h=0,m=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let u=0,x=0,w=0,g=0,p=0,b=0,y=0,S=0,C=0,E=0,_=0,M=0,D=0,R=0;l.sort(Ix);for(let z=0,W=l.length;z<W;z++){let N=l[z],X=N.color,Z=N.intensity,G=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===wi?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=X.r*Z,m+=X.g*Z,d+=X.b*Z;else if(N.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(N.sh.coefficients[V],Z);R++}else if(N.isSunLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize.copy(et.mapSize).multiply(et.getFrameExtents()),i.sunShadow[x]=it,i.sunShadowMap[x]=nt;let At=et.getViewportCount();for(let It=0;It<At;It++)i.sunShadowMatrix[w+It]=et.getMatrix(It),i.sunShadowCascade[w+It]=et._cascadeData[It];w+=At,x++}i.sun[u]=V,u++}else if(N.isDirectionalLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.directionalShadow[g]=it,i.directionalShadowMap[g]=nt,i.directionalShadowMatrix[g]=N.shadow.matrix,C++}i.directional[g]=V,g++}else if(N.isSpotLight){let V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(X).multiplyScalar(Z),V.distance=G,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,i.spot[b]=V;let et=N.shadow;if(N.map&&(i.spotLightMap[M]=N.map,M++,et.updateMatrices(N),N.castShadow&&D++),i.spotLightMatrix[b]=et.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,i.spotShadow[b]=it,i.spotShadowMap[b]=nt,_++}b++}else if(N.isRectAreaLight){let V=t.get(N);V.color.copy(X).multiplyScalar(Z),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=V,y++}else if(N.isPointLight){let V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity),V.distance=N.distance,V.decay=N.decay,N.castShadow){let et=N.shadow,it=e.get(N);it.shadowIntensity=et.intensity,it.shadowBias=et.bias,it.shadowNormalBias=et.normalBias,it.shadowRadius=et.radius,it.shadowMapSize=et.mapSize,it.shadowCameraNear=et.camera.near,it.shadowCameraFar=et.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=N.shadow.matrix,E++}i.point[p]=V,p++}else if(N.isHemisphereLight){let V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(Z),V.groundColor.copy(N.groundColor).multiplyScalar(Z),i.hemi[S]=V,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Mt.LTC_FLOAT_1,i.rectAreaLTC2=Mt.LTC_FLOAT_2):(i.rectAreaLTC1=Mt.LTC_HALF_1,i.rectAreaLTC2=Mt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=d;let O=i.hash;(O.sunLength!==u||O.directionalLength!==g||O.pointLength!==p||O.spotLength!==b||O.rectAreaLength!==y||O.hemiLength!==S||O.numSunShadows!==x||O.numDirectionalShadows!==C||O.numPointShadows!==E||O.numSpotShadows!==_||O.numSpotMaps!==M||O.numLightProbes!==R)&&(i.sun.length=u,i.directional.length=g,i.spot.length=b,i.rectArea.length=y,i.point.length=p,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-D,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=R,O.sunLength=u,O.directionalLength=g,O.pointLength=p,O.spotLength=b,O.rectAreaLength=y,O.hemiLength=S,O.numSunShadows=x,O.numDirectionalShadows=C,O.numPointShadows=E,O.numSpotShadows=_,O.numSpotMaps=M,O.numLightProbes=R,i.version=Px++)}function c(l,h){let m=0,d=0,u=0,x=0,w=0,g=0,p=h.matrixWorldInverse;for(let b=0,y=l.length;b<y;b++){let S=l[b];if(S.isSunLight){let C=i.sun[m];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),m++}else if(S.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),d++}else if(S.isSpotLight){let C=i.spot[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(p),x++}else if(S.isRectAreaLight){let C=i.rectArea[w];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),w++}else if(S.isPointLight){let C=i.point[u];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){let C=i.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:i}}function Qd(n){let t=new Lx(n),e=[],i=[],s=[];function r(m){h.camera=m,e.length=0,i.length=0,s.length=0}function a(m){m.isLightProbeGrid?s.push(m):e.push(m)}function o(m){i.push(m)}function c(){t.setup(e),s.sort((m,d)=>m.priority-d.priority||m.id-d.id)}function l(m){t.setupView(e,m)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Dx(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Qd(n),t.set(s,[o])):r>=a.length?(o=new Qd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Nx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
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
}`,Fx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Ox=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],tf=new ae,Ur=new F,Jc=new F;function Bx(n,t,e){let i=new gi,s=new St,r=new St,a=new de,o=new Xa,c=new qa,l={},h=e.maxTextureSize,m={[bi]:Je,[Je]:bi,[pn]:pn},d=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:Nx,fragmentShader:Ux}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let x=new Ne;x.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Jt(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let p=this.type;this.render=function(E,_,M){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===Ju&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ar);let D=n.getRenderTarget(),R=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Bi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let W=p!==this.type;W&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(X=>X.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,X=E.length;N<X;N++){let Z=E[N],G=Z.shadow;if(G===void 0){Ft("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y));let V=n.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||W===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Rs){if(Z.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new rn(s.x,s.y,{format:wi,type:wn,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new ni(s.x,s.y,mn),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=Qn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pe,G.map.depthTexture.magFilter=Pe}else Z.isPointLight?(G.map=new Or(s.x),G.map.depthTexture=new pr(s.x,bn)):(G.map=new rn(s.x,s.y),G.map.depthTexture=new ni(s.x,s.y,bn)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=Qn,this.type===Ar?(G.map.depthTexture.compareFunction=V?Rc:Cc,G.map.depthTexture.minFilter=Ye,G.map.depthTexture.magFilter=Ye):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pe,G.map.depthTexture.magFilter=Pe);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let et=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,M);let it=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:M.layers;for(let At=0;At<et;At++){let It=G.getCamera(At);if(Z.isPointLight){let q=G.camera,st=G.matrix,ct=Z.distance||q.far;ct!==q.far&&(q.far=ct,q.updateProjectionMatrix()),Ur.setFromMatrixPosition(Z.matrixWorld),q.position.copy(Ur),Jc.copy(q.position),Jc.add(Fx[At]),q.up.copy(Ox[At]),q.lookAt(Jc),q.updateMatrixWorld(),st.makeTranslation(-Ur.x,-Ur.y,-Ur.z),tf.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tf,q.coordinateSystem,q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)n.setRenderTarget(G.map,At),n.clear();else{At===0&&(n.setRenderTarget(G.map),n.clear());let q=G.getViewport(At);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(a)}i=G.getFrustum(At),S(_,M,It,Z,it,this.type)}G.isPointLightShadow!==!0&&this.type===Rs&&b(G,M),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(D,R,O)};function b(E,_){let M=t.update(w);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new rn(s.x,s.y,{format:wi,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(_,null,M,d,w,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(_,null,M,u,w,null)}function y(E,_,M,D){let R=null,O=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)R=O;else if(R=M.isPointLight===!0?c:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=R.uuid,W=_.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let X=N[W];X===void 0&&(X=R.clone(),N[W]=X,_.addEventListener("dispose",C)),R=X}if(R.visible=_.visible,R.wireframe=_.wireframe,D===Rs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:m[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,M.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let z=n.properties.get(R);z.light=M}return R}function S(E,_,M,D,R,O){if(E.visible===!1)return;if(E.layers.test(R)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&O===Rs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);let N=t.update(E),X=E.material;if(Array.isArray(X)){let Z=N.groups;for(let G=0,nt=Z.length;G<nt;G++){let V=Z[G],et=X[V.materialIndex];if(et&&et.visible){let it=y(E,et,D,O);E.onBeforeShadow(n,E,_,M,N,it,V),n.renderBufferDirect(M,null,N,it,E,V),E.onAfterShadow(n,E,_,M,N,it,V)}}}else if(X.visible){let Z=y(E,X,D,O);E.onBeforeShadow(n,E,_,M,N,Z,null),n.renderBufferDirect(M,null,N,Z,E,null),E.onAfterShadow(n,E,_,M,N,Z,null)}}let W=E.children;for(let N=0,X=W.length;N<X;N++)S(W[N],_,M,D,R,O)}function C(E){E.target.removeEventListener("dispose",C);for(let M in l){let D=l[M],R=E.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}function zx(n,t){function e(){let P=!1,Q=new de,J=null,gt=new de(0,0,0,0);return{setMask:function(ht){J!==ht&&!P&&(n.colorMask(ht,ht,ht,ht),J=ht)},setLocked:function(ht){P=ht},setClear:function(ht,pt,Rt,Xt,lt){lt===!0&&(ht*=Xt,pt*=Xt,Rt*=Xt),Q.set(ht,pt,Rt,Xt),gt.equals(Q)===!1&&(n.clearColor(ht,pt,Rt,Xt),gt.copy(Q))},reset:function(){P=!1,J=null,gt.set(-1,0,0,0)}}}function i(){let P=!1,Q=!1,J=null,gt=null,ht=null;return{setReversed:function(pt){if(Q!==pt){let Rt=t.get("EXT_clip_control");pt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Q=pt;let Xt=ht;ht=null,this.setClear(Xt)}},getReversed:function(){return Q},setTest:function(pt){pt?ut(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(pt){J!==pt&&!P&&(n.depthMask(pt),J=pt)},setFunc:function(pt){if(Q&&(pt=Cd[pt]),gt!==pt){switch(pt){case Ma:n.depthFunc(n.NEVER);break;case ba:n.depthFunc(n.ALWAYS);break;case wa:n.depthFunc(n.LESS);break;case gs:n.depthFunc(n.LEQUAL);break;case Ea:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case Ta:n.depthFunc(n.GREATER);break;case Ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}gt=pt}},setLocked:function(pt){P=pt},setClear:function(pt){ht!==pt&&(ht=pt,Q&&(pt=1-pt),n.clearDepth(pt))},reset:function(){P=!1,J=null,gt=null,ht=null,Q=!1}}}function s(){let P=!1,Q=null,J=null,gt=null,ht=null,pt=null,Rt=null,Xt=null,lt=null;return{setTest:function(Dt){P||(Dt?ut(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Dt){Q!==Dt&&!P&&(n.stencilMask(Dt),Q=Dt)},setFunc:function(Dt,Vt,_t){(J!==Dt||gt!==Vt||ht!==_t)&&(n.stencilFunc(Dt,Vt,_t),J=Dt,gt=Vt,ht=_t)},setOp:function(Dt,Vt,_t){(pt!==Dt||Rt!==Vt||Xt!==_t)&&(n.stencilOp(Dt,Vt,_t),pt=Dt,Rt=Vt,Xt=_t)},setLocked:function(Dt){P=Dt},setClear:function(Dt){lt!==Dt&&(n.clearStencil(Dt),lt=Dt)},reset:function(){P=!1,Q=null,J=null,gt=null,ht=null,pt=null,Rt=null,Xt=null,lt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},m={},d={},u=new WeakMap,x=[],w=null,g=!1,p=null,b=null,y=null,S=null,C=null,E=null,_=null,M=new Ot(0,0,0),D=0,R=!1,O=null,z=null,W=null,N=null,X=null,Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=nt>=1):V.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=nt>=2);let et=null,it={},At=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),q=new de().fromArray(At),st=new de().fromArray(It);function ct(P,Q,J,gt){let ht=new Uint8Array(4),pt=n.createTexture();n.bindTexture(P,pt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Rt=0;Rt<J;Rt++)P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY?n.texImage3D(Q,0,n.RGBA,1,1,gt,0,n.RGBA,n.UNSIGNED_BYTE,ht):n.texImage2D(Q+Rt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ht);return pt}let bt={};bt[n.TEXTURE_2D]=ct(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=ct(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=ct(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=ct(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(n.DEPTH_TEST),a.setFunc(gs),Le(!1),Kt(cc),ut(n.CULL_FACE),se(Bi);function ut(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Tt(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function Gt(P,Q){return d[P]!==Q?(n.bindFramebuffer(P,Q),d[P]=Q,P===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Q),P===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Q),!0):!1}function Et(P,Q){let J=x,gt=!1;if(P){J=u.get(Q),J===void 0&&(J=[],u.set(Q,J));let ht=P.textures;if(J.length!==ht.length||J[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Rt=ht.length;pt<Rt;pt++)J[pt]=n.COLOR_ATTACHMENT0+pt;J.length=ht.length,gt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,gt=!0);gt&&n.drawBuffers(J)}function Wt(P){return w!==P?(n.useProgram(P),w=P,!0):!1}let jt={[zi]:n.FUNC_ADD,[$u]:n.FUNC_SUBTRACT,[ju]:n.FUNC_REVERSE_SUBTRACT};jt[Qu]=n.MIN,jt[td]=n.MAX;let Bt={[ed]:n.ZERO,[nd]:n.ONE,[id]:n.SRC_COLOR,[dc]:n.SRC_ALPHA,[cd]:n.SRC_ALPHA_SATURATE,[od]:n.DST_COLOR,[rd]:n.DST_ALPHA,[sd]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[ld]:n.ONE_MINUS_DST_COLOR,[ad]:n.ONE_MINUS_DST_ALPHA,[hd]:n.CONSTANT_COLOR,[ud]:n.ONE_MINUS_CONSTANT_COLOR,[dd]:n.CONSTANT_ALPHA,[fd]:n.ONE_MINUS_CONSTANT_ALPHA};function se(P,Q,J,gt,ht,pt,Rt,Xt,lt,Dt){if(P===Bi){g===!0&&(Tt(n.BLEND),g=!1);return}if(g===!1&&(ut(n.BLEND),g=!0),P!==Ku){if(P!==p||Dt!==R){if((b!==zi||C!==zi)&&(n.blendEquation(n.FUNC_ADD),b=zi,C=zi),Dt)switch(P){case Ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tr:n.blendFunc(n.ONE,n.ONE);break;case hc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",P);break}else switch(P){case Ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Tr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case hc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uc:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",P);break}y=null,S=null,E=null,_=null,M.set(0,0,0),D=0,p=P,R=Dt}return}ht=ht||Q,pt=pt||J,Rt=Rt||gt,(Q!==b||ht!==C)&&(n.blendEquationSeparate(jt[Q],jt[ht]),b=Q,C=ht),(J!==y||gt!==S||pt!==E||Rt!==_)&&(n.blendFuncSeparate(Bt[J],Bt[gt],Bt[pt],Bt[Rt]),y=J,S=gt,E=pt,_=Rt),(Xt.equals(M)===!1||lt!==D)&&(n.blendColor(Xt.r,Xt.g,Xt.b,lt),M.copy(Xt),D=lt),p=P,R=!1}function re(P,Q){P.side===pn?Tt(n.CULL_FACE):ut(n.CULL_FACE);let J=P.side===Je;Q&&(J=!J),Le(J),P.blending===Ps&&P.transparent===!1?se(Bi):se(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);let gt=P.stencilWrite;o.setTest(gt),gt&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ye(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?ut(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Le(P){O!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),O=P)}function Kt(P){P!==Yu?(ut(n.CULL_FACE),P!==z&&(P===cc?n.cullFace(n.BACK):P===Zu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),z=P}function Ue(P){P!==W&&(G&&n.lineWidth(P),W=P)}function ye(P,Q,J){P?(ut(n.POLYGON_OFFSET_FILL),(N!==Q||X!==J)&&(N=Q,X=J,a.getReversed()&&(Q=-Q,J=-J),n.polygonOffset(Q,J))):Tt(n.POLYGON_OFFSET_FILL)}function Fe(P){P?ut(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function Ke(P){P===void 0&&(P=n.TEXTURE0+Z-1),et!==P&&(n.activeTexture(P),et=P)}function Ve(P,Q,J){J===void 0&&(et===null?J=n.TEXTURE0+Z-1:J=et);let gt=it[J];gt===void 0&&(gt={type:void 0,texture:void 0},it[J]=gt),(gt.type!==P||gt.texture!==Q)&&(et!==J&&(n.activeTexture(J),et=J),n.bindTexture(P,Q||bt[P]),gt.type=P,gt.texture=Q)}function B(){let P=it[et];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function He(){try{n.compressedTexImage2D(...arguments)}catch(P){zt("WebGLState:",P)}}function oe(){try{n.compressedTexImage3D(...arguments)}catch(P){zt("WebGLState:",P)}}function le(){try{n.texSubImage2D(...arguments)}catch(P){zt("WebGLState:",P)}}function yt(){try{n.texSubImage3D(...arguments)}catch(P){zt("WebGLState:",P)}}function xe(){try{n.compressedTexSubImage2D(...arguments)}catch(P){zt("WebGLState:",P)}}function Lt(){try{n.compressedTexSubImage3D(...arguments)}catch(P){zt("WebGLState:",P)}}function wt(){try{n.texStorage2D(...arguments)}catch(P){zt("WebGLState:",P)}}function T(){try{n.texStorage3D(...arguments)}catch(P){zt("WebGLState:",P)}}function v(){try{n.texImage2D(...arguments)}catch(P){zt("WebGLState:",P)}}function k(){try{n.texImage3D(...arguments)}catch(P){zt("WebGLState:",P)}}function at(P){return m[P]!==void 0?m[P]:n.getParameter(P)}function j(P,Q){m[P]!==Q&&(n.pixelStorei(P,Q),m[P]=Q)}function dt(P){q.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),q.copy(P))}function mt(P){st.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),st.copy(P))}function K(P,Q){let J=l.get(Q);J===void 0&&(J=new WeakMap,l.set(Q,J));let gt=J.get(P);gt===void 0&&(gt=n.getUniformBlockIndex(Q,P.name),n.uniformBlockBinding(Q,gt,gt),J.set(P,gt))}function $(P,Q,J){let ht=l.get(Q).get(P);c[ht]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,ht,J),c[ht]=J)}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},m={},et=null,it={},d={},c={},u=new WeakMap,x=[],w=null,g=!1,p=null,b=null,y=null,S=null,C=null,E=null,_=null,M=new Ot(0,0,0),D=0,R=!1,O=null,z=null,W=null,N=null,X=null,q.set(0,0,n.canvas.width,n.canvas.height),st.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ut,disable:Tt,bindFramebuffer:Gt,drawBuffers:Et,useProgram:Wt,setBlending:se,setMaterial:re,setFlipSided:Le,setCullFace:Kt,setLineWidth:Ue,setPolygonOffset:ye,setScissorTest:Fe,activeTexture:Ke,bindTexture:Ve,unbindTexture:B,compressedTexImage2D:He,compressedTexImage3D:oe,texImage2D:v,texImage3D:k,pixelStorei:j,getParameter:at,updateUBOMapping:K,uniformBlockBinding:$,texStorage2D:wt,texStorage3D:T,texSubImage2D:le,texSubImage3D:yt,compressedTexSubImage2D:xe,compressedTexSubImage3D:Lt,scissor:dt,viewport:mt,reset:ft}}function kx(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new St,h=new WeakMap,m=new Set,d,u=new WeakMap,x=new Set,w=new FinalizationRegistry(T=>x.delete(T)),g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(T){}function p(T,v){return g?new OffscreenCanvas(T,v):er("canvas")}function b(T,v,k){let at=1,j=wt(T);if((j.width>k||j.height>k)&&(at=k/Math.max(j.width,j.height)),at<1)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap||typeof VideoFrame!="undefined"&&T instanceof VideoFrame){let dt=Math.floor(at*j.width),mt=Math.floor(at*j.height);d===void 0&&(d=p(dt,mt));let K=v?p(dt,mt):d;return K.width=dt,K.height=mt,K.getContext("2d").drawImage(T,0,0,dt,mt),Ft("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+dt+"x"+mt+")."),K}else return"data"in T&&Ft("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function y(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function C(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(T,v,k,at,j,dt=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let mt;at&&(mt=t.get("EXT_texture_norm16"),mt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===n.RED&&(k===n.FLOAT&&(K=n.R32F),k===n.HALF_FLOAT&&(K=n.R16F),k===n.UNSIGNED_BYTE&&(K=n.R8),k===n.UNSIGNED_SHORT&&mt&&(K=mt.R16_EXT),k===n.SHORT&&mt&&(K=mt.R16_SNORM_EXT)),v===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.R8UI),k===n.UNSIGNED_SHORT&&(K=n.R16UI),k===n.UNSIGNED_INT&&(K=n.R32UI),k===n.BYTE&&(K=n.R8I),k===n.SHORT&&(K=n.R16I),k===n.INT&&(K=n.R32I)),v===n.RG&&(k===n.FLOAT&&(K=n.RG32F),k===n.HALF_FLOAT&&(K=n.RG16F),k===n.UNSIGNED_BYTE&&(K=n.RG8),k===n.UNSIGNED_SHORT&&mt&&(K=mt.RG16_EXT),k===n.SHORT&&mt&&(K=mt.RG16_SNORM_EXT)),v===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RG8UI),k===n.UNSIGNED_SHORT&&(K=n.RG16UI),k===n.UNSIGNED_INT&&(K=n.RG32UI),k===n.BYTE&&(K=n.RG8I),k===n.SHORT&&(K=n.RG16I),k===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGB8UI),k===n.UNSIGNED_SHORT&&(K=n.RGB16UI),k===n.UNSIGNED_INT&&(K=n.RGB32UI),k===n.BYTE&&(K=n.RGB8I),k===n.SHORT&&(K=n.RGB16I),k===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),k===n.UNSIGNED_INT&&(K=n.RGBA32UI),k===n.BYTE&&(K=n.RGBA8I),k===n.SHORT&&(K=n.RGBA16I),k===n.INT&&(K=n.RGBA32I)),v===n.RGB&&(k===n.UNSIGNED_SHORT&&mt&&(K=mt.RGB16_EXT),k===n.SHORT&&mt&&(K=mt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(K=n.R11F_G11F_B10F)),v===n.RGBA){let $=dt?tr:$t.getTransfer(j);k===n.FLOAT&&(K=n.RGBA32F),k===n.HALF_FLOAT&&(K=n.RGBA16F),k===n.UNSIGNED_BYTE&&(K=$===ie?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&mt&&(K=mt.RGBA16_EXT),k===n.SHORT&&mt&&(K=mt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function _(T,v){let k;return T?v===null||v===bn||v===Gi?k=n.DEPTH24_STENCIL8:v===mn?k=n.DEPTH32F_STENCIL8:v===Ls&&(k=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bn||v===Gi?k=n.DEPTH_COMPONENT24:v===mn?k=n.DEPTH_COMPONENT32F:v===Ls&&(k=n.DEPTH_COMPONENT16),k}function M(T,v){return y(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Ye?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function D(T){let v=new WeakRef(T);i.get(T).__ref=v,x.add(v),w.register(T,v,v)}function R(T){let v=i.get(T).__ref;v!==void 0&&(x.delete(v),w.unregister(v))}function O(T){W(T.target)}function z(T){N(T.target)}function W(T){T.removeEventListener("dispose",O),R(T),Z(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&m.delete(T)}function N(T){T.removeEventListener("dispose",z),R(T),nt(T)}function X(){for(let T of x){let v=T.deref();v!==void 0&&(v.isRenderTarget===!0?N(v):W(v))}x.clear(),m.clear()}function Z(T){let v=i.get(T);if(v.__webglInit===void 0)return;let k=T.source,at=u.get(k);if(at){let j=at[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&G(T),Object.keys(at).length===0&&u.delete(k)}i.remove(T)}function G(T){let v=i.get(T);n.deleteTexture(v.__webglTexture);let k=T.source,at=u.get(k);delete at[v.__cacheKey],a.memory.textures--}function nt(T){let v=i.get(T);v.__depthDisposeCallback&&v.__depthDisposeCallback();let k=T.depthTexture;if(k&&k.renderTarget===T&&W(k),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let dt=0;dt<v.__webglFramebuffer[j].length;dt++)n.deleteFramebuffer(v.__webglFramebuffer[j][dt]);else n.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)n.deleteFramebuffer(v.__webglFramebuffer[j]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let at=T.textures;for(let j=0,dt=at.length;j<dt;j++){let mt=i.get(at[j]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(at[j])}i.remove(T)}let V=0;function et(){V=0}function it(){return V}function At(T){V=T}function It(){let T=V;return T>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),V+=1,T}function q(T){let v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.mipmapsAutoUpdate),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function st(T,v){let k=i.get(T);if(T.isVideoTexture&&xe(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){let at=T.image;if(at===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{re(k,T,v);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+v)}function ct(T,v){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){re(k,T,v);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+v)}function bt(T,v){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){re(k,T,v);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+v)}function ut(T,v){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Le(k,T,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+v)}let Tt={[Ra]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Pa]:n.MIRRORED_REPEAT},Gt={[Pe]:n.NEAREST,[gd]:n.NEAREST_MIPMAP_NEAREST,[Cr]:n.NEAREST_MIPMAP_LINEAR,[Ye]:n.LINEAR,[co]:n.LINEAR_MIPMAP_NEAREST,[ii]:n.LINEAR_MIPMAP_LINEAR},Et={[yd]:n.NEVER,[Pc]:n.ALWAYS,[Sd]:n.LESS,[Cc]:n.LEQUAL,[Md]:n.EQUAL,[Rc]:n.GEQUAL,[bd]:n.GREATER,[wd]:n.NOTEQUAL};function Wt(T,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ye||v.magFilter===co||v.magFilter===Cr||v.magFilter===ii||v.minFilter===Ye||v.minFilter===co||v.minFilter===Cr||v.minFilter===ii)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Tt[v.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Tt[v.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Tt[v.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,Gt[v.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,Gt[v.minFilter]),v.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pe||v.minFilter!==Cr&&v.minFilter!==ii||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function jt(T,v){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",O),D(v));let at=v.source,j=u.get(at);j===void 0&&(j={},u.set(at,j));let dt=q(v);if(dt!==T.__cacheKey){j[dt]===void 0&&(j[dt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),j[dt].usedTimes++;let mt=j[T.__cacheKey];mt!==void 0&&(j[T.__cacheKey].usedTimes--,mt.usedTimes===0&&G(v)),T.__cacheKey=dt,T.__webglTexture=j[dt].texture}return k}function Bt(T,v,k){return Math.floor(Math.floor(T/k)/v)}function se(T,v,k,at){let dt=T.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,k,at,v.data);else{dt.sort((P,Q)=>P.start-Q.start);let mt=0;for(let P=1;P<dt.length;P++){let Q=dt[mt],J=dt[P],gt=Q.start+Q.count,ht=Bt(J.start,v.width,4),pt=Bt(Q.start,v.width,4);J.start<=gt+1&&ht===pt&&Bt(J.start+J.count-1,v.width,4)===ht?Q.count=Math.max(Q.count,J.start+J.count-Q.start):(++mt,dt[mt]=J)}dt.length=mt+1;let K=e.getParameter(n.UNPACK_ROW_LENGTH),$=e.getParameter(n.UNPACK_SKIP_PIXELS),ft=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let P=0,Q=dt.length;P<Q;P++){let J=dt[P],gt=Math.floor(J.start/4),ht=Math.ceil(J.count/4),pt=gt%v.width,Rt=Math.floor(gt/v.width),Xt=ht,lt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Rt),e.texSubImage2D(n.TEXTURE_2D,0,pt,Rt,Xt,lt,k,at,v.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,K),e.pixelStorei(n.UNPACK_SKIP_PIXELS,$),e.pixelStorei(n.UNPACK_SKIP_ROWS,ft)}}function re(T,v,k){let at=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(at=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(at=n.TEXTURE_3D);let j=jt(T,v),dt=v.source;e.bindTexture(at,T.__webglTexture,n.TEXTURE0+k);let mt=i.get(dt);if(dt.version!==mt.__version||j===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&v.image instanceof ImageBitmap)===!1){let lt=$t.getPrimaries($t.workingColorSpace),Dt=v.colorSpace===ri?null:$t.getPrimaries(v.colorSpace),Vt=v.colorSpace===ri||lt===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment);let $=b(v.image,!1,s.maxTextureSize);$=Lt(v,$);let ft=r.convert(v.format,v.colorSpace),P=r.convert(v.type),Q=E(v.internalFormat,ft,P,v.normalized,v.colorSpace,v.isVideoTexture);Wt(at,v);let J,gt=v.mipmaps,ht=v.isVideoTexture!==!0,pt=mt.__version===void 0||j===!0,Rt=dt.dataReady,Xt=M(v,$);if(v.isDepthTexture)Q=_(v.format===si,v.type),pt&&(ht?e.texStorage2D(n.TEXTURE_2D,1,Q,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ft,P,null));else if(v.isDataTexture)if(gt.length>0){ht&&pt&&e.texStorage2D(n.TEXTURE_2D,Xt,Q,gt[0].width,gt[0].height);for(let lt=0,Dt=gt.length;lt<Dt;lt++)J=gt[lt],ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,J.width,J.height,ft,P,J.data):e.texImage2D(n.TEXTURE_2D,lt,Q,J.width,J.height,0,ft,P,J.data);v.generateMipmaps=!1}else ht?(pt&&e.texStorage2D(n.TEXTURE_2D,Xt,Q,$.width,$.height),Rt&&se(v,$,ft,P)):e.texImage2D(n.TEXTURE_2D,0,Q,$.width,$.height,0,ft,P,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ht&&pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,Q,gt[0].width,gt[0].height,$.depth);for(let lt=0,Dt=gt.length;lt<Dt;lt++)if(J=gt[lt],v.format!==En)if(ft!==null)if(ht){if(Rt)if(v.layerUpdates.size>0){let Vt=Vc(J.width,J.height,v.format,v.type);for(let _t of v.layerUpdates){let ee=J.data.subarray(_t*Vt/J.data.BYTES_PER_ELEMENT,(_t+1)*Vt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,_t,J.width,J.height,1,ft,ee)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,J.width,J.height,$.depth,ft,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,lt,Q,J.width,J.height,$.depth,0,J.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ht?Rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,lt,0,0,0,J.width,J.height,$.depth,ft,P,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,lt,Q,J.width,J.height,$.depth,0,ft,P,J.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ht&&pt&&e.texStorage2D(n.TEXTURE_2D,Xt,Q,gt[0].width,gt[0].height);for(let lt=0,Dt=gt.length;lt<Dt;lt++)J=gt[lt],v.format!==En?ft!==null?ht?Rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,lt,0,0,J.width,J.height,ft,J.data):e.compressedTexImage2D(n.TEXTURE_2D,lt,Q,J.width,J.height,0,J.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,J.width,J.height,ft,P,J.data):e.texImage2D(n.TEXTURE_2D,lt,Q,J.width,J.height,0,ft,P,J.data)}else if(v.isDataArrayTexture)if(ht){if(pt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Xt,Q,$.width,$.height,$.depth),Rt)if(v.layerUpdates.size>0){let lt=Vc($.width,$.height,v.format,v.type);for(let Dt of v.layerUpdates){let Vt=$.data.subarray(Dt*lt/$.data.BYTES_PER_ELEMENT,(Dt+1)*lt/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Dt,$.width,$.height,1,ft,P,Vt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,ft,P,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Q,$.width,$.height,$.depth,0,ft,P,$.data);else if(v.isData3DTexture)ht?(pt&&e.texStorage3D(n.TEXTURE_3D,Xt,Q,$.width,$.height,$.depth),Rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,ft,P,$.data)):e.texImage3D(n.TEXTURE_3D,0,Q,$.width,$.height,$.depth,0,ft,P,$.data);else if(v.isFramebufferTexture){if(pt)if(ht)e.texStorage2D(n.TEXTURE_2D,Xt,Q,$.width,$.height);else{let lt=$.width,Dt=$.height;for(let Vt=0;Vt<Xt;Vt++)e.texImage2D(n.TEXTURE_2D,Vt,Q,lt,Dt,0,ft,P,null),lt>>=1,Dt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in n){let lt=n.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),$.parentNode!==lt){lt.appendChild($),m.add(v),lt.onpaint=Dt=>{let Vt=Dt.changedElements;for(let _t of m)Vt.includes(_t.image)&&(_t.needsUpdate=!0)},lt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let Vt=n.RGBA,_t=n.RGBA,ee=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Vt,_t,ee,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(gt.length>0){if(ht&&pt){let lt=wt(gt[0]);e.texStorage2D(n.TEXTURE_2D,Xt,Q,lt.width,lt.height)}for(let lt=0,Dt=gt.length;lt<Dt;lt++)J=gt[lt],ht?Rt&&e.texSubImage2D(n.TEXTURE_2D,lt,0,0,ft,P,J):e.texImage2D(n.TEXTURE_2D,lt,Q,ft,P,J);v.generateMipmaps=!1}else if(ht){if(pt){let lt=wt($);e.texStorage2D(n.TEXTURE_2D,Xt,Q,lt.width,lt.height)}Rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ft,P,$)}else e.texImage2D(n.TEXTURE_2D,0,Q,ft,P,$);y(v)&&v.mipmapsAutoUpdate===!0&&S(at),mt.__version=dt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Le(T,v,k){if(v.image.length!==6)return;let at=jt(T,v),j=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+k);let dt=i.get(j);if(j.version!==dt.__version||at===!0){e.activeTexture(n.TEXTURE0+k);let mt=$t.getPrimaries($t.workingColorSpace),K=v.colorSpace===ri?null:$t.getPrimaries(v.colorSpace),$=v.colorSpace===ri||mt===K?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let ft=v.isCompressedTexture||v.image[0].isCompressedTexture,P=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let _t=0;_t<6;_t++)!ft&&!P?Q[_t]=b(v.image[_t],!0,s.maxCubemapSize):Q[_t]=P?v.image[_t].image:v.image[_t],Q[_t]=Lt(v,Q[_t]);let J=Q[0],gt=r.convert(v.format,v.colorSpace),ht=r.convert(v.type),pt=E(v.internalFormat,gt,ht,v.normalized,v.colorSpace),Rt=v.isVideoTexture!==!0,Xt=dt.__version===void 0||at===!0,lt=j.dataReady,Dt=M(v,J);Wt(n.TEXTURE_CUBE_MAP,v);let Vt;if(v.isDepthTexture){if(pt=_(v.format===si,v.type),Xt)if(Rt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,pt,J.width,J.height);else for(let _t=0;_t<6;_t++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,J.width,J.height,0,gt,ht,null)}else if(ft){Rt&&Xt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,pt,J.width,J.height);for(let _t=0;_t<6;_t++){Vt=Q[_t].mipmaps;for(let ee=0;ee<Vt.length;ee++){let _e=Vt[ee];v.format!==En?gt!==null?Rt?lt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,0,0,_e.width,_e.height,gt,_e.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,pt,_e.width,_e.height,0,_e.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,0,0,_e.width,_e.height,gt,ht,_e.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee,pt,_e.width,_e.height,0,gt,ht,_e.data)}}}else{if(Vt=v.mipmaps,Rt&&Xt){Vt.length>0&&Dt++;let _t=wt(Q[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,pt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(P){Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Q[_t].width,Q[_t].height,gt,ht,Q[_t].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,Q[_t].width,Q[_t].height,0,gt,ht,Q[_t].data);for(let ee=0;ee<Vt.length;ee++){let on=Vt[ee].image[_t].image;Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,0,0,on.width,on.height,gt,ht,on.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,pt,on.width,on.height,0,gt,ht,on.data)}}else{Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,gt,ht,Q[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pt,gt,ht,Q[_t]);for(let ee=0;ee<Vt.length;ee++){let _e=Vt[ee];Rt?lt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,0,0,gt,ht,_e.image[_t]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+_t,ee+1,pt,gt,ht,_e.image[_t])}}}y(v)&&v.mipmapsAutoUpdate===!0&&S(n.TEXTURE_CUBE_MAP),dt.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function Kt(T,v,k,at,j,dt){let mt=r.convert(k.format,k.colorSpace),K=r.convert(k.type),$=E(k.internalFormat,mt,K,k.normalized,k.colorSpace),ft=i.get(v),P=i.get(k);if(P.__renderTarget=v,!ft.__hasExternalTextures){let Q=Math.max(1,v.width>>dt),J=Math.max(1,v.height>>dt);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,dt,$,Q,J,v.depth,0,mt,K,null):e.texImage2D(j,dt,$,Q,J,0,mt,K,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,at,j,P.__webglTexture,0,le(v)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,at,j,P.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(T,v,k){if(n.bindRenderbuffer(n.RENDERBUFFER,T),v.depthBuffer){let at=v.depthTexture,j=at&&at.isDepthTexture?at.type:null,dt=_(v.stencilBuffer,j),mt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(v),dt,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(v),dt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,dt,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,mt,n.RENDERBUFFER,T)}else{let at=v.textures;for(let j=0;j<at.length;j++){let dt=at[j],mt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),$=E(dt.internalFormat,mt,K,dt.normalized,dt.colorSpace);yt(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le(v),$,v.width,v.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,le(v),$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(T,v,k){let at=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=i.get(v.depthTexture);j.__renderTarget=v;let dt=at?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||dt.width!==v.width||dt.height!==v.height)&&(dt.width=v.width,dt.height=v.height,v.depthTexture.needsUpdate=!0),at?ut(v.depthTexture,0):st(v.depthTexture,0);let mt=j.__webglTexture,K=le(v),$=at?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,ft=v.depthTexture.format===si?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===Qn)yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,$,mt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ft,$,mt,0);else if(v.depthTexture.format===si)yt(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ft,$,mt,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,ft,$,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Fe(T){let v=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){let at=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),at){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,at.removeEventListener("dispose",j)};at.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=at}if(T.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let at=0;at<6;at++)ye(v.__webglFramebuffer[at],T,at);else T.texture.mipmaps.length>0?ye(v.__webglFramebuffer[0],T,0):ye(v.__webglFramebuffer,T,0);else if(k){v.__webglDepthbuffer=[];for(let at=0;at<6;at++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[at]),v.__webglDepthbuffer[at]===void 0)v.__webglDepthbuffer[at]=n.createRenderbuffer(),Ue(v.__webglDepthbuffer[at],T,!1);else{let j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer[at];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,dt)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Ue(v.__webglDepthbuffer,T,!1);else{let j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,dt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ke(T,v,k){let at=i.get(T);v!==void 0&&Kt(at.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Fe(T)}function Ve(T){let v=T.texture,k=i.get(T),at=i.get(v);T.addEventListener("dispose",z),D(T);let j=T.textures,dt=T.isWebGLCubeRenderTarget===!0,mt=j.length>1;if(mt||(at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture()),at.__version=v.version,a.memory.textures++),dt){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let $=0;$<v.mipmaps.length;$++)k.__webglFramebuffer[K][$]=n.createFramebuffer()}else k.__webglFramebuffer[K]=n.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)k.__webglFramebuffer[K]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(mt)for(let K=0,$=j.length;K<$;K++){let ft=i.get(j[K]);ft.__webglTexture===void 0&&(ft.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&yt(T)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<j.length;K++){let $=j[K];k.__webglColorRenderbuffer[K]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ft=r.convert($.format,$.colorSpace),P=r.convert($.type),Q=E($.internalFormat,ft,P,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),J=le(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+K,n.RENDERBUFFER,k.__webglColorRenderbuffer[K])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(k.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,at.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)Kt(k.__webglFramebuffer[K][$],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else Kt(k.__webglFramebuffer[K],T,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);y(v)?S(n.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}else if(mt){for(let K=0,$=j.length;K<$;K++){let ft=j[K],P=i.get(ft),Q=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,P.__webglTexture),Wt(Q,ft),Kt(k.__webglFramebuffer,T,ft,n.COLOR_ATTACHMENT0+K,Q,0),y(ft)&&S(Q)}e.unbindTexture()}else{let K=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(K=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(K,at.__webglTexture),Wt(K,v),v.mipmaps.length>0)for(let $=0;$<v.mipmaps.length;$++)Kt(k.__webglFramebuffer[$],T,v,n.COLOR_ATTACHMENT0,K,$);else Kt(k.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0,K,0);y(v)?S(K):v.mipmaps.length>0&&n.texParameteri(K,n.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&Fe(T)}function B(T){let v=T.textures;for(let k=0,at=v.length;k<at;k++){let j=v[k];if(y(j)&&j.mipmapsAutoUpdate===!0){let dt=C(T),mt=i.get(j).__webglTexture;e.bindTexture(dt,mt),S(dt),e.unbindTexture()}}}let He=[];function oe(T){if(T.samples>0){if(yt(T)===!1){let v=T.textures,k=T.width,at=T.height,j=n.COLOR_BUFFER_BIT,dt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=i.get(T),K=v.length>1;if(K)for(let ft=0;ft<v.length;ft++)e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let ft=0;ft<v.length;ft++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),K){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);let P=i.get(v[ft]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,P,0)}n.blitFramebuffer(0,0,k,at,0,0,k,at,j,n.NEAREST),c===!0&&(He.length=0,He.push(n.COLOR_ATTACHMENT0+ft),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&He.push(dt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),K)for(let ft=0;ft<v.length;ft++){e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,mt.__webglColorRenderbuffer[ft]);let P=i.get(v[ft]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,mt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,P,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let v=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function le(T){return Math.min(s.maxSamples,T.samples)}function yt(T){let v=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xe(T){let v=a.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function Lt(T,v){let k=T.colorSpace,at=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Qs&&k!==ri&&($t.getTransfer(k)===ie?(at!==En||j!==$e)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",k)),v}function wt(T){return typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame!="undefined"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=It,this.resetTextureUnits=et,this.getTextureUnits=it,this.setTextureUnits=At,this.setTexture2D=st,this.setTexture2DArray=ct,this.setTexture3D=bt,this.setTextureCube=ut,this.rebindTextures=Ke,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Kt,this.useMultisampledRTT=yt,this.dispose=X}function Gx(n,t){function e(i,s=ri){let r,a=$t.getTransfer(s);if(i===$e)return n.UNSIGNED_BYTE;if(i===uo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===fo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ec)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mc)return n.BYTE;if(i===bc)return n.SHORT;if(i===Ls)return n.UNSIGNED_SHORT;if(i===ho)return n.INT;if(i===bn)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===Ac)return n.ALPHA;if(i===Tc)return n.RGB;if(i===En)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===si)return n.DEPTH_STENCIL;if(i===po)return n.RED;if(i===mo)return n.RED_INTEGER;if(i===wi)return n.RG;if(i===go)return n.RG_INTEGER;if(i===_o)return n.RGBA_INTEGER;if(i===Rr||i===Pr||i===Ir||i===Lr)if(a===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xo||i===vo||i===yo||i===So)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===So)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Mo||i===bo||i===wo||i===Eo||i===Ao||i===Dr||i===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Mo||i===bo)return a===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Eo)return r.COMPRESSED_R11_EAC;if(i===Ao)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Dr)return r.COMPRESSED_RG11_EAC;if(i===To)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Co||i===Ro||i===Po||i===Io||i===Lo||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko||i===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Co)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ro)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Po)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Io)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Do)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===No)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Bo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zo)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Go)return a===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===Ho||i===Wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Vo)return a===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xo||i===qo||i===Nr||i===Yo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Vx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new On({vertexShader:Vx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Jt(new Fn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends Mn{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,m=null,d=null,u=null,x=null,w=typeof XRWebGLBinding!="undefined",g=new nh,p={},b=e.getContextAttributes(),y=null,S=null,C=[],E=[],_=new St,M=null,D=null,R=new qe;R.viewport=new de;let O=new qe;O.viewport=new de;let z=[R,O],W=new so,N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=C[q];return st===void 0&&(st=new Ss,C[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=C[q];return st===void 0&&(st=new Ss,C[q]=st),st.getGripSpace()},this.getHand=function(q){let st=C[q];return st===void 0&&(st=new Ss,C[q]=st),st.getHandSpace()};function Z(q){let st=E.indexOf(q.inputSource);if(st===-1)return;let ct=C[st];ct!==void 0&&(ct.update(q.inputSource,q.frame,l||a),ct.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<C.length;q++){let st=E[q];st!==null&&(E[q]=null,C[q].disconnect(st))}N=null,X=null,g.reset();for(let q in p)delete p[q];if(t.setRenderTarget(y),u=null,d=null,m=null,s=null,S=null,It.stop(),i.isPresenting=!1,t.setPixelRatio(M),t.setSize(_.width,_.height,!1),D!==null){let q=D.camera;q.fov=D.fov,q.zoom=D.zoom,q.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return m===null&&w&&(m=new XRWebGLBinding(s,e)),m},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await e.makeXRCompatible(),M=t.getPixelRatio(),t.getSize(_),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,bt=null,ut=null;b.depth&&(ut=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=b.stencil?si:Qn,bt=b.stencil?Gi:bn);let Tt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};m=this.getBinding(),d=m.createProjectionLayer(Tt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new rn(d.textureWidth,d.textureHeight,{format:En,type:$e,depthTexture:new ni(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new rn(u.framebufferWidth,u.framebufferHeight,{format:En,type:$e,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(q){for(let st=0;st<q.removed.length;st++){let ct=q.removed[st],bt=E.indexOf(ct);bt>=0&&(E[bt]=null,C[bt].disconnect(ct))}for(let st=0;st<q.added.length;st++){let ct=q.added[st],bt=E.indexOf(ct);if(bt===-1){for(let Tt=0;Tt<C.length;Tt++)if(Tt>=E.length){E.push(ct),bt=Tt;break}else if(E[Tt]===null){E[Tt]=ct,bt=Tt;break}if(bt===-1)break}let ut=C[bt];ut&&ut.connect(ct)}}function V(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,ct=q.far;g.texture!==null&&(g.depthNear>0&&(st=g.depthNear),g.depthFar>0&&(ct=g.depthFar)),W.near=O.near=R.near=st,W.far=O.far=R.far=ct,(N!==W.near||X!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),N=W.near,X=W.far),W.layers.mask=q.layers.mask|6,R.layers.mask=W.layers.mask&-5,O.layers.mask=W.layers.mask&-3;let bt=q.parent,ut=W.cameras;V(W,bt);for(let Tt=0;Tt<ut.length;Tt++)V(ut[Tt],bt);W.projectionMatrix.copy(R.projectionMatrix),W.projectionMatrixInverse.copy(R.projectionMatrixInverse),D===null&&q.isPerspectiveCamera&&(D={camera:q,fov:q.fov,zoom:q.zoom}),et(q,W,bt)};function et(q,st,ct){ct===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(ct.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=vs*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(W)},this.getCameraTexture=function(q){return p[q]};let it=null;function At(q,st){if(h=st.getViewerPose(l||a),x=st,h!==null){let ct=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let bt=!1;ct.length!==W.cameras.length&&(W.cameras.length=0,bt=!0);for(let Et=0;Et<ct.length;Et++){let Wt=ct[Et],jt=null;if(u!==null)jt=u.getViewport(Wt);else{let se=m.getViewSubImage(d,Wt);jt=se.viewport,Et===0&&(t.setRenderTargetTextures(S,se.colorTexture,se.depthStencilTexture),t.setRenderTarget(S))}let Bt=z[Et];Bt===void 0&&(Bt=new qe,Bt.layers.enable(Et),Bt.viewport=new de,z[Et]=Bt),Bt.matrix.fromArray(Wt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Wt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(jt.x,jt.y,jt.width,jt.height),Et===0&&(W.matrix.copy(Bt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),bt===!0&&W.cameras.push(Bt)}let ut=s.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){m=i.getBinding();let Et=m.getDepthInformation(ct[0]);Et&&Et.isValid&&Et.texture&&g.init(Et,s.renderState)}if(ut&&ut.includes("camera-access")&&w){t.state.unbindTexture(),m=i.getBinding();for(let Et=0;Et<ct.length;Et++){let Wt=ct[Et].camera;if(Wt){let jt=p[Wt];jt||(jt=new mr,p[Wt]=jt);let Bt=m.getCameraImage(Wt);jt.sourceTexture=Bt}}}}for(let ct=0;ct<C.length;ct++){let bt=E[ct],ut=C[ct];bt!==null&&ut!==void 0&&ut.update(bt,st,l||a)}it&&it(q,st),st.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:st}),x=null}let It=new ef;It.setAnimationLoop(At),this.setAnimationLoop=function(q){it=q},this.dispose=function(){}}},Wx=new ae,df=new kt;df.set(-1,0,0,0,1,0,0,0,1);function Xx(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,zc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,b,y,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),m(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,S)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),w(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,b,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Je&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Je&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let b=t.get(p),y=b.envMap,S=b.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(df),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,b,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*b,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function m(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,b){g.ior.value=p.ior,p.diffuseRoughness>0&&(g.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=p.diffuseRoughnessMap,e(p.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function w(g,p){let b=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qx(n,t,e,i){let s={},r={};function a(b,y){let S=y.program;i.uniformBlockBinding(b,S,s[b.id])}function o(b,y){let S=s[b.id];S===void 0&&(x(b),S=c(b),s[b.id]=S,b.addEventListener("dispose",g));let C=y.program;i.updateUBOMapping(b,C);let E=t.render.frame;r[b.id]!==E&&(l(b),r[b.id]=E)}function c(b){let y=n.createBuffer(),S=b.__size,C=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,C),n.bindBuffer(n.UNIFORM_BUFFER,null),y}function l(b){let y=s[b.id],S=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let E=0,_=S.length;E<_;E++){let M=S[E];if(Array.isArray(M))for(let D=0,R=M.length;D<R;D++)h(M[D],E,D,C);else h(M,E,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,y,S,C){if(d(b,y,S,C)===!0){let E=b.__offset,_=b.value;if(Array.isArray(_)){let M=0;for(let D=0;D<_.length;D++){let R=_[D],O=w(R,!0);m(R,b.__data,M),M+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else m(_,b.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,b.__data)}}function m(b,y,S){typeof b=="number"||typeof b=="boolean"?y[S]=b:b.isMatrix3?(y[S]=b.elements[0],y[S+1]=b.elements[1],y[S+2]=b.elements[2],y[S+3]=0,y[S+4]=b.elements[3],y[S+5]=b.elements[4],y[S+6]=b.elements[5],y[S+7]=0,y[S+8]=b.elements[6],y[S+9]=b.elements[7],y[S+10]=b.elements[8],y[S+11]=0):ArrayBuffer.isView(b)?y.set(b.subarray(0,y.length-S),S):b.toArray(y,S)}function d(b,y,S,C){let E=b.value,_=y+"_"+S;if(Array.isArray(E)){C[_]===void 0&&(C[_]=[]);let M=C[_],D=!1;for(let R=0;R<E.length;R++)u(E[R],M,R)===!0&&(D=!0);return D}return u(E,C,_)}function u(b,y,S){if(y[S]===void 0)return typeof b=="number"||typeof b=="boolean"?y[S]=b:ArrayBuffer.isView(b)?y[S]=b.slice():y[S]=b.clone(),!0;{let C=y[S];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return y[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(C.equals(b)===!1)return C.copy(b),!0}}return!1}function x(b){let y=b.uniforms,S=0,C=16;for(let _=0,M=y.length;_<M;_++){let D=Array.isArray(y[_])?y[_]:[y[_]];for(let R=0,O=D.length;R<O;R++){let z=D[R],W=Array.isArray(z.value)?z.value:[z.value],N=Array.isArray(y[_])||Array.isArray(z.value),X=S;for(let G=0,nt=W.length;G<nt;G++){let V=W[G],et=w(V,N),it=S%C,At=it%et.boundary,It=it+At;S+=At,It!==0&&C-It<et.storage&&(S+=C-It),G===0&&(X=S),S+=et.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((S-X)/Float32Array.BYTES_PER_ELEMENT),z.__offset=X}}let E=S%C;return E>0&&(S+=C-E),b.__size=S,b.__cache={},this}function w(b,y){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",b),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(b){let y=b.target;y.removeEventListener("dispose",g),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:p}}var Yx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),zn=null;function Zx(){return zn===null&&(zn=new ur(Yx,16,16,wi,wn),zn.name="DFG_LUT",zn.minFilter=Ye,zn.magFilter=Ye,zn.wrapS=Dn,zn.wrapT=Dn,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}var Qo=class{constructor(t={}){let{canvas:e=Ed(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:d=!1,outputBufferType:u=$e}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let w=u,g=new Set([_o,go,mo]),p=new Set([$e,bn,Ls,Gi,uo,fo]),b=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},C=null,E=null,_=[],M=[],D=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,O=!1,z=null,W=null,N=null,X=null;this._outputColorSpace=Xe;let Z=0,G=0,nt=null,V=-1,et=null,it=new de,At=new de,It=null,q=new Ot(0),st=0,ct=e.width,bt=e.height,ut=1,Tt=null,Gt=null,Et=new de(0,0,ct,bt),Wt=new de(0,0,ct,bt),jt=!1,Bt=new gi,se=new Fa,re=!1,Le=!1,Kt=new ae,Ue=new F,ye=new de,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Ve(){return nt===null?ut:1}let B=i;function He(f,A){return e.getContext(f,A)}let oe,le,yt,xe,Lt,wt,T,v,k,at,j,dt,mt,K,$,ft,P,Q,J,gt,ht,pt,Rt;try{let f={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Vt,!1),e.addEventListener("webglcontextcreationerror",_t,!1),B===null){let A="webgl2";if(B=He(A,f),B===null)throw He(A)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(f){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),zt("WebGLRenderer: "+f.message),f}function Xt(){oe=new r_(B),oe.init(),ht=new Gx(B,oe),le=new Z0(B,oe,t,ht),yt=new zx(B,oe),le.reversedDepthBuffer&&d&&yt.buffers.depth.setReversed(!0),W=B.createFramebuffer(),N=B.createFramebuffer(),X=B.createFramebuffer(),xe=new l_(B),Lt=new Ex,wt=new kx(B,oe,yt,Lt,le,ht,xe),T=new s_(R),v=new hm(B),pt=new q0(B,v),k=new a_(B,v,xe,pt),at=new h_(B,k,v,pt,xe),Q=new c_(B,le,wt),$=new J0(Lt),j=new wx(R,T,oe,le,pt,$),dt=new Xx(R,Lt),mt=new Tx,K=new Dx(oe),P=new X0(R,T,yt,at,x,c),ft=new Bx(R,at,le),Rt=new qx(B,xe,le,yt),J=new Y0(B,oe,xe),gt=new o_(B,oe,xe),xe.programs=j.programs,R.capabilities=le,R.extensions=oe,R.properties=Lt,R.renderLists=mt,R.shadowMap=ft,R.state=yt,R.info=xe}w!==$e&&(D=new d_(w,e.width,e.height,o,s,r));let lt=new ih(R,B);this.xr=lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let f=oe.get("WEBGL_lose_context");f&&f.loseContext()},this.forceContextRestore=function(){let f=oe.get("WEBGL_lose_context");f&&f.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(f){f!==void 0&&(ut=f,this.setSize(ct,bt,!1))},this.getSize=function(f){return f.set(ct,bt)},this.setSize=function(f,A,I=!0){if(lt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=f,bt=A,e.width=Math.floor(f*ut),e.height=Math.floor(A*ut),I===!0&&(e.style.width=f+"px",e.style.height=A+"px"),D!==null&&D.setSize(e.width,e.height),this.setViewport(0,0,f,A)},this.getDrawingBufferSize=function(f){return f.set(ct*ut,bt*ut).floor()},this.setDrawingBufferSize=function(f,A,I){ct=f,bt=A,ut=I,e.width=Math.floor(f*I),e.height=Math.floor(A*I),this.setViewport(0,0,f,A)},this.setEffects=function(f){if(w===$e){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(f){for(let A=0;A<f.length;A++)if(f[A].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(f||[])},this.getCurrentViewport=function(f){return f.copy(it)},this.getViewport=function(f){return f.copy(Et)},this.setViewport=function(f,A,I,L){f.isVector4?Et.set(f.x,f.y,f.z,f.w):Et.set(f,A,I,L),yt.viewport(it.copy(Et).multiplyScalar(Ve()).round())},this.getScissor=function(f){return f.copy(Wt)},this.setScissor=function(f,A,I,L){f.isVector4?Wt.set(f.x,f.y,f.z,f.w):Wt.set(f,A,I,L),yt.scissor(At.copy(Wt).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(f){yt.setScissorTest(jt=f)},this.setOpaqueSort=function(f){Tt=f},this.setTransparentSort=function(f){Gt=f},this.getClearColor=function(f){return f.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(f=!0,A=!0,I=!0){let L=0;if(f){let U=!1;if(nt!==null){let Y=nt.texture.format;U=g.has(Y)}if(U){let Y=nt.texture.type,rt=p.has(Y),H=P.getClearColor(),tt=P.getClearAlpha(),xt=H.r,vt=H.g,Pt=H.b;rt?(b[0]=xt,b[1]=vt,b[2]=Pt,b[3]=tt,B.clearBufferuiv(B.COLOR,0,b)):(y[0]=xt,y[1]=vt,y[2]=Pt,y[3]=tt,B.clearBufferiv(B.COLOR,0,y))}else L|=B.COLOR_BUFFER_BIT}A&&(L|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(L|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L!==0&&B.clear(L)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(f){f.setRenderer(this),z=f},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Vt,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),P.dispose(),mt.dispose(),K.dispose(),wt.dispose(),Lt.dispose(),T.dispose(),at.dispose(),k.dispose(),pt.dispose(),Rt.dispose(),j.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Xi),lt.removeEventListener("sessionend",ai),An.stop()};function Dt(f){f.preventDefault(),nr("WebGLRenderer: Context Lost."),O=!0}function Vt(){nr("WebGLRenderer: Context Restored."),O=!1;let f=xe.autoReset,A=ft.enabled,I=ft.autoUpdate,L=ft.needsUpdate,U=ft.type;Xt(),xe.autoReset=f,ft.enabled=A,ft.autoUpdate=I,ft.needsUpdate=L,ft.type=U}function _t(f){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",f.statusMessage)}function ee(f){let A=f.target;A.removeEventListener("dispose",ee),_e(A)}function _e(f){on(f),Lt.remove(f)}function on(f){let A=Lt.get(f).programs;A!==void 0&&(A.forEach(function(I){j.releaseProgram(I)}),f.isShaderMaterial&&j.releaseShaderCache(f))}this.renderBufferDirect=function(f,A,I,L,U,Y){A===null&&(A=Fe);let rt=U.isMesh&&U.matrixWorld.determinantAffine()<0,H=Pi(f,A,I,L,U);yt.setMaterial(L,rt);let tt=I.index,xt=1;if(L.wireframe===!0){if(tt=k.getWireframeAttribute(I),tt===void 0)return;xt=2}let vt=I.drawRange,Pt=I.attributes.position,ot=vt.start*xt,Nt=(vt.start+vt.count)*xt;Y!==null&&(ot=Math.max(ot,Y.start*xt),Nt=Math.min(Nt,(Y.start+Y.count)*xt)),tt!==null?(ot=Math.max(ot,0),Nt=Math.min(Nt,tt.count)):Pt!=null&&(ot=Math.max(ot,0),Nt=Math.min(Nt,Pt.count));let qt=Nt-ot;if(qt<0||qt===1/0)return;pt.setup(U,L,H,I,tt);let Ut,Ht=J;if(tt!==null&&(Ut=v.get(tt),Ht=gt,Ht.setIndex(Ut)),U.isMesh)L.wireframe===!0?(yt.setLineWidth(L.wireframeLinewidth*Ve()),Ht.setMode(B.LINES)):Ht.setMode(B.TRIANGLES);else if(U.isLine){let Ae=L.linewidth;Ae===void 0&&(Ae=1),yt.setLineWidth(Ae*Ve()),U.isLineSegments?Ht.setMode(B.LINES):U.isLineLoop?Ht.setMode(B.LINE_LOOP):Ht.setMode(B.LINE_STRIP)}else U.isPoints?Ht.setMode(B.POINTS):U.isSprite&&Ht.setMode(B.TRIANGLES);if(U.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))Ht.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ae=U._multiDrawStarts,Ct=U._multiDrawCounts,Te=U._multiDrawCount,Qt=tt?v.get(tt).bytesPerElement:1,cn=Lt.get(L).currentProgram.getUniforms();for(let pe=0;pe<Te;pe++)cn.setValue(B,"_gl_DrawID",pe),Ht.render(Ae[pe]/Qt,Ct[pe])}else if(U.isInstancedMesh)Ht.renderInstances(ot,qt,U.count);else if(I.isInstancedBufferGeometry){let Ae=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,Ct=Math.min(I.instanceCount,Ae);Ht.renderInstances(ot,qt,Ct)}else Ht.render(ot,qt)};function Ai(f,A,I,L){z!==null&&f.isNodeMaterial&&z.setObject(L,f),re===!0&&$.setState(f,I,!1),f.transparent===!0&&f.side===pn&&f.forceSinglePass===!1?(f.side=Je,f.needsUpdate=!0,Ci(f,A,L),f.side=bi,f.needsUpdate=!0,Ci(f,A,L),f.side=pn):Ci(f,A,L)}this.compile=function(f,A,I=null){I===null&&(I=f),z!==null&&z.renderStart(f,A,I),E=K.get(I),E.init(A),M.push(E),I.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),f!==I&&f.traverseVisible(function(U){U.isLight&&U.layers.test(A.layers)&&(E.pushLight(U),U.castShadow&&E.pushShadow(U))}),E.setupLights(),z!==null&&z.updateLights(E.state.lightsArray),Le=this.localClippingEnabled,re=$.init(this.clippingPlanes,Le),re===!0&&$.setGlobalState(this.clippingPlanes,A),z!==null&&ft.render(E.state.shadowsArray,I,A);let L=new Set;return f.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Y=U.material;if(Y)if(Array.isArray(Y))for(let rt=0;rt<Y.length;rt++){let H=Y[rt];Ai(H,I,A,U),L.add(H)}else Ai(Y,I,A,U),L.add(Y)}),E=M.pop(),z!==null&&z.renderEnd(),L},this.compileAsync=function(f,A,I=null){let L=this.compile(f,A,I);return new Promise(U=>{function Y(){if(L.forEach(function(rt){let tt=Lt.get(rt).currentProgram;(tt===void 0||tt.isReady())&&L.delete(rt)}),L.size===0){U(f);return}setTimeout(Y,10)}oe.get("KHR_parallel_shader_compile")!==null?Y():setTimeout(Y,10)})};let Wi=null;function rl(f){Wi&&Wi(f)}function Xi(){An.stop()}function ai(){An.start()}let An=new ef;An.setAnimationLoop(rl),typeof self!="undefined"&&An.setContext(self),this.setAnimationLoop=function(f){Wi=f,lt.setAnimationLoop(f),f===null?An.stop():An.start()},lt.addEventListener("sessionstart",Xi),lt.addEventListener("sessionend",ai),this.render=function(f,A){if(A!==void 0&&A.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;z!==null&&z.renderStart(f,A);let I=lt.enabled===!0&&lt.isPresenting===!0,L=D!==null&&(nt===null||I)&&D.begin(R,nt);if(f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),A.parent===null&&A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(A),A=lt.getCamera()),f.isScene===!0&&f.onBeforeRender(R,f,A,nt),E=K.get(f,M.length),E.init(A),E.state.textureUnits=wt.getTextureUnits(),M.push(E),Kt.multiplyMatrices(A.projectionMatrix,A.matrixWorldInverse),A.isArrayCamera?se.setFromArrayCamera(A):Bt.setFromProjectionMatrix(Kt,un,A.reversedDepth),Le=this.localClippingEnabled,re=$.init(this.clippingPlanes,Le),C=mt.get(f,_.length),C.init(),_.push(C),this.info.render.frame++,lt.enabled===!0&&lt.isPresenting===!0){let rt=R.xr.getDepthSensingMesh();rt!==null&&qi(rt,A,-1/0,R.sortObjects)}qi(f,A,0,R.sortObjects),C.finish(),z!==null&&z.updateLights(E.state.lightsArray),R.sortObjects===!0&&C.sort(Tt,Gt),Ke=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,Ke&&P.addToRenderList(C,f),this.info.autoReset===!0&&this.info.reset(),re===!0&&$.beginShadows();let U=E.state.shadowsArray;if(ft.render(U,f,A),re===!0&&$.endShadows(),(L&&D.hasRenderPass())===!1){let rt=C.opaque,H=C.transmissive;if(E.setupLights(),A.isArrayCamera){let tt=A.cameras;if(H.length>0)for(let xt=0,vt=tt.length;xt<vt;xt++){let Pt=tt[xt];zr(rt,H,f,Pt)}Ke&&P.render(f);for(let xt=0,vt=tt.length;xt<vt;xt++){let Pt=tt[xt];Tn(C,f,Pt,Pt.viewport)}}else H.length>0&&zr(rt,H,f,A),Ke&&P.render(f),Tn(C,f,A)}nt!==null&&G===0&&(wt.updateMultisampleRenderTarget(nt),wt.updateRenderTargetMipmap(nt)),L&&D.end(R),f.isScene===!0&&f.onAfterRender(R,f,A),pt.resetDefaultState(),V=-1,et=null,M.pop(),M.length>0?(E=M[M.length-1],wt.setTextureUnits(E.state.textureUnits),re===!0&&$.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?C=_[_.length-1]:C=null,z!==null&&z.renderEnd()};function qi(f,A,I,L){if(f.visible===!1)return;if(f.layers.test(A.layers)){if(f.isGroup)I=f.renderOrder;else if(f.isLOD)f.autoUpdate===!0&&f.update(A);else if(f.isLight)E.pushLight(f),f.castShadow&&E.pushShadow(f);else if(f.isSprite){let rt=A.isArrayCamera?se:Bt;if(!f.frustumCulled||f.intersectsFrustum(rt)){L&&ye.setFromMatrixPosition(f.matrixWorld).applyMatrix4(Kt);let H=at.update(f),tt=f.material;tt.visible&&C.push(f,H,tt,I,ye.z,null,A)}}else if(f.isMesh||f.isLine||f.isPoints){let rt=A.isArrayCamera?se:Bt;if(!f.frustumCulled||f.intersectsFrustum(rt)){let H=at.update(f),tt=f.material;if(L&&(f.boundingSphere!==void 0?(f.boundingSphere===null&&f.computeBoundingSphere(),ye.copy(f.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),ye.copy(H.boundingSphere.center)),ye.applyMatrix4(f.matrixWorld).applyMatrix4(Kt)),Array.isArray(tt)){let xt=H.groups;for(let vt=0,Pt=xt.length;vt<Pt;vt++){let ot=xt[vt],Nt=tt[ot.materialIndex];Nt&&Nt.visible&&C.push(f,H,Nt,I,ye.z,ot,A)}}else tt.visible&&C.push(f,H,tt,I,ye.z,null,A)}}}let Y=f.children;for(let rt=0,H=Y.length;rt<H;rt++)qi(Y[rt],A,I,L)}function Tn(f,A,I,L){let{opaque:U,transmissive:Y,transparent:rt}=f;E.setupLightsView(I),re===!0&&$.setGlobalState(R.clippingPlanes,I),L&&yt.viewport(it.copy(L)),U.length>0&&Cn(U,A,I),Y.length>0&&Cn(Y,A,I),rt.length>0&&Cn(rt,A,I),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function zr(f,A,I,L){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[L.id]===void 0){let ot=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[L.id]=new rn(1,1,{generateMipmaps:!0,type:ot?wn:$e,minFilter:ii,samples:Math.max(4,le.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let Y=E.state.transmissionRenderTarget[L.id],rt=L.viewport||it;Y.setSize(rt.z*R.transmissionResolutionScale,rt.w*R.transmissionResolutionScale);let H=R.getRenderTarget(),tt=R.getActiveCubeFace(),xt=R.getActiveMipmapLevel();R.setRenderTarget(Y),R.getClearColor(q),st=R.getClearAlpha(),st<1&&R.setClearColor(16777215,.5),R.clear(),Ke&&P.render(I);let vt=R.toneMapping;R.toneMapping=Bn;let Pt=L.viewport;if(L.viewport!==void 0&&(L.viewport=void 0),E.setupLightsView(L),re===!0&&$.setGlobalState(R.clippingPlanes,L),Cn(f,I,L),wt.updateMultisampleRenderTarget(Y),wt.updateRenderTargetMipmap(Y),oe.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let Nt=0,qt=A.length;Nt<qt;Nt++){let Ut=A[Nt],{object:Ht,geometry:Ae,material:Ct,group:Te}=Ut;if(Ct.side===pn&&Ht.layers.test(L.layers)){let Qt=Ct.side;Ct.side=Je,Ct.needsUpdate=!0,oi(Ht,I,L,Ae,Ct,Te),Ct.side=Qt,Ct.needsUpdate=!0,ot=!0}}ot===!0&&(wt.updateMultisampleRenderTarget(Y),wt.updateRenderTargetMipmap(Y))}R.setRenderTarget(H,tt,xt),R.setClearColor(q,st),Pt!==void 0&&(L.viewport=Pt),R.toneMapping=vt}function Cn(f,A,I){let L=A.isScene===!0?A.overrideMaterial:null;for(let U=0,Y=f.length;U<Y;U++){let rt=f[U],{object:H,geometry:tt,group:xt}=rt,vt=rt.material;vt.allowOverride===!0&&L!==null&&(vt=L),H.layers.test(I.layers)&&oi(H,A,I,tt,vt,xt)}}function oi(f,A,I,L,U,Y){z!==null&&U.isNodeMaterial&&z.setObject(f,U),f.onBeforeRender(R,A,I,L,U,Y),f.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,f.matrixWorld),f.normalMatrix.getNormalMatrix(f.modelViewMatrix),U.onBeforeRender(R,A,I,L,f,Y),U.transparent===!0&&U.side===pn&&U.forceSinglePass===!1?(U.side=Je,U.needsUpdate=!0,R.renderBufferDirect(I,A,L,U,f,Y),U.side=bi,U.needsUpdate=!0,R.renderBufferDirect(I,A,L,U,f,Y),U.side=pn):R.renderBufferDirect(I,A,L,U,f,Y),f.onAfterRender(R,A,I,L,U,Y)}function Ti(f){let A=0;for(let I of f)I.texture!==null&&A++;return A}function Ci(f,A,I){A.isScene!==!0&&(A=Fe);let L=Lt.get(f),U=E.state.lights,Y=E.state.shadowsArray,rt=U.state.version,H=j.getParameters(f,U.state,Y,A,I,E.state.lightProbeGridArray),tt=j.getProgramCacheKey(H),xt=L.programs;L.environment=f.isMeshStandardMaterial||f.isMeshLambertMaterial||f.isMeshPhongMaterial?A.environment:null,L.fog=A.fog;let vt=f.isMeshStandardMaterial||f.isMeshLambertMaterial&&!f.envMap||f.isMeshPhongMaterial&&!f.envMap;L.envMap=T.get(f.envMap||L.environment,vt),L.envMapRotation=L.environment!==null&&f.envMap===null?A.environmentRotation:f.envMapRotation,xt===void 0&&(f.addEventListener("dispose",ee),xt=new Map,L.programs=xt,L.programVariants=new Map);let Pt=xt.get(tt);if(Pt!==void 0){if(L.currentProgram===Pt&&L.lightsStateVersion===rt)return Ri(f,H),Pt}else H.uniforms=j.getUniforms(f),z!==null&&f.isNodeMaterial&&z.build(f,I,H),f.onBeforeCompile(H,R),Pt=j.acquireProgram(H,tt),xt.set(tt,Pt),L.uniforms=H.uniforms;let ot=L.uniforms;return(!f.isShaderMaterial&&!f.isRawShaderMaterial||f.clipping===!0)&&(ot.clippingPlanes=$.uniform),Ri(f,H),L.needsLights=kr(f),L.lightsStateVersion=rt,L.needsLights&&(ot.ambientLightColor.value=U.state.ambient,ot.lightProbe.value=U.state.probe,ot.sunLights.value=U.state.sun,ot.sunLightShadows.value=U.state.sunShadow,ot.directionalLights.value=U.state.directional,ot.directionalLightShadows.value=U.state.directionalShadow,ot.spotLights.value=U.state.spot,ot.spotLightShadows.value=U.state.spotShadow,ot.rectAreaLights.value=U.state.rectArea,ot.ltc_1.value=U.state.rectAreaLTC1,ot.ltc_2.value=U.state.rectAreaLTC2,ot.pointLights.value=U.state.point,ot.pointLightShadows.value=U.state.pointShadow,ot.hemisphereLights.value=U.state.hemi,ot.sunShadowMatrix.value=U.state.sunShadowMatrix,ot.sunShadowCascade.value=U.state.sunShadowCascade,ot.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ot.spotLightMatrix.value=U.state.spotLightMatrix,ot.spotLightMap.value=U.state.spotLightMap,ot.pointShadowMatrix.value=U.state.pointShadowMatrix),L.numLightProbeGrids=Ti(E.state.lightProbeGridArray),L.currentProgram=Pt,L.uniformsList=null,Pt}function Us(f,A,I,L,U){let Y=Lt.get(f),rt=Y.currentProgram.id+","+L+","+U,H=Y.programVariants.get(rt);return H===void 0?(H=Ci(f,A,I),Y.programVariants.set(rt,H)):(Y.currentProgram=H,Y.uniformsList=null,Y.outputColorSpace=L,Y.toneMapping=U),H}function li(f){if(f.uniformsList===null){let A=f.currentProgram.getUniforms();f.uniformsList=Ds.seqWithValue(A.seq,f.uniforms)}return f.uniformsList}function Ri(f,A){let I=Lt.get(f);I.outputColorSpace=A.outputColorSpace,I.batching=A.batching,I.batchingColor=A.batchingColor,I.instancing=A.instancing,I.instancingColor=A.instancingColor,I.instancingMorph=A.instancingMorph,I.skinning=A.skinning,I.morphTargets=A.morphTargets,I.morphNormals=A.morphNormals,I.morphColors=A.morphColors,I.morphTargetsCount=A.morphTargetsCount,I.numClippingPlanes=A.numClippingPlanes,I.numIntersection=A.numClipIntersection,I.vertexAlphas=A.vertexAlphas,I.vertexTangents=A.vertexTangents,I.toneMapping=A.toneMapping}function Pi(f,A,I,L,U){A.isScene!==!0&&(A=Fe),wt.resetTextureUnits();let Y=A.fog,rt=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?A.environment:null,H=nt===null?R.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:$t.workingColorSpace,tt=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap,xt=T.get(L.envMap||rt,tt),vt=L.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Pt=!!I.attributes.tangent&&(!!L.normalMap||L.anisotropy>0),ot=!!I.morphAttributes.position,Nt=!!I.morphAttributes.normal,qt=!!I.morphAttributes.color,Ut=Bn;L.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ut=R.toneMapping);let Ht=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ae=Ht!==void 0?Ht.length:0,Ct=Lt.get(L),Te=E.state.lights;if(re===!0&&(Le===!0||f!==et)){let me=f===et&&L.id===V;$.setState(L,f,me)}let Qt=!1,cn=!1;L.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Te.state.version||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U._colorsTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U._colorsTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==xt||L.fog===!0&&Ct.fog!==Y||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==$.numPlanes||Ct.numIntersection!==$.numIntersection)||Ct.vertexAlphas!==vt||Ct.vertexTangents!==Pt||Ct.morphTargets!==ot||Ct.morphNormals!==Nt||Ct.morphColors!==qt||Ct.morphTargetsCount!==Ae||Ct.numLightProbeGrids!==Ti(E.state.lightProbeGridArray)?Qt=!0:(Ct.outputColorSpace!==H||Ct.toneMapping!==Ut)&&(cn=!0):(Qt=!0,Ct.__version=L.version);let pe=Ct.currentProgram;(Qt===!0||cn===!0)&&(pe=cn===!0?Us(L,A,U,H,Ut):Ci(L,A,U),z&&L.isNodeMaterial&&z.onUpdateProgram(L,pe,Ct));let Gn=!1,Rn=!1,Ii=!1,te=pe.getUniforms(),De=Ct.uniforms;if(yt.useProgram(pe.program)&&(Gn=!0,Rn=!0,Ii=!0),L.id!==V&&(V=L.id,Rn=!0),Gn||et!==f){yt.buffers.depth.getReversed()&&f.reversedDepth!==!0&&(f._reversedDepth=!0,f.updateProjectionMatrix()),te.setValue(B,"projectionMatrix",f.projectionMatrix),te.setValue(B,"viewMatrix",f.matrixWorldInverse);let Ce=te.map.cameraPosition;Ce!==void 0&&Ce.setValue(B,Ue.setFromMatrixPosition(f.matrixWorld)),le.logarithmicDepthBuffer&&te.setValue(B,"logDepthBufFC",2/(Math.log(f.far+1)/Math.LN2)),(L.isMeshPhongMaterial||L.isMeshToonMaterial||L.isMeshLambertMaterial||L.isMeshBasicMaterial||L.isMeshStandardMaterial||L.isShaderMaterial)&&te.setValue(B,"isOrthographic",f.isOrthographicCamera===!0),et!==f&&(et=f,Rn=!0,Ii=!0)}if(Ct.needsLights&&(Te.state.sunShadowMap.length>0&&te.setValue(B,"sunShadowMap",Te.state.sunShadowMap,wt),Te.state.directionalShadowMap.length>0&&te.setValue(B,"directionalShadowMap",Te.state.directionalShadowMap,wt),Te.state.spotShadowMap.length>0&&te.setValue(B,"spotShadowMap",Te.state.spotShadowMap,wt),Te.state.pointShadowMap.length>0&&te.setValue(B,"pointShadowMap",Te.state.pointShadowMap,wt)),U.isSkinnedMesh){te.setOptional(B,U,"bindMatrix"),te.setOptional(B,U,"bindMatrixInverse");let me=U.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),te.setValue(B,"boneTexture",me.boneTexture,wt))}U.isBatchedMesh&&(te.setOptional(B,U,"batchingTexture"),te.setValue(B,"batchingTexture",U._matricesTexture,wt),te.setOptional(B,U,"batchingIdTexture"),te.setValue(B,"batchingIdTexture",U._indirectTexture,wt),te.setOptional(B,U,"batchingColorTexture"),U._colorsTexture!==null&&te.setValue(B,"batchingColorTexture",U._colorsTexture,wt));let gn=I.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&Q.update(U,I,pe),(Rn||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,te.setValue(B,"receiveShadow",U.receiveShadow)),(L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial)&&L.envMap===null&&A.environment!==null&&(De.envMapIntensity.value=A.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=Zx()),Rn){if(te.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ct.needsLights&&al(De,Ii),Y&&L.fog===!0&&dt.refreshFogUniforms(De,Y),dt.refreshMaterialUniforms(De,L,ut,bt,E.state.transmissionRenderTarget[f.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let me=S,Ce=0;for(let Vn of E.state.lightProbeGridArray)Vn.texture!==null&&(me.textures[Ce]=Vn.texture,me.min[Ce]=Vn.boundingBox.min,me.max[Ce]=Vn.boundingBox.max,me.resolution[Ce]=Vn.resolution,Ce++);for(let Vn in me)me[Vn].length=Ce;De.probesSH.value=me.textures,De.probesMin.value=me.min,De.probesMax.value=me.max,De.probesResolution.value=me.resolution}Ds.upload(B,li(Ct),De,wt)}if(L.isShaderMaterial&&L.uniformsNeedUpdate===!0&&(Ds.upload(B,li(Ct),De,wt),L.uniformsNeedUpdate=!1),L.isSpriteMaterial&&te.setValue(B,"center",U.center),te.setValue(B,"modelViewMatrix",U.modelViewMatrix),te.setValue(B,"normalMatrix",U.normalMatrix),te.setValue(B,"modelMatrix",U.matrixWorld),L.uniformsGroups!==void 0){let me=L.uniformsGroups;for(let Ce=0,Vn=me.length;Ce<Vn;Ce++){let oh=me[Ce];Rt.update(oh,pe),Rt.bind(oh,pe)}}return pe}function al(f,A){f.ambientLightColor.needsUpdate=A,f.lightProbe.needsUpdate=A,f.sunLights.needsUpdate=A,f.sunLightShadows.needsUpdate=A,f.directionalLights.needsUpdate=A,f.directionalLightShadows.needsUpdate=A,f.pointLights.needsUpdate=A,f.pointLightShadows.needsUpdate=A,f.spotLights.needsUpdate=A,f.spotLightShadows.needsUpdate=A,f.rectAreaLights.needsUpdate=A,f.hemisphereLights.needsUpdate=A}function kr(f){return f.isMeshLambertMaterial||f.isMeshToonMaterial||f.isMeshPhongMaterial||f.isMeshStandardMaterial||f.isShadowMaterial||f.isShaderMaterial&&f.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(f,A,I){let L=Lt.get(f);L.__autoAllocateDepthBuffer=f.resolveDepthBuffer===!1,L.__autoAllocateDepthBuffer===!1&&(L.__useRenderToTexture=!1),Lt.get(f.texture).__webglTexture=A,Lt.get(f.depthTexture).__webglTexture=L.__autoAllocateDepthBuffer?void 0:I,L.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(f,A){let I=Lt.get(f);I.__webglFramebuffer=A,I.__useDefaultFramebuffer=A===void 0},this.setRenderTarget=function(f,A=0,I=0){nt=f,Z=A,G=I;let L=null,U=!1,Y=!1;if(f){let H=Lt.get(f);if(H.__useDefaultFramebuffer!==void 0){yt.bindFramebuffer(B.FRAMEBUFFER,H.__webglFramebuffer),it.copy(f.viewport),At.copy(f.scissor),It=f.scissorTest,yt.viewport(it),yt.scissor(At),yt.setScissorTest(It),V=-1;return}else if(H.__webglFramebuffer===void 0)wt.setupRenderTarget(f);else if(H.__hasExternalTextures)wt.rebindTextures(f,Lt.get(f.texture).__webglTexture,Lt.get(f.depthTexture).__webglTexture);else if(f.depthBuffer){let vt=f.depthTexture;if(H.__boundDepthTexture!==vt){if(vt!==null&&Lt.has(vt)&&(f.width!==vt.image.width||f.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(f)}}let tt=f.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Y=!0);let xt=Lt.get(f).__webglFramebuffer;f.isWebGLCubeRenderTarget?(Array.isArray(xt[A])?L=xt[A][I]:L=xt[A],U=!0):f.samples>0&&wt.useMultisampledRTT(f)===!1?L=Lt.get(f).__webglMultisampledFramebuffer:Array.isArray(xt)?L=xt[I]:L=xt,it.copy(f.viewport),At.copy(f.scissor),It=f.scissorTest}else it.copy(Et).multiplyScalar(ut).floor(),At.copy(Wt).multiplyScalar(ut).floor(),It=jt;if(I!==0&&(L=W),yt.bindFramebuffer(B.FRAMEBUFFER,L)&&yt.drawBuffers(f,L),yt.viewport(it),yt.scissor(At),yt.setScissorTest(It),U){let H=Lt.get(f.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+A,H.__webglTexture,I)}else if(Y){let H=A;for(let tt=0;tt<f.textures.length;tt++){let xt=Lt.get(f.textures[tt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+tt,xt.__webglTexture,I,H)}}else if(f!==null&&I!==0){let H=Lt.get(f.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,H.__webglTexture,I)}V=-1};function ln(f){let A=Lt.get(f);return(A.__readFormat!==f.format||A.__readType!==f.type)&&(A.__readFormat=f.format,A.__readType=f.type,A.__formatReadable=le.textureFormatReadable(f.format),A.__typeReadable=le.textureTypeReadable(f.type)),A}this.readRenderTargetPixels=function(f,A,I,L,U,Y,rt,H=0){if(!(f&&f.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=Lt.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&rt!==void 0&&(tt=tt[rt],Array.isArray(tt)&&(tt=tt[0])),tt){yt.bindFramebuffer(B.FRAMEBUFFER,tt);try{let xt=f.textures[H],vt=xt.format,Pt=xt.type;f.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+H);let ot=ln(xt);if(ot.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ot.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}A>=0&&A<=f.width-L&&I>=0&&I<=f.height-U&&B.readPixels(A,I,L,U,ht.convert(vt),ht.convert(Pt),Y)}finally{let xt=nt!==null?Lt.get(nt).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(f,A,I,L,U,Y,rt,H=0){if(!(f&&f.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=Lt.get(f).__webglFramebuffer;if(f.isWebGLCubeRenderTarget&&rt!==void 0&&(tt=tt[rt],Array.isArray(tt)&&(tt=tt[0])),tt)if(A>=0&&A<=f.width-L&&I>=0&&I<=f.height-U){yt.bindFramebuffer(B.FRAMEBUFFER,tt);let xt=f.textures[H],vt=xt.format,Pt=xt.type;f.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+H);let ot=ln(xt);if(ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.bufferData(B.PIXEL_PACK_BUFFER,Y.byteLength,B.STREAM_READ),B.readPixels(A,I,L,U,ht.convert(vt),ht.convert(Pt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let qt=nt!==null?Lt.get(nt).__webglFramebuffer:null;yt.bindFramebuffer(B.FRAMEBUFFER,qt);let Ut=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Td(B,Ut,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Y),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(Nt),B.deleteSync(Ut),Y}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(f,A=null,I=0){let L=Math.pow(2,-I),U=Math.floor(f.image.width*L),Y=Math.floor(f.image.height*L),rt=A!==null?A.x:0,H=A!==null?A.y:0;wt.setTexture2D(f,0),B.copyTexSubImage2D(B.TEXTURE_2D,I,0,0,rt,H,U,Y),yt.unbindTexture()},this.copyTextureToTexture=function(f,A,I=null,L=null,U=0,Y=0){let rt,H,tt,xt,vt,Pt,ot,Nt,qt,Ut=f.isCompressedTexture?f.mipmaps[Y]:f.image;if(I!==null)rt=I.max.x-I.min.x,H=I.max.y-I.min.y,tt=I.isBox3?I.max.z-I.min.z:1,xt=I.min.x,vt=I.min.y,Pt=I.isBox3?I.min.z:0;else{let te=Math.pow(2,-U);rt=Math.floor(Ut.width*te),H=Math.floor(Ut.height*te),f.isDataArrayTexture?tt=Ut.depth:f.isData3DTexture?tt=Math.floor(Ut.depth*te):tt=1,xt=0,vt=0,Pt=0}L!==null?(ot=L.x,Nt=L.y,qt=L.z):(ot=0,Nt=0,qt=0);let Ht=ht.convert(A.format),Ae=ht.convert(A.type),Ct;A.isData3DTexture?(wt.setTexture3D(A,0),Ct=B.TEXTURE_3D):A.isDataArrayTexture||A.isCompressedArrayTexture?(wt.setTexture2DArray(A,0),Ct=B.TEXTURE_2D_ARRAY):(wt.setTexture2D(A,0),Ct=B.TEXTURE_2D),yt.activeTexture(B.TEXTURE0),yt.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,A.flipY),yt.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),yt.pixelStorei(B.UNPACK_ALIGNMENT,A.unpackAlignment);let Te=yt.getParameter(B.UNPACK_ROW_LENGTH),Qt=yt.getParameter(B.UNPACK_IMAGE_HEIGHT),cn=yt.getParameter(B.UNPACK_SKIP_PIXELS),pe=yt.getParameter(B.UNPACK_SKIP_ROWS),Gn=yt.getParameter(B.UNPACK_SKIP_IMAGES);yt.pixelStorei(B.UNPACK_ROW_LENGTH,Ut.width),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ut.height),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,xt),yt.pixelStorei(B.UNPACK_SKIP_ROWS,vt),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,Pt);let Rn=f.isDataArrayTexture||f.isData3DTexture,Ii=A.isDataArrayTexture||A.isData3DTexture;if(f.isDepthTexture){let te=Lt.get(f),De=Lt.get(A),gn=Lt.get(te.__renderTarget),me=Lt.get(De.__renderTarget);yt.bindFramebuffer(B.READ_FRAMEBUFFER,gn.__webglFramebuffer),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Ce=0;Ce<tt;Ce++)Rn&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(f).__webglTexture,U,Pt+Ce),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Lt.get(A).__webglTexture,Y,qt+Ce)),B.blitFramebuffer(xt,vt,xt+rt,vt+H,ot,Nt,ot+rt,Nt+H,B.DEPTH_BUFFER_BIT,B.NEAREST);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(U!==0||f.isRenderTargetTexture||Lt.has(f)){let te=Lt.get(f),De=Lt.get(A);yt.bindFramebuffer(B.READ_FRAMEBUFFER,N),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,X);for(let gn=0;gn<tt;gn++)Rn?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,te.__webglTexture,U,Pt+gn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,te.__webglTexture,U),Ii?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,De.__webglTexture,Y,qt+gn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,De.__webglTexture,Y),U!==0?B.blitFramebuffer(xt,vt,xt+rt,vt+H,ot,Nt,ot+rt,Nt+H,B.COLOR_BUFFER_BIT,B.NEAREST):Ii?B.copyTexSubImage3D(Ct,Y,ot,Nt,qt+gn,xt,vt,rt,H):B.copyTexSubImage2D(Ct,Y,ot,Nt,xt,vt,rt,H);yt.bindFramebuffer(B.READ_FRAMEBUFFER,null),yt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ii?f.isDataTexture||f.isData3DTexture?B.texSubImage3D(Ct,Y,ot,Nt,qt,rt,H,tt,Ht,Ae,Ut.data):A.isCompressedArrayTexture?B.compressedTexSubImage3D(Ct,Y,ot,Nt,qt,rt,H,tt,Ht,Ut.data):B.texSubImage3D(Ct,Y,ot,Nt,qt,rt,H,tt,Ht,Ae,Ut):f.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Y,ot,Nt,rt,H,Ht,Ae,Ut.data):f.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Y,ot,Nt,Ut.width,Ut.height,Ht,Ut.data):B.texSubImage2D(B.TEXTURE_2D,Y,ot,Nt,rt,H,Ht,Ae,Ut);yt.pixelStorei(B.UNPACK_ROW_LENGTH,Te),yt.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),yt.pixelStorei(B.UNPACK_SKIP_PIXELS,cn),yt.pixelStorei(B.UNPACK_SKIP_ROWS,pe),yt.pixelStorei(B.UNPACK_SKIP_IMAGES,Gn),Y===0&&A.generateMipmaps===!0&&A.mipmapsAutoUpdate===!0&&B.generateMipmap(Ct),yt.unbindTexture()},this.initRenderTarget=function(f){Lt.get(f).__webglFramebuffer===void 0&&wt.setupRenderTarget(f)},this.initTexture=function(f){f.isCubeTexture?wt.setTextureCube(f,0):f.isData3DTexture?wt.setTexture3D(f,0):f.isDataArrayTexture||f.isCompressedArrayTexture?wt.setTexture2DArray(f,0):wt.setTexture2D(f,0),yt.unbindTexture()},this.resetState=function(){Z=0,G=0,nt=null,yt.reset(),pt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var ff={type:"change"},rh={type:"start"},mf={type:"end"},nl=new bs,pf=new nn,Jx=Math.cos(70*Oc.DEG2RAD),Ee=new F,je=2*Math.PI,ne={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},sh=1e-6,il=class extends Er{constructor(t,e=null){super(t,e),this.state=ne.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Si.ROTATE,MIDDLE:Si.DOLLY,RIGHT:Si.PAN},this.touches={ONE:Mi.ROTATE,TWO:Mi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new sn,this._lastTargetPosition=new F,this._quat=new sn().setFromUnitVectors(t.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Cs,this._sphericalDelta=new Cs,this._scale=1,this._panOffset=new F,this._rotateStart=new St,this._rotateEnd=new St,this._rotateDelta=new St,this._panStart=new St,this._panEnd=new St,this._panDelta=new St,this._dollyStart=new St,this._dollyEnd=new St,this._dollyDelta=new St,this._dollyDirection=new F,this._mouse=new St,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$x.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=jx.bind(this),this._onContextMenu=rv.bind(this),this._onMouseWheel=ev.bind(this),this._onKeyDown=nv.bind(this),this._onTouchStart=iv.bind(this),this._onTouchMove=sv.bind(this),this._onMouseDown=Qx.bind(this),this._onMouseMove=tv.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=ov.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ne.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ff),this.update(),this.state=ne.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ee.copy(e).sub(this.target),Ee.applyQuaternion(this._quat),this._spherical.setFromVector3(Ee),this.autoRotate&&this.state===ne.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=je:i>Math.PI&&(i-=je),s<-Math.PI?s+=je:s>Math.PI&&(s-=je),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ee.setFromSpherical(this._spherical),Ee.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ee),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ee.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ee.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(nl.origin.copy(this.object.position),nl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nl.direction))<Jx?this.object.lookAt(this.target):(pf.setFromNormalAndCoplanarPoint(this.object.up,this.target),nl.intersectPlane(pf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>sh||this._lastTargetPosition.distanceToSquared(this.target)>sh?(this.dispatchEvent(ff),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?je/60*this.autoRotateSpeed*t:je/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ee.setFromMatrixColumn(e,0),Ee.multiplyScalar(-t),this._panOffset.add(Ee)}_panUp(t,e){this.screenSpacePanning===!0?Ee.setFromMatrixColumn(e,1):(Ee.setFromMatrixColumn(e,0),Ee.crossVectors(this.object.up,Ee)),Ee.multiplyScalar(t),this._panOffset.add(Ee)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ee.copy(s).sub(this.target);let r=Ee.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-je*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(je*this._rotateDelta.x/e.clientHeight),this._rotateUp(je*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new St,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Kx(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $x(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function jx(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mf),this.state=ne.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Qx(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Si.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ne.DOLLY;break;case Si.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}break;case Si.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ne.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ne.PAN}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(rh)}function tv(n){switch(this.state){case ne.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ne.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ne.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function ev(n){this.enabled===!1||this.enableZoom===!1||this.state!==ne.NONE||(n.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(mf))}function nv(n){this.enabled!==!1&&this._handleKeyDown(n)}function iv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Mi.ROTATE:if(this.enableRotate===!1){this.state=ne.NONE;break}this._handleTouchStartRotate(n),this.state=ne.TOUCH_ROTATE;break;case Mi.PAN:if(this.enablePan===!1){this.state=ne.NONE;break}this._handleTouchStartPan(n),this.state=ne.TOUCH_PAN;break;default:this.state=ne.NONE}break;case 2:switch(this.touches.TWO){case Mi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ne.TOUCH_DOLLY_PAN;break;case Mi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ne.TOUCH_DOLLY_ROTATE;break;default:this.state=ne.NONE}break;default:this.state=ne.NONE}this.state!==ne.NONE&&this.dispatchEvent(rh)}function sv(n){switch(this._trackPointer(n),this.state){case ne.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ne.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ne.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ne.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ne.NONE}}function rv(n){this.enabled!==!1&&n.preventDefault()}function av(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ov(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var sl=[[0,"#F1E9CE"],[120,"#E9E3C0"],[210,"#CFD8A6"],[380,"#A9C48C"],[560,"#7FA67F"],[780,"#4C7E62"],[930,"#3A6852"],[1060,"#DCE8E5"],[1300,"#FFFFFF"]].map(function(n){return[n[0],new Ot(n[1])]});function lv(n,t){for(var e=1;e<sl.length-1&&n>sl[e][0];)e++;var i=sl[e-1],s=sl[e],r=Math.max(0,Math.min(1,(n-i[0])/(s[0]-i[0])));return t.copy(i[1]).lerp(s[1],r)}function Ge(n,t){var e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function cv(n,t){var e=n.attributes.position.array,i=t.attributes.position.array,s=n.index.array,r=t.index.array,a=new Float32Array(e.length+i.length);a.set(e),a.set(i,e.length);var o=e.length/3,c=new Uint16Array(s.length+r.length);c.set(s);for(var l=0;l<r.length;l++)c[s.length+l]=r[l]+o;var h=new Ne;return h.setAttribute("position",new Me(a,3)),h.setIndex(new Me(c,1)),h.computeVertexNormals(),h}function ah(n,t){var e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var Hi=[[470,"#F6D8C4","#FFC89A",10],[570,"#DCEBEE","#FFE9C9",16],[750,"#CFE6EE","#FFF6E6",22],[900,"#E8E3D0","#FFE0B0",16],[998,"#F2B38A","#FF9E5E",9]].map(function(n){return[n[0],new Ot(n[1]),new Ot(n[2]),n[3]]});function hv(n,t,e){n=Math.max(Hi[0][0],Math.min(Hi[Hi.length-1][0],n));for(var i=1;i<Hi.length-1&&n>Hi[i][0];)i++;var s=Hi[i-1],r=Hi[i],a=(n-s[0])/(r[0]-s[0]);t.copy(s[1]).lerp(r[1],a),e.copy(s[2]).lerp(r[2],a);var o=(n-470)/528;return{az:(100+160*o)*Math.PI/180,el:(s[3]+(r[3]-s[3])*a)*Math.PI/180}}function gf(n,t){var e=n.ve,i=n.wrap,s=n.reduced,r=n.stops,a=window.devicePixelRatio||1,o=new Qo({antialias:a<2,alpha:!1,powerPreference:"high-performance"}),c=Math.min(a,1.6),l=c;o.setPixelRatio(l),o.domElement.className="mappa-canvas",i.appendChild(o.domElement);var h=new ar,m=new Ot("#DCEBEE"),d=new Ot("#FFE9C9");h.background=m,h.fog=new rr(m,100,400);var u=new qe(36,1,.3,900),x=new Sr("#FFF3E0","#9DB295",1.45);h.add(x);var w=new wr("#FFE9C9",2);h.add(w,w.target);var g=t.W,p=t.H,b=g*p,y=new Float32Array(b*3),S=new Float32Array(b*3),C=new Ot,E,_,M;for(_=0;_<p;_++)for(E=0;E<g;E++){if(M=_*g+E,y[M*3]=-t.SX/2+E*t.SX/(g-1),y[M*3+1]=t.el[M]*e/1e3,y[M*3+2]=-t.SZ/2+_*t.SZ/(p-1),lv(t.el[M],C),t.el[M]<360){var D=Ge(Math.floor(E/3)+7,Math.floor(_/3)+3),R=Ge(Math.floor(E/5)+1,Math.floor(_/5)+9);C.offsetHSL((D-.5)*.045,(R-.5)*.1,(D-.5)*.05+(R-.5)*.03)}var O=1+(Ge(E,_)-.5)*.06;S[M*3]=Math.min(1,C.r*O),S[M*3+1]=Math.min(1,C.g*O),S[M*3+2]=Math.min(1,C.b*O)}var z=new Uint16Array((g-1)*(p-1)*6),W=0;for(_=0;_<p-1;_++)for(E=0;E<g-1;E++){var N=_*g+E,X=N+1,Z=N+g,G=Z+1;z[W++]=N,z[W++]=Z,z[W++]=X,z[W++]=X,z[W++]=Z,z[W++]=G}var nt=new Ne;nt.setAttribute("position",new Me(y,3)),nt.setAttribute("color",new Me(S,3)),nt.setIndex(new Me(z,1)),nt.computeVertexNormals();var V=new fe({vertexColors:!0,flatShading:!0}),et={value:new St(t.SX/2,t.SZ/2)};V.onBeforeCompile=function(f){f.uniforms.uHalf=et,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vXZ = position.xz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;
uniform vec2 uHalf;`).replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
float ex = max(abs(vXZ.x) / uHalf.x, abs(vXZ.y) / uHalf.y);
gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, smoothstep(0.72, 0.96, ex));
#endif`)},h.add(new Jt(nt,V));function it(f,A){return t.quota(f,A)*e/1e3}(function(){var f=[];for(_=1;_<p-1;_++)for(E=1;E<g-1;E++){var A=Math.abs(E/(g-1)-.5)*2,I=Math.abs(_/(p-1)-.5)*2;if(!(A>.82||I>.82)){var L=t.el[_*g+E];if(!(L<290||L>1100)){var U=.07+.42*Math.min(1,(L-290)/520);Ge(E*3.1,_*1.7)>U||f.push([E,_,L])}}}var Y=cv(new _i(.24,.6,5).translate(0,.3,0),new _i(.17,.55,5).translate(0,.66,0)),rt=new dn(Y,new fe({flatShading:!0}),f.length),H=new ge,tt=new Ot,xt=new dn(new Es(.26,6).rotateX(-Math.PI/2),new ze({color:"#27382b",transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),f.length);f.forEach(function(vt,Pt){var ot=y[(vt[1]*g+vt[0])*3]+(Ge(vt[0],vt[1]*2)-.5)*.5,Nt=y[(vt[1]*g+vt[0])*3+2]+(Ge(vt[0]*2,vt[1])-.5)*.5,qt=it(ot,Nt),Ut=.7+Ge(vt[0]*5,vt[1]*7)*.7,Ht=Ut*(.9+Ge(vt[1],vt[0])*.5);H.position.set(ot,qt-.02,Nt),H.scale.set(Ut,Ht,Ut),H.rotation.y=Ge(vt[0],vt[1])*6,H.updateMatrix(),rt.setMatrixAt(Pt,H.matrix),tt.setHSL(.4+Ge(vt[1],vt[0]*3)*.05,.45,.2+Ge(vt[0]*9,vt[1])*.1),rt.setColorAt(Pt,tt),H.position.set(ot+.08,qt+.03,Nt+.06),H.scale.set(Ut,1,Ut),H.rotation.y=0,H.updateMatrix(),xt.setMatrixAt(Pt,H.matrix)}),h.add(xt,rt)})(),(function(){var f=[],A=[],I=[[9.1517,45.1847,34,2.1],[9.0069,44.9908,26,1.6],[9.1286,45.016,16,1.1],[8.9251,45.1953,22,1.3],[9.149,45.397,40,2.2],[9.2745,45.116,10,.9],[9.0476,45.1585,8,.8],[9.0305,45.267,10,.9],[9.247,45.285,14,1.1],[9.2024,44.9811,10,.9],[9.045,44.954,6,.7]];I.forEach(function(H){f.push(H)}),t.tappe.forEach(function(H,tt){tt>0&&tt<t.tappe.length-1&&f.push([null,null,tt===7?14:5,tt===7?.9:.45,H])}),f.forEach(function(H,tt){var xt,vt;if(H[4])xt=H[4].x,vt=H[4].z;else{var Pt=t.proj(H[0],H[1]);xt=Pt[0],vt=Pt[1]}for(var ot=0;ot<H[2];ot++){var Nt=Ge(tt*7+ot,3.3)*6.283,qt=H[3]*Math.sqrt(Ge(ot,tt*5+1)),Ut=xt+Math.cos(Nt)*qt,Ht=vt+Math.sin(Nt)*qt;t.quota(Ut,Ht)>900||A.push([Ut,Ht,Ge(ot*3,tt)*3.14,.8+Ge(tt,ot*2)*.6,Ge(ot,tt*9)])}});var L=new dn(new Ie(.2,.13,.14).translate(0,.065,0),new fe({flatShading:!0}),A.length),U=new dn(new _i(.17,.1,4).rotateY(Math.PI/4).scale(1.1,1,.8).translate(0,.18,0),new fe({flatShading:!0}),A.length),Y=new ge,rt=new Ot;A.forEach(function(H,tt){Y.position.set(H[0],it(H[0],H[1])-.01,H[1]),Y.rotation.y=H[2],Y.scale.setScalar(H[3]),Y.updateMatrix(),L.setMatrixAt(tt,Y.matrix),U.setMatrixAt(tt,Y.matrix),rt.setHSL(.09+H[4]*.04,.35,.82-H[4]*.12),L.setColorAt(tt,rt),rt.setHSL(.03+H[4]*.03,.55,.4+H[4]*.08),U.setColorAt(tt,rt)}),h.add(L,U)})();var At=t.route,It=.17;function q(f){return new F(f.x,f.m*e/1e3+It*.9+.06,f.z)}var st=n.caldo,ct=t.tappe[st[0]].idx,bt=t.tappe[st[1]].idx;function ut(f,A,I){for(var L=[],U=f;U<=A;U++)L.push(q(At[U]));return new xr(new As(L,!1,"centripetal"),Math.max(8,Math.min(3200,Math.round((A-f)*1.4))),I,5,!1)}h.add(new Jt(ut(ct,bt,It),new fe({color:"#A22B3C"}))),(function(){var f=new Jt(ut(ct,bt,It*.45),new fe({color:"#E2A93B"}));f.position.y+=It*.55,h.add(f)})(),(function(){var f=[],A;[[t.tappe[st[1]].s,t.total]].forEach(function(U){for(A=U[0];A<U[1];A+=.8){var Y=t.puntoA(A);f.push(q({x:Y.x,z:Y.z,m:Y.m}))}});var I=new dn(new Oi(It*.58,6,5),new ze({color:"#FFFBF2"}),f.length),L=new ge;f.forEach(function(U,Y){L.position.copy(U),L.updateMatrix(),I.setMatrixAt(Y,L.matrix)}),h.add(I)})();var Tt=t.tappe[st[0]].s,Gt=0,Et=1.15;function Wt(f){var A=t.puntoA(Math.max(0,f-.5)),I=t.puntoA(Math.min(t.total,f+.5)),L=I.x-A.x,U=I.z-A.z,Y=Math.hypot(L,U)||1;return[L/Y,U/Y]}(function(){for(var f=1e9,A=Tt*.2;A<Tt*.8;A+=.5){var I=Wt(A-3),L=Wt(A),U=Wt(A+3),Y=Math.abs(ah(Math.atan2(I[1],I[0]),Math.atan2(L[1],L[0])))+Math.abs(ah(Math.atan2(L[1],L[0]),Math.atan2(U[1],U[0])));Y<f&&(f=Y,Gt=A)}})();function jt(f,A,I,L,U,Y,rt){var H=Math.max(2,Math.ceil((A-f)/.3)),tt=new Float32Array((H+1)*6),xt=new Float32Array((H+1)*6),vt=[],Pt,ot;for(Pt=0;Pt<=H;Pt++){var Nt=f+(A-f)*Pt/H,qt=t.puntoA(Nt),Ut=Wt(Nt),Ht=-Ut[1],Ae=Ut[0];for(ot=0;ot<2;ot++){var Ct=L+(ot?1:-1)*I/2,Te=qt.x+Ht*Ct,Qt=qt.z+Ae*Ct,cn=(Pt*2+ot)*3;tt[cn]=Te,tt[cn+1]=it(Te,Qt)+Y,tt[cn+2]=Qt,xt[cn+1]=1}if(Pt<H){var pe=Pt*2;vt.push(pe,pe+1,pe+2,pe+1,pe+3,pe+2)}}var Gn=new Ne;Gn.setAttribute("position",new Me(tt,3)),Gn.setAttribute("normal",new Me(xt,3)),Gn.setIndex(vt);var Rn=new fe({color:U,side:pn,polygonOffset:!0,polygonOffsetFactor:-rt,polygonOffsetUnits:-rt});return new Jt(Gn,Rn)}(function(){h.add(jt(0,Tt,Et,0,"#4A4F57",.05,2));var f=jt(0,Tt,.05,Et/2-.06,"#FFFFFF",.056,3),A=jt(0,Tt,.05,-(Et/2-.06),"#FFFFFF",.056,3);h.add(f,A);for(var I=Math.floor(Tt/.9),L=new dn(new Fn(.4,.05).rotateX(-Math.PI/2),new ze({color:"#FFFFFF",polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),I),U=new ge,Y=0;Y<I;Y++){var rt=.5+Y*.9,H=t.puntoA(rt),tt=Wt(rt);U.position.set(H.x,it(H.x,H.z)+.058,H.z),U.rotation.set(0,Math.atan2(-tt[1],tt[0]),0),U.updateMatrix(),L.setMatrixAt(Y,U.matrix)}h.add(L);var xt=Math.floor(Tt/2.2),vt=new dn(new Un(.02,.025,.6,5).translate(0,.3,0),new fe({color:"#8B929A"}),xt),Pt=new dn(new Ie(.16,.035,.05).translate(.06,.6,0),new ze({color:"#FFF3C8"}),xt),ot=new ge;for(Y=0;Y<xt;Y++){rt=1.2+Y*2.2,H=t.puntoA(rt),tt=Wt(rt);var Nt=Y%2?1:-1,qt=-tt[1]*Nt*(Et/2+.16),Ut=tt[0]*Nt*(Et/2+.16);ot.position.set(H.x+qt,it(H.x+qt,H.z+Ut),H.z+Ut),ot.rotation.set(0,Math.atan2(-Ut,-qt),0),ot.updateMatrix(),vt.setMatrixAt(Y,ot.matrix),Pt.setMatrixAt(Y,ot.matrix)}h.add(vt,Pt)})();var Bt=new Sn,se,re=0,Le=new F,Kt,Ue;(function(){var f=t.puntoA(Gt),A=Wt(Gt),I=new fe({color:"#8B929A",flatShading:!0}),L=new fe({color:"#2A2F36",flatShading:!0});[-1,1].forEach(function(tt){var xt=new Jt(new Ie(.08,1.35,.08),I);xt.position.set(0,.675,tt*(Et/2+.2)),Bt.add(xt)});var U=new Jt(new Ie(.16,.13,Et+.5),I);U.position.y=1.35,Bt.add(U),[-.26,.26].forEach(function(tt){var xt=new Jt(new Ie(.24,.17,.2),L);xt.position.set(.04,1.2,tt),Bt.add(xt);var vt=new Jt(new Ie(.03,.1,.1),new ze({color:"#DDEBFF"}));vt.position.set(.17,1.2,tt),Bt.add(vt)});var Y=document.createElement("canvas");Y.width=Y.height=64;var rt=Y.getContext("2d"),H=rt.createRadialGradient(32,32,0,32,32,32);H.addColorStop(0,"rgba(255,255,255,1)"),H.addColorStop(.25,"rgba(255,250,225,.85)"),H.addColorStop(1,"rgba(255,240,200,0)"),rt.fillStyle=H,rt.fillRect(0,0,64,64),se=new hr(new Ms({map:new ws(Y),transparent:!0,depthWrite:!1,blending:Tr,opacity:0})),se.position.set(.3,1.2,0),se.scale.setScalar(.01),Bt.add(se),Bt.position.set(f.x,it(f.x,f.z)+.05,f.z),Bt.rotation.y=Math.atan2(-A[1],A[0]),h.add(Bt),Le.set(f.x,it(f.x,f.z)+1.8,f.z),Kt=document.createElement("div"),Kt.style.cssText="position:absolute;left:0;top:0;z-index:19;pointer-events:none;opacity:0;transition:opacity .25s,background .15s;will-change:transform;padding:4px 9px;border-radius:9px;font:700 11px/1 system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#27382b;white-space:nowrap",Kt.textContent="Autovelox",i.appendChild(Kt),Ue=document.createElement("div"),Ue.style.cssText="position:absolute;inset:0;z-index:30;pointer-events:none;background:#fff;opacity:0",i.appendChild(Ue)})();function ye(){re=performance.now(),!s&&Ue.animate&&Ue.animate([{opacity:0},{opacity:.5,offset:.1},{opacity:0}],{duration:480,easing:"ease-out"}),Kt.textContent="Flash!",Kt.style.background="#A22B3C"}var Fe="";function Ke(){var f=k&&Math.abs(T-Gt)<11,A=T>=Gt?"Flash!":"Autovelox",I=(f?"1":"0")+A;I!==Fe&&(Fe=I,Kt.style.opacity=f?1:0,A!==Kt.textContent&&(Kt.textContent=A,Kt.style.background=A==="Flash!"?"#A22B3C":"#27382b"))}var Ve=t.tappe.map(function(f,A){var I=new Sn,L=A===t.tappe.length-1,U=A===0,Y=f.m*e/1e3,rt=A>=st[0]&&A<=st[1];if(L){[[1,0,1.5],[.8,.9,1.3],[.6,1.6,1.1]].forEach(function(Ut){var Ht=new Jt(new _i(Ut[0],Ut[2],7),new fe({color:"#1E5A43",flatShading:!0}));Ht.position.y=Ut[1]+Ut[2]/2+.3,I.add(Ht)});var H=new Jt(new Oi(.28,8,6),new ze({color:"#E2A93B"}));H.position.y=3.25,I.add(H);var tt=new Jt(new Un(.18,.18,.4,6),new fe({color:"#6b4a2f"}));tt.position.y=.2,I.add(tt)}else if(U){var xt=new fe({color:"#F6ECD8",flatShading:!0});[-.42,.42].forEach(function(Ut){var Ht=new Jt(new Ie(.16,1.1,.16),xt);Ht.position.set(0,.55,Ut),I.add(Ht)});var vt=new Jt(new Ie(.34,.2,1.2),new fe({color:"#A22B3C",flatShading:!0}));vt.position.y=1.2,I.add(vt);var Pt=new Jt(new Un(.04,.04,2,5),new fe({color:"#2A2A2A"}));Pt.position.set(0,1,.9),I.add(Pt);var ot=new Jt(new Fn(.9,.55),new ze({color:"#E2A93B",side:2}));ot.position.set(.47,1.75,.9),I.add(ot)}else{var Nt=new Jt(new Un(.05,.05,1.5,5),new fe({color:"#2A2A2A"}));Nt.position.y=.75,I.add(Nt);var qt=new Jt(new Oi(.3,8,6),new fe({color:rt?"#E2A93B":"#FFFBF2"}));qt.position.y=1.6,I.add(qt)}return I.position.set(f.x,Y,f.z),h.add(I),{g:I,top:L?3.7:U?2.2:1.9,y0:Y}}),B=new Sn,He=new Jt(new Ie(1.15,.34,.56),new fe({color:"#A22B3C",flatShading:!0}));He.position.y=.34,B.add(He);var oe=new Jt(new Ie(.55,.3,.46),new fe({color:"#F6ECD8",flatShading:!0}));oe.position.set(-.05,.62,0),B.add(oe);var le=new Un(.14,.14,.12,8).rotateX(Math.PI/2),yt=new fe({color:"#222"});[[.38,.27],[-.38,.27],[.38,-.27],[-.38,-.27]].forEach(function(f){var A=new Jt(le,yt);A.position.set(f[0],.15,f[1]),B.add(A)}),(function(){var f=new ze({color:"#FFF3B0"});[.18,-.18].forEach(function(H){var tt=new Jt(new Ie(.04,.07,.1),f);tt.position.set(.58,.38,H),B.add(tt)});var A=new Jt(new Es(.62,10).rotateX(-Math.PI/2).scale(1,1,.62),new ze({color:"#27382b",transparent:!0,opacity:.28,depthWrite:!1}));A.position.y=.03,B.add(A);var I=document.createElement("canvas");I.width=I.height=64;var L=I.getContext("2d");L.fillStyle="#fff",L.beginPath(),L.arc(32,32,30,0,6.3),L.fill(),L.fillStyle="#111",L.font="800 34px Georgia,serif",L.textAlign="center",L.textBaseline="middle",L.fillText("19",32,35);var U=new ws(I);U.colorSpace=Xe;var Y=new Jt(new Fn(.36,.36).rotateX(-Math.PI/2),new ze({map:U}));Y.position.set(-.05,.775,0),B.add(Y);var rt=new Jt(new Fn(.3,.3),new ze({map:U}));rt.position.set(.2,.36,.285),B.add(rt)})(),B.scale.setScalar(1.35),h.add(B);var xe=n.pinsEl,Lt=[];r.forEach(function(f,A){var I=document.createElement("button");I.type="button",I.className="pin",I.setAttribute("aria-label",f.n+", "+f.h),I.innerHTML='<span class="num">'+(A+1)+'</span><span class="et"><b></b><small></small></span>',I.querySelector("b").textContent=f.n,I.querySelector("small").textContent=f.h,I.addEventListener("click",function(L){L.stopPropagation(),n.onPick(A)}),xe.appendChild(I),Lt.push(I)});var wt=new il(u,o.domElement);wt.enableDamping=!0,wt.dampingFactor=.09,wt.rotateSpeed=.7,wt.zoomSpeed=.8,wt.minDistance=3,wt.maxDistance=135,wt.minPolarAngle=.12,wt.maxPolarAngle=1.38,wt.screenSpacePanning=!1;var T=0,v=0,k=!1,at=!1,j=null,dt=0,mt=0,K=!0,$=!1,ft=!0,P=new F,Q=new Ot,J=new Ot,gt="",ht="",pt=0;function Rt(f){f&&k&&Tn(!1),$=!!f,wt.enabled=$&&!k,o.domElement.style.touchAction=$?"none":"pan-y",n.onMode&&n.onMode($)}Rt(!1);function Xt(){var f=wt.target;f.x=Math.max(-t.SX/2,Math.min(t.SX/2,f.x)),f.z=Math.max(-t.SZ/2,Math.min(t.SZ/2,f.z))}wt.addEventListener("change",function(){Xt(),ln()});function lt(f){return f<.5?4*f*f*f:1-Math.pow(-2*f+2,3)/2}function Dt(f,A,I){s&&(f=1),j={t0:performance.now(),ms:f,fn:A,fine:I},ln()}function Vt(f,A,I,L,U){var Y=u.position.clone(),rt=wt.target.clone();L===void 0&&(L=Math.atan2(Y.x-rt.x,Y.z-rt.z));var H=new F(f.x+Math.sin(I)*Math.sin(L)*A,f.y+Math.cos(I)*A,f.z+Math.sin(I)*Math.cos(L)*A);Dt(U||1300,function(tt){wt.target.lerpVectors(rt,f,tt),u.position.lerpVectors(Y,H,tt),u.position.y+=Math.sin(tt*Math.PI)*A*.25})}var _t={t:new F(0,.5,0),d:112,pol:.78,az:.2};function ee(){k&&Tn(!1),Vt(_t.t,_t.d,_t.pol,_t.az,1500)}function _e(f){var A=t.orologio(T),I=hv(A,Q,J);m.copy(Q),h.fog.color.copy(Q),w.color.copy(J);var L=wt.target.x,U=wt.target.z;w.position.set(L+Math.sin(I.az)*Math.cos(I.el)*60,Math.sin(I.el)*60+4,U-Math.cos(I.az)*Math.cos(I.el)*60),w.target.position.set(L,0,U),w.target.updateMatrixWorld();var Y=Q.getHexString();Y!==ht&&(ht=Y,i.style.setProperty("--cielo","#"+Y));var rt=Jr(A);rt!==gt&&(gt=rt,n.onClock&&n.onClock(rt,A))}function on(f){var A=t.puntoA(T),I=t.puntoA(T+.4),L=A.m*e/1e3+.06,U=I.m*e/1e3+.06;B.position.set(A.x,L,A.z);var Y=I.x-A.x,rt=I.z-A.z;Y*Y+rt*rt>1e-8&&(B.rotation.set(0,Math.atan2(-rt,Y),0),B.rotateZ(Math.atan2(U-L,Math.hypot(Y,rt)))),n.onS&&(!k||!f||f-pt>90)&&(pt=f||0,n.onS(T))}function Ai(f){T=Math.max(0,Math.min(t.total,f)),on(),_e(),ln()}function Wi(f,A){if(k&&A!==!1&&Tn(!1),v=f,Ai(t.tappe[f].s),Lt.forEach(function(U,Y){U.classList.toggle("sel",Y===f)}),A!==!1){var I=t.tappe[f],L=new F(I.x,I.m*e/1e3,I.z);Vt(L,f===0||f===t.tappe.length-1?26:15,.95,void 0,1400)}n.onSel&&n.onSel(f),ft=!0,ln()}function rl(f){k&&Tn(!1);var A=t.tappe[f],I=t.tappe[Math.max(0,f-1)],L=new F(A.x-.4,A.m*e/1e3+1.15,A.z+.6),U=new F(I.x,I.m*e/1e3+1.6,I.z),Y=u.position.clone(),rt=wt.target.clone();Ai(A.s),v=f,Lt.forEach(function(H,tt){H.classList.toggle("sel",tt===f)}),n.onSel&&n.onSel(f),Dt(1900,function(H){wt.target.lerpVectors(rt,U,H),u.position.lerpVectors(Y,L,H),u.position.y+=Math.sin(H*Math.PI)*6})}var Xi=0,ai=0,An=new F,qi=new F;function Tn(f){if(f===void 0&&(f=!k),f===k)return k;if(k=f,wt.enabled=$&&!k,f){T>t.total-2&&Ai(0),at=!0,j=null,Xi=performance.now(),Pi=0,Ri=0;var A=t.puntoA(T),I=t.puntoA(T+3);ai=Math.atan2(I.x-A.x,I.z-A.z),n.onGuida&&n.onGuida(!0)}else at=!1,n.onGuida&&n.onGuida(!1);return ln(),k}function zr(f){var A=Math.min(.08,Math.max(.001,(f-Xi)/1e3));Xi=f;var I=T;T+=t.total/n.durata*A,I<Gt&&T>=Gt&&ye(),T>=t.total&&(T=t.total,Tn(!1)),on(f),_e();var L=t.puntoA(T),U=t.puntoA(T+3.2),Y=t.puntoA(T+6),rt=Math.atan2(U.x-L.x,U.z-L.z);ai+=ah(ai,rt)*(s?1:1-Math.exp(-A*2.2));var H=Math.sin(ai),tt=Math.cos(ai),xt=L.m*e/1e3;An.set(L.x-H*11,xt+7.2,L.z-tt*11),qi.set(Y.x*.35+U.x*.65,U.m*e/1e3+.2,Y.z*.35+U.z*.65);var vt=s?1:1-Math.exp(-A*4),Pt=s?1:1-Math.exp(-A*5.5);u.position.lerp(An,vt),wt.target.lerp(qi,Pt);var ot=0,Nt=1e9;t.tappe.forEach(function(qt,Ut){var Ht=Math.abs(qt.s-T);Ht<Nt&&(Nt=Ht,ot=Ut)}),ot!==v&&Nt<1.5&&(v=ot,Lt.forEach(function(qt,Ut){qt.classList.toggle("sel",Ut===ot)}),n.onSel&&n.onSel(ot))}var Cn=1,oi=1;function Ti(){var f=i.getBoundingClientRect();Cn=Math.max(1,Math.round(f.width)),oi=Math.max(1,Math.round(f.height)),o.setSize(Cn,oi,!1),u.aspect=Cn/oi,u.updateProjectionMatrix(),ft=!0,ln()}function Ci(){t.tappe.forEach(function(f,A){P.set(f.x,Ve[A].y0+Ve[A].top,f.z).project(u);var I=Lt[A];if(P.z>1||P.z<-1){I.style.display="none";return}I.style.display="",I.style.transform="translate3d("+((P.x*.5+.5)*Cn).toFixed(1)+"px,"+((-P.y*.5+.5)*oi).toFixed(1)+"px,0) translate(-50%,-100%)",I.style.zIndex=A===v?20:Math.round(10+P.z*5)})}function Us(){var f=u.position.distanceTo(wt.target);if(h.fog.near=Math.max(8,f*.8),h.fog.far=f*3.4+60,re){var A=(performance.now()-re)/520;A>=1?(re=0,se.material.opacity=0,se.scale.setScalar(.01)):(se.material.opacity=1-A*A,se.scale.setScalar(.4+3.6*Math.sqrt(A)))}Ke(),o.render(h,u),Ci(),P.copy(Le).project(u),P.z<1&&P.z>-1&&Math.abs(P.x)<.92&&P.y>-.8&&P.y<1?Kt.style.transform="translate3d("+((P.x*.5+.5)*Cn).toFixed(1)+"px,"+((-P.y*.5+.5)*oi).toFixed(1)+"px,0) translate(-50%,-100%)":(Kt.style.opacity=0,Fe="")}var li=0,Ri=0,Pi=0;function al(f){if(!window.__noAdapt){if(li&&(Ri+=f-li,Pi++,Pi>=24)){var A=Ri/Pi;Ri=0,Pi=0,A>26&&l>.86&&(l=Math.max(.85,l*.85),o.setPixelRatio(l),Ti())}li=f}}function kr(f){dt=0;var A=wt.update();k&&zr(f);var I=A||k||j||re;if(j){var L=Math.min(1,(f-j.t0)/j.ms);if(j.fn(lt(L)),L>=1){var U=j.fine;j=null,U&&U()}}I||ft?(Us(),ft=!1,mt=0,I?al(f):li=0):(mt++,li=0),(I||mt<25)&&K&&!document.hidden&&!dt&&(dt=requestAnimationFrame(kr))}function ln(){mt=0,!dt&&K&&!document.hidden&&(dt=requestAnimationFrame(kr))}return window.IntersectionObserver&&new IntersectionObserver(function(f){K=f[0].isIntersecting,K?(ft=!0,ln()):k&&Tn(!1)}).observe(i),document.addEventListener("visibilitychange",function(){document.hidden||(ft=!0,ln())}),window.ResizeObserver?new ResizeObserver(Ti).observe(i):window.addEventListener("resize",Ti),o.domElement.addEventListener("webglcontextlost",function(f){f.preventDefault(),n.onPersa&&n.onPersa()}),Ti(),(function(){var f=_t.t,A=_t.d,I=_t.pol,L=_t.az;wt.target.copy(f),u.position.set(f.x+Math.sin(I)*Math.sin(L)*A,f.y+Math.cos(I)*A,f.z+Math.sin(I)*Math.cos(L)*A)})(),on(),_e(),Wi(0,!1),Us(),{seleziona:Wi,setS:Ai,guida:Tn,dallAlto:ee,muovi:Rt,vista:rl,inGuida:function(){return k},_debug:{camera:u,controls:wt,render:Us,kick:ln,scene:h,renderer:o}}}window.MappaNatale={init:function(n){var t=fu(n.terreno,n.stops),e={D:t,webgl:!1},i=null,s=null,r=0;function a(o){s&&s.set(o,r)}s=pu(n.profiloCanvas,t,{caldo:n.caldo,onScrub:function(o){i?(i.inGuida()&&i.guida(!1),i.setS(o)):s.set(o,r)}});try{i=gf({wrap:n.canvasBox,pinsEl:n.pinsEl,stops:n.stops,ve:n.ve,durata:n.durata,caldo:n.caldo,reduced:n.reduced,onPick:function(o){i.seleziona(o,!0)},onSel:function(o){r=o,s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o)},onS:a,onClock:n.onClock,onMode:n.onMode,onGuida:n.onGuida,onPersa:function(){n.onFallback&&n.onFallback("persa")}},t),e.webgl=!0}catch(o){i=null,n.onFallback&&n.onFallback("webgl",o)}return s.set(0,0),e.vai=function(o){r=o,i?i.seleziona(o,!0):(s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o))},e.guida=function(o){return i?i.guida(o):!1},e.dallAlto=function(){i&&i.dallAlto()},e.muovi=function(o){i&&i.muovi(o)},e.vista=function(o){i&&i.vista(o)},e._scena=i,window.MappaNatale.ultima=e,e}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
