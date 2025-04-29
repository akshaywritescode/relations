type Month =
    | "JAN" | "FEB" | "MAR" | "APR" | "MAY" | "JUN"
    | "JUL" | "AUG" | "SEP" | "OCT" | "NOV" | "DEC";

type DateString =
    | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
    | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19"
    | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31";

type EventDateProps = {
    month: Month;
    date: DateString;
};

export default function EventDate({ month, date }: EventDateProps) {
    return (
        <div className="bg-white/10 flex flex-col items-center p-[7px] rounded-lg w-11 h-11">
            <span className="text-xs">{month}</span>
            <span className="font-semibold text-xs">{date}</span>
        </div>
    );
}
