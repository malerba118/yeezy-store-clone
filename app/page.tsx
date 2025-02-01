"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "./products";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../lib/utils";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/ui/button";
import { useSearchParams } from "next/navigation";
import { MoveLeftIcon } from "lucide-react";
import { Suspense } from "react";

const ProductGrid = ({
  className,
  selected,
}: {
  className?: string;
  selected: string | null;
}) => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className="fixed inset-0 overflow-auto"
      style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
      animate={{
        scale: selected ? 2 : 1,
        x: selected ? window.innerWidth / 2 - origin.x : 0,
        y: selected ? window.innerHeight / 2 - origin.y : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 11,
        mass: 0.5,
      }}
      inert={!!selected}
    >
      <motion.div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8 p-8 bg-white",
          className
        )}
      >
        {products.map((product) => (
          <Link
            href={`/?selected=${product.id}`}
            key={product.id}
            scroll={false}
            onClick={(e) => {
              // Set the transform origin before navigation
              setOrigin({ x: e.clientX, y: e.clientY });
            }}
          >
            <div>
              <Image
                className="w-full"
                src={product.image}
                alt={product.name}
                width={1920}
                height={1920}
              />
              <p className="text-center">{product.name}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

const ProductList = ({
  className,
  selected,
}: {
  selected: string | null;
  className?: string;
}) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected) {
      listRef.current?.querySelector(`#product-${selected}`)?.scrollIntoView();
    }
  }, [selected]);

  return (
    <motion.div
      ref={listRef}
      className="fixed inset-0 snap-y snap-mandatory overflow-auto bg-white visible"
      key="list"
      initial={{ opacity: 0 }}
      animate={{
        opacity: selected ? 1 : 0,
        pointerEvents: selected ? "all" : "none",
      }}
      transition={{
        // delay: selected ? 0.05 : 0,
        duration: selected ? 0.2 : 0.1,
      }}
      inert={!selected}
    >
      <motion.div className={cn("grid grid-cols-1 p-8", className)}>
        <Link href="/" scroll={false}>
          <Button
            variant="ghost"
            className="fixed left-4 top-4 px-3 rounded-lg"
          >
            <MoveLeftIcon />
          </Button>
        </Link>
        {products.map((product) => (
          <div
            id={`product-${product.id}`}
            key={product.id}
            className="h-screen w-full snap-start"
          >
            <div className="max-w-2xl mx-auto h-full flex flex-col p-12">
              <Image
                className="flex-1 object-contain"
                src={product.image}
                alt={product.name}
                width={1920}
                height={1920}
              />
              <p className="text-center text-lg">{product.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

function MainContent() {
  // Derive the selected product from the query parameter
  const searchParams = useSearchParams();
  const selected = searchParams.get("selected");

  return (
    <div className="">
      <ProductGrid selected={selected} />
      <ProductList selected={selected} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainContent />
    </Suspense>
  );
}
