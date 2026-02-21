import dynamic from 'next/dynamic';

const componentsMap = {
    // Hero components
    "hero-standard": dynamic(() => import('@/app/components/Hero')),
    "hero-centered": dynamic(() => import('@/app/components/HeroCentered')),
    "hero-split": dynamic(() => import('@/app/components/HeroSplit')),
    // CTA components
    "cta-standard": dynamic(() => import('@/app/components/CTA')),
    "cta-simple": dynamic(() => import('@/app/components/CTASimple')),
    "cta-card": dynamic(() => import('@/app/components/CTACard')),
    // Banner components
    "banner-standard": dynamic(() => import('@/app/components/Banner')),
    "banner-floating": dynamic(() => import('@/app/components/BannerFloating')),
    "banner-bottom": dynamic(() => import('@/app/components/BannerBottom')),
    // Feature components
    "feature-standard": dynamic(() => import('@/app/components/Feature')),
    "feature-grid": dynamic(() => import('@/app/components/FeatureGrid')),
    "feature-list": dynamic(() => import('@/app/components/FeatureList')),
    // Footer components
    "footer-standard": dynamic(() => import('@/app/components/Footer')),
    "footer-simple": dynamic(() => import('@/app/components/FooterSimple')),
    "footer-large": dynamic(() => import('@/app/components/FooterLarge')),
    // Navbar components
    "navbar-standard": dynamic(() => import('@/app/components/Navbar')),
    "navbar-centered": dynamic(() => import('@/app/components/NavbarCentered')),
    "navbar-minimal": dynamic(() => import('@/app/components/NavbarMinimal')),
    // Sidebar components
    "sidebar-standard": dynamic(() => import('@/app/components/Sidebar')),
    "sidebar-dark": dynamic(() => import('@/app/components/SidebarDark')),
    "sidebar-mini": dynamic(() => import('@/app/components/SidebarMini')),
};

export const categories = [
    {
        category: "heroes",
        title: "Hero Sections",
        gradient: "from-pink-500 to-rose-500",
        icon: "✨",
        components: [
            {
                id: "hero-standard",
                title: "Standard Hero",
                path: "app/components/Hero.js",
            },
            {
                id: "hero-centered",
                title: "Centered Hero",
                path: "app/components/HeroCentered.js",
            },
            {
                id: "hero-split",
                title: "Split Hero",
                path: "app/components/HeroSplit.js",
            },
        ],
    },
    {
        category: "ctas",
        title: "Call to Action",
        gradient: "from-orange-400 to-red-500",
        icon: "🎯",
        components: [
            {
                id: "cta-standard",
                title: "Standard CTA",
                path: "app/components/CTA.js",
            },
            {
                id: "cta-simple",
                title: "Simple CTA",
                path: "app/components/CTASimple.js",
            },
            {
                id: "cta-card",
                title: "Card CTA",
                path: "app/components/CTACard.js",
            },
        ],
    },
    {
        category: "banners",
        title: "Banners",
        gradient: "from-emerald-400 to-teal-500",
        icon: "🔔",
        components: [
            {
                id: "banner-standard",
                title: "Top Banner",
                path: "app/components/Banner.js",
            },
            {
                id: "banner-floating",
                title: "Floating Banner",
                path: "app/components/BannerFloating.js",
            },
            {
                id: "banner-bottom",
                title: "Bottom Banner",
                path: "app/components/BannerBottom.js",
            },
        ],
    },
    {
        category: "features",
        title: "Feature Sections",
        gradient: "from-blue-500 to-indigo-500",
        icon: "⚡",
        components: [
            {
                id: "feature-standard",
                title: "Standard Feature",
                path: "app/components/Feature.js",
            },
            {
                id: "feature-grid",
                title: "Grid Feature",
                path: "app/components/FeatureGrid.js",
            },
            {
                id: "feature-list",
                title: "List Feature",
                path: "app/components/FeatureList.js",
            },
        ],
    },
    {
        category: "footers",
        title: "Footers",
        gradient: "from-slate-600 to-slate-800",
        icon: "👇",
        components: [
            {
                id: "footer-standard",
                title: "Standard Footer",
                path: "app/components/Footer.js",
            },
            {
                id: "footer-simple",
                title: "Simple Footer",
                path: "app/components/FooterSimple.js",
            },
            {
                id: "footer-large",
                title: "Large Footer",
                path: "app/components/FooterLarge.js",
            },
        ],
    },
    {
        category: "navbars",
        title: "Navbars",
        gradient: "from-violet-500 to-purple-600",
        icon: "🧭",
        components: [
            {
                id: "navbar-standard",
                title: "Standard Navbar",
                path: "app/components/Navbar.js",
            },
            {
                id: "navbar-centered",
                title: "Centered Navbar",
                path: "app/components/NavbarCentered.js",
            },
            {
                id: "navbar-minimal",
                title: "Minimal Navbar",
                path: "app/components/NavbarMinimal.js",
            },
        ],
    },
    {
        category: "sidebars",
        title: "Sidebars",
        gradient: "from-fuchsia-500 to-pink-600",
        icon: "📑",
        components: [
            {
                id: "sidebar-standard",
                title: "Standard Sidebar",
                path: "app/components/Sidebar.js",
            },
            {
                id: "sidebar-dark",
                title: "Dark Sidebar",
                path: "app/components/SidebarDark.js",
            },
            {
                id: "sidebar-mini",
                title: "Mini Sidebar",
                path: "app/components/SidebarMini.js",
            },
        ],
    }
];

export const getCategoryComponents = (categorySlug) => {
    return categories.find((c) => c.category === categorySlug);
};

export const getComponent = (id) => {
    return componentsMap[id];
};
