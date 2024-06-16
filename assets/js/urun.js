let urunForm = document.querySelector('.urunForm');
let sifirlama = document.querySelector('.delete');

let giyimList = document.querySelector('.giyim');
let elektronikList = document.querySelector('.elektronik');
let evList = document.querySelector('.ev');
let kozmetikList = document.querySelector('.kozmetik');
let sporList = document.querySelector('.spor');

let urunList = [];

if(typeof localStorage.urunList !== 'undefined') {
  urunList = JSON.parse(localStorage.urunList);
  renderForm();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(urunForm);
  let formObj = Object.fromEntries(formData);
  urunList.push(formObj);
  urunForm.reset();
  saveForm();
  renderForm();
}

urunForm.addEventListener('submit', handleSubmitForm);

function saveForm() {
  localStorage.urunList = JSON.stringify(urunList);
}

function renderForm() {

  giyimList.innerHTML = '';
  elektronikList.innerHTML = '';
  evList.innerHTML = '';
  kozmetikList.innerHTML = '';
  sporList.innerHTML = '';

  for(let i = 0; i < urunList.length; i++) {
    let urunListItem = ` <div class="urun">
    <p> ${urunList[i].name} </p>
    <p> ${urunList[i].fiyat} </p>
    <p> ${urunList[i].catagory} </p>
    <p> ${urunList[i].aciklama} </p>
    <p> ${urunList[i].gorsel} </p>
    </div>`;

    if(urunList[i].catagory === 'giyim') {
      giyimList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'elektronik') {
      elektronikList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'ev') {
      evList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'kozmetik') {
      kozmetikList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'spor') {
      sporList.innerHTML += urunListItem;
    }
  }

}

function clearForm() {
  localStorage.clear();
  urunList = [];
  renderForm();
}

sifirlama.addEventListener('click', clearForm);