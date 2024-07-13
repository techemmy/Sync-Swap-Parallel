import NavbarLarge from "@/components/NavbarLarge";
import NavbarSmall from "@/components/NavbarSmall";

export default function NavBars() {
    return (
        <div className="z-50 relative">
            <NavbarSmall />
            <NavbarLarge />
        </div>
    )
}
