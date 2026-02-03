
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
        route: '/titan-storage'
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
        route: '/stract'
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
        route: '/butcher-box'
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
        route: '/hathaven'
    },
];
