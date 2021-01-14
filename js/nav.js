addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if(btn_menu){
        btn_menu.addEventListener('click',() =>{
            const anclas = document.querySelector('.anclas')
            anclas.classList.toggle('show')
        })
    }

})