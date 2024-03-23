import Work1 from "../assets/images/work1.png";
import Work2 from "../assets/images/work2.png";
import Work3 from "../assets/images/work3.png";
import Work4 from "../assets/images/work4.png";

export default function Work() {
  const images = [
    { url: Work1, top: "50%", left: "50%", isActive: false },
    { url: Work2, top: "53%", left: "48%", isActive: false },
    { url: Work3, top: "50%", left: "50%", isActive: true },
    { url: Work4, top: "51%", left: "49%", isActive: false },
  ];

  return (
    <section className="h-screen w-full py-20">
      <div className="max-w-screen-xl mx-auto h-full  relative">
        <div className="absolute w-full bottom-0 text-white flex flex-row items-end justify-between">
          <h1 className="flex flex-col font-medium capitalize select-none">
            <span className="text-[12vw] bigText">unique</span>
            <span className="text-[12vw] bigText">websites</span>
          </h1>
          <p className="w-[450px] text-right text-xl">
            Refokus is a new breed of digital agency that combines design,
            innovation, and forward-thinking to help brands create better
            experiences, not just more of the same old same old
          </p>
        </div>
        <div className="absolute max-w-screen-xl h-[200px] bottom-40 w-full">
          {images.map(
            (el, i) =>
              el.isActive && (
                <img
                  className={`w-52 rounded-md top-[${el.top}] left-[${el.left}] absolute`}
                  key={i}
                  src={el.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </section>
  );
}
