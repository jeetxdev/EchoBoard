import {Button} from "@/components/ui/button";
import AnimatedText from "@/app/AnimatedText";
import Link from "next/link";
import {CodeXml, FileText, Video, Share} from "lucide-react";

export default function Home() {
  return (
      <div className="py-2 px-4 flex flex-col h-full gap-16">
        <header className="flex justify-between py-2">
          <div className="text-xl font-semibold">EchoBoard</div>
          <div>
            <Button asChild>
              <Link href={"/login"}>Log in</Link>
            </Button>
          </div>
        </header>
        <div className="p-2 lg:p-0">
          <div
              className="outline-1 outline-zinc-300 dark:outline-zinc-800 w-full  lg:w-1/2 mx-auto rounded-md shadow-xl">
            <div className="flex gap-2 p-2 bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-t-md">
              <div className="bg-red-400 w-3 h-3 rounded-full"></div>
              <div className="bg-amber-400 w-3 h-3 rounded-full"></div>
              <div className="bg-green-400 w-3 h-3 rounded-full"></div>
            </div>
            <div className="flex px-2 pt-2">
              <div className="">
                <FileText className="fill-blue-500 text-white dark:text-black size-12"/>
              </div>
              <div className="grow">
                <div className="flex justify-between items-center">
                  <span className="text-xl">Echoboard</span>
                  <div className="hidden md:flex gap-4">
                    <Video className="size-5" strokeWidth={1.5}/>
                    <Share className="size-5" strokeWidth={1.5}/>
                  </div>
                </div>
                <div className="hidden lg:flex gap-2 text-sm [&>div]:cursor-pointer">
                  <div>File</div>
                  <div>Edit</div>
                  <div>View</div>
                  <div>Insert</div>
                  <div>Format</div>
                  <div>Tools</div>
                  <div>Extensions</div>
                  <div>Help</div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div
                  className="text-4xl sm:text-5xl flex justify-center font-semibold py-16 sm:py-32 h-auto border border-zinc-400 dark:border-zinc-700 rounded dark:bg-zinc-900">
                <AnimatedText/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button asChild className="px-12">
            <Link href={"#"}>Get started</Link>
          </Button>
        </div>
        <footer className="flex justify-between text-sm mt-auto">
          <div>&copy; {new Date().getFullYear()} Jeet Mukherjee</div>
          <Link
              target="_blank"
              href={"https://github.com/jeetxdev/EchoBoard"}
              className="flex gap-1 items-center"
          >
            <CodeXml size={18}/>
            Source code
          </Link>
        </footer>
      </div>
  );
}
