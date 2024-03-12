const storageKey = "feedback-form-state";
const form = document.querySelector(".feedback-form");
const dataFromLS = JSON.parse(localStorage.getItem(storageKey));
const message = form.elements.message;
const email = form.elements.email
if (dataFromLS) {
    message.value = dataFromLS.message
    email.value = dataFromLS.email
}
  function handleInput(event) {
    const currentMessageInput = message.value.trim();
    const currentEmailInput = email.value.trim();
    const dataToLS = JSON.stringify({email: currentEmailInput, message: currentMessageInput });
    localStorage.setItem(storageKey, dataToLS);
}
function handleSubmit(event) {
    event.preventDefault();
    const currentMessageSubmit = message.value.trim();
    const currentEmailSubmit = email.value.trim();
    if (!currentEmailSubmit || !currentMessageSubmit) {
        alert("No info")
        return
    }
    console.log({ email: currentEmailSubmit, message: currentMessageSubmit })
    localStorage.removeItem(storageKey);
    form.reset();
}
form.addEventListener("input", handleInput);

form.addEventListener("submit", handleSubmit);

