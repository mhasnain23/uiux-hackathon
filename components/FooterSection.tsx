import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  YoutubeIcon,
  PinIcon as Pinterest,
  InstagramIcon,
  // Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function FooterSection() {
  return (
    <footer className="w-full border-t bg-white mt-20">
      <div className="mx-auto w-full max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info & Social */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Image
                src="/comfortylogo.svg"
                alt="Comforty Logo"
                width={40}
                height={40}
                className="object-cover font-semibold text-2xl"
                priority
                quality={100}
              />
              <span className="text-xl font-bold">Comforty</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Vitamina hilikopa orci et amet vel sapinter et gravida lorem
              bibendum
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-black/60"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black/60"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black/60"
              >
                <InstagramIcon className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black/60"
              >
                <Image
                  src={"/Pin.png"}
                  alt="pinterest"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-black/60"
              >
                <YoutubeIcon className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-[#9A9CAA]">
              CATEGORY
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Sofa
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Armchair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Wing Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Desk Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Wooden Chair
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Park Bench
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-[#9A9CAA]">
              SUPPORT
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground text-black">
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Help & Support
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-black/90 transition-all ease-in duration-200 hover:text-black/60"
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-400">
              NEWSLETTER
            </h3>
            <div className="space-y-4">
              <form className="flex items-center justify-evenly gap-5">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="max-w-xs"
                  required
                />
                <Button type="submit" className="max-w-[100px] bg-[#029fae]">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                mollis lorem ipsum.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 text-sm md:flex-row md:space-y-0">
          <p className="text-muted-foreground">
            © 2024 - Made by{" "}
            <Link href="#" className="hover:text-black/60">
              Muhammad Hasnain
            </Link>
          </p>
          <div className="flex items-center space-x-4">
            <Image
              src="/pay.svg"
              alt="PayPal"
              width={227}
              height={27}
              priority
              quality={100}
              className="object-center object-cover invert"
            />
            {/* <Image
              src="/placeholder.svg"
              alt="Visa"
              width={40}
              height={24}
              className="h-6 w-auto"
            /> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
