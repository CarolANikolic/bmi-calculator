const generalBtn = (reaction) => {

    const body = document.createElement('body');

    body.innerHTML = `
        <button onclick="(${reaction})()">Calculate</button>
    `
    return body
}
export default generalBtn