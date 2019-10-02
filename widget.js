class Bar {
    constructor({ message, position }) {
        this.message = message;
        this.position = position;


        this.createBar();
        const buttonShow = document.getElementById('button-show');
        buttonShow.onclick = this.showBar;
        buttonShow.classList.add('button-show');

    }
    defaultCallback() {
        alert('Hello World');
    }

    closeBar() {
        const bar = document.getElementById('bar');
        bar.classList.add('fadeout');
        bar.classList.remove('fadein');
    }
    showBar() {
        const bar = document.getElementById('bar')
        if (bar.classList.contains('fadeout')) {
            bar.classList.remove('fadeout')
            bar.classList.add('fadein')
        }

    }

    createBar() {
        const bar = document.createElement('div');
        bar.id = "bar";
        bar.classList.add('bar');
        bar.classList.add('fadeout');


        switch (this.position) {
            case 'top':
                bar.classList.add('bar--top');
                break;
            case 'bottom':
                bar.classList.add('bar--bottom');
                break;
        }
        bar.innerHTML = `<p>${this.message}</p>`;
        const buttonGetElement = document.createElement('button');
        buttonGetElement.textContent = 'Get widgets';
        buttonGetElement.classList.add('button-warning');
        buttonGetElement.onclick = this.defaultCallback;

        const buttonClose = document.createElement('button');
        buttonClose.textContent = 'X';
        buttonClose.classList.add('button-close');
        buttonClose.onclick = this.closeBar;

        bar.appendChild(buttonGetElement);
        bar.appendChild(buttonClose);

        document.body.appendChild(bar);
    }


}