export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        document.getElementsByTagName('button')[0].remove();
    });
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
        li.addEventListener('mouseover', function () {
            this.title = this.textContent;
        });
    });
    document.body.appendChild(ul);
}

export function createLink() {
    let countClick = 0;
    document.body.innerHTML = '<a>tensor</a>';
    document.getElementsByTagName('a')[0].setAttribute('href', 'https://tensor.ru/');
    document.getElementsByTagName('a')[0].addEventListener('click', function (event) {
            if (countClick == 0) {
                event.preventDefault();
                event.target.textContent = event.target.textContent + ' ' + 'https://tensor.ru/';
            }
            countClick++;
        });
}

export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    ul.appendChild(li);
    document.body.append(ul, button);
    li.addEventListener('click', function () {
        this.textContent += '!';
    });
    button.addEventListener('click', function () {
        const li2 = document.createElement('li');
        li2.textContent = 'Пункт';
        ul.appendChild(li2);
        li2.addEventListener('click', function () {
            this.textContent += '!';
        });
    });
}
