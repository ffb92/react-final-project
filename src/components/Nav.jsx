import { useState } from "react";
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
import { AiOutlineArrowDown } from "react-icons/ai";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handler um die Navbar in der mobilen Ansicht zu schließen.
  const handleClick = (event) => {
    event.preventDefault();
    navigate(event.currentTarget.getAttribute("href")); //
    setIsMenuOpen(false);
  };

  // Mobilelinks
  const menuItems = {
    Startseite: "/",
    Vorstand: "/management",
    Geschichte: "/history",
    Mitglieder: "/member",
    Tanzkorps: "/dancing",
    Satzung: "/statutes",
    Veranstaltungen: "/events",
    Eintrittskarten: "/tickets",
    Bilder: "/pictures",
    Wetter: "/weather",
  };

  // Links für das Dropdown Menü
  const dropdownLinks = [
    {
      name: "Vorstand",
      link: "/management",
      description: "Erfahren Sie mehr über unsere Vereinsleitung",
    },
    {
      name: "Geschichte",
      link: "/history",
      description: "Entdecken Sie unsere Geschichte",
    },
    {
      name: "Mitglieder",
      link: "/member",
      description: "Lernen Sie unsere Mitglieder kennen",
    },
    {
      name: "Tanzkorps",
      link: "/dancing",
      description: "Tänze und mitreißenden Auftritte unseres Tanzkorps",
    },
    {
      name: "Satzung",
      link: "/statutes",
      description: "Informieren Sie sich über unsere Richtlinien",
    },
  ];

  // Links für den Header
  const HeaderLinks = {
    Veranstaltungen: "/events",
    Eintrittskarten: "/tickets",
    Bilder: "/pictures",
    Wetter: "/weather",
  };

  return (
    // Wichtig um das öffnen und schließen der mobilen Navbar zu steuern.
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(isOpen) => setIsMenuOpen(isOpen)}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      {/* Mobile */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Link to="/">
            <img src={logo} alt="logo" className="size-12" />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* Desktop */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <img src={logo} alt="logo" className="size-12" />
        </NavbarBrand>
        <NavbarItem isActive>
          <Link to="/" key="/">
            Startseite
          </Link>
        </NavbarItem>
        {/* Dropdown Menü */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<AiOutlineArrowDown />}
                radius="sm"
                variant="light"
              >
                Über uns
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            className="w-50"
            itemClasses={{
              base: "gap-4",
            }}
          >
            {dropdownLinks.map((item) => (
              <DropdownItem
                as={Link}
                to={item.link}
                key={item.link}
                description={item.description}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {Object.entries(HeaderLinks).map(([key, value]) => (
          <NavbarItem key={key}>
            <Link to={value}>{key}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="flat" className="bg-red-400/75">
            <Link to="/contact">Kontakt</Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/* Mobile */}
      <NavbarMenu>
        {Object.entries(menuItems).map(([key, path], index) => (
          <NavbarMenuItem key={key}>
            <Link
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
              onClick={handleClick}
            >
              {key}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};
export default Nav;
