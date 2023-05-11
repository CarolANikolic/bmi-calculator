const addInput = (name, label, type) => {
    const inputForm = document.createElement('form');
    
    inputForm.innerHTML = `
    <label for=${name}>${label}</label>
    <input type=${type} class="inputField" data-person${name} name=${name} required>
    `
   
    return inputForm
}
export default addInput

