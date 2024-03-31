document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const nav = document.querySelector('nav');
    const navLinks = nav.querySelectorAll('a');
    const navHeight = nav.offsetHeight;

    // Function to handle scroll event
    function handleScroll() {
        const curPos = window.pageYOffset || document.documentElement.scrollTop;

        sections.forEach(section => {
            const top = section.offsetTop - navHeight;
            const bottom = top + section.offsetHeight;

            if (curPos >= top && curPos <= bottom) {
                navLinks.forEach(link => link.classList.remove('active'));
                
               
                const correspondingLink = nav.querySelector('a[href="#' + section.id + '"]');
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }

    // Function to handle click event on navigation links
    function handleClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const offsetTop = targetSection.offsetTop - navHeight;
        
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    navLinks.forEach(link => link.addEventListener('click', handleClick));
});
