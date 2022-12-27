import classes from "./Navbar.module.css";
import MenuItem from "./Menu/MenuItem";

const Navbar = () => {
  const menues = ["회원가입", "로그인"];
  return (
    <div className={classes.navbar}>
      <div className={`${classes.navbar_child} ${classes.navbar_home} `}>
        Home
      </div>

      <ul className={`${classes.navbar_child} ${classes.navbar_menues}`}>
        {menues.map((title) => (
          <MenuItem title={title} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
