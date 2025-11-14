import NavbarLarge from "./navbar-large";
import NavbarSmall from "./navbar-small";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 z-50">
      <div className="hidden md:block">
        <NavbarLarge />
      </div>
      <div className="md:hidden">
        <NavbarSmall />
      </div>
    </div>
  );
};

export default Navbar;
