$('#Slide').slick({dots:true});

$('nav-link').click(function(event){
    const target = event.target;
    $('nav-link').each((idx, elem) => {
        if(elem === target) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    })
    const dataAttr = target.dataset.bsTarget.substring(1);
    $('.tab-pane').each((idx,elem) => {
        if (elem.getAttribute('id') ===dataAttr) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    })
})