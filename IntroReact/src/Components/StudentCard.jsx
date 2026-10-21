function StudentCard({ name, course, score }) {
  return (
    <div className="w-72 rounded-2xl bg-gradient-to-br from-indigo-950 to-indigo-500 p-6 text-center text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="mb-3 text-5xl">🎓</div>

      <h2 className="text-xl font-bold">{name}</h2>

      <p className="mb-5 mt-2 text-sm text-indigo-200">
        Student Profile
      </p>

      <div className="mb-3 rounded-xl bg-white/15 p-4">
        <p className="text-xs uppercase tracking-wider text-indigo-200">
          Course
        </p>
        <h3 className="mt-1 text-lg font-semibold">{course}</h3>
      </div>

      <div className="rounded-xl bg-white/15 p-4">
        <p className="text-xs uppercase tracking-wider text-indigo-200">
          Score
        </p>
        <h3 className="mt-1 text-xl font-bold text-emerald-300">
          {score}
        </h3>
      </div>

      <p className="mt-5 text-xs text-indigo-200">
        Learning • Growing • Achieving
      </p>
    </div>
  );
}
export default StudentCard;