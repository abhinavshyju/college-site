import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// Menu items
const components = [
  {
    title: "Departments",
    href: "/department",
    description: "Explore various academic departments in our college.",
  },
  {
    title: "Programs & Courses",
    href: "/programs",
    description: "Discover undergraduate and postgraduate programs offered.",
  },
];

export default function MobileMenu() {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="w-6 h-6 text-primary hover:text-primary/80 transition-colors" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-6">
          <SheetHeader>
            <SheetTitle className="text-left text-2xl font-bold text-primary">
              Menu
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 space-y-6">
            <a
              href="/"
              className="block text-lg font-medium hover:text-primary transition-colors"
            >
              Home
            </a>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">About Us</h3>
              <a
                href="/about"
                className="block text-sm leading-relaxed text-muted-foreground hover:text-primary transition-colors"
              >
                CAS Thamarassery – Affiliated to Calicut University, established
                in 2012.
              </a>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Academics</h3>
              <ul className="space-y-4">
                {components.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="group block space-y-1 rounded-lg p-3 hover:bg-primary/5 transition-colors"
                    >
                      <div className="text-base font-medium text-foreground group-hover:text-primary">
                        {item.title}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a
                href="/admission"
                className="block text-lg font-medium hover:text-primary transition-colors"
              >
                Admissions
              </a>
              <a
                href="/#placement"
                className="block text-lg font-medium hover:text-primary transition-colors"
              >
                Placements
              </a>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
