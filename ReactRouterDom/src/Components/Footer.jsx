
function Footer() {
  return (
    <>
    <footer className="bg-[#F3EEFF] px-6 py-10 text-[#49376E]">

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

        {/* Logo and Description */}
        <div>
          <h2 className="mb-3 text-2xl font-extrabold">
            🎓 EduBloom
          </h2>

          <p className="max-w-xs text-sm leading-6 text-[#827590]">
            Your journey to success starts here.
            Learn new skills, explore courses, and
            achieve your academic goals with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-[#827590]">
            <li>
              <a href="#about" className="hover:text-[#C27897]">
                About Us
              </a>
            </li>

            <li>
              <a href="#courses" className="hover:text-[#C27897]">
                Courses
              </a>
            </li>

            <li>
              <a href="#careers" className="hover:text-[#C27897]">
                Careers
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-[#C27897]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-bold">
            Contact Us
          </h3>

          <p className="mb-3 text-sm text-[#827590]">
            Email: hello@edubloom.com
          </p>

          <div className="flex gap-4 text-sm font-medium">
            <a href="#instagram" className="hover:text-[#C27897]">
              Instagram
            </a>

            <a href="#facebook" className="hover:text-[#C27897]">
              Facebook
            </a>

            <a href="#linkedin" className="hover:text-[#C27897]">
              LinkedIn
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mx-auto mt-8 max-w-7xl border-t border-[#E5DDF5] pt-5 text-center text-sm text-[#827590]">
        © 2026 EduBloom. All rights reserved. Made with 💜
      </div>

    </footer>
    </>
  );
}

export default Footer;
