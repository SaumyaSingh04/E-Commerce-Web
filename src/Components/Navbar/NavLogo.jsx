import nav_logo from '../Assets/logo.png'

const NavLogo = () => {
  return (
    <div className="flex-shrink-0">
      <img className="h-8 w-auto" src={nav_logo} alt="Logo" />
    </div>
  );
}

export default NavLogo;
