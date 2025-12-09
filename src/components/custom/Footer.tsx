import { Separator } from "../ui/separator";

const Footer = () => (
  <footer className="w-full mt-10 py-4 flex flex-col items-center text-sm text-muted-foreground">
    <Separator className="mb-4 w-full" />
    <p>Resume Builder {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
