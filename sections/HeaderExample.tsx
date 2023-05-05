export interface MenuItem {
    label?: string,
    href?: string,
    image?: string,
}

export interface AdditionalActions {
    icon?: string,
    label?: string,
    href?: string,
    openInNewTab?: boolean,
}

export interface Props {
    logo?: {
        image?: string;
        altText?: string;
        link?: string;
        Alignment?: "Left" | "Center"            
    },
    menuItems?: Array<MenuItem>,
    iconsAndLabels?: {
        hamburger?: {
            icon?: string,
            label?: string,    
        },
        search?: {
            icon?: string,
            label?: string,    
        },
        favorites?: {
            icon?: string,
            label?: string,    
        },
        myAccount?: {
            icon?: string,
            label?: string,    
        },
        cart?: {
            icon?: string,
            label?: string,    
        },
    },
    additionalActions?: Array<AdditionalActions>,    
    searchConfig?: {
        placeholder?: string
        action?: string
        name?: string
        query?: string    
    },
    desktopOptions?: {
        layout?: "Single line" | "Double line"
        logoAlignment?: "Left" | "Center"
        hamburger?: {
            showIcon?: boolean,
            showLabel?: boolean,    
        },
        menuItems?: {
            show?: boolean,
            alignment?: "Left" | "Center"
        },
        actionItems?: {
            position?: "First line" | "Second line",
        }
        defaultActions?: {
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
        },
        additionalActionss?: Array<{
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
        inlineSearch?: {
            /** @description Only if it's not shown in Action items */
            show?: boolean,
            alignment?: "Left" | "Center"
        },
    },
    mobileOptions: {
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

