import { Button } from "@/components/button";
import { IconButton } from "@/components/icon-button";
import { InputIcon, InputRoot, InputField } from "@/components/input";
import { CopyIcon, ArrowRight, User2Icon } from "lucide-react";

export default function Home() {
  return (
    <main className="p-4 h-screen space-y-4">
      <Button>
        Click me
        <ArrowRight />
      </Button>
      <IconButton>
        <CopyIcon />
      </IconButton>
      <InputRoot>
        <InputIcon>
          <User2Icon />
        </InputIcon>
        <InputField placeholder="Enter your email" />
      </InputRoot>
    </main>
  );
}
