// app/page.tsx
"use client";
function Header() {
    return (
        <header className="bg-gray-300 text-black p-4">
            <h1 className="text-xl font-bold">CSD Club</h1>
            <nav className="mt-2">
                <ul className="flex gap-4 bg-gray-200 p-2 rounded">
                    <li><a href="#" className="text-black hover:underline">Home</a></li>
                    <li><a href="#" className="text-black hover:underline">Blog</a></li>
                    <li><a href="#" className="text-black hover:underline">Notes</a></li>
                    <li><a href="#" className="text-black hover:underline">Events</a></li>
                    <li><a href="#" className="text-black hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
function HomeContent() {
    return (
        <section id="home" className="p-6 bg-black " >
            <h2 className="text-3xl font-bold mb-2 text-white">Hello CSD Club Member's</h2>
           
            
            <p className="text-white">Welcome to the official CSD Club website!</p>
        </section>
    );
}

function Footer() {
    return (
        <footer className="bg-orange-100 text-black text-center p-4 mt-8">
            <p>© 2025 CSD Club. All rights reserved.</p>
        </footer>
    );
}

export default function HomePage() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <HomeContent />
            </main>
            <Footer />
        </div>
    );
}


