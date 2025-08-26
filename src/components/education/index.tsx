// Icons
import { School, MapPin, Calendar, Globe } from 'lucide-react';

// Data
import { education, courses } from '@/data/education';

export function Education() {
  return (
    <>
      {!education.length ? null : (
        <div className="flex flex-col items-center gap-y-4 mt-10 mb-4 p-3">
          <p className="text-3xl font-bold text-primary text-center my-4">
            Education
          </p>

          <div className="w-full max-w-md">
            {education.map((item, index) => (
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
                      src={item.logo}
                      alt="logo"
                      className="w-10 h-10 object-cover"
                    />
                    {item.degree}
                  </div>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    <School className="w-4 h-4" />
                    <span>{item.institute}</span>
                  </p>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </p>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!courses.length ? null : (
        <div className="flex flex-col items-center gap-y-4 mt-10 mb-4 p-3">
          <p className="text-3xl font-bold text-primary text-center my-4">
            Course
          </p>

          <div className="w-full max-w-md">
            {courses.map((item, index) => (
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
                      src={item.logo}
                      alt="logo"
                      className="w-10 h-10 object-contain"
                    />
                    {item.degree}
                  </div>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    <School className="w-4 h-4" />
                    <span>{item.institute}</span>
                  </p>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{item.year}</span>
                  </p>
                  <p className="text-base text-muted-foreground flex items-center gap-x-2">
                    {item.location === 'Online' ? (
                      <Globe className="w-4 h-4" />
                    ) : (
                      <MapPin className="w-4 h-4" />
                    )}
                    <span>{item.location}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
