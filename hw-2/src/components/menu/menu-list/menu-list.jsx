import { MenuItem } from "../menu-item/menu-item";

export const MenuList = ({ menu }) => {
  return (
    <ul>
      <MenuItem menu={menu}/>
    </ul>
  );
};
