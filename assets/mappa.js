(()=>{var zp=Object.defineProperty;var kp=(n,t,e)=>t in n?zp(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var Li=(n,t,e)=>kp(n,typeof t!="symbol"?t+"":t,e);var yu=4,Mu=0,Su=1,Gp=2;function zs(n){let t=n.length;for(;--t>=0;)n[t]=0}var Vp=0,Hp=1,Wp=2,Xp=29,Rc=256,Yp=286,Pc=30,id=19,sd=573,rd=15,uc=16;var ad=256,od=16,ld=17,cd=18,qp=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Zp=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),jy=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),hd=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Jp=512,ud=new Array(288*2);zs(ud);var dd=new Array(Pc*2);zs(dd);var bc=new Array(Jp);zs(bc);var Ic=new Array(256);zs(Ic);var fd=new Array(Xp);zs(fd);var pd=new Array(Pc);zs(pd);var md=n=>n<256?bc[n]:bc[256+(n>>>7)],Za=(n,t)=>{n.pending_buf[n.pending++]=t&255,n.pending_buf[n.pending++]=t>>>8&255},Yn=(n,t,e)=>{n.bi_valid>uc-e?(n.bi_buf|=t<<n.bi_valid&65535,Za(n,n.bi_buf),n.bi_buf=t>>uc-n.bi_valid,n.bi_valid+=e-uc):(n.bi_buf|=t<<n.bi_valid&65535,n.bi_valid+=e)},Ni=(n,t,e)=>{Yn(n,e[t*2],e[t*2+1])},Kp=(n,t)=>{let e=0;do e|=n&1,n>>>=1,e<<=1;while(--t>0);return e>>>1};var $p=(n,t)=>{let e=t.dyn_tree,i=t.max_code,s=t.stat_desc.static_tree,r=t.stat_desc.has_stree,a=t.stat_desc.extra_bits,o=t.stat_desc.extra_base,c=t.stat_desc.max_length,l,h,f,d,u,_,w=0;for(d=0;d<=rd;d++)n.bl_count[d]=0;for(e[n.heap[n.heap_max]*2+1]=0,l=n.heap_max+1;l<sd;l++)h=n.heap[l],d=e[e[h*2+1]*2+1]+1,d>c&&(d=c,w++),e[h*2+1]=d,!(h>i)&&(n.bl_count[d]++,u=0,h>=o&&(u=a[h-o]),_=e[h*2],n.opt_len+=_*(d+u),r&&(n.static_len+=_*(s[h*2+1]+u)));if(w!==0){do{for(d=c-1;n.bl_count[d]===0;)d--;n.bl_count[d]--,n.bl_count[d+1]+=2,n.bl_count[c]--,w-=2}while(w>0);for(d=c;d!==0;d--)for(h=n.bl_count[d];h!==0;)f=n.heap[--l],!(f>i)&&(e[f*2+1]!==d&&(n.opt_len+=(d-e[f*2+1])*e[f*2],e[f*2+1]=d),h--)}},jp=(n,t,e)=>{let i=new Array(16),s=0,r,a;for(r=1;r<=rd;r++)s=s+e[r-1]<<1,i[r]=s;for(a=0;a<=t;a++){let o=n[a*2+1];o!==0&&(n[a*2]=Kp(i[o]++,o))}};var Qp=n=>{let t;for(t=0;t<Yp;t++)n.dyn_ltree[t*2]=0;for(t=0;t<Pc;t++)n.dyn_dtree[t*2]=0;for(t=0;t<id;t++)n.bl_tree[t*2]=0;n.dyn_ltree[ad*2]=1,n.opt_len=n.static_len=0,n.sym_next=n.matches=0},gd=n=>{n.bi_valid>8?Za(n,n.bi_buf):n.bi_valid>0&&(n.pending_buf[n.pending++]=n.bi_buf),n.bi_buf=0,n.bi_valid=0},bu=(n,t,e,i)=>{let s=t*2,r=e*2;return n[s]<n[r]||n[s]===n[r]&&i[t]<=i[e]},dc=(n,t,e)=>{let i=n.heap[e],s=e<<1;for(;s<=n.heap_len&&(s<n.heap_len&&bu(t,n.heap[s+1],n.heap[s],n.depth)&&s++,!bu(t,i,n.heap[s],n.depth));)n.heap[e]=n.heap[s],e=s,s<<=1;n.heap[e]=i},wu=(n,t,e)=>{let i,s,r=0,a,o;if(n.sym_next!==0)do i=n.pending_buf[n.sym_buf+r++]&255,i+=(n.pending_buf[n.sym_buf+r++]&255)<<8,s=n.pending_buf[n.sym_buf+r++],i===0?Ni(n,s,t):(a=Ic[s],Ni(n,a+Rc+1,t),o=qp[a],o!==0&&(s-=fd[a],Yn(n,s,o)),i--,a=md(i),Ni(n,a,e),o=Zp[a],o!==0&&(i-=pd[a],Yn(n,i,o)));while(r<n.sym_next);Ni(n,ad,t)},wc=(n,t)=>{let e=t.dyn_tree,i=t.stat_desc.static_tree,s=t.stat_desc.has_stree,r=t.stat_desc.elems,a,o,c=-1,l;for(n.heap_len=0,n.heap_max=sd,a=0;a<r;a++)e[a*2]!==0?(n.heap[++n.heap_len]=c=a,n.depth[a]=0):e[a*2+1]=0;for(;n.heap_len<2;)l=n.heap[++n.heap_len]=c<2?++c:0,e[l*2]=1,n.depth[l]=0,n.opt_len--,s&&(n.static_len-=i[l*2+1]);for(t.max_code=c,a=n.heap_len>>1;a>=1;a--)dc(n,e,a);l=r;do a=n.heap[1],n.heap[1]=n.heap[n.heap_len--],dc(n,e,1),o=n.heap[1],n.heap[--n.heap_max]=a,n.heap[--n.heap_max]=o,e[l*2]=e[a*2]+e[o*2],n.depth[l]=(n.depth[a]>=n.depth[o]?n.depth[a]:n.depth[o])+1,e[a*2+1]=e[o*2+1]=l,n.heap[1]=l++,dc(n,e,1);while(n.heap_len>=2);n.heap[--n.heap_max]=n.heap[1],$p(n,t),jp(e,c,n.bl_count)},Eu=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),t[(e+1)*2+1]=65535,i=0;i<=e;i++)r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)&&(o<l?n.bl_tree[r*2]+=o:r!==0?(r!==s&&n.bl_tree[r*2]++,n.bl_tree[od*2]++):o<=10?n.bl_tree[ld*2]++:n.bl_tree[cd*2]++,o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4))},Au=(n,t,e)=>{let i,s=-1,r,a=t[1],o=0,c=7,l=4;for(a===0&&(c=138,l=3),i=0;i<=e;i++)if(r=a,a=t[(i+1)*2+1],!(++o<c&&r===a)){if(o<l)do Ni(n,r,n.bl_tree);while(--o!==0);else r!==0?(r!==s&&(Ni(n,r,n.bl_tree),o--),Ni(n,od,n.bl_tree),Yn(n,o-3,2)):o<=10?(Ni(n,ld,n.bl_tree),Yn(n,o-3,3)):(Ni(n,cd,n.bl_tree),Yn(n,o-11,7));o=0,s=r,a===0?(c=138,l=3):r===a?(c=6,l=3):(c=7,l=4)}},tm=n=>{let t;for(Eu(n,n.dyn_ltree,n.l_desc.max_code),Eu(n,n.dyn_dtree,n.d_desc.max_code),wc(n,n.bl_desc),t=id-1;t>=3&&n.bl_tree[hd[t]*2+1]===0;t--);return n.opt_len+=3*(t+1)+5+5+4,t},em=(n,t,e,i)=>{let s;for(Yn(n,t-257,5),Yn(n,e-1,5),Yn(n,i-4,4),s=0;s<i;s++)Yn(n,n.bl_tree[hd[s]*2+1],3);Au(n,n.dyn_ltree,t-1),Au(n,n.dyn_dtree,e-1)},nm=n=>{let t=4093624447,e;for(e=0;e<=31;e++,t>>>=1)if(t&1&&n.dyn_ltree[e*2]!==0)return Mu;if(n.dyn_ltree[18]!==0||n.dyn_ltree[20]!==0||n.dyn_ltree[26]!==0)return Su;for(e=32;e<Rc;e++)if(n.dyn_ltree[e*2]!==0)return Su;return Mu};var Ec=(n,t,e,i)=>{Yn(n,(Vp<<1)+(i?1:0),3),gd(n),Za(n,e),Za(n,~e),e&&n.pending_buf.set(n.window.subarray(t,t+e),n.pending),n.pending+=e};var im=(n,t,e,i)=>{let s,r,a=0;n.level>0?(n.strm.data_type===Gp&&(n.strm.data_type=nm(n)),wc(n,n.l_desc),wc(n,n.d_desc),a=tm(n),s=n.opt_len+3+7>>>3,r=n.static_len+3+7>>>3,(r<=s||n.strategy===yu)&&(s=r)):s=r=e+5,e+4<=s&&t!==-1?Ec(n,t,e,i):n.strategy===yu||r===s?(Yn(n,(Hp<<1)+(i?1:0),3),wu(n,ud,dd)):(Yn(n,(Wp<<1)+(i?1:0),3),em(n,n.l_desc.max_code+1,n.d_desc.max_code+1,a+1),wu(n,n.dyn_ltree,n.dyn_dtree)),Qp(n),i&&gd(n)},Cr=(n,t,e)=>(n.pending_buf[n.sym_buf+n.sym_next++]=t,n.pending_buf[n.sym_buf+n.sym_next++]=t>>8,n.pending_buf[n.sym_buf+n.sym_next++]=e,t===0?n.dyn_ltree[e*2]++:(n.matches++,t--,n.dyn_ltree[(Ic[e]+Rc+1)*2]++,n.dyn_dtree[md(t)*2]++),n.sym_next===n.sym_end),Ja=(n,t,e,i)=>{let s=n&65535|0,r=n>>>16&65535|0,a=0;for(;e!==0;){a=e>2e3?2e3:e,e-=a;do s=s+t[i++]|0,r=r+s|0;while(--a);s%=65521,r%=65521}return s|r<<16|0},sm=()=>{let n=new Uint32Array(2048),t;for(let e=0;e<256;e++){t=e;for(let i=0;i<8;i++)t=t&1?3988292384^t>>>1:t>>>1;n[e]=t}for(let e=0;e<256;e++){t=n[e];for(let i=256;i<256*8;i+=256)t=n[t&255]^t>>>8,n[i+e]=t}return n},rm=sm(),hi=(n,t,e,i)=>{let s=rm,r=i+e,a=i;n^=-1;for(let o=r-7;a<o;a+=8)n^=t[a]|t[a+1]<<8|t[a+2]<<16|t[a+3]<<24,n=s[1792+(n&255)]^s[1536+(n>>>8&255)]^s[1280+(n>>>16&255)]^s[1024+(n>>>24)]^s[768+t[a+4]]^s[512+t[a+5]]^s[256+t[a+6]]^s[t[a+7]];for(;a<r;a++)n=n>>>8^s[(n^t[a])&255];return n^-1},fc={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};var un=3,pc=258,Mi=262;var Qi=1,Lc=2,Dc=3,Nc=4;var am=n=>{let t,e,i,s=n.w_size;t=n.hash_size,i=t;do e=n.head[--i],n.head[i]=e>=s?e-s:0;while(--t);t=s,i=t;do e=n.prev[--i],n.prev[i]=e>=s?e-s:0;while(--t)},Uc=(n,t,e)=>(t<<n.hash_shift^e)&n.hash_mask,Bs=(n,t)=>{let e;if(n.legacy_hash)e=n.ins_h=Uc(n,n.ins_h,n.window[t+un-1]);else{let s=n.window,r=s[t]|s[t+1]<<8|s[t+2]<<16|s[t+3]<<24;e=n.ins_h=Math.imul(r,66521)+66521>>>16&n.hash_mask}let i=n.prev[t&n.w_mask]=n.head[e];return n.head[e]=t,i},Ac=n=>{let t=n.state,e=t.pending;e>n.avail_out&&(e=n.avail_out),e!==0&&(n.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+e),n.next_out),n.next_out+=e,t.pending_out+=e,n.total_out+=e,n.avail_out-=e,t.pending-=e,t.pending===0&&(t.pending_out=0))},vs=(n,t)=>{im(n,n.block_start>=0?n.block_start:-1,n.strstart-n.block_start,t),n.block_start=n.strstart,Ac(n.strm)};var Tc=(n,t,e,i)=>{let s=n.avail_in;return s>i&&(s=i),s===0?0:(n.avail_in-=s,t.set(n.input.subarray(n.next_in,n.next_in+s),e),n.state.wrap===1?n.adler=Ja(n.adler,t,s,e):n.state.wrap===2&&(n.adler=hi(n.adler,t,s,e)),n.next_in+=s,n.total_in+=s,s)},_d=(n,t)=>{let e=n.max_chain_length,i=n.strstart,s,r,a=n.prev_length,o=n.nice_match,c=n.strstart>n.w_size-Mi?n.strstart-(n.w_size-Mi):0,l=n.window,h=n.w_mask,f=n.prev,d=n.strstart+pc,u=l[i+a-1],_=l[i+a];n.prev_length>=n.good_match&&(e>>=2),o>n.lookahead&&(o=n.lookahead);do if(s=t,!(l[s+a]!==_||l[s+a-1]!==u||l[s]!==l[i]||l[++s]!==l[i+1])){i+=2,s++;do;while(l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&l[++i]===l[++s]&&i<d);if(r=pc-(d-i),i=d-pc,r>a){if(n.match_start=t,a=r,r>=o)break;u=l[i+a-1],_=l[i+a]}}while((t=f[t&h])>c&&--e!==0);return a<=n.lookahead?a:n.lookahead},xd=n=>{let t=n.w_size,e,i,s;do{if(i=n.window_size-n.lookahead-n.strstart,n.strstart>=t+(t-Mi)&&(n.window.set(n.window.subarray(t,t+t-i),0),n.match_start-=t,n.strstart-=t,n.block_start-=t,n.insert>n.strstart&&(n.insert=n.strstart),am(n),i+=t),n.strm.avail_in===0)break;if(e=Tc(n.strm,n.window,n.strstart+n.lookahead,i),n.lookahead+=e,n.legacy_hash){if(n.lookahead+n.insert>=un)for(s=n.strstart-n.insert,n.ins_h=n.window[s],n.ins_h=Uc(n,n.ins_h,n.window[s+1]);n.insert&&(Bs(n,s),s++,n.insert--,!(n.lookahead+n.insert<un)););}else if(n.lookahead+n.insert>un)for(s=n.strstart-n.insert;n.insert&&(Bs(n,s),s++,n.insert--,!(n.lookahead+n.insert<=un)););}while(n.lookahead<Mi&&n.strm.avail_in!==0)},om=(n,t)=>{let e=n.pending_buf_size-5>n.w_size?n.w_size:n.pending_buf_size-5,i,s,r,a=0,o=n.strm.avail_in;do{if(i=65535,r=n.bi_valid+42>>3,n.strm.avail_out<r||(r=n.strm.avail_out-r,s=n.strstart-n.block_start,i>s+n.strm.avail_in&&(i=s+n.strm.avail_in),i>r&&(i=r),i<e&&(i===0&&t!==4||t===0||i!==s+n.strm.avail_in)))break;a=t===4&&i===s+n.strm.avail_in?1:0,Ec(n,0,0,a),n.pending_buf[n.pending-4]=i,n.pending_buf[n.pending-3]=i>>8,n.pending_buf[n.pending-2]=~i,n.pending_buf[n.pending-1]=~i>>8,Ac(n.strm),s&&(s>i&&(s=i),n.strm.output.set(n.window.subarray(n.block_start,n.block_start+s),n.strm.next_out),n.strm.next_out+=s,n.strm.avail_out-=s,n.strm.total_out+=s,n.block_start+=s,i-=s),i&&(Tc(n.strm,n.strm.output,n.strm.next_out,i),n.strm.next_out+=i,n.strm.avail_out-=i,n.strm.total_out+=i)}while(a===0);return o-=n.strm.avail_in,o&&(o>=n.w_size?(n.matches=2,n.window.set(n.strm.input.subarray(n.strm.next_in-n.w_size,n.strm.next_in),0),n.strstart=n.w_size,n.insert=n.strstart):(n.window_size-n.strstart<=o&&(n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,n.insert>n.strstart&&(n.insert=n.strstart)),n.window.set(n.strm.input.subarray(n.strm.next_in-o,n.strm.next_in),n.strstart),n.strstart+=o,n.insert+=o>n.w_size-n.insert?n.w_size-n.insert:o),n.block_start=n.strstart),n.high_water<n.strstart&&(n.high_water=n.strstart),a?Nc:t!==0&&t!==4&&n.strm.avail_in===0&&n.strstart===n.block_start?Lc:(r=n.window_size-n.strstart,n.strm.avail_in>r&&n.block_start>=n.w_size&&(n.block_start-=n.w_size,n.strstart-=n.w_size,n.window.set(n.window.subarray(n.w_size,n.w_size+n.strstart),0),n.matches<2&&n.matches++,r+=n.w_size,n.insert>n.strstart&&(n.insert=n.strstart)),r>n.strm.avail_in&&(r=n.strm.avail_in),r&&(Tc(n.strm,n.window,n.strstart,r),n.strstart+=r,n.insert+=r>n.w_size-n.insert?n.w_size-n.insert:r),n.high_water<n.strstart&&(n.high_water=n.strstart),r=n.bi_valid+42>>3,r=n.pending_buf_size-r>65535?65535:n.pending_buf_size-r,e=r>n.w_size?n.w_size:r,s=n.strstart-n.block_start,(s>=e||(s||t===4)&&t!==0&&n.strm.avail_in===0&&s<=r)&&(i=s>r?r:s,a=t===4&&n.strm.avail_in===0&&i===s?1:0,Ec(n,n.block_start,i,a),n.block_start+=i,Ac(n.strm)),a?Dc:Qi)},mc=(n,t)=>{let e,i;for(;;){if(n.lookahead<Mi){if(xd(n),n.lookahead<Mi&&t===0)return Qi;if(n.lookahead===0)break}if(e=0,n.lookahead>=un&&(e=Bs(n,n.strstart)),e!==0&&n.strstart-e<=n.w_size-Mi&&(n.match_length=_d(n,e)),n.match_length>=un)if(i=Cr(n,n.strstart-n.match_start,n.match_length-un),n.lookahead-=n.match_length,n.match_length<=n.max_lazy_match&&n.lookahead>=un){n.match_length--;do n.strstart++,e=Bs(n,n.strstart);while(--n.match_length!==0);n.strstart++}else n.strstart+=n.match_length,n.match_length=0,n.legacy_hash&&(n.ins_h=n.window[n.strstart],n.ins_h=Uc(n,n.ins_h,n.window[n.strstart+1]));else i=Cr(n,0,n.window[n.strstart]),n.lookahead--,n.strstart++;if(i&&(vs(n,!1),n.strm.avail_out===0))return Qi}return n.insert=n.strstart<un-1?n.strstart:un-1,t===4?(vs(n,!0),n.strm.avail_out===0?Dc:Nc):n.sym_next&&(vs(n,!1),n.strm.avail_out===0)?Qi:Lc},Os=(n,t)=>{let e,i,s;for(;;){if(n.lookahead<Mi){if(xd(n),n.lookahead<Mi&&t===0)return Qi;if(n.lookahead===0)break}if(e=0,n.lookahead>=un&&(e=Bs(n,n.strstart)),n.prev_length=n.match_length,n.prev_match=n.match_start,n.match_length=un-1,e!==0&&n.prev_length<n.max_lazy_match&&n.strstart-e<=n.w_size-Mi&&(n.match_length=_d(n,e),n.match_length<=5&&(n.strategy===1||n.match_length===un&&n.strstart-n.match_start>4096)&&(n.match_length=un-1)),n.prev_length>=un&&n.match_length<=n.prev_length){s=n.strstart+n.lookahead-un,i=Cr(n,n.strstart-1-n.prev_match,n.prev_length-un),n.lookahead-=n.prev_length-1,n.prev_length-=2;do++n.strstart<=s&&(e=Bs(n,n.strstart));while(--n.prev_length!==0);if(n.match_available=0,n.match_length=un-1,n.strstart++,i&&(vs(n,!1),n.strm.avail_out===0))return Qi}else if(n.match_available){if(i=Cr(n,0,n.window[n.strstart-1]),i&&vs(n,!1),n.strstart++,n.lookahead--,n.strm.avail_out===0)return Qi}else n.match_available=1,n.strstart++,n.lookahead--}return n.match_available&&(i=Cr(n,0,n.window[n.strstart-1]),n.match_available=0),n.insert=n.strstart<un-1?n.strstart:un-1,t===4?(vs(n,!0),n.strm.avail_out===0?Dc:Nc):n.sym_next&&(vs(n,!1),n.strm.avail_out===0)?Qi:Lc};var yi=class{constructor(n,t,e,i,s){this.good_length=n,this.max_lazy=t,this.nice_length=e,this.max_chain=i,this.func=s}},Qy=[new yi(0,0,0,0,om),new yi(4,4,8,4,mc),new yi(4,5,16,8,mc),new yi(4,6,32,32,mc),new yi(4,4,16,16,Os),new yi(8,16,32,32,Os),new yi(8,16,128,128,Os),new yi(8,32,128,256,Os),new yi(32,128,258,1024,Os),new yi(32,258,258,4096,Os)];var Wa=16209,lm=16191;function cm(n,t){let e,i,s,r,a,o,c,l,h,f,d,u,_,w,p,m,S,v,y,C,E,g,b,R,T=n.state;e=n.next_in,b=n.input,i=e+(n.avail_in-5),s=n.next_out,R=n.output,r=s-(t-n.avail_out),a=s+(n.avail_out-257),o=T.dmax,c=T.wsize,l=T.whave,h=T.wnext,f=T.window,d=T.hold,u=T.bits,_=T.lencode,w=T.distcode,p=(1<<T.lenbits)-1,m=(1<<T.distbits)-1;t:do{u<15&&(d+=b[e++]<<u,u+=8,d+=b[e++]<<u,u+=8),S=_[d&p];e:for(;;){if(v=S>>>24,d>>>=v,u-=v,v=S>>>16&255,v===0)R[s++]=S&65535;else if(v&16){y=S&65535,v&=15,v&&(u<v&&(d+=b[e++]<<u,u+=8),y+=d&(1<<v)-1,d>>>=v,u-=v),u<15&&(d+=b[e++]<<u,u+=8,d+=b[e++]<<u,u+=8),S=w[d&m];n:for(;;){if(v=S>>>24,d>>>=v,u-=v,v=S>>>16&255,v&16){if(C=S&65535,v&=15,u<v&&(d+=b[e++]<<u,u+=8,u<v&&(d+=b[e++]<<u,u+=8)),C+=d&(1<<v)-1,C>o){n.msg="invalid distance too far back",T.mode=Wa;break t}if(d>>>=v,u-=v,v=s-r,C>v){if(v=C-v,v>l&&T.sane){n.msg="invalid distance too far back",T.mode=Wa;break t}if(E=0,g=f,h===0){if(E+=c-v,v<y){y-=v;do R[s++]=f[E++];while(--v);E=s-C,g=R}}else if(h<v){if(E+=c+h-v,v-=h,v<y){y-=v;do R[s++]=f[E++];while(--v);if(E=0,h<y){v=h,y-=v;do R[s++]=f[E++];while(--v);E=s-C,g=R}}}else if(E+=h-v,v<y){y-=v;do R[s++]=f[E++];while(--v);E=s-C,g=R}for(;y>2;)R[s++]=g[E++],R[s++]=g[E++],R[s++]=g[E++],y-=3;y&&(R[s++]=g[E++],y>1&&(R[s++]=g[E++]))}else{E=s-C;do R[s++]=R[E++],R[s++]=R[E++],R[s++]=R[E++],y-=3;while(y>2);y&&(R[s++]=R[E++],y>1&&(R[s++]=R[E++]))}}else if((v&64)===0){S=w[(S&65535)+(d&(1<<v)-1)];continue n}else{n.msg="invalid distance code",T.mode=Wa;break t}break}}else if((v&64)===0){S=_[(S&65535)+(d&(1<<v)-1)];continue e}else if(v&32){T.mode=lm;break t}else{n.msg="invalid literal/length code",T.mode=Wa;break t}break}}while(e<i&&s<a);y=u>>3,e-=y,u-=y<<3,d&=(1<<u)-1,n.next_in=e,n.next_out=s,n.avail_in=e<i?5+(i-e):5-(e-i),n.avail_out=s<a?257+(a-s):257-(s-a),T.hold=d,T.bits=u}var Xa=15,Tu=852,Cu=592,Ru=0,gc=1,Pu=2,hm=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),um=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),dm=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),fm=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Rr=(n,t,e,i,s,r,a,o)=>{let c=o.bits,l=0,h=0,f=0,d=0,u=0,_=0,w=0,p=0,m=0,S=0,v,y,C,E,g,b=null,R,T=new Uint16Array(16),L=new Uint16Array(16),B=null,H,P,G;for(l=0;l<=Xa;l++)T[l]=0;for(h=0;h<i;h++)T[t[e+h]]++;for(u=c,d=Xa;d>=1&&T[d]===0;d--);if(u>d&&(u=d),d===0)return s[r++]=20971520,s[r++]=20971520,o.bits=1,0;for(f=1;f<d&&T[f]===0;f++);for(u<f&&(u=f),p=1,l=1;l<=Xa;l++)if(p<<=1,p-=T[l],p<0)return-1;if(p>0&&(n===Ru||d!==1))return-1;for(L[1]=0,l=1;l<Xa;l++)L[l+1]=L[l]+T[l];for(h=0;h<i;h++)t[e+h]!==0&&(a[L[t[e+h]]++]=h);if(n===Ru?(b=B=a,R=20):n===gc?(b=hm,B=um,R=257):(b=dm,B=fm,R=0),S=0,h=0,l=f,g=r,_=u,w=0,C=-1,m=1<<u,E=m-1,n===gc&&m>Tu||n===Pu&&m>Cu)return 1;for(;;){H=l-w,a[h]+1<R?(P=0,G=a[h]):a[h]>=R?(P=B[a[h]-R],G=b[a[h]-R]):(P=96,G=0),v=1<<l-w,y=1<<_,f=y;do y-=v,s[g+(S>>w)+y]=H<<24|P<<16|G|0;while(y!==0);for(v=1<<l-1;S&v;)v>>=1;if(v!==0?(S&=v-1,S+=v):S=0,h++,--T[l]===0){if(l===d)break;l=t[e+a[h]]}if(l>u&&(S&E)!==C){for(w===0&&(w=u),g+=f,_=l-w,p=1<<_;_+w<d&&(p-=T[_+w],!(p<=0));)_++,p<<=1;if(m+=1<<_,n===gc&&m>Tu||n===Pu&&m>Cu)return 1;C=S&E,s[C]=u<<24|_<<16|g-r|0}}return S!==0&&(s[g+S]=l-w<<24|4194304),o.bits=u,0},pm=0,vd=1,yd=2,$a=16180,Iu=16181,Lu=16182,Du=16183,Nu=16184,Uu=16185,Fu=16186,Ou=16187,Bu=16188,zu=16189,Ka=16190,Di=16191,_c=16192,ku=16193,xc=16194,Gu=16195,Vu=16196,Hu=16197,Wu=16198,Ya=16199,qa=16200,Xu=16201,Yu=16202,qu=16203,Zu=16204,Ju=16205,vc=16206,Ku=16207,$u=16208,nn=16209,Cc=16210,Md=16211,mm=852,gm=592;var ju=n=>(n>>>24&255)+(n>>>8&65280)+((n&65280)<<8)+((n&255)<<24),_m=class{constructor(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}},ks=n=>{if(!n)return 1;let t=n.state;return!t||t.strm!==n||t.mode<$a||t.mode>Md?1:0},xm=n=>{if(ks(n))return-2;let t=n.state;return n.total_in=n.total_out=t.total=0,n.msg="",t.wrap&&(n.adler=t.wrap&1),t.mode=$a,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(mm),t.distcode=t.distdyn=new Int32Array(gm),t.sane=1,t.back=-1,0},Sd=n=>{if(ks(n))return-2;let t=n.state;return t.wsize=0,t.whave=0,t.wnext=0,xm(n)},vm=(n,t)=>{let e;if(ks(n))return-2;let i=n.state;return t<0?(e=0,t=-t):(e=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?-2:(i.window!==null&&i.wbits!==t&&(i.window=null),i.wrap=e,i.wbits=t,Sd(n))},ym=(n,t)=>{if(!n)return-2;let e=new _m;n.state=e,e.strm=n,e.window=null,e.mode=$a;let i=vm(n,t);return i!==0&&(n.state=null),i};var Qu=!0,yc,Mc,Mm=n=>{if(Qu){yc=new Int32Array(512),Mc=new Int32Array(32);let t=0;for(;t<144;)n.lens[t++]=8;for(;t<256;)n.lens[t++]=9;for(;t<280;)n.lens[t++]=7;for(;t<288;)n.lens[t++]=8;for(Rr(vd,n.lens,0,288,yc,0,n.work,{bits:9}),t=0;t<32;)n.lens[t++]=5;Rr(yd,n.lens,0,32,Mc,0,n.work,{bits:5}),Qu=!1}n.lencode=yc,n.lenbits=9,n.distcode=Mc,n.distbits=5},bd=(n,t,e,i)=>{let s,r=n.state;return r.window===null&&(r.window=new Uint8Array(1<<r.wbits)),r.wsize===0&&(r.wsize=1<<r.wbits,r.wnext=0,r.whave=0),i>=r.wsize?(r.window.set(t.subarray(e-r.wsize,e),0),r.wnext=0,r.whave=r.wsize):(s=r.wsize-r.wnext,s>i&&(s=i),r.window.set(t.subarray(e-i,e-i+s),r.wnext),i-=s,i?(r.window.set(t.subarray(e-i,e),0),r.wnext=i,r.whave=r.wsize):(r.wnext+=s,r.wnext===r.wsize&&(r.wnext=0),r.whave<r.wsize&&(r.whave+=s))),0},Sc=(n,t)=>{let e,i,s,r,a,o,c,l,h,f,d,u,_,w,p=0,m,S,v,y,C,E,g,b,R=new Uint8Array(4),T,L,B=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(ks(n)||!n.output||!n.input&&n.avail_in!==0)return-2;e=n.state,e.mode===Di&&(e.mode=_c),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,f=o,d=c,b=0;t:for(;;)switch(e.mode){case $a:if(e.wrap===0){e.mode=_c;break}for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&2&&l===35615){e.wbits===0&&(e.wbits=15),e.check=0,R[0]=l&255,R[1]=l>>>8&255,e.check=hi(e.check,R,2,0),l=0,h=0,e.mode=Iu;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((l&255)<<8)+(l>>8))%31){n.msg="incorrect header check",e.mode=nn;break}if((l&15)!==8){n.msg="unknown compression method",e.mode=nn;break}if(l>>>=4,h-=4,g=(l&15)+8,e.wbits===0&&(e.wbits=g),g>15||g>e.wbits){n.msg="invalid window size",e.mode=nn;break}e.dmax=1<<e.wbits,e.flags=0,n.adler=e.check=1,e.mode=l&512?zu:Di,l=0,h=0;break;case Iu:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.flags=l,(e.flags&255)!==8){n.msg="unknown compression method",e.mode=nn;break}if(e.flags&57344){n.msg="unknown header flags set",e.mode=nn;break}e.head&&(e.head.text=l>>8&1),e.flags&512&&e.wrap&4&&(R[0]=l&255,R[1]=l>>>8&255,e.check=hi(e.check,R,2,0)),l=0,h=0,e.mode=Lu;case Lu:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.time=l>>>0),e.flags&512&&e.wrap&4&&(R[0]=l&255,R[1]=l>>>8&255,R[2]=l>>>16&255,R[3]=l>>>24&255,e.check=hi(e.check,R,4,0)),l=0,h=0,e.mode=Du;case Du:for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.head&&(e.head.xflags=l&255,e.head.os=l>>8),e.flags&512&&e.wrap&4&&(R[0]=l&255,R[1]=l>>>8&255,e.check=hi(e.check,R,2,0)),l=0,h=0,e.mode=Nu;case Nu:if(e.flags&1024){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length=l,e.head&&(e.head.extra_len=l),e.flags&512&&e.wrap&4&&(R[0]=l&255,R[1]=l>>>8&255,e.check=hi(e.check,R,2,0)),l=0,h=0}else e.head&&(e.head.extra=null);e.mode=Uu;case Uu:if(e.flags&1024&&(u=e.length,u>o&&(u=o),u&&(e.head&&(g=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(i.subarray(r,r+u),g)),e.flags&512&&e.wrap&4&&(e.check=hi(e.check,i,u,r)),o-=u,r+=u,e.length-=u),e.length))break t;e.length=0,e.mode=Fu;case Fu:if(e.flags&2048){if(o===0)break t;u=0;do g=i[r+u++],e.head&&g&&e.length<65536&&(e.head.name+=String.fromCharCode(g),e.length++);while(g&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=hi(e.check,i,u,r)),o-=u,r+=u,g)break t}else e.head&&(e.head.name=null);e.length=0,e.mode=Ou;case Ou:if(e.flags&4096){if(o===0)break t;u=0;do g=i[r+u++],e.head&&g&&e.length<65536&&(e.head.comment+=String.fromCharCode(g),e.length++);while(g&&u<o);if(e.flags&512&&e.wrap&4&&(e.check=hi(e.check,i,u,r)),o-=u,r+=u,g)break t}else e.head&&(e.head.comment=null);e.mode=Bu;case Bu:if(e.flags&512){for(;h<16;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.check&65535)){n.msg="header crc mismatch",e.mode=nn;break}l=0,h=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),n.adler=e.check=0,e.mode=Di;break;case zu:for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}n.adler=e.check=ju(l),l=0,h=0,e.mode=Ka;case Ka:if(e.havedict===0)return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,2;n.adler=e.check=1,e.mode=Di;case Di:if(t===5||t===6)break t;case _c:if(e.last){l>>>=h&7,h-=h&7,e.mode=vc;break}for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}switch(e.last=l&1,l>>>=1,h-=1,l&3){case 0:e.mode=ku;break;case 1:if(Mm(e),e.mode=Ya,t===6){l>>>=2,h-=2;break t}break;case 2:e.mode=Vu;break;case 3:n.msg="invalid block type",e.mode=nn}l>>>=2,h-=2;break;case ku:for(l>>>=h&7,h-=h&7;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((l&65535)!==(l>>>16^65535)){n.msg="invalid stored block lengths",e.mode=nn;break}if(e.length=l&65535,l=0,h=0,e.mode=xc,t===6)break t;case xc:e.mode=Gu;case Gu:if(u=e.length,u){if(u>o&&(u=o),u>c&&(u=c),u===0)break t;s.set(i.subarray(r,r+u),a),o-=u,r+=u,c-=u,a+=u,e.length-=u;break}e.mode=Di;break;case Vu:for(;h<14;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.nlen=(l&31)+257,l>>>=5,h-=5,e.ndist=(l&31)+1,l>>>=5,h-=5,e.ncode=(l&15)+4,l>>>=4,h-=4,e.nlen>286||e.ndist>30){n.msg="too many length or distance symbols",e.mode=nn;break}e.have=0,e.mode=Hu;case Hu:for(;e.have<e.ncode;){for(;h<3;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.lens[B[e.have++]]=l&7,l>>>=3,h-=3}for(;e.have<19;)e.lens[B[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,T={bits:e.lenbits},b=Rr(pm,e.lens,0,19,e.lencode,0,e.work,T),e.lenbits=T.bits,b){n.msg="invalid code lengths set",e.mode=nn;break}e.have=0,e.mode=Wu;case Wu:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[l&(1<<e.lenbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(v<16)l>>>=m,h-=m,e.lens[e.have++]=v;else{if(v===16){for(L=m+2;h<L;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(l>>>=m,h-=m,e.have===0){n.msg="invalid bit length repeat",e.mode=nn;break}g=e.lens[e.have-1],u=3+(l&3),l>>>=2,h-=2}else if(v===17){for(L=m+3;h<L;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=m,h-=m,g=0,u=3+(l&7),l>>>=3,h-=3}else{for(L=m+7;h<L;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=m,h-=m,g=0,u=11+(l&127),l>>>=7,h-=7}if(e.have+u>e.nlen+e.ndist){n.msg="invalid bit length repeat",e.mode=nn;break}for(;u--;)e.lens[e.have++]=g}}if(e.mode===nn)break;if(e.lens[256]===0){n.msg="invalid code -- missing end-of-block",e.mode=nn;break}if(e.lenbits=9,T={bits:e.lenbits},b=Rr(vd,e.lens,0,e.nlen,e.lencode,0,e.work,T),e.lenbits=T.bits,b){n.msg="invalid literal/lengths set",e.mode=nn;break}if(e.distbits=6,e.distcode=e.distdyn,T={bits:e.distbits},b=Rr(yd,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,T),e.distbits=T.bits,b){n.msg="invalid distances set",e.mode=nn;break}if(e.mode=Ya,t===6)break t;case Ya:e.mode=qa;case qa:if(o>=6&&c>=258){n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,cm(n,d),a=n.next_out,s=n.output,c=n.avail_out,r=n.next_in,i=n.input,o=n.avail_in,l=e.hold,h=e.bits,e.mode===Di&&(e.back=-1);break}for(e.back=0;p=e.lencode[l&(1<<e.lenbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(S&&(S&240)===0){for(y=m,C=S,E=v;p=e.lencode[E+((l&(1<<y+C)-1)>>y)],m=p>>>24,S=p>>>16&255,v=p&65535,!(y+m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,e.back+=y}if(l>>>=m,h-=m,e.back+=m,e.length=v,S===0){e.mode=Ju;break}if(S&32){e.back=-1,e.mode=Di;break}if(S&64){n.msg="invalid literal/length code",e.mode=nn;break}e.extra=S&15,e.mode=Xu;case Xu:if(e.extra){for(L=e.extra;h<L;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.length+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=Yu;case Yu:for(;p=e.distcode[l&(1<<e.distbits)-1],m=p>>>24,S=p>>>16&255,v=p&65535,!(m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if((S&240)===0){for(y=m,C=S,E=v;p=e.distcode[E+((l&(1<<y+C)-1)>>y)],m=p>>>24,S=p>>>16&255,v=p&65535,!(y+m<=h);){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}l>>>=y,h-=y,e.back+=y}if(l>>>=m,h-=m,e.back+=m,S&64){n.msg="invalid distance code",e.mode=nn;break}e.offset=v,e.extra=S&15,e.mode=qu;case qu:if(e.extra){for(L=e.extra;h<L;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}e.offset+=l&(1<<e.extra)-1,l>>>=e.extra,h-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){n.msg="invalid distance too far back",e.mode=nn;break}e.mode=Zu;case Zu:if(c===0)break t;if(u=d-c,e.offset>u){if(u=e.offset-u,u>e.whave&&e.sane){n.msg="invalid distance too far back",e.mode=nn;break}u>e.wnext?(u-=e.wnext,_=e.wsize-u):_=e.wnext-u,u>e.length&&(u=e.length),w=e.window}else w=s,_=a-e.offset,u=e.length;u>c&&(u=c),c-=u,e.length-=u;do s[a++]=w[_++];while(--u);e.length===0&&(e.mode=qa);break;case Ju:if(c===0)break t;s[a++]=e.length,c--,e.mode=qa;break;case vc:if(e.wrap){for(;h<32;){if(o===0)break t;o--,l|=i[r++]<<h,h+=8}if(d-=c,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?hi(e.check,s,d,a-d):Ja(e.check,s,d,a-d)),d=c,e.wrap&4&&(e.flags?l:ju(l))!==e.check){n.msg="incorrect data check",e.mode=nn;break}l=0,h=0}e.mode=Ku;case Ku:if(e.wrap&&e.flags){for(;h<32;){if(o===0)break t;o--,l+=i[r++]<<h,h+=8}if(e.wrap&4&&l!==(e.total&4294967295)){n.msg="incorrect length check",e.mode=nn;break}l=0,h=0}e.mode=$u;case $u:b=1;break t;case nn:b=-3;break t;case Cc:return-4;case Md:default:return-2}return n.next_out=a,n.avail_out=c,n.next_in=r,n.avail_in=o,e.hold=l,e.bits=h,(e.wsize||d!==n.avail_out&&e.mode<nn&&(e.mode<vc||t!==4))&&bd(n,n.output,n.next_out,d-n.avail_out)?(e.mode=Cc,-4):(f-=n.avail_in,d-=n.avail_out,n.total_in+=f,n.total_out+=d,e.total+=d,e.wrap&4&&d&&(n.adler=e.check=e.flags?hi(e.check,s,d,n.next_out-d):Ja(e.check,s,d,n.next_out-d)),n.data_type=e.bits+(e.last?64:0)+(e.mode===Di?128:0)+(e.mode===Ya||e.mode===xc?256:0),(f===0&&d===0||t===4)&&b===0&&(b=-5),b)},td=n=>{if(ks(n))return-2;let t=n.state;return t.window&&(t.window=null),n.state=null,0};var ed=(n,t)=>{let e=t.length,i,s,r;return ks(n)||(i=n.state,i.wrap!==0&&i.mode!==Ka)?-2:i.mode===Ka&&(s=1,s=Ja(s,t,e,0),s!==i.check)?-3:(r=bd(n,t,e,e),r?(i.mode=Cc,-4):(i.havedict=1,0))},Sm=class{constructor(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}};var bm=n=>{let t=new Uint8Array(n.reduce((i,s)=>i+s.length,0)),e=0;for(let i of n)t.set(i,e),e+=i.length;return t};var nd=Object.prototype.toString,wm={chunkSize:1024*64,windowBits:15,raw:!1,dictionary:new Uint8Array(0)},Em=class{constructor(n={}){Li(this,"options");Li(this,"err");Li(this,"msg");Li(this,"ended");Li(this,"started");Li(this,"chunks");Li(this,"strm");Li(this,"result");this.options=Object.assign({},wm,n);let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!n.windowBits&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15)===0&&(t.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.started=!1,this.chunks=[],this.result=new Uint8Array(0),this.strm=new Sm,this.strm.avail_out=0;let e=ym(this.strm,t.windowBits);if(e!==0)throw new Error(fc[e]);nd.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary));let i=t.dictionary;if(t.raw&&i.length&&(e=ed(this.strm,i),e!==0))throw new Error(fc[e])}push(n,t=!1){let e=this.strm,i=this.options.chunkSize,s,r,a;if(this.ended)return this.err===0;for(typeof t=="number"?r=t:r=t===!0?4:0,nd.call(n)==="[object ArrayBuffer]"?e.input=new Uint8Array(n):e.input=n,e.next_in=0,e.avail_in=e.input.length,this.started||(this.started=!0,this.onStart(e));;){if(e.avail_out===0&&(e.output=new Uint8Array(i),e.next_out=0,e.avail_out=i),s=Sc(e,r),s===2){let o=this.options.dictionary;o.length&&(s=ed(e,o),s===0?s=Sc(e,r):s===-3&&(s=2))}for(;e.avail_in>0&&s===1&&e.state.wrap&2&&e.state.flags!==0&&e.input[e.next_in]!==0;)Sd(e),s=Sc(e,r);if(s===-2||s===-3||s===2||s===-4)break;if(a=e.avail_out,e.next_out&&(e.avail_out===0||s===1||r>0)&&(this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out)),e.avail_out=0,e.next_out=0),!((s===0||s===-5)&&a===0)){if(s===1){s=td(this.strm);break}if(e.avail_in===0){if(r===4){s=td(this.strm),s===0&&(s=-5);break}return!0}}}return this.err=s,this.msg=e.msg||fc[s],this.ended=!0,this.onEnd(s),s===0}onStart(n){}onData(n){this.chunks.push(n)}onEnd(n){n===0&&(this.result=bm(this.chunks)),this.chunks=[]}};function Am(n,t={}){let e=new Em(t);if(e.push(n,!0),e.err)throw new Error(e.msg);let i=e.result;return t.toText?new TextDecoder().decode(i):i}function wd(n,t={}){return Am(n,{...t,raw:!0})}function Ed(n,t){var e=atob(n.hz),i=new Uint8Array(e.length),s,r,a;for(s=0;s<e.length;s++)i[s]=e.charCodeAt(s);var o=wd(i),c=n.w,l=n.h,h=new Uint8Array(c*l),f=new Float32Array(c*l);for(r=0;r<l;r++)for(s=0;s<c;s++){a=r*c+s;var d=s?h[a-1]:0,u=r?h[a-c]:0;h[a]=o[a]+(d+u>>1)&255,f[a]=n.base+n.step*h[a]}var _=(n.lat0+n.lat1)/2,w=(n.lon0+n.lon1)/2,p=111.2,m=111.2*Math.cos(_*Math.PI/180),S=(n.lon1-n.lon0)*m,v=(n.lat1-n.lat0)*p;function y(at,pt){return[(at-w)*m,-(pt-_)*p]}function C(at,pt){var mt=(at+S/2)/S*(c-1),lt=(pt+v/2)/v*(l-1);mt=Math.min(c-1.001,Math.max(0,mt)),lt=Math.min(l-1.001,Math.max(0,lt));var K=mt|0,Gt=lt|0,kt=mt-K,Bt=lt-Gt,de=Gt*c+K,st=f[de],_t=f[de+1],Mt=f[de+c],Lt=f[de+c+1];return kt+Bt<=1?st+kt*(_t-st)+Bt*(Mt-st):Lt+(1-kt)*(Mt-Lt)+(1-Bt)*(_t-Lt)}for(var E=atob(n.pb),g=0,b=0,R=0,T=[];g<E.length;){for(var L=0;L<2;L++){var B=0,H=0,P;do P=E.charCodeAt(g++)-63,B|=(P&31)<<H,H+=5;while(P>=32);var G=B&1?~(B>>1):B>>1;L===0?b+=G:R+=G}var q=y(R/1e5,b/1e5);T.push({x:q[0],z:q[1],m:C(q[0],q[1])})}var V=null;(function(){var at=.2,pt=1.5,mt=[0],lt=T.length,K,Gt;for(K=1;K<lt;K++)mt[K]=mt[K-1]+Math.hypot(T[K].x-T[K-1].x,T[K].z-T[K-1].z);var kt=mt[lt-1],Bt=Math.max(2,Math.round(kt/at)),de=new Float64Array(Bt+1),st=new Float64Array(Bt+1),_t=1;for(K=0;K<=Bt;K++){for(var Mt=kt*K/Bt;_t<lt-1&&mt[_t]<Mt;)_t++;var Lt=T[_t-1],Rt=T[_t],ae=mt[_t]-mt[_t-1],Vt=ae>0?(Mt-mt[_t-1])/ae:0;de[K]=Lt.x+(Rt.x-Lt.x)*Vt,st[K]=Lt.z+(Rt.z-Lt.z)*Vt}var ce=Math.ceil(3*pt/at),be=[],fe=0;for(K=-ce;K<=ce;K++){var U=Math.exp(-(K*at)*(K*at)/(2*pt*pt));be.push(U),fe+=U}function We(Jt,dt){return dt<0?2*Jt[0]-Jt[Math.min(Bt,-dt)]:dt>Bt?2*Jt[Bt]-Jt[Math.max(0,2*Bt-dt)]:Jt[dt]}var Dt=[],me=[];for(K=0;K<=Bt;K++){var St=0,qe=0;for(Gt=-ce;Gt<=ce;Gt++){var Zt=be[Gt+ce];St+=Zt*We(de,K+Gt),qe+=Zt*We(st,K+Gt)}Dt.push({x:St/fe,z:qe/fe}),me.push(C(St/fe,qe/fe))}var oe=1.4,A=-1,x=-1;function k(Jt){var dt=Dt[Jt-3],Qt=Dt[Jt],$t=Dt[Jt+3],ye=Math.hypot(Qt.x-dt.x,Qt.z-dt.z),rn=Math.hypot($t.x-Qt.x,$t.z-Qt.z),Ee=Math.hypot(dt.x-$t.x,dt.z-$t.z),bn=Math.abs((Qt.x-dt.x)*($t.z-dt.z)-(Qt.z-dt.z)*($t.x-dt.x))/2;return bn>1e-9?ye*rn*Ee/(4*bn):1e9}for(var ct=0;ct<80;ct++){var rt=[],bt=!1;for(K=3;K<Bt-2;K++)k(K)<oe&&(rt.push(K),bt=!0);if(!bt)break;var vt={},j={};rt.forEach(function(Jt){for(var dt=-2;dt<=2;dt++){var Qt=Jt+dt;if(!(Qt<1||Qt>Bt-1||vt[Qt]!==void 0)){for(var $t=0,ye=0,rn=0,Ee=-3;Ee<=3;Ee++){var bn=Math.max(0,Math.min(Bt,Qt+Ee));$t+=Dt[bn].x,ye+=Dt[bn].z,rn++}vt[Qt]=Dt[Qt].x*.4+$t/rn*.6,j[Qt]=Dt[Qt].z*.4+ye/rn*.6}}});for(var tt in vt)Dt[tt].x=vt[tt],Dt[tt].z=j[tt]}for((function(){var Jt=null,dt=null;if(t.forEach(function(O){/romagnese/i.test(O.n)&&(Jt=O),/penice/i.test(O.n)&&(dt=O)}),!Jt||!dt)return;function Qt(O,At,zt){for(var Et=-1,Ct=1e9,Ot=At;Ot<=zt;Ot++){var te=Math.hypot(Dt[Ot].x-O[0],Dt[Ot].z-O[1]);te<Ct&&(Ct=te,Et=Ot)}return Et}var $t=Qt(y(Jt.lon,Jt.lat),0,Dt.length-1),ye=Qt(y(dt.lon,dt.lat),$t+5,Dt.length-1),rn=Math.max(3,$t-16);if(ye-rn<20)return;var Ee=Dt[rn],bn=Dt[ye],Cn=Math.hypot(bn.x-Ee.x,bn.z-Ee.z),li=(bn.x-Ee.x)/Cn,Nn=(bn.z-Ee.z)/Cn,ci=n.tornSide||1,xi=-Nn*ci,ti=li*ci,an=Cn/8,ei=Math.min(2.2,an*1.9),gs=[["q",1],["l",ei],["s",-1],["l",2*ei],["s",1],["l",2*ei],["s",-1],["l",ei],["q",1]],ni=0,$i=0,Pi=0,Rn=[{x:Ee.x,z:Ee.z}],Ls=.2;function Ds(O){ni+=Math.cos(Pi)*O,$i+=Math.sin(Pi)*O,Rn.push({x:Ee.x+li*ni+xi*$i,z:Ee.z+Nn*ni+ti*$i})}gs.forEach(function(O,At){if(O[0]==="l")for(var zt=Math.max(1,Math.round(O[1]/Ls)),Et=0;Et<zt;Et++)Ds(O[1]/zt);else for(var Ct=O[0]==="q"?Math.PI/2:Math.PI,Ot=Math.max(4,Math.round(an*Ct/Ls)),te=O[0]==="q"||O[1]>0?1:-1,Se=0;Se<Ot;Se++)Pi+=te*Ct/Ot,Ds(an*Ct/Ot)});for(var Ns=bn.x-Rn[Rn.length-1].x,_s=bn.z-Rn[Rn.length-1].z,M=Rn.length,D=0;D<M;D++)Rn[D].x+=Ns*D/(M-1),Rn[D].z+=_s*D/(M-1);Dt.splice.apply(Dt,[rn,ye-rn+1].concat(Rn.map(function(O){return{x:O.x,z:O.z}}))),Bt=Dt.length-1,me.length=0,A=rn,x=rn+Rn.length-1;for(var W=0;W<2;W++)for(var z=rn-6;z<=rn+6;z++)z<1||(Dt[z].x=(Dt[z-1].x+Dt[z].x*2+Dt[z+1].x)/4,Dt[z].z=(Dt[z-1].z+Dt[z].z*2+Dt[z+1].z)/4)})(),K=0;K<=Bt;K++)me[K]=C(Dt[K].x,Dt[K].z);for(K=0;K<=Bt;K++){var Tt=0,I=0;for(Gt=-3;Gt<=3;Gt++){var it=Math.max(0,Math.min(Bt,K+Gt));Tt+=me[it],I++}Dt[K].m=Math.max(me[K],Tt/I)}if(x>A&&A>=0){var J=[],wt=-1,gt=14,yt=[];for(K=A;K<=x;K++)wt=Math.max(wt,Dt[K].m),J.push(wt);for(K=0;K<J.length;K++){var Yt=0,he=0;for(Gt=-gt;Gt<=gt;Gt++){var xt=Math.max(0,Math.min(J.length-1,K+Gt));Yt+=J[xt],he++}yt.push(Yt/he)}var qt=-1;for(K=0;K<yt.length;K++)qt=Math.max(qt,yt[K],Dt[A+K].m*0+0),yt[K]=Math.max(qt,Dt[A+K].m);for(K=0;K<yt.length;K++)Dt[A+K].m=yt[K]}T=Dt,V=[A,x]})();var nt=[0];for(s=1;s<T.length;s++)nt[s]=nt[s-1]+Math.hypot(T[s].x-T[s-1].x,T[s].z-T[s-1].z);var X=nt[nt.length-1],Q=[],$=0;t.forEach(function(at,pt){var mt=y(at.lon,at.lat),lt;if(pt===0)lt=0;else if(pt===t.length-1)lt=T.length-1;else{var K=-1,Gt=1e9;for(a=$;a<T.length;a++){var kt=Math.hypot(T[a].x-mt[0],T[a].z-mt[1]);if(kt<3&&kt<Gt)Gt=kt,K=a;else if(K>=0&&kt>Gt+4)break}if(K<0)for(Gt=1e9,a=$;a<T.length;a++){var Bt=Math.hypot(T[a].x-mt[0],T[a].z-mt[1]);Bt<Gt&&(Gt=Bt,K=a)}lt=K}$=lt,Q.push({x:T[lt].x,z:T[lt].z,idx:lt,s:nt[lt],m:T[lt].m,min:Nt(at.h)})});function Nt(at){var pt=String(at).split(":");return+pt[0]*60+ +pt[1]}function Ut(at){at=Math.max(0,Math.min(X,at));for(var pt=0,mt=nt.length-1;mt-pt>1;){var lt=pt+mt>>1;nt[lt]<=at?pt=lt:mt=lt}var K=nt[mt]-nt[pt],Gt=K>0?(at-nt[pt])/K:0,kt=T[pt],Bt=T[mt];return{x:kt.x+(Bt.x-kt.x)*Gt,z:kt.z+(Bt.z-kt.z)*Gt,m:kt.m+(Bt.m-kt.m)*Gt,i:pt,t:Gt}}function Y(at){if(at<=Q[0].s)return Q[0].min;for(var pt=1;pt<Q.length;pt++)if(at<=Q[pt].s){var mt=Q[pt-1],lt=Q[pt],K=lt.s>mt.s?(at-mt.s)/(lt.s-mt.s):1;return mt.min+(lt.min-mt.min)*K}return Q[Q.length-1].min}return{W:c,H:l,el:f,SX:S,SZ:v,proj:y,quota:C,route:T,cum:nt,total:X,tappe:Q,puntoA:Ut,orologio:Y,tornanti:V&&V[1]>V[0]?{s0:nt[V[0]],s1:nt[V[1]]}:null}}function ja(n){n=Math.round(n);var t=Math.floor(n/60),e=n%60;return(t<10?"0":"")+t+":"+(e<10?"0":"")+e}function Ad(n,t,e){var i=n.getContext("2d"),s=0,r=0,a=1,o=0,c=-1,l=1250,h=e.caldo,f=e.onScrub||function(){};function d(v,y){var C=getComputedStyle(n).getPropertyValue(v).trim();return C||y}function u(){var v=n.getBoundingClientRect();a=Math.min(window.devicePixelRatio||1,2),s=Math.max(200,Math.round(v.width)),r=Math.max(90,Math.round(v.height)),n.width=s*a,n.height=r*a,p()}function _(v){return 34+(s-44)*v/t.total}function w(v){return r-22-(r-36)*Math.min(v,l)/l}function p(){i.setTransform(a,0,0,a,0,0),i.clearRect(0,0,s,r);var v=d("--bordo","#1D2A23"),y=d("--vinaccia","#A22B3C"),C=d("--oro","#E2A93B"),E=d("--tenue","#8a8f86"),g=t.route,b;i.font='500 10px "DM Mono",monospace',i.textBaseline="middle",i.lineWidth=1,i.strokeStyle=E,i.fillStyle=E,i.globalAlpha=.35,[0,500,1e3].forEach(function(nt){i.beginPath(),i.moveTo(30,w(nt)),i.lineTo(s-6,w(nt)),i.stroke()}),i.globalAlpha=.9,[0,500,1e3].forEach(function(nt){i.fillText(nt+"",2,w(nt)-6)}),i.globalAlpha=1;var R=i.createLinearGradient(0,w(1200),0,w(0));for(R.addColorStop(0,C),R.addColorStop(1,"rgba(226,169,59,0)"),i.beginPath(),i.moveTo(_(0),w(0)),b=0;b<g.length;b++)i.lineTo(_(t.cum[b]),w(g[b].m));i.lineTo(_(t.total),w(0)),i.closePath(),i.globalAlpha=.28,i.fillStyle=R,i.fill(),i.globalAlpha=1;var T=t.tappe[h[0]].idx,L=t.tappe[h[1]].idx;function B(nt,X,Q,$,Nt){i.beginPath(),i.setLineDash(Nt||[]),i.lineWidth=$,i.strokeStyle=Q,i.lineJoin="round";for(var Ut=nt;Ut<=X;Ut++){var Y=_(t.cum[Ut]),at=w(g[Ut].m);Ut===nt?i.moveTo(Y,at):i.lineTo(Y,at)}i.stroke(),i.setLineDash([])}i.globalAlpha=.7,B(0,T,v,1.5,[3,4]),B(L,g.length-1,v,1.5,[3,4]),i.globalAlpha=1,B(T,L,y,3),t.tappe.forEach(function(nt,X){var Q=_(nt.s),$=w(nt.m);i.beginPath(),i.arc(Q,$,X===c?8:6,0,6.2832),i.fillStyle=X===c?y:d("--carta","#F6ECD8"),i.fill(),i.lineWidth=2,i.strokeStyle=v,i.stroke(),i.fillStyle=X===c?"#fff":v,i.textAlign="center",i.font='500 9px "DM Mono",monospace',i.fillText(String(X+1),Q,$+.5),i.textAlign="left"});var H=t.puntoA(o),P=_(o);i.setLineDash([2,3]),i.strokeStyle=v,i.lineWidth=1,i.beginPath(),i.moveTo(P,6),i.lineTo(P,r-20),i.stroke(),i.setLineDash([]),i.beginPath(),i.arc(P,w(H.m),5,0,6.2832),i.fillStyle=C,i.fill(),i.lineWidth=2,i.strokeStyle=v,i.stroke();var G=Math.round(H.m/10)*10+" m \xB7 "+ja(t.orologio(o));i.font='500 11px "DM Mono",monospace';var q=i.measureText(G).width+12,V=Math.min(s-q-4,Math.max(32,P-q/2));i.fillStyle=v,i.beginPath(),i.roundRect?i.roundRect(V,r-18,q,16,5):i.rect(V,r-18,q,16),i.fill(),i.fillStyle=d("--carta","#F6ECD8"),i.fillText(G,V+6,r-10)}function m(v){var y=n.getBoundingClientRect(),C=(v.clientX-y.left-34)/(s-44)*t.total;return Math.max(0,Math.min(t.total,C))}var S=!1;return n.addEventListener("pointerdown",function(v){S=!0;try{n.setPointerCapture(v.pointerId)}catch(y){}f(m(v))}),n.addEventListener("pointermove",function(v){S&&f(m(v))}),n.addEventListener("pointerup",function(){S=!1}),n.addEventListener("pointercancel",function(){S=!1}),window.ResizeObserver?new ResizeObserver(u).observe(n):window.addEventListener("resize",u),u(),{set:function(v,y){o=v,y!==void 0&&(c=y),p()},ridisegna:p}}var ds={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},fs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uf=0,_h=1,df=2;var Ra=1,ff=2,vr=3,ps=0,Vn=1,ai=2,As=0,yr=1,Pa=2,xh=3,vh=4,pf=5;var Ts=100,mf=101,gf=102,_f=103,xf=104,vf=200,yf=201,Mf=202,Sf=203,yh=204,Mh=205,bf=206,wf=207,Ef=208,Af=209,Tf=210,Cf=211,Rf=212,Pf=213,If=214,Po=0,Io=1,Lo=2,ar=3,Do=4,No=5,Uo=6,Fo=7,fl=0,Lf=1,Df=2,Ti=0,Sh=1,bh=2,wh=3,Eh=4,Ah=5,Th=6,Ch=7;var Rh=300,Cs=301,Mr=302,pl=303,ml=304,Oo=1e3,bi=1001,Bo=1002,Sn=1003,Nf=1004;var Ia=1005;var zn=1006,gl=1007;var qi=1008;var Wn=1009,Ph=1010,Ih=1011,Sr=1012,_l=1013,mi=1014,oi=1015,gi=1016,xl=1017,vl=1018,Rs=1020,Lh=35902,Dh=35899,Nh=1021,Uh=1022,_i=1023,Vi=1026,Zi=1027,yl=1028,Ml=1029,ms=1030,Sl=1031;var bl=1033,La=33776,Da=33777,Na=33778,Ua=33779,wl=35840,El=35841,Al=35842,Tl=35843,Cl=36196,Rl=37492,Pl=37496,Il=37488,Ll=37489,Fa=37490,Dl=37491,Nl=37808,Ul=37809,Fl=37810,Ol=37811,Bl=37812,zl=37813,kl=37814,Gl=37815,Vl=37816,Hl=37817,Wl=37818,Xl=37819,Yl=37820,ql=37821,Zl=36492,Jl=36494,Kl=36495,$l=36283,jl=36284,Oa=36285,Ql=36286;var Xr=2300,zo=2301,Co=2302,ah=2303,oh=2400,lh=2401,ch=2402;var Uf=3200;var tc=0,Ff=1,Ji="",An="srgb",Yr="srgb-linear",qr="linear",Ve="srgb";var Ro=7680;var Of=519,Bf=512,zf=513,kf=514,Fh=515,Gf=516,Vf=517,Oh=518,Bh=519,zh=35044;var kh="300 es",si=2e3,or=2001;function Tm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Cm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Zr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Hf(){let n=Zr("canvas");return n.style.display="block",n}var Td={},lr=null;function Jr(...n){let t="THREE."+n.shift();lr?lr("log",t,...n):console.log(t,...n)}function Wf(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function le(...n){n=Wf(n);let t="THREE."+n.shift();if(lr)lr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=Wf(n);let t="THREE."+n.shift();if(lr)lr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function kr(...n){let t=n.join(" ");t in Td||(Td[t]=!0,le(...n))}function Xf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Yf={[Po]:Po,[Lo]:Uo,[Do]:Do,[ar]:No,[Io]:Io,[Uo]:Lo,[Fo]:Fo,[No]:ar},pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=1234567,Gr=Math.PI/180,cr=180/Math.PI;function Ki(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[e&63|128]+In[e>>8&255]+"-"+In[e>>16&255]+In[e>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Gh(n,t){return(n%t+t)%t}function Rm(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Pm(n,t,e){return n!==t?(e-n)/(t-n):0}function Vr(n,t,e){return(1-e)*n+e*t}function Im(n,t,e,i){return Vr(n,t,1-Math.exp(-e*i))}function Lm(n,t=1){return t-Math.abs(Gh(n,t*2)-t)}function Dm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Nm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Um(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Fm(n,t){return n+Math.random()*(t-n)}function Om(n){return n*(.5-Math.random())}function Bm(n){n!==void 0&&(Cd=n);let t=Cd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function zm(n){return n*Gr}function km(n){return n*cr}function Gm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Hm(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),h=a((t+i)/2),f=r((t-i)/2),d=a((t-i)/2),u=r((i-t)/2),_=a((i-t)/2);switch(s){case"XYX":n.set(o*h,c*f,c*d,o*l);break;case"YZY":n.set(c*d,o*h,c*f,o*l);break;case"ZXZ":n.set(c*f,c*d,o*h,o*l);break;case"XZX":n.set(o*h,c*_,c*u,o*l);break;case"YXY":n.set(c*u,o*h,c*_,o*l);break;case"ZYZ":n.set(c*_,c*u,o*h,o*l);break;default:le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ec(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Hh(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/e,-1)}function Wh(n,t){if(t.constructor===Float32Array)return n;let e=ec(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*e)}var Xh={DEG2RAD:Gr,RAD2DEG:cr,generateUUID:Ki,clamp:Ce,euclideanModulo:Gh,mapLinear:Rm,inverseLerp:Pm,lerp:Vr,damp:Im,pingpong:Lm,smoothstep:Dm,smootherstep:Nm,randInt:Um,randFloat:Fm,randFloatSpread:Om,seededRandom:Bm,degToRad:zm,radToDeg:km,isPowerOfTwo:Gm,ceilPowerOfTwo:Vm,floorPowerOfTwo:Vh,setQuaternionFromProperEuler:Hm,normalize:Wh,denormalize:Hh},$h=class $h{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$h.prototype.isVector2=!0;var ht=$h,Kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],d=r[a+0],u=r[a+1],_=r[a+2],w=r[a+3];if(f!==w||c!==d||l!==u||h!==_){let p=c*d+l*u+h*_+f*w;p<0&&(d=-d,u=-u,_=-_,w=-w,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),v=Math.sin(S);m=Math.sin(m*S)/v,o=Math.sin(o*S)/v,c=c*m+d*o,l=l*m+u*o,h=h*m+_*o,f=f*m+w*o}else{c=c*m+d*o,l=l*m+u*o,h=h*m+_*o,f=f*m+w*o;let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[a],d=r[a+1],u=r[a+2],_=r[a+3];return t[e]=o*_+h*f+c*u-l*d,t[e+1]=c*_+h*d+l*f-o*u,t[e+2]=l*_+h*u+o*d-c*f,t[e+3]=h*_-o*f-c*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),f=o(r/2),d=c(i/2),u=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"YXZ":this._x=d*h*f+l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"ZXY":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f-d*u*_;break;case"ZYX":this._x=d*h*f-l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f+d*u*_;break;case"YZX":this._x=d*h*f+l*u*_,this._y=l*u*f+d*h*_,this._z=l*h*_-d*u*f,this._w=l*h*f-d*u*_;break;case"XZY":this._x=d*h*f-l*u*_,this._y=l*u*f-d*h*_,this._z=l*h*_+d*u*f,this._w=l*h*f+d*u*_;break;default:le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=i+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jh=class jh{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),h=2*(o*e-r*s),f=2*(r*i-a*e);return this.x=e+c*l+a*f-o*h,this.y=i+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Fc.copy(this).projectOnVector(t),this.sub(Fc)}reflect(t){return this.sub(Fc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jh.prototype.isVector3=!0;var N=jh,Fc=new N,Rd=new Kn,Qh=class Qh{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],u=i[5],_=i[8],w=s[0],p=s[3],m=s[6],S=s[1],v=s[4],y=s[7],C=s[2],E=s[5],g=s[8];return r[0]=a*w+o*S+c*C,r[3]=a*p+o*v+c*E,r[6]=a*m+o*y+c*g,r[1]=l*w+h*S+f*C,r[4]=l*p+h*v+f*E,r[7]=l*m+h*y+f*g,r[2]=d*w+u*S+_*C,r[5]=d*p+u*v+_*E,r[8]=d*m+u*y+_*g,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,_=e*f+i*d+s*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let w=1/_;return t[0]=f*w,t[1]=(s*l-h*i)*w,t[2]=(o*i-s*a)*w,t[3]=d*w,t[4]=(h*e-s*c)*w,t[5]=(s*r-o*e)*w,t[6]=u*w,t[7]=(i*c-l*e)*w,t[8]=(a*e-i*r)*w,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Oc.makeScale(t,e)),this}rotate(t){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Oc.makeRotation(-t)),this}translate(t,e){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Oc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Qh.prototype.isMatrix3=!0;var ge=Qh,Oc=new ge,Pd=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wm(){let n={enabled:!0,workingColorSpace:Yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ve&&(s.r=Gi(s.r),s.g=Gi(s.g),s.b=Gi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ve&&(s.r=rr(s.r),s.g=rr(s.g),s.b=rr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ji?qr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Yr]:{primaries:t,whitePoint:i,transfer:qr,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:An},outputColorSpaceConfig:{drawingBufferColorSpace:An}},[An]:{primaries:t,whitePoint:i,transfer:Ve,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:An}}}),n}var Le=Wm();function Gi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function rr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gs,ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gs===void 0&&(Gs=Zr("canvas")),Gs.width=t.width,Gs.height=t.height;let s=Gs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Gs}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Gi(e[i]/255)*255):e[i]=Gi(e[i]);return{data:e,width:t.width,height:t.height}}else return le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Xm=0,hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Bc(s[a].image)):r.push(Bc(s[a]))}else r=Bc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Bc(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(le("Texture: Unable to serialize Texture."),{})}var Ym=0,zc=new N,kn=class n extends pi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=bi,s=bi,r=zn,a=qi,o=_i,c=Wn,l=n.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=Ki(),this.name="",this.source=new hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zc).x}get height(){return this.source.getSize(zc).y}get depth(){return this.source.getSize(zc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){le(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){le(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Rh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Rh;kn.DEFAULT_ANISOTROPY=1;var tu=class tu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],_=c[9],w=c[2],p=c[6],m=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-w)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+w)<.1&&Math.abs(_+p)<.1&&Math.abs(l+u+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,y=(u+1)/2,C=(m+1)/2,E=(h+d)/4,g=(f+w)/4,b=(_+p)/4;return v>y&&v>C?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=E/i,r=g/i):y>C?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=E/s,r=b/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=g/r,s=b/r),this.set(i,s,r,e),this}let S=Math.sqrt((p-_)*(p-_)+(f-w)*(f-w)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-w)/S,this.z=(d-h)/S,this.w=Math.acos((l+u+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ce(this.x,t.x,e.x),this.y=Ce(this.y,t.y,e.y),this.z=Ce(this.z,t.z,e.z),this.w=Ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ce(this.x,t,e),this.y=Ce(this.y,t,e),this.z=Ce(this.z,t,e),this.w=Ce(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tu.prototype.isVector4=!0;var sn=tu,Go=class extends pi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new sn(0,0,t,e),this.scissorTest=!1,this.viewport=new sn(0,0,t,e),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new kn({width:t,height:e,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:zn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Go{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Kr=class extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vo=class extends kn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var dl=class dl{constructor(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p)}set(t,e,i,s,r,a,o,c,l,h,f,d,u,_,w,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=_,m[11]=w,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Vs.setFromMatrixColumn(t,0).length(),r=1/Vs.setFromMatrixColumn(t,1).length(),a=1/Vs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=a*h,u=a*f,_=o*h,w=o*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=u+_*l,e[5]=d-w*l,e[9]=-o*c,e[2]=w-d*l,e[6]=_+u*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*h,u=c*f,_=l*h,w=l*f;e[0]=d+w*o,e[4]=_*o-u,e[8]=a*l,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=u*o-_,e[6]=w+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*h,u=c*f,_=l*h,w=l*f;e[0]=d-w*o,e[4]=-a*f,e[8]=_+u*o,e[1]=u+_*o,e[5]=a*h,e[9]=w-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*h,u=a*f,_=o*h,w=o*f;e[0]=c*h,e[4]=_*l-u,e[8]=d*l+w,e[1]=c*f,e[5]=w*l+d,e[9]=u*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,u=a*l,_=o*c,w=o*l;e[0]=c*h,e[4]=w-d*f,e[8]=_*f+u,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=u*f+_,e[10]=d-w*f}else if(t.order==="XZY"){let d=a*c,u=a*l,_=o*c,w=o*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+w,e[5]=a*h,e[9]=u*f-_,e[2]=_*f-u,e[6]=o*h,e[10]=w*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,Zm)}lookAt(t,e,i){let s=this.elements;return qn.subVectors(t,e),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),ts.crossVectors(i,qn),ts.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),ts.crossVectors(i,qn)),ts.normalize(),Qa.crossVectors(qn,ts),s[0]=ts.x,s[4]=Qa.x,s[8]=qn.x,s[1]=ts.y,s[5]=Qa.y,s[9]=qn.y,s[2]=ts.z,s[6]=Qa.z,s[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],u=i[13],_=i[2],w=i[6],p=i[10],m=i[14],S=i[3],v=i[7],y=i[11],C=i[15],E=s[0],g=s[4],b=s[8],R=s[12],T=s[1],L=s[5],B=s[9],H=s[13],P=s[2],G=s[6],q=s[10],V=s[14],nt=s[3],X=s[7],Q=s[11],$=s[15];return r[0]=a*E+o*T+c*P+l*nt,r[4]=a*g+o*L+c*G+l*X,r[8]=a*b+o*B+c*q+l*Q,r[12]=a*R+o*H+c*V+l*$,r[1]=h*E+f*T+d*P+u*nt,r[5]=h*g+f*L+d*G+u*X,r[9]=h*b+f*B+d*q+u*Q,r[13]=h*R+f*H+d*V+u*$,r[2]=_*E+w*T+p*P+m*nt,r[6]=_*g+w*L+p*G+m*X,r[10]=_*b+w*B+p*q+m*Q,r[14]=_*R+w*H+p*V+m*$,r[3]=S*E+v*T+y*P+C*nt,r[7]=S*g+v*L+y*G+C*X,r[11]=S*b+v*B+y*q+C*Q,r[15]=S*R+v*H+y*V+C*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],u=t[14],_=t[3],w=t[7],p=t[11],m=t[15],S=c*u-l*d,v=o*u-l*f,y=o*d-c*f,C=a*u-l*h,E=a*d-c*h,g=a*f-o*h;return e*(w*S-p*v+m*y)-i*(_*S-p*C+m*E)+s*(_*v-w*C+m*g)-r*(_*y-w*E+p*g)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],h=t[10];return e*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],u=t[11],_=t[12],w=t[13],p=t[14],m=t[15],S=e*o-i*a,v=e*c-s*a,y=e*l-r*a,C=i*c-s*o,E=i*l-r*o,g=s*l-r*c,b=h*w-f*_,R=h*p-d*_,T=h*m-u*_,L=f*p-d*w,B=f*m-u*w,H=d*m-u*p,P=S*H-v*B+y*L+C*T-E*R+g*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return t[0]=(o*H-c*B+l*L)*G,t[1]=(s*B-i*H-r*L)*G,t[2]=(w*g-p*E+m*C)*G,t[3]=(d*E-f*g-u*C)*G,t[4]=(c*T-a*H-l*R)*G,t[5]=(e*H-s*T+r*R)*G,t[6]=(p*y-_*g-m*v)*G,t[7]=(h*g-d*y+u*v)*G,t[8]=(a*B-o*T+l*b)*G,t[9]=(i*T-e*B-r*b)*G,t[10]=(_*E-w*y+m*S)*G,t[11]=(f*y-h*E-u*S)*G,t[12]=(o*R-a*L-c*b)*G,t[13]=(e*L-i*R+s*b)*G,t[14]=(w*v-_*C-p*S)*G,t[15]=(h*C-f*v+d*S)*G,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,_=r*f,w=a*h,p=a*f,m=o*f,S=c*l,v=c*h,y=c*f,C=i.x,E=i.y,g=i.z;return s[0]=(1-(w+m))*C,s[1]=(u+y)*C,s[2]=(_-v)*C,s[3]=0,s[4]=(u-y)*E,s[5]=(1-(d+m))*E,s[6]=(p+S)*E,s[7]=0,s[8]=(_+v)*g,s[9]=(p-S)*g,s[10]=(1-(d+w))*g,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Vs.set(s[0],s[1],s[2]).length(),o=Vs.set(s[4],s[5],s[6]).length(),c=Vs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let l=1/a,h=1/o,f=1/c;return ui.elements[0]*=l,ui.elements[1]*=l,ui.elements[2]*=l,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=f,ui.elements[9]*=f,ui.elements[10]*=f,e.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=si,c=!1){let l=this.elements,h=2*r/(e-t),f=2*r/(i-s),d=(e+t)/(e-t),u=(i+s)/(i-s),_,w;if(c)_=r/(a-r),w=a*r/(a-r);else if(o===si)_=-(a+r)/(a-r),w=-2*a*r/(a-r);else if(o===or)_=-a/(a-r),w=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=w,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=si,c=!1){let l=this.elements,h=2/(e-t),f=2/(i-s),d=-(e+t)/(e-t),u=-(i+s)/(i-s),_,w;if(c)_=1/(a-r),w=a/(a-r);else if(o===si)_=-2/(a-r),w=-(a+r)/(a-r);else if(o===or)_=-1/(a-r),w=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=_,l[14]=w,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};dl.prototype.isMatrix4=!0;var He=dl,Vs=new N,ui=new He,qm=new N(0,0,0),Zm=new N(1,1,1),ts=new N,Qa=new N,qn=new N,Ld=new He,Dd=new Kn,Hi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ce(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:le("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ld.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ld,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Hi.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jm=0,Nd=new N,Hs=new Kn,Ui=new He,to=new N,Pr=new N,Km=new N,$m=new Kn,Ud=new N(1,0,0),Fd=new N(0,1,0),Od=new N(0,0,1),Bd={type:"added"},jm={type:"removed"},Ws={type:"childadded",child:null},kc={type:"childremoved",child:null},Ke=class n extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jm++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new N,e=new Hi,i=new Kn,s=new N(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ge}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(t,e){return Hs.setFromAxisAngle(t,e),this.quaternion.premultiply(Hs),this}rotateX(t){return this.rotateOnAxis(Ud,t)}rotateY(t){return this.rotateOnAxis(Fd,t)}rotateZ(t){return this.rotateOnAxis(Od,t)}translateOnAxis(t,e){return Nd.copy(t).applyQuaternion(this.quaternion),this.position.add(Nd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ud,t)}translateY(t){return this.translateOnAxis(Fd,t)}translateZ(t){return this.translateOnAxis(Od,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?to.copy(t):to.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Pr,to,this.up):Ui.lookAt(to,Pr,this.up),this.quaternion.setFromRotationMatrix(Ui),s&&(Ui.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Ui),this.quaternion.premultiply(Hs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bd),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(jm),kc.child=t,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ui.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ui),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bd),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Km),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,$m,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),u=a(t.animations),_=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new N(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},ur=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let w of t.hand.values()){let p=e.getJointPose(w,i),m=this._getHandJoint(l,w);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,_=.005;l.inputState.pinching&&d>u+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},eo={h:0,s:0,l:0};function Gc(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var re=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=An){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Le.workingColorSpace){return this.r=t,this.g=e,this.b=i,Le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Le.workingColorSpace){if(t=Gh(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Gc(a,r,t+1/3),this.g=Gc(a,r,t),this.b=Gc(a,r,t-1/3)}return Le.colorSpaceToWorking(this,s),this}setStyle(t,e=An){function i(r){r!==void 0&&parseFloat(r)<1&&le("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:le("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=An){let i=qf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gi(t.r),this.g=Gi(t.g),this.b=Gi(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=An){return Le.workingToColorSpace(Ln.copy(this),t),Math.round(Ce(Ln.r*255,0,255))*65536+Math.round(Ce(Ln.g*255,0,255))*256+Math.round(Ce(Ln.b*255,0,255))}getHexString(t=An){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Le.workingColorSpace){Le.workingToColorSpace(Ln.copy(this),e);let i=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Le.workingColorSpace){return Le.workingToColorSpace(Ln.copy(this),e),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=An){Le.workingToColorSpace(Ln.copy(this),t);let e=Ln.r,i=Ln.g,s=Ln.b;return t!==An?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(es),this.setHSL(es.h+t,es.s+e,es.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(es),t.getHSL(eo);let i=Vr(es.h,eo.h,e),s=Vr(es.s,eo.s,e),r=Vr(es.l,eo.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new re;re.NAMES=qf;var jr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new re(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Qr=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new N,Fi=new N,Vc=new N,Oi=new N,Xs=new N,Ys=new N,zd=new N,Hc=new N,Wc=new N,Xc=new N,Yc=new sn,qc=new sn,Zc=new sn,ki=class n{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){di.subVectors(s,e),Fi.subVectors(i,e),Vc.subVectors(t,e);let a=di.dot(di),o=di.dot(Fi),c=di.dot(Vc),l=Fi.dot(Fi),h=Fi.dot(Vc),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,_=(a*h-o*c)*d;return r.set(1-u-_,_,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Oi.x),c.addScaledVector(a,Oi.y),c.addScaledVector(o,Oi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Yc.setScalar(0),qc.setScalar(0),Zc.setScalar(0),Yc.fromBufferAttribute(t,e),qc.fromBufferAttribute(t,i),Zc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Yc,r.x),a.addScaledVector(qc,r.y),a.addScaledVector(Zc,r.z),a}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),Fi.subVectors(t,e),di.cross(Fi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),di.cross(Fi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;Xs.subVectors(s,i),Ys.subVectors(r,i),Hc.subVectors(t,i);let c=Xs.dot(Hc),l=Ys.dot(Hc);if(c<=0&&l<=0)return e.copy(i);Wc.subVectors(t,s);let h=Xs.dot(Wc),f=Ys.dot(Wc);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),e.copy(i).addScaledVector(Xs,a);Xc.subVectors(t,r);let u=Xs.dot(Xc),_=Ys.dot(Xc);if(_>=0&&u<=_)return e.copy(r);let w=u*l-c*_;if(w<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(i).addScaledVector(Ys,o);let p=h*_-u*f;if(p<=0&&f-h>=0&&u-_>=0)return zd.subVectors(r,s),o=(f-h)/(f-h+(u-_)),e.copy(s).addScaledVector(zd,o);let m=1/(p+w+d);return a=w*m,o=d*m,e.copy(i).addScaledVector(Xs,a).addScaledVector(Ys,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ei=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),no.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),no.copy(i.boundingBox)),no.applyMatrix4(t.matrixWorld),this.union(no)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),io.subVectors(this.max,Ir),qs.subVectors(t.a,Ir),Zs.subVectors(t.b,Ir),Js.subVectors(t.c,Ir),ns.subVectors(Zs,qs),is.subVectors(Js,Zs),ys.subVectors(qs,Js);let e=[0,-ns.z,ns.y,0,-is.z,is.y,0,-ys.z,ys.y,ns.z,0,-ns.x,is.z,0,-is.x,ys.z,0,-ys.x,-ns.y,ns.x,0,-is.y,is.x,0,-ys.y,ys.x,0];return!Jc(e,qs,Zs,Js,io)||(e=[1,0,0,0,1,0,0,0,1],!Jc(e,qs,Zs,Js,io))?!1:(so.crossVectors(ns,is),e=[so.x,so.y,so.z],Jc(e,qs,Zs,Js,io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Bi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Bi=[new N,new N,new N,new N,new N,new N,new N,new N],fi=new N,no=new Ei,qs=new N,Zs=new N,Js=new N,ns=new N,is=new N,ys=new N,Ir=new N,io=new N,so=new N,Ms=new N;function Jc(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ms.fromArray(n,r);let o=s.x*Math.abs(Ms.x)+s.y*Math.abs(Ms.y)+s.z*Math.abs(Ms.z),c=t.dot(Ms),l=e.dot(Ms),h=i.dot(Ms);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var gn=new N,ro=new ht,t0=0,hn=class extends pi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:t0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=zh,this.updateRanges=[],this.gpuType=oi,this.version=0,this._normalizationScale=t!==void 0?ec(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ro.fromBufferAttribute(this,e),ro.applyMatrix3(t),this.setXY(e,ro.x,ro.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix3(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hh(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wh(t,this.array)}};var ta=class extends hn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ea=class extends hn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Ye=class extends hn{constructor(t,e,i){super(new Float32Array(t),e,i)}},e0=new Ei,Lr=new N,Kc=new N,Wi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):e0.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Lr.subVectors(t,this.center);let e=Lr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Lr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Lr.copy(t.center).add(Kc)),this.expandByPoint(Lr.copy(t.center).sub(Kc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},n0=0,ii=new He,$c=new Ke,Ks=new N,Zn=new Ei,Dr=new Ei,Mn=new N,dn=class n extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?ea:ta)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,i){return ii.makeTranslation(t,e,i),this.applyMatrix4(ii),this}scale(t,e,i){return ii.makeScale(t,e,i),this.applyMatrix4(ii),this}lookAt(t){return $c.lookAt(t),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ks).negate(),this.translate(Ks.x,Ks.y,Ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ye(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Mn.addVectors(Zn.min,Dr.min),Zn.expandByPoint(Mn),Mn.addVectors(Zn.max,Dr.max),Zn.expandByPoint(Mn)):(Zn.expandByPoint(Dr.min),Zn.expandByPoint(Dr.max))}Zn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Mn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Mn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Mn.fromBufferAttribute(o,l),c&&(Ks.fromBufferAttribute(t,l),Mn.add(Ks)),s=Math.max(s,i.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new hn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let R=0;R<i.count;R++)o[R]=new N,c[R]=new N;let h=new N,f=new N,d=new N,u=new ht,_=new ht,w=new ht,p=new N,m=new N;function S(R,T,L){l[R]=l[T]=l[L]=1,h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,T),d.fromBufferAttribute(i,L),u.fromBufferAttribute(r,R),_.fromBufferAttribute(r,T),w.fromBufferAttribute(r,L),f.sub(h),d.sub(h),_.sub(u),w.sub(u);let B=1/(_.x*w.y-w.x*_.y);isFinite(B)&&(p.copy(f).multiplyScalar(w.y).addScaledVector(d,-_.y).multiplyScalar(B),m.copy(d).multiplyScalar(_.x).addScaledVector(f,-w.x).multiplyScalar(B),o[R].add(p),o[T].add(p),o[L].add(p),c[R].add(m),c[T].add(m),c[L].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let R=0,T=v.length;R<T;++R){let L=v[R],B=L.start,H=L.count;for(let P=B,G=B+H;P<G;P+=3)S(t.getX(P+0),t.getX(P+1),t.getX(P+2))}let y=new N,C=new N,E=new N,g=new N;function b(R){E.fromBufferAttribute(s,R),g.copy(E);let T=o[R];y.copy(T),y.sub(E.multiplyScalar(E.dot(T))).normalize(),C.crossVectors(g,T);let B=C.dot(c[R])<0?-1:1;a.setXYZW(R,y.x,y.y,y.z,B)}for(let R=0,T=i.count;R<T;++R)l[R]&&b(R);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(t)for(let d=0,u=t.count;d<u;d+=3){let _=t.getX(d+0),w=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,w),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Mn.fromBufferAttribute(t,e),Mn.normalize(),t.setXYZ(e,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,_=0;for(let w=0,p=c.length;w<p;w++){o.isInterleavedBufferAttribute?u=c[w]*o.data.stride+o.offset:u=c[w]*h;for(let m=0;m<h;m++)d[_++]=l[u++]}return new hn(d,h,f)}if(this.index===null)return le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,i);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=t(d,i);c.push(u)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ho=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zh,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=kd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let i=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=kd(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};function kd(n){return n.buffer._uuid===void 0&&(n.buffer._uuid=Ki()),n.byteOffset===0&&n.byteLength===n.buffer.byteLength?n.buffer._uuid:n.buffer._uuid+":"+n.byteOffset+":"+n.byteLength}var On=new N,na=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s,this._normalizationScale=t!==void 0?ec(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyMatrix4(t),this.setXYZ(e,On.x,On.y,On.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.applyNormalMatrix(t),this.setXYZ(e,On.x,On.y,On.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)On.fromBufferAttribute(this,e),On.transformDirection(t),this.setXYZ(e,On.x,On.y,On.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=this._denormalize(i)),i}setComponent(t,e,i){return this.normalized&&(i=this._normalize(i)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Jr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Jr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Hh(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Wh(t,this.data.array)}},jc=new N,i0=new N,s0=new ge,Jn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=jc.subVectors(i,e).cross(i0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(jc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||s0.getNormalMatrix(t),s=this.coplanarPoint(jc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},r0=0,Ai=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=yr,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yh,this.blendDst=Mh,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ro,this.stencilZFail=Ro,this.stencilZPass=Ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){le(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){le(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new re().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Jn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ht().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ht().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},dr=class extends Ai{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$s,Nr=new N,js=new N,Qs=new N,tr=new ht,Ur=new ht,Zf=new He,ao=new N,Fr=new N,oo=new N,Gd=new ht,Qc=new ht,Vd=new ht,ia=class extends Ke{constructor(t=new dr){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new dn;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ho(e,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new na(i,3,0,!1)),$s.setAttribute("uv",new na(i,2,3,!1))}this.geometry=$s,this.material=t,this.center=new ht(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),Zf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Qs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;lo(ao.set(-.5,-.5,0),Qs,a,js,s,r),lo(Fr.set(.5,-.5,0),Qs,a,js,s,r),lo(oo.set(.5,.5,0),Qs,a,js,s,r),Gd.set(0,0),Qc.set(1,0),Vd.set(1,1);let o=t.ray.intersectTriangle(ao,Fr,oo,!1,Nr);if(o===null&&(lo(Fr.set(-.5,.5,0),Qs,a,js,s,r),Qc.set(0,1),o=t.ray.intersectTriangle(ao,oo,Fr,!1,Nr),o===null))return;let c=t.ray.origin.distanceTo(Nr);c<t.near||c>t.far||e.push({distance:c,point:Nr.clone(),uv:ki.getInterpolation(Nr,ao,Fr,oo,Gd,Qc,Vd,new ht),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function lo(n,t,e,i,s,r){tr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Ur.x=r*tr.x-s*tr.y,Ur.y=s*tr.x+r*tr.y):Ur.copy(tr),n.copy(t),n.x+=Ur.x,n.y+=Ur.y,n.applyMatrix4(Zf)}var zi=new N,th=new N,co=new N,ho=new N,ws=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=zi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zi.copy(this.origin).addScaledVector(this.direction,e),zi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){th.copy(t).add(e).multiplyScalar(.5),co.copy(e).sub(t).normalize(),ho.copy(this.origin).sub(th);let r=t.distanceTo(e)*.5,a=-this.direction.dot(co),o=ho.dot(this.direction),c=-ho.dot(co),l=ho.lengthSq(),h=Math.abs(1-a*a),f,d,u,_;if(h>0)if(f=a*c-o,d=a*o-c,_=r*h,f>=0)if(d>=-_)if(d<=_){let w=1/h;f*=w,d*=w,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(th).addScaledVector(co,d),u}intersectSphere(t,e){if(t.radius<0)return null;zi.subVectors(t.center,this.origin);let i=zi.dot(this.direction),s=zi.dot(zi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,zi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=t.x-a.x,d=t.y-a.y,u=t.z-a.z,_=e.x-a.x,w=e.y-a.y,p=e.z-a.z,m=i.x-a.x,S=i.y-a.y,v=i.z-a.z,y=Math.abs(c),C=Math.abs(l),E=Math.abs(h),g,b,R,T,L,B,H,P,G,q,V,nt;if(y>=C&&y>=E?(R=c,B=f,G=_,nt=m,c>=0?(g=l,b=h,T=d,L=u,H=w,P=p,q=S,V=v):(g=h,b=l,T=u,L=d,H=p,P=w,q=v,V=S)):C>=E?(R=l,B=d,G=w,nt=S,l>=0?(g=h,b=c,T=u,L=f,H=p,P=_,q=v,V=m):(g=c,b=h,T=f,L=u,H=_,P=p,q=m,V=v)):(R=h,B=u,G=p,nt=v,h>=0?(g=c,b=l,T=f,L=d,H=_,P=w,q=m,V=S):(g=l,b=c,T=d,L=f,H=w,P=_,q=S,V=m)),R===0)return null;let X=g/R,Q=b/R,$=1/R,Nt=T-X*B,Ut=L-Q*B,Y=H-X*G,at=P-Q*G,pt=q-X*nt,mt=V-Q*nt,lt=pt*at-mt*Y,K=Nt*mt-Ut*pt,Gt=Y*Ut-at*Nt;if(s){if(lt<0||K<0||Gt<0)return null}else if((lt<0||K<0||Gt<0)&&(lt>0||K>0||Gt>0))return null;let kt=lt+K+Gt;if(kt===0)return null;let Bt=$*(lt*B+K*G+Gt*nt);return(kt>0?Bt<0:Bt>0)?null:this.at(Bt/kt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fn=class extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hd=new He,Ss=new ws,uo=new Wi,Wd=new N,fo=new N,po=new N,mo=new N,eh=new N,go=new N,Xd=new N,_o=new N,Ht=class extends Ke{constructor(t=new dn,e=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){go.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(eh.fromBufferAttribute(f,t),a?go.addScaledVector(eh,h):go.addScaledVector(eh.sub(e),h))}e.add(go)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),Ss.copy(t.ray).recast(t.near),!(uo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(uo,Wd)===null||Ss.origin.distanceToSquared(Wd)>(t.far-t.near)**2))&&(Hd.copy(r).invert(),Ss.copy(t.ray).applyMatrix4(Hd),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ss)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,w=d.length;_<w;_++){let p=d[_],m=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,C=v;y<C;y+=3){let E=o.getX(y),g=o.getX(y+1),b=o.getX(y+2);s=xo(this,m,t,i,l,h,f,E,g,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),w=Math.min(o.count,u.start+u.count);for(let p=_,m=w;p<m;p+=3){let S=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);s=xo(this,a,t,i,l,h,f,S,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,w=d.length;_<w;_++){let p=d[_],m=a[p.materialIndex],S=Math.max(p.start,u.start),v=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let y=S,C=v;y<C;y+=3){let E=y,g=y+1,b=y+2;s=xo(this,m,t,i,l,h,f,E,g,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let _=Math.max(0,u.start),w=Math.min(c.count,u.start+u.count);for(let p=_,m=w;p<m;p+=3){let S=p,v=p+1,y=p+2;s=xo(this,a,t,i,l,h,f,S,v,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function a0(n,t,e,i,s,r,a,o){let c;if(t.side===Vn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===ps,o),c===null)return null;_o.copy(o),_o.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(_o);return l<e.near||l>e.far?null:{distance:l,point:_o.clone(),object:n}}function xo(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,fo),n.getVertexPosition(c,po),n.getVertexPosition(l,mo);let h=a0(n,t,e,i,fo,po,mo,Xd);if(h){let f=new N;ki.getBarycoord(Xd,fo,po,mo,f),s&&(h.uv=ki.getInterpolatedAttribute(s,o,c,l,f,new ht)),r&&(h.uv1=ki.getInterpolatedAttribute(r,o,c,l,f,new ht)),a&&(h.normal=ki.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};ki.getNormal(fo,po,mo,d.normal),h.face=d,h.barycoord=f}return h}var sa=class extends kn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Sn,h=Sn,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ra=class extends hn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},er=new He,Yd=new He,vo=[],qd=new Ei,o0=new He,Or=new Ht,Br=new Wi,_n=class extends Ht{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,o0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,er),qd.copy(t.boundingBox).applyMatrix4(er),this.boundingBox.union(qd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,er),Br.copy(t.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Br.copy(this.boundingSphere),Br.applyMatrix4(i),t.ray.intersectsSphere(Br)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),Yd.multiplyMatrices(i,er),Or.matrixWorld=Yd,Or.raycast(t,vo);for(let a=0,o=vo.length;a<o;a++){let c=vo[a];c.instanceId=r,c.object=this,e.push(c)}vo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(s*this.count),s,this.count,yl,oi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},bs=new Wi,l0=new ht(.5,.5),yo=new N,rs=class{constructor(t=new Jn,e=new Jn,i=new Jn,s=new Jn,r=new Jn,a=new Jn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=si,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],_=r[8],w=r[9],p=r[10],m=r[11],S=r[12],v=r[13],y=r[14],C=r[15];if(s[0].setComponents(l-a,u-h,m-_,C-S).normalize(),s[1].setComponents(l+a,u+h,m+_,C+S).normalize(),s[2].setComponents(l+o,u+f,m+w,C+v).normalize(),s[3].setComponents(l-o,u-f,m-w,C-v).normalize(),i)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,u-d,m-p,C-y).normalize();else if(s[4].setComponents(l-c,u-d,m-p,C-y).normalize(),e===si)s[5].setComponents(l+c,u+d,m+p,C+y).normalize();else if(e===or)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bs)}intersectsSprite(t){bs.center.set(0,0,0);let e=l0.distanceTo(t.center);return bs.radius=.7071067811865476+e,bs.applyMatrix4(t.matrixWorld),this.intersectsSphere(bs)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zd=new He,Wo=class n{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,i=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Zd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new rs),i[s].setFromProjectionMatrix(Zd,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let i=0;i<this._count;i++)if(e[i].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,i=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new rs),e[s].copy(i[s]);return this._count=t._count,this}clone(){return new n().copy(this)}};var Xo=class extends Ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jd=new He,hh=new ws,Mo=new Wi,So=new N,aa=class extends Ke{constructor(t=new dn,e=new Xo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(s),Mo.radius+=r,t.ray.intersectsSphere(Mo)===!1)return;Jd.copy(s).invert(),hh.copy(t.ray).applyMatrix4(Jd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let _=d,w=u;_<w;_++){let p=l.getX(_);So.fromBufferAttribute(f,p),Kd(So,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let _=d,w=u;_<w;_++)So.fromBufferAttribute(f,_),Kd(So,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Kd(n,t,e,i,s,r,a){let o=hh.distanceSqToPoint(n);if(o<e){let c=new N;hh.closestPointToPoint(n,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var oa=class extends kn{constructor(t=[],e=Cs,i,s,r,a,o,c,l,h){super(t,e,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},as=class extends kn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xi=class extends kn{constructor(t,e,i=mi,s,r,a,o=Sn,c=Sn,l,h=Vi,f=1){if(h!==Vi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},la=class extends Xi{constructor(t,e=mi,i=Cs,s,r,a=Sn,o=Sn,c,l=Vi){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ca=class extends kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Re=class n extends dn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;_("z","y","x",-1,-1,i,e,t,a,r,0),_("z","y","x",1,-1,i,e,-t,a,r,1),_("x","z","y",1,1,t,i,e,s,a,2),_("x","z","y",1,-1,t,i,-e,s,a,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(f,2));function _(w,p,m,S,v,y,C,E,g,b,R){let T=y/g,L=C/b,B=y/2,H=C/2,P=E/2,G=g+1,q=b+1,V=0,nt=0,X=new N;for(let Q=0;Q<q;Q++){let $=Q*L-H;for(let Nt=0;Nt<G;Nt++){let Ut=Nt*T-B;X[w]=Ut*S,X[p]=$*v,X[m]=P,l.push(X.x,X.y,X.z),X[w]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Nt/g),f.push(1-Q/b),V+=1}}for(let Q=0;Q<b;Q++)for(let $=0;$<g;$++){let Nt=d+$+G*Q,Ut=d+$+G*(Q+1),Y=d+($+1)+G*(Q+1),at=d+($+1)+G*Q;c.push(Nt,Ut,at),c.push(Ut,Y,at),nt+=6}o.addGroup(u,nt,R),u+=nt,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var fr=class n extends dn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new N,h=new ht;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){let u=i+f/e*s;l.x=t*Math.cos(u),l.y=t*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/t+1)/2,h.y=(a[d+1]/t+1)/2,c.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(o,3)),this.setAttribute("uv",new Ye(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Tn=class n extends dn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],_=0,w=[],p=i/2,m=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(u,2));function S(){let y=new N,C=new N,E=0,g=(e-t)/i;for(let b=0;b<=r;b++){let R=[],T=b/r,L=T*(e-t)+t;for(let B=0;B<=s;B++){let H=B/s,P=H*c+o,G=Math.sin(P),q=Math.cos(P);C.x=L*G,C.y=-T*i+p,C.z=L*q,f.push(C.x,C.y,C.z),y.set(G,g,q).normalize(),d.push(y.x,y.y,y.z),u.push(H,1-T),R.push(_++)}w.push(R)}for(let b=0;b<s;b++)for(let R=0;R<r;R++){let T=w[R][b],L=w[R+1][b],B=w[R+1][b+1],H=w[R][b+1];(t>0||R!==0)&&(h.push(T,L,H),E+=3),(e>0||R!==r-1)&&(h.push(L,B,H),E+=3)}l.addGroup(m,E,0),m+=E}function v(y){let C=_,E=new ht,g=new N,b=0,R=y===!0?t:e,T=y===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*T,0),d.push(0,T,0),u.push(.5,.5),_++;let L=_;for(let B=0;B<=s;B++){let P=B/s*c+o,G=Math.cos(P),q=Math.sin(P);g.x=R*q,g.y=p*T,g.z=R*G,f.push(g.x,g.y,g.z),d.push(0,T,0),E.x=G*.5+.5,E.y=q*.5*T+.5,u.push(E.x,E.y),_++}for(let B=0;B<s;B++){let H=C+B,P=L+B;y===!0?h.push(P,P+1,H):h.push(P+1,P,H),b+=3}l.addGroup(m,b,y===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},os=class n extends Tn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var jn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){le("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new ht:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new N,s=[],r=[],a=[],o=new N,c=new He;for(let u=0;u<=t;u++){let _=u/t;s[u]=this.getTangentAt(_,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),f<=l&&(l=f,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(Ce(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,_))}a[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ce(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(u=-u);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],u*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},pr=class extends jn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new ht){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Yo=class extends pr{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var $d=new N,jd=new N,nh=new Yh,ih=new Yh,sh=new Yh,mr=class extends jn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(jd.subVectors(s[0],s[1]).add(s[0]),l=jd);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:($d.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$d),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(f),u),w=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);w<1e-4&&(w=1),_<1e-4&&(_=w),p<1e-4&&(p=w),nh.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,_,w,p),ih.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,_,w,p),sh.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,_,w,p)}else this.curveType==="catmullrom"&&(nh.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),ih.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),sh.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return i.set(nh.calc(c),ih.calc(c),sh.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Qd(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function c0(n,t){let e=1-n;return e*e*t}function h0(n,t){return 2*(1-n)*n*t}function u0(n,t){return n*n*t}function Hr(n,t,e,i){return c0(n,t)+h0(n,e)+u0(n,i)}function d0(n,t){let e=1-n;return e*e*e*t}function f0(n,t){let e=1-n;return 3*e*e*n*t}function p0(n,t){return 3*(1-n)*n*n*t}function m0(n,t){return n*n*n*t}function Wr(n,t,e,i,s){return d0(n,t)+f0(n,e)+p0(n,i)+m0(n,s)}var ha=class extends jn{constructor(t=new ht,e=new ht,i=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(t,s.x,r.x,a.x,o.x),Wr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},qo=class extends jn{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Wr(t,s.x,r.x,a.x,o.x),Wr(t,s.y,r.y,a.y,o.y),Wr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends jn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Zo=class extends jn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends jn{constructor(t=new ht,e=new ht,i=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ht){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Hr(t,s.x,r.x,a.x),Hr(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends jn{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Hr(t,s.x,r.x,a.x),Hr(t,s.y,r.y,a.y),Hr(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Qd(o,c.x,l.x,h.x,f.x),Qd(o,c.y,l.y,h.y,f.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ht().fromArray(s))}return this}},Jo=Object.freeze({__proto__:null,ArcCurve:Yo,CatmullRomCurve3:mr,CubicBezierCurve:ha,CubicBezierCurve3:qo,EllipseCurve:pr,LineCurve:ua,LineCurve3:Zo,QuadraticBezierCurve:da,QuadraticBezierCurve3:fa,SplineCurve:pa}),Ko=class extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jo[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Jo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},ma=class extends Ko{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ua(this.currentPoint.clone(),new ht(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new da(this.currentPoint.clone(),new ht(t,e),new ht(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new ha(this.currentPoint.clone(),new ht(t,e),new ht(i,s),new ht(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new pa(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){let l=new pr(t,e,i,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ls=class extends ma{constructor(t){super(t),this.uuid=Ki(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new ma().fromJSON(s))}return this}};function g0(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Jf(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=M0(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let h=o,f=c;for(let d=e;d<s;d+=e){let u=n[d],_=n[d+1];u<o&&(o=u),_<c&&(c=_),u>h&&(h=u),_>f&&(f=_)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return ga(r,a,e,o,c,l,0),a}function Jf(n,t,e,i,s){let r;if(s===L0(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=tf(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=tf(a/i|0,n[a],n[a+1],r);return r&&gr(r,r.next)&&(xa(r),r=r.next),r}function Es(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(gr(e,e.next)||cn(e.prev,e,e.next)===0)){if(xa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function ga(n,t,e,i,s,r,a){if(!n)return;!a&&r&&A0(n,i,s,r);let o=n;for(;n.prev!==n.next;){let c=n.prev,l=n.next;if(r?x0(n,i,s,r):_0(n)){t.push(c.i,n.i,l.i),xa(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=v0(Es(n),t),ga(n,t,e,i,s,r,2)):a===2&&y0(n,t,e,i,s,r):ga(Es(n),t,e,i,s,r,1);break}}}function _0(n){let t=n.prev,e=n,i=n.next;if(cn(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),_=i.next;for(;_!==t;){if(_.x>=h&&_.x<=d&&_.y>=f&&_.y<=u&&zr(s,o,r,c,a,l,_.x,_.y)&&cn(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function x0(n,t,e,i){let s=n.prev,r=n,a=n.next;if(cn(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),_=Math.min(h,f,d),w=Math.max(o,c,l),p=Math.max(h,f,d),m=uh(u,_,t,e,i),S=uh(w,p,t,e,i),v=n.prevZ,y=n.nextZ;for(;v&&v.z>=m&&y&&y.z<=S;){if(v.x>=u&&v.x<=w&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&zr(o,h,c,f,l,d,v.x,v.y)&&cn(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=u&&y.x<=w&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&zr(o,h,c,f,l,d,y.x,y.y)&&cn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=u&&v.x<=w&&v.y>=_&&v.y<=p&&v!==s&&v!==a&&zr(o,h,c,f,l,d,v.x,v.y)&&cn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=S;){if(y.x>=u&&y.x<=w&&y.y>=_&&y.y<=p&&y!==s&&y!==a&&zr(o,h,c,f,l,d,y.x,y.y)&&cn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function v0(n,t){let e=n;do{let i=e.prev,s=e.next.next;!gr(i,s)&&$f(i,e,e.next,s)&&_a(i,s)&&_a(s,i)&&(t.push(i.i,e.i,s.i),xa(e),xa(e.next),e=n=s),e=e.next}while(e!==n);return Es(e)}function y0(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&R0(a,o)){let c=jf(a,o);a=Es(a,a.next),c=Es(c,c.next),ga(a,t,e,i,s,r,0),ga(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function M0(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=Jf(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(C0(l))}s.sort(S0);for(let r=0;r<s.length;r++)e=b0(s[r],e);return e}function S0(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function b0(n,t){let e=w0(n,t);if(!e)return t;let i=jf(e,n);return Es(i,i.next),Es(e,e.next)}function w0(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(gr(n,e))return e;do{if(gr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=i&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&Kf(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){let f=Math.abs(s-e.y)/(i-e.x);_a(e,n)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&E0(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function E0(n,t){return cn(n.prev,n,t.prev)<0&&cn(t.next,n,n.next)<0}function A0(n,t,e,i){let s=n;do s.z===0&&(s.z=uh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,T0(s)}function T0(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function uh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function C0(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Kf(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function zr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&Kf(n,t,e,i,s,r,a,o)}function R0(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!P0(n,t)&&(_a(n,t)&&_a(t,n)&&I0(n,t)&&(cn(n.prev,n,t.prev)||cn(n,t.prev,t))||gr(n,t)&&cn(n.prev,n,n.next)>0&&cn(t.prev,t,t.next)>0)}function cn(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function gr(n,t){return n.x===t.x&&n.y===t.y}function $f(n,t,e,i){let s=wo(cn(n,t,e)),r=wo(cn(n,t,i)),a=wo(cn(e,i,n)),o=wo(cn(e,i,t));return!!(s!==r&&a!==o||s===0&&bo(n,e,t)||r===0&&bo(n,i,t)||a===0&&bo(e,n,i)||o===0&&bo(e,t,i))}function bo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function wo(n){return n>0?1:n<0?-1:0}function P0(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&$f(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function _a(n,t){return cn(n.prev,n,n.next)<0?cn(n,t,n.next)>=0&&cn(n,n.prev,t)>=0:cn(n,t,n.prev)<0||cn(n,n.next,t)<0}function I0(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function jf(n,t){let e=dh(n.i,n.x,n.y),i=dh(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function tf(n,t,e,i){let s=dh(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function dh(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function L0(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var fh=class{static triangulate(t,e,i=2){return g0(t,e,i)}},wi=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];ef(t),nf(i,t);let a=t.length;e.forEach(ef);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,nf(i,e[c]);let o=fh.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function ef(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function nf(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var va=class n extends dn{constructor(t=new ls([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){let l=t[o];a(l)}this.setAttribute("position",new Ye(s,3)),this.setAttribute("uv",new Ye(r,2)),this.computeVertexNormals();function a(o){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:D0,v,y=!1,C,E,g,b;if(m){v=m.getSpacedPoints(h),y=!0,d=!1;let st=m.isCatmullRomCurve3?m.closed:!1;C=m.computeFrenetFrames(h,st),E=new N,g=new N,b=new N}d||(p=0,u=0,_=0,w=0);let R=o.extractPoints(l),T=R.shape,L=R.holes;if(!wi.isClockWise(T)){T=T.reverse();for(let st=0,_t=L.length;st<_t;st++){let Mt=L[st];wi.isClockWise(Mt)&&(L[st]=Mt.reverse())}}function H(st){let Mt=10000000000000001e-36,Lt=st[0];for(let Rt=1;Rt<=st.length;Rt++){let ae=Rt%st.length,Vt=st[ae],ce=Vt.x-Lt.x,be=Vt.y-Lt.y,fe=ce*ce+be*be,U=Math.max(Math.abs(Vt.x),Math.abs(Vt.y),Math.abs(Lt.x),Math.abs(Lt.y)),We=Mt*U*U;if(fe<=We){st.splice(ae,1),Rt--;continue}Lt=Vt}}H(T),L.forEach(H);let P=L.length,G=T;for(let st=0;st<P;st++){let _t=L[st];T=T.concat(_t)}function q(st,_t,Mt){return _t||ue("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(_t,Mt)}let V=T.length;function nt(st,_t,Mt){let Lt,Rt,ae,Vt=st.x-_t.x,ce=st.y-_t.y,be=Mt.x-st.x,fe=Mt.y-st.y,U=Vt*Vt+ce*ce,We=Vt*fe-ce*be;if(Math.abs(We)>Number.EPSILON){let Dt=Math.sqrt(U),me=Math.sqrt(be*be+fe*fe),St=_t.x-ce/Dt,qe=_t.y+Vt/Dt,Zt=Mt.x-fe/me,oe=Mt.y+be/me,A=((Zt-St)*fe-(oe-qe)*be)/(Vt*fe-ce*be);Lt=St+Vt*A-st.x,Rt=qe+ce*A-st.y;let x=Lt*Lt+Rt*Rt;if(x<=2)return new ht(Lt,Rt);ae=Math.sqrt(x/2)}else{let Dt=!1;Vt>Number.EPSILON?be>Number.EPSILON&&(Dt=!0):Vt<-Number.EPSILON?be<-Number.EPSILON&&(Dt=!0):Math.sign(ce)===Math.sign(fe)&&(Dt=!0),Dt?(Lt=-ce,Rt=Vt,ae=Math.sqrt(U)):(Lt=Vt,Rt=ce,ae=Math.sqrt(U/2))}return new ht(Lt/ae,Rt/ae)}let X=[];for(let st=0,_t=G.length,Mt=_t-1,Lt=st+1;st<_t;st++,Mt++,Lt++)Mt===_t&&(Mt=0),Lt===_t&&(Lt=0),X[st]=nt(G[st],G[Mt],G[Lt]);let Q=[],$,Nt=X.concat();for(let st=0,_t=P;st<_t;st++){let Mt=L[st];$=[];for(let Lt=0,Rt=Mt.length,ae=Rt-1,Vt=Lt+1;Lt<Rt;Lt++,ae++,Vt++)ae===Rt&&(ae=0),Vt===Rt&&(Vt=0),$[Lt]=nt(Mt[Lt],Mt[ae],Mt[Vt]);Q.push($),Nt=Nt.concat($)}let Ut;if(p===0)Ut=wi.triangulateShape(G,L);else{let st=[],_t=[];for(let Mt=0;Mt<p;Mt++){let Lt=Mt/p,Rt=u*Math.cos(Lt*Math.PI/2),ae=_*Math.sin(Lt*Math.PI/2)+w;for(let Vt=0,ce=G.length;Vt<ce;Vt++){let be=q(G[Vt],X[Vt],ae);K(be.x,be.y,-Rt),Lt===0&&st.push(be)}for(let Vt=0,ce=P;Vt<ce;Vt++){let be=L[Vt];$=Q[Vt];let fe=[];for(let U=0,We=be.length;U<We;U++){let Dt=q(be[U],$[U],ae);K(Dt.x,Dt.y,-Rt),Lt===0&&fe.push(Dt)}Lt===0&&_t.push(fe)}}Ut=wi.triangulateShape(st,_t)}let Y=Ut.length,at=_+w;for(let st=0;st<V;st++){let _t=d?q(T[st],Nt[st],at):T[st];y?(g.copy(C.normals[0]).multiplyScalar(_t.x),E.copy(C.binormals[0]).multiplyScalar(_t.y),b.copy(v[0]).add(g).add(E),K(b.x,b.y,b.z)):K(_t.x,_t.y,0)}for(let st=1;st<=h;st++)for(let _t=0;_t<V;_t++){let Mt=d?q(T[_t],Nt[_t],at):T[_t];y?(g.copy(C.normals[st]).multiplyScalar(Mt.x),E.copy(C.binormals[st]).multiplyScalar(Mt.y),b.copy(v[st]).add(g).add(E),K(b.x,b.y,b.z)):K(Mt.x,Mt.y,f/h*st)}for(let st=p-1;st>=0;st--){let _t=st/p,Mt=u*Math.cos(_t*Math.PI/2),Lt=_*Math.sin(_t*Math.PI/2)+w;for(let Rt=0,ae=G.length;Rt<ae;Rt++){let Vt=q(G[Rt],X[Rt],Lt);K(Vt.x,Vt.y,f+Mt)}for(let Rt=0,ae=L.length;Rt<ae;Rt++){let Vt=L[Rt];$=Q[Rt];for(let ce=0,be=Vt.length;ce<be;ce++){let fe=q(Vt[ce],$[ce],Lt);y?K(fe.x,fe.y+v[h-1].y,v[h-1].x+Mt):K(fe.x,fe.y,f+Mt)}}}pt(),mt();function pt(){let st=s.length/3;if(d){let _t=0,Mt=V*_t;for(let Lt=0;Lt<Y;Lt++){let Rt=Ut[Lt];Gt(Rt[2]+Mt,Rt[1]+Mt,Rt[0]+Mt)}_t=h+p*2,Mt=V*_t;for(let Lt=0;Lt<Y;Lt++){let Rt=Ut[Lt];Gt(Rt[0]+Mt,Rt[1]+Mt,Rt[2]+Mt)}}else{for(let _t=0;_t<Y;_t++){let Mt=Ut[_t];Gt(Mt[2],Mt[1],Mt[0])}for(let _t=0;_t<Y;_t++){let Mt=Ut[_t];Gt(Mt[0]+V*h,Mt[1]+V*h,Mt[2]+V*h)}}i.addGroup(st,s.length/3-st,0)}function mt(){let st=s.length/3,_t=0;lt(G,_t),_t+=G.length;for(let Mt=0,Lt=L.length;Mt<Lt;Mt++){let Rt=L[Mt];lt(Rt,_t),_t+=Rt.length}i.addGroup(st,s.length/3-st,1)}function lt(st,_t){let Mt=st.length;for(;--Mt>=0;){let Lt=Mt,Rt=Mt-1;Rt<0&&(Rt=st.length-1);for(let ae=0,Vt=h+p*2;ae<Vt;ae++){let ce=V*ae,be=V*(ae+1),fe=_t+Lt+ce,U=_t+Rt+ce,We=_t+Rt+be,Dt=_t+Lt+be;kt(fe,U,We,Dt)}}}function K(st,_t,Mt){c.push(st),c.push(_t),c.push(Mt)}function Gt(st,_t,Mt){Bt(st),Bt(_t),Bt(Mt);let Lt=s.length/3,Rt=S.generateTopUV(i,s,Lt-3,Lt-2,Lt-1);de(Rt[0]),de(Rt[1]),de(Rt[2])}function kt(st,_t,Mt,Lt){Bt(st),Bt(_t),Bt(Lt),Bt(_t),Bt(Mt),Bt(Lt);let Rt=s.length/3,ae=S.generateSideWallUV(i,s,Rt-6,Rt-3,Rt-2,Rt-1);de(ae[0]),de(ae[1]),de(ae[3]),de(ae[1]),de(ae[2]),de(ae[3])}function Bt(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function de(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return N0(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Jo[s.type]().fromJSON(s)),new n(i,t.options)}},D0={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,a),new ht(o,c),new ht(l,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],h=t[i*3+1],f=t[i*3+2],d=t[s*3],u=t[s*3+1],_=t[s*3+2],w=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ht(a,1-c),new ht(l,1-f),new ht(d,1-_),new ht(w,1-m)]:[new ht(o,1-c),new ht(h,1-f),new ht(u,1-_),new ht(p,1-m)]}};function N0(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gn=class n extends dn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,f=t/o,d=e/c,u=[],_=[],w=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let v=0;v<l;v++){let y=v*f-r;_.push(y,-S,0),w.push(0,0,1),p.push(v/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){let v=S+l*m,y=S+l*(m+1),C=S+1+l*(m+1),E=S+1+l*m;u.push(v,y,E),u.push(y,C,E)}this.setIndex(u),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(w,3)),this.setAttribute("uv",new Ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ya=class n extends dn{constructor(t=new ls([new ht(0,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(o,c,h),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new Ye(s,3)),this.setAttribute("normal",new Ye(r,3)),this.setAttribute("uv",new Ye(a,2));function l(h){let f=s.length/3,d=h.extractPoints(e),u=d.shape,_=d.holes;wi.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=_.length;p<m;p++){let S=_[p];wi.isClockWise(S)===!0&&(_[p]=S.reverse())}let w=wi.triangulateShape(u,_);for(let p=0,m=_.length;p<m;p++){let S=_[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){let S=u[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=w.length;p<m;p++){let S=w[p],v=S[0]+f,y=S[1]+f,C=S[2]+f;i.push(v,y,C),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return U0(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};function U0(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}var Yi=class n extends dn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new N,d=new N,u=[],_=[],w=[],p=[];for(let m=0;m<=i;m++){let S=[],v=m/i,y=a+v*o,C=t*Math.cos(y),E=Math.sqrt(t*t-C*C),g=0;m===0&&a===0?g=.5/e:m===i&&c===Math.PI&&(g=-.5/e);for(let b=0;b<=e;b++){let R=b/e,T=s+R*r;f.x=-E*Math.cos(T),f.y=C,f.z=E*Math.sin(T),_.push(f.x,f.y,f.z),d.copy(f).normalize(),w.push(d.x,d.y,d.z),p.push(R+g,1-v),S.push(l++)}h.push(S)}for(let m=0;m<i;m++)for(let S=0;S<e;S++){let v=h[m][S+1],y=h[m][S],C=h[m+1][S],E=h[m+1][S+1];(m!==0||a>0)&&u.push(v,y,E),(m!==i-1||c<Math.PI)&&u.push(y,C,E)}this.setIndex(u),this.setAttribute("position",new Ye(_,3)),this.setAttribute("normal",new Ye(w,3)),this.setAttribute("uv",new Ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ma=class n extends dn{constructor(t=new fa(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,c=new N,l=new ht,h=new N,f=[],d=[],u=[],_=[];w(),this.setIndex(_),this.setAttribute("position",new Ye(f,3)),this.setAttribute("normal",new Ye(d,3)),this.setAttribute("uv",new Ye(u,2));function w(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),S(),m()}function p(v){h=t.getPointAt(v/e,h);let y=a.normals[v],C=a.binormals[v];for(let E=0;E<=s;E++){let g=E/s*Math.PI*2,b=Math.sin(g),R=-Math.cos(g);c.x=R*y.x+b*C.x,c.y=R*y.y+b*C.y,c.z=R*y.z+b*C.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,f.push(o.x,o.y,o.z)}}function m(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){let C=(s+1)*(v-1)+(y-1),E=(s+1)*v+(y-1),g=(s+1)*v+y,b=(s+1)*(v-1)+y;_.push(C,E,b),_.push(E,g,b)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)l.x=v/e,l.y=y/s,u.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new Jo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Ps(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(sf(s))s.isRenderTargetTexture?(le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(sf(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Dn(n){let t={};for(let e=0;e<n.length;e++){let i=Ps(n[e]);for(let s in i)t[s]=i[s]}return t}function sf(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function F0(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qh(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}var Qf={clone:Ps,merge:Dn},O0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,B0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ri=class extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=O0,this.fragmentShader=B0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=F0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new re().setHex(s.value);break;case"v2":this.uniforms[i].value=new ht().fromArray(s.value);break;case"v3":this.uniforms[i].value=new N().fromArray(s.value);break;case"v4":this.uniforms[i].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new He().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},$o=class extends ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ve=class extends Ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=fl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},jo=class extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Qo=class extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function nr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Eo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var cs=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break e}a=e.length;break n}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},tl=class extends cs{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:oh,endingEnd:oh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case lh:r=t,o=2*e-i;break;case ch:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case lh:a=t,c=2*i-e;break;case ch:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,_=(i-e)/(s-e),w=_*_,p=w*_,m=-d*p+2*d*w-d*_,S=(1+d)*p+(-1.5-2*d)*w+(-.5+d)*_+1,v=(-1-u)*p+(1.5+u)*w+.5*_,y=u*p-u*w;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+S*a[l+C]+v*a[c+C]+y*a[f+C];return r}},el=class extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},nl=class extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},il=class extends cs{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(i-e)/(s-e),w=1-_;for(let p=0;p!==o;++p)r[p]=a[l+p]*w+a[c+p]*_;return r}let d=o*2,u=t-1;for(let _=0;_!==o;++_){let w=a[l+_],p=a[c+_],m=u*d+_*2,S=f[m],v=f[m+1],y=t*d+_*2,C=h[y],E=h[y+1],g=k0(i,e,S,C,s);r[_]=tp(g,w,v,E,p)}return r}};function tp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function z0(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function k0(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=tp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let c=z0(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=nr(e,this.TimeBufferType),this.values=nr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:nr(t.times,Array),values:nr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Eo(t.settings)&&(i.settings={inTangents:nr(t.settings.inTangents,Array),outTangents:nr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new nl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new el(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new tl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new il(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Xr:e=this.InterpolantFactoryMethodDiscrete;break;case zo:e=this.InterpolantFactoryMethodLinear;break;case Co:e=this.InterpolantFactoryMethodSmooth;break;case ah:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return le("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return zo;case this.InterpolantFactoryMethodSmooth:return Co;case this.InterpolantFactoryMethodBezier:return ah}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t;Eo(this.settings)&&(rf(this.settings.inTangents,t),rf(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Eo(this.settings)&&(af(this.settings.inTangents,t),af(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){ue("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){ue("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Cm(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){ue("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Co,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],h=t[o+1];if(l!==h&&(o!==1||l!==t[0]))if(s)c=!0;else{let f=o*i,d=f-i,u=f+i;for(let _=0;_!==i;++_){let w=e[f+_];if(w!==e[d+_]||w!==e[u+_]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let u=0;u!==i;++u)e[d+u]=e[f+u]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Eo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function rf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]+=t}function af(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=zo;var hs=class extends Qn{constructor(t,e,i){super(t,e,i)}};hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Xr;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var sl=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};sl.prototype.ValueTypeName="color";var rl=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};rl.prototype.ValueTypeName="number";var al=class extends cs{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-e)/(s-e),l=t*o;for(let h=l+o;l!==h;l+=4)Kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Sa=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new al(this.times,this.values,this.getValueSize(),t)}};Sa.prototype.ValueTypeName="quaternion";Sa.prototype.InterpolantFactoryMethodSmooth=void 0;var us=class extends Qn{constructor(t,e,i){super(t,e,i)}};us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=Xr;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends Qn{constructor(t,e,i,s){super(t,e,i,s)}};ol.prototype.ValueTypeName="vector";var ll=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],_=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ep=new ll,cl=class{constructor(t){this.manager=t!==void 0?t:ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};cl.DEFAULT_MATERIAL_NAME="__DEFAULT";var ba=class extends Ke{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},wa=class extends ba{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new re(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},rh=new He,of=new N,lf=new N,hl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=Wn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;of.setFromMatrixPosition(t.matrixWorld),e.position.copy(of),lf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(lf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(rh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===or||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(rh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ao=new N,To=new Kn,Si=new N,Ea=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ao,To,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,To,Si.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ao,To,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ao,To,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ss=new N,cf=new ht,hf=new ht,Bn=class extends Ea{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(Gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ss.x,ss.y).multiplyScalar(-t/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-t/ss.z)}getViewSize(t,e){return this.getViewBounds(t,cf,hf),e.subVectors(hf,cf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Gr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Aa=class extends Ea{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ph=class extends hl{constructor(){super(new Aa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ta=class extends ba{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ir=-90,sr=1,_r=class extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bn(ir,sr,t,e);s.layers=this.layers,this.add(s);let r=new Bn(ir,sr,t,e);r.layers=this.layers,this.add(r);let a=new Bn(ir,sr,t,e);a.layers=this.layers,this.add(a);let o=new Bn(ir,sr,t,e);o.layers=this.layers,this.add(o);let c=new Bn(ir,sr,t,e);c.layers=this.layers,this.add(c);let l=new Bn(ir,sr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===si)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===or)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let w=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.mipmapsAutoUpdate=w,t.setRenderTarget(i,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,d,u),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ul=class extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Zh="\\[\\]\\.:\\/",G0=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",V0="[^"+Zh.replace("\\.","")+"]",H0=/((?:WC+[\/:])*)/.source.replace("WC",Jh),W0=/(WCOD+)?/.source.replace("WCOD",V0),X0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),Y0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),q0=new RegExp("^"+H0+W0+X0+Y0+"$"),Z0=["material","materials","bones","map"],mh=class{constructor(t,e,i){let s=i||Qe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Qe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(G0,"")}static parseTrackName(t){let e=q0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Z0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=i(o.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qe.Composite=mh;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var hM=new Float32Array(1);var xr=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ce(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var eu=class eu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};eu.prototype.isMatrix2=!0;var gh=eu;var Ca=class extends pi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Kh(n,t,e,i){let s=J0(i);switch(e){case Nh:return n*t;case yl:return n*t/s.components*s.byteLength;case Ml:return n*t/s.components*s.byteLength;case ms:return n*t*2/s.components*s.byteLength;case Sl:return n*t*2/s.components*s.byteLength;case Uh:return n*t*3/s.components*s.byteLength;case _i:return n*t*4/s.components*s.byteLength;case bl:return n*t*4/s.components*s.byteLength;case La:case Da:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Na:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case El:case Tl:return Math.max(n,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Cl:case Rl:case Il:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:case Fa:case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Bl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Yl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ql:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zl:case Jl:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $l:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Oa:case Ql:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function J0(n){switch(n){case Wn:case Ph:return{byteLength:1,components:1};case Sr:case Ih:case gi:return{byteLength:2,components:1};case xl:case vl:return{byteLength:2,components:4};case mi:case _l:case oi:return{byteLength:4,components:1};case Lh:case Dh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window!="undefined"&&(window.__THREE__?le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function bp(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function $0(n){let t=new WeakMap;function e(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)u=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=n.SHORT;else if(l instanceof Uint32Array)u=n.UNSIGNED_INT;else if(l instanceof Int32Array)u=n.INT;else if(l instanceof Int8Array)u=n.BYTE;else if(l instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,l){let h=c.array,f=c.updateRanges;if(n.bindBuffer(l,o),f.length===0)n.bufferSubData(l,0,h);else{f.sort((u,_)=>u.start-_.start);let d=0;for(let u=1;u<f.length;u++){let _=f[d],w=f[u];w.start<=_.start+_.count+1?_.count=Math.max(_.count,w.start+w.count-_.start):(++d,f[d]=w)}f.length=d+1;for(let u=0,_=f.length;u<_;u++){let w=f[u];n.bufferSubData(l,w.start*h.BYTES_PER_ELEMENT,h,w.start,w.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var j0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q0=`#ifdef USE_ALPHAHASH
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
#endif`,tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sg=`#ifdef USE_AOMAP
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
#endif`,rg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ug=`#ifdef USE_IRIDESCENCE
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
#endif`,dg=`#ifdef USE_BUMPMAP
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
#endif`,fg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_g=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,Sg=`vec3 transformedNormal = objectNormal;
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
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rg=`#ifdef USE_ENVMAP
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
#endif`,Pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ig=`#ifdef USE_ENVMAP
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
#endif`,Lg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
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
#endif`,Ng=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Hg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zg=`PhysicalMaterial material;
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
#endif`,Jg=`uniform sampler2D dfgLUT;
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
}`,Kg=`
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
#endif`,$g=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,t_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,e_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o_=`#if defined( USE_POINTS_UV )
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
#endif`,l_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,u_=`#if defined( USE_MORPHCOLORS )
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
#endif`,d_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f_=`#ifdef USE_MORPHTARGETS
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
#endif`,p_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,m_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,g_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,__=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,y_=`#ifdef USE_NORMALMAP
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
#endif`,M_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,b_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,w_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F_=`float getShadowMask() {
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
}`,O_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B_=`#ifdef USE_SKINNING
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
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,G_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X_=`#ifdef USE_TRANSMISSION
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
#endif`,Y_=`#ifdef USE_TRANSMISSION
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
#endif`,q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j_=`uniform sampler2D t2D;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`uniform float backgroundBlurriness;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`#include <common>
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
}`,sx=`#if DEPTH_PACKING == 3200
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
}`,rx=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,ox=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cx=`uniform float scale;
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
}`,hx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,fx=`#define LAMBERT
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
}`,px=`#define LAMBERT
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
}`,mx=`#define MATCAP
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
}`,gx=`#define MATCAP
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
}`,_x=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,vx=`#define PHONG
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
}`,yx=`#define PHONG
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
}`,Mx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,wx=`#define TOON
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
}`,Ex=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Rx=`uniform float rotation;
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
}`,Px=`uniform vec3 diffuse;
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
}`,Pe={alphahash_fragment:j0,alphahash_pars_fragment:Q0,alphamap_fragment:tg,alphamap_pars_fragment:eg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:sg,aomap_pars_fragment:rg,batching_pars_vertex:ag,batching_vertex:og,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:hg,iridescence_fragment:ug,bumpmap_pars_fragment:dg,clipping_planes_fragment:fg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:gg,color_fragment:_g,color_pars_fragment:xg,color_pars_vertex:vg,color_vertex:yg,common:Mg,defaultnormal_vertex:Sg,displacementmap_pars_vertex:bg,displacementmap_vertex:wg,emissivemap_fragment:Eg,emissivemap_pars_fragment:Ag,colorspace_fragment:Tg,colorspace_pars_fragment:Cg,envmap_fragment:Rg,envmap_common_pars_fragment:Pg,envmap_pars_fragment:Ig,envmap_pars_vertex:Lg,envmap_physical_pars_fragment:Hg,envmap_vertex:Dg,fog_vertex:Ng,fog_pars_vertex:Ug,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Gg,lights_pars_begin:Vg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:Yg,lights_phong_pars_fragment:qg,lights_physical_fragment:Zg,lights_physical_pars_fragment:Jg,lights_fragment_begin:Kg,lights_fragment_maps:$g,lights_fragment_end:jg,lightprobes_pars_fragment:Qg,logdepthbuf_fragment:t_,logdepthbuf_pars_fragment:e_,logdepthbuf_pars_vertex:n_,logdepthbuf_vertex:i_,map_fragment:s_,map_pars_fragment:r_,map_particle_fragment:a_,map_particle_pars_fragment:o_,metalnessmap_fragment:l_,metalnessmap_pars_fragment:c_,morphinstance_vertex:h_,morphcolor_vertex:u_,morphnormal_vertex:d_,morphtarget_pars_vertex:f_,morphtarget_vertex:p_,normal_fragment_begin:m_,normal_fragment_maps:g_,normal_pars_fragment:__,normal_pars_vertex:x_,normal_vertex:v_,normalmap_pars_fragment:y_,clearcoat_normal_fragment_begin:M_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:b_,iridescence_pars_fragment:w_,opaque_fragment:E_,packing:A_,premultiplied_alpha_fragment:T_,project_vertex:C_,dithering_fragment:R_,dithering_pars_fragment:P_,roughnessmap_fragment:I_,roughnessmap_pars_fragment:L_,shadowmap_pars_fragment:D_,shadowmap_pars_vertex:N_,shadowmap_vertex:U_,shadowmask_pars_fragment:F_,skinbase_vertex:O_,skinning_pars_vertex:B_,skinning_vertex:z_,skinnormal_vertex:k_,specularmap_fragment:G_,specularmap_pars_fragment:V_,tonemapping_fragment:H_,tonemapping_pars_fragment:W_,transmission_fragment:X_,transmission_pars_fragment:Y_,uv_pars_fragment:q_,uv_pars_vertex:Z_,uv_vertex:J_,worldpos_vertex:K_,background_vert:$_,background_frag:j_,backgroundCube_vert:Q_,backgroundCube_frag:tx,cube_vert:ex,cube_frag:nx,depth_vert:ix,depth_frag:sx,distance_vert:rx,distance_frag:ax,equirect_vert:ox,equirect_frag:lx,linedashed_vert:cx,linedashed_frag:hx,meshbasic_vert:ux,meshbasic_frag:dx,meshlambert_vert:fx,meshlambert_frag:px,meshmatcap_vert:mx,meshmatcap_frag:gx,meshnormal_vert:_x,meshnormal_frag:xx,meshphong_vert:vx,meshphong_frag:yx,meshphysical_vert:Mx,meshphysical_frag:Sx,meshtoon_vert:bx,meshtoon_frag:wx,points_vert:Ex,points_frag:Ax,shadow_vert:Tx,shadow_frag:Cx,sprite_vert:Rx,sprite_frag:Px},Ft={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},Ri={basic:{uniforms:Dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:Pe.meshbasic_vert,fragmentShader:Pe.meshbasic_frag},lambert:{uniforms:Dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},envMapIntensity:{value:1}}]),vertexShader:Pe.meshlambert_vert,fragmentShader:Pe.meshlambert_frag},phong:{uniforms:Dn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphong_vert,fragmentShader:Pe.meshphong_frag},standard:{uniforms:Dn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag},toon:{uniforms:Dn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new re(0)}}]),vertexShader:Pe.meshtoon_vert,fragmentShader:Pe.meshtoon_frag},matcap:{uniforms:Dn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:Pe.meshmatcap_vert,fragmentShader:Pe.meshmatcap_frag},points:{uniforms:Dn([Ft.points,Ft.fog]),vertexShader:Pe.points_vert,fragmentShader:Pe.points_frag},dashed:{uniforms:Dn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pe.linedashed_vert,fragmentShader:Pe.linedashed_frag},depth:{uniforms:Dn([Ft.common,Ft.displacementmap]),vertexShader:Pe.depth_vert,fragmentShader:Pe.depth_frag},normal:{uniforms:Dn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:Pe.meshnormal_vert,fragmentShader:Pe.meshnormal_frag},sprite:{uniforms:Dn([Ft.sprite,Ft.fog]),vertexShader:Pe.sprite_vert,fragmentShader:Pe.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pe.background_vert,fragmentShader:Pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Pe.backgroundCube_vert,fragmentShader:Pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pe.cube_vert,fragmentShader:Pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pe.equirect_vert,fragmentShader:Pe.equirect_frag},distance:{uniforms:Dn([Ft.common,Ft.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pe.distance_vert,fragmentShader:Pe.distance_frag},shadow:{uniforms:Dn([Ft.lights,Ft.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:Pe.shadow_vert,fragmentShader:Pe.shadow_frag}};Ri.physical={uniforms:Dn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Pe.meshphysical_vert,fragmentShader:Pe.meshphysical_frag};var nc={r:0,b:0,g:0},Ix=new He,wp=new ge;wp.set(-1,0,0,0,1,0,0,0,1);function Lx(n,t,e,i,s,r){let a=new re(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(S){let v=S.isScene===!0?S.background:null;if(v&&v.isTexture){let y=S.backgroundBlurriness>0;v=t.get(v,y)}return v}function _(S){let v=!1,y=u(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?e.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function w(S,v){let y=u(v);y&&y.isCubeTexture?(l===void 0&&(l=new Ht(new Re(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ps(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(C,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Ix.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wp),l.material.toneMapped=Le.getTransfer(y.colorSpace)!==Ve,(h!==y||f!==y.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ht(new Gn(2,2),new ri({name:"BackgroundMaterial",uniforms:Ps(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Le.getTransfer(y.colorSpace)!==Ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,v){S.getRGB(nc,qh(n)),e.buffers.color.setClear(nc.r,nc.g,nc.b,v,r)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,v=1){a.set(S),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:_,addToRenderList:w,dispose:m}}function Dx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(L,B,H,P,G){let q=!1,V=f(L,P,H,B);r!==V&&(r=V,l(r.object)),q=u(L,P,H,G),q&&_(L,P,H,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(L,B,H,P),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,B,H,P){let G=P.wireframe===!0,q=i[B.id];q===void 0&&(q={},i[B.id]=q);let V=L.isInstancedMesh===!0?L.id:0,nt=q[V];nt===void 0&&(nt={},q[V]=nt);let X=nt[H.id];X===void 0&&(X={},nt[H.id]=X);let Q=X[G];return Q===void 0&&(Q=d(c()),X[G]=Q),Q}function d(L){let B=[],H=[],P=[];for(let G=0;G<e;G++)B[G]=0,H[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:H,attributeDivisors:P,object:L,attributes:{},index:null}}function u(L,B,H,P){let G=r.attributes,q=B.attributes,V=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let $=G[X],Nt=q[X];if(Nt===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor)),$===void 0||$.attribute!==Nt||Nt&&$.data!==Nt.data)return!0;V++}return r.attributesNum!==V||r.index!==P}function _(L,B,H,P){let G={},q=B.attributes,V=0,nt=H.getAttributes();for(let X in nt)if(nt[X].location>=0){let $=q[X];$===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let Nt={};Nt.attribute=$,$&&$.data&&(Nt.data=$.data),G[X]=Nt,V++}r.attributes=G,r.attributesNum=V,r.index=P}function w(){let L=r.newAttributes;for(let B=0,H=L.length;B<H;B++)L[B]=0}function p(L){m(L,0)}function m(L,B){let H=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;H[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),G[L]!==B&&(n.vertexAttribDivisor(L,B),G[L]=B)}function S(){let L=r.newAttributes,B=r.enabledAttributes;for(let H=0,P=B.length;H<P;H++)B[H]!==L[H]&&(n.disableVertexAttribArray(H),B[H]=0)}function v(L,B,H,P,G,q,V){V===!0?n.vertexAttribIPointer(L,B,H,G,q):n.vertexAttribPointer(L,B,H,P,G,q)}function y(L,B,H,P){w();let G=P.attributes,q=H.getAttributes(),V=B.defaultAttributeValues;for(let nt in q){let X=q[nt];if(X.location>=0){let Q=G[nt];if(Q===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor)),Q!==void 0){let $=Q.normalized,Nt=Q.itemSize,Ut=t.get(Q);if(Ut===void 0)continue;let Y=Ut.buffer,at=Ut.type,pt=Ut.bytesPerElement,mt=at===n.INT||at===n.UNSIGNED_INT||Q.gpuType===_l;if(Q.isInterleavedBufferAttribute){let lt=Q.data,K=lt.isInterleavedBuffer===!0?lt.stride:lt.itemSize,Gt=Q.offset;if(lt.isInstancedInterleavedBuffer||lt.isInstancedBufferAttribute){for(let kt=0;kt<X.locationSize;kt++)m(X.location+kt,lt.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let kt=0;kt<X.locationSize;kt++)p(X.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let kt=0;kt<X.locationSize;kt++)v(X.location+kt,Nt/X.locationSize,at,$,K*pt,(Gt+Nt/X.locationSize*kt)*pt,mt)}else{if(Q.isInstancedBufferAttribute){for(let lt=0;lt<X.locationSize;lt++)m(X.location+lt,Q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let lt=0;lt<X.locationSize;lt++)p(X.location+lt);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let lt=0;lt<X.locationSize;lt++)v(X.location+lt,Nt/X.locationSize,at,$,Nt*pt,Nt/X.locationSize*lt*pt,mt)}}else if(V!==void 0){let $=V[nt];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(X.location,$);break;case 3:n.vertexAttrib3fv(X.location,$);break;case 4:n.vertexAttrib4fv(X.location,$);break;default:n.vertexAttrib1fv(X.location,$)}}}}S()}function C(){R();for(let L in i){let B=i[L];for(let H in B){let P=B[H];for(let G in P){let q=P[G];for(let V in q)h(q[V].object),delete q[V];delete P[G]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let B=i[L.id];for(let H in B){let P=B[H];for(let G in P){let q=P[G];for(let V in q)h(q[V].object),delete q[V];delete P[G]}}delete i[L.id]}function g(L){for(let B in i){let H=i[B];for(let P in H){let G=H[P];if(G[L.id]===void 0)continue;let q=G[L.id];for(let V in q)h(q[V].object),delete q[V];delete G[L.id]}}}function b(L){for(let B in i){let H=i[B],P=L.isInstancedMesh===!0?L.id:0,G=H[P];if(G!==void 0){for(let q in G){let V=G[q];for(let nt in V)h(V[nt].object),delete V[nt];delete G[q]}delete H[P],Object.keys(H).length===0&&delete i[B]}}}function R(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:w,enableAttribute:p,disableUnusedAttributes:S}}function Nx(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function o(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];e.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ux(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let g=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==_i&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(g!==Wn&&g!==oi&&!b&&i.convert(g)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&le("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:_,maxTextureSize:w,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:y,maxSamples:C,samples:E}}function Fx(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Jn,o=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,u){let _=f.clippingPlanes,w=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||_===null||_.length===0||r&&!p)r?h(null):l();else{let S=r?0:i,v=S*4,y=m.clippingState||null;c.value=y,y=h(_,d,v,u);for(let C=0;C!==v;++C)y[C]=e[C];m.clippingState=y,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,u,_){let w=f!==null?f.length:0,p=null;if(w!==0){if(p=c.value,_!==!0||p===null){let m=u+w*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,y=u;v!==w;++v,y+=4)a.copy(f[v]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,p}}var ka=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new oa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Re(5,5,5),r=new ri({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:As});r.uniforms.tEquirect.value=e;let a=new Ht(s,r),o=e.minFilter;return e.minFilter===qi&&(e.minFilter=zn),new _r(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},np=256,Ox=3,Bx=20,Ep=256,Ap=16,zx=3,kx=new N,Gx=new re,sc=class n{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new _r(1,10,null),this._boxMesh=new Ht(new Re(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=kx}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,d=c.autoClearColor,u=c.autoClearDepth,_=c.autoClearStencil,w=t.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,w===null&&(t.background=c.getClearColor(Gx));let p=new _r(i,s,h);return p.position.copy(o),p.update(c,t),c.autoClear=f,c.autoClearColor=d,c.autoClearDepth=u,c.autoClearStencil=_,t.background=w,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,e)),this._applyPMREM(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(np,Vh(t))}_fromTexture(t,e){t.mapping===Cs||t.mapping===Mr?this._setSize(t.image.length===0?np:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let i=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(i),i}_allocateTarget(){let t=this._cubeSize,e=ip(t,!1,!1),i=Math.log2(t)-Ox;for(let s=0;s<=i;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==e||t&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ip(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Cs||t.mapping===Mr?(this._cubemapMaterial===null&&(this._cubemapMaterial=rp()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=sp()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Vx(),this._integrationMaterial=Hx());let e=this._cubeSize,i=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Ap);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-zx)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let c=o>0?Math.log2(e)+.5*Math.log2(6/(Ep*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Wx());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,i),s.envMap.value=t.texture,this._renderCube(r,0,i)}};function ip(n,t,e){return new ka(n,{minFilter:qi,generateMipmaps:t,type:gi,colorSpace:Yr,depthBuffer:e})}function Ga(n,t,e){return new ri({name:n,uniforms:t,vertexShader:Pe.cube_vert,fragmentShader:e,side:Vn,blending:As,depthTest:!1,depthWrite:!1})}function Vx(){return Ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ep}u

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
	`)}function Hx(){return Ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ap}},`

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
	`)}function Wx(){return Ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Bx}
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
	`)}function sp(){return Ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function rp(){return Ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Xx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===pl||u===ml)if(t.has(d)){let _=t.get(d).texture;return o(_,d.mapping)}else{let _=d.image;if(_&&_.height>0){let w=new ka(_.height);return w.fromEquirectangularTexture(n,d),t.set(d,w),d.addEventListener("dispose",l),o(w.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,_=u===pl||u===ml,w=u===Cs||u===Mr;if(_||w){let p=e.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new sc(n)),p=_?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return _&&S&&S.height>0||w&&S&&c(S)?(i===null&&(i=new sc(n)),p=_?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===pl?d.mapping=Cs:u===ml&&(d.mapping=Mr),d}function c(d){let u=0,_=6;for(let w=0;w<_;w++)d[w]!==void 0&&u++;return u===_}function l(d){let u=d.target;u.removeEventListener("dispose",l);let _=t.get(u);_!==void 0&&(t.delete(u),_.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let _=e.get(u);_!==void 0&&(e.delete(u),_.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Yx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&kr("WebGLRenderer: "+i+" extension not supported."),s}}}function qx(n,t,e,i){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&t.remove(_.index);for(let p in _.attributes)t.remove(_.attributes[p]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let w=r.get(_);w&&(t.remove(w),r.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function l(_,w){return s[w.id]!==void 0||(w.addEventListener("dispose",o),s[w.id]=new WeakRef(w),a.register(w,w.id,w),e.memory.geometries++),w}function h(_){let w=_.attributes;for(let p in w)t.update(w[p],n.ARRAY_BUFFER)}function f(_){let w=_.index,p=_.attributes.position,m=0;if(p===void 0)return;let S=w!==null?w.array.length:p.array.length/3-1,v=p.count>=65535?ea:ta,y=new v(Math.ceil(S/3)*6,1),C=y.array;if(w!==null){let g=w.array;m=w.version;for(let b=0,R=0;b<S;b+=3){let T=g[b+0],L=g[b+1],B=g[b+2];C[R++]=T,C[R++]=L,C[R++]=L,C[R++]=B,C[R++]=B,C[R++]=T}}else{m=p.version;for(let g=0,b=0;g<S;g+=3){let R=g+0,T=g+1,L=g+2;C[b++]=R,C[b++]=T,C[b++]=T,C[b++]=L,C[b++]=L,C[b++]=R}}y.version=m;let E=r.get(_);E&&t.remove(E),r.set(_,y)}function d(_){let w=r.get(_);if(w){let p=_.index;p!==null&&w.version<p.version&&f(_)}else f(_);return r.get(_)}function u(){for(let _ in s){let w=s[_].deref();w!==void 0&&c(w)}}return{get:l,update:h,getWireframeAttribute:d,dispose:u}}function Zx(n,t,e){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){n.drawElements(i,d,r,f*a),e.update(d,i,1)}function l(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*a,u),e.update(d,i,u))}function h(f,d,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let w=0;for(let p=0;p<u;p++)w+=d[p];e.update(w,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Jx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Kx(n,t,e){let i=new WeakMap,s=new sn;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let R=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",R)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,w=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],v=0;u===!0&&(v=1),_===!0&&(v=2),w===!0&&(v=3);let y=o.attributes.position.count*v,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*C*4*f),g=new Kr(E,y,C,f);g.type=oi,g.needsUpdate=!0;let b=v*4;for(let T=0;T<f;T++){let L=p[T],B=m[T],H=S[T],P=y*C*4*T;for(let G=0;G<L.count;G++){let q=G*b;u===!0&&(s.fromBufferAttribute(L,G),E[P+q+0]=s.x,E[P+q+1]=s.y,E[P+q+2]=s.z,E[P+q+3]=0),_===!0&&(s.fromBufferAttribute(B,G),E[P+q+4]=s.x,E[P+q+5]=s.y,E[P+q+6]=s.z,E[P+q+7]=0),w===!0&&(s.fromBufferAttribute(H,G),E[P+q+8]=s.x,E[P+q+9]=s.y,E[P+q+10]=s.z,E[P+q+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:g,size:new ht(y,C)},i.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let u=0;for(let w=0;w<l.length;w++)u+=l[w];let _=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function $x(n,t,e,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=t.get(l,f);if(r.get(d)!==h&&(t.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var jx={[Sh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[Eh]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function Qx(n,t,e,i,s,r){let a=new $n(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new dn;h.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ye([0,2,0,0,2,0],2));let f=new $o({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ht(h,f),u=new Aa(-1,1,1,-1,0,1),_=null,w=null,p=!1,m,S=null,v=[],y=!1;this.setSize=function(C,E){a.setSize(C,E),o!==null&&o.setSize(C,E),c!==null&&c.setSize(C,E);for(let g=0;g<v.length;g++){let b=v[g];b.setSize&&b.setSize(C,E)}},this.setEffects=function(C){v=C,y=v.length>0&&v[0].isRenderPass===!0;let E=a.width,g=a.height;v.length>0&&o===null&&(o=new $n(E,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}),c=new $n(E,g,{type:gi,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&v.some(R=>R.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Xi(E,g),r===!0&&(l.format=Zi,l.type=Rs)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let R=0;R<v.length;R++){let T=v[R];T.setSize&&T.setSize(E,g),b&&T.needsDepthTexture===!0&&T.setDepthTexture&&T.setDepthTexture(l)}},this.begin=function(C,E){if(p||C.toneMapping===Ti&&v.length===0)return!1;if(S=E,E!==null){let g=E.width,b=E.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return y===!1&&C.setRenderTarget(a),m=C.toneMapping,C.toneMapping=Ti,!0},this.hasRenderPass=function(){return y},this.end=function(C,E){C.toneMapping=m,p=!0;let g=a,b=o;for(let R=0;R<v.length;R++){let T=v[R];T.enabled!==!1&&(T.render(C,b,g,E),T.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==C.outputColorSpace||w!==C.toneMapping){_=C.outputColorSpace,w=C.toneMapping,f.defines={},Le.getTransfer(_)===Ve&&(f.defines.SRGB_TRANSFER="");let R=jx[w];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,C.setRenderTarget(S),C.render(d,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var Tp=new kn,Cp=new Xi(1,1),Rp=new la(1),Pp=new Kr,Ip=new Vo,Lp=new oa,ap=[],op=[],lp=new Float32Array(16),cp=new Float32Array(9),hp=new Float32Array(4);function wr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ap[s];if(r===void 0&&(r=new Float32Array(s),ap[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function xn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function vn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ac(n,t){let e=op[t];e===void 0&&(e=new Int32Array(t),op[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function tv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ev(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2fv(this.addr,t),vn(e,t)}}function nv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;n.uniform3fv(this.addr,t),vn(e,t)}}function iv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4fv(this.addr,t),vn(e,t)}}function sv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,i))return;hp.set(i),n.uniformMatrix2fv(this.addr,!1,hp),vn(e,i)}}function rv(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,i))return;cp.set(i),n.uniformMatrix3fv(this.addr,!1,cp),vn(e,i)}}function av(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),vn(e,t)}else{if(xn(e,i))return;lp.set(i),n.uniformMatrix4fv(this.addr,!1,lp),vn(e,i)}}function ov(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2iv(this.addr,t),vn(e,t)}}function cv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3iv(this.addr,t),vn(e,t)}}function hv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4iv(this.addr,t),vn(e,t)}}function uv(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function dv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2uiv(this.addr,t),vn(e,t)}}function fv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3uiv(this.addr,t),vn(e,t)}}function pv(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4uiv(this.addr,t),vn(e,t)}}function oc(n){return n.version===0&&(n.compareFunction=Bh,n.needsUpdate=!0),n}function mv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=oc(Cp):r=Tp,e.setTexture2D(t||r,s)}function gv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ip,s)}function _v(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=oc(Rp):r=Lp,e.setTextureCube(t||r,s)}function xv(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Pp,s)}function vv(n){switch(n){case 5126:return tv;case 35664:return ev;case 35665:return nv;case 35666:return iv;case 35674:return sv;case 35675:return rv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return lv;case 35668:case 35672:return cv;case 35669:case 35673:return hv;case 5125:return uv;case 36294:return dv;case 36295:return fv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}function yv(n,t){n.uniform1fv(this.addr,t)}function Mv(n,t){let e=wr(t,this.size,2);n.uniform2fv(this.addr,e)}function Sv(n,t){let e=wr(t,this.size,3);n.uniform3fv(this.addr,e)}function bv(n,t){let e=wr(t,this.size,4);n.uniform4fv(this.addr,e)}function wv(n,t){let e=wr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ev(n,t){let e=wr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Av(n,t){let e=wr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Tv(n,t){n.uniform1iv(this.addr,t)}function Cv(n,t){n.uniform2iv(this.addr,t)}function Rv(n,t){n.uniform3iv(this.addr,t)}function Pv(n,t){n.uniform4iv(this.addr,t)}function Iv(n,t){n.uniform1uiv(this.addr,t)}function Lv(n,t){n.uniform2uiv(this.addr,t)}function Dv(n,t){n.uniform3uiv(this.addr,t)}function Nv(n,t){n.uniform4uiv(this.addr,t)}function Uv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),vn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=oc(Cp):a=Tp;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Fv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),vn(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ip,r[a])}function Ov(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),vn(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=oc(Rp):a=Lp;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Bv(n,t,e){let i=this.cache,s=t.length,r=ac(e,s);xn(i,r)||(n.uniform1iv(this.addr,r),vn(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Pp,r[a])}function zv(n){switch(n){case 5126:return yv;case 35664:return Mv;case 35665:return Sv;case 35666:return bv;case 35674:return wv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return Tv;case 35667:case 35671:return Cv;case 35668:case 35672:return Rv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Ov;case 36289:case 36303:case 36311:case 36292:return Bv}}var su=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vv(e.type)}},ru=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zv(e.type)}},au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},nu=/(\w+)(\])?(\[|\.)?/g;function up(n,t){n.seq.push(t),n.map[t.id]=t}function kv(n,t,e){let i=n.name,s=i.length;for(nu.lastIndex=0;;){let r=nu.exec(i),a=nu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){up(e,l===void 0?new su(o,n,t):new ru(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new au(o),up(e,f)),e=f}}}var br=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);kv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function dp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Gv=37297,Vv=0;function Hv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var fp=new ge;function Wv(n){Le._getMatrix(fp,Le.workingColorSpace,n);let t=`mat3( ${fp.elements.map(e=>e.toFixed(4))} )`;switch(Le.getTransfer(n)){case qr:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return le("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function pp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Hv(n.getShaderSource(t),o)}else return r}function Xv(n,t){let e=Wv(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Yv={[Sh]:"Linear",[bh]:"Reinhard",[wh]:"Cineon",[Eh]:"ACESFilmic",[Th]:"AgX",[Ch]:"Neutral",[Ah]:"Custom"};function qv(n,t){let e=Yv[t];return e===void 0?(le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ic=new N;function Zv(){Le.getLuminanceCoefficients(ic);let n=ic.x.toFixed(4),t=ic.y.toFixed(4),e=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(za).join(`
`)}function Kv(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $v(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function za(n){return n!==""}function mp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function gp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(n){return n.replace(jv,Qv)}function Qv(n,t){let e=Pe[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ou(e)}var ty=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _p(n){return n.replace(ty,ey)}function ey(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var ny={[Ra]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function iy(n){return ny[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var sy={[Mr]:"ENVMAP_MODE_REFRACTION"};function ry(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ay={[fl]:"ENVMAP_BLENDING_MULTIPLY",[Lf]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function oy(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ay[n.combine]||"ENVMAP_BLENDING_NONE"}function ly(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=iy(e),l=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=ry(e),f=oy(e),d=Jv(e),u=Kv(r),_=s.createProgram(),w,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(w=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(za).join(`
`),w.length>0&&(w+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(za).join(`
`),p.length>0&&(p+=`
`)):(w=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(za).join(`
`),p=[xp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ti?"#define TONE_MAPPING":"",e.toneMapping!==Ti?Pe.tonemapping_pars_fragment:"",e.toneMapping!==Ti?qv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pe.colorspace_pars_fragment,Xv("linearToOutputTexel",e.outputColorSpace),Zv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(za).join(`
`)),a=ou(a),a=mp(a,e),a=gp(a,e),o=ou(o),o=mp(o,e),o=gp(o,e),a=_p(a),o=_p(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,w=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,p=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+w+a,v=m+p+o,y=dp(s,s.VERTEX_SHADER,S),C=dp(s,s.FRAGMENT_SHADER,v);s.attachShader(_,y),s.attachShader(_,C),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(T){if(n.debug.checkShaderErrors){let L=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(y)||"",H=s.getShaderInfoLog(C)||"",P=L.trim(),G=B.trim(),q=H.trim(),V=!0,nt=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,y,C);else{let X=pp(s,y,"vertex"),Q=pp(s,C,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+P+`
`+X+`
`+Q)}else P!==""?le("WebGLProgram: Program Info Log:",P):(G===""||q==="")&&(nt=!1);nt&&(T.diagnostics={runnable:V,programLog:P,vertexShader:{log:G,prefix:w},fragmentShader:{log:q,prefix:p}})}s.deleteShader(y),s.deleteShader(C),g=new br(s,_),b=$v(s,_)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,Gv)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=C,this}var cy=0,lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new cu(t),e.set(t,i)),i}},cu=class{constructor(t){this.id=cy++,this.code=t,this.usedTimes=0}};function hy(n){return n===ms||n===Fa||n===Oa}function uy(n,t,e,i,s,r){let a=new $r,o=new lu,c=new Set,l=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,R,T,L,B){let H=T.fog,P=L.geometry,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?T.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,V=t.get(g.envMap||G,q),nt=d[g.type],X=i.precision;g.precision!==null&&(X=i.getMaxPrecision(g.precision),X!==g.precision&&le("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=Q!==void 0?Q.length:0,Nt=0;P.morphAttributes.position!==void 0&&(Nt=1),P.morphAttributes.normal!==void 0&&(Nt=2),P.morphAttributes.color!==void 0&&(Nt=3);let Ut,Y,at,pt;if(nt){let dt=Ri[nt];Ut=dt.vertexShader,Y=dt.fragmentShader}else{Ut=g.vertexShader,Y=g.fragmentShader;let dt=o.getVertexShaderStage(g),Qt=o.getFragmentShaderStage(g);o.update(g,dt,Qt),at=dt.id,pt=Qt.id}let mt=n.getRenderTarget(),lt=n.state.buffers.depth.getReversed(),K=L.isInstancedMesh===!0,Gt=L.isBatchedMesh===!0,kt=!!g.map,Bt=!!g.matcap,de=!!V,st=de&&V.isPMREMTexture===!0,_t=!!g.aoMap,Mt=!!g.lightMap,Lt=!!g.bumpMap&&g.wireframe===!1,Rt=!!g.normalMap,ae=!!g.displacementMap,Vt=!!g.emissiveMap,ce=!!g.metalnessMap,be=!!g.roughnessMap,fe=g.anisotropy>0,U=g.clearcoat>0,We=g.diffuseRoughness>0,Dt=g.dispersion>0,me=g.retroreflectivity>0,St=g.iridescence>0,qe=g.sheen>0,Zt=g.transmission>0,oe=fe&&!!g.anisotropyMap,A=U&&!!g.clearcoatMap,x=U&&!!g.clearcoatNormalMap,k=U&&!!g.clearcoatRoughnessMap,ct=We&&!!g.diffuseRoughnessMap,rt=St&&!!g.iridescenceMap,bt=St&&!!g.iridescenceThicknessMap,vt=qe&&!!g.sheenColorMap,j=qe&&!!g.sheenRoughnessMap,tt=!!g.specularMap,Tt=!!g.specularColorMap,I=!!g.specularIntensityMap,it=Zt&&!!g.transmissionMap,J=Zt&&!!g.thicknessMap,wt=!!g.gradientMap,gt=!!g.alphaMap,yt=g.alphaTest>0,Yt=!!g.alphaHash,he=!!g.extensions,xt=Ti;g.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(xt=n.toneMapping);let qt=st?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Jt={shaderID:nt,shaderType:g.type,shaderName:g.name,vertexShader:Ut,fragmentShader:Y,defines:g.defines,customVertexShaderID:at,customFragmentShaderID:pt,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:Gt,batchingColor:Gt&&L._colorsTexture!==null,instancing:K,instancingColor:K&&L.instanceColor!==null,instancingMorph:K&&L.morphTexture!==null,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Le.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:kt,matcap:Bt,envMap:de,envMapMode:de&&V.mapping,envMapPMREM:st,envMapMaxLod:st?qt.length-1:null,envMapSize:st?qt[0].width:null,aoMap:_t,lightMap:Mt,bumpMap:Lt,normalMap:Rt,displacementMap:ae,emissiveMap:Vt,normalMapObjectSpace:Rt&&g.normalMapType===Ff,normalMapTangentSpace:Rt&&g.normalMapType===tc,packedNormalMap:Rt&&g.normalMapType===tc&&hy(g.normalMap.format),metalnessMap:ce,roughnessMap:be,anisotropy:fe,anisotropyMap:oe,clearcoat:U,clearcoatMap:A,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:We,diffuseRoughnessMap:ct,dispersion:Dt,retroreflection:me,iridescence:St,iridescenceMap:rt,iridescenceThicknessMap:bt,sheen:qe,sheenColorMap:vt,sheenRoughnessMap:j,specularMap:tt,specularColorMap:Tt,specularIntensityMap:I,transmission:Zt,transmissionMap:it,thicknessMap:J,gradientMap:wt,opaque:g.transparent===!1&&g.blending===yr&&g.alphaToCoverage===!1,alphaMap:gt,alphaTest:yt,alphaHash:Yt,combine:g.combine,mapUv:kt&&u(g.map.channel),aoMapUv:_t&&u(g.aoMap.channel),lightMapUv:Mt&&u(g.lightMap.channel),bumpMapUv:Lt&&u(g.bumpMap.channel),normalMapUv:Rt&&u(g.normalMap.channel),displacementMapUv:ae&&u(g.displacementMap.channel),emissiveMapUv:Vt&&u(g.emissiveMap.channel),metalnessMapUv:ce&&u(g.metalnessMap.channel),roughnessMapUv:be&&u(g.roughnessMap.channel),anisotropyMapUv:oe&&u(g.anisotropyMap.channel),clearcoatMapUv:A&&u(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&u(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ct&&u(g.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&u(g.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&u(g.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&u(g.sheenColorMap.channel),sheenRoughnessMapUv:j&&u(g.sheenRoughnessMap.channel),specularMapUv:tt&&u(g.specularMap.channel),specularColorMapUv:Tt&&u(g.specularColorMap.channel),specularIntensityMapUv:I&&u(g.specularIntensityMap.channel),transmissionMapUv:it&&u(g.transmissionMap.channel),thicknessMapUv:J&&u(g.thicknessMap.channel),alphaMapUv:gt&&u(g.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Rt||fe),vertexNormals:!!P.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(kt||gt),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||P.attributes.normal===void 0&&Rt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:lt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Nt,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(dt=>dt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:kt&&g.map.isVideoTexture===!0&&Le.getTransfer(g.map.colorSpace)===Ve,decodeVideoTextureEmissive:Vt&&g.emissiveMap.isVideoTexture===!0&&Le.getTransfer(g.emissiveMap.colorSpace)===Ve,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ai,flipSided:g.side===Vn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:he&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&g.extensions.multiDraw===!0||Gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function w(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let R in g.defines)b.push(R),b.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(p(b,g),m(b,g),b.push(n.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function p(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function m(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function S(g){let b=d[g.type],R;if(b){let T=Ri[b];R=Qf.clone(T.uniforms)}else R=g.uniforms;return R}function v(g,b){let R=h.get(b);return R!==void 0?++R.usedTimes:(R=new ly(n,b,g,s),l.push(R),h.set(b,R)),R}function y(g){if(--g.usedTimes===0){let b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function C(g){o.remove(g)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:w,getUniforms:S,acquireProgram:v,releaseProgram:y,releaseShaderCache:C,programs:l,dispose:E}}function dy(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function fy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function vp(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function yp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,_,w,p,m){let S=n[t];return S===void 0?(S={id:d.id,object:d,geometry:u,material:_,materialVariant:a(d),groupOrder:w,renderOrder:d.renderOrder,z:p,group:m},n[t]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=_,S.materialVariant=a(d),S.groupOrder=w,S.renderOrder=d.renderOrder,S.z=p,S.group=m),t++,S}function c(d,u,_,w,p,m,S){S.reversedDepth===!0&&(p=-p);let v=o(d,u,_,w,p,m);_.transmission>0?i.push(v):_.transparent===!0?s.push(v):e.push(v)}function l(d,u,_,w,p,m){let S=o(d,u,_,w,p,m);_.transmission>0?i.unshift(S):_.transparent===!0?s.unshift(S):e.unshift(S)}function h(d,u){e.length>1&&e.sort(d||fy),i.length>1&&i.sort(u||vp),s.length>1&&s.sort(u||vp)}function f(){for(let d=t,u=n.length;d<u;d++){let _=n[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function py(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new yp,n.set(i,[a])):s>=r.length?(a=new yp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function my(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new re};break;case"SpotLight":e={position:new N,direction:new N,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function gy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var _y=0;function xy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function vy(n){let t=new my,e=gy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);let s=new N,r=new He,a=new He;function o(l){let h=0,f=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let u=0,_=0,w=0,p=0,m=0,S=0,v=0,y=0,C=0,E=0,g=0,b=0,R=0,T=0;l.sort(xy);for(let B=0,H=l.length;B<H;B++){let P=l[B],G=P.color,q=P.intensity,V=P.distance,nt=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ms?nt=P.shadow.map.texture:nt=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*q,f+=G.g*q,d+=G.b*q;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],q);T++}else if(P.isSunLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,$=e.get(P);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[_]=$,i.sunShadowMap[_]=nt;let Nt=Q.getViewportCount();for(let Ut=0;Ut<Nt;Ut++)i.sunShadowMatrix[w+Ut]=Q.getMatrix(Ut),i.sunShadowCascade[w+Ut]=Q._cascadeData[Ut];w+=Nt,_++}i.sun[u]=X,u++}else if(P.isDirectionalLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,$=e.get(P);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=nt,i.directionalShadowMatrix[p]=P.shadow.matrix,C++}i.directional[p]=X,p++}else if(P.isSpotLight){let X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(q),X.distance=V,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[S]=X;let Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[S]=Q.matrix,P.castShadow){let $=e.get(P);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,i.spotShadow[S]=$,i.spotShadowMap[S]=nt,g++}S++}else if(P.isRectAreaLight){let X=t.get(P);X.color.copy(G).multiplyScalar(q),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[v]=X,v++}else if(P.isPointLight){let X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){let Q=P.shadow,$=e.get(P);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=P.shadow.matrix,E++}i.point[m]=X,m++}else if(P.isHemisphereLight){let X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(q),X.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[y]=X,y++}}v>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ft.LTC_FLOAT_1,i.rectAreaLTC2=Ft.LTC_FLOAT_2):(i.rectAreaLTC1=Ft.LTC_HALF_1,i.rectAreaLTC2=Ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let L=i.hash;(L.sunLength!==u||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==S||L.rectAreaLength!==v||L.hemiLength!==y||L.numSunShadows!==_||L.numDirectionalShadows!==C||L.numPointShadows!==E||L.numSpotShadows!==g||L.numSpotMaps!==b||L.numLightProbes!==T)&&(i.sun.length=u,i.directional.length=p,i.spot.length=S,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=w,i.sunShadowCascade.length=w,i.directionalShadow.length=C,i.directionalShadowMap.length=C,i.directionalShadowMatrix.length=C,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=g,i.spotShadowMap.length=g,i.spotLightMatrix.length=g+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=T,L.sunLength=u,L.directionalLength=p,L.pointLength=m,L.spotLength=S,L.rectAreaLength=v,L.hemiLength=y,L.numSunShadows=_,L.numDirectionalShadows=C,L.numPointShadows=E,L.numSpotShadows=g,L.numSpotMaps=b,L.numLightProbes=T,i.version=_y++)}function c(l,h){let f=0,d=0,u=0,_=0,w=0,p=0,m=h.matrixWorldInverse;for(let S=0,v=l.length;S<v;S++){let y=l[S];if(y.isSunLight){let C=i.sun[f];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),f++}else if(y.isDirectionalLight){let C=i.directional[d];C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),d++}else if(y.isSpotLight){let C=i.spot[_];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),_++}else if(y.isRectAreaLight){let C=i.rectArea[w];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),C.halfWidth.set(y.width*.5,0,0),C.halfHeight.set(0,y.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),w++}else if(y.isPointLight){let C=i.point[u];C.position.setFromMatrixPosition(y.matrixWorld),C.position.applyMatrix4(m),u++}else if(y.isHemisphereLight){let C=i.hemi[p];C.direction.setFromMatrixPosition(y.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function Mp(n){let t=new vy(n),e=[],i=[],s=[];function r(f){h.camera=f,e.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){i.push(f)}function c(){t.setup(e),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function l(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function yy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Mp(n),t.set(s,[o])):r>=a.length?(o=new Mp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var My=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sy=`uniform sampler2D shadow_pass;
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
}`,by=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],wy=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Sp=new He,Ba=new N,iu=new N;function Ey(n,t,e){let i=new rs,s=new ht,r=new ht,a=new sn,o=new jo,c=new Qo,l={},h=e.maxTextureSize,f={[ps]:Vn,[Vn]:ps,[ai]:ai},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:My,fragmentShader:Sy}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let _=new dn;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let w=new Ht(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let m=this.type;this.render=function(E,g,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===ff&&(le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ra);let R=n.getRenderTarget(),T=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),B=n.state;B.setBlending(As),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let H=m!==this.type;H&&g.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=E.length;P<G;P++){let q=E[P],V=q.shadow;if(V===void 0){le("WebGLShadowMap:",q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let nt=V.getFrameExtents();s.multiply(nt),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y));let X=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===vr){if(q.isPointLight){le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $n(s.x,s.y,{format:ms,type:gi,minFilter:zn,magFilter:zn,generateMipmaps:!1}),V.map.texture.name=q.name+".shadowMap",V.map.depthTexture=new Xi(s.x,s.y,oi),V.map.depthTexture.name=q.name+".shadowMapDepth",V.map.depthTexture.format=Vi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sn,V.map.depthTexture.magFilter=Sn}else q.isPointLight?(V.map=new ka(s.x),V.map.depthTexture=new la(s.x,mi)):(V.map=new $n(s.x,s.y),V.map.depthTexture=new Xi(s.x,s.y,mi)),V.map.depthTexture.name=q.name+".shadowMap",V.map.depthTexture.format=Vi,this.type===Ra?(V.map.depthTexture.compareFunction=X?Oh:Fh,V.map.depthTexture.minFilter=zn,V.map.depthTexture.magFilter=zn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Sn,V.map.depthTexture.magFilter=Sn);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Q=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();q.isPointLight!==!0&&V.updateMatrices(q,b);let $=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Nt=0;Nt<Q;Nt++){let Ut=V.getCamera(Nt);if(q.isPointLight){let Y=V.camera,at=V.matrix,pt=q.distance||Y.far;pt!==Y.far&&(Y.far=pt,Y.updateProjectionMatrix()),Ba.setFromMatrixPosition(q.matrixWorld),Y.position.copy(Ba),iu.copy(Y.position),iu.add(by[Nt]),Y.up.copy(wy[Nt]),Y.lookAt(iu),Y.updateMatrixWorld(),at.makeTranslation(-Ba.x,-Ba.y,-Ba.z),Sp.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Sp,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Nt),n.clear();else{Nt===0&&(n.setRenderTarget(V.map),n.clear());let Y=V.getViewport(Nt);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),B.viewport(a)}i=V.getFrustum(Nt),y(g,b,Ut,q,$,this.type)}V.isPointLightShadow!==!0&&this.type===vr&&S(V,b),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(R,T,L)};function S(E,g){let b=t.update(w);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null?E.mapPass=new $n(s.x,s.y,{format:ms,type:gi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(g,null,b,d,w,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(g,null,b,u,w,null)}function v(E,g,b,R){let T=null,L=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)T=L;else if(T=b.isPointLight===!0?c:o,n.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let B=T.uuid,H=g.uuid,P=l[B];P===void 0&&(P={},l[B]=P);let G=P[H];G===void 0&&(G=T.clone(),P[H]=G,g.addEventListener("dispose",C)),T=G}if(T.visible=g.visible,T.wireframe=g.wireframe,R===vr?T.side=g.shadowSide!==null?g.shadowSide:g.side:T.side=g.shadowSide!==null?g.shadowSide:f[g.side],T.alphaMap=g.alphaMap,T.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,T.map=g.map,T.clipShadows=g.clipShadows,T.clippingPlanes=g.clippingPlanes,T.clipIntersection=g.clipIntersection,T.displacementMap=g.displacementMap,T.displacementScale=g.displacementScale,T.displacementBias=g.displacementBias,T.wireframeLinewidth=g.wireframeLinewidth,T.linewidth=g.linewidth,b.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let B=n.properties.get(T);B.light=b}return T}function y(E,g,b,R,T,L){if(E.visible===!1)return;if(E.layers.test(T)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===vr)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let P=t.update(E),G=E.material;if(Array.isArray(G)){let q=P.groups;for(let V=0,nt=q.length;V<nt;V++){let X=q[V],Q=G[X.materialIndex];if(Q&&Q.visible){let $=v(E,Q,R,L);E.onBeforeShadow(n,E,g,b,P,$,X),n.renderBufferDirect(b,null,P,$,E,X),E.onAfterShadow(n,E,g,b,P,$,X)}}}else if(G.visible){let q=v(E,G,R,L);E.onBeforeShadow(n,E,g,b,P,q,null),n.renderBufferDirect(b,null,P,q,E,null),E.onAfterShadow(n,E,g,b,P,q,null)}}let H=E.children;for(let P=0,G=H.length;P<G;P++)y(H[P],g,b,R,T,L)}function C(E){E.target.removeEventListener("dispose",C);for(let b in l){let R=l[b],T=E.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function Ay(n,t){function e(){let I=!1,it=new sn,J=null,wt=new sn(0,0,0,0);return{setMask:function(gt){J!==gt&&!I&&(n.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){I=gt},setClear:function(gt,yt,Yt,he,xt){xt===!0&&(gt*=he,yt*=he,Yt*=he),it.set(gt,yt,Yt,he),wt.equals(it)===!1&&(n.clearColor(gt,yt,Yt,he),wt.copy(it))},reset:function(){I=!1,J=null,wt.set(-1,0,0,0)}}}function i(){let I=!1,it=!1,J=null,wt=null,gt=null;return{setReversed:function(yt){if(it!==yt){let Yt=t.get("EXT_clip_control");yt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),it=yt;let he=gt;gt=null,this.setClear(he)}},getReversed:function(){return it},setTest:function(yt){yt?lt(n.DEPTH_TEST):K(n.DEPTH_TEST)},setMask:function(yt){J!==yt&&!I&&(n.depthMask(yt),J=yt)},setFunc:function(yt){if(it&&(yt=Yf[yt]),wt!==yt){switch(yt){case Po:n.depthFunc(n.NEVER);break;case Io:n.depthFunc(n.ALWAYS);break;case Lo:n.depthFunc(n.LESS);break;case ar:n.depthFunc(n.LEQUAL);break;case Do:n.depthFunc(n.EQUAL);break;case No:n.depthFunc(n.GEQUAL);break;case Uo:n.depthFunc(n.GREATER);break;case Fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}wt=yt}},setLocked:function(yt){I=yt},setClear:function(yt){gt!==yt&&(gt=yt,it&&(yt=1-yt),n.clearDepth(yt))},reset:function(){I=!1,J=null,wt=null,gt=null,it=!1}}}function s(){let I=!1,it=null,J=null,wt=null,gt=null,yt=null,Yt=null,he=null,xt=null;return{setTest:function(qt){I||(qt?lt(n.STENCIL_TEST):K(n.STENCIL_TEST))},setMask:function(qt){it!==qt&&!I&&(n.stencilMask(qt),it=qt)},setFunc:function(qt,Jt,dt){(J!==qt||wt!==Jt||gt!==dt)&&(n.stencilFunc(qt,Jt,dt),J=qt,wt=Jt,gt=dt)},setOp:function(qt,Jt,dt){(yt!==qt||Yt!==Jt||he!==dt)&&(n.stencilOp(qt,Jt,dt),yt=qt,Yt=Jt,he=dt)},setLocked:function(qt){I=qt},setClear:function(qt){xt!==qt&&(n.clearStencil(qt),xt=qt)},reset:function(){I=!1,it=null,J=null,wt=null,gt=null,yt=null,Yt=null,he=null,xt=null}}}let r=new e,a=new i,o=new s,c={},l=new WeakMap,h={},f={},d={},u=new WeakMap,_=[],w=null,p=!1,m=null,S=null,v=null,y=null,C=null,E=null,g=null,b=new re(0,0,0),R=0,T=!1,L=null,B=null,H=null,P=null,G=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,nt=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=nt>=1):X.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=nt>=2);let Q=null,$={},Nt=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),Y=new sn().fromArray(Nt),at=new sn().fromArray(Ut);function pt(I,it,J,wt){let gt=new Uint8Array(4),yt=n.createTexture();n.bindTexture(I,yt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<J;Yt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(it,0,n.RGBA,1,1,wt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(it+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return yt}let mt={};mt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),mt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),mt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(n.DEPTH_TEST),a.setFunc(ar),Lt(!1),Rt(_h),lt(n.CULL_FACE),_t(As);function lt(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function K(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function Gt(I,it){return d[I]!==it?(n.bindFramebuffer(I,it),d[I]=it,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=it),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=it),!0):!1}function kt(I,it){let J=_,wt=!1;if(I){J=u.get(it),J===void 0&&(J=[],u.set(it,J));let gt=I.textures;if(J.length!==gt.length||J[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Yt=gt.length;yt<Yt;yt++)J[yt]=n.COLOR_ATTACHMENT0+yt;J.length=gt.length,wt=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,wt=!0);wt&&n.drawBuffers(J)}function Bt(I){return w!==I?(n.useProgram(I),w=I,!0):!1}let de={[Ts]:n.FUNC_ADD,[mf]:n.FUNC_SUBTRACT,[gf]:n.FUNC_REVERSE_SUBTRACT};de[_f]=n.MIN,de[xf]=n.MAX;let st={[vf]:n.ZERO,[yf]:n.ONE,[Mf]:n.SRC_COLOR,[yh]:n.SRC_ALPHA,[Tf]:n.SRC_ALPHA_SATURATE,[Ef]:n.DST_COLOR,[bf]:n.DST_ALPHA,[Sf]:n.ONE_MINUS_SRC_COLOR,[Mh]:n.ONE_MINUS_SRC_ALPHA,[Af]:n.ONE_MINUS_DST_COLOR,[wf]:n.ONE_MINUS_DST_ALPHA,[Cf]:n.CONSTANT_COLOR,[Rf]:n.ONE_MINUS_CONSTANT_COLOR,[Pf]:n.CONSTANT_ALPHA,[If]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(I,it,J,wt,gt,yt,Yt,he,xt,qt){if(I===As){p===!0&&(K(n.BLEND),p=!1);return}if(p===!1&&(lt(n.BLEND),p=!0),I!==pf){if(I!==m||qt!==T){if((S!==Ts||C!==Ts)&&(n.blendEquation(n.FUNC_ADD),S=Ts,C=Ts),qt)switch(I){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFunc(n.ONE,n.ONE);break;case xh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case vh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",I);break}else switch(I){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",I);break}v=null,y=null,E=null,g=null,b.set(0,0,0),R=0,m=I,T=qt}return}gt=gt||it,yt=yt||J,Yt=Yt||wt,(it!==S||gt!==C)&&(n.blendEquationSeparate(de[it],de[gt]),S=it,C=gt),(J!==v||wt!==y||yt!==E||Yt!==g)&&(n.blendFuncSeparate(st[J],st[wt],st[yt],st[Yt]),v=J,y=wt,E=yt,g=Yt),(he.equals(b)===!1||xt!==R)&&(n.blendColor(he.r,he.g,he.b,xt),b.copy(he),R=xt),m=I,T=!1}function Mt(I,it){I.side===ai?K(n.CULL_FACE):lt(n.CULL_FACE);let J=I.side===Vn;it&&(J=!J),Lt(J),I.blending===yr&&I.transparent===!1?_t(As):_t(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let wt=I.stencilWrite;o.setTest(wt),wt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Vt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(n.SAMPLE_ALPHA_TO_COVERAGE):K(n.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){L!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),L=I)}function Rt(I){I!==uf?(lt(n.CULL_FACE),I!==B&&(I===_h?n.cullFace(n.BACK):I===df?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):K(n.CULL_FACE),B=I}function ae(I){I!==H&&(V&&n.lineWidth(I),H=I)}function Vt(I,it,J){I?(lt(n.POLYGON_OFFSET_FILL),(P!==it||G!==J)&&(P=it,G=J,a.getReversed()&&(it=-it,J=-J),n.polygonOffset(it,J))):K(n.POLYGON_OFFSET_FILL)}function ce(I){I?lt(n.SCISSOR_TEST):K(n.SCISSOR_TEST)}function be(I){I===void 0&&(I=n.TEXTURE0+q-1),Q!==I&&(n.activeTexture(I),Q=I)}function fe(I,it,J){J===void 0&&(Q===null?J=n.TEXTURE0+q-1:J=Q);let wt=$[J];wt===void 0&&(wt={type:void 0,texture:void 0},$[J]=wt),(wt.type!==I||wt.texture!==it)&&(Q!==J&&(n.activeTexture(J),Q=J),n.bindTexture(I,it||mt[I]),wt.type=I,wt.texture=it)}function U(){let I=$[Q];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function We(){try{n.compressedTexImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function Dt(){try{n.compressedTexImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function me(){try{n.texSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function St(){try{n.texSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function qe(){try{n.compressedTexSubImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function Zt(){try{n.compressedTexSubImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function oe(){try{n.texStorage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function A(){try{n.texStorage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function x(){try{n.texImage2D(...arguments)}catch(I){ue("WebGLState:",I)}}function k(){try{n.texImage3D(...arguments)}catch(I){ue("WebGLState:",I)}}function ct(I){return f[I]!==void 0?f[I]:n.getParameter(I)}function rt(I,it){f[I]!==it&&(n.pixelStorei(I,it),f[I]=it)}function bt(I){Y.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Y.copy(I))}function vt(I){at.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),at.copy(I))}function j(I,it){let J=l.get(it);J===void 0&&(J=new WeakMap,l.set(it,J));let wt=J.get(I);wt===void 0&&(wt=n.getUniformBlockIndex(it,I.name),n.uniformBlockBinding(it,wt,wt),J.set(I,wt))}function tt(I,it,J){let gt=l.get(it).get(I);c[gt]!==J&&(n.bindBufferBase(n.UNIFORM_BUFFER,gt,J),c[gt]=J)}function Tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,$={},d={},c={},u=new WeakMap,_=[],w=null,p=!1,m=null,S=null,v=null,y=null,C=null,E=null,g=null,b=new re(0,0,0),R=0,T=!1,L=null,B=null,H=null,P=null,G=null,Y.set(0,0,n.canvas.width,n.canvas.height),at.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:K,bindFramebuffer:Gt,drawBuffers:kt,useProgram:Bt,setBlending:_t,setMaterial:Mt,setFlipSided:Lt,setCullFace:Rt,setLineWidth:ae,setPolygonOffset:Vt,setScissorTest:ce,activeTexture:be,bindTexture:fe,unbindTexture:U,compressedTexImage2D:We,compressedTexImage3D:Dt,texImage2D:x,texImage3D:k,pixelStorei:rt,getParameter:ct,updateUBOMapping:j,uniformBlockBinding:tt,texStorage2D:oe,texStorage3D:A,texSubImage2D:me,texSubImage3D:St,compressedTexSubImage2D:qe,compressedTexSubImage3D:Zt,scissor:bt,viewport:vt,reset:Tt}}function Ty(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ht,h=new WeakMap,f=new Set,d,u=new WeakMap,_=new Set,w=new FinalizationRegistry(A=>_.delete(A)),p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(A){}function m(A,x){return p?new OffscreenCanvas(A,x):Zr("canvas")}function S(A,x,k){let ct=1,rt=oe(A);if((rt.width>k||rt.height>k)&&(ct=k/Math.max(rt.width,rt.height)),ct<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let bt=Math.floor(ct*rt.width),vt=Math.floor(ct*rt.height);d===void 0&&(d=m(bt,vt));let j=x?m(bt,vt):d;return j.width=bt,j.height=vt,j.getContext("2d").drawImage(A,0,0,bt,vt),le("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+bt+"x"+vt+")."),j}else return"data"in A&&le("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),A;return A}function v(A){return A.generateMipmaps}function y(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,x,k,ct,rt,bt=!1){if(A!==null){if(n[A]!==void 0)return n[A];le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let vt;ct&&(vt=t.get("EXT_texture_norm16"),vt||le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===n.RED&&(k===n.FLOAT&&(j=n.R32F),k===n.HALF_FLOAT&&(j=n.R16F),k===n.UNSIGNED_BYTE&&(j=n.R8),k===n.UNSIGNED_SHORT&&vt&&(j=vt.R16_EXT),k===n.SHORT&&vt&&(j=vt.R16_SNORM_EXT)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.R8UI),k===n.UNSIGNED_SHORT&&(j=n.R16UI),k===n.UNSIGNED_INT&&(j=n.R32UI),k===n.BYTE&&(j=n.R8I),k===n.SHORT&&(j=n.R16I),k===n.INT&&(j=n.R32I)),x===n.RG&&(k===n.FLOAT&&(j=n.RG32F),k===n.HALF_FLOAT&&(j=n.RG16F),k===n.UNSIGNED_BYTE&&(j=n.RG8),k===n.UNSIGNED_SHORT&&vt&&(j=vt.RG16_EXT),k===n.SHORT&&vt&&(j=vt.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RG8UI),k===n.UNSIGNED_SHORT&&(j=n.RG16UI),k===n.UNSIGNED_INT&&(j=n.RG32UI),k===n.BYTE&&(j=n.RG8I),k===n.SHORT&&(j=n.RG16I),k===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGB8UI),k===n.UNSIGNED_SHORT&&(j=n.RGB16UI),k===n.UNSIGNED_INT&&(j=n.RGB32UI),k===n.BYTE&&(j=n.RGB8I),k===n.SHORT&&(j=n.RGB16I),k===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),k===n.UNSIGNED_INT&&(j=n.RGBA32UI),k===n.BYTE&&(j=n.RGBA8I),k===n.SHORT&&(j=n.RGBA16I),k===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(k===n.UNSIGNED_SHORT&&vt&&(j=vt.RGB16_EXT),k===n.SHORT&&vt&&(j=vt.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let tt=bt?qr:Le.getTransfer(rt);k===n.FLOAT&&(j=n.RGBA32F),k===n.HALF_FLOAT&&(j=n.RGBA16F),k===n.UNSIGNED_BYTE&&(j=tt===Ve?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&vt&&(j=vt.RGBA16_EXT),k===n.SHORT&&vt&&(j=vt.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function g(A,x){let k;return A?x===null||x===mi||x===Rs?k=n.DEPTH24_STENCIL8:x===oi?k=n.DEPTH32F_STENCIL8:x===Sr&&(k=n.DEPTH24_STENCIL8,le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===mi||x===Rs?k=n.DEPTH_COMPONENT24:x===oi?k=n.DEPTH_COMPONENT32F:x===Sr&&(k=n.DEPTH_COMPONENT16),k}function b(A,x){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==Sn&&A.minFilter!==zn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=new WeakRef(A);i.get(A).__ref=x,_.add(x),w.register(A,x,x)}function T(A){let x=i.get(A).__ref;x!==void 0&&(_.delete(x),w.unregister(x))}function L(A){H(A.target)}function B(A){P(A.target)}function H(A){A.removeEventListener("dispose",L),T(A),q(A),A.isVideoTexture&&h.delete(A),A.isHTMLTexture&&f.delete(A)}function P(A){A.removeEventListener("dispose",B),T(A),nt(A)}function G(){for(let A of _){let x=A.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):H(x))}_.clear(),f.clear()}function q(A){let x=i.get(A);if(x.__webglInit===void 0)return;let k=A.source,ct=u.get(k);if(ct){let rt=ct[x.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&V(A),Object.keys(ct).length===0&&u.delete(k)}i.remove(A)}function V(A){let x=i.get(A);n.deleteTexture(x.__webglTexture);let k=A.source,ct=u.get(k);delete ct[x.__cacheKey],a.memory.textures--}function nt(A){let x=i.get(A);x.__depthDisposeCallback&&x.__depthDisposeCallback();let k=A.depthTexture;if(k&&k.renderTarget===A&&H(k),A.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(x.__webglFramebuffer[rt]))for(let bt=0;bt<x.__webglFramebuffer[rt].length;bt++)n.deleteFramebuffer(x.__webglFramebuffer[rt][bt]);else n.deleteFramebuffer(x.__webglFramebuffer[rt]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[rt])}else{if(Array.isArray(x.__webglFramebuffer))for(let rt=0;rt<x.__webglFramebuffer.length;rt++)n.deleteFramebuffer(x.__webglFramebuffer[rt]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let rt=0;rt<x.__webglColorRenderbuffer.length;rt++)x.__webglColorRenderbuffer[rt]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[rt]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ct=A.textures;for(let rt=0,bt=ct.length;rt<bt;rt++){let vt=i.get(ct[rt]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),a.memory.textures--),i.remove(ct[rt])}i.remove(A)}let X=0;function Q(){X=0}function $(){return X}function Nt(A){X=A}function Ut(){let A=X;return A>=s.maxTextures&&le("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,A}function Y(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.mipmapsAutoUpdate),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function at(A,x){let k=i.get(A);if(A.isVideoTexture&&qe(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let ct=A.image;if(ct===null)le("WebGLRenderer: Texture marked for update but no image data found.");else if(ct.complete===!1)le("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(k,A,x);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function pt(A,x){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Mt(k,A,x);return}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function mt(A,x){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Mt(k,A,x);return}e.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function lt(A,x){let k=i.get(A);if(A.version>0&&k.__version!==A.version){Lt(k,A,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}let K={[Oo]:n.REPEAT,[bi]:n.CLAMP_TO_EDGE,[Bo]:n.MIRRORED_REPEAT},Gt={[Sn]:n.NEAREST,[Nf]:n.NEAREST_MIPMAP_NEAREST,[Ia]:n.NEAREST_MIPMAP_LINEAR,[zn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[qi]:n.LINEAR_MIPMAP_LINEAR},kt={[Bf]:n.NEVER,[Bh]:n.ALWAYS,[zf]:n.LESS,[Fh]:n.LEQUAL,[kf]:n.EQUAL,[Oh]:n.GEQUAL,[Gf]:n.GREATER,[Vf]:n.NOTEQUAL};function Bt(A,x){if(x.type===oi&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===zn||x.magFilter===gl||x.magFilter===Ia||x.magFilter===qi||x.minFilter===zn||x.minFilter===gl||x.minFilter===Ia||x.minFilter===qi)&&le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,K[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,K[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,K[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,Gt[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,Gt[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,kt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Sn||x.minFilter!==Ia&&x.minFilter!==qi||x.type===oi&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function de(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",L),R(x));let ct=x.source,rt=u.get(ct);rt===void 0&&(rt={},u.set(ct,rt));let bt=Y(x);if(bt!==A.__cacheKey){rt[bt]===void 0&&(rt[bt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),rt[bt].usedTimes++;let vt=rt[A.__cacheKey];vt!==void 0&&(rt[A.__cacheKey].usedTimes--,vt.usedTimes===0&&V(x)),A.__cacheKey=bt,A.__webglTexture=rt[bt].texture}return k}function st(A,x,k){return Math.floor(Math.floor(A/k)/x)}function _t(A,x,k,ct){let bt=A.updateRanges;if(bt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,k,ct,x.data);else{bt.sort((I,it)=>I.start-it.start);let vt=0;for(let I=1;I<bt.length;I++){let it=bt[vt],J=bt[I],wt=it.start+it.count,gt=st(J.start,x.width,4),yt=st(it.start,x.width,4);J.start<=wt+1&&gt===yt&&st(J.start+J.count-1,x.width,4)===gt?it.count=Math.max(it.count,J.start+J.count-it.start):(++vt,bt[vt]=J)}bt.length=vt+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),Tt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let I=0,it=bt.length;I<it;I++){let J=bt[I],wt=Math.floor(J.start/4),gt=Math.ceil(J.count/4),yt=wt%x.width,Yt=Math.floor(wt/x.width),he=gt,xt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,yt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Yt),e.texSubImage2D(n.TEXTURE_2D,0,yt,Yt,he,xt,k,ct,x.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Tt)}}function Mt(A,x,k){let ct=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ct=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ct=n.TEXTURE_3D);let rt=de(A,x),bt=x.source;e.bindTexture(ct,A.__webglTexture,n.TEXTURE0+k);let vt=i.get(bt);if(bt.version!==vt.__version||rt===!0){if(e.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap!="undefined"&&x.image instanceof ImageBitmap)===!1){let xt=Le.getPrimaries(Le.workingColorSpace),qt=x.colorSpace===Ji?null:Le.getPrimaries(x.colorSpace),Jt=x.colorSpace===Ji||xt===qt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let tt=S(x.image,!1,s.maxTextureSize);tt=Zt(x,tt);let Tt=r.convert(x.format,x.colorSpace),I=r.convert(x.type),it=E(x.internalFormat,Tt,I,x.normalized,x.colorSpace,x.isVideoTexture);Bt(ct,x);let J,wt=x.mipmaps,gt=x.isVideoTexture!==!0,yt=vt.__version===void 0||rt===!0,Yt=bt.dataReady,he=b(x,tt);if(x.isDepthTexture)it=g(x.format===Zi,x.type),yt&&(gt?e.texStorage2D(n.TEXTURE_2D,1,it,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,it,tt.width,tt.height,0,Tt,I,null));else if(x.isDataTexture)if(wt.length>0){gt&&yt&&e.texStorage2D(n.TEXTURE_2D,he,it,wt[0].width,wt[0].height);for(let xt=0,qt=wt.length;xt<qt;xt++)J=wt[xt],gt?Yt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,J.width,J.height,Tt,I,J.data):e.texImage2D(n.TEXTURE_2D,xt,it,J.width,J.height,0,Tt,I,J.data);x.generateMipmaps=!1}else gt?(yt&&e.texStorage2D(n.TEXTURE_2D,he,it,tt.width,tt.height),Yt&&_t(x,tt,Tt,I)):e.texImage2D(n.TEXTURE_2D,0,it,tt.width,tt.height,0,Tt,I,tt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){gt&&yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,he,it,wt[0].width,wt[0].height,tt.depth);for(let xt=0,qt=wt.length;xt<qt;xt++)if(J=wt[xt],x.format!==_i)if(Tt!==null)if(gt){if(Yt)if(x.layerUpdates.size>0){let Jt=Kh(J.width,J.height,x.format,x.type);for(let dt of x.layerUpdates){let Qt=J.data.subarray(dt*Jt/J.data.BYTES_PER_ELEMENT,(dt+1)*Jt/J.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,dt,J.width,J.height,1,Tt,Qt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,tt.depth,Tt,J.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xt,it,J.width,J.height,tt.depth,0,J.data,0,0);else le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?Yt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,xt,0,0,0,J.width,J.height,tt.depth,Tt,I,J.data):e.texImage3D(n.TEXTURE_2D_ARRAY,xt,it,J.width,J.height,tt.depth,0,Tt,I,J.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{gt&&yt&&e.texStorage2D(n.TEXTURE_2D,he,it,wt[0].width,wt[0].height);for(let xt=0,qt=wt.length;xt<qt;xt++)J=wt[xt],x.format!==_i?Tt!==null?gt?Yt&&e.compressedTexSubImage2D(n.TEXTURE_2D,xt,0,0,J.width,J.height,Tt,J.data):e.compressedTexImage2D(n.TEXTURE_2D,xt,it,J.width,J.height,0,J.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Yt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,J.width,J.height,Tt,I,J.data):e.texImage2D(n.TEXTURE_2D,xt,it,J.width,J.height,0,Tt,I,J.data)}else if(x.isDataArrayTexture)if(gt){if(yt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,he,it,tt.width,tt.height,tt.depth),Yt)if(x.layerUpdates.size>0){let xt=Kh(tt.width,tt.height,x.format,x.type);for(let qt of x.layerUpdates){let Jt=tt.data.subarray(qt*xt/tt.data.BYTES_PER_ELEMENT,(qt+1)*xt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,qt,tt.width,tt.height,1,Tt,I,Jt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,Tt,I,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,it,tt.width,tt.height,tt.depth,0,Tt,I,tt.data);else if(x.isData3DTexture)gt?(yt&&e.texStorage3D(n.TEXTURE_3D,he,it,tt.width,tt.height,tt.depth),Yt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,Tt,I,tt.data)):e.texImage3D(n.TEXTURE_3D,0,it,tt.width,tt.height,tt.depth,0,Tt,I,tt.data);else if(x.isFramebufferTexture){if(yt)if(gt)e.texStorage2D(n.TEXTURE_2D,he,it,tt.width,tt.height);else{let xt=tt.width,qt=tt.height;for(let Jt=0;Jt<he;Jt++)e.texImage2D(n.TEXTURE_2D,Jt,it,xt,qt,0,Tt,I,null),xt>>=1,qt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let xt=n.canvas;if(xt.hasAttribute("layoutsubtree")||xt.setAttribute("layoutsubtree","true"),tt.parentNode!==xt){xt.appendChild(tt),f.add(x),xt.onpaint=qt=>{let Jt=qt.changedElements;for(let dt of f)Jt.includes(dt.image)&&(dt.needsUpdate=!0)},xt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let Jt=n.RGBA,dt=n.RGBA,Qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Jt,dt,Qt,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(wt.length>0){if(gt&&yt){let xt=oe(wt[0]);e.texStorage2D(n.TEXTURE_2D,he,it,xt.width,xt.height)}for(let xt=0,qt=wt.length;xt<qt;xt++)J=wt[xt],gt?Yt&&e.texSubImage2D(n.TEXTURE_2D,xt,0,0,Tt,I,J):e.texImage2D(n.TEXTURE_2D,xt,it,Tt,I,J);x.generateMipmaps=!1}else if(gt){if(yt){let xt=oe(tt);e.texStorage2D(n.TEXTURE_2D,he,it,xt.width,xt.height)}Yt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Tt,I,tt)}else e.texImage2D(n.TEXTURE_2D,0,it,Tt,I,tt);v(x)&&x.mipmapsAutoUpdate===!0&&y(ct),vt.__version=bt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Lt(A,x,k){if(x.image.length!==6)return;let ct=de(A,x),rt=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let bt=i.get(rt);if(rt.version!==bt.__version||ct===!0){e.activeTexture(n.TEXTURE0+k);let vt=Le.getPrimaries(Le.workingColorSpace),j=x.colorSpace===Ji?null:Le.getPrimaries(x.colorSpace),tt=x.colorSpace===Ji||vt===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Tt=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,it=[];for(let dt=0;dt<6;dt++)!Tt&&!I?it[dt]=S(x.image[dt],!0,s.maxCubemapSize):it[dt]=I?x.image[dt].image:x.image[dt],it[dt]=Zt(x,it[dt]);let J=it[0],wt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),yt=E(x.internalFormat,wt,gt,x.normalized,x.colorSpace),Yt=x.isVideoTexture!==!0,he=bt.__version===void 0||ct===!0,xt=rt.dataReady,qt=b(x,J);Bt(n.TEXTURE_CUBE_MAP,x);let Jt;if(x.isDepthTexture){if(yt=g(x.format===Zi,x.type),he)if(Yt)e.texStorage2D(n.TEXTURE_CUBE_MAP,1,yt,J.width,J.height);else for(let dt=0;dt<6;dt++)e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,J.width,J.height,0,wt,gt,null)}else if(Tt){Yt&&he&&e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,yt,J.width,J.height);for(let dt=0;dt<6;dt++){Jt=it[dt].mipmaps;for(let Qt=0;Qt<Jt.length;Qt++){let $t=Jt[Qt];x.format!==_i?wt!==null?Yt?xt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt,0,0,$t.width,$t.height,wt,$t.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt,yt,$t.width,$t.height,0,$t.data):le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt,0,0,$t.width,$t.height,wt,gt,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt,yt,$t.width,$t.height,0,wt,gt,$t.data)}}}else{if(Jt=x.mipmaps,Yt&&he){Jt.length>0&&qt++;let dt=oe(it[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,qt,yt,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(I){Yt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,it[dt].width,it[dt].height,wt,gt,it[dt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,it[dt].width,it[dt].height,0,wt,gt,it[dt].data);for(let Qt=0;Qt<Jt.length;Qt++){let ye=Jt[Qt].image[dt].image;Yt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt+1,0,0,ye.width,ye.height,wt,gt,ye.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt+1,yt,ye.width,ye.height,0,wt,gt,ye.data)}}else{Yt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,wt,gt,it[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,yt,wt,gt,it[dt]);for(let Qt=0;Qt<Jt.length;Qt++){let $t=Jt[Qt];Yt?xt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt+1,0,0,wt,gt,$t.image[dt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Qt+1,yt,wt,gt,$t.image[dt])}}}v(x)&&x.mipmapsAutoUpdate===!0&&y(n.TEXTURE_CUBE_MAP),bt.__version=rt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Rt(A,x,k,ct,rt,bt){let vt=r.convert(k.format,k.colorSpace),j=r.convert(k.type),tt=E(k.internalFormat,vt,j,k.normalized,k.colorSpace),Tt=i.get(x),I=i.get(k);if(I.__renderTarget=x,!Tt.__hasExternalTextures){let it=Math.max(1,x.width>>bt),J=Math.max(1,x.height>>bt);rt===n.TEXTURE_3D||rt===n.TEXTURE_2D_ARRAY?e.texImage3D(rt,bt,tt,it,J,x.depth,0,vt,j,null):e.texImage2D(rt,bt,tt,it,J,0,vt,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),St(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ct,rt,I.__webglTexture,0,me(x)):(rt===n.TEXTURE_2D||rt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ct,rt,I.__webglTexture,bt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(A,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){let ct=x.depthTexture,rt=ct&&ct.isDepthTexture?ct.type:null,bt=g(x.stencilBuffer,rt),vt=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;St(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(x),bt,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(x),bt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,bt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,vt,n.RENDERBUFFER,A)}else{let ct=x.textures;for(let rt=0;rt<ct.length;rt++){let bt=ct[rt],vt=r.convert(bt.format,bt.colorSpace),j=r.convert(bt.type),tt=E(bt.internalFormat,vt,j,bt.normalized,bt.colorSpace);St(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me(x),tt,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,me(x),tt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,tt,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(A,x,k){let ct=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=i.get(x.depthTexture);rt.__renderTarget=x;let bt=ct?x.depthTexture.image[0]:x.depthTexture.image;(!rt.__webglTexture||bt.width!==x.width||bt.height!==x.height)&&(bt.width=x.width,bt.height=x.height,x.depthTexture.needsUpdate=!0),ct?lt(x.depthTexture,0):at(x.depthTexture,0);let vt=rt.__webglTexture,j=me(x),tt=ct?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,Tt=x.depthTexture.format===Zi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Vi)St(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,tt,vt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,tt,vt,0);else if(x.depthTexture.format===Zi)St(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Tt,tt,vt,0,j):n.framebufferTexture2D(n.FRAMEBUFFER,Tt,tt,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(A){let x=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let ct=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ct){let rt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ct.removeEventListener("dispose",rt)};ct.addEventListener("dispose",rt),x.__depthDisposeCallback=rt}x.__boundDepthTexture=ct}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ct=0;ct<6;ct++)Vt(x.__webglFramebuffer[ct],A,ct);else A.texture.mipmaps.length>0?Vt(x.__webglFramebuffer[0],A,0):Vt(x.__webglFramebuffer,A,0);else if(k){x.__webglDepthbuffer=[];for(let ct=0;ct<6;ct++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ct]),x.__webglDepthbuffer[ct]===void 0)x.__webglDepthbuffer[ct]=n.createRenderbuffer(),ae(x.__webglDepthbuffer[ct],A,!1);else{let rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=x.__webglDepthbuffer[ct];n.bindRenderbuffer(n.RENDERBUFFER,bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,bt)}}else if(A.texture.mipmaps.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ae(x.__webglDepthbuffer,A,!1);else{let rt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,bt),n.framebufferRenderbuffer(n.FRAMEBUFFER,rt,n.RENDERBUFFER,bt)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function be(A,x,k){let ct=i.get(A);x!==void 0&&Rt(ct.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&ce(A)}function fe(A){let x=A.texture,k=i.get(A),ct=i.get(x);A.addEventListener("dispose",B),R(A);let rt=A.textures,bt=A.isWebGLCubeRenderTarget===!0,vt=rt.length>1;if(vt||(ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture()),ct.__version=x.version,a.memory.textures++),bt){k.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps.length>0){k.__webglFramebuffer[j]=[];for(let tt=0;tt<x.mipmaps.length;tt++)k.__webglFramebuffer[j][tt]=n.createFramebuffer()}else k.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[j]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(vt)for(let j=0,tt=rt.length;j<tt;j++){let Tt=i.get(rt[j]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&St(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let j=0;j<rt.length;j++){let tt=rt[j];k.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[j]);let Tt=r.convert(tt.format,tt.colorSpace),I=r.convert(tt.type),it=E(tt.internalFormat,Tt,I,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),J=me(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,J,it,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,k.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(bt){e.bindTexture(n.TEXTURE_CUBE_MAP,ct.__webglTexture),Bt(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Rt(k.__webglFramebuffer[j][tt],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else Rt(k.__webglFramebuffer[j],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);v(x)?y(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(vt){for(let j=0,tt=rt.length;j<tt;j++){let Tt=rt[j],I=i.get(Tt),it=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(it=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,I.__webglTexture),Bt(it,Tt),Rt(k.__webglFramebuffer,A,Tt,n.COLOR_ATTACHMENT0+j,it,0),v(Tt)&&y(it)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,ct.__webglTexture),Bt(j,x),x.mipmaps.length>0)for(let tt=0;tt<x.mipmaps.length;tt++)Rt(k.__webglFramebuffer[tt],A,x,n.COLOR_ATTACHMENT0,j,tt);else Rt(k.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,j,0);v(x)?y(j):x.mipmaps.length>0&&n.texParameteri(j,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}A.depthBuffer&&ce(A)}function U(A){let x=A.textures;for(let k=0,ct=x.length;k<ct;k++){let rt=x[k];if(v(rt)&&rt.mipmapsAutoUpdate===!0){let bt=C(A),vt=i.get(rt).__webglTexture;e.bindTexture(bt,vt),y(bt),e.unbindTexture()}}}let We=[];function Dt(A){if(A.samples>0){if(St(A)===!1){let x=A.textures,k=A.width,ct=A.height,rt=n.COLOR_BUFFER_BIT,bt=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,vt=i.get(A),j=x.length>1;if(j)for(let Tt=0;Tt<x.length;Tt++)e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),A.texture.mipmaps.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Tt=0;Tt<x.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(rt|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(rt|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Tt]);let I=i.get(x[Tt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,I,0)}n.blitFramebuffer(0,0,k,ct,0,0,k,ct,rt,n.NEAREST),c===!0&&(We.length=0,We.push(n.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&We.push(bt),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,We))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let Tt=0;Tt<x.length;Tt++){e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.RENDERBUFFER,vt.__webglColorRenderbuffer[Tt]);let I=i.get(x[Tt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,vt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Tt,n.TEXTURE_2D,I,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function me(A){return Math.min(s.maxSamples,A.samples)}function St(A){let x=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function qe(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function Zt(A,x){let k=A.colorSpace,ct=A.format,rt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Yr&&k!==Ji&&(Le.getTransfer(k)===Ve?(ct!==_i||rt!==Wn)&&le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",k)),x}function oe(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Ut,this.resetTextureUnits=Q,this.getTextureUnits=$,this.setTextureUnits=Nt,this.setTexture2D=at,this.setTexture2DArray=pt,this.setTexture3D=mt,this.setTextureCube=lt,this.rebindTextures=be,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=St,this.dispose=G}function Cy(n,t){function e(i,s=Ji){let r,a=Le.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===xl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ph)return n.BYTE;if(i===Ih)return n.SHORT;if(i===Sr)return n.UNSIGNED_SHORT;if(i===_l)return n.INT;if(i===mi)return n.UNSIGNED_INT;if(i===oi)return n.FLOAT;if(i===gi)return n.HALF_FLOAT;if(i===Nh)return n.ALPHA;if(i===Uh)return n.RGB;if(i===_i)return n.RGBA;if(i===Vi)return n.DEPTH_COMPONENT;if(i===Zi)return n.DEPTH_STENCIL;if(i===yl)return n.RED;if(i===Ml)return n.RED_INTEGER;if(i===ms)return n.RG;if(i===Sl)return n.RG_INTEGER;if(i===bl)return n.RGBA_INTEGER;if(i===La||i===Da||i===Na||i===Ua)if(a===Ve)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===La)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===La)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Da)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===El||i===Al||i===Tl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===El)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Fa||i===Dl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Rl)return a===Ve?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Il)return r.COMPRESSED_R11_EAC;if(i===Ll)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Fa)return r.COMPRESSED_RG11_EAC;if(i===Dl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nl||i===Ul||i===Fl||i===Ol||i===Bl||i===zl||i===kl||i===Gl||i===Vl||i===Hl||i===Wl||i===Xl||i===Yl||i===ql)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Nl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ul)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ol)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===kl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Gl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yl)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ql)return a===Ve?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zl||i===Jl||i===Kl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Zl)return a===Ve?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$l||i===jl||i===Oa||i===Ql)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$l)return r.COMPRESSED_RED_RGTC1_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ql)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Ry=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Py=`
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

}`,hu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ri({vertexShader:Ry,fragmentShader:Py,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ht(new Gn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},uu=class extends pi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,_=null,w=typeof XRWebGLBinding!="undefined",p=new hu,m={},S=e.getContextAttributes(),v=null,y=null,C=[],E=[],g=new ht,b=null,R=null,T=new Bn;T.viewport=new sn;let L=new Bn;L.viewport=new sn;let B=[T,L],H=new ul,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=C[Y];return at===void 0&&(at=new ur,C[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=C[Y];return at===void 0&&(at=new ur,C[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=C[Y];return at===void 0&&(at=new ur,C[Y]=at),at.getHandSpace()};function q(Y){let at=E.indexOf(Y.inputSource);if(at===-1)return;let pt=C[at];pt!==void 0&&(pt.update(Y.inputSource,Y.frame,l||a),pt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",nt);for(let Y=0;Y<C.length;Y++){let at=E[Y];at!==null&&(E[Y]=null,C[Y].disconnect(at))}P=null,G=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(v),u=null,d=null,f=null,s=null,y=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(g.width,g.height,!1),R!==null){let Y=R.camera;Y.fov=R.fov,Y.zoom=R.zoom,Y.updateProjectionMatrix(),R=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&w&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(v=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",nt),S.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(g),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,mt=null,lt=null;S.depth&&(lt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,pt=S.stencil?Zi:Vi,mt=S.stencil?Rs:mi);let K={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(K),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new $n(d.textureWidth,d.textureHeight,{format:_i,type:Wn,depthTexture:new Xi(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let pt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,pt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new $n(u.framebufferWidth,u.framebufferHeight,{format:_i,type:Wn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(Y){for(let at=0;at<Y.removed.length;at++){let pt=Y.removed[at],mt=E.indexOf(pt);mt>=0&&(E[mt]=null,C[mt].disconnect(pt))}for(let at=0;at<Y.added.length;at++){let pt=Y.added[at],mt=E.indexOf(pt);if(mt===-1){for(let K=0;K<C.length;K++)if(K>=E.length){E.push(pt),mt=K;break}else if(E[K]===null){E[K]=pt,mt=K;break}if(mt===-1)break}let lt=C[mt];lt&&lt.connect(pt)}}function X(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,pt=Y.far;p.texture!==null&&(p.depthNear>0&&(at=p.depthNear),p.depthFar>0&&(pt=p.depthFar)),H.near=L.near=T.near=at,H.far=L.far=T.far=pt,(P!==H.near||G!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),P=H.near,G=H.far),H.layers.mask=Y.layers.mask|6,T.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let mt=Y.parent,lt=H.cameras;X(H,mt);for(let K=0;K<lt.length;K++)X(lt[K],mt);H.projectionMatrix.copy(T.projectionMatrix),H.projectionMatrixInverse.copy(T.projectionMatrixInverse),R===null&&Y.isPerspectiveCamera&&(R={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,H,mt)};function Q(Y,at,pt){pt===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(pt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(Y){return m[Y]};let $=null;function Nt(Y,at){if(h=at.getViewerPose(l||a),_=at,h!==null){let pt=h.views;u!==null&&(t.setRenderTargetFramebuffer(y,u.framebuffer),t.setRenderTarget(y));let mt=!1;pt.length!==H.cameras.length&&(H.cameras.length=0,mt=!0);for(let kt=0;kt<pt.length;kt++){let Bt=pt[kt],de=null;if(u!==null)de=u.getViewport(Bt);else{let _t=f.getViewSubImage(d,Bt);de=_t.viewport,kt===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let st=B[kt];st===void 0&&(st=new Bn,st.layers.enable(kt),st.viewport=new sn,B[kt]=st),st.matrix.fromArray(Bt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Bt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(de.x,de.y,de.width,de.height),kt===0&&(H.matrix.copy(st.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),mt===!0&&H.cameras.push(st)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){f=i.getBinding();let kt=f.getDepthInformation(pt[0]);kt&&kt.isValid&&kt.texture&&p.init(kt,s.renderState)}if(lt&&lt.includes("camera-access")&&w){t.state.unbindTexture(),f=i.getBinding();for(let kt=0;kt<pt.length;kt++){let Bt=pt[kt].camera;if(Bt){let de=m[Bt];de||(de=new ca,m[Bt]=de);let st=f.getCameraImage(Bt);de.sourceTexture=st}}}}for(let pt=0;pt<C.length;pt++){let mt=E[pt],lt=C[pt];mt!==null&&lt!==void 0&&lt.update(mt,at,l||a)}$&&$(Y,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),_=null}let Ut=new bp;Ut.setAnimationLoop(Nt),this.setAnimationLoop=function(Y){$=Y},this.dispose=function(){}}},Iy=new He,Dp=new ge;Dp.set(-1,0,0,0,1,0,0,0,1);function Ly(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,qh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,v,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),w(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=t.get(m),v=S.envMap,y=S.envMapRotation;v&&(p.envMap.value=v,p.envMapRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function w(p,m){let S=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dy(n,t,e,i){let s={},r={};function a(S,v){let y=v.program;i.uniformBlockBinding(S,y,s[S.id])}function o(S,v){let y=s[S.id];y===void 0&&(_(S),y=c(S),s[S.id]=y,S.addEventListener("dispose",p));let C=v.program;i.updateUBOMapping(S,C);let E=t.render.frame;r[S.id]!==E&&(l(S),r[S.id]=E)}function c(S){let v=n.createBuffer(),y=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,y,C),n.bindBuffer(n.UNIFORM_BUFFER,null),v}function l(S){let v=s[S.id],y=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,g=y.length;E<g;E++){let b=y[E];if(Array.isArray(b))for(let R=0,T=b.length;R<T;R++)h(b[R],E,R,C);else h(b,E,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,v,y,C){if(d(S,v,y,C)===!0){let E=S.__offset,g=S.value;if(Array.isArray(g)){let b=0;for(let R=0;R<g.length;R++){let T=g[R],L=w(T,!0);f(T,S.__data,b),b+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,E,S.__data)}}function f(S,v,y){typeof S=="number"||typeof S=="boolean"?v[y]=S:S.isMatrix3?(v[y]=S.elements[0],v[y+1]=S.elements[1],v[y+2]=S.elements[2],v[y+3]=0,v[y+4]=S.elements[3],v[y+5]=S.elements[4],v[y+6]=S.elements[5],v[y+7]=0,v[y+8]=S.elements[6],v[y+9]=S.elements[7],v[y+10]=S.elements[8],v[y+11]=0):ArrayBuffer.isView(S)?v.set(S.subarray(0,v.length-y),y):S.toArray(v,y)}function d(S,v,y,C){let E=S.value,g=v+"_"+y;if(Array.isArray(E)){C[g]===void 0&&(C[g]=[]);let b=C[g],R=!1;for(let T=0;T<E.length;T++)u(E[T],b,T)===!0&&(R=!0);return R}return u(E,C,g)}function u(S,v,y){if(v[y]===void 0)return typeof S=="number"||typeof S=="boolean"?v[y]=S:ArrayBuffer.isView(S)?v[y]=S.slice():v[y]=S.clone(),!0;{let C=v[y];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return v[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(C.equals(S)===!1)return C.copy(S),!0}}return!1}function _(S){let v=S.uniforms,y=0,C=16;for(let g=0,b=v.length;g<b;g++){let R=Array.isArray(v[g])?v[g]:[v[g]];for(let T=0,L=R.length;T<L;T++){let B=R[T],H=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(v[g])||Array.isArray(B.value),G=y;for(let V=0,nt=H.length;V<nt;V++){let X=H[V],Q=w(X,P),$=y%C,Nt=$%Q.boundary,Ut=$+Nt;y+=Nt,Ut!==0&&C-Ut<Q.storage&&(y+=C-Ut),V===0&&(G=y),y+=Q.storage}let q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new q((y-G)/Float32Array.BYTES_PER_ELEMENT),B.__offset=G}}let E=y%C;return E>0&&(y+=C-E),S.__size=y,S.__cache={},this}function w(S,v){let y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):le("WebGLRenderer: Unsupported uniform value type.",S),v===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){let v=S.target;v.removeEventListener("dispose",p),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var Ny=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function Uy(){return Ci===null&&(Ci=new sa(Ny,16,16,ms,gi),Ci.name="DFG_LUT",Ci.minFilter=zn,Ci.magFilter=zn,Ci.wrapS=bi,Ci.wrapT=bi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var rc=class{constructor(t={}){let{canvas:e=Hf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Wn}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let w=u,p=new Set([bl,Sl,Ml]),m=new Set([Wn,mi,Sr,Rs,xl,vl]),S=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},C=null,E=null,g=[],b=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,L=!1,B=null,H=null,P=null,G=null;this._outputColorSpace=An;let q=0,V=0,nt=null,X=-1,Q=null,$=new sn,Nt=new sn,Ut=null,Y=new re(0),at=0,pt=e.width,mt=e.height,lt=1,K=null,Gt=null,kt=new sn(0,0,pt,mt),Bt=new sn(0,0,pt,mt),de=!1,st=new rs,_t=new Wo,Mt=!1,Lt=!1,Rt=new He,ae=new N,Vt=new sn,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},be=!1;function fe(){return nt===null?lt:1}let U=i;function We(M,D){return e.getContext(M,D)}let Dt,me,St,qe,Zt,oe,A,x,k,ct,rt,bt,vt,j,tt,Tt,I,it,J,wt,gt,yt,Yt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",Jt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),U===null){let D="webgl2";if(U=We(D,M),U===null)throw We(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(M){throw e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),ue("WebGLRenderer: "+M.message),M}function he(){Dt=new Yx(U),Dt.init(),gt=new Cy(U,Dt),me=new Ux(U,Dt,t,gt),St=new Ay(U,Dt),me.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),H=U.createFramebuffer(),P=U.createFramebuffer(),G=U.createFramebuffer(),qe=new Jx(U),Zt=new dy,oe=new Ty(U,Dt,St,Zt,me,gt,qe),A=new Xx(T),x=new $0(U),yt=new Dx(U,x),k=new qx(U,x,qe,yt),ct=new $x(U,k,x,yt,qe),it=new Kx(U,me,oe),tt=new Fx(Zt),rt=new uy(T,A,Dt,me,yt,tt),bt=new Ly(T,Zt),vt=new py,j=new yy(Dt),I=new Lx(T,A,St,ct,_,c),Tt=new Ey(T,ct,me),Yt=new Dy(U,qe,me,St),J=new Nx(U,Dt,qe),wt=new Zx(U,Dt,qe),qe.programs=rt.programs,T.capabilities=me,T.extensions=Dt,T.properties=Zt,T.renderLists=vt,T.shadowMap=Tt,T.state=St,T.info=qe}w!==Wn&&(R=new Qx(w,e.width,e.height,o,s,r));let xt=new uu(T,U);this.xr=xt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=Dt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Dt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(M){M!==void 0&&(lt=M,this.setSize(pt,mt,!1))},this.getSize=function(M){return M.set(pt,mt)},this.setSize=function(M,D,W=!0){if(xt.isPresenting){le("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=M,mt=D,e.width=Math.floor(M*lt),e.height=Math.floor(D*lt),W===!0&&(e.style.width=M+"px",e.style.height=D+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(pt*lt,mt*lt).floor()},this.setDrawingBufferSize=function(M,D,W){pt=M,mt=D,lt=W,e.width=Math.floor(M*W),e.height=Math.floor(D*W),this.setViewport(0,0,M,D)},this.setEffects=function(M){if(w===Wn){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let D=0;D<M.length;D++)if(M[D].isOutputPass===!0){le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy($)},this.getViewport=function(M){return M.copy(kt)},this.setViewport=function(M,D,W,z){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,D,W,z),St.viewport($.copy(kt).multiplyScalar(fe()).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,D,W,z){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,D,W,z),St.scissor(Nt.copy(Bt).multiplyScalar(fe()).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){St.setScissorTest(de=M)},this.setOpaqueSort=function(M){K=M},this.setTransparentSort=function(M){Gt=M},this.getClearColor=function(M){return M.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(M=!0,D=!0,W=!0){let z=0;if(M){let O=!1;if(nt!==null){let At=nt.texture.format;O=p.has(At)}if(O){let At=nt.texture.type,zt=m.has(At),Et=I.getClearColor(),Ct=I.getClearAlpha(),Ot=Et.r,te=Et.g,Se=Et.b;zt?(S[0]=Ot,S[1]=te,S[2]=Se,S[3]=Ct,U.clearBufferuiv(U.COLOR,0,S)):(v[0]=Ot,v[1]=te,v[2]=Se,v[3]=Ct,U.clearBufferiv(U.COLOR,0,v))}else z|=U.COLOR_BUFFER_BIT}D&&(z|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",Jt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),I.dispose(),vt.dispose(),j.dispose(),oe.dispose(),Zt.dispose(),A.dispose(),ct.dispose(),k.dispose(),yt.dispose(),Yt.dispose(),rt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Cn),xt.removeEventListener("sessionend",li),Nn.stop()};function qt(M){M.preventDefault(),Jr("WebGLRenderer: Context Lost."),L=!0}function Jt(){Jr("WebGLRenderer: Context Restored."),L=!1;let M=qe.autoReset,D=Tt.enabled,W=Tt.autoUpdate,z=Tt.needsUpdate,O=Tt.type;he(),qe.autoReset=M,Tt.enabled=D,Tt.autoUpdate=W,Tt.needsUpdate=z,Tt.type=O}function dt(M){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Qt(M){let D=M.target;D.removeEventListener("dispose",Qt),$t(D)}function $t(M){ye(M),Zt.remove(M)}function ye(M){let D=Zt.get(M).programs;D!==void 0&&(D.forEach(function(W){rt.releaseProgram(W)}),M.isShaderMaterial&&rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,W,z,O,At){D===null&&(D=ce);let zt=O.isMesh&&O.matrixWorld.determinantAffine()<0,Et=Ls(M,D,W,z,O);St.setMaterial(z,zt);let Ct=W.index,Ot=1;if(z.wireframe===!0){if(Ct=k.getWireframeAttribute(W),Ct===void 0)return;Ot=2}let te=W.drawRange,Se=W.attributes.position,Wt=te.start*Ot,Ae=(te.start+te.count)*Ot;At!==null&&(Wt=Math.max(Wt,At.start*Ot),Ae=Math.min(Ae,(At.start+At.count)*Ot)),Ct!==null?(Wt=Math.max(Wt,0),Ae=Math.min(Ae,Ct.count)):Se!=null&&(Wt=Math.max(Wt,0),Ae=Math.min(Ae,Se.count));let Ze=Ae-Wt;if(Ze<0||Ze===1/0)return;yt.setup(O,z,Et,W,Ct);let Xe,Ge=J;if(Ct!==null&&(Xe=x.get(Ct),Ge=wt,Ge.setIndex(Xe)),O.isMesh)z.wireframe===!0?(St.setLineWidth(z.wireframeLinewidth*fe()),Ge.setMode(U.LINES)):Ge.setMode(U.TRIANGLES);else if(O.isLine){let on=z.linewidth;on===void 0&&(on=1),St.setLineWidth(on*fe()),O.isLineSegments?Ge.setMode(U.LINES):O.isLineLoop?Ge.setMode(U.LINE_LOOP):Ge.setMode(U.LINE_STRIP)}else O.isPoints?Ge.setMode(U.POINTS):O.isSprite&&Ge.setMode(U.TRIANGLES);if(O.isBatchedMesh)if(Dt.get("WEBGL_multi_draw"))Ge.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let on=O._multiDrawStarts,Xt=O._multiDrawCounts,wn=O._multiDrawCount,Fe=Ct?x.get(Ct).bytesPerElement:1,Ii=Zt.get(z).currentProgram.getUniforms();for(let tn=0;tn<wn;tn++)Ii.setValue(U,"_gl_DrawID",tn),Ge.render(on[tn]/Fe,Xt[tn])}else if(O.isInstancedMesh)Ge.renderInstances(Wt,Ze,O.count);else if(W.isInstancedBufferGeometry){let on=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Xt=Math.min(W.instanceCount,on);Ge.renderInstances(Wt,Ze,Xt)}else Ge.render(Wt,Ze)};function rn(M,D,W,z){B!==null&&M.isNodeMaterial&&B.setObject(z,M),Mt===!0&&tt.setState(M,W,!1),M.transparent===!0&&M.side===ai&&M.forceSinglePass===!1?(M.side=Vn,M.needsUpdate=!0,ni(M,D,z),M.side=ps,M.needsUpdate=!0,ni(M,D,z),M.side=ai):ni(M,D,z)}this.compile=function(M,D,W=null){W===null&&(W=M),B!==null&&B.renderStart(M,D,W),E=j.get(W),E.init(D),b.push(E),W.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),M!==W&&M.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(E.pushLight(O),O.castShadow&&E.pushShadow(O))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),Lt=this.localClippingEnabled,Mt=tt.init(this.clippingPlanes,Lt),Mt===!0&&tt.setGlobalState(this.clippingPlanes,D),B!==null&&Tt.render(E.state.shadowsArray,W,D);let z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let At=O.material;if(At)if(Array.isArray(At))for(let zt=0;zt<At.length;zt++){let Et=At[zt];rn(Et,W,D,O),z.add(Et)}else rn(At,W,D,O),z.add(At)}),E=b.pop(),B!==null&&B.renderEnd(),z},this.compileAsync=function(M,D,W=null){let z=this.compile(M,D,W);return new Promise(O=>{function At(){if(z.forEach(function(zt){let Ct=Zt.get(zt).currentProgram;(Ct===void 0||Ct.isReady())&&z.delete(zt)}),z.size===0){O(M);return}setTimeout(At,10)}Dt.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ee=null;function bn(M){Ee&&Ee(M)}function Cn(){Nn.stop()}function li(){Nn.start()}let Nn=new bp;Nn.setAnimationLoop(bn),typeof self!="undefined"&&Nn.setContext(self),this.setAnimationLoop=function(M){Ee=M,xt.setAnimationLoop(M),M===null?Nn.stop():Nn.start()},xt.addEventListener("sessionstart",Cn),xt.addEventListener("sessionend",li),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(M,D);let W=xt.enabled===!0&&xt.isPresenting===!0,z=R!==null&&(nt===null||W)&&R.begin(T,nt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(D),D=xt.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,D,nt),E=j.get(M,b.length),E.init(D),E.state.textureUnits=oe.getTextureUnits(),b.push(E),Rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),D.isArrayCamera?_t.setFromArrayCamera(D):st.setFromProjectionMatrix(Rt,si,D.reversedDepth),Lt=this.localClippingEnabled,Mt=tt.init(this.clippingPlanes,Lt),C=vt.get(M,g.length),C.init(),g.push(C),this.info.render.frame++,xt.enabled===!0&&xt.isPresenting===!0){let zt=T.xr.getDepthSensingMesh();zt!==null&&ci(zt,D,-1/0,T.sortObjects)}ci(M,D,0,T.sortObjects),C.finish(),B!==null&&B.updateLights(E.state.lightsArray),T.sortObjects===!0&&C.sort(K,Gt),be=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,be&&I.addToRenderList(C,M),this.info.autoReset===!0&&this.info.reset(),Mt===!0&&tt.beginShadows();let O=E.state.shadowsArray;if(Tt.render(O,M,D),Mt===!0&&tt.endShadows(),(z&&R.hasRenderPass())===!1){let zt=C.opaque,Et=C.transmissive;if(E.setupLights(),D.isArrayCamera){let Ct=D.cameras;if(Et.length>0)for(let Ot=0,te=Ct.length;Ot<te;Ot++){let Se=Ct[Ot];ti(zt,Et,M,Se)}be&&I.render(M);for(let Ot=0,te=Ct.length;Ot<te;Ot++){let Se=Ct[Ot];xi(C,M,Se,Se.viewport)}}else Et.length>0&&ti(zt,Et,M,D),be&&I.render(M),xi(C,M,D)}nt!==null&&V===0&&(oe.updateMultisampleRenderTarget(nt),oe.updateRenderTargetMipmap(nt)),z&&R.end(T),M.isScene===!0&&M.onAfterRender(T,M,D),yt.resetDefaultState(),X=-1,Q=null,b.pop(),b.length>0?(E=b[b.length-1],oe.setTextureUnits(E.state.textureUnits),Mt===!0&&tt.setGlobalState(T.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?C=g[g.length-1]:C=null,B!==null&&B.renderEnd()};function ci(M,D,W,z){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){let zt=D.isArrayCamera?_t:st;if(!M.frustumCulled||M.intersectsFrustum(zt)){z&&Vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);let Et=ct.update(M),Ct=M.material;Ct.visible&&C.push(M,Et,Ct,W,Vt.z,null,D)}}else if(M.isMesh||M.isLine||M.isPoints){let zt=D.isArrayCamera?_t:st;if(!M.frustumCulled||M.intersectsFrustum(zt)){let Et=ct.update(M),Ct=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Vt.copy(M.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Vt.copy(Et.boundingSphere.center)),Vt.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(Ct)){let Ot=Et.groups;for(let te=0,Se=Ot.length;te<Se;te++){let Wt=Ot[te],Ae=Ct[Wt.materialIndex];Ae&&Ae.visible&&C.push(M,Et,Ae,W,Vt.z,Wt,D)}}else Ct.visible&&C.push(M,Et,Ct,W,Vt.z,null,D)}}}let At=M.children;for(let zt=0,Et=At.length;zt<Et;zt++)ci(At[zt],D,W,z)}function xi(M,D,W,z){let{opaque:O,transmissive:At,transparent:zt}=M;E.setupLightsView(W),Mt===!0&&tt.setGlobalState(T.clippingPlanes,W),z&&St.viewport($.copy(z)),O.length>0&&an(O,D,W),At.length>0&&an(At,D,W),zt.length>0&&an(zt,D,W),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function ti(M,D,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[z.id]===void 0){let Wt=Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[z.id]=new $n(1,1,{generateMipmaps:!0,type:Wt?gi:Wn,minFilter:qi,samples:Math.max(4,me.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Le.workingColorSpace})}let At=E.state.transmissionRenderTarget[z.id],zt=z.viewport||$;At.setSize(zt.z*T.transmissionResolutionScale,zt.w*T.transmissionResolutionScale);let Et=T.getRenderTarget(),Ct=T.getActiveCubeFace(),Ot=T.getActiveMipmapLevel();T.setRenderTarget(At),T.getClearColor(Y),at=T.getClearAlpha(),at<1&&T.setClearColor(16777215,.5),T.clear(),be&&I.render(W);let te=T.toneMapping;T.toneMapping=Ti;let Se=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),E.setupLightsView(z),Mt===!0&&tt.setGlobalState(T.clippingPlanes,z),an(M,W,z),oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Ae=0,Ze=D.length;Ae<Ze;Ae++){let Xe=D[Ae],{object:Ge,geometry:on,material:Xt,group:wn}=Xe;if(Xt.side===ai&&Ge.layers.test(z.layers)){let Fe=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,ei(Ge,W,z,on,Xt,wn),Xt.side=Fe,Xt.needsUpdate=!0,Wt=!0}}Wt===!0&&(oe.updateMultisampleRenderTarget(At),oe.updateRenderTargetMipmap(At))}T.setRenderTarget(Et,Ct,Ot),T.setClearColor(Y,at),Se!==void 0&&(z.viewport=Se),T.toneMapping=te}function an(M,D,W){let z=D.isScene===!0?D.overrideMaterial:null;for(let O=0,At=M.length;O<At;O++){let zt=M[O],{object:Et,geometry:Ct,group:Ot}=zt,te=zt.material;te.allowOverride===!0&&z!==null&&(te=z),Et.layers.test(W.layers)&&ei(Et,D,W,Ct,te,Ot)}}function ei(M,D,W,z,O,At){B!==null&&O.isNodeMaterial&&B.setObject(M,O),M.onBeforeRender(T,D,W,z,O,At),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(T,D,W,z,M,At),O.transparent===!0&&O.side===ai&&O.forceSinglePass===!1?(O.side=Vn,O.needsUpdate=!0,T.renderBufferDirect(W,D,z,O,M,At),O.side=ps,O.needsUpdate=!0,T.renderBufferDirect(W,D,z,O,M,At),O.side=ai):T.renderBufferDirect(W,D,z,O,M,At),M.onAfterRender(T,D,W,z,O,At)}function gs(M){let D=0;for(let W of M)W.texture!==null&&D++;return D}function ni(M,D,W){D.isScene!==!0&&(D=ce);let z=Zt.get(M),O=E.state.lights,At=E.state.shadowsArray,zt=O.state.version,Et=rt.getParameters(M,O.state,At,D,W,E.state.lightProbeGridArray),Ct=rt.getProgramCacheKey(Et),Ot=z.programs;z.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?D.environment:null,z.fog=D.fog;let te=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;z.envMap=A.get(M.envMap||z.environment,te),z.envMapRotation=z.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",Qt),Ot=new Map,z.programs=Ot,z.programVariants=new Map);let Se=Ot.get(Ct);if(Se!==void 0){if(z.currentProgram===Se&&z.lightsStateVersion===zt)return Rn(M,Et),Se}else Et.uniforms=rt.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,W,Et),M.onBeforeCompile(Et,T),Se=rt.acquireProgram(Et,Ct),Ot.set(Ct,Se),z.uniforms=Et.uniforms;let Wt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Wt.clippingPlanes=tt.uniform),Rn(M,Et),z.needsLights=Ns(M),z.lightsStateVersion=zt,z.needsLights&&(Wt.ambientLightColor.value=O.state.ambient,Wt.lightProbe.value=O.state.probe,Wt.sunLights.value=O.state.sun,Wt.sunLightShadows.value=O.state.sunShadow,Wt.directionalLights.value=O.state.directional,Wt.directionalLightShadows.value=O.state.directionalShadow,Wt.spotLights.value=O.state.spot,Wt.spotLightShadows.value=O.state.spotShadow,Wt.rectAreaLights.value=O.state.rectArea,Wt.ltc_1.value=O.state.rectAreaLTC1,Wt.ltc_2.value=O.state.rectAreaLTC2,Wt.pointLights.value=O.state.point,Wt.pointLightShadows.value=O.state.pointShadow,Wt.hemisphereLights.value=O.state.hemi,Wt.sunShadowMatrix.value=O.state.sunShadowMatrix,Wt.sunShadowCascade.value=O.state.sunShadowCascade,Wt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Wt.spotLightMatrix.value=O.state.spotLightMatrix,Wt.spotLightMap.value=O.state.spotLightMap,Wt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.numLightProbeGrids=gs(E.state.lightProbeGridArray),z.currentProgram=Se,z.uniformsList=null,Se}function $i(M,D,W,z,O){let At=Zt.get(M),zt=At.currentProgram.id+","+z+","+O,Et=At.programVariants.get(zt);return Et===void 0?(Et=ni(M,D,W),At.programVariants.set(zt,Et)):(At.currentProgram=Et,At.uniformsList=null,At.outputColorSpace=z,At.toneMapping=O),Et}function Pi(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=br.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function Rn(M,D){let W=Zt.get(M);W.outputColorSpace=D.outputColorSpace,W.batching=D.batching,W.batchingColor=D.batchingColor,W.instancing=D.instancing,W.instancingColor=D.instancingColor,W.instancingMorph=D.instancingMorph,W.skinning=D.skinning,W.morphTargets=D.morphTargets,W.morphNormals=D.morphNormals,W.morphColors=D.morphColors,W.morphTargetsCount=D.morphTargetsCount,W.numClippingPlanes=D.numClippingPlanes,W.numIntersection=D.numClipIntersection,W.vertexAlphas=D.vertexAlphas,W.vertexTangents=D.vertexTangents,W.toneMapping=D.toneMapping}function Ls(M,D,W,z,O){D.isScene!==!0&&(D=ce),oe.resetTextureUnits();let At=D.fog,zt=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?D.environment:null,Et=nt===null?T.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Le.workingColorSpace,Ct=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,Ot=A.get(z.envMap||zt,Ct),te=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Se=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Wt=!!W.morphAttributes.position,Ae=!!W.morphAttributes.normal,Ze=!!W.morphAttributes.color,Xe=Ti;z.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Xe=T.toneMapping);let Ge=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,on=Ge!==void 0?Ge.length:0,Xt=Zt.get(z),wn=E.state.lights;if(Mt===!0&&(Lt===!0||M!==Q)){let $e=M===Q&&z.id===X;tt.setState(z,M,$e)}let Fe=!1,Ii=!1;z.version===Xt.__version?Xt.needsLights&&Xt.lightsStateVersion!==wn.state.version||O.isBatchedMesh&&Xt.batching===!1||!O.isBatchedMesh&&Xt.batching===!0||O.isBatchedMesh&&Xt.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Xt.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Xt.instancing===!1||!O.isInstancedMesh&&Xt.instancing===!0||O.isSkinnedMesh&&Xt.skinning===!1||!O.isSkinnedMesh&&Xt.skinning===!0||O.isInstancedMesh&&Xt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Xt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Xt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Xt.instancingMorph===!1&&O.morphTexture!==null||Xt.envMap!==Ot||z.fog===!0&&Xt.fog!==At||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==tt.numPlanes||Xt.numIntersection!==tt.numIntersection)||Xt.vertexAlphas!==te||Xt.vertexTangents!==Se||Xt.morphTargets!==Wt||Xt.morphNormals!==Ae||Xt.morphColors!==Ze||Xt.morphTargetsCount!==on||Xt.numLightProbeGrids!==gs(E.state.lightProbeGridArray)?Fe=!0:(Xt.outputColorSpace!==Et||Xt.toneMapping!==Xe)&&(Ii=!0):(Fe=!0,Xt.__version=z.version);let tn=Xt.currentProgram;(Fe===!0||Ii===!0)&&(tn=Ii===!0?$i(z,D,O,Et,Xe):ni(z,D,O),B&&z.isNodeMaterial&&B.onUpdateProgram(z,tn,Xt));let Us=!1,En=!1,Un=!1,Ie=tn.getUniforms(),pn=Xt.uniforms;if(St.useProgram(tn.program)&&(Us=!0,En=!0,Un=!0),z.id!==X&&(X=z.id,En=!0),Us||Q!==M){St.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ie.setValue(U,"projectionMatrix",M.projectionMatrix),Ie.setValue(U,"viewMatrix",M.matrixWorldInverse);let en=Ie.map.cameraPosition;en!==void 0&&en.setValue(U,ae.setFromMatrixPosition(M.matrixWorld)),me.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,En=!0,Un=!0)}if(Xt.needsLights&&(wn.state.sunShadowMap.length>0&&Ie.setValue(U,"sunShadowMap",wn.state.sunShadowMap,oe),wn.state.directionalShadowMap.length>0&&Ie.setValue(U,"directionalShadowMap",wn.state.directionalShadowMap,oe),wn.state.spotShadowMap.length>0&&Ie.setValue(U,"spotShadowMap",wn.state.spotShadowMap,oe),wn.state.pointShadowMap.length>0&&Ie.setValue(U,"pointShadowMap",wn.state.pointShadowMap,oe)),O.isSkinnedMesh){Ie.setOptional(U,O,"bindMatrix"),Ie.setOptional(U,O,"bindMatrixInverse");let $e=O.skeleton;$e&&($e.boneTexture===null&&$e.computeBoneTexture(),Ie.setValue(U,"boneTexture",$e.boneTexture,oe))}O.isBatchedMesh&&(Ie.setOptional(U,O,"batchingTexture"),Ie.setValue(U,"batchingTexture",O._matricesTexture,oe),Ie.setOptional(U,O,"batchingIdTexture"),Ie.setValue(U,"batchingIdTexture",O._indirectTexture,oe),Ie.setOptional(U,O,"batchingColorTexture"),O._colorsTexture!==null&&Ie.setValue(U,"batchingColorTexture",O._colorsTexture,oe));let Pn=W.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&it.update(O,W,tn),(En||Xt.receiveShadow!==O.receiveShadow)&&(Xt.receiveShadow=O.receiveShadow,Ie.setValue(U,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&D.environment!==null&&(pn.envMapIntensity.value=D.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=Uy()),En){if(Ie.setValue(U,"toneMappingExposure",T.toneMappingExposure),Xt.needsLights&&Ds(pn,Un),At&&z.fog===!0&&bt.refreshFogUniforms(pn,At),bt.refreshMaterialUniforms(pn,z,lt,mt,E.state.transmissionRenderTarget[M.id]),Xt.needsLights&&Xt.numLightProbeGrids>0){let $e=y,en=0;for(let Fn of E.state.lightProbeGridArray)Fn.texture!==null&&($e.textures[en]=Fn.texture,$e.min[en]=Fn.boundingBox.min,$e.max[en]=Fn.boundingBox.max,$e.resolution[en]=Fn.resolution,en++);for(let Fn in $e)$e[Fn].length=en;pn.probesSH.value=$e.textures,pn.probesMin.value=$e.min,pn.probesMax.value=$e.max,pn.probesResolution.value=$e.resolution}br.upload(U,Pi(Xt),pn,oe)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(br.upload(U,Pi(Xt),pn,oe),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Ie.setValue(U,"center",O.center),Ie.setValue(U,"modelViewMatrix",O.modelViewMatrix),Ie.setValue(U,"normalMatrix",O.normalMatrix),Ie.setValue(U,"modelMatrix",O.matrixWorld),z.uniformsGroups!==void 0){let $e=z.uniformsGroups;for(let en=0,Fn=$e.length;en<Fn;en++){let xs=$e[en];Yt.update(xs,tn),Yt.bind(xs,tn)}}return tn}function Ds(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.sunLights.needsUpdate=D,M.sunLightShadows.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Ns(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(M,D,W){let z=Zt.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),Zt.get(M.texture).__webglTexture=D,Zt.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,D){let W=Zt.get(M);W.__webglFramebuffer=D,W.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,W=0){nt=M,q=D,V=W;let z=null,O=!1,At=!1;if(M){let Et=Zt.get(M);if(Et.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(U.FRAMEBUFFER,Et.__webglFramebuffer),$.copy(M.viewport),Nt.copy(M.scissor),Ut=M.scissorTest,St.viewport($),St.scissor(Nt),St.setScissorTest(Ut),X=-1;return}else if(Et.__webglFramebuffer===void 0)oe.setupRenderTarget(M);else if(Et.__hasExternalTextures)oe.rebindTextures(M,Zt.get(M.texture).__webglTexture,Zt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let te=M.depthTexture;if(Et.__boundDepthTexture!==te){if(te!==null&&Zt.has(te)&&(M.width!==te.image.width||M.height!==te.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(M)}}let Ct=M.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(At=!0);let Ot=Zt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?z=Ot[D][W]:z=Ot[D],O=!0):M.samples>0&&oe.useMultisampledRTT(M)===!1?z=Zt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[W]:z=Ot,$.copy(M.viewport),Nt.copy(M.scissor),Ut=M.scissorTest}else $.copy(kt).multiplyScalar(lt).floor(),Nt.copy(Bt).multiplyScalar(lt).floor(),Ut=de;if(W!==0&&(z=H),St.bindFramebuffer(U.FRAMEBUFFER,z)&&St.drawBuffers(M,z),St.viewport($),St.scissor(Nt),St.setScissorTest(Ut),O){let Et=Zt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Et.__webglTexture,W)}else if(At){let Et=D;for(let Ct=0;Ct<M.textures.length;Ct++){let Ot=Zt.get(M.textures[Ct]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ct,Ot.__webglTexture,W,Et)}}else if(M!==null&&W!==0){let Et=Zt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Et.__webglTexture,W)}X=-1};function _s(M){let D=Zt.get(M);return(D.__readFormat!==M.format||D.__readType!==M.type)&&(D.__readFormat=M.format,D.__readType=M.type,D.__formatReadable=me.textureFormatReadable(M.format),D.__typeReadable=me.textureTypeReadable(M.type)),D}this.readRenderTargetPixels=function(M,D,W,z,O,At,zt,Et=0){if(!(M&&M.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&zt!==void 0&&(Ct=Ct[zt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct){St.bindFramebuffer(U.FRAMEBUFFER,Ct);try{let Ot=M.textures[Et],te=Ot.format,Se=Ot.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et);let Wt=_s(Ot);if(Wt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Wt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-z&&W>=0&&W<=M.height-O&&U.readPixels(D,W,z,O,gt.convert(te),gt.convert(Se),At)}finally{let Ot=nt!==null?Zt.get(nt).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(M,D,W,z,O,At,zt,Et=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=Zt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&zt!==void 0&&(Ct=Ct[zt],Array.isArray(Ct)&&(Ct=Ct[0])),Ct)if(D>=0&&D<=M.width-z&&W>=0&&W<=M.height-O){St.bindFramebuffer(U.FRAMEBUFFER,Ct);let Ot=M.textures[Et],te=Ot.format,Se=Ot.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Et);let Wt=_s(Ot);if(Wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,At.byteLength,U.STREAM_READ),U.readPixels(D,W,z,O,gt.convert(te),gt.convert(Se),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ze=nt!==null?Zt.get(nt).__webglFramebuffer:null;St.bindFramebuffer(U.FRAMEBUFFER,Ze);let Xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Xf(U,Xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,At),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ae),U.deleteSync(Xe),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,D=null,W=0){let z=Math.pow(2,-W),O=Math.floor(M.image.width*z),At=Math.floor(M.image.height*z),zt=D!==null?D.x:0,Et=D!==null?D.y:0;oe.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,zt,Et,O,At),St.unbindTexture()},this.copyTextureToTexture=function(M,D,W=null,z=null,O=0,At=0){let zt,Et,Ct,Ot,te,Se,Wt,Ae,Ze,Xe=M.isCompressedTexture?M.mipmaps[At]:M.image;if(W!==null)zt=W.max.x-W.min.x,Et=W.max.y-W.min.y,Ct=W.isBox3?W.max.z-W.min.z:1,Ot=W.min.x,te=W.min.y,Se=W.isBox3?W.min.z:0;else{let Ie=Math.pow(2,-O);zt=Math.floor(Xe.width*Ie),Et=Math.floor(Xe.height*Ie),M.isDataArrayTexture?Ct=Xe.depth:M.isData3DTexture?Ct=Math.floor(Xe.depth*Ie):Ct=1,Ot=0,te=0,Se=0}z!==null?(Wt=z.x,Ae=z.y,Ze=z.z):(Wt=0,Ae=0,Ze=0);let Ge=gt.convert(D.format),on=gt.convert(D.type),Xt;D.isData3DTexture?(oe.setTexture3D(D,0),Xt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(oe.setTexture2DArray(D,0),Xt=U.TEXTURE_2D_ARRAY):(oe.setTexture2D(D,0),Xt=U.TEXTURE_2D),St.activeTexture(U.TEXTURE0),St.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),St.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),St.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let wn=St.getParameter(U.UNPACK_ROW_LENGTH),Fe=St.getParameter(U.UNPACK_IMAGE_HEIGHT),Ii=St.getParameter(U.UNPACK_SKIP_PIXELS),tn=St.getParameter(U.UNPACK_SKIP_ROWS),Us=St.getParameter(U.UNPACK_SKIP_IMAGES);St.pixelStorei(U.UNPACK_ROW_LENGTH,Xe.width),St.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Xe.height),St.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),St.pixelStorei(U.UNPACK_SKIP_ROWS,te),St.pixelStorei(U.UNPACK_SKIP_IMAGES,Se);let En=M.isDataArrayTexture||M.isData3DTexture,Un=D.isDataArrayTexture||D.isData3DTexture;if(M.isDepthTexture){let Ie=Zt.get(M),pn=Zt.get(D),Pn=Zt.get(Ie.__renderTarget),$e=Zt.get(pn.__renderTarget);St.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let en=0;en<Ct;en++)En&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.get(M).__webglTexture,O,Se+en),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.get(D).__webglTexture,At,Ze+en)),U.blitFramebuffer(Ot,te,Ot+zt,te+Et,Wt,Ae,Wt+zt,Ae+Et,U.DEPTH_BUFFER_BIT,U.NEAREST);St.bindFramebuffer(U.READ_FRAMEBUFFER,null),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||Zt.has(M)){let Ie=Zt.get(M),pn=Zt.get(D);St.bindFramebuffer(U.READ_FRAMEBUFFER,P),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Pn=0;Pn<Ct;Pn++)En?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ie.__webglTexture,O,Se+Pn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ie.__webglTexture,O),Un?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pn.__webglTexture,At,Ze+Pn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pn.__webglTexture,At),O!==0?U.blitFramebuffer(Ot,te,Ot+zt,te+Et,Wt,Ae,Wt+zt,Ae+Et,U.COLOR_BUFFER_BIT,U.NEAREST):Un?U.copyTexSubImage3D(Xt,At,Wt,Ae,Ze+Pn,Ot,te,zt,Et):U.copyTexSubImage2D(Xt,At,Wt,Ae,Ot,te,zt,Et);St.bindFramebuffer(U.READ_FRAMEBUFFER,null),St.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Un?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Xt,At,Wt,Ae,Ze,zt,Et,Ct,Ge,on,Xe.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(Xt,At,Wt,Ae,Ze,zt,Et,Ct,Ge,Xe.data):U.texSubImage3D(Xt,At,Wt,Ae,Ze,zt,Et,Ct,Ge,on,Xe):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,At,Wt,Ae,zt,Et,Ge,on,Xe.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,At,Wt,Ae,Xe.width,Xe.height,Ge,Xe.data):U.texSubImage2D(U.TEXTURE_2D,At,Wt,Ae,zt,Et,Ge,on,Xe);St.pixelStorei(U.UNPACK_ROW_LENGTH,wn),St.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Fe),St.pixelStorei(U.UNPACK_SKIP_PIXELS,Ii),St.pixelStorei(U.UNPACK_SKIP_ROWS,tn),St.pixelStorei(U.UNPACK_SKIP_IMAGES,Us),At===0&&D.generateMipmaps===!0&&D.mipmapsAutoUpdate===!0&&U.generateMipmap(Xt),St.unbindTexture()},this.initRenderTarget=function(M){Zt.get(M).__webglFramebuffer===void 0&&oe.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?oe.setTextureCube(M,0):M.isData3DTexture?oe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?oe.setTexture2DArray(M,0):oe.setTexture2D(M,0),St.unbindTexture()},this.resetState=function(){q=0,V=0,nt=null,St.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),e.unpackColorSpace=Le._getUnpackColorSpace()}};var Np={type:"change"},fu={type:"start"},Fp={type:"end"},lc=new ws,Up=new Jn,Fy=Math.cos(70*Xh.DEG2RAD),yn=new N,Xn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},du=1e-6,cc=class extends Ca{constructor(t,e=null){super(t,e),this.state=ke.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ds.ROTATE,MIDDLE:ds.DOLLY,RIGHT:ds.PAN},this.touches={ONE:fs.ROTATE,TWO:fs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Kn,this._lastTargetPosition=new N,this._quat=new Kn().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xr,this._sphericalDelta=new xr,this._scale=1,this._panOffset=new N,this._rotateStart=new ht,this._rotateEnd=new ht,this._rotateDelta=new ht,this._panStart=new ht,this._panEnd=new ht,this._panDelta=new ht,this._dollyStart=new ht,this._dollyEnd=new ht,this._dollyDelta=new ht,this._dollyDirection=new N,this._mouse=new ht,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=By.bind(this),this._onPointerDown=Oy.bind(this),this._onPointerUp=zy.bind(this),this._onContextMenu=Yy.bind(this),this._onMouseWheel=Vy.bind(this),this._onKeyDown=Hy.bind(this),this._onTouchStart=Wy.bind(this),this._onTouchMove=Xy.bind(this),this._onMouseDown=ky.bind(this),this._onMouseMove=Gy.bind(this),this._interceptControlDown=qy.bind(this),this._interceptControlUp=Zy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ke.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Np),this.update(),this.state=ke.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;yn.copy(e).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xn:i>Math.PI&&(i-=Xn),s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),e.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=yn.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(lc.origin.copy(this.object.position),lc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(lc.direction))<Fy?this.object.lookAt(this.target):(Up.setFromNormalAndCoplanarPoint(this.object.up,this.target),lc.intersectPlane(Up,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>du||this._lastTargetPosition.distanceToSquared(this.target)>du?(this.dispatchEvent(Np),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){yn.setFromMatrixColumn(e,0),yn.multiplyScalar(-t),this._panOffset.add(yn)}_panUp(t,e){this.screenSpacePanning===!0?yn.setFromMatrixColumn(e,1):(yn.setFromMatrixColumn(e,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(t),this._panOffset.add(yn)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;yn.copy(s).sub(this.target);let r=yn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientY),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ht,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function Oy(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function By(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function zy(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=ke.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ky(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ke.DOLLY;break;case ds.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}break;case ds.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(fu)}function Gy(n){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Vy(n){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(n.preventDefault(),this.dispatchEvent(fu),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Fp))}function Hy(n){this.enabled!==!1&&this._handleKeyDown(n)}function Wy(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case fs.ROTATE:if(this.enableRotate===!1){this.state=ke.NONE;break}this._handleTouchStartRotate(n),this.state=ke.TOUCH_ROTATE;break;case fs.PAN:if(this.enablePan===!1){this.state=ke.NONE;break}this._handleTouchStartPan(n),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case fs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ke.TOUCH_DOLLY_PAN;break;case fs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(fu)}function Xy(n){switch(this._trackPointer(n),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ke.NONE}}function Yy(n){this.enabled!==!1&&n.preventDefault()}function qy(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zy(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var hc=[[0,"#D3DBA4"],[120,"#C4D498"],[210,"#B4CC90"],[380,"#A9C48C"],[560,"#7FA67F"],[780,"#4C7E62"],[930,"#3A6852"],[1060,"#DCE8E5"],[1300,"#FFFFFF"]].map(function(n){return[n[0],new re(n[1])]});function Jy(n,t){for(var e=1;e<hc.length-1&&n>hc[e][0];)e++;var i=hc[e-1],s=hc[e],r=Math.max(0,Math.min(1,(n-i[0])/(s[0]-i[0])));return t.copy(i[1]).lerp(s[1],r)}function Me(n,t){var e=Math.sin(n*12.9898+t*78.233)*43758.5453;return e-Math.floor(e)}function pu(n,t){var e=n.attributes.position.array,i=t.attributes.position.array,s=n.index.array,r=t.index.array,a=new Float32Array(e.length+i.length);a.set(e),a.set(i,e.length);var o=e.length/3,c=new Uint16Array(s.length+r.length);c.set(s);for(var l=0;l<r.length;l++)c[s.length+l]=r[l]+o;var h=new dn;return h.setAttribute("position",new hn(a,3)),h.setIndex(new hn(c,1)),h.computeVertexNormals(),h}function Va(n,t){var e=(t-n)%(Math.PI*2);return e>Math.PI&&(e-=Math.PI*2),e<-Math.PI&&(e+=Math.PI*2),e}var Is=[[470,"#F6D8C4","#FFC89A",10],[570,"#DCEBEE","#FFE9C9",16],[750,"#CFE6EE","#FFF6E6",22],[900,"#E8E3D0","#FFE0B0",16],[998,"#F2B38A","#FF9E5E",9]].map(function(n){return[n[0],new re(n[1]),new re(n[2]),n[3]]});function Ky(n,t,e){n=Math.max(Is[0][0],Math.min(Is[Is.length-1][0],n));for(var i=1;i<Is.length-1&&n>Is[i][0];)i++;var s=Is[i-1],r=Is[i],a=(n-s[0])/(r[0]-s[0]);t.copy(s[1]).lerp(r[1],a),e.copy(s[2]).lerp(r[2],a);var o=(n-470)/528;return{az:(100+160*o)*Math.PI/180,el:(s[3]+(r[3]-s[3])*a)*Math.PI/180}}function Op(n,t){var e=n.ve,i=n.wrap,s=n.reduced,r=n.stops,a=window.devicePixelRatio||1,o=new rc({antialias:!0,alpha:!1,powerPreference:"high-performance"}),c=Math.min(a,1.6),l=c;o.setPixelRatio(l),o.domElement.className="mappa-canvas",i.appendChild(o.domElement);var h=new Qr,f=new re("#DCEBEE"),d=new re("#FFE9C9");h.background=f,h.fog=new jr(f,100,400);var u=new Bn(36,1,.3,900),_=new wa("#FFF3E0","#9DB295",1.45);h.add(_);var w=new Ta("#FFE9C9",2);h.add(w,w.target);var p=t.W,m=t.H,S=p*m,v=new Float32Array(S*3),y=new Float32Array(S*3),C=new re,E,g,b;for(g=0;g<m;g++)for(E=0;E<p;E++){if(b=g*p+E,v[b*3]=-t.SX/2+E*t.SX/(p-1),v[b*3+1]=t.el[b]*e/1e3,v[b*3+2]=-t.SZ/2+g*t.SZ/(m-1),Jy(t.el[b],C),t.el[b]<360){var R=Me(Math.floor(E/3)+7,Math.floor(g/3)+3),T=Me(Math.floor(E/5)+1,Math.floor(g/5)+9);C.offsetHSL((R-.5)*.045,(T-.5)*.1,(R-.5)*.05+(T-.5)*.03)}var L=1+(Me(E,g)-.5)*.06;y[b*3]=Math.min(1,C.r*L),y[b*3+1]=Math.min(1,C.g*L),y[b*3+2]=Math.min(1,C.b*L)}var B=new Uint16Array((p-1)*(m-1)*6),H=0;for(g=0;g<m-1;g++)for(E=0;E<p-1;E++){var P=g*p+E,G=P+1,q=P+p,V=q+1;B[H++]=P,B[H++]=q,B[H++]=G,B[H++]=G,B[H++]=q,B[H++]=V}var nt=new dn;nt.setAttribute("position",new hn(v,3)),nt.setAttribute("color",new hn(y,3)),nt.setIndex(new hn(B,1)),nt.computeVertexNormals();var X=new ve({vertexColors:!0,flatShading:!0}),Q={value:new ht(t.SX/2,t.SZ/2)};X.onBeforeCompile=function(F){F.uniforms.uHalf=Q,F.vertexShader=F.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vXZ = position.xz;`),F.fragmentShader=F.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vXZ;
uniform vec2 uHalf;`).replace("#include <fog_fragment>",`#include <fog_fragment>
#ifdef USE_FOG
float ex = max(abs(vXZ.x) / uHalf.x, abs(vXZ.y) / uHalf.y);
gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, smoothstep(0.72, 0.96, ex));
#endif`)},h.add(new Ht(nt,X));function $(F,Z){return t.quota(F,Z)*e/1e3}var Nt=n.caldo,Ut=t.tappe[Nt[0]].s,Y=2,at=0,pt=Math.min(5.5,Ut*.12);function mt(F){var Z=t.puntoA(Math.max(0,F-.5)),et=t.puntoA(Math.min(t.total,F+.5)),ft=et.x-Z.x,ut=et.z-Z.z,It=Math.hypot(ft,ut)||1;return[ft/It,ut/It]}var lt=[];(function(){for(var F=0;F<=Ut;F+=.35){var Z=t.puntoA(F);lt.push([Z.x,Z.z])}})();function K(F,Z){for(var et=1e9,ft=0;ft<lt.length;ft++){var ut=Math.hypot(lt[ft][0]-F,lt[ft][1]-Z);ut<et&&(et=ut)}return et}var Gt=(function(){var F=t.puntoA(pt),Z=mt(pt);return{x:F.x-Z[1]*(Y/2+3),z:F.z+Z[0]*(Y/2+3),t:Z,s:pt}})();(function(){var F=[];for(g=1;g<m-1;g++)for(E=1;E<p-1;E++){var Z=Math.abs(E/(p-1)-.5)*2,et=Math.abs(g/(m-1)-.5)*2;if(!(Z>.82||et>.82)){var ft=t.el[g*p+E];if(!(ft<290||ft>1100)){var ut=.07+.42*Math.min(1,(ft-290)/520);Me(E*3.1,g*1.7)>ut||F.push([E,g,ft])}}}var It=pu(new os(.24,.6,5).translate(0,.3,0),new os(.17,.55,5).translate(0,.66,0)),Kt=new _n(It,new ve({flatShading:!0}),F.length),ot=new Ke,Pt=new re,ee=new _n(new fr(.26,6).rotateX(-Math.PI/2),new fn({color:"#27382b",transparent:!0,opacity:.22,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),F.length);F.forEach(function(ne,_e){var ie=v[(ne[1]*p+ne[0])*3]+(Me(ne[0],ne[1]*2)-.5)*.5,De=v[(ne[1]*p+ne[0])*3+2]+(Me(ne[0]*2,ne[1])-.5)*.5,se=$(ie,De),pe=.7+Me(ne[0]*5,ne[1]*7)*.7,Ne=pe*(.9+Me(ne[1],ne[0])*.5);ot.position.set(ie,se-.02,De),ot.scale.set(pe,Ne,pe),ot.rotation.y=Me(ne[0],ne[1])*6,ot.updateMatrix(),Kt.setMatrixAt(_e,ot.matrix),Pt.setHSL(.4+Me(ne[1],ne[0]*3)*.05,.45,.2+Me(ne[0]*9,ne[1])*.1),Kt.setColorAt(_e,Pt),ot.position.set(ie+.08,se+.03,De+.06),ot.scale.set(pe,1,pe),ot.rotation.y=0,ot.updateMatrix(),ee.setMatrixAt(_e,ot.matrix)}),h.add(ee,Kt)})(),(function(){var F=[],Z=[],et=[[9.1517,45.1847,34,2.1],[9.0069,44.9908,26,1.6],[9.1286,45.016,16,1.1],[8.9251,45.1953,22,1.3],[9.149,45.397,40,2.2],[9.2745,45.116,10,.9],[9.0476,45.1585,8,.8],[9.0305,45.267,10,.9],[9.247,45.285,14,1.1],[9.2024,44.9811,10,.9],[9.045,44.954,6,.7]];et.forEach(function(ot){F.push(ot)}),t.tappe.forEach(function(ot,Pt){Pt>0&&Pt<t.tappe.length-1&&F.push([null,null,Pt===7?14:5,Pt===7?.9:.45,ot])}),F.forEach(function(ot,Pt){var ee,ne;if(ot[4])ee=ot[4].x,ne=ot[4].z;else{var _e=t.proj(ot[0],ot[1]);ee=_e[0],ne=_e[1]}for(var ie=0;ie<ot[2];ie++){var De=Me(Pt*7+ie,3.3)*6.283,se=ot[3]*Math.sqrt(Me(ie,Pt*5+1)),pe=ee+Math.cos(De)*se,Ne=ne+Math.sin(De)*se;t.quota(pe,Ne)>900||K(pe,Ne)<Y/2+.9||Math.hypot(pe-Gt.x,Ne-Gt.z)<3||Z.push([pe,Ne,Me(ie*3,Pt)*3.14,.8+Me(Pt,ie*2)*.6,Me(ie,Pt*9)])}});var ft=new _n(new Re(.2,.13,.14).translate(0,.065,0),new ve({flatShading:!0}),Z.length),ut=new _n(new os(.17,.1,4).rotateY(Math.PI/4).scale(1.1,1,.8).translate(0,.18,0),new ve({flatShading:!0}),Z.length),It=new Ke,Kt=new re;Z.forEach(function(ot,Pt){It.position.set(ot[0],$(ot[0],ot[1])-.01,ot[1]),It.rotation.y=ot[2],It.scale.setScalar(ot[3]),It.updateMatrix(),ft.setMatrixAt(Pt,It.matrix),ut.setMatrixAt(Pt,It.matrix),Kt.setHSL(.09+ot[4]*.04,.35,.82-ot[4]*.12),ft.setColorAt(Pt,Kt),Kt.setHSL(.03+ot[4]*.03,.55,.4+ot[4]*.08),ut.setColorAt(Pt,Kt)}),h.add(ft,ut)})();var kt=t.route,Bt=.17;function de(F){return new N(F.x,F.m*e/1e3+Bt*.9+.06,F.z)}var st=t.tappe[Nt[0]].idx,_t=t.tappe[Nt[1]].idx;function Mt(F,Z,et){for(var ft=[],ut=F;ut<=Z;ut++)ft.push(de(kt[ut]));return new Ma(new mr(ft,!1,"centripetal"),Math.max(8,Math.min(3200,Math.round((Z-F)*1.4))),et,5,!1)}h.add(new Ht(Mt(st,_t,Bt),new ve({color:"#A22B3C"}))),(function(){var F=new Ht(Mt(st,_t,Bt*.45),new ve({color:"#E2A93B"}));F.position.y+=Bt*.55,h.add(F)})(),(function(){var F=[],Z;[[t.tappe[Nt[1]].s,t.total]].forEach(function(ut){for(Z=ut[0];Z<ut[1];Z+=.8){var It=t.puntoA(Z);F.push(de({x:It.x,z:It.z,m:It.m}))}});var et=new _n(new Yi(Bt*.58,6,5),new fn({color:"#FFFBF2"}),F.length),ft=new Ke;F.forEach(function(ut,It){ft.position.copy(ut),ft.updateMatrix(),et.setMatrixAt(It,ft.matrix)}),h.add(et)})(),(function(){for(var F=1e9,Z=Ut*.2;Z<Ut*.8;Z+=.5){var et=mt(Z-3),ft=mt(Z),ut=mt(Z+3),It=Math.abs(Va(Math.atan2(et[1],et[0]),Math.atan2(ft[1],ft[0])))+Math.abs(Va(Math.atan2(ft[1],ft[0]),Math.atan2(ut[1],ut[0])));It<F&&(F=It,at=Z)}})();function Lt(F,Z,et,ft,ut,It,Kt){var ot=Math.max(2,Math.ceil((Z-F)/.3)),Pt=new Float32Array((ot+1)*6),ee=new Float32Array((ot+1)*6),ne=[],_e,ie;for(_e=0;_e<=ot;_e++){var De=F+(Z-F)*_e/ot,se=t.puntoA(De),pe=mt(De),Ne=-pe[1],Oe=pe[0];for(ie=0;ie<2;ie++){var ze=ft+(ie?1:-1)*et/2,Be=se.x+Ne*ze,Ue=se.z+Oe*ze,mn=(_e*2+ie)*3;Pt[mn]=Be,Pt[mn+1]=$(Be,Ue)+It,Pt[mn+2]=Ue,ee[mn+1]=1}if(_e<ot){var je=_e*2;ne.push(je,je+1,je+2,je+1,je+3,je+2)}}var xe=new dn;xe.setAttribute("position",new hn(Pt,3)),xe.setAttribute("normal",new hn(ee,3)),xe.setIndex(ne);var Te=new ve({color:ut,side:ai,polygonOffset:!0,polygonOffsetFactor:-Kt,polygonOffsetUnits:-Kt});return new Ht(xe,Te)}(function(){var F=Y/2;h.add(Lt(0,Ut,Y,0,"#464B53",.05,2)),[F-.09,-(F-.09),.05,-.05].forEach(function(Be,Ue){h.add(Lt(0,Ut,Ue<2?.075:.045,Be,Ue<2?"#FFFFFF":"#F2C94C",.075,4))});for(var Z=Math.floor(Ut/.9),et=new _n(new Gn(.42,.07).rotateX(-Math.PI/2),new fn({color:"#FFFFFF",polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}),Z*2),ft=new Ke,ut=0;ut<Z;ut++)for(var It=0;It<2;It++){var Kt=.5+ut*.9,ot=t.puntoA(Kt),Pt=mt(Kt),ee=(It?1:-1)*.5,ne=ot.x-Pt[1]*ee,_e=ot.z+Pt[0]*ee;ft.position.set(ne,$(ne,_e)+.082,_e),ft.rotation.set(0,Math.atan2(-Pt[1],Pt[0]),0),ft.updateMatrix(),et.setMatrixAt(ut*2+It,ft.matrix)}h.add(et);var ie=Math.floor(Ut/2.2),De=new _n(new Tn(.02,.025,.6,5).translate(0,.3,0),new ve({color:"#8B929A"}),ie),se=new _n(new Re(.16,.035,.05).translate(.06,.6,0),new fn({color:"#FFF3C8"}),ie),pe=new Ke;for(ut=0;ut<ie;ut++){Kt=1.2+ut*2.2,ot=t.puntoA(Kt),Pt=mt(Kt);var Ne=ut%2?1:-1,Oe=-Pt[1]*Ne*(F+.16),ze=Pt[0]*Ne*(F+.16);pe.position.set(ot.x+Oe,$(ot.x+Oe,ot.z+ze),ot.z+ze),pe.rotation.set(0,Math.atan2(-ze,-Oe),0),pe.updateMatrix(),De.setMatrixAt(ut,pe.matrix),se.setMatrixAt(ut,pe.matrix)}h.add(De,se)})(),(function(){var F=[],Z=[],et=[],ft,ut,It,Kt,ot,Pt,ee,ne=0;for(ft=.8;ft<Ut+4;ft+=.75)for(Kt=t.puntoA(ft),ot=mt(ft),ut=-1;ut<=1;ut+=2){ne++;var _e=Me(ft*3.7,ut+9);_e<.34?(It=(Y/2+.9+Me(ft,ut*3)*1.4)*ut,Pt=Kt.x-ot[1]*It,ee=Kt.z+ot[0]*It,K(Pt,ee)>Y/2+.55&&Math.hypot(Pt-Gt.x,ee-Gt.z)>2.6&&F.push([Pt,ee,.8+Me(ft*5,ut)*.7])):_e<.62?(It=(Y/2+.45+Me(ft*2,ut*7)*2.2)*ut,Pt=Kt.x-ot[1]*It,ee=Kt.z+ot[0]*It,K(Pt,ee)>Y/2+.3&&Math.hypot(Pt-Gt.x,ee-Gt.z)>2.6&&Z.push([Pt,ee,.5+Me(ft,ut*11)*.7])):_e>.965&&ft>8&&(It=(Y/2+2.6+Me(ft*9,ut)*2.2)*ut,Pt=Kt.x-ot[1]*It,ee=Kt.z+ot[0]*It,Math.hypot(Pt-Gt.x,ee-Gt.z)>4.2&&K(Pt,ee)>Y/2+1.8&&et.push([Pt,ee,Math.atan2(-ot[1],ot[0]),.9+Me(ft*4,ut)*1.2,.7+Me(ut,ft)*.6,Me(ft,ut*5)]))}var ie=pu(new Tn(.02,.03,.12,5).translate(0,.06,0),new Tn(.03,.16,1,6).translate(0,.62,0)),De=new _n(ie,new ve({flatShading:!0}),Math.max(1,F.length)),se=new Ke,pe=new re;F.forEach(function(jt,we){se.position.set(jt[0],$(jt[0],jt[1])-.01,jt[1]),se.scale.set(jt[2],jt[2]*1.15,jt[2]),se.rotation.set(0,jt[0]*7,0),se.updateMatrix(),De.setMatrixAt(we,se.matrix),pe.setHSL(.27+Me(we,3)*.06,.5,.3+Me(we,8)*.1),De.setColorAt(we,pe)}),De.count=F.length;var Ne=new _n(new Yi(.2,5,4).translate(0,.12,0),new ve({flatShading:!0}),Math.max(1,Z.length));Z.forEach(function(jt,we){se.position.set(jt[0],$(jt[0],jt[1])-.02,jt[1]),se.scale.set(jt[2],jt[2]*.8,jt[2]*1.2),se.rotation.set(0,we,0),se.updateMatrix(),Ne.setMatrixAt(we,se.matrix),pe.setHSL(.22+Me(we,2)*.08,.4,.32+Me(we,6)*.1),Ne.setColorAt(we,pe)}),Ne.count=Z.length;var Oe=new _n(new Re(1,.3,.6).translate(0,.15,0),new ve({flatShading:!0}),Math.max(1,et.length));et.forEach(function(jt,we){se.position.set(jt[0],$(jt[0],jt[1]),jt[1]),se.rotation.set(0,jt[2],0),se.scale.set(jt[3],jt[4],1),se.updateMatrix(),Oe.setMatrixAt(we,se.matrix),pe.setHSL(.1+jt[5]*.05,.12,.62+jt[5]*.15),Oe.setColorAt(we,pe)}),Oe.count=et.length,h.add(De,Ne,Oe);var ze=[];for(g=2;g<m-2;g+=1)for(E=2;E<p-2;E+=1){var Be=Math.abs(E/(p-1)-.5)*2,Ue=Math.abs(g/(m-1)-.5)*2;if(!(Be>.8||Ue>.8)){var mn=t.el[g*p+E];if(!(mn>=290||mn<25)&&!(Me(E*1.3,g*2.1)>.055)){var je=v[(g*p+E)*3]+(Me(E,g*3)-.5)*.5,xe=v[(g*p+E)*3+2]+(Me(E*3,g)-.5)*.5;K(je,xe)<Y/2+1.2||Math.hypot(je-Gt.x,xe-Gt.z)<3.2||ze.push([je,xe])}}}var Te=new _n(new Yi(.17,5,4).translate(0,.28,0),new ve({flatShading:!0}),Math.max(1,ze.length));ze.forEach(function(jt,we){var Je=.8+Me(we,4)*.8;se.position.set(jt[0],$(jt[0],jt[1])-.02,jt[1]),se.scale.set(Je,Je,Je),se.rotation.set(0,we,0),se.updateMatrix(),Te.setMatrixAt(we,se.matrix),pe.setHSL(.24+Me(we,9)*.1,.42,.34+Me(we,1)*.12),Te.setColorAt(we,pe)}),Te.count=ze.length,h.add(Te)})();var Rt,ae,Vt,ce;(function(){function F(){Vt=Vt||document.createElement("canvas"),Vt.width=512,Vt.height=170;var Je=Vt.getContext("2d");return Je.fillStyle="#EDEDED",Je.fillRect(0,0,512,170),Je}var Z=F();Z.fillStyle="#1D2A23",Z.font="900 80px Georgia,serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText("MIZETA",256,70),Z.fillStyle="#F28A1D",Z.fillRect(110,124,292,8),Rt=new as(Vt),Rt.colorSpace=An,ce=document.createElement("canvas"),ce.width=1024,ce.height=220;function et(Je){var ln=ce.getContext("2d");if(ln.fillStyle="#1F2A32",ln.fillRect(0,0,1024,220),ln.fillStyle="#F28A1D",ln.fillRect(0,0,18,220),ln.fillRect(0,196,1024,24),ln.fillStyle="#FFFFFF",ln.font="800 124px system-ui,Arial,sans-serif",ln.textAlign="left",ln.textBaseline="middle",ln.fillText("MIZETA",52,92),ln.fillStyle="#F7C98E",ln.font="600 34px system-ui,Arial,sans-serif",ln.fillText("TRASPORTI E LOGISTICA",56,168),Je){var Ar=176,Fs=Ar*Je.width/Je.height;ln.fillStyle="#EDEDED",ln.fillRect(1024-Fs-40,22,Fs+20,Ar+0),ln.drawImage(Je,1024-Fs-30,22,Fs,Ar)}}et(null),ae=new as(ce),ae.colorSpace=An;var ft=new Image;ft.onload=function(){var Je=F();Je.drawImage(ft,0,0,512,170),Rt.needsUpdate=!0,et(ft),ae.needsUpdate=!0,ti=!0,vi()},ft.src="assets/mizeta.webp";var ut=new Hn,It=Gt.t,Kt=new ve({color:"#E9E6DC",flatShading:!0}),ot=new ve({color:"#8E9AA3",flatShading:!0}),Pt=new Ht(new Gn(4.6,3.8).rotateX(-Math.PI/2),new ve({color:"#8D9197",polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));Pt.position.set(0,.05,-.2),ut.add(Pt);var ee=new Ht(new Re(3.2,.78,1.5),Kt);ee.position.set(.2,.4,.9),ut.add(ee);var ne=new Ht(new Re(3.3,.06,1.6),ot);ne.position.set(.2,.81,.9),ut.add(ne);var _e=new Ht(new Re(.9,.62,.9),new ve({color:"#F28A1D",flatShading:!0}));_e.position.set(-1.75,.33,.55),ut.add(_e);var ie=new Ht(new Gn(.78,.2),new fn({color:"#7FB6D5"}));ie.position.set(-1.75,.38,.09),ie.rotation.y=Math.PI,ut.add(ie);for(var De=new ve({color:"#39434B",flatShading:!0}),se=0;se<5;se++){var pe=new Ht(new Re(.34,.34,.04),De);pe.position.set(-.7+se*.62,.2,.14),ut.add(pe)}var Ne=new Ht(new Gn(2.9,.62),new fn({map:ae}));Ne.position.set(.2,.62,.13),Ne.rotation.y=Math.PI,ut.add(Ne);function Oe(Je,ln,Ar,Fs){var ji=new Hn,gu=new Ht(new Re(1.5,.46,.52),new ve({color:"#F4F1E8",flatShading:!0}));gu.position.set(-.2,.34,0),ji.add(gu);var _u=new Ht(new Re(.42,.4,.5),new ve({color:Je,flatShading:!0}));_u.position.set(.76,.3,0),ji.add(_u);var xu=new Ht(new Re(.02,.2,.44),new fn({color:"#7FB6D5"}));return xu.position.set(.975,.38,0),ji.add(xu),[-.6,.15,.75].forEach(function(Ha){[-1,1].forEach(function(Tr){var vu=new Ht(ze,Be);vu.position.set(Ha,.1,Tr*.25),ji.add(vu)})}),[-1,1].forEach(function(Ha){var Tr=new Ht(new Gn(.8,.26),new fn({map:Rt}));Tr.position.set(-.2,.38,Ha*.2625),Ha<0&&(Tr.rotation.y=Math.PI),ji.add(Tr)}),ji.position.set(ln,.05,Ar),ji.rotation.y=Fs,ji}var ze=new Tn(.1,.1,.07,8).rotateX(Math.PI/2),Be=new ve({color:"#222"});ut.add(Oe("#F28A1D",-.9,-.6,Math.PI/2-0),Oe("#F28A1D",0,-.75,Math.PI/2),Oe("#F28A1D",1.1,-.55,Math.PI/2+.05));var Ue=new Hn;[-.62,.62].forEach(function(Je){var ln=new Ht(new Re(.06,1.5,.06),new ve({color:"#2A2F36"}));ln.position.set(Je,.75,0),Ue.add(ln)});var mn=new Ht(new Re(1.5,.52,.05),new ve({color:"#EDEDED"}));mn.position.set(0,1.55,0),Ue.add(mn);var je=new Ht(new Gn(1.44,.48),new fn({map:Rt}));je.position.set(0,1.55,.03),Ue.add(je);var xe=je.clone();xe.position.z=-.03,xe.rotation.y=Math.PI,Ue.add(xe);var Te=t.puntoA(pt+3.4),jt=mt(pt+3.4),we=Y/2+.9;Ue.position.set(Te.x-jt[1]*we,$(Te.x-jt[1]*we,Te.z+jt[0]*we),Te.z+jt[0]*we),Ue.rotation.y=Math.atan2(-jt[0],-jt[1])+Math.PI/2*0,h.add(Ue),ut.position.set(Gt.x,$(Gt.x,Gt.z),Gt.z),ut.rotation.y=Math.atan2(-It[1],It[0]),h.add(ut)})();var be=(function(){var F=pu(new Re(.85,.24,.44).translate(0,.19,0),new Re(.42,.18,.38).translate(-.05,.4,0)),Z=["#E8E4D8","#2E4057","#C74B50","#5E8C6A","#D9A441","#7C8591","#F2F2F2","#3A3F47"],et=[],ft=5,ut=8,It=2,Kt=3,ot;for(ot=0;ot<ft;ot++)et.push({k:0,dir:1,v:3+Me(ot,5)*1.6,a:Me(ot,9)*40,off:.72,c:ot});for(ot=0;ot<ut;ot++)et.push({k:0,dir:-1,v:4.5+Me(ot,7)*3,a:Me(ot,3)*40,off:ot%2?-.3:-.72,c:ot+3});for(ot=0;ot<It;ot++)et.push({k:1,dir:1,v:2.4+Me(ot,2),a:8+Me(ot,4)*30,off:.72,c:ot});for(ot=0;ot<Kt;ot++)et.push({k:1,dir:-1,v:3.4+Me(ot,6)*1.5,a:5+Me(ot,8)*30,off:-.72,c:ot});var Pt=et.filter(function(Oe){return!Oe.k}),ee=et.filter(function(Oe){return Oe.k}),ne=new _n(F,new ve({flatShading:!0}),Pt.length),_e=new _n(new Re(1.5,.46,.5).translate(-.1,.34,0),new ve({color:"#F4F1E8",flatShading:!0}),ee.length),ie=new _n(new Re(.42,.4,.48).translate(.86,.3,0),new ve({color:"#F28A1D",flatShading:!0}),ee.length),De=new re;Pt.forEach(function(Oe,ze){De.set(Z[Oe.c%Z.length]),ne.setColorAt(ze,De)}),h.add(ne,_e,ie);var se=new Ke,pe=Math.max(8,Ut-1.5);function Ne(Oe,ze,Be,Ue,mn){var je=((Ue.a+Ue.dir*Ue.v*mn)%pe+pe)%pe,xe=Ue.dir>0?.6+je:Ut-.6-je,Te=t.puntoA(xe),jt=mt(xe),we=Te.x-jt[1]*Ue.off,Je=Te.z+jt[0]*Ue.off;se.position.set(we,$(we,Je)+.055,Je),se.rotation.set(0,Math.atan2(-jt[1],jt[0])+(Ue.dir<0?Math.PI:0),0),se.scale.setScalar(Ue.k?1:1.15),se.updateMatrix(),Oe.setMatrixAt(Be,se.matrix)}return function(Oe){Pt.forEach(function(ze,Be){Ne(ne,Pt,Be,ze,Oe)}),ee.forEach(function(ze,Be){Ne(_e,ee,Be,ze,Oe),Ne(ie,ee,Be,ze,Oe)}),ne.instanceMatrix.needsUpdate=!0,_e.instanceMatrix.needsUpdate=!0,ie.instanceMatrix.needsUpdate=!0}})(),fe=new Hn,U,We=0,Dt=new N,me,St;(function(){var F=t.puntoA(at),Z=mt(at),et=new ve({color:"#8B929A",flatShading:!0}),ft=new ve({color:"#2A2F36",flatShading:!0});[-1,1].forEach(function(Pt){var ee=new Ht(new Re(.08,1.35,.08),et);ee.position.set(0,.675,Pt*(Y/2+.2)),fe.add(ee)});var ut=new Ht(new Re(.16,.13,Y+.5),et);ut.position.y=1.35,fe.add(ut),[-.26,.26].forEach(function(Pt){var ee=new Ht(new Re(.24,.17,.2),ft);ee.position.set(.04,1.2,Pt),fe.add(ee);var ne=new Ht(new Re(.03,.1,.1),new fn({color:"#DDEBFF"}));ne.position.set(.17,1.2,Pt),fe.add(ne)});var It=document.createElement("canvas");It.width=It.height=64;var Kt=It.getContext("2d"),ot=Kt.createRadialGradient(32,32,0,32,32,32);ot.addColorStop(0,"rgba(255,255,255,1)"),ot.addColorStop(.25,"rgba(255,250,225,.85)"),ot.addColorStop(1,"rgba(255,240,200,0)"),Kt.fillStyle=ot,Kt.fillRect(0,0,64,64),U=new ia(new dr({map:new as(It),transparent:!0,depthWrite:!1,blending:Pa,opacity:0})),U.position.set(.3,1.2,0),U.scale.setScalar(.01),fe.add(U),fe.position.set(F.x,$(F.x,F.z)+.05,F.z),fe.rotation.y=Math.atan2(-Z[1],Z[0]),h.add(fe),Dt.set(F.x,$(F.x,F.z)+1.8,F.z),me=document.createElement("div"),me.style.cssText="position:absolute;left:0;top:0;z-index:19;pointer-events:none;opacity:0;transition:opacity .25s,background .15s;will-change:transform;padding:4px 9px;border-radius:9px;font:700 11px/1 system-ui,sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:#27382b;white-space:nowrap",me.textContent="Autovelox",i.appendChild(me),St=document.createElement("div"),St.style.cssText="position:absolute;inset:0;z-index:30;pointer-events:none;background:#fff;opacity:0",i.appendChild(St)})();function qe(){We=performance.now(),!s&&St.animate&&St.animate([{opacity:0},{opacity:.16,offset:.12},{opacity:0}],{duration:480,easing:"ease-out"}),me.textContent="Multa!",me.style.background="#A22B3C"}var Zt="";function oe(){var F=Ee&&Math.abs(ye-at)<11,Z=ye>=at?"Multa!":"Autovelox",et=(F?"1":"0")+Z;et!==Zt&&(Zt=et,me.style.opacity=F?1:0,Z!==me.textContent&&(me.textContent=Z,me.style.background=Z==="Multa!"?"#A22B3C":"#27382b"))}var A=t.tappe.map(function(F,Z){var et=new Hn,ft=Z===t.tappe.length-1,ut=Z===0,It=F.m*e/1e3,Kt=Z>=Nt[0]&&Z<=Nt[1];if(ft){[[1,0,1.5],[.8,.9,1.3],[.6,1.6,1.1]].forEach(function(Be){var Ue=new Ht(new os(Be[0],Be[2],7),new ve({color:"#1E5A43",flatShading:!0}));Ue.position.y=Be[1]+Be[2]/2+.3,et.add(Ue)});var ot=new Ht(new Yi(.28,8,6),new fn({color:"#E2A93B"}));ot.position.y=3.25,et.add(ot);var Pt=new Ht(new Tn(.18,.18,.4,6),new ve({color:"#6b4a2f"}));Pt.position.y=.2,et.add(Pt)}else if(ut){var ee=new ve({color:"#F6ECD8",flatShading:!0}),ne=mt(.2),_e=Y/2+.3;[-_e,_e].forEach(function(Be){var Ue=new Ht(new Re(.16,1.2,.16),ee);Ue.position.set(0,.6,Be),et.add(Ue)});var ie=new Ht(new Re(.4,.22,_e*2+.3),new ve({color:"#A22B3C",flatShading:!0}));ie.position.y=1.3,et.add(ie);var De=new Ht(new Re(.5,.5,.26),ee);De.position.set(0,.25,0),et.add(De);var se=new Ht(new Re(.64,.05,.38),new ve({color:"#A22B3C"}));se.position.set(0,.52,0),et.add(se);var pe=new Ht(new Tn(.04,.04,2,5),new ve({color:"#2A2A2A"}));pe.position.set(0,1,_e+.35),et.add(pe);var Ne=new Ht(new Gn(.9,.55),new fn({color:"#E2A93B",side:2}));Ne.position.set(.47,1.75,_e+.35),et.add(Ne),et.rotation.y=Math.atan2(-ne[1],ne[0])}else{var Oe=new Ht(new Tn(.05,.05,1.5,5),new ve({color:"#2A2A2A"}));Oe.position.y=.75,et.add(Oe);var ze=new Ht(new Yi(.3,8,6),new ve({color:Kt?"#E2A93B":"#FFFBF2"}));ze.position.y=1.6,et.add(ze)}return et.position.set(F.x,It,F.z),h.add(et),{g:et,top:ft?3.7:ut?2.4:1.9,y0:It}}),x=new Hn;(function(){var F=new ve({color:"#A22B3C",flatShading:!0}),Z=new ve({color:"#15181C",flatShading:!0}),et=new ve({color:"#16212B",flatShading:!0}),ft=new ve({color:"#F6ECD8",flatShading:!0}),ut=new ls;[[-.62,.1],[.62,.1],[.655,.17],[.63,.24],[.5,.285],[.25,.33],[.06,.49],[-.12,.525],[-.34,.47],[-.54,.365],[-.625,.3]].forEach(function(xe,Te){Te?ut.lineTo(xe[0],xe[1]):ut.moveTo(xe[0],xe[1])});var It=new va(ut,{depth:.46,bevelEnabled:!0,bevelThickness:.025,bevelSize:.02,bevelSegments:1,steps:1});It.translate(0,0,-.23),x.add(new Ht(It,F));var Kt=new ls;[[.16,.34],[.04,.46],[-.11,.488],[-.3,.44],[-.46,.365],[-.2,.34]].forEach(function(xe,Te){Te?Kt.lineTo(xe[0],xe[1]):Kt.moveTo(xe[0],xe[1])});var ot=new ya(Kt);[1,-1].forEach(function(xe){var Te=new Ht(ot,et);Te.position.z=xe*.2565,xe<0&&(Te.rotation.y=Math.PI),x.add(Te)});var Pt=new Ht(new Re(.27,.012,.4),et);Pt.position.set(.155,.415,0),Pt.rotation.z=-.72,x.add(Pt),[1,-1].forEach(function(xe){var Te=new Ht(new Re(.5,.17,.075),F);Te.position.set(-.28,.215,xe*.285),x.add(Te);var jt=new Ht(new Re(.36,.11,.05),F);jt.position.set(.4,.2,xe*.262),x.add(jt);var we=new Ht(new Re(.05,.04,.04),F);we.position.set(.1,.375,xe*.285),x.add(we)});var ee=new Tn(.13,.13,.1,10).rotateX(Math.PI/2),ne=new Tn(.145,.145,.135,10).rotateX(Math.PI/2),_e=new Tn(.085,.085,.108,8).rotateX(Math.PI/2),ie=new Tn(.095,.095,.14,8).rotateX(Math.PI/2),De=new ve({color:"#C9CED4",flatShading:!0});[1,-1].forEach(function(xe){var Te=new Ht(ee,Z);Te.position.set(.4,.13,xe*.275),x.add(Te);var jt=new Ht(_e,De);jt.position.copy(Te.position),x.add(jt);var we=new Ht(ne,Z);we.position.set(-.37,.145,xe*.305),x.add(we);var Je=new Ht(ie,De);Je.position.copy(we.position),x.add(Je)}),[1,-1].forEach(function(xe){var Te=new Ht(new Re(.03,.14,.02),Z);Te.position.set(-.52,.5,xe*.17),Te.rotation.z=.25,x.add(Te);var jt=new Ht(new Re(.19,.075,.014),F);jt.position.set(-.575,.585,xe*.325),x.add(jt);var we=new Ht(new Tn(.05,.05,.02,10).rotateZ(Math.PI/2),new fn({color:"#FFF3B0"}));we.position.set(.62,.265,xe*.17),x.add(we)});var se=new Ht(new Re(.15,.02,.64),Z);se.position.set(-.575,.585,0),x.add(se);var pe=new Ht(new Re(.15,.016,.56),Z);pe.position.set(.645,.095,0),x.add(pe);var Ne=new Ht(new Re(.012,.03,.46),new fn({color:"#FF2A3C"}));Ne.position.set(-.64,.27,0),x.add(Ne);var Oe=new Ht(new fr(.62,10).rotateX(-Math.PI/2).scale(1,1,.62),new fn({color:"#27382b",transparent:!0,opacity:.28,depthWrite:!1}));Oe.position.y=.03,x.add(Oe);var ze=document.createElement("canvas");ze.width=ze.height=64;var Be=ze.getContext("2d");Be.fillStyle="#fff",Be.beginPath(),Be.arc(32,32,30,0,6.3),Be.fill(),Be.fillStyle="#111",Be.font="800 34px Georgia,serif",Be.textAlign="center",Be.textBaseline="middle",Be.fillText("19",32,35);var Ue=new as(ze);Ue.colorSpace=An;var mn=new fn({map:Ue}),je=new Ht(new Gn(.15,.15).rotateX(-Math.PI/2),mn);je.position.set(-.06,.532,0),x.add(je),[1,-1].forEach(function(xe){var Te=new Ht(new Gn(.17,.17),mn);Te.position.set(-.02,.215,xe*.2585),xe<0&&(Te.rotation.y=Math.PI),x.add(Te)})})(),x.scale.setScalar(1.2),h.add(x);var k=110,ct=new Float32Array(k*3),rt=new Float32Array(k),bt=new Float32Array(k),vt=new Float32Array(k*3),j=new Float32Array(k).fill(9),tt=new Float32Array(k).fill(1),Tt=new Float32Array(k),I=0,it=0,J=0,wt=!1,gt=new dn;gt.setAttribute("position",new hn(ct,3)),gt.setAttribute("aSize",new hn(rt,1)),gt.setAttribute("aAlpha",new hn(bt,1));var yt=new ri({transparent:!0,depthWrite:!1,uniforms:{uScale:{value:600}},vertexShader:"attribute float aSize; attribute float aAlpha; varying float vA; uniform float uScale; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / (-mv.z); vA = aAlpha; }",fragmentShader:"varying float vA; void main(){ float d = length(gl_PointCoord - 0.5) * 2.0; float a = smoothstep(1.0, 0.25, d) * vA; if (a < 0.01) discard; gl_FragColor = vec4(0.94, 0.95, 0.95, a); }"}),Yt=new aa(gt,yt);Yt.frustumCulled=!1,h.add(Yt);var he=new N,xt=new N,qt=new N;function Jt(F,Z){var et=J?Math.min(.05,(F-J)/1e3):.016;if(J=F,Z){x.updateMatrixWorld(!0);var ft=x.matrixWorld.elements;for(xt.set(ft[0],ft[1],ft[2]).normalize(),qt.set(ft[8],ft[9],ft[10]).normalize(),it+=95*Math.min(1,Math.abs(Ct)/.45)*et;it>=1;){it-=1;var ut=I&1?1:-1,It=I*3;I=(I+1)%k,he.set(-.37,.03,ut*.31),x.localToWorld(he),ct[It]=he.x,ct[It+1]=he.y,ct[It+2]=he.z;var Kt=Math.random();vt[It]=-xt.x*(.5+Kt)+qt.x*ut*.35*Kt,vt[It+1]=.35+.35*Math.random(),vt[It+2]=-xt.z*(.5+Kt)+qt.z*ut*.35*Kt,j[It/3]=0,tt[It/3]=.9+.6*Math.random(),Tt[It/3]=.14+.08*Math.random()}}for(var ot=!1,Pt=0;Pt<k;Pt++){var ee=j[Pt]+=et,ne=tt[Pt];if(ee>=ne){bt[Pt]=0,rt[Pt]=0;continue}ot=!0;var _e=ee/ne,ie=Pt*3;ct[ie]+=vt[ie]*et,ct[ie+1]+=vt[ie+1]*et,ct[ie+2]+=vt[ie+2]*et,vt[ie]*=1-et*1.6,vt[ie+2]*=1-et*1.6,rt[Pt]=Tt[Pt]+.75*Math.sqrt(_e),bt[Pt]=.72*Math.min(1,_e*14)*Math.pow(1-_e,1.4)}gt.attributes.position.needsUpdate=gt.attributes.aSize.needsUpdate=gt.attributes.aAlpha.needsUpdate=!0,wt=ot,yt.uniforms.uScale.value=o.domElement.height/(2*Math.tan(18*Math.PI/180))}var dt=n.pinsEl,Qt=[];r.forEach(function(F,Z){var et=document.createElement("button");et.type="button",et.className="pin",et.setAttribute("aria-label",F.n+", "+F.h),et.innerHTML='<span class="num">'+(Z+1)+'</span><span class="et"><b></b><small></small></span>',et.querySelector("b").textContent=F.n,et.querySelector("small").textContent=F.h,et.addEventListener("click",function(ft){ft.stopPropagation(),n.onPick(Z)}),dt.appendChild(et),Qt.push(et)});var $t=new cc(u,o.domElement);$t.enableDamping=!0,$t.dampingFactor=.09,$t.rotateSpeed=.7,$t.zoomSpeed=.8,$t.minDistance=3,$t.maxDistance=135,$t.minPolarAngle=.12,$t.maxPolarAngle=1.38,$t.screenSpacePanning=!1;var ye=0,rn=0,Ee=!1,bn=!1,Cn=null,li=0,Nn=0,ci=!0,xi=!1,ti=!0,an=new N,ei=new re,gs=new re,ni="",$i="",Pi=0;function Rn(F){F&&Ee&&tn(!1),xi=!!F,$t.enabled=xi&&!Ee,o.domElement.style.touchAction=xi?"none":"pan-y",n.onMode&&n.onMode(xi)}Rn(!1);function Ls(){var F=$t.target;F.x=Math.max(-t.SX/2,Math.min(t.SX/2,F.x)),F.z=Math.max(-t.SZ/2,Math.min(t.SZ/2,F.z))}$t.addEventListener("change",function(){Ls(),vi()});function Ds(F){return F<.5?4*F*F*F:1-Math.pow(-2*F+2,3)/2}function Ns(F,Z,et){s&&(F=1),Cn={t0:performance.now(),ms:F,fn:Z,fine:et},vi()}function _s(F,Z,et,ft,ut){var It=u.position.clone(),Kt=$t.target.clone();ft===void 0&&(ft=Math.atan2(It.x-Kt.x,It.z-Kt.z));var ot=new N(F.x+Math.sin(et)*Math.sin(ft)*Z,F.y+Math.cos(et)*Z,F.z+Math.sin(et)*Math.cos(ft)*Z);Ns(ut||1300,function(Pt){$t.target.lerpVectors(Kt,F,Pt),u.position.lerpVectors(It,ot,Pt),u.position.y+=Math.sin(Pt*Math.PI)*Z*.25})}var M={t:new N(0,.5,0),d:112,pol:.78,az:.2};function D(){Ee&&tn(!1),_s(M.t,M.d,M.pol,M.az,1500)}function W(F){var Z=t.orologio(ye),et=Ky(Z,ei,gs);f.copy(ei),h.fog.color.copy(ei),w.color.copy(gs);var ft=$t.target.x,ut=$t.target.z;w.position.set(ft+Math.sin(et.az)*Math.cos(et.el)*60,Math.sin(et.el)*60+4,ut-Math.cos(et.az)*Math.cos(et.el)*60),w.target.position.set(ft,0,ut),w.target.updateMatrixWorld();var It=ei.getHexString();It!==$i&&($i=It,i.style.setProperty("--cielo","#"+It));var Kt=ja(Z);Kt!==ni&&(ni=Kt,n.onClock&&n.onClock(Kt,Z))}function z(F){var Z=Ut-1.8;return F<Z?.3:F<Ut?.3*(1-(F-Z)/1.8):0}var O=null,At=0,zt=0,Et=0,Ct=0;function Ot(F){var Z=t.puntoA(ye),et=z(ye),ft=mt(ye),ut=Z.x-ft[1]*et,It=Z.z+ft[0]*et,Kt=Math.max(0,ye-.5),ot=Math.min(t.total,ye+.5),Pt=t.puntoA(Kt),ee=t.puntoA(ot),ne=mt(Kt),_e=mt(ot),ie=z(Kt),De=z(ot),se=Pt.x-ne[1]*ie,pe=Pt.z+ne[0]*ie,Ne=ee.x-_e[1]*De,Oe=ee.z+_e[0]*De,ze=Z.m*e/1e3+.06+(et?$(ut,It)-$(Z.x,Z.z):0),Be=Pt.m*e/1e3,Ue=ee.m*e/1e3;x.position.set(ut,ze,It);var mn=Ne-se,je=Oe-pe;if(mn*mn+je*je>1e-8){var xe=Math.atan2(-je,mn),Te=Math.atan2(Ue-Be,Math.hypot(mn,je));if(O===null||!Ee||s)O=xe,At=Te;else{var jt=Math.min(.08,Math.max(.001,(F-zt)/1e3));O+=Va(O,xe)*(1-Math.exp(-jt/.09)),At+=(Te-At)*(1-Math.exp(-jt/.15))}var we=F?Math.min(.08,Math.max(.001,(F-zt)/1e3)):.016;if(Ee&&!s&&F&&t.tornanti){var Je=Va(Et,O)/we,ln=on((ye-t.tornanti.s0)/.8)*(1-on((ye-t.tornanti.s1+.9)/.8));Ct+=(Math.max(-.6,Math.min(.6,Je*.24*ln))-Ct)*(1-Math.exp(-we/.12))}else Ct=0;Et=O,x.rotation.set(0,O+Ct,0),x.rotateZ(At),x.rotateX(-Ct*.12)}zt=F||0,n.onS&&(!Ee||!F||F-Pi>90)&&(Pi=F||0,n.onS(ye))}function te(F){ye=Math.max(0,Math.min(t.total,F)),Ot(),W(),vi()}function Se(F,Z){if(Ee&&Z!==!1&&tn(!1),rn=F,te(t.tappe[F].s),Qt.forEach(function(ut,It){ut.classList.toggle("sel",It===F)}),Z!==!1){var et=t.tappe[F],ft=new N(et.x,et.m*e/1e3,et.z);_s(ft,F===0||F===t.tappe.length-1?26:15,.95,void 0,1400)}n.onSel&&n.onSel(F),ti=!0,vi()}function Wt(F){Ee&&tn(!1);var Z=t.tappe[F],et=t.tappe[Math.max(0,F-1)],ft=new N(Z.x-.4,Z.m*e/1e3+1.15,Z.z+.6),ut=new N(et.x,et.m*e/1e3+1.6,et.z),It=u.position.clone(),Kt=$t.target.clone();te(Z.s),rn=F,Qt.forEach(function(ot,Pt){ot.classList.toggle("sel",Pt===F)}),n.onSel&&n.onSel(F),Ns(1900,function(ot){$t.target.lerpVectors(Kt,ut,ot),u.position.lerpVectors(It,ft,ot),u.position.y+=Math.sin(ot*Math.PI)*6})}var Ae=0,Ze=0,Xe=new N,Ge=new N;function on(F){return F=Math.max(0,Math.min(1,F)),F*F*(3-2*F)}var Xt=t.tappe[Math.min(5,t.tappe.length-1)].s,wn=t.tappe[Math.min(6,t.tappe.length-1)].s;function Fe(F){var Z=on((F-(Ut-7))/7),et=(.5+2.2*on((F-.7)/3.6))*(1-Z)+Z;return et*(1-.22*on((F-Xt)/1.5)*(1-on((F-wn)/1.5)))}var Ii=(function(){for(var F=0,Z=.1,et=0;et<t.total;et+=Z)F+=Z/Fe(et+Z/2);return F/n.durata})();function tn(F){if(F===void 0&&(F=!Ee),F===Ee)return Ee;if(Ee=F,$t.enabled=xi&&!Ee,F){ye>t.total-2&&te(0),bn=!0,Cn=null,Ae=performance.now(),Er=0,xs=0;var Z=t.puntoA(ye),et=t.puntoA(ye+3);Ze=Math.atan2(et.x-Z.x,et.z-Z.z),n.onGuida&&n.onGuida(!0)}else bn=!1,n.onGuida&&n.onGuida(!1);return vi(),Ee}function Us(F){var Z=Math.min(.08,Math.max(.001,(F-Ae)/1e3));Ae=F;var et=ye;ye+=Ii*Fe(ye)*Z,et<at&&ye>=at&&qe(),ye>=t.total&&(ye=t.total,tn(!1)),Ot(F),W();var ft=t.puntoA(ye),ut=t.puntoA(ye+3.2),It=t.puntoA(ye+6),Kt=Math.atan2(ut.x-ft.x,ut.z-ft.z);Ze+=Va(Ze,Kt)*(s?1:1-Math.exp(-Z*2.2));var ot=Math.sin(Ze),Pt=Math.cos(Ze),ee=ft.m*e/1e3;Xe.set(ft.x-ot*11,ee+7.2,ft.z-Pt*11),Ge.set(It.x*.35+ut.x*.65,ut.m*e/1e3+.2,It.z*.35+ut.z*.65);var ne=s?1:1-Math.exp(-Z*4),_e=s?1:1-Math.exp(-Z*5.5);u.position.lerp(Xe,ne),$t.target.lerp(Ge,_e);var ie=0,De=1e9;t.tappe.forEach(function(se,pe){var Ne=Math.abs(se.s-ye);Ne<De&&(De=Ne,ie=pe)}),ie!==rn&&De<1.5&&(rn=ie,Qt.forEach(function(se,pe){se.classList.toggle("sel",pe===ie)}),n.onSel&&n.onSel(ie))}var En=1,Un=1,Ie=l,pn=!1;function Pn(){var F=i.getBoundingClientRect(),Z=Math.max(1,Math.round(F.width)),et=Math.max(1,Math.round(F.height));if(Math.abs(Z-En)<2&&Math.abs(et-Un)<2&&En>1){l!==Ie&&(Ie=l,o.setPixelRatio(l),o.setSize(En,Un,!1),en());return}En=Z,Un=et,o.setSize(En,Un,!1),u.aspect=En/Un,u.updateProjectionMatrix(),ti=!0,pn&&en(),vi()}function $e(){t.tappe.forEach(function(F,Z){an.set(F.x,A[Z].y0+A[Z].top,F.z).project(u);var et=Qt[Z];if(an.z>1||an.z<-1){et.style.display="none";return}et.style.display="",et.style.transform="translate3d("+((an.x*.5+.5)*En).toFixed(1)+"px,"+((-an.y*.5+.5)*Un).toFixed(1)+"px,0) translate(-50%,-100%)",et.style.zIndex=Z===rn?20:Math.round(10+an.z*5)})}function en(){var F=u.position.distanceTo($t.target);if(h.fog.near=Math.max(8,F*.8),h.fog.far=F*3.4+60,We){var Z=(performance.now()-We)/520;Z>=1?(We=0,U.material.opacity=0,U.scale.setScalar(.01)):(U.material.opacity=1-Z*Z,U.scale.setScalar(.4+3.6*Math.sqrt(Z)))}oe(),be(performance.now()/1e3),o.render(h,u),$e(),an.copy(Dt).project(u),an.z<1&&an.z>-1&&Math.abs(an.x)<.92&&an.y>-.8&&an.y<1?me.style.transform="translate3d("+((an.x*.5+.5)*En).toFixed(1)+"px,"+((-an.y*.5+.5)*Un).toFixed(1)+"px,0) translate(-50%,-100%)":(me.style.opacity=0,Zt="")}var Fn=0,xs=0,Er=0;function Bp(F){if(!window.__noAdapt){if(Fn&&(xs+=F-Fn,Er++,Er>=24)){var Z=xs/Er;xs=0,Er=0,Z>30&&l>1&&(l=Math.max(1,l*.85),Pn())}Fn=F}}function mu(F){li=0;var Z=$t.update();Ee&&Us(F),!s&&(wt||Ee&&Math.abs(Ct)>.12)&&Jt(F,Ee&&Math.abs(Ct)>.12);var et=Z||Ee||Cn||We||wt;if(Cn){var ft=Math.min(1,(F-Cn.t0)/Cn.ms);if(Cn.fn(Ds(ft)),ft>=1){var ut=Cn.fine;Cn=null,ut&&ut()}}et||ti?(en(),ti=!1,Nn=0,et?Bp(F):Fn=0):(Nn++,Fn=0),(et||Nn<25)&&ci&&!document.hidden&&!li&&(li=requestAnimationFrame(mu))}function vi(){Nn=0,!li&&ci&&!document.hidden&&(li=requestAnimationFrame(mu))}return window.IntersectionObserver&&new IntersectionObserver(function(F){ci=F[0].isIntersecting,ci?(ti=!0,vi()):Ee&&tn(!1)}).observe(i),document.addEventListener("visibilitychange",function(){document.hidden||(ti=!0,vi())}),window.ResizeObserver?new ResizeObserver(Pn).observe(i):window.addEventListener("resize",Pn),o.domElement.addEventListener("webglcontextlost",function(F){F.preventDefault(),n.onPersa&&n.onPersa()}),Pn(),(function(){var F=M.t,Z=M.d,et=M.pol,ft=M.az;$t.target.copy(F),u.position.set(F.x+Math.sin(et)*Math.sin(ft)*Z,F.y+Math.cos(et)*Z,F.z+Math.sin(et)*Math.cos(ft)*Z)})(),Ot(),W(),Se(0,!1),en(),pn=!0,{seleziona:Se,setS:te,guida:tn,dallAlto:D,muovi:Rn,vista:Wt,inGuida:function(){return Ee},_debug:{camera:u,controls:$t,render:en,kick:vi,scene:h,renderer:o}}}window.MappaNatale={init:function(n){var t=Ed(n.terreno,n.stops),e={D:t,webgl:!1},i=null,s=null,r=0;function a(o){s&&s.set(o,r)}s=Ad(n.profiloCanvas,t,{caldo:n.caldo,onScrub:function(o){i?(i.inGuida()&&i.guida(!1),i.setS(o)):s.set(o,r)}});try{i=Op({wrap:n.canvasBox,pinsEl:n.pinsEl,stops:n.stops,ve:n.ve,durata:n.durata,caldo:n.caldo,reduced:n.reduced,onPick:function(o){i.seleziona(o,!0)},onSel:function(o){r=o,s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o)},onS:a,onClock:n.onClock,onMode:n.onMode,onGuida:n.onGuida,onPersa:function(){n.onFallback&&n.onFallback("persa")}},t),e.webgl=!0}catch(o){i=null,n.onFallback&&n.onFallback("webgl",o)}return s.set(0,0),e.vai=function(o){r=o,i?i.seleziona(o,!0):(s.set(t.tappe[o].s,o),n.onSel&&n.onSel(o))},e.guida=function(o){return i?i.guida(o):!1},e.dallAlto=function(){i&&i.dallAlto()},e.muovi=function(o){i&&i.muovi(o)},e.vista=function(o){i&&i.vista(o)},e._scena=i,window.MappaNatale.ultima=e,e}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
