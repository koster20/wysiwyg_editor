const editor = document.getElementsByClassName('editor')[0];
const toolbar = editor.getElementsByClassName('toolbar')[0];
const buttons = toolbar.querySelectorAll('btn:not(.has-submenu)')[0];
const contentArea = editor.getElementsByClassName('content-area')[0];
const visuellView = contentArea.getElementsByClassName('visuell-view')[0];
const htmlView = contentArea.getElementsByClassName('html-view')[0];
const modal =document.getElementsByClassName('modal')[0];


for(let i=0;i<buttons.length;i++){
    let button =buttons[i];
    button.addEventListener('click',function(e){
        let action =this.dataset.action;
        switch(action){
            case 'code':
                execCodeAction(this, editor);
                break;
            case 'createLink':
                execLinkAction();
                break;
            default:
                execDefaultAction(action);
        }

    });
}
function execDefaultAction(action) {
    document.execCommand(action, false);
}
function execCodeAction(button,editor){
    if(button.classList.contains('active')){
        visuellView.innerHTML = htmlView.value;
        htmlView.getElementsByClassName.display = 'none';
        visuellView.style.display = 'block';
    
        button.classList.remove('active');
    }
    else{
        htmlView.innerHTML = visuellView.innerHTML;
        visuellView.style.display = 'none';
        htmlView.style.display = 'block';

        button.classList.addEventListener('active');
    }
}

function execLinkAction() {
    modal.style.display = 'block';
    let selection =saveSelection();


    let submit = modal.querySelectorAll('button.done')[0];
    let close = modal.querySelectorAll('.close')[0];
}


function saveSelection(){
    if(window.getSelection) {
        sel = window.getSelection();
        if(sel.getRangeAt && sel.rangeCount) {
            let ranges = [];
            for(var i=0,len =sel.rangeCount; i<len; ++i){
                ranges.push
            }
        }
    }
}