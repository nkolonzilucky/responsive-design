import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const links = [
    {
      id: "0",
      href: "/home",
      Title: "Home",
    },
    {
      id: "1",
      href: "/health",
      Title: "Health",
    },
    {
      id: "2",
      href: "/customers",
      Title: "Customers",
    },
    {
      id: "3",
      href: "/features",
      Title: "Features",
    },
    {
      id: "4",
      href: "/pricing",
      Title: "Pricing",
    },
  ];
  return (
    <nav className="flex justify-center bg-amber-500 py-4 px-40">
      <NavigationMenu className="flex justify-between max-w-full">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <button className="button-primary">
                <span>Icon</span>
                <span>The Cake Angel</span>
              </button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          {links.map((link) => {
            return (
              <NavigationMenuItem key={link.id}>
                <NavigationMenuLink href={link.href}>
                  {link.Title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <button className="button-primary">SignIn</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink>
              <button className="button-primary">Start For Free</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
