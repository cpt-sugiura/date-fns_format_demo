import './style.css'
import {format} from 'date-fns';
import {ja} from 'date-fns/locale';

let _date = new Date(document.getElementById('date').value);
let _format = document.getElementById('format').value;

function update() {
  const displayEl = document.getElementById('display-body');
  displayEl.textContent = format(_date, _format, {locale: ja});

  const exampleEl = document.getElementById('examples-body');
  exampleEl.innerHTML = `
  <div>yyyy年MM月dd日(E) HH:mm:ss</div><div>${format(_date, 'yyyy年MM月dd日(E) HH:mm:ss', {locale: ja})}</div>
  <div>yyyy年M月d日(E) H:m:s</div><div>${format(_date, 'yyyy年M月d日(E) H:m:s', {locale: ja})}</div>
  <div>yyyy年M月d日(E) a h:m:s</div><div>${format(_date, 'yyyy年M月d日(E) a h:m:s', {locale: ja})}</div>
  <div>G yo mo do(E) Ho mo so</div><div>${format(_date, 'G yo mo do(E) Ho mo so', {locale: ja})}</div>
  <div>a ho mo</div><div>${format(_date, 'a ho mo', {locale: ja})}</div>
  <div>Q</div><div>${format(_date, 'Q', {locale: ja})}</div>
  <div>QQQQ</div><div>${format(_date, 'QQQQ', {locale: ja})}</div>
  <div>P</div><div>${format(_date, 'P', {locale: ja})}</div>
  <div>PPP</div><div>${format(_date, 'PPP', {locale: ja})}</div>
  <div>PPPP</div><div>${format(_date, 'PPPP', {locale: ja})}</div>
  <div>p</div><div>${format(_date, 'p', {locale: ja})}</div>
  <div>pp</div><div>${format(_date, 'pp', {locale: ja})}</div>
  <div>ppp</div><div>${format(_date, 'ppp', {locale: ja})}</div>
  <div>pppp</div><div>${format(_date, 'pppp', {locale: ja})}</div>
`

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
