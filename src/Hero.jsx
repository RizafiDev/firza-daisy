import "./index.css";
import "./assets/vector.png";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Example = ({ args_if_necessary }) => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Firmansyah Riza", "Fullstack Developer"],

      typeSpeed: 50,
      backDelay: 1000,
      backSpeed: 40,
      startDelay: 700,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};
function Hero() {
  return (
    <div
      className="hero container mx-auto bg-transparent min-h-screen text-[#212427]"
      id="home"
    >
      <div className="hero-content  flex-col lg:flex-row-reverse justify-between gap-64">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="min-w-sm rounded-lg shadow-2xl flex w-96"
        />
        <div className="w-full">
          <h1 className="text-5xl font-bold">
            Hello, I'm <Example args_if_necessary={"something"} />
          </h1>
          <p className="py-6">
            Saya adalah seorang pelajar dari SMK Negeri 6 Surakarta. Saya
            mengambil jurusan <br /> Rekayasa Perangkat Lunak. Saya sekarang
            duduk dibangku kelas 11 dengan usia 16 tahun. <br />
            Keseharian saya ialah membuat barisan kode.
          </p>
          <div className="btn-nav inline-flex gap-4 items-center">
            <button className="btn btn-primary text-[#fafafa] ">Hire Me</button>
            <a className="text-[#212427] font-semibold" href="">
              Download CV <i class="ri-arrow-right-line"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
