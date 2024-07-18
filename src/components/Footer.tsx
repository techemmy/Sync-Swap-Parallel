import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="md:px-32 pt-10 my-28 md:mb-32 grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
            <Logo className="w-[48px] h-[48px] hidden md:block" />

            <article className="grid gap-y-5">
                <p className="text-gray-500 text-sm font-semibold">Community</p>
                <ul className="text-black-900 grid gap-y-2">
                    <a href="#"><li>Discord</li></a>
                    <a href="#"><li>Guild</li></a>
                </ul>
            </article>

            <article className="grid gap-y-5">
                <p className="text-gray-500 text-sm font-semibold">News</p>
                <ul className="text-black-900 grid gap-y-2">
                    <a href="#"><li>Twitter</li></a>
                    <a href="#"><li>Mirror</li></a>
                </ul>
            </article>

            <article className="grid gap-y-5">
                <p className="text-gray-500 text-sm font-semibold">Resources</p>
                <ul className="text-black-900 grid gap-y-2">
                    <a href="#"><li>Docs</li></a>
                    <a href="#"><li>Github</li></a>
                </ul>
            </article>

            <article className="grid gap-y-5">
                <p className="text-gray-500 text-sm font-semibold">Links</p>
                <ul className="text-black-900 grid gap-y-2">
                    <a href="#"><li>Portal</li></a>
                    <a href="#"><li>Block Explorer</li></a>
                </ul>
            </article>


        </footer>
    )
}

