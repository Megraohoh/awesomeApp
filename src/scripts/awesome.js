//Final output DOM component reference
const output = document.querySelector(".output")

//Fragment to hold all the stuff so we can inject into the DOM once
const fragment = document.createDocumentFragment()

//Create factory function to generate components
//Create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.setAttribute("type", type)
    inputField.classList = classList
    inputField.type = type
    inputField.placeholder = defaultPlaceholderText

    return inputField
}

//Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent

    return theButton
}

const createCardButton = buttonFactory("button--submit", "Create Card")
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")

//Attach event listener to button
createCardButton.addEventListener("click", function() {
    // Get value of input field
    const userEntry = cardTextInput.value

    //Create card component with the text inside
})

fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)




//Create card component

output.appendChild(fragment)