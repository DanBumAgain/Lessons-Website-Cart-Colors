let addBtn = document.querySelector ('#plus')
let removeBtn = document.querySelector ('#minus')
let resetBtn = document.querySelector ('#reset')
let input = document.querySelector ('input')

addBtn.addEventListener('click', function(){
    input.value = Number (input.value) + 1
}) 

removeBtn.addEventListener ('click', function(){
    if (Number (input.value) > 0) {
        input.value = Number (input.value) - 1 
    } else {
        input.value = 0
    }
})

reset.addEventListener ('click', function(){
    input.value = 0
})


