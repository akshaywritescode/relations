import Image from "next/image";
import Avatar from "@/app/assets/images/avatar.jpg"
import RelationAvatar from "@/app/assets/images/relation-avatar.jpg"
import { MoreHorizontal } from "lucide-react";

export default function BasicContactDetail() {
    return <div className="h-[30%] bg-[linear-gradient(0deg,_rgba(0,0,0,1)_0%,_rgba(8,8,8,1)_50%,_rgba(33,33,33,1)_100%)] p-10 flex justify-center items-center gap-5 relative">
        <div className="">
            <div className="w-[150px] h-[150px] rounded-full overflow-hidden">
                <Image src={Avatar} width={200} height={200} unoptimized alt="avatar" className="w-full h-full object-cover" />
            </div>
        </div>
        <div>
            <div className="flex flex-col gap-1">
                <h2 className="font-medium text-2xl tracking-tight">Bobby Crown <span className="text-xs text-white/70">(He/Him)</span></h2>
                <span className="flex text-xs items-center gap-2">Husband of <div className="w-7 h-7 rounded-full overflow-hidden"><Image src={RelationAvatar} width={30} height={30} unoptimized alt="relation avatar" className="w-full h-full object-cover" /></div><span className="text-blue-500 -ml-1">@Anna</span></span>
            </div>
        </div>
        {/* Configure Contact Icon */}
        <div className="absolute top-3 right-3 bg-white/10 w-7 h-7 flex justify-center items-center rounded-md cursor-pointer">
            <MoreHorizontal className="w-5" />
        </div>
    </div>
}