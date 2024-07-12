export const NavLink = ({ link, label }: { link: string; label: string }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-base leading-loose  hover:text-primary-200 "
      >
        {label}
      </a>
    </li>
  );
};
