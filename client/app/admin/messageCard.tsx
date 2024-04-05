import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  sujet: string;
  email: string;
  message: string;
  onArchive: () => void;
  onDelete: () => void;
};

const MessageCard = ({
  name,
  sujet,
  email,
  message,
  onArchive,
  onDelete,
}: Props) => {
  return (
    <div className="text-white bg-[#212528] p-5 m-5 w-[50vw] text-center">
      <div className="flex text-center justify-evenly items-center ">
        <h1 className="text-bold text-2xl">Sujet : {sujet}</h1>
        <h4>Nom : {name}</h4>
        <h2>
          Email : <a href={`mailto:${email}`}>{email}</a>
        </h2>
      </div>
      <p className="p-5">{message}</p>

      <div className="flex justify-evenly">
        <Button variant="delete" onClick={onDelete}>
          DELETE
        </Button>
        <Button variant="active" onClick={onArchive}>
          Archive
        </Button>
      </div>
    </div>
  );
};

export default MessageCard;
