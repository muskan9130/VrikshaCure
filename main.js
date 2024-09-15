document.querySelector('.start-button').addEventListener('click', function() {
  alert('Your herbal journey begins!');
});

document.querySelector('.join-button').addEventListener('click', function() {
  alert('Welcome to our herbal community!');
});
document.getElementById('scrollRight').onclick = function () {
document.querySelector('.blog-container').scrollBy({ 
left: 220, 
behavior: 'smooth' 
});
};

document.getElementById('scrollLeft').onclick = function () {
document.querySelector('.blog-container').scrollBy({ 
left: -220, 
behavior: 'smooth' 
});
};
document.getElementById('scrollRight').onclick = function () {
document.querySelector('.blog-container').scrollBy({ 
left: 220, 
behavior: 'smooth' 
});
};

document.getElementById('scrollLeft').onclick = function () {
document.querySelector('.blog-container').scrollBy({ 
left: -220, 
behavior: 'smooth' 
});
};