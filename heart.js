const arr = [
    'left: 5px',
    'left: 50%; transform: translate(-50%)',
    'right: 5px;',
    'left: 20%;bottom: 10%;transform: rotate(-30deg);',
    'right: 20%;bottom: 10%;transform: rotate(30deg);',
    'left: 7%;bottom: 25%;transform: rotate(30deg);',
    'left: 7%;bottom: 50%;transform: rotate(-30deg);',
    'left: 7%;bottom: 75%;transform: rotate(30deg);',
    'right: 7%;bottom: 25%;transform: rotate(-30deg);',
    'right: 7%;bottom: 50%;transform: rotate(30deg);',
    'right: 7%;bottom: 75%;transform: rotate(-30deg);'
];

$.each(arr, (i, n) => {
    $('.heart-wrapper').append(`
        <div class="heart" style="${n}">
            <div class="heart-item1"></div>
            <div class="heart-item2"></div>
            <div class="heart-item3"></div>
            <div class="heart-item4"></div>
            <div class="heart-item5"></div>
            <div class="heart-item6"></div>
            <div class="heart-item7"></div>
            <div class="heart-item8"></div>
            <div class="heart-item9"></div>
            <div class="heart-item10"></div>
            <div class="heart-item11"></div>
            <div class="heart-item12"></div>
            <div class="heart-item13"></div>
            <div class="heart-item14"></div>
            <div class="heart-item15"></div>
            <div class="heart-item16"></div>
            <div class="heart-item17"></div>
            <div class="heart-item18"></div>
            <div class="heart-item19"></div>
            <div class="heart-item20"></div>
            <div class="heart-item21"></div>
            <div class="heart-item22"></div>
            <div class="heart-item23"></div>
            <div class="heart-item24"></div>
        </div>
    `);
});

const div = [...document.querySelectorAll('.heart-wrapper .heart > div')];
div.forEach((d, i) => {
    d.style = `animation-delay: ${(i + 1) * 0.2}s`;
});
