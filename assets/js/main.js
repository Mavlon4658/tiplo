const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}

const footerAccordions = document.querySelectorAll('.footer-accordion');

if (footerAccordions.length) {
    footerAccordions.forEach((item) => {
        const footAccBtn = item.querySelector('.footer-accordion__btn');
        const footAccContent = item.querySelector('.footer-accordion__body');

        if (window.innerWidth <= 992 && item.classList.contains('active')) {
            footAccContent.style.maxHeight = footAccContent.scrollHeight + 'px';
        }
    
        footAccBtn.addEventListener('click', () => {
            if (window.innerWidth <= 992) {
                item.classList.toggle('active');
                footAccContent.style.maxHeight = footAccContent.style.maxHeight ? null : footAccContent.scrollHeight + 'px';
            }
        });
    });
}

// modals
const modalCls = ['.video-modal', '.feedback-modal'];

modalCls.forEach(cls => {
    const modal = document.querySelector(cls);
    const modalOpenBtns = document.querySelectorAll(`${cls}__open`);
    const modalCloseBtn = document.querySelector(`${cls} .modal-close`);
    const modalBg = document.querySelector(`${cls} .modal-bg`);

    const modalClose = () => {
        bodyVisible();
        modal.classList.remove('active');
        modal.classList.add('end-active');
        setTimeout(() => {
            modal.classList.remove('end-active');
        }, 400);
    }

    if (modalOpenBtns.length) {
        modalOpenBtns.forEach(btn => {
            btn.onclick = e => {
                e.preventDefault();
                modal.classList.add('active');
                bodyHidden();
            }
        })
    }

    if (modalCloseBtn) {
        modalCloseBtn.onclick = () => modalClose();
    }

    modalBg.onclick = () => modalClose();

})
// modals end

const headerBars = document.querySelectorAll('.header .header-bars');
const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

if (headerBars.length) {
    headerBars.forEach(el => {
        el.onclick = () => {
            bodyHidden();
            menu.classList.add('active');
            mobileMenu.classList.add('active');
        }
    })
    
    document.querySelector('.menu .modal-bg').onclick = () => {
        bodyVisible();
        menu.classList.remove('active');
        menu.classList.add('end-active');
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('end-active');
        setTimeout(() => {
            menu.classList.remove('end-active');
            mobileMenu.classList.remove('end-active');
        }, 400);
    }
    
    document.querySelector('.mobile-menu .close-btn').onclick = () => {
        bodyVisible();
        menu.classList.remove('active');
        menu.classList.add('end-active');
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('end-active');
        setTimeout(() => {
            menu.classList.remove('end-active');
            mobileMenu.classList.remove('end-active');
        }, 400);
    }
}