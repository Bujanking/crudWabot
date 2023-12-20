"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { FaBookmark, FaRegCalendarAlt } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { MdWorkspacePremium } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";
import { GoFileMedia } from "react-icons/go";
import { PiArticleMediumDuotone } from "react-icons/pi";
import { BsFillInfoSquareFill } from "react-icons/bs";
import NavbarUser from "./NavbarUser";
import { useState } from "react";
export default function DashboardPage() {
  const { data: session } = useSession();

  const [closing, setClosing] = useState(true);

  return (
    <>
      <NavbarUser />
      <div className="w-full h-screen px-5 py-16 bg-stone-100">
        <div className="flex justify-between items-start overflow-hidden gap-5 flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row md:px-28">
          {/* left */}
          <div className="w-full bg-transparent relative rounded-lg overflow-hidden sm:w-full">
            {/* 1 */}
            <div className="w-full border border-gray-400">
              <div className="w-full h-16 bg-sky-700">
                <img
                  className="w-full h-full"
                  src="https://source.unsplash.com/random"
                  alt=""
                />
              </div>
              <div className="w-full flex justify-center">
                <div className="overflow-hidden w-20 h-20 bg-red-500 rounded-full absolute top-6 border-2 border-white">
                  <img
                    className="rounded-full w-full h-full"
                    src="https://source.unsplash.com/random"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full h-auto bg-white flex flex-col items-center pt-12">
                <h1>{session?.user?.email}</h1>

                <Link
                  href={"/"}
                  className="w-full border-t border-gray-300 my-3 flex justify-between items-center hover:bg-blue-100"
                >
                  <div className="items-start flex flex-col py-2">
                    <span className="text-gray-500 text-[12px] px-3">
                      Koneksi
                    </span>
                    <span className="px-3 text-[12px] text-black">
                      Kembangkan jaringan anda
                    </span>
                  </div>
                  <div className="px-3">+</div>
                </Link>

                <Link
                  href={"/"}
                  className="w-full border-t border-gray-300 my-3 flex justify-start items-center hover:bg-blue-100"
                >
                  <div className="items-start flex flex-col py-2">
                    <span className="text-gray-500 text-[12px] px-3">
                      Akses alat & wawasan eksklusif
                    </span>
                    <div className="flex px-3">
                      <div className="text-yellow-600">
                        <MdWorkspacePremium />
                      </div>
                      <span className="px-3 text-[12px] text-black">
                        Coba Premium Gratis
                      </span>
                    </div>
                  </div>
                  {/* <div className="px-3">+</div> */}
                </Link>

                <Link
                  href={"/"}
                  className="w-full border-t border-gray-300 my-3 flex justify-start items-center hover:bg-blue-100"
                >
                  <div className="items-start flex py-2">
                    <span className="px-3 text-gray-500">
                      <FaBookmark />
                    </span>
                    <span className="text-[12px] text-black">Item saya</span>
                  </div>
                  {/* <div className="px-3">+</div> */}
                </Link>
              </div>
            </div>

            {/* 2 */}
            <div className="w-full border border-gray-400 mt-3 bg-white rounded-lg items-start flex flex-col p-3 overflow-hidden">
              <span className="text-[12px] text-blue-500 hover:underline py-1 cursor-pointer">
                Grup
              </span>
              <span className="text-[12px] text-blue-500 hover:underline py-1 cursor-pointer">
                Acara
              </span>
              <span className="text-[12px] text-blue-500 hover:underline py-1 cursor-pointer">
                Hastag yang diikuti
              </span>
            </div>
          </div>

          {/* center */}
          <div className="w-full bg-transparent relative rounded-lg overflow-hidden sm:w-full">
            {closing && (
              <div className="border border-gray-400 bg-transparent relative rounded-lg overflow-hidden mb-3">
                <div className="flex items-center justify-between p-3">
                  <h1 className="font-semibold text-lg">
                    Bersiap di Kreasi Bintang Edukasi
                  </h1>
                  <div
                    onClick={() => setClosing(false)}
                    className="cursor-pointer"
                  >
                    <FiX />
                  </div>
                </div>
                <div className="flex p-3 items-center">
                  <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4">
                    <div
                      className="bg-blue-300 h-1.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="h-80 sm:h-96 xl:h-80 2xl:h-96">
                    <Carousel
                      indicators={false}
                      className="rounded-xl overflow-hidden"
                    >
                      <div className="p-3">
                        <img
                          src="https://source.unsplash.com/random"
                          alt="..."
                          className="h-48 w-full object-cover rounded-xl overflow-hidden"
                        />
                        <div className="px-3">
                          <span className="text-sm my-3">
                            Tambahkan lebih banyak pengalaman kerja dan
                            pendidikan.
                          </span>
                          <Button color="blue" className="rounded-full my-3">
                            Perbaharui profil
                          </Button>
                        </div>
                      </div>

                      <div className="p-3">
                        <img
                          src="https://source.unsplash.com/random"
                          alt="..."
                          className="h-48 w-full object-cover rounded-xl overflow-hidden"
                        />
                        <div className="px-3">
                          <span className="text-sm my-3">
                            Ikuti orang dan perusahaan agar tidak ketinggalan
                            postingnya.
                          </span>
                          <Button color="blue" className="rounded-full my-3">
                            Mulai mengikuti
                          </Button>
                        </div>
                      </div>

                      <div className="p-3">
                        <img
                          src="https://source.unsplash.com/random"
                          alt="..."
                          className="h-48 w-full object-cover rounded-xl overflow-hidden"
                        />
                        <div className="px-3">
                          <span className="text-sm my-3">
                            Terhubung dengan rekan kerja, teman sekolah, dan
                            kenalan lainnya.
                          </span>
                          <Button color="blue" className="rounded-full my-3">
                            Temukan orang yang dikenal
                          </Button>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
            )}

            <div className="border border-gray-400 bg-transparent relative rounded-lg overflow-hidden h-auto">
              <div className="p-3 flex gap-3 sm:flex-col">
                <div className="h-12 w-12 bg-red-500 flex justify-center items-center rounded-full text-white text-2xl">
                  R
                </div>
                <input
                  className="border border-gray-400 rounded-full w-[80%] px-3 sm:py-2 sm:text-sm"
                  placeholder="Mulai buat postingan"
                />
              </div>
              <div className="w-full justify-between items-center flex px-8 my-3 sm:flex-col sm:items-start md:flex-row">
                <div className="flex items-center text-blue-500 gap-2 ">
                  <GoFileMedia /> Media
                </div>
                <div className="flex items-center text-orange-400 gap-2">
                  <FaRegCalendarAlt /> Acara
                </div>
                <div className="flex items-center text-red-700 gap-2">
                  <PiArticleMediumDuotone /> Tulis artikel
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full bg-transparent relative rounded-lg overflow-hidden sm:w-full">
            <div className="border border-gray-400 bg-transparent relative rounded-lg overflow-hidden mb-3">
              <div className="flex items-center justify-between p-3">
                <h1 className="font-semibold text-base">
                  Tambahkan ke feed anda
                </h1>
                <BsFillInfoSquareFill />
              </div>
              <div className="w-full justify-between flex px-3 py-3 border-t border-gray-400">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="text-sm w-[80%] flex flex-col">
                  <span className="font-semibold">Budi Herianto</span>
                  <span className="text-[12px] text-gray-700 font-light">
                    HR Recruitment at Kapal Api Group
                  </span>
                  <Button color="light" className="rounded-full">
                    + Ikuti
                  </Button>
                </div>
              </div>

              <div className="w-full justify-between flex px-3 py-3 border-t border-gray-400">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="text-sm w-[80%] flex flex-col">
                  <span className="font-semibold">Lowongan Kerja</span>
                  <span className="text-[12px] text-gray-700 font-light">
                    Perusahaan Penetapan Staf & Perekrutan
                  </span>
                  <Button color="light" className="rounded-full">
                    + Ikuti
                  </Button>
                </div>
              </div>

              <div className="w-full justify-between flex px-3 py-3 border-t border-gray-400">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="text-sm w-[80%] flex flex-col">
                  <span className="font-semibold">Marcel Darmawan</span>
                  <span className="text-[12px] text-gray-700 font-light">
                    Recruitment Officer at PT Mayora Indah Tbk
                  </span>
                  <Button color="light" className="rounded-full">
                    + Ikuti
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
