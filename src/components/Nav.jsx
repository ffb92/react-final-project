import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { ChevronDown } from "./Icons.jsx";
import logo from "../assets/logo.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Nav = () => {
const navigate = useNavigate();


  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //! Kann man die links besser zusammenfügen?
  // Mobilelinks
  const menuItems = {
    Vorstand: "/management",
    Geschichte: "/history",
    Mitglieder: "/member",
    Tanzkorps: "/dancing",
    Satzung: "/statutes",
    Veranstaltungen: "/events",
    Eintrittskarten: "/tickets",
    Bilder: "/pictures",
  };

  // Desktoplinks
  const dropdownLinks = {
    Vorstand: "/management",
    Geschichte: "/history",
    Mitglieder: "/member",
    Tanzkorps: "/dancing",
    Satzung: "/statutes",
  };

  const HeaderLinks = {
    Veranstaltungen: "/events",
    Eintrittskarten: "/tickets",
    Bilder: "/pictures",
  };

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      {/* Mobile */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <img src={logo} alt="logo" className="size-12" />
        </NavbarBrand>
      </NavbarContent>
      {/* Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src={logo} alt="logo" className="size-12" />
        </NavbarBrand>
        <NavbarItem isActive>
          <RouterLink to="/" key="/" aria-current="page">
            Startseite
          </RouterLink>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Über uns
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Navigation"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {Object.entries(dropdownLinks).map(([key, value]) => (
              <DropdownItem
                as={RouterLink}
                to={value}
                key={key}
                description={`Beschreibung für ${key}`} // Passen Sie die Beschreibung entsprechend an
                startContent={icons[key]} // Stellen Sie sicher, dass Sie die Icons entsprechend verwalten
              >
                {key}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {Object.entries(HeaderLinks).map(([key, value]) => (
          <NavbarItem key={key}>
            <RouterLink to={value} aria-current="page">
              {key}
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
      <NavbarItem>
        <Button
          onClick={() => navigate('/contact')} // Navigieren Sie zur Kontaktseite
          variant="flat"
        >
          Kontakt
        </Button>
      </NavbarItem>
    </NavbarContent>
      {/* Mobile */}
      <NavbarMenu>
        {Object.entries(menuItems).map(([key, path], index) => (
          <NavbarMenuItem key={key}>
            <RouterLink
              to={path}
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === Object.keys(menuItems).length - 1
                  ? "danger"
                  : "foreground"
              }
              size="lg"
            >
              {key}
            </RouterLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Nav;
