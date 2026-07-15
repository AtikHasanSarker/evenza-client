"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Bars } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { LayoutDashboard, Plus, List, LogOut, Home } from "lucide-react";
import logo from "@/assets/images/nav-logo.png"
import Image from "next/image";
import toast from "react-hot-toast";
import authClient from "@/lib/auth-client";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Add Event",
    href: "/dashboard/add-event",
    icon: Plus,
  },
  {
    label: "Manage Events",
    href: "/dashboard/manage-events",
    icon: List,
  },
];




export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }

    return pathname.startsWith(href);
  };

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed");
      return;
    }

    toast.success("Logged out successfully");
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="EventHub"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 transition ${
                  isActive(item.href)
                    ? "bg-primary text-white"
                    : "hover:bg-default"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Logout */}
        <div className="hidden lg:block">
          <Button
            onClick={handleLogout}
            variant="danger"
          >
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        {/* Mobile Drawer */}
        <div className="lg:hidden">
          <Drawer>
            <Button variant="secondary">
              <Bars />
            </Button>

            <Drawer.Backdrop>
              <Drawer.Content placement="left">
                <Drawer.Dialog>
                  <Drawer.CloseTrigger />

                  <Drawer.Header>
                    <Drawer.Heading>Dashboard</Drawer.Heading>
                  </Drawer.Header>

                  <Drawer.Body>
                    <nav className="flex flex-col gap-2">
                      {navItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                              isActive(item.href)
                                ? "bg-primary text-white"
                                : "hover:bg-default"
                            }`}
                          >
                            <Icon size={20} />
                            {item.label}
                          </Link>
                        );
                      })}

                      <Button
                        variant="danger"
                        className="justify-start mt-4"
                        onClick={handleLogout}
                      >
                        <LogOut size={18} />
                        Logout
                      </Button>
                    </nav>
                  </Drawer.Body>
                </Drawer.Dialog>
              </Drawer.Content>
            </Drawer.Backdrop>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
