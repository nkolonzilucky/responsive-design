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
      href: "/",
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
        <div className="flex gap-3">
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
        </div>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/signin">
              <button className="btn btn-link">SignIn</button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="btn btn-primary min-w-fit min-h-fit"
              href="/signup"
            >
              Start For Free
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
