import { useEffect, useRef } from "react";

function Project() {
  return (
    <div
      className="parent min-h-screen w-full flex items-center justify-center"
      id="project"
    >
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className=""
            alt="Shoes"
          />
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
          <div className="card-actions justify-end">
            <div className="badge badge-outline">PJBL</div>
            <div className="badge badge-outline">Dashboard</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
