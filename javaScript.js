
const block = document.querySelector('.question-counter')
const quest1 = document.getElementById('quest1-1')
const quest2 = document.getElementById('quest1-2')
const quest3 = document.getElementById('quest3')
const quest4 = document.getElementById('quest4')
const quest5 = document.getElementById('quest5')
const quest6 = document.getElementById('quest6')
const quest7 = document.getElementById('quest7')
const quest8 = document.getElementById('quest8')
const quest9 = document.getElementById('quest9')
const quest10 = document.getElementById('quest10')
const quest11 = document.getElementById('quest11')
const questionOn = document.querySelector('.questionOn');
const questionTo = document.querySelector('.questionTo');
const questionThe = document.querySelector('.questionThe');
const questionFo = document.querySelector('.questionFo');
const questionFive = document.querySelector('.questionFive');

let item = 0

quest1.addEventListener('click', function (evt){
    evt.preventDefault();
    questionOn.classList.add('close-quest');
    questionTo.classList.remove('close-quest');
    item = 2
})
console.log(item)

quest2.addEventListener('click', function (evt){
    evt.preventDefault();
    questionOn.classList.add('close-quest');
    questionTo.classList.remove('close-quest');
    item = 4
})






quest4.addEventListener('click', function (evt){
    evt.preventDefault();
    item = item + 12
    questionTo.classList.add('close-quest');
    if(item === 16){
        questionFive.classList.remove('close-quest');
    } else {
        questionFo.classList.remove('close-quest');
    }
})

quest8.addEventListener('click', function (evt){
    evt.preventDefault();
    questionFo.classList.add('close-quest');
    item = item + 20
    if (item === 34){
        const contElement = document.createElement('div');
        contElement.classList.add('contElement');
        const text = document.createElement('H1');
        text.textContent = `Коэффициент
        корреляции Фехнера 
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)`;
        contElement.appendChild(text)
        block.appendChild(contElement)
    }
})
quest9.addEventListener('click', function (evt){
    evt.preventDefault();
    questionFo.classList.add('close-quest');
    item = item + 30
    if (item === 44){
        const contElement = document.createElement('div');
        contElement.classList.add('contElement');
        const text = document.createElement('H1');
        text.textContent = `Коэффициент
        корреляции Фехнера Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)
        Коэффициент
        ранговой
        Корреляции
        Спирмана (R,[])`;
        contElement.appendChild(text)
        block.appendChild(contElement)
    }
})







quest3.addEventListener('click', function (evt){
    evt.preventDefault();
    item = item + 11
    questionTo.classList.add('close-quest');
    if (item === 15){
        questionFive.classList.remove('close-quest');
    } else {
        questionThe.classList.remove('close-quest');
    }
})

quest5.addEventListener('click', function (evt){
    evt.preventDefault();
    questionThe.classList.add('close-quest');
    item = item + 20
    if (item === 33) {
        const contElement = document.createElement('div');
        contElement.classList.add('contElement');
        const text = document.createElement('H1');
        text.textContent = `Коэффициент ранговой КорреляцииСпирмана (R,[])
        Коэффициент корреляции ФехнераКоэффициенткорреляцииКендалла (Тау Кендалла)`;
        contElement.appendChild(text)
        block.appendChild(contElement)
    }
})

quest6.addEventListener('click', function (evt){
    evt.preventDefault();
    questionThe.classList.add('close-quest');
    item = item + 30
    if (item === 43){
        const contElement = document.createElement('div');
        contElement.classList.add('contElement');
        const text = document.createElement('H1');
        text.textContent = `Коэффициент
        Корреляции Пирсона
        (r)
        Коэффициент
        ранговой
        Корреляции
        Спирмана (R,[])
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла)
        Коэффициент
        корреляции Фехнера`;
        contElement.appendChild(text)
        block.appendChild(contElement)
    }
})
quest7.addEventListener('click', function (evt){
    evt.preventDefault();
    questionThe.classList.add('close-quest');
    item = item + 40
    if (item === 53){
        const contElement = document.createElement('div');
        contElement.classList.add('contElement');
        const text = document.createElement('H1');
        text.textContent = `Коэффициент
        Корреляции Пирсона
        (r)
        Коэффициент
        корреляции Фехнера
        Коэффициент
        корреляции
        Кендалла (Тау
        Кендалла`;
        contElement.appendChild(text)
        block.appendChild(contElement)
    }
})

