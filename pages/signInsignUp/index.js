const body = document.querySelector("body");

const apiUrl = "https://notetaker-backend-connect.onrender.com";

window.addEventListener("load", () => {
    body.classList.add("visible");
});

const signInForm = document.querySelector(".signin-form");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const signInEmail = document.querySelector(".signin-email");
    const signInPassword = document.querySelector(".signin-password");

    const email = signInEmail.value;
    const password = signInPassword.value;

    fetch(`${apiUrl}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
        const { token } = data;
        if (token) {
            localStorage.setItem("jwt", token);
            location.href = "/pages/dashboard/dashboard.html";
        } else {
            alert("SignIn Again");
            location.href = "/pages/signInsignUp/authenticate.html";
        }
    })
    .catch((err) => {
        alert("Error Signing In!!! Re-try....");
        location.href = "/pages/signInsignUp/authenticate.html";
    });
});

const signUpForm = document.querySelector(".signup-form");

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.querySelector(".signup-email").value;
    const name = document.querySelector(".signup-name").value;
    const password = document.querySelector(".signup-password").value;
    const retypedPassword = document.querySelector(".signup-retyped-password").value;

    if (name.length === 0 || email.length === 0 || password.length === 0) {
        alert("Name, email, and password are required");
        return;
    }

    if (password !== retypedPassword) {
        alert("Passwords don't match");
        return;
    }

    fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    })
    .then((res) => res.json())
    .then((data) => {
        const { token } = data;

        if (token) {
            localStorage.setItem("jwt", token);
            location.href = "/pages/dashboard/dashboard.html";
        } else {
            alert("SignUp Again");
        }
    })
    .catch((err) => {
        alert("Error Signing Up!!! Re-try....");
        console.log(err);
    });
});