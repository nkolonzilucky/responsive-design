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
import Image from "next/image";

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
              <NavigationMenuLink
                href="/"
                className="flex flex-row btn btn-neutral py-6 px-4 items-center"
              >
                <Image src={"/logo.svg"} alt="logo" width={33} height={33} />
                <span className="text-nowrap flex flex-col text-[0.9rem] leading-3.5">
                  The Cake Angel
                  <span className="text-[0.6rem] tracking-tight opacity-60">
                    I believe in your smile
                  </span>
                </span>
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
              className="btn btn-primary min-w-fit min-h-fit text-nowrap"
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
