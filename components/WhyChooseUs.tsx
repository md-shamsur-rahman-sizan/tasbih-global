export default function WhyChooseUs() {
  const points = [
    {
      title: "Expert Guidance",
      desc: "Our counselors have over 12 years of experience in global admissions."
    },
    {
      title: "Financial Aid",
      desc: "We help you find the best scholarships to make your dream affordable."
    },
    {
      title: "Visa Success",
      desc: "100% visa success rate for USA, UK, and Australia."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 font-tahoma">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Why <span className="text-brand-red">Tasbih Global?</span>
          </h2>
          <div className="w-24 h-1 bg-brand-red mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <h3 className="text-xl font-bold text-brand-blue mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}