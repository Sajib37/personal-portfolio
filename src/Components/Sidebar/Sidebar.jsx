import NavLinks from "../NavLinks/NavLinks";

const Sidebar = ({handleOpen }) => {
    return (
        <section
            onClick={handleOpen}
            className={`w-64 bg-[#101317] border-r-4 border-black min-h-screen`}
        >
            <ul className="text-lg text-center py-14 space-y-4 text-white">
                <NavLinks></NavLinks>
            </ul>
        </section>
    );
};

export default Sidebar;
