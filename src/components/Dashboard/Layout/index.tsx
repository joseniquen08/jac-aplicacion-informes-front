import Navbar from "@src/components/Navbar";
import Sidebar from "@src/components/Sidebar";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

interface Props {
  children: JSX.Element;
  font: NextFontWithVariable;
}

export const Layout = ({ children, font }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <main className={`font-poppins ${font.className}`}>
      <Navbar isOpen={isOpen} toggle={() => toggleOpen()} />
      <div className="relative flex">
        <div>
          <AnimatePresence>
            <motion.div
              initial={false}
              transition={{ type: "spring" }}
              animate={isOpen ? "open" : "closed"}
              variants={{
                closed: { opacity: 0, display: "none" },
                open: { opacity: 1, display: "block" },
              }}
              exit={{ opacity: 0, display: "none" }}
              className="absolute"
            >
              <Sidebar />
            </motion.div>
          </AnimatePresence>
          <div className="hidden md:block">
            <Sidebar />
          </div>
        </div>
        <div
          className="w-full overflow-auto"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
};
