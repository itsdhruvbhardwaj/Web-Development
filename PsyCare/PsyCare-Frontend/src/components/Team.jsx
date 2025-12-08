import "../styles/globals.css";

const team = [
  { name: "NeuroNova Team", role: "Developers & Researchers" },
  { name: "Counsellors", role: "Mental health professionals" },
];

export default function Team() {
  return (
    <section id="team">
      <h3 className="text-3xl font-semibold text-green-700 text-center">
        Our Team
      </h3>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {team.map((member, i) => (
          <div key={i} className="bg-green-50 p-6 rounded-xl shadow-md text-center">
            <h4 className="text-xl font-bold text-green-600">{member.name}</h4>
            <p className="text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
