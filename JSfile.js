


let newBookbtn = document.querySelector("#new_book_button");

newBookbtn.addEventListener("click", function () {
    let addedBookForm = document.querySelector("#added_book_form");
    addedBookForm.style.display = "flex";
})


const myLibrary = [];

function render() {
    let libraryEl = document.querySelector("#library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
        <div class= "card-header">
            <h3 class="title">${book.title}</h3>
            <h4 class="author">by ${book.author}</h4>
        </div>
        <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove-btn" onclick = "removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read </button>
            
        </div>
        `;
        libraryEl.appendChild(bookEl)
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}







// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// this.info= function(){
//     return  this.title, "by",this.author, this.pages, this.read
// }


function addBookToLibrary() {
    // do stuff here
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read)
    myLibrary.push(newBook);
    render();
}

document.querySelector("#added_book_form").addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
}
)

