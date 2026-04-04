import { NavLink } from '../ui/NavLink.jsx'

export const Navbar = () => {

    const links = ["Projects", "Contact"];

    return <div className="pt-10 pb-4 flex items-end justify-end gap-8">
        {links.map(link => <NavLink name={link}/>)}
        </div>

}