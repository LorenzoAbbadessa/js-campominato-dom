// <div class="cubo"></div>

let numCell = 100;
let container = document.getElementById("contenitore");

// i 100 numeri convertirli in tag da inserire in un div con una specifica classe

for (let i = 1; i <= numCell; i++) {
    
    
    const cella = document.createElement ("div");  //creo cella (div in html)
    cella.classList.add("cubo");                   //aggiungo la classe alla cella (div)
    container.appendChild(cella);                  //inseriscco cella (div) in container   

    cella.innerHTML = (i)

    cella.addEventListener("click", function(){
        this.classList.add("coloreclick");
        
    })
}

//genera 16 numeri da 1 a 100



// compara i 16 numeri ai numeri della griglia 