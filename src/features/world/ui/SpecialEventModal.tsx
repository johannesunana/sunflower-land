import React, { useContext } from "react";

import { SpecialEventName } from "features/game/types/specialEvents";
import { NPCName } from "lib/npcs";
import { Modal } from "react-bootstrap";
import { SpecialEventModalContent } from "./SpecialEventModalContent";
import { Context } from "features/game/GameProvider";
import { useActor } from "@xstate/react";

interface SpecialEventModalProps {
  npc: NPCName;
  eventName: SpecialEventName;
  onClose: () => void;
  show: boolean;
}

export const SpecialEventModal: React.FC<SpecialEventModalProps> = ({
  npc,
  eventName,
  onClose,
  show,
}) => {
  const { gameService } = useContext(Context);
  const [
    {
      context: { state },
    },
  ] = useActor(gameService);

  const event = state.specialEvents.current[eventName];

  if (!event || !event.isEligible) {
    return null;
  }

  return (
    <Modal show={show} centered onHide={onClose}>
      <SpecialEventModalContent
        npcName={npc}
        eventName={eventName}
        onClose={onClose}
        event={event}
      />
    </Modal>
  );
};
