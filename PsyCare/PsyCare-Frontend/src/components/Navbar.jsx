import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="text-2xl font-bold text-green-700">PsyCare</h1>
      <ul className="flex space-x-6">
        <li><a href="#about">About</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#impact">Impact</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </nav>
  );
}
