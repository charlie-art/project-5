let searchBox = document.querySelector('#search');
let pictures = docment.querySelectorAll('a');

searchBox.addEventListner("keyup", (event) => {

    if (searchBox.value == null) {
        console.log(searchBox.value);
        for (let i = 0; i < pictures.length; i++) {
            pictures[i].style.display = "inline";
        }
        if (pictures[i].data.title.includes(searchBox.value()) || searchBox.value.length == 0) {
            pictures[i].style.display = "inline";
            console.log('showing and value was' + searchBox.value);
        } else {
            pictures[i].style.display = 'none';
        }
    }

}); 