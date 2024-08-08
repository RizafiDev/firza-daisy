import { useEffect, useRef } from "react";
import nmLogo from "./assets/neptune.png";
import aku from "./assets/aku-green.jpg";
import thrill from "./assets/8t.jpg";
import flipper from "./assets/flipper.jpg";
function Profile() {
  return (
    <div
      className="container mx-auto flex min-h-screen w-full place-items-center text-[#212427] "
      id="profile"
    >
      <div className="parent flex items-center justify-center w-full min-h-screen  gap-4">
        <div className=" p-8 bg-slate-100 rounded-lg flex flex-col h-[730px] w-80 shadow-xl">
          <div className="gap-4 flex flex-col">
            <img src={aku} alt="" className="rounded-lg w-full" />
            <div className="fig-caption text-center font-semibold ">
              <p className="font-bold pb-2 uppercase">Biodata :</p>
              <p>Firmansyah Riza A.</p>
              <p>16 Tahun</p>
              <p>SMKN 6 Surakarta</p>
              <p>Surakarta Hadiningrat</p>
            </div>
            <hr className="border-t-[px] border-[#212427] font-medium" />
            <div className="mb-24">
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
        <div className="parent  p-8 bg-slate-100 rounded-lg flex flex-col  w-full h-[730px] shadow-xl">
          <div className="header mb-6">
            <h1 className="font-semibold text-2xl">Experience</h1>
            <p className="font-medium text-base text-gray-700">
              Beberapa pengalaman bekerja maupun berorganisasi
            </p>
          </div>
          <div className="item-1 gap-3 flex flex-col">
            <div className="top-container">
              <div className="top flex items-center justify-between">
                <div className="brand-name  inline-flex gap-2 items-center">
                  <img src={nmLogo} alt="" className="w-14" />
                  <div className="txt flex flex-col">
                    <h1 className="font-semibold text-xl">Neptune Music</h1>
                    <p className="font-medium text-sm">
                      Music Distribution Company
                    </p>
                  </div>
                </div>
                <div className="end font-medium text-gray-700 flex items-end">
                  2023 - Present
                </div>
              </div>
            </div>
            <div className="tag space-x-2">
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-red-600 text-xs mx-auto"
                href=""
              >
                Leader
              </div>
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-yellow-500 text-xs mx-auto"
                href=""
              >
                Founder
              </div>
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-green-600 text-xs mx-auto"
                href=""
              >
                Analyst
              </div>
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-blue-600 text-xs mx-auto"
                href=""
              >
                Designer
              </div>
            </div>
            {/* content */}
            <div className="content">
              <h1 className="font-semibold text-lg">Detail :</h1>
              <ul className="font-medium text-sm list-disc ml-7">
                <li>Startup penyedia layanan distribusi musik.</li>
                <li>
                  Mendistribusikan lebih dari 100 musik kedalam platform musik.
                </li>
                <li>Memiliki lebih dari 30 artist musik.</li>
              </ul>
            </div>
          </div>
          <hr className="border-b-[0px] border-gray-500 my-3" />
          {/* item 2 */}
          <div className="item-1 gap-3 flex flex-col">
            <div className="top-container">
              <div className="top flex items-center justify-between">
                <div className="brand-name  inline-flex gap-2 items-center">
                  <img
                    src={thrill}
                    alt=""
                    className="w-14 rounded-full border-2 border-[#212427]"
                  />
                  <div className="txt flex flex-col">
                    <h1 className="font-semibold text-xl">8Thrill</h1>
                    <p className="font-medium text-sm">
                      EDM Producers Community
                    </p>
                  </div>
                </div>
                <div className="end font-medium text-gray-700 flex items-end">
                  2023 - Present
                </div>
              </div>
            </div>
            <div className="tag space-x-2">
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-violet-500 text-xs mx-auto"
                href=""
              >
                Artist
              </div>
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-pink-500 text-xs mx-auto"
                href=""
              >
                Website Developer
              </div>
            </div>
            {/* content */}
            <div className="content">
              <h1 className="font-semibold text-lg">Detail :</h1>
              <ul className="font-medium text-sm list-disc ml-7">
                <li>Komunitas produser musik EDM di-indonesia.</li>
                <li>Sebagai tempat distribusi musik.</li>
              </ul>
            </div>
          </div>
          <hr className="border-b-[0px] border-gray-500 my-3" />
          {/* item 2 */}
          <div className="item-1 gap-3 flex flex-col">
            <div className="top-container">
              <div className="top flex items-center justify-between">
                <div className="brand-name  inline-flex gap-2 items-center">
                  <img
                    src={flipper}
                    alt=""
                    className="w-14 rounded-full  border-[#212427]"
                  />
                  <div className="txt flex flex-col">
                    <h1 className="font-semibold text-xl">Flipper Records</h1>
                    <p className="font-medium text-sm">
                      Remix Music Distribution Company
                    </p>
                  </div>
                </div>
                <div className="end font-medium text-gray-700 flex items-end">
                  2023 - Present
                </div>
              </div>
            </div>
            <div className="tag space-x-2">
              <div
                className="badge border-none font-medium text-[#fafafa] p-3 bg-violet-500 text-xs mx-auto"
                href=""
              >
                Artist
              </div>
            </div>
            {/* content */}
            <div className="content">
              <h1 className="font-semibold text-lg">Detail :</h1>
              <ul className="font-medium text-sm list-disc ml-7">
                <li>Perusahaan rilis musik remix resmi di indonesia.</li>
                <li>Komunitas DJ indonesia.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
