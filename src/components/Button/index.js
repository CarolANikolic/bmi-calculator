const generalBtn = () => {
    const btnBox = document.createElement('div');

    btnBox.innerHTML = `
        <button type='button' id='calcBtn'>Calculate</button>
    `
    return btnBox
}
export default generalBtn