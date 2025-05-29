export function GradientDivider({ isScrolled, isOpen}) {
  return (
    <div
      className={`w-[95%] mx-auto transition-all duration-1000 ease-in-out origin-center
        ${isScrolled || isOpen ? "h-0 my-0 scale-x-0" : "h-[1px] my-2 scale-x-100"}
        bg-gradient-to-r from-lilac via-wisteria to-tropical-indigo
      `}
    ></div>
  );
}

export function OuterSpaceDivider({ isScrolled, isOpen}) {
  return (
    <div
      className={`w-[95%] mx-auto transition-all duration-1000 ease-in-out origin-center
        ${isScrolled || isOpen ? "border-t-0 my-0 scale-x-0" : "border-t-[1px] my-2 scale-x-100"}
        border-outer-space
      `}
    ></div>
  );
}

