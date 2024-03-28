import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function GridContainer({ children }: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(9rem,1fr)",
        gap: "2rem",
        justifyItems: "center",
      }}
      className="mt-2"
    >
      {children}
    </div>
  );
}

export default GridContainer;
