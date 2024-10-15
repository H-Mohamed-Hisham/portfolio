// Icons
import { FileUser, Github, Linkedin } from "lucide-react";

// Data
import { about } from "@/data/about";

// Shadcn
import { Button } from "@/components/ui/button";

export function Home() {
  const { photo, name, role, description, resume, social } = about;

  return (
    <div className="mx-auto max-w-2xl py-14">
      <div className="flex flex-col items-center gap-y-4">
        {photo && <img alt="Hisham" src={photo} className="h-52 w-52" />}

        <p className="text-primary text-4xl font-bold tracking-tight lg:text-5xl text-center">
          {name}
        </p>

        <p className="text-2xl font-bold text-muted-foreground text-center">
          A {role}
        </p>

        <p className="text-lg text-muted-foreground text-center">
          {description && description}
        </p>

        <div className="flex items-center justify-center gap-x-4">
          <Button asChild variant="secondary" className="font-semibold">
            <a
              href={resume}
              rel="noreferrer"
              target="_blank"
              className="space-x-2"
            >
              <FileUser />
              <span>Resume</span>
            </a>
          </Button>

          <Button asChild variant="secondary" className="font-semibold">
            <a
              href={social.github}
              rel="noreferrer"
              target="_blank"
              className="space-x-2"
            >
              <Github />
              <span>Github</span>
            </a>
          </Button>

          <Button asChild variant="secondary" className="font-semibold">
            <a
              href={social.linkedin}
              rel="noreferrer"
              target="_blank"
              className="space-x-2"
            >
              <Linkedin />
              <span>Linkedin</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
