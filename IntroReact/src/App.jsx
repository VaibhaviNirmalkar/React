import React from 'react'
import Navbar from './Components/Navbar';
import StudentCard from './Components/StudentCard';
import students from './assets/student';
import Footer from './Components/Footer';

function App() {
  return (
  <>
  <Navbar/>
  
<h1 className="mx-4 my-8 rounded-2xl bg-gradient-to-r from-[#FCE4EC] via-[#F3EEFF] to-[#DDF5E8] px-6 py-8 text-center text-3xl font-extrabold tracking-wide text-[#49376E] shadow-md sm:text-4xl">
  🎓 Welcome to Students Portal
  <span className="mx-auto mt-3 block h-1 w-24 rounded-full bg-[#C9B8F0]"></span>
  <span className="mt-3 block text-sm font-medium tracking-normal text-[#827590]">
    Learn • Grow • Achieve ✨
  </span>
</h1>

  <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-indigo-950">
        Student Dashboard
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {students.map((student) => (
          <StudentCard
            key={student.name}
            name={student.name}
            course={student.course}
            score={student.score}
          />
        ))}
      </div>
    </div>
<Footer/>
  </> 
  ); 
}

export default App;
