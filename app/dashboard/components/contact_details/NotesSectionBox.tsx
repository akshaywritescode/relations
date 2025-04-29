import { MoreHorizontal, Plus } from "lucide-react";

export default function NotesSection() {
    return <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Notes</h3>
        <div className="bg-black p-4 rounded-lg flex flex-col gap-2 relative">
            <h3 className="text-sm font-medium">Gift Idea</h3>
            <p className="text-xs text-white/55">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt dolores, cum illum adipisci optio, odit suscipit vel nulla reprehenderit expedita blanditiis! Modi illo laboriosam assumenda nostrum! Voluptate animi commodi optio.</p>
            {/* note action icon */}
            <MoreHorizontal className="w-4 h-4 absolute right-3 top-2" />
        </div>
        <button className="w-full flex gap-1 items-center justify-center mt-2 bg-black p-2 rounded-lg text-sm">
            Add Note <Plus className="w-4" />
        </button>
    </div>
}