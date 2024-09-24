import Link from "next/link";
import { Button } from "@/components/ui/button";
import BattlenetIcon from "@/components/svg/battlenet-icon";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <section className="flex h-full w-full flex-col place-items-center">
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="">Skip the sheets</p>
              {/* Title */}
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Wow raid management
                </h1>
              </div>
              {/* End Title */}
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                  Easy raid management for World of Warcraft. No more
                  spreadsheets. Automatic spec and ilevel tracking.
                </p>
              </div>
              {/* Buttons */}
              <div className="mt-8 flex justify-center gap-3">
                <Button size={"lg"}>
                  <BattlenetIcon className="h-8 w-8" /> Get started
                </Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>
              {/* End Buttons */}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
