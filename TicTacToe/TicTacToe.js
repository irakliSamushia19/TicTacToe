var items = document.querySelectorAll(".item")
var restart = document.querySelector(".restart")
var counter = 0
var toast = document.querySelector(".toast")
var combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
for(var i of items) {
    i.addEventListener("click", function(){
        if(this.innerText == ''){
            counter % 2 == 0 ? this.innerText = 'X' : this.innerText = 'O'
            counter++;
        }
        var ind = [...items].indexOf(this)
        for(var i of combinations){
            if(i[0] == ind || i[1] == ind || i[2] == ind){
                if(items[i[0]].innerText == items[i[1]].innerText && items[i[1]].innerText == items[i[2]].innerText && items[i[2]].innerText !==""){    
                    toast.innerText = `${items[i[0]].innerText} is winner`
                    disable()                       
                } 
            }     
        }
        if (counter == 9){
            toast.innerText = "draw"
        }
    })

}
function disable(){
    for(var i of items){
        i.style.pointerEvents = "none"
    }
}
restart.addEventListener("click", function(){
    for( var i of items){
        i.innerText = ''
        i.style.pointerEvents = "auto"
        toast.innerText = ''
        counter = 0
    }   
})
