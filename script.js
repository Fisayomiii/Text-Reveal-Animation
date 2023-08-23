// Create a SplitText instance that targets an element with the ID 'my-text'
const myText = new SplitType('#my-text');

// Using the GSAP animation library, animate each character element with the class 'char'
gsap.to('.char', {
    // Move each character along the y-axis to a position of 0
    y: 0,
    // Stagger the animation for each character by 0.05 seconds
    stagger: 0.05,
    // Add a delay of 0.2 seconds before the animation starts
    delay: 0.2,
    // Set the duration of the animation to 0.1 seconds for each character
    duration: 0.1,
    // Apply an easing function to the animation (back.out easing)
    ease: "back.out",
});
