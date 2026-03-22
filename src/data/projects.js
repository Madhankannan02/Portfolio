
// Titan Storage Imports
import titanStorageHero400 from "../assets/images/general/Tital Storage hero-400.webp";
import titanStorageHero600 from "../assets/images/general/Tital Storage hero-600.webp";
import titanStorageHero800 from "../assets/images/general/Tital Storage hero-800.webp";
import titanStorageHero1200 from "../assets/images/general/Tital Storage hero-1200.webp";
import titanStoragePresentation from '../assets/images/general/Tital-Storage-Presentation.png';

// Stract Imports
import stractHero400 from '../assets/images/general/Stract Hero-400.webp';
import stractHero600 from '../assets/images/general/Stract Hero-600.webp';
import stractHero800 from '../assets/images/general/Stract Hero-800.webp';
import stractHero1200 from '../assets/images/general/Stract Hero-1200.webp';
import stractPresentation from '../assets/images/general/Stract Presentation.png';

// Butcher Box Imports
import butcherBoxHero400 from '../assets/images/general/butcherbox-projectcard-400.webp';
import butcherBoxHero600 from '../assets/images/general/butcherbox-projectcard-600.webp';
import butcherBoxHero800 from '../assets/images/general/butcherbox-projectcard-800.webp';
import butcherBoxHero1200 from '../assets/images/general/butcherbox-projectcard-1200.webp';
import butcherBoxPresentation from '../assets/images/general/Butcher Box Presentation.webp';

// Hathaven Imports
import hathaveHero400 from '../assets/images/general/hathaven-projectcard-400.webp';
import hathaveHero600 from '../assets/images/general/hathaven-projectcard-600.webp';
import hathaveHero800 from '../assets/images/general/hathaven-projectcard-800.webp';
import hathaveHero1200 from '../assets/images/general/hathaven-projectcard-1200.webp';
import hathavePresentation from '../assets/images/general/hathave presentation.jpg';

// Social Media Posts Imports
import constructionPost from '../assets/images/social-media-posts/Construction.png';
import institutePost from '../assets/images/social-media-posts/Institute.png';
import pizzaPost from '../assets/images/social-media-posts/Pizza.png';
import realEstatePost from '../assets/images/social-media-posts/Real Estate.png';
import travelPost from '../assets/images/social-media-posts/Travel Company.png';
import lemonSodaPost from '../assets/images/social-media-posts/Lemon Soda.png';

export const projects = [
    {
        id: 1,
        title: "Titan Storage Solutions",
        description: "A new era of industrial engineering defined by technical precision and global reach. Titan Storage Solutions bridges the gap between complex engineering and digital accessibility through a modern, informative interface.",
        tags: ["UI/UX", "Web Design", "Figma"],
        image: {
            src: titanStorageHero800,
            srcSet: `${titanStorageHero400} 400w, ${titanStorageHero600} 600w, ${titanStorageHero800} 800w, ${titanStorageHero1200} 1200w`,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 568px"
        },
        link: titanStoragePresentation,
        route: '/titan-storage',
        category: 'ui-ux'
    },
    {
        id: 2,
        title: "Stract Landing Page",
        description: "Stract is a comprehensive digital platform designed to streamline complex workflows and data management. It positions itself as an all-in-one solution for professionals or enterprises looking to scale their digital operations with high-performance tools.",
        tags: ["Landing Page", "Theme", "Industrial Website"],
        image: {
            src: stractHero800,
            srcSet: `${stractHero400} 400w, ${stractHero600} 600w, ${stractHero800} 800w, ${stractHero1200} 1200w`,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 568px"
        },
        link: stractPresentation,
        route: '/stract',
        category: 'ui-ux'
    },
    {
        id: 3,
        title: "Butcher Box Web Design",
        description: "Butcher Box Digital Marketplace – A Premium E-Commerce Experience Engineered to Connect Discerning Palates with Farm-Fresh Meats through a Seamless, High-Fidelity Interface.",
        tags: ["Ecommerce", "Website Design", "UI Design"],
        image: {
            src: butcherBoxHero800,
            srcSet: `${butcherBoxHero400} 400w, ${butcherBoxHero600} 600w, ${butcherBoxHero800} 800w, ${butcherBoxHero1200} 1200w`,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 568px"
        },
        link: butcherBoxPresentation,
        route: '/butcher-box',
        category: 'ui-ux'
    },
    {
        id: 4,
        title: "HatHaven Website",
        description: "HatHaven Project – A Premium Headwear Marketplace Crafted To Redefine Style Discovery, Streamline The Shopping Experience, And Elevate Personal Expression For Fashion Enthusiasts.",
        tags: ["UX Research", "Case Study", "Ecommerce Website"],
        image: {
            src: hathaveHero800,
            srcSet: `${hathaveHero400} 400w, ${hathaveHero600} 600w, ${hathaveHero800} 800w, ${hathaveHero1200} 1200w`,
            sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 568px"
        },
        link: hathavePresentation,
        route: '/hathaven',
        category: 'ui-ux'
    },
    {
        id: 5,
        title: "Construction Social Media",
        description: "A tailored social media post design focused on the construction industry to boost online engagement.",
        tags: ["Graphic Design", "Social Media", "Post"],
        image: {
            src: constructionPost
        },
        link: constructionPost,
        category: 'graphic-design'
    },
    {
        id: 6,
        title: "Institute Social Media",
        description: "An educational institute promotional post design crafted to attract prospective students with clear and aesthetic messaging.",
        tags: ["Graphic Design", "Education", "Social Media"],
        image: {
            src: institutePost
        },
        link: institutePost,
        category: 'graphic-design'
    },
    {
        id: 7,
        title: "Pizza Social Media",
        description: "A mouth-watering, vibrant social media graphic designed for local pizzeria promotions and offers.",
        tags: ["Graphic Design", "Food & Beverage", "Promo"],
        image: {
            src: pizzaPost
        },
        link: pizzaPost,
        category: 'graphic-design'
    },
    {
        id: 8,
        title: "Real Estate Social Media",
        description: "A premium social media layout designed for modern real estate listings to highlight property features and pricing clearly.",
        tags: ["Graphic Design", "Real Estate", "Luxury"],
        image: {
            src: realEstatePost
        },
        link: realEstatePost,
        category: 'graphic-design'
    },
    {
        id: 9,
        title: "Travel Company Social Media",
        description: "An inspiring social media post template that captures the essence of wandering and invites customers to book their next tour.",
        tags: ["Graphic Design", "Travel", "Template"],
        image: {
            src: travelPost
        },
        link: travelPost,
        category: 'graphic-design'
    },
    {
        id: 10,
        title: "Lemon Soda Social Media",
        description: "A refreshing, vibrant social media ad designed for a lemon soda beverage to showcase its crisp flavor.",
        tags: ["Graphic Design", "Beverage", "Ad"],
        image: {
            src: lemonSodaPost
        },
        link: lemonSodaPost,
        category: 'graphic-design'
    }
];
