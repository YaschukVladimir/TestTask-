const dataInput = document.querySelector('.input');
const treeContainer = document.querySelector('.tree');
const button = document.querySelector('.button');

const handleClick = () => {
    treeContainer.insertAdjacentHTML('beforeend', renderTree(stringPrepare(dataInput.value)))
}

button.addEventListener('click', handleClick)

function stringPrepare (str) {
    const treeArray = [];
    let level = 0;
    let subChar = '';
    let indexOfChar = 0;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '(' || str[i] === ')' || str[i] === ' ') {
            if (subChar) {
                indexOfChar += 1;
                const node = {
                    value: subChar,
                    level: level,
                    index: indexOfChar
                }
                subChar = '';
                treeArray.push(node);
            }
            if (str[i] === ')') {
                level -= 1;
            }
            if (str[i] === '(') {
                level += 1;
            }
        } else {
            subChar += str[i]
        }
    }
    return treeArray;
}

function renderTree (treeObjects) {
    const html = treeObjects.map((object) => {
        return `<div class="level level${object.level}">${object.value}</div>`
    })
    return html.join().replaceAll(',', '');
};

