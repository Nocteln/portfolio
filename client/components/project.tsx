import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  infoUrl?: string;
};

const ProjectItem = ({ name, description, url, imageUrl, infoUrl }: Props) => {
  return (
    <div>
      <Card className="flex flex-col items-center justify-center bg-[#212528] border-[#212528]">
        <CardHeader className="text-center">
          <CardTitle className="text-slate-300">{name}</CardTitle>
          <CardDescription className="text-slate-500">
            {description}
          </CardDescription>
        </CardHeader>
        {imageUrl && (
          <CardContent>
            <Image src={imageUrl} alt={name} width={580} height={580} />
          </CardContent>
        )}
        <CardFooter className="flex flex-col h-[100px] items-center justify-between">
          <Button variant="active">
            <Link
              className="lg:w-[300px] text-bold text-lg  w-[150px]"
              href={url}
              target="_blank"
            >
              Visit
            </Link>
          </Button>
          {infoUrl && (
            <Button variant="ghost">
              <Link className="lg:w-[250px]" href={infoUrl} target="_blank">
                More infos
              </Link>
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectItem;
