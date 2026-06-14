const btnMulaiGratis =document.querySelector('#cta-btn');

let counter = 0;

btnMulaiGratis.addEventListener('click',() =>{
  counter++;
  //TODO Action
  //kalau mau di rubah jadi dari 0 tanpa rubah kode dan nambah -1

  if (counter === 1 ){
    console.log('clicked');
    btnMulaiGratis.disabled = true;
    btnMulaiGratis.classList.add('opacity-50') //ini bisa untuk kasih class untuk kasih style dan lainnya by logic
  }else if (counter === 2){
    console.log ('off');
  }
});