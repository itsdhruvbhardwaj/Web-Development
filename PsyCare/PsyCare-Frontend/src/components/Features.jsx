import "../styles/features.css";

const features = [
  { title: "AI-Powered Chatbot", desc: "Instant guidance for stress, anxiety, sleep & emotional detection." },
  { title: "Multilingual Hub", desc: "Videos, audios & guides in English, Hindi, Urdu, Kashmiri & Dogri." },
  { title: "Anonymous Peer Support", desc: "Safe community for students to share and connect." },
  { title: "SOS Emergency Help", desc: "Quick one-tap access to counsellors and helplines." },
];

export default function Features() {
  return (
    <section id="features">
      <h3 className="text-3xl font-semibold text-green-700 text-center">
        Key Features
      </h3>
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {features.map((f, i) => (
          <div key={i} className="feature-card">
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
