'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from '@/components/ui/command';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { IoCheckbox, IoCheckmark } from "react-icons/io5";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";

export type ComboboxOptions = {
    value: string;
    label: string;
};

type Mode = 'single' | 'multiple';

interface ComboboxProps {
    mode?: Mode;
    options: ComboboxOptions[];
    selected: string | string[]; // Updated to handle multiple selections
    className?: string;
    placeholder?: string;
    onChange?: (event: string | string[]) => void; // Updated to handle multiple selections
    onCreate?: (value: string) => void;
}

export function Combobox({
                             options,
                             selected,
                             className,
                             placeholder,
                             mode = 'single',
                             onChange,
                             onCreate,
                         }: ComboboxProps) {
    const [open, setOpen] = React.useState(false);
    const [query, setQuery] = React.useState<string>('');
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const optionRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

    const filteredOptions = query === ''
        ? options
        : options.filter(option =>
            option.label.toLowerCase().includes(query.toLowerCase())
        );

    React.useEffect(() => {
        if (filteredOptions.length > 0 && optionRefs.current[selectedIndex]) {
            optionRefs.current[selectedIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }, [selectedIndex, filteredOptions]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredOptions.length);
        } else if (event.key === 'ArrowUp') {
            setSelectedIndex((prevIndex) =>
                prevIndex === 0 ? filteredOptions.length - 1 : prevIndex - 1
            );
        } else if (event.key === 'Enter') {
            if (filteredOptions.length > 0) {
                const selectedOption = filteredOptions[selectedIndex];
                handleSelect(selectedOption.value);
            }
        }
    };

    const handleSelect = (optionValue: string) => {
        if (onChange) {
            if (mode === 'multiple' && Array.isArray(selected)) {
                onChange(
                    selected.includes(optionValue)
                        ? selected.filter(item => item !== optionValue)
                        : [...selected, optionValue]
                );
            } else {
                onChange(optionValue);
            }
        }
        setQuery(options.find(option => option.value === optionValue)?.label || '');
        setOpen(false);
    };

    return (
        <HoverCard  open={open} onOpenChange={setOpen}>
            <HoverCardTrigger asChild>
                <Input
                    placeholder={placeholder}
                    value={query}
                    onFocus={() => setOpen(true)}
                    onBlur={() => setOpen(false)}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setQuery(e.target.value)}
                    className={className}
                />
            </HoverCardTrigger>
            <HoverCardContent className="z-[9999] p-1" align="start">
                <ScrollArea>
                    <div className="flex flex-col max-h-72">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, index) => (
                                <Button
                                    key={option.label}
                                    ref={(el) => optionRefs.current[index] = el}
                                    variant={selectedIndex === index ? 'secondary' : 'ghost'}
                                    className="justify-start h-7 font-normal px-0"
                                    onClick={() => handleSelect(option.value)}
                                >
                                    <IoCheckmark
                                        className={cn(
                                            'mr-2 h-4 w-4',
                                            Array.isArray(selected)
                                                ? selected.includes(option.value)
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                                : selected === option.value
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                        )}
                                    />
                                    {option.label}
                                </Button>
                            ))
                        ) : (
                            <Button disabled variant={"ghost"}>No results found</Button>
                        )}
                    </div>
                </ScrollArea>
            </HoverCardContent>
        </HoverCard>
    );
}
