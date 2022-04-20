const charactersAPI = new APIHandler('./APIHandler');
// console.log()
// console.log("HOLIIIII")
// charactersAPI.getFullList()

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
      .then(({ data }) => {
        console.log(data)

        let innerText = "HOLIIII"
        // let htmlText = `<div class="character-info">
        //   <div class="name">Character Name</div>
        //   <div class="occupation">Character Occupation</div>
        //   <div class="cartoon">Is a Cartoon?</div>
        //   <div class="weapon">Character Weapon</div>
        // </div>`
        data.forEach(character => {

          innerText += `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div>
        </div>`
        })
        document.querySelector('.characters-container').innerHTML = innerText

      })
  })

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.querySelector('input[name="character-id"]').value
    console.log(id)

    let innerText = "HOLIIII"
    charactersAPI.getOneRegister(id)
      .then(({ data }) => {
        // console.log(data)
        innerText = `<div class="character-info">
          <div class="name">${data.name}</div>
          <div class="occupation">${data.occupation}</div>
          <div class="cartoon">${data.cartoon}</div>
          <div class="weapon">${data.weapon}</div>
        </div>`
        console.log(innerText)
        document.querySelector('.characters-container').innerHTML = innerText
      })


  })

  document.getElementById('delete-one').addEventListener('click', function (event) {

    let id = document.querySelector('input[name="character-id-delete"]').value
    console.log(id)

    let innerText = "HOLIIII"
    charactersAPI.deleteOneRegister(id)
      .then(() => {

        console.log("BORRADO!")
        document.querySelector('#delete-one').style.backgroundColor = "green"
        // document.querySelector('.characters-container').innerHTML = innerText
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#delete-one').style.backgroundColor = "red"

      })

  })

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {


    event.preventDefault()
    const inputs = document.querySelectorAll('#edit-character-form input')
    const id = inputs[0].value
    const characterData = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked
    }

    console.log(characterData)


    charactersAPI.updateOneRegister(id, characterData)
      .then(() => {

        console.log("EDITADO!")
        document.querySelector('#send-edit-data').style.backgroundColor = "green"
        // document.querySelector('.characters-container').innerHTML = innerText
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#send-edit-data').style.backgroundColor = "red"

      })

  })

  document.getElementById('new-character-form').addEventListener('submit', function (event) {


    event.preventDefault()
    // let id = document.querySelector('input[name="character-id-delete"]').value
    // console.log(id)

    const inputs = document.querySelectorAll('#new-character-form input')
    const characterData = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value,
      cartoon: inputs[3].checked
    }

    console.log(characterData)


    charactersAPI.createOneRegister(characterData)
      .then(() => {

        console.log("CREADO!")
        document.querySelector('#send-data').style.backgroundColor = "green"
        // document.querySelector('.characters-container').innerHTML = innerText
      })
      .catch(err => {
        console.log(err)
        document.querySelector('#send-data').style.backgroundColor = "red"

      })

  })
});
