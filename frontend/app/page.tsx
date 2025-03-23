'use client'

import { Button } from "@/components/ui/button";
export default function Home() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="">
      <Button className="bg-blue-500"
        onClick={handleClick}
        >Click me!
      </Button>
    </div>
  );
}
