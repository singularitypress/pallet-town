import { Container } from "@components/atomic";
import { PaletteContext } from "@components/context";
import React from "react";

export default () => {
  return (
    <Container>
      <h1 className="text-6xl font-bold mb-4">Colours</h1>
      <PaletteContext.Consumer>
        {({ palette, setPalette }) => (
          <>
            {Object.keys(palette).map((paletteCategory, i) => (
              <div key={`${paletteCategory}-${i}`}>
                <h2 className="font-bold mb-4 text-4xl">{paletteCategory}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.keys(palette[paletteCategory]).map(
                    (paletteName, j) => (
                      <li
                        key={`${paletteCategory}-${paletteName}-${j}`}
                        className="rounded-lg"
                      >
                        <ul className="flex">
                          {Object.keys(
                            palette[paletteCategory][paletteName],
                          ).map((colour, k) => {
                            const last =
                              Object.keys(palette[paletteCategory][paletteName])
                                .length - 1;
                            let className = "";
                            switch (k) {
                              case 0:
                                className = "h-24 w-24 mb-4 rounded-l-lg";
                                break;
                              case last:
                                className = "h-24 w-24 mb-4 rounded-r-lg";
                                break;
                              default:
                                className = "h-24 w-24 mb-4";
                                break;
                            }
                            return (
                              <li
                                key={`${paletteCategory}-${paletteName}-${colour}-${j}`}
                                className={className}
                                style={{
                                  backgroundColor: `#${palette[paletteCategory][paletteName][colour]}`,
                                }}
                              >
                                <span className="hidden w-full h-full hover:block">
                                  {colour}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                        <h3 className="mb-4 font-bold text-3x1">
                          {paletteName}
                        </h3>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            ))}
          </>
        )}
      </PaletteContext.Consumer>
    </Container>
  );
};
