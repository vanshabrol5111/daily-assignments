
let library = [];
function addBook(id, title, author) 
{

library.push({
    id:id,
    title:title,
    author:author,
    isBorrowed:false,
 

});
localStorage.setItem("books",JSON.stringify(library))
}
  
function borrowBook(id)
 {
    const book = library.find(item=> item.id === id);
    if (book) {
        if (book.isBorrowed) 
            {
            console.log(`The book "${book.title}" is already borrowed.`);
        }
         else
          {
            book.isBorrowed = true;
            console.log(`the book with id"${book.id}" and title"${book.title}" is  not available `);
        }
    } else
     {
        console.log(`No book found with ID" ${id}"`);
    }
    localStorage.setItem("books",JSON.stringify(library))
}


function returnBook(id)
 {
    const book = library.find(item => item.id === id);
    if (book) {
        if (!book.isBorrowed) {
            console.log(`The book "${book.title}" is not borrowed.`);
        } else {
            book.isBorrowed = false;
            console.log(`You have returned the book: ${book.title}`);
        }
    } else {
        console.log(`No book found with id ${id}`);
    }
    localStorage.setItem("books",JSON.stringify(library))
}


function listAvailableBooks() 
{
    for(item of library)
        {
            if(item.isBorrowed == false)
            {
                console.log( `id"${item.id}", title "${item.title}", author"${item.author}"`)
            }
        }
        let abc=JSON.parse(localStorage.getItem("library"))

}


function searchBook(title) 
{
    const book = library.find(item => item.title=== title);
    if (book)
         {
        console.log(`Found book: ${book.title} by ${book.author}`);
    
    }
     else 
    
    {
        console.log(`No book found with title "${title}"`);
       
    }
    let abc=JSON.parse(localStorage.getItem("library"))

}

addBook(1, 'hindi', 'Vansh');
addBook(2, 'english', 'Sidharth');
addBook(3, 'math', 'Eshaan ');
console.log(library);
let xyz=JSON.parse(localStorage.getItem("library"))



 borrowBook(2);
borrowBook(5);
let def=JSON.parse(localStorage.getItem("library"))



returnBook(3);
returnBook(6);
let van=JSON.parse(localStorage.getItem("library"))


listAvailableBooks();



searchBook('hindi');
searchBook('Chemistry');