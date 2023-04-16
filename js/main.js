/*  header html   */
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <div class="container">
        <h1>Cafe Name</h1>
        <p>Delicious food, sustainably sourced</p>
        </div>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader)

/*  Footer html   */
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container">
            <p>&copy; Cafe Name 2023. All rights reserved.</p>
        </div>
        </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)

/*  header html   */
class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
        <div class="container">
            <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="menu.html">Menu</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            <li><a href="login.html">Login</a></li>
            <li><a href="signup.html">Sign Up</a></li>
            </ul>
        </div>
        </nav>
        `
    }
}

customElements.define('my-navbar', MyNavbar)
