import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import Icon, { AvailableIcons, } from "../components/ui/Icon.tsx";

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
    desktop?: {
        layout?: "Single line" | "Double line"
        logoAlignment?: "Left" | "Center"
        allCategories?: {
            showIcon?: boolean,
            showLabel?: boolean,    
        },
        navItems?: {
            show?: boolean,
            alignment?: "Left" | "Center"
        },
        actionItems?: {
            position?: "First line" | "Second line",
            search?: {
                showIcon?: boolean,
                showLabel?: boolean,
                openIn?: "Same place" | "Below header" | "Entire screen"
            },
            favorites?: {
                showIcon?: boolean,
                showLabel?: boolean,
            },
            account?: {
                showIcon?: boolean,
                showLabel?: boolean,
            },
            cart?: {
                showIcon?: boolean,
                showLabel?: boolean,
            },
            additionalActions?: Array<{
                showIcon?: boolean,
                showLabel?: boolean,    
            }>,
            buttons?: {
                primary?: {
                    text?: string,
                    link?: string,
                    openInNewTab?: boolean,
                },
                secondary?: {
                    text?: string,
                    link?: string,
                    openInNewTab?: boolean,
                }
            },    
        },
        /**
         * @title Navigation items
         * @description Only if it's not shown in Action items
         */
        inlineSearch?: {
            show?: boolean,
            alignment?: "Left" | "Center"
        },
    },
    mobile?: {
        etc?: string,
    }
}  

export default function HeaderExample({
    logo,
}: Props) {
    return (
        <div>hello</div>
    )
}

