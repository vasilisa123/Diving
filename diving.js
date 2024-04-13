// item1

document.querySelector('.main__block-big-photo_item:first-child').addEventListener('mouseover', function() {
document.querySelectorAll('.circle-item:first-child').forEach(function(element) {
element.style.opacity = '100%'; 
});
});
    
document.querySelector('.main__block-big-photo_item:first-child').addEventListener('mouseout', function() {
document.querySelectorAll('.circle-item:first-child').forEach(function(element) {
element.style.opacity = '30%'; 
element.style.color = ''; 
});
});

// item2
    
document.querySelector('.main__block-big-photo_item:nth-child(2)').addEventListener('mouseover', function() {
document.querySelectorAll('.circle-item:nth-child(2)').forEach(function(element) {
element.style.opacity = '100%'; 
});
});
    
document.querySelector('.main__block-big-photo_item:nth-child(2)').addEventListener('mouseout', function() {
document.querySelectorAll('.circle-item:nth-child(2)').forEach(function(element) {
element.style.opacity = '30%';
element.style.color = ''; 
});
});
// item3
    
document.querySelector('.main__block-big-photo_item:last-child').addEventListener('mouseover', function() {
document.querySelectorAll('.circle-item:last-child').forEach(function(element) {
element.style.opacity = '100%';
});
});
    
document.querySelector('.main__block-big-photo_item:last-child').addEventListener('mouseout', function() {
document.querySelectorAll('.circle-item:last-child').forEach(function(element) {
element.style.opacity = '30%'; 
element.style.color = ''; 
});
});

//mmodal

let popup = document.querySelector('.header__navigation-item_contacts_button');
let popupActive = document.querySelector('.popup');
let header = document.querySelector('header');
let main = document.querySelector('main');
let footer = document.querySelector('footer');
let close = document.querySelector('.popup__exit');

popup.addEventListener('click', function(){
    popup.classList.add('active');
    popupActive.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
});

close.addEventListener('click', function(){
    popup.classList.remove('active');
    popupActive.classList.toggle('active');
    header.classList.toggle('active');
    main.classList.toggle('active');
    footer.classList.toggle('active');
});

document.querySelectorAll('.checkbox__item input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            this.parentNode.style.background = 'linear-gradient(#5FC9F3,#55ABF5)';
            this.parentNode.style.color = 'white'
        } else {
            this.parentNode.style.background = '';
            this.parentNode.style.color = '' 
        }
    });
});

