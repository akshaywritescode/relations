import { MoreHorizontal, Plus } from "lucide-react";
import Avatar from "@/app/assets/images/avatar.jpg"
import Image from "next/image";
import ReminderDate from "./ReminderDate";

export default function RemindersSection() {
    return <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Reminders</h3>
        <div className="bg-black p-4 rounded-lg flex flex-col gap-2 relative">
            <h3 className="text-sm font-medium flex items-center">Call to <div className="w-8 h-8 rounded-full overflow-hidden mx-1"><Image src={Avatar} width={10} height={10} alt="Avatar" className="w-full h-full object-cover" unoptimized quality={100} /></div> <span className="text-blue-600 ml-[6px] mr-[5px]">Bobby Crown</span> discuss a present for mom <ReminderDate reminderDate="03:58, 11:00 AM" /></h3>
            {/* note action icon */}
            <MoreHorizontal className="w-4 h-4 absolute right-3 top-2" />
        </div>
        <button className="w-full flex gap-1 items-center justify-center mt-2 bg-black p-2 rounded-lg text-sm">
            Add Reminders <Plus className="w-4" />
        </button>
    </div>
}