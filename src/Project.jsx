import { useEffect, useRef } from "react";
import pjblImage from "./assets/pjbl.png";
function Project() {
  return (
    <div
      className="parent min-h-screen w-full flex items-center justify-center text-[#fafafa] gap-4"
      id="project"
    >
      <div className="card bg-base-100 w-96 shadow-2xl">
        <figure>
          <img src={pjblImage} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Panel Absensi
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Projek sistem absensi sekolah. <br />
            Dilengkapi dengan dashboard guru.
          </p>
          <a
            className="card-actions justify-start"
            href="https://firmansyah-dev.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check <i class="ri-arrow-right-line"></i>
          </a>
          <div className="card-actions justify-end mt-16">
            <div className="badge badge-outline">PJBL</div>
            <div className="badge badge-outline">Dashboard</div>
          </div>
        </div>
      </div>

      {/* next content */}
      <div className="card bg-base-100 w-96 shadow-2xl">
        <figure>
          <img src={pjblImage} className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Panel Absensi
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Projek sistem absensi sekolah. <br />
            Dilengkapi dengan dashboard guru.
          </p>
          <a
            className="card-actions justify-start"
            href="https://firmansyah-dev.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check <i class="ri-arrow-right-line"></i>
          </a>
          <div className="card-actions justify-end mt-16">
            <div className="badge badge-outline">PJBL</div>
            <div className="badge badge-outline">Dashboard</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
