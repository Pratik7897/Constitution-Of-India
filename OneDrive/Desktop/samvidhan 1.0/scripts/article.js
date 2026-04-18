document.addEventListener('DOMContentLoaded', () => {
    const articleBoxes = document.querySelectorAll('.article-box');

    articleBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const content = box.querySelector('.article-content');
            const toggleText = box.querySelector('.article-toggle-text span');
            const isExpanded = box.classList.contains('expanded');

            // Close all other boxes if one is opened
            articleBoxes.forEach(otherBox => {
                if (otherBox !== box && otherBox.classList.contains('expanded')) {
                    otherBox.classList.remove('expanded');
                    gsap.to(otherBox.querySelector('.article-content'), {
                        height: 0,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                        onComplete: () => {
                            gsap.set(otherBox.querySelector('.article-content'), { clearProps: "all" });
                        }
                    });
                    otherBox.querySelector('.article-toggle-text span').textContent = "Unfold Chapter";
                }
            });

            // Toggle current box
            if (isExpanded) {
                box.classList.remove('expanded');
                gsap.to(content, {
                    height: 0,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut"
                });
                toggleText.textContent = "Unfold Chapter";
            } else {
                box.classList.add('expanded');
                
                // Animate expansion
                gsap.fromTo(content, 
                    { height: 0, opacity: 0 },
                    { 
                        height: "auto", 
                        opacity: 1, 
                        duration: 0.8, 
                        ease: "power3.out" 
                    }
                );

                // Indian style shimmer effect on title when opening
                const title = box.querySelector('h3');
                gsap.fromTo(title, 
                    { filter: "brightness(1)", textShadow: "0 0 0px transparent" },
                    { 
                        filter: "brightness(1.5)", 
                        textShadow: "0 0 10px rgba(255,153,51,0.5)", 
                        duration: 0.5, 
                        yoyo: true, 
                        repeat: 1 
                    }
                );

                toggleText.textContent = "Fold Chapter";

                // Smooth scroll into view
                setTimeout(() => {
                    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });

    // Add subtle floating animation to the boxes initially
    gsap.to(".article-box", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
            each: 0.2,
            from: "random"
        }
    });
});
