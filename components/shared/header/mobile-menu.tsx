import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EllipsisVerticalIcon, ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <EllipsisVerticalIcon />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-start p-6">
          <SheetTitle>Menu</SheetTitle>
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart />
              Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <UserIcon />
              Sign In
            </Link>
          </Button>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
