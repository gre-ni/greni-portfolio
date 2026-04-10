export const NavLink = ({ name }) => {
  return (
    <a
      href={`#${name}`}
      className="no-underline text-base hover:text-highlight"
    >
      {name}
    </a>
  );
};
