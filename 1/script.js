let box = document.getElementById('box');

// gsap.from(box, 2, {x: '-=200px', autoAlpha: 0});
// gsap.to(box, .7, {left:0});
// gsap.to()

// 4. Create a .set() Tween
// gsap.set(box, {x: '-=200px', scale: 0.3});
// gsap.set(box, {x: '+=100px', scale: 0.6, delay: 1});
// gsap.set(box, {x: '-50%', scale: 1, delay: 2});

// gsap.fromTo(box, 2, {x: '-=200px'}, {x: 150});
gsap.fromTo(box, 2, {x: '-=200px'}, {x: 150, ease:Power4.easeInOut});
gsap.to(box, 0.4, {top: '100%', y: '-100%', ease:Bounce.easeOut, delay: 2});
gsap.to(box, 0.7, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 3});
gsap.to(box, 0.8, {x: '-=200px', y: '-100%', ease:Back.easeInOut, delay: 4.2});
gsap.to(box, 2.5, {top: '50%', y: '-50%', ease:Power0.easeNone, delay: 5});
gsap.to(box, 2.5, {x: '+=400px', ease:Elastic.easeInOut, delay: 7.7});
gsap.to(box, 2.5, {x: '-=400px', rotation: -720, ease: SlowMo.ease.config(0.1, 0.7, false), delay: 10.4});