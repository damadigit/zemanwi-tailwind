import "./styles.css";
import { RangeCalendar } from "./RangeCalendar";
import { Calendar } from "./Calendar";
import { today, getLocalTimeZone } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";
export default function App() {
  return (
    <div className="flex flex-col items-center max-w-xl">
      <I18nProvider locale="am-ET-u-ca-ethiopic">
        <p className="mt-8 mb-16 text-gray-600">
          This sandbox shows examples of{" "}
          <strong>
            <code>Calendar</code>
          </strong>
          , and{" "}
          <strong>
            <code>RangeCalendar</code>
          </strong>{" "}
          components built with{" "}
          <a
            href="https://react-spectrum.adobe.com/react-aria/"
            rel="noreferrer"
            target="_blank"
            className="text-blue-700 underline"
          >
            React Aria
          </a>{" "}
          and{" "}
          <a
            href="http://tailwindcss.com/"
            rel="noreferrer"
            target="_blank"
            className="text-blue-700 underline"
          >
            Tailwind CSS
          </a>
          .
        </p>
        <h2 className="ml-12 font-bold text-3xl text-gray-700">Calendar</h2>

        <Calendar />
        <h2 className="mt-12 font-bold text-3xl text-gray-700">
          RangeCalendar
        </h2>
        <RangeCalendar minValue={today(getLocalTimeZone())} />
      </I18nProvider>
    </div>
  );
}
