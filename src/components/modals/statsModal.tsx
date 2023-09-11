// React Imports
import React, { useEffect, useState, useCallback } from "react";
// Hooks
import useInfoModal from "@/hooks/useInfoModal";
// Components
import Modal from "@/components/shared/modal";
import useStatsModal from "@/hooks/useStatsModal";
import useWordleStore from "@/store/useWordleStore";

type Props = {};

const StatsModal = (props: Props) => {
  const statsModal = useStatsModal();
  const wordleStore = useWordleStore();

  const onSubmit = (): void => {
    if (wordleStore.playState === "loss" || wordleStore.playState === "win") {
      window.location.reload();
      wordleStore.resetStores();
    }
    statsModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row mb-1 mt-4 justify-between">
        <div className="flex flex-col m-auto w-auto  text-center">
          <p className="text-2xl font-bold mb-3.5">{wordleStore.loss}</p>

          <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
            Jugadas
          </p>
        </div>
        <div className="flex flex-col m-auto w-auto text-center">
          <p className="text-2xl font-bold mb-3.5">{wordleStore.win}</p>
          <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
            Victorias
          </p>
        </div>
      </div>

      <p className="mt-6 italic text-sm text-gray-500 text-center dark:text-gray-300">
        {wordleStore.playState === "loss" ? (
          <>
            La palabra era:{" "}
            <span className=" font-bold ">{wordleStore.word}</span>{" "}
          </>
        ) : (
          ""
        )}
      </p>
      <p className="mt-6 italic text-sm text-gray-500 text-center dark:text-gray-300">
        SIGUIENTE PALABRA
        <br />
        <span className=" font-bold ">test</span>
      </p>
    </div>
  );

  return (
    <Modal
      title="Estadísticas"
      actionLabel={
        wordleStore.playState === "loss" ? "Jugar de nuevo" : "Aceptar"
      }
      onSubmit={() => onSubmit()}
      onClose={statsModal.onClose}
      isOpen={statsModal.isOpen}
      body={bodyContent}
    />
  );
};

export default StatsModal;
