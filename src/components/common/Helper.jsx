import { CrownIcon, MonitorIcon, ProfileIcon, SettingsIcon } from "./Icon";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Movies", href: "/" },
  { name: "TV Shows", href: "/" },
  { name: "New/Upcoming", href: "/" },
  { name: "My List", href: "/" },
  { name: "Browse by language", href: "#", highlight: true },
  { name: "Speedo Tube", href: "/" },
];

export const menuItems = [
  {
    icon: <CrownIcon />,
    label: "Membership",
    active: false,
    key: "membership",
  },
  {
    icon: <MonitorIcon />,
    label: "Devices",
    active: false,
    key: "devices",
  },
  {
    icon: <SettingsIcon />,
    label: "Settings",
    active: false,
    key: "settings",
  },
  {
    icon: <ProfileIcon />,
    label: "Profile",
    active: true,
    key: "profile",
  },
];
