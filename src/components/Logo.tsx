export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 160 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Box/Package icon */}
      <path d="M4 12L20 4L36 12V28L20 36L4 28V12Z" fill="white" opacity="0.15" />
      <path d="M4 12L20 20L36 12" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M20 20V36" stroke="white" strokeWidth="1.5" />
      <path d="M4 12V28L20 36" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M36 12V28L20 36" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M12 8L28 16" stroke="white" strokeWidth="1.5" opacity="0.5" />
      {/* CHINABOX text */}
      <text
        x="46"
        y="27"
        fontFamily="monospace"
        fontSize="14"
        fontWeight="600"
        fill="white"
        letterSpacing="1"
      >
        CHINABOX
      </text>
    </svg>
  );
};
