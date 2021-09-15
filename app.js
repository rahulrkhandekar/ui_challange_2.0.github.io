let hamberger = document.querySelector('.hamberger');
let cross = document.querySelector('.cross');
let mobilenavi = document.querySelector('.mobilenavi');


hamberger.addEventListener('click', function () {
    mobilenavi.classList.add('open');

});
cross.addEventListener('click', function () {
    mobilenavi.classList.remove('open');

});
// hamberger.addEventListener('click', function () {
//     hamberger.classList.add('display');

// });
// close.addEventListener('click', function () {
//     hamberger.classList.remove('display');
// });