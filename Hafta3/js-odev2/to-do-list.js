let btnDom = document.querySelector("#liveToastBtn")
let listDom = document.querySelector("#list")
let taskDom = document.querySelector("task")
let ulLength = document.getElementById("li") 

for( let index = 0; index<ulLength;i++){
    
    removeElement()
    ulLength[index].append(closeBtn) // liste elemanlarının her birine çarpı işareti ekledik
    ulLength[i].onclick=check // check fonksiyonunu çağırdık
}

function removeElement(){
    let closeBtn = document.createElement("span")
    closeBtn.textContent = "\u000D7" // listeye çarpı işareti ekledik
    closeBtn.classList.add("close")
    closeBtn.onclick = removeBtn // removeBtn fonksiyonunu çağırdık
}

btnDom.addEventListener('click',addElement)
// butona tıklandığında addElement fonks çalışacak

function check(){
    this.classList.toggle("checked")
    // toggle -> evet-hayır gibi iki şıklı seçenekler için kullanılır
    // tıklanan maddenin üzerini çiz, tick işareti koy 
}

function removeBtn(){
    this.parentElement.remove() 
    // çarpının bulunduğu elementi silmek için parentElement kullandık
}

function addElement(){
    if(taskDom.value==""){
        $(".error").toast("show") // input boş olduğu durumlarda
    } else {
        $(".success").toast("show")

        let liDom = document.createElement('li')
        listDom.appendChild(liDom) // yeni oluşturulacak maddeyi listeye ekledik
        liDom.innerHTML = task.value
        taskDom.value=""
    
        // sonradan eklenen maddeleri silmek için
        liDom.onclick = check
        removeBtn()
        liDom.append(closeBtn)
        listDom.append(liDom)
        inputElement.value =""
    }

}