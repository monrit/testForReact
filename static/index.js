"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const modalWindow = document.getElementById("myModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.getElementById("close");
    const confirm = document.getElementById("confirm");
    let userName;
    let password;

    openModal.onclick = submit;

    closeModal.onclick = () => {
        modalWindow.style.display = "none";
    };

    confirm.onclick = () => {
        document.body.innerHTML = "";
        const greeting = document.createElement("h1");
        const image = document.createElement("img");
        greeting.classList.add("greeting");
        image.classList.add("image");
        image.src = "https://assets.petco.com/petco/image/upload/f_auto,q_auto/ferret-caresheet-hero";
        greeting.innerText = `Hello, user with email: ${userName}`;
        document.body.appendChild(greeting);
        document.body.appendChild(image);
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            submit();
            event.preventDefault();
        }
    });

    function submit() {
        userName = document.getElementById("userName").value;
        password = document.getElementById("userPassword").value;
        if (!userName || !password) {
            alert("Must provide email and password.");
            return;
        }
        document.getElementById("user").innerText = `${userName}`;
        modalWindow.style.display = "block";
    }
});
