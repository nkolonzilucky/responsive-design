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
            <NavigationMenu>
                <NavigationMenuList>
                    {links.map((link) => {
                        return (
                          <NavigationMenuItem key={link.id}>
                                <NavigationMenuLink  href={link.href}>{ link.Title}</NavigationMenuLink>
                          </NavigationMenuItem>
                        );
                    }) }
                    
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}