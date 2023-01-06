// var boxshadow = "";
// for (var i = 0; i <= 2000; i++) {
//     px = Math.random() < 0.5 ? "-" : ""; 

//     
//     
// }
//  
document.body.addEventListener("keydown", (event) => {
    if (event.ctrlKey) { event.preventDefault() }
});
//создаем крутящуюся метель
var boxshadow = "";
for (var i = 0; i <= 2000; i++) {
    px = Math.random() < 0.5 ? "-" : "";
    py = Math.random() < 0.5 ? "-" : "";
    x = Math.floor((Math.random() * window.innerWidth) + 1);
    y = Math.floor((Math.random() * window.innerHeight) + 1);
    s = Math.floor((Math.random() * 2) - 1);
    boxshadow += px + x + "px " + py + y + "px 0 " + s + "px #fff,";
}

boxshadow = boxshadow.slice(0, -1);

stars.style.boxShadow = boxshadow;
//=======================================
let priz = document.querySelector('#container div:last-child')
let boxPriz = document.querySelectorAll('#container div img')
for (let i = 0; i < boxPriz.length; i++) {
    console.log(boxPriz[i].src)
    boxPriz[i].onclick = function () {
        priz.style.fontSize = `32px`;
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%B4%D0%B5%D0%BB%D1%8C%D1%84%D0%B8%D0%BD.jpg')
            priz.innerHTML = `Счастья, радости желаю, 
         С Новым годом поздравляю.
            Пусть судьба сияет ваша, 
                Счастьем полнится, как чаша.`;
        //=========================
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BA%D0%BE%D1%82%D0%B8%D0%BA.jpg')
            priz.innerHTML = `Пусть в окошко постучится
В полночь добрый Новый год,
Всем мечтам поможет сбыться,
Счастье, радость принесёт!`;

        //======================
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BA%D1%80%D0%BE%D0%BB%D0%B8%D0%BA.jpg')
            priz.innerHTML = `С Новым годом! Пусть веселье
 Справит в душах новоселье, 
 И снежинки в этот час
  Поцелуют вас за нас!`;
        //======================
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BE%D0%B1%D0%B5%D0%B7%D1%8C%D1%8F%D0%BD%D0%B0.jpg')
            priz.innerHTML = `Пусть Новый год волшебной сказкой
 В ваш дом тихонечко войдет,
  И счастье, радость, доброту и ласку
   Вам в дар с собою принесет!`;
        if (boxPriz[i].src === 'http://127.0.0.1:5500/img/%D0%BF%D0%B0%D1%83%D0%BA.jpg')
            priz.innerHTML = `Пусть трубы сегодня вам громче играют, 
И ярче ваш праздник огни озаряют! Пусть новый, веселый и радостный год 
 Вам новое счастье с собой принесет!`;
    }


}
