const FAQItems = document.querySelectorAll('.faq-item');

const openFAQ = (elem) => {
    elem.classList.add('active');
};

const closeFAQ = (elem) => {
    elem.classList.remove('active');
};

const closeAllFAQ = () => {
    FAQItems.forEach(item => closeFAQ(item));
};

FAQItems.forEach(item => item.onclick = (e) => {
    if (item.classList.contains('active')) closeAllFAQ();
    else {
        closeAllFAQ();
        openFAQ(item);
    }
});