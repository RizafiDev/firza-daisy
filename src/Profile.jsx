import { useEffect, useRef } from "react";

function Profile() {
  return (
    <div
      className="flex min-h-screen w-full place-items-center text-[#212427] p-10"
      id="profile"
    >
      <div className="border-2 border-[#212427] p-6 bg-[#fafafa] rounded-lg flex flex-col h-[70vh]">
        <div className="gap-4 flex flex-col">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt=""
            className="rounded-lg"
          />
          <div className="fig-caption text-center font-semibold ">
            <p className="fonr-bold pb-2">Biodata :</p>
            <p>Firmansyah Riza A.</p>
            <p>16 Tahun</p>
            <p>SMKN 6 Surakarta</p>
            <p>Surakarta Hadiningrat</p>
          </div>
          <hr className="border-t-2 border-[#212427] font-medium" />
          <div>
            <ul>
              <li className="gap-2 flex items-center">
                <i class="ri-mail-fill"></i>Rizafidev@gmail.id
              </li>
              <li className="gap-2 flex items-center">
                <i class="ri-phone-fill"></i>+62-8586-5719-683
              </li>
              <li className="gap-2 flex items-center">
                <i class="ri-map-pin-fill"></i>Surakarta, ID
              </li>
            </ul>
          </div>
          <hr className="border-t-2 border-[#212427] " />
          <div className="medsos items-end ">
            <ul className="flex justify-between">
              <li>
                <a href="">
                  <i class="ri-instagram-fill ri-2x"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-whatsapp-fill ri-2x"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-github-fill ri-2x"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="ri-linkedin-box-fill ri-2x"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-2 border-[#212427] p-6 bg-[#fafafa] rounded-lg flex flex-col h-[70vh]"></div>
    </div>
  );
}

export default Profile;
