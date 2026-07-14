    document.addEventListener('DOMContentLoaded', () => {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mainNav = document.querySelector('.main-nav');
        const menuIcon = menuBtn.querySelector('i');

        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            if (mainNav.classList.contains('active')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
