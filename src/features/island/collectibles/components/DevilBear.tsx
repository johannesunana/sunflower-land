import React from "react";

import bear from "assets/sfts/bears/devil_bear.png";
import { PIXEL_SCALE } from "features/game/lib/constants";
import { SFTDetailPopover } from "components/ui/SFTDetailPopover";

export const DevilBear: React.FC = () => {
  return (
    <SFTDetailPopover name="Devil Bear">
      <div
        className="absolute"
        style={{
          width: `${PIXEL_SCALE * 21}px`,
          bottom: `${PIXEL_SCALE * 0}px`,
          left: `${PIXEL_SCALE * -2}px`,
        }}
      >
        <img
          src={bear}
          style={{
            width: `${PIXEL_SCALE * 21}px`,
          }}
          alt="Devil Bear"
        />
      </div>
    </SFTDetailPopover>
  );
};
