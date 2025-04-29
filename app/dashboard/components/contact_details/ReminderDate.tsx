type ReminderDateProps = {
    reminderDate: string
}

export default function ReminderDate({ reminderDate }: ReminderDateProps) {
    return <div className="bg-white/10 px-2 py-1 rounded-lg ml-2">
        <span className="text-xs">{reminderDate}</span>
    </div>
}