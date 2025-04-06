import { DialogAddTodo } from "@/components/dialog-add-todo";
import { ModeToggle } from "@/components/modeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="w-[95%] mx-auto h-screen">
      {/* Start Navbar  */}
      <div className="flex justify-between items-center border-b mb-2">
        <h3>Notta v2</h3>
        <div className="flex items-center gap-3 justify-end w-full h-[60px]">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
      </div>
      {/* End Navbar  */}

      {/* Start Body Todos */}
      <div className="">
        <DialogAddTodo />
      </div>
    </div>
  );
}
