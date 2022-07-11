import './style.css'
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';

let _date = new Date(document.getElementById('date').value);
let _format = document.getElementById('format').value;

function update() {
  const displayEl = document.getElementById('display-body')
  displayEl.textContent = format(_date, _format, {locale: ja});
}

document.addEventListener("DOMContentLoaded", update);
document.getElementById('format').addEventListener('input', function (e) {
  _format = e.currentTarget.value;
  update();
})
document.getElementById('date').addEventListener('input', function (e) {
  _date = new Date(e.currentTarget.value)
  update();
})
