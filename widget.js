class Bar {
    constructor({ message, position }) {
        this.message = message;
        this.position = position;


        this.createBar();
        const buttonShow = document.getElementById('button-show');
        buttonShow.onclick = this.showBar;
        buttonShow.classList.add('button-show');

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
        bar.innerHTML = `<p>${this.message}</p>`


        document.body.appendChild(bar);
    }

    showBar() {
        const bar = document.getElementById('bar')
        if (bar.classList.contains('fadeout')) {
            bar.classList.remove('fadeout')
            bar.classList.add('fadein')
        }

    }
}