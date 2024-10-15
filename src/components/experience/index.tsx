// Data
import { experience } from "@/data/experience";

export function Experience() {
  return !experience.length ? null : (
    <div className="flex flex-col items-center gap-y-4 mt-10 p-3">
      <p className="text-3xl font-bold text-primary text-center my-4">
        Experience
      </p>

      <div className="w-full max-w-md">
        {experience.map((item, index) => (
          <div key={index} className="flex gap-x-8">
            {/* icon */}
            <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-primary">
              <div className="relative z-10 size-7 flex justify-center items-center">
                <div className="size-2 rounded-full bg-primary"></div>
              </div>
            </div>

            {/* content */}
            <div className="grow py-3 mb-2 px-3 flex flex-col gap-y-2 bg-card rounded-sm drop-shadow-md dark:drop-shadow-2xl shadow-md dark:shadow-2xl ">
              <div className="flex items-center gap-x-4 font-semibold text-primary text-lg">
                <img
                  src={item.icon}
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
                {item.organisation}
              </div>
              <p className="text-sm text-muted-foreground">{item.location}</p>
              <ul className="text-sm text-muted-foreground list-disc">
                {item.designation.map((d, idx) => (
                  <li key={idx} className="ml-2">
                    {d.role} - {d.period}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
