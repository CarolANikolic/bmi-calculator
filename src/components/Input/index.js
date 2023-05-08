const addInput = (name, label, type) => {
    const inputSection = document.createElement('section');
    
    const inputBox = document.createElement('div');
    inputBox.innerHTML = `
    <label for=${name}>${label}</label>
    <input type=${type} id=${name} name=${name}>
    `
    inputSection.prepend(inputBox);
    return inputBox
}
export default addInput

