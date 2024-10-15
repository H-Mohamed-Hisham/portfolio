import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { Github, ExternalLink, Link } from "lucide-react";

// Constants
import { project_category_list } from "@/constants/miscellaneous";

// Data
import { project } from "@/data/project";

// Shadcn
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ProjectList() {
  // Router
  const navigate = useNavigate();

  // Local State
  const [activeCategory, setActiveCategory] = useState("all");

  // Memo
  const filteredProjects = useMemo(() => {
    return activeCategory === "all"
      ? project
      : project.filter((e) => e.projectDomainKey === activeCategory);
  }, [activeCategory]);

  // Handle Project Detail Route
  const handleProjectDetailRoute = (id: string) => {
    navigate(`/project/${id}`);
  };

  return (
    <>
      <div className="flex flex-col items-center gap-y-4 mt-10 mb-4 p-3">
        <Tabs
          value={activeCategory}
          className="w-fit"
          onValueChange={(value: string) => setActiveCategory(value)}
        >
          <TabsList>
            {project_category_list.map((item, index) => (
              <TabsTrigger key={index} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
      <div className="mt-4 lg:px-10 container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {filteredProjects.map((item, index) => (
          <Card key={index}>
            <CardHeader
              className="cursor-pointer"
              onClick={() => handleProjectDetailRoute(item.id)}
            >
              <CardTitle className="text-primary">{item.name}</CardTitle>
              <CardDescription className="flex items-center gap-x-2">
                <Link className="w-4 h-4" />
                <span>{item.associated}</span>
              </CardDescription>
            </CardHeader>
            <CardContent
              className="cursor-pointer"
              onClick={() => handleProjectDetailRoute(item.id)}
            >
              <p className="text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="flex items-center gap-x-4">
              {item.sourceCode && (
                <Button variant="secondary" size="sm" asChild>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.sourceCode}
                    aria-label="source code"
                  >
                    <Github />
                  </a>
                </Button>
              )}

              {item.livePreview && (
                <Button variant="secondary" size="sm" asChild>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.livePreview}
                    aria-label="live preview"
                  >
                    <ExternalLink />
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
