import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Animations() {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {

        /* TIMELINES */

        const componentBottomCta = gsap.timeline({
            scrollTrigger: {
                trigger: ".cta_container",
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleImmersive = gsap.timeline({
            scrollTrigger: {
                trigger: ".immersive_container",
                start: '50% bottom',
                end: '50% bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentBottomSolutionsTitleField = gsap.timeline({
            scrollTrigger: {
                trigger: ".solutions_titleField",
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleSolutionsFeature = gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_animation_container",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleHighlightsOne = gsap.timeline({
            scrollTrigger: {
                trigger: ".highlights_container1",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleHighlightsTwo = gsap.timeline({
            scrollTrigger: {
                trigger: ".highlights_container2",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleHighlightsThree = gsap.timeline({
            scrollTrigger: {
                trigger: ".highlights_container3",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleHighlightsFour = gsap.timeline({
            scrollTrigger: {
                trigger: ".highlights_container4",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleCompanies = gsap.timeline({
            scrollTrigger: {
                trigger: ".companies_animation_container",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentBottomInfoTitleField = gsap.timeline({
            scrollTrigger: {
                trigger: ".info_titleField_animation_container",
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleInfoDisplaySelection = gsap.timeline({
            scrollTrigger: {
                trigger: ".info_display_selection_animation_container",
                start: '50% 85%',
                end: '50% 85%',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleInfoDisplayGrid = gsap.timeline({
            scrollTrigger: {
                trigger: ".info_display_grid_animation_container",
                start: '50% bottom',
                end: '50% bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentBottomCaseStudiesHeading = gsap.timeline({
            scrollTrigger: {
                trigger: ".caseStudies_heading",
                start: 'bottom bottom',
                end: 'bottom bottom',
                toggleActions: 'play none none reverse'
            }
        })

        const componentMiddleCaseStudiesCarousel = gsap.timeline({
            scrollTrigger: {
                trigger: ".caseStudies_carousel",
                start: '50% bottom',
                end: '50% bottom',
                toggleActions: 'play none none reverse'
            }
        })

        /* ANIMATIONS */

        componentBottomCta.fromTo(".cta_paragraph",
            { opacity: 0 },
            { opacity: 1, duration: .7 }
        )

        componentMiddleImmersive.fromTo(".immersive_container",
            { xPercent: 100 },
            { xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentBottomSolutionsTitleField.fromTo(".solutions_titleField",
            { opacity: 0 },
            { opacity: 1, duration: .7 }
        )

        componentMiddleSolutionsFeature.fromTo(".feature",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentMiddleHighlightsOne.fromTo(".highlights_container1",
            { opacity: 0, xPercent: 100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )
        componentMiddleHighlightsTwo.fromTo(".highlights_container2",
            { opacity: 0, xPercent: -100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )
        componentMiddleHighlightsThree.fromTo(".highlights_container3",
            { opacity: 0, xPercent: 100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )
        componentMiddleHighlightsFour.fromTo(".highlights_container4",
            { opacity: 0, xPercent: -100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentMiddleCompanies.fromTo(".companies_container",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentBottomInfoTitleField.fromTo(".info_titleField",
            { opacity: 0 },
            { opacity: 1, duration: .7 }
        )

        componentMiddleInfoDisplaySelection.fromTo(".info_display_selection",
            { opacity: 0, yPercent: 100 },
            { opacity: 1, yPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentMiddleInfoDisplayGrid.fromTo(".info_display_grid",
            { opacity: 0, xPercent: 100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )

        componentBottomCaseStudiesHeading.fromTo(".caseStudies_heading",
            { opacity: 0 },
            { opacity: 1, duration: .7 }
        )

        componentMiddleCaseStudiesCarousel.fromTo(".caseStudies_carousel",
            { opacity: 0, xPercent: 100 },
            { opacity: 1, xPercent: 0, duration: .7, ease: "back.inOut(1)" }
        )
    })

    return null
}

export function BannerAnimations({ menuStatus }) {

    useGSAP(() => {
        menuStatus ?
            gsap.to(".menu_container",
                { display: 'flex', xPercent: -100, duration: .5, ease: "steps.inOut" }
            )
            :
            gsap.to(".menu_container",
                { display: 'none', xPercent: 0, duration: .5, ease: "steps.inOut" }
            )
    }, [menuStatus])

    return null
}

export default Animations;