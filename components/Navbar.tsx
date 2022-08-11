import { ActiveLink } from "./ActiveLink";
import navbar from "./Navbar.module.css";

const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
    
];

export const Navbar = () => {
    return (
        <nav className={navbar['menu-container']}>
            {
                menuItems.map(({href, text}) => (
                    <ActiveLink key={text} text={text} href={href} />
                ))
            }
            {/* <ActiveLink text="Home" href="/" />
            <ActiveLink text="About" href="/about" />
            <ActiveLink text="Contact" href="/contact" />
            <ActiveLink text="pricing" href="/pricing" /> */}
        </nav>
    )
}
