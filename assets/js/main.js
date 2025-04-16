const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

document.addEventListener("DOMContentLoaded", function (event) {


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

    const projectTabBtn = document.querySelectorAll('.project-home__tab .tab-head li');
    const projectTabItem = document.querySelectorAll('.project-home__tab .tab-item');

    if (projectTabBtn.length) {
        projectTabBtn.forEach((btn, btnID) => {
            btn.onclick = () => {
                projectTabItem.forEach((el, elID) => {
                    if (btnID == elID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })

                projectTabBtn.forEach((el, elID) => {
                    if (btnID == elID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
            }
        })
    }

    if (projectTabItem.length) {
        projectTabItem.forEach(el => {
            const projectChildSwp = new Swiper(el.querySelector(".child-swp .swiper"), {
                slidesPerView: 3,
                spaceBetween: 24,
                breakpoints: {
                    1200: {
                        slidesPerView: 6
                    },
                    992: {
                        slidesPerView: "auto"
                    },
                    700: {
                        slidesPerView: 4,
                    }
                }
            });
        
            const projectParentSwp = new Swiper(el.querySelector('.parent-swp .swiper'), {
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                spaceBetween: 24,
                thumbs: {
                    swiper: projectChildSwp,
                },
                navigation: {
                    nextEl: el.querySelector('.parent-swp .btn-swp__next'),
                    prevEl: el.querySelector('.parent-swp .btn-swp__prev'),
                }
            })
        })
    }

    const comfortList = document.querySelectorAll('.comfort-content ul li');
    const comfortCard = document.querySelectorAll('.comfort-content__imgs img');
    const comfortTitle = document.querySelector('.comfort .sec-title');

    if (comfortList.length) {
        comfortList.forEach((list, listID) => {
            const activeCard = (idx) => {
                comfortCard.forEach((el, elID) => {
                    if (elID == idx) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
                comfortList.forEach((el, elID) => {
                    if (elID == idx) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
                comfortTitle.textContent = comfortList[idx].textContent;
            };

            list.onmousemove = () => activeCard(listID);
            list.onmouseenter = () => activeCard(listID);
        })
    }

    const interiorSwp = new Swiper('.interior .swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 1000,
        navigation: {
            nextEl: '.interior .btn-swp__next',
            prevEl: '.interior .btn-swp__prev',
        }
    })

    const solutionCards = document.querySelectorAll('.solution-card');
    const solutionList = document.querySelectorAll('.solution ul li');

    if (solutionList.length) {
        solutionList.forEach((list, listID) => {
            const activeCard = (idx) => {
                solutionCards.forEach((el, elID) => {
                    if (idx == elID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
                solutionList.forEach((el, elID) => {
                    if (idx == elID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
            };

            list.onmouseenter = () => activeCard(listID);
            list.onmousemove = () => activeCard(listID);
        })
    }

    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach((item) => {
        const accBtn = item.querySelector('.accordion-btn');
        const accBody = item.querySelector('.accordion-body');

        accBtn.addEventListener('click', (event) => {
            accBody.style.maxHeight = accBody.style.maxHeight ? null : accBody.scrollHeight + 'px';
            if (event.target.closest('.equipment-body__list')) {
                setTimeout(() => {
                    document.querySelector('.equipment-body__list-wrap').style.maxHeight = document.querySelector('.equipment-body__list-wrap').scrollHeight + 'px';
                }, 300);
            }
        });
    });

    const equipmentTabBtn = document.querySelectorAll('.equipment-foot .tab-head li');
    const equipmentTabItem = document.querySelectorAll('.equipment-foot .tab-item');

    if (equipmentTabBtn.length) {
        equipmentTabBtn.forEach((btn, btnID) => {
            btn.onclick = () => {
                equipmentTabItem.forEach((el, elID) => {
                    if (elID == btnID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
                equipmentTabBtn.forEach((el, elID) => {
                    if (elID == btnID) {
                        el.classList.add('active');
                    } else {
                        el.classList.remove('active');
                    }
                })
            }
        })
    }

    const scheduleSwp = new Swiper('.schedule .swiper', {
        slidesPerView: 'auto',
        freeMode: true,
        pagination: {
            el: ".schedule .swp-pagination",
            type: "progressbar",
        },
    })

    const scrollBtn = document.querySelector('.scroll-btn');
    if (scrollBtn) {
        scrollBtn.onclick = () => {
            window.scrollTo(0, 0);
        }
    }
});