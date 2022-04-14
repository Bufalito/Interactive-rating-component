const list = document.querySelectorAll('li');
const submit = document.querySelector('button[type="submit"]');
const content = document.querySelectorAll('.content');

for (let i = 0; i < list.length; i++) {

    list[i].addEventListener("click", function () {
        removeSelect();
        list[i].classList.add('active');
    });

    function removeSelect() {
        list.forEach(e => e.classList.remove('active'));
    };
};

for (let x = 0; x < content.length; x++) {

    function send() {
        const active = document.querySelector('.active');

        if (active) {
            removeContent();
            console.log(active.textContent);
            content[1].classList.add('show');
            const selection = document.querySelector('#selection');
            const text = document.createTextNode(`You selected ${active.textContent} out of 5`);
            selection.appendChild(text);

        } else {
            console.log('hello');
            alert('You must enter a Rate to continue');
        }
    }

    function removeContent() {
        content[0].classList.remove('show');
    }
}

submit.addEventListener('click', send);