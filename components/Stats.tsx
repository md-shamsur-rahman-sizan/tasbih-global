export default function Stats() {
  const stats = [
    { label: "Successful Students", value: "22,000+", icon: "🎓" },
    { label: "Scholarships Awarded", value: "500+", icon: "💰" },
    { label: "University Partners", value: "100+", icon: "🏛️" },
    { label: "Expert Counselors", value: "50+", icon: "🤝" },
  ];

  return (
    <section className="bg-brand-blue py-12 font-tahoma">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center text-white border-r last:border-r-0 border-white/20 p-4"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-xs md:text-sm uppercase tracking-widest mt-2 font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}