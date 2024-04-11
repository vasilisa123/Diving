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

//shop

