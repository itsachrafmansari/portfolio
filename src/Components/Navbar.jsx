import NavbarLink from "./NavbarLink";

const Navbar = () => {
    return (
        <nav className="px-10 py-5">
            <ul className="flex justify-center items-center gap-6 text-lg font-medium uppercase">
                <li><NavbarLink path={'/about'} text={'ABOUT'}/></li>
                <li><NavbarLink path={'/events'} text={'EVENTS'}/></li>
                <li><NavbarLink path={'/press'} text={'PRESS & TV'}/></li>
                <li><NavbarLink path={'/contact'} text={'CONTACT'}/></li>
            </ul>
        </nav>
    );
}

export default Navbar;