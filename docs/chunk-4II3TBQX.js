import{S as m,T as c,U as l,d as p,g as i,j as s,k as n}from"./chunk-32HZZRH4.js";var f={api_url:"https://platform.fintacharts.com",wss_url:"wss://platform.fintacharts.com",proxy_url:"https://cors-proxy.maria15021996.workers.dev"};var h=class o{constructor(t){this.http=t}api_url=f.proxy_url;get(t,r){let a=new m({"Content-Type":"application/x-www-form-urlencoded",Authorization:`Bearer ${localStorage.getItem("token")}`}),e=new c;return r&&(e=r),this.http.get(`${this.api_url}${t}`,{headers:a,params:e}).pipe(i(u=>this.formatErrors(u)))}post(t,r,a){return this.http.post(`${this.api_url}${t}`,r,{headers:a}).pipe(i(e=>this.formatErrors(e)))}formatErrors(t){return p(()=>t)}static \u0275fac=function(r){return new(r||o)(n(l))};static \u0275prov=s({token:o,factory:o.\u0275fac,providedIn:"root"})};export{h as a};
