"use client";

import {cn} from "@/lib/utils";
import {Card} from "@nextui-org/card";
import React, {useEffect, useRef, useState} from "react";

export const InfiniteMovingCards = ({items, direction = "left", speed = "fast", pauseOnHover = false, className,}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);
    const scrollerRef = React.useRef<HTMLUListElement>({} as HTMLUListElement);


    const addAnimationRef = useRef(addAnimation);

    useEffect(() => {
        addAnimationRef.current();
    }, []);
    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative max-w-fit  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 px-4 pt-16 lg:px-8 lg:py-8 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <Card
                        className={"w-[350px] max-w-full px-8 py-6 md:w-[450px]"}

                        key={item.name}
                    >
                            <span className=" relative z-20 text-sm leading-[1.6] font-semibold text-[#506ee4]/85">
                                {item.quote}
                            </span>
                        <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] text-muted-foreground font-black">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] text-muted-foreground">
                                        {item.title}
                                    </span>
                                </span>
                        </div>
                    </Card>
                ))}
            </ul>
        </div>
    );
};