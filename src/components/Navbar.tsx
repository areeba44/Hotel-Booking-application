export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-700">
          STAY HAVEN
        </h1>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700">
          <a href="./Front" className="hover:text-red-700">Home</a>
          <a href="./About" className="hover:text-red-700">About</a>
          <a href="#/Blog" className="hover:text-red-700">Blog</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="border border-red-700 px-4 py-1 rounded text-red-700 hover:bg-red-900 hover:text-white transition">
            Login
          </button>
          <button className="bg-red-900 text-white px-4 py-1 rounded hover:bg-red-800">
            Sign up
          </button>
        </div>

      </div>
    </nav>
  )
}