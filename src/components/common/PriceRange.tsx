"use client";
import { getTrackBackground, Range } from "react-range";

// prop type
type IProps = {
  STEP?: number;
  MIN?: number;
  MAX?: number;
  values?: number[];
  handleChanges: (val: number[]) => void;
};

const PriceRange = ({ STEP = 1, MIN = 0, MAX = 100000, values = [0, 100000], handleChanges }: IProps) => {
  const safeMin = Number.isFinite(MIN) ? MIN : 0;
  const safeMax = MAX && MAX > safeMin ? MAX : safeMin + 100000;
  const safeStep = STEP || 1;
  const safeValues = Array.isArray(values) && values.length === 2 ? values : [safeMin, safeMax];

  return (
    <Range
      step={safeStep}
      min={safeMin}
      max={safeMax}
      values={safeValues}
      onChange={handleChanges}
      renderTrack={({ props, children }) => (
        <div
          {...props}
          key="track"
          style={{
            ...props.style,
            height: "4px",
            width: "100%",
            background: getTrackBackground({
              values: safeValues,
              colors: ["#fff", "#000", "#1B1819"],
              min: safeMin,
              max: safeMax,
            }),
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div
          {...props}
          key={`thumb-${index}`}
          className="ui-input"
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            backgroundColor: "#fff",
            borderRadius: "50px",
            border: "2px solid #000",
          }}
        />
      )}
    />
  );
};

export default PriceRange;
