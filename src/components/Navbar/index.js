const NavBar = () => {
    const body = document.querySelector('body');
    const header = document.createElement('header');

    header.innerHTML = `
        <nav>
            <div class="logo">
                <img src="/public/images/logo.svg"></img>
            </div>
        </nav>
    `

    body.prepend(header)
}

export default NavBar
