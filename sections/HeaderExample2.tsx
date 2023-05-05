import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons, } from "../components/ui/Icon.tsx";

export interface Action {
    icon?: AvailableIcons,
    label?: string,
    href: string,
}

export interface Button {
    label: string,
    variant?: "Primary" | "Secondary",
    href: string,
}

export interface MenuItem {
    label?: string,
    href?: string,
    image?: string,
}

export interface AdditionalActions {
    icon?: LiveImage,
    label?: string,
    href?: string,
    openInNewTab?: boolean,
}

export interface Props {
    layout?:
        "Single line 1" |
        "Single line 2" |
        "Single line 3" |
        "Single line 4" |
        "Single line 5" |
        "Double line 1" |
        "Double line 2" |
        "Double line 3" |
        "Double line 4" |
        "Double line 5"
    config?: {
        logo?: {
            image?: LiveImage;
            altText?: string;
            link?: string;
        },
        navItems?: Array<MenuItem>,
        iconsAndLabels?: {
            allCategories?: {
                icon?: AvailableIcons,
                label?: string,
            },
            search?: {
                icon?: AvailableIcons,
                label?: string,
            },
            favorites?: {
                icon?: AvailableIcons,
                label?: string,
            },
            myAccount?: {
                icon?: AvailableIcons,
                label?: string,
            },
            cart?: {
                icon?: AvailableIcons,
                label?: string,
            },
        },
        search?: {
            placeholder?: string
            action?: string
            name?: string
            query?: string    
        },
    },
    desktopContent?: {
        navBar?: boolean,
        searchBar?: boolean,
        actionButtons?: boolean,
        allCategories?: {
            icon?: boolean,
            label?: boolean,    
        },
        actionItems?: {
            search?: {
                icon?: boolean,
                label?: boolean,
                openIn?: "Same place" | "Below header" | "Entire screen",
            },
            favorites?: {
                icon?: boolean,
                label?: boolean,
            },
            myAccount?: {
                icon?: boolean,
                label?: boolean,
            },
            cart?: {
                icon?: boolean,
                label?: boolean,
            },
        },    
        moreActions?: Array<Action>,
        buttons?: Array<Button>,
    },
    mobileContent?: {
        searchBar?: boolean,
        actionItems?: {
            search?: {
                icon?: boolean,
                openIn?: "Below header" | "Entire screen",
            },
            favorites?: boolean,
            myAccount?: boolean,
            cart?: boolean,
        },    
        moreActions?: Array<Action>,
    },
}  

export default function HeaderExample({
    logo,
}: Props) {
    return (
        <div>hello</div>
    )
}

