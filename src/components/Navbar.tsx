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
        <div className="flex items-center gap-3">
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
          <NavigationMenuList className="hidden sm:lg:flex">
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
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="sm:lg:hidden size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
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
