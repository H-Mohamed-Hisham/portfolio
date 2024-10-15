import { useParams, Link } from "react-router-dom";

// Icons
import { Github, ExternalLink, Link as LinkIcon } from "lucide-react";

// Data
import { project } from "@/data/project";

// Constants
import { PROJECT_LIST_URL } from "@/constants/routes";

// Components
import { Carousel } from "@/components/project";

// Shadcn
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProjectDetail() {
  // Router
  const { id } = useParams<{ id: string }>();

  // Data
  const data = project?.find((ele) => ele.id === id);

  return (
    <div className="mt-10 lg:px-6 container mx-auto grid grid-cols-1">
      {data === undefined && (
        <div className="flex flex-col items-center gap-y-2">
          <p className="text-destructive text-2xl">No data found</p>
          <Button asChild>
            <Link to={PROJECT_LIST_URL}>Go back to project list</Link>
          </Button>
        </div>
      )}

      {data && (
        <div className="mt-10 lg:px-20 grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="col-span-5 lg:col-span-2">
            <Carousel screenshots={data.screenshots} />
          </div>
          <div className="col-span-5 lg:col-span-3 mt-6 lg:mt-0">
            <div className="flex flex-col gap-y-4">
              <p className="text-primary text-2xl">{data.name}</p>
              <div className="flex items-center gap-x-2 text-secondary-foreground text-sm md:text-base">
                <LinkIcon className="w-4 h-4" />
                <span>{data.associated}</span>
              </div>
              <p className="text-secondary-foreground text-sm md:text-base">
                {data.description}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {data.stack.map((item, index) => (
                  <Badge key={index} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-x-4">
                {data.sourceCode && (
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={data.sourceCode}
                      aria-label="source code"
                    >
                      <Github />
                    </a>
                  </Button>
                )}

                {data.livePreview && (
                  <Button variant="secondary" size="sm" asChild>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={data.livePreview}
                      aria-label="live preview"
                    >
                      <ExternalLink />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
