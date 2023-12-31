import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../App.css";

function MobileMenuButton() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList backgroundColor="transparent">
        <MenuItem background={"#092852"} icon={<RiArrowDropDownLine />}>
          Qualifications
        </MenuItem>
        <MenuItem background={"#092852"} icon={<RiArrowDropDownLine />}>
          Organizations
        </MenuItem>
        <MenuItem background={"#092852"} icon={<RiArrowDropDownLine />}>
          Research & Analysis
        </MenuItem>
        <MenuItem background={"#092852"} icon={<RiArrowDropDownLine />}>
          Lorem ipsum
        </MenuItem>
        <MenuItem background={"#092852"} icon={<RiArrowDropDownLine />}>
          Lorem ipsum
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default MobileMenuButton;