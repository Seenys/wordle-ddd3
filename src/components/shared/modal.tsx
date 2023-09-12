// React imports
import React, { ReactElement, FC, useCallback } from "react";
// Icons
import { AiOutlineClose } from "react-icons/ai";
import Button from "@/components/shared/button";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  actionLabel: string;
  disabled?: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal: FC<ModalProps> = ({
  isOpen,
  title = "Modal",
  body,
  footer,
  actionLabel,
  disabled,
  onClose,
  onSubmit,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) return;

    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="
        justify-center
        items-center
        flex
        overflow-x-hidden
        overflow-y-auto
        fixed
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-neutral-800
        bg-opacity-50
        dark:text-lightText text-darkBg
    "
      >
        <div
          className="
        relative
        w-full
        h-full
        my-6
        mx-auto
        lg:w-3/4
        lg:h-auto
        lg:max-w-3xl
        "
        >
          {/** Modal content */}
          <div
            className="
            inline-block transform overflow-hidden rounded-lg dark:bg-darkBg bg-lightBgKeyboard px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all lg:w-3/5 sm:my-8 w-full sm:max-w-3/4 sm:p-6 sm:align-middle
            "
          >
            {/** Modal header */}
            <div
              className="
                flex
                items-center
                justify-center
                p-10
                rounded-t

                "
            >
              <h3
                className="
                    text-3xl font-bold leading-6"
              >
                {title}
              </h3>
            </div>
            {/** Modal body */}
            <div className="relative p-4 flex-auto">{body}</div>
            {/** Modal footer */}
            <div className="flex flex-col gap-2 p-10">
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
