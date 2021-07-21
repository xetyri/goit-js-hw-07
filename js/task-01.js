const elemLi = document.querySelectorAll('.item');

elemLi.forEach((categories) => {
    console.log(categories.querySelector('h2').textContent);
    console.log(categories.querySelectorAll('li').length);
});