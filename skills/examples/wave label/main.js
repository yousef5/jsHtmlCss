// variables
const labels = document.querySelectorAll('label')
// change very letter in label with span that wil animate
 labels.forEach((label)=>{
    label.innerHTML = label.innerHTML.split("").
 map((l,e)=>{
         return `<span style="transition-delay : ${e * 50}ms">${l}</span>`
     }).join(" ")
 })
