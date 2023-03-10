import React, { createContext, useEffect, useState } from "react";
import BootstrapToast from "react-bootstrap/Toast";

export enum ToastLevel {
  Error = "danger",
  Info = "info",
  Primary = "primary",
  Secondary = "secondary",
  Success = "success",
  Warning = "warning",
}

export type ToastInfo = {
  message: string;
  level: ToastLevel;
};

type ToastSenders = {
  sendToast: (message: string, level?: ToastLevel) => void;
  sendErrorToast: (message: string) => void;
  sendInfoToast: (message: string) => void;
  sendSuccessToast: (message: string) => void;
};

type ToastMessage = {
  msg: string;
  type: string;
  flip: boolean;
}

/**
 * This context gives access to `sendToast`, a function taking a `message` and a
 * `ToastLevel`.
 * The default `ToastLevel` is `ToastLevel.Success`.
 *
 * It also gives access to some shortcuts: `sendSuccessToast`, `sendInfoToast`,
 * and `sendErrorToast`.
 *
 * Examples:
 * ```
 * { sendToast, sendSuccessToast, sendErrorToast } = useContext(ToastContext);
 *
 * sendToast("Piche."); // ToasLevel.Success by default.
 * sendToast("Poche.", ToastLevel.Error);
 * sendSuccessToast("Biche.");
 * sendErrorToast("Bûche.");
 * ```
 */
export const ToastContext = createContext<ToastSenders>({
  sendToast: () => { },
  sendErrorToast: () => { },
  sendInfoToast: () => { },
  sendSuccessToast: () => { },
});

/* Two calls to the "newToast" function with the same parameters won't
 * trigger a new toast to show because the "useEffect" only depends on the message.
 * We introduce a "flip" variable that is changed when the function is called.
 * It is given as a dependency of the useEffect and thus will trigger a new toast to show.
 */

type ToastProps = {
  children: React.ReactNode;
}

export const ToastProvider: React.FunctionComponent<ToastProps> = ({ children }) => {
  const [toast, setToast] = useState<ToastInfo | null>(null);
  const [flip, setFlip] = useState(false);

  const sendToast = (message: string, level = ToastLevel.Success) => {
    setToast({
      message,
      level,
    });
    setFlip(!flip);
  };

  const sendSuccessToast = (message: string) => {
    setToast({
      message,
      level: ToastLevel.Success,
    });
    setFlip(!flip);
  };

  const sendInfoToast = (message: string) => {
    setToast({
      message,
      level: ToastLevel.Info,
    });
    setFlip(!flip);
  };

  const sendErrorToast = (message: string) => {
    setToast({
      message,
      level: ToastLevel.Error,
    });
    setFlip(!flip);
  };

  return (
    <>
      {toast && (
        <Toast msg={toast.message} type={toast.level} flip={flip} />
      )}
      <ToastContext.Provider
        value={{
          sendToast,
          sendSuccessToast,
          sendInfoToast,
          sendErrorToast,
        }}
      >
        {children}
      </ToastContext.Provider>
    </>
  );
};



export const Toast = ({ msg, type, flip }: ToastMessage) => {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState(msg);

  useEffect(() => {
    setShow(true);
    setMessage(msg);
  }, [msg, flip]);

  return (
    <BootstrapToast
      style={{
        position: "fixed",
        top: "50px",
        left: "50vw",
        transform: "translateX(-50%)",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(0, 0, 0, 0.32)",
        zIndex: 9999,
      }}
      autohide
      delay={5000}
      onClose={() => {
        setShow(false);
      }}
      show={show}
    >
      <BootstrapToast.Body className={"text-" + type}>
        {message}
      </BootstrapToast.Body>
    </BootstrapToast>
  );
};
