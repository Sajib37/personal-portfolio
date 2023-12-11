import NavLinks from "../NavLinks/NavLinks";

const Sidebar = ({ isOpen, handleOpen }) => {
    return (
        <section onClick={handleOpen} className={`w-60 bg-[#101317] border-r-4 border-black min-h-screen transition-transform duration-700 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            
            <ul className="text-lg text-center py-14 space-y-4 text-white">
                <NavLinks isOpen={isOpen}></NavLinks>
           </ul> 
        </section>
    );
};

export default Sidebar;