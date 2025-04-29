import BasicContactDetail from "./BasicContactDetail";
import PersonalContactDetail from "./PersonalContactDetail";

export default function ContactDetails() {
    return <div className="w-[45%] bg-black/90 h-dvh">
        <BasicContactDetail />
        <PersonalContactDetail />
    </div>
}