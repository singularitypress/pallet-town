import React, {
  createContext,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface IPalette {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}

const defaultPalette: IPalette = {
  Miscellaneous: {
    Default: {
      "Khaki Web": "CEB992",
      Xanadu: "73937E",
      "Dark Liver": "585563",
      "Old Mauve": "5B2E48",
      "Dark Sienna": "471323",
    },
    Pastel: {
      "Pink Lavender": "cdb4db",
      "Orchid Pink": "ffc8dd",
      "Nadeshiko Pink": "ffafcc",
      "Uranian Blue": "bde0fe",
      "Baby Blue Eyes": "a2d2ff",
    },
  },
};

export const PaletteContext = createContext({
  palette: defaultPalette,
  setPalette: (palette: IPalette) => {},
});

export const PaletteProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState<IPalette>(defaultPalette);
  const isMounted = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ls =
        localStorage.getItem("palette") ?? JSON.stringify(defaultPalette);
      setPalette(JSON.parse(ls));
    }
    return () => {
      isMounted.current = true;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isMounted.current) {
        localStorage.setItem("palette", JSON.stringify(palette));
      }
    }

    return () => {
      isMounted.current = true;
    };
  }, [palette]);

  return (
    <PaletteContext.Provider value={{ palette, setPalette }}>
      {children}
    </PaletteContext.Provider>
  );
};
