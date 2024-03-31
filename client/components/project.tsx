import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

type Props = {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  infoUrl?: string;
};

const ProjectItem = ({ name, description, url, imageUrl, infoUrl }: Props) => {
  return (
    <div>
      <Card className="flex flex-col items-center justify-center max-w-[500px]">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Image src={imageUrl} alt={name} width={580} height={580} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectItem;
