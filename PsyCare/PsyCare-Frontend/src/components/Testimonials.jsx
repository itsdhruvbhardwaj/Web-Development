import "../styles/globals.css";

const feedback = [
  { user: "Student A", msg: "PsyCare helped me manage exam stress and anxiety." },
  { user: "Student B", msg: "I felt safe sharing my thoughts in the anonymous forum." },
  { user: "Admin", msg: "The analytics helped us plan targeted workshops." },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50">
      <h3 className="text-3xl font-semibold text-green-700 text-center">
        What People Say
      </h3>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {feedback.map((f, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow">
            <p className="text-gray-600 italic">"{f.msg}"</p>
            <p className="mt-3 font-semibold text-green-600">- {f.user}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
