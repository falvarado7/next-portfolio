import { useState, useEffect, useRef } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { HiMiniBars3 } from "react-icons/hi2";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";

export default function NavLinks() {
  const pathname = usePathname();
  const [selectedLink, setSelectedLink] = useState(pathname);
  const listboxRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setSelectedLink(pathname);
  }, [pathname]);

  const links = [
    {name: 'About', url: '/about'},
    {name: 'Projects', url: '/projects'},
    {name: 'Sandbox', url: '/sandbox'}
  ];

  const handleLinkClick = (url: string) => {
    setSelectedLink(url);
    // Closes the Listbox after setting the selected link
    if (listboxRef.current) {
      listboxRef.current.click(); // Programmatically trigger click to close the Listbox
    }
  };
  
  return (
    <div className="relative mt-2 mx-2">
      <Listbox value={selectedLink} onChange={setSelectedLink}>
        <ListboxButton ref={listboxRef} className="focus:outline-none">
          <HiMiniBars3 size="2rem" />
        </ListboxButton>
        <ListboxOptions 
          className="w-42 absolute right-0 z-10 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl p-2 text-base capitalize shadow-md focus:outline-none sm:text-sm
          bg-slate-100 dark:bg-black"
          transition
        >
        {links.map((link, index) => (
          <ListboxOption
            key={index}
            value={link.url}
            className="relative cursor-default select-none rounded-md py-2 px-4 data-[focus]:bg-gray-300 dark:data-[focus]:bg-white/10"
          >
            {({ selected }) => (                
              <Link href={link.url} onClick={() => handleLinkClick(link.url)}>                
                <span
                  className={`block truncate ${
                    selected || selectedLink === link.url ? "font-medium" : "font-normal"
                  }`}
                >
                  {link.name}
                </span>
              </Link>             
            )}
          </ListboxOption>
        ))}
        </ListboxOptions>
      </Listbox> 
    </div>
  )
}
