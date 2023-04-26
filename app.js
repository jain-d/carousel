const contents=document.querySelector('.cards');
const nextButton=document.querySelector('#nextButton');
const prevButton=document.querySelector('#prevButton');
const indicatorButton1=document.querySelector('.indicatorButton1')
const indicatorButton2=document.querySelector('.indicatorButton2')
const indicatorButton3=document.querySelector('.indicatorButton3')
const cardOne= contents.querySelector('.card-one');
const cardTwo= contents.querySelector('.card-two');
const cardThree= contents.querySelector('.card-three');
nextButton.addEventListener('click', ()=>{
    const mainCard= contents.querySelector('.card-center');
    const prevCard= contents.querySelector('.card-left');
    const nextCard= contents.querySelector('.card-right');

    prevCard.classList.toggle('card-left');
    prevCard.classList.toggle('card-right');
    mainCard.classList.toggle('card-center');
    mainCard.classList.toggle('card-left');
    nextCard.classList.toggle('card-right');
    nextCard.classList.toggle('card-center');
    targetButton();
})

prevButton.addEventListener('click',()=>{
    const mainCard= contents.querySelector('.card-center');
    const prevCard= contents.querySelector('.card-left');
    const nextCard= contents.querySelector('.card-right');

    prevCard.classList.toggle('card-left');
    prevCard.classList.toggle('card-center');
    mainCard.classList.toggle('card-center');
    mainCard.classList.toggle('card-right');
    nextCard.classList.toggle('card-right');
    nextCard.classList.toggle('card-left');
    targetButton();
})

indicatorButton1.addEventListener('click',()=>{

    cardOne.classList.remove('card-left');
    cardOne.classList.remove('card-right');
    cardOne.classList.add('card-center');
    cardTwo.classList.remove('card-left');
    cardTwo.classList.remove('card-center');
    cardTwo.classList.add('card-right');
    cardThree.classList.remove('card-center');
    cardThree.classList.remove('card-right');
    cardThree.classList.add('card-left');
    targetButton();

})
indicatorButton2.addEventListener('click',()=>{
    
    cardOne.classList.remove('card-center');
    cardOne.classList.remove('card-right');
    cardOne.classList.add('card-left');
    cardTwo.classList.remove('card-left');
    cardTwo.classList.remove('card-right');
    cardTwo.classList.add('card-center');
    cardThree.classList.remove('card-center');
    cardThree.classList.remove('card-left');
    cardThree.classList.add('card-right');
    targetButton();
    
})
indicatorButton3.addEventListener('click',()=>{
    
    cardOne.classList.remove('card-left');
    cardOne.classList.remove('card-center');
    cardOne.classList.add('card-right');
    cardTwo.classList.remove('card-right');
    cardTwo.classList.remove('card-center');
    cardTwo.classList.add('card-left');
    cardThree.classList.remove('card-left');
    cardThree.classList.remove('card-right');
    cardThree.classList.add('card-center');
    targetButton();
    
})
const targetButton=()=>{
    if(cardOne.classList.contains('card-center'))
    {
        indicatorButton2.classList.remove('current');
        indicatorButton3.classList.remove('current');
        indicatorButton1.classList.add('current');
    }

    if(cardTwo.classList.contains('card-center'))
    {
        indicatorButton1.classList.remove('current');
        indicatorButton3.classList.remove('current');
        indicatorButton2.classList.add('current');
    }

    if(cardThree.classList.contains('card-center'))
    {
        indicatorButton1.classList.remove('current');
        indicatorButton2.classList.remove('current');
        indicatorButton3.classList.add('current');
    }
}