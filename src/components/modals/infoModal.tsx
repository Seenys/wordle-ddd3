// React Imports
import React, { useEffect, useState, useCallback } from "react";
// Hooks
import useInfoModal from "@/hooks/useInfoModal";
// Components
import Modal from "@/components/shared/modal";
import { Cell } from "@/components/grid/cell";
import useWordleStore from "@/store/useWordleStore";

type Props = {};

const InfoModal = (props: Props) => {
  const infoModal = useInfoModal();
  const { playState } = useWordleStore();

  const onSubmit = (): void => {
    infoModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra oculta en cinco intentos.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Cada intento debe ser una palabra válida de 5 letras.
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Después de cada intento el color de las letras cambia para mostrar qué
        tan cerca estás de acertar la palabra.
      </p>

      <p className="text-sm font-bold text-gray-500 dark:text-gray-300">
        Ejemplos
      </p>
      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="G" styles="bg-green" />
        <Cell value="A" styles="bg-darkBg border border-solid" />
        <Cell value="T" styles="bg-darkBg border border-solid" />
        <Cell value="O" styles="bg-darkBg border border-solid" />
        <Cell value="S" styles="bg-darkBg border border-solid" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra G está en la palabra y en la posición correcta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" styles="bg-darkBg border border-solid" />
        <Cell value="O" styles="bg-darkBg border border-solid" />
        <Cell value="C" styles="bg-yellow" />
        <Cell value="A" styles="bg-darkBg border border-solid" />
        <Cell value="L" styles="bg-darkBg border border-solid" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra C está en la palabra pero en la posición incorrecta.
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" styles="bg-darkBg border border-solid" />
        <Cell value="O" styles="bg-darkBg border border-solid" />
        <Cell value="A" styles="bg-darkBg border border-solid" />
        <Cell value="L" styles="bg-darkBg border border-solid" />
        <Cell value="C" styles="bg-gray" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra O no está en la palabra.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Puede haber letras repetidas. Las pistas son independientes para cada
        letra.
      </p>
      <p className="mt-6 italic text-sm text-gray-500 text-center dark:text-gray-300">
        ¡Una palabra nueva cada 5 minutos!
      </p>
    </div>
  );

  return (
    <Modal
      title="Cómo jugar"
      actionLabel="!JUGAR¡"
      onSubmit={onSubmit}
      onClose={infoModal.onClose}
      isOpen={infoModal.isOpen}
      body={bodyContent}
    />
  );
};

export default InfoModal;
