// React Imports
import React, { useEffect, useState, useCallback } from "react";
// Hooks
import useInfoModal from "@/hooks/useInfoModal";
// Components
import Modal from "@/components/shared/modal";
import { Cell } from "@/components/grid/cell";
import useStatsModal from "@/hooks/useStatsModal";
import useStatsStore from "@/hooks/useStatsStore";
import Countdown from "react-countdown";

type Props = {};

const StatsModal = (props: Props) => {
  const statsModal = useStatsModal();
  const statsStore = useStatsStore();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = (): void => {
    statsModal.onClose();
  };
  const handleIsComplete = () => {
    statsStore.setTimeComplete();
    statsStore.setPlayState("loss");
    statsModal.onOpen();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row mb-1 mt-4 justify-between">
        <div className="flex flex-col m-auto w-auto  text-center">
          <p className="text-2xl font-bold mb-3.5">{statsStore.loss}</p>

          <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
            Jugadas
          </p>
        </div>
        <div className="flex flex-col m-auto w-auto text-center">
          <p className="text-2xl font-bold mb-3.5">{statsStore.win}</p>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
            Victorias
          </p>
        </div>
      </div>

      <p className="mt-6 italic text-sm text-gray-500 text-center dark:text-gray-300">
        {statsStore.playState === "loss" ? (
          <>
            La palabra era:{" "}
            <span className=" font-bold ">{statsStore.answer}</span>{" "}
          </>
        ) : (
          ""
        )}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 text-center dark:text-gray-300">
        SIGUIENTE PALABRA
        <br />
        <span className=" font-bold ">
          <Countdown
            date={Date.now() + 10000}
            onComplete={() => handleIsComplete()}
          />
          ,
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      title="Estadísticas"
      actionLabel="Aceptar"
      onSubmit={onSubmit}
      onClose={statsModal.onClose}
      isOpen={statsModal.isOpen}
      body={bodyContent}
    />
  );
};

export default StatsModal;
