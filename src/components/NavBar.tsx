import Logo from "../assets/images/logo/logo.svg";
import Button from "./Button";

export default function NavBar() {
  const links = ["home", "work", "news", "", "culture"];

  return (
    <header className="max-w-screen-xl w-full mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-600 absolute left-1/2 -translate-x-1/2">
      <div className=" flex items-center ">
        <img src={Logo} alt="logo" />
        <ul className="flex items-center gap-10 ml-32">
          {links.map((link, id) => (
            <li key={id}>
              <a
                className="text-sm text-white flex gap-2 items-center"
                href="#"
              >
                {id === 0 && (
                  <span
                    style={{ boxShadow: "0 0 0.25em #00FF19" }}
                    className="inline-block w-1 h-1 bg-green-500 rounded-full"
                  ></span>
                )}

                {link.length === 0 && (
                  <span className="w-[0.1px] h-6 bg-zinc-600"></span>
                )}
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Button>Start a project</Button>
    </header>
  );
}
