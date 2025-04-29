import { MoreHorizontal, Plus } from "lucide-react";
import EventDate from "./EventDate";

export default function UpcomingEventBox() {
    return <div className="mt-4">
            <h3 className="text-sm font-semibold mb-2">Upcoming events</h3>
        <div className="bg-black p-4 rounded-lg flex flex-col gap-2 relative">
            <h3 className="text-sm font-medium flex items-center"><EventDate month="APR" date="29" /><span className="text-blue-600 ml-[6px] mr-[5px]">Bobby Crown</span>Birthday Party</h3>
            {/* note action icon */}
            <MoreHorizontal className="w-4 h-4 absolute right-3 top-2" />
        </div>
        <button className="w-full flex gap-1 items-center justify-center mt-2 bg-black p-2 rounded-lg text-sm">
            Add Event <Plus className="w-4" />
        </button>
    </div>
}