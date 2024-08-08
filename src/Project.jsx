import { useEffect, useRef } from "react";
import pjblImage from "./assets/pjbl.png";
import travelin from "./assets/travelin.jpg";
import soon from "./assets/soon.jpg";

function Project() {
  return (
    <div
      className="parent container min-h-screen w-full mx-auto flex justify-center text-[#fafafa] gap-12 flex-col "
      id="project"
    >
      <div className="top text-[#212427] text-start left-0">
        <h5 className="font-semibold text-2xl">Project</h5>
        <p className="font-medium text-lg">
          Beberapa project yang telah dibuat
        </p>
      </div>
      <div className="card-section inline-flex items-center gap-10 ">
        <div className="card bg-base-100 w-96 shadow-2xl">
          <figure>
            <img src={pjblImage} className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Panel Absensi
              <div className="badge badge-secondary border-none">NEW</div>
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
            <img src={travelin} className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Travelin
              <div className="badge badge-secondary border-none bg-green-500">
                UPDATED
              </div>
            </h2>
            <p>
              Projek website penyedia layanan <br />
              traveling dunia dan rekomendasi perjalanan
              <br />
            </p>
            <a
              className="card-actions justify-start"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              Check <i class="ri-arrow-right-line"></i>
            </a>
            <div className="card-actions justify-end mt-16">
              <div className="badge badge-outline">Traveling</div>
              <div className="badge badge-outline">One Page</div>
            </div>
          </div>
        </div>

        {/* next content */}
        <div className="card bg-base-100 w-96 shadow-2xl">
          <figure>
            <img src={soon} className="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Kopramsega
              <div className="badge badge-secondary border-none bg-yellow-500 uppercase">
                Process
              </div>
            </h2>
            <p>
              Projek sistem absensi sekolah. <br />
              Dilengkapi dengan dashboard guru.
            </p>
            <a
              className="card-actions justify-start"
              href=""
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
        {/* next content */}
      </div>

      <a className="badge badge-outline text-[#212427] p-4 mx-auto" href="">
        Show More <i class="ri-arrow-right-line"></i>
      </a>
    </div>
  );
}

export default Project;
