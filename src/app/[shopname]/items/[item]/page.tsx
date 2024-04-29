import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function page({ params }) {
  return (
    <section className="flex-col md:flex-row flex items-start gap-6">
      <div className="md:basis-[40%] grid grid-cols-3 grid-rows-4 gap-2">
        <Image
          src="/test.png"
          alt=""
          width={200}
          height={200}
          className="size-full object-cover row-span-3 col-span-3"
        />
        <Image
          src="/test.png"
          alt=""
          width={200}
          height={200}
          className="size-full object-cover row-start-4 col-start-1"
        />
        <Image
          src="/test.png"
          alt=""
          width={200}
          height={200}
          className="size-full object-cover row-start-4 col-start-2 "
        />
        <Image
          src="/test.png"
          alt=""
          width={200}
          height={200}
          className="size-full object-cover row-start-4 col-start-3"
        />
      </div>
      <div className="md:basis-[60%]">
        <span className="text-sm text-emerald-600 font-medium">Shoesware</span>
        <h2 className="text-2xl font-bold mb-2">Zustand shoes v.2.5</h2>
        <p className="text-sm text-stone-600 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          accusamus, molestias, commodi id eos repellat animi eligendi sequi
          voluptatem ipsum minus necessitatibus? Necessitatibus quas praesentium
          laborum tempore non ea voluptatibus consequuntur reiciendis? Commodi,
          debitis. Temporibus voluptatibus dolorem unde est officia, quasi
          voluptatum, aliquam, quaerat similique laudantium labore repellat
          dolore at?
        </p>
        <p className="mb-1 font-bold">Price</p>
        <p className="text-lg font-bold mb-12">1699 PHP</p>

        {/* FORM */}
        <form action="">
          <p className="font-bold mb-1">Select your variant</p>
          <div className="grid grid-cols-4 gap-2 mb-12">
            <Button type="button" variant={"outline"}>
              XL Blue
            </Button>
            <Button type="button" variant={"outline"}>
              XL Red
            </Button>
            <Button type="button" variant={"outline"}>
              M Blue
            </Button>
            <Button type="button" variant={"outline"}>
              M Red
            </Button>
            <Button type="button" variant={"outline"}>
              S Blue
            </Button>
          </div>
          <p className="font-bold mb-1">Enter Quantity</p>
          <Input type="number" />
          <div className="border-b border-b-stone-400 pt-4 flex items-start justify-between mb-12">
            <p className="font-bold">Total</p>
            <p className="font-bold text-xl">1,650 PHP</p>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant={"outline"}>
              Cancel
            </Button>
            <Button type="button" variant={"default"}>
              Checkout
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
