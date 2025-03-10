"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Departments",
    href: "/departments",
    description: "Explore various academic departments in our college.",
  },
  {
    title: "Programs & Courses",
    href: "/programs",
    description: "Discover undergraduate and postgraduate programs offered.",
  },
  {
    title: "Academic Calendar",
    href: "/calendar",
    description: "Stay updated with important academic dates and deadlines.",
  },
  {
    title: "Syllabus",
    href: "/syllabus",
    description: "Access detailed syllabus for various courses and subjects.",
  },
];

export default components;

export function NavigationMenuComponent() {
  return (
    <div className="hidden sm:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="">
            <a href="/docs">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        CAS Thamarassery
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        College of Applied Science, Thamarassery, is affiliated
                        to the Calicut University and was established in 2012
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/" title="College History">
                  Our college History
                </ListItem>
                <ListItem href="/" title="Profile">
                  Our collge profile
                </ListItem>
                <ListItem href="/" title="Former Principals">
                  Our former Principals
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid max-w-[400px] gap-3 p-4 md:max-w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Admissions
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Examinination
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Placements
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Alumini
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
