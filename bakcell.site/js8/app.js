let pass=document.getElementById("pass")
let pasmsg=document.getElementById("pasmsg")
let pasmsh=document.getElementById("pasmsh")
let pasmsu=document.getElementById("pasmsu")
let btn=document.getElementById("btn")

// if (a.includes(a.toLowerCase())){
//       console.log("Boyuk herf olmalidir")
// }else if(a.slice(0,1)==(a.replace(/[^0-9]/gi,""))){
//      console.log("Herfle baslamalidir")
// }else if(a.length<8){
//     console.log("uzunlugu 8 den uzun olmalidir")
// }else{
//     console.log("success")
// }

// pass.addEventListener("input",()=>{
//     // console.log(pass.value.slice(0,1)==(pass.value.replace(/[^0-9]/gi,"")))
//     // if(pass.value.slice(0,1) !== (pass.value.replace(/[^0-9]/gi,""))){
       
//         // pasmsh.style.display="block";
//         // console.log(pass.value.length)
//         // if(pass.value.length < 8)
//         //      pasmsu.style.display="block"
//         //      console.log("test")
//         //     if(pass.value.includes(pass.value.toLowerCase())){
//         //         pasmsg.style.display="block"
//         //     } else{
//         // pasmsu.style.display="none"
//         // pasmsg.style.display="none"
//         // pasmsh.style.display="none"
       
//     // }
//     // if (pass.value.length < 8) {
//     //     pasmsu.style.display="block"
//     // } else {
//     //     pasmsu.style.display="none"
//     // }
//     // if (pass.value[0]) {
//     //     block
//     // }
//     // if (pass.value[0].toUpperCase() !== pass.value[0]) {
//     //     pasmsg.style.display="block"
//     // } else {
//     //     pasmsg.style.display="none"
//     // }
//     // console.log(pass.value[0].toUpperCase())
// })
// pass.addEventListener("input",()=>{
//     if(pass.value.includes(pass.value.toLowerCase())){
//         pasmsg.style.display="block"
    
//     }
//     else{
//         pasmsg.style.display="none"
       
//     }
// })


let n=document.getElementById("n")
let sn=document.getElementById("sn")
let pasword=document.getElementById("pasword")
let nam=document.getElementById("nam")
let surname=document.getElementById("surname")
let error=document.getElementById("error")

let fin=document.getElementById("fin")


n.addEventListener("keyup",()=>{
    nam.innerHTML=n.value
})
sn.addEventListener("keyup",()=>{
    surname.innerHTML=sn.value
})

pasword.addEventListener("keyup",()=>{
    if(pasword.value.length>=16){
            error.style.display="block";
            // fin.innerText=pasword.value.substring(0,16)
            pasword.value = fin.innerText.substring(0,16)
     
    }

    else{
        fin.innerText = pasword.value
        error.style.display="none"
        // pasword.target.value=pasword.target.value.replaceAll(/[a-z]/g," ")
        
      }
})


       

