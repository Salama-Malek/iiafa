import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Briefcase, FileText, User, Phone } from "lucide-react";
import { siteContent } from "@/content/ar/site";

const pickLink = (page) => siteContent.navLinks.find((item) => item.page === page);

const tabs = [
  { ...(pickLink("Home") ?? { label: "الرئيسية", page: "Home", path: "/" }), Icon: Home },
  { ...(pickLink("Services") ?? { label: "الخدمات", page: "Services", path: "/الخدمات" }), Icon: Briefcase },
  { ...(pickLink("Articles") ?? { label: "المقالات", page: "Articles", path: "/المقالات" }), Icon: FileText },
  { ...(pickLink("Lawyer") ?? { label: "المحامي", page: "Lawyer", path: "/المحامي" }), Icon: User },
  { ...(pickLink("Contact") ?? { label: "تواصل معنا", page: "Contact", path: "/تواصل" }), Icon: Phone },
].filter((t) => Boolean(t?.path));

export default function MobileNav() {
  return (
    <nav className="md:hidden fixed bottom-0 right-0 left-0 z-40 bg-white border-t pb-[calc(env(safe-area-inset-bottom)+0.35rem)] pt-2">
      <div className="grid grid-cols-5 text-center text-xs">
        {tabs.map((tab) => (
          <NavLink
            key={`${tab.page ?? tab.label}-${tab.path}`}
            to={tab.path}
            className={({ isActive }) =>
              `py-1 ${isActive ? "text-[#99141e] font-semibold" : "text-gray-500"}`
            }
          >
            <div className="flex flex-col items-center gap-1">
              {tab.Icon ? <tab.Icon className="w-5 h-5" aria-hidden="true" /> : null}
              <span>{tab.label}</span>
            </div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
