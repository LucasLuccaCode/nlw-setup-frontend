import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning"
import { HabitDay } from "./HabitDay"


export function SummaryTable() {
  const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const summaryDates = generateDatesFromYearBeginning()

  const minimumSummaryDatesSize = 18 * 7 // 18 weeks
  const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length
  console.log(amountOfDaysToFill)

  return (
    <div className="w-full flex">
      <ul className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((dayWeek, index) => (
          <li
            key={`${weekDays[index]}-${index}`}
            className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
          >
            {dayWeek}
          </li>
        ))}
      </ul>

      <div className="grid grid-rows-7 grid-flow-col gap-3">

        {summaryDates.map(date => (
          <HabitDay key={date.toString()} completed={7} />
        ))}

        {amountOfDaysToFill && Array.from({ length: amountOfDaysToFill }).map((_, index) => (
          <div key={index} className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed" />
        ))}

      </div>
    </div>
  )
}