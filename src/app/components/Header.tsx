import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="w-full bg-white shadow-sm py-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="hover:opacity-90 transition-opacity">
                    <Image
                        src="/isievelogo.png"
                        alt="ISieve Technologies Logo"
                        width={180}
                        height={54}
                        priority
                        className="h-auto"
                    />
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">Solutions</Link>
                    <Link href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">About</Link>
                    <Link href="#" className="text-neutral-600 hover:text-blue-600 transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header; 