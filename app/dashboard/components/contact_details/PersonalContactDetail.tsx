"use client"

import { Cake, Heart, Home, Mail, MapPin, Phone } from "lucide-react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import NotesSection from "./NotesSectionBox";
import RemindersSection from "./RemindersSection";
import UpcomingEventBox from "./UpcomingEventBox";

const personalContactDetailData = [
    { icon: Phone, data: "+1 (484) 288 60 28" },
    { icon: Mail, data: "bobbycrown70@gmail.com" },
    { icon: MapPin, data: "San Francisco, CA, USA" },
    { icon: Home, data: "7804 Rowe Roads" },
    { icon: Cake, data: "04.05.2001" },
    { icon: Heart, data: "Brother" }
];

export default function PersonalContactDetail() {
    return (
        <div className="h-[70%] bg-[#0f0f0f] p-6">
            <SimpleBar className="custom-scrollbar" style={{ maxHeight: '100%' }} autoHide>
                <div className="grid grid-cols-2 gap-2">
                    {personalContactDetailData.map((personalData, index) => (
                        <div
                            className="w-full bg-black rounded-xl h-[61px] px-4 flex items-center gap-3"
                            key={index}
                        >
                            <personalData.icon className="w-4 h-4" />
                            <span className="font-semibold text-xs">{personalData.data}</span>
                        </div>
                    ))}
                </div>
                <RemindersSection />
                <UpcomingEventBox />
                <NotesSection />
            </SimpleBar>
        </div>
    );
}
