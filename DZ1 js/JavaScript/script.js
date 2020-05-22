var block = document.getElementById('body');

function editColor() {
    if (block.style.backgroundColor === 'rgb(17, 0, 255)') {
        block.style.backgroundColor = 'rgb(187, 255, 0)';

    } else {
        block.style.backgroundColor = 'rgb(17, 0, 255)';
    }
};

function Delete() {
    if (block.style.display === 'flex') {
        block.style.display = 'none';

    } else {
        block.style.display = 'flex';
    }
};

