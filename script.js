document.addEventListener('DOMContentLoaded', ()=>{
    fetchCharacter()
    submitId()
})

//fetch character details
function fetchCharacter(){
    fetch("https://bobsburgers-api.herokuapp.com/characters/1")
    .then(resp =>resp.json())
    .then(details =>{
        //console.log(details)

        const image = document.querySelector('#image');
        const name = document.querySelector("#name");
        const gender = document.querySelector("#gender");
        const occupation = document.querySelector("#occupation");
        const voice = document.querySelector("#voice");

        image.src = details.image;
        name.textContent = `Name: ${details.name}`;
        gender.textContent = `Gender:  ${details.gender}`;
        occupation.textContent = `Occupation: ${details.occupation}`;
        voice.textContent = `VoicedBy: ${details.voicedBy}`
})
}

//add a submit event
function submitId(){
    const form = document.querySelector("#form")
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        //console.log(e.target.identity.value)
        const input = document.querySelector("#identity").value
        //console.log(input)

        fetch(`https://bobsburgers-api.herokuapp.com/characters/${input}`)
        .then(resp => resp.json())
        .then(character =>{
            console.log(character)

            const charImage = document.querySelector('#image');
            const charName = document.querySelector("#name");
            const charGender = document.querySelector("#gender");
            const charOccupation = document.querySelector("#occupation");
            const charVoice = document.querySelector("#voice");

            charImage.src = character.image
            charName.textContent = `Name: ${character.name}`;
            charGender.textContent = `Gender:  ${character.gender}`;
            charOccupation.textContent = `Occupation: ${character.occupation}`;
            charVoice.textContent = `VoicedBy: ${character.voicedBy}`

            form.reset()

            


        })
    })
    const div = document.querySelector(".container")
    //console.log(div)
    div.addEventListener('mouseover', (e)=>{
        e.target.style.color = "white"
        setTimeout(() =>{
            e.target.style.color = ""
        }, 2000)
    })
}
// function mouseOver(){
//     const div = document.querySelector('.container')
//     console.log(div)
//     div.addEventListener('mouseenter', ()=>{
//         div.style.background = "blue"
//     })
// }



