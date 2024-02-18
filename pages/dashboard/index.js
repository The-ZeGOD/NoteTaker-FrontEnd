const cardContainer = document.querySelector('.card-container');
const logout = document.querySelector(".logout");
const createNoteButton = document.querySelector(".new-note");

const apiUrl = "https://notetaker-backend-connect.onrender.com";

const token = localStorage.getItem("jwt");

logout.addEventListener("click", ()=>{
    localStorage.removeItem("jwt");
    location.href = "/";
})

let cardData = [
    // {heading: "heading1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, id itaque beatae facilis ex magni laboriosam minima eligendi dolor est sed aut placeat consequatur nam perferendis tempora inventore nulla quod, nesciunt cumque ea! Non architecto neque, omnis sunt iusto eum. Necessitatibus ad illum blanditiis, porro aut distinctio reiciendis at.", id: 1},
    // {heading: "heading2", content: "fdahskjhfdsah", id: 2},
    // {heading: "heading3", content: "fdahskjhfdsah", id: 3},
    // {heading: "heading4", content: "fdahskjhfdsah", id: 4},
    // {heading: "heading5", content: "fdahskjhfdsah", id: 5},
    // {heading: "heading6", content: "fdahskjhfdsah", id: 6},
    // {heading: "heading7", content: "fdahskjhfdsah", id: 7},
];

createNoteButton.addEventListener("click", ()=>{
    location.href = "/pages/createNotes/createNotes.html"
})

const createNotes = (array) =>{
    cardContainer.innerHTML = "";

    array.forEach(cardObj=>{
        const {heading, content} = cardObj;
        const id = cardObj.noteId;
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt=""></div></a></div><div class="card-content">${content}</div>`;

        card.innerHTML = insideHtml;

        cardContainer.appendChild(card);
    })
};

const body = document.querySelector('body');

window.addEventListener('load', ()=>{
    body.classList.add("visible");

    if(token){
        fetch(`${apiUrl}/note/getallnotes`, {
            method: "GET",
            headers: {
                authorization: token,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            cardData = data.data;
            createNotes(data.data);
        })
        .catch((err) => {
            alert("Error Fetching Data!!! Re-try....");
            console.log(err);
        });
    }else{
        location.href = "/";
    }
})