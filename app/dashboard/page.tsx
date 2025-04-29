import ContactDetails from "./components/contact_details/ContactDetails";

export default function Dashboard() {
    return <div className="w-full h-screen flex overflow-y-hidden">
        <div className="w-[20%] h-full bg-black border-l border-l-white/5"></div>
        <div className="w-[35%] bg-black border-l border-l-white/5"></div>
        <ContactDetails />
    </div>
}