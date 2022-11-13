import React from "react";

export default function BackgroundSlider() {
  return (
    <>
      <div className="w-full p-3  mx-auto bg-black">
        <a
          href="https://www.blender.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed right-0 z-[888] btn bottom-0  !text-xs m-2"
        >
          Realizados en Blender
        </a>
        <a href="/recursos" className="fixed right-0 z-[888] btn top-0 yellow !text-xs m-2">
          Ver recursos
        </a>
        <div className="w-full flex justify-center items-center h-screen">
          <div className="w-80 h-80">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://res.cloudinary.com/srcouto/video/upload/c_scale,h_625,q_75/v1642599935/stn-renders/1230001-0500_mss0pe.webp"
            >
              <source
                src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1642599935/stn-renders/1230001-0500_mss0pe.mp4"
                type="video/mp4"
              />
              <source
                src="https://res.cloudinary.com/srcouto/video/upload/q_auto:eco/v1642599935/stn-renders/1230001-0500_mss0pe.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/srcouto/video/upload/q_auto:low/v1642599935/stn-renders/1230001-0500_mss0pe.ogv"
                type="video/ogg"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="relative z-20 w-full bg-black bg-pattern " id="ejemploBlender">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-3 mx-auto md:p-0 md:pt-1">
          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030301/stn-renders/567_vpomfk.jpg"
            />
          </div>
          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/456_xcnfky.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030307/stn-renders/789_itwybi.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030309/stn-renders/234_vanwyt.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030311/stn-renders/345_tw9zas.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630030314/stn-renders/123_lw5jtv.jpg"
            />
          </div>

          <div className="col-span-3">
            {/* <div className="relative w-auto h-auto col-span-3 cursor-pointer md:w-full md:h-full"> */}
            <img
              loading="lazy"
              height="749"
              width="1332"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630559191/stn-renders/untitled_i27pcx.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/1_a6qw3t.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476563/stn-renders/2_iutptm.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629476562/stn-renders/3_nveu2c.jpg"
            />
          </div>

          <div className="aspect-square">
            {/* <div className="relative cursor-pointer"> */}
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-full duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213764/stn-renders/_h1_vmxxse.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629213756/stn-renders/_h2_oiho30.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233372/stn-renders/_h3_xjzkrc.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215360/stn-renders/k_vjbeow.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233211/stn-renders/k3_arwhkt.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233248/stn-renders/k5_nzy74z.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556711/stn-renders/03_m7w1gy.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556712/stn-renders/02_txgqvw.jpg"
            />
          </div>

          <div className="aspect-square">
            <img
              loading="lazy"
              height="900"
              width="900"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1630556713/stn-renders/01_rnph0p.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              height="864"
              width="1536"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215725/stn-renders/12_vddpy4.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              height="864"
              width="1536"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232392/stn-renders/14_bmzdy6.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              height="864"
              width="1536"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232389/stn-renders/13_vrxkt2.jpg"
            />
          </div>

          <div className="col-span-3">
            {/* <div className="relative w-auto h-auto col-span-3 cursor-pointer md:w-full md:h-full"> */}
            <img
              loading="lazy"
              height="864"
              width="1536"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629232358/stn-renders/18_ec7kli.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              title="item"
              height="864"
              width="1536"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233952/stn-renders/04_rhcw2f.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              title="item"
              height="864"
              width="1536"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629215823/stn-renders/02_blemta.jpg"
            />
          </div>

          <div className="col-span-3 md:col-span-1">
            <img
              loading="lazy"
              title="item"
              height="864"
              width="1536"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629233957/stn-renders/01_ujdfvc.jpg"
            />
          </div>

          <div className="col-span-3">
            {/* <div className="relative w-auto h-auto col-span-3 cursor-pointer md:w-full md:h-full"> */}
            <img
              loading="lazy"
              height="864"
              width="1536"
              title="item"
              className="object-cover w-auto h-auto duration-200 md:w-full md:h-full hover:opacity-60"
              alt="item"
              src="https://res.cloudinary.com/srcouto/image/upload/q_auto:good/v1629238430/stn-renders/11_vhlp38.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
