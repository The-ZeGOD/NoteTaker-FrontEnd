const cardContainer = document.querySelector('.card-container');

const cardData = [
    {heading: "heading1", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sunt, id itaque beatae facilis ex magni laboriosam minima eligendi dolor est sed aut placeat consequatur nam perferendis tempora inventore nulla quod, nesciunt cumque ea! Non architecto neque, omnis sunt iusto eum. Necessitatibus ad illum blanditiis, porro aut distinctio reiciendis at.", id: 1},
    {heading: "heading2", content: "fdahskjhfdsah", id: 2},
    {heading: "heading3", content: "fdahskjhfdsah", id: 3},
    {heading: "heading4", content: "fdahskjhfdsah", id: 4},
    {heading: "heading5", content: "fdahskjhfdsah", id: 5},
    {heading: "heading6", content: "fdahskjhfdsah", id: 6},
    {heading: "heading7", content: "fdahskjhfdsah", id: 7},
];

const createNotes = (array) =>{
    array.forEach(cardObj=>{
        const {heading, content, id} = cardObj;
        
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = id;

        const insideHtml = `<div class="card-header"><div class="card-heading">${heading}</div><a href="../updateNotes/updateNotes.html?noteId=${id}"><div class="edit-note"><img src="../../assets/edit-note.svg" alt=""></div></a></div><div class="card-content">${content}</div>`;

        card.innerHTML = insideHtml;

        cardContainer.appendChild(card);
    })
};

createNotes(cardData);

const body = document.querySelector('body');

window.addEventListener('load', ()=>{
    body.classList.add("visible");
})