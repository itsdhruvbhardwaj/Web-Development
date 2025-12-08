import "../styles/globals.css";

export default function Services() {
  return (
    <section id="services">
      <h3 className="text-3xl font-semibold text-green-700 text-center">
        Our Technical Approach
      </h3>
      <div className="grid md:grid-cols-2 gap-10 mt-8">
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-bold text-green-700">Frontend</h4>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>HTML, CSS (Tailwind)</li>
            <li>JavaScript / React</li>
            <li>Real-time chat & community (WebSockets)</li>
            <li>Interactive dashboards (Chart.js / Recharts)</li>
          </ul>
        </div>
        <div className="p-6 bg-green-50 rounded-lg">
          <h4 className="font-bold text-green-700">Backend</h4>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Java (Spring Boot) – APIs, authentication, forum</li>
            <li>Python (NLP, Sentiment, AI detection)</li>
            <li>PostgreSQL & MongoDB for structured/unstructured data</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
