const title = document.getElementById("main_title")
const titleInput = document.getElementById("title_input")
const submitBtn = document.getElementById('submit_button')

const noun = document.getElementById('noun')
const verb = document.getElementById('verb')
const adjective = document.getElementById('adjective')

titleInput.onchange = (e) =>{
    title.innerHTML = e.target.value
}


submitBtn.addEventListener('click', checkForEmpty ,false)


function checkForEmpty(event){
    if(titleInput.value === ""|| noun.value === "" || verb.value === "" || adjective.value === ""){
        console.log("nope")
        event.preventDefault();
    }

}



