export interface HeroProps {
    eyebrow: string;
    heading: string;
    button: {};
}

export interface InfoCardProps {
    heading: string;
    description: string;
    cardInfo: CardProps[];
}

export interface CardProps {
    image: {
        imageUrl: string;
        imageAlt: string;
    };
    title: string;
    description: string;
    motionProps: any;
}

export interface CenterContentProps {
    eyebrow: string;
    heading: string;
    description: string;
    image: {
        imageUrl: string;
        imageAlt: string;
    };
}

export interface SecondaryHeroProps {
    image: {
        imageUrl: string;
        imageAlt: string;
    };
    eyebrow: string;
    title: string;
    description: string;
}

export interface SideBySideProps {
    image: {
        imageUrl: string;
        imageAlt: string;
    };
    title: string;
    description: string;
    imageOnRight: boolean;
}

export interface ContactProps {
    icon: {
        imageUrl: string;
        imageAlt: string;
    };
    address: string;
    phone: string;
    email: string;
}

export interface ProjectCollection {
    projectCategory: string;
    projects: Project[];
}

export interface Project {
    id: string;
    previewImage: {
        imageUrl: string;
        imageAlt: string;
    };
    image: {
        imageUrl: string;
        imageAlt: string;
    };
    title: string;
    description: string;
    projectOverview: string;
    apps: {
        id: string;
        title: string;
        image: {
            imageUrl: string;
            imageAlt: string;
        };
    }[];
    videos: {
        id: string;
        title: string;
        video: {
            videoUIrl: string;
        };
    }[];
    publications: {
        id: string;
        title: string;
        image: {
            imageUrl: string;
            imageAlt: string;
        };
    }[];
}
