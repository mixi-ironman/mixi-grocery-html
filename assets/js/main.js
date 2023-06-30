let typingText = document.querySelector('.mixi');

const textList = ['Wellcome to Mixi-Grocery'];
let currentText = '';
let currentIndex = 0;
function showNextText() {
    if (textList.length > 0) {
        currentText = textList[currentIndex];
        typingText.innerHTML = '';
        let i = 0;
        var time = setInterval(() => {
            typingText.innerHTML += currentText.charAt(i);
            i++;
            if (i >= currentText.length) {
                clearInterval(time);
                currentIndex = (currentIndex + 1) % textList.length;
                setTimeout(() => {
                    showNextText();
                }, 500); // Sau khi hiển thị xong, chờ 0.2 giây rồi hiển thị phần tử tiếp theo
            }
        }, 500);
    }
}

showNextText();

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var translateY = scrollPosition - 1700; // Thay đổi tỷ lệ theo ý muốn

    var scrollingText = document.querySelector('.scrolling-text');
    var pos = scrollingText.getBoundingClientRect();

    if (translateY > pos.top) {
        scrollingText.style.transform = 'translateX(0)';
    } else {
        scrollingText.style.transform = 'translateX(-120px)';
    }
    //-------
    var scrollPosition_ = window.scrollY;
    var translateY_ = scrollPosition_ - 2800; // Thay đổi tỷ lệ theo ý muốn
    var scrollingText_ = document.querySelector('.scrolling-text_');
    var pos_ = scrollingText_.getBoundingClientRect();

    if (translateY_ > pos_.top) {
        scrollingText_.style.transform = 'translateX(0)';
    } else {
        scrollingText_.style.transform = 'translateX(120px)';
    }

    //---------------
    // var scrollPosition = window.scrollY;
    // console.log('w' + scrollPosition);

    // var scrollingHeader = document.querySelector('.nav-container');
    // console.log(scrollingHeader);

    // var posHeader = scrollingHeader.getBoundingClientRect();
    // console.log(posHeader.top);

    // if (scrollPosition >= posHeader.top) {
    //     scrollingHeader.classList.add('sticky');
    // } else {
    //     scrollingHeader.classList.remove('sticky');
    // }

    var stickyElement = document.querySelector('.nav-container');
    var contentOffsetTop = document.querySelector('.slider-wraper').offsetTop;

    window.addEventListener('scroll', function () {
        if (window.scrollY >= contentOffsetTop) {
            stickyElement.classList.add('sticky');
        } else {
            stickyElement.classList.remove('sticky');
        }
    });
});
