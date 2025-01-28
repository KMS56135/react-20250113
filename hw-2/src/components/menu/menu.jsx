import { MenuList } from "./menu-list/menu-list";

export const Menu = ({ menu }) => {

  return (
    <div>
      <h3>Menu</h3>
      <MenuList menu={menu}/>
    </div>
  );
};
