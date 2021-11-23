// from ,to , delay , stagger

let rule = CSSRulePlugin.getRule("span:after"); // using css plugins to animate a particular element

// gsap.from(".content", {
// 	opacity: 0,
// 	duration: 1,
// 	y: -50,
// 	stagger: 0.6,
// 	// ease: "power2.easeInOut",
// });
// gsap.from(".anim1", {
// 	opacity: 0,
// 	duration: 1,
// 	y: -50,
// 	stagger: 0.6,
// 	// ease: "power2.easeInOut",
// });
// gsap.from(".swirl", {
// 	opacity: 0,
// 	duration: 1,
// 	y: 30,
// 	ease: "power2.easeInOut",
// });

// gsap.to(rule, {
// 	cssRule: { scaleY: 0 },
// 	duration: 1,
// });
// gsap.from("aside", {
// 	opacity: 0,
// 	duration: 1,
// backgroundPosition: "200px 0px",  // background-position in css
// 	ease: "power2.easeInOut",
// });

// timeline

var tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".anim1", { opacity: 0, y: -50, stagger: 0.6 })
	.to(rule, { duration: 1.8, cssRule: { scaleY: 0 } }, "-=2.2")
	.from("aside", { opacity: 0, backgroundPosition: "200px 0px" }, "1.5")
	.from(".swirl", { opacity: 0, y: 30 });

// reverse the timeline

document.getElementById("cta").addEventListener("click", () => {
	tl.reversed() ? tl.play() : tl.reverse();
});
