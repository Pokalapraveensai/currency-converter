let url= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies"
let select = document.querySelectorAll(".sel select");
let convert = document.querySelector("  button");
let pp= document.querySelector(".x2 p");
for(let sele of select){
for(let lis in countryList){
  let optionn = document.createElement("option");
  optionn.innerText= lis;
  optionn.value=lis;
  if(sele.name==="from" && lis==="INR" ){
     optionn.selected="selected";
  }
  else if(sele.name==="to" && lis==="USD" ){
     optionn.selected="selected";
  }
  sele.append(optionn);
}
 sele.addEventListener("change", (evt)=>{
 iupdate(evt.target);
 })
}

let iupdate = (cname)=>{
  
   let x= document.querySelectorAll("img");
   if(cname.name==="from"){
     const cn1= countryList[cname.value];
   let isrc1= `https://flagsapi.com/${cn1}/flat/64.png`;
     x[0].src=isrc1;
     
   } 
   else if(cname.name==="to"){
     const cn1= countryList[cname.value];
   let isrc1= `https://flagsapi.com/${cn1}/flat/64.png`;
     x[1].src=isrc1;
   } 
   }
   

   
   convert.addEventListener("click",  async (evt)=>{
    let textarea1= document.querySelector(".u");
    let textv= textarea1.value;
    if(textv==="" || textv < 0){
      textv=1;
      textarea1.value="1";
    }
    console.log(textv);
    
  let vv= `${url}/${select[0].value.toLowerCase()}.json`;
   let h= await fetch(vv);
   let h1= await h.json();
   let cc=h1[select[0].value.toLowerCase()];
   let cc1=cc[select[1].value.toLowerCase()];
   
    let amount= textv * cc1;
    console.log(amount);
  pp.innerText= `${textv} ${select[0].value} = ${amount} ${select[1].value}`;
  
   });
  





